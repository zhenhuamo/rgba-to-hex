import { ColorData, ColorCategory } from './color';

// 白色系分类
export interface WhiteShadeCategory extends ColorCategory {
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 白色系颜色数据
export interface WhiteColorData extends ColorData {
  whiteCategory: WhiteShadeCategory;
  complementaryColors: string[];
  designUsage: string[];
  psychologyEffect: string;
  isPopular: boolean;
}

// 白色系SEO数据
export interface WhiteSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
}

// 白色分类枚举
export enum WhiteCategory {
  PURE_WHITE = 'pure-white',
  CREAM = 'cream',
  IVORY = 'ivory',
  WARM_WHITE = 'warm-white',
  COOL_WHITE = 'cool-white',
  OFF_WHITE = 'off-white',
}

// 白色知识内容
export interface WhiteKnowledgeSection {
  id: string;
  title: string;
  content: string;
  category: WhiteCategory;
  seoValue: number;
}
