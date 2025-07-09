'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { labToXyz, xyzToRgb, xyzToCss, isValidXyz, isValidLab } from '@/utils/colorConverter';
import Navigation from '@/components/Navigation';

interface LAB {
  l: number;
  a: number;
  b: number;
}

function LABToXYZConverterContent() {
  const searchParams = useSearchParams();
  const isEmbedded = searchParams.get('embed') === 'true';
  
  const [lab, setLab] = useState<LAB>({ l: 53.23, a: 80.11, b: 67.22 }); // Red color
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string>('');

  // Convert LAB to XYZ
  const xyz = labToXyz(lab);
  
  // Convert to RGB for color preview
  const rgb = xyzToRgb(xyz);
  const rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  // Check for valid values
  const isValidLabValue = isValidLab(lab);
  const isValidXyzValue = isValidXyz(xyz);

  // Handle input changes
  const handleLabChange = (component: keyof LAB, value: string) => {
    const numValue = parseFloat(value) || 0;
    setLab(prev => ({ ...prev, [component]: numValue }));
  };

  // Copy to clipboard
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  // Technical calculation details
  const calculateTechnicalDetails = () => {
    // Calculate intermediate values
    const fy = (lab.l + 16) / 116;
    const fx = lab.a / 500 + fy;
    const fz = fy - lab.b / 200;
    
    // Apply inverse nonlinear transformation
    const fInv = (t: number) => {
      const t3 = Math.pow(t, 3);
      return t3 > 0.008856 ? t3 : (t - 16/116) / 7.787;
    };
    
    const xNorm = fInv(fx);
    const yNorm = fInv(fy);
    const zNorm = fInv(fz);
    
    // D65 illuminant white point
    const xn = 95.047, yn = 100.000, zn = 108.883;
    
    return {
      intermediate: { fx, fy, fz },
      normalized: { xNorm, yNorm, zNorm },
      illuminant: { xn, yn, zn },
      final: {
        x_calc: xNorm * xn,
        y_calc: yNorm * yn,
        z_calc: zNorm * zn
      }
    };
  };

  const technicalDetails = calculateTechnicalDetails();

  // Code examples
  const pythonCode = `import numpy as np

def lab_to_xyz(L, a, b):
    """Convert CIELAB to CIE XYZ using D65 illuminant"""
    # Calculate intermediate values
    fy = (${lab.l} + 16) / 116  # ${technicalDetails.intermediate.fy.toFixed(6)}
    fx = ${lab.a} / 500 + fy    # ${technicalDetails.intermediate.fx.toFixed(6)}
    fz = fy - ${lab.b} / 200    # ${technicalDetails.intermediate.fz.toFixed(6)}
    
    # Apply inverse nonlinear transformation
    def f_inv(t):
        t3 = np.power(t, 3)
        return t3 if t3 > 0.008856 else (t - 16/116) / 7.787
    
    x_norm = f_inv(fx)  # ${technicalDetails.normalized.xNorm.toFixed(6)}
    y_norm = f_inv(fy)  # ${technicalDetails.normalized.yNorm.toFixed(6)}
    z_norm = f_inv(fz)  # ${technicalDetails.normalized.zNorm.toFixed(6)}
    
    # D65 illuminant white point
    xn, yn, zn = 95.047, 100.000, 108.883
    
    # Apply illuminant scaling
    X = x_norm * xn  # ${xyz.x.toFixed(3)}
    Y = y_norm * yn  # ${xyz.y.toFixed(3)}
    Z = z_norm * zn  # ${xyz.z.toFixed(3)}
    
    return X, Y, Z`;

  const javascriptCode = `function labToXyz(L, a, b) {
    // Calculate intermediate values
    const fy = (${lab.l} + 16) / 116;  // ${technicalDetails.intermediate.fy.toFixed(6)}
    const fx = ${lab.a} / 500 + fy;    // ${technicalDetails.intermediate.fx.toFixed(6)}
    const fz = fy - ${lab.b} / 200;    // ${technicalDetails.intermediate.fz.toFixed(6)}
    
    // Apply inverse nonlinear transformation
    const fInv = (t) => {
        const t3 = Math.pow(t, 3);
        return t3 > 0.008856 ? t3 : (t - 16/116) / 7.787;
    };
    
    const xNorm = fInv(fx);  // ${technicalDetails.normalized.xNorm.toFixed(6)}
    const yNorm = fInv(fy);  // ${technicalDetails.normalized.yNorm.toFixed(6)}
    const zNorm = fInv(fz);  // ${technicalDetails.normalized.zNorm.toFixed(6)}
    
    // D65 illuminant white point
    const xn = 95.047, yn = 100.000, zn = 108.883;
    
    // Apply illuminant scaling
    const X = xNorm * xn;  // ${xyz.x.toFixed(3)}
    const Y = yNorm * yn;  // ${xyz.y.toFixed(3)}
    const Z = zNorm * zn;  // ${xyz.z.toFixed(3)}
    
    return { X, Y, Z };
}`;

  return (
    <div className={`${isEmbedded ? 'p-4' : 'min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar - only show when not embedded */}
        {!isEmbedded && <Navigation />}
        {!isEmbedded && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              LAB to XYZ Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Convert CIELAB color space to CIE XYZ with real-time calculations
            </p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          {/* Input Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* LAB Input */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">CIELAB Input</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    L* (Lightness: 0-100)
                  </label>
                  <input
                    type="number"
                    value={lab.l}
                    onChange={(e) => handleLabChange('l', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.01"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    a* (Green-Red: -128 to +127)
                  </label>
                  <input
                    type="number"
                    value={lab.a}
                    onChange={(e) => handleLabChange('a', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.01"
                    min="-128"
                    max="127"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    b* (Blue-Yellow: -128 to +127)
                  </label>
                  <input
                    type="number"
                    value={lab.b}
                    onChange={(e) => handleLabChange('b', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.01"
                    min="-128"
                    max="127"
                  />
                </div>
              </div>
            </div>

            {/* XYZ Output */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">CIE XYZ Output</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      X (Red-Green)
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      {xyz.x.toFixed(3)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(xyz.x.toFixed(3), 'X')}
                    className="mt-6 p-2 text-gray-500 hover:text-purple-600 transition-colors"
                    title="Copy X value"
                  >
                    📋
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Y (Luminance)
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      {xyz.y.toFixed(3)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(xyz.y.toFixed(3), 'Y')}
                    className="mt-6 p-2 text-gray-500 hover:text-purple-600 transition-colors"
                    title="Copy Y value"
                  >
                    📋
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Z (Blue-Yellow)
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      {xyz.z.toFixed(3)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(xyz.z.toFixed(3), 'Z')}
                    className="mt-6 p-2 text-gray-500 hover:text-purple-600 transition-colors"
                    title="Copy Z value"
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Color Preview */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Preview</h3>
            <div className="flex items-center gap-4">
              <div 
                className="w-24 h-24 rounded-xl border-2 border-gray-300 dark:border-gray-600 shadow-lg"
                style={{ backgroundColor: rgbColor }}
                title={`RGB: ${rgbColor}`}
              />
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">LAB:</span> ({lab.l.toFixed(1)}, {lab.a.toFixed(1)}, {lab.b.toFixed(1)})
                  </div>
                  <div>
                    <span className="font-medium">XYZ:</span> ({xyz.x.toFixed(3)}, {xyz.y.toFixed(3)}, {xyz.z.toFixed(3)})
                  </div>
                  <div>
                    <span className="font-medium">RGB:</span> {rgbColor}
                  </div>
                  <div>
                    <span className="font-medium">CSS XYZ:</span> {xyzToCss(xyz)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Success Message */}
          {copySuccess && (
            <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg">
              {copySuccess} value copied to clipboard!
            </div>
          )}

          {/* Validation Warnings */}
          {(!isValidLabValue || !isValidXyzValue) && (
            <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded-lg">
              <h4 className="font-semibold mb-2">⚠️ Validation Warning</h4>
              {!isValidLabValue && <p>LAB values are outside standard range (L: 0-100, a: -128 to +127, b: -128 to +127)</p>}
              {!isValidXyzValue && <p>Resulting XYZ values are outside typical range</p>}
            </div>
          )}

          {/* Technical Details Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-colors"
            >
              <span>{showTechnicalDetails ? '🔼' : '🔽'}</span>
              Technical Details & Code Examples
            </button>
          </div>

          {/* Technical Details Panel */}
          {showTechnicalDetails && (
            <div className="space-y-6">
              {/* Step-by-step calculation */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm font-mono">
                  <div>1. Intermediate: fx={technicalDetails.intermediate.fx.toFixed(6)}, fy={technicalDetails.intermediate.fy.toFixed(6)}, fz={technicalDetails.intermediate.fz.toFixed(6)}</div>
                  <div>2. Normalized: ({technicalDetails.normalized.xNorm.toFixed(6)}, {technicalDetails.normalized.yNorm.toFixed(6)}, {technicalDetails.normalized.zNorm.toFixed(6)})</div>
                  <div>3. Final XYZ: X={xyz.x.toFixed(3)}, Y={xyz.y.toFixed(3)}, Z={xyz.z.toFixed(3)}</div>
                </div>
              </div>

              {/* Code Examples */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">🐍</span>
                    Python Implementation
                  </h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{pythonCode}</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">⚡</span>
                    JavaScript Implementation
                  </h4>
                  <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{javascriptCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LABToXYZConverter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LABToXYZConverterContent />
    </Suspense>
  );
}
