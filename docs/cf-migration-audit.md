# rgbatohex.com → Cloudflare 静态化迁移审计（只读代码审计）

- 审计对象：`/Users/mac/jscode/rgba-to-hex`，git HEAD `5a82557`（master）
- Next.js `15.5.9`，App Router（`src/app`），178 个路由
- 审计方式：静态代码审计 + 读取已有构建产物 + 类型检查/ESLint（**未修改任何源码/配置**）
- 说明：审计期间工作区被并行改动（`git status` 显示 `D next.config.js`、`M next.config.ts`、`M src/app/tools/design-token-color-exporter/page.tsx`、新增 `public/_headers`、`ClientEntry.tsx`），并由 Lead 侧在跑基线构建。**本报告中所有 `file:line` 均指向 HEAD 原始内容**；与并行改动的关系见第 9 节。

---

## 1. 结论

**可以静态导出（`output: 'export'`）—— 架构上几乎零阻力。** 这是一个纯静态营销/工具站，没有任何服务端运行时依赖：

| 检查项 | 结果 |
|---|---|
| `app/**/route.ts`（Route Handler）| **0 个** |
| 动态路由段 `[...]` / `[slug]` | **0 个**（178 个路由全部是写死的目录） |
| `cookies()` / `headers()` / `draftMode()` / `unstable_noStore` | **0 处** |
| `export const revalidate` / ISR / `fetchCache` | **0 处** |
| `generateStaticParams` | **0 处（也不需要，没有动态段）** |
| `'use server'`（Server Actions）| **0 处** |
| `next/image` 默认 loader | **50 个文件 import / 47 处 `<Image>`** → 静态导出**必须**加 `images.unoptimized: true`，否则构建直接失败 |
| `next/font` | 仅根布局 1 处，**兼容静态导出**（构建期自托管字体） |
| `useSearchParams` 缺 Suspense | **0 处**（18 个页面 + 1 个客户端组件全部已包裹，见第 4 节） |
| 服务端读 `searchParams` prop | **1 处** → 静态导出的**唯一硬阻塞**（见下） |
| Node-only 依赖被服务端引入 | **0 处**（`fabric`/`paper`/`kmeans-js` 根本没用；`mixbox`/`qrcode.react` 只在 `'use client'` 文件里） |

### 真正需要动的只有 4 件事

1. **`src/app/tools/design-token-color-exporter/page.tsx:18-19`**：唯一一个 `async` 服务端页面，`await searchParams` → 动态渲染。开启 `output: 'export'` 后此路由无法静态化，构建报 `Route /tools/design-token-color-exporter couldn't be rendered statically because it used \`searchParams\``（错误文案来源：`node_modules/next/dist/server/app-render/dynamic-rendering.js:219,239`，文档链接 `/messages/dynamic-server-error`）。**必须改成客户端 `useSearchParams()` + Suspense**（其余 177 个路由无需改动即可静态化）。
2. **`next.config.js` 加 `output: 'export'` + `images: { unoptimized: true }`**。注意**必须加在 `next.config.js`**：`next.config.ts` 当前**根本不会被加载**（证据见第 6 节）。50 个文件 import `next/image`（`src/app/tools/rgb-to-oklab/page.tsx:26` 等 47 处 `<Image>`），默认 loader 在导出模式下会抛 `ExportError`（`node_modules/next/dist/export/index.js:257-272`，第 267-271 行就是 "Image Optimization using the default loader is not compatible with export"，且该检查只在非 Vercel 构建环境触发 —— 迁到 Cloudflare 后**一定**会撞上）。
3. **`src/middleware.ts` 整体失效**：静态导出产物 `out/` 里没有 middleware 运行时，Cloudflare 静态托管也无处执行它（旧版 `next export` 亦明确提示会禁用 middleware：`node_modules/next/dist/export/index.js:443`；官方 Static Exports 的 Unsupported Features 列表含中间件/Proxy、Headers、Redirects、Rewrites、ISR、Cookies、Draft Mode、Server Actions、默认 loader 的图片优化）。它设置的 3 类响应头必须搬到 `public/_headers`（Cloudflare Pages 与 Workers Static Assets 都支持，语义一致，见第 3 节的逐条映射）。
4. **`next/font` 与 `next/script` 无需改动**：`src/app/layout.tsx:2,6-14`（Geist/Geist_Mono 自托管）、`src/app/layout.tsx:70-104`（GA/Clarity/AdSense 外链脚本）在静态导出下照常工作。唯一注意点：`next/font/google` 在**构建期**需要访问 Google Fonts（Cloudflare 构建容器有网即可；离线构建会失败）。

> 一句话总结：**除了 1 个页面要改写成客户端读 query、`next.config.js` 加两行、以及把 middleware 换成 `_headers`，这个站点天生就是静态站。**

---

## 2. 阻塞项清单

严重度：🔴 = 不改就一定构建失败/功能丢失；🟡 = 不阻塞但要处理（安全/SEO/正确性）；⚪ = 清理项。

