'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { ColorData } from '../types/color';
import { ColorSearchEngine, SearchResult, SearchOptions } from '../utils/colorSearch';

interface UseColorSearchReturn {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: SearchResult;
  isSearching: boolean;
  suggestions: string[];
  popularTerms: string[];
  clearSearch: () => void;
}

const DEFAULT_SEARCH_OPTIONS: SearchOptions = {
  fuzzy: true,
  maxResults: 100,
  includeCategories: true,
  includeTags: true,
};

export function useColorSearch(
  colors: ColorData[],
  options: Partial<SearchOptions> = {}
): UseColorSearchReturn {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult>({
    colors: [],
    totalCount: 0,
    suggestions: [],
    searchTime: 0,
  });

  // 创建搜索引擎实例
  const searchEngine = useMemo(() => {
    if (colors.length === 0) return null;
    return new ColorSearchEngine(colors);
  }, [colors]);

  // 获取热门搜索词
  const popularTerms = useMemo(() => {
    if (!searchEngine) return [];
    return searchEngine.getPopularSearchTerms();
  }, [searchEngine]);

  // 搜索函数 - 使用useCallback稳定函数引用
  const performSearch = useCallback((term: string) => {
    if (!searchEngine) {
      setSearchResults({
        colors: [],
        totalCount: 0,
        suggestions: [],
        searchTime: 0,
      });
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    try {
      const results = searchEngine.search(term, {
        ...DEFAULT_SEARCH_OPTIONS,
        ...options,
      });

      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults({
        colors: [],
        totalCount: 0,
        suggestions: [],
        searchTime: 0,
      });
    } finally {
      setIsSearching(false);
    }
  }, [searchEngine, options]);

  // 处理空搜索状态 - 只依赖searchTerm避免循环
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults({
        colors: [],
        totalCount: 0,
        suggestions: [],
        searchTime: 0,
      });
      setIsSearching(false);
    }
  }, [searchTerm]);

  // 执行搜索 - 只在有搜索词时执行
  useEffect(() => {
    if (searchTerm.trim()) {
      // 添加简单的延迟来模拟防抖效果
      const timeoutId = setTimeout(() => {
        performSearch(searchTerm);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [searchTerm, performSearch]);

  // 清除搜索
  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setSearchResults({
      colors: [],
      totalCount: 0,
      suggestions: [],
      searchTime: 0,
    });
    setIsSearching(false);
  }, []);

  // 获取搜索建议
  const suggestions = useMemo(() => {
    if (searchTerm.trim() && searchResults.suggestions.length > 0) {
      return searchResults.suggestions;
    }
    return popularTerms.slice(0, 5);
  }, [searchTerm, searchResults.suggestions, popularTerms]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    isSearching,
    suggestions,
    popularTerms,
    clearSearch,
  };
}
