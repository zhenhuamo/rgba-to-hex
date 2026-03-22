export type RgbColor = {
  r: number;
  g: number;
  b: number;
};

export type ContrastVerdict = {
  label: string;
  status: 'pass' | 'fail' | 'caution';
  description: string;
};

const RGB_COEFFICIENTS = {
  red: 0.2126729,
  green: 0.7151522,
  blue: 0.072175,
} as const;

const APCA_CONSTANTS = {
  mainTrc: 2.4,
  normBg: 0.56,
  normText: 0.57,
  revText: 0.62,
  revBg: 0.65,
  scaleBoW: 1.14,
  scaleWoB: 1.14,
  blackThreshold: 0.022,
  blackClamp: 1.414,
  deltaYMin: 0.0005,
  lowClip: 0.001,
  lowOffsetBoW: 0.027,
  lowOffsetWoB: 0.027,
} as const;

function clampChannel(value: number): number {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function isRgbColor(value: unknown): value is RgbColor {
  return (
    typeof value === 'object' &&
    value !== null &&
    'r' in value &&
    'g' in value &&
    'b' in value &&
    typeof value.r === 'number' &&
    typeof value.g === 'number' &&
    typeof value.b === 'number'
  );
}

function normalizeHex(input: string): string | null {
  const trimmed = input.trim().replace(/^#/, '');

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

export function parseColorToRgb(input: string | RgbColor): RgbColor | null {
  if (isRgbColor(input)) {
    return {
      r: clampChannel(input.r),
      g: clampChannel(input.g),
      b: clampChannel(input.b),
    };
  }

  const normalized = normalizeHex(input);

  if (!normalized) {
    return null;
  }

  return {
    r: parseInt(normalized.slice(1, 3), 16),
    g: parseInt(normalized.slice(3, 5), 16),
    b: parseInt(normalized.slice(5, 7), 16),
  };
}

function linearizeSrgbChannel(channel: number): number {
  return Math.pow(channel / 255, APCA_CONSTANTS.mainTrc);
}

function getRelativeLuminance(color: RgbColor): number {
  return (
    RGB_COEFFICIENTS.red * linearizeSrgbChannel(color.r) +
    RGB_COEFFICIENTS.green * linearizeSrgbChannel(color.g) +
    RGB_COEFFICIENTS.blue * linearizeSrgbChannel(color.b)
  );
}

function clampLuminance(luminance: number): number {
  if (luminance > APCA_CONSTANTS.blackThreshold) {
    return luminance;
  }

  return luminance + Math.pow(APCA_CONSTANTS.blackThreshold - luminance, APCA_CONSTANTS.blackClamp);
}

export function calculateWcagContrast(foreground: string | RgbColor, background: string | RgbColor): number {
  const foregroundRgb = parseColorToRgb(foreground);
  const backgroundRgb = parseColorToRgb(background);

  if (!foregroundRgb || !backgroundRgb) {
    return 0;
  }

  const foregroundLuminance = getRelativeLuminance(foregroundRgb);
  const backgroundLuminance = getRelativeLuminance(backgroundRgb);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return Number((((lighter + 0.05) / (darker + 0.05))).toFixed(2));
}

export function calculateApcaContrast(foreground: string | RgbColor, background: string | RgbColor): number {
  const foregroundRgb = parseColorToRgb(foreground);
  const backgroundRgb = parseColorToRgb(background);

  if (!foregroundRgb || !backgroundRgb) {
    return 0;
  }

  const textY = clampLuminance(getRelativeLuminance(foregroundRgb));
  const backgroundY = clampLuminance(getRelativeLuminance(backgroundRgb));

  if (Math.abs(backgroundY - textY) < APCA_CONSTANTS.deltaYMin) {
    return 0;
  }

  if (backgroundY > textY) {
    const sapc =
      (Math.pow(backgroundY, APCA_CONSTANTS.normBg) - Math.pow(textY, APCA_CONSTANTS.normText)) *
      APCA_CONSTANTS.scaleBoW;

    if (sapc <= APCA_CONSTANTS.lowClip) {
      return 0;
    }

    return Number(((sapc - APCA_CONSTANTS.lowOffsetBoW) * 100).toFixed(1));
  }

  const sapc =
    (Math.pow(backgroundY, APCA_CONSTANTS.revBg) - Math.pow(textY, APCA_CONSTANTS.revText)) *
    APCA_CONSTANTS.scaleWoB;

  if (sapc >= -APCA_CONSTANTS.lowClip) {
    return 0;
  }

  return Number(((sapc + APCA_CONSTANTS.lowOffsetWoB) * 100).toFixed(1));
}

export function getContrastVerdict(score: number, mode: 'wcag' | 'apca'): ContrastVerdict {
  if (mode === 'wcag') {
    if (score >= 7) {
      return {
        label: 'AAA',
        status: 'pass',
        description: 'Strong contrast for body text, dense UI copy, and accessibility-sensitive interfaces.',
      };
    }

    if (score >= 4.5) {
      return {
        label: 'AA',
        status: 'caution',
        description: 'Suitable for normal text at WCAG AA, but there is less safety margin for complex UI states.',
      };
    }

    return {
      label: 'Fail',
      status: 'fail',
      description: 'Increase the lightness difference before using this pair for regular text or key UI copy.',
    };
  }

  const absoluteScore = Math.abs(score);

  if (absoluteScore >= 75) {
    return {
      label: 'Body Text Ready',
      status: 'pass',
      description: 'Strong APCA contrast for reading-heavy interfaces, settings text, and dense UI content.',
    };
  }

  if (absoluteScore >= 60) {
    return {
      label: 'Large Text / UI',
      status: 'caution',
      description: 'Generally better for larger text, stronger font weights, and assertive UI components.',
    };
  }

  return {
    label: 'Needs More Separation',
    status: 'fail',
    description: 'The perceptual contrast is still weak for reliable reading comfort. Push the pair further apart.',
  };
}
