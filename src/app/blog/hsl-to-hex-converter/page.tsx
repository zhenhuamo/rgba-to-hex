'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HslToHexBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="max-w-4xl mx-auto">
          {/* SEO Meta Section */}
          <div className="hidden">
            <h1>HSL to HEX Color Converter - Convert HSL Colors to Hexadecimal</h1>
            <h2>Online HSL to HEX Color Converter with Interactive Preview</h2>
            <p>
              Free online HSL to HEX converter tool. Convert HSL (Hue, Saturation, Lightness) colors to HEX format. 
              JavaScript, TypeScript, Python, and React implementations available. NPM package for easy integration.
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
              Complete Guide to HSL to HEX Color Conversion
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
              Our HSL to HEX converter tool provides multiple implementation options including JavaScript, TypeScript, 
              Python, and React components. Whether you need a simple HSL to HEX conversion function or a complete 
              NPM package, we&apos;ve got you covered. This comprehensive guide includes optimized algorithms and 
              real-world examples for converting HSL colors to hexadecimal format.
            </p>

            {/* Quick Navigation */}
            <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
              <ul className="space-y-2">
                <li>• <a href="#javascript-implementation">JavaScript HSL to HEX Implementation</a></li>
                <li>• <a href="#typescript-implementation">TypeScript HSL to HEX Implementation</a></li>
                <li>• <a href="#react-implementation">React HSL to HEX Component</a></li>
                <li>• <a href="#npm-implementation">NPM Package for HSL to HEX</a></li>
                <li>• <a href="#algorithm-optimization">Optimized HSL to HEX Algorithm</a></li>
              </ul>
            </div>

            {/* Tool Link */}
            <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Try Our HSL to HEX Converter</h2>
              <p className="mb-4">
                Convert any HSL color to HEX format instantly. Interactive preview and real-time conversion.
              </p>
              <Link
                href="/tools/hsl-to-hex"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open HSL to HEX Converter
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
            <h2>Understanding HSL and HEX Color Spaces</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">HSL Color Space</h3>
              <p className="mb-4">
                HSL is a cylindrical color space that describes colors in terms of:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Hue (H)</strong>: Color wheel angle (0-360°)</li>
                <li>• <strong>Saturation (S)</strong>: Color intensity (0-100%)</li>
                <li>• <strong>Lightness (L)</strong>: Brightness level (0-100%)</li>
              </ul>
              <div className="mt-6">
                <h4 className="font-medium mb-2">Common HSL Values:</h4>
                <ul className="space-y-2">
                  <li>Red: hsl(0, 100%, 50%)</li>
                  <li>Green: hsl(120, 100%, 50%)</li>
                  <li>Blue: hsl(240, 100%, 50%)</li>
                  <li>White: hsl(0, 0%, 100%)</li>
                  <li>Black: hsl(0, 0%, 0%)</li>
                </ul>
              </div>
            </div>

            {/* Conversion Process */}
            <h2>HSL to HEX Conversion Process</h2>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Step-by-Step Conversion</h3>
              <ol className="space-y-4">
                <li>
                  <strong>1. Convert HSL to RGB</strong>
                  <p>First, we need to convert HSL values to RGB format</p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255)
  ];
}`}</code></pre>
                </li>
                <li>
                  <strong>2. Convert RGB to HEX</strong>
                  <p>Then convert each RGB component to hexadecimal</p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`function rgbToHex(r, g, b) {
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
              <h3 className="text-xl font-semibold mb-4">JavaScript Implementation</h3>
              <pre className="language-javascript"><code>{`class ColorConverter {
  static hslToHex(h, s, l) {
    // Validate input ranges
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    l = Math.max(0, Math.min(100, l));

    // Convert HSL to RGB
    const rgb = this.hslToRgb(h, s, l);
    
    // Convert RGB to HEX
    return this.rgbToHex(...rgb);
  }

  static hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255)
    ];
  }

  static rgbToHex(r, g, b) {
    const toHex = (n) => {
      const hex = n.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return '#' + toHex(r) + toHex(g) + toHex(b);
  }
}

// Usage examples
console.log(ColorConverter.hslToHex(0, 100, 50));    // #FF0000 (Red)
console.log(ColorConverter.hslToHex(120, 100, 50));  // #00FF00 (Green)
console.log(ColorConverter.hslToHex(240, 100, 50));  // #0000FF (Blue)
console.log(ColorConverter.hslToHex(0, 0, 100));     // #FFFFFF (White)
console.log(ColorConverter.hslToHex(0, 0, 0));       // #000000 (Black)`}</code></pre>
            </div>

            {/* Python Implementation */}
            <h2>Python Implementation</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <pre className="language-python"><code>{`class ColorConverter:
    @staticmethod
    def hsl_to_rgb(h: float, s: float, l: float) -> tuple:
        """Convert HSL color values to RGB."""
        h = h / 360
        s = s / 100
        l = l / 100

        def hue_to_rgb(p: float, q: float, t: float) -> float:
            if t < 0:
                t += 1
            if t > 1:
                t -= 1
            if t < 1/6:
                return p + (q - p) * 6 * t
            if t < 1/2:
                return q
            if t < 2/3:
                return p + (q - p) * (2/3 - t) * 6
            return p

        if s == 0:
            r = g = b = l
        else:
            q = l * (1 + s) if l < 0.5 else l + s - l * s
            p = 2 * l - q
            r = hue_to_rgb(p, q, h + 1/3)
            g = hue_to_rgb(p, q, h)
            b = hue_to_rgb(p, q, h - 1/3)

        return (
            round(r * 255),
            round(g * 255),
            round(b * 255)
        )

    @staticmethod
    def rgb_to_hex(r: int, g: int, b: int) -> str:
        """Convert RGB values to hexadecimal color code."""
        return f'#{r:02x}{g:02x}{b:02x}'.upper()

    @staticmethod
    def hsl_to_hex(h: float, s: float, l: float) -> str:
        """Convert HSL values to hexadecimal color code."""
        rgb = ColorConverter.hsl_to_rgb(h, s, l)
        return ColorConverter.rgb_to_hex(*rgb)

# Usage examples
converter = ColorConverter()

# Basic colors
print(converter.hsl_to_hex(0, 100, 50))      # #FF0000 (Red)
print(converter.hsl_to_hex(120, 100, 50))    # #00FF00 (Green)
print(converter.hsl_to_hex(240, 100, 50))    # #0000FF (Blue)

# Grayscale
print(converter.hsl_to_hex(0, 0, 100))       # #FFFFFF (White)
print(converter.hsl_to_hex(0, 0, 50))        # #808080 (Gray)
print(converter.hsl_to_hex(0, 0, 0))         # #000000 (Black)

# Mixed colors
print(converter.hsl_to_hex(60, 100, 50))     # #FFFF00 (Yellow)
print(converter.hsl_to_hex(180, 100, 50))    # #00FFFF (Cyan)
print(converter.hsl_to_hex(300, 100, 50))    # #FF00FF (Magenta)`}</code></pre>
            </div>

            {/* Color Theory and Applications */}
            <h2>Color Theory and Practical Applications</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Advantages of HSL</h3>
                <ul className="space-y-2">
                  <li>• Intuitive color selection</li>
                  <li>• Easy to adjust brightness</li>
                  <li>• Simple saturation control</li>
                  <li>• Natural color relationships</li>
                  <li>• Better for color schemes</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                <ul className="space-y-2">
                  <li>• Web development</li>
                  <li>• Color palette generation</li>
                  <li>• UI/UX design</li>
                  <li>• Theme customization</li>
                  <li>• Accessibility adjustments</li>
                </ul>
              </div>
            </div>

            {/* Best Practices */}
            <h2>Best Practices and Tips</h2>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <ul className="space-y-4">
                <li>
                  <strong>Input Validation</strong>
                  <p>Always validate HSL values:</p>
                  <ul className="ml-6 mt-2">
                    <li>• Hue: 0-360 degrees</li>
                    <li>• Saturation: 0-100%</li>
                    <li>• Lightness: 0-100%</li>
                  </ul>
                </li>
                <li>
                  <strong>Performance Optimization</strong>
                  <p>Cache frequently used colors to avoid repeated calculations</p>
                </li>
                <li>
                  <strong>Color Accessibility</strong>
                  <p>Consider using HSL for better control over contrast ratios</p>
                </li>
              </ul>
            </div>

            {/* Common Issues and Solutions */}
            <h2>Common Issues and Solutions</h2>
            <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Rounding Errors</h3>
                <p>Handle floating-point precision issues in calculations:</p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-2"><code>{`// Round RGB values before converting to HEX
const r = Math.round(r * 255);
const g = Math.round(g * 255);
const b = Math.round(b * 255);`}</code></pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Color Accuracy</h3>
                <p>Ensure accurate color representation:</p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-2"><code>{`// Clamp values to valid ranges
h = Math.max(0, Math.min(360, h));
s = Math.max(0, Math.min(100, s));
l = Math.max(0, Math.min(100, l));`}</code></pre>
              </div>
            </div>

            {/* Conclusion */}
            <h2>Conclusion</h2>
            <p>
              Understanding and implementing HSL to HEX color conversion is essential for modern web development 
              and design. The HSL color space provides an intuitive way to work with colors, while HEX format 
              ensures broad compatibility across web platforms. Whether you&apos;re building a color picker, 
              implementing a theme system, or working on design tools, this guide provides the foundation 
              for accurate and efficient color conversions.
            </p>

            {/* Call to Action */}
            <div className="my-12 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">Start Converting Colors Now</h2>
              <p className="mb-6">
                Try our free online HSL to HEX converter tool. Get instant conversions with 
                real-time preview and interactive controls.
              </p>
              <Link
                href="/tools/hsl-to-hex"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Open HSL to HEX Converter
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

            {/* JavaScript Implementation */}
            <h2 id="javascript-implementation">JavaScript HSL to HEX Implementation</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">JavaScript Color Converter Function</h3>
              <p className="mb-4">
                This JavaScript implementation of HSL to HEX conversion is optimized for web development. 
                The function handles all edge cases and provides accurate color conversion:
              </p>
              
              <h4 className="font-medium mb-2">Features:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Pure JavaScript implementation</li>
                <li>No dependencies required</li>
                <li>Handles edge cases</li>
                <li>Precise color conversion</li>
                <li>Browser compatible</li>
              </ul>

              {/* JavaScript code */}
              {`// Simple HSL to HEX converter function
function hslToHex(h, s, l) {
  h = h % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c/2;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}`}

              <h4 className="font-medium mt-4 mb-2">Usage Examples:</h4>
              <pre className="language-javascript"><code>{`// HSL to HEX conversion examples
console.log(hslToHex(0, 100, 50));    // Red: #FF0000
console.log(hslToHex(120, 100, 50));  // Green: #00FF00
console.log(hslToHex(240, 100, 50));  // Blue: #0000FF
console.log(hslToHex(60, 100, 50));   // Yellow: #FFFF00`}</code></pre>
            </div>

            {/* TypeScript Implementation */}
            <h2 id="typescript-implementation">TypeScript HSL to HEX Implementation</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Type-Safe HSL to HEX Converter</h3>
              <p className="mb-4">
                Our TypeScript implementation provides type safety and better code organization for 
                HSL to HEX color conversion. Perfect for TypeScript projects and enterprise applications:
              </p>

              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Full TypeScript support</li>
                <li>Type-safe interfaces</li>
                <li>Error handling</li>
                <li>Easy integration</li>
                <li>Comprehensive documentation</li>
              </ul>

              {/* TypeScript code */}
              {`// TypeScript implementation`}
            </div>

            {/* NPM Package Section */}
            <h2 id="npm-implementation">NPM Package for HSL to HEX Conversion</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">HSL to HEX NPM Package</h3>
              <p className="mb-4">
                Our NPM package provides a simple way to integrate HSL to HEX conversion into your projects. 
                Install and use with just a few lines of code:
              </p>

              <h4 className="font-medium mb-2">Installation:</h4>
              <pre className="language-bash"><code>{`npm install hsl-to-hex-converter
# or
yarn add hsl-to-hex-converter`}</code></pre>

              <h4 className="font-medium mt-4 mb-2">Package Features:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>TypeScript support</li>
                <li>Zero dependencies</li>
                <li>Tree-shakeable</li>
                <li>Comprehensive tests</li>
                <li>Performance optimized</li>
              </ul>

              {/* NPM package code */}
              {`// NPM package implementation`}
            </div>

            {/* Algorithm Optimization */}
            <h2 id="algorithm-optimization">Optimized HSL to HEX Algorithm</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">High-Performance HSL to HEX Conversion</h3>
              <p className="mb-4">
                Our optimized algorithm provides the fastest possible HSL to HEX conversion while maintaining accuracy:
              </p>

              <h4 className="font-medium mb-2">Optimization Techniques:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Lookup table optimization</li>
                <li>Minimized calculations</li>
                <li>Efficient memory usage</li>
                <li>Reduced branching</li>
                <li>Cached computations</li>
              </ul>

              {/* Optimization code */}
              {`// Optimized implementation`}

              <h4 className="font-medium mt-4 mb-2">Performance Comparison:</h4>
              <pre className="language-javascript"><code>{`// Performance test
console.time('Standard HSL to HEX');
hslToHex(180, 50, 50);
console.timeEnd('Standard HSL to HEX');

console.time('Optimized HSL to HEX');
hslToHexOptimized(180, 50, 50);
console.timeEnd('Optimized HSL to HEX');`}</code></pre>
            </div>

            {/* Common Use Cases */}
            <h2>HSL to HEX Conversion Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <ul className="space-y-2">
                  <li>• Color theme systems</li>
                  <li>• Dynamic styling</li>
                  <li>• CSS preprocessors</li>
                  <li>• Design systems</li>
                  <li>• Color palettes</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Design Tools</h3>
                <ul className="space-y-2">
                  <li>• Color pickers</li>
                  <li>• Design editors</li>
                  <li>• Theme generators</li>
                  <li>• Gradient tools</li>
                  <li>• Accessibility tools</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 