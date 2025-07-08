'use client';

import Navigation from '@/components/Navigation';
import { useEffect } from 'react';

export default function XyzToRgbPage() {
  useEffect(() => {
    document.title = 'XYZ to RGB Converter - CIE XYZ Color Space Transformation Matrix & Formula';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional XYZ to RGB converter with transformation matrix, formula, negative values handling. Convert CIE XYZ color space to RGB online with Python, JavaScript examples and sRGB D65 standard.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Enhanced SEO-Optimized Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                XYZ to RGB Converter - Free CIE XYZ Color Space Transformation Tool
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              Convert CIE XYZ color space to RGB online with professional transformation matrix and formula. Features real-time calculation display, technical details panel, negative values detection, supports sRGB D65 standard, includes Python, JavaScript programming examples and interactive step-by-step calculations.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for color scientists, digital designers, photographers, and developers working with device-independent color, color management systems, display calibration, and accurate color reproduction. Now featuring interactive technical details panel with live matrix calculations.
            </p>
          </div>

          {/* Converter Tool */}
          <div className="max-w-2xl mx-auto mb-12">
            <iframe 
              src="/tools/xyz-to-rgb-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="600"
              title="CIE XYZ to RGB Color Space Conversion Tool with Technical Details Panel"
              loading="lazy"
            />
            
            <div className="flex justify-center mt-6">
              <a
                href="/tools/xyz-to-rgb-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full XYZ to RGB Converter
              </a>
            </div>
          </div>

          {/* XYZ to RGB Transformation Matrix & Formula */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">XYZ to RGB Transformation Matrix & Formula</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">sRGB D65 Transformation Matrix</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-lg mb-4 overflow-x-auto">
                  <div className="text-center">
                    <div className="mb-2"><strong>Linear RGB = M × XYZ</strong></div>
                    <div className="text-sm">
                      <div>⎡R⎤   ⎡ 3.2406 -1.5372 -0.4986⎤ ⎡X⎤</div>
                      <div>⎢G⎥ = ⎢-0.9689  1.8758  0.0415⎥ ⎢Y⎥</div>
                      <div>⎣B⎦   ⎣ 0.0557 -0.2040  1.0570⎦ ⎣Z⎦</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  This matrix converts CIE XYZ tristimulus values to linear sRGB primaries using the standard D65 illuminant (6500K daylight).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Step-by-Step Conversion Process</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <strong>1. Matrix Multiplication:</strong>
                      <div className="font-mono mt-1">
                        R_linear = 3.2406×X - 1.5372×Y - 0.4986×Z<br/>
                        G_linear = -0.9689×X + 1.8758×Y + 0.0415×Z<br/>
                        B_linear = 0.0557×X - 0.2040×Y + 1.0570×Z
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <strong>2. Gamma Correction (sRGB):</strong>
                      <div className="font-mono mt-1 text-xs">
                        if (linear ≤ 0.0031308):<br/>
                        &nbsp;&nbsp;sRGB = 12.92 × linear<br/>
                        else:<br/>
                        &nbsp;&nbsp;sRGB = 1.055 × linear^(1/2.4) - 0.055
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <strong>3. Range Clamping:</strong>
                      <div className="font-mono mt-1">
                        RGB = clamp(sRGB × 255, 0, 255)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Example Calculation: XYZ(41.24, 21.26, 1.93)</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <strong>Matrix Multiplication:</strong><br/>
                      R = 3.2406×41.24 - 1.5372×21.26 - 0.4986×1.93<br/>
                      R = 133.68 - 32.69 - 0.96 = 100.03<br/>
                      G = -0.9689×41.24 + 1.8758×21.26 + 0.0415×1.93<br/>
                      G = -39.95 + 39.87 + 0.08 = 0.00<br/>
                      B = 0.0557×41.24 - 0.2040×21.26 + 1.0570×1.93<br/>
                      B = 2.30 - 4.34 + 2.04 = 0.00
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <strong>Gamma & Scale:</strong><br/>
                      R = 1.055 × (1.0003)^(1/2.4) - 0.055 = 1.0<br/>
                      RGB(255, 0, 0) - Pure Red
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* XYZ to RGB Conversion Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">XYZ to RGB Reference Values & Standards</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Standard Color Primaries */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">sRGB Primary Colors (D65)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-blue-100 dark:bg-blue-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Color</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">X</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Y</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Z</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">RGB</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      {[
                        ['Red', '41.24', '21.26', '1.93', '255,0,0'],
                        ['Green', '35.76', '71.52', '11.92', '0,255,0'],
                        ['Blue', '18.05', '7.22', '95.05', '0,0,255'],
                        ['White D65', '95.05', '100.00', '108.90', '255,255,255'],
                        ['Black', '0.00', '0.00', '0.00', '0,0,0'],
                        ['Yellow', '77.00', '92.78', '13.85', '255,255,0'],
                        ['Cyan', '53.81', '78.74', '106.97', '0,255,255'],
                        ['Magenta', '59.29', '28.48', '96.98', '255,0,255']
                      ].map(([color, x, y, z, rgb], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-bold">{color}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{x}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{y}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{z}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-xs">{rgb}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* XYZ Value Ranges */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">XYZ Value Ranges & Limits</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Standard D65 Ranges:</h4>
                    <div className="font-mono text-sm space-y-1">
                      <div><strong>X:</strong> 0.0 - 95.047 (typical range)</div>
                      <div><strong>Y:</strong> 0.0 - 100.0 (luminance)</div>
                      <div><strong>Z:</strong> 0.0 - 108.883 (typical range)</div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Handling Negative Values:</h4>
                    <div className="text-sm space-y-2">
                      <div>• Negative XYZ values can occur with certain illuminants</div>
                      <div>• Matrix multiplication may produce negative RGB</div>
                      <div>• Clamp negative values to 0 for display</div>
                      <div>• Use specialized color management for extreme cases</div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Out-of-Gamut Colors:</h4>
                    <div className="text-sm space-y-2">
                      <div>• XYZ can represent colors outside sRGB gamut</div>
                      <div>• RGB values &gt; 255 indicate out-of-gamut</div>
                      <div>• Apply gamut mapping or clipping as needed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Programming Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">XYZ to RGB Programming Implementation</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Python */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">🐍</span>
                  Python - XYZ to RGB Conversion
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import numpy as np

# XYZ to sRGB transformation matrix
xyz_to_rgb_matrix = np.array([
    [3.2406, -1.5372, -0.4986],
    [-0.9689,  1.8758,  0.0415],
    [0.0557, -0.2040,  1.0570]
])

def xyz_to_rgb(x, y, z):
    """Convert CIE XYZ to sRGB using D65 illuminant"""
    # Current XYZ values (normalized to 0-1 range)
    xyz = np.array([x/100.0, y/100.0, z/100.0])
    
    # Matrix multiplication
    rgb_linear = np.dot(xyz_to_rgb_matrix, xyz)
    print(f"Linear RGB: {rgb_linear}")
    
    # Gamma correction
    def linear_to_srgb(c):
        return 12.92 * c if c <= 0.0031308 else 1.055 * (c ** (1/2.4)) - 0.055
    
    rgb_gamma = np.array([linear_to_srgb(c) for c in rgb_linear])
    
    # Clamp to valid range and convert to 8-bit
    rgb_final = np.clip(rgb_gamma * 255, 0, 255).astype(int)
    print(f"Final RGB: {rgb_final}")
    
    return tuple(rgb_final)

# Example usage
xyz = (41.24, 21.26, 1.93)  # Red primary
rgb = xyz_to_rgb(*xyz)
print(f"XYZ{xyz} -> RGB{rgb}")  # (255, 0, 0)`}</code>
                </pre>
              </div>

              {/* JavaScript */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">⚡</span>
                  JavaScript - XYZ to RGB Conversion
                </h3>
                <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// XYZ to sRGB transformation matrix
const xyzToRgbMatrix = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689,  1.8758,  0.0415],
    [0.0557, -0.2040,  1.0570]
];

function xyzToRgb(x, y, z) {
    // Current XYZ values (normalized to 0-1 range)
    const xyz = [x/100.0, y/100.0, z/100.0];
    
    // Matrix multiplication
    const rgbLinear = [
        xyz[0] * xyzToRgbMatrix[0][0] + xyz[1] * xyzToRgbMatrix[0][1] + xyz[2] * xyzToRgbMatrix[0][2],
        xyz[0] * xyzToRgbMatrix[1][0] + xyz[1] * xyzToRgbMatrix[1][1] + xyz[2] * xyzToRgbMatrix[1][2],
        xyz[0] * xyzToRgbMatrix[2][0] + xyz[1] * xyzToRgbMatrix[2][1] + xyz[2] * xyzToRgbMatrix[2][2]
    ];
    
    // Gamma correction
    const linearToSrgb = (c) => c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1/2.4) - 0.055;
    const rgbGamma = rgbLinear.map(linearToSrgb);
    
    // Clamp and convert to 8-bit
    const rgbFinal = rgbGamma.map(c => Math.max(0, Math.min(255, Math.round(c * 255))));
    console.log('Final RGB:', rgbFinal);
    
    return rgbFinal;
}

// Example usage
const xyz = [41.24, 21.26, 1.93];  // Red primary
const rgb = xyzToRgb(...xyz);
console.log(\`XYZ(\${xyz.join(',')}) -> RGB(\${rgb.join(',')})\`);`}</code>
                </pre>
              </div>

              {/* MATLAB/Octave */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">📊</span>
                  MATLAB - XYZ to RGB Conversion
                </h3>
                <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`function rgb = xyz2rgb(xyz)
    % Convert CIE XYZ to sRGB (D65 illuminant)
    
    % sRGB transformation matrix
    M = [ 3.2406 -1.5372 -0.4986;
         -0.9689  1.8758  0.0415;
          0.0557 -0.2040  1.0570];
    
    % Normalize XYZ values (D65 white point)
    xyz_norm = xyz ./ [95.047; 100.0; 108.883];
    
    % Matrix transformation
    rgb_linear = M * xyz_norm;
    
    % Handle negative values
    rgb_linear = max(rgb_linear, 0);
    
    % Apply gamma correction
    gamma_func = @(c) ifelse(c <= 0.0031308, ...
                            12.92 * c, ...
                            1.055 * c.^(1/2.4) - 0.055);
    
    rgb_gamma = arrayfun(gamma_func, rgb_linear);
    
    % Scale to 0-255
    rgb = round(rgb_gamma * 255);
    rgb = max(0, min(255, rgb));
end

% Example usage
xyz = [41.24; 21.26; 1.93];  % Red primary
rgb = xyz2rgb(xyz);
fprintf('XYZ(%.2f,%.2f,%.2f) -> RGB(%d,%d,%d)\\n', ...
        xyz(1), xyz(2), xyz(3), rgb(1), rgb(2), rgb(3));`}</code>
                </pre>
              </div>

              {/* C++ */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">⚙️</span>
                  C++ - XYZ to RGB Conversion
                </h3>
                <pre className="bg-gray-900 text-red-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`#include <algorithm>
#include <cmath>

struct RGB {
    int r, g, b;
};

struct XYZ {
    double x, y, z;
};

RGB xyzToRgb(const XYZ& xyz) {
    // sRGB transformation matrix (D65)
    const double matrix[3][3] = {
        { 3.2406, -1.5372, -0.4986},
        {-0.9689,  1.8758,  0.0415},
        { 0.0557, -0.2040,  1.0570}
    };
    
    // Normalize XYZ (D65 white point)
    double xn = xyz.x / 95.047;
    double yn = xyz.y / 100.0;
    double zn = xyz.z / 108.883;
    
    // Matrix multiplication
    double r = matrix[0][0]*xn + matrix[0][1]*yn + matrix[0][2]*zn;
    double g = matrix[1][0]*xn + matrix[1][1]*yn + matrix[1][2]*zn;
    double b = matrix[2][0]*xn + matrix[2][1]*yn + matrix[2][2]*zn;
    
    // Handle negative values
    r = std::max(0.0, r);
    g = std::max(0.0, g);
    b = std::max(0.0, b);
    
    // Gamma correction function
    auto gammaCorrect = [](double c) -> double {
        if (c <= 0.0031308) {
            return 12.92 * c;
        } else {
            return 1.055 * std::pow(c, 1.0/2.4) - 0.055;
        }
    };
    
    r = gammaCorrect(r);
    g = gammaCorrect(g);
    b = gammaCorrect(b);
    
    // Scale and clamp to 0-255
    return {
        std::max(0, std::min(255, static_cast<int>(r * 255))),
        std::max(0, std::min(255, static_cast<int>(g * 255))),
        std::max(0, std::min(255, static_cast<int>(b * 255)))
    };
}

// Example usage
int main() {
    XYZ red_xyz = {41.24, 21.26, 1.93};
    RGB red_rgb = xyzToRgb(red_xyz);
    
    printf("XYZ(%.2f,%.2f,%.2f) -> RGB(%d,%d,%d)\\n",
           red_xyz.x, red_xyz.y, red_xyz.z,
           red_rgb.r, red_rgb.g, red_rgb.b);
    
    return 0;
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Advanced Color Science Topics */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Advanced XYZ to RGB Color Science</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Illuminants and White Points */}
              <div className="space-y-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Illuminants & White Points</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Standard Illuminants:</h4>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm space-y-1">
                        <div><strong>D65 (6500K):</strong> X=95.047, Y=100.000, Z=108.883</div>
                        <div><strong>D50 (5000K):</strong> X=96.422, Y=100.000, Z=82.521</div>
                        <div><strong>A (2856K):</strong> X=109.850, Y=100.000, Z=35.585</div>
                        <div><strong>E (Equal):</strong> X=100.000, Y=100.000, Z=100.000</div>
                      </div>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Different illuminants require different transformation matrices. D65 is standard for sRGB, while D50 is used for Adobe RGB and print workflows.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-200">Color Gamuts & RGB Spaces</h3>
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <h4 className="font-semibold">sRGB (Standard RGB)</h4>
                      <div className="text-sm">Coverage: ~35% of visible spectrum</div>
                      <div className="text-sm">Gamma: 2.4 (with linear segment)</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <h4 className="font-semibold">Adobe RGB (1998)</h4>
                      <div className="text-sm">Coverage: ~50% of visible spectrum</div>
                      <div className="text-sm">Better for print workflows</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <h4 className="font-semibold">ProPhoto RGB</h4>
                      <div className="text-sm">Coverage: ~90% of visible spectrum</div>
                      <div className="text-sm">Professional photography</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chromatic Adaptation and Color Management */}
              <div className="space-y-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">Chromatic Adaptation</h3>
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <h4 className="font-semibold">Bradford Transform</h4>
                      <div className="font-mono text-xs space-y-1">
                        <div>⎡ 0.8951  0.2664 -0.1614⎤</div>
                        <div>⎢-0.7502  1.7135  0.0367⎥</div>
                        <div>⎣ 0.0389 -0.0685  1.0296⎦</div>
                      </div>
                    </div>
                    <p className="text-sm text-cyan-700 dark:text-cyan-300">
                      Used for converting between different illuminants before XYZ to RGB transformation.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">Handling Out-of-Gamut Colors</h3>
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <h4 className="font-semibold">Clipping Method</h4>
                      <div className="text-sm">Simply clamp RGB values to 0-255 range</div>
                      <div className="text-sm text-red-600">⚠ May cause color shifts</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <h4 className="font-semibold">Perceptual Rendering</h4>
                      <div className="text-sm">Compress entire color range proportionally</div>
                      <div className="text-sm text-green-600">✓ Maintains color relationships</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <h4 className="font-semibold">Relative Colorimetric</h4>
                      <div className="text-sm">Map out-of-gamut to gamut boundary</div>
                      <div className="text-sm text-blue-600">→ Preserves in-gamut colors exactly</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Negative RGB Values</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Causes:</strong></div>
                    <div>• XYZ colors outside RGB gamut</div>
                    <div>• Imaginary colors from spectral data</div>
                    <div>• Measurement errors in colorimetry</div>
                    <div className="mt-3"><strong>Solutions:</strong></div>
                    <div>• Clamp to zero (simplest)</div>
                    <div>• Use wider gamut RGB space</div>
                    <div>• Apply gamut mapping algorithms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embed This Tool Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Embed This XYZ to RGB Converter</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Integrate this professional CIE XYZ to RGB converter into your color management system, educational platform, or scientific application:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/xyz-to-rgb-converter?embed=true" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="CIE XYZ to RGB Color Space Converter"
></iframe>`}</code>
              </pre>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">XYZ to RGB Conversion - Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">What is the difference between CIE XYZ and RGB color spaces?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  CIE XYZ is a device-independent color space based on human vision tristimulus values, representing all colors visible to the human eye. RGB is a device-dependent additive color model designed for displays and digital devices. XYZ serves as a reference standard, while RGB is optimized for practical display implementation with specific primaries and gamma correction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">How do you handle negative RGB values in XYZ to RGB conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Negative RGB values occur when XYZ colors are outside the sRGB gamut. Common approaches include: 1) Clipping negative values to zero (simplest), 2) Using gamut mapping algorithms to compress out-of-gamut colors, 3) Switching to a wider gamut RGB space like Adobe RGB or ProPhoto RGB, 4) Applying perceptual rendering intent to maintain color relationships while fitting within the target gamut.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Which transformation matrix should I use for XYZ to RGB conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The transformation matrix depends on your target RGB space and illuminant. For standard web and display work, use the sRGB D65 matrix. For print workflows, consider Adobe RGB (1998) with D65. For wide-gamut photography, use ProPhoto RGB. Always ensure the illuminant of your XYZ data matches the matrix illuminant, or apply chromatic adaptation (like Bradford transform) when necessary.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">Why is gamma correction necessary in XYZ to RGB conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gamma correction compensates for the non-linear response of display devices and human vision. XYZ values are linear (proportional to physical light intensity), but displays and human perception are non-linear. The sRGB gamma function (approximately 2.4) ensures that equal numeric steps in RGB produce perceptually uniform brightness changes on typical displays.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">How accurate is the XYZ to RGB conversion for color-critical applications?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our converter uses the standard sRGB transformation matrix with D65 illuminant, providing accuracy suitable for most color-critical applications. For maximum precision in professional workflows, consider: 1) Calibrated display profiles, 2) Appropriate illuminant matching, 3) Color management systems (CMS), 4) Measurement validation with spectrophotometers, 5) Proper handling of out-of-gamut colors through perceptual rendering.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Can I convert XYZ to RGB in Python for batch processing?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! Use NumPy for efficient batch processing. The transformation involves matrix multiplication, gamma correction, and scaling. For professional applications, consider using color science libraries like `colour-science` or `colorspacious` which handle illuminant adaptation, different RGB spaces, and advanced color management features automatically.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400">What are the new technical details and real-time calculation features?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our enhanced converter now includes a dedicated Technical Details panel that displays: 1) Live transformation matrix visualization, 2) Step-by-step calculation breakdown showing matrix multiplication in real-time, 3) Automatic negative value detection with warnings when colors are outside the sRGB gamut, 4) Interactive code examples for Python and JavaScript that update with current values, 5) Detailed explanation of gamma correction and range clamping processes. This makes it perfect for educational use and understanding the mathematical principles behind XYZ to RGB conversion.
                </p>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">Related Color Conversion Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/tools/rgb-to-lab" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">RGB to LAB Converter</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Convert RGB to perceptually uniform LAB color space</p>
              </a>
              <a href="/tools/oklch-to-hex" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">OKLCH to HEX Converter</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Modern perceptual color space to web colors</p>
              </a>
              <a href="/tools/color-contrast" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Color Contrast Checker</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">WCAG accessibility and contrast validation</p>
              </a>
            </div>
          </div>

          {/* Keywords Footer */}
          <div className="flex flex-wrap gap-2 justify-center pt-8 border-t border-gray-200 dark:border-gray-600">
            {[
              'xyz to rgb', 'xyz to rgb matrix', 'xyz to rgb formula', 'xyz to rgb conversion', 
              'xyz to rgb online', 'xyz to rgb converter', 'xyz to rgb negative values', 
              'xyz to rgb transformation matrix', 'xyz to rgb python', 'CIE XYZ', 'sRGB D65',
              'color space conversion', 'gamma correction', 'chromatic adaptation', 'real-time calculation',
              'technical details panel', 'interactive matrix visualization', 'live color conversion'
            ].map((keyword) => (
              <span key={keyword} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 