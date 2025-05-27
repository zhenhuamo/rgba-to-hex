'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function RgbToLab() {
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
              <Image src="/rgb.svg" alt="RGB to LAB Color Converter Calculator Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                RGB to LAB Color Converter & Calculator
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional RGB to LAB color converter calculator with mathematical formula, Python code examples, Excel implementation, and MATLAB support. Convert RGB (Red, Green, Blue) values to CIELAB color space using precise color science algorithms and equations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform standard RGB color codes to perceptually uniform LAB color space with our advanced converter tool. Includes RGB to LAB conversion formula, Python OpenCV implementation, Excel functions, and MATLAB code for professional color space conversion workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Color Converter Calculator</span>
              <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full font-medium">Mathematical Formula</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Python & MATLAB Code</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">Excel Implementation</span>
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full font-medium">CIELAB Color Space</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">OpenCV Compatible</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive RGB to LAB Color Converter Calculator Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced RGB to LAB color conversion calculator with real-time preview, interactive controls, mathematical formula display, and instant CSS code generation for professional color space conversion workflows.
              </p>
              <iframe 
                src="/tools/rgb-to-lab-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="RGB to LAB Color Converter Calculator Tool - Convert RGB colors to LAB format with real-time preview and formula"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <Link 
                href="/tools/rgb-to-lab-converter" 
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full RGB to LAB Converter Calculator
              </Link>
            </div>
          </div>

          {/* RGB to LAB Formula Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              RGB to LAB Conversion Formula and Mathematical Equation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Understanding the RGB to LAB color space conversion formula is essential for implementing accurate color transformations. The conversion involves multiple mathematical steps and color space transformations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Step 1: RGB to XYZ Conversion</h3>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-4">Gamma Correction Formula:</h4>
                  <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto bg-gray-100 dark:bg-gray-600 p-4 rounded">
{`// RGB Gamma Correction
if (R <= 0.04045) R = R / 12.92
else R = pow((R + 0.055) / 1.055, 2.4)

if (G <= 0.04045) G = G / 12.92  
else G = pow((G + 0.055) / 1.055, 2.4)

if (B <= 0.04045) B = B / 12.92
else B = pow((B + 0.055) / 1.055, 2.4)`}
                  </pre>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">RGB to XYZ Matrix Transformation:</h4>
                  <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto bg-gray-100 dark:bg-gray-600 p-4 rounded">
{`X = 0.4124564 * R + 0.3575761 * G + 0.1804375 * B
Y = 0.2126729 * R + 0.7151522 * G + 0.0721750 * B  
Z = 0.0193339 * R + 0.1191920 * G + 0.9503041 * B`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Step 2: XYZ to LAB Conversion</h3>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-4">LAB Calculation Formula:</h4>
                  <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto bg-gray-100 dark:bg-gray-600 p-4 rounded">
{`// Normalize XYZ values
Xn = X / 95.047   // D65 illuminant
Yn = Y / 100.000
Zn = Z / 108.883

// Apply LAB function
if (t > 0.008856) t = pow(t, 1/3)
else t = (7.787 * t) + (16/116)

L = 116 * fy - 16
a = 500 * (fx - fy)  
b = 200 * (fy - fz)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Programming Implementation Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              RGB to LAB Implementation: Python, MATLAB, Excel & OpenCV
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Python Implementation */}
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">Py</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Python RGB to LAB Converter</h3>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-400">
{`import numpy as np
from skimage import color

def rgb_to_lab_python(rgb):
    """
    Convert RGB to LAB using Python
    RGB values should be in range [0, 255]
    """
    # Normalize RGB to [0, 1]
    rgb_normalized = np.array(rgb) / 255.0
    
    # Reshape for skimage
    rgb_image = rgb_normalized.reshape(1, 1, 3)
    
    # Convert to LAB
    lab_image = color.rgb2lab(rgb_image)
    
    return lab_image[0, 0]

# Example usage
rgb_color = [255, 128, 64]
lab_color = rgb_to_lab_python(rgb_color)
print(f"RGB{rgb_color} -> LAB{lab_color}")

# Using OpenCV
import cv2
def rgb_to_lab_opencv(rgb):
    rgb_array = np.uint8([[rgb]])
    lab_array = cv2.cvtColor(rgb_array, cv2.COLOR_RGB2LAB)
    return lab_array[0][0]`}
                  </pre>
                </div>
              </div>

              {/* MATLAB Implementation */}
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">MATLAB RGB to LAB Code</h3>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-blue-400">
{`function lab = rgb_to_lab_matlab(rgb)
    % Convert RGB to LAB in MATLAB
    % RGB values should be in range [0, 255]
    
    % Normalize RGB to [0, 1]
    rgb_norm = double(rgb) / 255;
    
    % Create RGB image
    rgb_img = reshape(rgb_norm, [1, 1, 3]);
    
    % Convert to LAB using MATLAB function
    lab_img = rgb2lab(rgb_img);
    
    % Extract LAB values
    lab = squeeze(lab_img);
end

% Example usage:
rgb_input = [255, 128, 64];
lab_output = rgb_to_lab_matlab(rgb_input);
fprintf('RGB[%d,%d,%d] -> LAB[%.2f,%.2f,%.2f]\\n', ...
        rgb_input, lab_output);

% Alternative manual implementation
function lab = manual_rgb_to_lab(rgb)
    % Step 1: RGB to XYZ
    xyz = rgb_to_xyz(rgb);
    
    % Step 2: XYZ to LAB  
    lab = xyz_to_lab(xyz);
end`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Excel Implementation */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">XL</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Excel RGB to LAB Formula Implementation</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">Excel Formula for L* (Lightness):</h4>
                  <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded font-mono text-sm">
                    =IF(Y2&gt;0.008856, 116*POWER(Y2,1/3)-16, 903.3*Y2)
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">Excel Formula for a* (Green-Red):</h4>
                  <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded font-mono text-sm">
                    =500*(fx-fy)
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">Excel Formula for b* (Blue-Yellow):</h4>
                  <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded font-mono text-sm">
                    =200*(fy-fz)
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">Complete Excel Workflow:</h4>
                  <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>1. Input RGB values in columns A, B, C</li>
                    <li>2. Apply gamma correction formulas</li>
                    <li>3. Calculate XYZ values using matrix</li>
                    <li>4. Convert XYZ to LAB using formulas above</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* JavaScript Implementation */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">JavaScript RGB to LAB Function</h3>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm text-yellow-400">
{`function rgbToLab(r, g, b) {
    // RGB to LAB conversion in JavaScript
    // Input: RGB values (0-255)
    // Output: LAB values
    
    // Step 1: Normalize RGB to [0,1] and apply gamma correction
    let rNorm = r / 255;
    let gNorm = g / 255;
    let bNorm = b / 255;
    
    // Gamma correction
    rNorm = rNorm > 0.04045 ? Math.pow((rNorm + 0.055) / 1.055, 2.4) : rNorm / 12.92;
    gNorm = gNorm > 0.04045 ? Math.pow((gNorm + 0.055) / 1.055, 2.4) : gNorm / 12.92;
    bNorm = bNorm > 0.04045 ? Math.pow((bNorm + 0.055) / 1.055, 2.4) : bNorm / 12.92;
    
    // Step 2: RGB to XYZ conversion (D65 illuminant)
    let x = rNorm * 0.4124564 + gNorm * 0.3575761 + bNorm * 0.1804375;
    let y = rNorm * 0.2126729 + gNorm * 0.7151522 + bNorm * 0.0721750;
    let z = rNorm * 0.0193339 + gNorm * 0.1191920 + bNorm * 0.9503041;
    
    // Step 3: XYZ to LAB conversion
    x = x / 0.95047;  // D65 illuminant normalization
    y = y / 1.00000;
    z = z / 1.08883;
    
    const fx = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x + 16/116);
    const fy = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y + 16/116);
    const fz = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z + 16/116);
    
    const L = 116 * fy - 16;
    const a = 500 * (fx - fy);
    const b = 200 * (fy - fz);
    
    return { L: L, a: a, b: b };
}

// Example usage:
const rgb = { r: 255, g: 128, b: 64 };
const lab = rgbToLab(rgb.r, rgb.g, rgb.b);
console.log(\`RGB(\${rgb.r}, \${rgb.g}, \${rgb.b}) = LAB(\${lab.L.toFixed(2)}, \${lab.a.toFixed(2)}, \${lab.b.toFixed(2)})\`);`}
                </pre>
              </div>
            </div>
          </div>

          {/* Comprehensive Features Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Why Choose Our Professional RGB to LAB Color Converter Calculator?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Our RGB to LAB color converter calculator stands out as the most comprehensive and accurate tool for designers, color scientists, and developers who need precise color space conversion with mathematical formulas, code examples, and professional-grade algorithms.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Real-time RGB to LAB Calculator</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Experience instant RGB to LAB color conversion with live preview capabilities. Our advanced color science calculator uses precise mathematical formulas and algorithms to ensure accurate color space transformation with real-time equation display.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Mathematical Formula & Equation Display</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Access complete RGB to LAB conversion formulas with step-by-step mathematical equations. Understand the gamma correction, XYZ transformation matrix, and CIELAB calculation process with detailed formula explanations and scientific accuracy.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Multi-Language Code Examples</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Get ready-to-use RGB to LAB conversion code in Python, MATLAB, JavaScript, and Excel formulas. Includes OpenCV Python implementation, scientific computing libraries, and professional programming examples for all platforms.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Excel & Spreadsheet Functions</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Implement RGB to LAB conversion directly in Excel with our custom formulas and functions. Perfect for batch processing, data analysis, and spreadsheet-based color conversion workflows with step-by-step Excel implementation guide.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">OpenCV & Computer Vision Support</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Compatible with OpenCV Python library for computer vision applications. Includes cv2.COLOR_RGB2LAB examples, image processing workflows, and computer vision color space conversion implementations for research and development.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Scientific Color Space Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Professional-grade CIELAB color space conversion with D65 illuminant, gamma correction, and perceptually uniform color representation. Supports scientific research, colorimetry, and precise color analysis workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Color Examples and Conversion Guide */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Complete RGB to LAB Color Conversion Examples, Formula Calculator & Code Guide
            </h2>
            
            {/* Primary Colors Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Primary Color RGB to LAB Conversion Examples with Mathematical Formula
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Understanding how primary colors translate from RGB to LAB color space using mathematical formulas and equations is fundamental for designers, color scientists, and developers. These examples demonstrate the precision of LAB color representation with step-by-step formula calculations.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-red-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Red Color Conversion</h4>
                      <p className="text-gray-600 dark:text-gray-300">RGB to LAB formula example</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">RGB Input Values</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">rgb(255, 0, 0)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">LAB Output Result</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">lab(53.24% 80.09 67.20)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Calculation Steps</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">XYZ: (41.24, 21.26, 1.93) �?LAB conversion</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-green-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Green Color Formula</h4>
                      <p className="text-gray-600 dark:text-gray-300">Mathematical conversion example</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">RGB Input Values</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">rgb(0, 255, 0)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">LAB Output Result</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">lab(87.73% -86.18 83.18)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Python Code Example</p>
                      <code className="text-xs text-gray-600 dark:text-gray-300">cv2.cvtColor(rgb, cv2.COLOR_RGB2LAB)</code>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-500 shadow-lg"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Pure Blue MATLAB Example</h4>
                      <p className="text-gray-600 dark:text-gray-300">CIELAB calculation result</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">RGB Input Values</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">rgb(0, 0, 255)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">LAB Output Result</p>
                      <code className="text-lg font-mono text-gray-800 dark:text-white">lab(32.30% 79.19 -107.86)</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">MATLAB Function</p>
                      <code className="text-xs text-gray-600 dark:text-gray-300">lab = rgb2lab(rgb_image)</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB Color Space Advantages */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Understanding CIELAB Color Space Mathematical Advantages for RGB Conversion
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                The CIELAB (LAB) color space offers significant mathematical and perceptual advantages over RGB for professional color workflows, particularly in fields requiring precise color communication, scientific analysis, and perceptual uniformity calculations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white">Perceptual Uniformity & Mathematical Formula</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    LAB color space is designed to approximate human vision using mathematical formulas that closely match human perception of lightness and color differences. The mathematical foundation makes it ideal for:
                  </p>
                  <ul className="space-y-3 list-disc pl-6 text-gray-600 dark:text-gray-300">
                    <li>Predicting perceptual color differences using Delta E formulas</li>
                    <li>Creating mathematically uniform color gradients with linear interpolation</li>
                    <li>Measuring and communicating color differences with scientific accuracy</li>
                    <li>Performing color corrections using perceptually-based algorithms</li>
                    <li>Implementing computer vision color analysis with OpenCV Python</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white">Device Independence & Color Science Applications</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Unlike RGB which is device-dependent, LAB is a device-independent color model based on CIE standards, offering mathematical benefits for:
                  </p>
                  <ul className="space-y-3 list-disc pl-6 text-gray-600 dark:text-gray-300">
                    <li>Cross-platform color consistency using standardized formulas</li>
                    <li>Print and digital color matching workflows with mathematical precision</li>
                    <li>Color archiving and preservation using scientific standards</li>
                    <li>Scientific color measurement and comparison with Delta E calculations</li>
                    <li>Professional color management systems and ICC profile conversion</li>
                    <li>Computer vision and machine learning color analysis applications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Info Section */}
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Technical Specifications, Mathematical Implementation & Color Science Equations
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Our RGB to LAB converter calculator implements precise color science algorithms following international CIE standards for color transformation, mathematical formulas, and professional color management implementation across Python, MATLAB, Excel, and JavaScript platforms.
              </p>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                <h4 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white">CIELAB Color Space Mathematical Components & Formula Implementation</h4>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-3 text-lg">L* (Lightness) - Mathematical Formula & Calculation</h5>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">Represents the perceived lightness (0 = black, 100 = white) using CIE standard formula: L* = 116 * f(Y/Yn) - 16</p>
                    <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded font-mono text-sm">
                      Python: L = 116 * (Y/100)**(1/3) - 16 if Y &gt; 0.008856 else 903.3 * Y
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-3 text-lg">a* (Green-Red axis) - Color Opponent Formula & OpenCV Implementation</h5>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">Represents colors along the green to red axis using mathematical formula: a* = 500 * [f(X/Xn) - f(Y/Yn)]</p>
                    <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded font-mono text-sm">
                      OpenCV: lab_image = cv2.cvtColor(rgb_image, cv2.COLOR_RGB2LAB)
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-3 text-lg">b* (Blue-Yellow axis) - MATLAB & Excel Formula Implementation</h5>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">Represents colors along the blue to yellow axis using equation: b* = 200 * [f(Y/Yn) - f(Z/Zn)]</p>
                    <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded font-mono text-sm">
                      MATLAB: lab_values = rgb2lab(reshape(rgb_vector, [1, 1, 3])) Excel: =200*(fy-fz)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Use Cases */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Professional Applications of RGB to LAB Conversion Calculator & Formula Implementation
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Print Design & CMYK Workflow</h3>
                <ul className="space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300">
                  <li>Accurate color matching across different print media using LAB formulas</li>
                  <li>Preservation of visual appearance in RGB to CMYK conversion workflows</li>
                  <li>Consistent color appearance in variable lighting using mathematical calculations</li>
                  <li>High-precision color quality control with Delta E measurements</li>
                  <li>Excel-based color conversion for printing industry applications</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Digital Design & Web Development</h3>
                <ul className="space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300">
                  <li>Creation of perceptually uniform gradients using LAB color space</li>
                  <li>Precise color adjustment and manipulation with mathematical formulas</li>
                  <li>Accessible color palette development using contrast calculations</li>
                  <li>Cross-device color consistency with device-independent LAB values</li>
                  <li>Advanced color harmony algorithms using LAB mathematical properties</li>
                  <li>JavaScript and Python implementation for web applications</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Color Science & Computer Vision</h3>
                <ul className="space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300">
                  <li>Precise color difference calculations using Delta E formulas</li>
                  <li>Colorimetric research and analysis with MATLAB implementations</li>
                  <li>Museum and art conservation using scientific color standards</li>
                  <li>Measurement of metamerism effects with mathematical precision</li>
                  <li>Scientific color communication using CIE standards</li>
                  <li>OpenCV Python computer vision applications and image processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Tools & Resources */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Related Color Conversion Tools, Calculators & Formula Implementations
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/tools/rgb-to-hsl" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">RGB to HSL Calculator</h3>
                <p className="text-gray-600 dark:text-gray-300">Convert RGB colors to HSL format with mathematical formulas for intuitive color manipulation and web design.</p>
              </Link>
              
              <Link href="/tools/rgb-to-cmyk" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">RGB to CMYK Converter</h3>
                <p className="text-gray-600 dark:text-gray-300">Convert RGB colors to CMYK using professional formulas for print production workflows and color management.</p>
              </Link>
              
              <Link href="/tools/hsl-to-oklch" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">HSL to OKLCH Calculator</h3>
                <p className="text-gray-600 dark:text-gray-300">Convert HSL colors to modern OKLCH color space with advanced mathematical formulas and CSS Color Level 4 support.</p>
              </Link>
              
              <Link href="/tools/rgb-to-hex" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">RGB to HEX Converter</h3>
                <p className="text-gray-600 dark:text-gray-300">Convert RGB colors to hexadecimal color codes for web development with instant formula calculations and code generation.</p>
              </Link>
            </div>
          </div>

          {/* FAQ Section for SEO */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              RGB to LAB Conversion FAQ: Formulas, Calculators & Implementation Guide
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What is the mathematical formula for RGB to LAB conversion?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  The RGB to LAB conversion formula involves two main steps: First, RGB values are converted to XYZ color space using gamma correction and matrix transformation. Then, XYZ values are converted to CIELAB using the formulas: L* = 116 * f(Y/Yn) - 16, a* = 500 * [f(X/Xn) - f(Y/Yn)], and b* = 200 * [f(Y/Yn) - f(Z/Zn)], where f(t) = t^(1/3) if t &gt; 0.008856, otherwise f(t) = (7.787 * t) + (16/116).
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How do I implement RGB to LAB conversion in Python with OpenCV?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To convert RGB to LAB in Python using OpenCV, use: <code className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">lab_image = cv2.cvtColor(rgb_image, cv2.COLOR_RGB2LAB)</code>. For individual color values, create a numpy array: <code className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">rgb_array = np.uint8([[[r, g, b]]]); lab_array = cv2.cvtColor(rgb_array, cv2.COLOR_RGB2LAB)</code>. The result gives LAB values where L ranges 0-100, and a,b range approximately -127 to 127.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What Excel formulas can I use for RGB to LAB color conversion?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  For Excel RGB to LAB conversion, create formulas for each step: (1) Gamma correction: <code className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">=IF(A1/255&lt;=0.04045,(A1/255)/12.92,POWER((A1/255+0.055)/1.055,2.4))</code>, (2) RGB to XYZ matrix multiplication, (3) XYZ normalization, and (4) LAB calculation: <code className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">=IF(Y_norm&gt;0.008856,116*POWER(Y_norm,1/3)-16,903.3*Y_norm)</code> for L*, with similar formulas for a* and b*.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How do I convert RGB to LAB in MATLAB for color analysis?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  In MATLAB, use the built-in function: <code className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">lab_image = rgb2lab(rgb_image)</code> for image conversion, or <code className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">lab_values = rgb2lab(reshape(rgb_vector, [1, 1, 3]))</code> for individual RGB values. MATLAB automatically handles the gamma correction, XYZ transformation, and CIELAB calculation using industry-standard formulas and D65 illuminant for accurate color science applications.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What are the advantages of using LAB color space over RGB for color calculations?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  LAB color space offers several advantages: (1) Perceptual uniformity - equal distances in LAB correspond to equal perceptual color differences, (2) Device independence - LAB values are consistent across different devices and displays, (3) Better color difference calculations using Delta E formulas, (4) More accurate color interpolation and gradient creation, (5) Scientific color communication standards, and (6) Improved color correction and manipulation algorithms for professional applications.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Can I use this RGB to LAB converter for print design and CMYK workflows?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, RGB to LAB conversion is essential for print design workflows. LAB serves as an intermediate color space for accurate RGB to CMYK conversion, preserving color appearance across different media. The device-independent nature of LAB ensures consistent colors from screen to print, making it ideal for color matching, proof validation, and maintaining color fidelity in professional printing applications with ICC color profiles and color management systems.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Footer Content */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">About RGB to LAB Color Conversion Calculator, Formulas & Professional Implementation</h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p>
                RGB to LAB color conversion is a fundamental process in color science, digital imaging, and professional color management. Our RGB to LAB converter calculator provides accurate, standards-compliant conversion using CIE mathematical formulas, supporting Python OpenCV implementation, MATLAB code, Excel functions, and JavaScript applications for comprehensive color space transformation workflows.
              </p>
              <p>
                The RGB color model (Red, Green, Blue) is an additive color model commonly used in digital displays and computer graphics, while CIELAB (L*a*b*) is a perceptually uniform, device-independent color space designed to approximate human vision. Converting from RGB to LAB using mathematical formulas and equations allows designers, photographers, scientists, and developers to work with color in ways that more closely match human perception and provide cross-device consistency.
              </p>
              <p>
                Our comprehensive RGB to LAB converter tool provides not only real-time conversion capabilities but also educational resources including step-by-step mathematical formulas, programming code examples in Python (with OpenCV support), MATLAB implementations, Excel spreadsheet functions, and JavaScript code for web applications. This makes it an invaluable resource for color science education, professional color management, computer vision applications, and scientific research requiring precise color space conversions with mathematical accuracy and industry-standard compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
