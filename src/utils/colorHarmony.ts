import { RGB, HSL, OKLCH,  } from './colorConverter';
import { 
  rgbToHsl, 
  hslToRgb, 
  rgbaToHex, 
  oklchToHsl,
} from './colorConverter';

// Color harmony type definition
export type HarmonyType = 
  | 'complementary'       // Complementary
  | 'triadic'             // Triadic
  | 'tetradic'            // Tetradic
  | 'analogous'           // Analogous
  | 'split-complementary' // Split-complementary
  | 'monochromatic';      // Monochromatic

// Color variation interface
export interface ColorVariation {
  color: HSL | RGB | OKLCH;  // Replaced 'any' with specific color types
  relationship: string;   // Relationship description to the base color
  distance: number;       // Color distance or relationship strength
  hex: string;            // Hexadecimal color representation
  name?: string;          // Optional color name
}

// Color harmony result interface
export interface ColorHarmony {
  type: HarmonyType;      // Harmony type
  baseColor: HSL | RGB | OKLCH;  // Replaced 'any' with specific color types
  variations: ColorVariation[]; // Color variation array
  name: string;           // Harmony scheme name
  description: string;    // Harmony scheme description
}

/**
 * Create complementary color scheme
 * @param baseColor Base color (HSL format)
 * @returns Scheme containing base color and its complement
 */
