import { ColorData, ColorCategory } from './color';

// 粉色系分类
export interface PinkShadeCategory extends ColorCategory {
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 粉色系颜色数据
export interface PinkColorData extends ColorData {
  pinkCategory: PinkShadeCategory;
  complementaryColors: string[];
  designUsage: string[];
  psychologyEffect: string;
  isPopular: boolean;
}

// 粉色系SEO数据
export interface PinkSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
}

// 粉色分类枚举
export enum PinkCategory {
  LIGHT_PINK = 'light-pink',
  MEDIUM_PINK = 'medium-pink', 
  DARK_PINK = 'dark-pink',
  ROSE_PINK = 'rose-pink',
  CORAL_PINK = 'coral-pink',
  PASTEL_PINK = 'pastel-pink',
  HOT_PINK = 'hot-pink',
  MAGENTA_PINK = 'magenta-pink',
  BLUSH_PINK = 'blush-pink',
  DUSTY_PINK = 'dusty-pink',
}

// 粉色知识内容
export interface PinkKnowledgeSection {
  id: string;
  title: string;
  content: string;
  category: PinkCategory;
  seoValue: number;
}
