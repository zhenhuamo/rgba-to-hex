'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function OklchToOklab() {
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
              <Image src="/rgb.svg" alt="OKLCH to OKLAB Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                OKLCH to OKLAB Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online OKLCH to OKLAB color converter tool for advanced color manipulation. Convert OKLCH (Oklab Lightness Chroma Hue) color values to OKLAB (Oklab Lightness A B) format with precision, accuracy, and real-time preview capabilities for modern color workflows.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform OKLCH polar coordinates to OKLAB rectangular coordinates using our free OKLCH to OKLAB converter, enabling advanced color manipulation, mathematical operations, and precise color calculations in the Oklab color space for professional design and development applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">CSS Color Level 4</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Polar to Rectangular</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Mathematical Precision</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Conversion</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Grade</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive OKLCH to OKLAB Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced OKLCH to OKLAB color conversion tool with real-time preview, interactive sliders, and instant CSS code generation for professional color manipulation workflows.
              </p>
              <iframe 
                src="/tools/oklch-to-oklab-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="OKLCH to OKLAB Color Converter Tool - Convert OKLCH colors to OKLAB format with real-time preview"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <Link 
                href="/tools/oklch-to-oklab-converter" 
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full OKLCH to OKLAB Converter Tool
              </Link>
            </div>
          </div>

          {/* Understanding OKLCH to OKLAB Conversion */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Understanding OKLCH to OKLAB Color Conversion: Complete Guide
            </h2>
            
            {/* What is OKLCH vs OKLAB */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                What is the Difference Between OKLCH and OKLAB Color Spaces?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                OKLCH and OKLAB are two representations of the same Oklab color space. OKLCH uses polar coordinates (Lightness, Chroma, Hue) while OKLAB uses rectangular coordinates (Lightness, A, B). Converting between them enables different types of color manipulation - OKLCH is intuitive for color selection, while OKLAB is ideal for mathematical operations and color mixing.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">OKLCH Polar Coordinates</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Intuitive color selection with hue wheel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Easy saturation and lightness adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Perfect for user interface color pickers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Natural color harmony generation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">OKLAB Rectangular Coordinates</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mathematical color operations and mixing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Linear interpolation between colors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Color difference calculations (Delta-E)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Advanced color analysis algorithms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conversion Process and Formula */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                OKLCH to OKLAB Conversion Process: Mathematical Formula
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Converting OKLCH to OKLAB is a straightforward coordinate transformation from polar to rectangular coordinates. This conversion preserves all color information while changing the representation format for different manipulation needs.
              </p>
              
              <div className="bg-gray-900 rounded-2xl p-8 mb-8 overflow-x-auto">
                <h4 className="text-xl font-semibold mb-6 text-white">Mathematical Formula for OKLCH to OKLAB Conversion</h4>
                <pre className="text-sm text-gray-100 leading-relaxed">
                  <code>{`// OKLCH to OKLAB Conversion Formula
// Input: OKLCH (L: 0-1, C: 0-0.4, H: 0-360°)
// Output: OKLAB (L: 0-1, A: -0.4 to 0.4, B: -0.4 to 0.4)

// Step 1: Convert hue from degrees to radians
hue_radians = oklch_H × (π / 180)

// Step 2: Convert polar coordinates to rectangular coordinates
oklab_L = oklch_L  // Lightness remains the same
oklab_A = oklch_C × cos(hue_radians)  // A component (green-red axis)
oklab_B = oklch_C × sin(hue_radians)  // B component (blue-yellow axis)

// Example conversion:
// OKLCH: L=0.628, C=0.258, H=29.23°
// Step 1: hue_radians = 29.23 × (π/180) = 0.510 radians
// Step 2: 
//   oklab_L = 0.628
//   oklab_A = 0.258 × cos(0.510) = 0.258 × 0.875 = 0.226
//   oklab_B = 0.258 × sin(0.510) = 0.258 × 0.485 = 0.125
// Result: OKLAB(0.628, 0.226, 0.125)`}</code>
                </pre>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Why This Simple Conversion?</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The OKLCH to OKLAB conversion is mathematically simple because both formats represent the same Oklab color space. OKLCH uses polar coordinates (radius and angle) while OKLAB uses rectangular coordinates (x and y). This conversion is lossless and reversible, making it perfect for switching between intuitive color selection (OKLCH) and mathematical color operations (OKLAB).
                </p>
              </div>
            </div>

            {/* Practical Examples */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                OKLCH to OKLAB Conversion Examples: Real-World Color Transformations
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                These practical OKLCH to OKLAB conversion examples demonstrate how our converter transforms polar OKLCH coordinates into rectangular OKLAB coordinates, enabling different types of color manipulation workflows.
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.628 0.258 29.23)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLAB Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklab(0.628 0.226 0.125)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Color mixing algorithms, mathematical operations</p>
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.867 0.295 142.5)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLAB Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklab(0.867 -0.233 0.179)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Linear interpolation, color analysis</p>
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLCH Input</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklch(0.452 0.313 264.1)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">OKLAB Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">oklab(0.452 -0.032 -0.311)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Delta-E calculations, color difference analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Color Scenarios */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Advanced OKLCH to OKLAB Conversion Scenarios
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Color Mixing Applications</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Converting OKLCH to OKLAB enables linear color mixing and interpolation. OKLAB&apos;s rectangular coordinates allow for mathematically accurate color blending.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#ff6b6b'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklch(0.65 0.20 15) → oklab(0.65 0.193 0.052)</code>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#4ecdc4'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklch(0.75 0.15 180) → oklab(0.75 -0.150 0.000)</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Color Analysis Workflows</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    OKLAB format is ideal for color difference calculations, clustering algorithms, and perceptual color analysis in design systems.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#a8e6cf'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklch(0.85 0.08 140) → oklab(0.85 -0.061 0.052)</code>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#ffd93d'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklch(0.90 0.12 85) → oklab(0.90 -0.010 0.120)</code>
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
              How to Implement OKLCH to OKLAB Conversion in Your Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">JavaScript Implementation</h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-gray-100 leading-relaxed">
                    <code>{`// Professional OKLCH to OKLAB converter function
function oklchToOklab(oklch) {
  const { l, c, h } = oklch;

  // Convert hue from degrees to radians
  const hueRadians = h * Math.PI / 180;

  // Convert polar to rectangular coordinates
  const oklabL = l;  // Lightness remains the same
  const oklabA = c * Math.cos(hueRadians);  // A component
  const oklabB = c * Math.sin(hueRadians);  // B component

  return {
    l: Math.round(oklabL * 1000) / 1000,
    a: Math.round(oklabA * 1000) / 1000,
    b: Math.round(oklabB * 1000) / 1000
  };
}

// Example usage for OKLCH to OKLAB conversion
const oklchColor = { l: 0.628, c: 0.258, h: 29.23 };
const oklabResult = oklchToOklab(oklchColor);
console.log(\`oklab(\${oklabResult.l} \${oklabResult.a} \${oklabResult.b})\`);

// Color mixing example using OKLAB
function mixOklabColors(color1, color2, ratio = 0.5) {
  return {
    l: color1.l * (1 - ratio) + color2.l * ratio,
    a: color1.a * (1 - ratio) + color2.a * ratio,
    b: color1.b * (1 - ratio) + color2.b * ratio
  };
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">CSS Integration</h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
                  <pre className="text-sm text-gray-100 leading-relaxed">
                    <code>{`/* Using OKLCH to OKLAB converted values in CSS */
.color-mixing-example {
  /* Original OKLCH: oklch(0.65 0.20 250) */
  /* Converted OKLAB for mixing: */
  background-color: oklab(0.65 -0.064 -0.188);
}

.mathematical-operations {
  /* OKLCH: oklch(0.75 0.15 120) */
  /* OKLAB equivalent for calculations: */
  color: oklab(0.75 -0.130 0.075);
}

/* Color interpolation using OKLAB */
@keyframes color-transition {
  from {
    background-color: oklab(0.60 0.150 0.100);
  }
  to {
    background-color: oklab(0.80 -0.100 0.050);
  }
}

.animated-color {
  animation: color-transition 2s ease-in-out infinite alternate;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Best Practices</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Use OKLAB for mathematical color operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Validate OKLAB values are within valid ranges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Consider browser support for oklab() CSS function</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Frequently Asked Questions: OKLCH to OKLAB Color Conversion
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  When should I use OKLAB instead of OKLCH?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Use OKLAB when you need to perform mathematical operations on colors, such as color mixing, interpolation, or difference calculations. OKLAB&apos;s rectangular coordinates make linear operations straightforward and mathematically accurate. OKLCH is better for intuitive color selection and adjustment, while OKLAB excels in algorithmic color manipulation and analysis workflows.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Is the OKLCH to OKLAB conversion lossless?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, the OKLCH to OKLAB conversion is completely lossless and reversible. Both formats represent the same Oklab color space using different coordinate systems - polar (OKLCH) and rectangular (OKLAB). The conversion is a simple mathematical transformation that preserves all color information, allowing you to switch between formats without any data loss or color accuracy degradation.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How do I mix colors using OKLAB coordinates?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Color mixing in OKLAB is performed using linear interpolation between the L, A, and B components. Simply multiply each component by the mixing ratio and add them together. For example, to mix two colors equally: mixed_L = (color1_L + color2_L) / 2. This approach produces perceptually uniform color transitions and accurate intermediate colors, making OKLAB ideal for gradient generation and color blending algorithms.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What are the valid ranges for OKLAB values?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLAB values have specific ranges: L (lightness) ranges from 0 to 1, where 0 is black and 1 is white. The A component (green-red axis) typically ranges from -0.4 to +0.4, where negative values tend toward green and positive values toward red. The B component (blue-yellow axis) also ranges from -0.4 to +0.4, where negative values tend toward blue and positive values toward yellow. Our converter automatically validates these ranges.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Can I use OKLAB in CSS directly?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, modern browsers support the oklab() CSS function as part of CSS Color Level 4. You can use oklab(L A B) syntax directly in CSS, where L is the lightness (0-1 or 0%-100%) and A, B are the color components (-0.4 to 0.4 or as percentages). However, for broader browser compatibility, consider providing fallback colors in more widely supported formats like RGB or HSL alongside OKLAB values.
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
              <Link href="/tools/oklab-to-oklch" className="group bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  OKLAB to OKLCH Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert OKLAB rectangular coordinates back to OKLCH polar coordinates for intuitive color selection and adjustment workflows.
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
