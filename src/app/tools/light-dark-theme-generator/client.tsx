'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { ContrastScoreCard, TokenExportPanel } from '@/components/color-tools';
import {
  buildShadcnThemeExport,
  buildThemeCssVariableExport,
  buildThemeJsonExport,
} from '@/utils/designTokens';
import {
  generateLightDarkTheme,
  type ThemeDiagnosticKey,
  type ThemeMode,
  type ThemeModeResult,
} from '@/utils/themeGenerator';

const DIAGNOSTIC_COPY: Record<
  ThemeDiagnosticKey,
  { title: string; description: string }
> = {
  foregroundOnBackground: {
    title: 'Foreground / Background',
    description: 'Body text must remain reliably readable on the page background. This pair defines the baseline reading experience for the whole theme.',
  },
  surfaceOnSurface: {
    title: 'Surface / Surface Foreground',
    description: 'Text inside cards, panels, and popovers cannot be merely visible. This pair determines the long-term usability of component surfaces.',
  },
  primaryOnPrimary: {
    title: 'Primary / Primary Foreground',
    description: 'Primary buttons and key CTAs need dependable text contrast. This pair decides whether critical actions are truly safe to ship.',
  },
  secondaryOnSecondary: {
    title: 'Secondary / Secondary Foreground',
    description: 'Secondary buttons are often quieter, but their text still needs clear readability and usable interaction states.',
  },
  accentOnAccent: {
    title: 'Accent / Accent Foreground',
    description: 'Accent areas work for tags, highlight blocks, and light interactions. They need both visual emphasis and readable content.',
  },
  mutedOnMuted: {
    title: 'Muted / Muted Foreground',
    description: 'Supporting copy can be softer, but not so weak that it loses its information hierarchy.',
  },
  borderOnBackground: {
    title: 'Border / Background',
    description: 'Borders and input lines do not need body-text contrast, but they must stay visible enough to create structure and separation.',
  },
};

function normalizeHexInput(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }

  return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function getStatusLabel(status: 'pass' | 'caution' | 'fail') {
  if (status === 'pass') {
    return 'Pass';
  }

  if (status === 'caution') {
    return 'Review';
  }

  return 'Fail';
}

