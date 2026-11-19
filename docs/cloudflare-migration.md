# rgbatohex.com：从 Vercel 迁移到 Cloudflare Workers（静态托管）

> 结论先说：**能迁，而且这个站几乎是为静态托管量身定做的**——178 个页面全部是纯静态内容，没有 API、没有 SSR、没有 ISR、没有 Server Action、没有动态路由段。迁移后由 Cloudflare 静态资源层直接返回 HTML/CSS/JS，**不消耗 Worker 调用、没有冷启动**，免费额度下静态请求不计费。

---

## 0. 现状诊断（为什么站点现在是 402）

```
$ curl -sI https://rgbatohex.com/
HTTP/2 402
server: cloudflare
x-vercel-error: DEPLOYMENT_DISABLED
```

- 不是代码问题，也不是域名/证书问题：**Vercel 侧把该项目的部署停用了**（`DEPLOYMENT_DISABLED`，通常是账户欠费/项目被暂停）。代码本身构建完全正常。
- 域名侧现状（已核实）：
  - 注册商：**Cloudflare, Inc.**（域名本身就在 Cloudflare，到期 2027-02-08）
  - NS：`cody.ns.cloudflare.com` / `olivia.ns.cloudflare.com` → **DNS 解析本来就在 Cloudflare**
  - 当前 A 记录被 Cloudflare 代理（橙云）指向 Vercel 源站
- 这意味着：**不需要转域名、不需要改 NS、不需要等 24~48 小时生效**。只要在同一个 Cloudflare 账号里部署 Worker，用 **Workers 路由**接管 `rgbatohex.com/*` 即可，连 DNS 记录都不用改（原 Vercel 的代理记录原样保留，路由优先级高于回源）。

---

## 1. 方案选择

| 方案 | 适合场景 | 本项目的取舍 |
| --- | --- | --- |
| **A. `output: 'export'` 静态导出 → Workers 静态资源（已采用）** | 纯静态站点 | ✅ 零运行时成本、无冷启动、构建产物就是 HTML；代价是失去 middleware（已用 `_headers` 等价替代）和 Next 图片优化（本站图片是 SVG/小图，无影响） |
| B. `@opennextjs/cloudflare` 保留 Next 运行时 | 需要 SSR / ISR / Route Handler / middleware / Server Action | ❌ 当前不需要；会引入 Worker 请求额度、冷启动、Node 兼容层，运维复杂度明显更高 |

**为什么选 A：** 全站没有任何服务端逻辑，走 B 相当于为了保留一个只设置响应头的 middleware，把整个站点塞进 Worker 运行时，既多花钱又多故障点。以后真的需要服务端能力时再切 B（见第 9 节），迁移成本不高。

---

## 2. 已完成的代码改动（可直接部署）

| 文件 | 改动 | 原因 |
| --- | --- | --- |
| `next.config.ts` | 加 `output: 'export'`、`images: { unoptimized: true }`；删除重复的 `next.config.js` | Next 的配置查找顺序是 `next.config.js` → `.mjs` → `.ts`，原来 `.js` 优先生效，`.ts` 是**永远不会被加载的死配置**；两套并存极易改错文件。静态导出必须关掉默认图片优化 loader，否则构建直接报 `ExportError`（全站 47 处 `<Image>`） |
| `src/app/tools/design-token-color-exporter/page.tsx` + 新增 `ClientEntry.tsx` | 唯一一个 `async` 服务端页面（`await searchParams`）改成「服务端默认渲染 + 客户端挂载后读 URL query」 | 这是全站唯一的动态路由；`searchParams` 会让页面无法预渲染，是静态导出的硬阻塞。改成 effect 读取而不是 `useSearchParams`，是为了让**工具 UI 仍然被预渲染进 HTML**（`useSearchParams` + Suspense 会让构建产物只剩 Loading 占位）。4 个 query 参数（`source` / `tokenName` / `scale` / `roles`）行为不变，只在带参跳转时挂载后重挂一次 |
| `src/app/robots.ts`、`src/app/sitemap.ts` | 加 `export const dynamic = 'force-static'` | `output: 'export'` 下 metadata 路由必须显式声明静态，否则构建报 `Failed to collect page data for /robots.txt` |
| `public/_headers`（新增） | 等价复现原 `src/middleware.ts` 的三类响应头 | 静态导出不支持 middleware，Cloudflare 用 `_headers` 文件在边缘给静态资源加头 |
| `src/middleware.ts` | 删除 | 同上（逻辑已 1:1 搬到 `_headers`，见第 3 节） |
| `wrangler.jsonc`（新增） | Workers 静态资源目录 `./out`、`not_found_handling: "404-page"`、路由 `rgbatohex.com/*` | 部署配置；assets-only，没有 `main` 脚本 |
| `wrangler.www.jsonc` + `scripts/www-redirect.js`（新增） | 独立 Worker 接管 `www.rgbatohex.com/*`，301 到主域 | 不依赖面板 Redirect Rule 的 www 跳转 |
| `package.json` | `start` 改为 `wrangler dev`；新增 `preview` / `deploy` / `deploy:dry-run`；devDependencies 加 `wrangler` | `next start` 在 `output: 'export'` 下不可用 |
| `.github/workflows/deploy-cloudflare.yml`（新增） | push `master` 自动 build + deploy | CI 部署 |
| `package-lock.json` | 501 个 `registry.npmmirror.com` 的 `resolved` URL 改回 `registry.npmjs.org` | npm 12 默认 `allow-remote=none`，会把镜像 tarball URL 当成"远程依赖"拒绝安装（实测报 `Fetching packages of type "remote" have been disabled`）。改回官方 registry 后 `npm install/ci` 恢复正常 |
| `public/.assetsignore`（新增） | 忽略 `.DS_Store` | `public/` 里的 macOS 垃圾文件会被一起上传成可访问资源 |

