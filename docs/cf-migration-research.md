# rgbatohex.com 从 Vercel 迁往 Cloudflare：2026-11 调研与落地方案

> 调研时间：2026-11-19。站点：Next.js 15.5.9 App Router，全静态，原部署在 Vercel（已被 suspend）。
> 本文所有结论都附官方链接；标「实测」的是我在本仓库副本上真实跑出来的结果。

---

## 0. 结论（TL;DR）

**推荐方案：`output: 'export'` 静态导出 → Cloudflare Workers 静态资源（assets-only Worker，不写 Worker 脚本）。**

理由：

1. 本站 **零服务端需求**：无 API Route、无 Server Action、无 ISR/`revalidate`、无动态段（实测 178 个 `page.tsx`、`.next/prerender-manifest.json` 里 181 条全静态路由、`dynamicRoutes: 0`）。唯一"服务端逻辑"是 `src/middleware.ts` 里按路径设响应头，而这类逻辑可以用静态资源自带的 `_headers` 100% 等价替代。
2. **静态资源请求免费且不限量**，不消耗 Worker 调用额度，无冷启动、无 100k/日限制（[Workers Static Assets 计费](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)）。
3. **不需要动 Next 版本、不需要适配器**：`next build` 直接产出 `out/`，`wrangler deploy` 上传即可。OpenNext 目前要求 `next >= 15.5.29`（见 §2），本项目 15.5.9 会被卡住；vinext 仍是 beta。
4. Cloudflare 现在的官方口径：**新项目用 Workers（含 Workers Static Assets），不要新开 Pages**；Next.js 在 Workers 上的"首选路径"已改成 vinext，OpenNext 只用于"维护既有 OpenNext 应用"（[Pages 文档页首横幅](https://developers.cloudflare.com/pages/)、[Next.js on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)、[OpenNext adapter](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/)）。

代价 / 边界：

- `_headers` 只能设**静态响应头**；任何需要读请求、改状态、A/B、鉴权的 middleware 逻辑都会失效（本站没有）。
- `next/image` 的默认优化器在导出模式下不可用，必须 `images.unoptimized: true`（本站图片都是 `public/` 下的小 SVG/小图，实测无影响）。
- 没有 ISR。本站本来就没有 `revalidate`，不影响。
- 如果将来要"保留 middleware 原样 + ISR"，再走 §2 的 OpenNext 或 §3 的 vinext。

> 仓库当前状态（研究时）：`next.config.js` 已删除、`next.config.ts` 已改为 `output: 'export'` + `images.unoptimized`、`src/middleware.ts` 已删除、`public/_headers` 已新增。**还差两处 `force-static`（见 §5.1），否则 `next build` 直接失败（实测）。**

---

## 1. 方案对比（2026-11 现状）

| 方案 | 适配器/版本 | middleware | 请求计费 | 风险 | 适用 |
|---|---|---|---|---|---|
| **A. 静态导出 + Workers 静态资源（推荐）** | 无适配器，任意 Next 15.x | 不支持（改用 `_headers`） | 静态请求**免费不限量** | 极低 | 全静态站 |
| B. OpenNext | `@opennextjs/cloudflare@1.20.17`，peer `next >=15.5.29 <16 \|\| >=16.4.5`、`wrangler ^4.148.0` | 支持（Node.js middleware 除外） | HTML 走 Worker，计 100k/日免费额度 | 中（要升 Next、要维护 open-next 配置） | 需要 SSR/ISR/middleware |
| C. vinext（Cloudflare 新推荐） | `vinext` beta，`cloudflare.config.ts` + `cf` CLI | 支持 | 同上 | 中高（beta，工具链换 Vite） | 想保留 Next 语义又要上 Workers |
| D. Cloudflare Pages（静态） | 无适配器，Git 集成 | 不支持 | 静态请求免费 | 低但"逆官方推荐" | 只想最快迁走、且不在意 Pages 维护态 |

官方链接：
- Workers Static Assets（静态托管主入口）：https://developers.cloudflare.com/workers/static-assets/
- Pages 页首明确写 "Workers supports most Pages use cases… **Start new projects with Workers**"：https://developers.cloudflare.com/pages/
- Next.js on Workers 首选 vinext："Cloudflare recommends **vinext** as the default way to run Next.js applications on Cloudflare Workers"：https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- OpenNext 页首："Cloudflare recommends vinext instead of OpenNext for new Next.js applications… Use this guide to **maintain an existing OpenNext application**"：https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/
- Pages→Workers 迁移指引：https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/

---

## 2. OpenNext 适配器事实核对（若选 B）

| 项 | 值 | 来源 |
|---|---|---|
| 最新版本 | **1.20.17**（2026-11-12 发布） | https://registry.npmjs.org/@opennextjs/cloudflare |
| Next peer 范围 | `>=15.5.29 <16 \|\| >=16.4.5` | 同上 |
| wrangler peer | `^4.148.0`（当前 latest 4.165.0） | 同上 |
| 官方支持口径 | "All minor and patch versions of Next.js 16 and **the latest minor of Next.js 15** are supported. The minimum versions are raised when Next.js releases security fixes." | https://opennext.js.org/cloudflare |
| 是否支持 Next 15.5 | **支持，但最低 15.5.29**；本项目 15.5.9 **不满足**，必须先 `npm i next@15.5.29`（15.5 线的安全回填版本）或升 16.4.5+ | 同上 + registry |
| `output: 'standalone'` 需要吗 | **不需要**。adapter 构建时自己调用 `setStandaloneBuildMode()`；也不需要（也不应）设 `output: 'export'` | 源码 `packages/cloudflare/src/cli/build/build.ts` |
| `initOpenNextCloudflareForDev` | 本地 `next dev` 访问 bindings 时需要，写在 `next.config.ts` 里 | https://opennext.js.org/cloudflare/get-started |
| `compatibility_flags` | 模板给 `["nodejs_compat","global_fetch_strictly_public"]`；但**兼容日期 ≥ 2026-08-04 时 `nodejs_compat` 已默认开启**，flag 可省（写了也无害）。`nodejs_als` 只是"仅开 AsyncLocalStorage"的轻量 flag，OpenNext 用不到 | https://developers.cloudflare.com/workers/configuration/compatibility-flags/ |
| CLI 命令 | `opennextjs-cloudflare build / preview / deploy / upload / populateCache / migrate` | https://opennext.js.org/cloudflare/cli |
| 缓存 | 纯 SSG 用 `staticAssetsIncrementalCache`（只读、无需 KV/R2）；ISR 才需要 R2 + DO Queue + D1 tag cache。**KV 官方明确不推荐**（最终一致） | https://opennext.js.org/cloudflare/caching |
| 图片 | 需 `images.binding = "IMAGES"`（Cloudflare Images，产生费用）或自定义 loader | https://opennext.js.org/cloudflare/howtos/image |
| 静态资源头 | 静态文件**不经过 Worker**，`next.config` 的 `headers()` 与 middleware 都管不到 `public/`、`_next/static`，必须写 `public/_headers` | https://opennext.js.org/cloudflare/caching |

### B 方案 known-good 最小配置（实测版本矩阵，未在本仓库落地）

```jsonc
// wrangler.jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "rgba-to-hex",
  "main": ".open-next/worker.js",
  "compatibility_date": "2026-11-19",
  "compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"],
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" },
  // 纯 SSG 不需要 R2；如加 ISR 再解开下面并配 open-next.config.ts
  // "r2_buckets": [{ "binding": "NEXT_INC_CACHE_R2_BUCKET", "bucket_name": "rgba-to-hex-opennext-cache" }],
  "services": [{ "binding": "WORKER_SELF_REFERENCE", "service": "rgba-to-hex" }],
  "images": { "binding": "IMAGES" },
  "observability": { "enabled": true }
}
```

```ts
// open-next.config.ts（纯静态站）
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
```

```jsonc
// package.json scripts
{
  "build": "next build",
  "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
  "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
  "upload": "opennextjs-cloudflare build && opennextjs-cloudflare upload",
  "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
}
```

一键迁移命令（会自己建 wrangler.jsonc / open-next.config.ts / `.dev.vars` / `public/_headers`、改 scripts，并在 R2 可用时建桶）：`npx @opennextjs/cloudflare migrate`。

---

## 3. vinext（Cloudflare 当前对 Next.js 的首选路径，beta）

```bash
npx vinext check                       # 先跑兼容性检查
npx vinext init --platform=cloudflare --name rgba-to-hex \
  --cdn-cache=none --data-cache=none --image-optimization=none
npm run dev:vinext && npm run build:vinext && npm run start:vinext
npx cf auth login && npx @vinext/cloudflare deploy
```

- 保留 `app/`、`next.config.*`、`middleware.ts`，用 Vite 重新实现 Next API；**不使用 wrangler.jsonc**，改用 `cloudflare.config.ts`，部署走 `cf` CLI。
- 本站无 ISR、`next/image` 只用于 SVG/小图，所以 `--cdn-cache=none --data-cache=none --image-optimization=none` 就够。
- 风险：官方标注 **beta**，兼容性看 https://vinext.dev/compatibility 。
- 链接：https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/ 、https://developers.cloudflare.com/workers/static-assets/migration-guides/vercel-to-workers/nextjs/ 、https://github.com/cloudflare/vinext

> 结论：本站这种"纯静态 + 只差响应头"的形状，**用 vinext 属于用大炮打蚊子**；它的价值在于保留 middleware/ISR。放到"以后想加动态能力"时再评估。

---

## 4. 方案 A 落地配置（推荐，逐字可抄）

### 4.1 `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // 导出模式没有 /_next/image 服务；默认 loader 会直接 build 失败
};

