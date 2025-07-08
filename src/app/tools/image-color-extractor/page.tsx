'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';

export default function ImageColorExtractorPage() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <>
      <Head>
        <title>Image Color Extractor | Extract Color Palette From Images Online</title>
        <meta name="description" content="Free online image color extractor tool to extract dominant colors and color codes from any image. Get color palette in HEX, RGB, HSL, and CMYK formats for designers and developers." />
        <meta name="keywords" content="image color extractor, image color extractor online, image color palette extractor, image color code extractor, color palette from image, extract colors from image, image color picker, dominant color extractor, color scheme generator, react native image color extractor, how to extract color palette from image" />
        <meta property="og:title" content="Image Color Extractor | Extract Color Palette From Images Online" />
        <meta property="og:description" content="Upload any image and extract its dominant colors and color codes in multiple formats. Perfect for designers and developers who need to extract color palette from image." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rgbatohex.com/tools/image-color-extractor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Image Color Extractor | Extract Color Palette From Images Online" />
        <meta name="twitter:description" content="Free online image color extractor tool to extract dominant colors from any image" />
        <link rel="canonical" href="https://rgbatohex.com/tools/image-color-extractor" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Navigation />

          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white text-xs font-bold">
                  CE
                </div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  Image Color Extractor Online
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Upload an image and extract its color palette and color codes for your design projects
              </p>
            </div>

            <div className="mb-8">
              <iframe 
                src="/tools/image-color-extractor-tool?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="800"
                title="Online Image Color Extractor"
                loading="lazy"
              />
              
              <div className="flex justify-center mt-6 mb-4">
                <a
                  href="/tools/image-color-extractor-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full font-medium hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-md transition-all hover:shadow-lg"
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
                  <h2 className="text-xl font-bold mb-4">Embed This Image Color Extractor Tool On Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You can easily add this image color palette extractor to your own website by copying the code below:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`<iframe src="https://rgbatohex.com/tools/image-color-extractor?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Image Color Extractor Online"></iframe>`}</code>
                    </pre>
                    <button
                      onClick={() => {
                        const code = `<iframe src="https://rgbatohex.com/tools/image-color-extractor?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Image Color Extractor Online"></iframe>`;
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
              <h2 className="text-2xl font-bold mb-6">What is an Image Color Extractor Online Tool?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  An <strong>image color extractor</strong> is a tool that analyzes an image and identifies its most dominant or prevalent colors. This process is particularly useful for designers, artists, and developers who want to create <strong>color palettes based on existing images</strong> or ensure color consistency across their projects.
                </p>
                <p>
                  Our <strong>image color palette extractor</strong> tool uses advanced algorithms to analyze the pixel data in your uploaded images and identify the most commonly occurring colors. The tool then presents these colors in a visually appealing palette, allowing you to see how they work together and select the ones you want to use in your projects.
                </p>
                <p>
                  Whether you&apos;re a professional designer looking to extract exact <strong>color codes from an image</strong> or a developer working on a <strong>React Native image color extractor</strong> implementation, our tool provides an easy way to identify and use colors from any image.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Features of Our Image Color Code Extractor</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Upload & Extract</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Simple and intuitive upload interface for <strong>online image color extraction</strong></li>
                    <li>Fast processing of images of various sizes</li>
                    <li>Adjustable number of colors to extract (2-16)</li>
                    <li>Works with JPG, PNG, and other common image formats</li>
                    <li>Perfect for those wondering <strong>how to extract color palette from image</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Color Information</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Color codes</strong> in multiple formats (HEX, RGB, HSL, CMYK)</li>
                    <li>Percentage of each color&apos;s presence in the image</li>
                    <li>One-click copying of color values</li>
                    <li>Suggested color schemes based on selected colors</li>
                    <li>Useful for developers working on <strong>image colorization</strong> projects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">How to Use the Image Color Palette Extractor</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Upload an Image</strong> - Click the &quot;Choose Image&quot; button and select an image from your device. The tool supports common image formats like JPG, PNG, and GIF.
                  </li>
                  <li>
                    <strong>Adjust Color Count</strong> - Use the slider to set how many dominant colors you want to extract from the image. The default is 8, but you can choose between 2 and 16 colors.
                  </li>
                  <li>
                    <strong>View Extracted Colors</strong> - After processing, the tool will display the extracted colors in a palette. Each color box represents a dominant color from your image.
                  </li>
                  <li>
                    <strong>Select Color Format</strong> - Choose your preferred color format from the dropdown menu: HEX, RGB, HSL, or CMYK.
                  </li>
                  <li>
                    <strong>Copy Color Values</strong> - Click on any color in the palette to view its details. Use the copy button to copy the <strong>color code</strong> in your chosen format.
                  </li>
                  <li>
                    <strong>Explore Color Schemes</strong> - For any selected color, the tool also suggests complementary color schemes that you can use in your designs.
                  </li>
                </ol>
                <p className="mt-4">
                  This process is similar to what you might do when trying to <strong>edit image color in Illustrator</strong> but with the convenience of an online tool that requires no software installation.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Applications of Color Extraction</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Web Design</h3>
                  <p>
                    Web designers can extract colors from client logos or key images to create website color schemes that maintain brand consistency. This ensures that the website&apos;s color palette complements existing visual assets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Graphic Design & Illustration</h3>
                  <p>
                    Graphic designers can pull colors from inspirational photos or reference images to create harmonious designs. This is especially useful when you need to <strong>edit image color in Illustrator</strong> to match specific brand guidelines or mood boards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Mobile App Development</h3>
                  <p>
                    Developers working on mobile applications can use a <strong>React Native image color extractor</strong> approach to ensure their app&apos;s color scheme matches visual assets perfectly. Our tool can help you identify the exact colors to use in your code.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">AI and Image Processing</h3>
                  <p>
                    Researchers and developers working on <strong>image colorization using deep learning</strong> can use color extraction tools to analyze training data and improve their algorithms&apos; understanding of color relationships in images.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Color Formats Explained</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">HEX</h3>
                  <p>
                    HEX (Hexadecimal) color codes are used in web design and consist of a # followed by 6 characters representing RGB values in base 16. For example, #FF5733 represents a shade of orange. HEX codes are commonly used when implementing <strong>color extraction in web applications</strong>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">RGB</h3>
                  <p>
                    RGB (Red, Green, Blue) defines colors using three values from 0 to 255, representing the intensity of each primary color. For example, rgb(255, 87, 51) is the same orange as the HEX example. RGB is often used in <strong>image color code extraction</strong> for screen-based designs.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">HSL</h3>
                  <p>
                    HSL (Hue, Saturation, Lightness) represents colors in a more intuitive way. Hue is a degree on the color wheel (0 to 360), saturation is a percentage (0% to 100%), and lightness determines how light or dark the color is (0% to 100%). This format is useful for <strong>image colorization</strong> projects.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">CMYK</h3>
                  <p>
                    CMYK (Cyan, Magenta, Yellow, Key/Black) is used primarily in printing. Each value represents the percentage (0% to 100%) of that color&apos;s ink that will be applied. CMYK is subtractive, meaning that higher values create darker colors. This is essential knowledge when you need to <strong>extract color palette from image</strong> for print projects.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">For Developers: Implementing Image Color Extraction</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  If you&apos;re a developer interested in creating your own <strong>image color extractor NPM</strong> package or integrating color extraction into your application, there are several approaches you can take:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use canvas APIs to analyze pixel data in browser-based applications</li>
                  <li>Implement color quantization algorithms like K-means clustering</li>
                  <li>For mobile development, learn how to create a <strong>React Native image color extractor</strong> component</li>
                  <li>Explore machine learning approaches for <strong>image colorization using deep learning</strong></li>
                </ul>
                <p>
                  Our tool demonstrates one approach to color extraction, but the techniques can be adapted for various platforms and use cases.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Is this image color extractor online tool free to use?</h3>
                  <p>
                    Yes, our Image Color Extractor is completely free to use. There are no hidden fees, subscriptions, or limits on the number of images you can process.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Are my images stored on your servers?</h3>
                  <p>
                    No, all image processing happens directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security of your visual content.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">How accurate is the color palette extraction?</h3>
                  <p>
                    Our tool uses quantization algorithms to identify the most dominant colors in your image. While it&apos;s highly accurate for most purposes, some subtle color variations might be grouped together. You can adjust the number of colors to extract for more or less granularity.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I use this for professional design work?</h3>
                  <p>
                    Absolutely! Many professional designers use our tool to <strong>extract color palette from image</strong> files for their work. The extracted color codes are accurate and can be used in any design software including those where you <strong>edit image color in Illustrator</strong> or similar programs.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Is there an API or NPM package available?</h3>
                  <p>
                    Currently, we don&apos;t offer an official <strong>image color extractor NPM</strong> package or API, but we&apos;re considering developing these options in the future. For now, you can embed our tool on your website using the iframe code provided above.
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