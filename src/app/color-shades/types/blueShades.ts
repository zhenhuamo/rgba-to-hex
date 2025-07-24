import { ColorData, ColorCategory } from './color';

// 蓝色系分类
export interface BlueShadeCategory extends ColorCategory {
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 蓝色系颜色数据
export interface BlueColorData extends ColorData {
  blueCategory: BlueShadeCategory;
  complementaryColors: string[];
  designUsage: string[];
  psychologyEffect: string;
  isPopular: boolean;
}

// 蓝色系SEO数据
export interface BlueSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
}

// 蓝色分类枚举
export enum BlueCategory {
  LIGHT_BLUE = 'light-blue',
  MEDIUM_BLUE = 'medium-blue', 
  DARK_BLUE = 'dark-blue',
  NAVY_BLUE = 'navy-blue',
  SKY_BLUE = 'sky-blue',
  ROYAL_BLUE = 'royal-blue',
  TEAL_BLUE = 'teal-blue',
  POWDER_BLUE = 'powder-blue',
}

// 蓝色知识内容
export interface BlueKnowledgeSection {
  id: string;
  title: string;
  content: string;
  category: BlueCategory;
  seoValue: number;
}
