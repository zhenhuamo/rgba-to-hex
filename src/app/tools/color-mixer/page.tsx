'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';

export default function ColorMixerPage() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <>
      <Head>
        <title>Color Mixer Online | Mix & Blend Colors with Free RGB, HEX Color Tool</title>
        <meta name="description" content="Free online color mixer tool to blend RGB, HEX colors for your design projects. Create perfect color combinations with our advanced color mixer chart and simulator." />
        <meta name="keywords" content="color mixer, color mixer online, color mixer tool, color mixer hex, color mixer rgb, color mixer chart, color mixer game, color mixer for kids, color mixer online from image, color mixer photoshop, color mixer machine price" />
        <meta property="og:title" content="Color Mixer Online | Mix & Blend Colors with Free RGB, HEX Color Tool" />
        <meta property="og:description" content="Create custom color combinations with our free online color mixer. Mix RGB and HEX colors, save your palettes, and export for your design projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rgbatohex.com/tools/color-mixer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Color Mixer Online | Mix & Blend Colors with Free RGB, HEX Color Tool" />
        <meta name="twitter:description" content="Create custom color combinations with our free online color mixer. Perfect for designers, artists, and educators." />
        <link rel="canonical" href="https://rgbatohex.com/tools/color-mixer" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Navigation />

          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                  CM
                </div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Color Mixer Online Tool
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Mix, blend and create custom color combinations with our free <strong>color mixer online</strong> tool
              </p>
            </div>

            <div className="mb-8">
              <iframe 
                src="/tools/color-mixer-tool?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="800"
                title="Online Color Mixer Tool"
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
                  <h2 className="text-xl font-bold mb-4">Embed This Color Mixer Tool On Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You can easily add this <strong>color mixer tool</strong> to your own website by copying the code below:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`<iframe src="https://rgbatohex.com/tools/color-mixer-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Online Color Mixer Tool"></iframe>`}</code>
                    </pre>
                    <button
                      onClick={() => {
                        const code = `<iframe src="https://rgbatohex.com/tools/color-mixer-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Online Color Mixer Tool"></iframe>`;
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

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">What is a Color Mixer Online Tool?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  A <strong>color mixer</strong> is an interactive tool that allows users to combine different colors and create new custom colors. Our <strong>color mixer online</strong> tool provides a simple yet powerful interface for mixing colors in various formats including <strong>RGB</strong> and <strong>HEX</strong> color codes.
                </p>
                <p>
                  Unlike traditional <strong>color mixer</strong> methods used in physical painting or a <strong>color mixer machine</strong>, our digital <strong>color mixer tool</strong> uses additive color mixing to simulate how colors blend together. This makes it perfect for web designers, graphic artists, and anyone working with digital colors.
                </p>
                <p>
                  You can use our <strong>color mixer online</strong> to experiment with different color ratios, create gradients, develop color schemes, or simply play with colors like a <strong>color mixer game</strong>. It&apos;s even educational as a <strong>color mixer for kids</strong> to learn about color theory in a fun, interactive way.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Features of Our Color Mixer Online Tool</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mix Any Colors</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Advanced <strong>color mixer chart</strong> for visualizing combinations</li>
                    <li>Mix colors using intuitive ratio controls</li>
                    <li>Add multiple colors to create complex blends</li>
                    <li>Real-time preview of mixed results</li>
                    <li>Similar functionality to <strong>color mixer Photoshop</strong> tools but available online</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Color Formats & Export</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Support for <strong>color mixer hex</strong> and <strong>color mixer RGB</strong> formats</li>
                    <li>One-click copying of color codes</li>
                    <li>Visual representation of colors in the mixture</li>
                    <li>Ability to save and export your color combinations</li>
                    <li>Accurate color mixing algorithm for professional results</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">How to Use Our Color Mixer Tool</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Select Colors to Mix</strong> - Start by choosing your base colors. You can enter specific <strong>hex color codes</strong> or use the color picker to visually select colors.
                  </li>
                  <li>
                    <strong>Adjust Color Ratios</strong> - Change the proportions of each color using the ratio sliders. More ratio means that color will have a stronger influence on the final blend.
                  </li>
                  <li>
                    <strong>View Mixed Result</strong> - The tool instantly shows you the result of your <strong>color mixing</strong> in the preview area, along with the new color&apos;s hex and RGB values.
                  </li>
                  <li>
                    <strong>Add or Remove Colors</strong> - You can add more colors to create complex mixtures or remove colors you don&apos;t want to include in your blend.
                  </li>
                  <li>
                    <strong>Copy Color Codes</strong> - Once you&apos;re satisfied with your mixed color, copy its color code to use in your web design, graphic design, or other digital projects.
                  </li>
                  <li>
                    <strong>Create Multiple Combinations</strong> - Experiment with different combinations to create a palette of complementary colors for your project.
                  </li>
                </ol>
                <p className="mt-4">
                  Unlike a physical <strong>color mixer machine</strong> where prices can be high, our <strong>color mixer online</strong> tool is completely free to use and accessible from any device with a web browser.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Applications of Color Mixing</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Web & Graphic Design</h3>
                  <p>
                    Web and graphic designers use <strong>color mixer tools</strong> to create harmonious color schemes for websites, logos, and marketing materials. Our tool offers functionality similar to <strong>color mixer Photoshop</strong> features but in a more accessible online format.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Digital Art & Illustration</h3>
                  <p>
                    Digital artists can experiment with <strong>color mixer RGB</strong> values to create unique tones and shades for their artwork, without the mess of traditional paint mixing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Education & Learning</h3>
                  <p>
                    Teachers can use our <strong>color mixer for kids</strong> to demonstrate color theory principles in an interactive and engaging way, helping students understand how primary colors combine to create secondary and tertiary colors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Photography & Image Editing</h3>
                  <p>
                    Photographers and image editors can use <strong>color mixer online from image</strong> techniques to match or create complementary colors from their photography, improving color grading and visual consistency.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">The Science Behind Color Mixing</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Additive vs. Subtractive Color Mixing</h3>
                  <p>
                    Digital <strong>color mixers</strong> like ours use additive color mixing (RGB), which is different from the subtractive mixing (CMYK) used in physical paint. In additive mixing, combining all colors creates white, whereas in subtractive mixing (like with a physical <strong>color mixer machine</strong>), combining all colors creates black.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">RGB Color Model</h3>
                  <p>
                    The <strong>RGB color model</strong> underlies how our <strong>color mixer RGB</strong> functionality works. Each color is represented by values from 0 to 255 for Red, Green, and Blue channels. By adjusting these values, you can create any color in the visible spectrum.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">HEX Color Codes</h3>
                  <p>
                    Our <strong>color mixer hex</strong> functionality works with hexadecimal color codes, which are a way to represent RGB values in a format widely used in web design. A hex code starts with # followed by six characters representing the red, green, and blue values in hexadecimal format.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Color Blending Algorithms</h3>
                  <p>
                    The <strong>color mixer online</strong> tool uses weighted averaging to blend colors based on the ratios you specify. This mathematical approach ensures accurate and predictable results when mixing multiple colors together.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Color Mixing Tips & Techniques</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Whether you&apos;re a professional designer or just having fun with our <strong>color mixer game</strong> features, these tips will help you get the most out of your color mixing:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Start with complementary colors to create balanced neutrals</li>
                  <li>Use the <strong>color mixer chart</strong> to visualize how colors will blend before committing</li>
                  <li>Experiment with different ratio combinations for the same colors to find subtle variations</li>
                  <li>Save your favorite mixtures to build a personal color palette</li>
                  <li>Use the <strong>color mixer tool</strong> to find the exact middle point between two brand colors</li>
                  <li>Try using analogous colors (those adjacent on the color wheel) for harmonious blends</li>
                </ul>
                <p>
                  These techniques will help you achieve results similar to professional tools like <strong>color mixer Photoshop</strong> functions but with the convenience of our free online tool.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Is this color mixer online tool free to use?</h3>
                  <p>
                    Yes, our <strong>color mixer online</strong> tool is completely free to use. Unlike physical <strong>color mixer machine price</strong> considerations, there are no costs associated with our digital tool. You can mix as many colors as you want without any limitations.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">How accurate is the color mixing?</h3>
                  <p>
                    Our <strong>color mixer</strong> uses precise mathematical algorithms to ensure accurate color blending. The results are comparable to what you would achieve with professional software like <strong>color mixer Photoshop</strong> tools, making it suitable for professional design work.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I extract colors from an image to mix?</h3>
                  <p>
                    While this specific tool doesn&apos;t have <strong>color mixer online from image</strong> functionality, you can use our companion Image Color Extractor tool to first extract colors from an image, then copy those colors to this <strong>color mixer tool</strong> to blend them.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">How is this different from physical color mixing?</h3>
                  <p>
                    Unlike physical paint mixing or a <strong>color mixer machine</strong>, our digital <strong>color mixer</strong> uses additive color theory (RGB) rather than subtractive color theory (CMYK). This means the results may differ from what you would get by mixing physical pigments.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I use this for teaching color theory to children?</h3>
                  <p>
                    Absolutely! Our tool is perfect as a <strong>color mixer for kids</strong> learning about color theory. It provides a fun, interactive way to demonstrate how colors combine, without the mess of physical paints. The <strong>color mixer game</strong> aspect makes learning enjoyable and engaging.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">What color formats does the tool support?</h3>
                  <p>
                    Our <strong>color mixer online</strong> tool supports both <strong>color mixer hex</strong> and <strong>color mixer RGB</strong> formats, allowing you to work with the color format that best suits your project needs. You can easily copy the mixed color in either format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}