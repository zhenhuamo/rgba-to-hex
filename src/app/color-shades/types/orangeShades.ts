import { ColorData, ColorCategory } from './color';

// 橙色系分类
export interface OrangeShadeCategory extends ColorCategory {
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 橙色系颜色数据
export interface OrangeColorData extends ColorData {
  orangeCategory: OrangeShadeCategory;
  complementaryColors: string[];
  designUsage: string[];
  psychologyEffect: string;
  isPopular: boolean;
}

// 橙色系SEO数据
export interface OrangeSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
}

// 橙色分类枚举
export enum OrangeCategory {
  LIGHT_ORANGE = 'light-orange',
  MEDIUM_ORANGE = 'medium-orange', 
  DARK_ORANGE = 'dark-orange',
  RED_ORANGE = 'red-orange',
  YELLOW_ORANGE = 'yellow-orange',
  PEACH_ORANGE = 'peach-orange',
  CORAL_ORANGE = 'coral-orange',
  BURNT_ORANGE = 'burnt-orange',
  TANGERINE_ORANGE = 'tangerine-orange',
  AMBER_ORANGE = 'amber-orange',
}

// 橙色知识内容
export interface OrangeKnowledgeSection {
  id: string;
  title: string;
  content: string;
  category: OrangeCategory;
  seoValue: number;
}
