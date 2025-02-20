import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tools = [
    { name: 'HEX to RGBA', href: '/tools/hex-to-rgba', color: 'bg-green-500' },
    { name: 'HSL to HEX', href: '/tools/hsl-to-hex', color: 'bg-orange-500' },
    { name: 'CMYK to HEX', href: '/tools/cmyk-to-hex', color: 'bg-red-500' },
    { name: 'RGB to HSL', href: '/tools/rgb-to-hsl', color: 'bg-purple-500' },
    { name: 'RGB to CMYK', href: '/tools/rgb-to-cmyk', color: 'bg-cyan-500' },
    { name: 'CMYK to RGB', href: '/tools/cmyk-to-rgb', color: 'bg-yellow-500' },
    { name: 'Color Contrast Checker', href: '/tools/color-contrast', color: 'bg-indigo-500' },
  ];

  return (
    <nav className="max-w-2xl mx-auto mb-6">
      <div className="flex justify-center items-center space-x-6">
        <Link
          href="/"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300 font-medium"
        >
          Home
        </Link>
        <div className="relative">
          <button
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300 font-medium"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setIsMenuOpen(true)}
          >
            <span>Tools</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isMenuOpen && (
            <div
              className="absolute w-56 right-0 mt-1 pt-2 pb-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-200"
              style={{
                marginTop: '0.5rem',
                zIndex: 50,
              }}
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => {
                setTimeout(() => setIsMenuOpen(false), 200);
              }}
            >
              <div className="py-1">
                {tools.map((tool, index) => (
                  <Link
                    key={index}
                    href={tool.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <span className={`w-2 h-2 rounded-full ${tool.color}`}></span>
                    <span>{tool.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <Link
          href="/blog"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300 font-medium"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
} 