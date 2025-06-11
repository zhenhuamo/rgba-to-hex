'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { rgbToXyz, xyzToRgb, XYZ, RGB } from '@/utils/colorConverter';

export default function XyzToRgbConverter() {
  const [rgb, setRgb] = useState<RGB>({ r: 46, g: 139, b: 87 });
  const [xyz, setXyz] = useState<XYZ>({ x: 0, y: 0, z: 0 });
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [activeTab, setActiveTab] = useState('rgb');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);


  // Convert RGB to XYZ on component mount and when RGB changes
  useEffect(() => {
    const xyzColor = rgbToXyz(rgb);
    setXyz(xyzColor);
  }, [rgb]);

  // Check if the component is embedded in an iframe
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsEmbedded(urlParams.get('embed') === 'true');
  }, []);

  // Handle RGB input changes
  const handleRgbChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = Math.max(0, Math.min(255, parseInt(value) || 0));
    setRgb(prev => ({ ...prev, [name]: newValue }));
  };

  // Handle XYZ input changes
  const handleXyzChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Different constraints based on XYZ component
    let maxValue;
    
    if (name === 'x') {
      maxValue = 95.047;
    } else if (name === 'y') {
      maxValue = 100.000;
    } else {
      maxValue = 108.883;
    }
    
    const newValue = Math.max(0, Math.min(maxValue, parseFloat(value) || 0));
    
    const newXyz = { ...xyz, [name]: newValue };
    setXyz(newXyz);
    
    // Convert back to RGB
    const newRgb = xyzToRgb(newXyz);
    setRgb(newRgb);
  };

  // Format color values for display
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hexValue = `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
  const xyzString = `xyz(${xyz.x.toFixed(3)}, ${xyz.y.toFixed(3)}, ${xyz.z.toFixed(3)})`;
  
  // CSS code for copying
  const cssCodes = [
    `color: ${rgbString};`,
    `color: ${hexValue};`,
    `/* XYZ: ${xyzString} */`,
  ];

  // CSS code descriptions
  const codeDescriptions = [
    'RGB Format',
    'HEX Format',
    'XYZ Format'
  ];

  // Copy text to clipboard
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setShowTooltip(true);
    
    // Hide tooltip after 2 seconds
    setTimeout(() => {
      setShowTooltip(false);
      setTimeout(() => setCopiedIndex(null), 300);
    }, 2000);
  };

  // Calculate complementary color for readability
  const getContrastColor = (): string => {
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness >= 128 ? 'text-gray-800' : 'text-white';
  };

  // Calculate gradient based on XYZ values
  const getGradient = () => {
    return `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.7), rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1))`;
  };

  // sRGB transformation matrix (XYZ to RGB)
  const xyzToRgbMatrix = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.2040, 1.0570]
  ];

  // Calculate RGB using matrix multiplication (for display purposes)
  const calculateRgbFromMatrix = (x: number, y: number, z: number) => {
    const r = (x * xyzToRgbMatrix[0][0] + y * xyzToRgbMatrix[0][1] + z * xyzToRgbMatrix[0][2]);
    const g = (x * xyzToRgbMatrix[1][0] + y * xyzToRgbMatrix[1][1] + z * xyzToRgbMatrix[1][2]);
    const b = (x * xyzToRgbMatrix[2][0] + y * xyzToRgbMatrix[2][1] + z * xyzToRgbMatrix[2][2]);
    return { r, g, b };
  };

  // Get raw RGB values before gamma correction and clamping
  const rawRgb = calculateRgbFromMatrix(xyz.x / 100, xyz.y / 100, xyz.z / 100);
  
  // Check for negative values
  const hasNegativeValues = rawRgb.r < 0 || rawRgb.g < 0 || rawRgb.b < 0;

  // Python code example
  const pythonCode = `import numpy as np

# XYZ to sRGB transformation matrix
xyz_to_rgb_matrix = np.array([
    [3.2406, -1.5372, -0.4986],
    [-0.9689,  1.8758,  0.0415],
    [0.0557, -0.2040,  1.0570]
])

# Current XYZ values (normalized to 0-1 range)
xyz = np.array([${(xyz.x/100).toFixed(4)}, ${(xyz.y/100).toFixed(4)}, ${(xyz.z/100).toFixed(4)}])

