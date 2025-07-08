// OKLCH转换函数 - 使用colord库确保精确转换

export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface HSV {
  h: number;
  s: number;
  v: number;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface CMYK {
  c: number; // Cyan (0-100)
  m: number; // Magenta (0-100)
  y: number; // Yellow (0-100)
  k: number; // Key/Black (0-100)
}

// 添加OKLCH接口定义
export interface OKLCH {
  l: number; // Lightness (0-1)
  c: number; // Chroma (0-0.4)
  h: number; // Hue (0-360)
}

// 添加LAB接口定义
export interface LAB {
  l: number; // Lightness (0-100)
  a: number; // Green-Red axis (-128 to 127)
  b: number; // Blue-Yellow axis (-128 to 127)
}

// 添加OKLAB接口定义
export interface OKLAB {
  l: number; // Lightness (0-1)
  a: number; // Green-Red axis (-0.4 to 0.4)
  b: number; // Blue-Yellow axis (-0.4 to 0.4)
}

// 添加XYZ接口定义
export interface XYZ {
  x: number; // X component (0-95.047 for D65 white point)
  y: number; // Y component (0-100.000 for D65 white point)
  z: number; // Z component (0-108.883 for D65 white point)
}

export interface ColorSystemInfo {
  pantone?: string;
  isInGamut: boolean;
  printabilityScore: number;
  nearestPrintableColor?: CMYK;
}

export interface ColorFormat {
  rgba: string;      // rgba(255, 0, 0, 1)
  hex: string;       // #ff0000
  hex8: string;      // #ff0000ff
  hsl: string;       // hsl(0, 100%, 50%)
  hsla: string;      // hsla(0, 100%, 50%, 1)
  named?: string;    // red (if exact match exists)
}

export const rgbaToHex = ({ r, g, b }: RGBA): string => {
  const toHex = (n: number): string => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return '#' + toHex(r) + toHex(g) + toHex(b);
};

// 新增8位HEX转换函数（保留透明度通道）
export const rgbaToHex8 = ({ r, g, b, a }: RGBA): string => {
  const toHex = (n: number): string => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  // 将0-1范围的alpha转为0-255整数
  const alpha = Math.round(a * 255);
  
  return '#' + toHex(r) + toHex(g) + toHex(b) + toHex(alpha);
};

export const isValidHex = (hex: string): boolean => {
  const regex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  return regex.test(hex);
};

export const hexToRgba = (hex: string): RGBA | null => {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse different hex formats
  let r, g, b, a = 1;
  
  if (hex.length === 3) {
    // Convert 3-digit hex to 6-digit
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else if (hex.length === 8) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
    a = parseInt(hex.slice(6, 8), 16) / 255;
  } else {
    return null;
  }

  // Validate values
  if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
    return null;
  }

  return { r, g, b, a };
};

export const isValidRgba = ({ r, g, b, a }: RGBA): boolean => {
  return (
    r >= 0 && r <= 255 &&
    g >= 0 && g <= 255 &&
    b >= 0 && b <= 255 &&
    a >= 0 && a <= 1
  );
};

export function rgbaToHsl({ r, g, b }: RGBA): HSL {
  // Convert RGB to [0, 1] range
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
    }

    h /= 6;
  }

  // Convert to degrees and percentages
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
  // Convert RGB to [0, 1] range
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
    }

    h /= 6;
  }

  // Convert to degrees and percentages
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export function rgbToCmyk(rgb: { r: number; g: number; b: number }): CMYK {
  // Normalize RGB values to 0-1 range
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  // Find the maximum value among RGB
  const k = 1 - Math.max(r, g, b);
  
  // If k is 1, then the color is black
  if (k === 1) {
    return {
      c: 0,
      m: 0,
      y: 0,
      k: 100
    };
  }

  // Calculate CMY values
  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);

  // Convert to percentages and round to 2 decimal places
  return {
    c: Math.round(c * 100 * 100) / 100,
    m: Math.round(m * 100 * 100) / 100,
    y: Math.round(y * 100 * 100) / 100,
    k: Math.round(k * 100 * 100) / 100
  };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  // Convert percentages to decimals
  s = s / 100;
  l = l / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

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

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}

