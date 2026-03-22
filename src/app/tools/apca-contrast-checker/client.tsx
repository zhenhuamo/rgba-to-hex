'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import {
  ColorInputPanel,
  ColorRolePreview,
  ContrastScoreCard,
} from '@/components/color-tools';
import {
  calculateApcaContrast,
  calculateWcagContrast,
  getContrastVerdict,
  parseColorToRgb,
} from '@/utils/apcaContrast';

type ScenarioTone = 'pass' | 'fail' | 'caution';

type ScenarioPreview = {
  title: string;
  eyebrow: string;
  caption: string;
  variant: 'text' | 'button' | 'surface';
  foregroundColor: string;
  backgroundColor: string;
  sampleText: string;
  statusLabel: string;
  statusTone: ScenarioTone;
};

function normalizeHexInput(value: string): string | null {
  const trimmed = value.trim().replace(/^#/, '');

  if (/^[0-9a-fA-F]{3}$/.test(trimmed)) {
    return `#${trimmed
      .split('')
      .map((character) => `${character}${character}`)
      .join('')
      .toUpperCase()}`;
  }

  if (/^[0-9a-fA-F]{6}$/.test(trimmed)) {
    return `#${trimmed.toUpperCase()}`;
  }

  return null;
}

function rgbToHex(color: { r: number; g: number; b: number }) {
  return `#${[color.r, color.g, color.b]
    .map((channel) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`;
}

function blendRgb(
  foreground: { r: number; g: number; b: number },
  background: { r: number; g: number; b: number },
  alpha: number,
) {
  return {
    r: foreground.r * alpha + background.r * (1 - alpha),
    g: foreground.g * alpha + background.g * (1 - alpha),
    b: foreground.b * alpha + background.b * (1 - alpha),
  };
}

function getScenarioEvaluation(score: number, threshold: number): { label: string; tone: ScenarioTone } {
  const absoluteScore = Math.abs(score);

  if (absoluteScore >= threshold) {
    return { label: 'Pass', tone: 'pass' };
  }

  if (absoluteScore >= Math.max(45, threshold - 15)) {
    return { label: 'Close', tone: 'caution' };
  }

  return { label: 'Too Low', tone: 'fail' };
}

export default function ApcaContrastCheckerClient() {
  const [foregroundInput, setForegroundInput] = useState('#111827');
  const [backgroundInput, setBackgroundInput] = useState('#F9FAFB');

  const normalizedForeground = useMemo(() => normalizeHexInput(foregroundInput), [foregroundInput]);
  const normalizedBackground = useMemo(() => normalizeHexInput(backgroundInput), [backgroundInput]);

  const foregroundRgb = useMemo(
    () => (normalizedForeground ? parseColorToRgb(normalizedForeground) : null),
    [normalizedForeground],
  );
  const backgroundRgb = useMemo(
    () => (normalizedBackground ? parseColorToRgb(normalizedBackground) : null),
    [normalizedBackground],
  );

  const isValid = Boolean(normalizedForeground && normalizedBackground && foregroundRgb && backgroundRgb);

  const wcagScore = useMemo(() => {
    if (!normalizedForeground || !normalizedBackground) {
      return 0;
    }

    return calculateWcagContrast(normalizedForeground, normalizedBackground);
  }, [normalizedForeground, normalizedBackground]);

  const apcaScore = useMemo(() => {
    if (!normalizedForeground || !normalizedBackground) {
      return 0;
    }

    return calculateApcaContrast(normalizedForeground, normalizedBackground);
  }, [normalizedForeground, normalizedBackground]);

  const wcagVerdict = useMemo(() => getContrastVerdict(wcagScore, 'wcag'), [wcagScore]);
  const apcaVerdict = useMemo(() => getContrastVerdict(apcaScore, 'apca'), [apcaScore]);

  const scenarioPreviews = useMemo<ReadonlyArray<ScenarioPreview>>(() => {
    if (!foregroundRgb || !backgroundRgb || !normalizedForeground || !normalizedBackground) {
      return [];
    }

    const mutedForeground = rgbToHex(blendRgb(foregroundRgb, backgroundRgb, 0.72));
    const darkSurfaceBackground = rgbToHex(blendRgb(foregroundRgb, backgroundRgb, 0.9));

    const bodyScore = calculateApcaContrast(normalizedForeground, normalizedBackground);
    const mutedScore = calculateApcaContrast(mutedForeground, normalizedBackground);
    const buttonScore = calculateApcaContrast(normalizedBackground, normalizedForeground);
    const surfaceScore = calculateApcaContrast(normalizedBackground, darkSurfaceBackground);

    const bodyStatus = getScenarioEvaluation(bodyScore, 75);
    const mutedStatus = getScenarioEvaluation(mutedScore, 60);
    const buttonStatus = getScenarioEvaluation(buttonScore, 60);
    const surfaceStatus = getScenarioEvaluation(surfaceScore, 70);

    return [
      {
        title: 'Body Text',
        eyebrow: `APCA ${bodyScore.toFixed(1)} Lc`,
        caption: 'Target strong readability for paragraphs, setting descriptions, and dense interface copy.',
        variant: 'text',
        foregroundColor: normalizedForeground,
        backgroundColor: normalizedBackground,
        sampleText: 'Body copy should stay comfortable through long reading sessions.',
        statusLabel: bodyStatus.label,
        statusTone: bodyStatus.tone,
      },
      {
        title: 'Muted Text',
        eyebrow: `APCA ${mutedScore.toFixed(1)} Lc`,
        caption: 'Secondary labels can be softer, but still need enough perceptual separation to remain useful.',
        variant: 'text',
        foregroundColor: mutedForeground,
        backgroundColor: normalizedBackground,
        sampleText: 'Muted metadata and helper labels still need readable contrast.',
        statusLabel: mutedStatus.label,
        statusTone: mutedStatus.tone,
      },
      {
        title: 'Button',
        eyebrow: `APCA ${buttonScore.toFixed(1)} Lc`,
        caption: 'Filled CTA states flip polarity, which often changes APCA outcomes more dramatically than WCAG.',
        variant: 'button',
        foregroundColor: normalizedForeground,
        backgroundColor: normalizedBackground,
        sampleText: 'Primary Action',
        statusLabel: buttonStatus.label,
        statusTone: buttonStatus.tone,
      },
      {
        title: 'Dark Mode Surface',
        eyebrow: `APCA ${surfaceScore.toFixed(1)} Lc`,
        caption: 'Dark surfaces need enough separation for titles, summaries, and utility controls without glowing too hard.',
        variant: 'surface',
        foregroundColor: normalizedBackground,
        backgroundColor: darkSurfaceBackground,
        sampleText: 'Dark surface components need stable reading comfort too.',
        statusLabel: surfaceStatus.label,
        statusTone: surfaceStatus.tone,
      },
    ];
  }, [backgroundRgb, foregroundRgb, normalizedBackground, normalizedForeground]);

  const helperText = isValid
    ? 'Live calculations update as you change either color. APCA scores are shown in Lc, while WCAG keeps the traditional ratio scale.'
    : 'Use valid HEX input for both colors. Supported formats: #RGB and #RRGGBB.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="mx-auto mt-10 max-w-6xl space-y-8">
          <section className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white/90 p-8 shadow-xl shadow-blue-100/50 dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
                  Live Accessibility Workflow
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  APCA Contrast Checker
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Compare APCA and WCAG contrast outcomes for the same text/background pair, then pressure-test that pair across real UI scenarios like body copy, buttons, muted labels, and dark surfaces.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50/80 p-5 dark:border-blue-900/60 dark:bg-blue-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                  Focus
                </p>
                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">APCA + WCAG</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
                  APCA highlights perceptual readability and polarity, while WCAG gives the familiar ratio benchmark teams still rely on today.
                </p>
              </div>
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <ColorInputPanel
              title="Set your foreground and background pair"
              description="Enter two HEX colors and the tool will calculate both WCAG ratio and APCA Lc score in real time. This keeps the first release focused, but already useful for design-system reviews."
              foregroundColor={normalizedForeground ?? '#111827'}
              backgroundColor={normalizedBackground ?? '#F9FAFB'}
              foregroundInputValue={foregroundInput}
              backgroundInputValue={backgroundInput}
              foregroundPreviewColor={normalizedForeground ?? '#111827'}
              backgroundPreviewColor={normalizedBackground ?? '#F9FAFB'}
              helperText={helperText}
              onForegroundChange={setForegroundInput}
              onBackgroundChange={setBackgroundInput}
            />

            <div className="grid gap-6">
              <ContrastScoreCard
                title="WCAG Contrast"
                score={isValid ? `${wcagScore.toFixed(2)}:1` : '—'}
                status={isValid ? wcagVerdict.status : 'caution'}
                description={isValid ? wcagVerdict.description : 'Add two valid HEX colors to calculate the classic WCAG ratio.'}
                details={
                  isValid
                    ? [
                        `Verdict: ${wcagVerdict.label}`,
                        'AA threshold for normal text: 4.5:1',
                        'AAA threshold for normal text: 7:1',
                      ]
                    : ['Supported inputs: #RGB and #RRGGBB']
                }
              />

              <ContrastScoreCard
                title="APCA Contrast"
                score={isValid ? `${apcaScore.toFixed(1)} Lc` : '—'}
                status={isValid ? apcaVerdict.status : 'caution'}
                description={
                  isValid
                    ? apcaVerdict.description
                    : 'Add two valid HEX colors to calculate the APCA lightness contrast score.'
                }
                details={
                  isValid
                    ? [
                        `Verdict: ${apcaVerdict.label}`,
                        apcaScore < 0
                          ? 'Negative polarity: light text on a darker surface.'
                          : 'Positive polarity: darker text on a lighter surface.',
                        'Common APCA targets: 75+ for body text, 60+ for larger UI text.',
                      ]
                    : ['APCA score updates live after both colors validate.']
                }
              />
            </div>
          </div>

          <section className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900/70">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                Scenario Preview
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                See the pair under actual interface conditions
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                APCA is especially useful when the same palette needs to survive multiple UI roles. These previews show how one base pair behaves across content, utility text, buttons, and dark surfaces.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {scenarioPreviews.map((scenario) => (
                <ColorRolePreview
                  key={scenario.title}
                  title={scenario.title}
                  eyebrow={scenario.eyebrow}
                  caption={scenario.caption}
                  variant={scenario.variant}
                  foregroundColor={scenario.foregroundColor}
                  backgroundColor={scenario.backgroundColor}
                  sampleText={scenario.sampleText}
                  statusLabel={scenario.statusLabel}
                  statusTone={scenario.statusTone}
                />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
              APCA vs WCAG
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
              Why both scores matter
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">WCAG ratio</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  WCAG uses a familiar contrast ratio, which is still the baseline in many design reviews, documentation flows, and compliance checklists.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">APCA score</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  APCA accounts for polarity and perceived lightness more directly, which is why it can better reflect the reading comfort of modern UI patterns and dark themes.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-sm dark:border-blue-900/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-slate-950">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
              Why this matters in real work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Use this checker to make interface decisions before they become expensive
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
              This page is not only for comparing two numbers. It helps product teams catch low-contrast body text, avoid weak button states, and review dark-surface readability before design QA, front-end handoff, or accessibility remediation starts costing extra time.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design system reviews</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Validate token pairs for body copy, muted labels, CTA buttons, and dark surfaces before they spread across dozens of components.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Faster design-to-dev handoff</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Give product, design, and engineering one shared contrast reference instead of debating whether the pair only “looks okay” in mocks.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dark mode risk reduction</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  APCA is especially useful when polarity flips. That makes it valuable for themes, overlays, cards, and elevated surfaces where ratio-only review can miss nuance.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Recommended workflow</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">How teams usually get value from this tool</h2>
              <ol className="mt-6 space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">1.</span> Start with the real foreground/background pair from your component or design token set.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">2.</span> Compare the WCAG ratio and APCA Lc together so you can spot cases where the pair passes a checklist but still feels weak in reading comfort.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">3.</span> Review the scenario cards for text, muted labels, buttons, and dark surfaces before shipping the pair into production UI.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">4.</span> Open the deeper guide when your team needs language for policy, documentation, or design-system standards.</li>
              </ol>
            </div>
            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm dark:border-violet-900/50 dark:bg-violet-950/30">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Next step</p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">Need the reasoning behind APCA?</h2>
              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                Read the guide if you need to explain why APCA and WCAG can disagree, when polarity matters most, and how to use both methods in one practical accessibility workflow.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/blog/apca-vs-wcag" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Read APCA vs WCAG
                </Link>
                <Link href="/tools/color-contrast" className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-blue-900/40 dark:bg-gray-900 dark:text-blue-300 dark:hover:bg-blue-950/20">
                  Compare with the WCAG checker
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
