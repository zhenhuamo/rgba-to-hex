'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

const ColorHarmonyPage: React.FC = () => {
  const toolEmbedUrl = "/tools/color-harmony-tool";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 p-4 md:p-8">
      <Navigation />
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-10 md:mb-14 mt-6 md:mt-8">
          <div className="inline-block p-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full mb-4 shadow-md">
            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400 mb-4">
            Color Harmony Wheel & Generator
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Create harmonious color schemes based on color theory principles. Our free color harmony tool provides complementary, triadic, analogous, and other harmony types perfect for web design, UI/UX, branding, and creative projects.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-purple-100 dark:bg-purple-700/50 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Complementary</span>
            <span className="bg-blue-100 dark:bg-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Triadic</span>
            <span className="bg-indigo-100 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Analogous</span>
            <span className="bg-pink-100 dark:bg-pink-700/50 text-pink-800 dark:text-pink-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Split-Complementary</span>
            <span className="bg-teal-100 dark:bg-teal-700/50 text-teal-800 dark:text-teal-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Monochromatic</span>
            <span className="bg-emerald-100 dark:bg-emerald-700/50 text-emerald-800 dark:text-emerald-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">CSS Export</span>
          </div>
        </header>

        {/* Definition Section - NEW */}
        <section className="mb-12 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">Color Harmony Definition & Meaning</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              <strong>Color harmony</strong> refers to the theory of combining colors in a way that is aesthetically pleasing to the eye. A harmonious color scheme creates a sense of order and balance in design. The meaning of color harmony goes beyond aesthetics—it helps create mood, convey messages, and guide user interaction in both digital and physical designs.
            </p>
            <p>
              Our color harmony wheel demonstrates how colors relate to each other based on their position on the color wheel. Understanding color harmony principles is essential for artists, designers, and anyone working with visual media to create cohesive and effective color palettes.
            </p>
          </div>
        </section>

        {/* Interactive Tool Section */}
        <section aria-labelledby="interactive-tool-heading" className="mb-12">
          <h2 id="interactive-tool-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">Interactive Color Harmony Generator</h2> 
          <div className="w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9] max-w-6xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
            <iframe 
              src={toolEmbedUrl}
              className="w-full h-full border-none"
              title="Interactive Color Harmony Generator"
              loading="lazy"
            />
          </div>
          <div className="text-center mt-6">
            <Link 
              href={toolEmbedUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Open Standalone Tool
            </Link>
          </div>
        </section>

        {/* Color Harmony Examples - NEW */}
        <section className="mb-12 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-green-500 pl-4">Color Harmony Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="flex h-32">
                <div className="w-1/2 bg-blue-500"></div>
                <div className="w-1/2 bg-orange-500"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Complementary</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Colors opposite on the color wheel. Creates high contrast and visual interest.</p>
              </div>
            </div>
            
            {/* Example 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="flex h-32">
                <div className="w-1/3 bg-red-500"></div>
                <div className="w-1/3 bg-yellow-500"></div>
                <div className="w-1/3 bg-blue-500"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Triadic</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Three colors equally spaced on the color wheel. Bold but balanced color combination.</p>
              </div>
            </div>
            
            {/* Example 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="flex h-32">
                <div className="w-1/3 bg-blue-400"></div>
                <div className="w-1/3 bg-blue-500"></div>
                <div className="w-1/3 bg-blue-600"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Monochromatic</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Different shades and tints of one color. Creates a cohesive and elegant look.</p>
              </div>
            </div>
            
            {/* Example 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="flex h-32">
                <div className="w-1/3 bg-blue-500"></div>
                <div className="w-1/3 bg-purple-500"></div>
                <div className="w-1/3 bg-pink-500"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Analogous</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Adjacent colors on the color wheel. Creates a harmonious and comfortable effect.</p>
              </div>
            </div>
            
            {/* Example 5 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="flex h-32">
                <div className="w-1/3 bg-red-500"></div>
                <div className="w-1/3 bg-green-500"></div>
                <div className="w-1/3 bg-blue-300"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Split-Complementary</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">A base color with two colors adjacent to its complement. High contrast with less tension.</p>
              </div>
            </div>
            
            {/* Example 6 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="flex h-32">
                <div className="w-1/4 bg-purple-500"></div>
                <div className="w-1/4 bg-orange-500"></div>
                <div className="w-1/4 bg-green-500"></div>
                <div className="w-1/4 bg-red-500"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Tetradic</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Four colors arranged in two complementary pairs. Rich color scheme with balanced contrast.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <article className="prose dark:prose-invert lg:prose-lg max-w-none bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 md:p-10 backdrop-blur-sm mb-12">
          <section id="usage-examples">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4 !mt-0">Using Color Harmony in Design</h2>
            <p>
              Color harmony is a fundamental principle in design that helps create visually pleasing and balanced compositions. Understanding color relationships is essential for designers to create effective and aesthetically appealing designs.
            </p>
            
            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-4">When to Use Different Harmony Types</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">Complementary Colors</h4>
                <p className="mb-3">Best for creating high contrast and visual interest. Use for:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Call-to-action buttons</li>
                  <li>Logo design with strong contrast</li>
                  <li>Sports team branding</li>
                  <li>Food and restaurant designs</li>
                  <li>Attention-grabbing advertisements</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Analogous Colors</h4>
                <p className="mb-3">Perfect for creating harmony and cohesion. Use for:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Website color schemes</li>
                  <li>App interfaces</li>
                  <li>Nature-inspired designs</li>
                  <li>Educational materials</li>
                  <li>Health and wellness branding</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Triadic Colors</h4>
                <p className="mb-3">Great for vibrant and balanced designs. Use for:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Children&apos;s products</li>
                  <li>Creative agency branding</li>
                  <li>Entertainment and game design</li>
                  <li>Festival and event materials</li>
                  <li>Educational toys and tools</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-pink-800 dark:text-pink-200 mb-3">Split-Complementary</h4>
                <p className="mb-3">Offers high contrast with less tension. Use for:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Modern web design</li>
                  <li>Fashion and lifestyle branding</li>
                  <li>Book covers and publishing</li>
                  <li>Interior design concepts</li>
                  <li>Marketing materials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Color Harmony Wheel Section - NEW */}
          <section id="color-wheel" className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-teal-500 pl-4">The Color Harmony Wheel Explained</h2>
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full aspect-square p-4 max-w-xs mx-auto">
                  {/* Simplified visual representation of a color wheel */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-500"></div>
                    <div className="absolute inset-[15%] rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Color Wheel</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <p>
                  The <strong>color harmony wheel</strong> is a circular diagram that organizes colors based on their relationships. It&apos;s a fundamental tool for understanding how colors interact and for creating harmonious color combinations.
                </p>
                <p className="mt-4">
                  Primary colors (red, yellow, blue) form the foundation of the wheel, with secondary and tertiary colors filling the spaces between. The position of colors on the wheel determines their relationship:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Opposite colors</strong> form complementary pairs</li>
                  <li><strong>Adjacent colors</strong> create analogous harmonies</li>
                  <li><strong>Colors at 120° angles</strong> form triadic relationships</li>
                  <li><strong>Colors at 90° angles</strong> create tetradic schemes</li>
                </ul>
                <p className="mt-4">
                  Our color harmony generator uses these wheel-based relationships to automatically create balanced and visually appealing color schemes for your projects.
                </p>
              </div>
            </div>
          </section>

          <section id="faq" className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">What is the difference between complementary and split-complementary?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Complementary colors are directly opposite each other on the color wheel, creating maximum contrast. Split-complementary uses a base color plus two colors adjacent to its complement, providing high contrast with more color variety and less tension.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Which color harmony is best for websites?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Analogous color schemes are often ideal for websites as they create a cohesive, harmonious feel without being jarring. For more dynamic websites, split-complementary schemes offer a good balance between harmony and contrast. The best choice depends on your brand personality and the emotional response you want to evoke.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">How do I use exported color schemes in my projects?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You can copy the exported CSS variables directly into your stylesheet, or use the Sass variables in your Sass/SCSS files. For developers working with JavaScript frameworks, the JSON format can be imported into your code. These color values can be applied to elements like backgrounds, text, borders, and UI components.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">How many colors should I use in my design?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  A common guideline is the 60-30-10 rule: use your primary color for 60% of the design, a secondary color for 30%, and an accent color for 10%. Limiting your palette to 3-5 colors is generally recommended for cohesive design, though this can vary based on your specific needs.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">What&apos;s the best color harmony app for drawing and art?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  For drawing and art purposes, our color harmony tool provides an excellent starting point. You can generate harmonious color palettes and export them in various formats. For more specialized art needs, you might also consider apps like Adobe Color, Coolors, or Procreate&apos;s built-in color harmony tools, which integrate directly with drawing workflows.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Are there books about color harmony I can read?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Yes, there are several excellent books on color harmony: &quot;Color Harmony: A Guide to Creative Color Combinations&quot; by Hideaki Chijiiwa, &quot;The Complete Color Harmony&quot; by Tina Sutton and Bride M. Whelan, and &quot;Color Design Workbook&quot; by Terry Lee Stone. These books provide in-depth knowledge about color theory and practical applications of color harmony in design.
                </p>
              </div>
            </div>
          </section>

          <section id="embedding" className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-emerald-500 pl-4">Embedding the Color Harmony Tool</h2>
            <p>
              You can embed this color harmony generator in your own website or blog with the following iframe code:
            </p>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden mt-6">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-gray-300 text-sm font-medium">HTML Iframe Embed</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`<iframe src="https://rgbatohex.com/tools/color-harmony-tool" width="100%" height="600" style="border: none; border-radius: 8px;" title="Color Harmony Generator" loading="lazy"></iframe>`);
                  }}
                  className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded transition-colors"
                >
                  Copy
                </button>
              </div>
              <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/color-harmony-tool" 
  width="100%" 
  height="600" 
  style="border: none; border-radius: 8px;" 
  title="Color Harmony Generator" 
  loading="lazy">
