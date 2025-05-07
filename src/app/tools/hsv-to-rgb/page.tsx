"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation'; // Assuming Navigation component exists

// Helper function for copying text (copied from other similar pages)
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

// Code examples (Existing ones)
const jsHsvToRgbCode = `
function hsvToRgb(h, s, v) {
  // Ensure inputs are in range [0, 360], [0, 100], [0, 100]
  h = Math.max(0, Math.min(360, h));
  s = Math.max(0, Math.min(100, s)) / 100;
  v = Math.max(0, Math.min(100, v)) / 100;
  if (h === 360) h = 0;

  const c = v * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
  else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
  else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
  else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
  else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
  else if (h >= 300 && h < 360) { r = c; g = 0; b = x; }

  return { 
    r: Math.round((r + m) * 255), 
    g: Math.round((g + m) * 255), 
    b: Math.round((b + m) * 255) 
  };
}

// Example Usage:
// const rgbResult = hsvToRgb(120, 75, 50);
// console.log(rgbResult); // Output: { r: 32, g: 128, b: 32 }
// console.log(\`rgb(\${rgbResult.r}, \${rgbResult.g}, \${rgbResult.b})\`); // Output: rgb(32, 128, 32)
`;

const pythonHsvToRgbCode = `
import math

def hsv_to_rgb(h, s, v):
    # Ensure inputs are in range [0, 360], [0, 100], [0, 100]
    h = max(0, min(360, h))
    s = max(0, min(100, s)) / 100.0
    v = max(0, min(100, v)) / 100.0
    if h == 360: h = 0

    c = v * s
    x = c * (1 - abs((h / 60.0) % 2 - 1))
    m = v - c
    r, g, b = 0, 0, 0

    if 0 <= h < 60: r, g, b = c, x, 0
    elif 60 <= h < 120: r, g, b = x, c, 0
    elif 120 <= h < 180: r, g, b = 0, c, x
    elif 180 <= h < 240: r, g, b = 0, x, c
    elif 240 <= h < 300: r, g, b = x, 0, c
    elif 300 <= h < 360: r, g, b = c, 0, x

    return {
        'r': round((r + m) * 255),
        'g': round((g + m) * 255),
        'b': round((b + m) * 255)
    }

# Example usage:
# rgb_color = hsv_to_rgb(120, 75, 50)
# print(rgb_color) # Output: {'r': 32, 'g': 128, 'b': 32}
`;


