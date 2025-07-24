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

  // 搜索函数
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

  // 防抖搜索
  const debouncedSearch = useCallback(
    debounce(performSearch, 300),
    [performSearch]
  );

  // 执行搜索
  useEffect(() => {
    if (searchTerm.trim()) {
      debouncedSearch(searchTerm);
    } else {
      setSearchResults({
        colors: [],
        totalCount: 0,
        suggestions: [],
        searchTime: 0,
      });
      setIsSearching(false);
    }
  }, [searchTerm, debouncedSearch]);

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

// 防抖函数
function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
