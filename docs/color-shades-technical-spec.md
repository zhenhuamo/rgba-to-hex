# 颜色展示页面技术实现规范

## 🏗️ 技术架构详细设计

### 1. 文件结构
```
src/app/color-shades/
├── page.tsx                          # 颜色展示模块首页（重定向到shades-of-blue）
├── layout.tsx                        # 模块级布局
├── shades-of-blue/
│   ├── page.tsx                      # "Shades of Blue" 主页面
│   ├── layout.tsx                    # 页面布局
│   ├── loading.tsx                   # 加载状态
│   ├── error.tsx                     # 错误处理
│   └── opengraph-image.tsx           # SEO图片生成
├── components/                           # 共享组件
│   ├── ColorGrid/
│   │   ├── index.tsx                 # 通用颜色网格组件
│   │   ├── ColorCard.tsx             # 通用颜色卡片
│   │   ├── VirtualGrid.tsx           # 虚拟滚动网格
│   │   └── GridSkeleton.tsx          # 加载骨架
│   ├── Search/
│   │   ├── SearchBar.tsx             # 通用搜索栏
│   │   ├── SearchSuggestions.tsx     # 搜索建议
│   │   └── SearchHistory.tsx         # 搜索历史
│   ├── Filter/
│   │   ├── FilterPanel.tsx           # 通用筛选面板
│   │   ├── CategoryFilter.tsx        # 分类筛选
│   │   ├── RangeSlider.tsx           # 范围滑块
│   │   └── FilterChips.tsx           # 筛选标签
│   ├── Modal/
│   │   ├── ColorDetailModal.tsx      # 颜色详情弹窗
│   │   ├── ExportModal.tsx           # 导出弹窗
│   │   └── ShareModal.tsx            # 分享弹窗
│   └── Common/
│       ├── CopyButton.tsx            # 复制按钮
│       ├── ColorPreview.tsx          # 颜色预览
│       └── LoadingSpinner.tsx        # 加载动画
├── shades-of-blue/
│   └── components/                   # 蓝色系专用组件
│       ├── BlueHeroSection.tsx       # 蓝色主题Hero区域
│       ├── BlueCategoryTabs.tsx      # 蓝色分类标签
│       ├── BlueColorGrid.tsx         # 蓝色系网格（继承通用组件）
│       ├── BlueFilterPanel.tsx       # 蓝色系筛选面板
│       └── BlueKnowledgeSection.tsx  # 蓝色知识内容区域
├── hooks/                               # 共享Hooks
│   ├── useColorData.ts               # 颜色数据管理
│   ├── useColorFilter.ts             # 筛选逻辑
│   ├── useColorSearch.ts             # 搜索逻辑
│   ├── useVirtualScroll.ts           # 虚拟滚动
│   ├── useCopyToClipboard.ts         # 复制功能
│   ├── useLocalStorage.ts            # 本地存储
│   └── useBlueColorData.ts           # 蓝色系专用数据处理
├── utils/                            # 共享工具函数
│   ├── colorAnalysis.ts              # 颜色分析工具
│   ├── colorCategories.ts            # 颜色分类
│   ├── colorSearch.ts                # 搜索算法
│   ├── colorExport.ts                # 导出功能
│   ├── colorUtils.ts                 # 通用工具
│   └── blueColorUtils.ts             # 蓝色系专用工具
├── types/                            # 类型定义
│   ├── color.ts                      # 颜色类型定义
│   ├── filter.ts                     # 筛选类型
│   ├── search.ts                     # 搜索类型
│   └── blueShades.ts                 # 蓝色系专用类型
├── constants/                        # 常量定义
│   ├── colorCategories.ts            # 颜色分类常量
│   ├── filterOptions.ts              # 筛选选项
│   ├── exportFormats.ts              # 导出格式
│   └── blueShadeCategories.ts        # 蓝色系分类常量
└── lib/                              # 第三方库配置
    ├── analytics.ts                  # 分析工具配置
    └── seo.ts                        # SEO工具配置
```

### 2. 核心类型定义

