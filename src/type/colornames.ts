export interface ColorName {
  name: string;
  hex: string;
  rgb?: {
    r: number;
    g: number;
    b: number;
  };
  source?: string;
  category?: string;
}

export interface ColorNameData {
  colors: ColorName[];
  metadata?: {
    totalColors: number;
    lastUpdated: string;
    version: string;
  };
} 