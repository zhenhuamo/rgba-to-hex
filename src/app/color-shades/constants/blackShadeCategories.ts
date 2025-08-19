import { BlackShadeCategory, BlackCategory } from '../types/blackShades';

// 黑色系分类定义
export const BLACK_SHADE_CATEGORIES: BlackShadeCategory[] = [
  {
    id: BlackCategory.PURE_BLACK,
    name: 'pure-black',
    displayName: 'Pure Black',
    hueRange: [0, 360],
    saturationRange: [0, 20],
    lightnessRange: [0, 15],
    color: '#000000',
    description: 'Deep, pure black shades that represent the absence of light',
    examples: ['Black', 'Jet Black', 'Ebony', 'Onyx'],
    seoKeywords: ['pure black', 'jet black', 'true black', 'deep black'],
    psychologyEffect: 'Powerful, elegant, mysterious, sophisticated',
    designUsage: ['Luxury brands', 'High-end fashion', 'Minimalist design', 'Typography'],
  },
  {
    id: BlackCategory.CHARCOAL,
    name: 'charcoal',
    displayName: 'Charcoal',
    hueRange: [0, 360],
    saturationRange: [0, 30],
    lightnessRange: [15, 30],
    color: '#36454F',
    description: 'Dark charcoal shades that blend black with subtle gray undertones',
    examples: ['Charcoal', 'Dark Charcoal', 'Gunmetal', 'Anthracite'],
    seoKeywords: ['charcoal black', 'dark charcoal', 'gunmetal', 'anthracite'],
    psychologyEffect: 'Professional, stable, modern, sophisticated',
    designUsage: ['Corporate design', 'Architecture', 'Automotive', 'Technology'],
  },
  {
    id: BlackCategory.DARK_GRAY,
    name: 'dark-gray',
    displayName: 'Dark Gray',
    hueRange: [0, 360],
    saturationRange: [0, 25],
    lightnessRange: [30, 45],
    color: '#2F4F4F',
    description: 'Dark gray shades that maintain the essence of black with more lightness',
    examples: ['Dark Gray', 'Slate Gray', 'Dim Gray', 'Dark Slate Gray'],
    seoKeywords: ['dark gray', 'slate gray', 'dim gray', 'dark grey'],
    psychologyEffect: 'Neutral, balanced, professional, timeless',
    designUsage: ['Web design', 'Interior design', 'Graphic design', 'UI/UX'],
  },
  {
    id: BlackCategory.WARM_BLACK,
    name: 'warm-black',
    displayName: 'Warm Black',
    hueRange: [0, 60],
    saturationRange: [10, 40],
    lightnessRange: [0, 25],
    color: '#1C1C1C',
    description: 'Black shades with warm undertones of red, brown, or orange',
    examples: ['Warm Black', 'Coffee Black', 'Dark Brown', 'Espresso'],
    seoKeywords: ['warm black', 'coffee black', 'brown black', 'espresso black'],
    psychologyEffect: 'Cozy, inviting, rich, comfortable',
    designUsage: ['Interior design', 'Fashion', 'Food & beverage', 'Hospitality'],
  },
  {
    id: BlackCategory.COOL_BLACK,
    name: 'cool-black',
    displayName: 'Cool Black',
    hueRange: [180, 300],
    saturationRange: [10, 40],
    lightnessRange: [0, 25],
    color: '#0A0A0A',
    description: 'Black shades with cool undertones of blue, purple, or green',
    examples: ['Cool Black', 'Blue Black', 'Midnight Black', 'Raven Black'],
    seoKeywords: ['cool black', 'blue black', 'midnight black', 'raven black'],
    psychologyEffect: 'Modern, sleek, high-tech, mysterious',
    designUsage: ['Technology', 'Automotive', 'Electronics', 'Modern art'],
  },
  {
    id: BlackCategory.LIGHT_GRAY,
    name: 'light-gray',
    displayName: 'Light Gray',
    hueRange: [0, 360],
    saturationRange: [0, 20],
    lightnessRange: [45, 60],
    color: '#696969',
    description: 'Lighter gray shades that extend the black color family',
    examples: ['Light Gray', 'Silver', 'Gainsboro', 'Light Slate Gray'],
    seoKeywords: ['light gray', 'silver gray', 'light grey', 'pale gray'],
    psychologyEffect: 'Calm, neutral, versatile, clean',
    designUsage: ['Backgrounds', 'Text colors', 'Minimalist design', 'Web interfaces'],
  },
];

// 获取黑色分类的辅助函数
export function getBlackCategoryById(id: string): BlackShadeCategory | undefined {
  return BLACK_SHADE_CATEGORIES.find(category => category.id === id);
}

export function getBlackCategoriesByHue(hue: number): BlackShadeCategory[] {
  return BLACK_SHADE_CATEGORIES.filter(category => {
    const [min, max] = category.hueRange;
    if (min === 0 && max === 360) return true; // Full range
    return hue >= min && hue <= max;
  });
}

// SEO相关的黑色关键词
export const BLACK_SEO_KEYWORDS = [
  'shades of black',
  'black color palette',
  'black hex codes',
  'black color names',
  'different shades of black',
  'black color chart',
  'charcoal black shades',
  'dark gray colors',
  'pure black shades',
  'black color variations',
  'black color codes',
  'black colour code',
];
