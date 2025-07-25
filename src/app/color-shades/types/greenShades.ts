import { ColorData, ColorCategory } from './color';

// 绿色系分类
export interface GreenShadeCategory extends ColorCategory {
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 绿色系颜色数据
export interface GreenColorData extends ColorData {
  greenCategory: GreenShadeCategory;
  complementaryColors: string[];
  designUsage: string[];
  psychologyEffect: string;
  isPopular: boolean;
}

// 绿色系SEO数据
export interface GreenSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
}

// 绿色分类枚举
export enum GreenCategory {
  LIGHT_GREEN = 'light-green',
  MEDIUM_GREEN = 'medium-green', 
  DARK_GREEN = 'dark-green',
  FOREST_GREEN = 'forest-green',
  LIME_GREEN = 'lime-green',
  EMERALD_GREEN = 'emerald-green',
  MINT_GREEN = 'mint-green',
  OLIVE_GREEN = 'olive-green',
}

// 绿色知识内容
export interface GreenKnowledgeSection {
  id: string;
  title: string;
  content: string;
  category: GreenCategory;
  seoValue: number;
}