```typescript
// types/color.ts
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

// types/filter.ts
export interface FilterState {
  category?: string;
  hueRange: [number, number];
  saturationRange: [number, number];
  lightnessRange: [number, number];
  searchTerm: string;
  sortBy: SortOption;
  sortOrder: 'asc' | 'desc';
}

export type SortOption = 'name' | 'hue' | 'saturation' | 'lightness' | 'popularity';

// types/search.ts
export interface SearchResult {
  colors: ColorData[];
  totalCount: number;
  suggestions: string[];
  searchTime: number;
}

export interface SearchOptions {
  fuzzy: boolean;
  maxResults: number;
  includeCategories: boolean;
  includeTags: boolean;
}

// types/blueShades.ts
export interface BlueShadeCategory {
  id: string;
  name: string;
  displayName: string;
  description: string;
  hueRange: [number, number];
  saturationRange: [number, number];
  lightnessRange: [number, number];
  examples: string[];
  seoKeywords: string[];
}

export interface BlueColorData extends ColorData {
  blueCategory: BlueShadeCategory;
  popularity: number;
  designUsage: string[];
  psychologyEffect: string;
  complementaryColors: string[];
}

export interface BlueSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
}
```

### 3. 颜色分析工具实现

```typescript
// utils/colorAnalysis.ts
import { colord, Colord } from 'colord';

export class ColorAnalyzer {
  static categorizeColor(hex: string): ColorCategory {
    const color = colord(hex);
    const hsl = color.toHsl();
    
    // 处理无色彩（灰色）
    if (hsl.s < 10) {
      return this.getGrayCategory(hsl.l);
    }
    
    // 基于色相分类
    const hue = hsl.h;
    return this.getCategoryByHue(hue);
  }
  
  static calculateSimilarity(color1: string, color2: string): number {
    const c1 = colord(color1);
    const c2 = colord(color2);
    
    // 使用Delta E算法计算颜色差异
    const deltaE = c1.delta(c2);
    
    // 转换为相似度分数 (0-1)
    return Math.max(0, 1 - deltaE / 100);
  }
  
  static findSimilarColors(
    targetColor: string, 
    colors: ColorData[], 
    count: number = 10
  ): ColorData[] {
    return colors
      .map(color => ({
        ...color,
        similarity: this.calculateSimilarity(targetColor, color.hex)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, count);
  }
  
  static generateColorTags(name: string, hex: string): string[] {
    const color = colord(hex);
    const hsl = color.toHsl();
    const tags: string[] = [];
    
    // 基于名称生成标签
    tags.push(...this.extractNameTags(name));
    
    // 基于颜色属性生成标签
    tags.push(...this.generatePropertyTags(hsl));
    
    return [...new Set(tags)]; // 去重
  }
  
  private static getCategoryByHue(hue: number): ColorCategory {
    const categories = COLOR_CATEGORIES;
    
    for (const category of categories) {
      const [min, max] = category.hueRange;
      if (this.isHueInRange(hue, min, max)) {
        return category;
      }
    }
    
    return categories.find(c => c.id === 'other')!;
  }
  
  private static isHueInRange(hue: number, min: number, max: number): boolean {
    if (min <= max) {
      return hue >= min && hue <= max;
    } else {
      // 处理跨越0度的情况（如红色）
      return hue >= min || hue <= max;
    }
  }
}
```

### 4. 搜索算法实现

```typescript
// utils/colorSearch.ts
export class ColorSearchEngine {
  private fuse: Fuse<ColorData>;
  
  constructor(colors: ColorData[]) {
    this.fuse = new Fuse(colors, {
      keys: [
        { name: 'name', weight: 0.7 },
        { name: 'tags', weight: 0.3 },
        { name: 'category.name', weight: 0.2 }
      ],
      threshold: 0.3,
      includeScore: true,
      includeMatches: true
    });
  }
  
  search(query: string, options: SearchOptions = {}): SearchResult {
    const startTime = performance.now();
    
    if (!query.trim()) {
      return {
        colors: [],
        totalCount: 0,
        suggestions: [],
        searchTime: 0
      };
    }
    
    const results = this.fuse.search(query, {
      limit: options.maxResults || 100
    });
    
    const colors = results.map(result => result.item);
    const suggestions = this.generateSuggestions(query, colors);
    
    const searchTime = performance.now() - startTime;
    
    return {
      colors,
      totalCount: colors.length,
      suggestions,
      searchTime
    };
  }
  
  private generateSuggestions(query: string, results: ColorData[]): string[] {
    // 基于搜索结果生成建议
    const suggestions = new Set<string>();
    
    results.slice(0, 10).forEach(color => {
      // 添加相似的颜色名称
      if (color.name.toLowerCase().includes(query.toLowerCase())) {
        suggestions.add(color.name);
      }
      
      // 添加相关标签
      color.tags.forEach(tag => {
        if (tag.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(tag);
        }
      });
    });
    
    return Array.from(suggestions).slice(0, 5);
  }
}
```

