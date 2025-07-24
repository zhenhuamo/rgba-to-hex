'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ColorData } from '../types/color';
import { ColorCard } from './ColorCard';

interface ColorGridProps {
  colors: ColorData[];
  onColorSelect?: (color: ColorData) => void;
  loading?: boolean;
  loadingMore?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
  gap?: number;
}

export function ColorGrid({
  colors,
  onColorSelect,
  loading = false,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
  gap = 4
}: ColorGridProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  
  // 无限滚动逻辑
  useEffect(() => {
    if (!sentinelRef.current || !onLoadMore || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loadingMore) {
          onLoadMore();
        }
      },
      {
        rootMargin: '200px', // 提前200px开始加载
        threshold: 0.1,
      }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [onLoadMore, hasMore, loadingMore]);

  // 使用CSS类而不是内联样式避免水合问题
  const gridClassName = `grid gap-${gap} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`;

  // 加载骨架
  if (loading) {
    return (
      <div className={`${gridClassName} w-full`}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  // 空状态
  if (!colors.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" 
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No colors found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Try adjusting your search criteria or filters
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <motion.div
        className={`${gridClassName} w-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {colors.map((color, index) => (
          <motion.div
            key={color.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.02,
              ease: "easeOut"
            }}
          >
            <ColorCard
              color={color}
              onSelect={onColorSelect}
              size="medium"
              showNameBelow={true}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 加载更多指示器 */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          {loadingMore ? (
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span>Loading more colors...</span>
            </div>
          ) : (
            <button
              onClick={onLoadMore}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
            >
              Load More
            </button>
          )}
        </div>
      )}

      {/* 无限滚动哨兵元素 */}
      {hasMore && <div ref={sentinelRef} className="h-4" />}

      {/* 没有更多数据的提示 */}
      {!hasMore && colors.length > 0 && (
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            All colors displayed
          </div>
        </div>
      )}
    </div>
  );
}
