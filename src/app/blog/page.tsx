'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Blog() {
  const blogPosts = [
    {
      title: 'BEST RGBA to HEX Converter 2024 - TOP Professional Color Tool',
      description: 'Discover the BEST RGBA to HEX converter tool in 2024! Professional-grade color conversion with advanced algorithms, real-time preview, and accessibility features. The TOP choice for developers and designers.',
      link: '/blog/rgba-to-hex',
      date: '2024-12-07',
      readTime: '20 min read',
      category: 'Color Conversion',
      featured: true,
      image: '/images/blog/rgba-to-hex-featured.jpg',
      tags: ['RGBA to HEX', 'color converter', 'web development', 'design tools', 'professional']
    },
    {
      title: 'RGBA to 8-Digit HEX: The Ultimate Guide to Modern Color Conversion',
      description: 'Explore the complete conversion process from RGBA to 8-digit HEX format (#RRGGBBAA), understand key differences between 8-digit and 16-digit HEX formats, and learn best practices for using transparent colors in modern web design.',
      link: '/blog/rgba-to-hex-8-digit-converter',
      date: '2025-04-27',
      readTime: '15 min read',
      category: 'Color Conversion',
    },
    {
      title: 'Color Wheel Tool: Master Color Theory and Create Perfect Harmonies',
      description: 'Explore our comprehensive guide to using the interactive color wheel tool. Learn about color harmonies, RGB vs RYB color systems, and how to create stunning color combinations for your design projects.',
      link: '/blog/color-wheel-tool',
      date: '2025-03-17',
      readTime: '12 min read',
      category: 'Color Theory',
    },
    {
      title: 'Mixbox Paint Mixer: Revolutionary Digital Painting Color Mixing Technology',
      description: 'Discover how Mixbox technology simulates real pigment mixing to create more natural and vibrant digital painting effects than traditional RGB blending. Learn how Kubelka & Munk theory revolutionizes digital art creation.',
      link: '/blog/mixbox-paint-mixer',
      date: '2025-03-16',
      readTime: '10 min read',
      category: 'Digital Painting',
    },
    {
      title: 'Understanding Color Blindness: A Comprehensive Simulator Guide',
      description: 'Learn about different types of color blindness and how to design accessible content. Our Color Blindness Simulator helps visualize how colors and images appear to people with various types of color vision deficiency.',
      link: '/blog/color-blindness-simulator',
      date: '2025-03-15',
      readTime: '15 min read',
      category: 'Accessibility',
    },
    {
      title: 'RGBA to HEX Color Converter: Complete Guide',
      description: 'A comprehensive guide to converting RGBA colors to hexadecimal format. Learn about color spaces, transparency handling, and practical applications in web development and design.',
      link: '/blog/rgba-to-hex-converter',
      date: '2025-02-11',
      readTime: '8 min read',
      category: 'Color Conversion',
    },
    {
      title: 'RGB to HSL Color Converter: Complete Guide',
      description: 'Explore a comprehensive guide on converting RGB color model to HSL format. Understand the concepts of hue, saturation, and lightness, along with practical applications in web design and conversion algorithms.',
      link: '/blog/rgb-to-hsl-converter',
      date: '2025-02-14',
      readTime: '12 min read',
      category: 'Color Conversion',
    },
    {
      title: 'HEX to RGBA Color Converter: In-Depth Guide',
      description: 'Master hexadecimal to RGBA color conversion with our comprehensive guide. Understand transparency, color theory, and implementation techniques for web development.',
      link: '/blog/hex-to-rgba-converter',
      date: '2025-02-12',
      readTime: '10 min read',
      category: 'Color Conversion',
    },
    {
      title: 'HSL to HEX Color Converter: Complete Guide',
      description: 'Learn how to convert HSL colors to hexadecimal format with our comprehensive guide. Understand color theory, implementation details, and best practices for web development.',
      link: '/blog/hsl-to-hex-converter',
      date: '2025-02-13',
      readTime: '15 min read',
      category: 'Color Conversion',
    },
    {
      title: 'CMYK to HEX Color Converter: Professional Guide',
      description: 'Master CMYK to HEX color conversion with our comprehensive guide. Learn about print-to-web color conversion, Adobe compatibility, and professional implementation techniques.',
      link: '/blog/cmyk-to-hex-converter',
      date: '2025-02-14',
      readTime: '12 min read',
      category: 'Color Conversion',
    },
    {
      title: 'RGB to CMYK Color Converter: Professional Guide',
      description: 'Master RGB to CMYK color conversion with our comprehensive guide. Learn about digital-to-print color conversion, professional software integration, and color management techniques.',
      link: '/blog/rgb-to-cmyk-converter',
      date: '2025-02-15',
      readTime: '15 min read',
      category: 'Color Conversion',
    },
    {
      title: 'CMYK to RGB Converter: Complete Color Code Guide',
      description: 'Master CMYK to RGB conversion with our comprehensive guide. Learn about color codes, Photoshop techniques, Illustrator workflows, and programming implementations in Python and Java.',
      link: '/blog/cmyk-to-rgb-converter',
      date: '2025-02-20',
      readTime: '15 min read',
      category: 'Color Conversion',
    },
    {
      title: "Color Contrast Checker: Essential Tool for Web Accessibility",
      description: "Learn how to use our color contrast checker tool to ensure your web designs meet WCAG accessibility standards. Discover best practices for creating accessible color combinations.",
      link: "/blog/color-contrast-checker",
      date: "2025-02-25",
      readTime: "8 min read",
      category: "Accessibility",
      image: "/images/blog/color-contrast.jpg",
      tags: ["accessibility", "WCAG", "color contrast", "web design", "UI/UX"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <Navigation />

        {/* Blog Header */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                </svg>
              </div>
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Color Tools Blog
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover professional guides, advanced techniques, and expert insights about color conversion tools.
              Master the art of color manipulation with our comprehensive tutorials and reviews.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{blogPosts.length}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Tools Covered</div>
              </div>
            </div>

            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Color Conversion', 'Accessibility', 'Color Theory', 'Digital Painting'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 border border-gray-200 dark:border-gray-700"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {(() => {
          const featuredPost = blogPosts.find(post => post.featured);
          if (!featuredPost) return null;

          return (
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                🌟 Featured Article
              </h2>
              <article className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl shadow-2xl overflow-hidden">
                <Link href={featuredPost.link} className="block">
                  <div className="p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        ⭐ FEATURED
                      </span>
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-xl text-white/90 mb-6 leading-relaxed">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white/80">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors">
                        <span>Read Article</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          );
        })()}

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            📚 All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <Link href={post.link} className="block">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {post.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{post.readTime}</span>
                        </div>

                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                          <span className="text-sm font-medium">Read More</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Color Tools</h2>
            <p className="text-xl mb-8 text-white/90">
              Get the latest articles, tutorials, and tool updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 