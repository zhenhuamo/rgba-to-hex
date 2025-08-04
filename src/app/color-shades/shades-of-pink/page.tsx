'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ColorGrid } from '../components/ColorGrid';
import { SearchBar } from '../components/SearchBar';
import { usePinkColorData } from '../hooks/usePinkColorData';
import { useColorSearch } from '../hooks/useColorSearch';
import { useFilteredColors } from '../hooks/useFilteredColors';
import { ColorData } from '../types/color';
import { PINK_SHADE_CATEGORIES } from '../constants/pinkShadeCategories';

export default function ShadesOfPinkPage() {
  const {
    colors,
    loading,
    error,
    totalCount
  } = usePinkColorData();
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-900 dark:to-pink-900">
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
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600 mb-4">
            Shades of Pink: Complete Pink Color Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 6000+ different shades of pink with hex codes and color names. Our comprehensive pink color palette
            features all types of pink colors - from light pink tones to dark pink shades. Each pink color includes
            CSS color codes, RGB values, and specific pink color names for designers and developers.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              {totalCount} Pink Shades
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
              placeholder="Search pink colors..."
            />
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700'
              }`}
            >
              All Pinks ({totalCount})
            </button>
            {PINK_SHADE_CATEGORIES.map((category) => {
              const categoryCount = colors.filter(color => color.category.id === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700'
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
              Showing {displayedFilteredColors.length} / {totalFilteredCount} pink shades
              {searchTerm && ` containing "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${PINK_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
            </p>
          </motion.div>
        )}

        {/* 错误状态 */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-medium text-pink-800 dark:text-pink-200 mb-2">
                Loading Failed
              </h3>
              <p className="text-pink-600 dark:text-pink-300 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
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
              Pink Color Collection
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {displayedFilteredColors.length} / {totalFilteredCount} colors
            </span>
          </div>

          {/* 固定高度的颜色网格容器 */}
          <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 dark:scrollbar-thumb-pink-600 scrollbar-track-transparent">
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
                {searchTerm ? `Search: "${searchTerm}"` : 'All pink colors'}
                {selectedCategory !== 'all' && ` in ${PINK_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName}`}
              </span>
              {hasMoreFiltered && (
                <span className="text-pink-600 dark:text-pink-400">
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
            {/* 关于粉色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Different Types of Pink Colors
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Pink is the color of love, compassion, and femininity, making it one of the most beloved colors in design.
                Our collection features over 1000 different shades of pink, each with unique characteristics and applications.
                From soft light pink tones to bold dark pink shades, discover the perfect pink color for your project with
                accurate pink hex codes and CSS color codes pink for seamless implementation.
              </p>
            </div>

            {/* 粉色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Light Pink Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soft, gentle light pink colors perfect for romantic and delicate designs.
                  Includes baby pink, blush pink, and powder pink tones with CSS codes for pink.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dark Pink Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep, sophisticated dark pink colors ideal for bold and confident designs.
                  Features deep pink, magenta, and fuchsia variations with pink color codes.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Rose Pink Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Elegant rose-inspired pink shades that convey romance and sophistication.
                  Includes dusty rose, rose gold, and antique rose with pink colour codes.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Coral Pink Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Warm coral pink colors with orange undertones, perfect for cheerful designs.
                  Features salmon pink, peach pink, and coral variations with pink tones CSS.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Pastel Pink Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soft pastel pink shades ideal for gentle and dreamy designs.
                  Includes powder pink, whisper pink, and soft pink with CSS shades of pink by names.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Pink Color Combinations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore pink color palettes and gradients for stunning design combinations.
                  Perfect for creating pink gradient color schemes and harmonious pink colours.
                </p>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Pink Hex Codes and CSS Color Codes Pink
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Each pink color in our palette comes with accurate pink hex codes and CSS color codes for easy implementation.
                Simply click any shade of pink to copy its pink code instantly. Our pink color palette is perfect for
                web design, graphic design, and any project requiring specific pink colors with precise pink color codes.
                From softer pink color variations to vibrant pink shades, find all pink color shades with RGB values and
                pink colour code options for your CSS color scheme pink needs.
              </p>
            </div>

            {/* 粉色心理学和应用 */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Pink Color Psychology
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Pink is the most nurturing and compassionate color, representing love, kindness, and femininity. Different types of pink
                  evoke various psychological responses and are perfect for creating emotional connections:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Light Pink:</strong> Innocence, gentleness, nurturing, peace</li>
                  <li>• <strong>Medium Pink:</strong> Playfulness, femininity, warmth, joy</li>
                  <li>• <strong>Dark Pink:</strong> Confidence, sophistication, passion, boldness</li>
                  <li>• <strong>Rose Pink:</strong> Romance, elegance, timeless beauty, grace</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Pink in Design Applications
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Pink colors are versatile and can be used across various design contexts with our comprehensive pink color picker:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Branding:</strong> Create memorable and approachable brand identities</li>
                  <li>• <strong>Web Design:</strong> Gentle call-to-action buttons and feminine elements</li>
                  <li>• <strong>Fashion:</strong> Romantic statements and playful designs</li>
                  <li>• <strong>Interior Design:</strong> Calming accent walls and nurturing spaces</li>
                </ul>
              </div>
            </div>

            {/* 粉色渐变和组合 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Pink Gradient Color and Color Combinations
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Create stunning pink gradient color effects by combining different shades of pink colour from our comprehensive palette.
                Our pink color collection includes all shades of pink from the lightest pastel pink to the deepest magenta,
                making it easy to create beautiful pink color combinations and pink gradient color schemes for your design projects.
                Explore all types of pink and discover the perfect pink color scheme for your needs with our extensive
                color of pink shades database.
              </p>
            </div>

            {/* CSS 和开发者指南 */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                CSS Codes for Pink and Developer Guide
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Using Pink CSS in Your Projects
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our pink shades color code collection provides CSS-ready values for immediate use. Each pinkcolor
                    includes multiple format options for maximum compatibility with your CSS color scheme pink requirements.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• <strong>Hex Codes:</strong> #FF69B4, #FFB6C1, #FF1493</li>
                    <li>• <strong>RGB Values:</strong> rgb(255, 105, 180)</li>
                    <li>• <strong>HSL Values:</strong> hsl(330, 100%, 71%)</li>
                    <li>• <strong>CSS Variables:</strong> --pink-primary: #FF69B4</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Pink Color Picker Integration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Integrate our pink colours into your design workflow with instant copy functionality.
                    Perfect for designers working with pink shades color and developers implementing pink tones CSS.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• <strong>One-Click Copy:</strong> Instant clipboard access</li>
                    <li>• <strong>Multiple Formats:</strong> Hex, RGB, HSL support</li>
                    <li>• <strong>Search Function:</strong> Find specific pink code variations</li>
                    <li>• <strong>Category Filters:</strong> Browse by pink color types</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
