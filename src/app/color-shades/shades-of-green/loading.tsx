'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12 mt-8">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 max-w-2xl mx-auto animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2 max-w-3xl mx-auto animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-6 max-w-2xl mx-auto animate-pulse"></div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="max-w-md mx-auto mb-6">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>

        {/* Category Buttons Skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* 颜色网格骨架 - 固定容器 */}
        <div className="bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
          {/* 容器标题骨架 */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 w-48 bg-white/50 dark:bg-gray-700/50 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-white/50 dark:bg-gray-700/50 rounded animate-pulse"></div>
          </div>

          {/* 固定高度的颜色网格容器 */}
          <div className="h-[600px] overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                  className="aspect-square bg-white/50 dark:bg-gray-800/50 rounded-xl animate-pulse max-h-[120px]"
                >
                  <div className="w-full h-3/4 bg-green-200/50 dark:bg-green-800/50 rounded-t-xl animate-pulse"></div>
                  <div className="p-2 space-y-1">
                    <div className="h-3 bg-gray-300/50 dark:bg-gray-600/50 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-300/50 dark:bg-gray-600/50 rounded w-3/4 animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 底部加载提示 */}
          <div className="mt-4 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-600 dark:text-gray-300 text-sm">Loading green color palette...</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
