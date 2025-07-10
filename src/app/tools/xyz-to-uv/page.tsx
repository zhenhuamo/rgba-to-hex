'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function XYZToUVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            XYZ to UV Coordinates Converter - CIE 1960 UCS Chromaticity Tool
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Professional online tool to convert CIE XYZ tristimulus values to CIE 1960 UCS (Uniform Chromaticity Scale)
            coordinates (u, v). Essential for color temperature calculations, LED characterization, lighting design,
            and optical device calibration in the lighting industry.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full font-medium">CIE 1960 UCS</span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium">Color Temperature</span>
            <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full font-medium">LED Characterization</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full font-medium">Lighting Industry</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Interactive XYZ to UV Converter
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Convert XYZ coordinates to UV chromaticity coordinates with real-time calculations
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
            <iframe
              src="/tools/xyz-to-uv-converter?embed=true"
              width="100%"
              height="600"
              style={{ border: 'none' }}
              className="rounded-lg"
              title="XYZ to UV Converter Tool"
            />
          </div>
          
          <div className="text-center">
            <Link
              href="/tools/xyz-to-uv-converter"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Open Full Converter</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              What is CIE 1960 UCS (Uniform Chromaticity Scale)?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                The CIE 1960 UCS (Uniform Chromaticity Scale) was developed by David MacAdam to create
                a more perceptually uniform chromaticity diagram. Unlike the CIE 1931 xy chromaticity
                diagram, the UCS provides better visual uniformity where equal distances represent
                more similar perceived color differences.
              </p>
              <p>
                <strong className="text-gray-800 dark:text-gray-200">Key advantages of UV coordinates:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Perceptual uniformity:</strong> Equal distances represent similar color differences</li>
                <li><strong>Color temperature calculations:</strong> Essential for correlated color temperature (CCT)</li>
                <li><strong>LED characterization:</strong> Standard for LED binning and quality control</li>
                <li><strong>Lighting standards:</strong> Used in ANSI C78.377 and IES standards</li>
                <li><strong>Optical calibration:</strong> Critical for display and camera calibration</li>
                <li><strong>Color difference metrics:</strong> Foundation for advanced color difference formulas</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Industry Note:</strong> The CIE 1960 UCS is still widely used in the lighting
                  industry for color temperature specifications, even though it was superseded by the
                  CIE 1976 UCS (u&apos;, v&apos;) for general colorimetric applications.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              XYZ to UV Conversion Formula & Mathematics
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">CIE 1960 UCS Transformation:</h3>
                <div className="font-mono text-sm text-gray-600 dark:text-gray-300 space-y-2 bg-gray-900 text-green-400 p-3 rounded">
                  <div>u = 4X / (X + 15Y + 3Z)</div>
                  <div>v = 6Y / (X + 15Y + 3Z)</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Formula Explanation:</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Input Parameters:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>X:</strong> Red-green tristimulus value</li>
                        <li><strong>Y:</strong> Luminance (brightness) component</li>
                        <li><strong>Z:</strong> Blue-yellow tristimulus value</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Output Coordinates:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>u:</strong> Horizontal chromaticity (≈0.0-0.7)</li>
                        <li><strong>v:</strong> Vertical chromaticity (≈0.0-0.6)</li>
                        <li>Both coordinates are dimensionless</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <p className="text-yellow-800 dark:text-yellow-200">
                      <strong>Mathematical Note:</strong> The denominator (X + 15Y + 3Z) normalizes the coordinates,
                      ensuring they represent chromaticity (color quality) independent of luminance. The coefficients
                      4, 15, 6, and 3 were chosen by MacAdam to optimize perceptual uniformity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Color Temperature and UV Coordinates
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                UV coordinates are fundamental for calculating <strong>Correlated Color Temperature (CCT)</strong>,
                which describes how &quot;warm&quot; or &quot;cool&quot; a light source appears. This is crucial in the lighting
                industry for LED specification and quality control.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">CCT Calculation Process:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li>Convert XYZ to UV coordinates</li>
                  <li>Find closest point on Planckian locus</li>
                  <li>Calculate temperature using Robertson&apos;s method</li>
                  <li>Determine color temperature in Kelvin</li>
                </ol>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Common Color Temperatures:</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between"><span>Candlelight:</span><span>1900K</span></div>
                  <div className="flex justify-between"><span>Warm White LED:</span><span>2700K-3000K</span></div>
                  <div className="flex justify-between"><span>Cool White LED:</span><span>4000K-5000K</span></div>
                  <div className="flex justify-between"><span>Daylight:</span><span>6500K</span></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">LED Industry Applications:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li><strong>LED Binning:</strong> Grouping LEDs by color consistency</li>
                  <li><strong>Quality Control:</strong> Ensuring color uniformity in production</li>
                  <li><strong>Color Mixing:</strong> Combining different LED colors</li>
                  <li><strong>Specification:</strong> Meeting ANSI C78.377 standards</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Measurement Standards:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-purple-700 dark:text-purple-300">
                  <li><strong>ANSI C78.377:</strong> LED color consistency</li>
                  <li><strong>IES LM-79:</strong> LED testing procedures</li>
                  <li><strong>CIE 15:</strong> Colorimetry standards</li>
                  <li><strong>Energy Star:</strong> Efficiency requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Professional Applications & Industries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">Color Science Research</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Colorimetric analysis:</strong> Precise color measurement and specification</li>
                <li>• <strong>Color difference studies:</strong> Perceptual uniformity research</li>
                <li>• <strong>Metamerism analysis:</strong> Color matching under different illuminants</li>
                <li>• <strong>Color appearance models:</strong> Advanced color prediction algorithms</li>
                <li>• <strong>Spectral analysis:</strong> Converting spectral data to chromaticity</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">Lighting & LED Industry</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>LED binning:</strong> Sorting LEDs by color consistency (MacAdam ellipses)</li>
                <li>• <strong>CCT calculation:</strong> Determining correlated color temperature</li>
                <li>• <strong>Quality control:</strong> Ensuring ANSI C78.377 compliance</li>
                <li>• <strong>Color mixing:</strong> Multi-channel LED system design</li>
                <li>• <strong>Circadian lighting:</strong> Tunable white light systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">Display Technology</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Monitor calibration:</strong> Professional display color accuracy</li>
                <li>• <strong>Gamut mapping:</strong> Color space conversion and optimization</li>
                <li>• <strong>White point adjustment:</strong> Display color temperature tuning</li>
                <li>• <strong>Projector setup:</strong> Cinema and presentation calibration</li>
                <li>• <strong>Mobile displays:</strong> Smartphone and tablet color management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">Manufacturing & QC</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Production control:</strong> Consistent color in manufacturing</li>
                <li>• <strong>Material testing:</strong> Paint, textile, and plastic color verification</li>
                <li>• <strong>Batch matching:</strong> Ensuring color consistency across lots</li>
                <li>• <strong>Automotive industry:</strong> Interior and exterior color matching</li>
                <li>• <strong>Cosmetics:</strong> Foundation and makeup color development</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">Design & Creative</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Color palette creation:</strong> Harmonious color scheme development</li>
                <li>• <strong>Brand color specification:</strong> Consistent corporate identity</li>
                <li>• <strong>Print production:</strong> Color accuracy in offset and digital printing</li>
                <li>• <strong>Photography:</strong> Color grading and correction workflows</li>
                <li>• <strong>Interior design:</strong> Lighting and color coordination</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">Optical Instruments</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Colorimeter calibration:</strong> Instrument accuracy verification</li>
                <li>• <strong>Spectrophotometer setup:</strong> Measurement device configuration</li>
                <li>• <strong>Camera characterization:</strong> Digital imaging color accuracy</li>
                <li>• <strong>Scanner profiling:</strong> Document and image digitization</li>
                <li>• <strong>Microscopy:</strong> Scientific imaging color standardization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                What&apos;s the difference between CIE 1960 UCS and CIE 1976 UCS?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                CIE 1960 UCS uses (u, v) coordinates, while CIE 1976 UCS uses (u&apos;, v&apos;) coordinates. The 1976 version
                provides better perceptual uniformity and is preferred for general colorimetric applications. However,
                the 1960 version is still widely used in the lighting industry for color temperature calculations
                and LED specifications.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Why are UV coordinates important for LED manufacturing?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                UV coordinates enable precise LED binning and color consistency control. LEDs with similar UV coordinates
                will appear the same color to human observers, making them essential for quality control in LED production.
                The ANSI C78.377 standard uses UV coordinates to define acceptable color variation ranges for LED products.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                How accurate is the XYZ to UV conversion?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The conversion is mathematically exact and deterministic. The accuracy depends on the precision of your
                input XYZ values. Our tool uses double-precision floating-point arithmetic to ensure maximum accuracy
                for professional applications. The conversion follows the official CIE formulas without approximations.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Can I use UV coordinates for color temperature calculations?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! UV coordinates are essential for calculating Correlated Color Temperature (CCT). The process involves
                finding the closest point on the Planckian locus in the UV diagram and using methods like Robertson&apos;s
                algorithm to determine the temperature in Kelvin. This is the standard approach used in the lighting industry.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                What are typical UV coordinate ranges?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                For visible colors, u coordinates typically range from about 0.0 to 0.7, and v coordinates from 0.0 to 0.6.
                Common white light sources have u values around 0.15-0.25 and v values around 0.3-0.5. The exact values
                depend on the color temperature and tint of the light source.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Programming Implementation Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <span className="text-green-500 mr-2">🐍</span>
                Python Implementation (NumPy)
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import numpy as np

