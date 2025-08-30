'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ColorGrid } from '../components/ColorGrid';
import { SearchBar } from '../components/SearchBar';
import { useOrangeColorData } from '../hooks/useOrangeColorData';
import { useColorSearch } from '../hooks/useColorSearch';
import { useFilteredColors } from '../hooks/useFilteredColors';
import { ColorData } from '../types/color';
import { ORANGE_SHADE_CATEGORIES } from '../constants/orangeShadeCategories';

export default function ShadesOfOrangePage() {
  const {
    colors,
    loading,
    error,
    totalCount
  } = useOrangeColorData();
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-orange-900">
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
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 mb-4">
            Shades of Orange: Complete Shades of Orange Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 2000+ different shades of orange with hex codes and color names. Our comprehensive orange colors palette
            features all types of orange shades - from light orange colors to dark orange color shades. Each shades of orange includes
            hex code orange, RGB values, and specific color orange names for designers and developers.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              {totalCount} Orange Colors
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
              placeholder="Search orange colors..."
            />
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
              }`}
            >
              All Orange Shades ({totalCount})
            </button>
            {ORANGE_SHADE_CATEGORIES.map((category) => {
              const categoryCount = colors.filter(color => color.category.id === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
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
              Showing {displayedFilteredColors.length} / {totalFilteredCount} orange shades
              {searchTerm && ` containing "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${ORANGE_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
            </p>
          </motion.div>
        )}

        {/* 错误状态 */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-medium text-orange-800 dark:text-orange-200 mb-2">
                Loading Failed
              </h3>
              <p className="text-orange-600 dark:text-orange-300 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
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
              Orange Shades Collection
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {displayedFilteredColors.length} / {totalFilteredCount} orange colors
            </span>
          </div>

          {/* 固定高度的颜色网格容器 */}
          <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 dark:scrollbar-thumb-orange-600 scrollbar-track-transparent">
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
                {searchTerm ? `Search: "${searchTerm}"` : 'All orange shades'}
                {selectedCategory !== 'all' && ` in ${ORANGE_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
              </span>
              {hasMoreFiltered && (
                <span className="text-orange-600 dark:text-orange-400">
                  Scroll down for more orange colors
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
            {/* 关于橙色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Different Types of Shades of Orange
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Shades of orange represent energy, enthusiasm, and warmth, making these orange colors one of the most vibrant colors in design.
                Our orange shades collection features over 2000 different shades of orange, each with unique characteristics and applications.
                From soft light orange colors to rich dark orange color shades, discover the perfect shades of orange for your project with
                accurate hex code orange and color orange combinations.
              </p>
            </div>

            {/* 橙色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Light Shades of Orange
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soft, gentle orange colors perfect for delicate and warm designs.
                  Light orange shades include peach orange, pale orange colors, and cream orange tones.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Red Shades of Orange
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bold, passionate orange shades ideal for dynamic and energetic designs.
                  Red orange colors feature vermillion orange, scarlet orange colors, and vibrant orange variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Yellow Shades of Orange
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bright, cheerful orange colors that evoke sunshine and optimism.
                  Yellow orange shades include amber orange, marigold orange colors, and golden orange variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Peach Shades of Orange
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soft orange colors with gentle undertones, perfect for romantic designs.
                  Peach orange shades feature coral orange, salmon orange colors, and apricot orange variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dark Shades of Orange
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep orange colors with rich, sophisticated appeal for premium designs.
                  Dark orange shades include burnt orange, rust orange colors, and copper orange variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Orange Color Combinations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore orange shades palettes and gradients for stunning design combinations.
                  Perfect for creating color orange schemes and harmonious orange color palettes.
                </p>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Shades of Orange Hex Codes and Color Codes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Each orange shades in our palette comes with accurate hex code orange and color codes for easy implementation.
                Simply click any orange colors to copy its hex code orange instantly. Our orange shades palette is perfect for
                web design, graphic design, and any project requiring specific orange color shades with precise color orange codes.
                From softer orange colors to vibrant orange shades, find all color orange variations with RGB values.
              </p>
            </div>

            {/* 橙色心理学和应用 */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Shades of Orange Color Psychology
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Orange colors are associated with energy, enthusiasm, and creativity, making these orange shades a powerful element in design.
                  Different orange color shades evoke various psychological responses:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Light Orange Colors:</strong> Warmth, gentleness, comfort</li>
                  <li>• <strong>Red Orange Shades:</strong> Energy, passion, excitement</li>
                  <li>• <strong>Yellow Orange Colors:</strong> Optimism, cheerfulness, creativity</li>
                  <li>• <strong>Peach Orange Shades:</strong> Romance, softness, elegance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Shades of Orange in Design Applications
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Orange shades are versatile and can be used across various design contexts:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Branding:</strong> Create energetic and enthusiastic brand identities with orange colors</li>
                  <li>• <strong>Web Design:</strong> Highlight call-to-action elements and create warmth using orange shades</li>
                  <li>• <strong>UI/UX:</strong> Draw attention and create engaging user experiences with orange color shades</li>
                  <li>• <strong>Interior Design:</strong> Add warmth and energy to spaces using color orange</li>
                </ul>
              </div>
            </div>

            {/* 橙色渐变和组合 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Shades of Orange Gradients and CSS Applications
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Create stunning orange color gradients by combining different orange shades from our comprehensive palette.
                Our orange colors collection includes all shades of orange from the lightest peach orange colors to the deepest burnt orange shades,
                making it easy to create beautiful color orange combinations and gradients for your design projects.
                Perfect for CSS orange color gradients, vibrant orange fonts, and sunset orange gradient effects.
                Explore types of orange shades and discover the perfect color orange scheme for your needs.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
