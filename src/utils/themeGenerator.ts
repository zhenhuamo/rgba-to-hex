import { calculateApcaContrast, calculateWcagContrast } from '@/utils/apcaContrast';
import { hexToOklch, isValidHex, type OKLCH } from '@/utils/colorConverter';
import {
  generateOklchScale,
  generateOklchScaleFromOklch,
  type OklchScaleResult,
  type OklchScaleStepKey,
} from '@/utils/oklchScale';

export type ThemeMode = 'light' | 'dark';

export type ThemeRole =
  | 'background'
  | 'foreground'
  | 'surface'
  | 'surfaceForeground'
  | 'primary'
  | 'primaryForeground'
  | 'secondary'
  | 'secondaryForeground'
  | 'muted'
  | 'mutedForeground'
  | 'accent'
  | 'accentForeground'
  | 'border'
  | 'input'
  | 'ring';

export type ThemeAliasRole =
  | 'background'
  | 'foreground'
  | 'card'
  | 'cardForeground'
  | 'popover'
  | 'popoverForeground'
  | 'primary'
  | 'primaryForeground'
  | 'secondary'
  | 'secondaryForeground'
  | 'muted'
  | 'mutedForeground'
  | 'accent'
  | 'accentForeground'
  | 'border'
  | 'input'
  | 'ring'
  | 'destructive'
  | 'destructiveForeground';

export type ThemeDiagnosticKey =
  | 'foregroundOnBackground'
  | 'surfaceOnSurface'
  | 'primaryOnPrimary'
  | 'secondaryOnSecondary'
  | 'accentOnAccent'
  | 'mutedOnMuted'
  | 'borderOnBackground';

export type ThemeRoleValue = {
  role: ThemeRole;
  hex: string;
  sourceScale: 'brand' | 'neutral' | 'fixed';
  sourceStep: OklchScaleStepKey | null;
};

export type ThemePairDiagnostic = {
  foregroundRole: ThemeRole;
  backgroundRole: ThemeRole;
  foregroundHex: string;
  backgroundHex: string;
  wcag: number;
  apca: number;
  status: 'pass' | 'caution' | 'fail';
  label: string;
};

export type ThemeModeResult = {
  roles: Record<ThemeRole, ThemeRoleValue>;
  aliases: Record<ThemeAliasRole, string>;
};

export type LightDarkThemeResult = {
  baseHex: string;
  tokenName: string;
  brandScale: OklchScaleResult;
  neutralScale: OklchScaleResult;
  themes: {
    light: ThemeModeResult;
    dark: ThemeModeResult;
  };
  diagnostics: {
    light: Record<ThemeDiagnosticKey, ThemePairDiagnostic>;
    dark: Record<ThemeDiagnosticKey, ThemePairDiagnostic>;
  };
};

export const THEME_ROLE_KEYS: ReadonlyArray<ThemeRole> = [
  'background',
  'foreground',
  'surface',
  'surfaceForeground',
  'primary',
  'primaryForeground',
  'secondary',
  'secondaryForeground',
  'muted',
  'mutedForeground',
  'accent',
  'accentForeground',
  'border',
  'input',
  'ring',
] as const;

export const THEME_ALIAS_KEYS: ReadonlyArray<ThemeAliasRole> = [
  'background',
  'foreground',
  'card',
  'cardForeground',
  'popover',
  'popoverForeground',
  'primary',
  'primaryForeground',
  'secondary',
  'secondaryForeground',
  'muted',
  'mutedForeground',
  'accent',
  'accentForeground',
  'border',
  'input',
  'ring',
  'destructive',
  'destructiveForeground',
] as const;

type ThemeThreshold = {
  passWcag: number;
  passApca: number;
  cautionWcag: number;
  cautionApca: number;
  passLabel: string;
  cautionLabel: string;
  failLabel: string;
};

type ScaleCandidate =
  | {
      scale: 'brand' | 'neutral';
      steps: ReadonlyArray<OklchScaleStepKey>;
    }
  | {
      scale: 'fixed';
      values: ReadonlyArray<string>;
    };

type RoleSelection = {
  scale: 'brand' | 'neutral';
  steps: ReadonlyArray<OklchScaleStepKey>;
};

type ThemeRoleConfig = {
  background: RoleSelection;
  surface: RoleSelection;
  foreground: ReadonlyArray<ScaleCandidate>;
  surfaceForeground: ReadonlyArray<ScaleCandidate>;
  primary: RoleSelection;
  primaryForeground: ReadonlyArray<ScaleCandidate>;
  secondary: RoleSelection;
  secondaryForeground: ReadonlyArray<ScaleCandidate>;
  muted: RoleSelection;
  mutedForeground: ReadonlyArray<ScaleCandidate>;
  accent: RoleSelection;
  accentForeground: ReadonlyArray<ScaleCandidate>;
  border: ReadonlyArray<ScaleCandidate>;
  input: ReadonlyArray<ScaleCandidate>;
  ring: ReadonlyArray<ScaleCandidate>;
};

