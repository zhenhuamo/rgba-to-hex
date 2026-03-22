'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { ScalePreview, TokenExportPanel } from '@/components/color-tools';
import { buildCssVariableExport, buildJsonTokenExport, buildTailwindColorExport } from '@/utils/designTokens';
import { generateOklchScale } from '@/utils/oklchScale';

function normalizeHexInput(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function normalizeTokenName(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || 'brand';
}

export default function OklchScaleGeneratorClient() {
  const [baseHexInput, setBaseHexInput] = useState('#6366F1');
  const [tokenNameInput, setTokenNameInput] = useState('brand');
  const [activeFormat, setActiveFormat] = useState<'hex' | 'rgb' | 'hsl' | 'oklch'>('hex');
  const [copiedLabel, setCopiedLabel] = useState('');

  const tokenName = useMemo(() => normalizeTokenName(tokenNameInput), [tokenNameInput]);
  const scale = useMemo(() => generateOklchScale(baseHexInput), [baseHexInput]);

  const cssVariables = useMemo(() => (scale ? buildCssVariableExport(scale, tokenName) : ''), [scale, tokenName]);
  const tailwindConfig = useMemo(() => (scale ? buildTailwindColorExport(scale, tokenName) : ''), [scale, tokenName]);
  const jsonTokens = useMemo(() => (scale ? buildJsonTokenExport(scale, tokenName) : ''), [scale, tokenName]);

  const handleCopyValue = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(''), 2000);
    } catch (error) {
      console.error('Failed to copy scale value:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950/30">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="mx-auto mt-10 max-w-6xl space-y-8">
          <section className="rounded-[2rem] border border-gray-200 bg-white/90 p-8 shadow-xl shadow-violet-100/60 dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-300">
                  Modern Color Workflow
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  OKLCH Scale Generator
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Generate Tailwind-style 50-950 scales from a single base color, preview every step, and export the result as CSS variables, Tailwind config, or JSON tokens.
                </p>
              </div>
              <div className="rounded-3xl border border-violet-200 bg-violet-50/80 p-5 dark:border-violet-900/60 dark:bg-violet-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Output</p>
                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">50-950 Tokens</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Built for design-system ramps, Tailwind-style palettes, and color tokens that need smooth lightness transitions.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Inputs</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Start from a base color</h2>
              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Base HEX</label>
                  <div className="mt-3 flex items-center gap-3">
                    <input
                      type="color"
                      value={scale?.baseHex ?? '#6366F1'}
                      onChange={(event) => setBaseHexInput(event.target.value)}
                      className="h-12 w-16 cursor-pointer rounded-xl border border-gray-200 bg-transparent p-1 dark:border-gray-700"
                      aria-label="Base HEX color"
                    />
                    <input
                      type="text"
                      value={baseHexInput}
                      onChange={(event) => setBaseHexInput(normalizeHexInput(event.target.value))}
                      className="h-12 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-violet-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-violet-500 dark:focus:bg-gray-900"
                      spellCheck={false}
                      placeholder="#6366F1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Token name</label>
                  <input
                    type="text"
                    value={tokenNameInput}
                    onChange={(event) => setTokenNameInput(event.target.value)}
                    className="mt-3 h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-violet-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-violet-500 dark:focus:bg-gray-900"
                    placeholder="brand"
                    spellCheck={false}
                  />
                </div>

                <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Current token family</p>
                  <p className="mt-2 font-mono text-sm text-gray-600 dark:text-gray-300">{tokenName}</p>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    This first release keeps the input deliberately simple: one HEX color in, one reusable 50-950 ramp out.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Display format</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {(['hex', 'rgb', 'hsl', 'oklch'] as const).map((format) => (
                      <button
                        key={format}
                        type="button"
                        onClick={() => setActiveFormat(format)}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                          activeFormat === format
                            ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {format.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {scale ? (
                <>
                  <ScalePreview tokenName={tokenName} steps={scale.steps} activeFormat={activeFormat} onCopy={handleCopyValue} />
                  {copiedLabel ? (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
                      Copied {copiedLabel}
                    </div>
                  ) : null}
                </>
              ) : (
                <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-sm leading-7 text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
                  Enter a valid HEX value using <code>#RGB</code> or <code>#RRGGBB</code> to generate the scale.
                </div>
              )}
            </div>
          </section>

          {scale ? (
            <TokenExportPanel
              tokenName={tokenName}
              cssVariables={cssVariables}
              tailwindConfig={tailwindConfig}
              jsonTokens={jsonTokens}
            />
          ) : null}

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Why OKLCH</p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">Why this ramp feels smoother than RGB or HSL</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Perceptual lightness</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  OKLCH gives you a lightness axis that behaves more like real human perception, so the jump from 100 to 200 feels closer to the jump from 700 to 800.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chroma recovery at the ends</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  This generator intentionally pulls chroma back at the light and dark ends so the ramp stays usable instead of becoming washed out on top or muddy at the bottom.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-6 shadow-sm dark:border-violet-900/50 dark:from-violet-950/20 dark:via-gray-900 dark:to-indigo-950/20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Why this is useful</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Turn one brand color into decisions your product team can actually ship</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
              This generator is not only for making pretty swatches. It helps teams build a reusable scale for surfaces, borders, fills, focus states, charts, and dark-mode UI without manually tweaking eleven separate colors one by one.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design systems</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Start with one base brand color and quickly produce a full ramp for semantic tokens, component states, and multi-theme UI work.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-end implementation</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Export CSS variables, Tailwind colors, or JSON tokens so the palette can move directly into code instead of staying trapped in a design file.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Faster iteration</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Compare steps live, adjust one input color, and instantly see whether the scale stays useful across light UI, deep accents, and dark surfaces.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Recommended workflow</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">A practical way to use this scale in product work</h2>
              <ol className="mt-6 space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">1.</span> Choose the brand or feature color that should behave like your 500 anchor.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">2.</span> Generate the full 50-950 ramp and inspect whether the light steps are usable for backgrounds and the dark steps still feel rich.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">3.</span> Export tokens in the format your team already uses instead of rebuilding the same palette manually in design and code.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">4.</span> Validate key text and surface pairs with the <Link href="/tools/apca-contrast-checker" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">APCA Contrast Checker</Link> before rollout.</li>
              </ol>
            </div>
            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm dark:border-violet-900/50 dark:bg-violet-950/30">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Need more context?</p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">Read the OKLCH guide before standardizing your palette</h2>
              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                The guide explains why OKLCH feels smoother than RGB or HSL, how 50-950 ramps should behave across UI roles, and why export-ready token output matters once the scale leaves the experiment phase.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/blog/oklch-color-scale" className="inline-flex items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
                  Read the OKLCH scale guide
                </Link>
                <Link href="/tools/palette-generator" className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-50 dark:border-violet-900/40 dark:bg-gray-900 dark:text-violet-300 dark:hover:bg-violet-950/20">
                  Explore broader palette directions
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
