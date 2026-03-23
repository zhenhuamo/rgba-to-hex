import { isValidHex } from '@/utils/colorConverter';
import { calculateApcaContrast, calculateWcagContrast } from '@/utils/apcaContrast';
import { generateOklchScale, type OklchScaleStepKey } from '@/utils/oklchScale';

export type AccessiblePaletteRole =
  | 'primary'
  | 'surface'
  | 'text'
  | 'mutedText'
  | 'border'
  | 'accent';

export type AccessiblePaletteRoleValue = {
  role: AccessiblePaletteRole;
  hex: string;
  sourceStep: OklchScaleStepKey;
};

export type AccessiblePaletteEvaluation = {
  wcag: number;
  apca: number;
  status: 'pass' | 'caution' | 'fail';
  label: string;
};

export type AccessiblePaletteResult = {
  baseHex: string;
  tokenName: string;
  roles: {
    primary: AccessiblePaletteRoleValue;
    surface: AccessiblePaletteRoleValue;
    text: AccessiblePaletteRoleValue;
    mutedText: AccessiblePaletteRoleValue;
    border: AccessiblePaletteRoleValue;
    accent: AccessiblePaletteRoleValue;
  };
  evaluations: {
    textOnSurface: AccessiblePaletteEvaluation;
    mutedTextOnSurface: AccessiblePaletteEvaluation;
    primaryOnSurface: AccessiblePaletteEvaluation;
    accentOnSurface: AccessiblePaletteEvaluation;
    borderOnSurface: AccessiblePaletteEvaluation;
  };
};

type EvaluationConfig = {
  passWcag: number;
  passApca: number;
  cautionWcag: number;
  cautionApca: number;
  passLabel: string;
  cautionLabel: string;
  failLabel: string;
};

const SURFACE_CANDIDATES: ReadonlyArray<OklchScaleStepKey> = [50, 100];

const ROLE_CANDIDATES = {
  primary: [500, 600, 700],
  surface: [50, 100],
  text: [900, 950],
  mutedText: [700, 800, 900],
  border: [200, 300, 400],
  accent: [600, 700, 800],
} as const satisfies Record<AccessiblePaletteRole, ReadonlyArray<OklchScaleStepKey>>;

