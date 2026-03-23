'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { TokenExportPanel } from '@/components/color-tools';
import { isValidHex } from '@/utils/colorConverter';
import {
  TOKEN_SCALE_STEP_KEYS,
  buildCssVariableExportFromRoles,
  buildCssVariableExportFromScale,
  buildJsonRoleTokenExport,
  buildJsonTokenExportFromScale,
  buildTailwindColorExportFromScale,
  buildTailwindRoleExport,
  type TokenScaleInput,
  type TokenScaleStepKey,
} from '@/utils/designTokens';
import { generateOklchScale } from '@/utils/oklchScale';

type ExporterMode = 'scale' | 'roles';
type ExporterSourceMode = 'manual-scale' | 'manual-roles' | 'oklch' | 'accessible-palette';

type TokenRoleState = {
  primary: string;
  surface: string;
  text: string;
  border: string;
};

type DesignTokenColorExporterClientProps = {
  initialSource?: string;
  initialTokenName?: string;
  initialScale?: string;
  initialRoles?: string;
};

const DEFAULT_SCALE = generateOklchScale('#6366F1');
const DEFAULT_SCALE_STEPS = Object.fromEntries(
  TOKEN_SCALE_STEP_KEYS.map((key) => [key, DEFAULT_SCALE?.steps.find((step) => String(step.key) === key)?.hex ?? '']),
) as Record<TokenScaleStepKey, string>;

const DEFAULT_ROLE_VALUES: TokenRoleState = {
  primary: '#6366F1',
  surface: '#F8FAFC',
  text: '#111827',
  border: '#CBD5E1',
};

function normalizeTokenName(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || 'brand';
}

function normalizeHexValue(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }

  const withHash = trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
  if (!isValidHex(withHash)) {
    return trimmed;
  }

  if (withHash.length === 4) {
    return `#${withHash
      .slice(1)
      .split('')
      .map((character) => `${character}${character}`)
      .join('')
      .toUpperCase()}`;
  }

  return withHash.toUpperCase();
}

function getColorPickerValue(value: string, fallback: string) {
  const normalized = normalizeHexValue(value);
  if (normalized.length === 7) {
    return normalized;
  }

  return fallback;
}

function parseImportedScale(scaleParam?: string): Record<TokenScaleStepKey, string> | null {
  if (!scaleParam) {
    return null;
  }

  try {
    const parsed = JSON.parse(scaleParam) as Record<string, string>;
    const normalizedEntries = TOKEN_SCALE_STEP_KEYS.map((key) => {
      const value = normalizeHexValue(parsed[key]);
      return [key, value] as const;
    });

    if (normalizedEntries.some(([, value]) => !value || !isValidHex(value))) {
      return null;
    }

    return Object.fromEntries(normalizedEntries) as Record<TokenScaleStepKey, string>;
  } catch (error) {
    console.error('Failed to parse imported scale:', error);
    return null;
  }
}

function parseImportedRoles(rolesParam?: string): TokenRoleState | null {
  if (!rolesParam) {
    return null;
  }

  try {
    const parsed = JSON.parse(rolesParam) as Partial<TokenRoleState>;
    const normalized = {
      primary: normalizeHexValue(parsed.primary ?? ''),
      surface: normalizeHexValue(parsed.surface ?? ''),
      text: normalizeHexValue(parsed.text ?? ''),
      border: normalizeHexValue(parsed.border ?? ''),
    };

    if (Object.values(normalized).some((value) => !value || !isValidHex(value))) {
      return null;
    }

    return normalized;
  } catch (error) {
    console.error('Failed to parse imported roles:', error);
    return null;
  }
}