| # | 严重度 | 位置 | 现状 | 影响 | 最小修复 |
|---|---|---|---|---|---|
| 1 | 🔴 | `src/app/tools/design-token-color-exporter/page.tsx:18-19`（`async function ... ({ searchParams })` + `await searchParams`） | 服务端 await `searchParams`，动态渲染 | 静态导出时该路由无法预渲染 → **构建失败** | 页面改成同步服务端外壳 + `<Suspense>` 包裹 `'use client'` 组件，内部 `useSearchParams()` 读 `source` / `tokenName` / `scale` / `roles` 四个参数 |
| 2 | 🔴 | 50 个文件 import `next/image`（`src/app/tools/rgb-to-oklab/page.tsx:26`、`hsl-to-hex/page.tsx:18`、`color-contrast/page.tsx:18`、`minecraft-color-codes/page.tsx:115` … 共 47 处 `<Image>`） | 使用默认图片优化 loader | `out` 导出时抛 `ExportError`（`node_modules/next/dist/export/index.js:267-271`）→ **构建失败** | `next.config.js` 加 `images: { unoptimized: true }`（本项目图片全是 `public/*.svg`，宽高已显式给出，0 处 `fill`、0 处远程图，退化成 `<img>` 无损失） |
| 3 | 🔴 | `src/middleware.ts:15-47` + `config.matcher:49-65` | 运行期改写响应头 | 静态导出**不执行** middleware → `X-Robots-Tag` / `X-Frame-Options` / `CSP frame-ancestors` **全部丢失**（安全 + SEO 回归） | `public/_headers` 等价复现（第 3 节给了可直接用的内容），随后删除 `src/middleware.ts` |
| 4 | 🟡 | `next.config.ts` 全文 | 存在但与 `next.config.js` 冲突 | Next 只加载 `next.config.js`，`.ts` 是**死文件**；里面 `experimental.turbo.rules` 引用的 `@svgr/webpack` **未安装**（`ls node_modules/@svgr` → 不存在），一旦有人删掉 `.js` 让它生效，Turbopack 立刻崩 | 二选一：把配置统一到 `next.config.js` 并删除 `next.config.ts`（推荐）；或在 `next.config.ts` 里补齐 `output: 'export'` 并删掉 `.js`。**绝不能两个都留** |
| 5 | 🟡 | `.eslintrc.json` + `eslint.config.mjs` | 两套 ESLint 配置并存 | ESLint 9 只读 flat config（`eslint.config.mjs`），`.eslintrc.json` 的定制（`react/no-unescaped-entities: off`、`react/display-name: off`、`@typescript-eslint/no-unused-vars` 的 `_` 忽略规则）**全部不生效**。实测当前仍 0 error（见第 7 节），但属于"下一次有人写个 `Don't` 就红"的隐雷 | 删除 `.eslintrc.json`，或把上述规则搬进 `eslint.config.mjs` |
| 6 | 🟡 | 10 个文件使用 `next/head`：`src/app/tools/mixer-painter/page.tsx:4,12`、`font-generator-tool/page.tsx:3`、`gradient-generator/page.tsx:5`、`image-color-extractor/page.tsx:4`、`color-wheel/page.tsx:4`、`color-picker-embed/page.tsx:4`、`mixer-painter-tool/page.tsx:38`、`image-crop-landing/page.tsx:4`、`font-generator/page.tsx:6`、`src/app/blog/mixbox-paint-mixer/page.tsx:4` | App Router 里 `next/head` 是**静默空操作**（`node_modules/next/dist/shared/lib/head.js` 渲染 `<SideEffect>`，`side-effect.js:18` 判断 `if (headManager && headManager.mountedInstances)`，App Router 没有 headManager） | 这些页面 `<title>` / `description` / `og:*`（如 `mixer-painter/page.tsx:13-18`）**当前就没输出**，迁移后会继续没有 → 不是阻塞项，但是明确的 SEO 回归风险 | 改成 `export const metadata`（10 处，可批量） |
| 7 | ⚪ | `package.json:9`（fabric）、`:14`（kmeans-js）、`:16`（paper）、`:11`（react-hook-form）、`:9`（@modelcontextprotocol/server-sequential-thinking） | 装了但 `src/` 里**零引用**（`fabric` 6.6.1 / `paper` 0.12.18 都是重原生依赖） | 拖慢 `npm install` 与 Cloudflare 构建（不影响产物） | 从 dependencies 移除（可选，收益是构建时间） |
| 8 | ⚪ | `tmp` 级残留：`src/app/tools/rgb-to-lab/page.tsx.backup`、`temp.ts`、`temp.txt` | 非路由垃圾文件 | 无 | 删除（可选） |

---

## 3. `src/middleware.ts` 逐条精确映射

### 3.1 它到底做了什么（`file:line` 证据）

```
src/middleware.ts:4-13   noindexPaths = Set{8 个精确路径}
src/middleware.ts:19-21  if (noindexPaths.has(pathname)) → X-Robots-Tag: noindex, follow
src/middleware.ts:24-39  if (pathname.startsWith(12 个前缀)) → X-Frame-Options: ALLOWALL + CSP: frame-ancestors *
src/middleware.ts:40-44  else → X-Frame-Options: SAMEORIGIN + CSP: frame-ancestors 'self'
src/middleware.ts:49-65  matcher = 12 条精确模式 + 1 条 catch-all 正则
```