export default nextConfig;
```

- 不要设 `trailingSlash: true`：保持默认（`false`）时导出为 `out/tools/x.html`，Workers 的 `auto-trailing-slash` 会把 `/tools/x` 映射到它（见 §4.3 表）。改成 `true` 会变成 `out/tools/x/index.html` + 全站 301，SEO 上没必要。
- 参考：https://nextjs.org/docs/app/guides/static-exports 、Next 15 版本文档（明确把 **Middleware / Headers / Redirects / ISR / 默认 loader 的图片优化** 列为不支持）https://nextjs.org/docs/15/app/guides/static-exports 、`images.unoptimized` https://nextjs.org/docs/app/api-reference/components/image#unoptimized

### 4.2 删掉 middleware，改为 `public/_headers`

`output: 'export'` 下 middleware 不生效：Next 15.5 只是**警告并禁用**（源码 `next/dist/export/index.js`：`Statically exporting ... disables API routes and middleware`），Next 16 起**直接构建报错**（`Middleware cannot be used with "output: "export"`，见 https://github.com/vercel/next.js/discussions/87955 ）。所以 `src/middleware.ts` 应删除（仓库已删）。

`public/_headers` 会被 `next build` 原样复制到 `out/_headers`（实测存在）。语义要点（Cloudflare 官方规则）：

