'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { ColorData } from '../types/color';
import { SearchResult } from '../utils/colorSearch';

const ITEMS_PER_PAGE = 50;

interface UseFilteredColorsProps {
  allColors: ColorData[];
  searchResults: SearchResult;
  searchTerm: string;
  selectedCategory: string;
}

interface UseFilteredColorsReturn {
  filteredColors: ColorData[];
  displayedFilteredColors: ColorData[];
  totalFilteredCount: number;
  hasMore: boolean;
  loadingMore: boolean;
  loadMore: () => void;
  resetPagination: () => void;
}

export function useFilteredColors({
  allColors,
  searchResults,
  searchTerm,
  selectedCategory,
}: UseFilteredColorsProps): UseFilteredColorsReturn {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  // 计算筛选后的颜色
  const filteredColors = useMemo(() => {
    // 如果有搜索词，使用搜索结果
    if (searchTerm.trim()) {
      let searchFiltered = searchResults.colors;

      // 在搜索结果中应用分类筛选
      if (selectedCategory !== 'all') {
        searchFiltered = searchFiltered.filter(color => color.category.id === selectedCategory);
      }

      return searchFiltered;
    }

    // 没有搜索词时，只按分类筛选
    let filtered = allColors;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(color => color.category.id === selectedCategory);
    }

    return filtered;
  }, [allColors, selectedCategory, searchTerm, searchResults.colors]);

  // 当前显示的颜色（分页后的）
  const displayedFilteredColors = useMemo(() => {
    return filteredColors.slice(0, currentPage * ITEMS_PER_PAGE);
  }, [filteredColors, currentPage]);

  const hasMore = useMemo(() => {
    return displayedFilteredColors.length < filteredColors.length;
  }, [displayedFilteredColors.length, filteredColors.length]);

  // 加载更多
  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    
    // 模拟异步加载
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setLoadingMore(false);
    }, 300);
  }, [loadingMore, hasMore]);

  // 重置分页
  const resetPagination = useCallback(() => {
    setCurrentPage(1);
  }, []);

  // 当筛选条件变化时重置分页
  useEffect(() => {
    resetPagination();
  }, [searchTerm, selectedCategory, resetPagination]);

  return {
    filteredColors,
    displayedFilteredColors,
    totalFilteredCount: filteredColors.length,
    hasMore,
    loadingMore,
    loadMore,
    resetPagination,
  };
}
