'use client';

import React, { useState, useEffect } from 'react';
import { hslToOklch, oklchToHsl, hslToHex, oklchToCss, isValidOklch } from '@/utils/colorConverter';

export default function HslToOklchConverter() {
  const [hsl, setHsl] = useState({ h: 240, s: 100, l: 50 });
  const [oklch, setOklch] = useState({ l: 0.452, c: 0.313, h: 264 });
  const [conversionDirection, setConversionDirection] = useState<'hsl-to-oklch' | 'oklch-to-hsl'>('hsl-to-oklch');
  const [copySuccess, setCopySuccess] = useState('');

  // 转换函数
  const convertHslToOklch = () => {
    try {
      const result = hslToOklch(hsl);
      setOklch(result);
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  const convertOklchToHsl = () => {
    try {
      if (isValidOklch(oklch)) {
        const result = oklchToHsl(oklch);
        setHsl(result);
      }
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  // 当HSL值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'hsl-to-oklch') {
      convertHslToOklch();
    }
  }, [hsl, conversionDirection]);

  // 当OKLCH值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'oklch-to-hsl') {
      convertOklchToHsl();
    }
  }, [oklch, conversionDirection]);

  // 复制到剪贴板
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(`${type} 已复制!`);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  // 生成预览颜色
  const previewColor = hslToHex(hsl);
  const oklchCssString = oklchToCss(oklch);
  const hslCssString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* 标题部分 */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
              HSL ↔ OKLCH Color Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Convert between HSL and OKLCH color spaces with real-time preview
            </p>
          </div>

          {/* 转换方向选择 */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setConversionDirection('hsl-to-oklch')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'hsl-to-oklch'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                HSL → OKLCH
              </button>
              <button
                onClick={() => setConversionDirection('oklch-to-hsl')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'oklch-to-hsl'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                OKLCH → HSL
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* HSL 输入部分 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">HSL Color</h2>
              
              {/* 颜色预览 */}
              <div className="mb-6">
                <div 
                  className="w-full h-24 rounded-lg border-2 border-gray-200 dark:border-gray-600 shadow-inner"
                  style={{ backgroundColor: previewColor }}
                ></div>
                <div className="mt-2 text-center">
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                    {previewColor}
                  </code>
                </div>
              </div>

              {/* HSL 滑块 */}
              <div className="space-y-6">
                {/* Hue */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hue: {hsl.h}°
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={hsl.h}
                    onChange={(e) => setHsl({ ...hsl, h: parseInt(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), 
                        hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))`
                    }}
                    disabled={conversionDirection === 'oklch-to-hsl'}
                  />
                </div>

                {/* Saturation */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Saturation: {hsl.s}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={hsl.s}
                    onChange={(e) => setHsl({ ...hsl, s: parseInt(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(${hsl.h}, 0%, ${hsl.l}%), hsl(${hsl.h}, 100%, ${hsl.l}%))`
                    }}
                    disabled={conversionDirection === 'oklch-to-hsl'}
                  />
                </div>

                {/* Lightness */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Lightness: {hsl.l}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={hsl.l}
                    onChange={(e) => setHsl({ ...hsl, l: parseInt(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(${hsl.h}, ${hsl.s}%, 0%), hsl(${hsl.h}, ${hsl.s}%, 50%), hsl(${hsl.h}, ${hsl.s}%, 100%))`
                    }}
                    disabled={conversionDirection === 'oklch-to-hsl'}
                  />
                </div>
              </div>

              {/* HSL 数值输入 */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1">H</label>
                  <input
                    type="number"
                    min="0"
                    max="360"
                    value={hsl.h}
                    onChange={(e) => setHsl({ ...hsl, h: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'oklch-to-hsl'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">S</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={hsl.s}
                    onChange={(e) => setHsl({ ...hsl, s: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'oklch-to-hsl'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">L</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={hsl.l}
                    onChange={(e) => setHsl({ ...hsl, l: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'oklch-to-hsl'}
                  />
                </div>
              </div>

              {/* HSL CSS 输出 */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">CSS Value</label>
                <div className="flex">
                  <input
                    type="text"
                    value={hslCssString}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(hslCssString, 'HSL')}
                    className="px-4 py-2 bg-purple-500 text-white rounded-r-md hover:bg-purple-600 transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* OKLCH 输出部分 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">OKLCH Color</h2>
              
              {/* 颜色预览 */}
              <div className="mb-6">
                <div 
                  className="w-full h-24 rounded-lg border-2 border-gray-200 dark:border-gray-600 shadow-inner"
                  style={{ backgroundColor: previewColor }}
                ></div>
                <div className="mt-2 text-center">
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                    {oklchCssString}
                  </code>
                </div>
              </div>

              {/* OKLCH 滑块 */}
              <div className="space-y-6">
                {/* Lightness */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Lightness: {oklch.l.toFixed(3)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.001"
                    value={oklch.l}
                    onChange={(e) => setOklch({ ...oklch, l: parseFloat(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black via-gray-500 to-white"
                    disabled={conversionDirection === 'hsl-to-oklch'}
                  />
                </div>

                {/* Chroma */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Chroma: {oklch.c.toFixed(3)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="0.4"
                    step="0.001"
                    value={oklch.c}
                    onChange={(e) => setOklch({ ...oklch, c: parseFloat(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-gray-400 to-red-500"
                    disabled={conversionDirection === 'hsl-to-oklch'}
                  />
                </div>

                {/* Hue */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hue: {oklch.h.toFixed(1)}°
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={oklch.h}
                    onChange={(e) => setOklch({ ...oklch, h: parseFloat(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), 
                        hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))`
                    }}
                    disabled={conversionDirection === 'hsl-to-oklch'}
                  />
                </div>
              </div>

              {/* OKLCH 数值输入 */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1">L</label>
                  <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.001"
                    value={oklch.l}
                    onChange={(e) => setOklch({ ...oklch, l: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'hsl-to-oklch'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">C</label>
                  <input
                    type="number"
                    min="0"
                    max="0.4"
                    step="0.001"
                    value={oklch.c}
                    onChange={(e) => setOklch({ ...oklch, c: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'hsl-to-oklch'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">H</label>
                  <input
                    type="number"
                    min="0"
                    max="360"
                    value={oklch.h}
                    onChange={(e) => setOklch({ ...oklch, h: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'hsl-to-oklch'}
                  />
                </div>
              </div>

              {/* OKLCH CSS 输出 */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">CSS Value</label>
                <div className="flex">
                  <input
                    type="text"
                    value={oklchCssString}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(oklchCssString, 'OKLCH')}
                    className="px-4 py-2 bg-purple-500 text-white rounded-r-md hover:bg-purple-600 transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 复制成功提示 */}
          {copySuccess && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
              {copySuccess}
            </div>
          )}

          {/* 信息说明 */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
            <h3 className="text-lg font-bold mb-3">About OKLCH Color Space</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <h4 className="font-medium mb-2">Why OKLCH?</h4>
                <ul className="space-y-1">
                  <li>• Perceptually uniform lightness</li>
                  <li>• Better color manipulation</li>
                  <li>• CSS Color Level 4 support</li>
                  <li>• Wider color gamut support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Browser Support</h4>
                <ul className="space-y-1">
                  <li>• Chrome 111+ ✅</li>
                  <li>• Firefox 113+ ✅</li>
                  <li>• Safari 15.4+ ✅</li>
                  <li>• Use with fallbacks for older browsers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 