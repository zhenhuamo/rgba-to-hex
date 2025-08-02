'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();



  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Set mounted state after initial render on client
    setMounted(true);

    window.addEventListener('scroll', handleScroll);
    // Call handleScroll once initially in case the page loads scrolled
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.nav-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);



  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${ 
      mounted && scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Home */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl text-gray-800 dark:text-white transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">CSS</span>
            </div>
            <span>ColorTools</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
            >
              Home
            </Link>
            
            <Link
              href="/blog"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/blog' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
            >
              Blog
            </Link>
            
            {/* Contact link */}
            <a
              href="mailto:mozhenhuamo@gmail.com"
              className="font-medium transition-colors duration-200 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 flex items-center group relative"
              title="If you have any issues or suggestions for improvement, please contact us"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact: mozhenhuamo@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            {/* Spacer to push navigation items to the right */}
            <div className="flex-grow"></div>

            {/* Tools Link */}
            <Link
              href="/tools"
              className={`font-medium transition-colors duration-200 ${
                pathname.startsWith('/tools')
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
            >
              Tools
            </Link>

            {/* Color Shades Link */}
            <Link
              href="/color-shades"
              className={`font-medium transition-colors duration-200 ${
                pathname.startsWith('/color-shades')
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
            >
              Color Shades
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md font-medium ${
                pathname === '/' 
                  ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link
              href="/tools"
              className={`block px-3 py-2 rounded-md font-medium ${
                pathname.startsWith('/tools')
                  ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>

            <Link
              href="/color-shades"
              className={`block px-3 py-2 rounded-md font-medium ${
                pathname.startsWith('/color-shades')
                  ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Color Shades
            </Link>
            
            <Link
              href="/blog"
              className={`block px-3 py-2 rounded-md font-medium ${
                pathname === '/blog' 
                  ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            
            {/* Mobile contact link */}
            <a
              href="mailto:mozhenhuamo@gmail.com"
              className="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <div>
                <div>Contact</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">mozhenhuamo@gmail.com (Suggestions welcome)</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}