**matcher 枚举（13 条，逐字）：**

| # | matcher 模式 | 语义 |
|---|---|---|
| 1-12 | `/tools/color-converter`, `/tools/hex-to-rgba-converter`, `/tools/hsl-to-hex-converter`, `/tools/cmyk-to-hex-converter`, `/tools/rgb-to-hsl-converter`, `/tools/rgb-to-cmyk-converter`, `/tools/cmyk-to-rgb-converter`, `/tools/color-contrast-checker`, `/tools/minecraft-color-codes`, `/tools/gradient-generator-tool`, `/tools/color-blindness-simulator`, `/tools/image-color-extractor` | **精确匹配**（Next 的 path-to-regexp，不带尾部斜杠时只命中自身） |
| 13 | `/((?!api\|_next/static\|_next/image\|favicon.ico).*)` | 除 `/api/*`、`/_next/static/*`、`/_next/image/*`、`/favicon.ico` 以外的**全部路径** |

> ⚠️ 关键理解：**第 13 条已经吞掉了第 1-12 条**（那 12 条纯属冗余，除了表达意图没有任何额外效果）。所以 middleware 实际运行范围 = 除 4 类排除路径外的所有请求；再叠加 `if/else`，效果是：**全站默认 SAMEORIGIN，仅 12 个前缀允许被任意站点嵌入**。

**头部计算的实际结果（用脚本对 178 个真实路由跑了一遍）：**

| 结果 | 路由数 | 路由 |
|---|---|---|
| `X-Frame-Options: ALLOWALL` + `CSP: frame-ancestors *` | **14** | `/tools/cmyk-to-hex-converter`, `/tools/cmyk-to-rgb-converter`, `/tools/color-blindness-simulator`, `/tools/color-blindness-simulator-tool`, `/tools/color-contrast-checker`, `/tools/color-converter`, `/tools/gradient-generator-tool`, `/tools/hex-to-rgba-converter`, `/tools/hsl-to-hex-converter`, `/tools/image-color-extractor`, `/tools/image-color-extractor-tool`, `/tools/minecraft-color-codes`, `/tools/rgb-to-cmyk-converter`, `/tools/rgb-to-hsl-converter` |
| 同上 + `X-Robots-Tag: noindex, follow` | 其中 **8** 个 | 就是 `middleware.ts:5-12` 那 8 个（`color-converter` / `hex-to-rgba-converter` / `hsl-to-hex-converter` / `cmyk-to-hex-converter` / `rgb-to-hsl-converter` / `rgb-to-cmyk-converter` / `cmyk-to-rgb-converter` / `color-contrast-checker`） |
| `X-Frame-Options: SAMEORIGIN` + `CSP: frame-ancestors 'self'` | **164** | 其余全部（`/`、`/blog/*`、`/color-shades/*`、其余 `/tools/*`） |

两个**容易漏掉**的 `startsWith` 副作用（复现时不要"修正"，否则行为变了）：

- `/tools/color-blindness-simulator` 前缀顺带覆盖了 **`/tools/color-blindness-simulator-tool`**
- `/tools/image-color-extractor` 前缀顺带覆盖了 **`/tools/image-color-extractor-tool`**

### 3.2 用 `_headers` 复现（Cloudflare Pages / Workers Static Assets 语义一致）

