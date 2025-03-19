'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function ColorPickerEmbedPage() {
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [showEmbedCode, setShowEmbedCode] = useState(true);
  
  // Get current domain on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get the base URL of the current site
      const origin = window.location.origin;
      setBaseUrl(origin);
    }
  }, []);
  
  // Build iframe src
  const iframeSrc = baseUrl ? `${baseUrl}/tools/color-picker-tool` : '';
  
  // Example code
  const embedCode = `<iframe 
  src="${iframeSrc}"
  width="100%" 
  height="700" 
  style="border:none;border-radius:12px;overflow:auto;"
  title="Color Picker Tool - Online Color Dropper"
  loading="lazy"
  allowfullscreen
></iframe>`;

  // Copy embed code
  const copyEmbedCode = () => {
    if (navigator.clipboard && embedCode) {
      navigator.clipboard.writeText(embedCode)
        .then(() => {
          alert('Embed code copied to clipboard!');
        })
        .catch(err => {
          console.error('Copy failed:', err);
        });
    }
  };

  return (
    <>
      <Head>
        <title>Color Picker Tool | Online Color Dropper | Easy-to-Use Web Color Extractor</title>
        <meta name="description" content="Use our online color picker tool to easily extract colors from websites and images. Supports HEX, RGB, HSL and other formats, helping designers and developers get accurate color values quickly." />
        <meta name="keywords" content="color picker tool, color picker from image, color picker from screen, color picker hex code, color picker app, color picker wheel, color picker html, color picker windows, color picker rgba, color picker mac, web color dropper, online color extractor, color dropper, screen color picker, web design tools, RGB color picker, HEX color codes, color identification tool" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          {/* Navigation */}
          <Navigation />
          
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white text-xs font-bold">
                  CP
                </div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  Color Picker Tool
                </h1>
                <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Interactive</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Use our <strong>Color Picker Tool</strong> to quickly extract, identify and apply any color you see on your screen
              </p>
            </div>

            <div className="mb-8">
              {/* Iframe with scrollbar */}
              <div className="w-full rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="w-full h-[800px] overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                  <iframe 
                    src={`${iframeSrc}?embed=true`}
                    className="w-full border-none"
                    height="1000"
                    title="Color Picker Tool"
                    loading="lazy"
                    style={{ 
                      height: '1000px',
                      minWidth: '100%'
                    }}
                  />
                </div>
              </div>
              
              <div className="flex justify-center mt-6 mb-4">
                <Link 
                  href="/tools/color-picker-tool" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full font-medium hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-md transition-all hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open Full Tool in New Page
                </Link>
              </div>
              
              <div className="mt-6 text-right">
                <button
                  onClick={() => setShowEmbedCode(!showEmbedCode)}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
                >
                  {showEmbedCode ? 'Hide Embed Code' : 'Show Embed Code'}
                </button>
              </div>
              
              {showEmbedCode && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-4">
                  <h2 className="text-xl font-bold mb-4">Embed This Color Picker Tool On Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You can easily add this <strong>Color Picker Tool</strong> to your own website by copying the code below:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{embedCode}</code>
                    </pre>
                    <button
                      onClick={copyEmbedCode}
                      className="absolute top-3 right-3 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">What is a Color Picker Tool?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  A <strong>color picker</strong> tool (also known as a color dropper or color extractor) is a digital tool used to extract colors from any area on the screen. This tool mimics the physical dropper used in laboratories to extract small liquid samples, but it&apos;s designed to &quot;pick up&quot; or capture color information instead. Whether you&apos;re using a <strong>color picker from screen</strong> functionality on Windows or Mac, or a dedicated <strong>color picker app</strong>, the basic principle remains the same.
                </p>
                <p>
                  Our online <strong>color picker</strong> tool is an interactive application that enables you to accurately extract color values from any images, photos, or web elements. Unlike simple pickers, our tool provides color values in multiple formats (such as <strong>color picker hex code</strong>, <strong>color picker rgba</strong>, HSL, etc.) and allows you to save a color history for future reference, making it a powerful alternative to standard <strong>color picker Windows</strong> or <strong>color picker Mac</strong> utilities.
                </p>
                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                  <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Color Formats</h5>
                  <p className="text-purple-600 dark:text-purple-400">
                    Our color picker tool supports multiple color formats:
                  </p>
                  <ul className="mt-2 text-sm text-purple-600 dark:text-purple-400 space-y-1">
                    <li>• <strong>HEX</strong> - Six-digit hexadecimal code widely used in <strong>color picker html</strong> applications, such as #FF5733</li>
                    <li>• <strong>RGB/RGBA</strong> - Red-Green-Blue color model with optional alpha channel for transparency, commonly used in <strong>color picker rgba</strong> contexts, like rgba(255, 87, 51, 1)</li>
                    <li>• <strong>HSL</strong> - Hue-Saturation-Lightness model, more intuitive way to represent colors, often featured in advanced <strong>color picker wheel</strong> interfaces</li>
                    <li>• <strong>HSV/HSB</strong> - Hue-Saturation-Value/Brightness model, suitable for traditional art and graphic design</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed How-to-Use Guide */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">How to Use the Color Picker Tool</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Step-by-Step Instructions</h3>
                    <ol className="list-decimal pl-5 space-y-3">
                      <li><strong>Click the eyedropper button</strong> - This activates the <strong>color picker from screen</strong> functionality.</li>
                      <li><strong>Your cursor changes</strong> - You&apos;ll notice your cursor changes to a dropper/picker icon, similar to what you&apos;d find in a native <strong>color picker app</strong>.</li>
                      <li><strong>Select any color</strong> - Click on any part of your screen to capture its color, just like using a <strong>color picker extension</strong> in your browser.</li>
                      <li><strong>View color details</strong> - After selection, you&apos;ll see the color displayed with its <strong>color picker hex code</strong> and <strong>color picker rgba</strong> values.</li>
                      <li><strong>Copy color values</strong> - Click the copy button to copy the color code to your clipboard for use in <strong>color picker html</strong> contexts or design software.</li>
                      <li><strong>Use saved colors</strong> - Your picked colors are automatically saved in the history section for later use, a feature often missing in basic <strong>color picker Windows</strong> or <strong>color picker Mac</strong> tools.</li>
                    </ol>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Advanced Features</h3>
                    <ul className="list-disc pl-5 space-y-3">
                      <li><strong>Color history</strong> - Access recently picked colors without needing to select them again, unlike standard <strong>color picker app</strong> options.</li>
                      <li><strong>RGB slider visualization</strong> - See the red, green, and blue components of your selected color, similar to professional <strong>color picker wheel</strong> interfaces.</li>
                      <li><strong>Sample colors</strong> - Quick access to common colors for fast selection, a convenience feature not always available in basic <strong>color picker from image</strong> tools.</li>
                      <li><strong>One-click copying</strong> - Instantly copy color codes in different formats for use in your designs or <strong>color picker html</strong> implementations.</li>
                      <li><strong>Visual color preview</strong> - Large color preview area to accurately see your selected color, more comprehensive than typical <strong>color picker Windows</strong> utilities.</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 mt-6">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Pro Tips</h4>
                  <ul className="list-disc pl-5 text-blue-600 dark:text-blue-400 space-y-2 text-sm">
                    <li>Hold your mouse steady when selecting a color to ensure accuracy.</li>
                    <li>Use the color history feature to compare and choose between different color options.</li>
                    <li>For web design, copy the HEX code for CSS; for graphic design software, RGB values are often more useful.</li>
                    <li>If you&apos;re trying to match a brand color, note that screen colors may vary slightly from printed materials.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Which browsers support the Color Picker Tool?</h3>
                  <p>Our color picker tool is based on the EyeDropper API, which is currently supported in Google Chrome, Microsoft Edge, and other Chromium-based browsers. Firefox and Safari support is coming soon. For best results, we recommend using Chrome or Edge.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Why can&apos;t I pick colors outside the browser window?</h3>
                  <p>The Color Picker tool allows you to pick colors from anywhere on your screen, including outside the browser window. This is a powerful feature of the EyeDropper API. If you&apos;re experiencing limitations, make sure you&apos;ve granted the necessary permissions when prompted.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">How accurate are the colors picked by this tool?</h3>
                  <p>The Color Picker tool provides highly accurate color values directly from your screen pixels. However, keep in mind that colors may appear slightly different across different monitors due to variations in display calibration, brightness, and color profiles.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Can I save more than 6 colors in the history?</h3>
                  <p>Currently, the tool saves up to 6 of your most recently picked colors to keep the interface clean and focused. We&apos;re working on an enhanced version that will allow you to save and organize larger color palettes.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Is there a way to get CMYK values for print design?</h3>
                  <p>The current version focuses on digital color formats (HEX, RGB, HSL). CMYK conversion is planned for a future update to better support print designers. For now, you can use the RGB values with a color converter tool for approximate CMYK values.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Will my color history be saved if I close the browser?</h3>
                  <p>Currently, color history is stored only for your current session. Once you close or refresh the browser, this history will be reset. We&apos;re developing a persistent storage option for a future update.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Can I use this instead of built-in color pickers on Windows or Mac?</h3>
                  <p>Absolutely! While operating systems like Windows and Mac have built-in <strong>color picker Windows</strong> and <strong>color picker Mac</strong> tools, our web-based solution offers more features including color history, multiple format support, and the ability to work consistently across all platforms without requiring installation.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">How does this compare to a color picker extension for browsers?</h3>
                  <p>Unlike a typical <strong>color picker extension</strong>, our tool doesn&apos;t require any browser installation or permissions, yet offers the same functionality. You get all the benefits of a dedicated <strong>color picker from image</strong> tool directly in your browser, without cluttering your extensions list.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Does this tool work like a color picker wheel?</h3>
                  <p>While traditional <strong>color picker wheel</strong> interfaces allow you to select colors from a circular spectrum, our tool focuses on extracting existing colors from your screen. However, we provide comprehensive color information and variations similar to what you&apos;d find in a color wheel interface.</p>
                </div>
              </div>
            </div>

            {/* User Convenience & Benefits */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Simplicity & Benefits</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Instant Color Identification</h3>
                    </div>
                    <p>Identify any color on your screen in seconds. No more guessing or trying to match colors manually. Just click and get precise color codes instantly.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">No Installation Required</h3>
                    </div>
                    <p>Our web-based tool works directly in your browser with no downloads, installations, or plugins needed. Access the tool instantly on any device with a supported browser.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">One-Click Copying</h3>
                    </div>
                    <p>Copy color codes to your clipboard with a single click. No more manual typing or risk of transcription errors. Paste directly into your design software or code editor.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Visual Color Analysis</h3>
                    </div>
                    <p>Our tool breaks down colors into their RGB components with visual sliders, helping you understand color composition and create variations by adjusting individual components.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Time-Saving Workflow</h3>
                    </div>
                    <p>Save hours of time trying to match colors manually. Professional designers and developers can dramatically speed up their workflow by quickly capturing exact colors from reference materials.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Color Consistency</h3>
                    </div>
                    <p>Ensure perfect color consistency across your designs by capturing exact color values. Particularly valuable for brand work where color accuracy is crucial for maintaining brand identity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-medium">Feature</th>
                        <th className="py-3 px-4 text-left text-sm font-medium">Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="py-3 px-4 text-sm font-medium">Technology</td>
                        <td className="py-3 px-4 text-sm">EyeDropper API, JavaScript, React</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="py-3 px-4 text-sm font-medium">Browser Compatibility</td>
                        <td className="py-3 px-4 text-sm">Chrome 95+, Edge 95+, Opera 81+, Chrome for Android 95+</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm font-medium">Color Formats</td>
                        <td className="py-3 px-4 text-sm">HEX, RGB (with component breakdown)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="py-3 px-4 text-sm font-medium">History Capacity</td>
                        <td className="py-3 px-4 text-sm">Up to 6 most recent colors</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm font-medium">Sample Colors</td>
                        <td className="py-3 px-4 text-sm">8 preset colors for quick selection</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="py-3 px-4 text-sm font-medium">Color Accuracy</td>
                        <td className="py-3 px-4 text-sm">Pixel-perfect screen color extraction</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm font-medium">Performance</td>
                        <td className="py-3 px-4 text-sm">Lightweight, optimized for fast loading and response</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="py-3 px-4 text-sm font-medium">Data Storage</td>
                        <td className="py-3 px-4 text-sm">Session-based (cleared on browser close)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm font-medium">Platform Compatibility</td>
                        <td className="py-3 px-4 text-sm">Works as a replacement for <strong>color picker Windows</strong>, <strong>color picker Mac</strong>, and mobile color picking tools</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="py-3 px-4 text-sm font-medium">Integration</td>
                        <td className="py-3 px-4 text-sm">Can be used alongside or instead of a <strong>color picker extension</strong> or dedicated <strong>color picker app</strong></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm font-medium">Image Support</td>
                        <td className="py-3 px-4 text-sm">Functions as a <strong>color picker from image</strong> when used on images displayed in the browser</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800 mt-6">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Browser Support Note</h4>
                  <p className="text-yellow-600 dark:text-yellow-400 text-sm">
                    The Color Picker Tool relies on the modern EyeDropper API, which may not be available in all browsers. If you experience compatibility issues, we recommend using Google Chrome or Microsoft Edge for the best experience. Firefox and Safari support is expected in future browser updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Use Cases for Color Picker Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Use Cases for Color Picker Tools</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Web Design & Development</h3>
                  <p className="mb-3">
                    Web designers and front-end developers can use a <strong>color picker from screen</strong> or <strong>color picker html</strong> tool to extract accurate color values from existing websites, images, or designs. Utilizing <strong>color picker hex code</strong> and <strong>color picker rgba</strong> formats ensures color consistency and brand identity. This is crucial for following design specifications and creating cohesive user interfaces.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Graphic Design</h3>
                  <p className="mb-3">
                    Graphic designers can quickly extract colors using a <strong>color picker from image</strong> tool, accessing inspiration from photos or other design works. More flexible than standard <strong>color picker Windows</strong> or <strong>color picker Mac</strong> utilities, web-based tools help in creating harmonious color schemes, replicating specific color effects, or ensuring color matching between different design elements.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Branding & Marketing</h3>
                  <p className="mb-3">
                    Brand specialists and marketers can ensure accurate brand colors are used across various media and platforms. With a color picker tool, they can easily check and verify if colors in marketing materials align with brand guidelines, maintaining brand consistency.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Digital Art & Illustration</h3>
                  <p className="mb-3">
                    Digital artists and illustrators can extract exact colors from reference images, replicate specific tones and moods, or create cohesive color palettes. This is valuable for ensuring color harmony and visual appeal in artwork.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Photography & Editing</h3>
                  <p className="mb-3">
                    Photographers and image editors can analyze colors in photos, ensure color consistency between different photographs, or extract specific colors for post-processing and color grading. This helps create portfolios with unified aesthetics and visual style.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Education & Learning</h3>
                  <p className="mb-3">
                    Design students and enthusiasts can learn color theory and color combination techniques by analyzing colors in professional works. Color picker tools are valuable resources for understanding color decisions behind successful designs and exploring the effects of different color combinations.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Cross-Platform Compatibility</h3>
                  <p className="mb-3">
                    Our web-based tool provides consistent functionality across operating systems, eliminating the need to switch between <strong>color picker Windows</strong> and <strong>color picker Mac</strong> tools or install multiple <strong>color picker app</strong> versions. This makes it ideal for teams working in mixed-platform environments or individuals who use multiple devices.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Color Theory and Exploration</h3>
                  <p className="mb-3">
                    For those interested in color theory, our tool provides insights similar to a <strong>color picker wheel</strong> but with practical applications. Designers can extract colors from real-world sources, analyze their RGB components, and better understand color relationships without switching between multiple specialized color tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Embedding Guide & Technical Details</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Embedding our color picker tool on your website is straightforward. Here are some technical details and best practices:
                </p>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Responsive Design</h3>
                    <p>
                      Our embed code uses 100% width by default, ensuring the tool adapts to different screen sizes and devices on your website. You can adjust the width and height parameters as needed, but we recommend keeping the width at 100% for the best responsive experience.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Performance Optimization</h3>
                    <p>
                      The embed code includes the loading=&quot;lazy&quot; attribute, implementing lazy loading to improve page performance. This means that the iframe content will only load when the user scrolls to the visible area of the tool, reducing initial page load time and resource consumption.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Customization & Integration</h3>
                    <p>
                      If you need more in-depth customization or integration with your systems, please contact our technical team. We can provide API access or customized versions to meet your specific needs and use cases.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Important Notes</h4>
                    <ul className="list-disc pl-5 text-yellow-600 dark:text-yellow-400 space-y-1 text-sm">
                      <li>Ensure your website allows iframe embedding (X-Frame-Options settings)</li>
                      <li>Some content management systems may require special settings to display iframe content</li>
                      <li>The tool requires JavaScript to function properly, ensure your website allows JavaScript execution</li>
                      <li>If you encounter cross-origin (CORS) issues, please refer to our technical documentation or contact our support team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 