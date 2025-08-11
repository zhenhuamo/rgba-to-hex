'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { ColorData } from '../types/color';
import { filterYellowColors } from '../utils/yellowColorUtils';

interface UseYellowColorDataReturn {
  colors: ColorData[];
  displayedColors: ColorData[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  totalCount: number;
  hasMore: boolean;
  currentPage: number;
  reload: () => Promise<void>;
  loadMore: () => void;
  resetPagination: () => void;
}

const CACHE_KEY = 'yellow-colors-processed';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24小时
const ITEMS_PER_PAGE = 50; // 每页显示的颜色数量

export function useYellowColorData(): UseYellowColorDataReturn {
  const [allColors, setAllColors] = useState<ColorData[]>([]);
  const [displayedColors, setDisplayedColors] = useState<ColorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadYellowColors = async () => {
    try {
      setLoading(true);
      setError(null);

      // 尝试从缓存加载
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const cachedData = JSON.parse(cached);
          if (Date.now() - cachedData.timestamp < CACHE_DURATION) {
            setAllColors(cachedData.colors);
            setDisplayedColors(cachedData.colors.slice(0, ITEMS_PER_PAGE));
            setHasMore(cachedData.colors.length > ITEMS_PER_PAGE);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.warn('Failed to parse cached yellow colors:', e);
          localStorage.removeItem(CACHE_KEY);
        }
      }

      // 直接导入颜色数据
      const colorModule = await import('@/type/colornames.json');
      const rawColors = colorModule.default;

      if (!Array.isArray(rawColors)) {
        throw new Error('Invalid color data format');
      }

      // 处理黄色数据
      const processedColors = await processYellowColorsInBatches(rawColors);

      // 缓存处理后的数据
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          colors: processedColors,
          timestamp: Date.now()
        }));
      } catch (e) {
        console.warn('Failed to cache yellow colors:', e);
      }

      setAllColors(processedColors);
      setDisplayedColors(processedColors.slice(0, ITEMS_PER_PAGE));
      setHasMore(processedColors.length > ITEMS_PER_PAGE);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load yellow colors';
      setError(errorMessage);
      console.error('Error loading yellow colors:', err);
    } finally {
      setLoading(false);
    }
  };

  // 分批处理颜色数据以避免阻塞UI
  const processYellowColorsInBatches = async (
    rawColors: { name: string; hex: string }[]
  ): Promise<ColorData[]> => {
    const batchSize = 100;
    const allYellowColors: ColorData[] = [];

    for (let i = 0; i < rawColors.length; i += batchSize) {
      const batch = rawColors.slice(i, i + batchSize);
      const batchYellowColors = filterYellowColors(batch);
      allYellowColors.push(...batchYellowColors);

      // 让出控制权给浏览器
      if (i + batchSize < rawColors.length) {
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    }

    // 按流行度和名称排序
    return allYellowColors.sort((a, b) => {
      if (a.popularity !== b.popularity) {
        return (b.popularity || 0) - (a.popularity || 0);
      }
      return a.name.localeCompare(b.name);
    });
  };

  // 加载更多颜色
  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);

    // 模拟异步加载（实际上是从已有数据中分页）
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newColors = allColors.slice(startIndex, endIndex);

      if (newColors.length > 0) {
        setDisplayedColors(prev => [...prev, ...newColors]);
        setCurrentPage(nextPage);
        setHasMore(endIndex < allColors.length);
      } else {
        setHasMore(false);
      }

      setLoadingMore(false);
    }, 300); // 模拟网络延迟
  }, [allColors, currentPage, hasMore, loadingMore]);

  // 重置分页（搜索/筛选时使用）
  const resetPagination = useCallback(() => {
    setCurrentPage(1);
    setDisplayedColors(allColors.slice(0, ITEMS_PER_PAGE));
    setHasMore(allColors.length > ITEMS_PER_PAGE);
  }, [allColors]);

  useEffect(() => {
    loadYellowColors();
  }, []); // 移除依赖，只在组件挂载时执行一次

  // 当allColors变化时重置分页
  useEffect(() => {
    if (allColors.length > 0) {
      resetPagination();
    }
  }, [allColors, resetPagination]);

  const totalCount = useMemo(() => allColors.length, [allColors]);

  return {
    colors: allColors,
    displayedColors,
    loading,
    loadingMore,
    error,
    totalCount,
    hasMore,
    currentPage,
    reload: loadYellowColors,
    loadMore,
    resetPagination,
  };
}
