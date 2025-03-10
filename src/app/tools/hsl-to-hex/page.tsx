'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function HslToHex() {
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
              <Image src="/rgb.svg" alt="HSL to HEX Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                HSL to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional online tool to convert HSL color values to HEX format. Easily transform colors using Hue, Saturation, and Lightness to hexadecimal color codes.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for web developers, designers, and digital artists who prefer working with the HSL color model.
            </p>
          </div>

          {/* 使用iframe嵌入HSL to HEX转换工具 */}
          <div className="w-full">
            <iframe 
              src="/tools/hsl-to-hex-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="500"
              title="HSL to HEX Color Converter"
              loading="lazy"
            />
            
            {/* Add navigation button */}
            <div className="flex justify-center mt-6">
              <Link 
                href="/tools/hsl-to-hex-converter" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-full font-medium hover:from-green-600 hover:to-blue-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </Link>
            </div>
          </div>
          
          {/* Enhanced Color Examples Section */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Complete HSL to HEX Color Conversion Guide</h2>
            
            {/* Color Examples */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Common HSL to HEX Conversions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Primary Hues</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        hsl(0, 100%, 50%) → #FF0000
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-green-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        hsl(120, 100%, 50%) → #00FF00
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        hsl(240, 100%, 50%) → #0000FF
                      </code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Saturation & Lightness</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-300"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        hsl(0, 100%, 75%) → #FFA6A6
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-800"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        hsl(0, 100%, 25%) → #800000
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-500 opacity-50"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        hsl(0, 50%, 50%) → #BF4040
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Understanding HSL */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Understanding the HSL Color Model</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The HSL color model is more intuitive than RGB or HEX for many designers:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Hue (0-360°)</h4>
                  <div className="h-3 w-full rounded bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-3"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    The color type (red, green, blue, etc.) represented as a position on the color wheel.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Saturation (0-100%)</h4>
                  <div className="h-3 w-full rounded bg-gradient-to-r from-gray-400 to-red-500 mb-3"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    The intensity or purity of the color. 0% is grayscale, 100% is the full color.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Lightness (0-100%)</h4>
                  <div className="h-3 w-full rounded bg-gradient-to-r from-black via-red-500 to-white mb-3"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    How light or dark the color is. 0% is black, 100% is white, 50% is the normal color.
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Practical Uses in CSS</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Converting HSL to HEX is useful for CSS development, especially when working with design systems:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`:root {
  /* Primary color with variations */
  --primary-hue: 210; /* Blue */
  --primary: #0C71D1;         /* hsl(210, 90%, 43%) */
  --primary-light: #63A9E8;   /* hsl(210, 90%, 65%) */
  --primary-dark: #064883;    /* hsl(210, 90%, 25%) */
  
  /* Secondary color with variations */
  --secondary-hue: 25; /* Orange */
  --secondary: #F28C28;       /* hsl(25, 90%, 55%) */
  --secondary-light: #FFB673; /* hsl(25, 90%, 73%) */
  --secondary-dark: #B15600;  /* hsl(25, 90%, 33%) */
}

/* Usage */
.button {
  background-color: var(--primary);
  border: 2px solid var(--primary-dark);
}`}</code>
              </pre>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">JavaScript Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Convert HSL to HEX programmatically with this JavaScript function:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`// Complete HSL to HEX converter function
function hslToHex(h, s, l) {
  // Convert HSL percentages to decimal
  s /= 100;
  l /= 100;

  // Calculate RGB values
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c/2;
  
  let r, g, b;
  
  if (h >= 0 && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (h >= 60 && h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (h >= 120 && h < 180) {
    [r, g, b] = [0, c, x];
  } else if (h >= 180 && h < 240) {
    [r, g, b] = [0, x, c];
  } else if (h >= 240 && h < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  
  // Convert to 0-255 range and then to HEX
  const toHex = (value) => {
    const hex = Math.round((value + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return '#' + toHex(r) + toHex(g) + toHex(b);
}`}</code>
              </pre>
            </div>
          </div>

          {/* Enhanced FAQ Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About HSL to HEX Conversion</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Why use HSL instead of direct HEX values?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HSL (Hue, Saturation, Lightness) is more intuitive for creating color schemes and adjusting colors. It&apos;s easier to create harmonious variations by simply adjusting saturation or lightness while keeping the same hue. Once you&apos;ve found the perfect color in HSL, converting to HEX makes it compatible with all CSS contexts and color requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How does HSL compare to other color models?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Compared to other color models:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>RGB/HEX</strong>: More technical, less intuitive for design adjustments</li>
                  <li><strong>HSL</strong>: Intuitive for creating color variations and schemes</li>
                  <li><strong>HSV/HSB</strong>: Similar to HSL but with brightness instead of lightness</li>
                  <li><strong>CMYK</strong>: Print-focused, not ideal for web design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can HSL represent all colors that HEX can?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, both the HSL and HEX color models can represent the same range of colors in the sRGB color space, which is the standard for web design. However, neither can represent colors outside the sRGB gamut. The HSL model simply provides a more intuitive way to think about and manipulate these colors.
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
                    <Link href="/tools/hex-to-rgba-converter" className="text-blue-500 hover:text-blue-600">
                      → Embeddable HEX to RGBA Tool
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Color Design Articles</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Understanding Color Models in Digital Design</li>
                  <li>Creating Accessible Color Palettes with HSL</li>
                  <li>HSL vs RGB: Which to Use When in Web Development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Embed Guide Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This Tool on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You can easily embed this HSL to HEX converter tool into your own website, blog, or online application. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/hsl-to-hex-converter?embed=true" 
  width="100%" 
  height="500" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HSL to HEX Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hsl-to-hex-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;overflow:hidden;" title="HSL to HEX Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Custom Embed Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can customize the initial HSL values of the embedded tool using URL parameters:
            </p>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
              <li><strong>h</strong>: Initial hue value (0-360)</li>
              <li><strong>s</strong>: Initial saturation value (0-100)</li>
              <li><strong>l</strong>: Initial lightness value (0-100)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For example, to set purple (h=270, s=100, l=50) as the initial color:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<iframe 
  src="https://rgbatohex.com/tools/hsl-to-hex-converter?embed=true&h=270&s=100&l=50" 
  width="100%" 
  height="500" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HSL to HEX Color Converter - Purple"
></iframe>`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Embed Example</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Embedded in a Design Tutorial</h4>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                <h5 className="text-lg font-medium mb-4">Creating Harmonious Color Schemes with HSL</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In design, the HSL color model makes it easy to create harmonious color schemes. By keeping the same hue and adjusting saturation and lightness, you can create beautiful monochromatic schemes. Try different HSL values with the tool below and get the corresponding HEX codes:
                </p>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-2 mb-4">
                  <div className="text-xs text-gray-500 mb-1">HSL to HEX Converter (Example Embed)</div>
                  <div className="bg-gray-50 dark:bg-gray-900 h-10 animate-pulse rounded"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Try setting the hue value to 210 (blue) and create variations with different saturation and lightness values for your design system&apos;s primary colors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 