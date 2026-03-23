import { isValidHex } from '@/utils/colorConverter';
import type { OklchScaleResult } from '@/utils/oklchScale';

export const TOKEN_SCALE_STEP_KEYS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

export type TokenScaleStepKey = (typeof TOKEN_SCALE_STEP_KEYS)[number];

export type TokenScaleInput = {
  tokenName: string;
  steps: Record<TokenScaleStepKey, string>;
};

export type TokenSemanticInput = {
  tokenName: string;
  roles: {
    primary: string;
    surface: string;
    text: string;
    border: string;
  };
};

function normalizeTokenName(tokenName: string) {
  const normalized = tokenName
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
      .map((char) => `${char}${char}`)
      .join('')
      .toUpperCase()}`;
  }

  return withHash.toUpperCase();
}

function toScaleInput(scale: OklchScaleResult, tokenName: string): TokenScaleInput {
  const steps = Object.fromEntries(
    scale.steps.map((step) => [String(step.key), step.hex.toUpperCase()]),
  ) as Record<TokenScaleStepKey, string>;

  return {
    tokenName,
    steps,
  };
}

export function buildCssVariableExportFromScale(input: TokenScaleInput): string {
  const name = normalizeTokenName(input.tokenName);
  const lines = TOKEN_SCALE_STEP_KEYS.map((key) => `  --${name}-${key}: ${normalizeHexValue(input.steps[key])};`);

  return [':root {', ...lines, '}'].join('\n');
}

export function buildTailwindColorExportFromScale(input: TokenScaleInput): string {
  const name = normalizeTokenName(input.tokenName);
  const lines = TOKEN_SCALE_STEP_KEYS.map((key) => `    ${key}: '${normalizeHexValue(input.steps[key])}',`);

  return ['{', `  ${name}: {`, ...lines, '  }', '}'].join('\n');
}

export function buildJsonTokenExportFromScale(input: TokenScaleInput): string {
  const name = normalizeTokenName(input.tokenName);
  const payload = {
    [name]: Object.fromEntries(TOKEN_SCALE_STEP_KEYS.map((key) => [key, { value: normalizeHexValue(input.steps[key]) }])),
  };

  return JSON.stringify(payload, null, 2);
}

export function buildCssVariableExportFromRoles(input: TokenSemanticInput): string {
  const name = normalizeTokenName(input.tokenName);
  const lines = [
    `  --${name}-primary: ${normalizeHexValue(input.roles.primary)};`,
    `  --${name}-surface: ${normalizeHexValue(input.roles.surface)};`,
    `  --${name}-text: ${normalizeHexValue(input.roles.text)};`,
    `  --${name}-border: ${normalizeHexValue(input.roles.border)};`,
  ];

  return [':root {', ...lines, '}'].join('\n');
}

export function buildTailwindRoleExport(input: TokenSemanticInput): string {
  const name = normalizeTokenName(input.tokenName);

  return [
    '{',
    '  extend: {',
    '    colors: {',
    `      ${name}: {`,
    `        primary: '${normalizeHexValue(input.roles.primary)}',`,
    `        surface: '${normalizeHexValue(input.roles.surface)}',`,
    `        text: '${normalizeHexValue(input.roles.text)}',`,
    `        border: '${normalizeHexValue(input.roles.border)}',`,
    '      },',
    '    },',
    '  },',
    '}',
  ].join('\n');
}

export function buildJsonRoleTokenExport(input: TokenSemanticInput): string {
  const name = normalizeTokenName(input.tokenName);
  const payload = {
    [name]: {
      primary: { value: normalizeHexValue(input.roles.primary) },
      surface: { value: normalizeHexValue(input.roles.surface) },
      text: { value: normalizeHexValue(input.roles.text) },
      border: { value: normalizeHexValue(input.roles.border) },
    },
  };

  return JSON.stringify(payload, null, 2);
}

export function buildCssVariableExport(scale: OklchScaleResult, tokenName: string): string {
  return buildCssVariableExportFromScale(toScaleInput(scale, tokenName));
}

export function buildTailwindColorExport(scale: OklchScaleResult, tokenName: string): string {
  return buildTailwindColorExportFromScale(toScaleInput(scale, tokenName));
}

export function buildJsonTokenExport(scale: OklchScaleResult, tokenName: string): string {
  return buildJsonTokenExportFromScale(toScaleInput(scale, tokenName));
}
