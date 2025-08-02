import { RedShadeCategory, RedCategory } from '../types/redShades';

// 红色系分类定义
export const RED_SHADE_CATEGORIES: RedShadeCategory[] = [
  {
    id: RedCategory.LIGHT_RED,
    name: 'light-red',
    displayName: 'Light Red',
    hueRange: [340, 20],
    saturationRange: [30, 80],
    lightnessRange: [70, 95],
    color: '#FFB6C1',
    description: 'Soft, gentle light red shades perfect for romantic and delicate designs',
    examples: ['Light Pink', 'Baby Pink', 'Blush', 'Rose Quartz'],
    seoKeywords: ['light red', 'pale red', 'soft red', 'baby red', 'blush red'],
    psychologyEffect: 'Gentle, romantic, nurturing, calming',
    designUsage: ['Beauty brands', 'Wedding designs', 'Baby products', 'Feminine brands'],
  },
  {
    id: RedCategory.MEDIUM_RED,
    name: 'medium-red',
    displayName: 'Medium Red',
    hueRange: [350, 10],
    saturationRange: [50, 90],
    lightnessRange: [40, 70],
    color: '#DC143C',
    description: 'Classic red tones that represent passion and energy',
    examples: ['Crimson', 'Red', 'Fire Engine Red', 'Cardinal Red'],
    seoKeywords: ['medium red', 'classic red', 'true red', 'standard red'],
    psychologyEffect: 'Passionate, energetic, confident, bold',
    designUsage: ['Brand logos', 'Call-to-action buttons', 'Sports teams', 'Emergency services'],
  },
  {
    id: RedCategory.DARK_RED,
    name: 'dark-red',
    displayName: 'Dark Red',
    hueRange: [340, 20],
    saturationRange: [60, 100],
    lightnessRange: [10, 40],
    color: '#8B0000',
    description: 'Deep, sophisticated dark red shades for elegant and powerful designs',
    examples: ['Dark Red', 'Maroon', 'Burgundy', 'Wine Red'],
    seoKeywords: ['dark red', 'deep red', 'maroon', 'burgundy'],
    psychologyEffect: 'Sophisticated, powerful, luxurious, authoritative',
    designUsage: ['Luxury brands', 'Fine dining', 'Premium products', 'Corporate identity'],
  },
  {
    id: RedCategory.ROSE_RED,
    name: 'rose-red',
    displayName: 'Rose Red',
    hueRange: [330, 350],
    saturationRange: [40, 80],
    lightnessRange: [50, 80],
    color: '#FF69B4',
    description: 'Romantic rose-inspired red shades with pink undertones',
    examples: ['Rose', 'Hot Pink', 'Deep Pink', 'Magenta'],
    seoKeywords: ['rose red', 'pink red', 'magenta', 'hot pink'],
    psychologyEffect: 'Romantic, playful, feminine, creative',
    designUsage: ['Fashion brands', 'Cosmetics', 'Valentine themes', 'Creative industries'],
  },
  {
    id: RedCategory.CORAL_RED,
    name: 'coral-red',
    displayName: 'Coral Red',
    hueRange: [10, 30],
    saturationRange: [50, 90],
    lightnessRange: [50, 80],
    color: '#FF7F50',
    description: 'Warm coral-red shades that blend red with orange undertones',
    examples: ['Coral', 'Salmon', 'Tomato', 'Orange Red'],
    seoKeywords: ['coral red', 'salmon red', 'orange red', 'warm red'],
    psychologyEffect: 'Warm, friendly, energetic, approachable',
    designUsage: ['Summer themes', 'Tropical designs', 'Food brands', 'Lifestyle products'],
  },
  {
    id: RedCategory.CRIMSON_RED,
    name: 'crimson-red',
    displayName: 'Crimson Red',
    hueRange: [350, 10],
    saturationRange: [70, 100],
    lightnessRange: [30, 60],
    color: '#DC143C',
    description: 'Intense crimson red shades that command attention and convey strength',
    examples: ['Crimson', 'Scarlet', 'Ruby', 'Fire Red'],
    seoKeywords: ['crimson red', 'scarlet red', 'ruby red', 'fire red'],
    psychologyEffect: 'Intense, passionate, dramatic, powerful',
    designUsage: ['Entertainment', 'Sports brands', 'Warning signs', 'Bold statements'],
  },
];

// 获取红色分类的辅助函数
export function getRedCategoryById(id: string): RedShadeCategory | undefined {
  return RED_SHADE_CATEGORIES.find(category => category.id === id);
}

export function getRedCategoriesByHue(hue: number): RedShadeCategory[] {
  return RED_SHADE_CATEGORIES.filter(category => {
    const [min, max] = category.hueRange;
    // 处理跨越0度的色相范围（如340-20度）
    if (min > max) {
      return hue >= min || hue <= max;
    }
    return hue >= min && hue <= max;
  });
}

// SEO相关的红色关键词
export const RED_SEO_KEYWORDS = [
  'shades of red',
  'red color palette',
  'red hex codes',
  'red color names',
  'different shades of red',
  'red color chart',
  'dark red shades',
  'light red colors',
  'crimson red shades',
  'rose red variations',
  'coral red colors',
  'burgundy red palette',
  'red color combination',
  'red color gradient',
  'types of red',
  'red color scheme',
  'softer red color',
  'red color all shades',
];
