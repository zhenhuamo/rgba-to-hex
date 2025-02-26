'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function HexToRgba() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Enhanced Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image src="/rgb.svg" alt="HEX to RGBA Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                HEX to RGBA Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional online tool to convert HEX color codes to RGBA format. Instantly transform hexadecimal colors (#RRGGBB) to RGBA values with precise alpha channel control.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for web developers, designers, and digital artists needing to convert HEX to RGBA colors for their projects.
            </p>
          </div>

          {/* 使用iframe嵌入HEX to RGBA转换工具 */}
          <div className="w-full">
            <iframe 
              src="/tools/hex-to-rgba-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="500"
              title="HEX to RGBA Color Converter"
              loading="lazy"
            />
          </div>
          
          {/* Embed This Tool Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This Tool on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You can easily embed this HEX to RGBA converter tool into your own website, blog, or online application. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/hex-to-rgba-converter?embed=true" 
  width="100%" 
  height="500" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HEX to RGBA Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hex-to-rgba-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to RGBA Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Custom Embed Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can customize the initial HEX color value of the embedded tool using URL parameters:
            </p>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
              <li><strong>defaultColor</strong>: Initial HEX color value (e.g., FF0000 for red)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For example, to set red (#FF0000) as the initial color:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<iframe 
  src="https://rgbatohex.com/tools/hex-to-rgba-converter?embed=true&defaultColor=FF0000" 
  width="100%" 
  height="500" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HEX to RGBA Color Converter - Red"
></iframe>`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Embed Example</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Embedded in a CSS Tutorial</h4>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                <h5 className="text-lg font-medium mb-4">Working with Transparency in Modern CSS</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Modern web design often requires semi-transparent elements for overlays, cards, and UI components. Convert your solid HEX colors to RGBA to add transparency with the tool below:
                </p>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-2 mb-4">
                  <div className="text-xs text-gray-500 mb-1">HEX to RGBA Converter (Example Embed)</div>
                  <div className="bg-gray-50 dark:bg-gray-900 h-10 animate-pulse rounded"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Try converting your brand colors to RGBA with different alpha values to create layered UI elements with visual hierarchy.
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Color Examples Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Complete HEX to RGBA Color Conversion Guide</h2>
            
            {/* Basic Colors */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Standard HEX to RGBA Conversions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Primary Colors</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #FF0000 → rgba(255, 0, 0, 1)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-green-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #00FF00 → rgba(0, 255, 0, 1)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #0000FF → rgba(0, 0, 255, 1)
                      </code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Common Web Colors</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-gray-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #808080 → rgba(128, 128, 128, 1)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-purple-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #800080 → rgba(128, 0, 128, 1)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-yellow-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #FFFF00 → rgba(255, 255, 0, 1)
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transparency Examples */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Transparency in HEX and RGBA</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The 8-digit HEX color format supports transparency through the alpha channel. The last two digits control opacity:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Opacity Levels</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #0000FFFF → rgba(0, 0, 255, 1.0)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500 opacity-75"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #0000FFBF → rgba(0, 0, 255, 0.75)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500 opacity-50"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #0000FF80 → rgba(0, 0, 255, 0.5)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500 opacity-25"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #0000FF40 → rgba(0, 0, 255, 0.25)
                      </code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Alpha Conversion</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Alpha value conversion from HEX to decimal:
                  </p>
                  <ul className="space-y-3">
                    <li className="text-sm">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">FF</code> = 255/255 = 1.0
                    </li>
                    <li className="text-sm">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">CC</code> = 204/255 = 0.8
                    </li>
                    <li className="text-sm">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">80</code> = 128/255 = 0.5
                    </li>
                    <li className="text-sm">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">33</code> = 51/255 = 0.2
                    </li>
                    <li className="text-sm">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">00</code> = 0/255 = 0.0
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Practical Uses in CSS</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Using RGBA values gives you more flexibility in CSS than using only opaque HEX colors:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`.element {
  /* Solid color from HEX to RGBA */
  background-color: rgba(255, 0, 0, 1);    /* #FF0000 */
  
  /* Semi-transparent color */
  background-color: rgba(255, 0, 0, 0.5);  /* #FF000080 */
  
  /* Border with transparency */
  border: 2px solid rgba(0, 0, 255, 0.3); /* #0000FF4D */
  
  /* Text color with opacity */
  color: rgba(0, 0, 0, 0.87);            /* #000000DE */
}`}</code>
              </pre>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">JavaScript Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Convert HEX to RGBA programmatically with this JavaScript function:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`// Complete HEX to RGBA converter function
const hexToRgba = (hex) => {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Handle different HEX formats
  let r, g, b, a = 1;
  
  if (hex.length === 3) {
    // Convert 3-digit HEX to 6-digit
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else if (hex.length === 8) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
    a = parseInt(hex.slice(6, 8), 16) / 255;
  }
  
  return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
}`}</code>
              </pre>
            </div>
          </div>

          {/* Enhanced FAQ Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About HEX to RGBA Conversion</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What is the difference between HEX and RGBA color formats?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX colors use hexadecimal notation (#RRGGBB) to represent colors, while RGBA uses decimal values (0-255) for red, green, and blue channels, plus an alpha value (0-1) for transparency. Converting from HEX to RGBA allows for more intuitive opacity control and better browser support in some cases.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Why should I convert HEX to RGBA?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Converting HEX to RGBA offers several advantages:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Easy transparency control with the alpha channel</li>
                  <li>Better browser compatibility for certain features</li>
                  <li>More intuitive color value manipulation</li>
                  <li>Simplified color animations in CSS</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How do I convert 8-digit HEX colors to RGBA?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  8-digit HEX colors (#RRGGBBAA) include an alpha channel. The last two digits (AA) represent opacity, where FF is fully opaque (1) and 00 is fully transparent (0). Our converter automatically handles this conversion, translating the alpha value to a decimal between 0 and 1.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Are there browser compatibility issues with RGBA colors?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  RGBA colors are widely supported in all modern browsers. However, for older browsers, it&apos;s good practice to provide a fallback HEX color. Example:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-2">
                  <code>{`.element {
  background-color: #FF0000;  /* Fallback */
  background-color: rgba(255, 0, 0, 0.5);
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Additional Resources for Color Conversion</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Related Tools</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <Link href="/" className="text-blue-500 hover:text-blue-600">
                      → RGBA to HEX Converter
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Useful Articles</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Understanding Color Formats in Web Development</li>
                  <li>Best Practices for Using RGBA Colors in CSS</li>
                  <li>Working with Color Transparency in Modern Web Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 