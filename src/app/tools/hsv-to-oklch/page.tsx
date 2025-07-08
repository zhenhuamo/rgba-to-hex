'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function HsvToOklch() {
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
              <Image src="/rgb.svg" alt="HSV to OKLCH Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                HSV to OKLCH Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online HSV to OKLCH color converter tool for modern color workflows. Convert HSV (Hue, Saturation, Value) color values to OKLCH (Oklab Lightness Chroma Hue) format with precision, accuracy, and real-time preview capabilities for advanced color space transformation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform traditional HSV color codes to modern OKLCH color space using our free HSV to OKLCH converter, perfect for upgrading color picker interfaces to perceptually uniform color manipulation and next-generation design workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">Modern Color Science</span>
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
                Interactive HSV to OKLCH Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced HSV to OKLCH color conversion tool with real-time preview, interactive sliders, and instant CSS code generation for modern color manipulation workflows.
              </p>
              <iframe 
                src="/tools/hsv-to-oklch-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="HSV to OKLCH Color Converter Tool - Convert HSV colors to OKLCH format with real-time preview"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <a
                href="/tools/hsv-to-oklch-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full HSV to OKLCH Converter Tool
              </a>
            </div>
          </div>

          {/* Understanding HSV to OKLCH Conversion */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Understanding HSV to OKLCH Color Conversion: Complete Guide
            </h2>
            
            {/* What is HSV Color Space */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                What is HSV Color Space and Why Convert to OKLCH?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                HSV (Hue, Saturation, Value) is a traditional color space that provides intuitive color manipulation through separate brightness and saturation controls. Converting HSV to OKLCH is essential for modernizing color workflows, achieving perceptual uniformity, and accessing wider color gamuts for next-generation design applications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">HSV Color Benefits</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Intuitive color picker interface design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Separate brightness and saturation controls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Natural color wheel representation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Easy color variation generation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">OKLCH Color Advantages</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Perceptually uniform color adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Consistent lightness across different hues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Wide color gamut support (P3, Rec2020)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Future-proof color science foundation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Conversion Process */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Technical Conversion Process: HSV to OKLCH
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Converting HSV to OKLCH involves a sophisticated multi-step transformation through intermediate color spaces to ensure accuracy and maintain color fidelity. Our converter uses the following scientifically-proven conversion pathway:
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Conversion Pipeline</h4>
                <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-purple-600 dark:text-purple-400">HSV</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">RGB</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-green-600 dark:text-green-400">XYZ</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-orange-600 dark:text-orange-400">OKLAB</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    <span className="font-semibold text-pink-600 dark:text-pink-400">OKLCH</span>
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
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">HSV to RGB Conversion</h4>
                  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 font-mono">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">Chroma calculation:</p>
                      <p>C = V × S</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">Intermediate value:</p>
                      <p>X = C × (1 - |((H/60) mod 2) - 1|)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">RGB base values:</p>
                      <p>Based on hue sector (0-5)</p>
                      <p>Add m = V - C to each component</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">RGB to OKLCH Conversion</h4>
                  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 font-mono">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">1. RGB to XYZ (D65):</p>
                      <p>Linear RGB transformation</p>
                      <p>with sRGB matrix coefficients</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">2. XYZ to OKLAB:</p>
                      <p>Complex matrix transformation</p>
                      <p>involving cube roots</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <p className="mb-2">3. OKLAB to OKLCH:</p>
                      <p>C = √(a² + b²)</p>
                      <p>H = atan2(b, a) × 180/π</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Modern Web Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Upgrade existing HSV-based color pickers to OKLCH for better color manipulation and perceptual uniformity in modern web applications.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Design System Migration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Convert legacy HSV color values to OKLCH for design system modernization and improved color consistency across different devices.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Wide Gamut Displays</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Leverage OKLCH&apos;s wide gamut support for P3 and Rec2020 displays, ensuring colors look consistent across next-generation devices.
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
                  <code>{`// HSV to OKLCH conversion function
function hsvToOklch(hsv) {
  const { h, s, v } = hsv;

  // Step 1: HSV to RGB
  const sNorm = s / 100;
  const vNorm = v / 100;

  const c = vNorm * sNorm;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = vNorm - c;

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

  const rgb = {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };

  // Step 2: RGB to OKLCH
  return rgbToOklch(rgb);
}

// Example usage
const hsvColor = { h: 240, s: 100, v: 50 };
const oklchColor = hsvToOklch(hsvColor);
console.log(oklchColor); // { l: 0.452, c: 0.313, h: 264 }

// Color picker upgrade example
function upgradeColorPicker(hsvColor) {
  const oklch = hsvToOklch(hsvColor);

  // Use OKLCH for perceptually uniform adjustments
  const lightnessControl = oklch.l;  // 0-1 for lightness
  const chromaControl = oklch.c;     // 0-0.4 for chroma
  const hueControl = oklch.h;        // 0-360° for hue

  return { lightnessControl, chromaControl, hueControl };
}`}</code>
                </pre>
              </div>
            </div>

            {/* Benefits of Migration */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Benefits of Migrating from HSV to OKLCH
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Perceptual Uniformity</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      OKLCH provides consistent perceptual changes when adjusting lightness, chroma, or hue, unlike HSV where the same numerical change can appear different across various colors.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Wide Gamut Support</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      OKLCH can represent colors outside the sRGB gamut, making it perfect for P3 displays and future color technologies that HSV cannot access.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Better Color Manipulation</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Creating color palettes, gradients, and variations is more predictable with OKLCH due to its perceptual uniformity and scientific foundation.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-2xl">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Future-Proof Design</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      OKLCH is based on modern color science and is supported by CSS Color Level 4, ensuring your color workflows remain relevant for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Related Color Conversion Tools
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/tools/oklch-to-hsv" className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    OKLCH to HSV Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Convert OKLCH colors back to HSV format for legacy compatibility
                  </p>
                </Link>

                <Link href="/tools/oklch-to-rgb" className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    OKLCH to RGB Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Convert OKLCH to RGB for universal color compatibility
                  </p>
                </Link>

                <Link href="/tools/hsv-to-rgb" className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    HSV to RGB Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Convert HSV to RGB for traditional color workflows
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
