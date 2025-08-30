'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-orange-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12 mt-8">
          <div className="h-12 bg-gradient-to-r from-orange-200 to-red-200 dark:from-orange-800 dark:to-red-800 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-6 bg-orange-100 dark:bg-orange-900 rounded mb-2 animate-pulse"></div>
          <div className="h-6 bg-orange-100 dark:bg-orange-900 rounded mb-6 animate-pulse"></div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-4 w-24 bg-orange-100 dark:bg-orange-900 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-orange-100 dark:bg-orange-900 rounded animate-pulse"></div>
            <div className="h-4 w-28 bg-orange-100 dark:bg-orange-900 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="max-w-md mx-auto mb-6">
          <div className="h-12 bg-white dark:bg-gray-800 rounded-lg animate-pulse"></div>
        </div>

        {/* Category Buttons Skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 bg-white dark:bg-gray-800 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* Stats Skeleton */}
        <div className="text-center mb-6">
          <div className="h-5 w-48 bg-orange-100 dark:bg-orange-900 rounded mx-auto animate-pulse"></div>
        </div>

        {/* Color Grid Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
        >
          {/* Container Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 w-48 bg-orange-100 dark:bg-orange-900 rounded animate-pulse"></div>
            <div className="h-5 w-32 bg-orange-100 dark:bg-orange-900 rounded animate-pulse"></div>
          </div>

          {/* Color Grid Skeleton */}
          <div className="h-[600px] overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm animate-pulse"
                >
                  <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-800 dark:to-red-800 rounded-lg mb-3"></div>
                  <div className="h-4 bg-orange-100 dark:bg-orange-900 rounded mb-2"></div>
                  <div className="h-3 bg-orange-100 dark:bg-orange-900 rounded w-3/4"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="mt-4 pt-4 border-t border-white/20 dark:border-gray-700/20">
            <div className="flex items-center justify-between">
              <div className="h-4 w-32 bg-orange-100 dark:bg-orange-900 rounded animate-pulse"></div>
              <div className="h-4 w-40 bg-orange-100 dark:bg-orange-900 rounded animate-pulse"></div>
            </div>
          </div>
        </motion.div>

        {/* Loading Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <div className="flex items-center justify-center gap-3 text-orange-600 dark:text-orange-400">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-orange-600 dark:border-orange-400 border-t-transparent rounded-full"
            ></motion.div>
            <span className="text-lg font-medium">Loading shades of orange...</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Preparing your orange color palette
          </p>
        </motion.div>
      </div>
    </div>
  );
}
