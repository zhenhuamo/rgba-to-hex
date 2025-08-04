import { colord } from 'colord';
import { ColorData, RGBColor, HSLColor } from '../types/color';
import { PinkShadeCategory } from '../types/pinkShades';
import { PINK_SHADE_CATEGORIES } from '../constants/pinkShadeCategories';

// 判断颜色是否为粉色系
export function isPinkColor(hex: string): boolean {
  const color = colord(hex);
  const hsl = color.toHsl();
  
  // 粉色色相范围：300-360度 和 0-30度，饱和度至少15%，亮度至少40%
  const hueInRange = (hsl.h >= 300 && hsl.h <= 360) || (hsl.h >= 0 && hsl.h <= 30);
  return hueInRange && hsl.s >= 15 && hsl.l >= 40;
}

// 从原始颜色数据中筛选粉色系
export function filterPinkColors(colors: { name: string; hex: string }[]): ColorData[] {
  return colors
    .filter(color => isPinkColor(color.hex))
    .map(color => processColorData(color))
    .filter(Boolean) as ColorData[];
}

// 处理单个颜色数据
export function processColorData(rawColor: { name: string; hex: string }): ColorData | null {
  try {
    const color = colord(rawColor.hex);
    const rgb = color.toRgb();
    const hsl = color.toHsl();
    
    // 确保是粉色系
    if (!isPinkColor(rawColor.hex)) {
      return null;
    }
    
    const category = categorizePinkShade(hsl);
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

// 粉色分类
export function categorizePinkShade(hsl: HSLColor): PinkShadeCategory | null {
  for (const category of PINK_SHADE_CATEGORIES) {
    const [hueMin, hueMax] = category.hueRange;
    const [satMin, satMax] = category.saturationRange;
    const [lightMin, lightMax] = category.lightnessRange;
    
    // 处理跨越0度的色相范围
    let hueInRange = false;
    if (hueMin > hueMax) {
      hueInRange = hsl.h >= hueMin || hsl.h <= hueMax;
    } else {
      hueInRange = hsl.h >= hueMin && hsl.h <= hueMax;
    }
    
    if (
      hueInRange &&
      hsl.s >= satMin && hsl.s <= satMax &&
      hsl.l >= lightMin && hsl.l <= lightMax
    ) {
      return category;
    }
  }
  
  // 默认分类为中等粉色
  return PINK_SHADE_CATEGORIES.find(cat => cat.id === 'medium-pink') || null;
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
  if (hsl.l > 80) tags.push('light', 'pale', 'soft', 'pastel');
  if (hsl.l < 50) tags.push('dark', 'deep', 'rich');
  if (hsl.s > 70) tags.push('vibrant', 'bright', 'vivid', 'hot');
  if (hsl.s < 40) tags.push('muted', 'subtle', 'dusty');
  
  // 粉色特定标签
  tags.push('pink');
  if (hsl.h >= 300 && hsl.h <= 320) tags.push('magenta', 'fuchsia');
  if (hsl.h >= 320 && hsl.h <= 340) tags.push('rose', 'blush');
  if (hsl.h >= 340 && hsl.h <= 360) tags.push('coral', 'salmon');
  if (hsl.h >= 0 && hsl.h <= 20) tags.push('peach', 'coral');
  
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
    'pink', 'rose', 'blush', 'coral', 'salmon', 'magenta', 'fuchsia',
    'hot', 'baby', 'powder', 'pastel', 'dusty', 'peach', 'flamingo'
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

// 查找相似粉色
export function findSimilarPinkColors(
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