function ThemeScaleStrip({
  title,
  subtitle,
  colors,
}: {
  title: string;
  subtitle: string;
  colors: ReadonlyArray<{ key: number; hex: string }>;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 dark:border-gray-700 dark:bg-gray-900/60">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-11 gap-2">
        {colors.map((step) => (
          <div key={step.key} className="space-y-2">
            <div
              className="h-10 w-full rounded-xl border border-black/5 shadow-inner"
              style={{ backgroundColor: step.hex }}
              title={`${step.key} ${step.hex}`}
            />
            <p className="text-center text-[11px] font-medium tracking-wide text-gray-500 dark:text-gray-400">
              {step.key}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThemePreview({
  mode,
  theme,
}: {
  mode: ThemeMode;
  theme: ThemeModeResult;
}) {
  const { roles } = theme;

  return (
    <section
      className="rounded-[2rem] border border-black/5 p-6 shadow-xl"
      style={{
        backgroundColor: roles.background.hex,
        color: roles.foreground.hex,
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">
            {mode === 'light' ? 'Light Theme' : 'Dark Theme'}
          </p>
          <h3 className="mt-2 text-2xl font-bold">Theme Preview</h3>
        </div>
        <div
          className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
          style={{
            backgroundColor: roles.secondary.hex,
            color: roles.secondaryForeground.hex,
          }}
        >
          Ready to Ship
        </div>
      </div>

      <div
        className="mt-6 rounded-3xl border border-black/5 p-5 shadow-lg"
        style={{ backgroundColor: roles.surface.hex, color: roles.surfaceForeground.hex }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">Dashboard Card</p>
            <h4 className="mt-3 text-2xl font-bold">Semantic roles, not random swatches</h4>
            <p className="mt-3 max-w-md text-sm leading-7 opacity-85">
              This preview intentionally covers the page background, card surface, buttons, input field, and focus ring so you see a theme system, not isolated colors.
            </p>
          </div>
          <div
            className="rounded-2xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{
              backgroundColor: roles.accent.hex,
              color: roles.accentForeground.hex,
            }}
          >
            Accent
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-2xl px-5 py-3 text-sm font-semibold shadow-lg transition"
            style={{
              backgroundColor: roles.primary.hex,
              color: roles.primaryForeground.hex,
            }}
          >
            Primary Action
          </button>
          <button
            type="button"
            className="rounded-2xl px-5 py-3 text-sm font-semibold transition"
            style={{
              backgroundColor: roles.secondary.hex,
              color: roles.secondaryForeground.hex,
            }}
          >
            Secondary Action
          </button>
        </div>

        <div
          className="mt-6 rounded-2xl border border-black/5 p-4"
          style={{ backgroundColor: roles.muted.hex, color: roles.mutedForeground.hex }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">Muted Block</p>
          <p className="mt-2 text-sm leading-7">
            This block simulates low-emphasis content so you can judge whether muted surfaces and muted text are still readable.
          </p>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium opacity-80">Input Field</label>
          <div
            className="mt-3 rounded-2xl border px-4 py-3 text-sm shadow-inner"
            style={{
              borderColor: roles.input.hex,
              color: roles.foreground.hex,
              boxShadow: `0 0 0 3px ${roles.ring.hex}55`,
            }}
          >
            Search themes, components, or brand decisions
          </div>
          <p className="mt-3 text-xs opacity-70">Focus ring uses `{roles.ring.hex}` and input line uses `{roles.input.hex}`.</p>
        </div>
      </div>
    </section>
  );
}

export default function LightDarkThemeGeneratorClient() {
  const [baseHexInput, setBaseHexInput] = useState('#6366F1');
  const [tokenNameInput, setTokenNameInput] = useState('brand');

  const theme = useMemo(
    () => generateLightDarkTheme({ baseHex: baseHexInput, tokenName: tokenNameInput }),
    [baseHexInput, tokenNameInput],
  );

  const cssVariables = useMemo(() => (theme ? buildThemeCssVariableExport(theme) : ''), [theme]);
  const shadcnExport = useMemo(() => (theme ? buildShadcnThemeExport(theme) : ''), [theme]);
  const jsonTokens = useMemo(() => (theme ? buildThemeJsonExport(theme) : ''), [theme]);

  const brandSteps = theme?.brandScale.steps ?? [];
  const neutralSteps = theme?.neutralScale.steps ?? [];

  const diagnosticCards = useMemo(() => {
    if (!theme) {
      return [];
    }

    const order: ReadonlyArray<ThemeDiagnosticKey> = [
      'foregroundOnBackground',
      'surfaceOnSurface',
      'primaryOnPrimary',
      'secondaryOnSecondary',
      'accentOnAccent',
      'mutedOnMuted',
      'borderOnBackground',
    ];

    return order.map((key) => {
      const item = theme.diagnostics.light[key];
      const copy = DIAGNOSTIC_COPY[key];

      return {
        key,
        title: copy.title,
        score: `WCAG ${item.wcag.toFixed(2)} · APCA ${item.apca.toFixed(1)} Lc`,
        status: item.status,
        description: copy.description,
        details: [
          `${item.foregroundRole}: ${item.foregroundHex}`,
          `${item.backgroundRole}: ${item.backgroundHex}`,
          `Status: ${getStatusLabel(item.status)} · ${item.label}`,
        ],
      };
    });
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-cyan-950/30">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="mx-auto mt-10 max-w-6xl space-y-8">
          <section className="rounded-[2rem] border border-gray-200 bg-white/90 p-8 shadow-xl shadow-cyan-100/60 dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">
                  Theme System Workflow
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  Light &amp; Dark Theme Generator
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Generate both light and dark themes from a single brand color, map semantic roles automatically, validate WCAG and APCA contrast, and export code-ready theme tokens.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-200 bg-cyan-50/80 p-5 dark:border-cyan-900/60 dark:bg-cyan-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                  Output
                </p>
                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Light + Dark Semantic Theme</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Built for CSS Variables, Tailwind v4, and shadcn-style theme systems, not just a pile of swatches.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Inputs</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Start from one brand color</h2>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Base HEX</label>
                  <div className="mt-3 flex items-center gap-3">
                    <input
                      type="color"
                      value={theme?.baseHex ?? '#6366F1'}
                      onChange={(event) => setBaseHexInput(event.target.value)}
                      className="h-12 w-16 cursor-pointer rounded-xl border border-gray-200 bg-transparent p-1 dark:border-gray-700"
                      aria-label="Base HEX color"
                    />
                    <input
                      type="text"
                      value={baseHexInput}
                      onChange={(event) => setBaseHexInput(normalizeHexInput(event.target.value))}
                      className="h-12 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-cyan-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-cyan-500 dark:focus:bg-gray-900"
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
                    className="mt-3 h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-cyan-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-cyan-500 dark:focus:bg-gray-900"
                    spellCheck={false}
                    placeholder="brand"
                  />
                </div>
              </div>

              {theme ? (
                <div className="mt-6 space-y-4">
                  <ThemeScaleStrip
                    title="Brand Scale"
                    subtitle="A 50-950 brand scale derived from the base color for primary, accent, and ring roles."
                    colors={brandSteps.map((step) => ({ key: step.key, hex: step.hex }))}
                  />
                  <ThemeScaleStrip
                    title="Neutral Scale"
                    subtitle="A low-chroma neutral scale on the same hue for background, surface, muted, border, and input roles."
                    colors={neutralSteps.map((step) => ({ key: step.key, hex: step.hex }))}
                  />
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm leading-7 text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
                  Enter a valid HEX color. Supports `#RGB` and `#RRGGBB`.
                </div>
              )}
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">What this solves</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Turn a brand color into a real production theme</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stop hand-building two separate themes</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    Most teams do not lack colors. They struggle to map one brand palette into stable semantic themes for both light and dark mode.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stop checking accessibility pair by pair</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    This tool validates key semantic pairs with both WCAG and APCA before export, instead of forcing rework later.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Export directly into code</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    The output is not an anonymous scale. It is a usable theme token set for background, surface, primary, muted, border, input, and ring.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fits shadcn and Tailwind workflows</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    The export matches `:root`, `.dark`, and `@theme inline` theme structures instead of stopping at the design-exploration layer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900/70">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                Dual Preview
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Preview light and dark themes side by side</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                This section shows real theme behavior across the page background, card surface, buttons, muted blocks, inputs, and focus rings, not just a color palette.
              </p>
            </div>

            {theme ? (
              <div className="mt-8 grid gap-6 xl:grid-cols-2">
                <ThemePreview mode="light" theme={theme.themes.light} />
                <ThemePreview mode="dark" theme={theme.themes.dark} />
              </div>
            ) : (
              <div className="mt-8 rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-400">
                Enter a valid brand color to generate the dual-theme preview.
              </div>
            )}
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                Contrast Diagnostics
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Accessibility results for key semantic pairs</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                The diagnostic cards summarize the core light-theme pairs first so you can quickly judge whether the system is strong enough for a component library or design system.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {diagnosticCards.map((card) => (
                <ContrastScoreCard
                  key={card.key}
                  title={card.title}
                  score={card.score}
                  status={card.status}
                  description={card.description}
                  details={card.details}
                />
              ))}
            </div>
          </section>

          {theme ? (
            <TokenExportPanel
              tokenName={theme.tokenName}
              cssVariables={cssVariables}
              tailwindConfig={shadcnExport}
              jsonTokens={jsonTokens}
              eyebrow="Theme Export"
              title={`Export ${theme.tokenName} light + dark theme`}
              tabLabels={{
                css: 'Theme CSS',
                tailwind: 'shadcn / Tailwind v4',
                json: 'JSON Tokens',
              }}
            />
          ) : null}

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                Search Intent Fit
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                Useful if you searched for more than just a color tool
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                People rarely need a random palette. They need an answer to a real implementation problem: how to turn one brand color into an accessible light and dark theme, how to generate shadcn theme values, or how to export semantic tokens that developers can ship.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dark mode color palette generator</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  If you need a dark mode color palette generator for a real product UI, this page gives you semantic background, surface, action, and border roles instead of disconnected swatches.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Shadcn theme generator</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  If you are looking for a shadcn theme generator, the export is already structured around `:root`, `.dark`, and the variable names modern shadcn-style themes expect.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Theme token generator</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  If what you need is a theme token generator, this workflow outputs semantic theme roles you can move into CSS variables, Tailwind v4, and JSON token pipelines.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Brand color dark mode</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  If your real question is how to make one brand color work in dark mode without killing readability, this tool is designed for that exact job.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                How To Use
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                How to use this light and dark theme generator
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                The workflow is intentionally short. You enter a base color, review the generated roles, verify accessibility, and copy the export format that matches your stack.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Step 1</p>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">Enter one brand HEX</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Paste a brand color like `#6366F1`, `#0F766E`, or `#F97316`. The generator builds both a brand scale and a neutral support scale from that single starting point.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Step 2</p>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">Review the light and dark previews</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Check how the system behaves on page backgrounds, cards, buttons, muted areas, inputs, and focus rings. This tells you whether the theme feels controlled in real UI, not just in a swatch row.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Step 3</p>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">Check accessibility before export</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Use the built-in diagnostics to confirm readable body text, button text, accent blocks, muted areas, and border visibility with both WCAG and APCA.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Step 4</p>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">Copy the export your team actually needs</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Choose Theme CSS for raw variables, shadcn / Tailwind v4 for app theming, or JSON Tokens for design token workflows and downstream tooling.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-cyan-50 p-5 dark:bg-cyan-950/20">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Who this helps most</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                This is especially useful for front-end developers building dark mode UI, design engineers maintaining token systems, indie makers shipping app themes quickly, and teams standardizing CSS variables or Tailwind theme tokens across products.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-slate-50 p-6 shadow-sm dark:border-cyan-900/50 dark:from-cyan-950/20 dark:via-gray-900 dark:to-slate-950">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Next Steps</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Keep refining your theme workflow</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
              If you want to review specific text contrast, regenerate the base OKLCH scale, or split token work into separate steps, these links continue the workflow without offloading the core job elsewhere.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/tools/apca-contrast-checker"
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900/80"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">APCA Contrast Checker</p>
                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Validate specific text, button, and dark-surface pairs in more detail.
                </p>
              </Link>
              <Link
                href="/tools/oklch-scale-generator"
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900/80"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">OKLCH Scale Generator</p>
                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Build a fuller 50-950 brand ramp first, then return to semantic theme mapping.
                </p>
              </Link>
              <Link
                href="/tools/design-token-color-exporter"
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900/80"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Design Token Exporter</p>
                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  If you only want to work on export formats, jump back to the dedicated token exporter.
                </p>
              </Link>
              <Link
                href="/blog/light-dark-theme-generator"
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900/80"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Read the Guide</p>
                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Read the full guide to understand why a brand color should not be dropped into dark mode without a real semantic system.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
