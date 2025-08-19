import { ColorData } from '../types/color';
import { BLACK_SHADE_CATEGORIES } from '../constants/blackShadeCategories';
import { BlackCategory } from '../types/blackShades';

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

// 判断颜色是否为黑色系
function isBlackColor(hex: string): boolean {
  const [, saturation, lightness] = hexToHsl(hex);

  // 黑色系的判断条件：
  // 1. 亮度较低 (0-60%)
  // 2. 饱和度不太高 (0-50%)，因为黑色通常是低饱和度的
  return lightness <= 60 && saturation <= 50;
}

// 根据HSL值确定黑色分类
function determineBlackCategory(hue: number, saturation: number, lightness: number): BlackCategory {
  // 纯黑色
  if (lightness <= 15 && saturation <= 20) {
    return BlackCategory.PURE_BLACK;
  }
  
  // 炭黑色
  if (lightness <= 30 && saturation <= 30) {
    return BlackCategory.CHARCOAL;
  }
  
  // 深灰色
  if (lightness <= 45 && saturation <= 25) {
    return BlackCategory.DARK_GRAY;
  }
  
  // 浅灰色
  if (lightness <= 60 && saturation <= 20) {
    return BlackCategory.LIGHT_GRAY;
  }
  
  // 暖黑色 (红、橙、黄色调)
  if (lightness <= 25 && saturation >= 10 && 
      ((hue >= 0 && hue <= 60) || (hue >= 300 && hue <= 360))) {
    return BlackCategory.WARM_BLACK;
  }
  
  // 冷黑色 (蓝、紫、绿色调)
  if (lightness <= 25 && saturation >= 10 && 
      (hue >= 180 && hue <= 300)) {
    return BlackCategory.COOL_BLACK;
  }
  
  // 默认返回深灰色
  return BlackCategory.DARK_GRAY;
}

// 计算颜色流行度
function calculateBlackColorPopularity(name: string, hex: string): number {
  const [, , lightness] = hexToHsl(hex);
  let popularity = 0;
  
  // 基于颜色名称的流行度
  const popularNames = [
    'black', 'charcoal', 'gray', 'grey', 'dark', 'ebony', 'onyx', 'jet',
    'coal', 'midnight', 'raven', 'obsidian', 'slate', 'gunmetal', 'anthracite'
  ];
  
  const lowerName = name.toLowerCase();
  popularNames.forEach(popularName => {
    if (lowerName.includes(popularName)) {
      popularity += 10;
    }
  });
  
  // 基于亮度的流行度（较暗的颜色在黑色系中更受欢迎）
  popularity += Math.max(0, 60 - lightness);
  
  // 纯黑色额外加分
  if (hex.toLowerCase() === '#000000') {
    popularity += 50;
  }
  
  return Math.min(100, popularity);
}

// 过滤并处理黑色系颜色
export function filterBlackColors(
  rawColors: { name: string; hex: string }[]
): ColorData[] {
  return rawColors
    .filter(color => isBlackColor(color.hex))
    .map(color => {
      const [hue, saturation, lightness] = hexToHsl(color.hex);
      const category = determineBlackCategory(hue, saturation, lightness);
      const categoryData = BLACK_SHADE_CATEGORIES.find(cat => cat.id === category);
      const popularity = calculateBlackColorPopularity(color.name, color.hex);
      
      return {
        id: `black-${color.hex.replace('#', '')}`,
        name: color.name,
        hex: color.hex.toUpperCase(),
        rgb: hexToRgb(color.hex),
        hsl: { h: Math.round(hue), s: Math.round(saturation), l: Math.round(lightness) },
        category: categoryData || BLACK_SHADE_CATEGORIES[0],
        tags: generateBlackColorTags(color.name, category),
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

// 生成黑色系标签
function generateBlackColorTags(name: string, category: BlackCategory): string[] {
  const baseTags = ['black', 'dark', 'shades of black'];
  const categoryTags: Record<BlackCategory, string[]> = {
    [BlackCategory.PURE_BLACK]: ['pure black', 'jet black', 'true black'],
    [BlackCategory.CHARCOAL]: ['charcoal', 'gunmetal', 'anthracite'],
    [BlackCategory.DARK_GRAY]: ['dark gray', 'slate', 'dim gray'],
    [BlackCategory.WARM_BLACK]: ['warm black', 'coffee', 'espresso'],
    [BlackCategory.COOL_BLACK]: ['cool black', 'midnight', 'raven'],
    [BlackCategory.LIGHT_GRAY]: ['light gray', 'silver', 'pale gray'],
  };
  
  return [...baseTags, ...categoryTags[category], name.toLowerCase()];
}