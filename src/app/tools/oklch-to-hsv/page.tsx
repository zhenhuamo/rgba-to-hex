'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function OklchToHsv() {
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
              <Image src="/rgb.svg" alt="OKLCH to HSV Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                OKLCH to HSV Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online OKLCH to HSV color converter tool for advanced color manipulation. Convert OKLCH (Oklab Lightness Chroma Hue) color values to HSV (Hue, Saturation, Value) format with precision, accuracy, and real-time preview capabilities for intuitive color space transformation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform modern OKLCH color codes to traditional HSV color space using our free OKLCH to HSV converter, perfect for color picker interfaces, design tools, and applications requiring intuitive color manipulation with brightness and saturation controls.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">Perceptual Uniformity</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Color Picker Friendly</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Intuitive Controls</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Conversion</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Grade</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive OKLCH to HSV Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced OKLCH to HSV color conversion tool with real-time preview, interactive sliders, and instant CSS code generation for professional color manipulation workflows.
              </p>
              <iframe 
                src="/tools/oklch-to-hsv-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="OKLCH to HSV Color Converter Tool - Convert OKLCH colors to HSV format with real-time preview"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <a
                href="/tools/oklch-to-hsv-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full OKLCH to HSV Converter Tool
              </a>
            </div>
          </div>

          {/* Understanding OKLCH to HSV Conversion */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Understanding OKLCH to HSV Color Conversion: Complete Guide
            </h2>
            
            {/* What is OKLCH Color Space */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                What is OKLCH Color Space and Why Convert to HSV?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                OKLCH (Oklab Lightness Chroma Hue) is a modern color space designed for perceptual uniformity, making it ideal for color manipulation and design workflows. Converting OKLCH to HSV is essential for creating intuitive color picker interfaces, design tools, and applications where users need to manipulate colors using familiar brightness and saturation controls.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">OKLCH Color Benefits</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Perceptually uniform color adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Consistent lightness across different hues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Superior color manipulation capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Wide color gamut support (P3, Rec2020)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">HSV Color Advantages</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Intuitive color picker interface design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Separate brightness and saturation controls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Natural color wheel representation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Easy color variation generation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Conversion Process */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Technical Conversion Process: OKLCH to HSV
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Converting OKLCH to HSV involves a multi-step transformation through intermediate color spaces to ensure accuracy and maintain color fidelity. Our converter uses the following scientifically-proven conversion pathway:
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Conversion Pipeline</h4>
                <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-purple-600 dark:text-purple-400">OKLCH</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">OKLAB</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-green-600 dark:text-green-400">XYZ</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-orange-600 dark:text-orange-400">RGB</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-pink-600 dark:text-pink-400">HSV</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mathematical Formulas */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Mathematical Formulas and Conversion Principles
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">OKLCH to RGB Conversion</h4>
                  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 font-mono">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">1. OKLCH to OKLAB:</p>
                      <p>a = C × cos(H × π/180)</p>
                      <p>b = C × sin(H × π/180)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">2. OKLAB to XYZ (D65):</p>
                      <p>Complex matrix transformation</p>
                      <p>involving cube roots and linear algebra</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">3. XYZ to RGB:</p>
                      <p>Matrix multiplication with</p>
                      <p>sRGB color space coefficients</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">RGB to HSV Conversion</h4>
                  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 font-mono">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">Value (Brightness):</p>
                      <p>V = max(R, G, B)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">Saturation:</p>
                      <p>S = (V - min(R,G,B)) / V</p>
                      <p>if V ≠ 0, else S = 0</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">Hue:</p>
                      <p>H = 60° × sector + offset</p>
                      <p>based on dominant color channel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Applications */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Practical Applications and Use Cases
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Color Picker Interfaces</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    HSV provides intuitive controls for color selection with separate brightness and saturation sliders, making it perfect for user-friendly color picker designs.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Design Tools</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Convert OKLCH colors from modern design systems to HSV for compatibility with traditional design software and color manipulation tools.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Creative Applications</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Generate color variations, create mood boards, and develop color schemes using HSV&apos;s intuitive brightness and saturation controls.
                  </p>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Implementation Examples and Code Snippets
              </h3>

              <div className="bg-gray-900 rounded-2xl p-8 mb-8">
                <h4 className="text-xl font-semibold mb-4 text-white">JavaScript Implementation</h4>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`// OKLCH to HSV conversion function
function oklchToHsv(oklch) {
  const { l, c, h } = oklch;

  // Step 1: OKLCH to RGB
  const rgb = oklchToRgb({ l, c, h });

  // Step 2: RGB to HSV
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  // Calculate HSV values
  const v = max;
  const s = max === 0 ? 0 : delta / max;

  let hue = 0;
  if (delta !== 0) {
    switch (max) {
      case r: hue = ((g - b) / delta) % 6; break;
      case g: hue = (b - r) / delta + 2; break;
      case b: hue = (r - g) / delta + 4; break;
    }
    hue = Math.round(hue * 60);
    if (hue < 0) hue += 360;
  }

  return {
    h: hue,
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
}

// Example usage
const oklchColor = { l: 0.628, c: 0.258, h: 29 };
const hsvColor = oklchToHsv(oklchColor);
console.log(hsvColor); // { h: 29, s: 100, v: 80 }`}</code>
                </pre>
              </div>
            </div>

            {/* Related Tools */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Related Color Conversion Tools
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/tools/hsv-to-oklch" className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    HSV to OKLCH Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Convert HSV colors back to OKLCH format for modern color workflows
                  </p>
                </Link>

                <Link href="/tools/oklch-to-hsl" className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    OKLCH to HSL Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Convert OKLCH to HSL for CSS compatibility and web development
                  </p>
                </Link>

                <Link href="/tools/oklch-to-rgb" className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    OKLCH to RGB Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Convert OKLCH to RGB for universal color compatibility
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
