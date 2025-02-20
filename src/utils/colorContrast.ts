// 将十六进制颜色转换为RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

// 计算相对亮度
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928
      ? c / 12.92
      : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// 混合颜色与背景
function blendColors(color: { r: number; g: number; b: number }, opacity: number, background: { r: number; g: number; b: number }): { r: number; g: number; b: number } {
  return {
    r: Math.round(color.r * opacity + background.r * (1 - opacity)),
    g: Math.round(color.g * opacity + background.g * (1 - opacity)),
    b: Math.round(color.b * opacity + background.b * (1 - opacity))
  };
}

// 计算对比度
export function calculateContrastRatio(
  color1: string,
  color2: string,
  opacity1: number = 100,
  opacity2: number = 100
): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  // 将百分比转换为小数
  const alpha1 = opacity1 / 100;
  const alpha2 = opacity2 / 100;

  // 如果有透明度，需要与白色背景混合
  const whiteBackground = { r: 255, g: 255, b: 255 };
  const finalColor1 = alpha1 < 1 ? blendColors(rgb1, alpha1, whiteBackground) : rgb1;
  const finalColor2 = alpha2 < 1 ? blendColors(rgb2, alpha2, whiteBackground) : rgb2;
  
  const l1 = getLuminance(finalColor1.r, finalColor1.g, finalColor1.b);
  const l2 = getLuminance(finalColor2.r, finalColor2.g, finalColor2.b);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

// 获取WCAG级别
export function getWCAGLevel(ratio: number): { AA: boolean; AAA: boolean } {
  return {
    AA: ratio >= 4.5,
    AAA: ratio >= 7
  };
} 