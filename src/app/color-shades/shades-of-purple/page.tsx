'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ColorGrid } from '../components/ColorGrid';
import { SearchBar } from '../components/SearchBar';
import { usePurpleColorData } from '../hooks/usePurpleColorData';
import { useColorSearch } from '../hooks/useColorSearch';
import { useFilteredColors } from '../hooks/useFilteredColors';
import { ColorData } from '../types/color';
import { PURPLE_SHADE_CATEGORIES } from '../constants/purpleShadeCategories';

export default function ShadesOfPurplePage() {
  const {
    colors,
    loading,
    error,
    totalCount
  } = usePurpleColorData();
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-900 dark:to-purple-900">
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
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600 mb-4">
            Shades of Purple: Complete Purple Color Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 4000+ different shades of purple with hex codes and purple color names. Our comprehensive purple color palette
            features all types of purple colors - from light purple tones to deep purple shades. Each purple color includes
            hex codes, RGB values, and specific purple color names for designers and developers. Create stunning purple gradients
            and explore beautiful purple color names from our extensive collection.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              {totalCount} Purple Shades
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
              placeholder="Search purple colors..."
            />
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
              }`}
            >
              All Purples ({totalCount})
            </button>
            {PURPLE_SHADE_CATEGORIES.map((category) => {
              const categoryCount = colors.filter(color => color.category.id === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
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
              Showing {displayedFilteredColors.length} / {totalFilteredCount} purple shades
              {searchTerm && ` containing "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${PURPLE_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
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

        {/* 颜色网格 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ColorGrid
            colors={displayedFilteredColors}
            onColorSelect={handleColorSelect}
            loading={loading}
            loadingMore={loadingMoreFiltered}
            hasMore={hasMoreFiltered}
            onLoadMore={loadMoreFiltered}
          />
        </motion.div>

        {/* SEO内容部分 */}
        {!loading && displayedFilteredColors.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700"
          >
            {/* 关于紫色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Different Types of Purple Colors
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Purple is the color of royalty, creativity, and mystery. Our collection features over 4000
                different shades of purple, each with unique characteristics and applications. From calming light purple tones
                to rich deep purple shades, discover the perfect purple color for your project with precise hex codes and color values.
                Explore all shades of purple from lavender to amethyst, violet to magenta.
              </p>
            </div>

            {/* 紫色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Light Purple Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soft, calming light purple colors perfect for gentle and peaceful designs.
                  Includes pale purple, soft purple, and pastel purple tones.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Deep Purple Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rich, sophisticated deep purple shades that convey luxury and mystery.
                  Features dark purple, midnight purple, and shadow purple variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Lavender Purple Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Delicate lavender purple colors inspired by the beautiful lavender flower.
                  Perfect for spa, wellness, and natural product designs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Royal Purple Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Majestic royal purple shades that embody nobility and grandeur.
                  Includes imperial purple, regal purple, and crown purple tones.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Violet Purple Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Classic violet purple colors that balance blue and red undertones perfectly.
                  Features blue violet, red violet, and medium violet variations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Magenta Purple Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Vibrant magenta purple colors that combine purple with pink energy.
                  Perfect for bold, attention-grabbing designs and modern brands.
                </p>
              </div>
            </div>

            {/* 紫色渐变说明 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Purple Gradient and Color Combinations
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                Create stunning purple gradients by combining different purple shades from our collection.
                Mix light purple with deep purple for dramatic effects, or blend lavender purple with royal purple
                for elegant transitions. Our purple color names help you identify the perfect gradient combinations
                for your design projects.
              </p>
            </div>

            {/* 使用指南 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Purple Hex Codes and Color Codes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Each purple color in our palette comes with accurate hex codes, purple color names, and color codes for easy implementation.
                Simply click any purple shade to copy its hex code instantly. Our purple color palette is perfect for
                web design, graphic design, and any project requiring specific purple colors with precise color codes.
                Use these purple CSS colors and create beautiful purple gradients to design stunning, royal-inspired projects.
                Explore our comprehensive purple color names collection for the perfect shade.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
