import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 将工具进行分类
  const toolCategories = [
    {
      category: "color conversion",
      tools: [
        { name: 'RGBA to 8-Digit HEX', href: '/tools/rgba-to-hex-8-digit', color: 'bg-blue-500' },
        { name: 'HEX to RGBA', href: '/tools/hex-to-rgba', color: 'bg-green-500' },
        { name: 'HSL to HEX', href: '/tools/hsl-to-hex', color: 'bg-orange-500' },
        { name: 'CMYK to HEX', href: '/tools/cmyk-to-hex', color: 'bg-red-500' },
        { name: 'RGB to HSL', href: '/tools/rgb-to-hsl', color: 'bg-purple-500' },
        { name: 'RGB to CMYK', href: '/tools/rgb-to-cmyk', color: 'bg-cyan-500' },
        { name: 'CMYK to RGB', href: '/tools/cmyk-to-rgb', color: 'bg-yellow-500' },
      ]
    },
    {
      category: "color tools",
      tools: [
        { name: 'Color Wheel', href: '/tools/color-wheel', color: 'bg-amber-500' },
        { name: 'Color Picker', href: '/tools/color-picker-embed', color: 'bg-lime-600' },
        { name: 'Color Contrast Checker', href: '/tools/color-contrast', color: 'bg-indigo-500' },
        { name: 'Color Palette', href: '/tools/palette-generator', color: 'bg-pink-500' },
        { name: 'Gradient Generator', href: '/tools/gradient-generator', color: 'bg-blue-500' },
        { name: 'Color Blindness Simulator', href: '/tools/color-blindness-simulator', color: 'bg-teal-500' },
        { name: 'Image Color Extractor', href: '/tools/image-color-extractor', color: 'bg-rose-500' },
        { name: 'Color Mixer', href: '/tools/color-mixer', color: 'bg-emerald-500' },
        { name: 'Mixbox Paint Mixer', href: '/tools/mixer-painter', color: 'bg-violet-500' }
      ]
    },
    {
      category: "image tools",
      tools: [
        { name: 'Image Crop Tool', href: '/tools/image-crop-landing', color: 'bg-blue-600' },
      ]
    },
    {
      category: "text tools",
      tools: [
        { name: 'Font Generator', href: '/tools/font-generator', color: 'bg-purple-500' }
      ]
    }
  ];

  // 获取所有工具的平面列表（用于移动端显示）
  // const tools = toolCategories.flatMap(category => category.tools);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
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
            
            {/* 联系我们链接 */}
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
            
            {/* 空白占位，让Tools项移到最右侧 */}
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
                  className="absolute mt-2 py-3 px-3 w-[520px] bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-200"
                  style={{ left: '50%', right: 'auto', transform: 'translateX(-50%)' }}
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => {
                    setTimeout(() => setIsMenuOpen(false), 100);
                  }}
                >
                  {toolCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-3 last:mb-0">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1 px-2">{category.category}</h3>
                      <div className="py-1 grid grid-cols-2 gap-1">
                        {category.tools.map((tool, index) => (
                          <Link
                            key={index}
                            href={tool.href}
                            className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                              pathname === tool.href 
                                ? 'bg-blue-50 dark:bg-gray-700/70 text-blue-600 dark:text-blue-400' 
                                : 'text-gray-700 dark:text-gray-200'
                            }`}
                          >
                            <span className={`w-3 h-3 rounded-full ${tool.color} shadow-sm flex-shrink-0`}></span>
                            <span className="font-medium">{tool.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
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
              {toolCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-2 last:mb-0">
                  <div className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">{category.category}</div>
                  <div className="grid grid-cols-2 gap-1">
                    {category.tools.map((tool, index) => (
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
                        <span className="text-sm">{tool.name}</span>
                      </Link>
                    ))}
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
            
            {/* 移动版联系我们链接 */}
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