// HSL to RGBA conversion with alpha channel support
export function hslToRgba(hsl: HSL, alpha: number = 1): RGBA {
  const rgb = hslToRgb(hsl);  // 复用现有函数
  return { ...rgb, a: Math.max(0, Math.min(1, alpha)) }; // 确保alpha在有效范围内
}

export function hsvToRgb({ h, s, v }: HSV): RGB {
  // 输入验证与范围钳制 (Input validation and clamping)
  h = Math.max(0, Math.min(360, h));
  s = Math.max(0, Math.min(100, s)) / 100; // Convert percentage to decimal and clamp
  v = Math.max(0, Math.min(100, v)) / 100; // Convert percentage to decimal and clamp

  // 如果 h 为 360，则视为 0 (If h is 360, treat as 0)
  if (h === 360) h = 0;

  // Convert percentages to decimals (0-1 range)
  // s = s / 100; // 已在钳制时处理
  // v = v / 100; // 已在钳制时处理

  const c = v * s; // Chroma
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;

  let r = 0;
  let g = 0;
  let b = 0;

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

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}

export function hslToHex(hsl: HSL): string {
  const rgb = hslToRgb(hsl);
  return rgbaToHex(rgb as RGBA); // Cast or ensure rgbaToHex can handle RGB
}

/**
 * Converts an HSV color value to a HEX string.
 * @param {HSV} hsv - The HSV color value.
 * @returns {string} The HEX color string (e.g., "#RRGGBB").
 */
export function hsvToHex(hsv: HSV): string {
  const rgb = hsvToRgb(hsv);
  // rgbaToHex expects an RGBA input but only uses r, g, b for 6-digit hex.
  // We can cast rgb to RGBA as the alpha component will be ignored by rgbaToHex.
  return rgbaToHex(rgb as RGBA);
}

export function cmykToRgb({ c, m, y, k }: CMYK): RGB {
  // 将 CMYK 值从百分比转换为小数 (0-1)
  const cyan = c / 100;
  const magenta = m / 100;
  const yellow = y / 100;
  const key = k / 100;

  // 计算 RGB 值
  const r = Math.round(255 * (1 - cyan) * (1 - key));
  const g = Math.round(255 * (1 - magenta) * (1 - key));
  const b = Math.round(255 * (1 - yellow) * (1 - key));

  // 确保值在 0-255 范围内
  return {
    r: Math.min(255, Math.max(0, r)),
    g: Math.min(255, Math.max(0, g)),
    b: Math.min(255, Math.max(0, b))
  };
}

export function cmykToHex(cmyk: CMYK): string {
  const rgb = cmykToRgb(cmyk);
  return rgbaToHex({ ...rgb, a: 1 });
}

/**
 * 将 CMYK 颜色转换为 RGBA 颜色，添加透明度支持
 * @param {CMYK} cmyk - CMYK 颜色对象
 * @param {number} alpha - 透明度值 (0-1，默认为1)
 * @returns {RGBA} RGBA 颜色对象
 */
export function cmykToRgba(cmyk: CMYK, alpha: number = 1): RGBA {
  const rgb = cmykToRgb(cmyk);  // 复用现有的CMYK to RGB转换函数
  return { 
    ...rgb, 
    a: Math.max(0, Math.min(1, alpha)) // 确保alpha在有效范围内(0-1)
  };
}

// 检查颜色是否在打印色域内
export function checkColorGamut(cmyk: CMYK): boolean {
  const totalInk = cmyk.c + cmyk.m + cmyk.y + cmyk.k;
  // 标准印刷通常建议总墨量不超过300%
  return totalInk <= 300;
}

