import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <Link
                  href="/tools/hex-to-rgba"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>HEX to RGBA</span>
                </Link>
                <Link
                  href="/tools/rgb-to-hsl"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>RGB to HSL</span>
                </Link>
                <Link
                  href="/tools/rgb-to-cmyk"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span>RGB to CMYK</span>
                </Link>
                <Link
                  href="/tools/hsl-to-hex"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span>HSL to HEX</span>
                </Link>
                <Link
                  href="/tools/cmyk-to-hex"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>CMYK to HEX</span>
                </Link>
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