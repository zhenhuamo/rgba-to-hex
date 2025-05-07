"use client";

// import type { Metadata } from 'next'; // Removed
import React, { useState } from 'react'; // Added useState
import Link from 'next/link';
import Navigation from '@/components/Navigation'; // Added Navigation import

// Removed generateMetadata function

// Helper function for copying text (similar to hsl-to-rgb page)
const copyToClipboard = async (text: string, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
    // Consider a more user-friendly error message or UI update here
    alert('Failed to copy code!'); 
  }
};

export default function HsvToHexPage() {
  const toolEmbedUrl = "/tools/hsv-to-hex-converter?embed=true";
  const standaloneToolUrl = "/tools/hsv-to-hex-converter"; // For the button

  // States for copy buttons
  const [copiedJsCode, setCopiedJsCode] = useState(false);
  const [copiedPythonCode, setCopiedPythonCode] = useState(false);
  const [copiedEmbedCode, setCopiedEmbedCode] = useState(false);
  const [copiedCustomEmbedCode, setCopiedCustomEmbedCode] = useState(false);

  // Code examples
  const jsHsvToHexCode = `
function hsvToHex(h, s, v) {
  let r, g, b;
  s /= 100;
  v /= 100;

  if (s === 0) {
    r = g = b = Math.round(v * 255);
    const toHex = (c) => c.toString(16).padStart(2, '0');
    return ("#" + toHex(r) + toHex(g) + toHex(b)).toUpperCase();
  }

  h /= 60;
  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - s * f);
  const t = v * (1 - s * (1 - f));

  let r_temp = 0, g_temp = 0, b_temp = 0; // Use temp variables
  switch (i % 6) {
    case 0: r_temp = v; g_temp = t; b_temp = p; break;
    case 1: r_temp = q; g_temp = v; b_temp = p; break;
    case 2: r_temp = p; g_temp = v; b_temp = t; break;
    case 3: r_temp = p; g_temp = q; b_temp = v; break;
    case 4: r_temp = t; g_temp = p; b_temp = v; break;
    case 5: r_temp = v; g_temp = p; b_temp = q; break;
  }

  r = Math.round(r_temp * 255);
  g = Math.round(g_temp * 255);
  b = Math.round(b_temp * 255);
  
  const toHex = (c) => c.toString(16).padStart(2, '0');
  return ("#" + toHex(r) + toHex(g) + toHex(b)).toUpperCase();
}

// Example:
// console.log(hsvToHex(120, 75, 60)); // Example output: #269926
`;

  const pythonHsvToHexCode = `
import math

def hsv_to_hex(h, s, v):
    """Converts HSV color value to HEX.
    h (0-360), s (0-100), v (0-100)"""
    s_norm = s / 100.0
    v_norm = v / 100.0

    if s_norm == 0:
        r_byte = g_byte = b_byte = int(round(v_norm * 255))
        return f"#{r_byte:02x}{g_byte:02x}{b_byte:02x}".upper()

    h_i = h / 60.0
    i = math.floor(h_i)
    f = h_i - i
    
    p = v_norm * (1 - s_norm)
    q = v_norm * (1 - s_norm * f)
    t = v_norm * (1 - s_norm * (1 - f))

    r_float, g_float, b_float = 0.0, 0.0, 0.0 # Initialize
    if i % 6 == 0:
        r_float, g_float, b_float = v_norm, t, p
    elif i % 6 == 1:
        r_float, g_float, b_float = q, v_norm, p
    elif i % 6 == 2:
        r_float, g_float, b_float = p, v_norm, t
    elif i % 6 == 3:
        r_float, g_float, b_float = p, q, v_norm
    elif i % 6 == 4:
        r_float, g_float, b_float = t, p, v_norm
    elif i % 6 == 5: # Use elif for clarity
        r_float, g_float, b_float = v_norm, p, q
        
    r_byte = int(round(r_float * 255))
    g_byte = int(round(g_float * 255))
    b_byte = int(round(b_float * 255))

    # Ensure values are within 0-255 before formatting
    r_byte = max(0, min(255, r_byte))
    g_byte = max(0, min(255, g_byte))
    b_byte = max(0, min(255, b_byte))

    return f"#{r_byte:02x}{g_byte:02x}{b_byte:02x}".upper()

# Example:
# print(hsv_to_hex(210, 80, 70)) # Example output: #2447B3
`;

  const embedCode = `<iframe
    src="${typeof window !== 'undefined' ? window.location.origin : ''}${toolEmbedUrl}"
    width="100%"
    height="350" 
    style="border:1px solid #ccc; border-radius:8px; overflow:hidden;"
    title="HSV to HEX Converter Tool"
  ></iframe>`;

  const embedCodeCustom = `<iframe
    src="${typeof window !== 'undefined' ? window.location.origin : ''}/tools/hsv-to-hex-converter?embed=true&h=210&s=80&v=70"
    width="100%"
    height="350"
    style="border:1px solid #ccc; border-radius:8px; overflow:hidden;"
    title="HSV to HEX Converter Tool (Custom Initial Color)"
  ></iframe>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-slate-50 to-cyan-50 dark:from-gray-900 dark:via-slate-850 dark:to-gray-900 p-4 md:p-8">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 md:mb-14 mt-6 md:mt-8">
          <div className="inline-block p-3 bg-gradient-to-r from-sky-100 to-cyan-100 dark:from-sky-900 dark:to-cyan-900 rounded-full mb-4 shadow-md">
            {/* Placeholder icon - consider a specific HSV/HEX icon */}
            <svg className="w-8 h-8 text-sky-600 dark:text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400 mb-4">
            HSV to HEX Converter: Accurate & Free Online Tool
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Easily convert HSV (Hue, Saturation, Value) color values to standard HEX codes (#RRGGBB) for your web design, development, and digital art projects. 
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-sky-100 dark:bg-sky-700/50 text-sky-800 dark:text-sky-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HSV to HEX</span>
            <span className="bg-cyan-100 dark:bg-cyan-700/50 text-cyan-800 dark:text-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Color Conversion</span>
            <span className="bg-blue-100 dark:bg-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HEX Color Codes</span>
            <span className="bg-indigo-100 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Web Development</span>
            <span className="bg-purple-100 dark:bg-purple-700/50 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">CSS Colors</span>
          </div>
        </header>

        <section aria-labelledby="interactive-tool-heading" className="mb-10 md:mb-16">
          <h2 id="interactive-tool-heading" className="sr-only">Interactive HSV to HEX Converter Tool</h2> 
          <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1.1] max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
            <iframe 
              src={toolEmbedUrl}
              className="w-full h-full border-none"
              title="Interactive HSV to HEX Converter Tool"
              loading="lazy"
            />
          </div>
          <div className="text-center mt-6">
            <Link 
              href={standaloneToolUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-sky-500 to-cyan-500 rounded-lg hover:from-sky-600 hover:to-cyan-600 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Open Full Tool in New Tab
            </Link>
          </div>
        </section>

        {/* Main Content Area - To be populated with detailed sections */}
        <article className="prose dark:prose-invert lg:prose-xl max-w-none bg-white dark:bg-gray-800/80 rounded-lg shadow-lg p-6 md:p-10 space-y-12">
          <section id="understanding-models">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-sky-500 pl-4 !mt-0">Understanding HSV and HEX Color Models</h2>
            
            <h3 className="text-xl md:text-2xl font-medium mt-6 mb-3">HSV: The Intuitive Artist&apos;s Palette</h3>
            <p>
              HSV stands for <strong>Hue, Saturation, and Value</strong>. It&apos;s a color model that often feels more natural for humans, especially those with an artistic background, because it mimics how we might mix paints or describe colors:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Hue (H):</strong> This is the pure color itself, like &apos;red&apos;, &apos;green&apos;, or &apos;blue&apos;. It&apos;s represented as an angle on a color wheel, ranging from 0 to 360 degrees. For instance, 0° is typically red, 120° is green, and 240° is blue. Understanding hue is key for any &quot;HSV to HEX&quot; conversion.</li>
              <li><strong>Saturation (S):</strong> This defines the color&apos;s intensity or purity. It ranges from 0% (a dull, grayscale shade) to 100% (the most vivid and pure version of the hue). Lowering saturation makes the color appear more washed out when you convert &quot;HSV color to HEX code&quot;.</li>
              <li><strong>Value (V):</strong> Also known as Brightness, this indicates how light or dark the color is. It ranges from 0% (pure black, regardless of Hue or Saturation) to 100% (the brightest version of the color). This component is crucial for achieving the correct lightness in your &quot;HEX from HSV&quot; result.</li>
            </ul>
            <p>
              Many find the HSV model easier for selecting and adjusting colors because its components are relatively independent. This makes it a popular choice in design software before needing an &quot;online HSV to HEX tool&quot;.
            </p>

            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-3">HEX: The Web Developer&apos;s Standard</h3>
            <p>
              HEX, short for hexadecimal, is the most common way to represent colors in web design and development (HTML, CSS, SVG). A standard 6-digit HEX color code starts with a hash (<code>#</code>) followed by six characters (e.g., <code>#FF6347</code>). These six characters are actually three pairs, representing the intensity of Red, Green, and Blue light:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><code>#<strong className="text-red-500">RR</strong><strong className="text-green-500">GG</strong><strong className="text-blue-500">BB</strong></code>: Where <strong className="text-red-500">RR</strong> is the red component, <strong className="text-green-500">GG</strong> is green, and <strong className="text-blue-500">BB</strong> is blue.</li>
              <li>Each two-digit pair is a hexadecimal number ranging from <code>00</code> (0 in decimal) to <code>FF</code> (255 in decimal). This gives 256 possible values for each primary color.</li>
              <li>This direct mapping to RGB allows for 256 x 256 x 256 = 16,777,216 possible colors, often referred to as &quot;true color&quot; or 24-bit color. &quot;Hue Saturation Value to Hexadecimal&quot; conversion ultimately targets this format.</li>
            </ul>
            <p>
              Examples: <code>#000000</code> is black, <code>#FFFFFF</code> is white, and <code>#FF0000</code> is pure red. Understanding this structure is vital when using any &quot;HSV to HEX converter&quot;.
            </p>
          </section>

          <section id="conversion-process">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-cyan-500 pl-4">The HSV to HEX Conversion Process: A Glimpse Behind the Scenes</h2>
            <p>
              Converting an HSV color to its HEX equivalent isn&apos;t a direct leap. The process universally involves an intermediate step: converting HSV to RGB (Red, Green, Blue) first. Once you have the RGB values, converting them to HEX is straightforward. Here&apos;s a conceptual overview of the &quot;HSV to RGB to HEX formula&quot;:
            </p>
            <ol className="list-decimal pl-6 space-y-3 my-4">
              <li>
                <strong>Normalize Inputs:</strong> Saturation (S) and Value (V) are typically given as percentages (0-100) and are converted to decimal values (0-1). Hue (H) remains in degrees (0-360).
              </li>
              <li>
                <strong>Handle Grayscale Case:</strong> If Saturation (S) is 0, the color is a shade of gray. The R, G, and B values will all be equal to the Value (V), scaled to the 0-255 range. The Hue is irrelevant in this case.
              </li>
              <li>
                <strong>Calculate Chroma and Intermediate Values:</strong> For chromatic colors (S &gt; 0), several intermediate values are calculated based on H, S, and V. These include Chroma (the color&apos;s intensity) and other factors that depend on which 60-degree segment of the color wheel the Hue falls into.
              </li>
              <li>
                <strong>Map Hue to RGB Components:</strong> Based on the Hue&apos;s position, the calculated intermediate values are assigned to provisional R, G, and B components. These initial RGB values are typically in the 0-1 range.
              </li>
              <li>
                <strong>Scale to RGB (0-255):</strong> The provisional R, G, B values (from 0-1) are each multiplied by 255 and rounded to the nearest whole number to get the final 0-255 integer values for Red, Green, and Blue.
              </li>
              <li>
                <strong>Convert RGB to HEX:</strong> Each of the R, G, B integer values (0-255) is then converted to its two-digit hexadecimal equivalent (00-FF). For example, decimal 255 becomes FF, decimal 100 becomes 64, decimal 0 becomes 00. Any single hex digit result is padded with a leading zero (e.g., decimal 10 is hex A, so it becomes 0A).
              </li>
              <li>
                <strong>Concatenate for Final HEX Code:</strong> The three 2-digit hex values are concatenated in R-G-B order, and a hash symbol (<code>#</code>) is prepended. For example, if R=255 (FF), G=100 (64), B=50 (32), the HEX code is <code>#FF6432</code>.
              </li>
            </ol>
            <p>
              Our &quot;online HSV to HEX tool&quot; automates this entire &quot;color model transformation&quot; process for you, providing instant and accurate results.
            </p>
          </section>

          <section id="why-convert">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">Why Convert from HSV to HEX? Bridging Design and Development</h2>
            <p>
              While HSV is excellent for color selection and manipulation due to its intuitive nature, HEX codes are the lingua franca for colors on the web and in many digital applications. Here&apos;s why you&apos;d use an &quot;HSV to HEX converter&quot;:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Web Development Standard (CSS & HTML):</strong> HTML and CSS primarily use HEX codes (e.g., <code>background-color: #3498DB;</code>) to define colors. While modern CSS also supports <code>hsl()</code>, HEX remains more universally adopted and is often more concise. Understanding the &quot;benefits of HEX over HSV in CSS&quot; is crucial for web developers.</li>
              <li><strong>Design Software Compatibility:</strong> Many design tools (like Adobe Photoshop, Illustrator, Figma, Sketch) allow color picking in HSV but often display or require HEX codes for exporting assets or sharing color values with developers.</li>
              <li><strong>Cross-Platform Consistency:</strong> Using HEX codes ensures that the colors you define appear consistently across different browsers, devices, and operating systems.</li>
              <li><strong>Simplified Communication:</strong> HEX codes are short, unambiguous strings that are easy to copy, paste, and share among team members (designers, developers, clients). This is essential when asking &quot;how to for webpage convert HSV to HEX&quot;.</li>
              <li><strong>Programming & Scripting:</strong> Many programming languages and UI frameworks that deal with web technologies or graphics expect color values in HEX or RGB format. Having a reliable &quot;JavaScript HSV to HEX function&quot; or a &quot;Python script for HSV to HEX&quot; (which this page will provide examples for) becomes very useful.</li>
              <li><strong>Legacy Systems & Libraries:</strong> Some older systems or specific libraries might only accept HEX or RGB values.</li>
            </ul>
            <p>
              In essence, an &quot;HSV to HEX converter&quot; acts as a vital bridge, allowing designers to work with the HSL/HSV model they prefer for its intuitiveness, and then seamlessly translate those colors into the HEX format required for practical implementation. This is why a &quot;free online HSV to HEX best tool&quot; is so valuable.
            </p>
          </section>

          {/* Section 4: How to Use */}
          <section id="how-to-use">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-green-500 pl-4">How to Use Our Free Online HSV to HEX Converter</h2>
             <p>Converting your HSV colors to HEX codes using our tool is incredibly simple. Follow these steps to get your results instantly:</p>
            <ol className="list-decimal pl-6 space-y-4 my-4">
              <li>
                <strong>Enter Hue (H):</strong> Input the Hue value (ranging from 0 to 360 degrees) into the first field. You can type the number directly or potentially use a slider if available in the tool component.
              </li>
              <li>
                <strong>Enter Saturation (S):</strong> Input the Saturation percentage (ranging from 0% to 100%) into the second field.
              </li>
              <li>
                <strong>Enter Value (V):</strong> Input the Value/Brightness percentage (ranging from 0% to 100%) into the third field.
              </li>
              <li>
                <strong>View Instant HEX Result:</strong> As soon as you provide valid HSV values, the corresponding 6-digit HEX color code will automatically appear in the output field below, formatted as <code>#RRGGBB</code>.
              </li>
              <li>
                <strong>Check Color Preview:</strong> A visual preview swatch showing the converted color is displayed alongside the HEX code, allowing you to verify the result visually.
              </li>
              <li>
                <strong>Copy the HEX Code:</strong> Click the &quot;Copy&quot; button next to the HEX result. The code will be copied to your clipboard, ready to paste into your CSS, design files, or any other application. Success is briefly indicated on the button.
              </li>
            </ol>
            <p>This &quot;online HSV to HEX tool&quot; is designed for speed and ease of use, making your workflow smoother whether you&apos;re a designer finalizing colors or a developer implementing them.</p>
           </section>

           {/* Section 5: Code Examples */}
           <section id="code-examples" className="not-prose">
             <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-red-500 pl-4 prose dark:prose-invert lg:prose-xl max-w-none">Programmatic HSV to HEX Conversion (JavaScript & Python)</h2>
             <p className="text-gray-700 dark:text-gray-300 mb-5 prose dark:prose-invert lg:prose-xl max-w-none">Need to perform HSV to HEX conversions within your own code? Here are functional examples in JavaScript and Python. Integrate these directly into your projects for automated &quot;HSV color to HEX code&quot; translation.</p>
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">JavaScript HSV to HEX Function</h3>
              <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                <pre><code className="language-javascript">{jsHsvToHexCode}</code></pre>
                <button
                  onClick={() => copyToClipboard(jsHsvToHexCode, setCopiedJsCode)}
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedJsCode ? 'bg-green-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                >
                  {copiedJsCode ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Python HSV to HEX Function</h3>
               <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                <pre><code className="language-python">{pythonHsvToHexCode}</code></pre>
                <button
                  onClick={() => copyToClipboard(pythonHsvToHexCode, setCopiedPythonCode)}
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedPythonCode ? 'bg-green-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                >
                  {copiedPythonCode ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            </div>
           </section>

           {/* Section 6: Embed Tool */}
           <section id="embed-tool" className="not-prose">
             <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-orange-500 pl-4 prose dark:prose-invert lg:prose-xl max-w-none">Embed This HSV to HEX Converter on Your Site</h2>
             <p className="text-gray-700 dark:text-gray-300 mb-5 prose dark:prose-invert lg:prose-xl max-w-none">
              Add this handy &quot;HSV to HEX converter&quot; directly to your website, blog, or documentation. Simply copy and paste the HTML iframe code below. The tool is responsive and will adapt to the width of its container.
            </p>
            <div className="mb-8">
               <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Standard Embed Code</h3>
               <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                 <pre><code className="language-html">{embedCode}</code></pre>
                 <button
                   onClick={() => copyToClipboard(embedCode, setCopiedEmbedCode)}
                   className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedEmbedCode ? 'bg-green-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                 >
                   {copiedEmbedCode ? 'Copied!' : 'Copy Code'}
                 </button>
               </div>
            </div>
             <div>
               <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800 dark:text-gray-200">Embed with Custom Initial Color</h3>
               <p className="text-gray-700 dark:text-gray-300 mb-4 prose dark:prose-invert lg:prose-xl max-w-none">
                  Pre-load the converter with a specific HSV color using URL parameters. Add <code>h</code> (0-360), <code>s</code> (0-100), and <code>v</code> (0-100) to the <code>src</code> URL. The example below sets initial H=210, S=80, V=70:
               </p>
               <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                 <pre><code className="language-html">{embedCodeCustom}</code></pre>
                 <button
                    onClick={() => copyToClipboard(embedCodeCustom, setCopiedCustomEmbedCode)}
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedCustomEmbedCode ? 'bg-green-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                  >
                    {copiedCustomEmbedCode ? 'Copied!' : 'Copy Code'}
                 </button>
               </div>
            </div>
           </section>

           {/* Section 7: FAQ */}
           <section id="faq">
             <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-yellow-500 pl-4">Frequently Asked Questions about HSV to HEX Conversion</h2>
             <div className="space-y-6">
                 <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                   <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-sky-600 dark:hover:text-sky-400">
                     What&apos;s the main difference between HSV and HSL?
                     <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                   </summary>
                   <p className="mt-4 text-gray-700 dark:text-gray-400">
                    Both HSV (Hue, Saturation, Value) and HSL (Hue, Saturation, Lightness) are cylindrical color models derived from RGB, offering more intuitive ways to adjust colors. The key difference lies in the third component: Value (V) represents the brightness of the color itself (from black at 0% to the pure, vibrant hue at 100%), while Lightness (L) represents the perceived luminance (from black at 0% through the pure hue around 50% to white at 100%). This makes 100% L always white, whereas 100% V is the brightest version of the chosen Hue and Saturation. Some find HSV better for choosing vibrant colors, while HSL might be better for adjusting overall lightness/darkness uniformly.
                  </p>
                 </details>
                  <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-sky-600 dark:hover:text-sky-400">
                     Is information lost when I convert HSV to HEX?
                     <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-400">
                    For standard opaque colors within the common sRGB gamut (used by most screens), the conversion from HSV to RGB, and then RGB to 6-digit HEX, is generally considered accurate for practical purposes. However, because the conversion involves floating-point calculations that are then rounded to fit into the 0-255 integer range for RGB and finally into 00-FF for HEX, tiny mathematical rounding differences can occur. If you convert HSV -&gt; HEX -&gt; HSV, you might not get back the *exact* starting H, S, V values, but the resulting color difference is almost always visually imperceptible.
                  </p>
                  </details>
                 <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                   <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-sky-600 dark:hover:text-sky-400">
                     When should I use HSV instead of RGB or HEX?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                   </summary>
                   <p className="mt-4 text-gray-700 dark:text-gray-400">
                    HSV is often preferred during the <strong>color selection and adjustment phase</strong> of design. It\&apos;s easier to think about creating variations: \&quot;I want the same blue, just less intense\&quot; (decrease Saturation) or \&quot;I want this green, but darker\&quot; (decrease Value). RGB requires adjusting three values simultaneously for similar effects, which is less intuitive. However, for final implementation, especially on the web, HEX (or sometimes RGB/RGBA) is the standard. So, use HSV for picking/tweaking, then use a tool like this to \&quot;convert HSV to HEX\&quot; for implementation.
                  </p>
                 </details>
                 <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                   <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-sky-600 dark:hover:text-sky-400">
                     Can this tool convert HEX back to HSV?
                     <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path 
                     strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                   </summary>
                   <p className="mt-4 text-gray-700 dark:text-gray-400">
                    This specific page is dedicated to the HSV → HEX conversion. For the reverse process, you\&apos;ll need a different tool. We plan to offer a dedicated <Link href="/tools/hex-to-hsv" className="text-sky-600 dark:text-sky-400 hover:underline">HEX to HSV Converter</Link> soon! Check our tools list for updates.
                  </p>
                 </details>
                 <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-sky-600 dark:hover:text-sky-400">
                      What are the valid input ranges for HSV?
                      <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-400">
                    Standard ranges are: <strong>Hue (H):</strong> 0 to 360 degrees. <strong>Saturation (S):</strong> 0% to 100%. <strong>Value (V):</strong> 0% to 100%. Our converter tool expects inputs within these ranges for accurate results.
                  </p>
                  </details>
             </div>
           </section>

           {/* Section 8: Related Tools */}
           <section id="related-tools">
             <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">Explore More Color Tools</h2>
             <p>Expand your color manipulation capabilities with our other conversion and utility tools:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><Link href="/tools/hsv-to-rgb" className="text-sky-600 dark:text-sky-400 hover:underline">HSV to RGB Converter</Link> - Convert HSV directly to RGB values.</li>
              <li><Link href="/tools/rgb-to-hex" className="text-sky-600 dark:text-sky-400 hover:underline">RGB to HEX Converter</Link> - Convert standard RGB values to HEX.</li>
              <li><Link href="/tools/hsl-to-hex" className="text-sky-600 dark:text-sky-400 hover:underline">HSL to HEX Converter</Link> - Convert from the similar HSL model to HEX.</li>
              <li><Link href="/tools/hex-to-rgba" className="text-sky-600 dark:text-sky-400 hover:underline">HEX to RGBA Converter</Link> - Get RGBA values (including alpha) from HEX.</li>
              <li><Link href="/tools/color-picker-embed" className="text-sky-600 dark:text-sky-400 hover:underline">Online Color Picker</Link> - Visually pick colors and get their codes.</li>
            </ul>
             <p>Visit our main <Link href="/" className="text-sky-600 dark:text-sky-400 hover:underline">Color Tools</Link> page for the complete list.</p>
           </section>

           {/* Section 9: Conclusion */}
           <section id="conclusion" className="text-center mt-12 border-t dark:border-gray-700 pt-10 not-prose">
             <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-gray-800 dark:text-gray-200">Ready to Convert HSV to HEX Instantly?</h2>
             <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you\&apos;re finalizing a design, writing CSS, or just exploring color spaces, our HSV to HEX converter provides the speed and accuracy you need. Bookmark this page and simplify your workflow today!
            </p>
            <Link href={standaloneToolUrl} legacyBehavior>
              <a className="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform no-underline">
                Use the Full HSV to HEX Tool Now
              </a>
            </Link>
           </section>

        </article>
      </div>
    </div>
  );
} 