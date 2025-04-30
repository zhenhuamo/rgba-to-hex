'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation'; // Assuming Navigation component exists

// Helper function for copying text
const copyToClipboard = async (text: string, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
    alert('Failed to copy code!');
  }
};

// Code examples
const jsRgbToHexCode = `
/**
 * Converts RGB color values to a 6-digit HEX color code.
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} - 6-digit HEX color code (e.g., "#ff6432")
 */
function rgbToHex(r, g, b) {
  // Clamps a value between 0 and 255, rounds it
  const clamp = (val) => Math.max(0, Math.min(255, Math.round(val)));

  // Converts a single color component (0-255) to its 2-digit hex representation
  const toHex = (c) => {
    const hex = clamp(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex; // Ensure 2 digits (pad with leading zero if needed)
  };

  // Concatenate the hex values with a leading #
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

// Example usage:
console.log(rgbToHex(255, 100, 50)); // Output: "#ff6432"
`;

const pythonRgbToHexCode = `
def rgb_to_hex(r, g, b):
  """Converts RGB color values to a 6-digit HEX color code."""
  # Clamp values to the 0-255 range and round
  r_clamp = max(0, min(255, round(r)))
  g_clamp = max(0, min(255, round(g)))
  b_clamp = max(0, min(255, round(b)))
  
  # Format each component as a 2-digit hex string (with leading zero if needed)
  # and concatenate with a leading #
  return f"#{r_clamp:02x}{g_clamp:02x}{b_clamp:02x}"

# Example usage:
print(rgb_to_hex(255, 100, 50)) # Output: "#ff6432"
`;

