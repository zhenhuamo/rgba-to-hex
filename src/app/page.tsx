'use client';

import { useState } from 'react';
import Image from 'next/image';
import ColorInput from '@/components/ColorInput';
import ColorPreview from '@/components/ColorPreview';
import { rgbaToHex, isValidRgba } from '@/utils/colorConverter';
import Link from 'next/link';

export default function Home() {
  const [rgba, setRgba] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (key: keyof typeof rgba) => (value: number) => {
    const newRgba = { ...rgba, [key]: value };
    if (isValidRgba(newRgba)) {
      setRgba(newRgba);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(rgbaToHex(rgba));
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <nav className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-center items-center space-x-6">
            <Link 
              href="/" 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium px-4 py-2"
            >
              RGBA to HEX
            </Link>
            <div className="relative">
              <button 
                className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onMouseEnter={() => setIsMenuOpen(true)}
              >
                <span>More Tools</span>
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
                    // 添加延迟，让用户有足够时间移动到菜单项
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Original Tool Section */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Title section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image 
                src="/rgb.svg" 
                alt="RGBA to HEX Converter Logo" 
                width={40}
                height={40}
                priority
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                RGBA to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Easily convert RGBA color values to hexadecimal color codes
            </p>
          </div>

          {/* Color preview and control area */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 space-y-6 mb-6">
            {/* Color preview */}
            <div className="h-32 rounded-xl shadow-inner transition-colors duration-200 relative overflow-hidden"
              style={{
                backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
              }}
            >
              {/* Checkerboard background */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-4">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      (Math.floor(i / 8) + (i % 8)) % 2 === 0
                        ? 'bg-gray-200'
                        : 'bg-white'
                    } opacity-50`}
                  />
                ))}
              </div>
            </div>

            {/* RGBA input controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ColorInput
                label="Red (R)"
                value={rgba.r}
                onChange={handleChange('r')}
                min={0}
                max={255}
              />
              <ColorInput
                label="Green (G)"
                value={rgba.g}
                onChange={handleChange('g')}
                min={0}
                max={255}
              />
              <ColorInput
                label="Blue (B)"
                value={rgba.b}
                onChange={handleChange('b')}
                min={0}
                max={255}
              />
              <ColorInput
                label="Alpha (A)"
                value={rgba.a}
                onChange={handleChange('a')}
                min={0}
                max={1}
                step={0.01}
              />
            </div>
          </div>

          {/* Color preview component */}
          <ColorPreview
            rgba={rgba}
            hexColor={rgbaToHex(rgba)}
            onCopy={copyToClipboard}
          />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-700 pt-16">
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">About RGBA to HEX Converter</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our RGBA to HEX converter is a professional online tool designed for web developers, designers, and digital artists. 
              It provides instant conversion between RGBA color values and hexadecimal color codes, with additional features like 
              real-time preview, professional color schemes, and accessibility analysis.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Real-time color preview and conversion</li>
                <li>• Support for alpha channel transparency</li>
                <li>• Professional color scheme suggestions</li>
                <li>• WCAG 2.0 accessibility compliance check</li>
                <li>• Multiple color format support (HEX, RGBA, HSL)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Web development and CSS styling</li>
                <li>• UI/UX design projects</li>
                <li>• Digital marketing materials</li>
                <li>• Mobile app development</li>
                <li>• Brand color management</li>
              </ul>
            </div>
          </div>

          {/* Advanced Features Section */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Advanced Features</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3">Professional Color Schemes</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Generate complementary colors</li>
                  <li>• Create monochromatic palettes</li>
                  <li>• Explore analogous color combinations</li>
                  <li>• Get color harmony suggestions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Accessibility Tools</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• WCAG 2.0 contrast ratio checker</li>
                  <li>• Readability analysis</li>
                  <li>• Color blindness simulation</li>
                  <li>• Accessibility compliance reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Advantages */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Technical Advantages</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3">Performance</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• High-precision conversion algorithms</li>
                  <li>• Zero-delay real-time updates</li>
                  <li>• Optimized for all modern browsers</li>
                  <li>• Responsive on all devices</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">User Experience</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Intuitive interface design</li>
                  <li>• Professional color management</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• Mobile-first approach</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section with More Questions */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">What is RGBA color format?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  RGBA is a color model that uses Red, Green, and Blue channels (0-255) with an Alpha channel (0-1) for transparency. 
                  It&apos;s commonly used in web development and digital design for creating colors with opacity.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Why convert RGBA to HEX?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX color codes are widely used in CSS and web design. Converting from RGBA to HEX ensures compatibility 
                  across different platforms and maintains consistent color representation in your projects.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Can I save my favorite colors?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  While we don&apos;t currently offer color saving, you can easily copy color codes in multiple formats (HEX, RGBA, HSL) 
                  and save them in your preferred location. We&apos;re working on adding a color palette feature in future updates.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Is this tool free to use?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, our RGBA to HEX converter is completely free to use. All features, including professional color schemes 
                  and accessibility analysis, are available without any cost or registration.
                </p>
              </div>
            </div>
          </div>

          {/* Usage Tips */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Usage Tips</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>• Use modern browsers like Chrome, Firefox, or Safari for the best experience</p>
              <p>• Bookmark our tool for quick access to color conversion needs</p>
              <p>• Utilize the professional color schemes for design inspiration</p>
              <p>• Check accessibility compliance before finalizing colors</p>
              <p>• Take advantage of our real-time preview to verify colors visually</p>
              <p>• Use keyboard shortcuts for faster color value adjustments</p>
            </div>
          </div>

          {/* Detailed How-To Guide */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-semibold mb-6">How to Use RGBA to HEX Converter</h3>
            
            {/* Basic Usage */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Basic Color Conversion</h4>
              <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-300">
                <li className="pl-2">
                  <span className="font-medium">Adjust RGBA Values:</span>
                  <ul className="pl-8 mt-2 space-y-2">
                    <li>• Use the Red (R) slider to set red value (0-255)</li>
                    <li>• Use the Green (G) slider to set green value (0-255)</li>
                    <li>• Use the Blue (B) slider to set blue value (0-255)</li>
                    <li>• Use the Alpha (A) slider to set transparency (0-1)</li>
                  </ul>
                </li>
                <li className="pl-2">
                  <span className="font-medium">View Color Preview:</span>
                  <ul className="pl-8 mt-2 space-y-2">
                    <li>• See real-time color changes in the preview box</li>
                    <li>• Checkerboard pattern shows transparency effects</li>
                  </ul>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Get Color Codes:</span>
                  <ul className="pl-8 mt-2 space-y-2">
                    <li>• HEX code is displayed automatically</li>
                    <li>• Click the copy button to copy the code</li>
                    <li>• Also available in RGBA and HSL formats</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Advanced Features */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Using Advanced Features</h4>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <p className="font-medium mb-2">Professional Color Schemes:</p>
                  <ul className="pl-6 space-y-2">
                    <li>• View complementary colors for your selected color</li>
                    <li>• Explore monochromatic variations</li>
                    <li>• Copy any color scheme variation with one click</li>
                    <li>• Use suggested colors for design harmony</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Accessibility Checking:</p>
                  <ul className="pl-6 space-y-2">
                    <li>• Check contrast ratios against white and black backgrounds</li>
                    <li>• Verify WCAG 2.0 compliance for normal and large text</li>
                    <li>• Review accessibility recommendations</li>
                    <li>• Ensure your colors meet web accessibility standards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tips for Best Results */}
            <div>
              <h4 className="text-lg font-medium mb-4">Tips for Best Results</h4>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
                <div>
                  <p className="font-medium mb-2">For Web Development:</p>
                  <ul className="pl-6 space-y-2">
                    <li>• Use HEX codes for consistent browser support</li>
                    <li>• Consider RGBA when opacity is needed</li>
                    <li>• Test colors in both light and dark modes</li>
                    <li>• Verify contrast for text readability</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">For Design Work:</p>
                  <ul className="pl-6 space-y-2">
                    <li>• Explore complementary color combinations</li>
                    <li>• Use monochromatic schemes for subtle variations</li>
                    <li>• Check accessibility for inclusive design</li>
                    <li>• Save commonly used colors for consistency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
