import { ColorData, ColorCategory } from './color';

// 红色系分类
export interface RedShadeCategory extends ColorCategory {
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 红色系颜色数据
export interface RedColorData extends ColorData {
  redCategory: RedShadeCategory;
  complementaryColors: string[];
  designUsage: string[];
  psychologyEffect: string;
  isPopular: boolean;
}

// 红色系SEO数据
export interface RedSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
}

// 红色分类枚举
export enum RedCategory {
  LIGHT_RED = 'light-red',
  MEDIUM_RED = 'medium-red', 
  DARK_RED = 'dark-red',
  CRIMSON_RED = 'crimson-red',
  ROSE_RED = 'rose-red',
  BURGUNDY_RED = 'burgundy-red',
  CORAL_RED = 'coral-red',
  CHERRY_RED = 'cherry-red',
  WINE_RED = 'wine-red',
  BRICK_RED = 'brick-red',
}

// 红色知识内容
export interface RedKnowledgeSection {
  id: string;
  title: string;
  content: string;
  category: RedCategory;
  seoValue: number;
}