export default function RgbToHexPage() {
  const [copiedEmbedCode, setCopiedEmbedCode] = useState(false);
  const [copiedCustomEmbedCode, setCopiedCustomEmbedCode] = useState(false);
  const [copiedJsCode, setCopiedJsCode] = useState(false);
  const [copiedPythonCode, setCopiedPythonCode] = useState(false);

  const embedCode = `<iframe
  src="/tools/rgb-to-hex-converter?embed=true"
  width="100%"
  height="500" 
  style="border:none;border-radius:12px;overflow:hidden;"
  title="RGB to HEX Color Converter"
></iframe>`;

  const embedCodeCustom = `<iframe
  src="/tools/rgb-to-hex-converter?embed=true&r=255&g=100&b=50"
  width="100%"
  height="500"
  style="border:none;border-radius:12px;overflow:hidden;"
  title="RGB to HEX Color Converter"
></iframe>`;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <main className="max-w-3xl mx-auto mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 prose dark:prose-invert max-w-none">
          {/* Title Section */}
          <div className="text-center mb-10 not-prose">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Image 
                  src="/rgb.svg" 
                  alt="RGB to HEX Converter Logo" 
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
                RGB to HEX Converter: Fast & Accurate Online Tool for Web Colors
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Instantly convert RGB color values to standard 6-digit hexadecimal (HEX) codes (#RRGGBB) with this free online color converter. Perfect for web developers, designers, and anyone working with HTML/CSS colors.
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Enter Red, Green, and Blue values (0-255) to get the precise hex color code. Understand the conversion process and learn when to use RGB vs HEX.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">RGB to HEX</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">Hex Color Code</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full">CSS Colors</span>
               <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded-full">Color Converter</span>
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">HTML Color Codes</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">Web Development</span>
            </div>
          </div>

          {/* Iframe Embed Section */}
          <div className="mb-8 not-prose">
            <iframe
              src="/tools/rgb-to-hex-converter?embed=true"
              className="w-full h-[550px] md:h-[500px] border-none rounded-2xl shadow-lg bg-white dark:bg-gray-700"
              title="RGB to HEX Color Converter Tool"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>

          {/* Link Button Section */}
          <div className="text-center mb-12 not-prose">
            <Link href="/tools/rgb-to-hex-converter" legacyBehavior>
              <a className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform no-underline">
                Open Full RGB to HEX Converter Tool
              </a>
            </Link>
          </div>

          {/* Detailed Content Section */}
          <div className="space-y-10">
            {/* Section 1: Understanding RGB & HEX */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-3 !mt-0">Understanding RGB and HEX Color Models</h2>
              <h3>The RGB Color Model</h3>
              <p>
                RGB stands for Red, Green, and Blue. It&apos;s an <strong>additive color model</strong> used primarily for digital screens like monitors, TVs, and smartphone displays. In this model, colors are created by mixing different intensities of red, green, and blue light. Each color channel (R, G, B) is typically represented by an integer value ranging from <strong>0 to 255</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4 my-4">
                <li><strong>0</strong> indicates the minimum intensity (no light) for that channel.</li>
                <li><strong>255</strong> indicates the maximum intensity for that channel.</li>
              </ul>
              <p>
                Mixing these channels allows for a vast range of colors. Since each channel has 256 possible values (0-255), the total number of representable colors is 256 x 256 x 256 = <strong>16,777,216 (often called &quot;true color&quot; or 24-bit color)</strong>. For example, <code>rgb(255, 0, 0)</code> is pure red, <code>rgb(0, 0, 0)</code> is black, and <code>rgb(255, 255, 255)</code> is white.
              </p>
              
              <h3>The HEX Color Model</h3>
              <p>
                HEX (Hexadecimal) color codes are the most common way to represent colors in web development, specifically within <strong>HTML and CSS</strong>. A standard 6-digit HEX code starts with a hash symbol (<code>#</code>) followed by six characters. These six characters represent the Red, Green, and Blue components, with two characters dedicated to each channel: <code>#RRGGBB</code>.
              </p>
               <p>
                Hexadecimal is a base-16 numbering system. It uses digits 0-9 and letters A-F to represent values. Each two-digit pair (RR, GG, BB) ranges from <code>00</code> (decimal 0) to <code>FF</code> (decimal 255). This directly maps to the 0-255 range of the RGB model.
              </p>
               <ul className="list-disc list-inside space-y-1 pl-4 my-4">
                 <li><code>#000000</code> represents black (R=0, G=0, B=0).</li>
                 <li><code>#FFFFFF</code> represents white (R=255, G=255, B=255).</li>
                 <li><code>#FF0000</code> represents pure red (R=255, G=0, B=0).</li>
               </ul>
               <p>You might also encounter 3-digit HEX codes (e.g., <code>#F00</code>). This is a shorthand notation where each digit is duplicated, so <code>#F00</code> is equivalent to <code>#FF0000</code>. Our converter focuses on generating the standard 6-digit format for clarity.</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Why Convert RGB to HEX?</h3>
              <p>
                While RGB defines the color, HEX is often preferred for implementation in web projects because:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4 my-4">
                <li><strong>Conciseness:</strong> <code>#FF6432</code> is shorter and often easier to read than <code>rgb(255, 100, 50)</code>.</li>
                <li><strong>Standardization:</strong> It&apos;s the most widely recognized and supported format for specifying colors in HTML and CSS.</li>
                <li><strong>Ease of Use:</strong> HEX codes are simple to copy, paste, and share among designers and developers. Most design tools prominently feature HEX codes.</li>
              </ul>
            </section>

            {/* Section 2: How Conversion Works */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-green-500 pl-3">How RGB to HEX Conversion Works</h2>
              <p>
                Converting an RGB color value to its 6-digit HEX equivalent is a straightforward mathematical process based on converting decimal numbers to hexadecimal (base-16). Here&apos;s the breakdown:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4 my-4">
                <li><strong>Take the decimal value (0-255)</strong> for the Red (R) component.</li>
                <li><strong>Convert this decimal value to its two-digit hexadecimal equivalent.</strong> Remember, hexadecimal uses 0-9 and A-F (where A=10, B=11, ..., F=15). If the result is a single digit, pad it with a leading zero (e.g., decimal 10 is hex A, padded to <code>0A</code>; decimal 16 is hex 10).</li>
                <li><strong>Repeat steps 1 and 2</strong> for the Green (G) component.</li>
                <li><strong>Repeat steps 1 and 2</strong> for the Blue (B) component.</li>
                <li><strong>Concatenate the three resulting two-digit hex values</strong> in the order R, G, B.</li>
                <li><strong>Prepend a hash symbol (<code>#</code>)</strong> to the concatenated string.</li>
              </ol>
              
              <h4>Example: Converting RGB(255, 100, 50) to HEX</h4>
              <ul className="list-disc list-inside space-y-1 pl-4 my-4">
                 <li>Red = 255 (decimal) → <code>FF</code> (hexadecimal)</li>
                 <li>Green = 100 (decimal) → <code>64</code> (hexadecimal)</li>
                 <li>Blue = 50 (decimal) → <code>32</code> (hexadecimal)</li>
               </ul>
               <p>
                 Combine them: <code>FF</code> + <code>64</code> + <code>32</code> = <code>FF6432</code>.
               </p>
               <p>
                 Add the hash: <strong><code>#FF6432</code></strong>. This is the final hex color code.
               </p>
              <p className="mt-4">
                 This conversion is mathematically precise and lossless for opaque colors within the sRGB color space commonly used on the web.
              </p>
            </section>

             {/* Section 3: RGB vs. HEX - When to Use Which? */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-indigo-500 pl-3">RGB vs. HEX: Choosing the Right Format</h2>
              <p>Both RGB and HEX represent the same colors in the digital realm, but they have different primary use cases:</p>
              <h3 className="text-lg font-medium mt-4 mb-2">Use HEX when:</h3>
              <ul className="list-disc list-inside space-y-1 pl-4 my-4">
                <li>Writing CSS or HTML styles (e.g., <code>color: #3498db;</code>).</li>
                <li>Sharing specific color values concisely.</li>
                <li>Working with design tools where HEX is the default or primary display format.</li>
                <li>You need a simple, universally understood representation of an opaque web color.</li>
              </ul>
               <h3 className="text-lg font-medium mt-4 mb-2">Use RGB (or RGBA) when:</h3>
               <ul className="list-disc list-inside space-y-1 pl-4 my-4">
                 <li>You need to specify transparency (using the Alpha channel in RGBA, e.g., <code>rgba(52, 152, 219, 0.5)</code>).</li>
                 <li>Working programmatically where you might need to access or manipulate individual Red, Green, or Blue channel values (e.g., in JavaScript calculations, image processing).</li>
                 <li>Using specific frameworks or libraries that primarily operate on R, G, B values.</li>
               </ul>
              <p>Our tool focuses on the common need to get the standard 6-digit HEX code from RGB values.</p>
            </section>

            {/* Section 4: Tips for Developers and Designers */}
             <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-teal-500 pl-3">Tips for Developers and Designers</h2>
               <ul className="list-disc list-inside space-y-2 pl-4 my-4">
                 <li><strong>Leverage Browser DevTools:</strong> Most modern web browsers have built-in developer tools with excellent color pickers that allow you to inspect page colors and see their HEX, RGB, and other formats.</li>
                 <li><strong>Maintain Consistency:</strong> For larger projects or brand guidelines, define your color palette using HEX codes and reuse them consistently throughout your CSS or design system.</li>
                 <li><strong>Check Color Contrast:</strong> When choosing colors for text and backgrounds, always check the contrast ratio to ensure readability and meet accessibility standards (WCAG). Poor contrast can make content difficult or impossible to read for users with visual impairments. (You might need a separate <Link href="/tools/color-contrast">Color Contrast Checker</Link> tool for this).</li>
                 <li><strong>Quick Verification:</strong> Use this online RGB to HEX converter to quickly verify color codes you encounter or to convert values from design software that might primarily display RGB.</li>
               </ul>
            </section>

            {/* Section 5: Code Examples */}
            <section className="not-prose">
              {/* Apply not-prose here if needed, or style code blocks directly */}
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-red-500 pl-3">RGB to HEX Code Examples (JavaScript & Python)</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 prose dark:prose-invert">Need to perform conversions programmatically? Here are simple functions in JavaScript and Python:</p>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">JavaScript Example</h3>
                <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  <pre><code className="language-javascript">{jsRgbToHexCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(jsRgbToHexCode, setCopiedJsCode)}
                    className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${copiedJsCode ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
                  >
                    {copiedJsCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Python Example</h3>
                 <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  <pre><code className="language-python">{pythonRgbToHexCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(pythonRgbToHexCode, setCopiedPythonCode)}
                    className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${copiedPythonCode ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
                  >
                    {copiedPythonCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 6: Embed This Tool */}
            <section className="not-prose">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-purple-500 pl-3">Embed This RGB to HEX Tool</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 prose dark:prose-invert">
                Add this converter directly to your website or blog post using the following iframe code. It&apos;s fully responsive and requires no dependencies.
              </p>
              <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto mb-6">
                <pre><code>{embedCode}</code></pre>
                <button
                  onClick={() => copyToClipboard(embedCode, setCopiedEmbedCode)}
                  className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${copiedEmbedCode ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
                >
                  {copiedEmbedCode ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800 dark:text-gray-200">Custom Embed Options</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 prose dark:prose-invert">
                 You can pre-fill the converter with a specific color by adding `r`, `g`, and `b` URL parameters (values 0-255). Example below sets the initial color to RGB(255, 100, 50):
              </p>
               <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                 <pre><code>{embedCodeCustom}</code></pre>
                 <button
                    onClick={() => copyToClipboard(embedCodeCustom, setCopiedCustomEmbedCode)}
                    className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${copiedCustomEmbedCode ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
                  >
                    {copiedCustomEmbedCode ? 'Copied!' : 'Copy'}
                  </button>
               </div>
            </section>

            {/* Section 7: FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-yellow-500 pl-3">Frequently Asked Questions (RGB to HEX)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-1">What is a 6-digit HEX color code?</h3>
                  <p>It&apos;s the standard format for defining opaque colors in HTML and CSS. It starts with a &apos;#&apos; followed by six hexadecimal characters (#RRGGBB). Each pair (RR, GG, BB) represents the intensity of Red, Green, and Blue, respectively, ranging from 00 (0) to FF (255).</p>
                </div>
                 <div>
                  <h3 className="font-medium text-lg mb-1">What about 3-digit HEX codes like #F63?</h3>
                  <p>A 3-digit HEX code is a shorthand notation where each digit is duplicated to form a 6-digit code. For example, <code>#F63</code> is equivalent to <code>#FF6633</code>. This tool generates the standard 6-digit format for maximum compatibility and clarity.</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Why use HEX codes instead of RGB in CSS?</h3>
                  <p>While both work, HEX codes (<code>#FF6633</code>) are more compact than the functional notation <code>rgb(255, 102, 51)</code>. They are widely adopted, easily shareable, and preferred by many developers and design tools for defining solid colors.</p>
                </div>
                 <div>
                  <h3 className="font-medium text-lg mb-1">How do I convert RGB colors with transparency (alpha)?</h3>
                  <p>To include transparency, you need the RGBA color model. The corresponding hexadecimal format is an 8-digit code (#RRGGBBAA), where the last two digits (AA) represent the alpha value (00 for fully transparent, FF for fully opaque). Use our dedicated <Link href="/tools/rgba-to-hex-8-digit">RGBA to 8-Digit HEX Converter</Link> for that purpose.</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Is the RGB to HEX conversion always accurate?</h3>
                  <p>Yes, the conversion between RGB (0-255 per channel) and 6-digit HEX (#RRGGBB) is a direct mathematical mapping for opaque colors within the sRGB color space. It&apos;s a lossless and precise conversion.</p>
                </div>
                 <div>
                  <h3 className="font-medium text-lg mb-1">What are the RGB/HEX values for common colors?</h3>
                  <table className="w-full text-left border-collapse my-4">
                    <thead>
                      <tr>
                        <th className="border dark:border-gray-600 px-4 py-2">Color</th>
                        <th className="border dark:border-gray-600 px-4 py-2">RGB</th>
                        <th className="border dark:border-gray-600 px-4 py-2">HEX</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border dark:border-gray-600 px-4 py-2">Black</td><td className="border dark:border-gray-600 px-4 py-2"><code>rgb(0, 0, 0)</code></td><td className="border dark:border-gray-600 px-4 py-2"><code>#000000</code></td></tr>
                      <tr><td className="border dark:border-gray-600 px-4 py-2">White</td><td className="border dark:border-gray-600 px-4 py-2"><code>rgb(255, 255, 255)</code></td><td className="border dark:border-gray-600 px-4 py-2"><code>#FFFFFF</code></td></tr>
                      <tr><td className="border dark:border-gray-600 px-4 py-2">Red</td><td className="border dark:border-gray-600 px-4 py-2"><code>rgb(255, 0, 0)</code></td><td className="border dark:border-gray-600 px-4 py-2"><code>#FF0000</code></td></tr>
                      <tr><td className="border dark:border-gray-600 px-4 py-2">Green (Lime)</td><td className="border dark:border-gray-600 px-4 py-2"><code>rgb(0, 255, 0)</code></td><td className="border dark:border-gray-600 px-4 py-2"><code>#00FF00</code></td></tr>
                      <tr><td className="border dark:border-gray-600 px-4 py-2">Blue</td><td className="border dark:border-gray-600 px-4 py-2"><code>rgb(0, 0, 255)</code></td><td className="border dark:border-gray-600 px-4 py-2"><code>#0000FF</code></td></tr>
                      <tr><td className="border dark:border-gray-600 px-4 py-2">Yellow</td><td className="border dark:border-gray-600 px-4 py-2"><code>rgb(255, 255, 0)</code></td><td className="border dark:border-gray-600 px-4 py-2"><code>#FFFF00</code></td></tr>
                       <tr><td className="border dark:border-gray-600 px-4 py-2">Cyan</td><td className="border dark:border-gray-600 px-4 py-2"><code>rgb(0, 255, 255)</code></td><td className="border dark:border-gray-600 px-4 py-2"><code>#00FFFF</code></td></tr>
                       <tr><td className="border dark:border-gray-600 px-4 py-2">Magenta</td><td className="border dark:border-gray-600 px-4 py-2"><code>rgb(255, 0, 255)</code></td><td className="border dark:border-gray-600 px-4 py-2"><code>#FF00FF</code></td></tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Can I convert HEX back to RGB?</h3>
                  <p>Yes, converting a 6-digit HEX code back to RGB involves taking each pair of hexadecimal digits (RR, GG, BB), converting them back to their decimal (0-255) equivalents to get the R, G, and B values. You might find a dedicated HEX to RGB converter tool useful for that specific task.</p>
                </div>
              </div>
            </section>

            {/* Section 8: Conclusion */}
            <section className="text-center mt-12 border-t dark:border-gray-700 pt-8 not-prose">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Start Converting Your Colors Now!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Use the interactive RGB to HEX tool above or embed it on your site for seamless color code conversions. An essential utility for web developers and graphic designers!
              </p>
              <Link href="/tools/rgb-to-hex-converter" legacyBehavior>
                <a className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform no-underline">
                  Try the Full Tool Now
                </a>
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
} 