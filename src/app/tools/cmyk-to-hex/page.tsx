'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function CmykToHex() {
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
              <Image src="/rgb.svg" alt="CMYK to HEX Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500">
                CMYK to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional online tool to convert print-ready CMYK colors to web-compatible HEX format. Instantly transform your print design colors to web-friendly hexadecimal color codes.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for graphic designers, web developers, and print professionals who need to maintain color consistency across print and digital media.
            </p>
          </div>

          {/* 使用iframe嵌入CMYK to HEX转换工具 */}
          <div className="w-full">
            <iframe 
              src="/tools/cmyk-to-hex-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="650"
              title="CMYK to HEX Color Converter"
              loading="lazy"
            />
            
            {/* Add navigation button */}
            <div className="flex justify-center mt-6">
              <Link 
                href="/tools/cmyk-to-hex-converter" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500 rounded-full font-medium hover:from-cyan-600 hover:via-purple-600 hover:to-yellow-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </Link>
            </div>
          </div>
          
          {/* Embed Guide Section - 移到这里，工具下方 */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This Tool on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You can easily embed this CMYK to HEX converter tool into your own website, blog, or online application. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/cmyk-to-hex-converter?embed=true" 
  width="100%" 
  height="650" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="CMYK to HEX Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/cmyk-to-hex-converter?embed=true" width="100%" height="650" style="border:none;border-radius:12px;overflow:hidden;" title="CMYK to HEX Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Custom Embed Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can customize the initial CMYK values of the embedded tool using URL parameters:
            </p>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
              <li><strong>c</strong>: Initial cyan value (0-100)</li>
              <li><strong>m</strong>: Initial magenta value (0-100)</li>
              <li><strong>y</strong>: Initial yellow value (0-100)</li>
              <li><strong>k</strong>: Initial key (black) value (0-100)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For example, to set pure magenta (C:0, M:100, Y:0, K:0) as the initial color:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<iframe 
  src="https://rgbatohex.com/tools/cmyk-to-hex-converter?embed=true&c=0&m=100&y=0&k=0" 
  width="100%" 
  height="650" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="CMYK to HEX Color Converter - Magenta"
></iframe>`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Embed Example</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Embedded in a Print Design Tutorial</h4>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                <h5 className="text-lg font-medium mb-4">Converting Print Colors for Web Usage</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When preparing a print design for web presentation, you need to convert your CMYK colors to web-compatible formats. Use this converter to transform your print color values to HEX codes:
                </p>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-2 mb-4">
                  <div className="text-xs text-gray-500 mb-1">CMYK to HEX Converter (Example Embed)</div>
                  <div className="bg-gray-50 dark:bg-gray-900 h-10 animate-pulse rounded"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Remember that some CMYK colors may appear differently on screens due to gamut limitations. Always check your converted colors on multiple devices if color accuracy is critical.
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Color Examples Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Complete CMYK to HEX Color Conversion Guide</h2>
            
            {/* Color Examples */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Common CMYK to HEX Conversions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Primary Print Colors</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-cyan-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        C:100 M:0 Y:0 K:0 → #00FFFF
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-purple-600"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        C:0 M:100 Y:0 K:0 → #FF00FF
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-yellow-400"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        C:0 M:0 Y:100 K:0 → #FFFF00
                      </code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Rich Black & Neutrals</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-black"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        C:75 M:68 Y:67 K:90 → #000000
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-gray-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        C:0 M:0 Y:0 K:50 → #808080
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-gray-300"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        C:0 M:0 Y:0 K:20 → #CCCCCC
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formula Explanation */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Understanding the Conversion Process</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Converting CMYK to HEX involves first transforming CMYK to RGB, then RGB to HEX. The formula is:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>CMYK to RGB</strong>: <code>R = 255 × (1 - C/100) × (1 - K/100)</code></li>
                  <li><code>G = 255 × (1 - M/100) × (1 - K/100)</code></li>
                  <li><code>B = 255 × (1 - Y/100) × (1 - K/100)</code></li>
                  <li><strong>RGB to HEX</strong>: Convert each RGB component to hexadecimal and concatenate</li>
                </ol>
              </div>
            </div>

            {/* JavaScript Implementation */}
            <div>
              <h3 className="text-xl font-semibold mb-4">JavaScript Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Here&apos;s a JavaScript function that converts CMYK to HEX:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`// CMYK to HEX converter function
function cmykToHex(c, m, y, k) {
  // Convert CMYK to RGB
  let r = 255 * (1 - c/100) * (1 - k/100);
  let g = 255 * (1 - m/100) * (1 - k/100);
  let b = 255 * (1 - y/100) * (1 - k/100);
  
  // Round RGB values to integers
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  
  // Convert RGB to HEX
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return '#' + toHex(r) + toHex(g) + toHex(b);
}`}</code>
              </pre>
            </div>
          </div>

          {/* Print Considerations Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Print to Web: Important Considerations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Color Gamut Differences</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  CMYK is a subtractive color model used in print, while HEX represents colors in the RGB additive model used for digital displays. The CMYK gamut is smaller than RGB, meaning some web colors cannot be accurately reproduced in print. Our converter provides the closest possible match, but be aware of these limitations when working across mediums.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Rich Black vs. Web Black</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  In print, a &ldquo;rich black&ldquo; (typically C:75 M:68 Y:67 K:90) creates a deeper black than using K:100 alone. However, on the web, black is simply #000000. Similar discrepancies exist for other colors, which is why professional designers often maintain separate color palettes for print and digital projects.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Pantone and Spot Colors</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  If you&apos;re working with Pantone or other spot colors, be especially careful when converting to web colors. Spot colors often have unique properties that cannot be fully captured in RGB/HEX. For the best results, refer to official Pantone color bridge guides that provide validated HEX equivalents.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Additional Color Conversion Resources</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Related Tools</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <Link href="/" className="text-blue-500 hover:text-blue-600">
                      → RGBA to HEX Converter
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/hex-to-rgba" className="text-blue-500 hover:text-blue-600">
                      → HEX to RGBA Converter
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/hsl-to-hex" className="text-blue-500 hover:text-blue-600">
                      → HSL to HEX Converter
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Print & Web Design Articles</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Understanding Color Models: CMYK vs RGB</li>
                  <li>Best Practices for Cross-Media Color Management</li>
                  <li>Print to Web: Maintaining Brand Color Consistency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 