### 5. 性能优化策略

```typescript
// hooks/useVirtualScroll.ts
export function useVirtualScroll<T>(
  items: T[],
  containerHeight: number,
  itemHeight: number,
  overscan: number = 5
) {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(items.length, startIndex + visibleCount + overscan * 2);
  
  const visibleItems = items.slice(startIndex, endIndex);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;
  
  return {
    visibleItems,
    totalHeight,
    offsetY,
    setScrollTop
  };
}

// hooks/useColorData.ts
export function useColorData() {
  const [colors, setColors] = useState<ColorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    loadColorData();
  }, []);
  
  const loadColorData = async () => {
    try {
      setLoading(true);
      
      // 从缓存中加载
      const cached = localStorage.getItem('processed-colors');
      if (cached) {
        const cachedData = JSON.parse(cached);
        if (Date.now() - cachedData.timestamp < 24 * 60 * 60 * 1000) {
          setColors(cachedData.colors);
          setLoading(false);
          return;
        }
      }
      
      // 加载原始数据
      const response = await import('@/type/colornames.json');
      const rawColors = response.default;
      
      // 处理数据
      const processedColors = await processColorData(rawColors);
      
      // 缓存处理后的数据
      localStorage.setItem('processed-colors', JSON.stringify({
        colors: processedColors,
        timestamp: Date.now()
      }));
      
      setColors(processedColors);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load colors');
    } finally {
      setLoading(false);
    }
  };
  
  return { colors, loading, error, reload: loadColorData };
}
```

### 6. 组件实现示例

