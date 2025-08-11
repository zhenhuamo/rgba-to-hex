'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ColorGrid } from '../components/ColorGrid';
import { SearchBar } from '../components/SearchBar';
import { useYellowColorData } from '../hooks/useYellowColorData';
import { useColorSearch } from '../hooks/useColorSearch';
import { useFilteredColors } from '../hooks/useFilteredColors';
import { ColorData } from '../types/color';
import { YELLOW_SHADE_CATEGORIES } from '../constants/yellowShadeCategories';

export default function ShadesOfYellowPage() {
  const {
    colors,
    loading,
    error,
    totalCount
  } = useYellowColorData();
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-900 dark:to-yellow-900">
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
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-600 mb-4">
            Shades of Yellow: Complete Shades of Yellow Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 2000+ different shades of yellow with hex codes and color names. Our comprehensive color shades palette
            features all types of shades of yellow color shades - from light shades of yellow to dark color shades. Each shades of yellow color includes
            hex codes, RGB values, and specific color shades names for designers and developers.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              {totalCount} Color Shades
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
              placeholder="Search yellow colors..."
            />
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-gray-700'
              }`}
            >
              All Yellows ({totalCount})
            </button>
            {YELLOW_SHADE_CATEGORIES.map((category) => {
              const categoryCount = colors.filter(color => color.category.id === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-gray-700'
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
              Showing {displayedFilteredColors.length} / {totalFilteredCount} color shades
              {searchTerm && ` containing "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${YELLOW_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
            </p>
          </motion.div>
        )}

        {/* 错误状态 */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                Loading Failed
              </h3>
              <p className="text-yellow-600 dark:text-yellow-300 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
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
              Color Shades Collection
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {displayedFilteredColors.length} / {totalFilteredCount} color shades
            </span>
          </div>

          {/* 固定高度的颜色网格容器 */}
          <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-300 dark:scrollbar-thumb-yellow-600 scrollbar-track-transparent">
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
                {searchTerm ? `Search: "${searchTerm}"` : 'All color shades'}
                {selectedCategory !== 'all' && ` in ${YELLOW_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
              </span>
              {hasMoreFiltered && (
                <span className="text-yellow-600 dark:text-yellow-400">
                  Scroll down for more color shades
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
            {/* 关于黄色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Different Types of Shades of Yellow
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Shades of yellow represent sunshine, happiness, and optimism, making these color shades one of the most cheerful colors in design.
                Our color shades collection features over 2000 different shades of yellow, each with unique characteristics and applications.
                From soft light color shades to rich golden color shades, discover the perfect shades of yellow for your project with
                accurate color shades hex codes and color shades combinations.
              </p>
            </div>

            {/* 黄色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Light Shades of Yellow
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soft, gentle color shades perfect for delicate and cheerful designs.
                  Light color shades include cream yellow, pale color shades, and ivory tones.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Golden Shades of Yellow
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rich, luxurious color shades ideal for premium and elegant designs.
                  Golden color shades feature gold yellow, metallic color shades, and rich golden variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Lemon Shades of Yellow
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fresh, vibrant color shades that evoke energy and freshness.
                  Lemon color shades include citrus yellow, bright color shades, and lemon variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Cream Shades of Yellow
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Warm color shades with neutral undertones, perfect for elegant designs.
                  Cream color shades feature vanilla yellow, champagne, and beige color shades variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dark Shades of Yellow
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep color shades with rich, sophisticated appeal for premium designs.
                  Dark color shades include mustard yellow, amber color shades, and bronze variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Color Shades Combinations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore color shades palettes and gradients for stunning design combinations.
                  Perfect for creating color shades schemes and harmonious color shades palettes.
                </p>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Shades of Yellow Hex Codes and Color Codes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Each color shades in our palette comes with accurate hex codes and color codes for easy implementation.
                Simply click any color shades to copy its hex code instantly. Our color shades palette is perfect for
                web design, graphic design, and any project requiring specific color shades with precise color codes.
                From softer color shades to vibrant color shades, find all color shades variations with RGB values.
              </p>
            </div>

            {/* 黄色心理学和应用 */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Shades of Yellow Color Psychology
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Color shades are associated with happiness, optimism, and creativity, making these color shades a powerful element in design.
                  Different color shades evoke various psychological responses:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Light Color Shades:</strong> Cheerfulness, gentleness, optimism</li>
                  <li>• <strong>Golden Color Shades:</strong> Luxury, prosperity, confidence</li>
                  <li>• <strong>Lemon Color Shades:</strong> Energy, freshness, vitality</li>
                  <li>• <strong>Cream Color Shades:</strong> Warmth, comfort, elegance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Shades of Yellow in Design Applications
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Color shades are versatile and can be used across various design contexts:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Branding:</strong> Create cheerful and optimistic brand identities with color shades</li>
                  <li>• <strong>Web Design:</strong> Highlight important elements and create warmth using color shades</li>
                  <li>• <strong>UI/UX:</strong> Draw attention and create positive user experiences with color shades</li>
                  <li>• <strong>Interior Design:</strong> Brighten spaces and create welcoming environments using color shades</li>
                </ul>
              </div>
            </div>

            {/* 黄色渐变和组合 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Shades of Yellow Gradients and CSS Applications
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Create stunning color shades gradients by combining different color shades from our comprehensive palette.
                Our color shades collection includes all color shades from the lightest cream color shades to the deepest golden color shades,
                making it easy to create beautiful color shades combinations and gradients for your design projects.
                Perfect for CSS color shades gradients, soft color shades fonts, and yellow gold gradient effects.
                Explore types of color shades and discover the perfect color shades scheme for your needs.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
