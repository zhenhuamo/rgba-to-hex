'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function ColorBlindnessPage() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Navigation />

          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  CB
                </div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
                  Color Blindness Simulator Online
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Test your designs for color accessibility by simulating different types of color vision deficiency
              </p>
            </div>

            <div className="mb-8">
              <iframe 
                src="/tools/color-blindness-simulator-tool?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="800"
                title="Color Blindness Simulator for Images"
                loading="lazy"
              />
              
              <div className="flex justify-center mt-6 mb-4">
                <a
                  href="/tools/color-blindness-simulator-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full font-medium hover:from-red-600 hover:via-yellow-600 hover:to-blue-600 shadow-md transition-all hover:shadow-lg"
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
                  <h2 className="text-xl font-bold mb-4">Embed This Color Blindness Simulator On Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You can easily add this color blindness simulator to your own website by copying the code below:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`<iframe src="https://rgbatohex.com/tools/color-blindness-simulator?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Online Color Blindness Simulator"></iframe>`}</code>
                    </pre>
                    <button
                      onClick={() => {
                        const code = `<iframe src="https://rgbatohex.com/tools/color-blindness-simulator?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Online Color Blindness Simulator"></iframe>`;
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
              <h2 className="text-2xl font-bold mb-6">What is a Color Blindness Simulator?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  A <strong>color blindness simulator</strong> is an online tool that shows how colors and images appear to people with various types of color vision deficiency. This <strong>color blindness simulator for images</strong> allows you to upload your designs, photos, or UI elements to test how they would look to someone with color blindness, helping you create more accessible content.
                </p>
                
                <p>
                  Our <strong>color blindness simulator online</strong> tool works entirely in your browser - no need to download a <strong>color blindness simulator app</strong> or install a <strong>color blindness simulator extension</strong>. Whether you`&apos;re a designer using Figma, a developer creating accessible websites, or just curious about color perception, this <strong>online color blindness simulator</strong> provides instant results.
                </p>
                
                <h3 className="font-medium text-lg mt-4">Types of Color Blindness</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Protanopia:</strong> Red blindness - Red appears black, and some shades of orange, yellow, and green all appear as yellow.</li>
                  <li><strong>Deuteranopia:</strong> Green blindness - Green appears beige, and some shades of orange, yellow, and green appear as yellow.</li>
                  <li><strong>Tritanopia:</strong> Blue blindness - Blue appears green, and yellow appears light grey or violet.</li>
                  <li><strong>Protanomaly:</strong> Red weakness - Red appears more green, making it harder to distinguish violet, lavender, and purple.</li>
                  <li><strong>Deuteranomaly:</strong> Green weakness - The most common type, making it harder to distinguish red and green hues.</li>
                  <li><strong>Tritanomaly:</strong> Blue weakness - Makes it harder to distinguish blue and green, and yellow and red.</li>
                  <li><strong>Achromatopsia:</strong> Complete color blindness - Seeing only in shades of gray.</li>
                </ul>
                
                <h3 className="font-medium text-lg mt-4">Prevalence of Color Blindness</h3>
                <p>
                  Color blindness affects approximately 1 in 12 men (8%) and 1 in 200 women (0.5%) worldwide. 
                  Red-green color blindness is the most common form, affecting about 6% of males and 0.4% of females. 
                  Blue-yellow color blindness is rarer, affecting about 0.01% of the population.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Why Use Our Color Blindness Simulator Online?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Understanding how people with color vision deficiencies perceive your designs is crucial for creating 
                  inclusive digital experiences. Here`&apos;s why our <strong>color blindness simulator online</strong> tool stands out:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No Installation Required</strong> - Unlike a <strong>color blindness simulator Chrome extension</strong> or <strong>color blindness simulator plugin</strong>, our tool works directly in your browser without any downloads.</li>
                  <li><strong>Image Upload Feature</strong> - Our <strong>color blindness simulator for images</strong> lets you upload and test your actual designs, not just color swatches.</li>
                  <li><strong>Privacy-Focused</strong> - All image processing happens in your browser, so your designs remain private.</li>
                  <li><strong>Multiple Simulation Types</strong> - Test for all major types of color vision deficiency in one place.</li>
                  <li><strong>Works on All Devices</strong> - Whether you`&apos;re on Mac, Windows, or mobile, our simulator works everywhere without the need for a specific <strong>color blindness simulator Mac</strong> version.</li>
                  <li><strong>Design Tool Integration</strong> - While not a native <strong>color blindness simulator Figma</strong> plugin, our tool can be used alongside any design software.</li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-medium mb-2">For Designers & Developers</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Create more accessible websites and applications</li>
                      <li>Meet accessibility standards and guidelines</li>
                      <li>Improve user experience for all users</li>
                      <li>Prevent information loss due to color-only indicators</li>
                      <li>Test color schemes and palettes beforehand</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">For Businesses</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Reach a wider audience with inclusive design</li>
                      <li>Avoid potential compliance issues</li>
                      <li>Demonstrate commitment to accessibility</li>
                      <li>Reduce support requests related to color perception</li>
                      <li>Enhance brand reputation through inclusivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">How to Use This Color Blindness Simulator for Images</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our <strong>color blindness simulator online</strong> offers two main functions to help you test your designs for accessibility:
                </p>
                
                <h3 className="font-medium text-lg mt-4">Color Simulator</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Enter a color in HEX format (e.g., #FF0000 for red)</li>
                  <li>Instantly see how that color appears to people with different types of color blindness</li>
                  <li>Compare the original color with the simulated versions</li>
                  <li>Select different types of color vision deficiency to compare effects</li>
                </ol>
                
                <h3 className="font-medium text-lg mt-4">Image Simulator</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Upload an image</strong> of your design, chart, or interface using our <strong>color blindness simulator upload image</strong> feature</li>
                  <li>View the original and simulated versions side by side</li>
                  <li>Switch between different types of color blindness</li>
                  <li>Identify potential problem areas in your visual content</li>
                  <li>Make informed decisions about color choices in your designs</li>
                </ol>
                
                <p className="mt-4">
                  All processing happens in your browser - no images are sent to any server, providing the privacy advantages of a desktop <strong>color blindness simulator app</strong> with the convenience of an online tool.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Alternatives to Our Color Blindness Simulator Online</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  While our <strong>online color blindness simulator</strong> is comprehensive and easy to use, you might also consider these alternatives for specific needs:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Color Blindness Simulator Chrome Extension</strong> - For those who want to simulate color blindness across entire websites while browsing.</li>
                  <li><strong>Color Blindness Simulator Figma Plugin</strong> - If you work primarily in Figma and need tight integration with your design workflow.</li>
                  <li><strong>Color Blindness Simulator App</strong> - Dedicated applications for Mac or Windows that might offer additional features for power users.</li>
                  <li><strong>Color Blindness Simulator Glasses</strong> - Physical glasses like EnChroma that can help people with color blindness see more colors (not for simulation, but for actual assistance).</li>
                </ul>
                
                <p>
                  However, our <strong>color blindness simulator for images</strong> offers an excellent balance of accessibility, features, and ease-of-use without requiring any installations or subscriptions.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Best Practices for Color Accessible Design</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  After using our <strong>color blindness simulator online</strong>, apply these recommended strategies to make your designs more accessible:
                </p>
                
                <h3 className="font-medium text-lg mt-4">1. Don`&apos;t Rely Solely on Color</h3>
                <p>
                  Use multiple visual cues to convey information, such as:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Add patterns, textures, or icons alongside colors</li>
                  <li>Include text labels where possible</li>
                  <li>Use shape variations in addition to color differences</li>
                </ul>
                
                <h3 className="font-medium text-lg mt-4">2. Choose Color Combinations Wisely</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Avoid problematic color pairs like red/green, blue/yellow, green/brown</li>
                  <li>Use high contrast between colors, particularly for text and backgrounds</li>
                  <li>Test your color palette using this <strong>color blindness simulator</strong> before implementation</li>
                </ul>
                
                <h3 className="font-medium text-lg mt-4">3. Consider Using Color-Blind Friendly Palettes</h3>
                <p>
                  Some color schemes are specifically designed to be distinguishable by most people with color blindness:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Blue, yellow, black</li>
                  <li>Blue, orange, black</li>
                  <li>Blue, red, green (ensuring adequate brightness differences)</li>
                </ul>
                
                <h3 className="font-medium text-lg mt-4">4. Follow Accessibility Standards</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Adhere to WCAG 2.1 guidelines for color contrast</li>
                  <li>Aim for AA standard (4.5:1 ratio) at minimum, AAA (7:1 ratio) for better accessibility</li>
                  <li>Consider using accessibility checkers alongside this <strong>color blindness simulator online</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Color Blindness Simulators</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-medium text-lg mb-2">How accurate is this color blindness simulator?</h3>
                  <p>
                    This <strong>color blindness simulator online</strong> uses well-established color transformation matrices based on scientific research to provide a close approximation of how colors appear to people with different types of color vision deficiency. While it cannot provide a perfect representation of an individual`&apos;s unique experience, it offers a reliable tool for testing design accessibility.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Is this color blindness simulator free to use?</h3>
                  <p>
                    Yes, our <strong>color blindness simulator for images</strong> is completely free to use online. Unlike some alternatives that require paid subscriptions or app purchases, you can use all the features of our simulator without any cost.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">How does this compare to a color blindness simulator Chrome extension?</h3>
                  <p>
                    A <strong>color blindness simulator Chrome extension</strong> typically applies filters to entire webpages as you browse. Our tool is more focused on designing and testing specific colors and images. The advantage of our approach is that you don`&apos;t need to install anything, and it works across all browsers and devices.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Can I use this color blindness simulator with Figma?</h3>
                  <p>
                    While this isn`&apos;t a native <strong>color blindness simulator Figma</strong> plugin, you can easily export images from Figma and upload them to our simulator. This gives you the flexibility to test designs from any design tool, not just Figma.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Is there a color blindness simulator app I can download instead?</h3>
                  <p>
                    There are several <strong>color blindness simulator app</strong> options available for download, but our web-based tool offers similar functionality without requiring installation or taking up space on your device. If you prefer a dedicated app, look for options specifically developed for your operating system (like a <strong>color blindness simulator Mac</strong> app).
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Are there color blindness simulator glasses that designers can use?</h3>
                  <p>
                    <strong>Color blindness simulator glasses</strong> are different from digital simulators. While digital tools like ours show people with normal vision how things might look to those with color blindness, special glasses like EnChroma are designed to help people with color blindness see more colors. These aren`&apos;t simulation tools for designers, but rather assistive devices for those with color vision deficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}