- 规则按文件顺序执行；**同一 header 命中多条规则会用逗号拼接**，而不是覆盖。
- 用 `! Header-Name`（`!` + 空格）先"摘掉"上层规则再加新值；`!` 只对**它之前**已添加的值生效，所以"宽规则在前、窄规则在后"。
- 上限：**100 条规则，单行 2000 字符**（Workers 与 Pages 同）。
- 链接：https://developers.cloudflare.com/workers/static-assets/headers/ （Workers）、https://developers.cloudflare.com/pages/configuration/headers/ （Pages）

本项目已在 `public/_headers` 里实现等价逻辑（示意，实际文件更长）：

```txt
/*
  X-Frame-Options: SAMEORIGIN
  Content-Security-Policy: frame-ancestors 'self'

/tools/color-converter*
  ! X-Frame-Options
  ! Content-Security-Policy
  Content-Security-Policy: frame-ancestors *
  X-Robots-Tag: noindex, follow

/tools/minecraft-color-codes*
  ! X-Frame-Options
  ! Content-Security-Policy
  Content-Security-Policy: frame-ancestors *

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

两个建议（非阻塞）：

1. **不要写 `X-Frame-Options: ALLOWALL`**。XFO 规范只认 `DENY`/`SAMEORIGIN`（`ALLOW-FROM` 已废弃），`ALLOWALL` 是无效值，不同浏览器行为不一致；现代浏览器里 CSP `frame-ancestors` 会覆盖 XFO，所以"可嵌入"页面最稳的是**删掉 XFO、只留 `frame-ancestors *`**（即上面第二条规则里把 `X-Frame-Options` 那行去掉，保留 `! X-Frame-Options`）。
2. 若某页面同时要被嵌入又要 `noindex`，两条都在同一个 block 里设，别拆到两个 block（否则 CSP 会被逗号拼接成两条策略，浏览器按**交集**执行，等于收紧回 `'self'`）。

### 4.3 `wrangler.jsonc`（assets-only，无 `main`）

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "rgba-to-hex",
  "compatibility_date": "2026-11-19",
  "assets": {
    "directory": "./out",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "404-page"
  }
}
```

