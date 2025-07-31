import { ColorData, RGBColor, HSLColor } from '../types/color';
import { 
  PURPLE_COLOR_KEYWORDS, 
  PURPLE_HUE_RANGE, 
  PURPLE_SATURATION_THRESHOLD,
  PURPLE_LIGHTNESS_RANGE,
  PurpleCategory 
} from '../types/purpleShades';
import { PURPLE_SHADE_CATEGORIES } from '../constants/purpleShadeCategories';

// RGB转HSL
export function rgbToHsl(r: number, g: number, b: number): HSLColor {
  r /= 255;
  g /= 255;
  b /= 255;

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
    l: Math.round(l * 100),
  };
}

// Hex转RGB
export function hexToRgb(hex: string): RGBColor | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// 判断颜色是否为紫色
export function isPurpleColor(hex: string, name: string): boolean {
  // 首先检查颜色名称是否包含紫色关键词
  const nameContainsPurple = PURPLE_COLOR_KEYWORDS.some(keyword =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );

  // 如果名称明确包含紫色关键词，直接返回true
  if (nameContainsPurple) {
    return true;
  }

  // 通过HSL值判断
  const rgb = hexToRgb(hex);
  if (!rgb) return false;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // 检查色相范围
  const isInHueRange = 
    hsl.h >= PURPLE_HUE_RANGE.MIN && hsl.h <= PURPLE_HUE_RANGE.MAX;

  // 检查饱和度和亮度
  const hasMinSaturation = hsl.s >= PURPLE_SATURATION_THRESHOLD;
  const isInLightnessRange = 
    hsl.l >= PURPLE_LIGHTNESS_RANGE.MIN && hsl.l <= PURPLE_LIGHTNESS_RANGE.MAX;

  return isInHueRange && hasMinSaturation && isInLightnessRange;
}

// 确定紫色的具体分类
export function getPurpleCategory(hsl: HSLColor): PurpleCategory {
  const { h, s, l } = hsl;

  // 按照优先级和特征匹配分类
  for (const category of PURPLE_SHADE_CATEGORIES) {
    const [hueMin, hueMax] = category.hueRange;
    const [satMin, satMax] = category.saturationRange;
    const [lightMin, lightMax] = category.lightnessRange;

    if (
      h >= hueMin && h <= hueMax &&
      s >= satMin && s <= satMax &&
      l >= lightMin && l <= lightMax
    ) {
      return category.id;
    }
  }

  // 默认分类逻辑
  if (l >= 70) return PurpleCategory.LIGHT_PURPLE;
  if (l <= 40) return PurpleCategory.DEEP_PURPLE;
  if (h >= 280 && h <= 300 && s >= 40 && s <= 80) return PurpleCategory.LAVENDER_PURPLE;
  if (s >= 70) return PurpleCategory.ROYAL_PURPLE;
  if (h >= 250 && h <= 270) return PurpleCategory.VIOLET_PURPLE;
  if (h >= 290) return PurpleCategory.MAGENTA_PURPLE;
  if (s <= 60) return PurpleCategory.PLUM_PURPLE;
  
  return PurpleCategory.AMETHYST_PURPLE;
}

// 计算颜色亮度（用于排序）
export function calculateBrightness(rgb: RGBColor): number {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

// 计算颜色饱和度（用于排序）
export function calculateSaturation(hsl: HSLColor): number {
  return hsl.s;
}

// 生成紫色标签
export function generatePurpleTags(name: string, category: PurpleCategory): string[] {
  const tags = ['purple'];
  
  // 基于分类添加标签
  switch (category) {
    case PurpleCategory.LIGHT_PURPLE:
      tags.push('light', 'pale', 'soft');
      break;
    case PurpleCategory.DEEP_PURPLE:
      tags.push('deep', 'dark', 'rich');
      break;
    case PurpleCategory.LAVENDER_PURPLE:
      tags.push('lavender', 'floral', 'gentle');
      break;
    case PurpleCategory.ROYAL_PURPLE:
      tags.push('royal', 'regal', 'majestic');
      break;
    case PurpleCategory.VIOLET_PURPLE:
      tags.push('violet', 'classic', 'balanced');
      break;
    case PurpleCategory.MAGENTA_PURPLE:
      tags.push('magenta', 'bright', 'vibrant');
      break;
    case PurpleCategory.PLUM_PURPLE:
      tags.push('plum', 'wine', 'mature');
      break;
    case PurpleCategory.AMETHYST_PURPLE:
      tags.push('amethyst', 'crystal', 'precious');
      break;
  }

  // 基于名称添加额外标签
  const nameLower = name.toLowerCase();
  if (nameLower.includes('light') || nameLower.includes('pale')) tags.push('light');
  if (nameLower.includes('dark') || nameLower.includes('deep')) tags.push('dark');
  if (nameLower.includes('bright') || nameLower.includes('vivid')) tags.push('bright');

  return [...new Set(tags)]; // 去重
}

// 筛选紫色并转换为ColorData格式
export function filterPurpleColors(
  rawColors: { name: string; hex: string }[]
): ColorData[] {
  const purpleColors: ColorData[] = [];

  for (const rawColor of rawColors) {
    if (isPurpleColor(rawColor.hex, rawColor.name)) {
      const rgb = hexToRgb(rawColor.hex);
      if (!rgb) continue;

      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      const category = getPurpleCategory(hsl);
      const categoryData = PURPLE_SHADE_CATEGORIES.find(cat => cat.id === category);

      if (!categoryData) continue;

      const colorData: ColorData = {
        id: `purple-${rawColor.hex.replace('#', '')}-${Date.now()}-${Math.random()}`,
        name: rawColor.name,
        hex: rawColor.hex.toUpperCase(),
        rgb,
        hsl,
        category: categoryData,
        tags: generatePurpleTags(rawColor.name, category),
        brightness: calculateBrightness(rgb),
        saturation: calculateSaturation(hsl),
        popularity: calculatePopularity(rawColor.name),
        createdAt: new Date(),
      };

      purpleColors.push(colorData);
    }
  }

  return purpleColors;
}

// 计算颜色流行度（基于名称常见程度）
function calculatePopularity(name: string): number {
  const nameLower = name.toLowerCase();

  // 常见紫色名称的流行度权重
  const popularityMap: Record<string, number> = {
    'purple': 100,
    'violet': 90,
    'lavender': 85,
    'plum': 80,
    'magenta': 75,
    'amethyst': 70,
    'orchid': 65,
    'lilac': 60,
    'mauve': 55,
    'indigo': 50,
  };

  let popularity = 0;

  for (const [keyword, weight] of Object.entries(popularityMap)) {
    if (nameLower.includes(keyword)) {
      popularity = Math.max(popularity, weight);
    }
  }

  // 基于名称长度调整（较短的名称通常更常用）
  const lengthFactor = Math.max(0, 20 - name.length);
  popularity += lengthFactor;

  return Math.min(100, popularity);
}

// 按分类筛选紫色
export function filterPurpleByCategory(
  colors: ColorData[],
  categoryId: string
): ColorData[] {
  if (categoryId === 'all') return colors;
  return colors.filter(color => color.category.id === categoryId);
}

// 搜索紫色（按名称或hex）
export function searchPurpleColors(
  colors: ColorData[],
  searchTerm: string
): ColorData[] {
  if (!searchTerm.trim()) return colors;

  const term = searchTerm.toLowerCase().trim();

  return colors.filter(color =>
    color.name.toLowerCase().includes(term) ||
    color.hex.toLowerCase().includes(term) ||
    color.tags.some(tag => tag.toLowerCase().includes(term))
  );
}
