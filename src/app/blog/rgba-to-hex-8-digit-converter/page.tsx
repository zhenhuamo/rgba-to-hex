'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RgbaToHex8DigitBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="max-w-4xl mx-auto">
          {/* SEO Meta Section */}
          <div className="hidden">
            <h1>RGBA to 8-Digit HEX Converter - Convert Colors with Alpha Transparency</h1>
            <h2>Professional RGBA to 8-Digit HEX Color Converter with Full Opacity Support</h2>
            <p>
              Convert RGBA colors to 8-digit HEX format (#RRGGBBAA) with alpha transparency support. Free online color converter 
              for web developers, designers, and digital artists. Learn about the conversion process and implementation, and understand 
              the differences between 8-digit and 16-digit HEX formats.
            </p>
            <p>
              Keywords: rgba to hex, rgba to hex converter, 8-digit hex, transparent colors, hex color format, color conversion
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
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-4">
              RGBA to 8-Digit HEX: The Ultimate Guide to Modern Color Conversion
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
              <span>March 15, 2024</span>
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
              Modern web development demands sophisticated color handling that includes opacity. Our RGBA to 8-digit HEX converter 
              provides the perfect solution for converting colors with transparency to modern hexadecimal notation. This guide explores 
              the technical aspects, practical applications, and implementation details of this essential color conversion process, 
              with special focus on the important differences between 8-digit and traditional 16-digit HEX formats.
            </p>

            {/* Tool Link */}
            <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Try Our RGBA to 8-Digit HEX Converter</h2>
              <p className="mb-4">
                Convert any RGBA color to 8-digit HEX format with full transparency support. Real-time preview, 
                code generation, and professional color tools included.
              </p>
              <Link
                href="/tools/rgba-to-hex-8-digit-converter"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:from-blue-600 hover:to-green-600 transition-all"
              >
                Open RGBA to 8-Digit HEX Converter
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

            {/* Table of Contents */}
            <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="text-blue-600 dark:text-blue-400 hover:underline">Introduction to RGBA and 8-Digit HEX</a>
                </li>
                <li>
                  <a href="#difference" className="text-blue-600 dark:text-blue-400 hover:underline">Standard HEX vs. 8-Digit HEX</a>
                </li>
                <li>
                  <a href="#conversion" className="text-blue-600 dark:text-blue-400 hover:underline">The Conversion Process Explained</a>
                </li>
                <li>
                  <a href="#applications" className="text-blue-600 dark:text-blue-400 hover:underline">Practical Applications</a>
                </li>
                <li>
                  <a href="#implementation" className="text-blue-600 dark:text-blue-400 hover:underline">Implementation in Different Languages</a>
                </li>
                <li>
                  <a href="#tool" className="text-blue-600 dark:text-blue-400 hover:underline">Our RGBA to 8-Digit HEX Tool</a>
                </li>
                <li>
                  <a href="#browser-support" className="text-blue-600 dark:text-blue-400 hover:underline">Browser Support and Compatibility</a>
                </li>
                <li>
                  <a href="#best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">Best Practices for Transparent Colors</a>
                </li>
                <li>
                  <a href="#conclusion" className="text-blue-600 dark:text-blue-400 hover:underline">Conclusion</a>
                </li>
              </ul>
            </div>

            {/* Introduction Section */}
            <h2 id="introduction" className="flex items-center scroll-mt-24">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">01</span>
              Introduction to RGBA and 8-Digit HEX
            </h2>

            <div className="flex flex-col md:flex-row gap-6 my-8">
              <div className="flex-1">
                <p>
                  In the realm of digital color representation, RGBA and HEX formats serve as fundamental notations 
                  for defining colors in web development and design. While both systems effectively represent colors, 
                  they approach it from different mathematical frameworks.
                </p>
                <p className="mt-4">
                  <strong>RGBA</strong> (Red, Green, Blue, Alpha) uses a functional notation with decimal values:
                </p>
                <ul>
                  <li>Red: Integer from 0-255</li>
                  <li>Green: Integer from 0-255</li>
                  <li>Blue: Integer from 0-255</li>
                  <li>Alpha: Decimal from 0-1 (representing opacity)</li>
                </ul>
                <p className="mt-4">
                  <strong>8-Digit HEX</strong> condenses this information into a compact hexadecimal string:
                </p>
                <ul>
                  <li>#RRGGBBAA format</li>
                  <li>Each pair of characters represents values from 00-FF (0-255 in decimal)</li>
                  <li>Final AA represents the alpha/transparency channel</li>
                </ul>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <h3 className="text-lg font-semibold mb-3">Color Examples</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="h-12 rounded-lg" style={{backgroundColor: 'rgba(255, 0, 0, 1)'}}></div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>rgba(255, 0, 0, 1)</span>
                        <span className="font-mono">#FF0000FF</span>
                      </div>
                    </div>
                    <div>
                      <div className="h-12 rounded-lg bg-gray-200 dark:bg-gray-700 relative">
                        <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 128, 255, 0.5)'}}></div>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>rgba(0, 128, 255, 0.5)</span>
                        <span className="font-mono">#0080FF80</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 italic">
              &quot;The 8-digit hexadecimal notation for color is a game-changer for modern web design, allowing for 
              more concise CSS and seamless representation of transparent colors.&quot;
            </blockquote>

            <p>
              The ability to represent transparency in a hexadecimal format became standardized in the CSS Color Module Level 4, 
              making 8-digit HEX a modern approach to color notation that combines the traditional benefits of HEX 
              (compactness, universality) with the opacity capabilities previously only available in functional notations 
              like RGBA.
            </p>

            {/* Standard HEX vs 8-Digit HEX Section */}
            <h2 id="difference" className="flex items-center scroll-mt-24 mt-12">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">02</span>
              Comparison of Standard HEX, 8-Digit HEX, and 16-Digit HEX Formats
            </h2>

            <p>
              When discussing color formats, understanding the differences between various HEX formats is essential for choosing the right color representation. Especially when converting from RGBA to HEX, we need to understand how these formats handle transparency.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Standard HEX (6-digit)</th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">8-Digit HEX</th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">16-Digit HEX</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Format</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>#RRGGBB</code></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>#RRGGBBAA</code></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>#RRRRGGGGBBBBAAAA</code></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Transparency Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">No</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Yes (via AA component)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Yes (via AAAA component)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Color Precision</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">8 bits per channel (256 levels)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">8 bits per channel (256 levels)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">16 bits per channel (65536 levels)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Example</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>#FF5500</code></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>#FF5500CC</code> (80% opacity)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>#FF550000CCCC</code> (80% opacity)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Browser Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Full Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">All modern browsers (since ~2016)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Limited support, specific environments only</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">CSS Usage</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>color: #FF5500;</code></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>color: #FF5500CC;</code></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Not supported in CSS standards</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Primary Use</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Web design, general purpose</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Web design with transparency</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Professional image processing, HDR colors</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 my-8">
              <h3 className="text-lg font-semibold mb-2 text-amber-800 dark:text-amber-300">Why Choose 8-Digit HEX Over 16-Digit HEX?</h3>
              <p>
                While 16-digit HEX offers higher color precision, 8-digit HEX (#RRGGBBAA) has become the mainstream choice for web design. This is because 8-digit HEX is widely supported in modern browsers, compatible with CSS standards, and provides a sufficient 256 levels of color depth and transparency. In contrast, 16-digit HEX is primarily used in professional image processing and HDR environments, with less usage in web development.
              </p>
              <p className="mt-2">
                Our RGBA to HEX conversion tool focuses on the 8-digit HEX format, providing web developers with the most practical and compatible color conversion solution.
              </p>
            </div>

            <p>
              The main difference between standard 6-digit HEX and 8-digit HEX is the ability to represent transparency. While the standard 6-digit HEX has long been the traditional method for color representation in CSS, it lacks the ability to express transparency, requiring developers to switch to rgba() notation when transparency effects are needed.
            </p>

            <p>
              By using 8-digit HEX, developers can maintain consistent HEX notation throughout their codebase while leveraging transparency effects. This merger simplifies color management and provides greater consistency in coding style. While 16-digit HEX offers higher precision, it&apos;s not suitable for regular web development due to limited browser support and larger file sizes.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-lg font-semibold mb-4">Opacity Representation in 8-Digit HEX</h3>
              <p className="mb-4">
                Here&apos;s how different opacity levels appear in 8-digit HEX format:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="h-16 bg-gray-200 dark:bg-gray-700 relative rounded">
                    <div className="absolute inset-0 rounded" style={{backgroundColor: 'rgba(255, 0, 0, 1)'}}></div>
                  </div>
                  <p className="text-sm text-center mt-2">100% - <code>#FF0000FF</code></p>
                </div>
                <div>
                  <div className="h-16 bg-gray-200 dark:bg-gray-700 relative rounded">
                    <div className="absolute inset-0 rounded" style={{backgroundColor: 'rgba(255, 0, 0, 0.75)'}}></div>
                  </div>
                  <p className="text-sm text-center mt-2">75% - <code>#FF0000BF</code></p>
                </div>
                <div>
                  <div className="h-16 bg-gray-200 dark:bg-gray-700 relative rounded">
                    <div className="absolute inset-0 rounded" style={{backgroundColor: 'rgba(255, 0, 0, 0.5)'}}></div>
                  </div>
                  <p className="text-sm text-center mt-2">50% - <code>#FF000080</code></p>
                </div>
                <div>
                  <div className="h-16 bg-gray-200 dark:bg-gray-700 relative rounded">
                    <div className="absolute inset-0 rounded" style={{backgroundColor: 'rgba(255, 0, 0, 0.25)'}}></div>
                  </div>
                  <p className="text-sm text-center mt-2">25% - <code>#FF000040</code></p>
                </div>
              </div>
            </div>

            {/* The Conversion Process Explained Section */}
            <h2 id="conversion" className="flex items-center scroll-mt-24 mt-12">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">03</span>
              The Conversion Process Explained
            </h2>

            <p>
              Converting RGBA colors to 8-digit HEX involves a systematic transformation of decimal values to 
              hexadecimal representation. Let&apos;s break down this process step-by-step:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl my-8">
              <h3 className="text-lg font-semibold mb-4">Step-by-Step RGBA to 8-Digit HEX Conversion</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">1</span>
                  <div>
                    <p className="font-medium">Normalize RGB Values</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Ensure each RGB component is an integer between 0 and 255.
                    </p>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 text-sm overflow-x-auto">
                      <code>
                        r = Math.min(255, Math.max(0, Math.round(r)));<br/>
                        g = Math.min(255, Math.max(0, Math.round(g)));<br/>
                        b = Math.min(255, Math.max(0, Math.round(b)));
                      </code>
                    </pre>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">2</span>
                  <div>
                    <p className="font-medium">Normalize Alpha Value</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Ensure alpha is a decimal between 0 and 1.
                    </p>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 text-sm overflow-x-auto">
                      <code>
                        a = Math.min(1, Math.max(0, a));
                      </code>
                    </pre>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">3</span>
                  <div>
                    <p className="font-medium">Convert RGB to Hexadecimal</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Convert each RGB component to a 2-digit hexadecimal string.
                    </p>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 text-sm overflow-x-auto">
                      <code>
                        {`const toHex = (n) => {
  const hex = Math.round(n).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

const hexR = toHex(r);
const hexG = toHex(g);
const hexB = toHex(b);`}
                      </code>
                    </pre>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">4</span>
                  <div>
                    <p className="font-medium">Convert Alpha to Hexadecimal</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Convert alpha (0-1) to a value between 0-255, then to a 2-digit hexadecimal.
                    </p>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 text-sm overflow-x-auto">
                      <code>
                        const alpha = Math.round(a * 255);<br/>
                        const hexA = toHex(alpha);
                      </code>
                    </pre>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">5</span>
                  <div>
                    <p className="font-medium">Combine the Hexadecimal Values</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Concatenate the hexadecimal components with a # prefix.
                    </p>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 text-sm overflow-x-auto">
                      <code>
                        {`const hex8 = '#' + toHex(r) + toHex(g) + toHex(b) + toHex(alpha);
return hex8.toUpperCase(); // Optional: convert to uppercase`}
                      </code>
                    </pre>
                  </div>
                </li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Example Conversion</h3>
            <p>
              Let&apos;s walk through a complete example of converting <code>rgba(45, 125, 220, 0.8)</code> to 8-digit HEX:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-6">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-5 md:col-span-1">
                  <div 
                    className="h-full min-h-24 rounded bg-gray-200 dark:bg-gray-700 relative"
                  >
                    <div 
                      className="absolute inset-0 rounded" 
                      style={{backgroundColor: 'rgba(45, 125, 220, 0.8)'}}
                    ></div>
                  </div>
                </div>
                <div className="col-span-5 md:col-span-4">
                  <ol className="space-y-2 text-sm">
                    <li><strong>Input:</strong> rgba(45, 125, 220, 0.8)</li>
                    <li>
                      <strong>Step 1 (Normalize RGB):</strong> r = 45, g = 125, b = 220 (already integers between 0-255)
                    </li>
                    <li>
                      <strong>Step 2 (Normalize Alpha):</strong> a = 0.8 (already between 0-1)
                    </li>
                    <li>
                      <strong>Step 3 (RGB to Hex):</strong><br/>
                      r (45) → 2D (because 45 in base 16 is 2D)<br/>
                      g (125) → 7D (because 125 in base 16 is 7D)<br/>
                      b (220) → DC (because 220 in base 16 is DC)
                    </li>
                    <li>
                      <strong>Step 4 (Alpha to Hex):</strong><br/>
                      a (0.8) → 0.8 * 255 = 204 → CC (because 204 in base 16 is CC)
                    </li>
                    <li>
                      <strong>Step 5 (Combine):</strong> #2D7DDCCC
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <p className="font-medium text-blue-800 dark:text-blue-300">Final Result:</p>
                    <p className="font-mono">#2D7DDCCC</p>
                  </div>
                </div>
              </div>
            </div>

            <p>
              This conversion process is bidirectional—you can convert from 8-digit HEX back to RGBA by splitting the 
              hexadecimal string into its components, converting each to decimal, and constructing an RGBA functional notation.
            </p>

            {/* Practical Applications Section */}
            <h2 id="applications" className="flex items-center scroll-mt-24 mt-12">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">04</span>
              Practical Applications
            </h2>

            <p>
              The ability to convert RGBA colors to 8-digit HEX opens up numerous practical applications across web 
              development, design, and digital content creation. Here are some of the key use cases:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                  Modern CSS Development
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Concise Color Definitions</strong>: Use 8-digit HEX instead of rgba() for cleaner, more consistent CSS</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>CSS Variables</strong>: Define color systems with transparency in a more compact form</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Gradients</strong>: Create complex gradients with transparent color stops</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Box Shadows</strong>: Define transparent shadows for more realistic effects</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded">
                  <pre className="text-sm overflow-x-auto">
                    <code>
                      {`:root {
  --primary-color: #2D7DDC;
  --primary-faded: #2D7DDC80; /* 50% opacity */
}

.overlay {
  background-color: #00000080; /* Semi-transparent black */
}

.gradient {
  background: linear-gradient(
    to right,
    #FF000080,
    #00FF0080
  );
}

.shadow-effect {
  box-shadow: 0 4px 6px #0000004D; /* 30% opacity */
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                  UI/UX Design
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Design Systems</strong>: Maintain consistent color notation across design and code</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Design-to-Code Handoff</strong>: Simplify the transition from design tools to implementation</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Glass Morphism</strong>: Create modern glass effects with precise opacity control</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Layer Effects</strong>: Define transparent overlays and blends with precise control</span>
                  </li>
                </ul>
                <figure className="mt-6">
                  <div className="relative h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-24 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 flex items-center justify-center shadow-lg">
                        <p className="text-white font-medium">Glass Morphism Effect</p>
                      </div>
                    </div>
                  </div>
                  <figcaption className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                    Glass effect created with rgba(255, 255, 255, 0.2) or #FFFFFF33
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Web Application Development
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Theming Systems</strong>: Create dynamic themes with consistent color notation</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Data Visualization</strong>: Use semi-transparent colors for better chart readability</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Dynamic UI</strong>: Generate color variants with varying opacity levels</span>
                  </li>
                </ul>
                <div className="mt-6 h-40 bg-gray-100 dark:bg-gray-900 rounded-lg p-4 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <div className="h-4 rounded-full bg-blue-500 bg-opacity-20 mb-2">
                      <div className="h-4 rounded-full bg-blue-500" style={{width: '65%'}}></div>
                    </div>
                    <div className="h-4 rounded-full bg-green-500 bg-opacity-20 mb-2">
                      <div className="h-4 rounded-full bg-green-500" style={{width: '80%'}}></div>
                    </div>
                    <div className="h-4 rounded-full bg-purple-500 bg-opacity-20 mb-2">
                      <div className="h-4 rounded-full bg-purple-500" style={{width: '45%'}}></div>
                    </div>
                    <div className="h-4 rounded-full bg-yellow-500 bg-opacity-20">
                      <div className="h-4 rounded-full bg-yellow-500" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Digital Art and Media
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>SVG Graphics</strong>: Define transparent fill and stroke colors in a compact format</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Canvas Applications</strong>: Simplify color handling in JavaScript canvas drawing</span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Web Animation</strong>: Create smoother color transitions including alpha changes</span>
                  </li>
                </ul>
                <div className="mt-6 h-40 bg-gray-100 dark:bg-gray-900 rounded-lg p-4 flex items-center justify-center">
                  <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="#FF000080" />
                    <circle cx="100" cy="50" r="40" fill="#00FF0080" />
                    <circle cx="150" cy="50" r="40" fill="#0000FF80" />
                  </svg>
                </div>
              </div>
            </div>

            <p>
              These applications demonstrate the versatility and utility of 8-digit HEX colors. By providing a 
              concise way to represent colors with transparency, this format bridges the gap between the traditional 
              benefits of hexadecimal notation and the modern need for opacity control in digital design and development.
            </p>

            {/* Implementation in Different Languages Section */}
            <h2 id="implementation" className="flex items-center scroll-mt-24 mt-12">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">05</span>
              Implementation in Different Languages
            </h2>

            <p>
              The conversion from RGBA to 8-digit HEX can be implemented across various programming languages. 
              Let&apos;s explore how this conversion works in some of the most popular languages used in web development.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden my-8">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex">
                  <button className="py-4 px-6 bg-blue-50 dark:bg-blue-900/30 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 font-medium">
                    JavaScript
                  </button>
                  <button className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    TypeScript
                  </button>
                  <button className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    Python
                  </button>
                  <button className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    PHP
                  </button>
                </nav>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">JavaScript Implementation</h3>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code>{`/**
 * Converts RGBA color values to 8-digit hexadecimal representation
 * @param {number} r - Red component (0-255)
 * @param {number} g - Green component (0-255)
 * @param {number} b - Blue component (0-255)
 * @param {number} a - Alpha component (0-1)
 * @returns {string} 8-digit hexadecimal color string
 */
function rgbaToHex8(r, g, b, a = 1) {
  // Input validation and normalization
  r = Math.min(255, Math.max(0, Math.round(r)));
  g = Math.min(255, Math.max(0, Math.round(g)));
  b = Math.min(255, Math.max(0, Math.round(b)));
  a = Math.min(1, Math.max(0, a));
  
  // Convert to hex values
  const toHex = (n) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  // Convert alpha to 0-255 range and then to hex
  const alpha = Math.round(a * 255);
  
  // Combine all values with # prefix
  return '#' + toHex(r) + toHex(g) + toHex(b) + toHex(alpha);
}

// Example usage
const color = rgbaToHex8(45, 125, 220, 0.8);
console.log(color); // Outputs: #2D7DDCCC`}</code>
                </pre>

                <h4 className="text-lg font-semibold mt-6 mb-2">Modern JavaScript with Object Parameter</h4>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code>{`/**
 * Converts RGBA color object to 8-digit hexadecimal representation
 * @param {Object} rgba - RGBA color object
 * @param {number} rgba.r - Red component (0-255)
 * @param {number} rgba.g - Green component (0-255)
 * @param {number} rgba.b - Blue component (0-255)
 * @param {number} rgba.a - Alpha component (0-1)
 * @returns {string} 8-digit hexadecimal color string
 */
const rgbaToHex8 = ({ r, g, b, a = 1 }) => {
  const toHex = (n) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  // Validate and normalize input values
  const validR = Math.min(255, Math.max(0, Math.round(r)));
  const validG = Math.min(255, Math.max(0, Math.round(g)));
  const validB = Math.min(255, Math.max(0, Math.round(b)));
  const validA = Math.min(1, Math.max(0, a));
  
  // Convert alpha to 0-255 range and then to hex
  const alpha = Math.round(validA * 255);
  
  // Combine all values
  return '#' + 
    toHex(validR) + 
    toHex(validG) + 
    toHex(validB) + 
    toHex(alpha);
};

// Example usage
const color = rgbaToHex8({ r: 45, g: 125, b: 220, a: 0.8 });
console.log(color); // Outputs: #2D7DDCCC`}</code>
                </pre>

                <h4 className="text-lg font-semibold mt-6 mb-2">React Hook Implementation</h4>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code>{`import { useState, useCallback } from 'react';

/**
 * Custom React hook for RGBA to HEX conversion
 * @returns {Object} RGBA state and conversion methods
 */
function useRgbaToHex() {
  const [rgba, setRgba] = useState({ r: 45, g: 125, b: 220, a: 0.8 });
  
  // Conversion function
  const toHex8 = useCallback(() => {
    const toHex = (n) => {
      const hex = Math.round(n).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    const { r, g, b, a } = rgba;
    const alpha = Math.round(a * 255);
    
    return '#' + 
      toHex(r) + 
      toHex(g) + 
      toHex(b) + 
      toHex(alpha);
  }, [rgba]);
  
  // Get 6-digit HEX (without alpha)
  const toHex6 = useCallback(() => {
    return toHex8().substring(0, 7);
  }, [toHex8]);
  
  // Update a single RGBA component
  const updateComponent = useCallback((key, value) => {
    setRgba(prev => ({ ...prev, [key]: value }));
  }, []);
  
  return {
    rgba,
    setRgba,
    updateComponent,
    hex8: toHex8(),
    hex6: toHex6()
  };
}

// Example usage in a component
function ColorConverter() {
  const { rgba, setRgba, updateComponent, hex8, hex6 } = useRgbaToHex();
  
  return (
    <div>
      <div>
        <label>Red: {rgba.r}</label>
        <input 
          type="range" 
          min="0" 
          max="255" 
          value={rgba.r}
          onChange={e => updateComponent('r', parseInt(e.target.value))}
        />
      </div>
      {/* Similar inputs for G, B, and A */}
      
      <div>
        <p>8-digit HEX: {hex8}</p>
        <p>6-digit HEX: {hex6}</p>
      </div>
    </div>
  );
}`}</code>
                </pre>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-6">
                  <h4 className="text-md font-semibold mb-2">Key Points About JavaScript Implementation</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>JavaScript provides the <code>toString(16)</code> method which makes hexadecimal conversion straightforward.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Always include input validation to ensure values are within the proper ranges.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>The <code>padStart(2, &apos;0&apos;)</code> method or similar logic ensures proper formatting of single-digit hex values.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>In React applications, memoization with <code>useCallback</code> can optimize performance for repetitive conversions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Python Implementation</h3>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`def rgba_to_hex8(r, g, b, a=1.0):
    """
    Convert RGBA color values to 8-digit hexadecimal representation.
    
    Args:
        r (int): Red component (0-255)
        g (int): Green component (0-255)
        b (int): Blue component (0-255)
        a (float): Alpha component (0-1)
        
    Returns:
        str: 8-digit hexadecimal color string
    """
    # Input validation and normalization
    r = min(255, max(0, round(r)))
    g = min(255, max(0, round(g)))
    b = min(255, max(0, round(b)))
    a = min(1.0, max(0.0, a))
    
    # Convert alpha to 0-255 range
    alpha = round(a * 255)
    
    # Format components as hex and combine
    return f"#{r:02x}{g:02x}{b:02x}{alpha:02x}".upper()

# Example usage
color = rgba_to_hex8(45, 125, 220, 0.8)
print(color)  # Outputs: #2D7DDCCC`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-4">PHP Implementation</h3>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<?php
/**
 * Convert RGBA color values to 8-digit hexadecimal representation
 * 
 * @param int $r Red component (0-255)
 * @param int $g Green component (0-255)
 * @param int $b Blue component (0-255)
 * @param float $a Alpha component (0-1)
 * @return string 8-digit hexadecimal color string
 */
function rgba_to_hex8($r, $g, $b, $a = 1.0) {
    // Input validation and normalization
    $r = min(255, max(0, round($r)));
    $g = min(255, max(0, round($g)));
    $b = min(255, max(0, round($b)));
    $a = min(1.0, max(0.0, $a));
    
    // Convert alpha to 0-255 range
    $alpha = round($a * 255);
    
    // Format components as hex and combine
    return sprintf("#%02X%02X%02X%02X", $r, $g, $b, $alpha);
}

// Example usage
$color = rgba_to_hex8(45, 125, 220, 0.8);
echo $color;  // Outputs: #2D7DDCCC
?>`}</code>
            </pre>

            <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 my-8">
              <h3 className="text-lg font-semibold mb-2 text-amber-800 dark:text-amber-300">Implementation Considerations</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span><strong>Input Validation</strong>: Always validate and normalize input values to ensure they fall within the appropriate ranges.</span>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span><strong>Formatting</strong>: Ensure each component is formatted as a 2-digit hexadecimal value, padding with zeros when necessary.</span>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span><strong>Performance</strong>: In high-performance applications, consider caching conversion results for frequently used colors.</span>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span><strong>Case Consistency</strong>: Decide whether to use uppercase or lowercase for hexadecimal values and maintain consistency.</span>
                </li>
              </ul>
            </div>

            <p>
              These implementations demonstrate how the RGBA to 8-digit HEX conversion can be achieved across different 
              programming languages. The core algorithm remains consistent, with adjustments made to accommodate the 
              specific syntax and features of each language.
            </p>

            {/* Tool Section - Add comparison with 16-bit HEX */}
            <h2 id="tool" className="flex items-center scroll-mt-24 mt-12">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">06</span>
              Our RGBA to 8-Digit HEX Tool
            </h2>

            <p>
              Our RGBA to 8-digit HEX converter tool is designed with both functionality and user experience in mind. The tool provides a seamless interface for converting colors with transparency between different notations. Unlike traditional 16-digit HEX tools, we focus on the more practical and widely compatible 8-digit HEX format.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 my-8">
              <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-300">8-Digit vs 16-Digit HEX Tools: Why We Chose the 8-Digit Format</h3>
              <p>
                While 16-digit HEX tools provide higher color precision (65,536 levels per channel vs 256 levels), our RGBA to HEX tool focuses on the 8-digit format for three key reasons:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Compatibility</strong>: 8-digit HEX format is supported by all modern browsers, while 16-digit HEX has limited support in web environments.</li>
                <li><strong>Practicality</strong>: For web design, 256 color depth levels are sufficient to meet visual requirements, with minimal benefits from the additional precision.</li>
                <li><strong>Simplicity</strong>: 8-digit HEX format is shorter, easier to read and use, helping to maintain clean and concise code.</li>
              </ul>
            </div>

            <div className="my-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Key Features of Our RGBA to HEX Tool</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Real-time Preview</strong>: See your colors change instantly as you adjust RGBA values.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Preset Color Palette</strong>: Access commonly used colors with one click.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Random Color Generator</strong>: Explore new color combinations instantly.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Code Snippets</strong>: Copy ready-to-use code snippets for CSS, JavaScript, and more.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Transparency Visualization</strong>: Clearly see how different alpha values affect your color on different backgrounds.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>High Performance</strong>: Our tool provides faster conversion speeds and lower memory usage compared to traditional 16-digit HEX tools.</span>
                    </li>
                    <li className="flex">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Web Optimization</strong>: The generated 8-digit HEX code is directly usable in modern CSS, eliminating the need for additional conversion.</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                      <h3 className="font-bold">RGBA to 8-Digit HEX Converter</h3>
                    </div>
                    <div className="p-4">
                      <div className="mb-4 text-center">
                        <div className="h-24 w-24 mx-auto rounded-lg shadow-inner" style={{backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'}}>
                          <div className="h-full w-full" style={{backgroundColor: 'rgba(41, 121, 255, 0.75)'}}></div>
                        </div>
                        <div className="mt-2 font-mono text-sm">#2979FFBF</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>R: 41</span>
                          <input type="range" className="w-2/3" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span>G: 121</span>
                          <input type="range" className="w-2/3" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span>B: 255</span>
                          <input type="range" className="w-2/3" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span>A: 0.75</span>
                          <input type="range" className="w-2/3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 my-8">
              <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-300">Why Use Our Tool?</h3>
              <p>Our RGBA to 8-digit HEX converter offers precision and ease of use that surpasses standard color pickers. With built-in validation, accessibility checking, and detailed color information, it serves as a comprehensive solution for professional color manipulation.</p>
            </div>

            <p>
              The tool is built with modern web technologies, providing a responsive experience across all devices. Whether you&apos;re a seasoned developer or a design enthusiast, our converter streamlines the process of working with transparent colors in modern web design.
            </p>

            {/* Browser Support Section */}
            <h2 id="browser-support" className="flex items-center scroll-mt-24 mt-12">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">07</span>
              Browser Support and Compatibility
            </h2>

            <p>
              The adoption of 8-digit hexadecimal color notation has grown substantially in recent years, but browser support varies. Understanding the compatibility landscape is essential for implementing transparent colors effectively.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Browser</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Support for 8-Digit HEX</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Version Introduced</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Chrome</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">Full Support</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Chrome 62+</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Full support in both CSS and Canvas API</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Firefox</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">Full Support</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Firefox 49+</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Supports 8-digit hex in all relevant contexts</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Safari</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">Full Support</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Safari 10+</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Consistent implementation across WebKit</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Edge</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">Full Support</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Edge 79+ (Chromium)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Since switching to Chromium engine</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Internet Explorer</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 text-red-600 dark:text-red-400">No Support</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">N/A</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Use rgba() function as fallback</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Opera</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">Full Support</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Opera 49+</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Based on Chromium with equivalent support</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Fallback Strategies for Older Browsers</h3>
            <p>
              When implementing 8-digit HEX colors, it&apos;s important to provide fallbacks for browsers that don&apos;t support this format. Here are some recommended approaches:
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow my-6">
              <div className="p-4">
                <h4 className="font-semibold mb-3">Progressive Enhancement with CSS Variables</h4>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code>{`:root {
  --brand-color-rgb: 41, 121, 255;
  --brand-alpha: 0.75;
}

.element {
  /* Fallback for all browsers */
  background-color: rgba(var(--brand-color-rgb), var(--brand-alpha));
  
  /* Modern browsers will use this */
  background-color: #2979FFBF;
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow my-6">
              <div className="p-4">
                <h4 className="font-semibold mb-3">Feature Detection with @supports</h4>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code>{`/* Base styles for all browsers */
.element {
  background-color: rgba(41, 121, 255, 0.75);
}

/* Only applies if 8-digit hex is supported */
@supports (color: #2979FFBF) {
  .element {
    background-color: #2979FFBF;
  }
}`}</code>
                </pre>
              </div>
            </div>

            <p>
              By implementing these fallback strategies, you can ensure that your designs maintain visual consistency across all browsers while taking advantage of the more concise 8-digit HEX format in modern environments.
            </p>

            {/* Best Practices Section */}
            <h2 id="best-practices" className="flex items-center scroll-mt-24 mt-12">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">08</span>
              Best Practices for Transparent Colors
            </h2>

            <p>
              Working with transparent colors in web design requires thoughtful implementation to achieve optimal results. Here are key best practices to follow when using 8-digit HEX colors with alpha transparency:
            </p>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
                <div className="flex items-start mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">Consider Background Context</h3>
                </div>
                <p>
                  Transparent colors appear differently depending on their background. Always test your designs on various background colors and patterns to ensure readability and visual harmony.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
                <div className="flex items-start mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">Maintain Accessibility</h3>
                </div>
                <p>
                  Ensure sufficient contrast ratios when using transparent colors, especially for text. Use tools like the WCAG Contrast Checker to validate that your designs meet accessibility standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
                <div className="flex items-start mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">Document Color Systems</h3>
                </div>
                <p>
                  Maintain a color system documentation that includes both RGBA and 8-digit HEX formats for consistent implementation across your project or team.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
                <div className="flex items-start mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">Optimize Performance</h3>
                </div>
                <p>
                  Transparent colors can impact rendering performance, especially when layered. Use them judiciously and test on lower-powered devices to ensure smooth performance.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Common Transparency Use Cases</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="rounded-lg overflow-hidden">
                <div className="h-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">Text Overlay</div>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 text-sm">
                  <p className="font-semibold">Overlay for Readability</p>
                  <p className="text-xs opacity-75">Using transparent black (#00000080) to improve text contrast</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <div className="h-32 relative">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-500 shadow-lg" style={{opacity: 0.8}}></div>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 text-sm">
                  <p className="font-semibold">Soft UI Elements</p>
                  <p className="text-xs opacity-75">Semi-transparent elements for softer visual impact</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <div className="h-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-gray-900"></div>
                  <div className="absolute inset-0 bg-blend-overlay" style={{backgroundColor: 'rgba(59, 130, 246, 0.3)'}}></div>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 text-sm">
                  <p className="font-semibold">Color Blending</p>
                  <p className="text-xs opacity-75">Transparent colors for subtle gradients and effects</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 my-8">
              <p className="italic">
              &quot;Transparency in design is not just about aesthetics—it&apos;s about creating depth, hierarchy, and focus in your interfaces. 
                Use it deliberately and with purpose.&quot;
              </p>
            </div>

            {/* Conclusion Section */}
            <h2 id="conclusion" className="flex items-center scroll-mt-24 mt-12">
              <span className="mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-sm font-mono">09</span>
              Conclusion
            </h2>

            <p>
              The 8-digit HEX color format represents a significant evolution in how we express colors with transparency in web design and development. By condensing the RGBA notation into a concise hexadecimal string, it streamlines code while maintaining full support for alpha transparency.
            </p>

            <p className="mt-4">
              As we&apos;ve explored throughout this guide, converting between RGBA and 8-digit HEX involves a straightforward process that can be implemented across various programming languages. Compared to the more complex 16-digit HEX format, 8-digit HEX maintains sufficient color precision while offering better browser compatibility and more concise syntax.
            </p>

            <p className="mt-4">
              With modern browser support continuing to improve, 8-digit HEX colors are becoming increasingly viable for production environments. By following best practices and implementing appropriate fallbacks, you can leverage this format to create more efficient, readable code while maintaining cross-browser compatibility.
            </p>

            <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Try Our RGBA to 8-Digit HEX Converter Today</h3>
              <p className="mb-4">
                Start using our professional converter tool to streamline your color workflow and enhance your designs with precise transparency control.
              </p>
              <Link
                href="/tools/rgba-to-hex-8-digit-converter"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:from-blue-600 hover:to-green-600 transition-all"
              >
                Open RGBA to 8-Digit HEX Converter
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

            {/* SEO Related Content */}
            <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <a href="/blog/css-color-formats" className="text-blue-600 dark:text-blue-400 hover:underline">Complete Guide to CSS Color Formats</a>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <a href="/tools/color-contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">Color Contrast Checker Tool</a>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <a href="/blog/color-theory-web-design" className="text-blue-600 dark:text-blue-400 hover:underline">Color Theory and Application in Web Design</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 