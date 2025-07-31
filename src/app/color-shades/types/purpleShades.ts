import { ColorCategory } from './color';

// 紫色分类枚举
export enum PurpleCategory {
  LIGHT_PURPLE = 'light-purple',
  DEEP_PURPLE = 'deep-purple',
  LAVENDER_PURPLE = 'lavender-purple',
  ROYAL_PURPLE = 'royal-purple',
  VIOLET_PURPLE = 'violet-purple',
  MAGENTA_PURPLE = 'magenta-purple',
  PLUM_PURPLE = 'plum-purple',
  AMETHYST_PURPLE = 'amethyst-purple',
}

// 紫色分类接口
export interface PurpleShadeCategory extends ColorCategory {
  id: PurpleCategory;
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
  psychologyEffect: string;
  designUsage: string[];
}

// 紫色相关的颜色名称关键词
export const PURPLE_COLOR_KEYWORDS = [
  'purple', 'violet', 'lavender', 'plum', 'magenta', 'amethyst',
  'orchid', 'lilac', 'mauve', 'indigo', 'grape', 'eggplant',
  'mulberry', 'burgundy', 'wine', 'royal', 'deep', 'dark',
  'light', 'pale', 'bright', 'rich', 'soft', 'vivid',
  'pastel', 'neon', 'electric', 'cosmic', 'mystic', 'twilight'
];

// 紫色色相范围定义
export const PURPLE_HUE_RANGE = {
  MIN: 240,  // 最小色相值
  MAX: 320,  // 最大色相值
} as const;

// 紫色饱和度阈值
export const PURPLE_SATURATION_THRESHOLD = 15; // 最小饱和度要求

// 紫色亮度范围
export const PURPLE_LIGHTNESS_RANGE = {
  MIN: 5,   // 最小亮度
  MAX: 95,  // 最大亮度
} as const;
