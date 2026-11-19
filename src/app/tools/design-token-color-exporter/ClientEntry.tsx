'use client';

import { useEffect, useState } from 'react';
import DesignTokenColorExporterClient from './client';

type InitialParams = {
  initialSource?: string;
  initialTokenName?: string;
  initialScale?: string;
  initialRoles?: string;
};

function hasAnyValue(params: InitialParams) {
  return Object.values(params).some(Boolean);
}

/**
 * 静态导出后，服务端会在构建时把工具 UI 预渲染进 HTML（利于 SEO 和首屏）。
 * 这里在挂载后再读取 URL query（source / tokenName / scale / roles），
 * 一旦发现有参数就用 key 重新挂载客户端组件，把参数作为初始状态注入。
 *
 * 为什么不用 next/navigation 的 useSearchParams：那个 hook 会让整页在构建期
 * 退化成 Suspense fallback（HTML 里只剩 "Loading..."），query 参数只在少数
 * 跨工具跳转时出现，用 effect 读取对首屏和 SEO 更友好。
 */
export default function ClientEntry() {
  const [params, setParams] = useState<InitialParams>({});

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const next: InitialParams = {
      initialSource: search.get('source') ?? undefined,
      initialTokenName: search.get('tokenName') ?? undefined,
      initialScale: search.get('scale') ?? undefined,
      initialRoles: search.get('roles') ?? undefined,
    };

    if (hasAnyValue(next)) {
      setParams(next);
    }
  }, []);

  return <DesignTokenColorExporterClient key={hasAnyValue(params) ? 'query' : 'default'} {...params} />;
}
