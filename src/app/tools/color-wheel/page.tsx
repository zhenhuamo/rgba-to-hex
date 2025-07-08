'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';

export default function ColorWheelEmbedPage() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);
  // const iframeHeight = 800; // Fixed height for the iframe container

  return (
    <>
      <Head>
        <title>Color Wheel Tool | Interactive Color Harmony Generator | RGB Color Theory</title>
        <meta name="description" content="Explore our interactive color wheel tool for perfect color harmonies. Learn color theory, create complementary, analogous, triadic color schemes. Free online color wheel generator." />
        <meta name="keywords" content="color wheel, color wheel theory, color wheel generator, color wheel chart, color wheel online, color wheel rgb, color wheel brown, color wheel complementary colors, color wheel spinner, color wheel for clothes" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          {/* Navigation Bar */}
          <Navigation />
          
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  CW
                </div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
                  Color Wheel Tool
                </h1>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Interactive</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Explore color relationships and create harmonious color schemes with our interactive <strong>color wheel tool</strong>
              </p>
            </div>

            <div className="mb-8">
              {/* Iframe with scrollbar */}
              <div className="w-full rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="w-full h-[800px] overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                  <iframe 
                    src="/tools/color-wheel-tool?embed=true" 
                    className="w-full border-none"
                    height="1200"
                    title="Interactive Color Wheel Tool"
                    loading="lazy"
                    style={{ 
                      height: '1200px', // Taller than container to ensure scrolling
                      minWidth: '100%'
                    }}
                  />
                </div>
              </div>
              
              <div className="flex justify-center mt-6 mb-4">
                <a
                  href="/tools/color-wheel-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full font-medium hover:from-red-600 hover:via-green-600 hover:to-blue-600 shadow-md transition-all hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open Full Tool in New Page
                </a>
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
                  <h2 className="text-xl font-bold mb-4">Embed This Color Wheel Tool On Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You can easily add this <strong>color wheel tool</strong> to your own website by copying the code below:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`<iframe src="https://rgbatohex.com/tools/color-wheel-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:auto;" title="Interactive Color Wheel Tool"></iframe>`}</code>
                    </pre>
                    <button
                      onClick={() => {
                        const code = `<iframe src="https://rgbatohex.com/tools/color-wheel-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:auto;" title="Interactive Color Wheel Tool"></iframe>`;
                        navigator.clipboard.writeText(code);
                        alert('Embed code copied to clipboard!');
                      }}
                      className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">What is a Color Wheel?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  A color wheel is the foundation of color theory, first invented by Sir Isaac Newton in 1666 when he mapped the color spectrum onto a circle. It serves as a visual tool that displays relationships between colors, helping designers, artists, and creative professionals find harmonious color combinations.
                </p>
                <p>
                  Our color wheel tool is an interactive application that allows you to visually explore color relationships, create harmonious color schemes, and understand color theory in a practical way. Unlike static color wheels, our online color wheel lets you select colors directly from the wheel and automatically generates harmonious color combinations based on established color theory principles.
                </p>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Color Wheel Types</h5>
                  <p className="text-blue-600 dark:text-blue-400">
                    Our color wheel generator supports two major color wheel systems:
                  </p>
                  <ul className="mt-2 text-sm text-blue-600 dark:text-blue-400 space-y-1">
                    <li>• <strong>RGB Color Wheel</strong> - Designed for digital design and online use, based on light mixing principles. Ideal for web design, digital art, and screen displays. Our online color wheel tool is primarily based on the RGB system for precise digital color representation.</li>
                    <li>• <strong>RYB Color Wheel</strong> - Traditionally used by artists, suitable for mixing pigments and traditional art mediums. While our tool is RGB-based, we provide conversion features to help traditional artists apply digital colors to physical works.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Color Harmonies and Combinations</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  With our color wheel tool, you can easily create the following color harmonies:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Complementary Colors</h3>
                    <p className="mb-3">
                      Two colors opposite each other on the color wheel, such as red and cyan, blue and orange. These <strong>color wheel complementary colors</strong> provide high contrast and high-impact visual effects, making colors appear brighter and more prominent. Perfect for designs requiring strong visual impact, like advertisements and logo design.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Analogous Colors</h3>
                    <p className="mb-3">
                      Three colors positioned side by side on the color wheel, such as yellow, yellow-green, and green. This scheme can be versatile but potentially overwhelming. To balance analogous schemes, choose one dominant color and use others as accents. Ideal for nature-themed designs like landscape photography and eco-friendly branding.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Triadic Colors</h3>
                    <p className="mb-3">
                      Three colors evenly spaced around the color wheel, such as red, yellow, and blue. This scheme offers high contrast but with more variety than complementary combinations. Triadic schemes create bold, vibrant color palettes perfect for children&apos;s products, entertainment applications, and creative projects.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Tetradic Colors</h3>
                    <p className="mb-3">
                      Four colors evenly spaced around the color wheel. Tetradic schemes are very bold and work best when one color dominates while others serve as accents. Suitable for complex design projects like magazine layouts, website design, and multimedia presentations.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Monochromatic Colors</h3>
                    <p className="mb-3">
                      Different tints, shades, and tones of a single color. This scheme offers subtle and conservative color combinations, perfect for design projects requiring a harmonious and unified look. Especially suitable for corporate websites, brand identities, and projects needing a professional appearance.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Split-Complementary</h3>
                    <p className="mb-3">
                      A base color plus the two colors adjacent to its complement. These provide high contrast with less tension than pure complementary schemes. Creating a balanced and visually interesting palette while maintaining harmony, ideal for beginners to color theory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Color Wheel Components</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our <strong>color wheel chart</strong> clearly displays the fundamental components of the color wheel:
                </p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Primary Colors</h3>
                    <p>
                      In the RGB color wheel, the primary colors are Red, Green, and Blue - these colors, when combined, create white light. In the RYB color wheel, the primary colors are Red, Yellow, and Blue - colors that cannot be created by mixing other colors.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Secondary Colors</h3>
                    <p>
                      Colors created by mixing two primary colors. In the RGB color wheel, the secondary colors are Cyan, Magenta, and Yellow. In the RYB color wheel, they are Purple, Orange, and Green.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Tertiary Colors</h3>
                    <p>
                      Colors created by mixing a secondary color with a primary color. In the RGB color wheel, tertiary colors include Orange, Yellow-Green, Spring Green, Azure, Violet, and Rose. In the RYB color wheel, tertiary colors include Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Purple, and Red-Purple.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Warm and Cool Colors</h3>
                    <p>
                      Our color wheel tool helps you understand and apply the concept of color temperature:
                    </p>
                    <p>
                      <strong>Warm colors</strong> range from red to yellow, including oranges and magentas. These colors evoke warmth, like sunshine and fire. Warm colors typically create feelings of comfort, energy, and passion, making them ideal for restaurants, living spaces, and designs that need to create an intimate atmosphere.
                    </p>
                    <p>
                      <strong>Cool colors</strong> range from blue to green and purple. These colors evoke coolness, like water and ice. Cool colors are typically associated with calmness, distance, and professionalism, making them suitable for medical facilities, tech brands, and designs that need to convey reliability.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Special Colors</h3>
                    <p>
                      Explore where <strong>brown</strong> fits on the color wheel. <strong>Color wheel brown</strong> is a special case, as brown is actually a shade of orange or red. In our color wheel tool, you can create various brown tones by reducing the brightness of orange or red hues. Browns form beautiful complementary combinations with blues, suitable for natural themes, woodwork designs, and vintage styles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Advanced Features of Our Color Wheel Tool</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Hue, Saturation & Brightness Controls</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Precisely control every aspect of your colors:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Hue</strong> - The basic color on the color wheel</li>
                    <li><strong>Saturation</strong> - The intensity or purity of the color</li>
                    <li><strong>Brightness</strong> - The amount of light or darkness in a color</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Color Variation Creator</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Easily create different variations of colors:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Shades</strong> - Darken colors by adding black</li>
                    <li><strong>Tints</strong> - Lighten colors by adding white</li>
                    <li><strong>Tones</strong> - Adjust colors by adding gray</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Color Wheel Spinner Feature</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our unique <strong>color wheel spinner</strong> feature allows you to rotate the entire color wheel, exploring different color relationships and possibilities. This is especially useful for finding novel color schemes and breaking out of conventional color combinations.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Practical Applications of the Color Wheel</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Clothing & Fashion</h3>
                    <p className="mb-3">
                      Our <strong>color wheel for clothes</strong> feature is specially designed for fashion designers and clothing enthusiasts, helping you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Find colors that complement different skin tones</li>
                      <li>Create seasonal wardrobe color schemes</li>
                      <li>Design coordinated clothing collections</li>
                      <li>Select perfect accessory colors</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Interior Design</h3>
                    <p className="mb-3">
                      Special features for interior designers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Wall and furniture color suggestions</li>
                      <li>Seasonal decor color schemes</li>
                      <li>Optimal color choices for different room functions</li>
                      <li>Analysis of lighting effects on color perception</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Branding & Marketing</h3>
                    <p className="mb-3">
                      Tools for marketing professionals:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Brand color selection and analysis</li>
                      <li>Color psychology for target audiences</li>
                      <li>Seasonal marketing campaign color schemes</li>
                      <li>Industry-specific color trend analysis</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Digital Art & Web Design</h3>
                    <p className="mb-3">
                      Features for designers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Website color scheme generation</li>
                      <li>User interface element color suggestions</li>
                      <li>Accessibility color contrast checks</li>
                      <li>Color adaptations for responsive design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Who Can Benefit from Our Color Wheel Tool?</h2>
              <div className="grid md:grid-cols-3 gap-4 text-gray-600 dark:text-gray-300">
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Graphic Designers creating harmonious color schemes for brands, ads, and marketing materials</li>
                    <li>Web Designers seeking to create beautiful and accessible website color palettes</li>
                    <li>Interior Designers selecting perfect color combinations for different spaces and client needs</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fashion Designers developing seasonal clothing collections and color schemes</li>
                    <li>Artists exploring color theory and applying it to artistic creations</li>
                    <li>Students learning the fundamentals and practical applications of color theory</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Marketing Professionals selecting effective colors for brands and marketing campaigns</li>
                    <li>Photographers understanding color harmony to enhance photo composition</li>
                    <li>Illustrators creating compelling color schemes to convey specific emotions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">How to Use Our Color Wheel Tool</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Select a Base Color</strong> - Click or drag on the color wheel to choose your base color, or enter a specific HEX code.
                  </li>
                  <li>
                    <strong>Choose a Harmony Type</strong> - Select from complementary, analogous, triadic, tetradic, or monochromatic harmony types.
                  </li>
                  <li>
                    <strong>Adjust Lightness</strong> - Use the lightness slider to fine-tune the brightness of your colors while maintaining the same hue and saturation.
                  </li>
                  <li>
                    <strong>View Harmony Colors</strong> - See the generated harmony colors displayed below the wheel, complete with their HEX codes.
                  </li>
                  <li>
                    <strong>Copy Color Codes</strong> - Click the copy button next to any color to copy its HEX code to your clipboard.
                  </li>
                  <li>
                    <strong>Fine-tune Colors</strong> - Drag the harmony points directly on the wheel to make precise adjustments to your color scheme.
                  </li>
                  <li>
                    <strong>Save or Export</strong> - Save your favorite color schemes or export them for use in your design software.
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Educational Value of Our Color Wheel Tool</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our color theory section provides rich educational resources on:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The history and evolution of color theory</li>
                  <li>Color meanings across different cultures</li>
                  <li>Color psychology and its applications in design</li>
                  <li>The science behind color harmony principles</li>
                  <li>Color blindness and color accessibility considerations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Color Wheel Tool?</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Intuitive Interface</strong> - Easy to use, even for color theory beginners</li>
                    <li><strong>Precise Control</strong> - Fine adjustments for every aspect of color</li>
                    <li><strong>Real-time Feedback</strong> - See color changes and combinations instantly</li>
                    <li><strong>Multiple Harmony Types</strong> - Explore all classic color harmony relationships</li>
                    <li><strong>Responsive Design</strong> - Works perfectly on any device, from mobile to desktop</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Export Options</strong> - Save and share your color schemes in multiple formats</li>
                    <li><strong>Educational Resources</strong> - Learn color theory while applying it</li>
                    <li><strong>No Registration Required</strong> - Free to use with no account needed</li>
                    <li><strong>Regular Updates</strong> - Constantly adding new features and improvements</li>
                    <li><strong>Professional Quality</strong> - Created by designers for designers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Is this color wheel tool free to use?</h3>
                  <p>
                    Yes, our color wheel tool is completely free to use. You can use it as much as you want without any limitations, both on our website and embedded in your own projects.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">How accurate are the color harmonies?</h3>
                  <p>
                    Our color wheel tool uses established color theory principles to generate harmonious color combinations. The harmonies are mathematically calculated based on color wheel positions, ensuring accurate and visually pleasing results.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I embed this tool on my own website?</h3>
                  <p>
                    Absolutely! You can easily embed our color wheel tool on your own website using the iframe code provided above. The embedded version includes all the functionality of the full tool.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">What color formats does the tool support?</h3>
                  <p>
                    Currently, the tool displays colors in HEX format, which is widely used in web design and digital applications. The tool internally works with HSL (Hue, Saturation, Lightness) for color wheel calculations.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">How can I use this for my design projects?</h3>
                  <p>
                    You can use our color wheel tool to find harmonious color combinations for your design projects. Simply select a base color that matches your brand or design concept, choose a harmony type that suits your needs, and copy the generated color codes for use in your design software, website code, or any other application.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">What&apos;s the difference between RGB and RYB color wheels?</h3>
                  <p>
                    The RGB (Red, Green, Blue) color wheel is based on light mixing and is used primarily for digital design. The RYB (Red, Yellow, Blue) color wheel is based on pigment mixing and is traditionally used by artists. Our tool primarily uses the RGB model but provides insights into both systems.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">How do I find brown on the color wheel?</h3>
                  <p>
                    Brown doesn&apos;t appear directly on the color wheel as it&apos;s a desaturated and darkened version of orange or red. In our color wheel tool, you can create various brown tones by selecting an orange or red hue and then reducing its saturation and brightness.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I use this tool for educational purposes?</h3>
                  <p>
                    Absolutely! Our color wheel tool is an excellent educational resource for teaching color theory concepts. It provides a hands-on way to demonstrate color relationships, harmonies, and principles to students of all ages.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-gray-600 dark:text-gray-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Conclusion</h3>
                <p>
                  Color is one of the most powerful elements in design and art. By mastering the color wheel and color theory, you can create eye-catching, emotionally rich, and professional designs. Our color wheel tool is designed to make this process both educational and practical, helping you make better color decisions in every creative project.
                </p>
                <p className="mt-3">
                  Whether you&apos;re a professional designer or a hobbyist just beginning to explore the world of color, our tool provides the resources you need to fully harness the power of color. Start using our color wheel generator today and explore unlimited creative possibilities!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}