已核对官方文档（[Pages `_headers`](https://developers.cloudflare.com/pages/configuration/headers/)、[Workers Static Assets `_headers`](https://developers.cloudflare.com/workers/static-assets/headers/)）的三个关键语义：

1. 命中多条规则时**所有头都会继承**；同名头被写两次会**用逗号拼接**（→ 直接叠加会得到 `frame-ancestors 'self', frame-ancestors *` 这种非法值）；
2. `! Header-Name` 可以**删除前面规则已添加的**同名头（顺序敏感：必须"宽的规则在前，窄的规则在后"）；
3. 路径支持 `*`（贪婪、每条规则最多一个）；`/path` 不带 `*` 即精确匹配；最多 100 条规则。

因此**必须**：先 `/*` 写 SAMEORIGIN 兜底，再用 `!` 清掉并改写成 ALLOWALL：

```
# 1) 兜底：全站禁止被第三方 iframe（对应 middleware 的 else 分支）
/*
  X-Frame-Options: SAMEORIGIN
  Content-Security-Policy: frame-ancestors 'self'

# 2) 8 个"可嵌入 + noindex"工具（对应 middleware.ts:24-39 ∩ 5-12）
/tools/color-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

/tools/hex-to-rgba-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

/tools/hsl-to-hex-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

/tools/cmyk-to-hex-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

/tools/rgb-to-hsl-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

/tools/rgb-to-cmyk-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

/tools/cmyk-to-rgb-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

/tools/color-contrast-checker*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

# 3) 4 个"仅可嵌入、不 noindex"工具（对应 middleware.ts:33-36）
/tools/minecraft-color-codes*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *

/tools/gradient-generator-tool*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *

/tools/color-blindness-simulator*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *

/tools/image-color-extractor*
  ! X-Frame-Options
  ! Content-Security-Policy
  X-Frame-Options: ALLOWALL
  Content-Security-Policy: frame-ancestors *

# 4) 原 middleware 因 matcher 排除、未处理带 hash 的静态资源：建议补上长缓存
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

共 14 条规则（< 100 上限）。**放置位置**：`public/_headers`（`next build` 会把 `public/*` 原样复制进 `out/`；`_headers` 本身不会再被当作静态资源访问）。

### 3.3 复现时必须知道的 4 个差异（都是无害/更优，但要明确知晓）

1. **无负向匹配**：`_headers` 写不出 `(?!api|_next/static|...)`。用 `/*` 兜底后，`/api/*`、`/_next/image/*`、`/favicon.ico` 也会带上 SAMEORIGIN（静态站里这几类要么不存在、要么无害）。
2. **noindex 语义从"精确"变成"前缀"**：`middleware.ts:19` 用 `Set.has(pathname)` 是精确匹配；`_headers` 的 `/tools/color-converter*` 是前缀匹配。实际受影响的只有不存在的路径（`/tools/color-converter-xyz` 之类），可接受。若要严格精确，写成不带 `*` 的 `/tools/color-converter` 即可（Cloudflare 会先 307 把 `/x/` 归一化到 `/x`，再套头，所以不必补尾斜杠规则）。
3. **`X-Frame-Options: ALLOWALL` 是非法值**（规范只认 `DENY`/`SAMEORIGIN`）。浏览器会忽略它并回落到 `Content-Security-Policy: frame-ancestors *` —— 也就是说**真正起作用的只有 CSP**。原样迁移没问题，但要知道"不能靠 XFO 那行"。
4. **`_headers` 只作用于静态资源响应**：如果最终架构是"Worker 包一层 + assets binding"，由 Worker 代码生成的响应不受 `_headers` 约束（纯静态站用 assets 直出即可，不要额外包 Worker）。

### 3.4 顺带发现：嵌入白名单与实际嵌入需求不一致（既有问题，非迁移引入）

代码里实际用 `<iframe src="/tools/xxx-converter?embed=true">` 嵌入的**目标路径有 55 个**（`grep 'src="/tools/.*embed=true'` 得 48 个相对路径，另有 26 处绝对域名 URL），但 middleware 只放行了 12 个前缀。**同源 iframe 不受 `SAMEORIGIN` 限制**，所以站内嵌自家工具页面是好的；只有"第三方站点想嵌这些页面"时才会被拦。迁移时**照抄原行为即可**，若要修，属于产品决策（把 `/tools/*` 全部放行或按需扩名单），不要顺手改。

---

## 4. `useSearchParams()` 全量清单（**结论：0 个缺 Suspense，不是阻塞项**）

全仓库 20 个文件出现 `useSearchParams` 字符串，逐个核对结果：

- **18 个页面**：hook 在被 `<Suspense>` 包裹的子组件里（hook 调用点 → Suspense 边界行号）；
- **1 个客户端组件**：`src/app/tools/hsv-hsl-converter/ClientEmbed.tsx:10`（hook）← 由 `src/app/tools/hsv-hsl-converter/page.tsx:208` 的 `<ClientEmbed>` 使用，外层 `page.tsx:391-395` 有 `<Suspense>`；
- **1 个已注释**：`src/app/tools/gradient-generator-tool/page.tsx:4,87`（只有注释，无实际调用，不需要处理）。

| # | 文件 | hook 行 | Suspense 边界行 | 包裹方式 |
|---|---|---|---|---|
| 1 | `src/app/tools/image-color-extractor-tool/page.tsx` | 18 | 726 | `<ImageColorExtractorContent/>` 在 Suspense 内 |
| 2 | `src/app/tools/uv-to-xyz-converter/page.tsx` | 14 | 357 | 同上 |
| 3 | `src/app/tools/hsv-to-hex-converter/page.tsx` | 36 | 601 | 同上 |
| 4 | `src/app/tools/xyz-to-lab-converter/page.tsx` | 15 | 358 | 同上 |
| 5 | `src/app/tools/hex-to-decimal-converter/page.tsx` | 186 | 221 / 250 | `<SearchParamsWrapper/>` 两处分支内均在 Suspense 内 |
| 6 | `src/app/tools/color-blindness-simulator-tool/page.tsx` | 111 | 590 | 子组件在 Suspense 内 |
| 7 | `src/app/tools/octal-converter-tool/page.tsx` | 342 | 397 | `<SearchParamsWrapper/>` 在 Suspense 内（398 行） |
| 8 | `src/app/tools/xyz-to-uv-converter/page.tsx` | 15 | 325 | 同上 |
| 9 | `src/app/tools/rgb-to-hex-converter/page.tsx` | 39 | 608 | 同上 |
| 10 | `src/app/tools/hex-to-binary-converter/page.tsx` | 240 | 287 / 316 | 两处分支均在 Suspense 内 |
| 11 | `src/app/tools/hsv-to-rgba-converter/page.tsx` | 37 | 461 | 同上 |
| 12 | `src/app/tools/decimal-to-binary-converter/page.tsx` | 179 | 232 | 同上 |
| 13 | `src/app/tools/binary-to-text-converter/page.tsx` | 573 | 647 | 同上 |
| 14 | `src/app/tools/color-name-converter/page.tsx` | 467 | 594 | 同上 |
| 15 | `src/app/tools/hsv-to-rgb-converter/page.tsx` | 36 | 570 | 同上 |
| 16 | `src/app/tools/lab-to-xyz-converter/page.tsx` | 15 | 366 | 同上 |
| 17 | `src/app/tools/text-to-binary-converter/page.tsx` | 624 | 686 | 同上 |
| 18 | `src/app/tools/binary-to-decimal-converter/page.tsx` | 182 | 235 | 同上 |
| 19 | `src/app/tools/hsv-hsl-converter/ClientEmbed.tsx` | 10 | `hsv-hsl-converter/page.tsx:391` | 组件在 Suspense 内 |

**核对方法**（可复现）：

```bash
grep -rln --include=page.tsx "useSearchParams(" src \
  | xargs grep -n "Suspense\|useSearchParams("
```

> 也就是说：`useSearchParams` 这条常见的静态导出地雷，这个项目**已经全部排掉了**（原作者或上一轮改动已经处理好）。Lead 原假设的"178 个 page.tsx 里有一批没包 Suspense"**不成立**，真正卡住的只有第 2 节 #1 那一个页面（服务端 `await searchParams`，与 `useSearchParams` 无关）。

其它路由 API 复核：`usePathname()` 仅 `src/components/Navigation.tsx:5,11`（安全）；`useRouter` 0 处；`next/head` 见第 2 节 #6（无效但无害）。

---

## 5. 依赖与 Node-only 风险

| 包 | 版本 | 引入位置 | 是否 `'use client'` | Workers/静态导出安全性 |
|---|---|---|---|---|
| `fabric` | 6.6.1 | **无引用**（0 处 import/require） | — | 死依赖；即使引入也只能进客户端包（Node 侧依赖 canvas/jsdom），**不要**在服务端组件里 import |
| `paper` | 0.12.18 | **无引用** | — | 同上，死依赖 |
| `kmeans-js` | 0.1.2 | **无引用** | — | 死依赖 |
| `react-hook-form` | 7.54.2 | **无引用** | — | 死依赖 |
| `@modelcontextprotocol/server-sequential-thinking` | ^0.6.2 | **无引用**（是个 Node MCP server 包，被误装进 dependencies） | — | 死依赖，纯 Node，永远不能进 bundle |
| `mixbox` | 2.0.0 | `src/app/tools/mixer-painter-tool/page.tsx:8`（`import mixbox from 'mixbox'`） | ✅ 文件首行 `'use client'`（:1） | **安全**：`main: mixbox.js` / `module: mixbox.esm.js` 是纯 JS（无 wasm/原生），只在浏览器里跑 |
| `qrcode.react` | 4.2.0 | `src/app/tools/font-generator-tool/page.tsx:6` | ✅ `"use client"`（:1） | **安全**：纯 React 组件 |
| `colord` | 2.9.3 | `src/app/color-shades/utils/*ColorUtils.ts`、`color-wheel-tool/page.tsx`、`palette-generator-tool/page.tsx` | utils 为纯函数模块（无 `'use client'`，被客户端组件引用） | **安全**：同构纯 JS |
| `react-colorful` / `react-window` / `react-easy-crop` / `framer-motion` / `sonner` | — | 均只在客户端组件/页面 | ✅ | **安全**（都是浏览器侧库） |
| `next/font/google` | — | `src/app/layout.tsx:2` | 服务端（构建期） | **安全**，但构建机需联网下载字体 |

**服务端组件里是否引入了 Node-only 代码？**
`grep` 结果：`src/` 内 **0 处** `from 'fs'|'path'|'child_process'|'os'|'crypto'`，**0 处** `next/headers`、`next/server` 引用（除 `src/middleware.ts:1-2`，该文件在静态导出中不生效）。33 个服务端页面（无 `'use client'`）全部只 import 纯函数 utils / `metadata` / 客户端组件（`apca-contrast-checker/page.tsx:1-9`、`oklch-scale-generator/page.tsx`、`color-temperature/page.tsx` 等都是 `import Client from './client'` 的薄壳）。

**浏览器 API 是否在模块作用域/渲染期裸用？** 无。所有 `window`/`document`/`localStorage` 访问要么在 `useEffect`/事件回调里，要么有 `typeof window !== 'undefined'` 保护（如 `src/app/tools/hsv-to-hex/page.tsx:125`、`color-picker-embed/page.tsx:13`、`mixer-painter/page.tsx:88`）。**静态预渲染不会被 `window is not defined` 打断。**

---

## 6. 配置冲突：`next.config.js` vs `next.config.ts`（**结论：`.js` 生效，`.ts` 完全不加载**）

Next 15.5.9 的配置文件查找顺序是**数组顺序 + findup 取第一个命中**：

```js
// node_modules/next/dist/shared/lib/constants.js:356-360
const CONFIG_FILES = [
    'next.config.js',
    'next.config.mjs',
    'next.config.ts'
];
```

```js
// node_modules/next/dist/server/config.js:1069
const path = await (0, _findup.default)(_constants.CONFIG_FILES, { cwd: dir });
```

`findup` 命中 `next.config.js` 就停止 → **`next.config.ts` 永远不会被读取**（没有 `next.config.mjs`）。

**这个歧义要不要紧？现在不要紧，但它是迁移期最危险的地雷：**

- 当前生效的 `next.config.js` 只有一个 `webpack` 自定义（给 `.json` 加 `type: 'json'` 规则，实质是空操作），**没有 `output` / `images`**；
- `next.config.ts` 里的 `experimental.turbo.rules` 引用 `@svgr/webpack`，而**该包未安装**（`node_modules/@svgr` 不存在）→ 它一旦变成生效配置，`next dev --turbopack` / 构建会直接报模块找不到；
- 且 `experimental.turbo` 在 15.5 已被标记弃用（`node_modules/next/dist/server/config.js:1179` 有对应告警文案）；
- 结论：**把 `output: 'export'` 和 `images.unoptimized` 写进 `next.config.ts` 会毫无效果，且不会有任何报错**——这是"改完发现没导出"的第一嫌疑。

**建议**：只保留一个文件。推荐保留 `next.config.js`（加导出配置、删掉无用的 webpack 规则），删除 `next.config.ts`。

### ESLint 双配置

- `eslint` devDep 是 `^9` → 默认 **flat config**，只读 `eslint.config.mjs`；
- `.eslintrc.json`（`extends: next/core-web-vitals` + 4 条自定义）在 ESLint 9 下**不生效**；
- 副作用：`react/no-unescaped-entities`（`next/core-web-vitals` 里是 **error**）原本被 `.eslintrc.json` 关掉了，现在等于**开着**；`@typescript-eslint/no-unused-vars` 从 error+`_`忽略 变成 `eslint-config-next/typescript.js` 里的 **warn(1)**；`react/display-name` 也回到默认。
- 实测（见第 7 节）：当前 **0 error / 60 warning**，所以**不阻塞构建**；但两套配置并存会让"本地 lint 通过 / CI 不通过"这类问题难以定位，建议合并。

---

## 7. 构建 / 类型 / 路由统计

### 7.1 实际执行情况（未修改仓库）

| 检查 | 命令 | 结果 |
|---|---|---|
| 类型检查 | `npx tsc --noEmit --incremental false` | **通过，exit 0**（无输出；未写 `tsconfig.tsbuildinfo`） |
| ESLint | `npx next lint` | **通过，exit 0**；60 warnings / 0 errors（48× `react-hooks/exhaustive-deps`、24× `@next/next/no-img-element`；`next lint` 已弃用提示） |
| 完整构建 | `npm run build` | **本次审计未执行**（按 Lead 要求避免 `.next` 并发冲突；审计期间工作区里 Lead 侧构建正在运行，`.next/server` 时间戳持续更新） |

> 说明：审计开始时我误启动过一次 `npm run build`，约 30 秒后即按指令终止；期间 Next 只重写了 `.next/`（Git 忽略目录），**没有改动任何源文件**（`git status` 中的改动全部来自并行 agent 的迁移实现，非本次审计产生）。

### 7.2 路由统计（代码推算，178 条）

| 类别 | 数量 | 说明 |
|---|---|---|
| **总路由（`page.tsx`）** | **178** | 全部是**静态字面路径**，无 `[slug]` / `[...slug]` |
| 可静态导出 | **177** | 无任何动态 API |
| 动态路由 | **1** | `/tools/design-token-color-exporter`（`src/app/tools/design-token-color-exporter/page.tsx:18-19`） |
| 元数据路由 | **3** | `/robots.txt`（`src/app/robots.ts`）、`/sitemap.xml`（`src/app/sitemap.ts`）、`/favicon.ico`（`src/app/favicon.ico`）→ 静态导出同样产出文件 |
| 预期 `out/**.html` | **178 + `404.html`** | 静态导出使用 `trailingSlash: false` → 产出 `out/tools/rgb-to-hex.html` 这类文件 |

其它结构规模：79 个 `layout.tsx`、10 个 `error.tsx`、10 个 `loading.tsx`、0 个 `not-found.tsx`、201 个文件带 `'use client'`（其中 **145 个 page.tsx 是客户端页面、33 个是服务端页面**）。

**参考旁证**：审计中观察到一次已完成的构建产物（10:38 生成，处于工作区已被并行改动之后的状态）中 `.next/prerender-manifest.json` 为 **static 181 / dynamic 0**，与上表 178+3 吻合；但该产物与并行改动绑定，**最终以 Lead 的基线构建为准**。

### 7.3 已知的构建期/运行时噪音（非阻塞）

- **`Math.random()` / `Date.now()` 在渲染路径**：`src/app/tools/gradient-generator-tool/page.tsx:21`（`generateId`）、`font-generator-tool/page.tsx:304-318,427,468,507`（zalgo/emoji 随机化，均在事件回调里调用）、`src/app/tools/rgb-to-hsv-converter/page.tsx:51-52`（在 `randomColor` 回调里，非渲染期）。→ 即便触发，也只是 React hydration warning，**不阻塞静态导出**。
- **`new Date().getFullYear()` 在渲染期**：`src/app/tools/hsv-hsl/page.tsx:676`、`src/app/tools/color-picker-tool/page.tsx:353`、`src/app/tools/image-crop-landing/page.tsx:539`（页脚年份）。静态导出会把年份**冻结在构建时刻**；跨年后需要重新构建才会更新（可接受，也可以改成客户端取时间）。
- **`src/app/sitemap.ts:11`** 用 `new Date()` 作为 `lastModified` → 每次构建 sitemap 都会变（无害）。

---

## 8. 需要改动的最小 diff 建议（**仅描述，未应用**）

> 目标：让 `npm run build` 直接产出可部署到 Cloudflare 的 `out/`，且**行为与现在一致**。

### 改动 1 — `next.config.js`（唯一生效的配置）

```diff
 const nextConfig = {
+  output: 'export',              // 静态导出到 out/
+  images: { unoptimized: true }, // 47 处 <Image> 退化为 <img>，否则 export 直接抛错
   webpack: (config) => { ... },  // 可保留（无害）
 }
```
同时**删除 `next.config.ts`**（死文件 + `@svgr/webpack` 未安装的隐雷）。

### 改动 2 — `src/app/tools/design-token-color-exporter/page.tsx`（唯一阻塞路由）

```diff
-type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };
-export default async function Page({ searchParams }: PageProps) {
-  const sp = searchParams ? await searchParams : undefined;
-  return <Client initialSource={getFirst(sp?.source)} ... />;
-}
+export default function Page() {
+  return (
+    <Suspense fallback={null}>
+      <ClientEntry />   {/* 新增 'use client' 文件，内部 useSearchParams() 读 4 个参数 */}
+    </Suspense>
+  );
+}
```
新增 `ClientEntry.tsx`：`'use client'` + `useSearchParams()` + `searchParams.get('source'|'tokenName'|'scale'|'roles')`，props 契约与原服务端版本保持一致（`client.tsx` 不用改）。注意用 `useSearchParams().get()` 时 `Array.isArray` 分支可去掉（客户端只返回 `string | null`）。

### 改动 3 — 新增 `public/_headers`（第 3.2 节全文），并**删除 `src/middleware.ts`**

删除前建议保留一段时间的对照；确认 `_headers` 生效后再删。

### 改动 4 —（非阻塞，建议同批）`next/head` → `metadata`

10 个文件的标题/描述当前根本没输出，例如 `src/app/tools/mixer-painter/page.tsx:12-18`（title/description/keywords/og:*）。改成 `export const metadata`（或 `generateMetadata`）后 SEO 才能真正生效——**与 Cloudflare 无关，但迁移是修它的好时机**。

### 改动 5 —（清理）配置与依赖

- 删 `.eslintrc.json`（或把 4 条规则搬进 `eslint.config.mjs`）；
- 从 `dependencies` 移除 `fabric`、`paper`、`kmeans-js`、`react-hook-form`、`@modelcontextprotocol/server-sequential-thinking`（全部零引用；`fabric`/`paper` 还能显著缩短 CI install 时间）；
- 删 `src/app/tools/rgb-to-lab/page.tsx.backup`、`temp.ts`、`temp.txt`。

### 不需要改的（已确认安全）

- `useSearchParams` 相关的 18 个页面 + 1 个客户端组件：**已有 Suspense**，一行都不用动；
- `next/font`（`layout.tsx:2`）、`next/script`（`layout.tsx:70-104`）、`robots.ts`、`sitemap.ts`；
- 79 个 `layout.tsx`、10 个 `error.tsx`/`loading.tsx`（客户端错误/加载边界在静态导出中正常工作）。

---

## 9. 与 Cloudflare 部署形态相关的收尾建议

1. **输出目录映射**：`out/` 直接作为 Pages 的构建输出（`npx wrangler pages deploy out`）或 Workers `assets.directory = "./out"`。Cloudflare 默认 `html_handling: "auto-trailing-slash"` 会把 `/tools/rgb-to-hex` 映射到 `/dist/tools/rgb-to-hex.html`（[官方表格](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/)：`/file → 200 /dist/file.html`），因此 **`trailingSlash` 保持默认 `false` 即可，不需要改成 `true`**。
2. **404**：`out/404.html` 会生成；Workers 侧设 `not_found_handling: "404-page"` 即可复用。
3. **域名与 canonical**：`metadataBase`（`src/app/layout.tsx:18`）、`sitemap.ts:4`、`robots.ts:19` 都硬编码 `https://rgbatohex.com`，迁移不改域名的话无需动；若换域名要全局替换。
4. **不要顺手"优化" `_headers`**：第 3.2 节的内容是**行为等价**版本；把 `SAMEORIGIN` 改成 `DENY`、或把 CSP 写成更严格的整条策略，都会改变现有嵌入行为（站内有 55 个 embed 目标页面靠 iframe 展示）。
5. **构建环境**：`next/font/google` 需要构建期访问 `fonts.googleapis.com`；Cloudflare CI 正常有网即可，若做离线构建需自托管字体。

