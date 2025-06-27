'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function RgbToOklch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Enhanced SEO */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image src="/rgb.svg" alt="RGB to OKLCH JavaScript Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                RGB to OKLCH Converter & Formula - JavaScript Color Transform Tool
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Free online RGB to OKLCH converter tool with JavaScript implementation. Transform RGB (Red Green Blue) colors to OKLCH format using mathematical formulas and algorithms. Features real-time color preview, instant CSS code generation, and complete JavaScript code examples for modern web development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Convert RGB to OKLCH colors with our professional conversion calculator. Includes RGB to OKLCH formula implementation in JavaScript, precise color space transformation algorithms, and CSS Color Level 4 specification support. Perfect for developers seeking reliable RGB to OKLCH JavaScript code and conversion tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">JavaScript Powered</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Online Converter</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">Perceptual Uniformity</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Preview</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Modern CSS</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <iframe 
              src="/tools/rgb-to-oklch-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl mb-8"
              height="700"
              title="RGB to OKLCH Color Converter Tool - Convert RGB colors to OKLCH format with real-time preview"
              loading="lazy"
            />
            
            {/* Enhanced CTA */}
            <div className="text-center my-8">
              <Link 
                href="/tools/rgb-to-oklch-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-lg font-semibold hover:from-green-700 hover:to-blue-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full RGB to OKLCH Converter Tool
              </Link>
            </div>
          </div>

          {/* JavaScript Code Examples Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              RGB to OKLCH Conversion Formula & JavaScript Implementation Guide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Complete guide on RGB to OKLCH color conversion with mathematical formulas, algorithms, and JavaScript code examples. Learn how to implement RGB to OKLCH transformation in your web projects with our detailed technical documentation.
            </p>

            {/* Mathematical Formula Section */}
            <div className="mb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">RGB to OKLCH Conversion Formula</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="mb-4">The RGB to OKLCH conversion process involves multiple steps:</p>
                <ol className="list-decimal list-inside space-y-4">
                  <li><strong>Step 1: Normalize RGB values (0-255) to linear RGB (0-1)</strong>
                    <pre className="bg-gray-900 p-4 rounded-lg mt-2 text-green-400 text-sm overflow-x-auto">
                      <code>{`r' = r / 255
g' = g / 255
b' = b / 255`}</code>
                    </pre>
                  </li>
                  <li><strong>Step 2: Apply sRGB gamma correction</strong>
                    <pre className="bg-gray-900 p-4 rounded-lg mt-2 text-green-400 text-sm overflow-x-auto">
                      <code>{`// For each RGB channel:
if (channel <= 0.04045)
    channel = channel / 12.92
else
    channel = Math.pow((channel + 0.055) / 1.055, 2.4)`}</code>
                    </pre>
                  </li>
                  <li><strong>Step 3: Convert to OKLAB color space</strong>
                    <pre className="bg-gray-900 p-4 rounded-lg mt-2 text-green-400 text-sm overflow-x-auto">
                      <code>{`l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b

l_ = Math.cbrt(l)
m_ = Math.cbrt(m)
s_ = Math.cbrt(s)

L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_
a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_
b = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_`}</code>
                    </pre>
                  </li>
                  <li><strong>Step 4: Convert OKLAB to OKLCH</strong>
                    <pre className="bg-gray-900 p-4 rounded-lg mt-2 text-green-400 text-sm overflow-x-auto">
                      <code>{`L = L // Lightness stays the same
C = Math.sqrt(a * a + b * b) // Chroma
H = Math.atan2(b, a) * 180 / Math.PI // Hue in degrees

// Normalize hue to 0-360 range
if (H < 0) H += 360`}</code>
                    </pre>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 mb-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Complete JavaScript Function</h3>
                <div className="bg-gray-900 dark:bg-gray-800 p-6 rounded-xl overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{`/**
 * Convert RGB color to OKLCH format
 * @param {Object} rgb - RGB color object
 * @param {number} rgb.r - Red (0-255)
 * @param {number} rgb.g - Green (0-255)
 * @param {number} rgb.b - Blue (0-255)
 * @returns {Object} OKLCH color object
 */
function rgbToOklch(rgb) {
  const { r, g, b } = rgb;
  
  // Normalize RGB to 0-1 range
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  
  // Convert to OKLCH via Oklab
  return oklabToOklch(rgbToOklab({
    r: rNorm, g: gNorm, b: bNorm
  }));
}

