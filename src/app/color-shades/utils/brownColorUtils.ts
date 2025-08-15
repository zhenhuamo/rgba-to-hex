import { ColorData } from '../types/color';
import { BrownCategory, BrownShadeCategory } from '../types/brownShades';
import { BROWN_SHADE_CATEGORIES } from '../constants/brownShadeCategories';

// 将十六进制颜色转换为HSL
function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

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

// 判断颜色是否为棕色
function isBrownColor(hex: string, name: string): boolean {
  const [hue, saturation, lightness] = hexToHsl(hex);
  
  // 棕色的色相范围通常在10-60度之间
  const brownHueRange = hue >= 10 && hue <= 60;
  
  // 棕色通常有一定的饱和度和适中的亮度
  const brownSaturation = saturation >= 15;
  const brownLightness = lightness >= 10 && lightness <= 85;
  
  // 通过名称判断（包含棕色相关关键词）
  const brownKeywords = [
    'brown', 'tan', 'beige', 'chocolate', 'coffee', 'mocha', 'cocoa',
    'sienna', 'umber', 'sepia', 'khaki', 'bronze', 'copper', 'rust',
    'chestnut', 'mahogany', 'oak', 'walnut', 'cedar', 'teak', 'bamboo',
    'caramel', 'cinnamon', 'hazel', 'amber', 'burnt', 'earth', 'mud',
    'sand', 'desert', 'wheat', 'burlywood', 'peru', 'saddle', 'rosy'
  ];
  
  const nameContainsBrown = brownKeywords.some(keyword => 
    name.toLowerCase().includes(keyword)
  );
  
  return (brownHueRange && brownSaturation && brownLightness) || nameContainsBrown;
}

// 根据HSL值确定棕色分类
function categorizeBrownColor(hue: number, saturation: number, lightness: number): BrownShadeCategory {
  for (const category of BROWN_SHADE_CATEGORIES) {
    const [hueMin, hueMax] = category.hueRange;
    const [satMin, satMax] = category.saturationRange;
    const [lightMin, lightMax] = category.lightnessRange;
    
    if (hue >= hueMin && hue <= hueMax &&
        saturation >= satMin && saturation <= satMax &&
        lightness >= lightMin && lightness <= lightMax) {
      return category;
    }
  }
  
  // 默认分类逻辑
  if (lightness > 60) {
    return BROWN_SHADE_CATEGORIES.find(c => c.id === BrownCategory.LIGHT_BROWN)!;
  } else if (lightness < 35) {
    return BROWN_SHADE_CATEGORIES.find(c => c.id === BrownCategory.DARK_BROWN)!;
  } else {
    return BROWN_SHADE_CATEGORIES.find(c => c.id === BrownCategory.MEDIUM_BROWN)!;
  }
}

// 计算棕色的流行度分数
function calculateBrownPopularity(name: string, hex: string): number {
  const [hue, saturation, lightness] = hexToHsl(hex);
  let score = 0;
  
  // 基于名称的流行度
  const popularBrownNames = [
    'brown', 'chocolate', 'coffee', 'tan', 'beige', 'mocha', 'cocoa',
    'sienna', 'mahogany', 'chestnut', 'caramel', 'cinnamon', 'bronze'
  ];
  
  popularBrownNames.forEach((popularName, index) => {
    if (name.toLowerCase().includes(popularName)) {
      score += (popularBrownNames.length - index) * 10;
    }
  });
  
  // 基于HSL值的流行度调整
  // 中等亮度的棕色通常更受欢迎
  if (lightness >= 30 && lightness <= 70) {
    score += 20;
  }
  
  // 适中饱和度的棕色更受欢迎
  if (saturation >= 40 && saturation <= 80) {
    score += 15;
  }
  
  // 经典棕色色相范围
  if (hue >= 20 && hue <= 35) {
    score += 10;
  }
  
  return score;
}

// 过滤并处理棕色数据
export function filterBrownColors(colors: { name: string; hex: string }[]): ColorData[] {
  return colors
    .filter(color => isBrownColor(color.hex, color.name))
    .map(color => {
      const [hue, saturation, lightness] = hexToHsl(color.hex);
      const category = categorizeBrownColor(hue, saturation, lightness);
      const popularity = calculateBrownPopularity(color.name, color.hex);
      
      return {
        id: generateColorId(color.name, color.hex),
        name: color.name,
        hex: color.hex.toUpperCase(),
        rgb: hexToRgb(color.hex),
        hsl: { h: Math.round(hue), s: Math.round(saturation), l: Math.round(lightness) },
        category,
        popularity,
        tags: generateBrownTags(color.name, category),
        brightness: Math.round(lightness),
        saturation: Math.round(saturation),
      };
    });
}

// 生成颜色ID
function generateColorId(name: string, hex: string): string {
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const shortHex = hex.replace('#', '').toLowerCase();
  return `${cleanName}-${shortHex}`;
}

// 将十六进制转换为RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// 生成棕色标签
function generateBrownTags(name: string, category: BrownShadeCategory): string[] {
  const tags = [category.displayName.toLowerCase()];
  
  // 基于名称添加标签
  const tagMap: { [key: string]: string[] } = {
    'chocolate': ['sweet', 'dessert', 'rich'],
    'coffee': ['beverage', 'energizing', 'warm'],
    'wood': ['natural', 'organic', 'rustic'],
    'tan': ['skin tone', 'natural', 'warm'],
    'beige': ['neutral', 'soft', 'elegant'],
    'bronze': ['metallic', 'luxury', 'antique'],
    'copper': ['metallic', 'warm', 'industrial'],
    'mahogany': ['wood', 'luxury', 'furniture'],
    'oak': ['wood', 'strong', 'traditional'],
    'sienna': ['earth', 'artistic', 'natural'],
    'umber': ['earth', 'artistic', 'deep'],
  };
  
  Object.entries(tagMap).forEach(([keyword, keywordTags]) => {
    if (name.toLowerCase().includes(keyword)) {
      tags.push(...keywordTags);
    }
  });
  
  return [...new Set(tags)]; // 去重
}
