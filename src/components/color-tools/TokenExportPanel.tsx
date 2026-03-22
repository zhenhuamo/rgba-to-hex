'use client';

import { useMemo, useState } from 'react';

type TokenExportPanelProps = {
  tokenName: string;
  cssVariables: string;
  tailwindConfig: string;
  jsonTokens: string;
};

type ExportTab = 'css' | 'tailwind' | 'json';

const TAB_LABELS: Record<ExportTab, string> = {
  css: 'CSS Variables',
  tailwind: 'Tailwind',
  json: 'JSON Tokens',
};

export default function TokenExportPanel({ tokenName, cssVariables, tailwindConfig, jsonTokens }: TokenExportPanelProps) {
  const [activeTab, setActiveTab] = useState<ExportTab>('css');
  const [copied, setCopied] = useState(false);

  const currentValue = useMemo(() => {
    if (activeTab === 'css') return cssVariables;
    if (activeTab === 'tailwind') return tailwindConfig;
    return jsonTokens;
  }, [activeTab, cssVariables, tailwindConfig, jsonTokens]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy export code:', error);
    }
  };

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Token Export</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Export {tokenName || 'brand'} scale</h2>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {copied ? 'Copied' : 'Copy Code'}
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {(['css', 'tailwind', 'json'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setActiveTab(tab);
              setCopied(false);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      <pre className="mt-6 overflow-x-auto rounded-2xl bg-gray-950 p-5 text-sm leading-7 text-gray-100">
        <code>{currentValue}</code>
      </pre>
    </section>
  );
}
