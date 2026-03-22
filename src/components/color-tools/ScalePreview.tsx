'use client';

import type { OklchScaleStep } from '@/utils/oklchScale';

type ScalePreviewProps = {
  tokenName: string;
  steps: ReadonlyArray<OklchScaleStep>;
  activeFormat: 'hex' | 'rgb' | 'hsl' | 'oklch';
  onCopy: (value: string, label: string) => void;
};

function formatValue(step: OklchScaleStep, format: ScalePreviewProps['activeFormat']) {
  if (format === 'hex') {
    return step.hex;
  }

  if (format === 'rgb') {
    return `rgb(${step.rgb.r}, ${step.rgb.g}, ${step.rgb.b})`;
  }

  if (format === 'hsl') {
    return `hsl(${step.hsl.h}, ${step.hsl.s}%, ${step.hsl.l}%)`;
  }

  return `oklch(${step.oklch.l} ${step.oklch.c} ${step.oklch.h})`;
}

export default function ScalePreview({ tokenName, steps, activeFormat, onCopy }: ScalePreviewProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Scale Preview</p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{tokenName || 'brand'}</h2>
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
          Tailwind-style 50-950 output generated from a single base color using a fixed OKLCH ramp.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
        {steps.map((step) => {
          const value = formatValue(step, activeFormat);
          const foreground = step.key >= 600 ? '#F9FAFB' : '#111827';

          return (
            <div key={step.key} className="grid grid-cols-[88px_1fr_auto] items-center border-b border-gray-200 last:border-b-0 dark:border-gray-700">
              <div className="px-4 py-4 text-sm font-semibold text-gray-700 dark:text-gray-200">{step.key}</div>
              <div className="flex items-center gap-4 px-4 py-4" style={{ backgroundColor: step.hex, color: foreground }}>
                <div className="h-9 w-9 rounded-xl border border-black/10 shadow-inner" style={{ backgroundColor: step.hex }} />
                <div>
                  <p className="text-sm font-semibold">{tokenName || 'brand'}-{step.key}</p>
                  <p className="mt-1 break-all text-xs opacity-90">{value}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onCopy(value, `${tokenName || 'brand'}-${step.key}`)}
                className="px-4 py-4 text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Copy
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
