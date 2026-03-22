import type { OklchScaleResult } from '@/utils/oklchScale';

function normalizeTokenName(tokenName: string) {
  const normalized = tokenName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || 'brand';
}

export function buildCssVariableExport(scale: OklchScaleResult, tokenName: string): string {
  const name = normalizeTokenName(tokenName);
  const lines = scale.steps.map((step) => `  --${name}-${step.key}: ${step.hex};`);

  return [':root {', ...lines, '}'].join('\n');
}

export function buildTailwindColorExport(scale: OklchScaleResult, tokenName: string): string {
  const name = normalizeTokenName(tokenName);
  const lines = scale.steps.map((step) => `    ${step.key}: '${step.hex}',`);

  return ['{', `  ${name}: {`, ...lines, '  }', '}'].join('\n');
}

export function buildJsonTokenExport(scale: OklchScaleResult, tokenName: string): string {
  const name = normalizeTokenName(tokenName);
  const payload = {
    [name]: Object.fromEntries(scale.steps.map((step) => [step.key, { value: step.hex }])),
  };

  return JSON.stringify(payload, null, 2);
}
