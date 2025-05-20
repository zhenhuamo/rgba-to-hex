'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function RgbaToRgb() {
  const [isCopied, setIsCopied] = useState(false);

  // Copy code to clipboard
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation bar */}
        <Navigation />

        {/* Main tool area */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Title area - enhanced keywords */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image 
                src="/rgb.svg" 
                alt="RGBA to RGB Color Converter Tool" 
                width={40}
                height={40}
                priority 
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                RGBA to RGB Color Converter | Advanced Background Blending Calculator
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional online RGBA to RGB conversion tool that transforms semi-transparent RGBA colors into solid RGB colors with precision. Our advanced algorithm supports both simple conversion and sophisticated background blending modes, providing accurate color format conversion for web developers, UI/UX designers, and digital artists working with CSS, JavaScript, React, and other web design frameworks.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              The most comprehensive RGBA to RGB conversion calculator with advanced background blending algorithms, alpha channel processing, and real-time visualization. Perfect for front-end developers, UI/UX designers, and digital artists who need pixel-perfect color transformations for cross-browser compatibility and optimal rendering.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">RGBA to RGB Conversion</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Online Alpha Channel Calculator</span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">Transparency Color Transformation</span>
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">CSS Color Blending Tool</span>
              <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full">Web Design Color Converter</span>
            </div>
          </div>

          {/* Using iframe to embed RGBA to RGB conversion tool */}
          <div className="w-full">
            <iframe 
              src="/tools/rgba-to-rgb-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="600"
              title="RGBA to RGB Color Converter"
              loading="lazy"
              allow="clipboard-write; clipboard-read"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
            

            {/* Add direct link button */}
            <div className="flex justify-center mt-6">
              <Link 
                href="/tools/rgba-to-rgb-converter" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-medium hover:from-blue-600 hover:to-green-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full RGBA to RGB Converter Tool
              </Link>
            </div>
          </div>
          
          {/* SEO enhanced content: What is RGBA to RGB Conversion */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6" id="rgba-to-rgb-conversion">What is RGBA to RGB Color Conversion? The Complete Technical Guide</h2>
            
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p>
                <strong>RGBA to RGB conversion</strong> is the technical process of transforming color values with alpha transparency channels into solid opaque RGB colors. The RGBA color model (Red, Green, Blue, Alpha) extends the standard RGB model by adding an alpha channel that specifies the opacity of the color. In this model, each RGB component ranges from 0-255, while the alpha transparency value ranges from 0 (completely transparent) to 1 (completely opaque). By contrast, the standard RGB color model only includes the red, green, and blue channels, without any transparency information.
              </p>
              
              <p className="mt-4">
                In professional web development, frontend frameworks, and digital design, converting RGBA colors to RGB is a common requirement. This transformation becomes particularly essential when working with environments that don&apos;t support transparency, when implementing cross-browser compatible designs, or when creating graphics for print media where transparency isn&apos;t applicable.
              </p>

              <p className="mt-4">
                The complexity of RGBA to RGB conversion stems from the need to accurately represent a semi-transparent color as a solid one, often against varying backgrounds. This process requires mathematical calculations that consider both the original color&apos;s RGB values and its alpha transparency level.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Technical Applications of RGBA to RGB Conversion</h3>
              
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Browser Compatibility</strong>: While modern browsers support RGBA, certain legacy browsers or embedded web views may have limited support for alpha transparency, necessitating conversion to RGB.</li>
                <li><strong>Performance Optimization</strong>: In graphics-intensive applications and animations, using RGB instead of RGBA can reduce rendering complexity and improve performance on resource-constrained devices.</li>
                <li><strong>Visual Design Prototyping</strong>: Designers often need to preview how semi-transparent elements will appear against specific backgrounds, making RGBA to RGB conversion essential for accurate mockups.</li>
                <li><strong>Print Media Production</strong>: Print materials require solid colors without transparency effects, requiring web-designed assets with RGBA values to be converted to RGB before printing.</li>
                <li><strong>Color System Consistency</strong>: Maintaining visual consistency across different platforms and media types often requires converting between color models while preserving perceived color appearance.</li>
                <li><strong>Accessibility Compliance</strong>: Ensuring proper contrast ratios for accessibility standards like WCAG 2.1 sometimes requires flattening transparent colors against their backgrounds.</li>
                <li><strong>Color Palette Generation</strong>: When creating cohesive color schemes that include semi-transparent elements, designers need to calculate the resulting RGB values for documentation and implementation.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Two Advanced Methods of RGBA to RGB Color Conversion</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">1. Simple Extraction Method</h4>
                  <p className="text-sm mb-2">The basic approach directly extracts RGB components, completely discarding the alpha channel information:</p>
                  <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    rgba(255, 99, 71, 0.5) → rgb(255, 99, 71)
                  </code>
                  <p className="text-sm mt-3 text-gray-500">
                    <em>Technical limitation: This method ignores transparency information altogether, which may result in visual inconsistencies between the original semi-transparent color and the resulting solid color. It&apos;s suitable only for cases where the original alpha value is very high (close to 1) or where visual accuracy isn&apos;t critical.</em>
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">2. Alpha Compositing / Background Blending</h4>
                  <p className="text-sm mb-2">This mathematically accurate method blends the RGBA color with a specific background color using the alpha compositing algorithm:</p>
                  <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    rgba(255, 99, 71, 0.5) + white background → rgb(255, 177, 163)
                  </code>
                  <p className="text-sm mt-3 text-green-600 dark:text-green-400">
                    <em>Our professional converter implements this advanced alpha compositing algorithm for pixel-perfect color calculations!</em>
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-medium mt-6 mb-3">Comparing Results of Conversion Methods</h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="py-2 px-4 border-b">Original RGBA Color</th>
                      <th className="py-2 px-4 border-b">Background</th>
                      <th className="py-2 px-4 border-b">Simple Extraction Result</th>
                      <th className="py-2 px-4 border-b">Alpha Compositing Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">rgba(255, 0, 0, 0.5)</td>
                      <td className="py-2 px-4 border-b">White (#FFFFFF)</td>
                      <td className="py-2 px-4 border-b">rgb(255, 0, 0)</td>
                      <td className="py-2 px-4 border-b">rgb(255, 128, 128)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">rgba(0, 0, 255, 0.7)</td>
                      <td className="py-2 px-4 border-b">White (#FFFFFF)</td>
                      <td className="py-2 px-4 border-b">rgb(0, 0, 255)</td>
                      <td className="py-2 px-4 border-b">rgb(77, 77, 255)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">rgba(0, 0, 0, 0.3)</td>
                      <td className="py-2 px-4 border-b">White (#FFFFFF)</td>
                      <td className="py-2 px-4 border-b">rgb(0, 0, 0)</td>
                      <td className="py-2 px-4 border-b">rgb(179, 179, 179)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">RGBA to RGB Color Conversion Formula: The Mathematical Foundation</h3>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg mb-6">
              <p className="mb-4 text-gray-700 dark:text-gray-300">The precise mathematical process for alpha channel compositing (background blending) follows these technical steps:</p>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>For each color channel component (R, G, B), apply the standard alpha compositing formula</li>
                <li>Result<sub>channel</sub> = Source<sub>channel</sub> × Alpha + Background<sub>channel</sub> × (1 - Alpha)</li>
                <li>Round the result to the nearest integer value (0-255 range)</li>
              </ol>
              
              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <code className="text-sm block mb-2">Detailed example with rgba(255, 99, 71, 0.5) over white background rgb(255, 255, 255):</code>
                <code className="text-sm block">R = 255 × 0.5 + 255 × (1 - 0.5) = 127.5 + 127.5 = 255</code>
                <code className="text-sm block">G = 99 × 0.5 + 255 × (1 - 0.5) = 49.5 + 127.5 = 177</code>
                <code className="text-sm block">B = 71 × 0.5 + 255 × (1 - 0.5) = 35.5 + 127.5 = 163</code>
                <code className="text-sm block mt-2">Final result: rgb(255, 177, 163)</code>
              </div>

              <p className="mt-6 text-gray-700 dark:text-gray-300">This algorithm is based on the Porter-Duff compositing operations, specifically the &quot;source over&quot; operation, which is the standard for rendering semi-transparent colors against backgrounds in computer graphics.</p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Implementation in Popular Programming Languages and Frameworks</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-3">JavaScript Implementation</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm">
                  <code>{`function rgbaToRgb(r, g, b, a, bgR = 255, bgG = 255, bgB = 255) {
  // Ensure values are in valid ranges
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  a = Math.min(1, Math.max(0, a));
  
  // Apply Alpha blending formula
  const outR = Math.round(r * a + bgR * (1 - a));
  const outG = Math.round(g * a + bgG * (1 - a));
  const outB = Math.round(b * a + bgB * (1 - a));
  
  return { r: outR, g: outG, b: outB };
}`}</code>
                </pre>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-3">Python Implementation</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm">
                  <code>{`def rgba_to_rgb(r, g, b, a, bg_r=255, bg_g=255, bg_b=255):
    """Convert RGBA color to RGB by blending with background"""
    # Ensure values are in valid ranges
    r = min(255, max(0, r))
    g = min(255, max(0, g))
    b = min(255, max(0, b))
    a = min(1.0, max(0.0, a))
    
    # Apply Alpha blending formula
    out_r = round(r * a + bg_r * (1 - a))
    out_g = round(g * a + bg_g * (1 - a))
    out_b = round(b * a + bg_b * (1 - a))
    
    return (out_r, out_g, out_b)
`}</code>
                </pre>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-3">React with TypeScript Implementation</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm">
                  <code>{`import React, { useState } from 'react';

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface RGBA extends RGB {
  a: number;
}

const convertRgbaToRgb = (
  rgba: RGBA, 
  background: RGB = { r: 255, g: 255, b: 255 }
): RGB => {
  const { r, g, b, a } = rgba;
  
  return {
    r: Math.round(r * a + background.r * (1 - a)),
    g: Math.round(g * a + background.g * (1 - a)),
    b: Math.round(b * a + background.b * (1 - a))
  };
};

export const ColorConverter: React.FC = () => {
  const [rgba, setRgba] = useState<RGBA>({ r: 255, g: 0, b: 0, a: 0.5 });
  const [background, setBackground] = useState<RGB>({ r: 255, g: 255, b: 255 });
  
  const resultRgb = convertRgbaToRgb(rgba, background);
  
  // Component UI implementation
}`}</code>
                </pre>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-3">SCSS/SASS Mixin Implementation</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm">
                  <code>{`@function rgba-to-rgb($rgba, $background: #ffffff) {
  $r: red($rgba);
  $g: green($rgba);
  $b: blue($rgba);
  $a: alpha($rgba);
  
  $bg-r: red($background);
  $bg-g: green($background);
  $bg-b: blue($background);
  
  $result-r: round($r * $a + $bg-r * (1 - $a));
  $result-g: round($g * $a + $bg-g * (1 - $a));
  $result-b: round($b * $a + $bg-b * (1 - $a));
  
  @return rgb($result-r, $result-g, $result-b);
}

// Usage example
.semi-transparent-element {
  $original-color: rgba(255, 0, 0, 0.5);
  $fallback-color: rgba-to-rgb($original-color);
  
  color: $fallback-color; // For browsers without RGBA support
  color: $original-color; // Modern browsers
}`}</code>
                </pre>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Technical Considerations and Advanced Usage</h3>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Gamma Correction in Color Blending</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For truly accurate color blending, gamma correction should be considered. The standard alpha compositing formula assumes linear color space, but most displays use gamma-encoded colors. For professional-grade applications, converting to linear RGB, performing the blend, then converting back to gamma-encoded RGB provides more perceptually accurate results.
                </p>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm mt-3">
                  <code>{`// Simplified gamma correction for more accurate blending
function gammaCorrectBlend(r1, g1, b1, a, r2, g2, b2) {
  // Convert to linear space (approximate gamma of 2.2)
  const toLinear = c => Math.pow(c / 255, 2.2);
  
  // Convert back to gamma space
  const toGamma = c => Math.round(Math.pow(c, 1 / 2.2) * 255);
  
  // Convert to linear space
  const r1Linear = toLinear(r1);
  const g1Linear = toLinear(g1);
  const b1Linear = toLinear(b1);
  const r2Linear = toLinear(r2);
  const g2Linear = toLinear(g2);
  const b2Linear = toLinear(b2);
  
  // Blend in linear space
  const rLinear = r1Linear * a + r2Linear * (1 - a);
  const gLinear = g1Linear * a + g2Linear * (1 - a);
  const bLinear = b1Linear * a + b2Linear * (1 - a);
  
  // Convert back to gamma space
  return {
    r: toGamma(rLinear),
    g: toGamma(gLinear),
    b: toGamma(bLinear)
  };
}`}</code>
                </pre>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="text-lg font-medium mb-2">HEX Color Support</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Many design systems use hexadecimal color values rather than RGB/RGBA. Converting between these formats is often necessary for practical applications.
                </p>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm mt-3">
                  <code>{`// Convert hex to RGBA object
function hexToRgba(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b, a: alpha };
}

// Convert RGB object to hex
function rgbToHex({ r, g, b }) {
  return '#' + [r, g, b]
    .map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');
}

// Convert RGBA to hex with background blending
function rgbaToHex(rgba, background = { r: 255, g: 255, b: 255 }) {
  const rgb = rgbaToRgb(rgba.r, rgba.g, rgba.b, rgba.a, 
    background.r, background.g, background.b);
  return rgbToHex(rgb);
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Practical Applications of RGBA to RGB Conversion in Web Development</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Cross-Browser Compatibility Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  While modern browsers support RGBA colors, some legacy browsers like Internet Explorer 8 and older versions have limited support. For these browsers, providing RGB fallback values ensures consistent appearance across all platforms.
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
                  <code>{`/* CSS with fallback */
.button {
  /* RGB fallback for older browsers */
  background-color: rgb(240, 110, 140); 
  /* RGBA for modern browsers */
  background-color: rgba(255, 0, 0, 0.5);
}`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">2. Dynamic Theme Generation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When creating dynamic themes or color schemes that adapt to user preferences, RGBA to RGB conversion allows consistent color application across various UI elements, even when some require solid colors and others allow transparency.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">3. Optimizing for Print Media</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When designing for both digital and print media, RGBA to RGB conversion ensures that semi-transparent digital designs are correctly flattened for printing processes that don&apos;t support transparency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Performance Optimization in WebGL and Canvas</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In graphics-intensive applications using WebGL or Canvas, pre-converting RGBA values to RGB can reduce rendering calculations, particularly for static elements that don&apos;t require dynamic transparency.
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
                  <code>{`// Canvas optimization example
const ctx = canvas.getContext('2d');

// Less efficient: Repeatedly calculating transparency
function drawWithRGBA() {
  ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
  ctx.fillRect(10, 10, 100, 100);
}

// More efficient: Pre-calculated RGB for static elements
const optimizedColor = 'rgb(255, 128, 128)'; // Pre-calculated from rgba(255,0,0,0.5)
function drawOptimized() {
  ctx.fillStyle = optimizedColor;
  ctx.fillRect(10, 10, 100, 100);
}`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          {/* Embed this tool section */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This Professional RGBA to RGB Converter Tool on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Enhance your web development blog, design tutorial site, or educational platform with our professional-grade RGBA to RGB converter tool. Simply copy the iframe code below and paste it into your HTML document:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatorgb.com/tools/rgba-to-rgb-converter?embed=true" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGBA to RGB Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => copyCode(`<iframe src="https://rgbatorgb.com/tools/rgba-to-rgb-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to RGB Color Converter"></iframe>`)}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                {isCopied ? 'Copied' : 'Copy Code'}
              </button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Advanced Customization Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Customize the initial RGBA color values of the embedded tool using URL parameters to match your content or design examples:
            </p>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
              <li><strong>r</strong>: Red component value (0-255)</li>
              <li><strong>g</strong>: Green component value (0-255)</li>
              <li><strong>b</strong>: Blue component value (0-255)</li>
              <li><strong>a</strong>: Alpha value (0-1)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For example, to set a semi-transparent blue (rgba(0, 0, 255, 0.5)) as the initial color when loading the converter:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<iframe 
  src="https://rgbatorgb.com/tools/rgba-to-rgb-converter?embed=true&r=0&g=0&b=255&a=0.5" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGBA to RGB Color Converter - Semi-transparent Blue"
></iframe>`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Integration Examples</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Embedded in Advanced CSS Color Theory Tutorial</h4>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                <h5 className="text-md font-bold mb-4">Advanced Color Handling in CSS: From RGBA to RGB Transformation</h5>
                <p className="text-sm mb-4">In this advanced tutorial section, we&apos;ll explore the mathematical principles behind alpha compositing and how modern browsers perform color blending with transparent elements against various backgrounds.</p>
                <div className="border-l-4 border-blue-500 pl-4 py-2 mb-4 text-sm italic">
                  Use our professional converter tool below to experiment with different RGBA values and observe how they convert to RGB with various background colors. Pay special attention to how the perceived color changes with different transparency levels and backgrounds, which is crucial for creating sophisticated UI effects.
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-xs text-center">
                  [Embedded RGBA to RGB Converter Tool would appear here]
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technical Benefits of Using Our Converter</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li><strong>Mathematical Precision</strong>: Our algorithm implements correct alpha compositing formulas for accurate color conversion</li>
                <li><strong>Real-time Visualization</strong>: Instantly see how semi-transparent colors appear when flattened against different backgrounds</li>
                <li><strong>Cross-browser Compatibility</strong>: Generate solid RGB colors that work consistently across all browsers</li>
                <li><strong>Developer-friendly Output</strong>: Get ready-to-use CSS code snippets for your web projects</li>
                <li><strong>Professional Design Aid</strong>: Perfect for UI/UX designers needing to visualize transparent element effects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 