'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { xyzToUv, xyzToRgb, isValidXyz, isValidUv } from '@/utils/colorConverter';
import Navigation from '@/components/Navigation';

interface XYZ {
  x: number;
  y: number;
  z: number;
}

function XYZToUVConverterContent() {
  const searchParams = useSearchParams();
  const isEmbedded = searchParams.get('embed') === 'true';
  
  const [xyz, setXyz] = useState<XYZ>({ x: 41.24, y: 21.26, z: 1.93 }); // Red color
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string>('');

  // Convert XYZ to UV
  const uv = xyzToUv(xyz);
  
  // Convert to RGB for color preview
  const rgb = xyzToRgb(xyz);
  const rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  // Check for valid values
  const isValidXyzValue = isValidXyz(xyz);
  const isValidUvValue = isValidUv(uv);

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
    const denominator = xyz.x + 15 * xyz.y + 3 * xyz.z;
    
    return {
      denominator,
      calculation: {
        u_numerator: 4 * xyz.x,
        v_numerator: 6 * xyz.y,
        u_calc: denominator !== 0 ? (4 * xyz.x) / denominator : 0,
        v_calc: denominator !== 0 ? (6 * xyz.y) / denominator : 0
      }
    };
  };

  const technicalDetails = calculateTechnicalDetails();

  // Code examples
  const pythonCode = `import numpy as np

def xyz_to_uv(X, Y, Z):
    """Convert XYZ to UV coordinates using CIE 1960 UCS"""
    # Calculate denominator
    denominator = ${xyz.x} + 15 * ${xyz.y} + 3 * ${xyz.z}  # ${technicalDetails.denominator.toFixed(3)}
    
    if denominator == 0:
        return 0, 0
    
    # Calculate UV coordinates
    u = (4 * ${xyz.x}) / denominator  # ${uv.u.toFixed(6)}
    v = (6 * ${xyz.y}) / denominator  # ${uv.v.toFixed(6)}
    
    return u, v`;

  const javascriptCode = `function xyzToUv(X, Y, Z) {
    // Calculate denominator
    const denominator = ${xyz.x} + 15 * ${xyz.y} + 3 * ${xyz.z};  // ${technicalDetails.denominator.toFixed(3)}
    
    if (denominator === 0) {
        return { u: 0, v: 0 };
    }
    
    // Calculate UV coordinates
    const u = (4 * ${xyz.x}) / denominator;  // ${uv.u.toFixed(6)}
    const v = (6 * ${xyz.y}) / denominator;  // ${uv.v.toFixed(6)}
    
    return { u, v };
}`;

  return (
    <div className={`${isEmbedded ? 'p-4' : 'min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar - only show when not embedded */}
        {!isEmbedded && <Navigation />}
        {!isEmbedded && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              XYZ to UV Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Convert CIE XYZ color space to CIE 1960 UCS chromaticity coordinates
            </p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          {/* Input Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* XYZ Input */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">CIE XYZ Input</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    X (Red-Green: 0-95.047)
                  </label>
                  <input
                    type="number"
                    value={xyz.x}
                    onChange={(e) => handleXyzChange('x', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.001"
                    min="0"
                    max="95.047"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Y (Luminance: 0-100)
                  </label>
                  <input
                    type="number"
                    value={xyz.y}
                    onChange={(e) => handleXyzChange('y', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.001"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Z (Blue-Yellow: 0-108.883)
                  </label>
                  <input
                    type="number"
                    value={xyz.z}
                    onChange={(e) => handleXyzChange('z', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.001"
                    min="0"
                    max="108.883"
                  />
                </div>
              </div>
            </div>

            {/* UV Output */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">UV Coordinates Output</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      u (Chromaticity u)
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      {uv.u.toFixed(6)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(uv.u.toFixed(6), 'u')}
                    className="mt-6 p-2 text-gray-500 hover:text-purple-600 transition-colors"
                    title="Copy u value"
                  >
                    📋
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      v (Chromaticity v)
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      {uv.v.toFixed(6)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(uv.v.toFixed(6), 'v')}
                    className="mt-6 p-2 text-gray-500 hover:text-purple-600 transition-colors"
                    title="Copy v value"
                  >
                    📋
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      UV String
                    </label>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border text-sm">
                      uv({uv.u.toFixed(6)}, {uv.v.toFixed(6)})
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`uv(${uv.u.toFixed(6)}, ${uv.v.toFixed(6)})`, 'UV string')}
                    className="mt-6 p-2 text-gray-500 hover:text-purple-600 transition-colors"
                    title="Copy UV string"
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
                    <span className="font-medium">UV:</span> ({uv.u.toFixed(6)}, {uv.v.toFixed(6)})
                  </div>
                  <div>
                    <span className="font-medium">RGB:</span> {rgbColor}
                  </div>
                  <div>
                    <span className="font-medium">Denominator:</span> {technicalDetails.denominator.toFixed(3)}
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
          {(!isValidXyzValue || !isValidUvValue) && (
            <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded-lg">
              <h4 className="font-semibold mb-2">⚠️ Validation Warning</h4>
              {!isValidXyzValue && <p>XYZ values are outside standard range (X: 0-95.047, Y: 0-100, Z: 0-108.883)</p>}
              {!isValidUvValue && <p>Resulting UV values are outside typical range (0-1)</p>}
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
                  <div>1. Denominator: X + 15Y + 3Z = {xyz.x} + 15×{xyz.y} + 3×{xyz.z} = {technicalDetails.denominator.toFixed(3)}</div>
                  <div>2. u = 4X / denominator = 4×{xyz.x} / {technicalDetails.denominator.toFixed(3)} = {uv.u.toFixed(6)}</div>
                  <div>3. v = 6Y / denominator = 6×{xyz.y} / {technicalDetails.denominator.toFixed(3)} = {uv.v.toFixed(6)}</div>
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

export default function XYZToUVConverter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <XYZToUVConverterContent />
    </Suspense>
  );
}