// 计算打印适用性评分 (0-100)
export function calculatePrintScore(cmyk: CMYK): number {
  const totalInk = cmyk.c + cmyk.m + cmyk.y + cmyk.k;
  const inkScore = Math.max(0, 100 - Math.abs(totalInk - 240) / 3);
  
  // 检查各个通道是否在合理范围内
  const channelScores = [cmyk.c, cmyk.m, cmyk.y, cmyk.k].map(value => {
    if (value <= 90) return 100;
    return Math.max(0, 100 - (value - 90) * 2);
  });

  // 综合评分
  return Math.round(
    (inkScore + channelScores.reduce((a, b) => a + b, 0) / 4) / 2
  );
}

// 查找最近的Pantone色值
export function findNearestPantone(cmyk: CMYK): string {
  // 这里应该有一个完整的Pantone色库对照表
  // 这里只是示例实现
  const pantoneColors = [
    { name: 'PANTONE 485 C', c: 0, m: 95, y: 100, k: 0 },
    { name: 'PANTONE 2925 C', c: 85, m: 21, y: 0, k: 0 },
    { name: 'PANTONE 7739 C', c: 85, m: 0, y: 100, k: 0 },
    // ... 更多Pantone色值
  ];

  let nearestColor = pantoneColors[0];
  let smallestDifference = Number.MAX_VALUE;

  pantoneColors.forEach(color => {
    const difference = 
      Math.abs(color.c - cmyk.c) +
      Math.abs(color.m - cmyk.m) +
      Math.abs(color.y - cmyk.y) +
      Math.abs(color.k - cmyk.k);

    if (difference < smallestDifference) {
      smallestDifference = difference;
      nearestColor = color;
    }
  });

  return nearestColor.name;
}

// 获取色彩系统信息
export function getColorSystemInfo(cmyk: CMYK): ColorSystemInfo {
  return {
    pantone: findNearestPantone(cmyk),
    isInGamut: checkColorGamut(cmyk),
    printabilityScore: calculatePrintScore(cmyk)
  };
}

export function hsvToHsl({ h, s, v }: HSV): HSL {
  // Input validation: h (0-360), s (0-100), v (0-100)
  if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100) {
    // Or throw an error, or return a default, clamping is also an option
    console.error("Invalid HSV input for hsvToHsl:", { h, s, v });
    // For now, clamp values to valid ranges
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
  }

  const sNormalized = s / 100;
  const vNormalized = v / 100;

  const l = vNormalized * (1 - sNormalized / 2);
  let sHsl;
  if (l === 0 || l === 1) {
    sHsl = 0;
  } else {
    sHsl = (vNormalized - l) / Math.min(l, 1 - l);
  }

  return {
    h: h, // Hue remains the same
    s: Math.round(sHsl * 100),
    l: Math.round(l * 100)
  };
}

export function hslToHsv({ h, s, l }: HSL): HSV {
  // Input validation: h (0-360), s (0-100), l (0-100)
  if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
    console.error("Invalid HSL input for hslToHsv:", { h, s, l });
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    l = Math.max(0, Math.min(100, l));
  }

  const sNormalized = s / 100;
  const lNormalized = l / 100;

  const v = lNormalized + sNormalized * Math.min(lNormalized, 1 - lNormalized);
  let sHsv;
  if (v === 0) {
    sHsv = 0;
  } else {
    sHsv = 2 * (1 - lNormalized / v);
  }
  
  // Ensure sHsv is within 0-1 range before converting to percentage
  sHsv = Math.max(0, Math.min(1, sHsv));

  return {
    h: h, // Hue remains the same
    s: Math.round(sHsv * 100),
    v: Math.round(v * 100)
  };
}

export function rgbToHsv({ r, g, b }: RGB): HSV {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const v = max; // V is the max of R, G, B

  if (delta !== 0) {
    s = max === 0 ? 0 : delta / max; // Saturation

    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / delta + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / delta + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  };
}

