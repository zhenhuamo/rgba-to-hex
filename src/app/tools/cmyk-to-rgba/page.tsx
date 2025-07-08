"use client";

import React, { useState } from 'react';
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

// Code examples for CMYK to RGBA conversion
const jsCmykToRgbaCode = `
// JavaScript CMYK to RGBA conversion function
function cmykToRgba(c, m, y, k, alpha = 1) {
  // Convert CMYK percentages to decimal (0-1)
  const cyan = c / 100;
  const magenta = m / 100;
  const yellow = y / 100;
  const key = k / 100;
  
  // Calculate RGB values using CMYK to RGB formula
  const r = Math.round(255 * (1 - cyan) * (1 - key));
  const g = Math.round(255 * (1 - magenta) * (1 - key));
  const b = Math.round(255 * (1 - yellow) * (1 - key));
  
  // Ensure alpha is in valid range (0-1)
  const a = Math.max(0, Math.min(1, alpha));
  
  return { r, g, b, a };
}

// Example: Convert CMYK print color to RGBA web color
const cmykColor = { c: 75, m: 68, y: 67, k: 90 };
const rgbaResult = cmykToRgba(cmykColor.c, cmykColor.m, cmykColor.y, cmykColor.k, 0.8);
console.log(rgbaResult); // { r: 6, g: 8, b: 8, a: 0.8 }
console.log(\`rgba(\${rgbaResult.r}, \${rgbaResult.g}, \${rgbaResult.b}, \${rgbaResult.a})\`);
`;

const typescriptCmykToRgbaCode = `
// TypeScript CMYK to RGBA conversion with interfaces
interface CMYK {
  c: number; // Cyan (0-100%)
  m: number; // Magenta (0-100%)
  y: number; // Yellow (0-100%)
  k: number; // Key/Black (0-100%)
}

interface RGBA {
  r: number; // Red (0-255)
  g: number; // Green (0-255)
  b: number; // Blue (0-255)
  a: number; // Alpha (0-1)
}

function cmykToRgba(cmyk: CMYK, alpha: number = 1): RGBA {
  // Normalize CMYK values to 0-1 range
  const c = cmyk.c / 100;
  const m = cmyk.m / 100;
  const y = cmyk.y / 100;
  const k = cmyk.k / 100;
  
  // Apply CMYK to RGB conversion formula
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));
  
  return {
    r: Math.max(0, Math.min(255, r)),
    g: Math.max(0, Math.min(255, g)),
    b: Math.max(0, Math.min(255, b)),
    a: Math.max(0, Math.min(1, alpha))
  };
}

// Example usage with TypeScript
const printColor: CMYK = { c: 85, m: 21, y: 0, k: 0 };
const webColor: RGBA = cmykToRgba(printColor, 0.9);
`;

const cssCmykToRgbaCode = `
/* CSS usage of CMYK to RGBA converted colors */
.print-to-web-element {
  /* Fallback for older browsers */
  background-color: rgb(6, 8, 8);
  
  /* RGBA with transparency for modern web */
  background-color: rgba(6, 8, 8, 0.8);
  
  /* Advanced CSS with backdrop effects */
  background: rgba(6, 8, 8, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(6, 8, 8, 0.2);
}

/* Gradient using CMYK-converted RGBA colors */
.print-inspired-gradient {
  background: linear-gradient(
    135deg,
    rgba(6, 8, 8, 0.9),
    rgba(255, 255, 255, 0.1)
  );
}

/* Box shadow with print color transparency */
.print-shadow {
  box-shadow: 
    0 4px 20px rgba(6, 8, 8, 0.3),
    0 1px 3px rgba(6, 8, 8, 0.1);
}

/* CSS custom properties for brand colors */
:root {
  --brand-primary-cmyk-rgba: rgba(6, 8, 8, 1);
  --brand-primary-transparent: rgba(6, 8, 8, 0.8);
  --brand-overlay: rgba(6, 8, 8, 0.15);
}
`;

