import type { NextConfig } from "next";

/**
 * Cloudflare 部署配置（静态导出）。
 *
 * 这个站点全是静态页面，没有任何 API Route / Server Action / ISR，
 * 所以直接 `next build` 导出到 `out/`，再由 Cloudflare Workers 静态资源托管，
 * 请求不消耗 Worker 调用额度，也没有冷启动。
 *
 * `images.unoptimized` 是静态导出必需的：导出模式下 Next.js 不提供图片优化服务，
 * 所有 `next/image` 会退化成普通 <img>（本项目的图片都在 public/ 下，体积很小）。
 *
 * 注意：`output: 'export'` 不支持 middleware，原来的 src/middleware.ts
 * （设置 X-Frame-Options / CSP frame-ancestors / X-Robots-Tag）已改为
 * public/_headers，语义保持一致，见 docs/cloudflare-migration.md。
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
