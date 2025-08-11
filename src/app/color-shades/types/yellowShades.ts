import { ColorData, ColorCategory } from './color';

// 黄色系分类
export interface YellowShadeCategory extends ColorCategory {
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 黄色系颜色数据
export interface YellowColorData extends ColorData {
  yellowCategory: YellowShadeCategory;
  complementaryColors: string[];
  designUsage: string[];
  psychologyEffect: string;
  isPopular: boolean;
}

// 黄色系SEO数据
export interface YellowSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
}

// 黄色分类枚举
export enum YellowCategory {
  LIGHT_YELLOW = 'light-yellow',
  MEDIUM_YELLOW = 'medium-yellow', 
  DARK_YELLOW = 'dark-yellow',
  GOLDEN_YELLOW = 'golden-yellow',
  LEMON_YELLOW = 'lemon-yellow',
  CREAM_YELLOW = 'cream-yellow',
  AMBER_YELLOW = 'amber-yellow',
  MUSTARD_YELLOW = 'mustard-yellow',
  CANARY_YELLOW = 'canary-yellow',
  BUTTER_YELLOW = 'butter-yellow',
}

// 黄色知识内容
export interface YellowKnowledgeSection {
  id: string;
  title: string;
  content: string;
  category: YellowCategory;
  seoValue: number;
}
