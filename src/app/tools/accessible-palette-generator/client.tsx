'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { ColorRolePreview, ContrastScoreCard } from '@/components/color-tools';
import { generateAccessiblePalette } from '@/utils/accessiblePalette';

type RoleKey = 'primary' | 'surface' | 'text' | 'mutedText' | 'border' | 'accent';

const ROLE_LABELS: Record<RoleKey, string> = {
  primary: 'Primary',
  surface: 'Surface',
  text: 'Text',
  mutedText: 'Muted Text',
  border: 'Border',
  accent: 'Accent',
};

function normalizeTokenName(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || 'brand';
}

export default function AccessiblePaletteGeneratorClient() {
  const [baseHexInput, setBaseHexInput] = useState('#6366F1');
  const [tokenNameInput, setTokenNameInput] = useState('brand');
  const [copiedLabel, setCopiedLabel] = useState('');

  const tokenName = useMemo(() => normalizeTokenName(tokenNameInput), [tokenNameInput]);
  const palette = useMemo(() => generateAccessiblePalette(baseHexInput, tokenName), [baseHexInput, tokenName]);

  const exporterHref = useMemo(() => {
    if (!palette) {
      return '/tools/design-token-color-exporter';
    }

    const params = new URLSearchParams({
      source: 'accessible-palette',
      tokenName: palette.tokenName,
      roles: JSON.stringify({
        primary: palette.roles.primary.hex,
        surface: palette.roles.surface.hex,
        text: palette.roles.text.hex,
        border: palette.roles.border.hex,
      }),
    });

    return `/tools/design-token-color-exporter?${params.toString()}`;
  }, [palette]);

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(''), 2000);
    } catch (error) {
      console.error('Failed to copy role value:', error);
    }
  };

  const previewBlocks = palette
    ? [
        {
          key: 'textOnSurface',
          title: 'Body Text on Surface',
          eyebrow: `WCAG ${palette.evaluations.textOnSurface.wcag.toFixed(2)} · APCA ${palette.evaluations.textOnSurface.apca.toFixed(1)} Lc`,
          caption: 'Use this pair for paragraphs, settings text, and product copy that has to stay comfortable over longer reading sessions.',
          variant: 'text' as const,
          foregroundColor: palette.roles.text.hex,
          backgroundColor: palette.roles.surface.hex,
          sampleText: 'Readable UI starts when body text stays calm, clear, and durable.',
          statusLabel: palette.evaluations.textOnSurface.label,
          statusTone: palette.evaluations.textOnSurface.status,
        },
        {
          key: 'primaryOnSurface',
          title: 'Primary Action',
          eyebrow: `WCAG ${palette.evaluations.primaryOnSurface.wcag.toFixed(2)} · APCA ${palette.evaluations.primaryOnSurface.apca.toFixed(1)} Lc`,
          caption: 'The button preview uses the surface color for label text on a primary action background, which mirrors common product CTA patterns.',
          variant: 'button' as const,
          foregroundColor: palette.roles.primary.hex,
          backgroundColor: palette.roles.surface.hex,
          sampleText: 'Launch Workflow',
          statusLabel: palette.evaluations.primaryOnSurface.label,
          statusTone: palette.evaluations.primaryOnSurface.status,
        },
        {
          key: 'accentOnSurface',
          title: 'Accent on Surface',
          eyebrow: `WCAG ${palette.evaluations.accentOnSurface.wcag.toFixed(2)} · APCA ${palette.evaluations.accentOnSurface.apca.toFixed(1)} Lc`,
          caption: 'Accent colors should feel assertive enough for chips, highlights, or status markers without collapsing into the background.',
          variant: 'surface' as const,
          foregroundColor: palette.roles.accent.hex,
          backgroundColor: palette.roles.surface.hex,
          sampleText: 'Accent surfaces need distinction, not just decoration.',
          statusLabel: palette.evaluations.accentOnSurface.label,
          statusTone: palette.evaluations.accentOnSurface.status,
        },
      ]
    : [];

  const scoreCards = palette
    ? [
        {
          key: 'textOnSurface',
          title: 'Text on Surface',
          score: `${palette.evaluations.textOnSurface.wcag.toFixed(2)} / ${palette.evaluations.textOnSurface.apca.toFixed(1)} Lc`,
          status: palette.evaluations.textOnSurface.status,
          description: 'Body text should be the strongest pairing in the palette because it carries dense interface reading.',
          details: [`Text ${palette.roles.text.hex}`, `Surface ${palette.roles.surface.hex}`, `Steps ${palette.roles.text.sourceStep} on ${palette.roles.surface.sourceStep}`],
        },
        {
          key: 'mutedTextOnSurface',
          title: 'Muted Text on Surface',
          score: `${palette.evaluations.mutedTextOnSurface.wcag.toFixed(2)} / ${palette.evaluations.mutedTextOnSurface.apca.toFixed(1)} Lc`,
          status: palette.evaluations.mutedTextOnSurface.status,
          description: 'Muted text still needs enough separation for helper copy, metadata, and secondary labels to remain useful.',
          details: [`Muted ${palette.roles.mutedText.hex}`, `Surface ${palette.roles.surface.hex}`, `Steps ${palette.roles.mutedText.sourceStep} on ${palette.roles.surface.sourceStep}`],
        },
        {
          key: 'primaryOnSurface',
          title: 'Primary Action Pair',
          score: `${palette.evaluations.primaryOnSurface.wcag.toFixed(2)} / ${palette.evaluations.primaryOnSurface.apca.toFixed(1)} Lc`,
          status: palette.evaluations.primaryOnSurface.status,
          description: 'Primary buttons need visible emphasis and readable label contrast when the surface color is reused for button text.',
          details: [`Primary ${palette.roles.primary.hex}`, `Surface text ${palette.roles.surface.hex}`, `Primary step ${palette.roles.primary.sourceStep}`],
        },
        {
          key: 'accentOnSurface',
          title: 'Accent Visibility',
          score: `${palette.evaluations.accentOnSurface.wcag.toFixed(2)} / ${palette.evaluations.accentOnSurface.apca.toFixed(1)} Lc`,
          status: palette.evaluations.accentOnSurface.status,
          description: 'Accent roles should stand out enough for emphasis states, badges, or highlighted controls against the base surface.',
          details: [`Accent ${palette.roles.accent.hex}`, `Surface ${palette.roles.surface.hex}`, `Accent step ${palette.roles.accent.sourceStep}`],
        },
        {
          key: 'borderOnSurface',
          title: 'Border Visibility',
          score: `${palette.evaluations.borderOnSurface.wcag.toFixed(2)} / ${palette.evaluations.borderOnSurface.apca.toFixed(1)} Lc`,
          status: palette.evaluations.borderOnSurface.status,
          description: 'Borders do not need body-text contrast, but they do need enough separation to define cards, inputs, and containers.',
          details: [`Border ${palette.roles.border.hex}`, `Surface ${palette.roles.surface.hex}`, `Border step ${palette.roles.border.sourceStep}`],
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="mx-auto mt-10 max-w-6xl space-y-8">
          <section className="rounded-[2rem] border border-gray-200 bg-white/90 p-8 shadow-xl shadow-emerald-100/60 dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-300">Accessibility Workflow</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Accessible Palette Generator</h1>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Start from one base color and turn it into real UI roles for text, surfaces, borders, accents, and primary actions. This workflow checks each important pair with WCAG and APCA before you export anything.
                </p>
              </div>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-5 dark:border-emerald-900/60 dark:bg-emerald-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Output</p>
                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">6 semantic UI roles</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Generated for readable interfaces, token handoff, and design reviews that need more than a pretty palette.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">Inputs</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Generate from one base color</h2>
              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Base HEX</label>
                  <div className="mt-3 flex items-center gap-3">
                    <input
                      type="color"
                      value={palette?.baseHex ?? '#6366F1'}
                      onChange={(event) => setBaseHexInput(event.target.value)}
                      className="h-12 w-16 cursor-pointer rounded-xl border border-gray-200 bg-transparent p-1 dark:border-gray-700"
                      aria-label="Base HEX color"
                    />
                    <input
                      type="text"
                      value={baseHexInput}
                      onChange={(event) => setBaseHexInput(event.target.value)}
                      className="h-12 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-emerald-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-emerald-500 dark:focus:bg-gray-900"
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
                    className="mt-3 h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-emerald-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-emerald-500 dark:focus:bg-gray-900"
                    spellCheck={false}
                    placeholder="brand"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm leading-7 text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-100">
                The first release keeps the input simple: one base HEX in, accessible UI roles out. That makes it fast to audit a brand or feature color before it spreads through components.
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link href={exporterHref} className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Open in Design Token Exporter
                </Link>
                <Link href="/blog/accessible-color-palette" className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-900/40 dark:bg-gray-900 dark:text-emerald-300 dark:hover:bg-emerald-950/20">
                  Read the accessible palette guide
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">Generated roles</p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Token-ready accessibility roles</h2>
                </div>
                <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  {palette ? palette.tokenName : tokenName}
                </span>
              </div>

              {palette ? (
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {(Object.keys(palette.roles) as RoleKey[]).map((roleKey) => {
                    const role = palette.roles[roleKey];
                    const copyKey = `${roleKey}-copied`;

                    return (
                      <div key={roleKey} className="rounded-2xl border border-gray-200 p-5 shadow-sm dark:border-gray-700">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">{ROLE_LABELS[roleKey]}</p>
                            <p className="mt-2 font-mono text-lg font-semibold tracking-wide text-gray-900 dark:text-white">{role.hex}</p>
                          </div>
                          <div className="h-12 w-12 rounded-2xl border border-black/5 shadow-inner" style={{ backgroundColor: role.hex }} />
                        </div>

                        <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                          <span>Scale step {role.sourceStep}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(role.hex, copyKey)}
                            className="rounded-full bg-gray-100 px-3 py-1.5 font-semibold text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            {copiedLabel === copyKey ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-6 rounded-3xl border border-rose-200 bg-rose-50 p-6 text-sm leading-7 text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
                  Enter a valid HEX value to generate accessible UI roles.
                </div>
              )}
            </div>
          </section>

          {palette ? (
            <>
              <section className="grid gap-6 lg:grid-cols-3">
                {previewBlocks.map((preview) => (
                  <ColorRolePreview
                    key={preview.key}
                    title={preview.title}
                    foregroundColor={preview.foregroundColor}
                    backgroundColor={preview.backgroundColor}
                    sampleText={preview.sampleText}
                    eyebrow={preview.eyebrow}
                    caption={preview.caption}
                    variant={preview.variant}
                    statusLabel={preview.statusLabel}
                    statusTone={preview.statusTone}
                  />
                ))}
              </section>

              <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {scoreCards.map((card) => (
                  <ContrastScoreCard
                    key={card.key}
                    title={card.title}
                    score={card.score}
                    status={card.status}
                    description={card.description}
                    details={card.details}
                  />
                ))}
              </section>
            </>
          ) : null}

          <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-sm dark:border-emerald-900/50 dark:from-emerald-950/20 dark:via-gray-900 dark:to-slate-950">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">Why this is useful</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">This tool helps when one brand color has to become a usable interface system</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
              People usually do not land here because they want another palette gallery. They land here because they need to choose accessible text colors, find a workable button color, improve dark mode readability, or turn a base brand color into semantic roles that engineering can actually use.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Common jobs to solve</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Use it when you need body text on light surfaces, muted labels that still read well, stronger CTA colors, or borders that do not disappear in product UI.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Who this helps</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful for product designers, design-system teams, and front-end engineers who need semantic roles, not just isolated swatches.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recommended workflow</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Generate roles here, export stable values into the <Link href="/tools/design-token-color-exporter" className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">Design Token Color Exporter</Link>, then validate high-risk text and surface pairs with the <Link href="/tools/apca-contrast-checker" className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">APCA checker</Link>.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-900/40 dark:bg-gray-900/80">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What you get from one input color</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  <li>- A starting primary color for actions and emphasis</li>
                  <li>- A surface color that gives text room to breathe</li>
                  <li>- Text and muted text candidates that are easier to read</li>
                  <li>- Border and accent roles that are easier to apply in real components</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Need the strategy behind it?</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  The companion guide explains why beautiful brand palettes still fail in UI, how APCA and WCAG inform different decisions, and how to move from color exploration into token-ready implementation.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/blog/accessible-color-palette" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    Read the accessible palette guide
                  </Link>
                  <Link href={exporterHref} className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-900/40 dark:bg-gray-900 dark:text-emerald-300 dark:hover:bg-emerald-950/20">
                    Open in Design Token Exporter
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
