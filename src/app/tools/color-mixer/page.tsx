'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function ColorMixerPage() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
      
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
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Pigment-based</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Mix, blend and create custom color combinations with our free <strong>color mixer online</strong> tool that simulates real-world pigment mixing
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
              
              <div className="flex justify-center mt-6 mb-4">
                <a
                  href="/tools/color-mixer-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-medium hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-md transition-all hover:shadow-lg"
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
                  Unlike most digital color mixers that use simple RGB averaging, our <strong>color mixer tool</strong> uses <strong>subtractive color mixing</strong> (pigment-based) to simulate how real paints and dyes blend together. This creates more natural and realistic color combinations that match what you would expect when mixing physical colors.
                </p>
                <p>
                  You can use our <strong>color mixer online</strong> to experiment with different color ratios, create gradients, develop color schemes, or simply play with colors like a <strong>color mixer game</strong>. It&apos;s even educational as a <strong>color mixer for kids</strong> to learn about color theory in a fun, interactive way.
                </p>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Realistic Pigment-Based Mixing</h5>
                  <p className="text-blue-600 dark:text-blue-400">
                    Our color mixer simulates how physical paints would blend, rather than how colored lights mix on a screen. This means:
                  </p>
                  <ul className="mt-2 text-sm text-blue-600 dark:text-blue-400 space-y-1">
                    <li>• Red + Blue = Purple (not magenta)</li>
                    <li>• Red + Green = Brown (not yellow)</li>
                    <li>• Blue + Yellow = Green (not gray)</li>
                  </ul>
                </div>
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
                    <li>Realistic pigment-based color mixing for natural results</li>
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
                    Digital artists can experiment with <strong>color mixer RGB</strong> values to create unique tones and shades for their artwork, without the mess of traditional paint mixing but with realistic pigment-based results.
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
                    Our <strong>color mixer</strong> uses <strong>subtractive color mixing</strong> (like physical paints), which is different from the additive mixing (RGB) used in most digital color tools. In <strong>additive mixing</strong>, combining red, green, and blue light creates white light (like on your screen), whereas in <strong>subtractive mixing</strong> (like with paints or printer inks), combining pigments absorbs more light, creating darker colors.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">Additive Color Mixing (RGB)</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Red + Green = Yellow</li>
                        <li>• Red + Blue = Magenta</li>
                        <li>• Green + Blue = Cyan</li>
                        <li>• Red + Green + Blue = White</li>
                        <li>• How lights mix on screens</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Subtractive Color Mixing (Pigments)</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Red + Green = Brown</li>
                        <li>• Red + Blue = Purple</li>
                        <li>• Yellow + Blue = Green</li>
                        <li>• All colors mixed = Dark Brown/Black</li>
                        <li>• How paints mix in real life</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">RGB Color Model</h3>
                  <p>
                    While our mixer uses pigment-based principles, we still work with the <strong>RGB color model</strong> since we&apos;re displaying on a screen. Each color is represented by values from 0 to 255 for Red, Green, and Blue channels, but our mixing algorithm simulates how physical pigments would interact rather than simply averaging these values.
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
                    The <strong>color mixer online</strong> tool uses advanced pigment-based mixing algorithms to simulate how real paints would interact. This approach creates more natural and visually pleasing results than simple RGB averaging, especially for complementary colors (like blue and yellow creating green instead of gray).
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
                  <li>Try mixing blue and yellow to create green, just like with real paints</li>
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
                    Our <strong>color mixer</strong> uses advanced pigment-based mixing algorithms to simulate how physical paints would interact. This creates more realistic results than standard digital color mixing, making it suitable for professional design work where natural color blending is important.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Why does red + green make brown instead of yellow?</h3>
                  <p>
                    Our color mixer uses pigment-based (subtractive) color mixing, which mimics how real paints and inks blend. In this model, red + green creates brown, not yellow. This is different from additive RGB mixing (used in most digital tools), where red + green light creates yellow. We chose the pigment model because it creates more natural-looking color combinations.
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
                    While most digital color tools use simple RGB averaging (additive mixing), our tool simulates physical pigment mixing (subtractive mixing) for more realistic results. This means the colors blend much more like real paints would, creating natural transitions and avoiding the &quot;muddy&quot; results often seen in digital mixing when combining complementary colors.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I use this for teaching color theory to children?</h3>
                  <p>
                    Absolutely! Our tool is perfect as a <strong>color mixer for kids</strong> learning about color theory. It provides a fun, interactive way to demonstrate how colors combine, without the mess of physical paints. Since it uses pigment-based mixing principles, it will teach children the same color interactions they would observe when mixing real paints.
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
  );
}