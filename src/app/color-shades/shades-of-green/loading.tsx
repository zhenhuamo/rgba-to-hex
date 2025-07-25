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

        {/* Loading Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12"
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-200 dark:border-green-800 rounded-full animate-spin border-t-green-600 dark:border-t-green-400"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-green-400"></div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-600 dark:text-gray-300 font-medium"
          >
            Loading green color palette...
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Discovering thousands of green shades
          </motion.p>
        </motion.div>

        {/* Color Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-8">
          {Array.from({ length: 32 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