构建产物：`out/` 共 **717 个文件 / 21 MB**，其中 **179 个 HTML**（178 个页面 + `404.html`），另含 `_headers`、`sitemap.xml`、`robots.txt`、`_next/` 静态资源。

---

## 3. middleware → `_headers` 的等价性

原 `src/middleware.ts` 做的事（matcher 里的 catch-all 已经吞掉了那 12 条精确模式）：

- 12 个 `startsWith` 前缀（可被任意站点 iframe 嵌入）：`X-Frame-Options: ALLOWALL` + `Content-Security-Policy: frame-ancestors *`
- 其中 8 个同时是 noindex：额外 `X-Robots-Tag: noindex, follow`
- 其余所有页面：`X-Frame-Options: SAMEORIGIN` + `Content-Security-Policy: frame-ancestors 'self'`

Cloudflare 的 `_headers` **同名头会逗号合并**（实测 `/tools/color-converter` 同时命中 `/*` 和窄规则时会得到 `x-frame-options: SAMEORIGIN, ALLOWALL`；CSP 则会变成 `frame-ancestors 'self', frame-ancestors *`，浏览器按交集收紧成 `'self'`，嵌入会直接失败）。所以 `public/_headers` 用了官方支持的 **`! 头名` 先删除再重设** 写法，顺序是「`/*` 兜底在前 → 窄规则在后」：

```
/*
  X-Frame-Options: SAMEORIGIN
  Content-Security-Policy: frame-ancestors 'self'

/tools/color-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow
...
```

> 原 middleware 给可嵌入页设的是 `X-Frame-Options: ALLOWALL`，这**不是合法值**（浏览器会忽略整个头），真正起作用的一直是 CSP。所以这里先删除 `X-Frame-Options`、不再输出该头，只保留 `frame-ancestors *`——行为等价，而且不再产生非法头。

本地实测结果（`wrangler dev`，与线上同一套静态资源逻辑）：

| 请求 | 状态 | X-Frame-Options | CSP | X-Robots-Tag |
| --- | --- | --- | --- | --- |
| `/` | 200 | `SAMEORIGIN` | `frame-ancestors 'self'` | — |
| `/tools/color-converter` | 200 | 不输出 | `frame-ancestors *` | `noindex, follow` |
| `/tools/minecraft-color-codes` | 200 | 不输出 | `frame-ancestors *` | — |
| `/tools/rgb-to-hex/` | 307 | `SAMEORIGIN` | `frame-ancestors 'self'` | — |
| `/tools/not-exist` | 404 | `SAMEORIGIN` | `frame-ancestors 'self'` | — |
| `/_next/static/chunk.js` | 200 | `SAMEORIGIN` | `frame-ancestors 'self'` | `Cache-Control: public, max-age=31536000, immutable` |

> 唯一的细微差异：原 middleware 的 noindex 是 8 个**精确路径**，`_headers` 里改成了**前缀**匹配。这 8 个路径本身没有子路由，实际无影响；`/api`、`/_next/*` 会被兜底规则命中（只多加两个无害的头）。