export default function DesignTokenColorExporterClient({
  initialSource,
  initialTokenName,
  initialScale,
  initialRoles,
}: DesignTokenColorExporterClientProps) {
  const parsedImportedScale = parseImportedScale(initialScale);
  const parsedImportedRoles = parseImportedRoles(initialRoles);

  const defaultMode: ExporterMode =
    initialSource === 'accessible-palette' && parsedImportedRoles
      ? 'roles'
      : initialSource === 'manual-roles'
        ? 'roles'
        : 'scale';

  const defaultSourceMode: ExporterSourceMode =
    initialSource === 'accessible-palette' && parsedImportedRoles
      ? 'accessible-palette'
      : initialSource === 'oklch' && parsedImportedScale
        ? 'oklch'
        : initialSource === 'manual-roles'
          ? 'manual-roles'
          : 'manual-scale';

  const [mode, setMode] = useState<ExporterMode>(defaultMode);
  const [sourceMode, setSourceMode] = useState<ExporterSourceMode>(defaultSourceMode);
  const [tokenNameInput, setTokenNameInput] = useState(initialTokenName ?? 'brand');
  const [scaleInputs, setScaleInputs] = useState<Record<TokenScaleStepKey, string>>(parsedImportedScale ?? DEFAULT_SCALE_STEPS);
  const [roleInputs, setRoleInputs] = useState<TokenRoleState>(parsedImportedRoles ?? DEFAULT_ROLE_VALUES);

  const tokenName = useMemo(() => normalizeTokenName(tokenNameInput), [tokenNameInput]);

  const normalizedScaleInputs = useMemo(
    () => Object.fromEntries(TOKEN_SCALE_STEP_KEYS.map((key) => [key, normalizeHexValue(scaleInputs[key])])) as Record<TokenScaleStepKey, string>,
    [scaleInputs],
  );

  const normalizedRoleInputs = useMemo(
    () => ({
      primary: normalizeHexValue(roleInputs.primary),
      surface: normalizeHexValue(roleInputs.surface),
      text: normalizeHexValue(roleInputs.text),
      border: normalizeHexValue(roleInputs.border),
    }),
    [roleInputs],
  );

  const isScaleValid = useMemo(
    () => TOKEN_SCALE_STEP_KEYS.every((key) => Boolean(normalizedScaleInputs[key]) && isValidHex(normalizedScaleInputs[key])),
    [normalizedScaleInputs],
  );

  const isRoleValid = useMemo(
    () => Object.values(normalizedRoleInputs).every((value) => Boolean(value) && isValidHex(value)),
    [normalizedRoleInputs],
  );

  const scaleExportInput = useMemo<TokenScaleInput>(
    () => ({
      tokenName,
      steps: normalizedScaleInputs,
    }),
    [normalizedScaleInputs, tokenName],
  );

  const cssVariables = useMemo(() => {
    if (mode === 'scale') {
      return isScaleValid ? buildCssVariableExportFromScale(scaleExportInput) : '';
    }

    return isRoleValid
      ? buildCssVariableExportFromRoles({
          tokenName,
          roles: normalizedRoleInputs,
        })
      : '';
  }, [isRoleValid, isScaleValid, mode, normalizedRoleInputs, scaleExportInput, tokenName]);

  const tailwindConfig = useMemo(() => {
    if (mode === 'scale') {
      return isScaleValid ? buildTailwindColorExportFromScale(scaleExportInput) : '';
    }

    return isRoleValid
      ? buildTailwindRoleExport({
          tokenName,
          roles: normalizedRoleInputs,
        })
      : '';
  }, [isRoleValid, isScaleValid, mode, normalizedRoleInputs, scaleExportInput, tokenName]);

  const jsonTokens = useMemo(() => {
    if (mode === 'scale') {
      return isScaleValid ? buildJsonTokenExportFromScale(scaleExportInput) : '';
    }

    return isRoleValid
      ? buildJsonRoleTokenExport({
          tokenName,
          roles: normalizedRoleInputs,
        })
      : '';
  }, [isRoleValid, isScaleValid, mode, normalizedRoleInputs, scaleExportInput, tokenName]);

  const isCurrentModeValid = mode === 'scale' ? isScaleValid : isRoleValid;

  const handleScaleInputChange = (key: TokenScaleStepKey, value: string) => {
    setScaleInputs((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleRoleInputChange = (key: keyof TokenRoleState, value: string) => {
    setRoleInputs((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/30">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="mx-auto mt-10 max-w-6xl space-y-8">
          <section className="rounded-[2rem] border border-gray-200 bg-white/90 p-8 shadow-xl shadow-indigo-100/60 dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">Token Delivery Workflow</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Design Token Color Exporter</h1>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Export color scales or semantic UI roles into CSS variables, Tailwind config fragments, and JSON tokens. Bring in a 50-950 ramp from the OKLCH generator or role mappings from the accessible palette workflow.
                </p>
              </div>
              <div className="rounded-3xl border border-indigo-200 bg-indigo-50/80 p-5 dark:border-indigo-900/60 dark:bg-indigo-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">Current source</p>
                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {sourceMode === 'oklch'
                    ? 'Imported scale'
                    : sourceMode === 'accessible-palette'
                      ? 'Imported roles'
                      : sourceMode === 'manual-roles'
                        ? 'Manual roles'
                        : 'Manual scale'}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Use the format that matches the deliverable your team actually needs in code.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex flex-wrap items-center gap-3">
                  {([
                    { key: 'scale', label: 'Scale' },
                    { key: 'roles', label: 'Semantic Roles' },
                  ] as const).map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => {
                        setMode(option.key);
                        setSourceMode(option.key === 'scale' ? 'manual-scale' : 'manual-roles');
                      }}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        mode === option.key
                          ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Token name</label>
                  <input
                    type="text"
                    value={tokenNameInput}
                    onChange={(event) => setTokenNameInput(event.target.value)}
                    className="mt-3 h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-indigo-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-indigo-500 dark:focus:bg-gray-900"
                    spellCheck={false}
                    placeholder="brand"
                  />
                </div>

                {mode === 'scale' ? (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {TOKEN_SCALE_STEP_KEYS.map((key) => (
                      <div key={key} className="min-w-0 rounded-2xl border border-gray-200 p-4 dark:border-gray-700">
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white">{key}</label>
                        <div className="mt-3 flex min-w-0 items-center gap-3">
                          <input
                            type="color"
                            value={getColorPickerValue(scaleInputs[key], DEFAULT_SCALE_STEPS[key] || '#6366F1')}
                            onChange={(event) => handleScaleInputChange(key, event.target.value)}
                            className="h-11 w-14 shrink-0 cursor-pointer rounded-xl border border-gray-200 bg-transparent p-1 dark:border-gray-700"
                            aria-label={`${key} color`}
                          />
                          <input
                            type="text"
                            value={scaleInputs[key]}
                            onChange={(event) => handleScaleInputChange(key, event.target.value)}
                            className="h-11 min-w-0 w-full flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-indigo-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-indigo-500 dark:focus:bg-gray-900"
                            spellCheck={false}
                            placeholder={DEFAULT_SCALE_STEPS[key]}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {([
                      { key: 'primary', label: 'Primary', fallback: '#6366F1' },
                      { key: 'surface', label: 'Surface', fallback: '#F8FAFC' },
                      { key: 'text', label: 'Text', fallback: '#111827' },
                      { key: 'border', label: 'Border', fallback: '#CBD5E1' },
                    ] as const).map((role) => (
                      <div key={role.key} className="min-w-0 rounded-2xl border border-gray-200 p-4 dark:border-gray-700">
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white">{role.label}</label>
                        <div className="mt-3 flex min-w-0 items-center gap-3">
                          <input
                            type="color"
                            value={getColorPickerValue(roleInputs[role.key], role.fallback)}
                            onChange={(event) => handleRoleInputChange(role.key, event.target.value)}
                            className="h-11 w-14 shrink-0 cursor-pointer rounded-xl border border-gray-200 bg-transparent p-1 dark:border-gray-700"
                            aria-label={`${role.label} color`}
                          />
                          <input
                            type="text"
                            value={roleInputs[role.key]}
                            onChange={(event) => handleRoleInputChange(role.key, event.target.value)}
                            className="h-11 min-w-0 w-full flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-indigo-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-indigo-500 dark:focus:bg-gray-900"
                            spellCheck={false}
                            placeholder={role.fallback}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>

            <div className="space-y-6">
              {isCurrentModeValid ? (
                <TokenExportPanel
                  tokenName={tokenName}
                  cssVariables={cssVariables}
                  tailwindConfig={tailwindConfig}
                  jsonTokens={jsonTokens}
                  eyebrow="Export Output"
                  title={mode === 'scale' ? `Export ${tokenName} scale` : `Export ${tokenName} semantic roles`}
                />
              ) : (
                <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-sm leading-7 text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
                  {mode === 'scale'
                    ? 'Enter valid HEX values for all 50-950 steps to generate export output.'
                    : 'Enter valid HEX values for primary, surface, text, and border to generate export output.'}
                </div>
              )}

              <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">How to use it</p>
                <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">Choose the structure that matches your real deliverable</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Scale mode</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                      Best for Tailwind-style ramps, design-system palettes, or any workflow that starts from a 50-950 scale and needs code output immediately.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Semantic roles</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                      Best for UI systems where the output should describe meaning, such as primary actions, page surfaces, readable text, and component borders.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-6 shadow-sm dark:border-indigo-900/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-slate-950">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">Why this is useful</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">This tool is for teams trying to move color decisions into real code faster</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
              Search intent here is usually broader than &quot;design token exporter&quot; itself. People are often trying to export CSS variables from a palette, generate Tailwind colors, convert semantic UI roles into a reusable token structure, or reduce repeated design-to-dev cleanup work.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What problem it solves</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  It stops color work from ending as loose notes, screenshots, and copied hex values by turning the final structure into code-ready output.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Who this helps</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful for design-system teams, front-end engineers, and product designers who need cleaner handoff into components, themes, and docs.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Best use cases</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Export 50-950 ramps, package semantic roles, or capture final color decisions after APCA review without retyping the same palette in multiple places.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">Recommended workflow</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Build the full workflow, not just the export file</h2>
              <ol className="mt-6 space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">1.</span> Start with the <Link href="/tools/oklch-scale-generator" className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">OKLCH Scale Generator</Link> when you need a broader 50-950 system.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">2.</span> Use the <Link href="/tools/accessible-palette-generator" className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">Accessible Palette Generator</Link> when the real task is semantic UI role selection.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">3.</span> Export only the structure your team actually needs: scale output for ramps, or semantic output for component systems.</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">4.</span> Validate critical text and surface pairs with the <Link href="/tools/apca-contrast-checker" className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">APCA Contrast Checker</Link> before rollout.</li>
              </ol>
            </div>
            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm dark:border-violet-900/50 dark:bg-violet-950/30">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Need more context?</p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">Read the design token workflow guide</h2>
              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                The guide explains when a palette should stay a scale, when it should become semantic roles, how teams name color tokens, and how export-ready output reduces duplicated handoff work.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/blog/design-token-color-system" className="inline-flex items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
                  Read the token workflow guide
                </Link>
                <Link href="/tools/accessible-palette-generator" className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-50 dark:border-violet-900/40 dark:bg-gray-900 dark:text-violet-300 dark:hover:bg-violet-950/20">
                  Generate semantic roles first
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
