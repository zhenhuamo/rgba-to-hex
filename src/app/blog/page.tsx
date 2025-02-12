'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Blog() {
  const blogPosts = [
    {
      title: 'RGBA to HEX Color Converter: Complete Guide',
      description: 'A comprehensive guide to converting RGBA colors to hexadecimal format. Learn about color spaces, transparency handling, and practical applications in web development and design.',
      link: '/blog/rgba-to-hex-converter',
      date: '2024-02-11',
      readTime: '8 min read',
      category: 'Color Conversion',
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
                <Link href={post.link}>
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