const BODY_TEXT_THRESHOLD: ThemeThreshold = {
  passWcag: 4.5,
  passApca: 75,
  cautionWcag: 4.5,
  cautionApca: 60,
  passLabel: 'Body text ready',
  cautionLabel: 'Readable with review',
  failLabel: 'Too weak',
};

const INTERACTIVE_TEXT_THRESHOLD: ThemeThreshold = {
  passWcag: 4.5,
  passApca: 60,
  cautionWcag: 3,
  cautionApca: 45,
  passLabel: 'Action pair ready',
  cautionLabel: 'Usable with review',
  failLabel: 'Needs more contrast',
};

const MUTED_TEXT_THRESHOLD: ThemeThreshold = {
  passWcag: 3,
  passApca: 45,
  cautionWcag: 2.5,
  cautionApca: 35,
  passLabel: 'Secondary text ready',
  cautionLabel: 'Subtle but usable',
  failLabel: 'Too soft',
};

const BORDER_THRESHOLD: ThemeThreshold = {
  passWcag: 1.5,
  passApca: 15,
  cautionWcag: 1.2,
  cautionApca: 10,
  passLabel: 'Visible',
  cautionLabel: 'Subtle',
  failLabel: 'Too faint',
};

const LIGHT_CONFIG: ThemeRoleConfig = {
  background: { scale: 'neutral', steps: [50, 100] },
  surface: { scale: 'neutral', steps: [100, 50, 200] },
  foreground: [
    { scale: 'neutral', steps: [950, 900, 800] },
    { scale: 'fixed', values: ['#111827'] },
  ],
  surfaceForeground: [
    { scale: 'neutral', steps: [950, 900, 800] },
    { scale: 'fixed', values: ['#111827'] },
  ],
  primary: { scale: 'brand', steps: [600, 700, 500] },
  primaryForeground: [
    { scale: 'neutral', steps: [50, 100, 950, 900] },
    { scale: 'fixed', values: ['#FFFFFF', '#111827'] },
  ],
  secondary: { scale: 'neutral', steps: [200, 300, 100] },
  secondaryForeground: [
    { scale: 'neutral', steps: [950, 900, 800] },
    { scale: 'fixed', values: ['#111827'] },
  ],
  muted: { scale: 'neutral', steps: [100, 200, 50] },
  mutedForeground: [
    { scale: 'neutral', steps: [700, 800, 900, 600] },
    { scale: 'fixed', values: ['#4B5563'] },
  ],
  accent: { scale: 'brand', steps: [100, 200, 300, 400] },
  accentForeground: [
    { scale: 'brand', steps: [900, 800, 700, 950] },
    { scale: 'neutral', steps: [950, 900] },
    { scale: 'fixed', values: ['#111827'] },
  ],
  border: [
    { scale: 'neutral', steps: [300, 400, 200] },
    { scale: 'fixed', values: ['#CBD5E1'] },
  ],
  input: [
    { scale: 'neutral', steps: [300, 400, 200] },
    { scale: 'fixed', values: ['#CBD5E1'] },
  ],
  ring: [
    { scale: 'brand', steps: [500, 600, 400, 700] },
    { scale: 'fixed', values: ['#6366F1'] },
  ],
};

const DARK_CONFIG: ThemeRoleConfig = {
  background: { scale: 'neutral', steps: [950, 900] },
  surface: { scale: 'neutral', steps: [900, 800, 950] },
  foreground: [
    { scale: 'neutral', steps: [50, 100, 200] },
    { scale: 'fixed', values: ['#F8FAFC'] },
  ],
  surfaceForeground: [
    { scale: 'neutral', steps: [50, 100, 200] },
    { scale: 'fixed', values: ['#F8FAFC'] },
  ],
  primary: { scale: 'brand', steps: [500, 400, 600] },
  primaryForeground: [
    { scale: 'neutral', steps: [950, 50, 100, 200] },
    { scale: 'fixed', values: ['#FFFFFF', '#111827'] },
  ],
  secondary: { scale: 'neutral', steps: [800, 700, 900] },
  secondaryForeground: [
    { scale: 'neutral', steps: [50, 100, 200] },
    { scale: 'fixed', values: ['#F8FAFC'] },
  ],
  muted: { scale: 'neutral', steps: [900, 800, 950] },
  mutedForeground: [
    { scale: 'neutral', steps: [300, 200, 100, 400] },
    { scale: 'fixed', values: ['#CBD5E1'] },
  ],
  accent: { scale: 'brand', steps: [900, 800, 700, 600] },
  accentForeground: [
    { scale: 'neutral', steps: [50, 100, 200] },
    { scale: 'brand', steps: [50, 100, 200] },
    { scale: 'fixed', values: ['#FFFFFF'] },
  ],
  border: [
    { scale: 'neutral', steps: [800, 700, 900] },
    { scale: 'fixed', values: ['#334155'] },
  ],
  input: [
    { scale: 'neutral', steps: [800, 700, 900] },
    { scale: 'fixed', values: ['#334155'] },
  ],
  ring: [
    { scale: 'brand', steps: [400, 500, 300, 600] },
    { scale: 'fixed', values: ['#818CF8'] },
  ],
};

