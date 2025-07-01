'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function OklabToOklch() {
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
              <Image src="/rgb.svg" alt="OKLAB to OKLCH Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                OKLAB to OKLCH Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online OKLAB to OKLCH color converter tool for intuitive color manipulation. Convert OKLAB (Oklab Lightness A B) color values to OKLCH (Oklab Lightness Chroma Hue) format with precision, accuracy, and real-time preview capabilities for modern design workflows.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform OKLAB rectangular coordinates to OKLCH polar coordinates using our free OKLAB to OKLCH converter, enabling intuitive color selection, hue-based adjustments, and user-friendly color manipulation in modern web development and design applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">CSS Color Level 4</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Rectangular to Polar</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Intuitive Interface</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Conversion</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Grade</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive OKLAB to OKLCH Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced OKLAB to OKLCH color conversion tool with real-time preview, interactive sliders, and instant CSS code generation for professional color selection workflows.
              </p>
              <iframe 
                src="/tools/oklab-to-oklch-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="OKLAB to OKLCH Color Converter Tool - Convert OKLAB colors to OKLCH format with real-time preview"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <Link 
                href="/tools/oklab-to-oklch-converter" 
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full OKLAB to OKLCH Converter Tool
              </Link>
            </div>
          </div>

          {/* Understanding OKLAB to OKLCH Conversion */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Understanding OKLAB to OKLCH Color Conversion: Complete Guide
            </h2>
            
            {/* What is OKLAB vs OKLCH */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Why Convert OKLAB to OKLCH for Color Selection?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                OKLAB and OKLCH represent the same Oklab color space using different coordinate systems. OKLAB uses rectangular coordinates (L, A, B) ideal for mathematical operations, while OKLCH uses polar coordinates (Lightness, Chroma, Hue) perfect for intuitive color selection and adjustment. Converting OKLAB to OKLCH transforms mathematical color data into user-friendly format.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">OKLAB Rectangular Coordinates</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mathematical color operations and mixing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Linear interpolation between colors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Color difference calculations (Delta-E)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Advanced color analysis algorithms</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">OKLCH Polar Coordinates</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Intuitive color selection with hue wheel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Easy saturation and lightness adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Perfect for user interface color pickers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Natural color harmony generation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conversion Process and Formula */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                OKLAB to OKLCH Conversion Process: Mathematical Formula
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Converting OKLAB to OKLCH is a coordinate transformation from rectangular to polar coordinates. This conversion preserves all color information while changing the representation format from mathematical to intuitive user interface format.
              </p>
              
              <div className="bg-gray-900 rounded-2xl p-8 mb-8 overflow-x-auto">
                <h4 className="text-xl font-semibold mb-6 text-white">Mathematical Formula for OKLAB to OKLCH Conversion</h4>
                <pre className="text-sm text-gray-100 leading-relaxed">
                  <code>{`// OKLAB to OKLCH Conversion Formula
// Input: OKLAB (L: 0-1, A: -0.4 to 0.4, B: -0.4 to 0.4)
// Output: OKLCH (L: 0-1, C: 0-0.4, H: 0-360°)

// Step 1: Lightness remains the same
oklch_L = oklab_L

// Step 2: Calculate Chroma (distance from center)
oklch_C = √(oklab_A² + oklab_B²)

// Step 3: Calculate Hue (angle in degrees)
oklch_H = atan2(oklab_B, oklab_A) × (180/π)

// Step 4: Ensure hue is positive (0-360°)
if (oklch_H < 0) {
    oklch_H = oklch_H + 360
}

// Example conversion:
// OKLAB: L=0.628, A=0.226, B=0.125
// Step 1: oklch_L = 0.628
// Step 2: oklch_C = √(0.226² + 0.125²) = √(0.051 + 0.016) = √0.067 = 0.258
// Step 3: oklch_H = atan2(0.125, 0.226) × (180/π) = 0.510 × 57.296 = 29.23°
// Result: OKLCH(0.628, 0.258, 29.23)`}</code>
                </pre>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Why This Conversion Matters?</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The OKLAB to OKLCH conversion transforms mathematical color coordinates into an intuitive format perfect for color selection interfaces. While OKLAB excels at color mixing and mathematical operations, OKLCH provides the familiar hue wheel experience that designers and developers expect from color pickers, making it ideal for user interfaces and interactive color tools.
                </p>
              </div>
            </div>

            {/* Practical Examples */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                OKLAB to OKLCH Conversion Examples: Real-World Color Transformations
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                These practical OKLAB to OKLCH conversion examples demonstrate how our converter transforms rectangular OKLAB coordinates into intuitive OKLCH polar coordinates, enabling user-friendly color selection and adjustment workflows.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl shadow-lg" style={{backgroundColor: '#ff0000'}}></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Vibrant Red</h4>
                      <p className="text-gray-600 dark:text-gray-300">Pure red color conversion</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLAB Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklab(0.628 0.226 0.125)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.628 0.258 29.23)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Color picker interfaces, hue adjustments</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl shadow-lg" style={{backgroundColor: '#00ff00'}}></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Bright Green</h4>
                      <p className="text-gray-600 dark:text-gray-300">Success indicator color</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLAB Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklab(0.867 -0.233 0.179)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.867 0.295 142.5)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Interactive color selection, saturation control</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl shadow-lg" style={{backgroundColor: '#0000ff'}}></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Blue</h4>
                      <p className="text-gray-600 dark:text-gray-300">Primary brand color</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLAB Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklab(0.452 -0.032 -0.311)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.452 0.313 264.1)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">User-friendly color adjustment, design tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Color Scenarios */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Advanced OKLAB to OKLCH Conversion Scenarios
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Color Picker Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Converting OKLAB to OKLCH enables intuitive color picker interfaces. OKLCH&apos;s polar coordinates provide natural hue wheel interaction and saturation control.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#ff6b6b'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklab(0.65 0.193 0.052) → oklch(0.65 0.20 15)</code>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#4ecdc4'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklab(0.75 -0.150 0.000) → oklch(0.75 0.15 180)</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Design System Workflows</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    OKLCH format is perfect for design systems where consistent hue relationships and intuitive color adjustments are essential for brand consistency.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#a8e6cf'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklab(0.85 -0.061 0.052) → oklch(0.85 0.08 140)</code>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#ffd93d'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklab(0.90 -0.010 0.120) → oklch(0.90 0.12 85)</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              How to Implement OKLAB to OKLCH Conversion in Your Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">JavaScript Implementation</h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-gray-100 leading-relaxed">
                    <code>{`// Professional OKLAB to OKLCH converter function
function oklabToOklch(oklab) {
  const { l, a, b } = oklab;

  // Convert rectangular to polar coordinates
  const oklchL = l;  // Lightness remains the same
  const oklchC = Math.sqrt(a * a + b * b);  // Chroma (distance)
  let oklchH = Math.atan2(b, a) * 180 / Math.PI;  // Hue (angle)

  // Ensure hue is positive (0-360°)
  if (oklchH < 0) oklchH += 360;

  return {
    l: Math.round(oklchL * 1000) / 1000,
    c: Math.round(oklchC * 1000) / 1000,
    h: Math.round(oklchH * 10) / 10
  };
}

// Example usage for OKLAB to OKLCH conversion
const oklabColor = { l: 0.628, a: 0.226, b: 0.125 };
const oklchResult = oklabToOklch(oklabColor);
console.log(\`oklch(\${oklchResult.l} \${oklchResult.c} \${oklchResult.h})\`);

// Color picker integration example
function createColorPicker(oklabColor) {
  const oklch = oklabToOklch(oklabColor);

  // Use OKLCH for intuitive UI controls
  const hueSlider = oklch.h;      // 0-360° for hue wheel
  const chromaSlider = oklch.c;   // 0-0.4 for saturation
  const lightnessSlider = oklch.l; // 0-1 for brightness

  return { hueSlider, chromaSlider, lightnessSlider };
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">CSS Integration</h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
                  <pre className="text-sm text-gray-100 leading-relaxed">
                    <code>{`/* Using OKLAB to OKLCH converted values in CSS */
.color-picker-interface {
  /* Original OKLAB: oklab(0.65 0.193 0.052) */
  /* Converted OKLCH for UI: */
  background-color: oklch(0.65 0.20 15);
}

.design-system-primary {
  /* OKLAB: oklab(0.75 -0.150 0.000) */
  /* OKLCH equivalent for consistency: */
  color: oklch(0.75 0.15 180);
}

/* Hue-based color variations using OKLCH */
.color-variations {
  --base-lightness: 0.65;
  --base-chroma: 0.20;
  --base-hue: 15;

  /* Primary color */
  --primary: oklch(var(--base-lightness) var(--base-chroma) var(--base-hue));

  /* Complementary color (hue + 180°) */
  --complementary: oklch(var(--base-lightness) var(--base-chroma) calc(var(--base-hue) + 180));

  /* Triadic colors (hue ± 120°) */
  --triadic-1: oklch(var(--base-lightness) var(--base-chroma) calc(var(--base-hue) + 120));
  --triadic-2: oklch(var(--base-lightness) var(--base-chroma) calc(var(--base-hue) - 120));
}`}</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Best Practices</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Use OKLCH for color picker interfaces and user controls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Leverage hue-based calculations for color harmonies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Validate OKLCH values are within valid ranges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Frequently Asked Questions: OKLAB to OKLCH Color Conversion
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  When should I use OKLCH instead of OKLAB?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Use OKLCH when you need intuitive color selection and adjustment interfaces. OKLCH&apos;s polar coordinates (Lightness, Chroma, Hue) map naturally to color picker controls - hue wheels, saturation sliders, and brightness controls. OKLCH is perfect for design tools, color pickers, and any interface where users need to adjust colors visually. OKLAB is better for mathematical color operations and algorithmic processing.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Is the OKLAB to OKLCH conversion lossless?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, the OKLAB to OKLCH conversion is completely lossless and reversible. Both formats represent the same Oklab color space using different coordinate systems - rectangular (OKLAB) and polar (OKLCH). The conversion is a simple mathematical transformation that preserves all color information, allowing you to switch between formats without any data loss or color accuracy degradation.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How do I create color harmonies using OKLCH?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH makes color harmony creation intuitive through hue manipulation. For complementary colors, add 180° to the hue. For triadic harmonies, add/subtract 120°. For analogous colors, adjust hue by ±30°. Keep lightness and chroma consistent for balanced harmonies, or vary them for more dynamic relationships. The polar coordinate system makes these calculations straightforward and predictable.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What are the valid ranges for OKLCH values?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH values have specific ranges: L (lightness) ranges from 0 to 1, where 0 is black and 1 is white. C (chroma) ranges from 0 to approximately 0.4, where 0 is grayscale and higher values are more saturated. H (hue) ranges from 0 to 360 degrees, representing the full color wheel. Our converter automatically validates these ranges and handles edge cases like negative hue values.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Can I use OKLCH in CSS directly?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, modern browsers support the oklch() CSS function as part of CSS Color Level 4. You can use oklch(L C H) syntax directly in CSS, where L is the lightness (0-1 or 0%-100%), C is the chroma (0-0.4 or as percentage), and H is the hue (0-360 degrees or as angle). However, for broader browser compatibility, consider providing fallback colors in more widely supported formats like RGB or HSL alongside OKLCH values.
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
              Explore our comprehensive suite of professional color conversion tools designed for modern web development, design systems, and advanced color manipulation with OKLCH and OKLAB support.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Link href="/tools/oklch-to-oklab" className="group bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  OKLCH to OKLAB Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert OKLCH polar coordinates to OKLAB rectangular coordinates for mathematical color operations and analysis.
                </p>
              </Link>

              <Link href="/tools/oklch-to-hsl" className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  OKLCH to HSL Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transform OKLCH colors to HSL format for legacy browser compatibility and traditional color workflows.
                </p>
              </Link>

              <Link href="/tools/oklch-to-rgb" className="group bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  OKLCH to RGB Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert OKLCH colors to RGB format for digital design workflows and graphics applications.
                </p>
              </Link>

              <Link href="/tools/color-contrast" className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                  Color Contrast Checker
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Verify color contrast ratios for WCAG accessibility compliance using both traditional and modern color spaces.
                </p>
              </Link>

              <Link href="/tools/color-picker-embed" className="group bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400">
                  Advanced Color Picker
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Professional color picker with OKLCH and OKLAB support for precise color selection and format conversion.
                </p>
              </Link>

              <Link href="/tools/delta-e-calculator" className="group bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                  Delta-E Calculator
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Calculate perceptual color differences using OKLAB coordinates for accurate color analysis and quality control.
                </p>
              </Link>
            </div>

            <div className="text-center">
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
