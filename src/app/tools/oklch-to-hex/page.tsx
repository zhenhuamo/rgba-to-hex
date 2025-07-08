'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function OklchToHex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Enhanced SEO */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image src="/rgb.svg" alt="OKLCH to HEX JavaScript Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Professional OKLCH to HEX Converter - JavaScript Online Tool
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Advanced online OKLCH to HEX converter tool for modern web developers and designers. Convert OKLCH (Oklab Lightness Chroma Hue) color values to HEX format with JavaScript-powered precision, real-time color preview, and instant CSS code generation for professional web development projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform OKLCH color codes to universally compatible HEX format using our professional color conversion tool. Features JavaScript implementation, CSS Color Level 4 specification support, perceptual uniformity preservation, and seamless integration into modern web applications and design systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">JavaScript Powered</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Online Converter</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">CSS Color Level 4</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Preview</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Grade</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive OKLCH to HEX Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced OKLCH to HEX color conversion tool with real-time preview, interactive sliders, and instant CSS code generation for professional web development workflows.
              </p>
              <iframe 
                src="/tools/oklch-to-hex-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="OKLCH to HEX Color Converter Tool - Convert OKLCH colors to HEX format with real-time preview"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <a
                href="/tools/oklch-to-hex-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full OKLCH to HEX Converter Tool
              </a>
            </div>
          </div>

          {/* JavaScript Code Examples Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              OKLCH to HEX JavaScript Implementation Guide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Learn how to implement OKLCH to HEX color conversion in JavaScript for your web development projects. Our professional-grade code examples provide accurate color space transformation algorithms.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-10 mb-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Complete JavaScript Function</h3>
                <div className="bg-gray-900 dark:bg-gray-800 p-6 rounded-xl overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{`/**
 * Convert OKLCH color to HEX format
 * @param {Object} oklch - OKLCH color object
 * @param {number} oklch.l - Lightness (0-1)
 * @param {number} oklch.c - Chroma (0-0.4)
 * @param {number} oklch.h - Hue (0-360)
 * @returns {string} HEX color string
 */
function oklchToHex(oklch) {
  // Convert OKLCH to RGB
  const rgb = oklchToRgb(oklch);
  
  // Convert RGB to HEX
  const r = Math.round(rgb.r * 255);
  const g = Math.round(rgb.g * 255);
  const b = Math.round(rgb.b * 255);
  
  return \`#\${r.toString(16).padStart(2, '0')}\${g.toString(16).padStart(2, '0')}\${b.toString(16).padStart(2, '0')}\`;
}

// Example usage
const oklchColor = { l: 0.628, c: 0.258, h: 29.23 };
const hexColor = oklchToHex(oklchColor);
console.log(hexColor); // #ff0000`}</code>
                  </pre>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Real-time Converter Function</h3>
                <div className="bg-gray-900 dark:bg-gray-800 p-6 rounded-xl overflow-x-auto">
                  <pre className="text-blue-400 text-sm">
                    <code>{`// Real-time OKLCH to HEX converter with validation
class OklchToHexConverter {
  static convert(l, c, h) {
    // Input validation
    if (l < 0 || l > 1) throw new Error('Lightness must be 0-1');
    if (c < 0 || c > 0.4) throw new Error('Chroma must be 0-0.4');
    if (h < 0 || h > 360) throw new Error('Hue must be 0-360');
    
    const oklch = { l, c, h };
    return this.oklchToHex(oklch);
  }
  
  static oklchToHex(oklch) {
    // Professional conversion algorithm
    const rgb = this.oklchToRgb(oklch);
    return this.rgbToHex(rgb);
  }
}

// Usage in web applications
const converter = OklchToHexConverter;
const hexResult = converter.convert(0.7, 0.15, 180);`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Integration in Modern Web Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">React Component Example</h4>
                  <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-yellow-400 text-sm">
                      <code>{`import { useState } from 'react';

function ColorConverter() {
  const [oklch, setOklch] = useState({
    l: 0.7, c: 0.15, h: 180
  });
  
  const hexColor = oklchToHex(oklch);
  
  return (
    <div style={{ backgroundColor: hexColor }}>
      <input 
        type="range" 
        min="0" max="1" step="0.01"
        value={oklch.l}
        onChange={(e) => setOklch({
          ...oklch, 
          l: parseFloat(e.target.value)
        })}
      />
      <p>HEX: {hexColor}</p>
    </div>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">CSS Integration</h4>
                  <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-cyan-400 text-sm">
                      <code>{`/* Generate CSS custom properties */
:root {
  --primary-oklch: oklch(0.7 0.15 180);
  --primary-hex: #00b4d8;
  --secondary-oklch: oklch(0.6 0.2 45);
  --secondary-hex: #e76f51;
}

.button {
  background: var(--primary-hex);
  color: white;
  transition: background 0.3s ease;
}

.button:hover {
  background: var(--secondary-hex);
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Features Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Professional OKLCH to HEX Color Converter Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Our advanced OKLCH to HEX color converter provides comprehensive color conversion capabilities for modern web development, design systems, and professional color workflows. Experience superior color accuracy and seamless integration.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Real-time OKLCH Color Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Experience instant OKLCH to HEX color transformation with live preview capabilities. Our JavaScript-powered converter ensures accurate color space conversion for professional web development projects, maintaining OKLCH color integrity throughout the process.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Advanced OKLCH Color Space Support</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH color format provides superior perceptual uniformity and wider color gamut compared to traditional RGB/HSL spaces. Convert these advanced OKLCH colors to universally supported HEX format while preserving color accuracy and visual consistency.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Cross-Browser HEX Compatibility</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert modern OKLCH colors to HEX format for universal browser support. Ensure your OKLCH color designs work across all browsers and devices while maintaining the superior color accuracy benefits of OKLCH color space calculations.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Interactive OKLCH Color Controls</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Adjust OKLCH color values using intuitive sliders with real-time visual feedback. Fine-tune lightness, chroma, and hue parameters while observing instant HEX color conversion results and live color preview updates.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Production-Ready HEX Code Generation</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generate clean, production-ready CSS HEX color codes with proper formatting. One-click copy functionality enables seamless integration of converted OKLCH colors into web development projects and design system workflows.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Bidirectional OKLCH-HEX Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert both OKLCH to HEX and HEX to OKLCH with equal precision and accuracy. Switch conversion directions seamlessly for flexible color workflow management and comprehensive OKLCH color space exploration.
                </p>
              </div>
            </div>
          </div>

          {/* Color Examples Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Complete OKLCH to HEX Color Conversion Examples and Guide
            </h2>
            
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Primary Color OKLCH to HEX Conversion Examples
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Understanding how OKLCH colors translate to HEX format is fundamental for designers and developers working with modern color systems. These examples demonstrate the precision and consistency of HEX color representation from advanced OKLCH values.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-red-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Vibrant Red</h4>
                      <p className="text-gray-600 dark:text-gray-300">OKLCH red primary color</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.628 0.258 29.23)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HEX Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">#ff0000</code>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-green-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Green</h4>
                      <p className="text-gray-600 dark:text-gray-300">OKLCH green primary color</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.866 0.295 142.5)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HEX Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">#00ff00</code>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Blue</h4>
                      <p className="text-gray-600 dark:text-gray-300">OKLCH blue primary color</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.452 0.313 264.05)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HEX Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">#0000ff</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Guide Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              OKLCH to HEX Conversion Technical Guide
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h3 className="text-2xl font-semibold mb-6">Understanding OKLCH Color Space</h3>
              <p className="mb-6">
                OKLCH (Oklab Lightness Chroma Hue) is a modern color space designed for better perceptual uniformity. 
                It consists of three components: Lightness (0-1), Chroma (0-0.4), and Hue (0-360°). 
                This color space provides more predictable color adjustments and better color harmony compared to traditional RGB-based spaces.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6">Conversion Process</h3>
              <p className="mb-6">
                Converting OKLCH to HEX involves a multi-step process: OKLCH → Oklab → XYZ → Linear RGB → sRGB → HEX. 
                Our converter handles all these transformations automatically while maintaining color accuracy and precision.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6">Best Practices</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Use OKLCH for color manipulation and calculations</li>
                <li>Convert to HEX for final implementation and browser compatibility</li>
                <li>Test converted colors across different devices and displays</li>
                <li>Consider color gamut limitations when working with wide-gamut OKLCH colors</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              OKLCH to HEX Converter - Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How do I convert OKLCH to HEX using JavaScript?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Converting OKLCH to HEX in JavaScript requires implementing the color space transformation algorithm. Our tool provides ready-to-use JavaScript functions that handle the complex mathematical calculations. You can use our <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">oklchToHex()</code> function which takes an OKLCH object with lightness (0-1), chroma (0-0.4), and hue (0-360) values and returns a properly formatted HEX color string.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <code className="text-sm">const hexColor = oklchToHex(&#123;l: 0.7, c: 0.15, h: 180&#125;); // Returns #00b4d8</code>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What are the advantages of OKLCH color over traditional color formats?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH color format offers superior perceptual uniformity, meaning equal numerical changes produce equal visual changes across all hues. Unlike HSL where blue appears darker than yellow at the same lightness value, OKLCH maintains consistent perceived brightness. This makes OKLCH ideal for creating color palettes, gradients, and accessibility-compliant designs. When converted to HEX format, these benefits are preserved while ensuring universal browser compatibility.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Is the OKLCH to HEX conversion accurate across all color values?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our OKLCH to HEX converter uses industry-standard color science algorithms to ensure high accuracy across the entire color spectrum. The conversion process follows the CSS Color Level 4 specification and handles color gamut mapping appropriately. However, some extremely wide-gamut OKLCH colors may be slightly adjusted when converted to the sRGB color space used by HEX format. Our tool provides visual feedback to help you identify any such adjustments.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Can I use OKLCH colors directly in CSS, or do I need to convert to HEX?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Modern browsers (Safari 15.4+, Chrome 111+, Firefox 113+) support OKLCH colors directly in CSS using the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">oklch()</code> function. However, for maximum browser compatibility and legacy support, converting OKLCH to HEX format ensures your colors work everywhere. Our converter allows you to use OKLCH for design decisions while generating HEX codes for implementation.
                </p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How can I integrate this OKLCH to HEX converter into my web application?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  You can integrate OKLCH to HEX conversion into your web application using our provided JavaScript functions. The converter supports both real-time conversion for interactive applications and batch processing for design systems. For React applications, you can create controlled components that update HEX values as users modify OKLCH sliders. Our code examples demonstrate integration patterns for popular frameworks and vanilla JavaScript implementations.
                </p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What is the performance impact of OKLCH to HEX conversion in real-time applications?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH to HEX conversion involves mathematical calculations that are computationally lightweight for modern browsers. Our optimized algorithms can perform thousands of conversions per second without noticeable performance impact. For applications requiring extremely high-frequency conversions, consider implementing caching mechanisms or using Web Workers for batch processing. The conversion process is significantly faster than network requests and comparable to other color space transformations.
                </p>
              </div>
            </div>
          </div>

          {/* Related Tools Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Related Color Conversion Tools
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/tools/hsl-to-oklch" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">HSL to OKLCH</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Convert HSL colors to modern OKLCH format</p>
              </a>
              
              <a href="/tools/rgb-to-lab" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">RGB to LAB</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Convert RGB colors to LAB color space</p>
              </a>
              
              <a href="/tools/hex-to-hsl" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">HEX to HSL</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Convert HEX colors to HSL format</p>
              </a>
              
              <a href="/tools/color-converter" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Universal Converter</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Convert between all color formats</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 