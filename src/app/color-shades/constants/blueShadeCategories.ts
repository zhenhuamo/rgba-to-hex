import { BlueShadeCategory, BlueCategory } from '../types/blueShades';

// 蓝色系分类定义
export const BLUE_SHADE_CATEGORIES: BlueShadeCategory[] = [
  {
    id: BlueCategory.LIGHT_BLUE,
    name: 'light-blue',
    displayName: 'Light Blue',
    hueRange: [180, 240],
    saturationRange: [30, 80],
    lightnessRange: [70, 95],
    color: '#87CEEB',
    description: 'Soft, calming light blue shades perfect for peaceful designs',
    examples: ['Sky Blue', 'Powder Blue', 'Light Steel Blue', 'Alice Blue'],
    seoKeywords: ['light blue', 'pale blue', 'soft blue', 'baby blue'],
    psychologyEffect: 'Calming, peaceful, trustworthy',
    designUsage: ['Backgrounds', 'Wellness brands', 'Baby products', 'Healthcare'],
  },
  {
    id: BlueCategory.MEDIUM_BLUE,
    name: 'medium-blue',
    displayName: 'Medium Blue',
    hueRange: [200, 240],
    saturationRange: [50, 90],
    lightnessRange: [40, 70],
    color: '#4169E1',
    description: 'Balanced blue tones that work well in most design contexts',
    examples: ['Royal Blue', 'Dodger Blue', 'Cornflower Blue', 'Steel Blue'],
    seoKeywords: ['medium blue', 'royal blue', 'classic blue', 'standard blue'],
    psychologyEffect: 'Professional, reliable, confident',
    designUsage: ['Corporate brands', 'Technology', 'Social media', 'Professional services'],
  },
  {
    id: BlueCategory.DARK_BLUE,
    name: 'dark-blue',
    displayName: 'Dark Blue',
    hueRange: [200, 240],
    saturationRange: [60, 100],
    lightnessRange: [10, 40],
    color: '#000080',
    description: 'Deep, sophisticated dark blue shades for elegant designs',
    examples: ['Navy Blue', 'Midnight Blue', 'Dark Blue', 'Prussian Blue'],
    seoKeywords: ['dark blue', 'navy blue', 'deep blue', 'midnight blue'],
    psychologyEffect: 'Authoritative, sophisticated, stable',
    designUsage: ['Luxury brands', 'Financial services', 'Government', 'Formal wear'],
  },
  {
    id: BlueCategory.SKY_BLUE,
    name: 'sky-blue',
    displayName: 'Sky Blue',
    hueRange: [180, 210],
    saturationRange: [40, 80],
    lightnessRange: [60, 90],
    color: '#87CEEB',
    description: 'Fresh sky-inspired blue shades that evoke openness and freedom',
    examples: ['Sky Blue', 'Light Sky Blue', 'Deep Sky Blue', 'Celestial Blue'],
    seoKeywords: ['sky blue', 'celestial blue', 'heaven blue', 'air blue'],
    psychologyEffect: 'Free, open, inspiring, optimistic',
    designUsage: ['Travel brands', 'Outdoor activities', 'Aviation', 'Weather apps'],
  },
  {
    id: BlueCategory.TEAL_BLUE,
    name: 'teal-blue',
    displayName: 'Teal Blue',
    hueRange: [160, 200],
    saturationRange: [50, 90],
    lightnessRange: [30, 70],
    color: '#008080',
    description: 'Blue-green teal shades that combine the best of both colors',
    examples: ['Teal', 'Dark Cyan', 'Light Sea Green', 'Cadet Blue'],
    seoKeywords: ['teal blue', 'blue green', 'cyan blue', 'turquoise blue'],
    psychologyEffect: 'Balanced, refreshing, sophisticated, modern',
    designUsage: ['Modern brands', 'Tech startups', 'Spa & wellness', 'Creative agencies'],
  },
  {
    id: BlueCategory.NAVY_BLUE,
    name: 'navy-blue',
    displayName: 'Navy Blue',
    hueRange: [210, 240],
    saturationRange: [80, 100],
    lightnessRange: [10, 30],
    color: '#000080',
    description: 'Classic navy blue shades that convey authority and tradition',
    examples: ['Navy', 'Dark Navy', 'Midnight Navy', 'Oxford Blue'],
    seoKeywords: ['navy blue', 'naval blue', 'uniform blue', 'oxford blue'],
    psychologyEffect: 'Authoritative, traditional, trustworthy, professional',
    designUsage: ['Military', 'Education', 'Law enforcement', 'Corporate uniforms'],
  },
];

// 获取蓝色分类的辅助函数
export function getBlueCategoryById(id: string): BlueShadeCategory | undefined {
  return BLUE_SHADE_CATEGORIES.find(category => category.id === id);
}

export function getBlueCategoriesByHue(hue: number): BlueShadeCategory[] {
  return BLUE_SHADE_CATEGORIES.filter(category => {
    const [min, max] = category.hueRange;
    return hue >= min && hue <= max;
  });
}

// SEO相关的蓝色关键词
export const BLUE_SEO_KEYWORDS = [
  'shades of blue',
  'blue color palette',
  'blue hex codes',
  'blue color names',
  'different shades of blue',
  'blue color chart',
  'navy blue shades',
  'light blue colors',
  'dark blue shades',
  'sky blue variations',
  'teal blue colors',
  'royal blue palette',
];
