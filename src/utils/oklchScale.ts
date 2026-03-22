import {
  hexToOklch,
  isValidHex,
  oklchToHex,
  oklchToRgb,
  rgbToHsl,
  type HSL,
  type OKLCH,
  type RGB,
} from '@/utils/colorConverter';

export type OklchScaleStepKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type OklchScaleStep = {
  key: OklchScaleStepKey;
  hex: string;
  rgb: RGB;
  hsl: HSL;
  oklch: OKLCH;
};

export type OklchScaleResult = {
  baseHex: string;
  steps: ReadonlyArray<OklchScaleStep>;
};

type StepConfig = {
  key: OklchScaleStepKey;
  direction: 'lighter' | 'base' | 'darker';
  weight: number;
};

const STEP_CONFIGS: ReadonlyArray<StepConfig> = [
  { key: 50, direction: 'lighter', weight: 0.94 },
  { key: 100, direction: 'lighter', weight: 0.84 },
  { key: 200, direction: 'lighter', weight: 0.66 },
  { key: 300, direction: 'lighter', weight: 0.46 },
  { key: 400, direction: 'lighter', weight: 0.24 },
  { key: 500, direction: 'base', weight: 0 },
  { key: 600, direction: 'darker', weight: 0.16 },
  { key: 700, direction: 'darker', weight: 0.32 },
  { key: 800, direction: 'darker', weight: 0.5 },
  { key: 900, direction: 'darker', weight: 0.7 },
  { key: 950, direction: 'darker', weight: 0.82 },
] as const;

function normalizeHex(hex: string): string | null {
  const trimmed = hex.trim();
  if (!trimmed) {
    return null;
  }

  const withHash = trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
  if (!isValidHex(withHash)) {
    return null;
  }

  if (withHash.length === 4) {
    return `#${withHash.slice(1).split('').map((char) => `${char}${char}`).join('').toUpperCase()}`;
  }

  return withHash.slice(0, 7).toUpperCase();
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function round(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function buildStep(base: OKLCH, config: StepConfig): OklchScaleStep {
  let nextL = base.l;
  let nextC = Math.min(base.c, 0.32);

  if (config.direction === 'lighter') {
    nextL = clamp(base.l + (0.985 - base.l) * config.weight, 0, 0.985);
    nextC = clamp(base.c * (1 - config.weight * 0.82), 0, 0.32);
  }

  if (config.direction === 'darker') {
    nextL = clamp(base.l + (0.18 - base.l) * config.weight, 0.08, 1);
    nextC = clamp(base.c * (1 - config.weight * 0.45), 0, 0.32);
  }

  const oklch: OKLCH = {
    l: round(nextL, 3),
    c: round(nextC, 3),
    h: round((base.h + 360) % 360, 0),
  };

  const hex = oklchToHex(oklch).toUpperCase();
  const rgb = oklchToRgb(oklch);
  const hsl = rgbToHsl(rgb);

  return {
    key: config.key,
    hex,
    rgb,
    hsl,
    oklch,
  };
}

export function generateOklchScale(baseHex: string): OklchScaleResult | null {
  const normalized = normalizeHex(baseHex);

  if (!normalized) {
    return null;
  }

  const base = hexToOklch(normalized);
  const steps = STEP_CONFIGS.map((config) => buildStep(base, config));

  return {
    baseHex: normalized,
    steps,
  };
}
