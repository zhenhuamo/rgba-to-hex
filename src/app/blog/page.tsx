'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Blog() {
  const blogPosts = [
    {
      title: 'RGBA to 8-Digit HEX: The Ultimate Guide to Modern Color Conversion',
      description: 'Explore the complete conversion process from RGBA to 8-digit HEX format (#RRGGBBAA), understand key differences between 8-digit and 16-digit HEX formats, and learn best practices for using transparent colors in modern web design.',
      link: '/blog/rgba-to-hex-8-digit-converter',
      date: '2024-04-27',
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
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
              Color Converter Tools Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              In-depth guides and tutorials about color conversion tools and techniques
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-transform hover:scale-[1.02]"
              >
                <Link 
                  href={post.link}
                  className="block"
                  prefetch={true}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        {post.title}
                      </h2>
                      <div className="text-right">
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">
                          {post.date}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {post.description}
                    </p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <span>Read Full Article</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 