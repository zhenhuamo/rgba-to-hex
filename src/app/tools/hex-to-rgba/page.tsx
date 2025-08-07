'use client';

import Image from 'next/image';
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
            
            {/* Add navigation button */}
            <div className="flex justify-center mt-6">
              <a
                href="/tools/hex-to-rgba-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </a>
            </div>
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

          {/* Advanced HEX to RGBA FAQ Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Advanced HEX to RGBA Conversion Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How does HEX to RGBA conversion work mathematically?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX to RGBA conversion involves converting hexadecimal values to decimal. Each pair of HEX digits (00-FF) converts to decimal values (0-255).
                  Our HEX to RGBA converter uses precise algorithms to ensure accurate color transformation while maintaining color integrity throughout the conversion process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What happens to transparency in HEX to RGBA conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  When performing HEX to RGBA conversion, 6-digit HEX colors (#RRGGBB) are converted to fully opaque RGBA values (alpha = 1.0).
                  8-digit HEX colors (#RRGGBBAA) preserve transparency information during HEX to RGBA conversion, with the alpha channel accurately translated to decimal format.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is HEX to RGBA conversion lossy or lossless?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX to RGBA conversion is completely lossless. Our HEX to RGBA converter maintains perfect color accuracy during conversion,
                  ensuring that the visual appearance remains identical between the original HEX color and the converted RGBA value.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I batch convert multiple HEX to RGBA colors?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Currently, our HEX to RGBA converter processes one color at a time for optimal accuracy and user experience.
                  However, you can quickly perform multiple HEX to RGBA conversions by entering different HEX values and copying each RGBA result.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What browsers support HEX to RGBA converted colors?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  RGBA colors from HEX to RGBA conversion are supported by all modern browsers including Chrome, Firefox, Safari, Edge, and Opera.
                  This universal compatibility makes HEX to RGBA conversion essential for cross-browser web development and design consistency.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How to use HEX to RGBA converter for CSS animations?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX to RGBA conversion is particularly useful for CSS animations because RGBA values can be easily interpolated.
                  Convert your HEX colors to RGBA format using our HEX to RGBA converter, then use the RGBA values for smooth color transitions and opacity animations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Does HEX to RGBA conversion affect performance?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX to RGBA conversion has no impact on runtime performance. Both HEX and RGBA colors render at the same speed in browsers.
                  Our HEX to RGBA converter simply provides format flexibility without any performance overhead in your final CSS or applications.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">When should I use HEX to RGBA conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use HEX to RGBA conversion when you need transparency control, color animations, or when working with design systems that prefer RGBA format.
                  HEX to RGBA conversion is also beneficial for JavaScript color manipulation and when creating dynamic color schemes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I reverse RGBA to HEX conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, while this tool focuses on HEX to RGBA conversion, you can also convert RGBA back to HEX format using our companion tool.
                  This bidirectional conversion capability ensures you can work with both formats as needed in your projects.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What&apos;s the difference between 3-digit and 6-digit HEX in HEX to RGBA conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  3-digit HEX colors (#RGB) are shorthand for 6-digit HEX colors (#RRGGBB). During HEX to RGBA conversion,
                  our converter automatically expands 3-digit HEX to 6-digit format before converting to RGBA, ensuring accurate color representation.
                </p>
              </div>
            </div>
          </div>

          {/* HEX to RGBA Technical Guide */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">HEX to RGBA Technical Guide</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Understanding HEX to RGBA Conversion</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-medium">HEX Format:</span> #FF8000 represents red=FF(255), green=80(128), blue=00(0)
                  </p>
                  <p>
                    <span className="font-medium">RGBA Equivalent:</span> Our HEX to RGBA converter transforms this to rgba(255, 128, 0, 1)
                  </p>
                  <p>
                    <span className="font-medium">Conversion Formula:</span> Each HEX pair (00-FF) converts to decimal (0-255) in HEX to RGBA conversion
                  </p>
                  <p>
                    <span className="font-medium">Alpha Handling:</span> 8-digit HEX includes alpha channel for transparent colors in HEX to RGBA conversion
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">HEX to RGBA Best Practices</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-medium">Web Development:</span> Use HEX to RGBA conversion for dynamic opacity control
                  </p>
                  <p>
                    <span className="font-medium">Design Systems:</span> HEX to RGBA ensures consistent transparency across components
                  </p>
                  <p>
                    <span className="font-medium">Animations:</span> RGBA values from HEX to RGBA conversion enable smooth transitions
                  </p>
                  <p>
                    <span className="font-medium">Accessibility:</span> HEX to RGBA conversion helps create accessible color overlays
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Common HEX to RGBA Conversion Examples</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Standard HEX to RGBA</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div>HEX: #FF0000 → RGBA: rgba(255, 0, 0, 1)</div>
                    <div>HEX: #00FF00 → RGBA: rgba(0, 255, 0, 1)</div>
                    <div>HEX: #0000FF → RGBA: rgba(0, 0, 255, 1)</div>
                    <div>HEX: #808080 → RGBA: rgba(128, 128, 128, 1)</div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">8-Digit HEX to RGBA</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div>HEX: #FF000080 → RGBA: rgba(255, 0, 0, 0.5)</div>
                    <div>HEX: #00FF00BF → RGBA: rgba(0, 255, 0, 0.75)</div>
                    <div>HEX: #0000FF40 → RGBA: rgba(0, 0, 255, 0.25)</div>
                    <div>HEX: #808080E6 → RGBA: rgba(128, 128, 128, 0.9)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">HEX to RGBA Conversion in Different Contexts</h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h4 className="font-medium mb-2">CSS Development</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use HEX to RGBA for background overlays</li>
                    <li>• Convert HEX to RGBA for border transparency</li>
                    <li>• Apply HEX to RGBA for text shadow effects</li>
                    <li>• Utilize HEX to RGBA for gradient stops</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Design Tools</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Export HEX to RGBA from Figma</li>
                    <li>• Convert HEX to RGBA in Sketch</li>
                    <li>• Use HEX to RGBA in Adobe XD</li>
                    <li>• Apply HEX to RGBA in Photoshop</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">JavaScript Frameworks</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• HEX to RGBA for React styling</li>
                    <li>• Convert HEX to RGBA in Vue.js</li>
                    <li>• Use HEX to RGBA in Angular</li>
                    <li>• Apply HEX to RGBA in Svelte</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* HEX to RGBA Tool Comparison */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Why Choose Our HEX to RGBA Converter?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">HEX to RGBA Converter Advantages</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Instant HEX to RGBA Conversion:</span> Real-time color conversion as you type HEX values
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Accurate HEX to RGBA Results:</span> Precision algorithms ensure perfect color matching
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Professional HEX to RGBA Features:</span> Support for 3, 6, and 8-digit HEX formats
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Free HEX to RGBA Tool:</span> No registration or payment required
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">HEX to RGBA Use Cases</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div>
                    <span className="font-medium">Web Developers:</span> Convert HEX to RGBA for dynamic opacity and animations
                  </div>
                  <div>
                    <span className="font-medium">UI/UX Designers:</span> Use HEX to RGBA conversion for transparent design elements
                  </div>
                  <div>
                    <span className="font-medium">Frontend Engineers:</span> Apply HEX to RGBA for interactive color effects
                  </div>
                  <div>
                    <span className="font-medium">Design System Managers:</span> Utilize HEX to RGBA for consistent transparency standards
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">HEX to RGBA Conversion Tips for Professionals</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h4 className="font-medium mb-3">Optimizing HEX to RGBA Workflow</h4>
                  <ul className="space-y-2">
                    <li>• Bookmark our HEX to RGBA converter for quick access</li>
                    <li>• Use HEX to RGBA conversion for consistent transparency</li>
                    <li>• Test HEX to RGBA results across different backgrounds</li>
                    <li>• Document HEX to RGBA conversions for team reference</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">HEX to RGBA Quality Assurance</h4>
                  <ul className="space-y-2">
                    <li>• Verify HEX to RGBA accuracy with visual comparison</li>
                    <li>• Check HEX to RGBA results in target browsers</li>
                    <li>• Validate HEX to RGBA accessibility compliance</li>
                    <li>• Test HEX to RGBA colors with different content</li>
                  </ul>
                </div>
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
                    <a href="/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                      → RGBA to HEX Converter
                    </a>
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