---

## 4. 部署步骤（已实际执行并上线）

### 4.1 前置条件

- 一个 Cloudflare 账号，**必须就是托管 `rgbatohex.com` 这个 zone 的账号**（Worker 路由/自定义域名都要求同账号；账号 ID 在 Cloudflare 面板右侧栏 / `wrangler whoami` 能看到）。
- Node.js 22+，构建产物体积远低于平台限额：**717 个文件 / 21 MB**（限额 20,000 文件/版本），最大单文件 1.2 MB（限额 25 MiB）。

### 4.2 本地先跑通（不碰线上）

```bash
npm install          # 已修复 lockfile 的镜像 URL，npm 12 可直接安装
npm run build        # 产出 out/，全静态
npm run preview      # = wrangler dev，本地 http://localhost:8787 模拟线上
```

逐项自测（另一终端）：

```bash
curl -sI http://localhost:8787/ | grep -iE 'HTTP|x-frame|content-security'
curl -sI http://localhost:8787/tools/color-converter | grep -iE 'x-frame|x-robots'
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8787/tools/not-exist   # 404
curl -sI http://localhost:8787/tools/rgb-to-hex/ | grep -i location              # 307 → /tools/rgb-to-hex
curl -s http://localhost:8787/sitemap.xml | head -3
```

### 4.3 部署（实际执行的命令）

```bash
npx wrangler login     # 浏览器 OAuth，选中持有 rgbatohex.com 的账号
npm run deploy         # = build + wrangler deploy + wrangler deploy -c wrangler.www.jsonc
```

部署产物：

| 资源 | 内容 | 接管方式 |
| --- | --- | --- |
| Worker `rgba-to-hex` | assets-only（`out/`，无 `main`） | Workers 路由 `rgbatohex.com/*` |
| Worker `rgba-to-hex-www` | 极小的 301 脚本 | Workers 路由 `www.rgbatohex.com/*` |

**没有改动任何 DNS 记录。**

> 为什么用 Workers 路由而不是「自定义域名」：一开始按 `custom_domain: true` 部署，API 返回
> `100117: Hostname 'rgbatohex.com' already has externally managed DNS records`。apex 的 A 记录是当年 Vercel 写进去的代理记录，删除它需要 `DNS:Edit` 权限；而 **Workers 路由可以直接覆盖已代理（橙云）主机名的回源目标**，无需删除任何记录，邮件等其它 DNS 记录完全不受影响，切换也是瞬时生效。
>
> 如果以后想改成 Custom Domain：先在 DNS 里删掉 apex/www 的旧代理记录，再把 `wrangler.jsonc` 的 `routes` 换回 `custom_domain: true`，或在面板 Workers → Settings → Domains & Routes 添加。

### 4.4 www → 主域 301

由独立 Worker `rgba-to-hex-www`（源码 [scripts/www-redirect.js](../scripts/www-redirect.js)）完成：所有 `www.rgbatohex.com` 请求返回 `301 https://rgbatohex.com<path><query>`。不依赖面板 Redirect Rule、不需要额外 API 权限，跟着 git 一起版本化。

### 4.5 CI 自动部署（可选，推荐）

1. Cloudflare 面板 → My Profile → API Tokens → Create Token，权限：
   - Account · Workers Scripts · **Edit**
   - Zone · Workers Routes · **Edit**
   - Zone · Read
   - Zone Resources 限定到 `rgbatohex.com`
   （用 Workers 路由方案**不需要 DNS Edit**）
2. GitHub 仓库 → Settings → Secrets and variables → Actions，加：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. 之后 push 到 `master` 会自动 build + 部署两个 Worker（`.github/workflows/deploy-cloudflare.yml`）。

---

## 5. 上线验证清单

按顺序做，全部通过再摘掉 Vercel 侧的旧记录：

```bash
# 1) 站点恢复 200（不再是 402）
curl -sI https://rgbatohex.com/ | head -5

# 2) 安全头与 embed 放行（默认页应看到 SAMEORIGIN + frame-ancestors 'self'）
curl -sI https://rgbatohex.com/tools/color-converter | grep -iE 'x-frame|content-security|x-robots'  # 应看到 frame-ancestors * 与 noindex
curl -sI https://rgbatohex.com/ | grep -iE 'x-frame|content-security'

# 3) 404 是真 404（带 Next 的 404 页面，不是软 404）
curl -s -o /dev/null -w '%{http_code}\n' https://rgbatohex.com/tools/not-exist

# 4) 带斜杠 URL 收敛到不带斜杠（避免重复收录）
curl -sI https://rgbatohex.com/tools/rgb-to-hex/ | grep -iE 'HTTP|location'

# 5) SEO 文件
curl -s https://rgbatohex.com/robots.txt
curl -s https://rgbatohex.com/sitemap.xml | head -3

# 6) 静态资源长缓存
curl -sI "https://rgbatohex.com/_next/static/chunks/$(ls out/_next/static/chunks | grep '^main-app-' | head -1)" | grep -i cache-control
```

