'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RgbaToHexBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="max-w-4xl mx-auto">
          {/* SEO Meta Section */}
          <div className="hidden">
            <h1>RGBA to HEX Converter - Convert RGBA Colors to Hexadecimal</h1>
            <h2>Online RGBA to HEX Color Converter with Opacity Support</h2>
            <p>
              Convert RGBA colors to HEX format online. Support for 6-digit and 8-digit hex codes.
              Handle opacity in RGBA to HEX conversion. Free online color converter tool.
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
              Complete Guide to RGBA to HEX Color Conversion
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
              <span>February 11, 2024</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Color Conversion</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <p className="lead">
              Converting RGBA colors to HEX format is a fundamental operation in web development and design. 
              Our RGBA to HEX converter provides a comprehensive solution for converting colors with or without opacity, 
              supporting both 6-digit and 8-digit hexadecimal formats. This guide covers everything from basic conversion 
              to advanced implementation techniques.
            </p>

            {/* Tool Link */}
            <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Try Our RGBA to HEX Converter</h2>
              <p className="mb-4">
                Convert any RGBA color to HEX format instantly. Supports opacity conversion and provides real-time preview.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open RGBA to HEX Converter
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

            {/* Color Theory Basics - New Section */}
            <h2>Color Theory and Representation</h2>
            
            <h3>Understanding Color Spaces</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h4 className="font-semibold mb-4">RGB Color Space</h4>
              <p>
                The RGB color model is an additive color model where red, green, and blue light are combined 
                to create various colors:
              </p>
              <ul className="space-y-2">
                <li>Red (R): Primary color, ranges from 0-255</li>
                <li>Green (G): Primary color, ranges from 0-255</li>
                <li>Blue (B): Primary color, ranges from 0-255</li>
                <li>Alpha (A): Opacity value, ranges from 0-1</li>
              </ul>
              <div className="mt-4">
                <h5 className="font-semibold">Common RGB Values:</h5>
                <ul className="space-y-2">
                  <li>Black: rgb(0, 0, 0)</li>
                  <li>White: rgb(255, 255, 255)</li>
                  <li>Pure Red: rgb(255, 0, 0)</li>
                  <li>Pure Green: rgb(0, 255, 0)</li>
                  <li>Pure Blue: rgb(0, 0, 255)</li>
                </ul>
              </div>
            </div>

            <h3>Hexadecimal Color System</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <p>
                Hexadecimal (HEX) colors use base-16 numbers (0-9 and A-F) to represent color values:
              </p>
              <ul className="space-y-2">
                <li>Each color channel uses 2 digits (00-FF)</li>
                <li>Values range from 00 (0) to FF (255)</li>
                <li>Optional alpha channel uses 2 additional digits</li>
              </ul>
              <div className="mt-4">
                <h5 className="font-semibold">HEX Value Examples:</h5>
                <ul className="space-y-2">
                  <li>#000000 = Black</li>
                  <li>#FFFFFF = White</li>
                  <li>#FF0000 = Red</li>
                  <li>#00FF00 = Green</li>
                  <li>#0000FF = Blue</li>
                  <li>#FF000080 = 50% transparent Red</li>
                </ul>
              </div>
            </div>

            {/* Detailed Conversion Process - New Section */}
            <h2>Detailed RGBA to HEX Conversion Process</h2>

            <h3>Step-by-Step Conversion</h3>
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <ol className="space-y-4">
                <li>
                  <strong>1. Normalize RGB Values</strong>
                  <p>Ensure RGB values are integers between 0 and 255</p>
                  <pre><code>R = Math.min(255, Math.max(0, Math.round(R)))</code></pre>
                </li>
                <li>
                  <strong>2. Convert to Hexadecimal</strong>
                  <p>Convert each channel to a two-digit hexadecimal number</p>
                  <pre><code>const hexR = normalizedR.toString(16).padStart(2, &apos;0&apos;);</code></pre>
                </li>
                <li>
                  <strong>3. Handle Alpha Channel</strong>
                  <p>Convert alpha value (0-1) to hexadecimal (00-FF)</p>
                  <pre><code>hexA = Math.round(A * 255).toString(16).padStart(2, &apos;0&apos;)</code></pre>
                </li>
                <li>
                  <strong>4. Combine Values</strong>
                  <p>Concatenate the hexadecimal values</p>
                  <pre><code>{'#${hexR}${hexG}${hexB}${hexA}'}</code></pre>
                </li>
              </ol>
            </div>

            {/* Advanced Implementation Details - New Section */}
            <h2>Advanced Implementation Details</h2>

            <h3>1. Complete JavaScript Implementation</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-4">
              <pre className="language-javascript">
                <code>{`// Comprehensive RGBA to HEX converter
class ColorConverter {
  static rgbaToHex(r, g, b, a = 1) {
    // Input validation
    if (!this.isValidRGBA(r, g, b, a)) {
      throw new Error('Invalid RGBA values');
    }

    // Normalize values
    const normalizedR = Math.round(Math.min(255, Math.max(0, r)));
    const normalizedG = Math.round(Math.min(255, Math.max(0, g)));
    const normalizedB = Math.round(Math.min(255, Math.max(0, b)));
    const normalizedA = Math.min(1, Math.max(0, a));

    // Convert to HEX
    const hexR = normalizedR.toString(16).padStart(2, '0');
    const hexG = normalizedG.toString(16).padStart(2, '0');
    const hexB = normalizedB.toString(16).padStart(2, '0');
    
    // Handle alpha channel
    if (normalizedA === 1) {
      return \`#\${hexR}\${hexG}\${hexB}\`.toUpperCase();
    }
    
    const hexA = Math.round(normalizedA * 255)
      .toString(16)
      .padStart(2, '0');
    
    return \`#\${hexR}\${hexG}\${hexB}\${hexA}\`.toUpperCase();
  }

  static isValidRGBA(r, g, b, a) {
    return (
      this.isValidRGBValue(r) &&
      this.isValidRGBValue(g) &&
      this.isValidRGBValue(b) &&
      this.isValidAlphaValue(a)
    );
  }

  static isValidRGBValue(value) {
    return typeof value === 'number' && value >= 0 && value <= 255;
  }

  static isValidAlphaValue(value) {
    return typeof value === 'number' && value >= 0 && value <= 1;
  }
}

// Usage examples
console.log(ColorConverter.rgbaToHex(255, 0, 0));      // #FF0000
console.log(ColorConverter.rgbaToHex(255, 0, 0, 0.5)); // #FF000080
console.log(ColorConverter.rgbaToHex(0, 255, 0, 0.8)); // #00FF00CC`}</code>
              </pre>
            </div>

            <h3>2. Advanced Python Implementation</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-4">
              <pre className="language-python">
                <code>{`class ColorConverter:
    @staticmethod
    def validate_rgb(value: int) -> bool:
        """Validate RGB value (0-255)."""
        return isinstance(value, (int, float)) and 0 <= value <= 255

    @staticmethod
    def validate_alpha(value: float) -> bool:
        """Validate alpha value (0-1)."""
        return isinstance(value, (int, float)) and 0 <= value <= 1

    @classmethod
    def rgba_to_hex(cls, r: int, g: int, b: int, a: float = 1.0) -> str:
        """Convert RGBA values to HEX color code with validation."""
        # Validate inputs
        if not all(map(cls.validate_rgb, (r, g, b))) or not cls.validate_alpha(a):
            raise ValueError("Invalid RGBA values")

        # Normalize values
        r, g, b = map(round, (r, g, b))
        
        # Basic RGB conversion
        hex_color = '#{:02X}{:02X}{:02X}'.format(r, g, b)
        
        # Add alpha channel if not fully opaque
        if a != 1:
            alpha = round(a * 255)
            hex_color += '{:02X}'.format(alpha)
            
        return hex_color

    @classmethod
    def hex_to_rgba(cls, hex_color: str) -> tuple:
        """Convert HEX color code to RGBA values."""
        # Remove '#' if present
        hex_color = hex_color.lstrip('#')
        
        # Parse HEX values
        if len(hex_color) == 6:
            r, g, b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
            return (r, g, b, 1.0)
        elif len(hex_color) == 8:
            r, g, b, a = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4, 6))
            return (r, g, b, round(a / 255, 2))
        else:
            raise ValueError("Invalid HEX color format")

# Usage examples
converter = ColorConverter()

# Basic conversions
print(converter.rgba_to_hex(255, 0, 0))          // #FF0000
print(converter.rgba_to_hex(255, 0, 0, 0.5))     // #FF000080

# Advanced usage
print(converter.hex_to_rgba('#FF0000'))          // (255, 0, 0, 1.0)
print(converter.hex_to_rgba('#FF000080'))        // (255, 0, 0, 0.5)`}</code>
              </pre>
            </div>

            <h3>3. Modern CSS Implementation</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-4">
              <pre className="language-css">
                <code>{`/* Modern CSS color handling */
:root {
  /* Define color variables */
  --primary-color: #FF0000;
  --primary-color-rgb: 255, 0, 0;
  --primary-opacity: 0.5;
}

/* Using RGBA with CSS variables */
.element {
  /* Traditional RGBA */
  background-color: rgba(var(--primary-color-rgb), var(--primary-opacity));
  
  /* Modern RGB syntax */
  background-color: rgb(var(--primary-color-rgb) / var(--primary-opacity));
  
  /* HEX with opacity */
  background-color: #FF000080;
}

/* Advanced color usage */
.gradient-element {
  /* Linear gradient with transparency */
  background: linear-gradient(
    to right,
    rgba(var(--primary-color-rgb), 1),
    rgba(var(--primary-color-rgb), 0)
  );
  
  /* Modern gradient syntax */
  background: linear-gradient(
    to right,
    rgb(var(--primary-color-rgb) / 1),
    rgb(var(--primary-color-rgb) / 0)
  );
}

/* Color mixing */
.mixed-color {
  background-color: color-mix(
    in srgb,
    rgb(var(--primary-color-rgb)),
    transparent 50%
  );
}`}</code>
              </pre>
            </div>

            {/* Browser Support and Compatibility - New Section */}
            <h2>Browser Support and Compatibility</h2>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Modern Browsers</h4>
                <ul className="space-y-2">
                  <li>Full support for 8-digit HEX</li>
                  <li>Modern color function syntax</li>
                  <li>Color mixing capabilities</li>
                  <li>Advanced gradient support</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Legacy Browsers</h4>
                <ul className="space-y-2">
                  <li>Limited to 6-digit HEX</li>
                  <li>Traditional RGBA syntax only</li>
                  <li>No color mixing support</li>
                  <li>Basic gradient support</li>
                </ul>
              </div>
            </div>

            {/* Performance Considerations - New Section */}
            <h2>Performance Considerations</h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Optimization Tips</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Caching:</strong>
                  <p>Cache frequently used color conversions to avoid repeated calculations</p>
                </li>
                <li>
                  <strong>Batch Processing:</strong>
                  <p>Convert multiple colors at once when possible</p>
                </li>
                <li>
                  <strong>Validation:</strong>
                  <p>Implement efficient input validation to prevent unnecessary processing</p>
                </li>
                <li>
                  <strong>Memory Usage:</strong>
                  <p>Use appropriate data structures for color storage and manipulation</p>
                </li>
              </ul>
            </div>

            {/* Handling Opacity */}
            <h2>Understanding Opacity in RGBA to HEX Conversion</h2>
            
            <h3>6-Digit vs 8-Digit HEX Codes</h3>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">6-Digit HEX (#RRGGBB)</h4>
                <ul className="space-y-2">
                  <li>Standard RGB color representation</li>
                  <li>No opacity support</li>
                  <li>Widely supported across all platforms</li>
                  <li>Example: #FF0000 (Red)</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">8-Digit HEX (#RRGGBBAA)</h4>
                <ul className="space-y-2">
                  <li>Includes alpha channel</li>
                  <li>Modern browsers support</li>
                  <li>Preserves transparency information</li>
                  <li>Example: #FF000080 (50% transparent Red)</li>
                </ul>
              </div>
            </div>

            {/* Common Use Cases */}
            <h2>Common RGBA to HEX Conversion Scenarios</h2>
            
            <h3>Web Development</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl my-8">
              <h4 className="text-xl font-semibold mb-4">Converting RGBA to HEX in Different Contexts</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">1. CSS Styling</h5>
                  <pre className="language-css">
                    <code>{`/* Original RGBA */
color: rgba(255, 0, 0, 0.5);

/* Converted HEX */
color: #FF000080;`}</code>
                  </pre>
                </div>
                <div>
                  <h5 className="font-semibold">2. Canvas Drawing</h5>
                  <pre className="language-javascript">
                    <code>{`// Converting RGBA for canvas
const color = rgbaToHex(255, 0, 0, 0.5);
ctx.fillStyle = color;`}</code>
                  </pre>
                </div>
                <div>
                  <h5 className="font-semibold">3. SVG Graphics</h5>
                  <pre className="language-xml">
                    <code>{`<!-- Using converted HEX in SVG -->
<rect fill="#FF000080" />`}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <h2>Best Practices for RGBA to HEX Conversion</h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Conversion Guidelines</h3>
              <ul className="space-y-2">
                <li>Always validate input RGBA values before conversion</li>
                <li>Consider browser support when using 8-digit HEX codes</li>
                <li>Provide fallbacks for older browsers</li>
                <li>Cache conversion results for frequently used colors</li>
                <li>Use appropriate precision for alpha channel conversion</li>
              </ul>
            </div>

            {/* Troubleshooting */}
            <h2>Common RGBA to HEX Conversion Issues</h2>
            
            <div className="space-y-6">
              <div>
                <h3>1. Opacity Handling</h3>
                <p>
                  When converting RGBA colors with opacity to HEX, ensure proper handling of the alpha channel:
                </p>
                <ul>
                  <li>Scale alpha value from 0-1 to 0-255</li>
                  <li>Convert to two-digit hexadecimal</li>
                  <li>Append to the 6-digit color code</li>
                </ul>
              </div>
              
              <div>
                <h3>2. Browser Compatibility</h3>
                <p>
                  Consider browser support when using 8-digit HEX codes:
                </p>
                <ul>
                  <li>Provide RGBA fallbacks</li>
                  <li>Test across different browsers</li>
                  <li>Use feature detection when necessary</li>
                </ul>
              </div>
            </div>

            {/* Enhanced Conclusion */}
            <h2>Conclusion</h2>
            <p>
              The RGBA to HEX color conversion is a fundamental aspect of modern web development and design. 
              Understanding both the basic principles and advanced implementation details ensures robust and 
              efficient color management in your projects. Whether you&apos;re using our online converter or 
              implementing your own solution, the comprehensive knowledge provided in this guide will help 
              you handle color conversions with confidence and precision.
            </p>

            {/* Call to Action */}
            <div className="my-12 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">Convert RGBA to HEX Now</h2>
              <p className="mb-6">
                Try our free online RGBA to HEX converter tool. Convert colors with or without opacity, 
                and get instant results with real-time preview.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Converting RGBA to HEX
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
          </div>
        </article>
      </div>
    </div>
  );
} 