const pythonCmykToRgbaCode = `
def cmyk_to_rgba(c, m, y, k, alpha=1.0):
    """
    Convert CMYK print colors to RGBA web colors with alpha transparency
    
    Args:
        c (float): Cyan percentage (0-100)
        m (float): Magenta percentage (0-100)
        y (float): Yellow percentage (0-100)
        k (float): Key/Black percentage (0-100)
        alpha (float): Alpha transparency (0-1)
    
    Returns:
        dict: RGBA color values for web use
    """
    # Clamp CMYK values to valid ranges
    c = max(0, min(100, c)) / 100.0
    m = max(0, min(100, m)) / 100.0
    y = max(0, min(100, y)) / 100.0
    k = max(0, min(100, k)) / 100.0
    alpha = max(0, min(1, alpha))

    # CMYK to RGB conversion formula
    r = round(255 * (1 - c) * (1 - k))
    g = round(255 * (1 - m) * (1 - k))
    b = round(255 * (1 - y) * (1 - k))

    return {
        'r': r,
        'g': g,
        'b': b,
        'a': alpha,
        'css': f'rgba({r}, {g}, {b}, {alpha})'
    }

# Example: Convert print CMYK to web RGBA
print_color = cmyk_to_rgba(75, 68, 67, 90, 0.8)
print(f"RGBA: {print_color}") # Web-ready color with transparency
`;

// Iframe embed code examples
const iframeEmbedCode = `
<!-- Basic iframe embed for CMYK to RGBA converter -->
<iframe 
  src="https://yourdomain.com/tools/cmyk-to-rgba-converter?embed=true"
  width="800"
  height="600"
  frameborder="0"
  title="CMYK to RGBA Converter Tool"
  loading="lazy">
</iframe>

<!-- Responsive iframe embed with container -->
<div style="position: relative; width: 100%; max-width: 800px; margin: 0 auto;">
  <iframe 
    src="https://yourdomain.com/tools/cmyk-to-rgba-converter?embed=true"
    style="width: 100%; height: 600px; border: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
    title="CMYK to RGBA Converter Tool"
    loading="lazy">
  </iframe>
</div>

<!-- Advanced responsive iframe with aspect ratio -->
<div style="position: relative; width: 100%; max-width: 900px; aspect-ratio: 16/10; margin: 0 auto;">
  <iframe 
    src="https://yourdomain.com/tools/cmyk-to-rgba-converter?embed=true"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 12px;"
    title="CMYK to RGBA Converter Tool"
    loading="lazy"
    allow="clipboard-write">
  </iframe>
</div>
`;

const reactIframeCode = `
// React component for embedding CMYK to RGBA converter
import React from 'react';

const CMYKToRGBAEmbed = ({ 
  width = "100%", 
  height = "600px", 
  className = "",
  domain = "https://yourdomain.com" 
}) => {
  return (
    <div className={\`cmyk-rgba-embed-container \${className}\`}>
      <iframe
        src={\`\${domain}/tools/cmyk-to-rgba-converter?embed=true\`}
        width={width}
        height={height}
        style={{
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
        title="CMYK to RGBA Converter Tool"
        loading="lazy"
        allow="clipboard-write"
      />
    </div>
  );
};

// Usage example
export default function MyPage() {
  return (
    <div>
      <h2>Color Conversion Tool</h2>
      <CMYKToRGBAEmbed 
        height="700px"
        className="my-color-tool"
        domain="https://rgba-to-hex.com"
      />
    </div>
  );
}
`;