</iframe>`}</code>
              </pre>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold mb-2">Responsive Embedding</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                For a responsive embed that maintains its aspect ratio across different screen sizes, wrap the iframe in a container with padding-based aspect ratio:
              </p>
              <pre className="bg-gray-900 p-4 text-sm text-gray-300 overflow-x-auto mt-4 rounded-lg">
                <code>{`<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe 
    src="https://rgbatohex.com/tools/color-harmony-tool" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 8px;" 
    title="Color Harmony Generator" 
    loading="lazy">
  </iframe>
</div>`}</code>
              </pre>
            </div>
          </section>

          <section id="related-tools" className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-green-500 pl-4">Related Color Tools</h2>
            <p>
              Explore our other color tools to enhance your design workflow:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Link href="/tools/color-wheel" className="block p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200">Color Wheel</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Interactive color wheel to explore color relationships</p>
              </Link>
              
              <Link href="/tools/palette-generator" className="block p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Palette Generator</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Create complete color palettes for your projects</p>
              </Link>
              
              <Link href="/tools/color-contrast" className="block p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">Color Contrast Checker</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Check accessibility of your color combinations</p>
              </Link>
              
              <Link href="/tools/hsl-to-rgb" className="block p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-pink-800 dark:text-pink-200">HSL to RGB Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Convert HSL colors to RGB format</p>
              </Link>
            </div>
          </section>
        </article>

        {/* Footer CTA */}
        <div className="text-center py-12 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Start Creating Professional Color Schemes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Experiment with different base colors and harmony types to find the perfect color combination for your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tools/color-wheel" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Try Color Wheel
            </Link>
            <Link 
              href="/tools/palette-generator" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              Create Color Palette
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorHarmonyPage; 