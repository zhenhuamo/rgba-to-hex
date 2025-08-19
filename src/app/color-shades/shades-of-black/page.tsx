'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ColorGrid } from '../components/ColorGrid';
import { SearchBar } from '../components/SearchBar';
import { useBlackColorData } from '../hooks/useBlackColorData';
import { useColorSearch } from '../hooks/useColorSearch';
import { useFilteredColors } from '../hooks/useFilteredColors';
import { ColorData } from '../types/color';
import { BLACK_SHADE_CATEGORIES } from '../constants/blackShadeCategories';

export default function ShadesOfBlackPage() {
  const {
    colors,
    loading,
    error,
    totalCount
  } = useBlackColorData();
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black">
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
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black mb-4">
            Shades of Black: Complete Black Color Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 2000+ different shades of black with hex codes and color names. Our comprehensive black color palette
            features all types of black colors - from pure black tones to charcoal shades. Each black color includes
            hex codes, RGB values, and specific black color names for designers and developers.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              {totalCount} Black Shades
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
              placeholder="Search black colors..."
            />
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              All Blacks ({totalCount})
            </button>
            {BLACK_SHADE_CATEGORIES.map((category) => {
              const categoryCount = colors.filter(color => color.category.id === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
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
              Showing {displayedFilteredColors.length} / {totalFilteredCount} black shades
              {searchTerm && ` containing "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${BLACK_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
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
          className="bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
        >
          {/* 容器标题 */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Black Color Collection
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
          <div className="mt-4 pt-4 border-t border-white/20 dark:border-gray-700/20">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>
                {searchTerm ? `Search: "${searchTerm}"` : 'All black colors'}
                {selectedCategory !== 'all' && ` in ${BLACK_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
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
            {/* 关于黑色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Different Types of Black Colors
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Black is the most powerful color in design, representing elegance, sophistication, and authority.
                Our collection features over 2000 different shades of black, each with unique characteristics and applications.
                From pure black tones to charcoal shades, discover the perfect black color for your project with precise black color codes.
              </p>
            </div>

            {/* 黑色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Pure Black Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep, true black colors that represent the ultimate in sophistication and elegance.
                  Includes jet black, ebony, and pure black tones.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Charcoal Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rich charcoal black shades that blend darkness with subtle gray undertones.
                  Features gunmetal, anthracite, and dark charcoal variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dark Gray Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sophisticated dark gray colors that maintain the essence of black with added versatility.
                  Includes slate gray, dim gray, and dark gray variations.
                </p>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Black Hex Codes and Color Codes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Each black color in our palette comes with accurate hex codes and black color codes for easy implementation.
                Simply click any black shade to copy its hex code instantly. Our black color palette is perfect for
                web design, graphic design, and any project requiring specific black colors with precise black colour codes.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
