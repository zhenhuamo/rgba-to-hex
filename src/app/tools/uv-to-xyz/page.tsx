'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function UVToXYZPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            UV to XYZ Converter - CIE 1960 UCS to Tristimulus Values
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Professional tool to convert CIE 1960 UCS chromaticity coordinates (u, v) back to CIE XYZ tristimulus values.
            Essential for reconstructing full color information from chromaticity data in lighting design, LED manufacturing,
            and color science applications. Requires luminance (Y) input for complete color specification.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full font-medium">Chromaticity Reconstruction</span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium">Luminance Required</span>
            <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full font-medium">Professional Tool</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full font-medium">Color Science</span>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3">
                Critical: Luminance (Y) Value Required for Complete Conversion
              </h3>
              <div className="space-y-3 text-amber-700 dark:text-amber-300">
                <p>
                  <strong>UV coordinates are chromaticity coordinates</strong> - they only describe the color&apos;s hue and saturation,
                  not its brightness. To reconstruct the complete XYZ color specification, you must provide the Y (luminance) value separately.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Y Value Guidelines:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Range: 0-100 (typical)</li>
                      <li>0 = Perfect black</li>
                      <li>100 = Perfect white diffuser</li>
                      <li>18 = Middle gray (photography)</li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Common Applications:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>LED color reconstruction</li>
                      <li>Display calibration</li>
                      <li>Color temperature analysis</li>
                      <li>Spectral data processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Interactive UV to XYZ Converter
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Convert UV chromaticity coordinates to XYZ color space with luminance input
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
            <iframe
              src="/tools/uv-to-xyz-converter?embed=true"
              width="100%"
              height="700"
              style={{ border: 'none' }}
              className="rounded-lg"
              title="UV to XYZ Converter Tool"
            />
          </div>
          
          <div className="text-center">
            <Link
              href="/tools/uv-to-xyz-converter"
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
              Understanding Chromaticity Reconstruction
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <strong>UV to XYZ conversion</strong> is fundamentally different from XYZ to UV because it involves
                <em>reconstructing</em> three-dimensional color information from two-dimensional chromaticity data.
                This process requires understanding the mathematical relationship between chromaticity and tristimulus values.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Why Luminance (Y) is Required:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li><strong>Dimensionality:</strong> UV (2D) → XYZ (3D) requires additional information</li>
                  <li><strong>Normalization:</strong> UV coordinates are normalized, losing absolute scale</li>
                  <li><strong>Infinite solutions:</strong> Infinite XYZ colors can have identical UV coordinates</li>
                  <li><strong>Brightness specification:</strong> Y determines the color&apos;s luminance level</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Practical Considerations:</h4>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
                    <span><strong>Perfect Black:</strong></span><span>Y = 0</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
                    <span><strong>18% Gray Card:</strong></span><span>Y = 18</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
                    <span><strong>Typical Paper:</strong></span><span>Y = 80-90</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
                    <span><strong>Perfect Diffuser:</strong></span><span>Y = 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>LED Output:</strong></span><span>Y = Variable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              UV to XYZ Mathematical Formulation
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Reconstruction Formulas:</h3>
                <div className="font-mono text-sm bg-gray-900 text-green-400 p-3 rounded space-y-2">
                  <div>X = (1.5 × u × Y) / v</div>
                  <div>Y = Y (input parameter)</div>
                  <div>Z = (6Y/v - X - 15Y) / 3</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Derivation Steps:</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                    <p><strong>Step 1:</strong> From the forward transformation:</p>
                    <div className="font-mono text-xs mt-1">
                      u = 4X / (X + 15Y + 3Z)<br/>
                      v = 6Y / (X + 15Y + 3Z)
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <p><strong>Step 2:</strong> Solve for X in terms of u, v, Y:</p>
                    <div className="font-mono text-xs mt-1">
                      X = (1.5 × u × Y) / v
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <p><strong>Step 3:</strong> Solve for Z using the constraint:</p>
                    <div className="font-mono text-xs mt-1">
                      Z = (6Y/v - X - 15Y) / 3
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded text-sm">
                  <p className="text-red-800 dark:text-red-200">
                    <strong>Edge Case:</strong> When v = 0, the formulas become undefined. This occurs for
                    colors on the u-axis, which are theoretical and rarely encountered in practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Professional Applications & Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">LED Manufacturing</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Color reconstruction:</strong> Converting measured UV coordinates back to XYZ</li>
                <li>• <strong>Binning verification:</strong> Confirming LED color consistency</li>
                <li>• <strong>Quality control:</strong> Validating production color specifications</li>
                <li>• <strong>Color mixing:</strong> Calculating individual LED contributions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">Spectral Analysis</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Data processing:</strong> Converting spectrophotometer UV output</li>
                <li>• <strong>Color matching:</strong> Reconstructing colors from chromaticity</li>
                <li>• <strong>Material analysis:</strong> Determining color properties of samples</li>
                <li>• <strong>Research applications:</strong> Color science and vision studies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">Display Calibration</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Monitor setup:</strong> Converting chromaticity to display values</li>
                <li>• <strong>Projector calibration:</strong> Accurate color reproduction</li>
                <li>• <strong>Color management:</strong> ICC profile creation and validation</li>
                <li>• <strong>Gamut mapping:</strong> Color space transformation workflows</li>
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
                Why can&apos;t UV coordinates be converted to XYZ without the Y value?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                UV coordinates are chromaticity coordinates that represent color quality (hue and saturation) but not
                quantity (brightness). They&apos;re derived by normalizing XYZ values, which removes the absolute scale.
                To reconstruct XYZ, you need to specify the brightness level through the Y (luminance) component.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                How do I determine the correct Y value to use?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Y value depends on your application context. For LED measurements, use the measured luminance.
                For color matching, use the target brightness. For theoretical calculations, common values include
                18 (middle gray), 50 (medium brightness), or 100 (maximum white). The choice affects only brightness,
                not the color appearance.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                What happens if I use v = 0 in the conversion?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                When v = 0, the conversion formulas become mathematically undefined (division by zero). This represents
                colors on the u-axis of the UV diagram, which are theoretical edge cases rarely encountered in practice.
                Our tool handles this gracefully by returning appropriate default values or error messages.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Is the UV to XYZ conversion reversible and accurate?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, the conversion is mathematically exact and fully reversible when the Y value is known.
                Converting XYZ → UV → XYZ (with the same Y) will return the original values within floating-point precision.
                The accuracy depends only on the precision of your input values and computational environment.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Programming Implementation Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <span className="text-green-500 mr-2">🐍</span>
                Python Implementation
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import numpy as np