def xyz_to_uv(X, Y, Z):
    """
    Convert CIE XYZ to CIE 1960 UCS coordinates

    Parameters:
    X, Y, Z: float or array-like
        CIE XYZ tristimulus values

    Returns:
    tuple: (u, v) chromaticity coordinates
    """
    # Handle array inputs
    X, Y, Z = np.asarray(X), np.asarray(Y), np.asarray(Z)

    # Calculate denominator
    denominator = X + 15*Y + 3*Z

    # Handle division by zero
    mask = denominator != 0
    u = np.zeros_like(X)
    v = np.zeros_like(Y)

    u[mask] = (4 * X[mask]) / denominator[mask]
    v[mask] = (6 * Y[mask]) / denominator[mask]

    return u, v

# Example usage
X, Y, Z = 41.24, 21.26, 1.93  # sRGB Red (D65)
u, v = xyz_to_uv(X, Y, Z)
print(f"UV: ({u:.6f}, {v:.6f})")

# Batch processing example
xyz_colors = np.array([[41.24, 21.26, 1.93],   # Red
                       [35.76, 71.52, 11.92],   # Green
                       [18.05, 7.22, 95.05]])   # Blue
u_vals, v_vals = xyz_to_uv(xyz_colors[:, 0],
                           xyz_colors[:, 1],
                           xyz_colors[:, 2])
