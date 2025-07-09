'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { xyzToLab, xyzToRgb, labToCss, isValidXyz, isValidLab } from '@/utils/colorConverter';
import Navigation from '@/components/Navigation';

interface XYZ {
  x: number;
  y: number;
  z: number;
}

function XYZToLABConverterContent() {
  const searchParams = useSearchParams();
  const isEmbedded = searchParams.get('embed') === 'true';
  
  const [xyz, setXyz] = useState<XYZ>({ x: 41.24, y: 21.26, z: 1.93 }); // Red primary
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string>('');

  // Convert XYZ to LAB
  const lab = xyzToLab(xyz);
  
  // Convert to RGB for color preview
  const rgb = xyzToRgb(xyz);
  const rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  // Check for valid values
  const isValidXyzValue = isValidXyz(xyz);
  const isValidLabValue = isValidLab(lab);

  // Handle input changes
  const handleXyzChange = (component: keyof XYZ, value: string) => {
    const numValue = parseFloat(value) || 0;
    setXyz(prev => ({ ...prev, [component]: numValue }));
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
    // D65 illuminant white point
    const xn = 95.047, yn = 100.000, zn = 108.883;
    
    // Normalize XYZ values
    const xNorm = xyz.x / xn;
    const yNorm = xyz.y / yn;
    const zNorm = xyz.z / zn;
    
    // Apply nonlinear transformation
    const f = (t: number) => t > 0.008856 ? Math.pow(t, 1/3) : (7.787 * t + 16/116);
    
    const fx = f(xNorm);
    const fy = f(yNorm);
    const fz = f(zNorm);
    
    return {
      normalized: { xNorm, yNorm, zNorm },
      transformed: { fx, fy, fz },
      intermediate: {
        l_calc: 116 * fy - 16,
        a_calc: 500 * (fx - fy),
        b_calc: 200 * (fy - fz)
      }
    };
  };

  const technicalDetails = calculateTechnicalDetails();

  // Code examples
  const pythonCode = `import numpy as np

def xyz_to_lab(x, y, z):
    """Convert CIE XYZ to CIELAB using D65 illuminant"""
    # D65 illuminant white point
    xn, yn, zn = 95.047, 100.000, 108.883
    
    # Current XYZ values
    x_norm = ${xyz.x} / xn  # ${technicalDetails.normalized.xNorm.toFixed(6)}
    y_norm = ${xyz.y} / yn  # ${technicalDetails.normalized.yNorm.toFixed(6)}
    z_norm = ${xyz.z} / zn  # ${technicalDetails.normalized.zNorm.toFixed(6)}
    
    # Apply nonlinear transformation
    def f(t):
        return np.power(t, 1/3) if t > 0.008856 else (7.787 * t + 16/116)
    
    fx = f(x_norm)  # ${technicalDetails.transformed.fx.toFixed(6)}
    fy = f(y_norm)  # ${technicalDetails.transformed.fy.toFixed(6)}
    fz = f(z_norm)  # ${technicalDetails.transformed.fz.toFixed(6)}
    
    # Calculate LAB values
    L = 116 * fy - 16      # ${lab.l.toFixed(3)}
    a = 500 * (fx - fy)    # ${lab.a.toFixed(3)}
    b = 200 * (fy - fz)    # ${lab.b.toFixed(3)}
    
    return L, a, b`;

  const javascriptCode = `function xyzToLab(x, y, z) {
    // D65 illuminant white point
    const xn = 95.047, yn = 100.000, zn = 108.883;
    
    // Current XYZ values
    const xNorm = ${xyz.x} / xn;  // ${technicalDetails.normalized.xNorm.toFixed(6)}
    const yNorm = ${xyz.y} / yn;  // ${technicalDetails.normalized.yNorm.toFixed(6)}
    const zNorm = ${xyz.z} / zn;  // ${technicalDetails.normalized.zNorm.toFixed(6)}
    
    // Apply nonlinear transformation
    const f = (t) => t > 0.008856 ? Math.pow(t, 1/3) : (7.787 * t + 16/116);
    
    const fx = f(xNorm);  // ${technicalDetails.transformed.fx.toFixed(6)}
    const fy = f(yNorm);  // ${technicalDetails.transformed.fy.toFixed(6)}
    const fz = f(zNorm);  // ${technicalDetails.transformed.fz.toFixed(6)}
    
    // Calculate LAB values
    const L = 116 * fy - 16;      // ${lab.l.toFixed(3)}
    const a = 500 * (fx - fy);    // ${lab.a.toFixed(3)}
    const b = 200 * (fy - fz);    // ${lab.b.toFixed(3)}
    
    return { L, a, b };
}`;

  return (
    <div className={`${isEmbedded ? 'p-4' : 'min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar - only show when not embedded */}
        {!isEmbedded && <Navigation />}
        {!isEmbedded && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              XYZ to LAB Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Convert CIE XYZ color space to CIELAB with real-time calculations
            </p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          {/* Input Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* XYZ Input */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">CIE XYZ Input</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    X (0-95.047)
                  </label>
                  <input
                    type="number"
                    value={xyz.x}
                    onChange={(e) => handleXyzChange('x', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    step="0.001"
                    min="0"
                    max="95.047"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Y (0-100)
                  </label>
                  <input
                    type="number"
                    value={xyz.y}
                    onChange={(e) => handleXyzChange('y', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    step="0.001"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Z (0-108.883)
                  </label>
                  <input
                    type="number"
                    value={xyz.z}
                    onChange={(e) => handleXyzChange('z', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    step="0.001"
                    min="0"
                    max="108.883"
                  />
                </div>
              </div>
            </div>

            {/* LAB Output */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">CIELAB Output</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      L* (Lightness)
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      {lab.l.toFixed(3)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(lab.l.toFixed(3), 'L')}
                    className="mt-6 p-2 text-gray-500 hover:text-blue-600 transition-colors"
                    title="Copy L value"
                  >
                    📋
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      a* (Green-Red)
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      {lab.a.toFixed(3)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(lab.a.toFixed(3), 'a')}
                    className="mt-6 p-2 text-gray-500 hover:text-blue-600 transition-colors"
                    title="Copy a value"
                  >
                    📋
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      b* (Blue-Yellow)
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      {lab.b.toFixed(3)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(lab.b.toFixed(3), 'b')}
                    className="mt-6 p-2 text-gray-500 hover:text-blue-600 transition-colors"
                    title="Copy b value"
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
                    <span className="font-medium">XYZ:</span> ({xyz.x.toFixed(3)}, {xyz.y.toFixed(3)}, {xyz.z.toFixed(3)})
                  </div>
                  <div>
                    <span className="font-medium">LAB:</span> ({lab.l.toFixed(1)}, {lab.a.toFixed(1)}, {lab.b.toFixed(1)})
                  </div>
                  <div>
                    <span className="font-medium">RGB:</span> {rgbColor}
                  </div>
                  <div>
                    <span className="font-medium">CSS LAB:</span> {labToCss(lab)}
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
          {(!isValidXyzValue || !isValidLabValue) && (
            <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded-lg">
              <h4 className="font-semibold mb-2">⚠️ Validation Warning</h4>
              {!isValidXyzValue && <p>XYZ values are outside standard range (X: 0-95.047, Y: 0-100, Z: 0-108.883)</p>}
              {!isValidLabValue && <p>Resulting LAB values are outside typical range</p>}
            </div>
          )}

          {/* Technical Details Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
            >
              <span>{showTechnicalDetails ? '🔼' : '🔽'}</span>
              Technical Details & Code Examples
            </button>
          </div>

          {/* Technical Details Panel */}
          {showTechnicalDetails && (
            <div className="space-y-6">
              {/* Step-by-step calculation */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm font-mono">
                  <div>1. Normalize XYZ: ({technicalDetails.normalized.xNorm.toFixed(6)}, {technicalDetails.normalized.yNorm.toFixed(6)}, {technicalDetails.normalized.zNorm.toFixed(6)})</div>
                  <div>2. Apply f(t): ({technicalDetails.transformed.fx.toFixed(6)}, {technicalDetails.transformed.fy.toFixed(6)}, {technicalDetails.transformed.fz.toFixed(6)})</div>
                  <div>3. Calculate LAB: L*={lab.l.toFixed(3)}, a*={lab.a.toFixed(3)}, b*={lab.b.toFixed(3)}</div>
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

export default function XYZToLABConverter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <XYZToLABConverterContent />
    </Suspense>
  );
}