// Example usage
const rgbColor = { r: 255, g: 0, b: 0 };
const oklchColor = rgbToOklch(rgbColor);
console.log(oklchColor); // { l: 0.628, c: 0.258, h: 29.23 }`}</code>
                  </pre>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Real-time Converter Function</h3>
                <div className="bg-gray-900 dark:bg-gray-800 p-6 rounded-xl overflow-x-auto">
                  <pre className="text-blue-400 text-sm">
                    <code>{`// Real-time RGB to OKLCH converter with validation
class RgbToOklchConverter {
  static convert(r, g, b) {
    // Input validation
    if (r < 0 || r > 255) throw new Error('Red must be 0-255');
    if (g < 0 || g > 255) throw new Error('Green must be 0-255');
    if (b < 0 || b > 255) throw new Error('Blue must be 0-255');
    
    const rgb = { r, g, b };
    return this.rgbToOklch(rgb);
  }
  
  static rgbToOklch(rgb) {
    // Professional conversion algorithm
    return rgbToOklch(rgb);
  }
}

// Usage in web applications
const converter = RgbToOklchConverter;
const oklchResult = converter.convert(255, 128, 64);`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Integration in Modern Web Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">React Component Example</h4>
                  <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-yellow-400 text-sm">
                      <code>{`import { useState } from 'react';

function ColorConverter() {
  const [rgb, setRgb] = useState({
    r: 255, g: 128, b: 64
  });
  
  const oklchColor = rgbToOklch(rgb);
  const oklchString = \`oklch(\${oklchColor.l} \${oklchColor.c} \${oklchColor.h})\`;
  
  return (
    <div style={{ backgroundColor: \`rgb(\${rgb.r}, \${rgb.g}, \${rgb.b})\` }}>
      <input 
        type="range" 
        min="0" max="255"
        value={rgb.r}
        onChange={(e) => setRgb({
          ...rgb, 
          r: parseInt(e.target.value)
        })}
      />
      <p>OKLCH: {oklchString}</p>
    </div>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">CSS Modernization</h4>
                  <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-cyan-400 text-sm">
                      <code>{`/* Traditional RGB to modern OKLCH */
:root {
  /* Legacy RGB values */
  --primary-rgb: rgb(255, 128, 64);
  --secondary-rgb: rgb(64, 128, 255);
  
  /* Modern OKLCH equivalents */
  --primary-oklch: oklch(0.7 0.15 45);
  --secondary-oklch: oklch(0.6 0.2 230);
}

.modern-button {
  /* Use OKLCH for better color manipulation */
  background: var(--primary-oklch);
  color: white;
}

.modern-button:hover {
  /* Easily adjust lightness while preserving hue */
  background: oklch(0.8 0.15 45);
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Benefits Section */}
          <div className="mb-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Why Convert RGB to OKLCH?
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="text-green-600 text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Perceptual Uniformity</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH provides perceptually uniform color space, enabling predictable color adjustments. Converting from RGB to OKLCH unlocks advanced color manipulation capabilities for modern design systems.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Enhanced Color Manipulation</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH enables independent adjustment of lightness, chroma, and hue. This makes color variations, theme generation, and accessibility improvements much more intuitive and predictable.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="text-purple-600 text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Future-Proof Design</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH is part of CSS Color Level 4 specification. Converting RGB to OKLCH prepares your design system for modern browsers and enables wide gamut color displays.
                </p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Professional Use Cases</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modernizing existing RGB-based design systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Creating accessible color palettes with consistent contrast</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dynamic theme generation and color variations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Wide gamut display optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Advanced color manipulation in design tools</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Technical Advantages</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Perceptually uniform lightness adjustments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Independent hue and saturation control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Better color harmony and palette generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improved accessibility and contrast calculations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Future-ready for next-generation displays</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Tools Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Related Color Conversion Tools
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/tools/oklch-to-rgb" className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-green-600 text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-green-600 transition-colors">
                  OKLCH to RGB Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Convert OKLCH colors back to RGB format for universal compatibility and legacy system support.
                </p>
              </Link>
              
              <Link href="/tools/oklch-to-hex" className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-blue-600 text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                  OKLCH to HEX Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transform OKLCH colors to HEX format for traditional web development and design workflows.
                </p>
              </Link>
              
              <Link href="/tools/color-converter" className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-purple-600 text-3xl mb-4">🌈</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors">
                  Universal Color Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Convert between all major color formats including RGB, HEX, HSL, OKLCH, and more.
                </p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Frequently Asked Questions - RGB to OKLCH Conversion
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    How does the RGB to OKLCH formula work?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The RGB to OKLCH conversion formula involves multiple steps: first normalizing RGB values (0-255) to 0-1 range, then applying gamma correction, converting to OKLAB color space using matrix transformations, and finally calculating Lightness, Chroma, and Hue values. Our JavaScript implementation provides precise conversion following these mathematical principles.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    How to implement RGB to OKLCH in JavaScript?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To implement RGB to OKLCH conversion in JavaScript, you&aposll need to follow the mathematical formula using matrix operations and trigonometric functions. Our converter provides a complete JavaScript implementation with input validation, error handling, and optimized calculations for accurate color transformation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    What are the RGB to OKLCH conversion steps?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The conversion process includes: 1) RGB normalization, 2) Gamma correction, 3) RGB to OKLAB transformation using matrix multiplication, and 4) OKLAB to OKLCH conversion using polar coordinates. Each step ensures accurate color representation while maintaining perceptual uniformity.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    Is the RGB to OKLCH converter accurate?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Yes, our RGB to OKLCH converter uses high-precision mathematical formulas and follows the CSS Color Level 4 specification. The implementation uses double-precision floating-point calculations and proper rounding methods to ensure accurate color conversion results.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    What&aposs the JavaScript code for RGB to OKLCH?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our JavaScript code for RGB to OKLCH conversion is available in the implementation guide above. It includes a complete function with input validation, matrix operations, and proper error handling. You can use this code directly in your web projects or integrate it into your color manipulation libraries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    How to optimize RGB to OKLCH conversion performance?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To optimize RGB to OKLCH conversion performance, you can pre-compute matrix operations, use lookup tables for common values, and implement batch processing for multiple colors. Our JavaScript implementation is already optimized for single-color conversions with minimal memory usage.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    Can I convert RGB to OKLCH in CSS?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Yes, modern browsers support direct RGB to OKLCH conversion in CSS using the color() function or oklch() notation. However, for cross-browser compatibility and precise control, using our JavaScript converter ensures consistent results across all platforms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    What are common RGB to OKLCH use cases?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Common use cases include: converting legacy RGB colors to modern OKLCH format, implementing color manipulation algorithms, creating accessible color palettes, developing color picker tools, and building design systems with perceptually uniform color spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}