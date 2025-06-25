import { ColorName } from '../type/colornames';

// Convert hex to RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Convert RGB to hex
export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Convert hex to HSL
export function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Convert hex to CMYK
export function hexToCmyk(hex: string): { c: number; m: number; y: number; k: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const k = 1 - Math.max(r, g, b);
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);

  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100)
  };
}

// Calculate color distance using Delta E algorithm
export function calculateColorDistance(color1: { r: number; g: number; b: number }, color2: { r: number; g: number; b: number }): number {
  const rmean = (color1.r + color2.r) / 2;
  const r = color1.r - color2.r;
  const g = color1.g - color2.g;
  const b = color1.b - color2.b;
  return Math.sqrt((((512+rmean)*r*r)>>8) + 4*g*g + (((767-rmean)*b*b)>>8));
}

// Find the closest color name for a given RGB value
export function findClosestColorName(targetColor: { r: number; g: number; b: number }, colorNames: ColorName[]): ColorName {
  let closestColor = colorNames[0];
  let minDistance = Number.MAX_VALUE;

  for (const color of colorNames) {
    const colorRgb = hexToRgb(color.hex);
    if (colorRgb) {
      const distance = calculateColorDistance(targetColor, colorRgb);
      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }
  }

  return closestColor;
}

// Find similar colors
export function findSimilarColors(targetColor: { r: number; g: number; b: number }, colorNames: ColorName[], limit: number = 5): ColorName[] {
  return colorNames
    .map(color => {
      const rgb = hexToRgb(color.hex);
      if (!rgb) return { color, distance: Number.MAX_VALUE };
      return {
        color,
        distance: calculateColorDistance(targetColor, rgb)
      };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map(item => item.color);
}

// Search color names
export function searchColorNames(query: string, colorNames: ColorName[]): ColorName[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  // First, find exact matches
  const exactMatches = colorNames.filter(color => 
    color.name.toLowerCase() === normalizedQuery
  );
  
  // Then, find partial matches (starts with)
  const startsWithMatches = colorNames.filter(color => 
    color.name.toLowerCase().startsWith(normalizedQuery) && 
    color.name.toLowerCase() !== normalizedQuery
  );
  
  // Finally, find contains matches
  const containsMatches = colorNames.filter(color => 
    color.name.toLowerCase().includes(normalizedQuery) &&
    !color.name.toLowerCase().startsWith(normalizedQuery) &&
    color.name.toLowerCase() !== normalizedQuery
  );
  
  // Also check hex matches
  const hexMatches = colorNames.filter(color => 
    color.hex.toLowerCase().includes(normalizedQuery) &&
    !exactMatches.includes(color) &&
    !startsWithMatches.includes(color) &&
    !containsMatches.includes(color)
  );
  
  // Return in priority order: exact, starts with, contains, hex
  return [...exactMatches, ...startsWithMatches, ...containsMatches, ...hexMatches];
}

// Validate hex color
export function isValidHex(hex: string): boolean {
  return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(hex);
}

// Validate RGB values
export function isValidRgb(r: number, g: number, b: number): boolean {
  return [r, g, b].every(value => 
    typeof value === 'number' && 
    !isNaN(value) && 
    value >= 0 && 
    value <= 255
  );
}

// Convert HSL to HEX
export function hslToHex(hsl: { h: number; s: number; l: number }): string {
  // Convert h, s, l to [0,1] range
  const { h } = hsl;
  let { s, l } = hsl;
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }
  const to255 = (v: number) => Math.round((v + m) * 255);
  return rgbToHex(to255(r), to255(g), to255(b));
} 