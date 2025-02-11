'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HexInput from '@/components/HexInput';
import RgbaDisplay from '@/components/RgbaDisplay';
import { hexToRgba, RGBA } from '@/utils/colorConverter';

export default function HexToRgba() {
  const [hexValue, setHexValue] = useState('#FFFFFF');
  const [rgbaValue, setRgbaValue] = useState<RGBA | null>(null);

  useEffect(() => {
    const rgba = hexToRgba(hexValue);
    setRgbaValue(rgba);
  }, [hexValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <nav className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300 font-medium">
              RGBA to HEX
            </Link>
            <Link href="/tools/hex-to-rgba" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              HEX to RGBA
            </Link>
          </div>
        </nav>

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

          {/* Conversion Tool Area */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 space-y-6">
            {/* HEX input area */}
            <HexInput value={hexValue} onChange={setHexValue} />

            {/* Color preview area */}
            <div className="h-32 rounded-xl shadow-inner transition-colors duration-200 relative overflow-hidden">
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
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: rgbaValue
                    ? `rgba(${rgbaValue.r}, ${rgbaValue.g}, ${rgbaValue.b}, ${rgbaValue.a})`
                    : 'transparent'
                }}
              />
            </div>

            {/* RGBA display area */}
            <RgbaDisplay rgba={rgbaValue} />
          </div>

          {/* Enhanced Color Examples Section */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
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
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">HEX to RGBA with Alpha Channel</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Converting 8-digit HEX codes to RGBA values with transparency. The last two digits in HEX control the alpha channel.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">50% Transparency</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-500 opacity-50"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #FF000080 → rgba(255, 0, 0, 0.5)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500 opacity-50"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #0000FF80 → rgba(0, 0, 255, 0.5)
                      </code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Various Opacity Levels</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-green-500 opacity-75"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #00FF00BF → rgba(0, 255, 0, 0.75)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-purple-500 opacity-25"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #80008040 → rgba(128, 0, 128, 0.25)
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Usage Guide */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Comprehensive Guide: Converting HEX to RGBA Colors</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Understanding HEX to RGBA Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The process of converting HEX to RGBA involves translating hexadecimal color values into their decimal equivalents. Each pair of HEX digits represents a color channel value from 0 to 255.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">HEX Color Format Structure:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>#RRGGBB - Standard 6-digit HEX code</li>
                    <li>#RRGGBBAA - 8-digit HEX code with alpha</li>
                    <li>#RGB - Shorthand 3-digit HEX code</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Step-by-Step HEX to RGBA Conversion</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">1. Enter Your HEX Color</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Input any valid HEX color code into the converter. The tool automatically handles:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                      <li>3-digit HEX shortcuts (#RGB)</li>
                      <li>Standard 6-digit HEX codes (#RRGGBB)</li>
                      <li>8-digit HEX codes with alpha channel (#RRGGBBAA)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3">2. Understanding the Output</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      The converter provides RGBA values where:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Red: 0-255 (from HEX RR)</li>
                      <li>Green: 0-255 (from HEX GG)</li>
                      <li>Blue: 0-255 (from HEX BB)</li>
                      <li>Alpha: 0-1 (from HEX AA, if present)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Programming Examples */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Implementation Examples: HEX to RGBA Conversion</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">CSS Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Use RGBA colors in various CSS properties for colors with transparency:
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

              <div>
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