export const rgbaToColor = ({ r, g, b, a }: RGBA): ColorFormat => {
  // 转换为rgba字符串
  const rgba = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
  
  // 转换为hex
  const hex = rgbaToHex({ r, g, b, a });
  
  // 转换为hex8
  const hex8 = rgbaToHex8({ r, g, b, a });
  
  // 转换为hsl
  const hsl = rgbaToHsl({ r, g, b, a });
  const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  
  // 转换为hsla
  const hsla = `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${a})`;
  
  // 尝试匹配命名颜色（仅在alpha为1且完全匹配时）
  let named: string | undefined;
  if (a === 1) {
    const colorMap: Record<string, string> = {
      '#ff0000': 'red',
      '#00ff00': 'lime',
      '#0000ff': 'blue',
      '#000000': 'black',
      '#ffffff': 'white',
      // 可以添加更多命名颜色映射
    };
    named = colorMap[hex.toLowerCase()];
  }
  
  return {
    rgba,
    hex,
    hex8,
    hsl: hslString,
    hsla,
    ...(named && { named })
  };
};

/**
 * 将 RGBA 颜色转换为 RGB 颜色，丢弃透明度信息
 * @param {RGBA} rgba - RGBA 颜色对象
 * @returns {RGB} RGB 颜色对象
 */
export function rgbaToRgb({ r, g, b }: RGBA): RGB {
  return { r, g, b };
}

/**
 * 将 RGBA 颜色与背景色混合，计算得到 RGB 颜色
 * @param {RGBA} rgba - RGBA 颜色对象
 * @param {RGB} background - 背景色 RGB 对象
 * @returns {RGB} 混合后的 RGB 颜色
 */
export function rgbaToRgbWithBackground({ r, g, b, a }: RGBA, background: RGB): RGB {
  // 使用 Alpha 混合公式: result = foreground * alpha + background * (1 - alpha)
  return {
    r: Math.round(r * a + background.r * (1 - a)),
    g: Math.round(g * a + background.g * (1 - a)),
    b: Math.round(b * a + background.b * (1 - a))
  };
}

// 将HEX颜色转换为CMYK
export function hexToCmyk(hex: string): CMYK {
  const rgba = hexToRgba(hex);
  if (!rgba) {
    throw new Error('Invalid hex color');
  }
  return rgbToCmyk({ r: rgba.r, g: rgba.g, b: rgba.b });
}

// HSL转OKLCH
export function hslToOklch({ h, s, l }: HSL): OKLCH {
  // 先转换为RGB
  const rgb = hslToRgb({ h, s, l });
  
  // 再转换为OKLCH
  return rgbToOklch(rgb);
}

// OKLCH转HSL
export function oklchToHsl({ l, c, h }: OKLCH): HSL {
  // 先转换为RGB
  const rgb = oklchToRgb({ l, c, h });

  // 再转换为HSL
  return rgbToHsl(rgb);
}

// HSV转OKLCH
export function hsvToOklch({ h, s, v }: HSV): OKLCH {
  // 先转换为RGB
  const rgb = hsvToRgb({ h, s, v });

  // 再转换为OKLCH
  return rgbToOklch(rgb);
}

// OKLCH转HSV
export function oklchToHsv({ l, c, h }: OKLCH): HSV {
  // 先转换为RGB
  const rgb = oklchToRgb({ l, c, h });

  // 再转换为HSV
  return rgbToHsv(rgb);
}