function normalizeTokenName(value?: string) {
  const normalized = (value ?? 'brand')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || 'brand';
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

function evaluatePair(foreground: string, background: string, config: EvaluationConfig): AccessiblePaletteEvaluation {
  const wcag = calculateWcagContrast(foreground, background);
  const apca = Math.abs(calculateApcaContrast(foreground, background));

  if (wcag >= config.passWcag && apca >= config.passApca) {
    return { wcag, apca, status: 'pass', label: config.passLabel };
  }

  if (wcag >= config.cautionWcag || apca >= config.cautionApca) {
    return { wcag, apca, status: 'caution', label: config.cautionLabel };
  }

  return { wcag, apca, status: 'fail', label: config.failLabel };
}

function buildStepMap(baseHex: string) {
  const scale = generateOklchScale(baseHex);

  if (!scale) {
    return null;
  }

  return Object.fromEntries(scale.steps.map((step) => [step.key, step.hex])) as Record<OklchScaleStepKey, string>;
}

function chooseRoleValue(
  role: AccessiblePaletteRole,
  stepMap: Record<OklchScaleStepKey, string>,
  candidates: ReadonlyArray<OklchScaleStepKey>,
  isAcceptable: (hex: string, step: OklchScaleStepKey) => boolean,
): AccessiblePaletteRoleValue {
  const chosenStep = candidates.find((step) => isAcceptable(stepMap[step], step)) ?? candidates[candidates.length - 1];

  return {
    role,
    hex: stepMap[chosenStep],
    sourceStep: chosenStep,
  };
}

function buildPaletteForSurface(
  stepMap: Record<OklchScaleStepKey, string>,
  surfaceStep: OklchScaleStepKey,
  tokenName: string,
): AccessiblePaletteResult {
  const surface: AccessiblePaletteRoleValue = {
    role: 'surface',
    hex: stepMap[surfaceStep],
    sourceStep: surfaceStep,
  };

  const text = chooseRoleValue('text', stepMap, ROLE_CANDIDATES.text, (hex) =>
    evaluatePair(hex, surface.hex, {
      passWcag: 4.5,
      passApca: 75,
      cautionWcag: 4.5,
      cautionApca: 60,
      passLabel: 'Body text ready',
      cautionLabel: 'Readable with review',
      failLabel: 'Too weak for body text',
    }).status !== 'fail'
  );

  const mutedText = chooseRoleValue('mutedText', stepMap, ROLE_CANDIDATES.mutedText, (hex) =>
    evaluatePair(hex, surface.hex, {
      passWcag: 3,
      passApca: 60,
      cautionWcag: 3,
      cautionApca: 45,
      passLabel: 'Muted text ready',
      cautionLabel: 'Muted text needs care',
      failLabel: 'Muted text too weak',
    }).status !== 'fail'
  );

  const border = chooseRoleValue('border', stepMap, ROLE_CANDIDATES.border, (hex) =>
    evaluatePair(hex, surface.hex, {
      passWcag: 1.5,
      passApca: 15,
      cautionWcag: 1.2,
      cautionApca: 10,
      passLabel: 'Border visible',
      cautionLabel: 'Border is subtle',
      failLabel: 'Border fades away',
    }).status !== 'fail'
  );

  const primary = chooseRoleValue('primary', stepMap, ROLE_CANDIDATES.primary, (hex) =>
    evaluatePair(surface.hex, hex, {
      passWcag: 4.5,
      passApca: 60,
      cautionWcag: 3,
      cautionApca: 45,
      passLabel: 'Action pair ready',
      cautionLabel: 'Action pair needs review',
      failLabel: 'Action pair too weak',
    }).status !== 'fail'
  );

  const accent = chooseRoleValue('accent', stepMap, ROLE_CANDIDATES.accent, (hex) =>
    evaluatePair(hex, surface.hex, {
      passWcag: 3,
      passApca: 45,
      cautionWcag: 2,
      cautionApca: 30,
      passLabel: 'Accent stands out',
      cautionLabel: 'Accent is subtle',
      failLabel: 'Accent lacks separation',
    }).status !== 'fail'
  );

  const evaluations = {
    textOnSurface: evaluatePair(text.hex, surface.hex, {
      passWcag: 4.5,
      passApca: 75,
      cautionWcag: 4.5,
      cautionApca: 60,
      passLabel: 'Body text ready',
      cautionLabel: 'Readable with review',
      failLabel: 'Too weak for body text',
    }),
    mutedTextOnSurface: evaluatePair(mutedText.hex, surface.hex, {
      passWcag: 3,
      passApca: 60,
      cautionWcag: 3,
      cautionApca: 45,
      passLabel: 'Muted text ready',
      cautionLabel: 'Muted text needs care',
      failLabel: 'Muted text too weak',
    }),
    primaryOnSurface: evaluatePair(surface.hex, primary.hex, {
      passWcag: 4.5,
      passApca: 60,
      cautionWcag: 3,
      cautionApca: 45,
      passLabel: 'Action pair ready',
      cautionLabel: 'Action pair needs review',
      failLabel: 'Action pair too weak',
    }),
    accentOnSurface: evaluatePair(accent.hex, surface.hex, {
      passWcag: 3,
      passApca: 45,
      cautionWcag: 2,
      cautionApca: 30,
      passLabel: 'Accent stands out',
      cautionLabel: 'Accent is subtle',
      failLabel: 'Accent lacks separation',
    }),
    borderOnSurface: evaluatePair(border.hex, surface.hex, {
      passWcag: 1.5,
      passApca: 15,
      cautionWcag: 1.2,
      cautionApca: 10,
      passLabel: 'Border visible',
      cautionLabel: 'Border is subtle',
      failLabel: 'Border fades away',
    }),
  };

  return {
    baseHex: stepMap[500],
    tokenName,
    roles: {
      primary,
      surface,
      text,
      mutedText,
      border,
      accent,
    },
    evaluations,
  };
}

function getSurfaceScore(result: AccessiblePaletteResult) {
  const passCount = Object.values(result.evaluations).filter((evaluation) => evaluation.status === 'pass').length;
  const cautionCount = Object.values(result.evaluations).filter((evaluation) => evaluation.status === 'caution').length;

  return passCount * 3 + cautionCount;
}

export function generateAccessiblePalette(baseHex: string, tokenName?: string): AccessiblePaletteResult | null {
  const normalizedBaseHex = normalizeHex(baseHex);
  if (!normalizedBaseHex) {
    return null;
  }

  const stepMap = buildStepMap(normalizedBaseHex);
  if (!stepMap) {
    return null;
  }

  const resolvedTokenName = normalizeTokenName(tokenName);
  const candidates = SURFACE_CANDIDATES.map((surfaceStep) => buildPaletteForSurface(stepMap, surfaceStep, resolvedTokenName));

  return candidates.sort((left, right) => getSurfaceScore(right) - getSurfaceScore(left))[0] ?? null;
}
