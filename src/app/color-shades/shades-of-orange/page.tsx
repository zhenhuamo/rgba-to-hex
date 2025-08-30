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
            Shades of Orange: Complete Orange Color Collection with Hex Codes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Explore 2000+ stunning shades of orange with precise hex code orange values and color names. Our comprehensive
            orange color palette showcases different shades of orange - from delicate light orange colors to bold dark orange shades.
            Every orange color includes accurate hex codes, RGB values, and detailed orange color names perfect for designers,
            developers, and anyone seeking the perfect shades of orange for their creative projects.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              {totalCount} Shades of Orange
            </span>
            <span>•</span>
            <span>Instant Hex Code Copy</span>
            <span>•</span>
            <span>Multiple Color Formats</span>
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
              placeholder="Search shades of orange by name or hex code..."
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
              Displaying {displayedFilteredColors.length} / {totalFilteredCount} shades of orange
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${ORANGE_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName} category`}
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
              Interactive Shades of Orange Color Palette
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {displayedFilteredColors.length} / {totalFilteredCount} shades of orange
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
                {searchTerm ? `Searching shades of orange: "${searchTerm}"` : 'All shades of orange displayed'}
                {selectedCategory !== 'all' && ` in ${ORANGE_SHADE_CATEGORIES.find(c => c.id === selectedCategory)?.displayName} category`}
              </span>
              {hasMoreFiltered && (
                <span className="text-orange-600 dark:text-orange-400">
                  Scroll to discover more shades of orange
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
                Complete Guide to Different Shades of Orange
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Shades of orange represent energy, enthusiasm, and warmth, making orange color one of the most dynamic choices in design.
                Our extensive orange color palette features over 2000 carefully curated shades of orange, each with unique characteristics
                and design applications. From gentle light orange colors to sophisticated dark orange shades, discover the perfect
                orange colors for your project with accurate hex code orange values, RGB specifications, and comprehensive orange color names.
                Whether you need vibrant orange shades for energetic designs or soft orange color combinations for elegant themes,
                our shades of orange collection provides all types of orange with precise color codes.
              </p>
            </div>

            {/* 橙色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Light Orange Colors & Soft Shades of Orange
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Discover gentle light orange colors perfect for delicate and warm designs. These soft shades of orange
                  include popular peach orange colors, pale orange tones, and cream orange variations. Light orange shades
                  provide excellent hex code orange options for backgrounds and subtle design elements.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Red Orange Shades & Vibrant Orange Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bold red orange shades ideal for dynamic and energetic designs. These vibrant shades of orange
                  feature vermillion orange, scarlet orange colors, and passionate orange variations. Red orange colors
                  offer striking hex code orange values perfect for attention-grabbing design elements.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Yellow Orange Variations & Amber Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bright yellow orange variations that evoke sunshine and optimism. These cheerful shades of orange
                  include amber orange shades, marigold orange colors, and golden orange tones. Yellow orange colors
                  provide warm hex code orange options for uplifting and energetic designs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Peach Orange Colors & Coral Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Elegant peach orange colors with gentle undertones, perfect for romantic designs. These soft shades of orange
                  feature coral orange colors, salmon orange tones, and apricot orange variations. Peach orange shades
                  offer sophisticated hex code orange values for feminine and wellness-focused designs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dark Orange Shades & Burnt Orange Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep dark orange shades with rich, sophisticated appeal for premium designs. These bold shades of orange
                  include burnt orange shades, rust orange colors, and copper orange tones. Dark orange colors provide
                  powerful hex code orange options for luxury and corporate branding.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Orange Color Combinations & Gradient Palettes
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create stunning orange color combinations and gradients using our shades of orange collection.
                  Perfect for developing harmonious orange color palettes, sunset orange gradients, and dynamic
                  color orange schemes that showcase the full spectrum of orange colors.
                </p>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Orange Color Chart: Hex Codes for All Shades of Orange
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Our comprehensive orange color chart provides accurate hex code orange values for every shade in our collection.
                Each orange color includes precise color codes, making it easy to implement these shades of orange in your projects.
                Simply click any orange colors to instantly copy the hex code orange to your clipboard. This orange color palette
                is perfect for web design, graphic design, and any creative project requiring specific orange color shades with
                exact color orange codes. From gentle light orange colors to intense vibrant orange shades, explore all
                orange color names with corresponding RGB values and hex codes.
              </p>
            </div>

            {/* 橙色心理学和应用 */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Psychology of Shades of Orange in Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Orange color psychology reveals why shades of orange are so powerful in design. Different orange color shades
                  evoke distinct psychological responses, making the choice of orange colors crucial for effective communication.
                  Understanding how various shades of orange affect emotions helps designers select the perfect orange color for their projects:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Light Orange Colors:</strong> Convey warmth, gentleness, and comfort - ideal for welcoming designs</li>
                  <li>• <strong>Red Orange Shades:</strong> Express energy, passion, and excitement - perfect for dynamic brands</li>
                  <li>• <strong>Yellow Orange Variations:</strong> Inspire optimism, cheerfulness, and creativity - great for uplifting themes</li>
                  <li>• <strong>Peach Orange Colors:</strong> Suggest romance, softness, and elegance - excellent for beauty brands</li>
                  <li>• <strong>Dark Orange Shades:</strong> Project sophistication, earthiness, and power - suitable for luxury applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Professional Applications of Shades of Orange
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Shades of orange offer versatile applications across multiple design disciplines. Our orange color palette
                  provides hex code orange values for professional use in various contexts:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Brand Identity:</strong> Use vibrant orange shades to create energetic and memorable brand identities</li>
                  <li>• <strong>Web Design:</strong> Implement orange color codes for call-to-action buttons and warm user interfaces</li>
                  <li>• <strong>UI/UX Design:</strong> Apply different shades of orange to guide user attention and create engaging experiences</li>
                  <li>• <strong>Interior Design:</strong> Incorporate orange color combinations to add warmth and energy to living spaces</li>
                  <li>• <strong>Graphic Design:</strong> Utilize orange color gradients and schemes for impactful visual communications</li>
                </ul>
              </div>
            </div>

            {/* 橙色渐变和组合 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Orange Color Gradients & CSS Implementation Guide
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Create stunning orange color gradients by combining different shades of orange from our comprehensive collection.
                Our orange colors palette includes all types of orange - from the lightest peach orange colors to the deepest
                burnt orange shades - making it simple to develop beautiful orange color combinations and gradients for your design projects.
                Perfect for CSS orange color implementations, vibrant orange typography, and captivating sunset orange palette effects.
                Explore various types of orange and discover the ideal orange color scheme that matches your creative vision.
              </p>
            </div>

            {/* 新增：橙色使用技巧和最佳实践 */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Best Practices for Using Shades of Orange
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Choosing the Right Orange Color
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Selecting the perfect shades of orange depends on your project's goals and target audience.
                    Light orange colors work well for friendly, approachable designs, while dark orange shades
                    convey sophistication and premium quality. Consider the psychological impact of different
                    orange color shades when building your orange color palette.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Orange Color Accessibility & Contrast
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    When implementing shades of orange in digital designs, ensure proper contrast ratios for accessibility.
                    Our hex code orange values are optimized for various backgrounds. Test your orange colors against
                    different backgrounds to maintain readability while preserving the visual impact of your chosen
                    orange color combinations.
                  </p>
                </div>
              </div>
            </div>

            {/* 新增：橙色趋势和流行色 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Popular Shades of Orange & Color Trends 2024
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Stay current with the most popular shades of orange trending in 2024. Our curated selection highlights
                the best shades of orange for modern design, including trending tangerine orange, contemporary coral orange colors,
                and sophisticated copper orange tones. These beautiful shades of orange represent the latest in color orange trends,
                offering designers access to the most sought-after orange color codes and hex code orange values for contemporary projects.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Trending Orange Colors</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Discover the most popular shades of orange currently trending in design and fashion industries.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-red-400 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Seasonal Orange Palette</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Explore seasonal variations of orange colors perfect for autumn themes and warm design concepts.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Orange Codes</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Access professional-grade hex code orange values used by leading brands and design agencies.
                  </p>
                </div>
              </div>
            </div>

            {/* 新增：FAQ部分 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Frequently Asked Questions About Shades of Orange
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What are the most popular shades of orange?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The most popular shades of orange include classic orange color (#FFA500), burnt orange shades,
                    coral orange colors, and tangerine orange. These orange colors offer versatile hex code orange
                    options suitable for various design applications and color orange schemes.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    How do I choose between different shades of orange?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose shades of orange based on your design goals: light orange colors for gentle, welcoming designs;
                    vibrant orange shades for energetic, attention-grabbing elements; and dark orange shades for sophisticated,
                    premium applications. Consider the psychological impact of each orange color in your palette.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What hex code orange values work best for web design?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    For web design, popular hex code orange values include #FF6B35 for call-to-action buttons,
                    #FFA500 for highlights, and #FF8C42 for accent elements. These orange colors provide excellent
                    contrast and accessibility while maintaining the energetic appeal of shades of orange.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Can I create gradients with these shades of orange?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Absolutely! Our orange color collection is perfect for creating stunning orange color gradients.
                    Combine light orange colors with darker orange shades to create beautiful sunset orange palette
                    effects, or blend different orange colors for dynamic color orange combinations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
