'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';

export default function MixerPainterPage() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <>
      <Head>
        <title>Mixbox Paint Mixer | Realistic Digital Paint Mixing Simulator</title>
        <meta name="description" content="Experience natural color mixing with Mixbox Paint Mixer - a revolutionary digital painting tool that simulates real-life pigment blending using Kubelka & Munk theory. Create vibrant artworks where yellow and blue make green, just like real paints!" />
        <meta name="keywords" content="Mixbox, paint mixer, digital painting, realistic color mixing, Kubelka Munk, natural paint simulation, color theory, digital art tools, RGB blending, pigment simulation" />
        <meta property="og:title" content="Mixbox Paint Mixer - Natural Color Mixing for Digital Artists" />
        <meta property="og:description" content="Experience realistic digital painting with scientifically accurate color mixing. Yellow + blue = green, just like real life!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rgbatohex.com/tools/mixer-painter" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mixbox Paint Mixer | Realistic Digital Paint Mixing Simulator" />
        <meta name="twitter:description" content="Experience natural color mixing with Mixbox Paint Mixer - a revolutionary digital painting tool that simulates real-life pigment blending using Kubelka & Munk theory. Create vibrant artworks where yellow and blue make green, just like real paints!" />
        <link rel="canonical" href="https://rgbatohex.com/tools/mixer-painter" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Navigation />

          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                  MP
                </div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Mixbox Paint Mixer
                </h1>
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">Professional Paints</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Experience the revolutionary natural color mixing technology for digital artists
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-end mb-2">
                <a 
                  href="/tools/mixer-painter-tool" 
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition-colors duration-200"
                >
                  <span>Open Full Tool</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <iframe 
                src="/tools/mixer-painter-tool?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="800"
                title="Mixbox Paint Mixer Tool"
                loading="lazy"
              />
              
              <div className="mt-6 text-right">
                <button
                  onClick={() => setShowEmbedCode(!showEmbedCode)}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
                >
                  {showEmbedCode ? 'Hide Embed Code' : 'Show Embed Code'}
                </button>
              </div>
              
              {showEmbedCode && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-4">
                  <h2 className="text-xl font-bold mb-4">Embed This Paint Mixer Tool On Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You can easily add this <strong>paint mixer tool</strong> to your own website by copying the code below:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`<iframe src="${typeof window !== 'undefined' ? window.location.origin : ''}/tools/mixer-painter-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Mixbox Paint Mixer"></iframe>`}</code>
                    </pre>
                    <button
                      onClick={() => {
                        const code = `<iframe src="${typeof window !== 'undefined' ? window.location.origin : ''}/tools/mixer-painter-tool?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Mixbox Paint Mixer"></iframe>`;
                        navigator.clipboard.writeText(code);
                      }}
                      className="absolute top-3 right-3 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">What is Mixbox Paint Mixer?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Mixbox Paint Mixer is a revolutionary digital painting tool that simulates how real-life pigments blend together. Unlike traditional RGB color mixing in digital art, Mixbox uses advanced color science to create natural, vibrant color interactions.
                </p>
                <p>
                  Yellow and blue create green, just like real paints. This tool maintains vibrancy when mixed, avoiding the muddy grays of RGB mixing.
                </p>
                <p>
                  You can use this tool to experiment with different paint combinations, create beautiful digital artwork, and experience the joy of painting without getting your hands dirty. It&apos;s also an educational tool suitable for teachers to demonstrate color theory and art techniques to students.
                </p>
                <div className="mt-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                  <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Key Features:</h5>
                  <ul className="mt-2 text-sm text-indigo-600 dark:text-indigo-400">
                    <li>Realistic Color Mixing</li>
                    <li>Natural Saturation Behavior</li>
                    <li>Intuitive Hue Shifts</li>
                    <li>Professional Color Palette</li>
                    <li>Two Mixing Modes</li>
                    <li>Touch-Friendly Interface</li>
                    <li>Multiple Professional Brush Types</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">How to Use the Paint Mixer</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Select a Brush Size</strong> - Use the slider on the right panel to choose the size of your brush.
                  </li>
                  <li>
                    <strong>Choose a Brush Type</strong> - We offer several professional brushes including pen, watercolor, chalk, and oil paint brushes, each with unique textures and effects.
                  </li>
                  <li>
                    <strong>Choose a Paint Color</strong> - Select a color from the professional palette or use the custom color wheel.
                  </li>
                  <li>
                    <strong>Toggle Mixing Modes</strong> - Switch between &quot;Real Pigment Mode&quot; (Mixbox) and &quot;Standard RGB Mode&quot;.
                  </li>
                  <li>
                    <strong>Paint on the Canvas</strong> - Click and drag your mouse or touch the screen to start painting. The paint will automatically blend with existing colors on the canvas.
                  </li>
                  <li>
                    <strong>Use the Eraser</strong> - If you need to make changes, click the eraser icon in the toolbar, then erase unwanted parts.
                  </li>
                  <li>
                    <strong>Adjust Brush Size</strong> - Use the [ and ] keys to adjust the size of your brush.
                  </li>
                  <li>
                    <strong>Undo/Redo</strong> - Use Ctrl+Z and Ctrl+Y to undo or redo your changes.
                  </li>
                  <li>
                    <strong>Save Your Artwork</strong> - When finished, you can download your creation as an image file.
                  </li>
                </ol>
                <p className="mt-4">
                  Unlike expensive professional software, our digital tool doesn&apos;t require any fees. You can use all features without limitations to create as much as you like.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">The Science Behind Mixbox Technology</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Understanding Color Mixing Science</h3>
                  <p>
                    Mixbox is powered by the Kubelka & Munk theory, a scientific model that predicts how light interacts with pigments. This advanced approach allows Mixbox to:
                  </p>
                  <ul className="mt-2 text-sm text-indigo-600 dark:text-indigo-400">
                    <li>Simulate subtractive color mixing (how physical pigments interact with light)</li>
                    <li>Account for the specific light absorption and scattering properties of different pigments</li>
                    <li>Produce the natural color transitions artists expect from traditional media</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">Mixbox Blending (Subtractive)</h4>
                      <p>Models how physical pigments absorb and reflect light wavelengths. Yellow pigments absorb blue light and reflect yellow, while blue pigments absorb yellow light and reflect blue. When mixed, they selectively absorb different parts of the spectrum, resulting in green.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Standard RGB Blending (Additive)</h4>
                      <p>Simply averages RGB values mathematically. When yellow (R:255, G:255, B:0) and blue (R:0, G:0, B:255) are mixed equally, you get a desaturated gray (R:127, G:127, B:127), which doesn&apos;t match artists&apos; expectations from traditional media.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Professional Paint Simulation</h3>
                  <p>
                    Our tool uses professional paint names and colors, such as Titanium White, Cadmium Red, Ultramarine Blue, etc., which are real paints used by artists in traditional painting. This not only provides a more authentic experience but also helps with learning real-world paint properties.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Mixing Algorithms</h3>
                  <p>
                    Our palette software uses advanced paint mixing algorithms (Mixbox) to simulate how real paints interact. This approach creates more natural and visually pleasing results than simple RGB averaging, especially for complementary colors (like blue and yellow creating green instead of gray).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Digital Painting Tips & Techniques</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Whether you&apos;re a professional artist or just starting with digital painting, these tips will help you get the most out of our paint mixer tool:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Start with base colors and gradually add details</li>
                  <li>Use opacity settings to create watercolor-like effects</li>
                  <li>Try different brush sizes to create texture and detail</li>
                  <li>Use complementary colors (opposite on the color wheel) to create contrast and vibrancy</li>
                  <li>Paint in multiple layers, starting with large shapes and then adding details</li>
                  <li>Experiment with different mixing modes to see which works best for your style</li>
                  <li>Try different brush types: pen for precise lines, watercolor for soft effects, chalk for texture, and oil paint for thick paint effects</li>
                  <li>The oil paint brush is particularly good for creating works with heavy texture - try using it to simulate traditional oil painting effects</li>
                  <li>Remember to save your work for later continuation or sharing</li>
                </ul>
                <p>
                  These techniques will help you create beautiful digital artwork, just like using professional palette software, but completely free and easy to use.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Is this paint mixer tool free to use?</h3>
                  <p>
                    Yes, our online drawing tool is completely free to use. Unlike expensive professional software, our digital tool doesn&apos;t require any fees. You can use all features without limitations to create as much as you like.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">How realistic is the paint mixing?</h3>
                  <p>
                    Our paint mixer uses advanced paint mixing algorithms to simulate how physical paints interact. This creates more realistic results than standard digital color mixing, making it suitable for professional design work where natural color blending is important.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Why does red + green make brown instead of yellow?</h3>
                  <p>
                    Our palette uses pigment-based subtractive mixing, which mimics how real paints and inks blend. In this model, red + green creates brown, not yellow. This differs from additive RGB mixing (used in most digital tools), where red + green light creates yellow. We chose the pigment model because it creates more natural-looking color combinations.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I save my paintings?</h3>
                  <p>
                    Yes, you can download any painting you create. The tool provides a save function that allows you to save your work as an image file for later viewing, editing, or sharing.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I use this tool on mobile devices?</h3>
                  <p>
                    Yes, our paint mixer tool is responsively designed to work on mobile devices like smartphones and tablets. Touchscreen support allows you to paint directly with your fingers, just like using a real brush.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">Can I use this tool to teach children about color theory?</h3>
                  <p>
                    Absolutely! Our tool is perfect for educational purposes, demonstrating to children how colors mix and interact. It provides a fun, interactive way to learn color theory without getting clothes dirty or requiring cleanup.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">What browsers does this tool support?</h3>
                  <p>
                    Our online drawing tool supports all modern browsers, including Chrome, Firefox, Safari, and Edge. No plugins or software installation is needed — just open your browser and start creating.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">What types of brushes does this tool offer?</h3>
                  <p>
                    Our tool provides multiple professional brush options, including:
                  </p>
                  <ul className="mt-2 list-disc pl-6">
                    <li><strong>Pen Brush</strong> - Provides clean, precise lines perfect for detailed work</li>
                    <li><strong>Watercolor Brush</strong> - Creates soft, semi-transparent effects that simulate real watercolor diffusion</li>
                    <li><strong>Chalk Brush</strong> - Offers rough texture effects ideal for creating textured looks</li>
                    <li><strong>Oil Paint Brush</strong> - Simulates thick oil paint effects with directional strokes and rich texture</li>
                  </ul>
                  <p className="mt-2">
                    Each brush has its unique characteristics and uses, allowing you to choose the right tool based on your artistic style and needs.
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
