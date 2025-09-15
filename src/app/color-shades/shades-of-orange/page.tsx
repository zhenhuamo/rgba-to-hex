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
            Shades of Orange: Complete Collection of All Shades of Orange with Hex Codes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover 2000+ different shades of orange with precise orange hex codes and orange shade names. Our comprehensive
            collection features all shades of orange - from orangey yellow shades to deep red-orange shades, including popular
            orange color variations from white to dark orange. Every shade includes accurate orange hex codes, RGB values,
            orange Pantone colors, and detailed orange shade names perfect for designers, hair colorists, interior designers,
            and anyone seeking the perfect shades of orange for their creative projects.
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
                Complete Guide to All Shades of Orange: From Hair Colors to Interior Design
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                Shades of orange represent energy, enthusiasm, and warmth, making different shades of orange one of the most dynamic choices across design,
                fashion, and beauty industries. Our extensive collection features over 2000 carefully curated all shades of orange, each with unique
                characteristics and applications. From gentle orangey yellow shades perfect for hair color to sophisticated red-orange shades ideal
                for interior design accents, discover the perfect orange color variations for any project. Whether you&apos;re selecting shades of red/orange
                for hair colors, choosing orange shade names for branding, or finding orange hex codes for web design, our comprehensive shades of orange
                collection provides orange color variations from white to dark orange with precise orange Pantone colors and detailed specifications.
              </p>
            </div>

            {/* Hair Color Applications Section */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Shades of Red/Orange for Hair Colors: Professional Hair Color Guide
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8 text-center">
                Discover the most popular shades of red/orange for hair colors, from subtle orangey yellow shades to bold red-orange shades.
                Our hair color collection features professional orange shade names used by colorists worldwide, including copper orange,
                auburn red-orange, and strawberry blonde variations. Each hair color shade includes precise orange hex codes and
                orange Pantone colors for accurate color matching in salon applications.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Strawberry Blonde</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                    Light orangey yellow shades perfect for natural-looking hair color with warm undertones.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Copper Orange</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                    Rich red-orange shades that create vibrant, eye-catching hair color with metallic shine.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Auburn Red-Orange</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                    Deep shades of red/orange ideal for dramatic hair color transformations.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Ginger Orange</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                    Classic orange shade names for natural-looking ginger hair with warm orange hex codes.
                  </p>
                </div>
              </div>
            </div>

            {/* Interior Design Applications Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Orange Color Variations in Interior Design: From Accent Chairs to Wall Colors
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8 text-center">
                Transform your living spaces with carefully selected orange color variations from white to dark orange. Whether you&apos;re
                pairing orange accent chairs with turquoise sofas or creating warm wall colors with orangey yellow shades, our interior
                design guide helps you choose the perfect shades of orange for any room. Discover how different shades of orange work
                in various design schemes, from modern minimalist to cozy traditional styles.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg mx-auto mb-4 shadow-lg"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Living Room Accents</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Use warm orange color variations as accent pieces. Orange accent chairs pair beautifully with neutral turquoise sofas,
                    creating dynamic color contrasts that energize any living space.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-red-400 rounded-lg mx-auto mb-4 shadow-lg"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Kitchen & Dining</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Incorporate orangey yellow shades in kitchen backsplashes or dining room walls to create inviting, appetite-stimulating
                    environments that encourage gathering and conversation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mx-auto mb-4 shadow-lg"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Bedroom Warmth</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Soft orange shade names like peach and coral create cozy bedroom atmospheres, while deeper red-orange shades
                    add sophistication to master suites.
                  </p>
                </div>
              </div>
            </div>

            {/* 橙色分类说明 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Light Orange Colors & Orangey Yellow Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Discover gentle light orange colors perfect for delicate and warm designs. These soft orangey yellow shades
                  include popular peach orange colors, pale orange tones, and cream orange variations. Light orange shades
                  provide excellent orange hex codes for backgrounds and subtle design elements.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Popular Orange Shade Names:</strong> Peach Puff, Papaya Whip, Moccasin<br/>
                  <strong>Orange Pantone Colors:</strong> Pantone 162 C, Pantone 713 C
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Red-Orange Shades & Vibrant Orange Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Bold red-orange shades ideal for dynamic and energetic designs. These vibrant different shades of orange
                  feature vermillion orange, scarlet orange colors, and passionate orange variations. Red-orange shades
                  offer striking orange hex codes perfect for attention-grabbing design elements and hair color applications.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Popular Orange Shade Names:</strong> Vermillion, Scarlet Orange, Red Orange<br/>
                  <strong>Orange Pantone Colors:</strong> Pantone Orange 021 C, Pantone 17-1463
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Orangey Yellow Shades & Amber Variations
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Bright orangey yellow shades that evoke sunshine and optimism. These cheerful orange color variations
                  include amber orange shades, marigold orange colors, and golden orange tones. Orangey yellow shades
                  provide warm orange hex codes for uplifting and energetic designs, perfect for hair color and branding.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Popular Orange Shade Names:</strong> Amber, Marigold, Saffron, Goldenrod<br/>
                  <strong>Orange Pantone Colors:</strong> Pantone 130 C, Pantone 7408 C
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Peach Orange Colors & Coral Shades
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Elegant peach orange colors with gentle undertones, perfect for romantic designs and hair color applications.
                  These soft all shades of orange feature coral orange colors, salmon orange tones, and apricot orange variations.
                  Peach orange shades offer sophisticated orange hex codes for feminine and wellness-focused designs.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Popular Orange Shade Names:</strong> Peach, Coral, Salmon, Apricot<br/>
                  <strong>Orange Pantone Colors:</strong> Pantone 170 C, Pantone 16-1546
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dark Orange Shades & Orange Color Variations from White to Dark Orange
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Deep dark orange shades with rich, sophisticated appeal for premium designs. These bold different shades of orange
                  include burnt orange shades, rust orange colors, and copper orange tones. Dark orange colors provide
                  powerful orange hex codes for luxury branding and dramatic interior design accents.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Popular Orange Shade Names:</strong> Burnt Orange, Rust, Copper, Sienna<br/>
                  <strong>Orange Pantone Colors:</strong> Pantone 7526 C, Pantone 18-1142
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  All Shades of Orange: Complete Color Gradient Collection
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Create stunning orange color combinations and gradients using our comprehensive all shades of orange collection.
                  Perfect for developing harmonious orange color palettes, sunset orange gradients, and dynamic
                  color schemes that showcase orange color variations from white to dark orange with precise orange Pantone colors.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Gradient Applications:</strong> Web backgrounds, Hair color transitions, Interior design<br/>
                  <strong>Professional Use:</strong> Brand identity, UI/UX design, Print materials
                </div>
              </div>
            </div>

            {/* Technical Specifications Section */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Technical Specifications: Orange Hex Codes & Orange Pantone Colors
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8 text-center">
                Professional-grade technical specifications for all shades of orange, including precise orange hex codes,
                orange Pantone colors, RGB values, and CMYK breakdowns. Our comprehensive database ensures color accuracy
                across digital and print applications, making it the perfect resource for designers, developers, and print professionals.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold">
                    HEX
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Orange Hex Codes</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Precise 6-digit hex codes for all shades of orange, perfect for web development and digital design.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xs">
                    PMS
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Orange Pantone Colors</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Official Pantone color references for professional printing and brand color matching.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xs">
                    RGB
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">RGB Values</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Red, Green, Blue values for accurate digital color reproduction across all devices.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xs">
                    CMYK
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">CMYK Breakdown</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Cyan, Magenta, Yellow, Black values for professional print production and offset printing.
                  </p>
                </div>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Complete Orange Color Chart: All Shades of Orange with Orange Shade Names
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                Our comprehensive orange color chart provides accurate orange hex codes for every shade in our collection.
                Each different shades of orange includes precise color codes, orange Pantone colors, and detailed orange shade names,
                making it easy to implement these all shades of orange in your projects. Simply click any orange colors to instantly
                copy the orange hex codes to your clipboard. This orange color palette is perfect for web design, graphic design,
                hair color selection, interior design, and any creative project requiring specific orange color variations from white
                to dark orange with exact color specifications. From gentle orangey yellow shades to intense red-orange shades,
                explore all orange shade names with corresponding RGB values and orange Pantone colors.
              </p>
            </div>

            {/* 橙色心理学和应用 */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Psychology of All Shades of Orange: From Hair Colors to Interior Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Orange color psychology reveals why different shades of orange are so powerful across industries. From shades of red/orange
                  in hair colors to orangey yellow shades in interior design, various orange color variations evoke distinct psychological
                  responses. Understanding how all shades of orange affect emotions helps professionals select the perfect orange shade names
                  for their projects, whether choosing orange Pantone colors for branding or orange hex codes for digital applications:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Orangey Yellow Shades:</strong> Convey warmth and optimism - perfect for hair color and welcoming designs</li>
                  <li>• <strong>Red-Orange Shades:</strong> Express energy and passion - ideal for dynamic brands and bold hair colors</li>
                  <li>• <strong>Orange Color Variations:</strong> Inspire creativity and enthusiasm - great for interior accent pieces</li>
                  <li>• <strong>Peach Orange Colors:</strong> Suggest romance and elegance - excellent for beauty brands and soft furnishings</li>
                  <li>• <strong>Dark Orange Shades:</strong> Project sophistication and luxury - suitable for premium applications and rich interiors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Professional Applications: Orange Shade Names Across Industries
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  All shades of orange offer versatile applications across multiple professional disciplines. Our comprehensive collection
                  provides orange hex codes and orange Pantone colors for professional use in various contexts, from hair salons using
                  shades of red/orange to interior designers incorporating orange color variations from white to dark orange:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• <strong>Hair Color Industry:</strong> Use shades of red/orange and orangey yellow shades for natural-looking hair transformations</li>
                  <li>• <strong>Interior Design:</strong> Implement orange color variations in accent chairs, wall colors, and decorative elements</li>
                  <li>• <strong>Brand Identity:</strong> Apply vibrant different shades of orange with precise orange Pantone colors for memorable branding</li>
                  <li>• <strong>Web Design:</strong> Utilize orange hex codes for call-to-action buttons and engaging user interfaces</li>
                  <li>• <strong>Fashion & Beauty:</strong> Incorporate all shades of orange in cosmetics, clothing, and accessory design</li>
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
                    Selecting the perfect shades of orange depends on your project&apos;s goals and target audience.
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
                Frequently Asked Questions About All Shades of Orange
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What are the most popular all shades of orange for hair colors?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The most popular shades of red/orange for hair colors include copper orange, auburn red-orange shades,
                    strawberry blonde (orangey yellow shades), and ginger orange. These orange shade names offer versatile
                    orange hex codes and orange Pantone colors suitable for various hair color applications and skin tones.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    How do I choose between different shades of orange for interior design?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Choose orange color variations based on your space: orangey yellow shades for kitchens and dining areas;
                    red-orange shades for accent walls and statement pieces; peach orange colors for bedrooms and bathrooms.
                    Consider how orange accent chairs pair with existing furniture like turquoise sofas for balanced color schemes.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What orange Pantone colors are trending in 2024?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Trending orange Pantone colors include Pantone 16-1546 (Living Coral), Pantone Orange 021 C, and
                    Pantone 17-1463 (Tangerine Tango). These professional orange shade names provide accurate color
                    matching for brand identity and design applications.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What orange hex codes work best for web design accessibility?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    For accessible web design, recommended orange hex codes include #FF6B35 for call-to-action buttons,
                    #FFA500 for highlights, and #FF8C42 for accent elements. These different shades of orange provide excellent
                    contrast ratios while maintaining the energetic appeal of orange color variations.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Can I create gradients using orange color variations from white to dark orange?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Absolutely! Our comprehensive collection of all shades of orange is perfect for creating stunning gradients.
                    Combine light orangey yellow shades with deeper red-orange shades to create beautiful sunset effects,
                    or blend different orange colors for dynamic hair color transitions and interior design applications.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    How do orange shade names help in professional color matching?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Professional orange shade names provide standardized color references across industries. Whether you&apos;re
                    a hair colorist using shades of red/orange, an interior designer specifying orange accent pieces, or a
                    brand designer requiring precise orange Pantone colors, standardized names ensure accurate color communication.
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
