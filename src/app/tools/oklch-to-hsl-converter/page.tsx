'use client';

import React, { useState, useEffect } from 'react';
import { hslToOklch, oklchToHsl, hslToHex, oklchToCss, isValidOklch } from '@/utils/colorConverter';

export default function OklchToHslConverter() {
  const [hsl, setHsl] = useState({ h: 240, s: 100, l: 50 });
  const [oklch, setOklch] = useState({ l: 0.452, c: 0.313, h: 264 });
  const [conversionDirection, setConversionDirection] = useState<'oklch-to-hsl' | 'hsl-to-oklch'>('oklch-to-hsl');
  const [copySuccess, setCopySuccess] = useState('');

  // 转换函数
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

  const convertHslToOklch = () => {
    try {
      const result = hslToOklch(hsl);
      setOklch(result);
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  // 当OKLCH值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'oklch-to-hsl') {
      convertOklchToHsl();
    }
  }, [oklch, conversionDirection]);

  // 当HSL值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'hsl-to-oklch') {
      convertHslToOklch();
    }
  }, [hsl, conversionDirection]);

  // 检测嵌入模式
  const [isEmbedded, setIsEmbedded] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsEmbedded(urlParams.get('embed') === 'true');
  }, []);

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
    <div className={`${isEmbedded ? 'min-h-[600px]' : 'min-h-screen'} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* 标题部分 */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
              OKLCH ↔ HSL Color Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Convert between OKLCH and HSL color spaces with real-time preview
            </p>
          </div>

          {/* 转换方向选择 */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
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
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* OKLCH 输入部分 */}
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
                    {previewColor}
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
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-white"
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
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-gray-300 to-purple-500"
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

            {/* HSL 输出部分 */}
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
          </div>

          {/* 成功提示 */}
          {copySuccess && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
              {copySuccess}
            </div>
          )}

          {/* 代码实现部分 */}
          {!isEmbedded && (
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">JavaScript Implementation</h2>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{`// OKLCH to HSL conversion function
function oklchToHsl(oklch) {
  const { l, c, h } = oklch;
  
  // Step 1: Convert OKLCH to RGB first
  const rgb = oklchToRgb(oklch);
  
  // Step 2: Convert RGB to HSL
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  
  // Calculate lightness
  const lightness = (max + min) / 2;
  
  // Calculate saturation
  let saturation = 0;
  if (diff !== 0) {
    saturation = lightness > 0.5 
      ? diff / (2 - max - min)
      : diff / (max + min);
  }
  
  // Calculate hue
  let hue = 0;
  if (diff !== 0) {
    switch (max) {
      case r: hue = ((g - b) / diff) % 6; break;
      case g: hue = (b - r) / diff + 2; break;
      case b: hue = (r - g) / diff + 4; break;
    }
    hue = Math.round(hue * 60);
    if (hue < 0) hue += 360;
  }
  
  return {
    h: hue,
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100)
  };
}

// Example usage
const oklchColor = { l: 0.628, c: 0.258, h: 29.23 };
const hslColor = oklchToHsl(oklchColor);
console.log(hslColor); // { h: 0, s: 100, l: 50 }`}</code>
                </pre>
              </div>
            </div>
          )}

          {/* 相关工具 */}
          {!isEmbedded && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Related Tools</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/tools/oklch-to-hex-converter" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">OKLCH to HEX</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Convert OKLCH colors to HEX format</p>
                </a>
                <a href="/tools/hsl-to-oklch-converter" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">HSL to OKLCH</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Convert HSL colors to OKLCH format</p>
                </a>
                <a href="/tools/oklch-to-rgb-converter" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">OKLCH to RGB</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Convert OKLCH colors to RGB format</p>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 