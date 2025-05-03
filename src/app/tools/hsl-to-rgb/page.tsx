'use client';

// Merged Client Component logic back into page for HSL to RGB
import React, { useState } from 'react';
// Metadata type import is removed as metadata export is removed.
// import type { Metadata } from 'next'; 
import Link from 'next/link';
import Navigation from '@/components/Navigation';


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
const jsHslToRgbCode = `
/**
 * Converts HSL color value to RGB.
 * Assumes h, s, and l are contained in the set [0, 360], [0, 100], [0, 100] respectively.
 * Returns an object {r, g, b} with values in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Object          The RGB representation
 */
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
}

// Example Usage:
const rgbResult = hslToRgb(180, 50, 50);
console.log(rgbResult); // Output: { r: 64, g: 191, b: 191 }
console.log(\`rgb(\${rgbResult.r}, \${rgbResult.g}, \${rgbResult.b})\`); // Output: rgb(64, 191, 191)
`;

const pythonHslToRgbCode = `
import math

def hsl_to_rgb(h, s, l):
    """Converts HSL color value to RGB.
    Assumes h, s, and l are contained in the set [0, 360], [0, 100], [0, 100] respectively.
    Returns a tuple (r, g, b) with values in the set [0, 255]."""
    s /= 100.0
    l /= 100.0

    c = (1 - abs(2 * l - 1)) * s
    x = c * (1 - abs((h / 60) % 2 - 1))
    m = l - c / 2
    r, g, b = 0, 0, 0

    if 0 <= h < 60:
        r, g, b = c, x, 0
    elif 60 <= h < 120:
        r, g, b = x, c, 0
    elif 120 <= h < 180:
        r, g, b = 0, c, x
    elif 180 <= h < 240:
        r, g, b = 0, x, c
    elif 240 <= h < 300:
        r, g, b = x, 0, c
    elif 300 <= h < 360:
        r, g, b = c, 0, x

    r = round((r + m) * 255)
    g = round((g + m) * 255)
    b = round((b + m) * 255)

    return r, g, b

# Example Usage:
r_val, g_val, b_val = hsl_to_rgb(180, 50, 50)
print(f"rgb({r_val}, {g_val}, {b_val})") # Output: rgb(64, 191, 191)
`;

// Metadata export is REMOVED to allow 'use client'
// export const metadata: Metadata = { ... };

