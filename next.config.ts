import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // 如果你想使用 turbopack，可以恢复这个脚本
  // 但建议先使用标准的 webpack 模式
};

export default nextConfig;
