'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { uvToXyz, xyzToRgb, isValidXyz, isValidUv } from '@/utils/colorConverter';
import Navigation from '@/components/Navigation';

interface UV {
  u: number;
  v: number;
}

function UVToXYZConverterContent() {
  const searchParams = useSearchParams();
  const isEmbedded = searchParams.get('embed') === 'true';
  
  const [uv, setUv] = useState<UV>({ u: 0.197, v: 0.468 }); // Red chromaticity
  const [yValue, setYValue] = useState<number>(21.26); // Luminance value
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string>('');

  // Convert UV to XYZ using the provided Y value
  const xyz = uvToXyz(uv, yValue);
  
  // Convert to RGB for color preview
  const rgb = xyzToRgb(xyz);
  const rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  // Check for valid values
  const isValidUvValue = isValidUv(uv);
  const isValidXyzValue = isValidXyz(xyz);

  // Handle input changes
  const handleUvChange = (component: keyof UV, value: string) => {
    const numValue = parseFloat(value) || 0;
    setUv(prev => ({ ...prev, [component]: numValue }));
  };

  const handleYChange = (value: string) => {
    const numValue = parseFloat(value) || 0;
    setYValue(Math.max(0, Math.min(100, numValue)));
  };

  // Copy to clipboard
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  // Preset Y values
  const presetYValues = [
    { label: 'Pure White (D65)', value: 100 },
    { label: 'Light Gray', value: 80 },
    { label: 'Medium Gray', value: 50 },
    { label: '18% Gray Card', value: 18 },
    { label: 'Dark Gray', value: 10 },
    { label: 'Pure Black', value: 0 }
  ];



  // Code examples
  const pythonCode = `import numpy as np

def uv_to_xyz(u, v, Y):
    """Convert UV coordinates to XYZ using provided Y value"""
    if v == 0:
        return 0, 0, 0
    
    # Calculate X and Z from u, v, and Y
    X = (9 * ${uv.u} * ${yValue}) / (4 * ${uv.v})  # ${xyz.x.toFixed(3)}
    Z = (12 - 3*${uv.u} - 20*${uv.v}) * ${yValue} / (4 * ${uv.v})  # ${xyz.z.toFixed(3)}
    
    return X, ${yValue}, Z`;

  const javascriptCode = `function uvToXyz(u, v, Y) {
    // Convert UV coordinates to XYZ
    if (v === 0) {
        return { x: 0, y: 0, z: 0 };
    }
    
    // Calculate X and Z from u, v, and Y
    const x = (9 * ${uv.u} * ${yValue}) / (4 * ${uv.v});  // ${xyz.x.toFixed(3)}
    const z = (12 - 3*${uv.u} - 20*${uv.v}) * ${yValue} / (4 * ${uv.v});  // ${xyz.z.toFixed(3)}
    
    return { x, y: ${yValue}, z };
}`;

  return (
    <div className={`${isEmbedded ? 'p-4' : 'min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar - only show when not embedded */}
        {!isEmbedded && <Navigation />}
        {!isEmbedded && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              UV to XYZ Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Convert CIE 1960 UCS chromaticity coordinates to CIE XYZ color space
            </p>
          </div>
        )}

        {/* Important Notice */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-1">
                Y Value Required
              </h3>
              <p className="text-xs text-amber-700 dark:text-amber-300">
                UV coordinates only contain chromaticity information. You must provide the Y value (luminance) to convert to XYZ.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          {/* Input Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* UV Input */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">UV Coordinates Input</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    u (Chromaticity u: 0-1)
                  </label>
                  <input
                    type="number"
                    value={uv.u}
                    onChange={(e) => handleUvChange('u', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.000001"
                    min="0"
                    max="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    v (Chromaticity v: 0-1)
                  </label>
                  <input
                    type="number"
                    value={uv.v}
                    onChange={(e) => handleUvChange('v', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.000001"
                    min="0"
                    max="1"
                  />
                </div>
                
                {/* Y Value Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Y (Luminance: 0-100) *Required
                  </label>
                  <input
                    type="number"
                    value={yValue}
                    onChange={(e) => handleYChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    step="0.001"
                    min="0"
                    max="100"
                  />
                  
                  {/* Preset Y Values */}
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick presets:</p>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {presetYValues.map((preset, index) => (
                        <button
                          key={index}
                          onClick={() => setYValue(preset.value)}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                        >
                          {preset.label} ({preset.value})
                        </button>
                      ))}
                    </div>
                  </div>
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
                    <span className="font-medium">UV:</span> ({uv.u.toFixed(6)}, {uv.v.toFixed(6)})
                  </div>
                  <div>
                    <span className="font-medium">Y Value:</span> {yValue.toFixed(3)}
                  </div>
                  <div>
                    <span className="font-medium">XYZ:</span> ({xyz.x.toFixed(3)}, {xyz.y.toFixed(3)}, {xyz.z.toFixed(3)})
                  </div>
                  <div>
                    <span className="font-medium">RGB:</span> {rgbColor}
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
          {(!isValidUvValue || !isValidXyzValue) && (
            <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded-lg">
              <h4 className="font-semibold mb-2">⚠️ Validation Warning</h4>
              {!isValidUvValue && <p>UV values are outside standard range (u: 0-1, v: 0-1)</p>}
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
                  <div>1. X = (9 × u × Y) / (4 × v) = (9 × {uv.u} × {yValue}) / (4 × {uv.v}) = {xyz.x.toFixed(3)}</div>
                  <div>2. Y = {yValue} (provided input)</div>
                  <div>3. Z = (12 - 3u - 20v) × Y / (4 × v) = (12 - 3×{uv.u} - 20×{uv.v}) × {yValue} / (4 × {uv.v}) = {xyz.z.toFixed(3)}</div>
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

export default function UVToXYZConverter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UVToXYZConverterContent />
    </Suspense>
  );
}