- `main` 对"纯静态 Worker"是**可选**的（官方原文："The `main` key is optional for assets-only Workers"）：https://developers.cloudflare.com/workers/wrangler/configuration/
- 纯静态 Worker **不需要 `nodejs_compat`/`nodejs_als`**（没有 JS 运行时执行你的代码），也不需要 `assets.binding`（binding 只在有 `main` 时有意义，见 https://developers.cloudflare.com/workers/static-assets/binding/ ）。
- `html_handling` 默认就是 `auto-trailing-slash`，写出来是为了自文档化。行为（官方表）：
  | 请求 | 响应 | 实际文件 |
  |---|---|---|
  | `/file` | 200 | `/file.html` |
  | `/file.html` / `/file/` | 307 → `/file` | – |
  | `/folder` | 307 → `/folder/` | – |
  | `/folder/` | 200 | `/folder/index.html` |

  链接：https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/
- `not_found_handling: "404-page"` 会返回最近的 `404.html` 且状态码 404（Next 导出必带 `out/404.html`）：https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/
- 本项目实测：`wrangler 4.165.0 deploy --dry-run` 输出 `Read 921 files from the assets directory`、`Total Upload: 0.34 KiB`（无 Worker 脚本）、`No bindings found`，配置通过。

### 4.4 命令

```bash
# 1) 构建（产物在 out/）
npm run build                     # next build

# 2) 本地按 Workers 运行时预览静态资源
npx wrangler dev                  # 默认 8787，可用 --port 指定

# 3) 首次部署（会创建 assets-only Worker）
npx wrangler deploy

# 4) 上线前自检（不真正部署）
npx wrangler deploy --dry-run
```

CI（Git 集成）：Cloudflare 的 **Workers Builds** 里把 Build command 设为 `npm run build`、Deploy command 设为 `npx wrangler deploy`（免费 3,000 分钟/月，见 §6）。链接：https://developers.cloudflare.com/workers/ci-cd/builds/

### 4.5 上线后验收清单（curl 级）

```bash
curl -sI https://rgbatohex.com/ | grep -iE 'x-frame-options|content-security-policy|cache-control'
curl -sI https://rgbatohex.com/tools/color-converter | grep -iE 'x-robots-tag|content-security-policy'
curl -sI https://rgbatohex.com/tools/rgb-to-hex.html   # 期望 307 → /tools/rgb-to-hex
curl -s -o /dev/null -w '%{http_code}\n' https://rgbatohex.com/not-exist   # 期望 404
curl -s https://rgbatohex.com/sitemap.xml | head -5
curl -s https://rgbatohex.com/robots.txt
```

---

## 5. 静态导出路径的坑（按本项目实测排序）

### 5.1 【实测·阻塞】`sitemap.ts` / `robots.ts` 必须 `force-static`

在仓库副本上跑 `next build`（已删 middleware、已开 `output: 'export'`）会失败：

```
Error: export const dynamic = "force-static"/export const revalidate not configured
on route "/sitemap.xml" with "output: export".
> Build error occurred
[Error: Failed to collect page data for /sitemap.xml]
```

