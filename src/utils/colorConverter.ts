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

export interface ColorSystemInfo {
  pantone?: string;
  isInGamut: boolean;
  printabilityScore: number;
  nearestPrintableColor?: CMYK;
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

export function hslToHex(hsl: HSL): string {
  const rgb = hslToRgb(hsl);
  const toHex = (n: number): string => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return '#' + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b);
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