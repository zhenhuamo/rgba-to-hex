import { ColorData, ColorCategory } from './color';

// 黑色系分类
export interface BlackShadeCategory extends ColorCategory {
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 黑色系颜色数据
export interface BlackColorData extends ColorData {
  blackCategory: BlackShadeCategory;
  complementaryColors: string[];
  designUsage: string[];
  psychologyEffect: string;
  isPopular: boolean;
}

// 黑色系SEO数据
export interface BlackSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
}

// 黑色分类枚举
export enum BlackCategory {
  PURE_BLACK = 'pure-black',
  CHARCOAL = 'charcoal',
  DARK_GRAY = 'dark-gray',
  WARM_BLACK = 'warm-black',
  COOL_BLACK = 'cool-black',
  LIGHT_GRAY = 'light-gray',
}

// 黑色知识内容
export interface BlackKnowledgeSection {
  id: string;
  title: string;
  content: string;
  category: BlackCategory;
  seoValue: number;
}