const FIXED_DESTRUCTIVE = {
  light: {
    destructive: '#DC2626',
    destructiveForeground: '#FFFFFF',
  },
  dark: {
    destructive: '#EF4444',
    destructiveForeground: '#FFFFFF',
  },
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function normalizeHex(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const withHash = trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
  if (!isValidHex(withHash)) {
    return null;
  }

  if (withHash.length === 4) {
    return `#${withHash
      .slice(1)
      .split('')
      .map((character) => `${character}${character}`)
      .join('')
      .toUpperCase()}`;
  }

  return withHash.slice(0, 7).toUpperCase();
}

function normalizeTokenName(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || 'brand';
}

function buildStepMap(scale: OklchScaleResult) {
  return Object.fromEntries(scale.steps.map((step) => [step.key, step.hex])) as Record<OklchScaleStepKey, string>;
}

function buildNeutralScale(baseHex: string) {
  const base = hexToOklch(baseHex);
  const neutralBase: OKLCH = {
    l: clamp(base.l, 0.28, 0.76),
    c: clamp(Math.max(base.c * 0.18, 0.012), 0.012, 0.03),
    h: base.h,
  };

  return generateOklchScaleFromOklch(neutralBase);
}

function toRoleValue(
  role: ThemeRole,
  hex: string,
  sourceScale: 'brand' | 'neutral' | 'fixed',
  sourceStep: OklchScaleStepKey | null,
): ThemeRoleValue {
  return {
    role,
    hex,
    sourceScale,
    sourceStep,
  };
}

function getPairDiagnostic(
  foregroundHex: string,
  backgroundHex: string,
  thresholds: ThemeThreshold,
  foregroundRole: ThemeRole,
  backgroundRole: ThemeRole,
): ThemePairDiagnostic {
  const wcag = calculateWcagContrast(foregroundHex, backgroundHex);
  const apca = Math.abs(calculateApcaContrast(foregroundHex, backgroundHex));

  if (wcag >= thresholds.passWcag && apca >= thresholds.passApca) {
    return {
      foregroundRole,
      backgroundRole,
      foregroundHex,
      backgroundHex,
      wcag,
      apca,
      status: 'pass',
      label: thresholds.passLabel,
    };
  }

  if (wcag >= thresholds.cautionWcag && apca >= thresholds.cautionApca) {
    return {
      foregroundRole,
      backgroundRole,
      foregroundHex,
      backgroundHex,
      wcag,
      apca,
      status: 'caution',
      label: thresholds.cautionLabel,
    };
  }

  return {
    foregroundRole,
    backgroundRole,
    foregroundHex,
    backgroundHex,
    wcag,
    apca,
    status: 'fail',
    label: thresholds.failLabel,
  };
}

function chooseStaticRole(
  role: ThemeRole,
  selection: RoleSelection,
  maps: {
    brand: Record<OklchScaleStepKey, string>;
    neutral: Record<OklchScaleStepKey, string>;
  },
) {
  const step = selection.steps[0];
  const hex = maps[selection.scale][step];

  return toRoleValue(role, hex, selection.scale, step);
}

function getStatusRank(status: ThemePairDiagnostic['status']) {
  if (status === 'pass') {
    return 2;
  }

  if (status === 'caution') {
    return 1;
  }

  return 0;
}

function chooseByContrast(
  role: ThemeRole,
  backgroundHex: string,
  thresholds: ThemeThreshold,
  candidates: ReadonlyArray<ScaleCandidate>,
  maps: {
    brand: Record<OklchScaleStepKey, string>;
    neutral: Record<OklchScaleStepKey, string>;
  },
) {
  let bestCandidate: ThemeRoleValue | null = null;
  let bestStatusRank = -1;

  for (const candidate of candidates) {
    if (candidate.scale === 'fixed') {
      for (const value of candidate.values) {
        const normalized = normalizeHex(value);
        if (!normalized) {
          continue;
        }

        const roleValue = toRoleValue(role, normalized, 'fixed', null);
        const status = getPairDiagnostic(normalized, backgroundHex, thresholds, role, role).status;
        const rank = getStatusRank(status);

        if (rank > bestStatusRank) {
          bestCandidate = roleValue;
          bestStatusRank = rank;
        }

        if (rank === 2) {
          return roleValue;
        }
      }

      continue;
    }

    for (const step of candidate.steps) {
      const hex = maps[candidate.scale][step];
      const roleValue = toRoleValue(role, hex, candidate.scale, step);
      const status = getPairDiagnostic(hex, backgroundHex, thresholds, role, role).status;
      const rank = getStatusRank(status);

      if (rank > bestStatusRank) {
        bestCandidate = roleValue;
        bestStatusRank = rank;
      }

      if (rank === 2) {
        return roleValue;
      }
    }
  }

  return bestCandidate ?? toRoleValue(role, backgroundHex, 'fixed', null);
}

function choosePairWithFallback(
  backgroundRole: ThemeRole,
  foregroundRole: ThemeRole,
  selection: RoleSelection,
  foregroundCandidates: ReadonlyArray<ScaleCandidate>,
  thresholds: ThemeThreshold,
  maps: {
    brand: Record<OklchScaleStepKey, string>;
    neutral: Record<OklchScaleStepKey, string>;
  },
) {
  let bestBackground: ThemeRoleValue | null = null;
  let bestForeground: ThemeRoleValue | null = null;
  let bestRank = -1;

  for (const step of selection.steps) {
    const backgroundHex = maps[selection.scale][step];
    const nextBackground = toRoleValue(backgroundRole, backgroundHex, selection.scale, step);
    const nextForeground = chooseByContrast(
      foregroundRole,
      backgroundHex,
      thresholds,
      foregroundCandidates,
      maps,
    );
    const diagnostic = getPairDiagnostic(
      nextForeground.hex,
      backgroundHex,
      thresholds,
      foregroundRole,
      backgroundRole,
    );
    const rank = getStatusRank(diagnostic.status);

    if (rank > bestRank) {
      bestBackground = nextBackground;
      bestForeground = nextForeground;
      bestRank = rank;
    }

    if (rank === 2) {
      return {
        background: nextBackground,
        foreground: nextForeground,
      };
    }
  }

  return {
    background: bestBackground ?? chooseStaticRole(backgroundRole, selection, maps),
    foreground:
      bestForeground ??
      chooseByContrast(foregroundRole, maps[selection.scale][selection.steps[0]], thresholds, foregroundCandidates, maps),
  };
}

function buildAliases(mode: ThemeMode, roles: Record<ThemeRole, ThemeRoleValue>): Record<ThemeAliasRole, string> {
  return {
    background: roles.background.hex,
    foreground: roles.foreground.hex,
    card: roles.surface.hex,
    cardForeground: roles.surfaceForeground.hex,
    popover: roles.surface.hex,
    popoverForeground: roles.surfaceForeground.hex,
    primary: roles.primary.hex,
    primaryForeground: roles.primaryForeground.hex,
    secondary: roles.secondary.hex,
    secondaryForeground: roles.secondaryForeground.hex,
    muted: roles.muted.hex,
    mutedForeground: roles.mutedForeground.hex,
    accent: roles.accent.hex,
    accentForeground: roles.accentForeground.hex,
    border: roles.border.hex,
    input: roles.input.hex,
    ring: roles.ring.hex,
    destructive: FIXED_DESTRUCTIVE[mode].destructive,
    destructiveForeground: FIXED_DESTRUCTIVE[mode].destructiveForeground,
  };
}

function buildThemeMode(
  mode: ThemeMode,
  maps: {
    brand: Record<OklchScaleStepKey, string>;
    neutral: Record<OklchScaleStepKey, string>;
  },
) {
  const config = mode === 'light' ? LIGHT_CONFIG : DARK_CONFIG;

  const pagePair = choosePairWithFallback(
    'background',
    'foreground',
    config.background,
    config.foreground,
    BODY_TEXT_THRESHOLD,
    maps,
  );
  const surfacePair = choosePairWithFallback(
    'surface',
    'surfaceForeground',
    config.surface,
    config.surfaceForeground,
    BODY_TEXT_THRESHOLD,
    maps,
  );
  const primaryPair = choosePairWithFallback(
    'primary',
    'primaryForeground',
    config.primary,
    config.primaryForeground,
    INTERACTIVE_TEXT_THRESHOLD,
    maps,
  );
  const secondaryPair = choosePairWithFallback(
    'secondary',
    'secondaryForeground',
    config.secondary,
    config.secondaryForeground,
    INTERACTIVE_TEXT_THRESHOLD,
    maps,
  );
  const mutedPair = choosePairWithFallback(
    'muted',
    'mutedForeground',
    config.muted,
    config.mutedForeground,
    MUTED_TEXT_THRESHOLD,
    maps,
  );
  const accentPair = choosePairWithFallback(
    'accent',
    'accentForeground',
    config.accent,
    config.accentForeground,
    MUTED_TEXT_THRESHOLD,
    maps,
  );
  const background = pagePair.background;
  const foreground = pagePair.foreground;
  const surface = surfacePair.background;
  const surfaceForeground = surfacePair.foreground;
  const primary = primaryPair.background;
  const primaryForeground = primaryPair.foreground;
  const secondary = secondaryPair.background;
  const secondaryForeground = secondaryPair.foreground;
  const muted = mutedPair.background;
  const mutedForeground = mutedPair.foreground;
  const accent = accentPair.background;
  const accentForeground = accentPair.foreground;
  const border = chooseByContrast('border', background.hex, BORDER_THRESHOLD, config.border, maps);
  const input = chooseByContrast('input', background.hex, BORDER_THRESHOLD, config.input, maps);
  const ring = chooseByContrast('ring', background.hex, MUTED_TEXT_THRESHOLD, config.ring, maps);

  const roles: Record<ThemeRole, ThemeRoleValue> = {
    background,
    foreground,
    surface,
    surfaceForeground,
    primary,
    primaryForeground,
    secondary,
    secondaryForeground,
    muted,
    mutedForeground,
    accent,
    accentForeground,
    border,
    input,
    ring,
  };

  const diagnostics: Record<ThemeDiagnosticKey, ThemePairDiagnostic> = {
    foregroundOnBackground: getPairDiagnostic(
      foreground.hex,
      background.hex,
      BODY_TEXT_THRESHOLD,
      'foreground',
      'background',
    ),
    surfaceOnSurface: getPairDiagnostic(
      surfaceForeground.hex,
      surface.hex,
      BODY_TEXT_THRESHOLD,
      'surfaceForeground',
      'surface',
    ),
    primaryOnPrimary: getPairDiagnostic(
      primaryForeground.hex,
      primary.hex,
      INTERACTIVE_TEXT_THRESHOLD,
      'primaryForeground',
      'primary',
    ),
    secondaryOnSecondary: getPairDiagnostic(
      secondaryForeground.hex,
      secondary.hex,
      INTERACTIVE_TEXT_THRESHOLD,
      'secondaryForeground',
      'secondary',
    ),
    accentOnAccent: getPairDiagnostic(
      accentForeground.hex,
      accent.hex,
      MUTED_TEXT_THRESHOLD,
      'accentForeground',
      'accent',
    ),
    mutedOnMuted: getPairDiagnostic(
      mutedForeground.hex,
      muted.hex,
      MUTED_TEXT_THRESHOLD,
      'mutedForeground',
      'muted',
    ),
    borderOnBackground: getPairDiagnostic(
      border.hex,
      background.hex,
      BORDER_THRESHOLD,
      'border',
      'background',
    ),
  };

  return {
    theme: {
      roles,
      aliases: buildAliases(mode, roles),
    },
    diagnostics,
  };
}

export function generateLightDarkTheme({
  baseHex,
  tokenName,
}: {
  baseHex: string;
  tokenName: string;
}): LightDarkThemeResult | null {
  const normalizedBaseHex = normalizeHex(baseHex);
  if (!normalizedBaseHex) {
    return null;
  }

  const brandScale = generateOklchScale(normalizedBaseHex);
  if (!brandScale) {
    return null;
  }

  const neutralScale = buildNeutralScale(normalizedBaseHex);
  const maps = {
    brand: buildStepMap(brandScale),
    neutral: buildStepMap(neutralScale),
  };

  const light = buildThemeMode('light', maps);
  const dark = buildThemeMode('dark', maps);

  return {
    baseHex: normalizedBaseHex,
    tokenName: normalizeTokenName(tokenName),
    brandScale,
    neutralScale,
    themes: {
      light: light.theme,
      dark: dark.theme,
    },
    diagnostics: {
      light: light.diagnostics,
      dark: dark.diagnostics,
    },
  };
}
