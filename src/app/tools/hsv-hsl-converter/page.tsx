'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { HSL, HSV, hsvToHsl, hslToHsv, hslToRgb, hsvToHex, rgbaToHex } from '../../../utils/colorConverter';
import ClientEmbed from './ClientEmbed';

const HsvHslConverterPage = () => {
  // State for HSV inputs (for HSV to HSL conversion)
  const [hsvInput, setHsvInput] = useState<HSV>({ h: 0, s: 100, v: 100 });
  // State for HSL outputs (from HSV to HSL conversion)
  const [hslOutputFromHsv, setHslOutputFromHsv] = useState<HSL>(() => hsvToHsl(hsvInput));

  // State for HSL inputs (for HSL to HSV conversion)
  const [hslInput, setHslInput] = useState<HSL>({ h: 0, s: 100, l: 50 });
  // State for HSV outputs (from HSL to HSV conversion)
  const [hsvOutputFromHsl, setHsvOutputFromHsl] = useState<HSV>(() => hslToHsv(hslInput));

  const [copiedHsl, setCopiedHsl] = useState(false);
  const [copiedHsv, setCopiedHsv] = useState(false);
  const [activeTab, setActiveTab] = useState<'hsv-to-hsl' | 'hsl-to-hsv'>('hsv-to-hsl');

  // Helper function to parse and validate HSV input values
  const parseAndValidateHsvInput = (field: keyof HSV, value: string): number => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return 0; // Default to 0 if parsing fails

    if (field === 'h') return Math.max(0, Math.min(360, numValue));
    return Math.max(0, Math.min(100, numValue)); // For s and v
  };

  // Input handler for HSV fields
  const handleHsvInputChange = (field: keyof HSV, value: string) => {
    setHsvInput(prev => ({
      ...prev,
      [field]: parseAndValidateHsvInput(field, value)
    }));
  };

  // Effect for HSV to HSL conversion
  useEffect(() => {
    setHslOutputFromHsv(hsvToHsl(hsvInput));
  }, [hsvInput]);

  // Helper function to parse and validate HSL input values
  const parseAndValidateHslInput = (field: keyof HSL, value: string): number => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return 0; // Default to 0 if parsing fails

    if (field === 'h') return Math.max(0, Math.min(360, numValue));
    return Math.max(0, Math.min(100, numValue)); // For s and l
  };

  // Input handler for HSL fields
  const handleHslInputChange = (field: keyof HSL, value: string) => {
    setHslInput(prev => ({
      ...prev,
      [field]: parseAndValidateHslInput(field, value)
    }));
  };

  // Effect for HSL to HSV conversion
  useEffect(() => {
    setHsvOutputFromHsl(hslToHsv(hslInput));
  }, [hslInput]);

  // Get hex color representation for preview
  const getHsvPreviewColor = (): string => {
    return hsvToHex(hsvInput);
  };

  const getHslPreviewColor = (): string => {
    const rgb = hslToRgb(hslInput);
    // 添加透明度通道
    return rgbaToHex({...rgb, a: 1});
  };

  const copyToClipboard = async (text: string, type: 'hsl' | 'hsv') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'hsl') {
        setCopiedHsl(true);
        setTimeout(() => setCopiedHsl(false), 1500);
      } else {
        setCopiedHsv(true);
        setTimeout(() => setCopiedHsv(false), 1500);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Tab switching handler
  const handleTabChange = (tab: 'hsv-to-hsl' | 'hsl-to-hsv') => {
    setActiveTab(tab);
  };

  // Component for color input sliders with number input (updated to match the image style)
  const ColorSlider = ({ 
    label, id, value, onChange, min, max, step = 1, type = '', hue = 0
  }: { 
    label: string; 
    id: string; 
    value: number; 
    onChange: (value: string) => void; 
    min: number; 
    max: number; 
    step?: number;
    type?: string;
    hue?: number;
  }) => {
    // 根据参数类型和当前色调计算滑块的渐变背景
    let gradientStyle = '';
    
    if (id.includes('h')) {
      // Hue 滑块 - 彩虹色渐变
      gradientStyle = 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)';
    } else if (id.includes('s') && type === 'hsv') {
      // HSV Saturation 滑块 - 从白到当前色调的纯色渐变
      gradientStyle = `linear-gradient(to right, white, hsl(${hue}, 100%, 50%))`;
    } else if (id.includes('v')) {
      // HSV Value 滑块 - 从黑到当前色调的纯色渐变
      gradientStyle = `linear-gradient(to right, black, hsl(${hue}, 100%, 50%))`;
    } else if (id.includes('s') && type === 'hsl') {
      // HSL Saturation 滑块
      gradientStyle = `linear-gradient(to right, hsl(${hue}, 0%, 50%), hsl(${hue}, 100%, 50%))`;
    } else if (id.includes('l')) {
      // HSL Lightness 滑块
      gradientStyle = `linear-gradient(to right, black, hsl(${hue}, 100%, 50%), white)`;
    }

    return (
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor={id} className="text-sm font-medium text-gray-800">{label}</label>
          <input
            type="number"
            id={`${id}-number`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-16 px-2 py-1 text-center border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            min={min}
            max={max}
            step={step}
          />
        </div>
        <div className="relative h-14 w-full">
          <style jsx>{`
            input[type=range] {
              -webkit-appearance: none;
              width: 100%;
              height: 14px;
              border-radius: 5px;
              outline: none;
            }
            
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 2px;
              height: 24px;
              background: rgba(0, 0, 0, 0.5);
              border: 1px solid white;
              border-radius: 0;
              cursor: pointer;
            }
            
            input[type=range]::-moz-range-thumb {
              width: 2px;
              height: 24px;
              background: rgba(0, 0, 0, 0.5);
              border: 1px solid white;
              border-radius: 0;
              cursor: pointer;
            }
            
            input[type=range]::-ms-thumb {
              width: 2px;
              height: 24px;
              background: rgba(0, 0, 0, 0.5);
              border: 1px solid white;
              border-radius: 0;
              cursor: pointer;
            }
            
            input[type=range]:focus {
              outline: none;
            }
          `}</style>
          <input
            type="range"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full cursor-pointer"
            min={min}
            max={max}
            step={step}
            style={{ 
              background: gradientStyle
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <ClientEmbed>
        {(isEmbed) => (
          <div className={`container mx-auto p-4 ${isEmbed ? 'embed-mode pb-2' : ''}`}>
            {!isEmbed && (
              <h1 className="text-2xl font-bold mb-6 text-center">HSV to HSL and HSL to HSV Converter</h1>
            )}

            {/* Mobile Tab Selector */}
            <div className="md:hidden mb-6">
              <div className="flex rounded-md shadow-sm bg-gray-100 p-1">
                <button
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'hsv-to-hsl' 
                      ? 'bg-white text-indigo-700 shadow-sm' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => handleTabChange('hsv-to-hsl')}
                >
                  HSV to HSL
                </button>
                <button
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'hsl-to-hsv' 
                      ? 'bg-white text-indigo-700 shadow-sm' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => handleTabChange('hsl-to-hsv')}
                >
                  HSL to HSV
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* HSV to HSL Section */}
              <div className={`p-6 bg-white shadow-lg rounded-lg transition-all duration-300 ${activeTab === 'hsv-to-hsl' || !isEmbed ? 'block' : 'hidden md:block'}`}>
                <h2 className="text-xl font-semibold mb-6">HSV Parameters</h2>
                
                {/* HSV Inputs - New Style */}
                <div className="space-y-4">
                  <ColorSlider 
                    label="Hue (H):" 
                    id="hsv-h" 
                    value={hsvInput.h} 
                    onChange={(val) => handleHsvInputChange('h', val)}
                    min={0}
                    max={360}
                    type="hsv"
                  />
                  <ColorSlider 
                    label="Saturation (S):" 
                    id="hsv-s" 
                    value={hsvInput.s} 
                    onChange={(val) => handleHsvInputChange('s', val)}
                    min={0}
                    max={100}
                    type="hsv"
                    hue={hsvInput.h}
                  />
                  <ColorSlider 
                    label="Value (V):" 
                    id="hsv-v" 
                    value={hsvInput.v} 
                    onChange={(val) => handleHsvInputChange('v', val)}
                    min={0}
                    max={100}
                    type="hsv"
                    hue={hsvInput.h}
                  />
                </div>
                
                {/* Color Preview */}
                <div className="mt-6 mb-6 relative overflow-hidden rounded-lg shadow-md" style={{ height: '80px' }}>
                  <div 
                    className="absolute inset-0 transition-colors duration-300"
                    style={{ backgroundColor: getHsvPreviewColor() }}
                  ></div>
                </div>
                
                {/* HSL Outputs - Simplified */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="text-md font-semibold text-gray-800 mb-3">HSL Result:</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="px-3 py-2 bg-gray-100 rounded text-sm">
                      <span className="font-medium">H:</span> {hslOutputFromHsv.h}°
                    </div>
                    <div className="px-3 py-2 bg-gray-100 rounded text-sm">
                      <span className="font-medium">S:</span> {hslOutputFromHsv.s}%
                    </div>
                    <div className="px-3 py-2 bg-gray-100 rounded text-sm">
                      <span className="font-medium">L:</span> {hslOutputFromHsv.l}%
                    </div>
                  </div>
                  <div className="flex items-center">
                    <code className="block p-2 bg-gray-100 rounded text-sm flex-1 overflow-x-auto">
                      hsl({hslOutputFromHsv.h}, {hslOutputFromHsv.s}%, {hslOutputFromHsv.l}%)
                    </code>
                    <button
                      onClick={() => copyToClipboard(`hsl(${hslOutputFromHsv.h}, ${hslOutputFromHsv.s}%, ${hslOutputFromHsv.l}%)`, 'hsl')}
                      className="ml-2 px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                      {copiedHsl ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* HSL to HSV Section */}
              <div className={`p-6 bg-white shadow-lg rounded-lg transition-all duration-300 ${activeTab === 'hsl-to-hsv' || !isEmbed ? 'block' : 'hidden md:block'}`}>
                <h2 className="text-xl font-semibold mb-6">HSL Parameters</h2>
                
                {/* HSL Inputs - New Style */}
                <div className="space-y-4">
                  <ColorSlider 
                    label="Hue (H):" 
                    id="hsl-h" 
                    value={hslInput.h} 
                    onChange={(val) => handleHslInputChange('h', val)}
                    min={0}
                    max={360}
                    type="hsl"
                  />
                  <ColorSlider 
                    label="Saturation (S):" 
                    id="hsl-s" 
                    value={hslInput.s} 
                    onChange={(val) => handleHslInputChange('s', val)}
                    min={0}
                    max={100}
                    type="hsl"
                    hue={hslInput.h}
                  />
                  <ColorSlider 
                    label="Lightness (L):" 
                    id="hsl-l" 
                    value={hslInput.l} 
                    onChange={(val) => handleHslInputChange('l', val)}
                    min={0}
                    max={100}
                    type="hsl"
                    hue={hslInput.h}
                  />
                </div>
                
                {/* Color Preview */}
                <div className="mt-6 mb-6 relative overflow-hidden rounded-lg shadow-md" style={{ height: '80px' }}>
                  <div 
                    className="absolute inset-0 transition-colors duration-300"
                    style={{ backgroundColor: getHslPreviewColor() }}
                  ></div>
                </div>
                
                {/* HSV Outputs - Simplified */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="text-md font-semibold text-gray-800 mb-3">HSV Result:</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="px-3 py-2 bg-gray-100 rounded text-sm">
                      <span className="font-medium">H:</span> {hsvOutputFromHsl.h}°
                    </div>
                    <div className="px-3 py-2 bg-gray-100 rounded text-sm">
                      <span className="font-medium">S:</span> {hsvOutputFromHsl.s}%
                    </div>
                    <div className="px-3 py-2 bg-gray-100 rounded text-sm">
                      <span className="font-medium">V:</span> {hsvOutputFromHsl.v}%
                    </div>
                  </div>
                  <div className="flex items-center">
                    <code className="block p-2 bg-gray-100 rounded text-sm flex-1 overflow-x-auto">
                      hsv({hsvOutputFromHsl.h}, {hsvOutputFromHsl.s}%, {hsvOutputFromHsl.v}%)
                    </code>
                    <button
                      onClick={() => copyToClipboard(`hsv(${hsvOutputFromHsl.h}, ${hsvOutputFromHsl.s}%, ${hsvOutputFromHsl.v}%)`, 'hsv')}
                      className="ml-2 px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                      {copiedHsv ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {isEmbed && (
              <p className="text-xs text-center mt-4 text-gray-500">HSV/HSL Converter</p>
            )}
          </div>
        )}
      </ClientEmbed>
    </Suspense>
  );
};

export default HsvHslConverterPage; 