// RGB转OKLCH - 基于Oklab色彩空间的数学转换
export function rgbToOklch({ r, g, b }: RGB): OKLCH {
  // 第一步：RGB转线性RGB
  const rLinear = gammaToLinear(r / 255);
  const gLinear = gammaToLinear(g / 255);
  const bLinear = gammaToLinear(b / 255);
  
  // 第二步：线性RGB转XYZ (D65)
  const x = 0.4124564 * rLinear + 0.3575761 * gLinear + 0.1804375 * bLinear;
  const y = 0.2126729 * rLinear + 0.7151522 * gLinear + 0.0721750 * bLinear;
  const z = 0.0193339 * rLinear + 0.1191920 * gLinear + 0.9503041 * bLinear;
  
  // 第三步：XYZ转Oklab
  const l_ = Math.cbrt(0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z);
  const m_ = Math.cbrt(0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z);
  const s_ = Math.cbrt(0.0482003018 * x + 0.2643662691 * y + 0.6338517070 * z);
  
  const oklabL = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
  const oklabA = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
  const oklabB = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;
  
  // 第四步：Oklab转OKLCH
  const oklchL = oklabL;
  const oklchC = Math.sqrt(oklabA * oklabA + oklabB * oklabB);
  let oklchH = Math.atan2(oklabB, oklabA) * 180 / Math.PI;
  if (oklchH < 0) oklchH += 360;
  
  return {
    l: Math.round(oklchL * 1000) / 1000,
    c: Math.round(oklchC * 1000) / 1000,
    h: Math.round(oklchH)
  };
}

// OKLCH转RGB
export function oklchToRgb({ l, c, h }: OKLCH): RGB {
  // 第一步：OKLCH转Oklab
  const hRad = h * Math.PI / 180;
  const oklabL = l;
  const oklabA = c * Math.cos(hRad);
  const oklabB = c * Math.sin(hRad);
  
  // 第二步：Oklab转XYZ
  const l_ = oklabL + 0.3963377774 * oklabA + 0.2158037573 * oklabB;
  const m_ = oklabL - 0.1055613458 * oklabA - 0.0638541728 * oklabB;
  const s_ = oklabL - 0.0894841775 * oklabA - 1.2914855480 * oklabB;
  
  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;
  
  const x = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const y = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const z = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;
  
  // 第三步：XYZ转线性RGB
  const linearR = +3.2404542 * x - 1.5371385 * y - 0.4985314 * z;
  const linearG = -0.9692660 * x + 1.8760108 * y + 0.0415560 * z;
  const linearB = +0.0556434 * x - 0.2040259 * y + 1.0572252 * z;
  
  // 第四步：线性RGB转sRGB
  const r = Math.round(linearToGamma(linearR) * 255);
  const g = Math.round(linearToGamma(linearG) * 255);
  const blue = Math.round(linearToGamma(linearB) * 255);
  
  return {
    r: Math.max(0, Math.min(255, r)),
    g: Math.max(0, Math.min(255, g)),
    b: Math.max(0, Math.min(255, blue))
  };
}

// OKLCH转HEX
export function oklchToHex({ l, c, h }: OKLCH): string {
  const rgb = oklchToRgb({ l, c, h });
  return rgbaToHex({ ...rgb, a: 1 });
}

// HEX转OKLCH
export function hexToOklch(hex: string): OKLCH {
  const rgba = hexToRgba(hex);
  if (!rgba) {
    throw new Error('Invalid hex color');
  }
  return rgbToOklch({ r: rgba.r, g: rgba.g, b: rgba.b });
}

// OKLCH格式化为CSS字符串
export function oklchToCss({ l, c, h }: OKLCH): string {
  return `oklch(${l} ${c} ${h})`;
}

// 验证OKLCH值是否有效
export function isValidOklch({ l, c, h }: OKLCH): boolean {
  return (
    l >= 0 && l <= 1 &&
    c >= 0 && c <= 0.4 &&
    h >= 0 && h <= 360
  );
}

// 验证HSV值是否有效
export function isValidHsv({ h, s, v }: HSV): boolean {
  return (
    h >= 0 && h <= 360 &&
    s >= 0 && s <= 100 &&
    v >= 0 && v <= 100
  );
}

// HSV格式化为CSS字符串 (注意：CSS不直接支持HSV，这里转换为HSL)
export function hsvToCss({ h, s, v }: HSV): string {
  const hsl = hsvToHsl({ h, s, v });
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}



// 辅助函数：sRGB gamma校正
function gammaToLinear(value: number): number {
  return value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
}

function linearToGamma(value: number): number {
  return value <= 0.0031308 ? value * 12.92 : 1.055 * Math.pow(value, 1 / 2.4) - 0.055;
}

