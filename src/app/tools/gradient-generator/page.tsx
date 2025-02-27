'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

export default function GradientGeneratorPage() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <>
      <Head>
        <title>Gradient Color Generator | Create Beautiful CSS Gradients</title>
        <meta name="description" content="Free online gradient generator tool. Create beautiful CSS gradients for your websites, apps, and UI designs. Supports HEX, RGB, RGBA, and Tailwind CSS formats." />
        <meta name="keywords" content="gradient generator, css gradient, color gradient, gradient tool, linear gradient, radial gradient, tailwind gradient" />
        <meta property="og:title" content="Gradient Color Generator | Create Beautiful CSS Gradients" />
        <meta property="og:description" content="Free online gradient generator tool. Create beautiful CSS gradients for your websites, apps, and UI designs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/gradient-generator" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gradient Color Generator | Create Beautiful CSS Gradients" />
        <meta name="twitter:description" content="Free online tool to create beautiful CSS gradients for your projects" />
        <link rel="canonical" href="https://yourwebsite.com/gradient-generator" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Navigation />

          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
              <svg 
                    className="w-10 h-10 text-purple-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                                            >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                    />
                </svg>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  Gradient Color Generator
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Create beautiful gradient backgrounds for your websites and applications
              </p>
            </div>

            <div className="mb-8">
              <iframe 
                src="/tools/gradient-generator-tool?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="800"
                title="Gradient Color Generator"
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
                    You can easily add this gradient generator to your own website by copying the code below:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`<iframe src="https://yourwebsite.com/tools/gradient-generator-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Gradient Color Generator"></iframe>`}</code>
                    </pre>
                    <button
                      onClick={() => {
                        const code = `<iframe src="https://yourwebsite.com/tools/gradient-generator-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Gradient Color Generator"></iframe>`;
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
              <h2 className="text-2xl font-bold mb-6">How to Use the Gradient Generator</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our gradient generator tool makes it easy to create stunning gradients for your web projects. Here&apos;s how to use it effectively:
                </p>
                
                <h3 className="font-medium text-lg mt-4">Basic Usage</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Choose between linear or radial gradient types</li>
                  <li>Adjust the angle (for linear gradients)</li>
                  <li>Add, remove, or adjust color stops</li>
                  <li>Select your preferred output format (HEX, RGB, RGBA, or Tailwind CSS)</li>
                  <li>Copy the generated code with a single click</li>
                </ol>
                
                <h3 className="font-medium text-lg mt-4">Advanced Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Save your favorite gradients for future use</li>
                  <li>Choose from premade gradient presets</li>
                  <li>Generate Tailwind CSS compatible gradient code</li>
                  <li>Adjust color positions with precision controls</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">CSS Gradient Generator</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our free online CSS Gradient Generator helps web designers and developers create beautiful gradients for their projects. With support for multiple formats including HEX, RGB, RGBA, and Tailwind CSS, you can easily generate the exact gradient code you need.
                </p>
                <p>
                  This tool offers both linear and radial gradients with full customization options. Add multiple color stops, adjust their positions, and get instant visual feedback. The intuitive interface makes it simple to experiment with different color combinations until you find the perfect gradient.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Free Online Gradient Color Generator Tool</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our professional Gradient Color Generator is a free, comprehensive tool designed to help web designers, developers, and digital artists create stunning gradient effects. This tool combines all the features you need in one powerful platform.
                </p>
                
                <h3 className="font-medium text-lg mt-4">Key Features of Our Gradient Generator</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Linear and radial gradient support</li>
                  <li>Multiple color format options (HEX, RGB, RGBA)</li>
                  <li>Tailwind CSS output for modern web development</li>
                  <li>Gradient presets for quick inspiration</li>
                  <li>Save and load your favorite gradients</li>
                  <li>Precise control over color stop positions</li>
                  <li>Real-time preview of your gradient</li>
                  <li>One-click code copying</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Creating Beautiful Web Gradients</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Gradients are a powerful design element that can add depth, dimension, and visual interest to any website or application. They can be used for backgrounds, buttons, headers, cards, and many other UI elements. Our tool makes it easy to create professional-looking gradients without any design skills.
                </p>
                <p>
                  The key to a great gradient is selecting harmonious colors and positioning them effectively. With our tool, you can experiment with different color combinations, adjust positions, and instantly see the results. When you find a gradient you love, simply copy the code and paste it into your project.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Who Should Use This Tool</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Web Professionals</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Web Designers</li>
                    <li>UI/UX Designers</li>
                    <li>Front-end Developers</li>
                    <li>CSS Developers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Content Creators</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Graphic Designers</li>
                    <li>Digital Artists</li>
                    <li>Social Media Designers</li>
                    <li>Bloggers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Understanding CSS Gradients</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <h3 className="font-medium text-lg">Linear Gradients</h3>
                <p>
                  Linear gradients transition colors along a straight line. You can control the direction of this line using an angle (0-360 degrees). Common angles include 0° (bottom to top), 90° (left to right), 180° (top to bottom), and 270° (right to left).
                </p>
                
                <h3 className="font-medium text-lg mt-4">Radial Gradients</h3>
                <p>
                  Radial gradients transition colors outward from a central point in a circular pattern. They create a more spotlight-like effect and can add depth to UI elements.
                </p>
                
                <h3 className="font-medium text-lg mt-4">Color Stops</h3>
                <p>
                  Both linear and radial gradients use color stops to define the transition points. Each color stop consists of a color and a position (as a percentage). Multiple color stops create more complex and interesting gradients.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Gradients in Modern Web Design</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Gradients have experienced a resurgence in modern web design. Here are some popular uses:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vibrant backgrounds that create visual hierarchy</li>
                  <li>Subtle button hover effects to improve interactivity</li>
                  <li>Header and hero section backgrounds to draw attention</li>
                  <li>Text effects using background-clip for eye-catching headlines</li>
                  <li>Card backgrounds to separate content sections</li>
                </ul>
                <p>
                  Our gradient generator tool helps you create these effects quickly and easily, with code ready to use in your projects.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Using Gradients with Tailwind CSS</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Tailwind CSS has become extremely popular for modern web development. Our tool provides Tailwind-specific gradient code that works seamlessly with Tailwind projects.
                </p>
                <p>
                  Simply select &quot;Tailwind CSS&quot; as your output format, and you&apos;ll get classes like <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500</code> that you can directly apply to your HTML elements.
                </p>
                <p>
                  For radial gradients, which aren&apos;t directly supported in Tailwind&apos;s default classes, our tool provides custom CSS that you can add to your project.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Best Practices for Using Gradients</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h4 className="font-medium mb-2">Design Tips</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Use complementary or analogous colors for harmonious gradients</li>
                    <li>Consider subtle gradients for backgrounds and bold gradients for calls-to-action</li>
                    <li>Ensure sufficient contrast with text elements</li>
                    <li>Use consistent gradient styles throughout your design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Technical Considerations</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Include browser prefixes for maximum compatibility</li>
                    <li>Consider performance with complex gradients on large areas</li>
                    <li>Provide solid color fallbacks for older browsers</li>
                    <li>Test gradients on various devices and screen sizes</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-medium text-lg mb-2">What is a CSS gradient?</h3>
                  <p>
                    A CSS gradient is a special type of CSS image that shows a smooth transition between two or more colors. CSS gradients can be linear (following a straight line) or radial (expanding from a central point).
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">How do I add a gradient to my website?</h3>
                  <p>
                    To add a gradient to your website, use our gradient generator to create your desired effect, then copy the generated CSS code. Paste this code into your CSS file or inline style attribute. For Tailwind CSS users, copy the Tailwind classes and add them directly to your HTML elements.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Can I save my gradients for later use?</h3>
                  <p>
                    Yes, our gradient generator tool allows you to save your custom gradients. Simply name your gradient and click &quot;Save&quot; to store it in your browser&apos;s local storage. You can access and load these saved gradients anytime you return to the tool.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Is this gradient generator tool free?</h3>
                  <p>
                    Yes, our gradient generator tool is completely free to use. There are no hidden costs, subscriptions, or limitations. All features, including Tailwind CSS output, preset gradients, and the ability to save your custom gradients, are available at no cost.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">How can I create a text gradient?</h3>
                  <p>
                    To create text with a gradient effect, you&apos;ll need additional CSS beyond what our tool generates. After creating your gradient, apply it as a background to your text element, then add <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">background-clip: text;</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">text-fill-color: transparent;</code> (with appropriate vendor prefixes). For Tailwind users, add the classes <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">bg-clip-text text-transparent</code> along with your gradient classes.
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