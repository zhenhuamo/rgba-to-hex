'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Tool categories with subcategories for better organization
  const toolCategories = [
    {
      category: "color conversion",
      tools: [
        // RGB/RGBA based
        { name: 'RGBA to 8-Digit HEX', href: '/tools/rgba-to-hex-8-digit', color: 'bg-blue-500' },
        { name: 'RGBA to RGB', href: '/tools/rgba-to-rgb', color: 'bg-violet-500' },
        { name: 'RGB to HEX', href: '/tools/rgb-to-hex', color: 'bg-lime-500' },
        { name: 'RGB to HSL', href: '/tools/rgb-to-hsl', color: 'bg-purple-500' },
        { name: 'RGB to HSV', href: '/tools/rgb-to-hsv', color: 'bg-teal-500' },
        { name: 'RGB to CMYK', href: '/tools/rgb-to-cmyk', color: 'bg-cyan-500' },
        { name: 'RGB to LAB', href: '/tools/rgb-to-lab', color: 'bg-rose-500' },
        { name: 'RGB to OKLCH', href: '/tools/rgb-to-oklch', color: 'bg-pink-600' },
        { name: 'XYZ to RGB', href: '/tools/xyz-to-rgb', color: 'bg-blue-700' },
        { name: 'XYZ to LAB', href: '/tools/xyz-to-lab', color: 'bg-purple-700' },
        { name: 'XYZ to UV', href: '/tools/xyz-to-uv', color: 'bg-teal-700' },
        { name: 'UV to XYZ', href: '/tools/uv-to-xyz', color: 'bg-cyan-700' },
        { name: 'LAB to XYZ', href: '/tools/lab-to-xyz', color: 'bg-indigo-700' },
        
        // HEX based
        { name: 'HEX to RGBA', href: '/tools/hex-to-rgba', color: 'bg-green-500' },
        { name: 'HEX to HSL', href: '/tools/hex-to-hsl', color: 'bg-amber-500' },
        { name: 'HEX to CMYK', href: '/tools/hex-to-cmyk', color: 'bg-emerald-500' },
        
        // HSL based
        { name: 'HSL to HEX', href: '/tools/hsl-to-hex', color: 'bg-orange-500' },
        { name: 'HSL to RGB', href: '/tools/hsl-to-rgb', color: 'bg-pink-500' },
        { name: 'HSL to RGBA', href: '/tools/hsl-to-rgba', color: 'bg-purple-500' },
        { name: 'HSL to CMYK', href: '/tools/hsl-to-cmyk', color: 'bg-indigo-500' },
        { name: 'HSL to OKLCH', href: '/tools/hsl-to-oklch', color: 'bg-purple-600' },
        
        // OKLCH based
        { name: 'OKLCH to HEX', href: '/tools/oklch-to-hex', color: 'bg-indigo-600' },
        { name: 'OKLCH to RGB', href: '/tools/oklch-to-rgb', color: 'bg-blue-600' },
        { name: 'OKLCH to HSL', href: '/tools/oklch-to-hsl', color: 'bg-purple-600' },
        { name: 'OKLCH to HSV', href: '/tools/oklch-to-hsv', color: 'bg-teal-600' },
        { name: 'OKLCH to CMYK', href: '/tools/oklch-to-cmyk', color: 'bg-cyan-600' },
        { name: 'OKLCH to OKLAB', href: '/tools/oklch-to-oklab', color: 'bg-pink-600' },
        { name: 'OKLAB to OKLCH', href: '/tools/oklab-to-oklch', color: 'bg-rose-600' },
        
        // HSV based
        { name: 'HSV to RGB', href: '/tools/hsv-to-rgb', color: 'bg-indigo-500' },
        { name: 'HSV to RGBA', href: '/tools/hsv-to-rgba', color: 'bg-purple-500' },
        { name: 'HSV to HEX', href: '/tools/hsv-to-hex', color: 'bg-sky-500' },
        { name: 'HSV to OKLCH', href: '/tools/hsv-to-oklch', color: 'bg-emerald-600' },
        { name: 'HSV to HSL (and vice-versa)', href: '/tools/hsv-hsl', color: 'bg-fuchsia-500' },
        
        // CMYK based
        { name: 'CMYK to HEX', href: '/tools/cmyk-to-hex', color: 'bg-red-500' },
        { name: 'CMYK to RGB', href: '/tools/cmyk-to-rgb', color: 'bg-yellow-500' },
        { name: 'CMYK to RGBA', href: '/tools/cmyk-to-rgba', color: 'bg-red-600' },
        { name: 'CMYK to OKLCH', href: '/tools/cmyk-to-oklch', color: 'bg-purple-700' },
      ]
    },
    {
      category: "color tools",
      tools: [
        { name: 'EyeDropper Tool', href: '/tools/eyedropper-tool', color: 'bg-red-500' },
        { name: 'Color Name Finder', href: '/tools/color-name', color: 'bg-cyan-600' },
        { name: 'Color Wheel', href: '/tools/color-wheel', color: 'bg-amber-500' },
        { name: 'Color Picker', href: '/tools/color-picker-embed', color: 'bg-lime-600' },
        { name: 'Color Temperature', href: '/tools/color-temperature', color: 'bg-orange-600' },
        { name: 'Color Contrast Checker', href: '/tools/color-contrast', color: 'bg-indigo-500' },
        { name: 'Color Harmony Generator', href: '/tools/color-harmony', color: 'bg-purple-600' },
        { name: 'Delta-E Calculator', href: '/tools/delta-e-calculator', color: 'bg-blue-600' },
        { name: 'Color Palette', href: '/tools/palette-generator', color: 'bg-pink-500' },
        { name: 'Gradient Generator', href: '/tools/gradient-generator', color: 'bg-blue-500' },
        { name: 'Color Blindness Simulator', href: '/tools/color-blindness-simulator', color: 'bg-teal-500' },
        { name: 'Image Color Extractor', href: '/tools/image-color-extractor', color: 'bg-rose-500' },
        { name: 'Color Mixer', href: '/tools/color-mixer', color: 'bg-emerald-500' },
        { name: 'Mixbox Paint Mixer', href: '/tools/mixer-painter', color: 'bg-violet-500' },
        { name: 'Shades of Blue', href: '/color-shades/shades-of-blue', color: 'bg-blue-600' },
        { name: 'Shades of Green', href: '/color-shades/shades-of-green', color: 'bg-green-600' }
      ]
    },
    {
      category: "number tools",
      tools: [
        { name: 'HEX to Decimal', href: '/tools/hex-to-decimal', color: 'bg-blue-600' },
        { name: 'HEX to Binary', href: '/tools/hex-to-binary', color: 'bg-green-600' },
        { name: 'Binary to Decimal', href: '/tools/binary-to-decimal', color: 'bg-purple-600' },
        { name: 'Decimal to Binary', href: '/tools/decimal-to-binary', color: 'bg-indigo-600' },
        { name: 'Octal Converter', href: '/tools/octal-converter', color: 'bg-orange-600' }
      ]
    },
    {
      category: "image tools",
      tools: [
        { name: 'Image Blur Tool', href: '/tools/image-blur', color: 'bg-indigo-600' },
        { name: 'Image Crop Tool', href: '/tools/image-crop-landing', color: 'bg-blue-600' },
        { name: 'Image Inverter (EN)', href: '/tools/en/invert-image', color: 'bg-purple-600' },
        { name: 'Invertir Imagen (ES)', href: '/tools/es/invertir-imagen', color: 'bg-red-600' },
        { name: 'Inverter Imagem (PT)', href: '/tools/pt/inverter-imagem', color: 'bg-green-600' },
      ]
    },
    {
      category: "text tools",
      tools: [
        { name: 'Text to Handwriting Guide', href: '/tools/text-to-handwriting', color: 'bg-violet-500' },
        { name: 'Font Generator', href: '/tools/font-generator', color: 'bg-purple-500' },
        { name: 'Text to Binary', href: '/tools/text-to-binary', color: 'bg-blue-500' },
        { name: 'Binary to Text', href: '/tools/binary-to-text', color: 'bg-green-500' }
      ]
    }
  ];

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

  // Get column count based on tool count
  const getColumnCount = (toolCount: number) => {
    if (toolCount > 12) return 3;
    if (toolCount > 6) return 2;
    return 1;
  };

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
            
            {/* Spacer to push Tools to the right */}
            <div className="flex-grow"></div>
            
            {/* Tools Dropdown */}
            <div className="relative nav-menu-container">
              <button
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  pathname.startsWith('/tools') 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
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
                  className="absolute mt-2 py-3 px-3 w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-200 overflow-y-auto max-h-[calc(100vh-120px)]"
                  style={{ left: '50%', right: 'auto', transform: 'translateX(-80%)' }}
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => {
                    setTimeout(() => setIsMenuOpen(false), 100);
                  }}
                >
                  {toolCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-3 last:mb-0">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1 px-2 capitalize">{category.category}</h3>
                      <div className={`py-1 grid grid-cols-${getColumnCount(category.tools.length)} gap-1`}>
                        {category.tools.map((tool, index) => (
                          <Link
                            key={index}
                            href={tool.href}
                            className={`flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                              pathname === tool.href 
                                ? 'bg-blue-50 dark:bg-gray-700/70 text-blue-600 dark:text-blue-400' 
                                : 'text-gray-700 dark:text-gray-200'
                            }`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full ${tool.color} shadow-sm flex-shrink-0`}></span>
                            <span className="font-medium text-sm truncate">{tool.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* Tools index link */}
                  <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <Link 
                      href="/tools"
                      className="block text-center py-1.5 px-3 font-medium text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-sm"
                    >
                      View All Tools
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
            
            <div className="border-t border-gray-100 dark:border-gray-700 pt-2">
              <div className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Tools
              </div>
              
              {/* Tools index link for mobile */}
              <Link
                href="/tools"
                className="flex items-center px-3 py-2 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span className="font-medium">View All Tools</span>
              </Link>
              
              {toolCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-2 last:mb-0">
                  <div className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 capitalize">{category.category}</div>
                  <div className="grid grid-cols-2 gap-1">
                    {category.tools.slice(0, 6).map((tool, index) => (
                      <Link
                        key={index}
                        href={tool.href}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                          pathname === tool.href 
                            ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400' 
                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className={`w-2 h-2 rounded-full ${tool.color}`}></span>
                        <span className="text-sm truncate">{tool.name}</span>
                      </Link>
                    ))}
                    {category.tools.length > 6 && (
                      <Link
                        href="/tools"
                        className="flex items-center justify-center px-3 py-2 rounded-md text-gray-500 dark:text-gray-400 italic text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        +{category.tools.length - 6} more...
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
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