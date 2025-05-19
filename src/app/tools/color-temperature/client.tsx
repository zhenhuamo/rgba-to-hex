'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ColorTemperatureChart from '@/components/ColorTemperatureChart';
import ColorTemperatureReference from '@/components/ColorTemperatureReference';

export default function ColorTemperatureClient() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);
  
  const copyToClipboard = () => {
    const code = `<iframe src="https://rgbatohex.com/tools/color-temperature-adjuster" width="100%" height="700" style="border:none;border-radius:12px;overflow:auto;" title="Color Temperature and Tint Adjustment Tool"></iframe>`;
    navigator.clipboard.writeText(code);
    alert('Embed code copied to clipboard!');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <Navigation />
        
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                CT
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-blue-500">
                Color Temperature and Tint Adjuster
              </h1>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Interactive</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Adjust the warmth and tint of any color with our interactive <strong>color temperature tool</strong>
            </p>
          </div>

          <div className="mb-8">
            {/* Iframe with scrollbar */}
            <div className="w-full rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="w-full overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                <iframe 
                  src="/tools/color-temperature-adjuster" 
                  className="w-full border-none"
                  height="700"
                  title="Color Temperature and Tint Adjustment Tool"
                  loading="lazy"
                  style={{ 
                    minWidth: '100%'
                  }}
                />
              </div>
            </div>
            
            <div className="flex justify-center mt-6 mb-4">
              <Link 
                href="/tools/color-temperature-adjuster" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-amber-500 via-orange-500 to-blue-500 rounded-full font-medium hover:from-amber-600 hover:via-orange-600 hover:to-blue-600 shadow-md transition-all hover:shadow-lg"
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
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                {showEmbedCode ? 'Hide Embed Code' : 'Show Embed Code'}
              </button>
            </div>
            
            {showEmbedCode && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-4">
                <h2 className="text-xl font-bold mb-4">Embed This Color Temperature Tool On Your Website</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You can easily add this <strong>color temperature tool</strong> to your own website by copying the code below:
                </p>
                
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<iframe src="https://rgbatohex.com/tools/color-temperature-adjuster" width="100%" height="700" style="border:none;border-radius:12px;overflow:auto;" title="Color Temperature and Tint Adjustment Tool"></iframe>`}</code>
                  </pre>
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 新增: 交互式色温图表组件 */}
          <ColorTemperatureChart />
          
          {/* 新增: 专业参考资料组件 */}
          <ColorTemperatureReference />

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Understanding Color Temperature</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Color temperature is a characteristic of visible light that has important applications in photography, videography, 
                publishing, and design. It is measured in Kelvin (K) and represents the appearance of light from different sources.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-6">
                <div className="bg-gradient-to-r from-amber-200 to-sky-300 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Warm Colors (Lower Kelvin)</h3>
                  <p>
                    Warm colors (2000K-4000K) contain more red and yellow tones. They create a cozy, intimate feeling and are often 
                    associated with fire, sunset, and incandescent lighting.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-200 to-indigo-300 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Cool Colors (Higher Kelvin)</h3>
                  <p>
                    Cool colors (5000K-9000K) contain more blue tones. They create a fresh, clean feeling and are associated with 
                    daylight, clear skies, and modern fluorescent lighting.
                  </p>
                </div>
              </div>
              
              <p>
                In digital color editing, adjusting temperature doesn&apos;t actually change the physical temperature of a color 
                but rather shifts the color balance to create the perception of warmth or coolness.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What is Color Tint?</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Color tint refers to the green-magenta balance of a color. This is perpendicular to the temperature 
                (blue-yellow) axis in color space. Tint adjustments are commonly used in photography to correct for:
              </p>
              
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Fluorescent lighting that casts greenish tints</li>
                <li>LED lighting that sometimes produces magenta casts</li>
                <li>Creative color grading for artistic effect</li>
                <li>Compensating for sensor characteristics in different cameras</li>
              </ul>
              
              <div className="grid md:grid-cols-2 gap-8 my-6">
                <div className="bg-gradient-to-r from-green-200 to-green-300 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Green Tint</h3>
                  <p>
                    Shifting toward green can help correct magenta color casts from some digital cameras or 
                    create a cinematic look reminiscent of certain film styles.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-200 to-purple-300 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Magenta Tint</h3>
                  <p>
                    Adding magenta can warm up skin tones, counteract excessive green from fluorescent lighting, 
                    or create stylistic effects for design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Practical Applications</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6 text-gray-600 dark:text-gray-300">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold mb-2">Photography</h3>
                <p>
                  Temperature and tint adjustments are fundamental in photo editing to correct white balance,
                  match lighting conditions, or create consistent looks across image sets.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold mb-2">Web Design</h3>
                <p>
                  Web designers use temperature adjustments to create mood, improve readability, ensure brand 
                  consistency, and establish visual hierarchy.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold mb-2">User Interface</h3>
                <p>
                  UI designers adjust color temperature to create comfortable viewing experiences, such as warmer 
                  colors for night modes to reduce blue light.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Color Temperature Reference</h2>
            <div className="overflow-x-auto text-gray-600 dark:text-gray-300">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Temperature (Kelvin)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Light Source / Appearance</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Color Characteristic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1000-2000K</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Candlelight, Fire</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Very warm, strong orange/red</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2500-3500K</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Incandescent bulbs, Sunrise/Sunset</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Warm, yellowish</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4000-5000K</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Fluorescent lights, Morning sun</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Neutral white</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5000-6500K</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Daylight, Flash photography</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cool, slightly blue</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6500-8000K</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Overcast sky, Shade</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cool, moderately blue</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8000-10000K</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Blue sky, Heavy shade</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Very cool, strongly blue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Using This Tool</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <ol className="list-decimal pl-8 mb-6 space-y-2">
                <li>Select your base color using the color picker or by entering a HEX value</li>
                <li>Use the temperature slider to adjust warmth/coolness:
                  <ul className="list-disc pl-8 mt-2">
                    <li>Slide left for warmer colors (more red/yellow)</li>
                    <li>Slide right for cooler colors (more blue)</li>
                  </ul>
                </li>
                <li>Use the tint slider to adjust the green-magenta balance:
                  <ul className="list-disc pl-8 mt-2">
                    <li>Slide left for greener tones</li>
                    <li>Slide right for more magenta tones</li>
                  </ul>
                </li>
                <li>Compare the original and adjusted colors in the preview</li>
                <li>Copy the resulting HEX or RGB values for use in your projects</li>
              </ol>
              
              <p>
                This tool is ideal for designers, photographers, and anyone working with digital colors who needs
                precise control over color temperature and tint adjustments.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Color Temperature in Various Fields</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Photography</h3>
                <p className="mb-3">
                  In photography, color temperature is used to ensure that white objects appear white under different lighting conditions. 
                  Photographers adjust the white balance of their cameras to match the color temperature of the ambient light, or intentionally 
                  mismatch it to create artistic effects.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Film and Video</h3>
                <p className="mb-3">
                  Cinematographers use color temperature to establish mood and atmosphere. Warm tones (lower Kelvin) are often used for 
                  intimate or nostalgic scenes, while cool tones (higher Kelvin) might be used for tense or clinical settings.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Interior Design</h3>
                <p className="mb-3">
                  Interior designers select lighting with specific color temperatures to enhance the ambiance of spaces. 
                  Warmer lights are preferred in living areas and bedrooms, while cooler lights are often used in kitchens and workspaces.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Digital Design</h3>
                <p className="mb-3">
                  Web and graphic designers manipulate color temperature to evoke specific emotions and ensure readability. 
                  Warmer colors tend to advance (appear closer), while cooler colors tend to recede (appear farther away).
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold mb-2">What is the difference between color temperature and tint?</h3>
                <p>
                  Color temperature refers to the blue-yellow balance (coolness vs. warmth), while tint refers to the green-magenta balance. 
                  They represent two different axes in the color space.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold mb-2">Why would I need to adjust the temperature of a color?</h3>
                <p>
                  You might want to adjust temperature to create a specific mood (warm and inviting vs. cool and clean), 
                  correct for lighting conditions, match colors across different sources, or achieve certain aesthetic goals.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold mb-2">How does color temperature relate to the Kelvin scale?</h3>
                <p>
                  The Kelvin scale quantifies color temperature based on the color of light that a black body radiator would emit when heated to that temperature. 
                  Lower Kelvin values (2000K-4000K) produce warmer yellow/red light, while higher values (5000K-9000K) produce cooler blue light.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold mb-2">Can I use this tool for web design?</h3>
                <p>
                  Yes! This tool is perfect for web designers who want to fine-tune colors for websites, apps, or digital products. 
                  You can adjust the temperature and tint of any color and instantly get the new HEX and RGB values.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold mb-2">Is this tool free to use?</h3>
                <p>
                  Yes, our color temperature adjustment tool is completely free to use. You can use it as much as you want without any limitations, 
                  both on our website and embedded in your own projects.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold mb-2">How accurate are the temperature and tint adjustments?</h3>
                <p>
                  Our tool uses carefully calibrated algorithms based on color science principles to ensure accurate adjustments. 
                  The temperature adjustment primarily modifies the red-blue balance, while the tint adjustment modifies the green-magenta balance, 
                  providing precise control over your colors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Benefits of Using Our Color Temperature Tool</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Intuitive Interface</strong> - Easy to use, even for beginners</li>
                  <li><strong>Precise Control</strong> - Fine adjustments for both temperature and tint</li>
                  <li><strong>Real-time Preview</strong> - See changes instantly as you adjust sliders</li>
                  <li><strong>Original Comparison</strong> - Compare adjusted color with the original side by side</li>
                  <li><strong>Multiple Output Formats</strong> - Copy colors in both HEX and RGB formats</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No Registration Required</strong> - Free to use with no account needed</li>
                  <li><strong>Embeddable</strong> - Easily add to your own website via iframe</li>
                  <li><strong>Educational</strong> - Learn about color theory while using the tool</li>
                  <li><strong>Professional Quality</strong> - Results suitable for design and photography work</li>
                  <li><strong>Responsive Design</strong> - Works well on desktop and mobile devices</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-gray-600 dark:text-gray-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Conclusion</h3>
              <p>
                Understanding and manipulating color temperature and tint gives you greater control over your visual creations. Whether you&apos;re a 
                photographer adjusting white balance, a designer creating a mood, or just someone who wants to make their colors look perfect, 
                our color temperature tool provides an easy way to make precise adjustments.
              </p>
              <p className="mt-3">
                Start using our temperature and tint adjustment tool today and discover how subtle shifts in color balance can dramatically 
                improve your designs and visual content!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 