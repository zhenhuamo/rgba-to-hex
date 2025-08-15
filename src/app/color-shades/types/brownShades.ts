import { ColorCategory } from './color';

// 棕色系分类枚举
export enum BrownCategory {
  LIGHT_BROWN = 'light-brown',
  MEDIUM_BROWN = 'medium-brown', 
  DARK_BROWN = 'dark-brown',
  CHOCOLATE_BROWN = 'chocolate-brown',
  COFFEE_BROWN = 'coffee-brown',
  WOOD_BROWN = 'wood-brown',
}

// 棕色系分类接口
export interface BrownShadeCategory extends ColorCategory {
  id: BrownCategory;
  hueRange: [number, number];
  saturationRange: [number, number];
  lightnessRange: [number, number];
  color: string;
  description: string;
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 棕色相关的SEO关键词
export const BROWN_KEYWORDS = [
  'shades of brown',
  'types of brown',
  'brown color names',
  'brown shades',
  'brown color code',
  'brown colors',
  'brown colour code',
  'shade of brown',
  'dark brown color',
  'shades of brown color',
  'brown color',
  'light brown color',
  'brown color shades',
  'chocolate brown',
  'coffee brown',
  'wood brown',
  'brown hex codes',
  'brown color palette',
  'different shades of brown',
  'brown tones',
  'brown variations',
];
