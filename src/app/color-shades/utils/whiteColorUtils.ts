import { ColorData } from '../types/color';
import { WHITE_SHADE_CATEGORIES } from '../constants/whiteShadeCategories';
import { WhiteCategory } from '../types/whiteShades';

// 将十六进制颜色转换为HSL
function hexToHsl(hex: string): [number, number, number] {
  // 移除 # 符号
  const cleanHex = hex.replace('#', '');
  
  // 转换为RGB
  const r = parseInt(cleanHex.substr(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substr(2, 2), 16) / 255;
  const b = parseInt(cleanHex.substr(4, 2), 16) / 255;

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

  return [h * 360, s * 100, l * 100];
}

// 判断颜色是否为白色系
function isWhiteColor(hex: string): boolean {
  const [, saturation, lightness] = hexToHsl(hex);

  // 白色系的判断条件：
  // 1. 亮度较高 (75-100%)
  // 2. 饱和度较低 (0-40%)，因为白色通常是低饱和度的
  return lightness >= 75 && saturation <= 40;
}

// 根据HSL值确定白色分类
function determineWhiteCategory(hue: number, saturation: number, lightness: number): WhiteCategory {
  // 纯白色
  if (lightness >= 95 && saturation <= 5) {
    return WhiteCategory.PURE_WHITE;
  }
  
  // 奶油色 (黄色调)
  if (lightness >= 90 && saturation >= 5 && saturation <= 25 && 
      hue >= 30 && hue <= 60) {
    return WhiteCategory.CREAM;
  }
  
  // 象牙色 (温暖的黄色调)
  if (lightness >= 88 && saturation >= 8 && saturation <= 30 && 
      hue >= 40 && hue <= 80) {
    return WhiteCategory.IVORY;
  }
  
  // 暖白色 (红、橙、黄色调)
  if (lightness >= 85 && saturation >= 5 && saturation <= 35 && 
      ((hue >= 0 && hue <= 90) || (hue >= 300 && hue <= 360))) {
    return WhiteCategory.WARM_WHITE;
  }
  
  // 冷白色 (蓝、紫、绿色调)
  if (lightness >= 88 && saturation >= 5 && saturation <= 30 && 
      hue >= 180 && hue <= 270) {
    return WhiteCategory.COOL_WHITE;
  }
  
  // 米白色/偏白色
  if (lightness >= 80 && saturation >= 10 && saturation <= 40) {
    return WhiteCategory.OFF_WHITE;
  }
  
  // 默认返回纯白色
  return WhiteCategory.PURE_WHITE;
}

// 计算颜色流行度
function calculateWhiteColorPopularity(name: string, hex: string): number {
  const [, , lightness] = hexToHsl(hex);
  let popularity = 0;
  
  // 基于颜色名称的流行度
  const popularNames = [
    'white', 'cream', 'ivory', 'snow', 'pearl', 'vanilla', 'linen', 'beige',
    'antique', 'floral', 'ghost', 'smoke', 'seashell', 'cornsilk', 'azure'
  ];
  
  const lowerName = name.toLowerCase();
  popularNames.forEach(popularName => {
    if (lowerName.includes(popularName)) {
      popularity += 10;
    }
  });
  
  // 基于亮度的流行度（较亮的颜色在白色系中更受欢迎）
  popularity += Math.max(0, lightness - 75);
  
  // 纯白色额外加分
  if (hex.toLowerCase() === '#ffffff') {
    popularity += 50;
  }
  
  return Math.min(100, popularity);
}

// 过滤并处理白色系颜色
export function filterWhiteColors(
  rawColors: { name: string; hex: string }[]
): ColorData[] {
  return rawColors
    .filter(color => isWhiteColor(color.hex))
    .map(color => {
      const [hue, saturation, lightness] = hexToHsl(color.hex);
      const category = determineWhiteCategory(hue, saturation, lightness);
      const categoryData = WHITE_SHADE_CATEGORIES.find(cat => cat.id === category);
      const popularity = calculateWhiteColorPopularity(color.name, color.hex);
      
      return {
        id: `white-${color.hex.replace('#', '')}`,
        name: color.name,
        hex: color.hex.toUpperCase(),
        rgb: hexToRgb(color.hex),
        hsl: { h: Math.round(hue), s: Math.round(saturation), l: Math.round(lightness) },
        category: categoryData || WHITE_SHADE_CATEGORIES[0],
        tags: generateWhiteColorTags(color.name, category),
        brightness: Math.round(lightness),
        saturation: Math.round(saturation),
        popularity,
      };
    });
}

// 辅助函数：十六进制转RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace('#', '');
  return {
    r: parseInt(cleanHex.substr(0, 2), 16),
    g: parseInt(cleanHex.substr(2, 2), 16),
    b: parseInt(cleanHex.substr(4, 2), 16),
  };
}

// 生成白色系标签
function generateWhiteColorTags(name: string, category: WhiteCategory): string[] {
  const baseTags = ['white', 'light', 'shades of white'];
  const categoryTags: Record<WhiteCategory, string[]> = {
    [WhiteCategory.PURE_WHITE]: ['pure white', 'snow white', 'true white'],
    [WhiteCategory.CREAM]: ['cream', 'vanilla', 'beige'],
    [WhiteCategory.IVORY]: ['ivory', 'antique white', 'old lace'],
    [WhiteCategory.WARM_WHITE]: ['warm white', 'cornsilk', 'seashell'],
    [WhiteCategory.COOL_WHITE]: ['cool white', 'alice blue', 'azure'],
    [WhiteCategory.OFF_WHITE]: ['off white', 'smoke', 'misty rose'],
  };
  
  return [...baseTags, ...categoryTags[category], name.toLowerCase()];
}