export default function HsvToRgbPage() {
  const toolEmbedUrl = "/tools/hsv-to-rgb-converter?embed=true";
  const standaloneToolUrl = "/tools/hsv-to-rgb-converter"; 

  // States for copy buttons
  const [copiedJsCode, setCopiedJsCode] = useState(false);
  const [copiedPythonCode, setCopiedPythonCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 p-4 md:p-8">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        
        <header className="text-center mb-10 md:mb-14 mt-6 md:mt-8">
          <div className="inline-block p-3 bg-gradient-to-r from-green-100 to-cyan-100 dark:from-green-900 dark:to-cyan-900 rounded-full mb-4 shadow-md">
            {/* Placeholder icon - Update with relevant SVG */}
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-cyan-600 dark:from-green-400 dark:via-teal-300 dark:to-cyan-400 mb-4">
            HSV to RGB Converter: Free Online Color Transformation
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Instantly translate colors from the intuitive HSV (Hue, Saturation, Value) model to the standard RGB (Red, Green, Blue) format used in web design, development, and digital graphics.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-green-100 dark:bg-green-700/50 text-green-800 dark:text-green-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HSV to RGB</span>
            <span className="bg-teal-100 dark:bg-teal-700/50 text-teal-800 dark:text-teal-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Color Converter</span>
            <span className="bg-cyan-100 dark:bg-cyan-700/50 text-cyan-800 dark:text-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">RGB Color Model</span>
            <span className="bg-blue-100 dark:bg-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Web Colors</span>
            <span className="bg-indigo-100 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Online Tool</span>
          </div>
        </header>

        <section aria-labelledby="interactive-tool-heading" className="mb-10 md:mb-16">
          <h2 id="interactive-tool-heading" className="sr-only">Interactive HSV to RGB Converter Tool</h2> 
          <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1.1] max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
            <iframe 
              src={toolEmbedUrl}
              className="w-full h-full border-none"
              title="Interactive HSV to RGB Converter Tool"
              loading="lazy"
            />
          </div>
           <div className="text-center mt-6">
            <Link 
              href={standaloneToolUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:from-green-600 hover:to-teal-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
               </svg>
               Open Full Tool in New Tab
            </Link>
          </div>
        </section>

        <article className="prose dark:prose-invert lg:prose-xl max-w-none bg-white dark:bg-gray-800/80 rounded-lg shadow-lg p-6 md:p-10 space-y-12">
          
          <section id="understanding-models">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-green-500 pl-4 !mt-0">Understanding the HSV and RGB Color Models</h2>
            <p>
              This tool facilitates the essential conversion between two key methods of digital color representation: HSV (Hue, Saturation, Value) and RGB (Red, Green, Blue). Understanding when and how to switch between these models using an &quot;HSV to RGB converter&quot; is crucial for achieving accurate and intended colors in digital design, web development, and graphic arts.
            </p>
            <h3 className="text-xl md:text-2xl font-medium mt-6 mb-3">HSV: The Intuitive Approach</h3>
            <p>
              HSV is often preferred for its intuitive approach, mirroring how humans perceive color attributes. It uses a cylindrical model, making it a popular choice in color pickers for selecting &quot;RGB from HSV&quot;:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Hue (H):</strong> Represents the type of color (e.g., red, green, blue). It&apos;s measured in degrees from 0° to 360°. This is the primary identifier of the color itself.</li>
              <li><strong>Saturation (S):</strong> Represents the intensity or purity of the color, ranging from 0% (gray) to 100% (fully saturated). High saturation leads to vivid colors.</li>
              <li><strong>Value (V):</strong> Represents the brightness or lightness of the color, ranging from 0% (black) to 100% (brightest). Also sometimes called Brightness (HSB), it determines how much light the color seems to emit.</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-3">RGB: The Digital Standard</h3>
            <p>
              RGB is the foundational <strong>additive color model</strong> for most digital displays like monitors, cameras, and scanners. It defines colors by mixing specific intensities (0-255) of red, green, and blue light. It&apos;s the native language for screens, making &quot;HSV to RGB online&quot; conversion necessary for display.
            </p>
             <ul className="list-disc pl-6 space-y-2 mb-4">
               <li>Each channel (Red, Green, Blue) ranges from 0 (no light) to 255 (maximum light).</li>
               <li>Mixing these intensities creates the spectrum seen on screens (e.g., <code>rgb(255, 0, 0)</code> is pure red).</li>
             </ul>
          </section>

          <section id="conversion-process">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-teal-500 pl-4">How the HSV to RGB Conversion Works</h2>
            <p>
              Converting from the cylindrical HSV model to the cubic RGB color space used by devices involves specific mathematical formulas. Our &quot;HSV to RGB calculator&quot; implements these algorithms accurately. The process essentially translates the hue angle, saturation percentage, and brightness (value) to determine the required proportions of red, green, and blue light needed to reproduce that exact color on a screen. Key factors in the &quot;HSV to RGB calculation&quot; include identifying the dominant color sector based on Hue and calculating intermediate values based on Saturation and Value.
            </p>
          </section>

          <section id="why-convert">
             <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-cyan-500 pl-4">Why Convert from HSV to RGB?</h2>
            <p>
              While an HSV color picker is excellent for selection, RGB is the dominant model for digital display and web technologies. Using an &quot;HSV to RGB online tool&quot; is common when you need to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Translate a color chosen from a visual tool (like a color wheel or HSV sliders) into usable web color codes for CSS styling (often further converted to HEX).</li>
              <li>Ensure accurate color representation on monitors, phones, and other screens which operate using RGB.</li>
              <li>Work with programming libraries or applications that require color inputs in the standard RGB format (0-255 per channel).</li>
              <li>Obtain the foundational RGB values before converting to other web-safe formats like HEX.</li>
            </ul>
          </section>

          <section id="how-to-use">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">How to Use This HSV to RGB Converter</h2>
            <p>
              Using this online &quot;HSV to RGB tool&quot; is simple and interactive:
            </p>
            <ol className="list-decimal pl-6 space-y-4 my-4">
              <li>Adjust the sliders or enter numerical values for Hue (0-360), Saturation (0-100), and Value (0-100).</li>
              <li>The corresponding RGB values (0-255 for Red, Green, and Blue) will update automatically in the output section.</li>
              <li>A color preview swatch dynamically shows the resulting color.</li>
              <li>Click the &quot;Copy RGB Value&quot; button <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline align-text-bottom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> to copy the <code>rgb(R, G, B)</code> formatted string to your clipboard, ready for use in CSS or other applications.</li>
            </ol>
          </section>

          {/* Code Examples Section */}
          <section id="code-examples" className="not-prose">
             <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-red-500 pl-4 prose dark:prose-invert lg:prose-xl max-w-none">HSV to RGB Code Examples (JavaScript & Python)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-5 prose dark:prose-invert lg:prose-xl max-w-none">Need to implement the &quot;HSV to RGB conversion&quot; logic yourself? Here are functional code snippets:</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">JavaScript Function for HSV to RGB</h3>
              <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                <pre><code className="language-javascript">{jsHsvToRgbCode}</code></pre>
                 <button
                  onClick={() => copyToClipboard(jsHsvToRgbCode, setCopiedJsCode)}
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedJsCode ? 'bg-green-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                >
                  {copiedJsCode ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Python Function for HSV to RGB</h3>
               <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                <pre><code className="language-python">{pythonHsvToRgbCode}</code></pre>
                 <button
                  onClick={() => copyToClipboard(pythonHsvToRgbCode, setCopiedPythonCode)}
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedPythonCode ? 'bg-green-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                >
                  {copiedPythonCode ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq">
             <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-yellow-500 pl-4">Frequently Asked Questions (HSV to RGB)</h2>
            <div className="space-y-6">
              
                <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-green-600 dark:hover:text-green-400">
                    What&apos;s the difference between HSV and HSL conversion to RGB?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    While both HSV and HSL can represent the same colors and convert to the same RGB values, the formulas used are different because their third component (Value vs. Lightness) behaves differently. Using an HSV-to-RGB formula with HSL inputs (or vice-versa) will produce incorrect RGB results. Always use the conversion function specific to the source model (HSV or HSL).
                  </p>
                </details>

                 <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-green-600 dark:hover:text-green-400">
                    Does the HSV to RGB conversion handle transparency (Alpha)?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    No, the standard HSV model and this converter deal only with opaque colors. Transparency is typically added as a fourth channel (Alpha) to RGB, creating RGBA. If you need transparency, you would usually define it separately or use an HSVA model and convert to RGBA.
                  </p>
                </details>

                 <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-green-600 dark:hover:text-green-400">
                    Are there different algorithms for HSV to RGB conversion?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    Yes, while the underlying mathematical principle is the same, slight variations in formulas or rounding methods can exist between different implementations. However, standard algorithms (like the one used here and shown in the code examples) provide consistent and widely accepted results for typical sRGB color spaces used on the web.
                  </p>
                </details>

                 <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-green-600 dark:hover:text-green-400">
                    What are the valid input ranges for HSV values?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    The standard ranges are: <strong>Hue (H):</strong> 0 to 360 degrees. <strong>Saturation (S):</strong> 0 to 100 percent. <strong>Value (V):</strong> 0 to 100 percent. Inputs outside these ranges might be clamped or produce unexpected results depending on the specific implementation. Our tool generally expects values within these bounds.
                  </p>
                </details>

                 <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                   <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-green-600 dark:hover:text-green-400">
                    Can I convert RGB back to HSV here?
                     <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                   </summary>
                   <p className="mt-4 text-gray-700 dark:text-gray-400">
                    This page focuses on HSV → RGB. For the reverse conversion, please use our dedicated <Link href="/tools/rgb-to-hsv" className="text-green-600 dark:text-green-400 hover:underline">RGB to HSV Converter</Link> tool.
                  </p>
                 </details>
              
            </div>
          </section>

          {/* Related Tools Section */}
          <section id="related-tools">
             <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4">Related Color Conversion Tools</h2>
            <p>Explore other useful color utilities:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><Link href="/tools/rgb-to-hsv" className="text-green-600 dark:text-green-400 hover:underline">RGB to HSV Converter</Link></li>
              <li><Link href="/tools/hsv-to-hex" className="text-green-600 dark:text-green-400 hover:underline">HSV to HEX Converter</Link></li>
              <li><Link href="/tools/rgb-to-hex" className="text-green-600 dark:text-green-400 hover:underline">RGB to HEX Converter</Link></li>
              <li><Link href="/tools/hsl-to-rgb" className="text-green-600 dark:text-green-400 hover:underline">HSL to RGB Converter</Link></li>
              <li><Link href="/tools/color-picker-embed" className="text-green-600 dark:text-green-400 hover:underline">Online Color Picker</Link></li>
            </ul>
             <p>Check out our full suite on the main <Link href="/" className="text-green-600 dark:text-green-400 hover:underline">Color Tools</Link> page.</p>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="text-center mt-12 border-t dark:border-gray-700 pt-10 not-prose">
            <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-gray-800 dark:text-gray-200">Get Your RGB Values from HSV Now!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              This accurate and easy-to-use HSV to RGB converter is perfect for designers and developers needing standard RGB color codes. Bookmark it for quick access whenever you need to translate HSV colors for screen use.
            </p>
            <Link href={standaloneToolUrl} legacyBehavior>
              <a className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform no-underline">
                Use the Full HSV to RGB Tool
              </a>
            </Link>
          </section>

        </article>
      </div>
    </div>
  );
} 