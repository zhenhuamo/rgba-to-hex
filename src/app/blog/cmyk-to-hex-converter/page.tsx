'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CmykToHexBlog() {
  useEffect(() => {
    // 处理页内导航
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // 初始加载时处理hash
    handleScroll();

    // 监听hash变化
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="max-w-4xl mx-auto">
          {/* SEO Meta Section */}
          <div className="hidden">
            <h1>CMYK to HEX Color Converter - Convert CMYK Colors to Hexadecimal</h1>
            <h2>Online CMYK to HEX Color Converter with Professional Print Support</h2>
            <p>
              Free online CMYK to HEX converter tool. Convert CMYK (Cyan, Magenta, Yellow, Key) colors to HEX format. 
              Perfect for print design to web conversion. Professional color management system included.
            </p>
          </div>

          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="mb-6">
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              Complete Guide to CMYK to HEX Color Conversion
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
              <span>February 13, 2024</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Color Conversion</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <p className="lead">
              Converting CMYK colors to HEX format is essential when transitioning from print design to web development. 
              Our CMYK to HEX converter provides accurate color conversion with professional-grade color management. 
              This comprehensive guide covers everything from basic conversion concepts to advanced implementation techniques.
            </p>

            {/* Quick Navigation */}
            <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#javascript-implementation" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    • JavaScript CMYK to HEX Implementation
                  </a>
                </li>
                <li>
                  <a href="#typescript-implementation" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    • TypeScript CMYK to HEX Implementation
                  </a>
                </li>
                <li>
                  <a href="#react-implementation" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    • React CMYK to HEX Component
                  </a>
                </li>
                <li>
                  <a href="#npm-implementation" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    • NPM Package for CMYK to HEX
                  </a>
                </li>
                <li>
                  <a href="#algorithm-optimization" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    • Optimized CMYK to HEX Algorithm
                  </a>
                </li>
              </ul>
            </div>

            {/* Tool Link */}
            <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Try Our CMYK to HEX Converter</h2>
              <p className="mb-4">
                Convert any CMYK color to HEX format instantly. Perfect for print to web color conversion.
              </p>
              <Link
                href="/tools/cmyk-to-hex"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open CMYK to HEX Converter
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
              </Link>
            </div>

            {/* Understanding Color Spaces */}
            <h2>Understanding CMYK and HEX Color Spaces</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">CMYK Color Space</h3>
              <p className="mb-4">
                CMYK is a subtractive color model used in color printing. It consists of four components:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Cyan (C)</strong>: Primary printing color (0-100%)</li>
                <li>• <strong>Magenta (M)</strong>: Primary printing color (0-100%)</li>
                <li>• <strong>Yellow (Y)</strong>: Primary printing color (0-100%)</li>
                <li>• <strong>Key/Black (K)</strong>: Black component (0-100%)</li>
              </ul>
              <div className="mt-6">
                <h4 className="font-medium mb-2">Common CMYK Values:</h4>
                <ul className="space-y-2">
                  <li>Red: C:0%, M:100%, Y:100%, K:0%</li>
                  <li>Green: C:100%, M:0%, Y:100%, K:0%</li>
                  <li>Blue: C:100%, M:100%, Y:0%, K:0%</li>
                  <li>Black: C:0%, M:0%, Y:0%, K:100%</li>
                  <li>White: C:0%, M:0%, Y:0%, K:0%</li>
                </ul>
              </div>
            </div>

            {/* Conversion Process */}
            <h2>CMYK to HEX Conversion Process</h2>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Step-by-Step Conversion</h3>
              <ol className="space-y-4">
                <li>
                  <strong>1. Convert CMYK to RGB</strong>
                  <p>First, we need to convert CMYK values to RGB format</p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`function cmykToRgb(c, m, y, k) {
  // Normalize values to 0-1 range
  c = c / 100;
  m = m / 100;
  y = y / 100;
  k = k / 100;

  // Convert to RGB
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  return { r, g, b };
}`}</code></pre>
                </li>
                <li>
                  <strong>2. Convert RGB to HEX</strong>
                  <p>Then convert RGB values to hexadecimal format</p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`function rgbToHex({ r, g, b }) {
  const toHex = (n) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return '#' + toHex(r) + toHex(g) + toHex(b);
}`}</code></pre>
                </li>
              </ol>
            </div>

            {/* Complete Implementation */}
            <h2>Complete Implementation</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">TypeScript Implementation</h3>
              <pre className="language-typescript"><code>{`interface CMYK {
  c: number; // Cyan (0-100)
  m: number; // Magenta (0-100)
  y: number; // Yellow (0-100)
  k: number; // Key/Black (0-100)
}

class ColorConverter {
  static cmykToRgb(cmyk: CMYK) {
    const { c, m, y, k } = cmyk;
    
    // Normalize values to 0-1 range
    const cyan = c / 100;
    const magenta = m / 100;
    const yellow = y / 100;
    const key = k / 100;

    // Convert CMYK to RGB
    const r = Math.round(255 * (1 - cyan) * (1 - key));
    const g = Math.round(255 * (1 - magenta) * (1 - key));
    const b = Math.round(255 * (1 - yellow) * (1 - key));

    return { r, g, b };
  }

  static rgbToHex(rgb: { r: number; g: number; b: number }) {
    const toHex = (n: number) => {
      const hex = n.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return '#' + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b);
  }

  static cmykToHex(cmyk: CMYK) {
    const rgb = this.cmykToRgb(cmyk);
    return this.rgbToHex(rgb);
  }
}

// Usage examples
console.log(ColorConverter.cmykToHex({ c: 0, m: 100, y: 100, k: 0 }));   // #FF0000 (Red)
console.log(ColorConverter.cmykToHex({ c: 100, m: 0, y: 100, k: 0 }));   // #00FF00 (Green)
console.log(ColorConverter.cmykToHex({ c: 100, m: 100, y: 0, k: 0 }));   // #0000FF (Blue)
console.log(ColorConverter.cmykToHex({ c: 0, m: 0, y: 0, k: 100 }));     // #000000 (Black)
console.log(ColorConverter.cmykToHex({ c: 0, m: 0, y: 0, k: 0 }));       // #FFFFFF (White)`}</code></pre>
            </div>

            {/* Color Theory and Applications */}
            <h2>Color Theory and Practical Applications</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Advantages of CMYK</h3>
                <ul className="space-y-2">
                  <li>• Industry standard for printing</li>
                  <li>• Precise color control</li>
                  <li>• Better black reproduction</li>
                  <li>• Professional print quality</li>
                  <li>• Color separation ready</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                <ul className="space-y-2">
                  <li>• Print to web conversion</li>
                  <li>• Digital publishing</li>
                  <li>• Cross-media projects</li>
                  <li>• Brand color management</li>
                  <li>• Professional printing</li>
                </ul>
              </div>
            </div>

            {/* Best Practices */}
            <h2>Best Practices and Tips</h2>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <ul className="space-y-4">
                <li>
                  <strong>Input Validation</strong>
                  <p>Always validate CMYK values:</p>
                  <ul className="ml-6 mt-2">
                    <li>• All values: 0-100%</li>
                    <li>• Handle decimal precision</li>
                    <li>• Validate input types</li>
                  </ul>
                </li>
                <li>
                  <strong>Color Management</strong>
                  <p>Consider color profiles and gamut mapping</p>
                </li>
                <li>
                  <strong>Error Handling</strong>
                  <p>Implement robust error handling for invalid inputs</p>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <h2>Conclusion</h2>
            <p>
              Understanding and implementing CMYK to HEX color conversion is crucial for bridging the gap between print 
              and digital design. Whether you&apos;re a web developer working with print designers or a print professional 
              moving into digital design, this guide provides the foundation for accurate and efficient color conversion 
              between CMYK and HEX color spaces.
            </p>

            {/* Call to Action */}
            <div className="my-12 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">Start Converting Colors Now</h2>
              <p className="mb-6">
                Try our free online CMYK to HEX converter tool. Get instant conversions with 
                real-time preview and professional color management.
              </p>
              <Link
                href="/tools/cmyk-to-hex"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Open CMYK to HEX Converter
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
              </Link>
            </div>

            {/* CMYK to HEX Conversion Guide */}
            <h2>CMYK to HEX Color Conversion: Complete Guide</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Understanding CMYK to HEX Conversion</h3>
              <p className="mb-4">
                The CMYK to HEX converter is an essential tool for converting print colors to web-safe formats. 
                Our CMYK to HEX color converter provides accurate conversion between CMYK color values and hexadecimal color codes.
              </p>
              
              <h4 className="font-medium mb-2">Key Features of CMYK to HEX Conversion:</h4>
              <ul className="space-y-2">
                <li>• Precise CMYK to HEX color conversion</li>
                <li>• Support for CMYK to HEX RGB intermediate conversion</li>
                <li>• Professional CMYK to HEX color picker interface</li>
                <li>• Adobe-compatible CMYK to HEX conversion</li>
                <li>• Accurate CMYK to HEX value mapping</li>
              </ul>
            </div>

            {/* CMYK to HEX Color Formula */}
            <h2>CMYK to HEX Color Formula and Conversion Process</h2>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Converting CMYK Colors to HEX Format</h3>
              <p className="mb-4">
                The CMYK to HEX conversion formula involves multiple steps to ensure accurate color representation:
              </p>
              <ol className="space-y-4">
                <li>
                  <strong>1. CMYK Value Normalization</strong>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`// Convert CMYK percentages to decimals
const c = cyan / 100;
const m = magenta / 100;
const y = yellow / 100;
const k = key / 100;`}</code></pre>
                </li>
                <li>
                  <strong>2. CMYK to RGB Conversion</strong>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`// Convert to RGB values
const r = 255 * (1 - c) * (1 - k);
const g = 255 * (1 - m) * (1 - k);
const b = 255 * (1 - y) * (1 - k);`}</code></pre>
                </li>
                <li>
                  <strong>3. RGB to HEX Conversion</strong>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`// Convert to HEX
const hex = '#' + 
  Math.round(r).toString(16).padStart(2, '0') +
  Math.round(g).toString(16).padStart(2, '0') +
  Math.round(b).toString(16).padStart(2, '0');`}</code></pre>
                </li>
              </ol>
            </div>

            {/* CMYK to HEX Color Picker Implementation */}
            <h2>Professional CMYK to HEX Color Picker</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Interactive CMYK to HEX Converter</h3>
              <p className="mb-4">
                Our CMYK to HEX color picker provides a professional interface for converting CMYK colors to hexadecimal format:
              </p>
              <ul className="space-y-2">
                <li>• Real-time CMYK to HEX conversion</li>
                <li>• Adobe-compatible color values</li>
                <li>• Professional color management</li>
                <li>• Print-to-web color accuracy</li>
              </ul>
            </div>

            {/* CMYK to HEX Value Examples */}
            <h2>Common CMYK to HEX Color Values</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">CMYK to HEX Color Examples</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Basic Colors:</h4>
                  <ul className="space-y-2">
                    <li>• Red: CMYK(0,100,100,0) → HEX #FF0000</li>
                    <li>• Green: CMYK(100,0,100,0) → HEX #00FF00</li>
                    <li>• Blue: CMYK(100,100,0,0) → HEX #0000FF</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Print Colors:</h4>
                  <ul className="space-y-2">
                    <li>• Process Black: CMYK(0,0,0,100) → HEX #000000</li>
                    <li>• Rich Black: CMYK(60,40,40,100) → HEX #000000</li>
                    <li>• Registration: CMYK(100,100,100,100) → HEX #000000</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CMYK to HEX Color Conversion Tips */}
            <h2>Professional CMYK to HEX Conversion Tips</h2>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Best Practices for CMYK to HEX Conversion</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Color Accuracy</strong>
                  <p>Ensure precise CMYK to HEX color conversion using professional tools</p>
                </li>
                <li>
                  <strong>Color Management</strong>
                  <p>Use color profiles for accurate CMYK to HEX RGB conversion</p>
                </li>
                <li>
                  <strong>Print Considerations</strong>
                  <p>Consider gamut differences when converting CMYK print colors to HEX web colors</p>
                </li>
              </ul>
            </div>

            {/* CMYK to HEX Adobe Compatibility */}
            <h2>CMYK to HEX Adobe Compatibility</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Adobe-Compatible CMYK to HEX Conversion</h3>
              <p className="mb-4">
                Our CMYK to HEX converter ensures compatibility with Adobe Creative Suite:
              </p>
              <ul className="space-y-2">
                <li>• Photoshop CMYK to HEX conversion</li>
                <li>• Illustrator CMYK color values</li>
                <li>• InDesign color management</li>
                <li>• Creative Cloud integration</li>
              </ul>
            </div>

            {/* JavaScript Implementation */}
            <h2 id="javascript-implementation" className="scroll-mt-16">JavaScript CMYK to HEX Implementation</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">JavaScript CMYK to HEX Implementation</h3>
              <p className="mb-4">
                JavaScript implementation of the CMYK to HEX conversion process.
              </p>
              <pre className="language-javascript"><code>{`function cmykToRgb(c, m, y, k) {
  // Normalize values to 0-1 range
  c = c / 100;
  m = m / 100;
  y = y / 100;
  k = k / 100;

  // Convert to RGB
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  return { r, g, b };
}`}</code></pre>
            </div>

            {/* TypeScript Implementation */}
            <h2 id="typescript-implementation" className="scroll-mt-16">TypeScript CMYK to HEX Implementation</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">TypeScript CMYK to HEX Implementation</h3>
              <p className="mb-4">
                TypeScript implementation of the CMYK to HEX conversion process.
              </p>
              <pre className="language-typescript"><code>{`interface CMYK {
  c: number; // Cyan (0-100)
  m: number; // Magenta (0-100)
  y: number; // Yellow (0-100)
  k: number; // Key/Black (0-100)
}

class ColorConverter {
  static cmykToRgb(cmyk: CMYK) {
    const { c, m, y, k } = cmyk;
    
    // Normalize values to 0-1 range
    const cyan = c / 100;
    const magenta = m / 100;
    const yellow = y / 100;
    const key = k / 100;

    // Convert CMYK to RGB
    const r = Math.round(255 * (1 - cyan) * (1 - key));
    const g = Math.round(255 * (1 - magenta) * (1 - key));
    const b = Math.round(255 * (1 - yellow) * (1 - key));

    return { r, g, b };
  }

  static rgbToHex(rgb: { r: number; g: number; b: number }) {
    const toHex = (n: number) => {
      const hex = n.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return '#' + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b);
  }

  static cmykToHex(cmyk: CMYK) {
    const rgb = this.cmykToRgb(cmyk);
    return this.rgbToHex(rgb);
  }
}

// Usage examples
console.log(ColorConverter.cmykToHex({ c: 0, m: 100, y: 100, k: 0 }));   // #FF0000 (Red)
console.log(ColorConverter.cmykToHex({ c: 100, m: 0, y: 100, k: 0 }));   // #00FF00 (Green)
console.log(ColorConverter.cmykToHex({ c: 100, m: 100, y: 0, k: 0 }));   // #0000FF (Blue)
console.log(ColorConverter.cmykToHex({ c: 0, m: 0, y: 0, k: 100 }));     // #000000 (Black)
console.log(ColorConverter.cmykToHex({ c: 0, m: 0, y: 0, k: 0 }));       // #FFFFFF (White)`}</code></pre>
            </div>

            {/* React Implementation */}
            <h2 id="react-implementation" className="scroll-mt-16">React CMYK to HEX Component</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">React CMYK to HEX Component</h3>
              <p className="mb-4">
                React component for converting CMYK colors to HEX format.
              </p>
              <pre className="language-react"><code>{`import React from 'react';

interface CMYK {
  c: number; // Cyan (0-100)
  m: number; // Magenta (0-100)
  y: number; // Yellow (0-100)
  k: number; // Key/Black (0-100)
}

class ColorConverter {
  static cmykToRgb(cmyk: CMYK) {
    const { c, m, y, k } = cmyk;
    
    // Normalize values to 0-1 range
    const cyan = c / 100;
    const magenta = m / 100;
    const yellow = y / 100;
    const key = k / 100;

    // Convert CMYK to RGB
    const r = Math.round(255 * (1 - cyan) * (1 - key));
    const g = Math.round(255 * (1 - magenta) * (1 - key));
    const b = Math.round(255 * (1 - yellow) * (1 - key));

    return { r, g, b };
  }

  static rgbToHex(rgb: { r: number; g: number; b: number }) {
    const toHex = (n: number) => {
      const hex = n.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return '#' + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b);
  }

  static cmykToHex(cmyk: CMYK) {
    const rgb = this.cmykToRgb(cmyk);
    return this.rgbToHex(rgb);
  }
}

const CMYKToHexComponent: React.FC = () => {
  const [cmyk, setCmyk] = React.useState<CMYK>({ c: 0, m: 0, y: 0, k: 0 });
  const [hex, setHex] = React.useState<string>('#000000');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCmyk((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleConvert = () => {
    const rgb = ColorConverter.cmykToRgb(cmyk);
    const hex = ColorConverter.rgbToHex(rgb);
    setHex(hex);
  };

  return (
    <div>
      {/* CMYK input fields */}
      <input
        type="number"
        name="c"
        value={cmyk.c}
        onChange={handleChange}
        min="0"
        max="100"
      />
      <input
        type="number"
        name="m"
        value={cmyk.m}
        onChange={handleChange}
        min="0"
        max="100"
      />
      <input
        type="number"
        name="y"
        value={cmyk.y}
        onChange={handleChange}
        min="0"
        max="100"
      />
      <input
        type="number"
        name="k"
        value={cmyk.k}
        onChange={handleChange}
        min="0"
        max="100"
      />
      <button onClick={handleConvert}>Convert</button>
      <p>HEX: {hex}</p>
    </div>
  );
};

export default CMYKToHexComponent;
`}</code></pre>
            </div>

            {/* NPM Package Section */}
            <h2 id="npm-implementation" className="scroll-mt-16">NPM Package for CMYK to HEX</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">NPM Package for CMYK to HEX</h3>
              <p className="mb-4">
                NPM package for converting CMYK colors to HEX format.
              </p>
              <pre className="language-bash"><code>{`npm install cmyk-to-hex`}</code></pre>
            </div>

            {/* Algorithm Optimization */}
            <h2 id="algorithm-optimization" className="scroll-mt-16">Optimized CMYK to HEX Algorithm</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Optimized CMYK to HEX Algorithm</h3>
              <p className="mb-4">
                Optimized algorithm for converting CMYK colors to HEX format.
              </p>
              <pre className="language-javascript"><code>{`function cmykToRgb(c, m, y, k) {
  // Normalize values to 0-1 range
  c = c / 100;
  m = m / 100;
  y = y / 100;
  k = k / 100;

  // Convert to RGB
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  return { r, g, b };
}`}</code></pre>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 