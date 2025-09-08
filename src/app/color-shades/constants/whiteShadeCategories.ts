import { WhiteShadeCategory, WhiteCategory } from '../types/whiteShades';

// 白色系分类定义
export const WHITE_SHADE_CATEGORIES: WhiteShadeCategory[] = [
  {
    id: WhiteCategory.PURE_WHITE,
    name: 'pure-white',
    displayName: 'Pure White',
    hueRange: [0, 360],
    saturationRange: [0, 5],
    lightnessRange: [95, 100],
    color: '#FFFFFF',
    description: 'Pure, clean white shades that represent absolute brightness and clarity',
    examples: ['White', 'Snow White', 'Pure White', 'Ghost White'],
    seoKeywords: ['pure white', 'snow white', 'true white', 'bright white'],
    psychologyEffect: 'Clean, pure, fresh, minimalist, peaceful',
    designUsage: ['Minimalist design', 'Medical/healthcare', 'Modern architecture', 'Clean interfaces'],
  },
  {
    id: WhiteCategory.CREAM,
    name: 'cream',
    displayName: 'Cream',
    hueRange: [30, 60],
    saturationRange: [5, 25],
    lightnessRange: [90, 98],
    color: '#FFFDD0',
    description: 'Warm cream white shades with subtle yellow undertones',
    examples: ['Cream', 'Vanilla', 'Beige', 'Linen'],
    seoKeywords: ['cream white', 'vanilla white', 'beige white', 'linen white'],
    psychologyEffect: 'Warm, comfortable, inviting, cozy, traditional',
    designUsage: ['Interior design', 'Traditional decor', 'Wedding themes', 'Vintage design'],
  },
  {
    id: WhiteCategory.IVORY,
    name: 'ivory',
    displayName: 'Ivory',
    hueRange: [40, 80],
    saturationRange: [8, 30],
    lightnessRange: [88, 96],
    color: '#FFFFF0',
    description: 'Elegant ivory white shades with warm, sophisticated undertones',
    examples: ['Ivory', 'Antique White', 'Old Lace', 'Floral White'],
    seoKeywords: ['ivory white', 'antique white', 'old lace', 'floral white'],
    psychologyEffect: 'Elegant, sophisticated, timeless, luxurious',
    designUsage: ['Luxury brands', 'Wedding design', 'Classic interiors', 'Fine art'],
  },
  {
    id: WhiteCategory.WARM_WHITE,
    name: 'warm-white',
    displayName: 'Warm White',
    hueRange: [0, 90],
    saturationRange: [5, 35],
    lightnessRange: [85, 95],
    color: '#FDF5E6',
    description: 'White shades with warm undertones of yellow, orange, or pink',
    examples: ['Warm White', 'Cornsilk', 'Seashell', 'Papaya Whip'],
    seoKeywords: ['warm white', 'cornsilk', 'seashell white', 'papaya whip'],
    psychologyEffect: 'Cozy, welcoming, comfortable, homey',
    designUsage: ['Home interiors', 'Hospitality', 'Cozy spaces', 'Traditional design'],
  },
  {
    id: WhiteCategory.COOL_WHITE,
    name: 'cool-white',
    displayName: 'Cool White',
    hueRange: [180, 270],
    saturationRange: [5, 30],
    lightnessRange: [88, 98],
    color: '#F0F8FF',
    description: 'White shades with cool undertones of blue, green, or purple',
    examples: ['Cool White', 'Alice Blue', 'Azure', 'Mint Cream'],
    seoKeywords: ['cool white', 'alice blue', 'azure white', 'mint cream'],
    psychologyEffect: 'Fresh, clean, modern, crisp, professional',
    designUsage: ['Modern design', 'Technology', 'Healthcare', 'Corporate spaces'],
  },
  {
    id: WhiteCategory.OFF_WHITE,
    name: 'off-white',
    displayName: 'Off White',
    hueRange: [0, 360],
    saturationRange: [10, 40],
    lightnessRange: [80, 92],
    color: '#FAF0E6',
    description: 'Subtle off-white shades that are not pure white but maintain brightness',
    examples: ['Off White', 'Smoke', 'Misty Rose', 'Lavender Blush'],
    seoKeywords: ['off white', 'smoke white', 'misty rose', 'lavender blush'],
    psychologyEffect: 'Soft, gentle, subtle, sophisticated',
    designUsage: ['Backgrounds', 'Subtle accents', 'Soft design', 'Neutral palettes'],
  },
];

// 获取白色分类的辅助函数
export function getWhiteCategoryById(id: string): WhiteShadeCategory | undefined {
  return WHITE_SHADE_CATEGORIES.find(category => category.id === id);
}

export function getWhiteCategoriesByHue(hue: number): WhiteShadeCategory[] {
  return WHITE_SHADE_CATEGORIES.filter(category => {
    const [min, max] = category.hueRange;
    if (min === 0 && max === 360) return true; // Full range
    return hue >= min && hue <= max;
  });
}

// SEO相关的白色关键词
export const WHITE_SEO_KEYWORDS = [
  'shades of white',
  'white color palette',
  'white hex codes',
  'white color names',
  'different shades of white',
  'white color chart',
  'cream white shades',
  'ivory white colors',
  'pure white shades',
  'white color variations',
  'white color codes',
  'white colour code',
];