---

## 10. 验证命令

```bash
# ---------- 1. 本地静态检查（只读） ----------
npx tsc --noEmit --incremental false            # 期望 exit 0
npx next lint                                    # 期望 0 error（当前 60 warning）

# ---------- 2. 构建 + 产物核对 ----------
npm run build
test -f out/index.html && echo "index ok"
find out -name '*.html' | wc -l                  # 期望 178 + 1(404.html) = 179
node -e "const m=require('./.next/prerender-manifest.json');
  console.log('static',Object.keys(m.routes).length,'dynamic',Object.keys(m.dynamicRoutes).length)"
                                                 # 期望 static 181 / dynamic 0
ls out | grep -i middleware || echo "no middleware in out/ (符合预期)"
test -f out/_headers && echo "_headers copied"   # public/_headers 被复制进 out/

# 迁移后必须不存在的东西
grep -rn "searchParams:" src/app --include="page.tsx" | grep -v "use client"   # 期望无输出
grep -rn "from 'next/headers'\|from \"next/headers\"" src                      # 期望无输出

# 每页是否真有 <title>（暴露 next/head 失效问题）
find out -name '*.html' | xargs grep -L "<title" | head    # 当前预计会有一批

# ---------- 3. Cloudflare 头部行为验证（本地 wrangler） ----------
npx wrangler dev --assets ./out --port 8787      # 或 wrangler pages dev out
curl -sI http://127.0.0.1:8787/ | grep -iE "x-frame-options|content-security-policy"
   # 期望 X-Frame-Options: SAMEORIGIN / Content-Security-Policy: frame-ancestors 'self'
curl -sI http://127.0.0.1:8787/tools/color-converter | grep -iE "x-frame|content-security|x-robots"
   # 期望 ALLOWALL / frame-ancestors * / noindex, follow
curl -sI http://127.0.0.1:8787/tools/minecraft-color-codes | grep -iE "x-frame|x-robots"
   # 期望 ALLOWALL，且 **没有** X-Robots-Tag
curl -sI http://127.0.0.1:8787/tools/image-color-extractor-tool | grep -i x-frame
   # 期望 ALLOWALL（复现 startsWith 前缀副作用）
curl -sI http://127.0.0.1:8787/blog | grep -i x-frame
   # 期望 SAMEORIGIN
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8787/tools/rgb-to-hex      # 期望 200（html_handling 映射 .html）
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8787/tools/rgb-to-hex.html # 期望 307 → /tools/rgb-to-hex
```

