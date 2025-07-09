import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'LAB to XYZ Converter - Free Online CIELAB to CIE XYZ Color Space Conversion Tool',
  description: 'Convert CIELAB (LAB) colors to CIE XYZ color space instantly with our free online calculator. Features accurate D65 illuminant conversion, step-by-step formulas, code examples, and professional color management applications for designers, photographers, and color scientists.',
  keywords: 'lab to xyz converter, lab to xyz conversion, CIELAB to CIE XYZ, color space conversion, xyz color calculator, lab xyz formula, color conversion tool, D65 illuminant, color management, color science, color matching, print production',
  openGraph: {
    title: 'LAB to XYZ Converter - Free Online CIELAB to CIE XYZ Color Space Conversion Tool',
    description: 'Convert CIELAB (LAB) colors to CIE XYZ color space instantly with our free online calculator. Features accurate D65 illuminant conversion and professional applications.',
    type: 'website',
  },
};

export default function LABToXYZPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "LAB to XYZ Color Converter",
    "description": "Free online CIELAB to CIE XYZ color space conversion tool with accurate D65 illuminant calculations",
    "url": "https://rgba-to-hex.com/tools/lab-to-xyz",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "CIELAB to CIE XYZ conversion",
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              LAB to XYZ Color Converter
            </h1>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
            Free Online CIELAB to CIE XYZ Color Space Conversion Tool
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">Free Tool</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">Instant Results</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">D65 Standard</span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">Professional Quality</span>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              Convert CIELAB (LAB) perceptual color values to CIE XYZ tristimulus coordinates with our free, accurate online calculator. Perfect for designers, photographers, color scientists, and print professionals who need reliable reverse color space conversions.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Our tool uses the industry-standard D65 illuminant and provides instant, precise results with detailed mathematical explanations and comprehensive technical documentation.
            </p>
          </div>

          {/* Converter Tool */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6">
              <iframe
                src="/tools/lab-to-xyz-converter?embed=true"
                className="w-full border-none rounded-2xl"
                height="600"
                title="CIELAB to CIE XYZ Color Space Conversion Tool with Technical Details Panel"
                loading="lazy"
              />
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/tools/lab-to-xyz-converter"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
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
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">How to Convert LAB to XYZ Colors</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Enter LAB Values</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Input your CIELAB color values (L*, a*, b*) in the converter above</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Instant Conversion</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Get immediate XYZ tristimulus values using D65 illuminant standard</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Use Results</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Apply the XYZ values in your color management or device calibration workflow</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">💡 Pro Tip</h3>
            <p className="text-gray-600 dark:text-gray-300">
              XYZ color space is device-independent and serves as the foundation for all other color spaces. Converting from LAB to XYZ allows you to then transform to RGB, CMYK, or other device-specific color spaces while maintaining color accuracy.
            </p>
          </div>
        </div>

        {/* Technical Explanation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Understanding LAB to XYZ Color Space Conversion</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">CIELAB Color Space</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CIELAB (LAB) is a perceptually uniform color space where equal distances represent equal perceived color differences. It&apos;s designed to be device-independent and closely match human vision.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>L*:</strong> Lightness (0-100)</li>
                <li><strong>a*:</strong> Green-red axis (-128 to +127)</li>
                <li><strong>b*:</strong> Blue-yellow axis (-128 to +127)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">CIE XYZ Color Space</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CIE XYZ is the foundation color space defined by the International Commission on Illumination (CIE). It represents colors using three tristimulus values based on human vision response curves.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>X:</strong> Red-green axis (0-95.047 for D65)</li>
                <li><strong>Y:</strong> Luminance (0-100)</li>
                <li><strong>Z:</strong> Blue-yellow axis (0-108.883 for D65)</li>
              </ul>
            </div>
          </div>

          {/* Conversion Formula */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">LAB to XYZ Conversion Formula</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              <pre>{`// Step 1: Calculate intermediate values
f_y = (L* + 16) / 116
f_x = a* / 500 + f_y
f_z = f_y - b* / 200

// Step 2: Apply inverse nonlinear transformation
f_inv(t) = t³ > 0.008856 ? t³ : (t - 16/116) / 7.787

X_n = f_inv(f_x)
Y_n = f_inv(f_y)
Z_n = f_inv(f_z)

// Step 3: Apply D65 illuminant scaling
X = X_n × 95.047
Y = Y_n × 100.000
Z = Z_n × 108.883`}</pre>
            </div>
          </div>
        </div>

        {/* Common Conversion Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Common LAB to XYZ Conversion Examples</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                Vibrant Red Color
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>LAB Input:</strong> L*=53.23, a*=80.11, b*=67.22</p>
                <p><strong>XYZ Output:</strong> X=41.24, Y=21.26, Z=1.93</p>
                <p className="text-gray-600 dark:text-gray-400">High chroma red showing positive a* and b* values</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                Pure Green Color
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>LAB Input:</strong> L*=87.73, a*=-86.18, b*=83.18</p>
                <p><strong>XYZ Output:</strong> X=35.76, Y=71.52, Z=11.92</p>
                <p className="text-gray-600 dark:text-gray-400">Bright green with negative a* (green direction) and positive b* (yellow component)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                Deep Blue Color
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>LAB Input:</strong> L*=32.30, a*=79.19, b*=-107.86</p>
                <p><strong>XYZ Output:</strong> X=18.05, Y=7.22, Z=95.05</p>
                <p className="text-gray-600 dark:text-gray-400">Dark blue with positive a* (red component) and negative b* (blue direction)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                Neutral Gray (50%)
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>LAB Input:</strong> L*=53.39, a*=0.00, b*=0.00</p>
                <p><strong>XYZ Output:</strong> X=20.52, Y=21.59, Z=23.51</p>
                <p className="text-gray-600 dark:text-gray-400">Perfect neutral gray with zero chroma (a*=0, b*=0)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Understanding XYZ Output Values</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong className="text-gray-800 dark:text-white">X (Red-Green):</strong>
                <p className="text-gray-600 dark:text-gray-300">Roughly corresponds to red sensitivity, typically 0-95</p>
              </div>
              <div>
                <strong className="text-gray-800 dark:text-white">Y (Luminance):</strong>
                <p className="text-gray-600 dark:text-gray-300">Brightness component, matches L* relationship, 0-100</p>
              </div>
              <div>
                <strong className="text-gray-800 dark:text-white">Z (Blue-Yellow):</strong>
                <p className="text-gray-600 dark:text-gray-300">Roughly corresponds to blue sensitivity, typically 0-109</p>
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
                Python - LAB to XYZ Conversion
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import numpy as np

def lab_to_xyz(L, a, b):
    """Convert CIELAB to CIE XYZ using D65 illuminant"""
    # Calculate intermediate values
    fy = (L + 16) / 116
    fx = a / 500 + fy
    fz = fy - b / 200
    
    # Apply inverse nonlinear transformation
    def f_inv(t):
        t3 = np.power(t, 3)
        return t3 if t3 > 0.008856 else (t - 16/116) / 7.787
    
    x_norm = f_inv(fx)
    y_norm = f_inv(fy)
    z_norm = f_inv(fz)
    
    # D65 illuminant white point
    xn, yn, zn = 95.047, 100.000, 108.883
    
    # Apply illuminant scaling
    X = x_norm * xn
    Y = y_norm * yn
    Z = z_norm * zn
    
    return X, Y, Z

# Example usage
lab = (53.23, 80.11, 67.22)  # Red color
xyz = lab_to_xyz(*lab)
print(f"LAB{lab} -> XYZ({xyz[0]:.2f}, {xyz[1]:.2f}, {xyz[2]:.2f})")`}</code>
              </pre>
            </div>

            {/* JavaScript */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-yellow-600 dark:text-yellow-400">⚡</span>
                JavaScript - LAB to XYZ Conversion
              </h3>
              <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`function labToXyz(L, a, b) {
    // Calculate intermediate values
    const fy = (L + 16) / 116;
    const fx = a / 500 + fy;
    const fz = fy - b / 200;
    
    // Apply inverse nonlinear transformation
    const fInv = (t) => {
        const t3 = Math.pow(t, 3);
        return t3 > 0.008856 ? t3 : (t - 16/116) / 7.787;
    };
    
    const xNorm = fInv(fx);
    const yNorm = fInv(fy);
    const zNorm = fInv(fz);
    
    // D65 illuminant white point
    const xn = 95.047, yn = 100.000, zn = 108.883;
    
    // Apply illuminant scaling
    const X = xNorm * xn;
    const Y = yNorm * yn;
    const Z = zNorm * zn;
    
    return { X: X, Y: Y, Z: Z };
}

// Example usage
const lab = { L: 53.23, a: 80.11, b: 67.22 };  // Red color
const xyz = labToXyz(lab.L, lab.a, lab.b);
console.log(\`LAB(\${lab.L}, \${lab.a}, \${lab.b}) -> XYZ(\${xyz.X.toFixed(2)}, \${xyz.Y.toFixed(2)}, \${xyz.Z.toFixed(2)})\`);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Applications and Use Cases */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Real-World Applications and Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Design & Photography</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Converting measured LAB values to device-specific coordinates</li>
                <li>Color reproduction from spectrophotometer measurements</li>
                <li>Professional photo editing with measured color targets</li>
                <li>Brand color implementation across different media</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Manufacturing & Quality Control</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Converting LAB measurements to production color coordinates</li>
                <li>Quality assurance in textile and paint industries</li>
                <li>Color matching in automotive and consumer goods</li>
                <li>Food industry color standardization and control</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Scientific Research</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Converting perceptual measurements to tristimulus values</li>
                <li>Color vision research and psychophysical studies</li>
                <li>Spectral data analysis and color appearance modeling</li>
                <li>Colorimetric research and instrument calibration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400">Print & Display Technology</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Print production color management workflows</li>
                <li>Display calibration and characterization</li>
                <li>Color profile creation and validation</li>
                <li>Cross-media color reproduction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">When would I need to convert LAB to XYZ colors?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                LAB to XYZ conversion is essential when you have perceptual color measurements (from instruments like spectrophotometers) and need to convert them to device-independent tristimulus values for further processing, such as converting to RGB for display or CMYK for printing.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">What happens if I input LAB values outside normal ranges?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                While LAB values can theoretically extend beyond typical ranges, extreme values may produce XYZ coordinates outside the visible spectrum. Our converter handles these cases mathematically correctly, but such colors may not be reproducible on physical devices or displays.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">How does this converter handle the D65 illuminant?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our converter uses the CIE standard D65 illuminant (daylight at 6500K) with white point coordinates X=95.047, Y=100.000, Z=108.883. This ensures compatibility with sRGB, most display systems, and international color management standards.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Is this LAB to XYZ converter suitable for professional use?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, our converter implements the official CIE formulas with professional-grade precision. It&apos;s suitable for color management workflows, quality control, and research applications. However, for critical applications, always validate results with certified reference standards.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Can I integrate this conversion into my own software?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! We provide complete code examples in Python and JavaScript that you can use in your own projects. The conversion algorithms are based on public CIE standards and can be freely implemented in commercial and open-source software.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Technical Notes</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">D65 Illuminant</h3>
              <p className="text-gray-600 dark:text-gray-300">
                This converter uses the D65 illuminant (daylight at 6500K) as the reference white point, which is the standard for sRGB and most modern display systems. The D65 white point coordinates are X=95.047, Y=100.000, Z=108.883.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Perceptual Uniformity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                CIELAB is designed to be perceptually uniform, meaning that equal distances in the LAB color space correspond to equal perceived color differences. This makes it ideal for color difference calculations and color matching applications.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Precision Considerations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The conversion involves cube root and power operations that can introduce small numerical errors. For critical applications, consider using higher precision arithmetic or specialized color science libraries.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Related Color Tools</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/tools/xyz-to-lab" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">XYZ to LAB Calculator</h3>
              <p className="text-gray-600 dark:text-gray-300">Convert CIE XYZ colors to CIELAB color space with precise mathematical formulas.</p>
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
