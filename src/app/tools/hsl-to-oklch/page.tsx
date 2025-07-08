'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function HslToOklch() {
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
              <Image src="/rgb.svg" alt="HSL to OKLCH Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                HSL to OKLCH Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online HSL to OKLCH color converter tool for modern web development. Convert HSL (Hue, Saturation, Lightness) color values to OKLCH (Oklab Lightness Chroma Hue) format with precision, accuracy, and real-time preview capabilities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform traditional HSL color codes to the advanced OKLCH color space, supporting CSS Color Level 4 specifications for better perceptual uniformity, wider color gamut coverage, and superior color manipulation in modern web applications and design systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">CSS Color Level 4</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Perceptual Uniformity</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Wide Gamut Support</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Conversion</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Grade</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive HSL to OKLCH Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced HSL to OKLCH color conversion tool with real-time preview, interactive sliders, and instant CSS code generation for professional web development workflows.
              </p>
              <iframe 
                src="/tools/hsl-to-oklch-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="HSL to OKLCH Color Converter Tool - Convert HSL colors to OKLCH format with real-time preview"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <a
                href="/tools/hsl-to-oklch-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full HSL to OKLCH Converter Tool
              </a>
            </div>
          </div>

          {/* Comprehensive Features Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Why Choose Our Professional HSL to OKLCH Color Converter?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Our HSL to OKLCH color converter stands out as the most comprehensive and accurate tool for modern web developers, designers, and color professionals who demand precision and reliability in their color conversion workflows.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Real-time HSL to OKLCH Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Experience instant HSL to OKLCH color conversion with live preview capabilities. Our advanced color science algorithms ensure accurate color space transformation for professional web development projects, maintaining color integrity throughout the conversion process.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Perceptually Uniform Color Space</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH provides superior perceptual uniformity compared to traditional HSL color space, ensuring consistent lightness perception across all hues. This advancement enables more predictable color adjustments and better color harmony in design systems.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">CSS Color Level 4 Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generate OKLCH color codes fully compatible with CSS Color Level 4 specifications, enabling advanced color manipulation features in modern browsers. Support for wider color gamuts and improved color mixing capabilities.
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
                  Adjust HSL values using intuitive sliders with real-time visual feedback. Fine-tune hue, saturation, and lightness parameters while observing instant OKLCH conversion results and color preview updates.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Production-Ready CSS Code</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generate clean, production-ready CSS code with proper OKLCH syntax formatting. One-click copy functionality enables seamless integration into web development projects and design system workflows.
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
                  Convert both HSL to OKLCH and OKLCH to HSL with equal precision and accuracy. Switch conversion directions seamlessly for flexible color workflow management and comprehensive color space exploration.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Color Examples and Conversion Guide */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Complete HSL to OKLCH Color Conversion Examples and Guide
            </h2>
            
            {/* Primary Colors Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Primary Color HSL to OKLCH Conversion Examples
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Understanding how primary colors translate from HSL to OKLCH color space is fundamental for designers and developers working with modern color systems. These examples demonstrate the precision and consistency of OKLCH color representation compared to traditional HSL values.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-red-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Red</h4>
                      <p className="text-gray-600 dark:text-gray-300">Vibrant red primary color</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(0, 100%, 50%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.628 0.258 29.23)</code>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-green-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Green</h4>
                      <p className="text-gray-600 dark:text-gray-300">Vibrant green primary color</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(120, 100%, 50%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.867 0.295 142.5)</code>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Blue</h4>
                      <p className="text-gray-600 dark:text-gray-300">Vibrant blue primary color</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(240, 100%, 50%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.452 0.313 264.1)</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lightness and Saturation Variations */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                HSL Lightness and Saturation to OKLCH Parameter Mapping
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Explore how different HSL lightness and saturation values translate to OKLCH parameters, demonstrating the perceptual advantages and superior color consistency of the OKLCH color space for professional color manipulation and design system development.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white">Lightness Variations (Red Hue)</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Observe how HSL lightness changes affect OKLCH lightness and chroma values, maintaining consistent hue representation across different brightness levels.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-red-900 shadow-md"></div>
                      <div className="flex-1">
                        <div className="text-lg font-mono text-gray-800 dark:text-white mb-2">hsl(0, 100%, 25%) → oklch(0.418 0.193 29.23)</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Dark red with high chroma intensity</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-red-500 shadow-md"></div>
                      <div className="flex-1">
                        <div className="text-lg font-mono text-gray-800 dark:text-white mb-2">hsl(0, 100%, 50%) → oklch(0.628 0.258 29.23)</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Medium red with optimal chroma balance</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-red-300 shadow-md"></div>
                      <div className="flex-1">
                        <div className="text-lg font-mono text-gray-800 dark:text-white mb-2">hsl(0, 100%, 75%) → oklch(0.796 0.155 29.23)</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Light red with reduced chroma</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white">Saturation Variations (Blue Hue)</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Understand how HSL saturation changes translate to OKLCH chroma values, demonstrating the superior color intensity control in the OKLCH color space.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gray-500 shadow-md"></div>
                      <div className="flex-1">
                        <div className="text-lg font-mono text-gray-800 dark:text-white mb-2">hsl(240, 0%, 50%) → oklch(0.567 0.000 0)</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Grayscale with zero chroma</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                      <div className="w-12 h-12 rounded-lg shadow-md" style={{backgroundColor: 'hsl(240, 50%, 50%)'}}></div>
                      <div className="flex-1">
                        <div className="text-lg font-mono text-gray-800 dark:text-white mb-2">hsl(240, 50%, 50%) → oklch(0.567 0.129 264.1)</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Muted blue with moderate chroma</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-blue-500 shadow-md"></div>
                      <div className="flex-1">
                        <div className="text-lg font-mono text-gray-800 dark:text-white mb-2">hsl(240, 100%, 50%) → oklch(0.452 0.313 264.1)</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Vivid blue with maximum chroma</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding OKLCH Color Space */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Understanding the OKLCH Color Model for Modern Web Development
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              OKLCH (Oklab Lightness Chroma Hue) represents a revolutionary advancement in digital color representation, offering superior perceptual uniformity, better color mixing capabilities, and more predictable color manipulation compared to traditional HSL color space for modern web development and design applications.
            </p>
            
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-black via-gray-500 to-white"></div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Lightness (L)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Range: 0-1</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH lightness provides perceptually uniform brightness control across all hues. Unlike HSL lightness, OKLCH ensures that a lightness value of 0.5 appears as true middle gray regardless of hue, making color adjustments more predictable and consistent for professional design workflows.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-400 via-red-400 to-red-600"></div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Chroma (C)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Range: 0-0.4+</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Chroma represents color intensity or vividness in the OKLCH color space. Zero chroma produces grayscale colors, while higher values create more saturated, vibrant colors. The maximum chroma varies naturally by hue and lightness, allowing for realistic color gamut boundaries.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Hue (H)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Range: 0-360°</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hue angle determines the color type on the color wheel, similar to HSL hue but with improved chroma consistency and better color harmony relationships. OKLCH hue provides more uniform color distribution and superior color mixing results.
                </p>
              </div>
            </div>

            {/* OKLCH vs HSL Comparison */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-10 rounded-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
                OKLCH vs HSL: Comprehensive Comparison for Modern Web Development
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
                Understanding the key differences between OKLCH and HSL color spaces is crucial for making informed decisions about color implementation in modern web applications and design systems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white flex items-center">
                    <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    OKLCH Advantages
                  </h4>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Perceptually uniform lightness across all hues for consistent color relationships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Superior color mixing and interpolation results for gradient generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Wider color gamut support for modern high-resolution displays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>CSS Color Level 4 specification compliance for future-proof development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>More predictable color adjustments and systematic color variations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Better accessibility compliance through consistent contrast ratios</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white flex items-center">
                    <svg className="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    HSL Limitations
                  </h4>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Inconsistent perceived lightness across different hues causing visual imbalance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Limited color gamut coverage for wide-gamut displays and modern devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Poor color mixing results in certain hue combinations and gradients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Saturation parameter doesn&apos;t correlate well with visual color intensity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Difficulty achieving consistent color relationships in design systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>Unpredictable results when creating color variations and themes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Practical CSS Implementation Guide */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Practical CSS Implementation: HSL to OKLCH Migration Guide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              Learn how to implement OKLCH colors in your CSS workflow, migrate from HSL to OKLCH for better color consistency, and leverage modern browser support for enhanced color manipulation capabilities in professional web development projects.
            </p>

            {/* Modern CSS Color System */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Building a Modern CSS Color System with OKLCH
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Transform your HSL-based color system to OKLCH for improved color consistency, better accessibility compliance, and future-proof CSS that leverages the latest color science advancements and browser capabilities.
              </p>
              <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
                <pre className="text-sm text-gray-100 leading-relaxed">
                  <code>{`:root {
  /* Traditional HSL Color System - Legacy Approach */
  --primary-hsl: hsl(240, 100%, 50%);        /* Blue */
  --primary-light-hsl: hsl(240, 100%, 75%);  /* Light Blue */
  --primary-dark-hsl: hsl(240, 100%, 25%);   /* Dark Blue */
  
  /* Modern OKLCH Color System - Superior Perceptual Uniformity */
  --primary: oklch(0.452 0.313 264.1);       /* Equivalent blue with precise control */
  --primary-light: oklch(0.75 0.15 264.1);   /* Lighter variant with consistent hue */
  --primary-dark: oklch(0.25 0.25 264.1);    /* Darker variant with adjusted chroma */
  
  /* Advanced OKLCH Color Variations for Design Systems */
  --primary-subtle: oklch(0.95 0.02 264.1);  /* Very light tint for backgrounds */
  --primary-muted: oklch(0.6 0.08 264.1);    /* Muted version for secondary elements */
  --primary-intense: oklch(0.5 0.35 264.1);  /* High chroma for accent elements */
  --primary-accessible: oklch(0.4 0.2 264.1); /* WCAG compliant variant */
  
  /* Complementary Colors with OKLCH Precision */
  --secondary: oklch(0.7 0.15 84.1);         /* Complementary yellow-green */
  --accent: oklch(0.65 0.25 24.1);           /* Warm accent color */
  --success: oklch(0.7 0.18 142.5);          /* Success green */
  --warning: oklch(0.8 0.15 85.2);           /* Warning yellow */
  --error: oklch(0.6 0.22 29.2);             /* Error red */
  
  /* Grayscale with Consistent Lightness Perception */
  --gray-50: oklch(0.98 0.005 264.1);        /* Near white with subtle blue tint */
  --gray-100: oklch(0.95 0.01 264.1);
  --gray-200: oklch(0.9 0.015 264.1);
  --gray-300: oklch(0.8 0.02 264.1);
  --gray-400: oklch(0.7 0.02 264.1);
  --gray-500: oklch(0.5 0.02 264.1);         /* True perceptual middle gray */
  --gray-600: oklch(0.4 0.02 264.1);
  --gray-700: oklch(0.3 0.015 264.1);
  --gray-800: oklch(0.2 0.015 264.1);
  --gray-900: oklch(0.1 0.01 264.1);         /* Near black with subtle tint */
  
  /* Semantic Color Tokens */
  --surface: oklch(0.98 0.005 264.1);
  --surface-variant: oklch(0.92 0.01 264.1);
  --on-surface: oklch(0.15 0.01 264.1);
  --on-surface-variant: oklch(0.4 0.02 264.1);
}`}</code>
                </pre>
              </div>
            </div>

            {/* Advanced Color Mixing */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Advanced Color Mixing with CSS color-mix() and OKLCH
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Leverage CSS Color Level 5&apos;s color-mix() function with OKLCH for superior color blending results, more natural color transitions, and better color harmony compared to traditional HSL mixing approaches.
              </p>
              <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
                <pre className="text-sm text-gray-100 leading-relaxed">
                  <code>{`/* Advanced Color Mixing with OKLCH for Interactive Elements */
.button {
  /* Base color using OKLCH for consistent appearance */
  background-color: var(--primary);
  color: var(--on-surface);
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  
  /* Hover state with perceptually uniform lightening */
  &:hover {
    background-color: color-mix(in oklch, var(--primary) 80%, oklch(1 0 0));
    border-color: color-mix(in oklch, var(--primary) 60%, oklch(1 0 0));
  }
  
  /* Active state with consistent darkening */
  &:active {
    background-color: color-mix(in oklch, var(--primary) 70%, oklch(0 0 0));
    transform: translateY(1px);
  }
  
  /* Focus state with enhanced chroma */
  &:focus-visible {
    outline: 3px solid color-mix(in oklch, var(--primary) 50%, oklch(0.8 0.3 264.1));
    outline-offset: 2px;
  }
  
  /* Disabled state with desaturated appearance */
  &:disabled {
    background-color: color-mix(in oklch, var(--primary) 30%, var(--gray-500));
    color: color-mix(in oklch, var(--on-surface) 40%, transparent);
    cursor: not-allowed;
  }
}

/* Dynamic Theme Colors with OKLCH Mixing */
.theme-warm {
  --primary-mixed: color-mix(in oklch, var(--primary) 85%, oklch(0.7 0.15 45));
  --accent-mixed: color-mix(in oklch, var(--accent) 90%, oklch(0.8 0.2 30));
}

.theme-cool {
  --primary-mixed: color-mix(in oklch, var(--primary) 85%, oklch(0.7 0.15 200));
  --accent-mixed: color-mix(in oklch, var(--accent) 90%, oklch(0.6 0.18 220));
}

.theme-monochrome {
  --primary-mixed: color-mix(in oklch, var(--primary) 20%, var(--gray-600));
  --accent-mixed: color-mix(in oklch, var(--accent) 15%, var(--gray-700));
}

/* Sophisticated Gradients with OKLCH */
.gradient-background {
  background: linear-gradient(135deg, 
    oklch(0.7 0.15 264.1) 0%,
    oklch(0.6 0.2 280.1) 25%,
    oklch(0.5 0.25 296.1) 50%,
    oklch(0.4 0.2 312.1) 75%,
    oklch(0.3 0.15 328.1) 100%
  );
}

/* Color Animations with Smooth OKLCH Transitions */
@keyframes colorShift {
  0% { background-color: oklch(0.6 0.2 0); }
  25% { background-color: oklch(0.6 0.2 90); }
  50% { background-color: oklch(0.6 0.2 180); }
  75% { background-color: oklch(0.6 0.2 270); }
  100% { background-color: oklch(0.6 0.2 360); }
}`}</code>
                </pre>
              </div>
            </div>

            {/* Browser Support and Progressive Enhancement */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-10 rounded-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Browser Support and Progressive Enhancement Strategy
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Implement OKLCH colors with proper fallbacks for maximum browser compatibility while providing enhanced experiences for modern browsers that support CSS Color Level 4 specifications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white">Current Browser Support Status</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">C</span>
                        </div>
                        <span className="font-medium">Chrome</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-semibold">111+ ✅</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">F</span>
                        </div>
                        <span className="font-medium">Firefox</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-semibold">113+ ✅</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <span className="font-medium">Safari</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-semibold">15.4+ ✅</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">E</span>
                        </div>
                        <span className="font-medium">Edge</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-semibold">111+ ✅</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white">Progressive Enhancement Implementation</h4>
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-xs text-gray-100 leading-relaxed">
                      <code>{`.modern-button {
  /* Fallback for older browsers */
  background-color: #3b82f6;
  
  /* HSL fallback for better support */
  background-color: hsl(217, 91%, 60%);
  
  /* OKLCH for modern browsers */
  background-color: oklch(0.6 0.15 264.1);
}

/* Feature detection with @supports */
@supports (color: oklch(0.5 0.2 180)) {
  .enhanced-colors {
    /* Use OKLCH for enhanced experience */
    --primary: oklch(0.6 0.15 264.1);
    --secondary: oklch(0.7 0.12 120);
    --accent: oklch(0.65 0.2 45);
  }
  
  .color-transitions {
    transition: background-color 0.3s ease;
  }
  
  .color-transitions:hover {
    background-color: color-mix(
      in oklch, 
      var(--primary) 80%, 
      oklch(1 0 0)
    );
  }
}

/* Graceful degradation */
@supports not (color: oklch(0.5 0.2 180)) {
  .fallback-colors {
    /* Use HSL with careful lightness matching */
    --primary: hsl(217, 91%, 60%);
    --secondary: hsl(120, 76%, 60%);
    --accent: hsl(45, 85%, 65%);
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Frequently Asked Questions: HSL to OKLCH Color Conversion
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What is the main advantage of converting HSL to OKLCH for web development?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  The primary advantage is perceptual uniformity and consistency. OKLCH provides uniform lightness perception across all hues, making color adjustments more predictable and reliable. Unlike HSL, where 50% lightness appears different across various hues, OKLCH ensures that a lightness value of 0.5 appears as true middle gray regardless of the hue, enabling more consistent design systems and better color accessibility.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Is OKLCH supported in all modern browsers and how should I handle compatibility?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH is supported in Chrome 111+, Firefox 113+, Safari 15.4+, and Edge 111+, covering the vast majority of modern browser usage. For broader compatibility, implement progressive enhancement with HSL or hex fallbacks. Use CSS feature detection with @supports to provide enhanced experiences for modern browsers while maintaining compatibility with older ones through graceful degradation strategies.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How accurate is the HSL to OKLCH conversion and what algorithms are used?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our HSL to OKLCH converter uses industry-standard color science algorithms with high precision and accuracy. The conversion process involves multiple color space transformations (HSL → RGB → XYZ → Oklab → OKLCH) with proper gamma correction, D65 illuminant standards, and mathematical precision to ensure professional-grade accuracy suitable for production web development and design applications.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Can I use OKLCH for print design projects or is it only for digital displays?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH is primarily designed for digital displays and web applications where it provides superior color consistency and wider gamut support. For print design, CMYK color space remains the industry standard. However, you can use OKLCH for digital design work and then convert to appropriate print color spaces during the production process. Always consult with your print provider for specific color space requirements and color management workflows.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How does OKLCH improve accessibility and WCAG compliance compared to HSL?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH&apos;s perceptual uniformity makes it significantly easier to maintain consistent contrast ratios across different hues, which is crucial for WCAG accessibility compliance. The lightness component in OKLCH correlates better with human perception, making it simpler to create color palettes that meet WCAG AA and AAA guidelines while maintaining visual harmony and brand consistency across your design system.
                </p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What&apos;s the performance impact of using OKLCH in CSS and JavaScript applications?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Modern browsers handle OKLCH colors efficiently with minimal performance impact. The conversion from OKLCH to display colors happens at the browser level using optimized algorithms. For JavaScript-based conversions, consider implementing memoization and batch processing for better performance in dynamic applications. The benefits of improved color consistency and reduced design iteration time often outweigh any minimal computational overhead.
                </p>
              </div>
            </div>
          </div>

          {/* Related Tools Section */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Related Color Conversion Tools and Professional Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Explore our comprehensive suite of professional color conversion tools designed for modern web development, design systems, and color workflow optimization.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Link href="/tools/hsl-to-hex" className="group bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  HSL to HEX Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert HSL colors to hexadecimal format for traditional web development workflows, legacy browser support, and compatibility with existing design systems.
                </p>
              </Link>
              
              <Link href="/tools/rgb-to-hsl" className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  RGB to HSL Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transform RGB color values to HSL format for easier color manipulation, design system integration, and intuitive color adjustments.
                </p>
              </Link>
              
              <Link href="/tools/color-contrast" className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                  Color Contrast Checker
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Verify color contrast ratios for WCAG accessibility compliance using both traditional and modern color spaces including OKLCH.
                </p>
              </Link>
              
              <Link href="/tools/palette-generator" className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Color Palette Generator
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Create harmonious color palettes using advanced color theory principles and modern color spaces including OKLCH for superior color relationships.
                </p>
              </Link>
              
              <Link href="/tools/gradient-generator" className="group bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  Gradient Generator
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generate smooth, perceptually uniform color gradients with support for modern color spaces and natural color transitions.
                </p>
              </Link>
              
              <Link href="/tools/color-mixer" className="group bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-500">
                  Color Mixer Tool
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Mix and blend colors using various color spaces including OKLCH for more natural color combinations and superior mixing results.
                </p>
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Discover our complete collection of professional color tools designed for modern web development, design systems, and color workflow optimization.
              </p>
              <Link 
                href="/tools" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Explore All Professional Color Tools
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 