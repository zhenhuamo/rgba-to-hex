'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function OklchToHsl() {
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
              <Image src="/rgb.svg" alt="OKLCH to HSL Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                OKLCH to HSL Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online OKLCH to HSL color converter tool for modern web development. Convert OKLCH (Oklab Lightness Chroma Hue) color values to HSL (Hue, Saturation, Lightness) format with precision, accuracy, and real-time preview capabilities for seamless color space transformation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform advanced OKLCH color codes to traditional HSL color space using our free OKLCH to HSL converter, ensuring browser compatibility while maintaining the benefits of perceptual uniformity for legacy systems, design workflows, and cross-browser implementations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">CSS Color Level 4</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Legacy Compatibility</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Cross-browser Support</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Conversion</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Grade</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive OKLCH to HSL Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced OKLCH to HSL color conversion tool with real-time preview, interactive sliders, and instant CSS code generation for professional web development workflows.
              </p>
              <iframe 
                src="/tools/oklch-to-hsl-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="OKLCH to HSL Color Converter Tool - Convert OKLCH colors to HSL format with real-time preview"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <Link 
                href="/tools/oklch-to-hsl-converter" 
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full OKLCH to HSL Converter Tool
              </Link>
            </div>
          </div>

          {/* Understanding OKLCH to HSL Conversion */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Understanding OKLCH to HSL Color Conversion: Complete Guide
            </h2>
            
            {/* What is OKLCH Color Space */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                What is OKLCH Color Space and Why Convert to HSL?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                OKLCH (Oklab Lightness Chroma Hue) is a modern color space designed for perceptual uniformity, making it ideal for color manipulation and design workflows. However, converting OKLCH to HSL is essential for maintaining compatibility with older browsers, legacy design systems, and traditional CSS workflows that rely on HSL color values.
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
                      <span>Modern CSS Color Level 4 specification</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">HSL Color Advantages</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Universal browser support and compatibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Intuitive hue, saturation, lightness model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Legacy design system integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Familiar color adjustment workflow</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conversion Process and Formula */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                OKLCH to HSL Conversion Process: Step-by-Step Formula
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Converting OKLCH color to HSL format requires a multi-step mathematical transformation process. Our OKLCH to HSL converter handles this complex calculation automatically, but understanding the underlying formula helps in advanced color manipulation workflows.
              </p>
              
              <div className="bg-gray-900 rounded-2xl p-8 mb-8 overflow-x-auto">
                <h4 className="text-xl font-semibold mb-6 text-white">Mathematical Formula for OKLCH to HSL Conversion</h4>
                <pre className="text-sm text-gray-100 leading-relaxed">
                  <code>{`// Step 1: Convert OKLCH to Oklab
oklab_L = oklch_L
oklab_a = oklch_C × cos(oklch_H × π/180)
oklab_b = oklch_C × sin(oklch_H × π/180)

// Step 2: Convert Oklab to XYZ color space
f_L = (oklab_L + 0.3963377774) / 1.0909090909
f_a = oklab_a / 0.2104542553
f_b = oklab_b / 0.0063467324

Y = f_L³
X = (f_a + 1.9779984951 × f_L) / 2.2799829554
Z = (f_L - f_b - 0.8392685158 × f_a) / 1.1910996938

// Step 3: Convert XYZ to RGB
R = X × 3.2406 + Y × (-1.5372) + Z × (-0.4986)
G = X × (-0.9689) + Y × 1.8758 + Z × 0.0415
B = X × 0.0557 + Y × (-0.2040) + Z × 1.0570

// Step 4: Apply gamma correction
R = gamma_correct(R)
G = gamma_correct(G)
B = gamma_correct(B)

// Step 5: Convert RGB to HSL
max_rgb = max(R, G, B)
min_rgb = min(R, G, B)
delta = max_rgb - min_rgb

// Calculate HSL Lightness
hsl_L = (max_rgb + min_rgb) / 2

// Calculate HSL Saturation
if (delta == 0) {
    hsl_S = 0
} else {
    hsl_S = delta / (2 - max_rgb - min_rgb) if hsl_L > 0.5
    hsl_S = delta / (max_rgb + min_rgb) if hsl_L ≤ 0.5
}

// Calculate HSL Hue
if (delta == 0) {
    hsl_H = 0
} else if (max_rgb == R) {
    hsl_H = ((G - B) / delta) % 6
} else if (max_rgb == G) {
    hsl_H = (B - R) / delta + 2
} else {
    hsl_H = (R - G) / delta + 4
}
hsl_H = hsl_H × 60`}</code>
                </pre>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Why This Complex Process?</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The OKLCH to HSL conversion requires multiple color space transformations because these two color models represent color information differently. OKLCH uses perceptually uniform coordinates, while HSL uses a cylindrical representation based on human color perception. Our OKLCH to HSL converter performs all these calculations instantly for seamless color workflow integration.
                </p>
              </div>
            </div>

            {/* Practical Examples */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                OKLCH to HSL Conversion Examples: Real-World Color Transformations
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                These practical OKLCH to HSL conversion examples demonstrate how our converter transforms modern OKLCH color values into traditional HSL format, maintaining visual consistency while ensuring broad browser compatibility.
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(0, 100%, 50%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Error states, call-to-action buttons</p>
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(120, 100%, 50%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Success messages, positive feedback</p>
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">HSL Output</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">hsl(240, 100%, 50%)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Use Case</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Links, primary actions, branding</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Color Scenarios */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Advanced OKLCH to HSL Conversion Scenarios
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Pastel Colors</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Converting OKLCH pastel colors to HSL format while maintaining their soft, muted appearance for design systems requiring gentle color palettes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#ffb3ba'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklch(0.85 0.05 15) → hsl(15, 25%, 85%)</code>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#bae1ff'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklch(0.85 0.05 220) → hsl(220, 25%, 85%)</code>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">High Saturation Colors</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Transform highly saturated OKLCH colors to HSL while preserving their vibrancy for attention-grabbing design elements.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#ff1493'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklch(0.65 0.35 350) → hsl(350, 95%, 60%)</code>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#32cd32'}}></div>
                      <div className="flex-1">
                        <code className="text-sm text-gray-600 dark:text-gray-300">oklch(0.75 0.30 130) → hsl(130, 90%, 65%)</code>
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
              How to Implement OKLCH to HSL Conversion in Your Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">JavaScript Implementation</h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-gray-100 leading-relaxed">
                    <code>{`// Professional OKLCH to HSL converter function
function oklchToHsl(oklch) {
  const { l, c, h } = oklch;
  
  // Convert OKLCH to RGB via Oklab and XYZ
  const rgb = oklchToRgb(oklch);
  
  // Convert RGB to HSL
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  
  // Calculate HSL values
  const lightness = (max + min) / 2;
  
  let saturation = 0;
  if (diff !== 0) {
    saturation = lightness > 0.5 
      ? diff / (2 - max - min)
      : diff / (max + min);
  }
  
  let hue = 0;
  if (diff !== 0) {
    switch (max) {
      case r: hue = ((g - b) / diff) % 6; break;
      case g: hue = (b - r) / diff + 2; break;
      case b: hue = (r - g) / diff + 4; break;
    }
    hue = Math.round(hue * 60);
    if (hue < 0) hue += 360;
  }
  
  return {
    h: hue,
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100)
  };
}

// Example usage for OKLCH to HSL conversion
const oklchColor = { l: 0.628, c: 0.258, h: 29.23 };
const hslResult = oklchToHsl(oklchColor);
console.log(\`hsl(\${hslResult.h}, \${hslResult.s}%, \${hslResult.l}%)\`);`}</code>
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">CSS Integration</h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
                  <pre className="text-sm text-gray-100 leading-relaxed">
                    <code>{`/* Using OKLCH to HSL converted values in CSS */
.modern-button {
  /* Original OKLCH: oklch(0.65 0.20 250) */
  /* Converted HSL for compatibility: */
  background-color: hsl(250, 75%, 60%);
  border: 2px solid hsl(250, 85%, 50%);
  color: hsl(250, 10%, 95%);
}

.accent-color {
  /* OKLCH: oklch(0.75 0.15 120) */
  /* HSL equivalent: */
  color: hsl(120, 60%, 70%);
}

/* Fallback approach for progressive enhancement */
.progressive-color {
  background-color: hsl(240, 80%, 60%);
  background-color: oklch(0.60 0.25 240);
}`}</code>
                  </pre>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Best Practices</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Use HSL as fallback for OKLCH colors in production</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Test converted colors across different browsers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Validate color contrast ratios after conversion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Frequently Asked Questions: OKLCH to HSL Color Conversion
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Why convert OKLCH to HSL instead of using OKLCH directly?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Converting OKLCH to HSL is essential for legacy browser compatibility and existing design system integration. While OKLCH provides superior perceptual uniformity and is part of CSS Color Level 4, HSL enjoys universal browser support. Our OKLCH to HSL converter enables you to design with modern OKLCH colors while ensuring compatibility with older systems, making it perfect for production websites that need to support a wide range of browsers.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How accurate is the OKLCH to HSL conversion process?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our OKLCH to HSL converter uses industry-standard color science algorithms with high precision mathematical calculations. The conversion process maintains visual color appearance while adapting to HSL&apos;s cylindrical representation model. While some of OKLCH&apos;s perceptual uniformity benefits may be lost in the conversion to HSL, the visual result remains accurate and suitable for production use. The converter performs gamma correction and proper color space transformation to ensure color fidelity.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Can I batch convert multiple OKLCH colors to HSL format?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, our OKLCH to HSL conversion algorithms are designed for both single and batch processing scenarios. You can integrate the JavaScript conversion functions into your build process, design system generation, or automated color workflow tools to convert multiple OKLCH colors to HSL format efficiently. This is particularly useful for design systems that need to maintain both modern OKLCH definitions and legacy HSL fallbacks.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What should I consider when migrating from OKLCH to HSL?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  When converting OKLCH to HSL, be aware that you&apos;ll lose some of OKLCH&apos;s perceptual uniformity benefits, particularly consistent lightness perception across different hues. Test converted colors across different hue ranges to ensure consistent visual appearance. Consider maintaining both OKLCH and HSL versions in your design system for maximum flexibility. Always validate color contrast ratios after conversion, especially for accessibility compliance. Our OKLCH to HSL converter helps preserve visual consistency during this transition.
                </p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Is the OKLCH to HSL converter free to use?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, our OKLCH to HSL color converter is completely free to use for personal and commercial projects. There are no usage limits, registration requirements, or hidden costs. The tool provides professional-grade color conversion capabilities with real-time preview, CSS code generation, and copy functionality. You can use the converter for web development, design projects, and color workflow optimization without any restrictions.
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
              Explore our comprehensive suite of professional color conversion tools designed for modern web development, design systems, and color workflow optimization with OKLCH color support.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Link href="/tools/hsl-to-oklch" className="group bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  HSL to OKLCH Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert HSL colors to modern OKLCH format for superior perceptual uniformity and advanced color manipulation capabilities in modern web development.
                </p>
              </Link>
              
              <Link href="/tools/oklch-to-hex" className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  OKLCH to HEX Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transform OKLCH colors to HEX format for traditional web development workflows and universal browser compatibility requirements.
                </p>
              </Link>
              
              <Link href="/tools/oklch-to-rgb" className="group bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  OKLCH to RGB Converter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert OKLCH colors to RGB format for digital design workflows and color manipulation in graphics applications.
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
              
              <Link href="/tools/color-picker-embed" className="group bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400">
                  Advanced Color Picker
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Professional color picker with OKLCH support for precise color selection and conversion to multiple formats including HSL.
                </p>
              </Link>
              
              <Link href="/tools/palette-generator" className="group bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                  Color Palette Generator
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generate harmonious color palettes with OKLCH color generation and automatic HSL conversion for design systems.
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