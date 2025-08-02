'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function ColorShadesIndex() {
  // Color shades categories
  const colorShadeCategories = [
    {
      category: "Color Shades Collection",
      description: "Explore comprehensive collections of color shades with detailed information, HEX codes, RGB values, and professional color palettes for design inspiration",
      icon: "🎨",
      tools: [
        {
          name: 'Shades of Blue',
          href: '/color-shades/shades-of-blue',
          color: 'from-blue-500 to-blue-600',
          description: 'Comprehensive collection of blue color shades from light sky blue to deep navy blue. Features over 100 blue variations with HEX codes, RGB values, and color names for web design and graphic design projects.'
        },
        {
          name: 'Shades of Green',
          href: '/color-shades/shades-of-green',
          color: 'from-green-500 to-green-600',
          description: 'Complete green color palette featuring forest green, mint green, lime green, and emerald shades. Perfect for nature-inspired designs, eco-friendly branding, and fresh web interfaces.'
        },
        {
          name: 'Shades of Purple',
          href: '/color-shades/shades-of-purple',
          color: 'from-purple-500 to-purple-600',
          description: 'Extensive purple color collection including lavender, violet, plum, and royal purple shades. Ideal for luxury branding, creative designs, and sophisticated color schemes.'
        },
        {
          name: 'Shades of Red',
          href: '/color-shades/shades-of-red',
          color: 'from-red-500 to-red-600',
          description: 'Complete red color palette featuring different shades of red including crimson, scarlet, burgundy, and rose red. Explore 2000+ red hex codes, red color combinations, and red color gradients. Perfect for passionate designs, bold branding, and energetic color schemes with all types of red colors.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Color Shades Collection
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Discover comprehensive collections of color shades with detailed information, HEX codes, RGB values, and professional color palettes.
              Perfect for designers, developers, and anyone working with colors in digital or print media.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Each color collection features carefully curated shades with precise color codes, making it easy to find the perfect color for your design projects.
              From subtle pastels to bold, vibrant hues - explore the full spectrum of possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">HEX Codes</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">RGB Values</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">Color Names</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Design Inspiration</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Palettes</span>
            </div>
          </div>

          {/* Color Shades Categories Section */}
          {colorShadeCategories.map((category, index) => (
            <div key={index} className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">{category.category}</h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl">
                {category.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.tools.map((tool, toolIndex) => (
                  <Link
                    href={tool.href}
                    key={toolIndex}
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white font-bold text-2xl shadow-md group-hover:shadow-lg transition-all`}>
                        {tool.name.split(' ')[2].charAt(0)}
                      </div>
                      <h3 className="ml-4 text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {tool.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Benefits Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Why Use Our Color Shade Collections?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Our color shade collections provide designers and developers with carefully curated palettes and comprehensive color information for professional projects.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Comprehensive Collections</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Each color collection features dozens of carefully selected shades with complete color information including HEX codes, RGB values, and descriptive names.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Design Inspiration</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Perfect for finding design inspiration and creating cohesive color schemes for websites, branding, illustrations, and digital art projects.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Ready-to-Use Codes</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  All colors come with ready-to-use HEX codes and RGB values that can be directly copied and pasted into your design tools or code.
                </p>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Explore Our Color Shade Collections
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose any color collection above to discover beautiful shades and find the perfect colors for your next design project.
            </p>
            <a
              href="mailto:mozhenhuamo@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Suggest New Color Collections
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