# Matrix multiplication
rgb_linear = np.dot(xyz_to_rgb_matrix, xyz)
print(f"Linear RGB: {rgb_linear}")

# Gamma correction
def linear_to_srgb(c):
    return 12.92 * c if c <= 0.0031308 else 1.055 * (c ** (1/2.4)) - 0.055

rgb_gamma = np.array([linear_to_srgb(c) for c in rgb_linear])

# Clamp to valid range and convert to 8-bit
rgb_final = np.clip(rgb_gamma * 255, 0, 255).astype(int)
print(f"Final RGB: {rgb_final}")`;

  // JavaScript code example
  const javascriptCode = `// XYZ to sRGB transformation matrix
const xyzToRgbMatrix = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689,  1.8758,  0.0415],
    [0.0557, -0.2040,  1.0570]
];

// Current XYZ values (normalized to 0-1 range)
const xyz = [${(xyz.x/100).toFixed(4)}, ${(xyz.y/100).toFixed(4)}, ${(xyz.z/100).toFixed(4)}];

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
console.log('Final RGB:', rgbFinal);`;

  return (
    <div className={`${isEmbedded ? '' : 'min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12'}`}>
      <div className={`${isEmbedded ? '' : 'container mx-auto px-4'}`}>
        {/* Only show title in embedded mode */}
        {isEmbedded && (
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            XYZ to RGB Color Converter
          </h1>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
          {/* Main Card Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                XYZ ↔ RGB Color Space Conversion
              </span>
            </h2>
            
            {/* Tab Switcher */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
              <button 
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'rgb' 
                  ? 'bg-white dark:bg-gray-600 shadow-md text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'}`}
                onClick={() => setActiveTab('rgb')}
              >
                RGB Input
              </button>
              <button 
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'xyz' 
                  ? 'bg-white dark:bg-gray-600 shadow-md text-purple-600 dark:text-purple-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300'}`}
                onClick={() => setActiveTab('xyz')}
              >
                XYZ Input
              </button>
              <button 
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'technical' 
                  ? 'bg-white dark:bg-gray-600 shadow-md text-emerald-600 dark:text-emerald-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-300'}`}
                onClick={() => setActiveTab('technical')}
              >
                Technical
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Color Preview Section */}
            <div className="flex flex-col items-center justify-center">
              <div 
                className="w-48 h-48 rounded-2xl shadow-xl mb-8 transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-600"
                style={{ background: getGradient() }}
              >
                <div className="w-full h-full rounded-2xl flex items-center justify-center">
                  <div className={`text-center p-4 ${getContrastColor()}`}>
                    <p className="text-xl font-bold mb-1 drop-shadow-sm">{hexValue}</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm opacity-90">
                      <div>R: {rgb.r}</div>
                      <div>X: {xyz.x.toFixed(1)}</div>
                      <div>G: {rgb.g}</div>
                      <div>Y: {xyz.y.toFixed(1)}</div>
                      <div>B: {rgb.b}</div>
                      <div>Z: {xyz.z.toFixed(1)}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Color Information Cards */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-600">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">RGB Model</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Additive color model for displays</p>
                  <div className="mt-2 flex justify-between">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-600">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">XYZ Model</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">CIE standard, device-independent</p>
                  <div className="mt-2 flex justify-between text-xs">
                    <span>X: Tristimulus</span>
                    <span>Y: Luminance</span>
                    <span>Z: Blue-yellow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls Section */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-600">
              {/* RGB Controls */}
              <div className={`mb-8 transition-opacity duration-300 ${activeTab === 'rgb' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                  <span className="inline-block w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-2 text-center leading-8">R</span>
                  RGB Value Adjustment
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Red (R)
                      </label>
                      <span className="text-sm text-red-600 dark:text-red-400 font-mono">{rgb.r}</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="range"
                        name="r"
                        min="0"
                        max="255"
                        value={rgb.r}
                        onChange={handleRgbChange}
                        className="flex-1 h-2 bg-gradient-to-r from-black to-red-500 rounded-lg appearance-none cursor-pointer slider-thumb mr-4"
                      />
                      <input
                        type="number"
                        name="r"
                        min="0"
                        max="255"
                        value={rgb.r}
                        onChange={handleRgbChange}
                        className="w-20 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Green (G)
                      </label>
                      <span className="text-sm text-green-600 dark:text-green-400 font-mono">{rgb.g}</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="range"
                        name="g"
                        min="0"
                        max="255"
                        value={rgb.g}
                        onChange={handleRgbChange}
                        className="flex-1 h-2 bg-gradient-to-r from-black to-green-500 rounded-lg appearance-none cursor-pointer slider-thumb mr-4"
                      />
                      <input
                        type="number"
                        name="g"
                        min="0"
                        max="255"
                        value={rgb.g}
                        onChange={handleRgbChange}
                        className="w-20 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Blue (B)
                      </label>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-mono">{rgb.b}</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="range"
                        name="b"
                        min="0"
                        max="255"
                        value={rgb.b}
                        onChange={handleRgbChange}
                        className="flex-1 h-2 bg-gradient-to-r from-black to-blue-500 rounded-lg appearance-none cursor-pointer slider-thumb mr-4"
                      />
                      <input
                        type="number"
                        name="b"
                        min="0"
                        max="255"
                        value={rgb.b}
                        onChange={handleRgbChange}
                        className="w-20 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* XYZ Controls */}
              <div className={`transition-opacity duration-300 ${activeTab === 'xyz' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                {/* XYZ Controls content remains the same */}
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                  <span className="inline-block w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg mr-2 text-center leading-8">X</span>
                  XYZ Value Adjustment
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        X Component (0-95.047)
                      </label>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-mono">{xyz.x.toFixed(3)}</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="range"
                        name="x"
                        min="0"
                        max="95.047"
                        step="0.001"
                        value={xyz.x}
                        onChange={handleXyzChange}
                        className="flex-1 h-2 bg-gradient-to-r from-gray-300 to-purple-500 rounded-lg appearance-none cursor-pointer slider-thumb mr-4"
                      />
                      <input
                        type="number"
                        name="x"
                        min="0"
                        max="95.047"
                        step="0.001"
                        value={xyz.x.toFixed(3)}
                        onChange={handleXyzChange}
                        className="w-24 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Y Component (0-100.000)
                      </label>
                      <span className="text-sm text-indigo-600 dark:text-indigo-400 font-mono">{xyz.y.toFixed(3)}</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="range"
                        name="y"
                        min="0"
                        max="100"
                        step="0.001"
                        value={xyz.y}
                        onChange={handleXyzChange}
                        className="flex-1 h-2 bg-gradient-to-r from-gray-300 to-indigo-500 rounded-lg appearance-none cursor-pointer slider-thumb mr-4"
                      />
                      <input
                        type="number"
                        name="y"
                        min="0"
                        max="100"
                        step="0.001"
                        value={xyz.y.toFixed(3)}
                        onChange={handleXyzChange}
                        className="w-24 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Z Component (0-108.883)
                      </label>
                      <span className="text-sm text-cyan-600 dark:text-cyan-400 font-mono">{xyz.z.toFixed(3)}</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="range"
                        name="z"
                        min="0"
                        max="108.883"
                        step="0.001"
                        value={xyz.z}
                        onChange={handleXyzChange}
                        className="flex-1 h-2 bg-gradient-to-r from-gray-300 to-cyan-500 rounded-lg appearance-none cursor-pointer slider-thumb mr-4"
                      />
                      <input
                        type="number"
                        name="z"
                        min="0"
                        max="108.883"
                        step="0.001"
                        value={xyz.z.toFixed(3)}
                        onChange={handleXyzChange}
                        className="w-24 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details Panel */}
              <div className={`transition-opacity duration-300 ${activeTab === 'technical' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                  <span className="inline-block w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg mr-2 text-center leading-8">T</span>
                  Technical Details
                </h3>

                {/* Negative Values Warning */}
                {hasNegativeValues && (
                  <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">Out of sRGB Gamut</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                          The current XYZ values produce negative RGB components (R:{rawRgb.r.toFixed(3)}, G:{rawRgb.g.toFixed(3)}, B:{rawRgb.b.toFixed(3)}), 
                          indicating colors outside the sRGB color space. Values are automatically clamped to valid range.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Transformation Matrix */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">sRGB Transformation Matrix</h4>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="font-mono text-sm text-gray-800 dark:text-gray-200">
                      <div className="text-center mb-2">XYZ → RGB (Linear)</div>
                      <div className="grid grid-cols-4 gap-2 items-center">
                        <div className="text-right">R</div>
                        <div className="text-center">[</div>
                        <div className="grid grid-cols-3 gap-1 text-center">
                          {xyzToRgbMatrix[0].map((val, i) => (
                            <div key={i} className="px-1">{val.toFixed(4)}</div>
                          ))}
                        </div>
                        <div>]</div>
                        
                        <div className="text-right">G</div>
                        <div className="text-center">=</div>
                        <div className="grid grid-cols-3 gap-1 text-center">
                          {xyzToRgbMatrix[1].map((val, i) => (
                            <div key={i} className="px-1">{val.toFixed(4)}</div>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-center">
                          <div>X</div>
                          <div>Y</div>
                          <div>Z</div>
                        </div>
                        
                        <div className="text-right">B</div>
                        <div></div>
                        <div className="grid grid-cols-3 gap-1 text-center">
                          {xyzToRgbMatrix[2].map((val, i) => (
                            <div key={i} className="px-1">{val.toFixed(4)}</div>
                          ))}
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculation Steps */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Current Calculation</h4>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="font-mono text-sm text-gray-800 dark:text-gray-200 space-y-2">
                      <div>Input XYZ: ({xyz.x.toFixed(3)}, {xyz.y.toFixed(3)}, {xyz.z.toFixed(3)})</div>
                      <div>Normalized: ({(xyz.x/100).toFixed(4)}, {(xyz.y/100).toFixed(4)}, {(xyz.z/100).toFixed(4)})</div>
                      <div className="border-t border-gray-300 dark:border-gray-600 pt-2">
                        <div>Linear RGB:</div>
                        <div className="ml-4">
                          R = {(xyz.x/100).toFixed(4)} × {xyzToRgbMatrix[0][0]} + {(xyz.y/100).toFixed(4)} × {xyzToRgbMatrix[0][1]} + {(xyz.z/100).toFixed(4)} × {xyzToRgbMatrix[0][2]} = {rawRgb.r.toFixed(4)}
                        </div>
                        <div className="ml-4">
                          G = {(xyz.x/100).toFixed(4)} × {xyzToRgbMatrix[1][0]} + {(xyz.y/100).toFixed(4)} × {xyzToRgbMatrix[1][1]} + {(xyz.z/100).toFixed(4)} × {xyzToRgbMatrix[1][2]} = {rawRgb.g.toFixed(4)}
                        </div>
                        <div className="ml-4">
                          B = {(xyz.x/100).toFixed(4)} × {xyzToRgbMatrix[2][0]} + {(xyz.y/100).toFixed(4)} × {xyzToRgbMatrix[2][1]} + {(xyz.z/100).toFixed(4)} × {xyzToRgbMatrix[2][2]} = {rawRgb.b.toFixed(4)}
                        </div>
                      </div>
                      <div className="border-t border-gray-300 dark:border-gray-600 pt-2">
                        <div>After Gamma Correction &amp; Clamping: RGB({rgb.r}, {rgb.g}, {rgb.b})</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Examples */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Code Examples</h4>
                  
                                     {/* Python Example */}
                   <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Python (NumPy)</span>
                      <button
                        onClick={() => copyToClipboard(pythonCode, 99)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                        title="Copy Python code"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                                         <pre className="p-3 text-xs font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                       <code>{pythonCode}</code>
                     </pre>
                     {/* Copy success tooltip for Python */}
                     {copiedIndex === 99 && showTooltip && (
                       <div className="absolute -top-8 right-4 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg z-10">
                         Copied!
                       </div>
                     )}
                   </div>

                                     {/* JavaScript Example */}
                   <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript</span>
                      <button
                        onClick={() => copyToClipboard(javascriptCode, 100)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                        title="Copy JavaScript code"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                                         <pre className="p-3 text-xs font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                       <code>{javascriptCode}</code>
                     </pre>
                     {/* Copy success tooltip for JavaScript */}
                     {copiedIndex === 100 && showTooltip && (
                       <div className="absolute -top-8 right-4 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg z-10">
                         Copied!
                       </div>
                     )}
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Color Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cssCodes.map((code, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 group hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {codeDescriptions[index]}
                      </span>
                      <button
                        onClick={() => copyToClipboard(code, index)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy to clipboard"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-gray-900 dark:text-gray-100 break-all">
                      {code}
                    </code>
                  </div>
                  
                  {/* Copy success tooltip */}
                  {copiedIndex === index && showTooltip && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg z-10">
                      Copied!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}