补完 `sitemap` 后继续报 `/robots.txt` 同样错误。修复（两处都要）：

```ts
// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { SITEMAP_ROUTES } from '@/lib/seo/siteRoutes';

export const dynamic = 'force-static';   // ← 关键
// export const revalidate = false;      // 可选，双保险

// src/app/robots.ts
import { MetadataRoute } from 'next';
export const dynamic = 'force-static';   // ← 关键
```

修复后实测构建成功：`out/` 共 **716 个文件 / 21 MB / 179 个 HTML**（178 条路由 + `404.html`），并生成 `out/sitemap.xml`（19 KB）、`out/robots.txt`、`out/404.html`、`out/_headers`；最大单文件 2.1 MB（远低于 25 MiB）。
参考：https://github.com/vercel/next.js/discussions/73022 、https://nextjs.org/docs/app/guides/static-exports

### 5.2 middleware 与静态导出互斥

见 §4.2。Next 15.5 是警告 + 静默禁用（**最容易漏**：页面还在，但响应头没了），Next 16 是硬报错。删 `src/middleware.ts`，逻辑搬到 `_headers`。

### 5.3 `next.config` 里的 `headers()/redirects()/rewrites()` 全部失效

静态导出把这些列为 unsupported（https://nextjs.org/docs/15/app/guides/static-exports ）：
- `headers()` → 用 `_headers`（响应头）、`_redirects`（跳转，Workers 支持，见 https://developers.cloudflare.com/workers/static-assets/redirects/ ）
- `redirects()` → `_redirects` 或 Cloudflare **Redirect Rules**
- `rewrites()` → 无静态等价物，需要 Worker 脚本

### 5.4 `next/image` 与 `/_next/image`

- 默认 loader 在导出模式**不可用**（文档明确列为不支持），必须 `images.unoptimized: true` 或自定义 `loaderFile`。
- 设了 `unoptimized` 后 `<Image>` 渲染普通 `<img>`，**不会**再请求 `/_next/image`；但历史 HTML/外链若命中 `/_next/image?...` 会 404（正常预期）。
- 本站 50 个文件 import 了 `next/image`，实际渲的都是 `public/*.svg`；Next 对 `.svg` 本来就自动 `unoptimized`，所以视觉/性能无变化。

### 5.5 trailing slash 语义变化

Vercel 默认 `/tools/x` 不带斜杠、`/tools/x/` 308 → `/tools/x`；Workers `auto-trailing-slash` 用 **307** 去斜杠（临时跳转，不是 308）。SEO 上可接受，但若在意"永久跳转"信号，可在 `_redirects`/Redirect Rules 里显式 301/308。参考 §4.3 表。

### 5.6 404 页面

Next 导出生成 `out/404.html`；Workers 需要显式 `not_found_handling: "404-page"` 才会拿它当 404（**默认**是不匹配就返回 Cloudflare 的 404/或交给 Worker）。Pages 是自动嗅探 `404.html`，Workers 不自动 —— 这是从 Pages 迁过来最常见的"404 变白屏"原因。

### 5.7 缓存头默认是 `max-age=0, must-revalidate`

Workers 静态资源默认 `Cache-Control: public, max-age=0, must-revalidate` + `ETag`；`_next/static/*` 是带 hash 的不可变文件，应在 `_headers` 里改成 `public, max-age=31536000, immutable`（本仓库已加）。参考：https://developers.cloudflare.com/workers/static-assets/headers/

### 5.8 其他

- **Range 请求**：Workers 静态资源对 `Range` 返回 200 全量、无 `Content-Range`，Safari 播视频/大文件会受影响；本站无视频，忽略即可。https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
- **`next/font/google`**：`Geist`/`Geist_Mono` 在**构建期**下载字体；构建机（含 Workers Builds）需能访问 Google Fonts，否则 build 失败。
- **`_headers` 不作用于 Worker 生成的响应**：将来若改成 OpenNext/有 Worker 脚本，HTML 由 Worker 返回，`_headers` 对它无效，必须回到 middleware/`Response` 里设头。https://developers.cloudflare.com/workers/static-assets/headers/
- **ISR/`revalidate`**：导出模式完全不支持；OpenNext 下纯 SSG 用 `staticAssetsIncrementalCache` 即可，**不需要 KV**（KV 官方"不推荐，最终一致"），ISR 才需要 R2 + Durable Object Queue + D1 tag cache。https://opennext.js.org/cloudflare/caching
- 两个 `next.config.js` / `next.config.ts` 并存时只有 `next.config.js` 生效（`CONFIG_FILES` 顺序），仓库已删 `.js`，以后别再建第二个。