for i, (u, v) in enumerate(zip(u_vals, v_vals)):
    print(f"Color {i+1}: u={u:.4f}, v={v:.4f}")`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <span className="text-yellow-500 mr-2">⚡</span>
                JavaScript Implementation (ES6+)
              </h3>
              <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`/**
 * Convert CIE XYZ to CIE 1960 UCS coordinates
 * @param {number} X - X tristimulus value
 * @param {number} Y - Y tristimulus value
 * @param {number} Z - Z tristimulus value
 * @returns {Object} {u, v} chromaticity coordinates
 */
function xyzToUv(X, Y, Z) {
    // Validate inputs
    if (typeof X !== 'number' || typeof Y !== 'number' || typeof Z !== 'number') {
        throw new Error('XYZ values must be numbers');
    }

    // Calculate denominator
    const denominator = X + 15*Y + 3*Z;

    // Handle edge case
    if (denominator === 0) {
        return { u: 0, v: 0 };
    }

    const u = (4 * X) / denominator;
    const v = (6 * Y) / denominator;

    return { u, v };
}

// Class-based implementation for color management
class ColorConverter {
    static xyzToUv(xyz) {
        const { X, Y, Z } = xyz;
        return xyzToUv(X, Y, Z);
    }

    static batchXyzToUv(xyzArray) {
        return xyzArray.map(xyz => this.xyzToUv(xyz));
    }
}

