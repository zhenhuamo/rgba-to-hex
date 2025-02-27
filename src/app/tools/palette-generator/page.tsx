/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function PaletteGenerator() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
            <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path 
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6 14C5.45 14 5 13.55 5 13C5 12.45 5.45 12 6 12C6.55 12 7 12.45 7 13C7 13.55 6.55 14 6 14ZM9 8C9 7.45 9.45 7 10 7C10.55 7 11 7.45 11 8C11 8.55 10.55 9 10 9C9.45 9 9 8.55 9 8ZM16 8C15.45 8 15 7.55 15 7C15 6.45 15.45 6 16 6C16.55 6 17 6.45 17 7C17 7.55 16.55 8 16 8ZM18 14C17.45 14 17 13.55 17 13C17 12.45 17.45 12 18 12C18.55 12 19 12.45 19 13C19 13.55 18.55 14 18 14Z" 
                  fill="url(#paint0_linear)" 
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                </svg>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Color Palette Generator
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Create beautiful color schemes for your designs
            </p>
          </div>
          
          {/* 嵌入式工具 */}
          <div className="mb-8">
            <iframe 
              src="/tools/palette-generator-tool?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="800"
              title="Color Palette Generator"
              loading="lazy"
            />
            
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
                <h2 className="text-xl font-bold mb-4">Embed This Tool On Your Website</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You can easily add this color palette generator to your own website by copying the code below:
                </p>
                
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<iframe src="https://rgbatohex.com/tools/palette-generator-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Color Palette Generator"></iframe>`}</code>
                  </pre>
                  <button
                    onClick={() => {
                      const code = `<iframe src="https://rgbatohex.com/tools/palette-generator-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Color Palette Generator"></iframe>`;
                      navigator.clipboard.writeText(code);
                    }}
                    className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 专业人士部分 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Who Should Use This Tool?</h2>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Our color palette generator is designed for anyone who needs to create beautiful, harmonious color schemes. It&apos;s especially useful for:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Designers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• UI/UX Designers</li>
                    <li>• Graphic Designers</li>
                    <li>• Web Designers</li>
                    <li>• Interior Designers</li>
                    <li>• Fashion Designers</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Developers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Frontend Developers</li>
                    <li>• Web Developers</li>
                    <li>• App Developers</li>
                    <li>• Game Developers</li>
                    <li>• UI Engineers</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Other Professionals</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Art Directors</li>
                    <li>• Brand Managers</li>
                    <li>• Marketing Teams</li>
                    <li>• Content Creators</li>
                    <li>• Digital Artists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ 部分 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How many colors can I generate in one palette?</h3>
                <p className="text-gray-600">
                  Our color palette generator allows you to create palettes with 2 to 12 colors. You can generate 6-color palettes, 7-color schemes, 8-color combinations, or even 10-color collections, making it perfect for various design needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Can I generate a color palette from my own image?</h3>
                <p className="text-gray-600">
                  Yes! You can upload any image (JPG, PNG, or WebP format) and our tool will automatically extract a harmonious color palette. You can also fine-tune the colors by dragging the sample points to different areas of your image.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How does the two-color palette generator work?</h3>
                <p className="text-gray-600">
                  Starting with two colors, our algorithm creates a complete palette using color theory principles. It generates complementary colors, analogous colors, and other harmonious combinations based on the color wheel relationships.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Are the generated colors compatible with Pantone colors?</h3>
                <p className="text-gray-600">
                  While our tool doesn&apos;t directly use Pantone colors, it generates professional-grade color palettes that can be matched with Pantone colors. The colors are provided in HEX format, which can be converted to other color systems.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Is this color palette generator free to use?</h3>
                <p className="text-gray-600">
                  Yes, our color palette generator is completely free to use. You can generate unlimited color palettes from images, create custom schemes, and export your colors without any cost or registration required.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How can I ensure my color palette is accessible?</h3>
                <p className="text-gray-600">
                  Our tool considers color contrast and harmony when generating palettes. For web accessibility, we recommend using the generated colors with appropriate contrast ratios for text and background combinations. You can also manually adjust the colors to meet WCAG guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* 使用场景 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Web Design</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Website color schemes</li>
                  <li>• Landing page designs</li>
                  <li>• UI component libraries</li>
                  <li>• Email templates</li>
                  <li>• Banner designs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Branding</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Brand identity design</li>
                  <li>• Logo color selection</li>
                  <li>• Marketing materials</li>
                  <li>• Social media assets</li>
                  <li>• Corporate guidelines</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Print Design</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business cards</li>
                  <li>• Brochures and flyers</li>
                  <li>• Packaging design</li>
                  <li>• Posters and banners</li>
                  <li>• Magazine layouts</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Digital Art</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Digital illustrations</li>
                  <li>• Character design</li>
                  <li>• Game art assets</li>
                  <li>• Animation color scripts</li>
                  <li>• Digital paintings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 