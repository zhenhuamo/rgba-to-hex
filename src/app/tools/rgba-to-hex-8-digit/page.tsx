'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function RgbaToHex8Digit() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Title section - Enhanced with keywords */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image 
                src="/rgb.svg" 
                alt="RGBA to HEX Color Converter Tool" 
                width={40}
                height={40}
                priority 
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                RGBA to HEX Color Converter | 8-Digit HEX with Opacity
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional online RGBA to HEX converter tool that transforms RGBA colors to both standard 6-digit and modern 8-digit HEX format (#RRGGBBAA) with full transparency support. Convert any RGBA color to HEX instantly for CSS, JavaScript, and web design projects.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              The most advanced RGBA to HEX converter online with full opacity support, perfect for frontend developers, UI/UX designers, and digital artists who need precise color format conversion between rgba() and hexadecimal codes.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">RGBA to HEX Conversion</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Convert RGBA to HEX Online</span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">RGBA with Opacity to HEX</span>
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">8-Digit HEX Color Codes</span>
            </div>
          </div>

          {/* 使用iframe嵌入RGBA to HEX 8-Digit转换工具 */}
          <div className="w-full">
            <iframe 
              src="/tools/rgba-to-hex-8-digit-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="600"
              title="RGBA to 8-Digit HEX Color Converter"
              loading="lazy"
              allow="clipboard-write; clipboard-read"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
            

            {/* 添加跳转按钮 */}
            <div className="flex justify-center mt-6">
              <Link 
                href="/tools/rgba-to-hex-8-digit-converter" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-medium hover:from-blue-600 hover:to-green-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full RGBA to HEX Converter Tool
              </Link>
            </div>
          </div>
          
          {/* SEO Enhanced Content: What is RGBA to HEX Conversion */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6" id="rgba-to-hex-conversion">What is RGBA to HEX Conversion?</h2>
            
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p>
                <strong>RGBA to HEX conversion</strong> is the process of transforming color values from the RGBA color model to hexadecimal notation. RGBA stands for Red, Green, Blue, and Alpha (transparency), where each RGB component ranges from 0-255 and alpha ranges from 0-1. Hexadecimal (HEX) color codes represent the same values using a base-16 numbering system with values from 00 to FF for each component.
              </p>
              
              <p className="mt-4">
                Traditional HEX colors use a 6-digit format (#RRGGBB), but modern <strong>8-digit HEX format</strong> (#RRGGBBAA) incorporates the alpha channel to represent transparency. This makes it possible to convert RGBA to HEX while preserving opacity information.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Why Convert RGBA to HEX?</h3>
              
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Conciseness</strong>: HEX codes are more compact than RGBA notation, making CSS more readable.</li>
                <li><strong>Compatibility</strong>: While RGBA is widely supported, HEX colors have universal browser support.</li>
                <li><strong>Modern Standards</strong>: 8-digit HEX with alpha is now supported by all modern browsers.</li>
                <li><strong>Consistency</strong>: Using HEX exclusively in your project maintains a consistent color notation format.</li>
                <li><strong>Performance</strong>: Some rendering engines process HEX colors slightly faster than functional RGBA notation.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Two Types of RGBA to HEX Conversion</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">RGBA to 6-digit HEX</h4>
                  <p className="text-sm mb-2">Converts RGB components to standard HEX, losing alpha information:</p>
                  <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    rgba(255, 99, 71, 0.5) → #FF6347
                  </code>
                  <p className="text-sm mt-3 text-gray-500">
                    <em>Note: The alpha/opacity value is discarded in this conversion.</em>
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">RGBA to 8-digit HEX</h4>
                  <p className="text-sm mb-2">Preserves transparency by adding alpha channel:</p>
                  <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    rgba(255, 99, 71, 0.5) → #FF634780
                  </code>
                  <p className="text-sm mt-3 text-green-600 dark:text-green-400">
                    <em>Our converter specializes in this modern 8-digit format!</em>
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">RGBA to HEX Conversion Formula</h3>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg mb-6">
              <p className="mb-4 text-gray-700 dark:text-gray-300">The mathematical conversion process from RGBA to 8-digit HEX follows these steps:</p>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>Convert each RGB component (0-255) to a 2-digit hexadecimal value</li>
                <li>Convert the alpha value (0-1) to a percentage of 255, then to a 2-digit hex value</li>
                <li>Concatenate all four hex values with a # prefix</li>
              </ol>
              
              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <code className="text-sm block mb-2">For rgba(255, 99, 71, 0.5):</code>
                <code className="text-sm block">R: 255 → FF</code>
                <code className="text-sm block">G: 99 → 63</code>
                <code className="text-sm block">B: 71 → 47</code>
                <code className="text-sm block">A: 0.5 × 255 = 127.5 → 80 (rounded)</code>
                <code className="text-sm block mt-2">Result: #FF634780</code>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Programming Language Implementation</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-3">RGBA to HEX in JavaScript</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm">
                  <code>{`function rgbaToHex(r, g, b, a = 1) {
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  a = Math.min(1, Math.max(0, a));
  
  // Convert alpha to hex
  const alpha = Math.round(a * 255)
    .toString(16)
    .padStart(2, '0');
    
  // Convert RGB to hex and combine
  return '#' + 
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0') +
    alpha;
}`}</code>
                </pre>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-3">RGBA to HEX in Python</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm">
                  <code>{`def rgba_to_hex(r, g, b, a=1.0):
    """Convert RGBA color to 8-digit hex."""
    r = max(0, min(255, r))
    g = max(0, min(255, g))
    b = max(0, min(255, b))
    a = max(0.0, min(1.0, a))
    
    # Convert to hex values
    r_hex = format(int(r), '02x')
    g_hex = format(int(g), '02x')
    b_hex = format(int(b), '02x')
    a_hex = format(int(a * 255), '02x')
    
    return f"#{r_hex}{g_hex}{b_hex}{a_hex}"
`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          {/* Embed This Tool Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This Tool on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You can easily embed this RGBA to 8-Digit HEX converter tool into your own website, blog, or online application. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/rgba-to-hex-8-digit-converter?embed=true" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGBA to 8-Digit HEX Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/rgba-to-hex-8-digit-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to 8-Digit HEX Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Custom Embed Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can customize the initial RGBA color values of the embedded tool using URL parameters:
            </p>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
              <li><strong>r</strong>: Red component value (0-255)</li>
              <li><strong>g</strong>: Green component value (0-255)</li>
              <li><strong>b</strong>: Blue component value (0-255)</li>
              <li><strong>a</strong>: Alpha (transparency) value (0-1)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For example, to set a semi-transparent blue color (rgba(0, 0, 255, 0.5)) as the initial color:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<iframe 
  src="https://rgbatohex.com/tools/rgba-to-hex-8-digit-converter?embed=true&r=0&g=0&b=255&a=0.5" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGBA to 8-Digit HEX Color Converter - Semi-transparent Blue"
></iframe>`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Embed Example</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Embedded in a Modern CSS Tutorial</h4>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                <h5 className="text-lg font-medium mb-4">Working with Transparency in Modern CSS</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Modern web browsers now support 8-digit hexadecimal color notation that includes alpha transparency. Convert your RGBA colors to 8-digit HEX format with the tool below:
                </p>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-2 mb-4">
                  <div className="text-xs text-gray-500 mb-1">RGBA to 8-Digit HEX Converter (Example Embed)</div>
                  <div className="bg-gray-50 dark:bg-gray-900 h-10 animate-pulse rounded"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Using 8-digit HEX colors can be more concise than RGBA format while retaining full transparency support. This modern approach is supported in all major browsers.
                </p>
              </div>
            </div>
          </div>
          
          {/* Expanded: Enhanced Color Examples Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6" id="applications">Practical Applications of RGBA to HEX Conversion</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Modern CSS Styling</strong>: Using RGBA to HEX conversion for cleaner, more concise color declarations with transparency.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>CSS Frameworks</strong>: Integrating consistent color formats in frameworks like Tailwind CSS, Bootstrap, and Material UI.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>JavaScript Libraries</strong>: Using HEX colors in Canvas, SVG, and WebGL applications for visual effects with transparency.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Design System Implementation</strong>: Converting design tools&apos; RGBA colors to consistent HEX codes for developer handoff.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Overlay Effects</strong>: Creating subtle transparent overlays, shadows, and glass morphism effects using 8-digit HEX.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Color Palette Development</strong>: Creating consistent color themes with transparency variations for modern interfaces.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Email Templates</strong>: Using web-safe colors with fallbacks for transparent elements in email campaigns.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Social Media Graphics</strong>: Creating consistent branded content with transparent overlays and effects.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Game Development</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Web-Based Games</strong>: Implementing color systems with transparency for game UIs and visual effects.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Particle Effects</strong>: Creating dynamic visual effects with varying levels of transparency for web games.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl border border-blue-100 dark:border-blue-800 mt-8">
              <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-300">Pro Tips for RGBA to HEX Conversion</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Use 8-digit HEX for modern browsers, but always provide RGBA fallbacks for older browsers.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Alpha values in HEX (00-FF) don&apos;t map linearly to visual transparency perception—test carefully for critical UI elements.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>For design systems, establish naming conventions for your 8-digit HEX colors that include transparency level references.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Our RGBA to HEX converter supports both clipboard integration and shareable links for easier team collaboration.</span>
                </li>
              </ul>
            </div>
            
            {/* Keep the existing code for Basic Colors, Alpha values, Browser Support, and Usage Examples */}
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6">Complete Guide to RGBA to 8-Digit HEX Conversion</h2>
              
              {/* Basic Colors */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Standard RGBA to 8-Digit HEX Conversions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Primary Colors</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-red-500"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          rgba(255, 0, 0, 1) → #FF0000FF
                        </code>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-green-500"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          rgba(0, 255, 0, 1) → #00FF00FF
                        </code>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-blue-500"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          rgba(0, 0, 255, 1) → #0000FFFF
                        </code>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">With Transparency</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-red-500 bg-opacity-50"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          rgba(255, 0, 0, 0.5) → #FF000080
                        </code>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-green-500 bg-opacity-75"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          rgba(0, 255, 0, 0.75) → #00FF00BF
                        </code>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-blue-500 bg-opacity-25"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          rgba(0, 0, 255, 0.25) → #0000FF40
                        </code>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Alpha values explanation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Understanding Alpha Values in 8-Digit HEX</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The last two digits in an 8-digit HEX code represent the alpha (transparency) channel in hexadecimal:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Common Alpha Values</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-blue-500"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          100% opacity = FF (rgba alpha: 1.0)
                        </code>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-blue-500 bg-opacity-75"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          75% opacity = BF (rgba alpha: 0.75)
                        </code>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-blue-500 bg-opacity-50"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          50% opacity = 80 (rgba alpha: 0.5)
                        </code>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">More Alpha Values</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-blue-500 bg-opacity-25"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          25% opacity = 40 (rgba alpha: 0.25)
                        </code>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-blue-500 bg-opacity-10"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          10% opacity = 1A (rgba alpha: 0.1)
                        </code>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded border border-gray-300 dark:border-gray-600"></div>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                          0% opacity = 00 (rgba alpha: 0)
                        </code>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Browser Support Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Browser Support for 8-Digit HEX</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  8-digit HEX notation is well-supported in modern browsers:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
                  <li>Chrome 62+ (October 2017)</li>
                  <li>Firefox 49+ (September 2016)</li>
                  <li>Safari 10+ (September 2016)</li>
                  <li>Edge 79+ (January 2020)</li>
                  <li>Opera 49+ (November 2017)</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  For older browsers, you can provide fallbacks using rgba() notation or standard 6-digit HEX codes.
                </p>
              </div>

              {/* Usage Examples Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Usage Examples in CSS</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre><code className="text-sm text-gray-800 dark:text-gray-200">{`/* Semi-transparent overlay */
.overlay {
  background-color: #0000FF80; /* Blue with 50% opacity */
}

/* Multiple colors with transparency */
.gradient {
  background: linear-gradient(
    to right,
    #FF000080, /* Red with 50% opacity */
    #00FF00BF  /* Green with 75% opacity */
  );
}

/* Text with transparency */
.ghost-text {
  color: #000000CC; /* Black with 80% opacity */
}

/* Box shadow with transparency */
.card {
  box-shadow: 0 4px 6px #00000033; /* Black with 20% opacity */
}`}</code></pre>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Using 8-digit HEX codes makes your CSS cleaner and more concise while maintaining full transparency control.
                </p>
              </div>
            </div>
          </div>
          
          {/* Comprehensive FAQ Section - New Addition */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6" id="faq">Frequently Asked Questions About RGBA to HEX Conversion</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-5">
                <h3 className="text-xl font-semibold mb-3">What&apos;s the difference between RGBA and HEX color formats?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>RGBA</strong> is a functional notation that explicitly defines red, green, blue, and alpha (transparency) channels using decimal values (0-255 for RGB, 0-1 for alpha). For example, <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">rgba(255, 0, 0, 0.5)</code> represents semi-transparent red.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  <strong>HEX</strong> is a hexadecimal notation that represents the same color values in base-16 format. Traditional 6-digit HEX (<code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">#FF0000</code>) doesn&apos;t include transparency, while modern 8-digit HEX (<code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">#FF0000FF</code>) incorporates alpha as the last two digits.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-5">
                <h3 className="text-xl font-semibold mb-3">Can I convert RGBA to HEX without losing opacity information?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! While traditional 6-digit HEX format (#RRGGBB) cannot represent transparency, modern 8-digit HEX format (#RRGGBBAA) preserves the alpha channel. Our RGBA to HEX converter tool specializes in generating 8-digit HEX codes that maintain full opacity information from your original RGBA values.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  For example, <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">rgba(255, 0, 0, 0.5)</code> converts to <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">#FF000080</code>, where &quot;80&quot; represents 50% opacity in hexadecimal.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-5">
                <h3 className="text-xl font-semibold mb-3">How do I use RGBA to HEX conversion in JavaScript?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  In JavaScript, you can convert RGBA to HEX using built-in methods to transform decimal values to hexadecimal. Our tool provides the converted value instantly, but if you need to implement this in your code, here&apos;s a simple example:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-3 overflow-x-auto text-sm">
                  <code>{`// Simple JavaScript function to convert RGBA to 8-digit HEX
function rgbaToHex(r, g, b, a) {
  r = r.toString(16).padStart(2, '0');
  g = g.toString(16).padStart(2, '0');
  b = b.toString(16).padStart(2, '0');
  a = Math.round(a * 255).toString(16).padStart(2, '0');
  
  return \`#\${r}\${g}\${b}\${a}\`.toUpperCase();
}

// Example usage
const hexColor = rgbaToHex(255, 0, 0, 0.5); // Returns "#FF000080"`}</code>
                </pre>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-5">
                <h3 className="text-xl font-semibold mb-3">Is 8-digit HEX with alpha supported in all browsers?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  8-digit HEX color notation is now supported in all modern browsers, including:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600 dark:text-gray-300">
                  <li>Chrome 62+ (October 2017)</li>
                  <li>Firefox 49+ (September 2016)</li>
                  <li>Safari 10+ (September 2016)</li>
                  <li>Edge 79+ (January 2020)</li>
                  <li>Opera 49+ (November 2017)</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  For older browsers, it&apos;s recommended to provide a fallback using standard RGBA notation:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-2 overflow-x-auto text-sm">
                  <code>{`.element {
  /* Fallback for older browsers */
  background-color: rgba(255, 0, 0, 0.5);
  /* Modern browsers with 8-digit HEX support */
  background-color: #FF000080;
}`}</code>
                </pre>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-5">
                <h3 className="text-xl font-semibold mb-3">Why would I use RGBA to HEX conversion in web development?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Converting RGBA to HEX offers several advantages in web development:
                </p>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Code Consistency</strong>: Maintain a single color format throughout your codebase</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Conciseness</strong>: 8-digit HEX is more compact than RGBA functional notation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Modern Standards</strong>: Embracing current CSS color specifications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Performance</strong>: Some rendering engines process HEX colors slightly more efficiently</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Can I use RGBA to HEX conversion in CSS preprocessors like SASS or LESS?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, CSS preprocessors like SASS and LESS provide built-in functions for color manipulation, including converting between RGBA and HEX formats:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="text-lg font-medium mb-2">SASS Example:</h4>
                    <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-x-auto text-sm">
                      <code>{`// SCSS syntax
$my-color: rgba(255, 0, 0, 0.5);

.element {
  // Convert to HEX (SASS function)
  color: rgba-to-hex($my-color);
  
  // Or use directly
  background-color: #FF000080;
}`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">LESS Example:</h4>
                    <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-x-auto text-sm">
                      <code>{`// LESS syntax
@my-color: rgba(255, 0, 0, 0.5);

.element {
  // LESS doesn't have a direct rgba-to-hex
  // function, but you can use our tool to
  // get the value
  color: #FF000080;
  
  // Or use RGBA directly
  background-color: @my-color;
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* RGBA vs HEX Comparison Table - New Addition */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6" id="comparison">RGBA vs HEX Color Formats: Comprehensive Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">RGBA Format</th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">HEX Format (8-digit)</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Syntax Example</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300"><code>rgba(255, 0, 0, 0.5)</code></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300"><code>#FF000080</code></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Format</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Functional notation</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Hexadecimal notation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Length</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Longer (14-17 characters)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Concise (9 characters)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Transparency Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Native (0-1 value)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Last two digits (00-FF)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Browser Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">All modern browsers (IE9+)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">All modern browsers (since ~2016)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Readability</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">More intuitive for humans</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">More compact but less intuitive</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Use in Design Tools</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Common in color pickers</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Common in code output</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">CSS Usage</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Functional: <code>background-color: rgba(255,0,0,0.5);</code></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Direct: <code>background-color: #FF000080;</code></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Performance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Slight overhead due to function parsing</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Marginally better in some rendering engines</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-green-50 dark:bg-green-900/30 p-5 rounded-xl border border-green-100 dark:border-green-800">
              <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-300">Why Convert RGBA to HEX?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Converting RGBA to 8-digit HEX allows you to maintain all color information, including transparency, while benefiting from the concise HEX notation format. Our online RGBA to HEX converter tool makes this process instant and error-free, providing both the visual representation and the precise code you need.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                For modern web development, using 8-digit HEX colors with alpha transparency offers the best of both worlds: the widespread support and compactness of HEX notation with the transparency capabilities previously only available in RGBA format.
              </p>
            </div>
          </div>
          
          {/* Technical Resources Section - New Addition */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6" id="resources">Technical Resources for RGBA to HEX Conversion</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Web Standards & Documentation</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span><strong>W3C CSS Color Module Level 4</strong>: The official specification for 8-digit HEX notation and other modern color formats.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span><strong>MDN Web Docs</strong>: Comprehensive documentation on color values in CSS, including RGBA and 8-digit HEX.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span><strong>Can I Use</strong>: Browser compatibility tables for 8-digit HEX color notation and other modern CSS features.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Developer Tools & Libraries</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <span><strong>JavaScript Color Libraries</strong>: Tools like chroma.js, tinycolor2, and colord that provide comprehensive color conversion functions.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <span><strong>CSS Preprocessor Functions</strong>: Built-in SCSS/SASS functions for color manipulation and conversion.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <span><strong>Design System Tooling</strong>: Color management tools that support RGBA to HEX conversion in design systems.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Additional RGBA to HEX Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/articles/rgba-to-hex-conversion-guide" className="block p-5 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h4 className="text-lg font-medium mb-2">Comprehensive RGBA to HEX Conversion Guide</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Detailed tutorial on understanding and implementing RGBA to HEX conversion in web projects.</p>
                </Link>
                <Link href="/tools/color-converter" className="block p-5 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h4 className="text-lg font-medium mb-2">Standard RGBA to HEX Converter</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Our classic converter for standard 6-digit HEX codes without opacity support.</p>
                </Link>
                <Link href="/tools/color-palette-generator" className="block p-5 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h4 className="text-lg font-medium mb-2">Color Palette Generator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Create and export color palettes with both RGBA and 8-digit HEX notation.</p>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Conclusion Section - New Addition */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6" id="conclusion">Why Our RGBA to HEX Converter Stands Out</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our RGBA to HEX converter tool offers the most comprehensive solution for converting RGBA colors to 8-digit hexadecimal format with full transparency support. Unlike basic converters, we provide:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <div className="text-blue-500 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Professional Accuracy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our RGBA to HEX algorithm follows the W3C specifications exactly, ensuring your conversions meet industry standards with perfect accuracy every time.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <div className="text-green-500 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Instant Conversion</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Real-time conversion as you adjust RGBA values, with instant visual feedback showing exactly how your colors will appear in your projects.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <div className="text-purple-500 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Developer-Focused Features</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Copy-ready CSS code samples, color presets, and educational resources to help you implement 8-digit HEX colors in your projects effectively.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Convert Your RGBA Colors to HEX?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Our RGBA to HEX converter tool provides the most accurate and convenient way to transform your RGBA colors to both standard 6-digit and modern 8-digit HEX format with full transparency support. Try it now and streamline your web development workflow!
              </p>
              <Link 
                href="/tools/rgba-to-hex-8-digit-converter" 
                className="inline-flex items-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-medium hover:from-blue-600 hover:to-green-600 shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                </svg>
                Start Converting RGBA to HEX Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 