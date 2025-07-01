'use client';

import React, { useState, useEffect } from 'react';
import { oklchToOklab, oklabToOklch, oklabToHex, oklchToCss, oklabToCss, isValidOklch, isValidOklab } from '@/utils/colorConverter';

export default function OklchToOklabConverter() {
  const [oklch, setOklch] = useState({ l: 0.628, c: 0.258, h: 29.23 });
  const [oklab, setOklab] = useState({ l: 0.628, a: 0.226, b: 0.125 });
  const [conversionDirection, setConversionDirection] = useState<'oklch-to-oklab' | 'oklab-to-oklch'>('oklch-to-oklab');
  const [copySuccess, setCopySuccess] = useState('');

  // 转换函数
  const convertOklchToOklab = () => {
    try {
      if (isValidOklch(oklch)) {
        const result = oklchToOklab(oklch);
        setOklab(result);
      }
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  const convertOklabToOklch = () => {
    try {
      if (isValidOklab(oklab)) {
        const result = oklabToOklch(oklab);
        setOklch(result);
      }
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  // 当OKLCH值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'oklch-to-oklab') {
      convertOklchToOklab();
    }
  }, [oklch, conversionDirection]);

  // 当OKLAB值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'oklab-to-oklch') {
      convertOklabToOklch();
    }
  }, [oklab, conversionDirection]);

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
  const previewColor = oklabToHex(oklab);
  const oklchCssString = oklchToCss(oklch);
  const oklabCssString = oklabToCss(oklab);

  return (
    <div className={`${isEmbedded ? 'min-h-[600px]' : 'min-h-screen'} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* 标题部分 */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
              OKLCH ↔ OKLAB Color Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Convert between OKLCH polar and OKLAB rectangular coordinates with real-time preview
            </p>
          </div>

          {/* 转换方向选择 */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setConversionDirection('oklch-to-oklab')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'oklch-to-oklab'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                OKLCH → OKLAB
              </button>
              <button
                onClick={() => setConversionDirection('oklab-to-oklch')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'oklab-to-oklch'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                OKLAB → OKLCH
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
                    disabled={conversionDirection === 'oklab-to-oklch'}
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
                    disabled={conversionDirection === 'oklab-to-oklch'}
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
                    disabled={conversionDirection === 'oklab-to-oklch'}
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
                    disabled={conversionDirection === 'oklab-to-oklch'}
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
                    disabled={conversionDirection === 'oklab-to-oklch'}
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
                    disabled={conversionDirection === 'oklab-to-oklch'}
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

            {/* OKLAB 输出部分 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">OKLAB Color</h2>
              
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

              {/* OKLAB 滑块 */}
              <div className="space-y-6">
                {/* Lightness */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Lightness: {oklab.l.toFixed(3)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.001"
                    value={oklab.l}
                    onChange={(e) => setOklab({ ...oklab, l: parseFloat(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-white"
                    disabled={conversionDirection === 'oklch-to-oklab'}
                  />
                </div>

                {/* A component */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    A (Green-Red): {oklab.a.toFixed(3)}
                  </label>
                  <input
                    type="range"
                    min="-0.4"
                    max="0.4"
                    step="0.001"
                    value={oklab.a}
                    onChange={(e) => setOklab({ ...oklab, a: parseFloat(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-green-500 to-red-500"
                    disabled={conversionDirection === 'oklch-to-oklab'}
                  />
                </div>

                {/* B component */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    B (Blue-Yellow): {oklab.b.toFixed(3)}
                  </label>
                  <input
                    type="range"
                    min="-0.4"
                    max="0.4"
                    step="0.001"
                    value={oklab.b}
                    onChange={(e) => setOklab({ ...oklab, b: parseFloat(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-blue-500 to-yellow-500"
                    disabled={conversionDirection === 'oklch-to-oklab'}
                  />
                </div>
              </div>

              {/* OKLAB 数值输入 */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1">L</label>
                  <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.001"
                    value={oklab.l}
                    onChange={(e) => setOklab({ ...oklab, l: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'oklch-to-oklab'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">A</label>
                  <input
                    type="number"
                    min="-0.4"
                    max="0.4"
                    step="0.001"
                    value={oklab.a}
                    onChange={(e) => setOklab({ ...oklab, a: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'oklch-to-oklab'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">B</label>
                  <input
                    type="number"
                    min="-0.4"
                    max="0.4"
                    step="0.001"
                    value={oklab.b}
                    onChange={(e) => setOklab({ ...oklab, b: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'oklch-to-oklab'}
                  />
                </div>
              </div>

              {/* OKLAB CSS 输出 */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">CSS Value</label>
                <div className="flex">
                  <input
                    type="text"
                    value={oklabCssString}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(oklabCssString, 'OKLAB')}
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
                  <code>{`// OKLCH to OKLAB conversion function
function oklchToOklab(oklch) {
  const { l, c, h } = oklch;

  // Convert hue from degrees to radians
  const hueRadians = h * Math.PI / 180;

  // Convert polar to rectangular coordinates
  const oklabL = l;  // Lightness remains the same
  const oklabA = c * Math.cos(hueRadians);  // A component (green-red axis)
  const oklabB = c * Math.sin(hueRadians);  // B component (blue-yellow axis)

  return {
    l: Math.round(oklabL * 1000) / 1000,
    a: Math.round(oklabA * 1000) / 1000,
    b: Math.round(oklabB * 1000) / 1000
  };
}

// OKLAB to OKLCH conversion function
function oklabToOklch(oklab) {
  const { l, a, b } = oklab;

  // Convert rectangular to polar coordinates
  const oklchL = l;  // Lightness remains the same
  const oklchC = Math.sqrt(a * a + b * b);  // Chroma (distance from center)
  let oklchH = Math.atan2(b, a) * 180 / Math.PI;  // Hue (angle)

  // Ensure hue is positive
  if (oklchH < 0) oklchH += 360;

  return {
    l: Math.round(oklchL * 1000) / 1000,
    c: Math.round(oklchC * 1000) / 1000,
    h: Math.round(oklchH * 10) / 10
  };
}

// Example usage
const oklchColor = { l: 0.628, c: 0.258, h: 29.23 };
const oklabColor = oklchToOklab(oklchColor);
console.log(oklabColor); // { l: 0.628, a: 0.226, b: 0.125 }

// Color mixing example using OKLAB
function mixOklabColors(color1, color2, ratio = 0.5) {
  return {
    l: color1.l * (1 - ratio) + color2.l * ratio,
    a: color1.a * (1 - ratio) + color2.a * ratio,
    b: color1.b * (1 - ratio) + color2.b * ratio
  };
}`}</code>
                </pre>
              </div>
            </div>
          )}

          {/* 相关工具 */}
          {!isEmbedded && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Related Tools</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/tools/oklab-to-oklch-converter" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">OKLAB to OKLCH</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Convert OKLAB colors back to OKLCH format</p>
                </a>
                <a href="/tools/oklch-to-hsl-converter" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">OKLCH to HSL</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Convert OKLCH colors to HSL format</p>
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
