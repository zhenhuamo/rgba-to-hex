import { BrownShadeCategory, BrownCategory } from '../types/brownShades';

// 棕色系分类定义
export const BROWN_SHADE_CATEGORIES: BrownShadeCategory[] = [
  {
    id: BrownCategory.LIGHT_BROWN,
    name: 'light-brown',
    displayName: 'Light Brown',
    hueRange: [20, 40],
    saturationRange: [20, 60],
    lightnessRange: [60, 85],
    color: '#D2B48C',
    description: 'Soft, warm light brown shades perfect for natural and cozy designs',
    examples: ['Tan', 'Beige', 'Wheat', 'Burlywood'],
    seoKeywords: ['light brown', 'tan brown', 'beige brown', 'pale brown'],
    psychologyEffect: 'Warm, comfortable, natural, approachable',
    designUsage: ['Interior design', 'Natural brands', 'Rustic themes', 'Warm backgrounds'],
  },
  {
    id: BrownCategory.MEDIUM_BROWN,
    name: 'medium-brown',
    displayName: 'Medium Brown',
    hueRange: [15, 35],
    saturationRange: [40, 80],
    lightnessRange: [35, 60],
    color: '#8B4513',
    description: 'Balanced brown tones that work well in most design contexts',
    examples: ['Saddle Brown', 'Peru', 'Sandy Brown', 'Rosy Brown'],
    seoKeywords: ['medium brown', 'saddle brown', 'classic brown', 'standard brown'],
    psychologyEffect: 'Reliable, stable, earthy, grounded',
    designUsage: ['Corporate brands', 'Outdoor gear', 'Craft products', 'Traditional designs'],
  },
  {
    id: BrownCategory.DARK_BROWN,
    name: 'dark-brown',
    displayName: 'Dark Brown',
    hueRange: [10, 30],
    saturationRange: [50, 90],
    lightnessRange: [10, 35],
    color: '#654321',
    description: 'Deep, rich dark brown shades for sophisticated and elegant designs',
    examples: ['Dark Brown', 'Maroon', 'Sienna', 'Umber'],
    seoKeywords: ['dark brown', 'deep brown', 'rich brown', 'dark brown color'],
    psychologyEffect: 'Sophisticated, luxurious, strong, authoritative',
    designUsage: ['Luxury brands', 'Premium products', 'Formal designs', 'High-end furniture'],
  },
  {
    id: BrownCategory.CHOCOLATE_BROWN,
    name: 'chocolate-brown',
    displayName: 'Chocolate Brown',
    hueRange: [15, 25],
    saturationRange: [60, 90],
    lightnessRange: [20, 45],
    color: '#7B3F00',
    description: 'Rich chocolate-inspired brown shades that evoke warmth and indulgence',
    examples: ['Chocolate', 'Cocoa', 'Milk Chocolate', 'Dark Chocolate'],
    seoKeywords: ['chocolate brown', 'cocoa brown', 'chocolate color', 'brown chocolate'],
    psychologyEffect: 'Indulgent, warm, comforting, appetizing',
    designUsage: ['Food brands', 'Confectionery', 'Cozy interiors', 'Comfort products'],
  },
  {
    id: BrownCategory.COFFEE_BROWN,
    name: 'coffee-brown',
    displayName: 'Coffee Brown',
    hueRange: [20, 30],
    saturationRange: [70, 100],
    lightnessRange: [15, 40],
    color: '#6F4E37',
    description: 'Coffee-inspired brown shades that convey energy and sophistication',
    examples: ['Coffee', 'Espresso', 'Mocha', 'Cappuccino'],
    seoKeywords: ['coffee brown', 'espresso brown', 'mocha brown', 'coffee color'],
    psychologyEffect: 'Energizing, sophisticated, rich, stimulating',
    designUsage: ['Coffee shops', 'Cafes', 'Premium beverages', 'Urban designs'],
  },
  {
    id: BrownCategory.WOOD_BROWN,
    name: 'wood-brown',
    displayName: 'Wood Brown',
    hueRange: [25, 45],
    saturationRange: [30, 70],
    lightnessRange: [25, 65],
    color: '#8B4513',
    description: 'Natural wood-inspired brown shades that bring organic warmth',
    examples: ['Oak', 'Mahogany', 'Walnut', 'Cedar'],
    seoKeywords: ['wood brown', 'oak brown', 'mahogany brown', 'natural brown'],
    psychologyEffect: 'Natural, organic, stable, timeless',
    designUsage: ['Furniture', 'Construction', 'Eco-friendly brands', 'Rustic designs'],
  },
];

// 获取棕色分类的辅助函数
export function getBrownCategoryById(id: string): BrownShadeCategory | undefined {
  return BROWN_SHADE_CATEGORIES.find(category => category.id === id);
}

export function getBrownCategoriesByHue(hue: number): BrownShadeCategory[] {
  return BROWN_SHADE_CATEGORIES.filter(category => {
    const [min, max] = category.hueRange;
    return hue >= min && hue <= max;
  });
}

// SEO相关的棕色关键词
export const BROWN_SEO_KEYWORDS = [
  'shades of brown',
  'brown color palette',
  'brown hex codes',
  'brown color names',
  'different shades of brown',
  'brown color chart',
  'dark brown shades',
  'light brown colors',
  'chocolate brown shades',
  'coffee brown variations',
  'wood brown colors',
  'brown color codes',
];