**上线实测（2026-11-19，已执行）**

| 请求 | 结果 |
| --- | --- |
| `https://rgbatohex.com/` | **200**，`<title>` 正常，`X-Frame-Options: SAMEORIGIN` + `frame-ancestors 'self'` |
| `https://www.rgbatohex.com/` | **301** → `https://rgbatohex.com/` |
| `/tools/color-converter` | 200，`frame-ancestors *` + `X-Robots-Tag: noindex, follow` |
| `/tools/not-exist` | **404** + Next 的 404 页面（真 404，不是软 404） |
| `/tools/rgb-to-hex/` | **307** → `/tools/rgb-to-hex` |
| `/sitemap.xml`、`/robots.txt` | 200，内容与迁移前一致 |
| `/_next/static/...` | 200，`Cache-Control: public, max-age=31536000, immutable` |
| `X-Vercel-Error: DEPLOYMENT_DISABLED` | 已消失 |

浏览器侧再确认：

- [ ] 首页、`/tools/*`、`/blog/*`、`/color-shades/*` 各抽 2~3 个页面，交互（取色、转换、复制）正常；
- [ ] 用 `view-source:` 看 `<title>`、canonical、`hreflang` 与迁移前一致；
- [ ] 随便找 2 个 embed 工具页（`/tools/color-converter`、`/tools/gradient-generator-tool`）写个测试 HTML 用 `<iframe>` 嵌入，确认没有被 frame 拦截；
- [ ] Google Search Console：重新提交 `https://rgbatohex.com/sitemap.xml`，观察「网页」报告 2~4 周；Cloudflare 换 IP 不会影响收录，但建议同时确认 GSC 的 DNS 验证记录还在（CNAME/TXT 未被覆盖）；
- [ ] Google Analytics / AdSense / Clarity：`layout.tsx` 里的脚本是外链，不受托管变更影响，但注意 **AdSense 的站点审核**可能因为 IP/ASN 变化重新排队。

---

## 6. 与 Vercel 的行为差异

| 项 | Vercel | Cloudflare（本次方案） | 影响 |
| --- | --- | --- | --- |
| 渲染 | 静态预渲染 + 边缘缓存 | 静态文件直接由 Workers 静态资源层返回 | 无差异，通常更快 |
| 图片优化 | `/_next/image` 按需转码 | `images.unoptimized` → 直接输出 `<img>` | 本站 47 处 `<Image>` 全是 `public/*.svg`/小图且宽高已固定，无实际损失；不要引入大尺寸 JPG 后再指望自动优化 |
| middleware | Edge middleware 执行 | 无（改由 `_headers` 静态加头） | 若以后要做 A/B、鉴权、重写，需要改回 OpenNext 或加 Worker |
| ISR / `revalidate` | 支持 | 不支持（本来也没用） | 无 |
| 404 | Vercel 404 页 | `not_found_handling: "404-page"` → 返回 `404.html` 且状态码 404 | 一致 |
| 带斜杠 URL | 308 → 无斜杠 | 307 → 无斜杠（`auto-trailing-slash`） | SEO 等价，都只有一个规范 URL |
| 压缩 | gzip/br | gzip/br（实测 `Content-Encoding: br`） | 一致 |
| 构建 | Vercel 构建机 | 本地 / GitHub Actions（`next/font/google` 构建期需要联网拉字体） | CI 里不要禁用外网 |
| 预览部署 | 每次 PR 一个 URL | 默认没有；可加 `wrangler versions upload` 或再建一个 preview Worker | 非必须 |

---

## 7. 回滚方案

切换前后都留好退路：

1. **Cloudflare 侧回滚代码**：`npx wrangler rollback`（回上一个版本），或在面板 Workers → Deployments 里一键回滚；Git 层面 `git revert` 后重新 deploy。
   想整体停用：`npx wrangler delete`（主站）与 `npx wrangler delete -c wrangler.www.jsonc`（www），删除 Worker 时路由一并移除，流量会回落到 DNS 记录原来的回源（即 Vercel，当前 402）。