---

## 6. 免费额度与限制（2026-11）

| 项目 | 数值 | 来源 |
|---|---|---|
| Workers 免费请求 | **100,000 / 天**（UTC 重置） | https://developers.cloudflare.com/workers/platform/limits/ |
| 静态资源请求 | **免费、不限量**（不计入 Worker 请求） | https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/ |
| 单文件大小 | **25 MiB**（免费/付费相同） | https://developers.cloudflare.com/workers/platform/limits/ |
| 每 Worker 版本文件数 | 免费 **20,000**，付费 100,000 | 同上 |
| `_headers` | 100 条规则，单行 2,000 字符 | 同上 |
| `_redirects` | 2,000 静态 + 100 动态 = 2,100 | 同上 |
| Workers Builds | 免费 **3,000 分钟/月**，1 并发，单次 20 分钟超时 | https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/ |
| Workers Paid | \$5/月，10M 请求 included | https://developers.cloudflare.com/workers/platform/pricing/ |
| Pages 免费 | 500 builds/月、1 并发、20,000 文件、25 MiB/文件 | https://developers.cloudflare.com/pages/platform/limits/ |

自定义域名 / SSL / apex：

- **Custom Domain**：需域名所在 zone 在同一个 Cloudflare 账户；Cloudflare 自动建 DNS 记录并签发证书；**不能**给已存在 CNAME 的主机名加 Custom Domain（要先删旧记录）。入口：Worker → Settings → Domains & Routes → Add → Custom Domain；也可 `routes: [{ pattern: "rgbatohex.com", custom_domain: true }]`。https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
- **SSL**：zone 激活后自动签发/续期免费 Universal SSL，覆盖 apex 与一级子域（`rgbatohex.com`、`www.rgbatohex.com`）。https://developers.cloudflare.com/ssl/edge-certificates/universal-ssl/
- **apex**：Custom Domain 支持根域；Cloudflare 的 **CNAME flattening** 让根域也能用 CNAME（Pages 根域自定义域就是这个机制）。https://developers.cloudflare.com/dns/cname-flattening/
- **www → apex 301**：用 **Redirect Rules**（面板：zone → **Rules → Redirect Rules → Create rule**，模板可选 "Redirect from WWW to root"），或 Bulk Redirects。注意 `www` 需要一条 proxied 的占位记录（如 `AAAA 100::`，橙云），否则规则不生效。https://developers.cloudflare.com/rules/redirect-rules/

---

## 7. 从 Vercel 迁出：DNS 实操

### 7.0 先查（决定走哪条路）

```bash
dig +short NS rgbatohex.com          # 是不是 ns1/ns2.vercel-dns.com？
dig +short A rgbatohex.com           # 现在指向 76.76.21.x 之类 = Vercel
dig +short CNAME www.rgbatohex.com
whois rgbatohex.com | grep -iE 'registrar|name server'   # 注册商是谁（Vercel 还是别家）
```

- NS 是 **ns1/ns2.vercel-dns.com** → 权威 DNS 在 Vercel，**只改注册商的 A 记录没有任何用**，必须改 NS。（Vercel 的 NS 就是这两个：https://vercel.com/docs/domains/working-with-nameservers）
- 域名是在 **Vercel 注册**的 → 面板可直接改 custom nameservers（最多 4 个）指向 Cloudflare；账号被 suspend 时可能受限，必要时把域名转出到别的注册商。
- 域名在别家注册、NS 也在别家 → 仍然建议把 zone 整体迁到 Cloudflare（Custom Domain 要求 zone 在本账户）。

