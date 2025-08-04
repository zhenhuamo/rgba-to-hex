import { PinkShadeCategory, PinkCategory } from '../types/pinkShades';

// 粉色系分类定义
export const PINK_SHADE_CATEGORIES: PinkShadeCategory[] = [
  {
    id: PinkCategory.LIGHT_PINK,
    name: 'light-pink',
    displayName: 'Light Pink',
    hueRange: [320, 360],
    saturationRange: [20, 70],
    lightnessRange: [80, 95],
    color: '#FFB6C1',
    description: 'Soft, gentle light pink shades perfect for delicate and romantic designs',
    examples: ['Baby Pink', 'Blush Pink', 'Powder Pink', 'Cotton Candy'],
    seoKeywords: ['light pink', 'baby pink', 'soft pink', 'pale pink', 'blush pink'],
    psychologyEffect: 'Gentle, nurturing, innocent, calming',
    designUsage: ['Baby products', 'Wedding themes', 'Beauty brands', 'Feminine designs'],
  },
  {
    id: PinkCategory.MEDIUM_PINK,
    name: 'medium-pink',
    displayName: 'Medium Pink',
    hueRange: [300, 340],
    saturationRange: [50, 85],
    lightnessRange: [50, 80],
    color: '#FF69B4',
    description: 'Classic pink tones that represent femininity and playfulness',
    examples: ['Pink', 'Hot Pink', 'Bubblegum Pink', 'Flamingo Pink'],
    seoKeywords: ['medium pink', 'classic pink', 'true pink', 'standard pink'],
    psychologyEffect: 'Playful, feminine, energetic, cheerful',
    designUsage: ['Fashion brands', 'Cosmetics', 'Children products', 'Creative industries'],
  },
  {
    id: PinkCategory.DARK_PINK,
    name: 'dark-pink',
    displayName: 'Dark Pink',
    hueRange: [300, 330],
    saturationRange: [60, 100],
    lightnessRange: [30, 60],
    color: '#C71585',
    description: 'Deep, intense dark pink shades for bold and sophisticated designs',
    examples: ['Deep Pink', 'Dark Pink', 'Fuchsia', 'Magenta'],
    seoKeywords: ['dark pink', 'deep pink', 'intense pink', 'bold pink'],
    psychologyEffect: 'Bold, confident, sophisticated, passionate',
    designUsage: ['Luxury brands', 'Fashion statements', 'Art projects', 'Bold designs'],
  },
  {
    id: PinkCategory.ROSE_PINK,
    name: 'rose-pink',
    displayName: 'Rose Pink',
    hueRange: [330, 350],
    saturationRange: [40, 80],
    lightnessRange: [50, 80],
    color: '#FF1493',
    description: 'Romantic rose-inspired pink shades with elegant undertones',
    examples: ['Rose', 'Rose Gold', 'Dusty Rose', 'Antique Rose'],
    seoKeywords: ['rose pink', 'dusty rose', 'rose gold', 'romantic pink'],
    psychologyEffect: 'Romantic, elegant, sophisticated, timeless',
    designUsage: ['Wedding designs', 'Vintage themes', 'Elegant brands', 'Romance themes'],
  },
  {
    id: PinkCategory.CORAL_PINK,
    name: 'coral-pink',
    displayName: 'Coral Pink',
    hueRange: [350, 20],
    saturationRange: [50, 90],
    lightnessRange: [60, 85],
    color: '#FF7F7F',
    description: 'Warm coral-pink shades that blend pink with orange undertones',
    examples: ['Coral Pink', 'Salmon Pink', 'Peach Pink', 'Sunset Pink'],
    seoKeywords: ['coral pink', 'salmon pink', 'peach pink', 'warm pink'],
    psychologyEffect: 'Warm, friendly, energetic, approachable',
    designUsage: ['Summer themes', 'Tropical designs', 'Lifestyle brands', 'Cheerful designs'],
  },
  {
    id: PinkCategory.PASTEL_PINK,
    name: 'pastel-pink',
    displayName: 'Pastel Pink',
    hueRange: [310, 350],
    saturationRange: [20, 60],
    lightnessRange: [85, 95],
    color: '#F8BBD0',
    description: 'Soft pastel pink shades perfect for gentle and dreamy designs',
    examples: ['Pastel Pink', 'Powder Pink', 'Soft Pink', 'Whisper Pink'],
    seoKeywords: ['pastel pink', 'powder pink', 'soft pink', 'gentle pink'],
    psychologyEffect: 'Dreamy, peaceful, innocent, soothing',
    designUsage: ['Nursery designs', 'Soft branding', 'Minimalist themes', 'Gentle products'],
  },
];

// 获取粉色分类的辅助函数
export function getPinkCategoryById(id: string): PinkShadeCategory | undefined {
  return PINK_SHADE_CATEGORIES.find(category => category.id === id);
}

export function getPinkCategoriesByHue(hue: number): PinkShadeCategory[] {
  return PINK_SHADE_CATEGORIES.filter(category => {
    const [min, max] = category.hueRange;
    // 处理跨越0度的色相范围（如350-20度）
    if (min > max) {
      return hue >= min || hue <= max;
    }
    return hue >= min && hue <= max;
  });
}

// SEO相关的粉色关键词
export const PINK_SEO_KEYWORDS = [
  'shades of pink',
  'pink color',
  'pink shades',
  'pink color code',
  'css color scheme pink',
  'pink css',
  'css codes for pink',
  'css shades of pink by names',
  'pink tones css',
  'pink color shades',
  'pink shades color code',
  'color of pink shades',
  'css color codes pink',
  'pink gradient color code',
  'pinkcolor',
  'shade of pink',
  'shades of pink colour',
  'types of pink',
  'all shades of pink',
  'pink code',
  'pink code color',
  'pink color codes',
  'pink color palette',
  'pink color picker',
  'pink colors',
  'pink colour code',
  'pink colours',
  'pink gradient color',
  'pink shades color',
  'pink color chart',
  'pink hex codes',
  'pink color names',
  'different shades of pink',
  'light pink colors',
  'dark pink shades',
  'rose pink variations',
  'coral pink colors',
  'pastel pink palette',
  'pink color combination',
  'pink color scheme',
  'softer pink color',
  'pink color all shades',
];