2. **回 Vercel**：切换前把当前 DNS 记录截图/导出（`rgbatohex.com` 与 `www` 的 A/CNAME 目标值）。Vercel 恢复计费后，把自定义域名的解析改回 Vercel 提供的目标（通常是 `cname.vercel-dns.com` 或 `76.76.21.21`），TTL 建议提前降到 300s。
3. **域名本身**：注册商和 NS 都在 Cloudflare，Cloudflare 挂掉才会影响解析；这与是否用 Vercel 无关，不属于本次迁移风险。

### 7.1 Vercel 项目怎么收尾（会不会出现"两个项目"）

**不会出现两个站点同时对外服务。** Cloudflare 的 Workers 路由是在边缘按主机名+路径截流的：`rgbatohex.com/*`、`www.rgbatohex.com/*` 的请求会直接进入 Workers 静态资源，**根本不会发到 Vercel**。Vercel 那边即使恢复计费/解除停用，也"抢不回"域名——它只是 DNS 记录里的旧回源，而路由优先级高于回源。

但它确实还是"两套部署并存"，建议按下面顺序收尾：

| 顺序 | 操作 | 说明 |
| --- | --- | --- |
| 1 | 先观察 2~3 天 | 目前线上已全绿（180 条路由 200、404/301/缓存都对） |
| 2 | Vercel → 项目 → Settings → Domains | 删掉 `rgbatohex.com` 和 `www.rgbatohex.com` 两个绑定，避免以后误点 Redeploy / 改 DNS |
| 3 | 项目 Pause（想留回滚）或 Delete（彻底） | Pause 后不消耗构建/带宽，也还能一键恢复 |
| 4 | （可选）Cloudflare DNS 清理 | 删掉 apex/www 那两条旧的代理 A 记录，再把 `wrangler.jsonc` 换回 `custom_domain: true`（或在面板加 Custom Domain），让 Cloudflare 自己管理 DNS。需要 DNS 编辑权限，不做也完全不影响访问 |

注意两点：

- **不要先删 Worker 路由**：路由一删，流量会回落到 DNS 旧回源（Vercel）。如果那时 Vercel 已经恢复，站点会突然变回旧版本，很容易误判。正确顺序是「先 pause Vercel，再考虑动路由」。
- 顺带发现：`rgba-to-hex.vercel.app` 是本项目的部署别名（当前 402，已不对外）；`rgbatohex.vercel.app` 是一个无关的 "Create Next App" 空项目。不需要的话可以一起清掉。
- 邮件（MX/SPF/DKIM/TXT）一条都没动，迁移不影响收发信。

**2026-11-19 实际操作记录（已在浏览器里完成）**

- 在 Vercel 项目的 Settings → Domains 里移除了 `rgbatohex.com`，弹窗提示会连同指向它的 `www.rgbatohex.com` 一起移除，确认后两者都已解绑；账号级 Domains 列表里已搜不到 `rgbatohex.com`。
- 项目本身按你的选择**保留**（未删除，方便随时回滚）。它当前被 Vercel 暂停，原因不是欠费，而是 **Hobby 公平使用额度超限**：`Fluid Active CPU 7h36m / 4h`、`Fast Origin Transfer 7.5GB / 10GB`、`CDN Requests 505K / 1M`、`Edge Middleware 91K / 1M`，暂停开始 2026-11-18，**自动恢复时间 2026-12-18**。
- 保留项目的唯一副作用：12/18 恢复后 `rgba-to-hex.vercel.app`（Vercel 默认别名）会重新可访问。它有 canonical 指向 `https://rgbatohex.com`，不会和主站抢流量；想彻底清掉，随时删除项目即可。
- 同时在项目 **Settings → Git** 里移除了 `zhenhuamo/rgba-to-hex` 的 Git 连接（Disconnect → Remove Connection）。之后 push 到 GitHub 不会再触发 Vercel 构建，也就不会再消耗 Hobby 的用量额度；需要回滚时随时可以在同一页面重新连接仓库。

---

## 8. 成本

