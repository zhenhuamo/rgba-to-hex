'use client';

import React, { useState, useEffect } from 'react';
import { oklchToRgb, rgbToOklch, oklchToCss, isValidOklch } from '@/utils/colorConverter';

export default function RgbToOklchConverter() {
  const [oklch, setOklch] = useState({ l: 0.628, c: 0.258, h: 29 });
  const [rgb, setRgb] = useState({ r: 255, g: 0, b: 0 });
  const [conversionDirection, setConversionDirection] = useState<'rgb-to-oklch' | 'oklch-to-rgb'>('rgb-to-oklch');
  const [copySuccess, setCopySuccess] = useState('');

  // Conversion functions
  const convertRgbToOklch = () => {
    try {
      if (rgb.r >= 0 && rgb.r <= 255 && rgb.g >= 0 && rgb.g <= 255 && rgb.b >= 0 && rgb.b <= 255) {
        const result = rgbToOklch(rgb);
        setOklch(result);
      }
    } catch (error) {
      console.error('Conversion error:', error);
    }
  };

  const convertOklchToRgb = () => {
    try {
      if (isValidOklch(oklch)) {
        const result = oklchToRgb(oklch);
        setRgb(result);
      }
    } catch (error) {
      console.error('Conversion error:', error);
    }
  };

  // Auto-convert when RGB values change
  useEffect(() => {
    if (conversionDirection === 'rgb-to-oklch') {
      convertRgbToOklch();
    }
  }, [rgb, conversionDirection]);

  // Auto-convert when OKLCH values change
  useEffect(() => {
    if (conversionDirection === 'oklch-to-rgb') {
      convertOklchToRgb();
    }
  }, [oklch, conversionDirection]);

  // Copy to clipboard
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(`${type} copied!`);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Generate CSS strings
  const oklchCssString = oklchToCss(oklch);
  const rgbCssString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hexColor = `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;

  // Page metadata
  useEffect(() => {
    document.title = 'Professional RGB to OKLCH Converter Tool - JavaScript Color Conversion Online';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        {/* SEO optimized page description */}
        <div className="text-center mb-8">

        </div>

        {/* Main converter interface */}
        <div className="min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-4xl mx-auto">
              {/* Title section */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 mb-2">
                  RGB ↔ OKLCH Color Converter
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Convert between RGB and OKLCH color formats with real-time preview
                </p>
              </div>

              {/* Direction selector */}
              <div className="flex justify-center mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
                  <button
                    onClick={() => setConversionDirection('rgb-to-oklch')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      conversionDirection === 'rgb-to-oklch'
                        ? 'bg-green-500 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    RGB → OKLCH
                  </button>
                  <button
                    onClick={() => setConversionDirection('oklch-to-rgb')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      conversionDirection === 'oklch-to-rgb'
                        ? 'bg-green-500 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    OKLCH → RGB
                  </button>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* RGB input section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">RGB Color</h2>
                  
                  {/* Color preview */}
                  <div className="mb-6">
                    <div 
                      className="w-full h-24 rounded-lg border-2 border-gray-200 dark:border-gray-600 shadow-inner"
                      style={{ backgroundColor: hexColor }}
                    ></div>
                    <div className="mt-2 text-center">
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                        {rgbCssString}
                      </code>
                    </div>
                  </div>

                  {/* RGB inputs */}
                  <div className="space-y-6">
                    {/* Red */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Red: {rgb.r}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="255"
                        value={rgb.r}
                        onChange={(e) => setRgb({ ...rgb, r: parseInt(e.target.value) })}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-red-500"
                        disabled={conversionDirection === 'oklch-to-rgb'}
                      />
                      <input
                        type="number"
                        min="0"
                        max="255"
                        value={rgb.r}
                        onChange={(e) => setRgb({ ...rgb, r: Math.min(255, Math.max(0, parseInt(e.target.value) || 0)) })}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        disabled={conversionDirection === 'oklch-to-rgb'}
                      />
                    </div>

                    {/* Green */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Green: {rgb.g}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="255"
                        value={rgb.g}
                        onChange={(e) => setRgb({ ...rgb, g: parseInt(e.target.value) })}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-green-500"
                        disabled={conversionDirection === 'oklch-to-rgb'}
                      />
                      <input
                        type="number"
                        min="0"
                        max="255"
                        value={rgb.g}
                        onChange={(e) => setRgb({ ...rgb, g: Math.min(255, Math.max(0, parseInt(e.target.value) || 0)) })}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        disabled={conversionDirection === 'oklch-to-rgb'}
                      />
                    </div>

                    {/* Blue */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Blue: {rgb.b}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="255"
                        value={rgb.b}
                        onChange={(e) => setRgb({ ...rgb, b: parseInt(e.target.value) })}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-blue-500"
                        disabled={conversionDirection === 'oklch-to-rgb'}
                      />
                      <input
                        type="number"
                        min="0"
                        max="255"
                        value={rgb.b}
                        onChange={(e) => setRgb({ ...rgb, b: Math.min(255, Math.max(0, parseInt(e.target.value) || 0)) })}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        disabled={conversionDirection === 'oklch-to-rgb'}
                      />
                    </div>
                  </div>

                  {/* Copy button for RGB */}
                  <div className="mt-6">
                    <button
                      onClick={() => copyToClipboard(rgbCssString, 'RGB')}
                      className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Copy RGB Value
                    </button>
                  </div>
                </div>

                {/* OKLCH output section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">OKLCH Color</h2>
                  
                  {/* Color preview */}
                  <div className="mb-6">
                    <div 
                      className="w-full h-24 rounded-lg border-2 border-gray-200 dark:border-gray-600 shadow-inner"
                      style={{ backgroundColor: hexColor }}
                    ></div>
                    <div className="mt-2 text-center">
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                        {oklchCssString}
                      </code>
                    </div>
                  </div>

                  {/* OKLCH display/controls */}
                  <div className="space-y-6">
                    {/* Lightness */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Lightness: {oklch.l.toFixed(3)}
                      </label>
                      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="text-2xl font-mono text-center text-gray-800 dark:text-white">
                          {oklch.l.toFixed(3)}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">
                          Range: 0.000 - 1.000
                        </div>
                      </div>
                      {conversionDirection === 'oklch-to-rgb' && (
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.001"
                          value={oklch.l}
                          onChange={(e) => setOklch({ ...oklch, l: parseFloat(e.target.value) })}
                          className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-white mt-2"
                        />
                      )}
                    </div>

                    {/* Chroma */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Chroma: {oklch.c.toFixed(3)}
                      </label>
                      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="text-2xl font-mono text-center text-gray-800 dark:text-white">
                          {oklch.c.toFixed(3)}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">
                          Range: 0.000 - 0.400
                        </div>
                      </div>
                      {conversionDirection === 'oklch-to-rgb' && (
                        <input
                          type="range"
                          min="0"
                          max="0.4"
                          step="0.001"
                          value={oklch.c}
                          onChange={(e) => setOklch({ ...oklch, c: parseFloat(e.target.value) })}
                          className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-gray-400 to-red-500 mt-2"
                        />
                      )}
                    </div>

                    {/* Hue */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Hue: {oklch.h.toFixed(0)}°
                      </label>
                      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="text-2xl font-mono text-center text-gray-800 dark:text-white">
                          {oklch.h.toFixed(0)}°
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">
                          Range: 0° - 360°
                        </div>
                      </div>
                      {conversionDirection === 'oklch-to-rgb' && (
                        <input
                          type="range"
                          min="0"
                          max="360"
                          value={oklch.h}
                          onChange={(e) => setOklch({ ...oklch, h: parseInt(e.target.value) })}
                          className="w-full h-3 rounded-lg appearance-none cursor-pointer mt-2"
                          style={{
                            background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Copy button for OKLCH */}
                  <div className="mt-6">
                    <button
                      onClick={() => copyToClipboard(oklchCssString, 'OKLCH')}
                      className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Copy OKLCH Value
                    </button>
                  </div>
                </div>
              </div>

              {/* Detailed conversion information */}
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Conversion Details & CSS Code</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">RGB Input</div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                      <code className="text-sm font-mono">{rgbCssString}</code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      HEX: {hexColor}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">OKLCH Output</div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                      <code className="text-sm font-mono">{oklchCssString}</code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      L: {oklch.l.toFixed(3)} | C: {oklch.c.toFixed(3)} | H: {oklch.h.toFixed(0)}°
                    </div>
                  </div>
                </div>

                {/* Copy success message */}
                {copySuccess && (
                  <div className="text-center mb-6">
                    <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm">
                      {copySuccess}
                    </div>
                  </div>
                )}

                {/* Benefits of OKLCH */}
                <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Why Use OKLCH?</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div>
                      <strong className="text-green-600 dark:text-green-400">Perceptual Uniformity:</strong> Equal changes in lightness produce equal visual differences
                    </div>
                    <div>
                      <strong className="text-blue-600 dark:text-blue-400">Better Color Manipulation:</strong> Independent control of lightness, chroma, and hue
                    </div>
                    <div>
                      <strong className="text-purple-600 dark:text-purple-400">Future-Ready:</strong> Part of CSS Color Level 4 specification
                    </div>
                    <div>
                      <strong className="text-orange-600 dark:text-orange-400">Wide Gamut:</strong> Supports P3 and other modern color spaces
                    </div>
                  </div>
                </div>

                {/* CSS Implementation example */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">CSS Implementation</h4>
                  <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`.modern-design {
  /* Traditional RGB (fallback) */
  background-color: ${rgbCssString};
  
  /* Modern OKLCH (preferred) */
  background-color: ${oklchCssString};
  
  /* Easy lightness variations */
  border-color: oklch(${(oklch.l + 0.1).toFixed(3)} ${oklch.c.toFixed(3)} ${oklch.h});
}`}</code>
                    </pre>
                  </div>
                </div>

                {/* JavaScript implementation example */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">JavaScript Implementation</h4>
                  <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-blue-400 text-sm">
                      <code>{`// Convert current RGB to OKLCH
const rgbColor = { r: ${rgb.r}, g: ${rgb.g}, b: ${rgb.b} };
const oklchColor = rgbToOklch(rgbColor);

console.log('RGB:', rgbColor);
console.log('OKLCH:', oklchColor);

// Create color variations
const lighter = { ...oklchColor, l: oklchColor.l + 0.1 };
const darker = { ...oklchColor, l: oklchColor.l - 0.1 };`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}