export default function CmykToRgbaPage() {
  const toolEmbedUrl = "/tools/cmyk-to-rgba-converter?embed=true";
  const standaloneToolUrl = "/tools/cmyk-to-rgba-converter"; 

  // States for copy buttons
  const [copiedJsCode, setCopiedJsCode] = useState(false);
  const [copiedTsCode, setCopiedTsCode] = useState(false);
  const [copiedCssCode, setCopiedCssCode] = useState(false);
  const [copiedPythonCode, setCopiedPythonCode] = useState(false);
  const [copiedIframeCode, setCopiedIframeCode] = useState(false);
  const [copiedReactCode, setCopiedReactCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 p-4 md:p-8">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        
        <header className="text-center mb-10 md:mb-14 mt-6 md:mt-8">
          <div className="inline-block p-3 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 rounded-full mb-4 shadow-md">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 dark:from-red-400 dark:via-pink-300 dark:to-purple-400 mb-4">
            CMYK to RGBA Converter: Print to Web Color Tool
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Convert CMYK print colors to RGBA web colors with alpha transparency control. Professional color conversion tool for designers bridging print and digital workflows. Perfect for CSS, JavaScript, and modern web development.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-red-100 dark:bg-red-700/50 text-red-800 dark:text-red-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">CMYK to RGBA</span>
            <span className="bg-pink-100 dark:bg-pink-700/50 text-pink-800 dark:text-pink-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Print to Web</span>
            <span className="bg-purple-100 dark:bg-purple-700/50 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Alpha Channel</span>
            <span className="bg-indigo-100 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Transparency</span>
            <span className="bg-blue-100 dark:bg-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">CSS Ready</span>
            <span className="bg-cyan-100 dark:bg-cyan-700/50 text-cyan-800 dark:text-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Brand Colors</span>
            <span className="bg-green-100 dark:bg-green-700/50 text-green-800 dark:text-green-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Color Conversion</span>
          </div>
        </header>

        <section aria-labelledby="interactive-tool-heading" className="mb-10 md:mb-16">
          <h2 id="interactive-tool-heading" className="sr-only">Interactive CMYK to RGBA Converter Tool</h2> 
          <div className="w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[5/3] max-w-4xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
            <iframe 
              src={toolEmbedUrl}
              className="w-full h-full border-none"
              title="Interactive CMYK to RGBA Converter Tool"
              loading="lazy"
            />
          </div>
           <div className="text-center mt-6">
            <a
              href={standaloneToolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:from-red-600 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
               </svg>
               Open Full Tool
            </a>
          </div>
        </section>

        <article className="prose dark:prose-invert lg:prose-xl max-w-none bg-white dark:bg-gray-800/80 rounded-lg shadow-lg p-6 md:p-10 space-y-12">
          
          <section id="cmyk-rgba-overview">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-red-500 pl-4 !mt-0">CMYK to RGBA Color Conversion: Print to Web Guide</h2>
            <p>
              CMYK to RGBA conversion is essential for modern design workflows that span print and digital media. This tool provides professional-grade color conversion from CMYK (Cyan, Magenta, Yellow, Key/Black) print colors to RGBA (Red, Green, Blue, Alpha) web colors with precise transparency control.
            </p>
            
            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-4">Understanding CMYK Print Color Model</h3>
            <p>
              CMYK is a subtractive color model used in professional printing, where colors are created by absorbing light through ink combinations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Cyan (C):</strong> Blue-green ink coverage from 0% to 100%</li>
              <li><strong>Magenta (M):</strong> Red-purple ink coverage from 0% to 100%</li>
              <li><strong>Yellow (Y):</strong> Yellow ink coverage from 0% to 100%</li>
              <li><strong>Key/Black (K):</strong> Black ink coverage from 0% to 100%</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-4">RGBA: Web Standard with Transparency</h3>
            <p>
              RGBA extends the RGB color model with an alpha channel for transparency control, perfect for modern web design:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>RGB Channels:</strong> Red, Green, Blue values from 0-255</li>
              <li><strong>Alpha Channel:</strong> Transparency from 0 (transparent) to 1 (opaque)</li>
              <li><strong>CSS Compatible:</strong> Direct usage in stylesheets: <code>rgba(6, 8, 8, 0.8)</code></li>
              <li><strong>Universal Support:</strong> Compatible with all modern browsers and frameworks</li>
            </ul>
          </section>

          <section id="print-vs-web">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-pink-500 pl-4">Print vs Web: Color Model Differences</h2>
            <p>
              Understanding the fundamental differences between CMYK and RGBA helps ensure successful color translation across media:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">CMYK Print Advantages</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Precise ink coverage control</li>
                  <li>Professional printing standard</li>
                  <li>Predictable print reproduction</li>
                  <li>Industry color matching systems</li>
                  <li>Optimized for physical media</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">RGBA Web Benefits</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Alpha transparency support</li>
                  <li>Direct CSS compatibility</li>
                  <li>Wider color gamut capability</li>
                  <li>Dynamic color manipulation</li>
                  <li>Modern web standard format</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="programming-implementations">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">CMYK to RGBA Programming Examples</h2>
            <p>
              Implement CMYK to RGBA conversion in your preferred programming language. These examples show professional implementations for JavaScript, TypeScript, CSS, Python, and iframe embedding.
            </p>

            {/* JavaScript Implementation */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">JavaScript CMYK to RGBA Conversion</h3>
              <p className="mb-4">
                Perfect for web applications, React, Vue, and Node.js projects. This JavaScript implementation provides accurate CMYK to RGBA conversion with transparency support:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">JavaScript CMYK to RGBA</span>
                  <button
                    onClick={() => copyToClipboard(jsCmykToRgbaCode, setCopiedJsCode)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedJsCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{jsCmykToRgbaCode}</code>
                </pre>
              </div>
            </div>

            {/* TypeScript Implementation */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">TypeScript CMYK to RGBA Implementation</h3>
              <p className="mb-4">
                Type-safe implementation for TypeScript projects with proper interfaces and validation. Perfect for enterprise applications and large-scale projects:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">TypeScript CMYK to RGBA</span>
                  <button
                    onClick={() => copyToClipboard(typescriptCmykToRgbaCode, setCopiedTsCode)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedTsCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{typescriptCmykToRgbaCode}</code>
                </pre>
              </div>
            </div>

            {/* CSS Usage */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">CSS Usage Examples</h3>
              <p className="mb-4">
                Practical CSS examples showing how to use CMYK-converted RGBA colors in modern web design with transparency effects:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">CSS RGBA Usage</span>
                  <button
                    onClick={() => copyToClipboard(cssCmykToRgbaCode, setCopiedCssCode)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedCssCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{cssCmykToRgbaCode}</code>
                </pre>
              </div>
            </div>

            {/* Python Implementation */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">Python CMYK to RGBA Function</h3>
              <p className="mb-4">
                Python implementation suitable for data science, image processing, and web development with Flask/Django frameworks:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">Python CMYK to RGBA</span>
                  <button
                    onClick={() => copyToClipboard(pythonCmykToRgbaCode, setCopiedPythonCode)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedPythonCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{pythonCmykToRgbaCode}</code>
                </pre>
              </div>
            </div>

            {/* Iframe Embed Examples */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">Iframe Embed Integration</h3>
              <p className="mb-4">
                Embed the CMYK to RGBA converter directly into your website using iframe. Perfect for blogs, educational sites, and developer resources:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">HTML Iframe Embed</span>
                  <button
                    onClick={() => copyToClipboard(iframeEmbedCode, setCopiedIframeCode)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedIframeCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{iframeEmbedCode}</code>
                </pre>
              </div>
            </div>

            {/* React Component for Iframe */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">React Component for Iframe Embedding</h3>
              <p className="mb-4">
                Reusable React component for embedding the CMYK to RGBA converter with customizable props:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">React Iframe Component</span>
                  <button
                    onClick={() => copyToClipboard(reactIframeCode, setCopiedReactCode)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedReactCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{reactIframeCode}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="conversion-algorithm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4">CMYK to RGBA Conversion Algorithm</h2>
            <p>
              The CMYK to RGBA conversion follows a mathematical algorithm that transforms print color coordinates to web color coordinates while adding transparency support:
            </p>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold mb-4">Mathematical Conversion Steps:</h4>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Normalize CMYK:</strong> Convert percentages to decimal (0-1) range</li>
                <li><strong>Apply conversion formula:</strong> R = 255 × (1 - C) × (1 - K)</li>
                <li><strong>Calculate Green:</strong> G = 255 × (1 - M) × (1 - K)</li>
                <li><strong>Calculate Blue:</strong> B = 255 × (1 - Y) × (1 - K)</li>
                <li><strong>Add alpha channel:</strong> Combine with transparency value (0-1)</li>
                <li><strong>Validate ranges:</strong> Ensure RGB values are 0-255, alpha is 0-1</li>
              </ol>
            </div>
          </section>

          <section id="use-cases">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">Professional Use Cases for CMYK to RGBA</h2>
            <p>
              CMYK to RGBA conversion is essential across various design and development scenarios:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Brand Consistency</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Print to web color matching</li>
                  <li>Corporate identity systems</li>
                  <li>Multi-channel marketing</li>
                  <li>Brand guideline compliance</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Web Development</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>CSS color generation</li>
                  <li>Dynamic theme systems</li>
                  <li>Transparent overlays</li>
                  <li>Modern web effects</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Design Workflows</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Print-to-digital conversion</li>
                  <li>E-commerce product colors</li>
                  <li>Digital proofing systems</li>
                  <li>Cross-platform design</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="technical-benefits">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-cyan-500 pl-4">Technical Benefits and Features</h2>
            <p>
              Our CMYK to RGBA converter offers several technical advantages for professional workflows:
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mt-6">
              <li><strong>Mathematical Precision:</strong> Industry-standard algorithms ensure accurate color reproduction</li>
              <li><strong>Alpha Transparency:</strong> Full control over opacity levels for modern web effects</li>
              <li><strong>Input Validation:</strong> Automatic range checking prevents invalid color values</li>
              <li><strong>Multiple Output Formats:</strong> CSS RGBA, 8-digit HEX, and component values</li>
              <li><strong>Real-time Preview:</strong> Instant visual feedback with transparency display</li>
              <li><strong>Copy Integration:</strong> One-click copying for seamless developer workflow</li>
              <li><strong>Cross-browser Support:</strong> Compatible with all modern web browsers</li>
              <li><strong>Responsive Design:</strong> Works perfectly on desktop, tablet, and mobile devices</li>
            </ul>
          </section>

          <section id="related-tools">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-green-500 pl-4">Related Color Conversion Tools</h2>
            <p>
              Explore our complete suite of professional color conversion tools for comprehensive color management:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <a href="/tools/cmyk-to-rgb" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-red-800 dark:text-red-200">CMYK to RGB Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Convert CMYK colors to RGB format without alpha channel</p>
              </a>

              <a href="/tools/cmyk-to-hex" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-pink-800 dark:text-pink-200">CMYK to HEX Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Generate hexadecimal color codes from CMYK values</p>
              </a>

              <a href="/tools/rgba-to-cmyk" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200">RGBA to CMYK Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Convert web colors back to print CMYK format</p>
              </a>

              <a href="/tools/hsl-to-rgba" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">HSL to RGBA Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Transform HSL colors to RGBA with transparency</p>
              </a>
            </div>
          </section>

          <section id="faq">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-yellow-500 pl-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">What&apos;s the difference between CMYK to RGB and CMYK to RGBA?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  CMYK to RGB converts print colors to web colors without transparency, while CMYK to RGBA adds an alpha channel for opacity control. RGBA is essential for modern web design where transparent elements and overlay effects are needed.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">How accurate is CMYK to RGBA conversion for brand colors?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our converter uses industry-standard mathematical formulas for maximum accuracy. However, due to different color gamuts between print and digital media, visual verification is recommended for critical brand color applications.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Can I use these code examples in commercial projects?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Yes, all provided code examples implement standard mathematical algorithms and can be freely used in commercial projects. The CMYK to RGBA conversion algorithm is a well-established industry standard.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Why is alpha transparency important in CMYK to RGBA conversion?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Alpha transparency enables modern web effects like semi-transparent overlays, subtle backgrounds, and layered designs that aren&apos;t possible with traditional CMYK printing. This bridges the gap between print and digital design capabilities.
                </p>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
} 