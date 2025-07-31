'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏骨架 */}
        <div className="mb-8">
          <div className="h-16 bg-white/50 dark:bg-gray-800/50 rounded-xl animate-pulse"></div>
        </div>

        {/* Hero Section 骨架 */}
        <div className="text-center mb-12 mt-8">
          <div className="h-12 bg-gradient-to-r from-purple-200 to-violet-200 dark:from-purple-800 dark:to-violet-800 rounded-lg mb-4 animate-pulse"></div>
          <div className="space-y-2 mb-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mx-auto max-w-3xl animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mx-auto max-w-2xl animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mx-auto max-w-xl animate-pulse"></div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        {/* 搜索栏骨架 */}
        <div className="max-w-md mx-auto mb-6">
          <div className="h-12 bg-white dark:bg-gray-800 rounded-xl animate-pulse"></div>
        </div>

        {/* 分类标签骨架 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-24 bg-white dark:bg-gray-800 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* 颜色网格骨架 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {Array.from({ length: 48 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.02,
                ease: "easeOut"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm animate-pulse"
            >
              {/* 颜色块骨架 */}
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-700 dark:to-violet-700 rounded-lg mb-3"></div>
              
              {/* 颜色名称骨架 */}
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              
              {/* Hex代码骨架 */}
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            </motion.div>
          ))}
        </div>

        {/* 加载提示 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg">
            <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              Loading purple colors...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
