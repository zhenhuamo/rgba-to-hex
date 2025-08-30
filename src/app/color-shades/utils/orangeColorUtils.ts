import { colord } from 'colord';
import { ColorData, RGBColor, HSLColor } from '../types/color';
import { OrangeShadeCategory } from '../types/orangeShades';
import { ORANGE_SHADE_CATEGORIES } from '../constants/orangeShadeCategories';

// 判断颜色是否为橙色系
export function isOrangeColor(hex: string): boolean {
  const color = colord(hex);
  const hsl = color.toHsl();
  
  // 橙色色相范围：15-45度，饱和度至少20%
  return hsl.h >= 15 && hsl.h <= 45 && hsl.s >= 20;
}

// 从原始颜色数据中筛选橙色系
export function filterOrangeColors(colors: { name: string; hex: string }[]): ColorData[] {
  return colors
    .filter(color => isOrangeColor(color.hex))
    .map(color => processColorData(color))
    .filter(Boolean) as ColorData[];
}

// 处理单个颜色数据
export function processColorData(rawColor: { name: string; hex: string }): ColorData | null {
  try {
    const color = colord(rawColor.hex);
    const rgb = color.toRgb();
    const hsl = color.toHsl();
    
    // 确保是橙色系
    if (!isOrangeColor(rawColor.hex)) {
      return null;
    }
    
    const category = categorizeOrangeShade(hsl);
    if (!category) {
      return null;
    }
    
    return {
      id: generateColorId(rawColor.name, rawColor.hex),
      name: rawColor.name,
      hex: rawColor.hex.toUpperCase(),
      rgb,
      hsl,
      category,
      tags: generateColorTags(rawColor.name, hsl),
      brightness: calculateBrightness(rgb),
      saturation: hsl.s,
      popularity: calculatePopularity(rawColor.name),
    };
  } catch (error) {
    console.warn(`Failed to process color: ${rawColor.name} (${rawColor.hex})`, error);
    return null;
  }
}

// 橙色分类
export function categorizeOrangeShade(hsl: HSLColor): OrangeShadeCategory | null {
  for (const category of ORANGE_SHADE_CATEGORIES) {
    const [hueMin, hueMax] = category.hueRange;
    const [satMin, satMax] = category.saturationRange;
    const [lightMin, lightMax] = category.lightnessRange;
    
    if (
      hsl.h >= hueMin && hsl.h <= hueMax &&
      hsl.s >= satMin && hsl.s <= satMax &&
      hsl.l >= lightMin && hsl.l <= lightMax
    ) {
      return category;
    }
  }
  
  // 默认分类为中等橙色
  return ORANGE_SHADE_CATEGORIES.find(cat => cat.id === 'medium-orange') || null;
}

// 生成颜色ID
export function generateColorId(name: string, hex: string): string {
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const shortHex = hex.replace('#', '').toLowerCase();
  return `${cleanName}-${shortHex}`;
}

// 生成搜索标签
export function generateColorTags(name: string, hsl: HSLColor): string[] {
  const tags: string[] = [];
  
  // 基于名称的标签
  const nameParts = name.toLowerCase().split(/[\s\-_]+/);
  tags.push(...nameParts);
  
  // 基于颜色属性的标签
  if (hsl.l > 80) tags.push('light', 'pale', 'soft');
  if (hsl.l < 40) tags.push('dark', 'deep', 'rich');
  if (hsl.s > 80) tags.push('vibrant', 'bright', 'vivid');
  if (hsl.s < 40) tags.push('muted', 'subtle');
  
  // 橙色特定标签
  tags.push('orange');
  if (hsl.h >= 15 && hsl.h <= 20) tags.push('red', 'vermillion');
  if (hsl.h >= 20 && hsl.h <= 30) tags.push('tangerine', 'coral');
  if (hsl.h >= 30 && hsl.h <= 40) tags.push('amber', 'peach');
  if (hsl.h >= 40 && hsl.h <= 45) tags.push('yellow', 'golden');
  if (hsl.l > 85 && hsl.s < 60) tags.push('cream', 'apricot');
  
  return [...new Set(tags)]; // 去重
}

// 计算颜色亮度
export function calculateBrightness(rgb: RGBColor): number {
  // 使用相对亮度公式
  return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
}

// 计算颜色流行度（基于名称特征）
export function calculatePopularity(name: string): number {
  const popularKeywords = [
    'orange', 'coral', 'peach', 'amber', 'tangerine', 'apricot', 'salmon',
    'rust', 'burnt', 'copper', 'bronze', 'pumpkin', 'carrot', 'sunset'
  ];
  
  const nameLower = name.toLowerCase();
  let score = 0;
  
  popularKeywords.forEach(keyword => {
    if (nameLower.includes(keyword)) {
      score += 1;
    }
  });
  
  // 简短名称通常更流行
  if (name.length <= 10) score += 1;
  
  return Math.min(score, 5); // 最高5分
}

// 查找相似橙色
export function findSimilarOrangeColors(
  targetColor: string,
  colors: ColorData[],
  count: number = 6
): ColorData[] {
  const target = colord(targetColor);
  
  return colors
    .map(color => ({
      ...color,
      similarity: calculateColorSimilarity(target, colord(color.hex))
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count);
}

// 计算颜色相似度
export function calculateColorSimilarity(color1: ReturnType<typeof colord>, color2: ReturnType<typeof colord>): number {
  // 使用RGB空间计算欧几里得距离
  const rgb1 = color1.toRgb();
  const rgb2 = color2.toRgb();

  const deltaR = rgb1.r - rgb2.r;
  const deltaG = rgb1.g - rgb2.g;
  const deltaB = rgb1.b - rgb2.b;

  // 计算欧几里得距离
  const distance = Math.sqrt(deltaR * deltaR + deltaG * deltaG + deltaB * deltaB);

  // 将距离转换为相似度 (0-1)，最大距离约为441 (sqrt(255^2 * 3))
  const maxDistance = Math.sqrt(255 * 255 * 3);
  return Math.max(0, 1 - distance / maxDistance);
}

// 获取颜色的格式化值
export function getColorValue(color: ColorData, format: string): string {
  switch (format) {
    case 'hex':
      return color.hex;
    case 'rgb':
      return `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
    case 'hsl':
      return `hsl(${Math.round(color.hsl.h)}, ${Math.round(color.hsl.s)}%, ${Math.round(color.hsl.l)}%)`;
    case 'rgba':
      return `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 1)`;
    case 'hsla':
      return `hsla(${Math.round(color.hsl.h)}, ${Math.round(color.hsl.s)}%, ${Math.round(color.hsl.l)}%, 1)`;
    default:
      return color.hex;
  }
}