// RGB到LAB的转换函数
export function rgbToLab({ r, g, b }: RGB): LAB {
  // 首先将RGB转换为XYZ
  // 归一化RGB值到0-1范围
  const rLinear = gammaToLinear(r / 255);
  const gLinear = gammaToLinear(g / 255);
  const bLinear = gammaToLinear(b / 255);

  // RGB到XYZ的转换矩阵
  const x = 0.4124564 * rLinear + 0.3575761 * gLinear + 0.1804375 * bLinear;
  const y = 0.2126729 * rLinear + 0.7151522 * gLinear + 0.0721750 * bLinear;
  const z = 0.0193339 * rLinear + 0.1191920 * gLinear + 0.9503041 * bLinear;

  // 使用D65白点进行XYZ到LAB的转换
  const xn = 0.95047;
  const yn = 1.00000;
  const zn = 1.08883;

  // 归一化XYZ
  const xNorm = x / xn;
  const yNorm = y / yn;
  const zNorm = z / zn;

  // 非线性转换
  const x3 = xNorm > 0.008856 ? Math.pow(xNorm, 1/3) : (903.3 * xNorm + 16) / 116;
  const y3 = yNorm > 0.008856 ? Math.pow(yNorm, 1/3) : (903.3 * yNorm + 16) / 116;
  const z3 = zNorm > 0.008856 ? Math.pow(zNorm, 1/3) : (903.3 * zNorm + 16) / 116;

  // 计算L*, a*, b*
  const l = 116 * y3 - 16;
  const a = 500 * (x3 - y3);
  const bb = 200 * (y3 - z3);

  return {
    l: Math.round(l * 100) / 100,
    a: Math.round(a * 100) / 100,
    b: Math.round(bb * 100) / 100
  };
}

// LAB到RGB的转换函数
export function labToRgb({ l, a, b }: LAB): RGB {
  // LAB到XYZ转换
  const y = (l + 16) / 116;
  const x = a / 500 + y;
  const z = y - b / 200;

  // 应用反转的非线性转换
  const y3 = Math.pow(y, 3);
  const x3 = Math.pow(x, 3);
  const z3 = Math.pow(z, 3);

  const yNorm = y3 > 0.008856 ? y3 : (y - 16 / 116) / 7.787;
  const xNorm = x3 > 0.008856 ? x3 : (x - 16 / 116) / 7.787;
  const zNorm = z3 > 0.008856 ? z3 : (z - 16 / 116) / 7.787;

  // 使用D65白点
  const xn = 0.95047;
  const yn = 1.00000;
  const zn = 1.08883;

  // 应用白点缩放
  const xLinear = xNorm * xn;
  const yLinear = yNorm * yn;
  const zLinear = zNorm * zn;

  // XYZ到RGB的转换矩阵
  const rLinear = 3.2404542 * xLinear - 1.5371385 * yLinear - 0.4985314 * zLinear;
  const gLinear = -0.9692660 * xLinear + 1.8760108 * yLinear + 0.0415560 * zLinear;
  const bLinear = 0.0556434 * xLinear - 0.2040259 * yLinear + 1.0572252 * zLinear;

  // 限制值在0-1范围内
  const r = Math.round(linearToGamma(rLinear) * 255);
  const g = Math.round(linearToGamma(gLinear) * 255);
  const blue = Math.round(linearToGamma(bLinear) * 255);

  return { r, g, b: blue };
}

// 辅助函数：LAB到Hex
export function labToHex(lab: LAB): string {
  const rgb = labToRgb(lab);
  return rgbaToHex({ ...rgb, a: 1 });
}

// 辅助函数：Hex到LAB
export function hexToLab(hex: string): LAB {
  const rgba = hexToRgba(hex);
  if (!rgba) return { l: 0, a: 0, b: 0 };
  const rgb = { r: rgba.r, g: rgba.g, b: rgba.b };
  return rgbToLab(rgb);
}

