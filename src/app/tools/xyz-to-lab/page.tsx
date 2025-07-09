import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'XYZ to LAB Converter - Free Online CIE XYZ to CIELAB Color Space Conversion Tool',
  description: 'Convert CIE XYZ colors to CIELAB (LAB) color space instantly with our free online calculator. Features accurate D65 illuminant conversion, step-by-step formulas, code examples, and professional color management applications for designers, photographers, and color scientists.',
  keywords: 'xyz to lab converter, xyz to lab conversion, CIE XYZ to CIELAB, color space conversion, lab color calculator, xyz lab formula, color conversion tool, D65 illuminant, perceptual color space, color science, delta E calculation, color matching, print color management',
  openGraph: {
    title: 'XYZ to LAB Converter - Free Online CIE XYZ to CIELAB Color Space Conversion Tool',
    description: 'Convert CIE XYZ colors to CIELAB (LAB) color space instantly with our free online calculator. Features accurate D65 illuminant conversion and professional applications.',
    type: 'website',
  },
};

export default function XYZToLABPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "XYZ to LAB Color Converter",
    "description": "Free online CIE XYZ to CIELAB color space conversion tool with accurate D65 illuminant calculations",
    "url": "https://rgba-to-hex.com/tools/xyz-to-lab",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "CIE XYZ to CIELAB conversion",
      "D65 illuminant standard",
      "Professional color management",
      "Programming code examples",
      "Real-time calculation"
    ],
    "creator": {
      "@type": "Organization",
      "name": "RGBA to HEX Color Tools"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <Navigation />

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              XYZ to LAB Color Converter
            </h1>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
            Free Online CIE XYZ to CIELAB Color Space Conversion Tool
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">Free Tool</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">Instant Results</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">D65 Standard</span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">Professional Quality</span>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              Convert CIE XYZ tristimulus values to CIELAB (LAB) color space with our free, accurate online calculator. Perfect for designers, photographers, color scientists, and print professionals who need reliable color space conversions.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Our tool uses the industry-standard D65 illuminant and provides instant, precise results with detailed mathematical explanations and comprehensive technical documentation.
            </p>
          </div>

          {/* Converter Tool */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6">
              <iframe
                src="/tools/xyz-to-lab-converter?embed=true"
                className="w-full border-none rounded-2xl"
                height="600"
                title="CIE XYZ to CIELAB Color Space Conversion Tool with Technical Analysis Panel"
                loading="lazy"
              />
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/tools/xyz-to-lab-converter"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
              >
                <span>Open Full Converter</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">How to Convert XYZ to LAB Colors</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Enter XYZ Values</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Input your CIE XYZ tristimulus values (X, Y, Z) in the converter above</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Instant Conversion</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Get immediate LAB color values using D65 illuminant standard</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Use Results</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Apply the LAB values in your color management workflow</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">💡 Pro Tip</h3>
            <p className="text-gray-600 dark:text-gray-300">
              LAB color space is perceptually uniform, meaning equal distances represent equal perceived color differences. This makes it ideal for color matching, quality control, and calculating color differences (Delta E) in professional applications.
            </p>
          </div>
        </div>

        {/* Technical Explanation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Understanding XYZ to LAB Color Space Conversion</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">CIE XYZ Color Space</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CIE XYZ is the foundation color space defined by the International Commission on Illumination (CIE). It represents colors using three tristimulus values based on human vision response curves and serves as the reference for all other color spaces.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>X:</strong> Red-green axis (0-95.047 for D65)</li>
                <li><strong>Y:</strong> Luminance component (0-100)</li>
                <li><strong>Z:</strong> Blue-yellow axis (0-108.883 for D65)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">CIELAB Color Space</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CIELAB (LAB) is a perceptually uniform color space where equal distances represent equal perceived color differences. It&apos;s designed to be device-independent and closely match human visual perception for accurate color analysis.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>L*:</strong> Lightness (0-100)</li>
                <li><strong>a*:</strong> Green-red axis (-128 to +127)</li>
                <li><strong>b*:</strong> Blue-yellow axis (-128 to +127)</li>
              </ul>
            </div>
          </div>

          {/* Conversion Formula */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">XYZ to LAB Conversion Formula</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              <pre>{`// Step 1: Normalize XYZ values with D65 illuminant
X_n = X / 95.047
Y_n = Y / 100.000
Z_n = Z / 108.883

// Step 2: Apply nonlinear transformation
f(t) = t > 0.008856 ? t^(1/3) : (7.787 * t + 16/116)

f_x = f(X_n)
f_y = f(Y_n)
f_z = f(Z_n)

// Step 3: Calculate LAB values
L* = 116 * f_y - 16
a* = 500 * (f_x - f_y)
b* = 200 * (f_y - f_z)`}</pre>
            </div>
          </div>
        </div>

        {/* Common Conversion Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Common XYZ to LAB Conversion Examples</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                Pure Red Color
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>XYZ Input:</strong> X=41.24, Y=21.26, Z=1.93</p>
                <p><strong>LAB Output:</strong> L*=53.23, a*=80.11, b*=67.22</p>
                <p className="text-gray-600 dark:text-gray-400">Standard sRGB red converted to perceptual LAB coordinates</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                Pure Green Color
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>XYZ Input:</strong> X=35.76, Y=71.52, Z=11.92</p>
                <p><strong>LAB Output:</strong> L*=87.73, a*=-86.18, b*=83.18</p>
                <p className="text-gray-600 dark:text-gray-400">Standard sRGB green showing negative a* (green direction)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                Pure Blue Color
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>XYZ Input:</strong> X=18.05, Y=7.22, Z=95.05</p>
                <p><strong>LAB Output:</strong> L*=32.30, a*=79.19, b*=-107.86</p>
                <p className="text-gray-600 dark:text-gray-400">Standard sRGB blue showing negative b* (blue direction)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
                Pure White (D65)
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>XYZ Input:</strong> X=95.05, Y=100.00, Z=108.88</p>
                <p><strong>LAB Output:</strong> L*=100.00, a*=0.00, b*=0.00</p>
                <p className="text-gray-600 dark:text-gray-400">D65 white point reference showing neutral LAB values</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Understanding LAB Values</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong className="text-gray-800 dark:text-white">L* (Lightness):</strong>
                <p className="text-gray-600 dark:text-gray-300">0 = Black, 100 = White</p>
              </div>
              <div>
                <strong className="text-gray-800 dark:text-white">a* (Green-Red):</strong>
                <p className="text-gray-600 dark:text-gray-300">Negative = Green, Positive = Red</p>
              </div>
              <div>
                <strong className="text-gray-800 dark:text-white">b* (Blue-Yellow):</strong>
                <p className="text-gray-600 dark:text-gray-300">Negative = Blue, Positive = Yellow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Programming Implementation</h2>

          <div className="grid gap-6">
            {/* Python */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">🐍</span>
                Python - XYZ to LAB Conversion
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import numpy as np

def xyz_to_lab(X, Y, Z):
    """Convert CIE XYZ to CIELAB using D65 illuminant"""
    # D65 illuminant white point
    xn, yn, zn = 95.047, 100.000, 108.883

    # Normalize XYZ values
    x_norm = X / xn
    y_norm = Y / yn
    z_norm = Z / zn

    # Apply nonlinear transformation
    def f(t):
        return np.power(t, 1/3) if t > 0.008856 else (7.787 * t + 16/116)

    fx = f(x_norm)
    fy = f(y_norm)
    fz = f(z_norm)

    # Calculate LAB values
    L = 116 * fy - 16
    a = 500 * (fx - fy)
    b = 200 * (fy - fz)

    return L, a, b

# Example usage
xyz = (41.24, 21.26, 1.93)  # Red color
lab = xyz_to_lab(*xyz)
print(f"XYZ{xyz} -> LAB({lab[0]:.2f}, {lab[1]:.2f}, {lab[2]:.2f})")`}</code>
              </pre>
            </div>

            {/* JavaScript */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-yellow-600 dark:text-yellow-400">⚡</span>
                JavaScript - XYZ to LAB Conversion
              </h3>
              <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`function xyzToLab(X, Y, Z) {
    // D65 illuminant white point
    const xn = 95.047, yn = 100.000, zn = 108.883;

    // Normalize XYZ values
    const xNorm = X / xn;
    const yNorm = Y / yn;
    const zNorm = Z / zn;

    // Apply nonlinear transformation
    const f = (t) => {
        return t > 0.008856 ? Math.pow(t, 1/3) : (7.787 * t + 16/116);
    };

    const fx = f(xNorm);
    const fy = f(yNorm);
    const fz = f(zNorm);

    // Calculate LAB values
    const L = 116 * fy - 16;
    const a = 500 * (fx - fy);
    const b = 200 * (fy - fz);

    return { L: L, a: a, b: b };
}

// Example usage
const xyz = { X: 41.24, Y: 21.26, Z: 1.93 };  // Red color
const lab = xyzToLab(xyz.X, xyz.Y, xyz.Z);
console.log(\`XYZ(\${xyz.X}, \${xyz.Y}, \${xyz.Z}) -> LAB(\${lab.L.toFixed(2)}, \${lab.a.toFixed(2)}, \${lab.b.toFixed(2)})\`);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Applications and Use Cases */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Real-World Applications and Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Design & Photography</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Color matching between different devices and media</li>
                <li>Print-to-screen color accuracy verification</li>
                <li>Photo editing with perceptually uniform adjustments</li>
                <li>Brand color consistency across platforms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Manufacturing & Quality Control</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Textile and paint color quality assurance</li>
                <li>Automotive paint matching and inspection</li>
                <li>Food industry color standardization</li>
                <li>Cosmetics color formulation and testing</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Scientific Research</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Color perception and vision research</li>
                <li>Spectrophotometry data analysis</li>
                <li>Color appearance modeling studies</li>
                <li>Psychophysical color experiments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400">Digital Media & Web</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Web accessibility color contrast analysis</li>
                <li>Digital asset color management</li>
                <li>Video production color grading</li>
                <li>Game development color systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">What is the difference between XYZ and LAB color spaces?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                CIE XYZ is a device-independent color space based on human vision, but it&apos;s not perceptually uniform. CIELAB (LAB) is derived from XYZ but designed to be perceptually uniform, meaning equal distances in LAB space represent equal perceived color differences. This makes LAB ideal for color difference calculations and quality control applications.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Why do we use D65 illuminant for XYZ to LAB conversion?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                D65 illuminant represents average daylight at 6500K and is the standard reference white point for sRGB, most computer displays, and many color management systems. Using D65 ensures compatibility with modern digital workflows and international color standards like ISO 12640 and IEC 61966.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">How accurate is this XYZ to LAB converter?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our converter uses the official CIE formulas with double-precision floating-point arithmetic, providing accuracy suitable for professional applications. The conversion follows the exact mathematical specifications defined in CIE Publication 15:2004, ensuring results match those from professional color management software and spectrophotometers.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Can I use this tool for commercial projects?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, this XYZ to LAB converter is completely free to use for both personal and commercial projects. The conversion algorithms are based on public CIE standards, and there are no usage restrictions. However, for critical applications, we recommend validating results with certified reference materials or professional color measurement equipment.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">What are typical XYZ and LAB value ranges?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                For D65 illuminant: XYZ values typically range from 0-95.047 (X), 0-100 (Y), and 0-108.883 (Z). LAB values range from 0-100 (L* lightness), approximately -128 to +127 (a* green-red axis), and -128 to +127 (b* blue-yellow axis). Values outside these ranges may indicate colors outside the visible spectrum or calculation errors.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Notes and Best Practices */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Technical Notes and Best Practices</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">D65 Illuminant Standard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                This converter uses the D65 illuminant (daylight at 6500K) as the reference white point, which is the international standard for sRGB and most modern display systems. The D65 white point coordinates are X=95.047, Y=100.000, Z=108.883.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Industry Standards:</strong> D65 is specified in ISO 3664, ISO 12640, and IEC 61966 standards for color management and display calibration.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Perceptual Uniformity Benefits</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Converting to CIELAB provides perceptual uniformity, meaning that equal distances in the LAB color space correspond to equal perceived color differences. This makes LAB ideal for color difference calculations, color matching applications, and quality control processes.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Delta E Calculation:</strong> Use LAB values to calculate color differences with formulas like ΔE*ab = √[(ΔL*)² + (Δa*)² + (Δb*)²]
                </p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Conversion Accuracy and Precision</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                The conversion involves cube root operations and conditional transformations that require careful numerical handling. Our implementation uses double-precision floating-point arithmetic for professional-grade accuracy.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Typical Accuracy:</strong> ±0.01 LAB units for most visible colors, suitable for professional color management applications.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Input Validation and Range Checking</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                While XYZ can theoretically represent colors outside the visible spectrum, practical applications should validate input ranges. Negative XYZ values or values significantly exceeding the D65 white point may indicate measurement errors.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Recommended Ranges:</strong> X: 0-100, Y: 0-100, Z: 0-120 for most practical applications.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Integration with Color Management Systems</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                When integrating XYZ to LAB conversion into larger color management workflows, ensure consistent illuminant usage throughout the pipeline. Mixed illuminants can cause color shifts and inaccurate results.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Best Practice:</strong> Document the illuminant used in each conversion step and provide chromatic adaptation when switching between illuminants.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Related Color Tools</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/tools/lab-to-xyz" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">LAB to XYZ Calculator</h3>
              <p className="text-gray-600 dark:text-gray-300">Convert CIELAB colors back to CIE XYZ color space with precise mathematical formulas.</p>
            </Link>

            <Link href="/tools/xyz-to-rgb" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">XYZ to RGB Calculator</h3>
              <p className="text-gray-600 dark:text-gray-300">Transform CIE XYZ colors to RGB with sRGB color space conversion and gamma correction.</p>
            </Link>

            <Link href="/tools/rgb-to-lab" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">RGB to LAB Calculator</h3>
              <p className="text-gray-600 dark:text-gray-300">Convert RGB colors to CIELAB color space for perceptual color analysis and processing.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}