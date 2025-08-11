'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

// 添加自定义CSS动画
const customStyles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default function ColorShadesIndex() {
  // Color shades categories
  const colorShadeCategories = [
    {
      category: "Color Shades Collection",
      description: "Explore comprehensive collections of color shades including blue, green, purple, red, and pink with detailed information, HEX codes, RGB values, and professional color palettes for design inspiration",
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
        },
        {
          name: 'Shades of Pink',
          href: '/color-shades/shades-of-pink',
          color: 'from-pink-500 to-pink-600',
          description: 'Comprehensive pink color palette featuring all shades of pink from light pink to dark pink. Discover 1000+ pink color codes, CSS codes for pink, and pink gradient colors. Perfect for feminine designs, romantic themes, and gentle color schemes with pink tones CSS and pink colour codes.'
        },
        {
          name: 'Shades of Yellow',
          href: '/color-shades/shades-of-yellow',
          color: 'from-yellow-500 to-yellow-600',
          description: 'Complete color shades palette featuring different color shades including golden color shades, lemon color shades, cream color shades, and amber color shades. Explore 2000+ color shades hex codes, color shades combinations, and color shades CSS gradients. Perfect for cheerful designs, sunny themes, and optimistic color schemes with all types of color shades.'
        }
      ]
    }
  ];

  return (
    <>
      <style jsx>{customStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <Navigation />

        {/* Hero Section */}
        <div className="text-center mb-16 mt-8">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl mb-6 shadow-2xl">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-6 leading-tight">
                Color Shades
                <br />
                <span className="text-5xl md:text-6xl">Collection</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
                Discover comprehensive collections of color shades including
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> blue</span>,
                <span className="text-green-600 dark:text-green-400 font-semibold"> green</span>,
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> purple</span>,
                <span className="text-red-600 dark:text-red-400 font-semibold"> red</span>, and
                <span className="text-pink-600 dark:text-pink-400 font-semibold"> pink</span> with detailed information, HEX codes, RGB values, and professional color palettes.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Perfect for designers, developers, and anyone working with colors in digital or print media.
                Each collection features carefully curated shades with precise color codes.
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  <span className="mr-2">🎯</span>HEX Codes
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  <span className="mr-2">🔢</span>RGB Values
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  <span className="mr-2">📝</span>Color Names
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-200 dark:border-pink-700 text-pink-700 dark:text-pink-300 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  <span className="mr-2">✨</span>Professional Palettes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Collections Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Color Collections
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully curated color shade collections, each featuring thousands of colors with detailed information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colorShadeCategories[0].tools.map((tool, index) => (
              <Link
                href={tool.href}
                key={index}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Card background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Card content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      {tool.name.split(' ')[2].charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {tool.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {tool.name.includes('Blue') ? '2000+' :
                           tool.name.includes('Green') ? '1500+' :
                           tool.name.includes('Purple') ? '1200+' :
                           tool.name.includes('Red') ? '2000+' : '6000+'} shades
                        </span>
                        <div className="ml-2 flex space-x-1">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color}`}></div>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color} opacity-70`}></div>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color} opacity-40`}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-4">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      HEX Codes
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      RGB Values
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      Color Names
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Click to explore
                    </span>
                    <div className="flex items-center text-purple-600 dark:text-purple-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      <span className="text-sm font-semibold mr-2">View Collection</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500 rounded-3xl"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our Collections?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional-grade color tools designed for designers, developers, and creative professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Comprehensive Collections
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Thousands of carefully curated color shades with complete information including HEX codes, RGB values, and descriptive names for every color.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Design Inspiration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Perfect for finding design inspiration and creating cohesive color schemes for websites, branding, illustrations, and digital art projects.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready-to-Use Codes
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  All colors come with ready-to-use HEX codes and RGB values that can be directly copied and pasted into your design tools or code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Creating with Colors
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Choose any color collection above to discover beautiful shades and find the perfect colors for your next design project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:mozhenhuamo@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Suggest New Collections
                </a>

                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-sm">or explore collections above</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
