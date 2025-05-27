'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { rgbToLab, labToRgb } from '@/utils/colorConverter';

export default function RgbToLabConverter() {
  const [rgb, setRgb] = useState({ r: 46, g: 139, b: 87 });
  const [lab, setLab] = useState({ l: 0, a: 0, b: 0 });
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [activeTab, setActiveTab] = useState('rgb');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Convert RGB to LAB on component mount and when RGB changes
  useEffect(() => {
    const labColor = rgbToLab(rgb);
    setLab(labColor);
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

  // Handle LAB input changes
  const handleLabChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Different constraints based on LAB component
    let newValue;
    if (name === 'l') {
      newValue = Math.max(0, Math.min(100, parseFloat(value) || 0));
    } else {
      newValue = parseFloat(value) || 0;
    }
    
    const newLab = { ...lab, [name]: newValue };
    setLab(newLab);
    
    // Convert back to RGB
    const newRgb = labToRgb(newLab);
    setRgb(newRgb);
  };

  // Format color values for display
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hexValue = `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
  const labString = `lab(${lab.l.toFixed(2)}% ${lab.a.toFixed(2)} ${lab.b.toFixed(2)})`;
  
  // CSS code for copying
  const cssCodes = [
    `color: ${rgbString};`,
    `color: ${hexValue};`,
    `color: ${labString};`,
  ];

  // CSS code descriptions
  const codeDescriptions = [
    'RGB Format',
    'HEX Format',
    'LAB Format'
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

  // Calculate gradient based on LAB values
  const getGradient = () => {
    // Use the a and b components to create a gradient direction
    const angle = Math.atan2(lab.b, lab.a) * (180 / Math.PI);
    return `linear-gradient(${angle}deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.7), rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1))`;
  };

  return (
    <div className={`${isEmbedded ? '' : 'min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12'}`}>
      <div className={`${isEmbedded ? '' : 'container mx-auto px-4'}`}>
        {/* Only show title in embedded mode */}
        {isEmbedded && (
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            RGB to LAB Color Converter
          </h1>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
          {/* Main Card Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
                RGB ↔ LAB Color Space Conversion
              </span>
            </h2>
            
            {/* Tab Switcher */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'rgb' 
                  ? 'bg-white dark:bg-gray-600 shadow-md text-rose-600 dark:text-rose-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-300'}`}
                onClick={() => setActiveTab('rgb')}
              >
                RGB Input
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'lab' 
                  ? 'bg-white dark:bg-gray-600 shadow-md text-purple-600 dark:text-purple-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300'}`}
                onClick={() => setActiveTab('lab')}
              >
                LAB Input
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
                      <div>L: {lab.l.toFixed(1)}</div>
                      <div>G: {rgb.g}</div>
                      <div>a: {lab.a.toFixed(1)}</div>
                      <div>B: {rgb.b}</div>
                      <div>b: {lab.b.toFixed(1)}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Color Information Cards */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-600">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">RGB Model</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Additive color model used in displays</p>
                  <div className="mt-2 flex justify-between">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-600">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">LAB Model</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Perceptually uniform, device-independent</p>
                  <div className="mt-2 flex justify-between">
                    <div className="w-4 h-4 rounded-full bg-gray-900 dark:bg-white"></div>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-yellow-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls Section */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-600">
              {/* RGB Controls */}
              <div className={`mb-8 transition-opacity duration-300 ${activeTab === 'rgb' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                  <span className="inline-block w-8 h-8 bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-lg mr-2 text-center leading-8">R</span>
                  RGB Value Adjustment
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Red (R)
                      </label>
                      <span className="text-sm text-rose-600 dark:text-rose-400 font-mono">{rgb.r}</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="range"
                        name="r"
                        min="0"
                        max="255"
                        value={rgb.r}
                        onChange={handleRgbChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600 accent-rose-500"
                      />
                      <input
                        type="number"
                        name="r"
                        min="0"
                        max="255"
                        value={rgb.r}
                        onChange={handleRgbChange}
                        className="ml-4 w-16 text-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
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
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600 accent-green-500"
                      />
                      <input
                        type="number"
                        name="g"
                        min="0"
                        max="255"
                        value={rgb.g}
                        onChange={handleRgbChange}
                        className="ml-4 w-16 text-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
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
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600 accent-blue-500"
                      />
                      <input
                        type="number"
                        name="b"
                        min="0"
                        max="255"
                        value={rgb.b}
                        onChange={handleRgbChange}
                        className="ml-4 w-16 text-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* LAB Controls */}
              <div className={`transition-opacity duration-300 ${activeTab === 'lab' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                  <span className="inline-block w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg mr-2 text-center leading-8">L</span>
                  LAB Value Adjustment
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Lightness (L)
                      </label>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-mono">{lab.l.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="range"
                        name="l"
                        min="0"
                        max="100"
                        step="0.1"
                        value={lab.l}
                        onChange={handleLabChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600 accent-purple-500"
                      />
                      <input
                        type="number"
                        name="l"
                        min="0"
                        max="100"
                        step="0.1"
                        value={lab.l.toFixed(1)}
                        onChange={handleLabChange}
                        className="ml-4 w-16 text-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Green-Red Axis (a)
                      </label>
                      <span className="text-sm text-rose-600 dark:text-rose-400 font-mono">{lab.a.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full flex items-center">
                        <span className="text-xs text-green-500 mr-2">Green</span>
                        <input
                          type="range"
                          name="a"
                          min="-128"
                          max="127"
                          step="0.1"
                          value={lab.a}
                          onChange={handleLabChange}
                          className="w-full h-2 bg-gradient-to-r from-green-500 to-red-500 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-xs text-red-500 ml-2">Red</span>
                      </div>
                      <input
                        type="number"
                        name="a"
                        min="-128"
                        max="127"
                        step="0.1"
                        value={lab.a.toFixed(1)}
                        onChange={handleLabChange}
                        className="ml-4 w-16 text-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Blue-Yellow Axis (b)
                      </label>
                      <span className="text-sm text-amber-600 dark:text-amber-400 font-mono">{lab.b.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full flex items-center">
                        <span className="text-xs text-blue-500 mr-2">Blue</span>
                        <input
                          type="range"
                          name="b"
                          min="-128"
                          max="127"
                          step="0.1"
                          value={lab.b}
                          onChange={handleLabChange}
                          className="w-full h-2 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-xs text-yellow-500 ml-2">Yellow</span>
                      </div>
                      <input
                        type="number"
                        name="b"
                        min="-128"
                        max="127"
                        step="0.1"
                        value={lab.b.toFixed(1)}
                        onChange={handleLabChange}
                        className="ml-4 w-16 text-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CSS Code Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              CSS Code
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {cssCodes.map((code, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-600">
                  <div className="bg-gray-100 dark:bg-gray-600 py-2 px-4">
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{codeDescriptions[index]}</p>
                  </div>
                  <div className="p-4 relative group">
                    <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto font-mono">
                      <code>{code}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(code, index)}
                      className={`absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 text-gray-700 dark:text-gray-300 p-1.5 rounded-lg transition-all duration-300 ${copiedIndex === index ? 'bg-green-500 text-white dark:bg-green-500' : ''}`}
                      title="Copy to clipboard"
                    >
                      {copiedIndex === index ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                    {copiedIndex === index && showTooltip && (
                      <div className="absolute top-2 right-10 bg-gray-800 text-white text-xs py-1 px-2 rounded pointer-events-none animate-fade-in">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LAB Color Space Info Section */}
          <div className="mt-10 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">LAB Color Space Explanation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              CIELAB color space (also known as L*a*b*) is a color space that can describe all colors visible to the human eye. Its three parameters represent:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-gradient-to-b from-black to-white rounded-full mr-2"></div>
                  <span className="font-medium text-gray-800 dark:text-white">L Lightness</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">0-100, from black (0) to white (100)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-red-500 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-800 dark:text-white">a Green-Red Axis</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Negative values for green, positive for red</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-800 dark:text-white">b Blue-Yellow Axis</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Negative values for blue, positive for yellow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 