### 7.1 迁移步骤（低停机）

1. **提前 24h 降 TTL**：Vercel DNS 默认 TTL 60s，把要改的记录降到 60s（Vercel KB 建议至少提前一天：https://vercel.com/kb/guide/how-to-manage-vercel-dns-records ）。
2. **在 Cloudflare 添加 zone**（Full setup），用 DNS quick scan + **手工核对** 记录：apex、`www`、`MX`、`SPF/DKIM/DMARC`、各类验证 TXT（quick scan 不保证全）。https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
3. **先在 `*.workers.dev` 验证**：`npx wrangler deploy` 后用 `https://rgba-to-hex.<account>.workers.dev` 跑 §4.5 清单。
4. **改注册商 NS** 为 Cloudflare 分配的两个 NS；等 zone 变 **Active**、Universal SSL 变 Active（几分钟到 24h）。https://developers.cloudflare.com/fundamentals/performance/minimize-downtime/
5. **删掉旧的 apex/`www` A/CNAME（指向 Vercel 的）**，再在 Worker 上加 **Custom Domain**：`rgbatohex.com`、`www.rgbatohex.com`（有旧 CNAME 会直接加不上）。
6. 配 **www → apex 301** Redirect Rule（§6）。
7. 观察 24–48h：`dig` 各地解析、Search Console 抓取、`curl -I` 头。

### 7.2 最容易漏的 DNS 坑

1. **Vercel 仍持有 NS**：只改注册商 A/CNAME 无效；要改的是 NS。Vercel suspend 只让站点返回 **503 `DEPLOYMENT_PAUSED`**，DNS 照常解析（https://vercel.com/kb/guide/why-is-my-account-deployment-blocked ），所以"域名还能解析"不代表"已经迁走"。
2. **只在注册商改了域名服务器，却忘了先在 Cloudflare 建好记录** → 切换瞬间 NXDOMAIN。
3. **漏搬邮件记录**（MX/SPF/DKIM/DMARC）→ 网站好了，邮件挂了。
4. **旧 apex A 记录没删** → Custom Domain 加不上（报 hostname 已有记录）。
5. **Cloudflare 代理状态**：新 zone 建议记录先 DNS-only，证书 Active 后再开橙云（官方 minimize-downtime 建议）。
6. **域名锁/转出限制**：Vercel 注册的域名若开了锁或账号异常，改 NS/转出会被卡，需要工单。

---

## 8. 成本 / 功能对比

| | Cloudflare 免费 | Cloudflare Workers Paid | Vercel Hobby | Vercel Pro |
|---|---|---|---|---|
| 价格 | \$0 | \$5/月 | \$0 | \$20/月/席位 |
| 静态请求 | **免费不限量** | 免费不限量 | 1M CDN 请求/月 | Flat Rate CDN / 用量计费 |
| 流量 | 不限（静态资源） | 不限 | 100 GB Fast Data Transfer/月 | \$20 included credit 起 |
| Worker/函数 | 100k 请求/天 | 10M 请求/月 included | 1M invocations/月 | 按量 |
| 构建 | 3,000 分钟/月（Workers Builds） | 6,000 分钟/月 | Included（basic） | \$0.007/分钟起 |
| 文件数/单文件 | 20k / 25 MiB | 100k / 25 MiB | — | — |
| 商业使用 | 允许 | 允许 | **仅个人非商业** | 允许 |
| 自定义域 + SSL | 免费 | 免费 | 免费 | 免费 |

来源：https://developers.cloudflare.com/workers/platform/pricing/ 、https://vercel.com/pricing 、https://vercel.com/docs/plans/hobby 、https://vercel.com/docs/limits/fair-use-guidelines

> 对本站：Cloudflare 免费档完全够用（静态请求不计费、20k 文件上限 vs 实际 716 个、25 MiB vs 实际 2.1 MB）。

---

## 9. 执行清单

