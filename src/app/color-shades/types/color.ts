// 基础颜色类型定义
export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export interface HSLColor {
  h: number;
  s: number;
  l: number;
}

export interface ColorCategory {
  id: string;
  name: string;
  displayName: string;
  hueRange: [number, number];
  color: string;
  icon?: string;
  description?: string;
}

export interface ColorData {
  id: string;
  name: string;
  hex: string;
  rgb: RGBColor;
  hsl: HSLColor;
  category: ColorCategory;
  tags: string[];
  brightness: number;
  saturation: number;
  popularity?: number;
  createdAt?: Date;
}

// 颜色格式类型
export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'rgba' | 'hsla';

// 颜色复制格式
export interface CopyFormat {
  id: ColorFormat;
  name: string;
  example: string;
  formatter: (color: ColorData) => string;
}