export function createComplementaryHarmony(baseColor: HSL): ColorHarmony {
  const hsl = { ...baseColor };
  
  // Calculate complementary color (hue+180 degrees)
  const complementaryHSL: HSL = {
    h: (hsl.h + 180) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  // Convert to RGB to get HEX values
  const baseRGB = hslToRgb(hsl);
  const compRGB = hslToRgb(complementaryHSL);
  
  return {
    type: 'complementary',
    baseColor: hsl,
    name: 'Complementary Scheme',
    description: 'Complementary colors are opposite on the color wheel, creating high contrast combinations',
    variations: [
      {
        color: hsl,
        relationship: 'Base Color',
        distance: 0,
        hex: rgbaToHex({ ...baseRGB, a: 1 })
      },
      {
        color: complementaryHSL,
        relationship: 'Complementary',
        distance: 180,
        hex: rgbaToHex({ ...compRGB, a: 1 })
      }
    ]
  };
}

/**
 * Create triadic color scheme
 * @param baseColor Base color (HSL format)
 * @returns Scheme containing base color and two triadic colors
 */
export function createTriadicHarmony(baseColor: HSL): ColorHarmony {
  const hsl = { ...baseColor };
  
  // Calculate triadic colors (hue+120 and +240 degrees)
  const triadicHSL1: HSL = {
    h: (hsl.h + 120) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  const triadicHSL2: HSL = {
    h: (hsl.h + 240) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  // Convert to RGB to get HEX values
  const baseRGB = hslToRgb(hsl);
  const triadic1RGB = hslToRgb(triadicHSL1);
  const triadic2RGB = hslToRgb(triadicHSL2);
  
  return {
    type: 'triadic',
    baseColor: hsl,
    name: 'Triadic Scheme',
    description: 'Triadic colors are evenly spaced on the color wheel (120° apart), forming balanced combinations',
    variations: [
      {
        color: hsl,
        relationship: 'Base Color',
        distance: 0,
        hex: rgbaToHex({ ...baseRGB, a: 1 })
      },
      {
        color: triadicHSL1,
        relationship: 'Triadic 1',
        distance: 120,
        hex: rgbaToHex({ ...triadic1RGB, a: 1 })
      },
      {
        color: triadicHSL2,
        relationship: 'Triadic 2',
        distance: 240,
        hex: rgbaToHex({ ...triadic2RGB, a: 1 })
      }
    ]
  };
}

/**
 * Create tetradic color scheme
 * @param baseColor Base color (HSL format)
 * @returns Scheme containing base color and three tetradic colors
 */
export function createTetradicHarmony(baseColor: HSL): ColorHarmony {
  const hsl = { ...baseColor };
  
  // Calculate tetradic colors (hue+90, +180, and +270 degrees)
  const tetradicHSL1: HSL = {
    h: (hsl.h + 90) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  const tetradicHSL2: HSL = {
    h: (hsl.h + 180) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  const tetradicHSL3: HSL = {
    h: (hsl.h + 270) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  // Convert to RGB to get HEX values
  const baseRGB = hslToRgb(hsl);
  const tetradic1RGB = hslToRgb(tetradicHSL1);
  const tetradic2RGB = hslToRgb(tetradicHSL2);
  const tetradic3RGB = hslToRgb(tetradicHSL3);
  
  return {
    type: 'tetradic',
    baseColor: hsl,
    name: 'Tetradic Scheme',
    description: 'Tetradic colors are evenly spaced on the color wheel (90° apart), forming comprehensive balanced combinations',
    variations: [
      {
        color: hsl,
        relationship: 'Base Color',
        distance: 0,
        hex: rgbaToHex({ ...baseRGB, a: 1 })
      },
      {
        color: tetradicHSL1,
        relationship: 'Tetradic 1',
        distance: 90,
        hex: rgbaToHex({ ...tetradic1RGB, a: 1 })
      },
      {
        color: tetradicHSL2,
        relationship: 'Tetradic 2',
        distance: 180,
        hex: rgbaToHex({ ...tetradic2RGB, a: 1 })
      },
      {
        color: tetradicHSL3,
        relationship: 'Tetradic 3',
        distance: 270,
        hex: rgbaToHex({ ...tetradic3RGB, a: 1 })
      }
    ]
  };
}

/**
 * Create analogous color scheme
 * @param baseColor Base color (HSL format)
 * @param angle Angle between analogous colors, default is 30 degrees
 * @returns Scheme containing base color and analogous colors
 */
export function createAnalogousHarmony(baseColor: HSL, angle: number = 30): ColorHarmony {
  const hsl = { ...baseColor };
  
  // Calculate analogous colors (hue±30 degrees, or custom angle)
  const analogousHSL1: HSL = {
    h: (hsl.h + angle) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  const analogousHSL2: HSL = {
    h: (hsl.h - angle + 360) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  // Convert to RGB to get HEX values
  const baseRGB = hslToRgb(hsl);
  const analogous1RGB = hslToRgb(analogousHSL1);
  const analogous2RGB = hslToRgb(analogousHSL2);
  
  return {
    type: 'analogous',
    baseColor: hsl,
    name: 'Analogous Scheme',
    description: 'Analogous colors are adjacent on the color wheel, creating harmonious combinations',
    variations: [
      {
        color: analogousHSL2,
        relationship: 'Analogous (Left)',
        distance: -angle,
        hex: rgbaToHex({ ...analogous2RGB, a: 1 })
      },
      {
        color: hsl,
        relationship: 'Base Color',
        distance: 0,
        hex: rgbaToHex({ ...baseRGB, a: 1 })
      },
      {
        color: analogousHSL1,
        relationship: 'Analogous (Right)',
        distance: angle,
        hex: rgbaToHex({ ...analogous1RGB, a: 1 })
      }
    ]
  };
}

/**
 * Create split-complementary color scheme
 * @param baseColor Base color (HSL format)
 * @param angle Split angle, default is 30 degrees
 * @returns Scheme containing base color and split-complementary colors
 */
export function createSplitComplementaryHarmony(baseColor: HSL, angle: number = 30): ColorHarmony {
  const hsl = { ...baseColor };
  
  // Calculate complementary hue
  const complementaryH = (hsl.h + 180) % 360;
  
  // Calculate split-complementary colors (complementary hue±30 degrees, or custom angle)
  const splitCompHSL1: HSL = {
    h: (complementaryH + angle) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  const splitCompHSL2: HSL = {
    h: (complementaryH - angle + 360) % 360,
    s: hsl.s,
    l: hsl.l
  };
  
  // Convert to RGB to get HEX values
  const baseRGB = hslToRgb(hsl);
  const splitComp1RGB = hslToRgb(splitCompHSL1);
  const splitComp2RGB = hslToRgb(splitCompHSL2);
  
  return {
    type: 'split-complementary',
    baseColor: hsl,
    name: 'Split-Complementary Scheme',
    description: 'Split-complementary uses a base color plus two colors adjacent to its complement, providing high contrast with more variation',
    variations: [
      {
        color: hsl,
        relationship: 'Base Color',
        distance: 0,
        hex: rgbaToHex({ ...baseRGB, a: 1 })
      },
      {
        color: splitCompHSL1,
        relationship: 'Split-Complementary 1',
        distance: 180 + angle,
        hex: rgbaToHex({ ...splitComp1RGB, a: 1 })
      },
      {
        color: splitCompHSL2,
        relationship: 'Split-Complementary 2',
        distance: 180 - angle,
        hex: rgbaToHex({ ...splitComp2RGB, a: 1 })
      }
    ]
  };
}

/**
 * Create monochromatic color scheme
 * @param baseColor Base color (HSL format)
 * @param steps Number of variation steps, default is 5
 * @returns Scheme containing base color and brightness/saturation variations
 */
export function createMonochromaticHarmony(baseColor: HSL, steps: number = 5): ColorHarmony {
  const hsl = { ...baseColor };
  const variations: ColorVariation[] = [];
  
  // Brightness variation range
  const minL = Math.max(10, hsl.l - 40);
  const maxL = Math.min(90, hsl.l + 40);
  const stepL = (maxL - minL) / (steps - 1);
  
  for (let i = 0; i < steps; i++) {
    const newL = minL + stepL * i;
    const currentHSL: HSL = {
      h: hsl.h,
      s: hsl.s,
      l: Math.round(newL)
    };
    
    const currentRGB = hslToRgb(currentHSL);
    
    variations.push({
      color: currentHSL,
      relationship: i === Math.floor(steps / 2) ? 'Base Color' : `Brightness ${i + 1}`,
      distance: newL - hsl.l,
      hex: rgbaToHex({ ...currentRGB, a: 1 })
    });
  }
  
  return {
    type: 'monochromatic',
    baseColor: hsl,
    name: 'Monochromatic Scheme',
    description: 'Monochromatic schemes use a single hue with different brightness and saturation levels, creating cohesive combinations',
    variations
  };
}

/**
 * Generate color harmony scheme based on given color and harmony type
 * @param color Base color (can be multiple formats)
 * @param harmonyType Harmony type
 * @param colorFormat Input color format
 * @returns Color harmony scheme
 */
export function generateColorHarmony(
  color: RGB | HSL | OKLCH | string,
  harmonyType: HarmonyType,
  colorFormat: 'rgb' | 'hsl' | 'oklch' | 'hex' = 'hsl'
): ColorHarmony {
  
  // Convert input color to HSL format
  let hslColor: HSL;
  
  if (colorFormat === 'rgb') {
    hslColor = rgbToHsl(color as RGB);
  } else if (colorFormat === 'oklch') {
    hslColor = oklchToHsl(color as OKLCH);
  } else if (colorFormat === 'hex') {
    // Assuming hexToHsl function exists
    const rgbColor = { r: 0, g: 0, b: 0 }; // Need actual implementation of hexToRgb
    hslColor = rgbToHsl(rgbColor);
  } else {
    hslColor = color as HSL;
  }
  
  // Generate scheme based on harmony type
  switch (harmonyType) {
    case 'complementary':
      return createComplementaryHarmony(hslColor);
    case 'triadic':
      return createTriadicHarmony(hslColor);
    case 'tetradic':
      return createTetradicHarmony(hslColor);
    case 'analogous':
      return createAnalogousHarmony(hslColor);
    case 'split-complementary':
      return createSplitComplementaryHarmony(hslColor);
    case 'monochromatic':
      return createMonochromaticHarmony(hslColor);
    default:
      return createComplementaryHarmony(hslColor); // Default to complementary
  }
}

/**
 * Export color harmony scheme as CSS variables
 * @param harmony Color harmony scheme
 * @returns CSS variable string
 */
export function exportHarmonyToCSS(harmony: ColorHarmony): string {
  let css = `:root {\n`;
  
  harmony.variations.forEach((variation) => {
    const name = variation.relationship.replace(/\s+/g, '-').toLowerCase();
    css += `  --color-${name}: ${variation.hex};\n`;
  });
  
  css += `}\n`;
  return css;
}

/**
 * Export color harmony scheme as JSON
 * @param harmony Color harmony scheme
 * @returns JSON string
 */
export function exportHarmonyToJSON(harmony: ColorHarmony): string {
  return JSON.stringify(harmony, null, 2);
}

/**
 * Export color harmony scheme as Sass variables
 * @param harmony Color harmony scheme
 * @returns Sass variable string
 */
export function exportHarmonyToSass(harmony: ColorHarmony): string {
  let sass = `// ${harmony.name}\n// ${harmony.description}\n\n`;
  
  harmony.variations.forEach((variation) => {
    const name = variation.relationship.replace(/\s+/g, '-').toLowerCase();
    sass += `$color-${name}: ${variation.hex};\n`;
  });
  
  return sass;
} 