- [x] 删除 `src/middleware.ts`，逻辑迁到 `public/_headers`（含 `!` detach）
- [x] `next.config.ts`：`output: 'export'` + `images.unoptimized: true`（并删除多余的 `next.config.js`）
- [ ] **`src/app/sitemap.ts`、`src/app/robots.ts` 各加 `export const dynamic = 'force-static'`**（不加则 build 失败，实测）
- [ ] 新增 `wrangler.jsonc`（§4.3），`.gitignore` 已含 `/out/`
- [ ] `npm run build` → 确认 `out/` 有 179 个 HTML、`sitemap.xml`、`robots.txt`、`404.html`、`_headers`
- [ ] `npx wrangler dev` 本地验收 §4.5 清单
- [ ] `npx wrangler deploy` 到 `*.workers.dev` 复验
- [ ] DNS：降 TTL → Cloudflare 建 zone → 核对记录 → 改 NS → Active + 证书
- [ ] 加 Custom Domain（apex + www），删旧 Vercel 记录
- [ ] 加 www→apex 301 Redirect Rule
- [ ] Search Console 重新验证 + 提交 sitemap；观察 48h
- [ ] 清理 Vercel 项目/域名绑定（避免两边都活着造成混淆）

---

## 10. 参考链接

- Workers Static Assets 总览：https://developers.cloudflare.com/workers/static-assets/
- 静态资源计费（请求免费不限量）：https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
- Workers 平台限制（20k 文件 / 25 MiB / 100k 请求）：https://developers.cloudflare.com/workers/platform/limits/
- Workers 定价：https://developers.cloudflare.com/workers/platform/pricing/
- Workers `_headers`：https://developers.cloudflare.com/workers/static-assets/headers/
- Worker 静态资源 html_handling：https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/
- Worker 静态资源 SSG / 自定义 404：https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/
- Wrangler 配置（`main` 对 assets-only 可选）：https://developers.cloudflare.com/workers/wrangler/configuration/
- Workers Builds 限额：https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/
- Custom Domains：https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
- Universal SSL：https://developers.cloudflare.com/ssl/edge-certificates/universal-ssl/
- CNAME flattening：https://developers.cloudflare.com/dns/cname-flattening/
- Full setup（改 NS）：https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- Minimize downtime：https://developers.cloudflare.com/fundamentals/performance/minimize-downtime/
- Redirect Rules：https://developers.cloudflare.com/rules/redirect-rules/
- Pages 文档（"新项目请用 Workers"）：https://developers.cloudflare.com/pages/
- Pages 限额：https://developers.cloudflare.com/pages/platform/limits/
- Pages `_headers`：https://developers.cloudflare.com/pages/configuration/headers/
- Pages 静态 Next 指南：https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Pages→Workers 迁移：https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/
- Next.js on Workers（vinext 为首选）：https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- OpenNext adapter（维护既有应用）：https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/
- OpenNext 文档：https://opennext.js.org/cloudflare （版本支持）、`/get-started`、`/caching`、`/howtos/image`、`/cli`
- OpenNext npm 元数据（1.20.17 / peer 范围）：https://registry.npmjs.org/@opennextjs/cloudflare
- vinext：https://vinext.dev/ 、https://github.com/cloudflare/vinext
- Next.js 静态导出文档：https://nextjs.org/docs/app/guides/static-exports ；Next 15 版本：https://nextjs.org/docs/15/app/guides/static-exports
- Next `images.unoptimized`：https://nextjs.org/docs/app/api-reference/components/image#unoptimized
- Next middleware + export 报错讨论：https://github.com/vercel/next.js/discussions/87955
- Next sitemap + export 需 force-static：https://github.com/vercel/next.js/discussions/73022
- Vercel 定价：https://vercel.com/pricing
- Vercel Hobby：https://vercel.com/docs/plans/hobby
- Vercel Fair Use：https://vercel.com/docs/limits/fair-use-guidelines
- Vercel 暂停/503：https://vercel.com/kb/guide/why-is-my-account-deployment-blocked
- Vercel Nameservers：https://vercel.com/docs/domains/working-with-nameservers
- Vercel DNS TTL 建议：https://vercel.com/kb/guide/how-to-manage-vercel-dns-records
- Vercel DEPLOYMENT_DISABLED：https://vercel.com/docs/errors/deployment_disabled