export default function HslToRgbPage() { // This is now the main component again
  const toolEmbedUrl = "/tools/hsl-to-rgb-converter?embed=true";
  const standaloneToolUrl = "/tools/hsl-to-rgb-converter";
  const [copiedEmbedCode, setCopiedEmbedCode] = useState(false);
  const [copiedCustomEmbedCode, setCopiedCustomEmbedCode] = useState(false);
  const [copiedJsCode, setCopiedJsCode] = useState(false);
  const [copiedPythonCode, setCopiedPythonCode] = useState(false);

  const embedCode = `<iframe
    src="${typeof window !== 'undefined' ? window.location.origin : ''}${toolEmbedUrl}"
    width="100%"
    height="400" 
    style="border:1px solid #ccc; border-radius:8px; overflow:hidden;"
    title="HSL to RGB Converter Tool"
  ></iframe>`;

  const embedCodeCustom = `<iframe
    src="${typeof window !== 'undefined' ? window.location.origin : ''}/tools/hsl-to-rgb-converter?embed=true&h=210&s=70&l=60"
    width="100%"
    height="400"
    style="border:1px solid #ccc; border-radius:8px; overflow:hidden;"
    title="HSL to RGB Converter Tool (Custom Initial Color)"
  ></iframe>`;

  return (
    // Using a slightly different gradient for visual distinction if desired
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 p-4 md:p-8">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        {/* TODO: Implement and add a consistent Navigation component here */}
        
        <header className="text-center mb-10 md:mb-14">
           <div className="inline-block p-3 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 rounded-full mb-4 shadow-md">
             {/* Placeholder icon - replace with actual relevant icon */}
             <svg className="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
           </div>
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 mb-4">
              HSL to RGB Color Converter
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Translate intuitive HSL (Hue, Saturation, Lightness) colors into standard RGB values for web development, design systems, and digital graphics with this fast, free online tool.
            </p>
             <div className="flex flex-wrap justify-center gap-2 mt-5">
              <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs px-2.5 py-1 rounded-full shadow-sm">HSL to RGB</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2.5 py-1 rounded-full shadow-sm">Color Conversion</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2.5 py-1 rounded-full shadow-sm">Web Colors</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2.5 py-1 rounded-full shadow-sm">CSS Colors</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full shadow-sm">Developer Tool</span>
            </div>
        </header>
        
        {/* Iframe container for the tool */}
        <section aria-labelledby="interactive-tool-heading" className="mb-10 md:mb-16">
           <h2 id="interactive-tool-heading" className="sr-only">Interactive HSL to RGB Converter Tool</h2> 
          <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1.2] max-w-3xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
             <iframe 
               src={toolEmbedUrl}
               className="w-full h-full border-none"
               title="Interactive HSL to RGB Converter Tool"
               loading="lazy"
             />
          </div>
          <div className="text-center mt-6">
            <Link 
              href={standaloneToolUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
               </svg>
               Open Full Tool in New Tab
            </Link>
          </div>
        </section>

         {/* Main Content Area - Enhanced Structure */}
         <div className="space-y-12 bg-white dark:bg-gray-800/80 rounded-lg shadow-lg p-6 md:p-10 prose dark:prose-invert prose-lg max-w-none">

            {/* Section 1: Understanding Models */} 
            <section aria-labelledby="models-heading">
              <h2 id="models-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-cyan-500 pl-4 !mt-0">Understanding HSL vs. RGB Color Models</h2>
              
              <h3 className="text-xl md:text-2xl font-medium mt-6 mb-3">HSL: The Intuitive Choice</h3>
              <p>
                HSL (<strong>Hue, Saturation, Lightness</strong>) is a color model designed to be more intuitive for human understanding and manipulation. It represents color using three components visualized as a cylinder:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Hue (H):</strong> The core color identity, represented as an angle (0-360°) on the color wheel. 0°/360° is Red, 120° is Green, 240° is Blue.</li>
                <li><strong>Saturation (S):</strong> The color&apos;s intensity or purity (0-100%). 0% is completely desaturated (grayscale), while 100% is the most vibrant version of the hue.</li>
                <li><strong>Lightness (L):</strong> The perceived brightness or luminance (0-100%). 0% is pure black, 100% is pure white, and 50% typically represents the &quot;purest&quot; hue without being tinted white or shaded black.
                </li>
              </ul>
              <p>
                This model makes it easy to adjust specific aspects: want a lighter blue? Increase Lightness. Want a less intense green? Decrease Saturation. This aligns well with how artists and designers often think about color modification.
              </p>

              <h3 className="text-xl md:text-2xl font-medium mt-8 mb-3">RGB: The Digital Standard</h3>
              <p>
                RGB (<strong>Red, Green, Blue</strong>) is the foundational <em>additive</em> color model for digital displays. It works by combining different amounts of red, green, and blue light emitted from screen pixels. Varying the intensity of each primary color channel (typically 0-255) produces the vast spectrum visible on screens.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Channel Values:</strong> Each of R, G, and B ranges from 0 (off) to 255 (maximum intensity).</li>
                {/* Corrected usage of code tags */}
                <li><strong>Color Mixing:</strong> <code>rgb(255, 0, 0)</code> = Red, <code>rgb(0, 255, 0)</code> = Green, <code>rgb(0, 0, 255)</code> = Blue. Combinations like <code>rgb(255, 255, 0)</code> create Yellow. <code>rgb(0, 0, 0)</code> is Black, <code>rgb(255, 255, 255)</code> is White.</li>
                <li><strong>Total Colors:</strong> With 256 possibilities per channel, RGB can represent 256³, or over 16.7 million distinct colors (24-bit color).</li>
              </ul>
              <p>
                While fundamental for screens, directly manipulating RGB values (e.g., wanting a slightly lighter red) can be less intuitive than using HSL.
              </p>
            </section>

            {/* Section 2: The Conversion Process */} 
            <section aria-labelledby="conversion-heading">
              <h2 id="conversion-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">How HSL to RGB Conversion Works (Conceptually)</h2>
              <p>
                Converting from the cylindrical HSL model to the cubic RGB model involves mathematical transformations. While the exact formulas can be complex (handling the circular nature of Hue and the relationships between Saturation, Lightness, and the RGB primaries), the core idea is to map the HSL coordinates to their corresponding position within the RGB color space.
              </p>
              <ol className="list-decimal pl-6 space-y-2 my-4">
                <li><strong>Calculate Chroma (C):</strong> This represents the color intensity relative to gray and depends on Saturation and Lightness.</li>
                <li><strong>Determine Intermediate Values (X, m):</strong> Based on Hue and Chroma, an intermediate value (X) related to the second largest color component is found. Another value (m) represents the minimum light added to each channel, determined by Lightness and Chroma.</li>
                <li><strong>Map Hue to RGB Sector:</strong> The Hue value (0-360°) determines which 60° sector of the color wheel the color falls into. This dictates which of R, G, or B will be the largest component (C+m), which will be the intermediate (X+m), and which will be the smallest (m).</li>
                <li><strong>Scale to 0-255 Range:</strong> The resulting R, G, B values (initially between 0 and 1) are scaled by multiplying by 255 and then rounded to the nearest integer.</li>
              </ol>
              <p>
                This tool handles these calculations instantly, giving you the precise RGB equivalent for any HSL input.
              </p>
            </section>

            {/* Section 3: Why Convert? */} 
            <section aria-labelledby="why-convert-heading">
              <h2 id="why-convert-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-green-500 pl-4">Why Convert HSL to RGB?</h2>
              <p>
                The primary reason is <strong>compatibility</strong>. While HSL is often preferred during the design and selection phase, the vast majority of digital systems rely on RGB for final output:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                {/* Corrected usage of code tags */}
                <li><strong>Web Development (CSS):</strong> Stylesheets primarily use RGB or HEX (which directly maps to RGB) for color definitions (e.g., <code>color: rgb(64, 191, 191);</code>). While CSS supports <code>hsl()</code> notation, converting to RGB ensures consistency and avoids potential interpretation issues.</li>
                <li><strong>Graphics Software:</strong> Many image editing and vector graphics programs internally use or require RGB values for final rendering or export for web/screen use.</li>
                <li><strong>Programming Frameworks:</strong> UI libraries and game engines often expect color inputs in RGB or RGBA format.</li>
                <li><strong>Hardware:</strong> Digital screens, cameras, and scanners are fundamentally based on capturing or displaying Red, Green, and Blue light levels.</li>
              </ul>
               <p>This converter acts as a crucial bridge, allowing you to leverage the intuitive nature of HSL for design while outputting the universally compatible RGB values needed for implementation.</p>
            </section>

             {/* Section 4: How to Use */} 
             <section aria-labelledby="how-to-use-heading">
              <h2 id="how-to-use-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">How to Use This HSL to RGB Converter</h2>
              <ol className="list-decimal pl-6 space-y-4 my-4">
                <li>
                  <strong>Input HSL Values:</strong> Use the sliders provided for Hue (H), Saturation (S), and Lightness (L). Drag the sliders or click on the track. For precise control, type numeric values directly into the input boxes (Hue: 0-360, Saturation: 0-100, Lightness: 0-100).
                </li>
                <li>
                  <strong>Observe Real-time Preview:</strong> As you adjust the HSL values, the color preview swatch updates instantly, displaying the resulting color.
                </li>
                <li>
                  <strong>Get RGB Output:</strong> The corresponding RGB values, formatted as <code>rgb(R, G, B)</code> (where R, G, B are integers from 0-255), are automatically calculated and shown in the output section.
                </li>
                <li>
                  <strong>Copy the RGB Code:</strong> Click the copy icon <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline align-text-bottom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> located next to the RGB output. The <code>rgb(R, G, B)</code> string will be copied to your clipboard, ready to paste into your CSS, code, or design documents.
                </li>
              </ol>
            </section>

            {/* Section 5: Code Examples */} 
            <section aria-labelledby="code-examples-heading" className="not-prose">
               <h2 id="code-examples-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-red-500 pl-4 prose dark:prose-invert prose-lg max-w-none">HSL to RGB Code Examples (JavaScript & Python)</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5 prose dark:prose-invert prose-lg max-w-none">Implement HSL to RGB conversion directly in your projects with these code snippets:</p>
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">JavaScript HSL to RGB Function</h3>
                <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                  <pre><code className="language-javascript">{jsHslToRgbCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(jsHslToRgbCode, setCopiedJsCode)}
                    // Corrected className template literal
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${
                      copiedJsCode
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {copiedJsCode ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Python HSL to RGB Function</h3>
                 <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                  <pre><code className="language-python">{pythonHslToRgbCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(pythonHslToRgbCode, setCopiedPythonCode)}
                    // Corrected className template literal
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${
                      copiedPythonCode
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {copiedPythonCode ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 6: Embed Tool */} 
            <section aria-labelledby="embed-tool-heading" className="not-prose">
              <h2 id="embed-tool-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-orange-500 pl-4 prose dark:prose-invert prose-lg max-w-none">Embed This HSL to RGB Tool</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5 prose dark:prose-invert prose-lg max-w-none">
                Integrate this converter into your own website, blog, or documentation easily using the iframe code below. It adapts to the container width.
              </p>
              <div className="mb-8">
                 <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Standard Embed Code</h3>
                 <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                   <pre><code className="language-html">{embedCode}</code></pre>
                   <button
                     onClick={() => copyToClipboard(embedCode, setCopiedEmbedCode)}
                     // Corrected className template literal
                     className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${
                       copiedEmbedCode
                         ? 'bg-green-600 text-white'
                         : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                     }`}
                   >
                     {copiedEmbedCode ? 'Copied!' : 'Copy Code'}
                   </button>
                 </div>
              </div>
               <div>
                 <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800 dark:text-gray-200">Embed with Custom Initial Color</h3>
                 <p className="text-gray-700 dark:text-gray-300 mb-4 prose dark:prose-invert prose-lg max-w-none">
                   {/* Corrected usage of code tags */}
                   Pre-load the converter with a specific HSL color by adding <code>h</code>, <code>s</code>, and <code>l</code> parameters to the <code>src</code> URL (Hue: 0-360, Saturation: 0-100, Lightness: 0-100). Example below sets initial HSL(210, 70%, 60%):
                 </p>
                 <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                   <pre><code className="language-html">{embedCodeCustom}</code></pre>
                   <button
                      onClick={() => copyToClipboard(embedCodeCustom, setCopiedCustomEmbedCode)}
                      // Corrected className template literal
                      className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${
                        copiedCustomEmbedCode
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {copiedCustomEmbedCode ? 'Copied!' : 'Copy Code'}
                   </button>
                 </div>
              </div>
            </section>

            {/* Section 7: FAQ */} 
             <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-yellow-500 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                  <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-blue-600 dark:hover:text-blue-400">
                      What is the difference between HSL and HSV/HSB?
                      <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-400">
                      HSL (Hue, Saturation, Lightness) and HSV/HSB (Hue, Saturation, Value/Brightness) are similar cylindrical models. The primary difference is the vertical axis: HSL&apos;s Lightness ranges from black (0%) to the pure hue (50%) to white (100%). HSV/HSB&apos;s Value/Brightness ranges from black (0%) to the pure hue (100%). This means 100% Lightness is always white, while 100% Value/Brightness is the fully saturated, bright hue itself. HSL can be more intuitive for simply making a color lighter or darker.
                    </p>
                  </details>

                   <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-blue-600 dark:hover:text-blue-400">
                      Is the HSL to RGB conversion perfectly accurate?
                      <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-400">
                      The mathematical conversion is precise. However, RGB values are stored as integers (0-255), while HSL calculations involve floating-point numbers. Rounding during the final scaling step means that converting HSL -&gt; RGB -&gt; HSL might result in tiny differences (often less than 1 unit). For all practical web and screen design purposes, the conversion is considered highly accurate and visually identical.
                    </p>
                  </details>

                  <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-blue-600 dark:hover:text-blue-400">
                      Does this tool handle transparency (Alpha)?
                      <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-400">
                      No, this tool specifically converts opaque HSL colors to opaque RGB colors. For colors with transparency, you would typically use the HSLA (HSL + Alpha) or RGBA (RGB + Alpha) models. Look for dedicated HSLA/RGBA converters if you need alpha channel support.
                      {/* Potential Link: <Link href="/tools/hsla-to-rgba">HSLA to RGBA Converter</Link> */}
                    </p>
                  </details>

                  <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-blue-600 dark:hover:text-blue-400">
                      Can I convert RGB back to HSL here?
                       <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-400">
                      This page focuses solely on HSL → RGB. We offer a separate, dedicated <Link href="/tools/rgb-to-hsl" className="text-blue-600 dark:text-blue-400 hover:underline">RGB to HSL Converter</Link> tool for the reverse conversion.
                    </p>
                  </details>

                   <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-blue-600 dark:hover:text-blue-400">
                      What are the valid input ranges for HSL?
                      <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-400">
                      <strong>Hue (H):</strong> 0 to 360 degrees (values outside this range will typically wrap around, e.g., 370° is treated as 10°). <br/>
                      <strong>Saturation (S):</strong> 0% to 100%. <br/>
                      <strong>Lightness (L):</strong> 0% to 100%.
                    </p>
                  </details>
              </div>
            </section>

            {/* Section 8: Conclusion */} 
            <section aria-labelledby="conclusion-heading" className="text-center mt-12 border-t dark:border-gray-700 pt-10">
              <h2 id="conclusion-heading" className="text-2xl md:text-3xl font-semibold mb-5 text-gray-800 dark:text-gray-200">Ready to Convert Your HSL Colors?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Use the interactive tool above to get instant RGB values, explore the HSL color space, or grab the code examples to integrate this conversion into your own applications. Bookmark this page for quick access!
              </p>
              {/* Link back to the interactive tool section or standalone */}
              <Link href={standaloneToolUrl} legacyBehavior>
                <a className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform no-underline">
                  Go to Full HSL to RGB Tool
                </a>
              </Link>
            </section>

         </div>
      </div>
    </div>
  );
} 