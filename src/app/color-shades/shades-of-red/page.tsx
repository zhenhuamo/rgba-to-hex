'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ColorGrid } from '../components/ColorGrid';
import { SearchBar } from '../components/SearchBar';
import { useRedColorData } from '../hooks/useRedColorData';
import { useColorSearch } from '../hooks/useColorSearch';
import { useFilteredColors } from '../hooks/useFilteredColors';
import { ColorData } from '../types/color';
import { RED_SHADE_CATEGORIES } from '../constants/redShadeCategories';

export default function ShadesOfRedPage() {
  const {
    colors,
    loading,
    error,
    totalCount
  } = useRedColorData();
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 dark:from-gray-900 dark:to-red-900">
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
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600 mb-4">
            Shades of Red: Complete Red Color Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 2000+ different shades of red with hex codes and color names. Our comprehensive red color palette
            features all types of red colors - from light red tones to dark red shades. Each red color includes
            hex codes, RGB values, and specific red color names for designers and developers.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              {totalCount} Red Shades
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
              placeholder="Search red colors..."
            />
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700'
              }`}
            >
              All Reds ({totalCount})
            </button>
            {RED_SHADE_CATEGORIES.map((category) => {
              const categoryCount = colors.filter(color => color.category.id === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700'
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
              Showing {displayedFilteredColors.length} / {totalFilteredCount} red shades
              {searchTerm && ` containing "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${RED_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
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
              Red Color Collection
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {displayedFilteredColors.length} / {totalFilteredCount} colors
            </span>
          </div>

          {/* 固定高度的颜色网格容器 */}
          <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-300 dark:scrollbar-thumb-red-600 scrollbar-track-transparent">
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
                {searchTerm ? `Search: "${searchTerm}"` : 'All red colors'}
                {selectedCategory !== 'all' && ` in ${RED_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
              </span>
              {hasMoreFiltered && (
                <span className="text-red-600 dark:text-red-400">
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
            {/* 关于红色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Different Types of Red Colors
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Red is the color of passion, energy, and power, making it one of the most impactful colors in design.
                Our collection features over 2000 different shades of red, each with unique characteristics and applications.
                From soft light red tones to bold dark red shades, discover the perfect red color for your project with
                accurate red hex codes and color combinations.
              </p>
            </div>

            {/* 红色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Light Red Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soft, gentle red colors perfect for romantic and delicate designs.
                  Includes blush red, baby red, and rose quartz tones.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dark Red Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep, sophisticated red colors ideal for luxury and premium designs.
                  Features burgundy, wine red, and maroon variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Crimson Red Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Intense, vibrant red shades that command attention and convey strength.
                  Includes scarlet, ruby red, and fire red tones.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Rose Red Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Romantic red colors with pink undertones, perfect for feminine designs.
                  Features hot pink, magenta, and rose variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Coral Red Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Warm red shades with orange undertones, ideal for friendly designs.
                  Includes salmon red, tomato red, and coral variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Red Color Combinations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore red color palettes and gradients for stunning design combinations.
                  Perfect for creating red color schemes and harmonious palettes.
                </p>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Red Hex Codes and Color Codes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Each red color in our palette comes with accurate hex codes and color codes for easy implementation.
                Simply click any red shade to copy its hex code instantly. Our red color palette is perfect for
                web design, graphic design, and any project requiring specific red colors with precise color codes.
                From softer red colors to vibrant red shades, find all red color variations with RGB values.
              </p>
            </div>

            {/* 红色心理学和应用 */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Red Color Psychology
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Red is the most emotionally intense color, representing passion, energy, and power. Different shades of red
                  evoke various psychological responses:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Light Red:</strong> Romance, gentleness, nurturing</li>
                  <li>• <strong>Medium Red:</strong> Passion, energy, confidence</li>
                  <li>• <strong>Dark Red:</strong> Sophistication, luxury, authority</li>
                  <li>• <strong>Crimson Red:</strong> Intensity, drama, power</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Red in Design Applications
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Red colors are versatile and can be used across various design contexts:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Branding:</strong> Create memorable and energetic brand identities</li>
                  <li>• <strong>Web Design:</strong> Call-to-action buttons and important elements</li>
                  <li>• <strong>Fashion:</strong> Bold statements and romantic designs</li>
                  <li>• <strong>Interior Design:</strong> Accent walls and statement pieces</li>
                </ul>
              </div>
            </div>

            {/* 红色渐变和组合 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Red Color Gradients and Palettes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Create stunning red color gradients by combining different shades of red from our comprehensive palette.
                Our red color collection includes all red color shades from the lightest pink-red to the deepest burgundy,
                making it easy to create beautiful red color combinations and gradients for your design projects.
                Explore types of red colors and discover the perfect red color scheme for your needs.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