// Example usage
const srgbRed = { X: 41.24, Y: 21.26, Z: 1.93 };
const uv = ColorConverter.xyzToUv(srgbRed);
console.log(\`UV: (\${uv.u.toFixed(6)}, \${uv.v.toFixed(6)})\`);

// Batch processing
const colors = [
    { X: 41.24, Y: 21.26, Z: 1.93 },  // Red
    { X: 35.76, Y: 71.52, Z: 11.92 }, // Green
    { X: 18.05, Y: 7.22, Z: 95.05 }   // Blue
];
const uvResults = ColorConverter.batchXyzToUv(colors);
uvResults.forEach((uv, i) => {
    console.log(\`Color \${i+1}: u=\${uv.u.toFixed(4)}, v=\${uv.v.toFixed(4)}\`);
});`}</code>
              </pre>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <span className="text-blue-500 mr-2">🔷</span>
                C++ Implementation
              </h3>
              <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`#include <iostream>
#include <vector>
#include <iomanip>

struct UV {
    double u, v;
};

struct XYZ {
    double X, Y, Z;
};

/**
 * Convert CIE XYZ to CIE 1960 UCS coordinates
 */
UV xyzToUv(const XYZ& xyz) {
    double denominator = xyz.X + 15.0 * xyz.Y + 3.0 * xyz.Z;

    if (denominator == 0.0) {
        return {0.0, 0.0};
    }

    double u = (4.0 * xyz.X) / denominator;
    double v = (6.0 * xyz.Y) / denominator;

    return {u, v};
}

// Example usage
int main() {
    // sRGB Red color
    XYZ red = {41.24, 21.26, 1.93};
    UV uv = xyzToUv(red);

    std::cout << std::fixed << std::setprecision(6);
    std::cout << "UV: (" << uv.u << ", " << uv.v << ")" << std::endl;

    // Batch processing
    std::vector<XYZ> colors = {
        {41.24, 21.26, 1.93},   // Red
        {35.76, 71.52, 11.92},  // Green
        {18.05, 7.22, 95.05}    // Blue
    };

    for (size_t i = 0; i < colors.size(); ++i) {
        UV result = xyzToUv(colors[i]);
        std::cout << "Color " << (i+1) << ": u="
                  << std::setprecision(4) << result.u
                  << ", v=" << result.v << std::endl;
    }

    return 0;
}`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <span className="text-orange-500 mr-2">🦀</span>
                Rust Implementation
              </h3>
              <pre className="bg-gray-900 text-orange-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`#[derive(Debug, Clone, Copy)]
pub struct Xyz {
    pub x: f64,
    pub y: f64,
    pub z: f64,
}

#[derive(Debug, Clone, Copy)]
pub struct Uv {
    pub u: f64,
    pub v: f64,
}

impl Xyz {
    pub fn new(x: f64, y: f64, z: f64) -> Self {
        Self { x, y, z }
    }

    /// Convert XYZ to CIE 1960 UCS coordinates
    pub fn to_uv(&self) -> Uv {
        let denominator = self.x + 15.0 * self.y + 3.0 * self.z;

        if denominator == 0.0 {
            return Uv { u: 0.0, v: 0.0 };
        }

        let u = (4.0 * self.x) / denominator;
        let v = (6.0 * self.y) / denominator;

        Uv { u, v }
    }
}

fn main() {
    // sRGB Red color
    let red = Xyz::new(41.24, 21.26, 1.93);
    let uv = red.to_uv();

    println!("UV: ({:.6}, {:.6})", uv.u, uv.v);

    // Batch processing with iterator
    let colors = vec![
        Xyz::new(41.24, 21.26, 1.93),   // Red
        Xyz::new(35.76, 71.52, 11.92),  // Green
        Xyz::new(18.05, 7.22, 95.05),   // Blue
    ];

    for (i, color) in colors.iter().enumerate() {
        let uv = color.to_uv();
        println!("Color {}: u={:.4}, v={:.4}", i + 1, uv.u, uv.v);
    }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Related Color Conversion Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/tools/uv-to-xyz" target="_blank" className="block p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">UV to XYZ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Convert UV coordinates back to XYZ color space</p>
            </Link>
            <Link href="/tools/xyz-to-rgb" target="_blank" className="block p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">XYZ to RGB</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Convert XYZ to RGB color values</p>
            </Link>
            <Link href="/tools/xyz-to-lab" target="_blank" className="block p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">XYZ to LAB</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Convert XYZ to CIELAB color space</p>
            </Link>
            <Link href="/tools/xyz-to-spherical" target="_blank" className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">XYZ to Spherical</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Convert XYZ to spherical coordinates</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
