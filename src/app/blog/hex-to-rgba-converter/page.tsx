'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HexToRgbaBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="max-w-4xl mx-auto">
          {/* SEO Meta Section */}
          <div className="hidden">
            <h1>HEX to RGBA Converter - Convert Hexadecimal Colors to RGBA and RGBA to HEX</h1>
            <h2>Online HEX to RGBA Color Converter with Opacity Support and RGBA to HEX Conversion</h2>
            <p>
              Convert HEX colors to RGBA format online. Support for both 6-digit and 8-digit hex codes.
              Handle opacity in HEX to RGBA conversion. Also includes RGBA to HEX conversion. Free online color converter tool.
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
              Complete Guide to HEX to RGBA Color Conversion
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
              <span>February 12, 2024</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>Color Conversion</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <p className="lead">
              Converting hexadecimal (HEX) colors to RGBA format is a crucial skill in modern web development. 
              Our HEX to RGBA converter simplifies this process, supporting both standard 6-digit and advanced 
              8-digit hex codes with alpha channel support. Additionally, our tools help with RGBA to HEX conversion for 
              complete color format flexibility. This comprehensive guide covers everything from 
              basic concepts to advanced implementation techniques.
            </p>

            {/* Tool Link */}
            <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Try Our HEX to RGBA Converter</h2>
              <p className="mb-4">
                Convert any HEX color to RGBA format instantly. Supports both 6-digit and 8-digit hex codes with opacity.
                Our tools also support RGBA to HEX conversion for your complete color transformation needs.
              </p>
              <Link
                href="/tools/hex-to-rgba"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open HEX to RGBA Converter
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

            {/* Understanding HEX Colors */}
            <h2>Understanding HEX Color Format</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">HEX Color Structure</h3>
              <p className="mb-4">
                Hexadecimal color codes use base-16 numbers (0-9 and A-F) to represent color values:
              </p>
              <ul className="space-y-2">
                <li>• 6-digit HEX: #RRGGBB (e.g., #FF0000 for red)</li>
                <li>• 8-digit HEX: #RRGGBBAA (e.g., #FF0000FF for opaque red)</li>
                <li>• Each pair represents a value from 00 to FF (0 to 255)</li>
                <li>• Optional alpha channel in 8-digit format</li>
              </ul>
            </div>

            {/* Conversion Process */}
            <h2>HEX to RGBA Conversion Process</h2>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Step-by-Step Conversion</h3>
              <ol className="space-y-4">
                <li>
                  <strong>1. Parse HEX Values</strong>
                  <p>Extract color components from HEX string</p>
                  <pre><code>const r = parseInt(hex.slice(1, 3), 16);</code></pre>
                </li>
                <li>
                  <strong>2. Convert to Decimal</strong>
                  <p>Convert hexadecimal to decimal numbers (0-255)</p>
                  <pre><code>const g = parseInt(hex.slice(3, 5), 16);</code></pre>
                </li>
                <li>
                  <strong>3. Handle Alpha Channel</strong>
                  <p>Process alpha value if present (8-digit HEX)</p>
                  <pre><code>const a = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1;</code></pre>
                </li>
              </ol>
            </div>

            {/* Implementation Examples */}
            <h2>Implementation Examples</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">JavaScript Implementation</h3>
              <pre className="language-javascript">
                <code>{`function hexToRgba(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse the values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  
  // Handle alpha channel
  const a = hex.length === 8 
    ? parseInt(hex.slice(6, 8), 16) / 255
    : 1;
  
  return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
}`}</code>
              </pre>
            </div>

            {/* Common Use Cases */}
            <h2>Common Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Web Development</h4>
                <ul className="space-y-2">
                  <li>• CSS color definitions</li>
                  <li>• Dynamic styling</li>
                  <li>• Theme customization</li>
                  <li>• Color manipulation</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Design Tools</h4>
                <ul className="space-y-2">
                  <li>• Color palette creation</li>
                  <li>• UI/UX design</li>
                  <li>• Brand color management</li>
                  <li>• Design system implementation</li>
                </ul>
              </div>
            </div>

            {/* Best Practices */}
            <h2>Best Practices</h2>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <ul className="space-y-4">
                <li>
                  <strong>Input Validation</strong>
                  <p>Always validate HEX color format before conversion</p>
                </li>
                <li>
                  <strong>Error Handling</strong>
                  <p>Provide meaningful error messages for invalid inputs</p>
                </li>
                <li>
                  <strong>Browser Support</strong>
                  <p>Consider fallbacks for older browsers</p>
                </li>
                <li>
                  <strong>Performance</strong>
                  <p>Cache conversion results for frequently used colors</p>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <h2>Conclusion</h2>
            <p>
              Understanding HEX to RGBA conversion is essential for modern web development. 
              Similarly, knowing how to perform RGBA to HEX conversion gives you complete flexibility 
              when working with colors. Whether you&apos;re working on a simple website or a complex application, 
              our converter tool and this guide provide everything you need to handle color 
              conversions effectively.
            </p>

            {/* Call to Action */}
            <div className="my-12 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">Start Converting Colors Now</h2>
              <p className="mb-6">
                Try our free online HEX to RGBA converter tool. Convert colors with or without opacity, 
                perform RGBA to HEX conversions, and get instant results with real-time preview.
              </p>
              <Link
                href="/tools/hex-to-rgba"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Open HEX to RGBA Converter
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

            {/* Value Mapping Section */}
            <h2>HEX to RGBA Value Mapping</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Value Range Conversion</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">RGB Value Conversion (0-255)</h4>
                  <p className="mb-2">Convert two-digit hexadecimal numbers to decimal range 0-255:</p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`// Example: FF -> 255
const hexToRgb = (hex) => parseInt(hex, 16);
// FF -> 255
// 00 -> 0
// 80 -> 128`}</code></pre>
                </div>
                <div>
                  <h4 className="font-medium">Alpha Value Conversion (0-1)</h4>
                  <p className="mb-2">Convert two-digit hexadecimal alpha value to 0-1 range:</p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><code>{`// Example: FF -> 1.0
const hexToAlpha = (hex) => parseInt(hex, 16) / 255;
// FF -> 1.0
// 80 -> 0.5
// 00 -> 0`}</code></pre>
                </div>
              </div>
            </div>

            {/* JavaScript Implementation */}
            <h2>JavaScript Implementation</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Basic Implementation</h3>
              <pre className="language-javascript"><code>{`// Basic HEX to RGBA conversion function
function hexToRgba(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Validate HEX format
  if (!/^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(hex)) {
    throw new Error('Invalid HEX color format');
  }
  
  // Parse RGB values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  
  // Handle alpha channel
  const a = hex.length === 8 
    ? Math.round((parseInt(hex.slice(6, 8), 16) / 255) * 100) / 100
    : 1;
  
  return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
}`}</code></pre>

              <h3 className="text-xl font-semibold mb-4 mt-8">Advanced Implementation (With Shorthand Support)</h3>
              <pre className="language-javascript"><code>{`// Function supporting all HEX formats
function hexToRgbaAdvanced(hex) {
  // Remove #
  hex = hex.replace(/^#/, '');
  
  // Handle shorthand format (#RGB or #RGBA)
  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  // Validate format
  if (!/^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(hex)) {
    throw new Error('Invalid HEX color format');
  }
  
  // Convert to RGB values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  
  // Handle alpha value
  let a = 1;
  if (hex.length === 8) {
    a = Math.round((parseInt(hex.slice(6, 8), 16) / 255) * 100) / 100;
  }
  
  // Return RGBA string
  return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
}

// Usage examples
console.log(hexToRgbaAdvanced('#FF0000'));     // rgba(255, 0, 0, 1)
console.log(hexToRgbaAdvanced('#FF000080'));   // rgba(255, 0, 0, 0.5)
console.log(hexToRgbaAdvanced('#F00'));        // rgba(255, 0, 0, 1)
console.log(hexToRgbaAdvanced('#F008'));       // rgba(255, 0, 0, 0.53)`}</code></pre>
            </div>

            {/* Python Implementation */}
            <h2>Python Implementation</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <pre className="language-python"><code>{`class HexToRgbaConverter:
    @staticmethod
    def validate_hex(hex_color: str) -> bool:
        """Validate HEX color format"""
        hex_color = hex_color.lstrip('#')
        return len(hex_color) in (6, 8) and all(c in '0123456789ABCDEFabcdef' for c in hex_color)

    @staticmethod
    def hex_to_rgba(hex_color: str) -> tuple:
        """Convert HEX color to RGBA values"""
        # Remove # and convert to uppercase
        hex_color = hex_color.lstrip('#').upper()
        
        # Validate input
        if not HexToRgbaConverter.validate_hex(hex_color):
            raise ValueError("Invalid HEX color format")
        
        # Convert RGB values
        r = int(hex_color[0:2], 16)
        g = int(hex_color[2:4], 16)
        b = int(hex_color[4:6], 16)
        
        # Handle alpha channel
        a = 1.0
        if len(hex_color) == 8:
            a = round(int(hex_color[6:8], 16) / 255, 2)
        
        return (r, g, b, a)

    @staticmethod
    def to_css_rgba(hex_color: str) -> str:
        """Convert to CSS rgba() format"""
        r, g, b, a = HexToRgbaConverter.hex_to_rgba(hex_color)
        return f"rgba({r}, {g}, {b}, {a})"

# Usage examples
converter = HexToRgbaConverter()

# Basic conversion
print(converter.to_css_rgba('#FF0000'))      # rgba(255, 0, 0, 1)
print(converter.to_css_rgba('#FF000080'))    # rgba(255, 0, 0, 0.5)

# Get RGBA tuple
print(converter.hex_to_rgba('#FF0000'))      # (255, 0, 0, 1.0)
print(converter.hex_to_rgba('#FF000080'))    # (255, 0, 0, 0.5)`}</code></pre>
            </div>

            {/* CSS Implementation */}
            <h2>HEX and RGBA in CSS</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Modern CSS Color Usage</h3>
              <pre className="language-css"><code>{`/* Using 8-digit HEX colors */
.element-with-opacity {
  /* Red with 50% opacity */
  background-color: #FF000080;
}

/* Using rgba() function */
.element-with-rgba {
  /* Same red with 50% opacity */
  background-color: rgba(255, 0, 0, 0.5);
}

/* Using CSS variables and calculations */
:root {
  --base-color: #FF0000;
  --opacity: 0.5;
}

.dynamic-opacity {
  /* Dynamic opacity setting */
  background-color: rgba(255, 0, 0, var(--opacity));
}`}</code></pre>
            </div>

            {/* FAQ Section */}
            <h2>Frequently Asked Questions</h2>
            <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Precision Issues in HEX to RGBA Conversion</h3>
                <p>When converting alpha values, precision issues may occur. Here&apos;s the recommended handling method:</p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-2"><code>{`// Handle alpha value precision
const alpha = Math.round((parseInt(hex.slice(6, 8), 16) / 255) * 100) / 100;`}</code></pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">RGBA Values in 0-1 Range</h3>
                <p>Sometimes you need to normalize RGBA values to the 0-1 range:</p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-2"><code>{`// Convert to 0-1 range
const normalizedR = parseInt(hex.slice(0, 2), 16) / 255;
const normalizedG = parseInt(hex.slice(2, 4), 16) / 255;
const normalizedB = parseInt(hex.slice(4, 6), 16) / 255;`}</code></pre>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 