---

## 附录 A：审计期间观察到的并行改动（供 Lead 核对，非本次审计产物）

`git status` 在我审计过程中出现了下列改动（由其他 agent 完成，我没有编辑任何文件）：

- `D next.config.js` / `M next.config.ts`：迁移实现选择"删除 `.js`、让 `.ts` 生效"的路线，并在 `.ts` 里加了 `output: 'export'` + `images.unoptimized`。**这条路可行**（`CONFIG_FILES` 找不到 `.js` 后会回落到 `.ts`，见第 6 节），但必须确认 `.js` 确实被删掉且不再被恢复。
- `M src/app/tools/design-token-color-exporter/page.tsx` + 新增 `ClientEntry.tsx`：与第 8 节改动 2 的做法一致（`Suspense` + `useSearchParams`）。
- `D src/middleware.ts` + 新增 `public/_headers`：与第 3.2 节等价（用 `!` 删除后重设，顺序正确：`/*` 兜底在前）；其 `/tools/color-converter*` 等规则是前缀语义，等价于原 `startsWith`。**唯一需要复核**：`X-Robots-Tag` 从"精确路径"变成了"前缀"，实际无差别（见 3.3 第 2 点）。
- 上述改动落地后，本文第 2 节的 #1/#2/#3/#4 阻塞项即告解除；仍需复核的是第 2 节 #5（ESLint 双配置）、#6（`next/head` 失效）与第 9 节的部署参数（`not_found_handling`、`_headers` 的 `!` 顺序）。

## 附录 B：本次审计执行过的只读命令（可复现）

```bash
find src -name page.tsx | wc -l                                  # 178
find src -type d -name '*[[]*[]]' | wc -l                        # 0（无动态段）
find src -name 'route.ts' | wc -l                                # 0
grep -rn "cookies()\|headers()\|draftMode\|unstable_noStore\|'use server'\|export const revalidate" src   # 0
grep -rl "from 'next/image'" src | wc -l                         # 50
grep -rho "<Image[ >/]" src --include=*.tsx | wc -l               # 47
grep -rln --include=page.tsx "useSearchParams(" src | wc -l        # 20（含 1 个仅注释）
sed -n '356,360p' node_modules/next/dist/shared/lib/constants.js # CONFIG_FILES 顺序
sed -n '267,272p' node_modules/next/dist/export/index.js         # 图片 loader 断言
sed -n '219p;239p' node_modules/next/dist/server/app-render/dynamic-rendering.js  # searchParams 动态化报错文案
sed -n '18p' node_modules/next/dist/shared/lib/side-effect.js    # next/head 在 App Router 空操作
```
