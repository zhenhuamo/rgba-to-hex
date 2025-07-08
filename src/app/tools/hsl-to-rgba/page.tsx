'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function HslToRgba() {
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
              <Image src="/rgb.svg" alt="HSL to RGBA Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                HSL to RGBA Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online HSL to RGBA color converter tool for web development. Convert HSL (Hue, Saturation, Lightness) color values to RGBA (Red, Green, Blue, Alpha) format with transparency control, real-time preview, and instant CSS code generation. Perfect for JavaScript development, CSS preprocessing, and modern web design workflows.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform HSL color codes to RGBA format with precise alpha channel control for transparency effects, background overlays, dark mode themes, and modern web design. Includes JavaScript implementation examples, CSS usage patterns, and professional development tools for responsive design and cross-browser compatibility.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">JavaScript Ready</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">CSS Integration</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Dark Mode Support</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Professional Algorithm</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Cross-Browser Compatible</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive HSL to RGBA Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced HSL to RGBA color conversion tool with real-time transparency preview, interactive sliders, and instant CSS code generation for professional web development projects.
              </p>
              <iframe 
                src="/tools/hsl-to-rgba-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="HSL to RGBA Color Converter Tool - Convert HSL colors to RGBA format with alpha transparency"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <a
                href="/tools/hsl-to-rgba-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full HSL to RGBA Converter Tool
              </a>
            </div>
          </div>

          {/* Comprehensive Features Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Why Choose Our Professional HSL to RGBA Color Converter?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Our HSL to RGBA color converter offers the most comprehensive and accurate tool for web developers, designers, and color professionals who need precise transparency control and reliable color conversion workflows.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Real-time HSL to RGBA Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Experience instant HSL to RGBA color conversion with live transparency preview. Our advanced algorithms ensure accurate color space transformation while preserving color integrity throughout the conversion process for professional web development.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Alpha Transparency Control</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Precise alpha channel control with interactive transparency slider. Visualize transparency effects with checkerboard background preview, perfect for creating overlay elements, modal backgrounds, and modern UI components.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">CSS Ready Code Generation</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generate clean, production-ready CSS code with proper RGBA syntax formatting. One-click copy functionality enables seamless integration into web development projects, design systems, and CSS frameworks.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Interactive Color Controls</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Adjust HSL values using intuitive sliders with real-time visual feedback. Fine-tune hue, saturation, and lightness parameters while observing instant RGBA conversion results with transparency preview.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Cross-Browser Compatibility</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generate RGBA color codes with excellent cross-browser compatibility. Support for all modern browsers and legacy browser fallbacks, ensuring consistent color rendering across different platforms and devices.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Bidirectional Color Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert both HSL to RGBA and RGBA to HSL with equal precision and accuracy. Switch conversion directions seamlessly for flexible color workflow management and comprehensive color space exploration.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Color Examples and Conversion Guide */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Professional HSL to RGBA Examples & Dark Theme Implementation
            </h2>
            
            {/* Primary Colors Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Modern Dark Theme Color Palette Examples
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Professional dark theme implementation using HSL to RGBA conversion for creating sophisticated user interfaces. These examples demonstrate precise color control for modern web applications, accessibility compliance, and cross-platform consistency.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Dark Blue Theme */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl shadow-lg" style={{ backgroundColor: 'hsla(220, 70%, 35%, 0.9)' }}></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Dark Blue Primary</h4>
                      <p className="text-gray-600 dark:text-gray-300">Professional dark theme</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(220, 70%, 35%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">RGBA Output (0.9 Alpha)</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">rgba(27, 67, 148, 0.9)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">CSS Application</p>
                      <code className="text-xs font-mono text-gray-800 dark:text-white">
                        background: hsla(220, 70%, 35%, 0.9);<br/>
                        backdrop-filter: blur(10px);
                      </code>
                    </div>
                  </div>
                </div>
                
                {/* Dark Purple Theme */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl shadow-lg" style={{ backgroundColor: 'hsla(260, 60%, 40%, 0.85)' }}></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Dark Purple Accent</h4>
                      <p className="text-gray-600 dark:text-gray-300">Modern UI components</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(260, 60%, 40%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">RGBA Output (0.85 Alpha)</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">rgba(81, 41, 163, 0.85)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">JavaScript Usage</p>
                      <code className="text-xs font-mono text-gray-800 dark:text-white">
                        hslToRgba(260, 60, 40, 0.85)
                      </code>
                    </div>
                  </div>
                </div>
                
                {/* Dark Green Theme */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl shadow-lg" style={{ backgroundColor: 'hsla(140, 50%, 30%, 0.8)' }}></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Dark Green Success</h4>
                      <p className="text-gray-600 dark:text-gray-300">Status indicators</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(140, 50%, 30%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">RGBA Output (0.8 Alpha)</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">rgba(38, 115, 61, 0.8)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">React/Vue Usage</p>
                      <code className="text-xs font-mono text-gray-800 dark:text-white">
                        style=&#123;&#123;backgroundColor: &apos;hsla(140, 50%, 30%, 0.8)&apos;&#125;&#125;
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-world Application Examples */}
            <div className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-8 rounded-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Real-World Application Scenarios
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Modal Overlays & Backdrops</h4>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                    <div className="bg-gray-900 p-4 rounded-lg text-blue-400 text-sm mb-4">
                      <pre>{`/* Modal backdrop with HSL to RGBA */
.modal-backdrop {
  background: hsla(0, 0%, 0%, 0.75);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}

.modal-backdrop.dark-theme {
  background: hsla(220, 20%, 5%, 0.9);
  backdrop-filter: blur(8px);
}

/* JavaScript implementation */
function createModalBackdrop(isDark = false) {
  const alpha = isDark ? 0.9 : 0.75;
  const hsl = isDark ? [220, 20, 5] : [0, 0, 0];
  return hslToRgba(...hsl, alpha);
}`}</pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Perfect for creating professional modal dialogs with accessible contrast ratios and smooth animations.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Card Interfaces & Glassmorphism</h4>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                    <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm mb-4">
                      <pre>{`/* Glassmorphism cards */
.glass-card {
  background: hsla(220, 30%, 98%, 0.1);
  border: 1px solid hsla(220, 30%, 80%, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px hsla(220, 30%, 0%, 0.1);
}

.glass-card.dark {
  background: hsla(220, 30%, 10%, 0.3);
  border: 1px solid hsla(220, 30%, 40%, 0.3);
  box-shadow: 0 8px 32px hsla(220, 30%, 0%, 0.5);
}`}</pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Modern glassmorphism design with precise transparency control for elegant UI components.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Color Theory Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Advanced Color Theory & Accessibility
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">WCAG Compliance</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: 'hsla(220, 70%, 35%, 1.0)' }}></div>
                      <div>
                        <code className="text-xs">AA: 4.5:1</code>
                        <p className="text-xs text-gray-500">hsla(220, 70%, 35%, 1.0)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: 'hsla(220, 80%, 25%, 1.0)' }}></div>
                      <div>
                        <code className="text-xs">AAA: 7:1</code>
                        <p className="text-xs text-gray-500">hsla(220, 80%, 25%, 1.0)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Color Harmony</h4>
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: 'hsla(220, 70%, 40%, 0.8)' }}></div>
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: 'hsla(260, 70%, 40%, 0.8)' }}></div>
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: 'hsla(180, 70%, 40%, 0.8)' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Triadic color scheme</p>
                    <code className="text-xs">hsl(220°), hsl(260°), hsl(180°)</code>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Responsive Alpha</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsla(220, 70%, 40%, 0.5)' }}></div>
                        <span className="text-xs">Mobile: α = 0.5</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsla(220, 70%, 40%, 0.7)' }}></div>
                        <span className="text-xs">Tablet: α = 0.7</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsla(220, 70%, 40%, 0.9)' }}></div>
                        <span className="text-xs">Desktop: α = 0.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Implementation Details */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Professional JavaScript & CSS Implementation Guide
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">JavaScript HSL to RGBA Algorithm</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Professional-grade JavaScript implementation for precise HSL to RGBA color conversion with full alpha channel support and error handling.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Complete JavaScript Function:</h4>
                  <pre className="text-sm overflow-x-auto bg-gray-900 text-green-400 p-4 rounded-lg">
{`function hslToRgba(h, s, l, a = 1) {
  // Normalize inputs
  h = h % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;
  a = Math.max(0, Math.min(1, a));
  
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  
  let r, g, b;
  
  if (h >= 0 && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (h >= 60 && h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (h >= 120 && h < 180) {
    [r, g, b] = [0, c, x];
  } else if (h >= 180 && h < 240) {
    [r, g, b] = [0, x, c];
  } else if (h >= 240 && h < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a
  };
}

// Usage examples
const color1 = hslToRgba(240, 100, 50, 0.8);
// Returns: {r: 0, g: 0, b: 255, a: 0.8}

const color2 = hslToRgba(0, 100, 50, 0.6);
// Returns: {r: 255, g: 0, b: 0, a: 0.6}`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Advanced CSS Applications</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Professional CSS implementation patterns for modern web development, including dark mode support and responsive design.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Professional CSS Examples:</h4>
                  <pre className="text-sm overflow-x-auto bg-gray-900 text-blue-400 p-4 rounded-lg">
{`/* Dark Mode Theme Variables */
:root {
  --primary-hsl: 240, 100%, 50%;
  --surface-alpha: 0.1;
  --overlay-alpha: 0.8;
}

[data-theme="dark"] {
  --primary-hsl: 240, 80%, 60%;
  --surface-alpha: 0.05;
  --overlay-alpha: 0.9;
}

/* Dynamic RGBA from HSL */
.card {
  background: hsla(var(--primary-hsl), var(--surface-alpha));
  backdrop-filter: blur(10px);
  border: 1px solid hsla(var(--primary-hsl), 0.2);
}

/* Responsive Transparency */
.overlay {
  background: hsla(0, 0%, 0%, var(--overlay-alpha));
}

@media (max-width: 768px) {
  .overlay {
    --overlay-alpha: 0.95;
  }
}

/* CSS Custom Properties with HSL */
.button {
  --hue: 200;
  --saturation: 70%;
  --lightness: 50%;
  
  background: hsl(var(--hue), var(--saturation), var(--lightness));
  border: 2px solid hsla(var(--hue), var(--saturation), 
                         calc(var(--lightness) - 10%), 0.8);
}

.button:hover {
  --lightness: 45%;
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Dark Mode Implementation Section */}
            <div className="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Dark Mode & Theme Implementation with HSL to RGBA
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                HSL to RGBA conversion is essential for creating sophisticated dark mode themes and adaptive color systems in modern web applications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Dynamic Theme Switching</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm">
                    <pre>{`// Dynamic theme color calculation
function getThemeColor(hue, isDark = false) {
  const saturation = isDark ? 60 : 80;
  const lightness = isDark ? 35 : 55;
  const alpha = isDark ? 0.9 : 0.8;
  
  return hslToRgba(hue, saturation, lightness, alpha);
}

// Theme system
const themes = {
  light: {
    primary: getThemeColor(220, false),
    surface: getThemeColor(220, false, 0.1),
    overlay: getThemeColor(0, false, 0.7)
  },
  dark: {
    primary: getThemeColor(220, true),
    surface: getThemeColor(220, true, 0.05),
    overlay: getThemeColor(0, true, 0.9)
  }
};`}</pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Adaptive Color Palettes</h4>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Light Theme Primary</p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'hsla(220, 80%, 55%, 0.8)' }}></div>
                        <code className="text-sm">hsla(220, 80%, 55%, 0.8)</code>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Dark Theme Primary</p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'hsla(220, 60%, 35%, 0.9)' }}></div>
                        <code className="text-sm">hsla(220, 60%, 35%, 0.9)</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Optimization Section */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Performance Optimization & Browser Compatibility
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Optimized Conversion Function</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm">
                    <pre>{`// Optimized for performance
const hslToRgbaFast = (() => {
  const cache = new Map();
  
  return function(h, s, l, a = 1) {
    const key = \`\${h},\${s},\${l},\${a}\`;
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    // Calculation logic here...
    const result = calculateHslToRgba(h, s, l, a);
    
    if (cache.size > 1000) {
      cache.clear(); // Prevent memory leaks
    }
    
    cache.set(key, result);
    return result;
  };
})();`}</pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Cross-Browser Support</h4>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Modern Browsers (Chrome 111+, Firefox 113+)</h5>
                      <code className="text-sm">rgba(255, 0, 0, 0.8)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Legacy Support (IE11+)</h5>
                      <code className="text-sm">background: rgb(255, 0, 0); /* fallback */</code><br/>
                      <code className="text-sm">background: rgba(255, 0, 0, 0.8);</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Progressive Enhancement</h5>
                      <code className="text-sm">filter: alpha(opacity=80); /* IE8-9 */</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Tools Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Related Color Conversion Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/tools/rgba-to-hex" className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">RGBA to HEX</h3>
                <p className="text-gray-600 dark:text-gray-300">Convert RGBA colors to HEX format</p>
              </Link>
              
              <Link href="/tools/hsl-to-hex" className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">HSL to HEX</h3>
                <p className="text-gray-600 dark:text-gray-300">Convert HSL colors to HEX format</p>
              </Link>
              
              <Link href="/tools/hsl-to-rgb" className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">HSL to RGB</h3>
                <p className="text-gray-600 dark:text-gray-300">Convert HSL colors to RGB format</p>
              </Link>
              
              <Link href="/tools/color-converter" className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">All Converters</h3>
                <p className="text-gray-600 dark:text-gray-300">Browse all color conversion tools</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 