import { ColorData } from '../types/color';

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

export class ColorSearchEngine {
  private colors: ColorData[];
  private searchIndex: Map<string, ColorData[]>;

  constructor(colors: ColorData[]) {
    this.colors = colors;
    this.searchIndex = this.buildSearchIndex(colors);
  }

  // 构建搜索索引
  private buildSearchIndex(colors: ColorData[]): Map<string, ColorData[]> {
    const index = new Map<string, ColorData[]>();

    colors.forEach(color => {
      // 索引颜色名称
      const nameTokens = this.tokenize(color.name);
      nameTokens.forEach(token => {
        this.addToIndex(index, token, color);
      });

      // 索引HEX值
      const hexToken = color.hex.toLowerCase().replace('#', '');
      this.addToIndex(index, hexToken, color);

      // 索引标签
      color.tags.forEach(tag => {
        const tagTokens = this.tokenize(tag);
        tagTokens.forEach(token => {
          this.addToIndex(index, token, color);
        });
      });

      // 索引分类名称
      const categoryTokens = this.tokenize(color.category.displayName);
      categoryTokens.forEach(token => {
        this.addToIndex(index, token, color);
      });
    });

    return index;
  }

  private addToIndex(index: Map<string, ColorData[]>, token: string, color: ColorData) {
    if (!index.has(token)) {
      index.set(token, []);
    }
    index.get(token)!.push(color);
  }

  private tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 0);
  }

  // 主搜索方法
  search(query: string, options: SearchOptions = {
    fuzzy: true,
    maxResults: 100,
    includeCategories: true,
    includeTags: true
  }): SearchResult {
    const startTime = performance.now();

    if (!query.trim()) {
      return {
        colors: [],
        totalCount: 0,
        suggestions: [],
        searchTime: 0
      };
    }

    const queryTokens = this.tokenize(query);
    const results = new Map<string, { color: ColorData; score: number }>();

    // 搜索每个查询词
    queryTokens.forEach(token => {
      // 精确匹配
      const exactMatches = this.searchExact(token);
      exactMatches.forEach(color => {
        const key = color.id;
        const existing = results.get(key);
        const score = existing ? existing.score + 10 : 10;
        results.set(key, { color, score });
      });

      // 模糊匹配
      if (options.fuzzy) {
        const fuzzyMatches = this.searchFuzzy(token);
        fuzzyMatches.forEach(({ color, similarity }) => {
          const key = color.id;
          const existing = results.get(key);
          const score = existing ? existing.score + (similarity * 5) : (similarity * 5);
          results.set(key, { color, score });
        });
      }
    });

    // 排序结果
    const sortedResults = Array.from(results.values())
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // 相同分数时，按流行度排序
        return (b.color.popularity || 0) - (a.color.popularity || 0);
      })
      .slice(0, options.maxResults)
      .map(result => result.color);

    const suggestions = this.generateSuggestions(query, sortedResults);
    const searchTime = performance.now() - startTime;

    return {
      colors: sortedResults,
      totalCount: sortedResults.length,
      suggestions,
      searchTime
    };
  }

  // 精确搜索
  private searchExact(token: string): ColorData[] {
    const results: ColorData[] = [];
    
    // 查找以token开头的索引项
    for (const [indexToken, colors] of this.searchIndex.entries()) {
      if (indexToken.startsWith(token)) {
        results.push(...colors);
      }
    }

    return [...new Set(results)]; // 去重
  }

  // 模糊搜索
  private searchFuzzy(token: string): Array<{ color: ColorData; similarity: number }> {
    const results: Array<{ color: ColorData; similarity: number }> = [];
    const minSimilarity = 0.6;

    for (const [indexToken, colors] of this.searchIndex.entries()) {
      const similarity = this.calculateSimilarity(token, indexToken);
      if (similarity >= minSimilarity) {
        colors.forEach(color => {
          results.push({ color, similarity });
        });
      }
    }

    return results;
  }

  // 计算字符串相似度（简化版Levenshtein距离）
  private calculateSimilarity(str1: string, str2: string): number {
    const len1 = str1.length;
    const len2 = str2.length;

    if (len1 === 0) return len2 === 0 ? 1 : 0;
    if (len2 === 0) return 0;

    const matrix: number[][] = [];

    // 初始化矩阵
    for (let i = 0; i <= len1; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
      matrix[0][j] = j;
    }

    // 填充矩阵
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // 删除
          matrix[i][j - 1] + 1,      // 插入
          matrix[i - 1][j - 1] + cost // 替换
        );
      }
    }

    const distance = matrix[len1][len2];
    const maxLen = Math.max(len1, len2);
    return 1 - distance / maxLen;
  }

  // 生成搜索建议
  private generateSuggestions(query: string, results: ColorData[]): string[] {
    const suggestions = new Set<string>();
    const queryLower = query.toLowerCase();

    // 从结果中提取建议
    results.slice(0, 10).forEach(color => {
      // 添加颜色名称
      if (color.name.toLowerCase().includes(queryLower)) {
        suggestions.add(color.name);
      }

      // 添加相关标签
      color.tags.forEach(tag => {
        if (tag.toLowerCase().includes(queryLower) && tag.length > 2) {
          suggestions.add(tag);
        }
      });

      // 添加分类名称
      if (color.category.displayName.toLowerCase().includes(queryLower)) {
        suggestions.add(color.category.displayName);
      }
    });

    return Array.from(suggestions).slice(0, 5);
  }

  // 获取热门搜索词
  getPopularSearchTerms(): string[] {
    const termCounts = new Map<string, number>();

    this.colors.forEach(color => {
      // 统计常见词汇
      const tokens = this.tokenize(color.name);
      tokens.forEach(token => {
        if (token.length > 2) {
          termCounts.set(token, (termCounts.get(token) || 0) + 1);
        }
      });
    });

    return Array.from(termCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([term]) => term);
  }

  // 更新搜索索引
  updateIndex(colors: ColorData[]) {
    this.colors = colors;
    this.searchIndex = this.buildSearchIndex(colors);
  }
}