def uv_to_xyz(u, v, Y):
    """
    Convert CIE 1960 UCS coordinates to XYZ

    Parameters:
    u, v: float or array-like
        CIE 1960 UCS chromaticity coordinates
    Y: float or array-like
        Luminance value (0-100 typical)

    Returns:
    tuple: (X, Y, Z) tristimulus values
    """
    u, v, Y = np.asarray(u), np.asarray(v), np.asarray(Y)

    # Handle division by zero
    mask = v != 0
    X = np.zeros_like(u)
    Z = np.zeros_like(u)

    # Calculate X and Z where v != 0
    X[mask] = (1.5 * u[mask] * Y[mask]) / v[mask]
    Z[mask] = (6*Y[mask]/v[mask] - X[mask] - 15*Y[mask]) / 3

    return X, Y, Z

# Example usage
u, v, Y = 0.4476, 0.4074, 50.0  # Example values
X, Y_out, Z = uv_to_xyz(u, v, Y)
print(f"XYZ: ({X:.2f}, {Y_out:.2f}, {Z:.2f})")

# Batch processing
uv_data = np.array([[0.4476, 0.4074],  # Color 1
                    [0.3127, 0.3290],  # D65 white
                    [0.1978, 0.4683]])  # Example color
Y_values = np.array([50, 100, 25])

X_vals, Y_vals, Z_vals = uv_to_xyz(uv_data[:, 0],
                                   uv_data[:, 1],
                                   Y_values)
for i, (x, y, z) in enumerate(zip(X_vals, Y_vals, Z_vals)):
    print(f"Color {i+1}: XYZ({x:.2f}, {y:.2f}, {z:.2f})")`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <span className="text-yellow-500 mr-2">⚡</span>
                JavaScript Implementation
              </h3>
              <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`/**
 * Convert CIE 1960 UCS coordinates to XYZ
 * @param {number} u - u chromaticity coordinate
 * @param {number} v - v chromaticity coordinate
 * @param {number} Y - Luminance value
 * @returns {Object} {X, Y, Z} tristimulus values
 */
function uvToXyz(u, v, Y) {
    // Validate inputs
    if (typeof u !== 'number' || typeof v !== 'number' || typeof Y !== 'number') {
        throw new Error('All parameters must be numbers');
    }

    // Handle edge case where v = 0
    if (v === 0) {
        console.warn('v = 0: Conversion undefined, returning default values');
        return { X: 0, Y: Y, Z: 0 };
    }

    // Calculate X and Z
    const X = (1.5 * u * Y) / v;
    const Z = (6*Y/v - X - 15*Y) / 3;

    return { X, Y, Z };
}

// Class-based implementation
class UVConverter {
    static toXyz(uv, Y) {
        return uvToXyz(uv.u, uv.v, Y);
    }

    static batchConvert(uvArray, YArray) {
        if (uvArray.length !== YArray.length) {
            throw new Error('UV and Y arrays must have same length');
        }

        return uvArray.map((uv, i) => ({
            ...uv,
            xyz: this.toXyz(uv, YArray[i])
        }));
    }
}

// Example usage
const uv = { u: 0.4476, v: 0.4074 };
const Y = 50;
const xyz = UVConverter.toXyz(uv, Y);
console.log(\`XYZ: (\${xyz.X.toFixed(2)}, \${xyz.Y.toFixed(2)}, \${xyz.Z.toFixed(2)})\`);

// Batch processing
const uvColors = [
    { u: 0.4476, v: 0.4074 },  // Color 1
    { u: 0.3127, v: 0.3290 },  // D65 white
    { u: 0.1978, v: 0.4683 }   // Example color
];
const luminances = [50, 100, 25];

const results = UVConverter.batchConvert(uvColors, luminances);
results.forEach((result, i) => {
    const {X, Y, Z} = result.xyz;
    console.log(\`Color \${i+1}: XYZ(\${X.toFixed(2)}, \${Y.toFixed(2)}, \${Z.toFixed(2)})\`);
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Related Color Conversion Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/tools/xyz-to-uv" target="_blank" className="block p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">XYZ to UV</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Convert XYZ color space to UV coordinates</p>
            </Link>
            <Link href="/tools/xyz-to-rgb" target="_blank" className="block p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">XYZ to RGB</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Convert XYZ to RGB color values</p>
            </Link>
            <Link href="/tools/xyz-to-lab" target="_blank" className="block p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">XYZ to LAB</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Convert XYZ to CIELAB color space</p>
            </Link>
            <Link href="/tools/lab-to-xyz" target="_blank" className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">LAB to XYZ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Convert CIELAB to XYZ color space</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
