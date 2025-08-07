'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Original Tool Section */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Title section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image 
                src="/rgb.svg" 
                alt="RGBA to HEX Converter Logo" 
                width={40}
                height={40}
                priority
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                RGBA to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Easily convert RGBA color values to hexadecimal color codes
            </p>
          </div>

          {/* 使用iframe嵌入颜色转换工具 */}
          <div className="w-full">
            <iframe 
              src="/tools/color-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="600"
              title="RGBA to HEX Color Converter"
              loading="lazy"
            />
            
            {/* 添加跳转按钮 */}
            <div className="flex justify-center mt-6">
              <a
                href="/tools/color-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </a>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-700 pt-16">
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">About RGBA to HEX Converter</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our RGBA to HEX converter is a professional online tool designed for web developers, designers, and digital artists. 
              It provides instant conversion between RGBA color values and hexadecimal color codes, with additional features like 
              real-time preview, professional color schemes, and accessibility analysis.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Real-time color preview and conversion</li>
                <li>• Support for alpha channel transparency</li>
                <li>• Professional color scheme suggestions</li>
                <li>• WCAG 2.0 accessibility compliance check</li>
                <li>• Multiple color format support (HEX, RGBA, HSL)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Web development and CSS styling</li>
                <li>• UI/UX design projects</li>
                <li>• Digital marketing materials</li>
                <li>• Mobile app development</li>
                <li>• Brand color management</li>
              </ul>
            </div>
          </div>

          {/* Advanced Features Section */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Advanced Features</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3">Professional Color Schemes</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Generate complementary colors</li>
                  <li>• Create monochromatic palettes</li>
                  <li>• Explore analogous color combinations</li>
                  <li>• Get color harmony suggestions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Accessibility Tools</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• WCAG 2.0 contrast ratio checker</li>
                  <li>• Readability analysis</li>
                  <li>• Color blindness simulation</li>
                  <li>• Accessibility compliance reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Advantages */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Technical Advantages</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3">Performance</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• High-precision conversion algorithms</li>
                  <li>• Zero-delay real-time updates</li>
                  <li>• Optimized for all modern browsers</li>
                  <li>• Responsive on all devices</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">User Experience</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Intuitive interface design</li>
                  <li>• Professional color management</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• Mobile-first approach</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section with More Questions */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">What is RGBA color format?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  RGBA is a color model that uses Red, Green, and Blue channels (0-255) with an Alpha channel (0-1) for transparency.
                  It&apos;s commonly used in web development and digital design for creating colors with opacity.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Why convert RGBA to HEX?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX color codes are widely used in CSS and web design. Converting from RGBA to HEX ensures compatibility
                  across different platforms and maintains consistent color representation in your projects.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Can I save my favorite colors?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  While we don&apos;t currently offer color saving, you can easily copy color codes in multiple formats (HEX, RGBA, HSL)
                  and save them in your preferred location. We&apos;re working on adding a color palette feature in future updates.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Is this tool free to use?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, our RGBA to HEX converter is completely free to use. All features, including professional color schemes
                  and accessibility analysis, are available without any cost or registration.
                </p>
              </div>
            </div>
          </div>

          {/* Extended FAQ Section - RGBA to HEX Specific */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">RGBA to HEX Conversion - Advanced Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">How does RGBA to HEX conversion work?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  RGBA to HEX conversion transforms RGBA color values (red, green, blue, alpha) into hexadecimal format.
                  Our RGBA to HEX converter uses precise algorithms to ensure accurate color representation while handling
                  transparency values for modern web development needs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">What happens to alpha channel in RGBA to HEX conversion?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  When converting RGBA to HEX, the alpha channel can be preserved in 8-digit HEX format (#RRGGBBAA) or
                  converted to standard 6-digit HEX (#RRGGBB) for broader compatibility. Our RGBA to HEX tool supports both formats.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Is RGBA to HEX conversion accurate?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, our RGBA to HEX converter uses high-precision algorithms to ensure 100% accurate color conversion.
                  The mathematical conversion from RGBA to HEX maintains exact color values without any loss of precision.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Can I convert multiple RGBA to HEX colors at once?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Currently, our RGBA to HEX converter processes one color at a time for optimal accuracy and user experience.
                  However, you can quickly convert multiple colors by adjusting values and copying each HEX result.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">What browsers support RGBA to HEX converted colors?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX colors from RGBA to HEX conversion are supported by all modern browsers including Chrome, Firefox, Safari,
                  and Edge. This universal compatibility makes RGBA to HEX conversion essential for cross-browser web development.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">How to use RGBA to HEX converter for CSS?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Simply input your RGBA values into our RGBA to HEX converter, copy the generated HEX code, and paste it
                  directly into your CSS. The RGBA to HEX conversion ensures your colors work consistently across all CSS properties.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Does RGBA to HEX conversion affect color quality?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  No, RGBA to HEX conversion maintains perfect color quality. Our RGBA to HEX converter preserves the exact
                  color values during conversion, ensuring no visual difference between the original RGBA and converted HEX colors.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">When should I use RGBA to HEX conversion?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Use RGBA to HEX conversion when you need broader browser compatibility, working with legacy systems, or
                  when your design tools require HEX format. RGBA to HEX conversion is also useful for consistent color documentation.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Can I reverse HEX to RGBA conversion?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, while this tool focuses on RGBA to HEX conversion, you can also convert HEX back to RGBA format.
                  This bidirectional conversion capability makes our tool versatile for all color format needs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">What&apos;s the difference between 6-digit and 8-digit HEX from RGBA to HEX?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  6-digit HEX (#RRGGBB) from RGBA to HEX conversion represents opaque colors, while 8-digit HEX (#RRGGBBAA)
                  includes alpha transparency. Our RGBA to HEX converter automatically determines the appropriate format based on your alpha value.
                </p>
              </div>
            </div>
          </div>

          {/* RGBA to HEX Technical Guide */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">RGBA to HEX Technical Guide</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Understanding RGBA to HEX Conversion</h4>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-medium">RGBA Format:</span> rgba(255, 128, 0, 0.8) represents red=255, green=128, blue=0, alpha=0.8
                  </p>
                  <p>
                    <span className="font-medium">HEX Equivalent:</span> Our RGBA to HEX converter transforms this to #FF8000CC
                  </p>
                  <p>
                    <span className="font-medium">Conversion Formula:</span> Each RGBA component (0-255) converts to HEX (00-FF)
                  </p>
                  <p>
                    <span className="font-medium">Alpha Handling:</span> Alpha values (0-1) scale to HEX alpha (00-FF) in RGBA to HEX conversion
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">RGBA to HEX Best Practices</h4>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-medium">Web Development:</span> Use RGBA to HEX conversion for consistent CSS color values
                  </p>
                  <p>
                    <span className="font-medium">Design Systems:</span> RGBA to HEX ensures color consistency across platforms
                  </p>
                  <p>
                    <span className="font-medium">Performance:</span> HEX colors from RGBA to HEX conversion render faster in browsers
                  </p>
                  <p>
                    <span className="font-medium">Compatibility:</span> RGBA to HEX conversion maximizes browser support
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Common RGBA to HEX Conversion Examples</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium mb-3">Solid Colors (Alpha = 1)</h5>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div>RGBA: rgba(255, 0, 0, 1) → HEX: #FF0000</div>
                    <div>RGBA: rgba(0, 255, 0, 1) → HEX: #00FF00</div>
                    <div>RGBA: rgba(0, 0, 255, 1) → HEX: #0000FF</div>
                    <div>RGBA: rgba(128, 128, 128, 1) → HEX: #808080</div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium mb-3">Transparent Colors (Alpha &lt; 1)</h5>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div>RGBA: rgba(255, 0, 0, 0.5) → HEX: #FF000080</div>
                    <div>RGBA: rgba(0, 255, 0, 0.75) → HEX: #00FF00BF</div>
                    <div>RGBA: rgba(0, 0, 255, 0.25) → HEX: #0000FF40</div>
                    <div>RGBA: rgba(128, 128, 128, 0.9) → HEX: #808080E6</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">RGBA to HEX Conversion in Different Contexts</h4>
              <div className="grid md:grid-cols-3 gap-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h5 className="font-medium mb-2">CSS Development</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Use RGBA to HEX for background colors</li>
                    <li>• Convert RGBA to HEX for border colors</li>
                    <li>• Apply RGBA to HEX for text colors</li>
                    <li>• Utilize RGBA to HEX for shadow effects</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Design Tools</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Export RGBA to HEX for Figma</li>
                    <li>• Convert RGBA to HEX for Sketch</li>
                    <li>• Use RGBA to HEX in Adobe XD</li>
                    <li>• Apply RGBA to HEX in Photoshop</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Development Frameworks</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• RGBA to HEX for React components</li>
                    <li>• Convert RGBA to HEX for Vue.js</li>
                    <li>• Use RGBA to HEX in Angular</li>
                    <li>• Apply RGBA to HEX in Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Tips */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Usage Tips</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>• Use modern browsers like Chrome, Firefox, or Safari for the best experience</p>
              <p>• Bookmark our tool for quick access to color conversion needs</p>
              <p>• Utilize the professional color schemes for design inspiration</p>
              <p>• Check accessibility compliance before finalizing colors</p>
              <p>• Take advantage of our real-time preview to verify colors visually</p>
              <p>• Use keyboard shortcuts for faster color value adjustments</p>
            </div>
          </div>

          {/* Detailed How-To Guide */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-semibold mb-6">How to Use RGBA to HEX Converter</h3>
            
            {/* Basic Usage */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Basic Color Conversion</h4>
              <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-300">
                <li className="pl-2">
                  <span className="font-medium">Adjust RGBA Values:</span>
                  <ul className="pl-8 mt-2 space-y-2">
                    <li>• Use the Red (R) slider to set red value (0-255)</li>
                    <li>• Use the Green (G) slider to set green value (0-255)</li>
                    <li>• Use the Blue (B) slider to set blue value (0-255)</li>
                    <li>• Use the Alpha (A) slider to set transparency (0-1)</li>
                  </ul>
                </li>
                <li className="pl-2">
                  <span className="font-medium">View Color Preview:</span>
                  <ul className="pl-8 mt-2 space-y-2">
                    <li>• See real-time color changes in the preview box</li>
                    <li>• Checkerboard pattern shows transparency effects</li>
                  </ul>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Get Color Codes:</span>
                  <ul className="pl-8 mt-2 space-y-2">
                    <li>• HEX code is displayed automatically</li>
                    <li>• Click the copy button to copy the code</li>
                    <li>• Also available in RGBA and HSL formats</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Advanced Features */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Using Advanced Features</h4>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <p className="font-medium mb-2">Professional Color Schemes:</p>
                  <ul className="pl-6 space-y-2">
                    <li>• View complementary colors for your selected color</li>
                    <li>• Explore monochromatic variations</li>
                    <li>• Copy any color scheme variation with one click</li>
                    <li>• Use suggested colors for design harmony</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Accessibility Checking:</p>
                  <ul className="pl-6 space-y-2">
                    <li>• Check contrast ratios against white and black backgrounds</li>
                    <li>• Verify WCAG 2.0 compliance for normal and large text</li>
                    <li>• Review accessibility recommendations</li>
                    <li>• Ensure your colors meet web accessibility standards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tips for Best Results */}
            <div>
              <h4 className="text-lg font-medium mb-4">Tips for Best Results</h4>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
                <div>
                  <p className="font-medium mb-2">For Web Development:</p>
                  <ul className="pl-6 space-y-2">
                    <li>• Use HEX codes for consistent browser support</li>
                    <li>• Consider RGBA when opacity is needed</li>
                    <li>• Test colors in both light and dark modes</li>
                    <li>• Verify contrast for text readability</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">For Design Work:</p>
                  <ul className="pl-6 space-y-2">
                    <li>• Explore complementary color combinations</li>
                    <li>• Use monochromatic schemes for subtle variations</li>
                    <li>• Check accessibility for inclusive design</li>
                    <li>• Save commonly used colors for consistency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Embed Instructions - New Section */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Embed This Tool On Your Website</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The RGBA to HEX Color Converter can be easily embedded on any website, allowing your users to convert colors without leaving your site.
              Simply copy the code below and paste it into your HTML.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Embed Code</h3>
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto mb-2">
                  <code>{`<iframe 
  src="https://rgbatohex.com/tools/color-converter?embed=true" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGBA to HEX Color Converter"
></iframe>`}</code>
                </pre>
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                  onClick={() => {
                    const code = `<iframe src="https://rgbatohex.com/tools/color-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to HEX Color Converter"></iframe>`;
                    navigator.clipboard.writeText(code);
                  }}
                >
                  Copy Code
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You can customize the embedded tool by adding parameters to the URL:
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-medium">Default Color:</span>
                    <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 text-sm">?defaultColor=FF5500FF</pre>
                    <p className="text-sm mt-1">Sets initial color values (RRGGBBAA format)</p>
                  </li>
                  <li>
                    <span className="font-medium">Embed Mode:</span>
                    <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 text-sm">?embed=true</pre>
                    <p className="text-sm mt-1">Optimizes display for embedded contexts</p>
                  </li>
                  <li>
                    <span className="font-medium">Theme Override:</span>
                    <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 text-sm">?theme=light</pre>
                    <p className="text-sm mt-1">Force light or dark theme (light/dark)</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Integration Benefits</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <span className="font-medium">Zero Maintenance:</span> Tool updates automatically</li>
                  <li>• <span className="font-medium">Performance:</span> Lightweight embed that won&apos;t slow your site</li>
                  <li>• <span className="font-medium">Responsive:</span> Adapts to container width</li>
                  <li>• <span className="font-medium">Accessibility:</span> Fully accessible interface</li>
                  <li>• <span className="font-medium">No Dependencies:</span> Works with any website platform</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Common Use Cases</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Design tool collections and resources</li>
                  <li>• Web development tutorial sites</li>
                  <li>• Creative agency websites</li>
                  <li>• Design systems documentation</li>
                  <li>• Educational platforms for web design</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Implementation Example</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Here&apos;s how the tool might look embedded in a blog post about web design:
                </p>
                <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                  <h4 className="text-lg font-medium mb-4">Working with Transparent Colors in CSS</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    When designing modern interfaces, you often need to work with transparency. 
                    Use the tool below to convert RGBA colors to hexadecimal format with alpha channel support:
                  </p>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-2 mb-4">
                    <div className="text-xs text-gray-500 mb-1">RGBA to HEX Converter (Embedded Tool)</div>
                    <div className="bg-gray-50 dark:bg-gray-900 h-10 animate-pulse rounded"></div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    With this tool, you can easily create semi-transparent colors for overlays, shadows, and modern UI elements.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">More Embeddable Tools</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="/tools/hex-to-rgba-converter" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    HEX to RGBA Converter
                  </a>
                  <p className="text-sm mt-1">
                    Convert HEX color codes to RGBA values with transparency support.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 text-sm overflow-x-auto">
                    <code>{`<iframe src="https://rgbatohex.com/tools/hex-to-rgba-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;" title="HEX to RGBA Color Converter"></iframe>`}</code>
                  </pre>
                </li>
              </ul>
            </div>
          </div>

          {/* RGBA to HEX Tool Comparison */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Choose Our RGBA to HEX Converter?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">RGBA to HEX Converter Advantages</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Instant RGBA to HEX Conversion:</span> Real-time color conversion as you adjust values
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Accurate RGBA to HEX Results:</span> Precision algorithms ensure perfect color matching
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Professional RGBA to HEX Features:</span> Color schemes, accessibility checks, and more
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Free RGBA to HEX Tool:</span> No registration or payment required
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">RGBA to HEX Use Cases</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div>
                    <span className="font-medium">Web Developers:</span> Convert RGBA to HEX for CSS compatibility and performance optimization
                  </div>
                  <div>
                    <span className="font-medium">UI/UX Designers:</span> Use RGBA to HEX conversion for consistent design system colors
                  </div>
                  <div>
                    <span className="font-medium">Digital Artists:</span> Apply RGBA to HEX conversion for cross-platform color consistency
                  </div>
                  <div>
                    <span className="font-medium">Brand Managers:</span> Utilize RGBA to HEX for standardized brand color documentation
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">RGBA to HEX Converter vs Other Tools</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Feature</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Our RGBA to HEX Tool</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Basic Converters</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Design Software</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Real-time RGBA to HEX conversion</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⚠️</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Alpha channel support in RGBA to HEX</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⚠️</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Professional color schemes</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Accessibility analysis</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Free to use</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">No software installation required</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">RGBA to HEX Conversion Tips for Professionals</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h4 className="font-medium mb-3">Optimizing RGBA to HEX Workflow</h4>
                  <ul className="space-y-2">
                    <li>• Bookmark our RGBA to HEX converter for quick access</li>
                    <li>• Use RGBA to HEX conversion early in your design process</li>
                    <li>• Test RGBA to HEX results across different devices</li>
                    <li>• Document RGBA to HEX conversions for team consistency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">RGBA to HEX Quality Assurance</h4>
                  <ul className="space-y-2">
                    <li>• Verify RGBA to HEX accuracy with visual comparison</li>
                    <li>• Check RGBA to HEX results in target browsers</li>
                    <li>• Validate RGBA to HEX accessibility compliance</li>
                    <li>• Test RGBA to HEX colors in different lighting conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
