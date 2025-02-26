'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function RgbToHsl() {
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
              <Image src="/rgb.svg" alt="RGB to HSL Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                RGB to HSL Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional online tool to convert RGB color values to HSL format. Easily transform web colors using Red, Green, and Blue values to intuitive Hue, Saturation, and Lightness format.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for web developers, designers, and digital artists who need to work with color in more intuitive ways.
            </p>
          </div>

          {/* 使用iframe嵌入RGB to HSL转换工具 */}
          <div className="w-full">
            <iframe 
              src="/tools/rgb-to-hsl-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="600"
              title="RGB to HSL Color Converter"
              loading="lazy"
            />
          </div>
          
          {/* Embed Guide Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This Tool on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You can easily embed this RGB to HSL converter tool into your own website, blog, or online application. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGB to HSL Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to HSL Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Custom Embed Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can customize the initial RGB values of the embedded tool using URL parameters:
            </p>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
              <li><strong>r</strong>: Initial red value (0-255)</li>
              <li><strong>g</strong>: Initial green value (0-255)</li>
              <li><strong>b</strong>: Initial blue value (0-255)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For example, to set sky blue (R:135, G:206, B:235) as the initial color:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<iframe 
  src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true&r=135&g=206&b=235" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGB to HSL Color Converter - Sky Blue"
></iframe>`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Embed Example</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Embedded in a Web Design Tutorial</h4>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                <h5 className="text-lg font-medium mb-4">Understanding Color Models for Web Design</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  While RGB is great for defining colors programmatically, HSL makes it much easier to think about colors intuitively. Convert your RGB colors to HSL to better understand their properties:
                </p>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-2 mb-4">
                  <div className="text-xs text-gray-500 mb-1">RGB to HSL Converter (Example Embed)</div>
                  <div className="bg-gray-50 dark:bg-gray-900 h-10 animate-pulse rounded"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Notice how hue represents the base color, saturation controls how vibrant it is, and lightness determines how bright or dark the color appears.
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Color Examples Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Complete RGB to HSL Color Conversion Guide</h2>
            
            {/* Basic Colors */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Standard RGB to HSL Conversions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Primary Colors</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-600"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        rgb(255, 0, 0) → hsl(0, 100%, 50%)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-green-600"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        rgb(0, 255, 0) → hsl(120, 100%, 50%)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-600"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        rgb(0, 0, 255) → hsl(240, 100%, 50%)
                      </code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Grayscale</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-white border border-gray-200"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        rgb(255, 255, 255) → hsl(0, 0%, 100%)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-gray-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        rgb(128, 128, 128) → hsl(0, 0%, 50%)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-black"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        rgb(0, 0, 0) → hsl(0, 0%, 0%)
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formula Explanation */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Understanding the Conversion Formula</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Converting RGB to HSL involves several mathematical steps:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`// Step 1: Normalize RGB values to range [0, 1]
r' = r / 255
g' = g / 255
b' = b / 255

// Step 2: Find the minimum and maximum values
cmin = min(r', g', b')
cmax = max(r', g', b')
delta = cmax - cmin

// Step 3: Calculate hue (0-360)
if (delta == 0) hue = 0
else if (cmax == r') hue = 60 * ((g' - b') / delta % 6)
else if (cmax == g') hue = 60 * ((b' - r') / delta + 2)
else if (cmax == b') hue = 60 * ((r' - g') / delta + 4)

// Step 4: Calculate lightness (0-100%)
lightness = (cmax + cmin) / 2 * 100

// Step 5: Calculate saturation (0-100%)
if (delta == 0) saturation = 0
else saturation = delta / (1 - |2 * lightness - 1|) * 100`}</code>
              </pre>
            </div>

            {/* Advantages of HSL */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Why Convert RGB to HSL?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Here are some key advantages of working with HSL colors:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li><strong>Intuitive adjustments</strong>: Easily modify hue while keeping saturation and lightness constant</li>
                <li><strong>Consistent variations</strong>: Create lighter or darker versions of the same color by only adjusting lightness</li>
                <li><strong>Color schemes</strong>: Generate complementary colors by adding or subtracting 180° from the hue</li>
                <li><strong>Accessibility</strong>: Easily adjust contrast ratios by modifying lightness values</li>
                <li><strong>Animation</strong>: Smooth transitions between colors by animating hue or saturation values</li>
              </ul>
            </div>
          </div>

          {/* Enhanced FAQ Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What&apos;s the difference between RGB and HSL?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  RGB is an additive color model based on mixing red, green, and blue light. It&apos;s hardware-oriented and commonly used in digital displays. HSL (Hue, Saturation, Lightness) is a more intuitive color model that separates the color (hue) from its intensity (saturation) and brightness (lightness), making it easier for humans to understand and manipulate colors.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">When should I use HSL instead of RGB?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use HSL when you need to create variations of a color (like lighter or darker versions), generate color schemes (like complementary or analogous colors), or animate between colors smoothly. HSL is particularly useful in design systems where you need consistent color relationships.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How precise is the RGB to HSL conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The conversion is mathematically precise, but rounding errors can occur due to floating-point arithmetic. In most practical applications, these differences are imperceptible. Also note that different browsers or color tools might implement slightly different rounding methods, resulting in minor variations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I convert HSL back to RGB?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, the conversion is fully reversible. You can convert from HSL to RGB using a different mathematical formula, and you should get the same (or very close to the same) RGB values you started with, accounting for potential rounding errors.
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
                  <li>
                    <Link href="/tools/cmyk-to-hex" className="text-blue-500 hover:text-blue-600">
                      → CMYK to HEX Converter
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Color Design Articles</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Understanding Color Models: RGB vs HSL</li>
                  <li>Creating Accessible Color Palettes with HSL</li>
                  <li>Color Theory for Web Developers</li>
                  <li>Using HSL to Improve UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 