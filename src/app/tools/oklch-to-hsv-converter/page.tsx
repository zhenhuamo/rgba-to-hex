'use client';

import React, { useState, useEffect } from 'react';
import { hsvToOklch, oklchToHsv, hsvToHex, oklchToCss, isValidOklch, isValidHsv, hsvToCss } from '@/utils/colorConverter';

export default function OklchToHsvConverter() {
  const [hsv, setHsv] = useState({ h: 240, s: 100, v: 50 });
  const [oklch, setOklch] = useState({ l: 0.452, c: 0.313, h: 264 });
  const [conversionDirection, setConversionDirection] = useState<'oklch-to-hsv' | 'hsv-to-oklch'>('oklch-to-hsv');
  const [copySuccess, setCopySuccess] = useState('');

  // Conversion functions
  const convertOklchToHsv = () => {
    try {
      if (isValidOklch(oklch)) {
        const result = oklchToHsv(oklch);
        setHsv(result);
      }
    } catch (error) {
      console.error('Conversion error:', error);
    }
  };

  const convertHsvToOklch = () => {
    try {
      if (isValidHsv(hsv)) {
        const result = hsvToOklch(hsv);
        setOklch(result);
      }
    } catch (error) {
      console.error('Conversion error:', error);
    }
  };

  // Auto-convert when OKLCH values change
  useEffect(() => {
    if (conversionDirection === 'oklch-to-hsv') {
      convertOklchToHsv();
    }
  }, [oklch, conversionDirection]);

  // Auto-convert when HSV values change
  useEffect(() => {
    if (conversionDirection === 'hsv-to-oklch') {
      convertHsvToOklch();
    }
  }, [hsv, conversionDirection]);

  // Detect embed mode
  const [isEmbedded, setIsEmbedded] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsEmbedded(urlParams.get('embed') === 'true');
  }, []);

  // Copy to clipboard
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(`${type} copied!`);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  // Generate preview color
  const previewColor = hsvToHex(hsv);
  const oklchCssString = oklchToCss(oklch);
  const hsvCssString = hsvToCss(hsv);

  return (
    <div className={`${isEmbedded ? 'min-h-[600px]' : 'min-h-screen'} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
              OKLCH ↔ HSV Color Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Convert between OKLCH and HSV color spaces with real-time preview
            </p>
          </div>

          {/* Conversion Direction Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setConversionDirection('oklch-to-hsv')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'oklch-to-hsv'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                OKLCH → HSV
              </button>
              <button
                onClick={() => setConversionDirection('hsv-to-oklch')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'hsv-to-oklch'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                HSV → OKLCH
              </button>
            </div>
          </div>

          {/* Main Converter Interface */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* OKLCH Input Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                OKLCH Color Input
              </h2>
              
              {/* Lightness Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Lightness (L): {oklch.l.toFixed(3)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={oklch.l}
                  onChange={(e) => setOklch({ ...oklch, l: parseFloat(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0</span>
                  <span>1</span>
                </div>
              </div>

              {/* Chroma Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Chroma (C): {oklch.c.toFixed(3)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.4"
                  step="0.001"
                  value={oklch.c}
                  onChange={(e) => setOklch({ ...oklch, c: parseFloat(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0</span>
                  <span>0.4</span>
                </div>
              </div>

              {/* Hue Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hue (H): {oklch.h.toFixed(0)}°
                </label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={oklch.h}
                  onChange={(e) => setOklch({ ...oklch, h: parseFloat(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0°</span>
                  <span>360°</span>
                </div>
              </div>

              {/* OKLCH Manual Input */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">L</label>
                  <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.001"
                    value={oklch.l}
                    onChange={(e) => setOklch({ ...oklch, l: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">C</label>
                  <input
                    type="number"
                    min="0"
                    max="0.4"
                    step="0.001"
                    value={oklch.c}
                    onChange={(e) => setOklch({ ...oklch, c: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">H</label>
                  <input
                    type="number"
                    min="0"
                    max="360"
                    step="1"
                    value={oklch.h}
                    onChange={(e) => setOklch({ ...oklch, h: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* HSV Output Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                HSV Color Output
              </h2>
              
              {/* Hue Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hue (H): {hsv.h}°
                </label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={hsv.h}
                  onChange={(e) => setHsv({ ...hsv, h: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0°</span>
                  <span>360°</span>
                </div>
              </div>

              {/* Saturation Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Saturation (S): {hsv.s}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={hsv.s}
                  onChange={(e) => setHsv({ ...hsv, s: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Value Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Value (V): {hsv.v}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={hsv.v}
                  onChange={(e) => setHsv({ ...hsv, v: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* HSV Manual Input */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">H</label>
                  <input
                    type="number"
                    min="0"
                    max="360"
                    step="1"
                    value={hsv.h}
                    onChange={(e) => setHsv({ ...hsv, h: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">S</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={hsv.s}
                    onChange={(e) => setHsv({ ...hsv, s: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">V</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={hsv.v}
                    onChange={(e) => setHsv({ ...hsv, v: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Color Preview and Results */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Color Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Color Preview</h3>
              <div
                className="w-full h-32 rounded-xl border-2 border-gray-200 dark:border-gray-600 mb-4 shadow-inner"
                style={{ backgroundColor: previewColor }}
              ></div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">HEX Color</p>
                <div className="flex items-center justify-center gap-2">
                  <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm font-mono">
                    {previewColor}
                  </code>
                  <button
                    onClick={() => copyToClipboard(previewColor, 'HEX')}
                    className="p-1 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* CSS Code Output */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">CSS Code</h3>

              {/* OKLCH CSS */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">OKLCH CSS</label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-sm font-mono overflow-x-auto">
                    {oklchCssString}
                  </code>
                  <button
                    onClick={() => copyToClipboard(oklchCssString, 'OKLCH CSS')}
                    className="p-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* HSV CSS (as HSL) */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">HSV as HSL CSS</label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-sm font-mono overflow-x-auto">
                    {hsvCssString}
                  </code>
                  <button
                    onClick={() => copyToClipboard(hsvCssString, 'HSV CSS')}
                    className="p-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* HSV Values */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">HSV Values</label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-sm font-mono overflow-x-auto">
                    hsv({hsv.h}, {hsv.s}%, {hsv.v}%)
                  </code>
                  <button
                    onClick={() => copyToClipboard(`hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`, 'HSV Values')}
                    className="p-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Success Message */}
          {copySuccess && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
              {copySuccess}
            </div>
          )}

          {/* Implementation Code Section */}
          {!isEmbedded && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Implementation Code
              </h3>

              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{`// OKLCH to HSV Conversion Implementation
function oklchToHsv(oklch) {
  const { l, c, h } = oklch;

  // Step 1: OKLCH to RGB conversion
  const rgb = oklchToRgb({ l, c, h });

  // Step 2: RGB to HSV conversion
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  // Calculate HSV values
  const v = max; // Value is the maximum RGB component
  const s = max === 0 ? 0 : delta / max; // Saturation

  let hue = 0;
  if (delta !== 0) {
    switch (max) {
      case r: hue = ((g - b) / delta) % 6; break;
      case g: hue = (b - r) / delta + 2; break;
      case b: hue = (r - g) / delta + 4; break;
    }
    hue = Math.round(hue * 60);
    if (hue < 0) hue += 360;
  }

  return {
    h: hue,
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
}

// HSV to OKLCH Conversion Implementation
function hsvToOklch(hsv) {
  const { h, s, v } = hsv;

  // Step 1: HSV to RGB conversion
  const rgb = hsvToRgb({ h, s, v });

  // Step 2: RGB to OKLCH conversion
  return rgbToOklch(rgb);
}

// Example usage
const oklchColor = { l: ${oklch.l.toFixed(3)}, c: ${oklch.c.toFixed(3)}, h: ${oklch.h} };
const hsvColor = oklchToHsv(oklchColor);
console.log(hsvColor); // { h: ${hsv.h}, s: ${hsv.s}, v: ${hsv.v} }

// Color picker integration example
function createColorPicker(oklchColor) {
  const hsv = oklchToHsv(oklchColor);

  // Use HSV for intuitive UI controls
  const hueSlider = hsv.h;      // 0-360° for hue wheel
  const saturationSlider = hsv.s; // 0-100% for saturation
  const valueSlider = hsv.v;    // 0-100% for brightness

  return { hueSlider, saturationSlider, valueSlider };
}`}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