| 项目 | Cloudflare Workers（免费计划） | Vercel（Hobby/Pro） |
| --- | --- | --- |
| 静态资源请求 | **免费且不计入 Worker 请求**（本项目全部请求都是静态资源） | Hobby 有带宽/请求软限制，商用违规会被停（本次 402 的直接背景） |
| Worker 请求 | 100,000 次/天（本方案用不到，因为没有 `main` 脚本） | — |
| 静态文件数 / 单文件大小 | 20,000 个/版本、25 MiB/个（本项目 717 个、最大 1.2 MB） | — |
| 域名接入 | Workers 路由免费；证书延用 zone 已有 Universal SSL | 免费 |
| 构建 | 本地构建；GitHub Actions 免费额度。若改用 Workers Builds：3,000 分钟/月、1 并发、单次 20 分钟超时 | Vercel 构建额度 |
| 费用 | **$0/月** | Pro $20/月起 |

> 数字来源：[Workers 限制](https://developers.cloudflare.com/workers/platform/limits/)、[静态资源计费与限制](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)、[Workers Builds 限制](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/)。

---

## 9. 以后需要服务端能力怎么办

如果将来要加 API、登录、ISR、middleware 改写等，把静态导出换回官方适配器即可，页面代码基本不用动：

```bash
# 注意：@opennextjs/cloudflare 1.20.17 的 peer 要求是 next >=15.5.29 <16 || >=16.4.5
# 当前项目是 15.5.9，不满足，需要先升到 15.5.x 最新补丁版
npm i next@15.5.29
npm i @opennextjs/cloudflare@1.20.17
```

```ts
// next.config.ts
const nextConfig = { /* 去掉 output: 'export' 与 images.unoptimized */ };
```

```jsonc
// wrangler.jsonc
{
  "main": ".open-next/worker.js",
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" },
  "compatibility_flags": ["nodejs_compat"],
  "compatibility_date": "2026-11-18"
}
```

构建命令改为 `opennextjs-cloudflare build && wrangler deploy`（适配器自己会切 standalone 构建，不要再加 `output: 'standalone'`，更不能和 `output: 'export'` 混用），并把 `src/middleware.ts` 从 git 历史里恢复（`git show 5a82557:src/middleware.ts > src/middleware.ts`）。代价是 HTML 请求会经过 Worker（计入每天 10 万次免费额度）。

---

## 10. 迁移前就已存在的问题（本次未引入，建议后续修）

| # | 问题 | 证据 | 建议 |
| --- | --- | --- | --- |
| 1 | 14 个站内链接指向不存在的路由（404） | 本地全量爬链：`/tools/rgba-to-hex`、`/tools/ascii-converter`、`/tools/base64-encoder`、`/tools/hex-to-hsv`、`/tools/rgb-to-yuv`、`/tools/color-palette`、`/tools/xyz-to-spherical`、`/tools/rgba-to-cmyk`、`/blog/color-theory-web-design`、`/blog/css-color-formats`、`/articles/rgba-to-hex-conversion-guide` 等 | 这些 404 在 Vercel 上同样存在；改链接或补 301 |
| 2 | 10 个页面用 `next/head`，在 App Router 里是**静默空操作** | `src/app/tools/mixer-painter/page.tsx`、`font-generator/page.tsx`、`color-wheel/page.tsx` 等 | 改成 `export const metadata`，否则这些页 title/og 一直缺失 |
| 3 | 死依赖拖慢安装/构建 | `fabric`、`paper`、`kmeans-js`、`react-hook-form`、`@modelcontextprotocol/server-sequential-thinking` 在 `src/` 零引用 | 从 `dependencies` 移除（fabric/paper 还是重原生包） |
| 4 | 两套 ESLint 配置并存，`.eslintrc.json` 已失效 | `eslint.config.mjs` + `.eslintrc.json` | 删除 `.eslintrc.json`，规则搬进 flat config |
| 5 | `sitemap.xml` 的 `lastmod` 每次构建都变 | `src/app/sitemap.ts` 用 `new Date()` | 改为固定值或按内容维护，避免误导爬虫 |
| 6 | 构建缓存文件进仓库 | `tsconfig.tsbuildinfo`、`temp.ts`、`temp.txt`、`*.backup` | 清理并加进 `.gitignore` |
| 7 | 37 个工具页的 HTML 里几乎没有正文（只有 `Loading Converter...`） | 这些页用 `useSearchParams` + `<Suspense>`，静态构建时只输出 fallback；本地统计 179 个 HTML 中 37 个可见文本 <400 字符 | Google 能执行 JS，但首屏 HTML 薄会影响抓取/渲染预算；建议后续把「读 query」下沉到叶子组件（参考本次 `design-token-color-exporter/ClientEntry.tsx` 的写法） |
