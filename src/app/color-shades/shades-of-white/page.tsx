'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ColorGrid } from '../components/ColorGrid';
import { SearchBar } from '../components/SearchBar';
import { useWhiteColorData } from '../hooks/useWhiteColorData';
import { useColorSearch } from '../hooks/useColorSearch';
import { useFilteredColors } from '../hooks/useFilteredColors';
import { ColorData } from '../types/color';
import { WHITE_SHADE_CATEGORIES } from '../constants/whiteShadeCategories';

export default function ShadesOfWhitePage() {
  const {
    colors,
    loading,
    error,
    totalCount
  } = useWhiteColorData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 搜索功能
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    isSearching,
    suggestions,
    clearSearch,
  } = useColorSearch(colors);

  // 筛选和分页功能
  const {
    displayedFilteredColors,
    totalFilteredCount,
    hasMore: hasMoreFiltered,
    loadingMore: loadingMoreFiltered,
    loadMore: loadMoreFiltered,
  } = useFilteredColors({
    allColors: colors,
    searchResults,
    searchTerm,
    selectedCategory,
  });

  const handleColorSelect = (color: ColorData) => {
    // 这里可以添加更多交互，比如显示详情弹窗
    console.log('Selected color:', color);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏 */}
        <Navigation />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-8"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-900 mb-4">
            Shades of White: Complete White Color Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 1000+ different shades of white with hex codes and color names. Our comprehensive white color palette
            features all types of white colors - from pure white shades to cream and ivory tones. Each white shade includes
            hex codes, RGB values, and specific white color names for designers and developers.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white border border-gray-300 rounded-full"></div>
              {totalCount} White Shades
            </span>
            <span>•</span>
            <span>Instant Copy</span>
            <span>•</span>
            <span>Multiple Formats</span>
          </div>
        </motion.div>

        {/* 搜索和筛选 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* 搜索栏 */}
          <div className="max-w-md mx-auto mb-6">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              onClear={clearSearch}
              suggestions={suggestions}
              isSearching={isSearching}
              placeholder="Search white colors..."
            />
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              All Whites ({totalCount})
            </button>
            {WHITE_SHADE_CATEGORIES.map((category) => {
              const categoryCount = colors.filter(color => color.category.id === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gray-800 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {category.displayName} ({categoryCount})
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 结果统计 */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-6"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Showing {displayedFilteredColors.length} / {totalFilteredCount} white shades
              {searchTerm && ` containing "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${WHITE_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
            </p>
          </motion.div>
        )}

        {/* 错误状态 */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-medium text-red-800 dark:text-red-200 mb-2">
                Loading Failed
              </h3>
              <p className="text-red-600 dark:text-red-300 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Reload
              </button>
            </div>
          </div>
        )}

        {/* 颜色网格 - 固定容器 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
        >
          {/* 容器标题 */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              White Color Collection
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {displayedFilteredColors.length} / {totalFilteredCount} colors
            </span>
          </div>

          {/* 固定高度的颜色网格容器 */}
          <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <ColorGrid
              colors={displayedFilteredColors}
              onColorSelect={handleColorSelect}
              loading={loading}
              loadingMore={loadingMoreFiltered}
              hasMore={hasMoreFiltered}
              onLoadMore={loadMoreFiltered}
            />
          </div>

          {/* 底部状态栏 */}
          <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>
                {searchTerm ? `Search: "${searchTerm}"` : 'All white colors'}
                {selectedCategory !== 'all' && ` in ${WHITE_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
              </span>
              {hasMoreFiltered && (
                <span className="text-gray-800 dark:text-gray-200">
                  Scroll down for more colors
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* SEO内容部分 */}
        {!loading && displayedFilteredColors.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700"
          >
            {/* 关于白色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Different Types of White Colors
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                White is the most versatile color in design, representing purity, cleanliness, and simplicity.
                Our collection features over 1000 different shades of white, each with unique characteristics and applications.
                From pure white shades to cream and ivory tones, discover the perfect white color for your project with precise white color codes.
                These white shades include everything from bright white colors to subtle off-white variations.
              </p>
            </div>

            {/* 白色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Pure White Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Clean, bright white colors that represent absolute purity and clarity.
                  Includes snow white, ghost white, and pure white tones perfect for minimalist design.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Cream White Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Warm cream white shades with subtle yellow undertones that create cozy, inviting spaces.
                  Features vanilla, beige, and linen white color variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ivory White Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Elegant ivory white colors with sophisticated warm undertones.
                  Includes antique white, old lace, and floral white shade variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Warm White Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  White shades with warm undertones of yellow, orange, or pink that create welcoming environments.
                  Perfect for traditional and cozy interior design projects.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Cool White Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Modern white colors with cool undertones of blue, green, or purple.
                  Features alice blue, azure, and mint cream for contemporary design.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Off White Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Subtle off-white shades that maintain brightness while adding sophistication.
                  Includes smoke, misty rose, and lavender blush variations.
                </p>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                White Hex Codes and Color Codes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Each white color in our palette comes with accurate hex codes and white color codes for easy implementation.
                Simply click any white shade to copy its hex code instantly. Our white color palette is perfect for
                web design, graphic design, and any project requiring specific white colors with precise white colour codes.
                Whether you need shades of white paint for interior design or white color shades for digital projects,
                our comprehensive collection of white colors provides the perfect shade of white for every application.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