```typescript
// components/ColorGrid/ColorCard.tsx
interface ColorCardProps {
  color: ColorData;
  onSelect?: (color: ColorData) => void;
  onCopy?: (color: ColorData, format: string) => void;
  size?: 'small' | 'medium' | 'large';
}

export function ColorCard({ color, onSelect, onCopy, size = 'medium' }: ColorCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async (format: string) => {
    const value = getColorValue(color, format);
    await navigator.clipboard.writeText(value);
    setCopied(true);
    onCopy?.(color, format);
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  const cardSizes = {
    small: 'w-32 h-24',
    medium: 'w-40 h-32',
    large: 'w-48 h-40'
  };
  
  return (
    <motion.div
      className={`${cardSizes[size]} bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect?.(color)}
    >
      {/* 颜色块 */}
      <div 
        className="h-2/3 w-full relative"
        style={{ backgroundColor: color.hex }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy('hex');
                }}
                className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs font-medium"
              >
                {copied ? '已复制!' : '复制'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* 信息区域 */}
      <div className="h-1/3 p-2 flex flex-col justify-center">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
          {color.name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
          {color.hex.toUpperCase()}
        </p>
      </div>
    </motion.div>
  );
}
```

### 7. 状态管理

```typescript
// hooks/useColorFilter.ts
export function useColorFilter(colors: ColorData[]) {
  const [filters, setFilters] = useState<FilterState>({
    category: undefined,
    hueRange: [0, 360],
    saturationRange: [0, 100],
    lightnessRange: [0, 100],
    searchTerm: '',
    sortBy: 'name',
    sortOrder: 'asc'
  });
  
  const filteredColors = useMemo(() => {
    let result = [...colors];
    
    // 应用分类筛选
    if (filters.category) {
      result = result.filter(color => color.category.id === filters.category);
    }
    
    // 应用范围筛选
    result = result.filter(color => {
      const hsl = color.hsl;
      return (
        hsl.h >= filters.hueRange[0] && hsl.h <= filters.hueRange[1] &&
        hsl.s >= filters.saturationRange[0] && hsl.s <= filters.saturationRange[1] &&
        hsl.l >= filters.lightnessRange[0] && hsl.l <= filters.lightnessRange[1]
      );
    });
    
    // 应用搜索筛选
    if (filters.searchTerm) {
      const searchEngine = new ColorSearchEngine(result);
      const searchResult = searchEngine.search(filters.searchTerm);
      result = searchResult.colors;
    }
    
    // 应用排序
    result.sort((a, b) => {
      const getValue = (color: ColorData) => {
        switch (filters.sortBy) {
          case 'name': return color.name;
          case 'hue': return color.hsl.h;
          case 'saturation': return color.hsl.s;
          case 'lightness': return color.hsl.l;
          case 'popularity': return color.popularity || 0;
          default: return color.name;
        }
      };
      
      const aValue = getValue(a);
      const bValue = getValue(b);
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return filters.sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return filters.sortOrder === 'asc' 
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    });
    
    return result;
  }, [colors, filters]);
  
  return {
    filters,
    setFilters,
    filteredColors,
    updateFilter: (key: keyof FilterState, value: any) => {
      setFilters(prev => ({ ...prev, [key]: value }));
    }
  };
}
```

### 8. API设计和数据流

```typescript
// API路由设计
/api/colors/
├── GET /api/colors                    # 获取所有颜色
├── GET /api/colors/search?q=blue      # 搜索颜色
├── GET /api/colors/category/blue      # 按分类获取
├── GET /api/colors/similar/:hex       # 获取相似颜色
├── POST /api/colors/export            # 导出颜色数据
└── GET /api/colors/stats              # 获取统计信息

// 数据流设计
1. 页面加载 → 检查缓存 → 加载原始数据 → 预处理 → 缓存 → 渲染
2. 用户搜索 → 防抖处理 → 搜索引擎 → 筛选结果 → 更新UI
3. 用户筛选 → 更新状态 → 重新计算 → 虚拟滚动 → 渲染可见项
4. 颜色复制 → 格式转换 → 写入剪贴板 → 显示反馈
```

### 9. 测试策略

```typescript
// 单元测试
describe('ColorAnalyzer', () => {
  test('should categorize blue colors correctly', () => {
    expect(ColorAnalyzer.categorizeColor('#0066cc').id).toBe('blue');
  });

  test('should calculate color similarity', () => {
    const similarity = ColorAnalyzer.calculateSimilarity('#ff0000', '#ff0011');
    expect(similarity).toBeGreaterThan(0.9);
  });
});

// 集成测试
describe('ColorSearch', () => {
  test('should return relevant results for color search', async () => {
    const results = await searchEngine.search('ocean blue');
    expect(results.colors.length).toBeGreaterThan(0);
    expect(results.colors[0].name.toLowerCase()).toContain('blue');
  });
});

// E2E测试
describe('Color Shades Page', () => {
  test('should load and display colors', async () => {
    await page.goto('/tools/color-shades');
    await expect(page.locator('[data-testid="color-card"]')).toHaveCount.greaterThan(10);
  });

  test('should filter colors by category', async () => {
    await page.click('[data-testid="category-blue"]');
    const cards = await page.locator('[data-testid="color-card"]').all();
    // 验证所有显示的颜色都是蓝色系
  });
});
```

### 10. 部署和监控

```typescript
// 性能监控
export function usePerformanceMonitoring() {
  useEffect(() => {
    // 监控页面加载时间
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          console.log('Page load time:', entry.duration);
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => observer.disconnect();
  }, []);
}

// 错误监控
export function useErrorTracking() {
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      // 发送错误信息到监控服务
      console.error('Color page error:', error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
}
```

---

**文档版本**：v1.0
**创建日期**：2025-01-24
**技术栈**：Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
**预计开发时间**：6-8个工作日
**团队规模**：1-2名开发者