// 辅助函数：LAB到CSS表示法
export function labToCss({ l, a, b }: LAB): string {
  return `lab(${l}% ${a.toFixed(2)} ${b.toFixed(2)})`;
}

// 辅助函数：验证LAB值是否有效
export function isValidLab({ l, a, b }: LAB): boolean {
  return l >= 0 && l <= 100 && a >= -128 && a <= 127 && b >= -128 && b <= 127;
}

// HSL to CMYK conversion (via RGB)
export function hslToCmyk(hsl: HSL): CMYK {
  // First convert HSL to RGB
  const rgb = hslToRgb(hsl);
  // Then convert RGB to CMYK
  return rgbToCmyk(rgb);
}

/**
 * Converts an HSV color value to an RGBA color value.
 * @param {HSV} hsv - The HSV color value.
 * @param {number} alpha - The alpha/transparency value (0-1, defaults to 1).
 * @returns {RGBA} The RGBA color value.
 */
export function hsvToRgba(hsv: HSV, alpha: number = 1): RGBA {
  const rgb = hsvToRgb(hsv);  // 复用现有的HSV to RGB转换函数
  return { ...rgb, a: Math.max(0, Math.min(1, alpha)) }; // 确保alpha在有效范围内(0-1)
} 

// RGB到XYZ的转换函数
export function rgbToXyz({ r, g, b }: RGB): XYZ {
  // 归一化RGB值到0-1范围并应用gamma校正
  const rLinear = gammaToLinear(r / 255);
  const gLinear = gammaToLinear(g / 255);
  const bLinear = gammaToLinear(b / 255);

  // RGB到XYZ的转换矩阵 (sRGB D65)
  const x = 0.4124564 * rLinear + 0.3575761 * gLinear + 0.1804375 * bLinear;
  const y = 0.2126729 * rLinear + 0.7151522 * gLinear + 0.0721750 * bLinear;
  const z = 0.0193339 * rLinear + 0.1191920 * gLinear + 0.9503041 * bLinear;

  // 乘以100以符合标准XYZ范围
  return {
    x: Math.round(x * 100 * 1000) / 1000, // 保留3位小数
    y: Math.round(y * 100 * 1000) / 1000,
    z: Math.round(z * 100 * 1000) / 1000
  };
}

// XYZ到RGB的转换函数
export function xyzToRgb({ x, y, z }: XYZ): RGB {
  // 将XYZ值归一化到0-1范围
  const xNorm = x / 100;
  const yNorm = y / 100;
  const zNorm = z / 100;

  // XYZ到RGB的转换矩阵 (sRGB D65)
  const rLinear = 3.2404542 * xNorm - 1.5371385 * yNorm - 0.4985314 * zNorm;
  const gLinear = -0.9692660 * xNorm + 1.8760108 * yNorm + 0.0415560 * zNorm;
  const bLinear = 0.0556434 * xNorm - 0.2040259 * yNorm + 1.0572252 * zNorm;

  // 应用逆gamma校正并转换到0-255范围
  const r = Math.round(linearToGamma(rLinear) * 255);
  const g = Math.round(linearToGamma(gLinear) * 255);
  const blue = Math.round(linearToGamma(bLinear) * 255);

  return {
    r: Math.max(0, Math.min(255, r)),
    g: Math.max(0, Math.min(255, g)),
    b: Math.max(0, Math.min(255, blue))
  };
}

// XYZ到HEX的转换函数
export function xyzToHex(xyz: XYZ): string {
  const rgb = xyzToRgb(xyz);
  return rgbaToHex({ ...rgb, a: 1 });
}

// HEX到XYZ的转换函数
export function hexToXyz(hex: string): XYZ {
  const rgba = hexToRgba(hex);
  if (!rgba) return { x: 0, y: 0, z: 0 };
  const rgb = { r: rgba.r, g: rgba.g, b: rgba.b };
  return rgbToXyz(rgb);
}

// 验证XYZ值是否有效
export function isValidXyz({ x, y, z }: XYZ): boolean {
  return (
    x >= 0 && x <= 95.047 &&
    y >= 0 && y <= 100.000 &&
    z >= 0 && z <= 108.883
  );
}

