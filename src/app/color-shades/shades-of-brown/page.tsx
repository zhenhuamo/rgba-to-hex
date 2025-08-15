'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ColorGrid } from '../components/ColorGrid';
import { SearchBar } from '../components/SearchBar';
import { useBrownColorData } from '../hooks/useBrownColorData';
import { useColorSearch } from '../hooks/useColorSearch';
import { useFilteredColors } from '../hooks/useFilteredColors';
import { ColorData } from '../types/color';
import { BROWN_SHADE_CATEGORIES } from '../constants/brownShadeCategories';

export default function ShadesOfBrownPage() {
  const {
    colors,
    loading,
    error,
    totalCount
  } = useBrownColorData();
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-amber-900">
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
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 mb-4">
            Shades of Brown: Complete Brown Color Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 3000+ different shades of brown with hex codes and color names. Our comprehensive shades of brown collection
            features all types of brown colors - from light brown tones to dark brown shades. Each shade of brown includes
            hex codes, RGB values, and specific brown color names. Explore the most complete shades of brown palette for designers and developers.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              {totalCount} Shades of Brown
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
              placeholder="Search brown colors..."
            />
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700'
              }`}
            >
              All Browns ({totalCount})
            </button>
            {BROWN_SHADE_CATEGORIES.map((category) => {
              const categoryCount = colors.filter(color => color.category.id === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700'
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
              Showing {displayedFilteredColors.length} / {totalFilteredCount} shades of brown
              {searchTerm && ` containing "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${BROWN_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
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
              Shades of Brown Color Collection
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {displayedFilteredColors.length} / {totalFilteredCount} shades of brown
            </span>
          </div>

          {/* 固定高度的颜色网格容器 */}
          <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-300 dark:scrollbar-thumb-amber-600 scrollbar-track-transparent">
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
                {searchTerm ? `Search: "${searchTerm}"` : 'All shades of brown'}
                {selectedCategory !== 'all' && ` in ${BROWN_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
              </span>
              {hasMoreFiltered && (
                <span className="text-amber-600 dark:text-amber-400">
                  Scroll down for more shades of brown
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
            {/* 关于棕色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Different Types of Brown Colors
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Brown is one of the most versatile and natural colors in design, representing warmth, stability, and earthiness.
                Our collection features over 3000 different shades of brown, each with unique characteristics and applications.
                From warm light brown tones to rich dark brown shades, discover the perfect shades of brown for your project.
                Shades of brown are essential for creating natural, comfortable, and sophisticated designs. These beautiful shades of brown
                offer endless possibilities for designers seeking authentic and earthy color palettes.
              </p>
            </div>

            {/* 棕色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Light Shades of Brown
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soft, warm light shades of brown perfect for natural and cozy designs.
                  These gentle shades of brown include tan, beige, wheat, and burlywood tones that create comfortable atmospheres.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dark Shades of Brown
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rich, sophisticated dark shades of brown ideal for elegant and premium designs.
                  These luxurious shades of brown feature deep brown, maroon, sienna, and umber tones for luxury applications.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Chocolate Brown Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Indulgent chocolate-inspired brown colors that evoke warmth and comfort.
                  Includes chocolate, cocoa, and milk chocolate variations perfect for food brands.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Coffee Brown Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Energizing coffee-inspired brown shades that convey sophistication.
                  Features espresso, mocha, and cappuccino tones ideal for modern designs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Wood Brown Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Natural wood-inspired brown colors that bring organic warmth.
                  Includes oak, mahogany, walnut, and cedar tones for rustic designs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Brown Color Variations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Unique brown color variations including bronze, copper, rust, and earth tones.
                  Perfect for creating distinctive and memorable brand identities.
                </p>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Shades of Brown Hex Codes and Color Codes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Each shade of brown in our palette comes with accurate hex codes and color codes for easy implementation.
                Simply click any shades of brown to copy its hex code instantly. Our comprehensive shades of brown palette is perfect for
                web design, graphic design, and any project requiring specific shades of brown with precise color codes.
                Whether you need shades of brown names, brown colour codes, or shades of brown hex codes, our collection has everything.
              </p>
            </div>

            {/* 棕色应用场景 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-amber-900/20 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Shades of Brown Color Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Design & Branding
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Natural and organic brands</li>
                    <li>• Coffee shops and cafes</li>
                    <li>• Luxury and premium products</li>
                    <li>• Rustic and traditional designs</li>
                    <li>• Food and beverage industry</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Interior & Fashion
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Warm and cozy interiors</li>
                    <li>• Furniture and wood finishes</li>
                    <li>• Autumn fashion collections</li>
                    <li>• Earth-tone color schemes</li>
                    <li>• Natural material aesthetics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 关键词密度优化 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Complete Shades of Brown Collection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Our comprehensive shades of brown collection includes every type of brown color you need. From light shades of brown
                to dark brown color, chocolate shades of brown to coffee brown, and wood shades of brown to earth brown - explore all
                shades of brown with their exact brown color codes. Each shade of brown comes with detailed brown color names and
                brown hex codes for professional use. Whether you're looking for specific shades of brown, brown colour codes,
                or brown color shades, our shades of brown palette provides the complete range of brown tones and brown variations
                for your design projects. These beautiful shades of brown are perfect for any creative project requiring authentic brown colors.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