// XYZ格式化为CSS字符串（注意：CSS没有标准的XYZ格式，这里提供一个可读的格式）
export function xyzToCss({ x, y, z }: XYZ): string {
  return `xyz(${x.toFixed(3)} ${y.toFixed(3)} ${z.toFixed(3)})`;
}

// OKLCH转OKLAB
export function oklchToOklab({ l, c, h }: OKLCH): OKLAB {
  // 将OKLCH的极坐标转换为OKLAB的直角坐标
  const hRad = h * Math.PI / 180;
  const oklabL = l;
  const oklabA = c * Math.cos(hRad);
  const oklabB = c * Math.sin(hRad);

  return {
    l: Math.round(oklabL * 1000) / 1000,
    a: Math.round(oklabA * 1000) / 1000,
    b: Math.round(oklabB * 1000) / 1000
  };
}

// OKLAB转OKLCH
export function oklabToOklch({ l, a, b }: OKLAB): OKLCH {
  // 将OKLAB的直角坐标转换为OKLCH的极坐标
  const oklchL = l;
  const oklchC = Math.sqrt(a * a + b * b);
  let oklchH = Math.atan2(b, a) * 180 / Math.PI;
  if (oklchH < 0) oklchH += 360;

  return {
    l: Math.round(oklchL * 1000) / 1000,
    c: Math.round(oklchC * 1000) / 1000,
    h: Math.round(oklchH * 10) / 10
  };
}

// 验证OKLAB值是否有效
export function isValidOklab({ l, a, b }: OKLAB): boolean {
  return (
    l >= 0 && l <= 1 &&
    a >= -0.4 && a <= 0.4 &&
    b >= -0.4 && b <= 0.4
  );
}

// OKLAB格式化为CSS字符串
export function oklabToCss({ l, a, b }: OKLAB): string {
  return `oklab(${l.toFixed(3)} ${a.toFixed(3)} ${b.toFixed(3)})`;
}

// OKLAB转RGB (通过OKLCH)
export function oklabToRgb(oklab: OKLAB): RGB {
  const oklch = oklabToOklch(oklab);
  return oklchToRgb(oklch);
}

// RGB转OKLAB (通过OKLCH)
export function rgbToOklab(rgb: RGB): OKLAB {
  const oklch = rgbToOklch(rgb);
  return oklchToOklab(oklch);
}

// OKLAB转HEX
export function oklabToHex(oklab: OKLAB): string {
  const rgb = oklabToRgb(oklab);
  return rgbaToHex({ ...rgb, a: 1 });
}

// OKLCH转CMYK - 通过RGB作为中间转换
export function oklchToCmyk({ l, c, h }: OKLCH): CMYK {
  // 先转换为RGB
  const rgb = oklchToRgb({ l, c, h });

  // 再转换为CMYK
  return rgbToCmyk(rgb);
}

// CMYK转OKLCH - 通过RGB作为中间转换
export function cmykToOklch({ c, m, y, k }: CMYK): OKLCH {
  // 先转换为RGB
  const rgb = cmykToRgb({ c, m, y, k });

  // 再转换为OKLCH
  return rgbToOklch(rgb);
}

// 验证CMYK值是否有效
export function isValidCmyk({ c, m, y, k }: CMYK): boolean {
  return (
    c >= 0 && c <= 100 &&
    m >= 0 && m <= 100 &&
    y >= 0 && y <= 100 &&
    k >= 0 && k <= 100
  );
}

// CMYK格式化为CSS字符串
export function cmykToCss({ c, m, y, k }: CMYK): string {
  return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
}

// HEX转OKLAB
export function hexToOklab(hex: string): OKLAB {
  const rgba = hexToRgba(hex);
  if (!rgba) return { l: 0, a: 0, b: 0 };
  const rgb = { r: rgba.r, g: rgba.g, b: rgba.b };
  return rgbToOklab(rgb);
}