'use client';

import React, { useState, useEffect } from 'react';
import { oklchToHex, hexToOklch, oklchToCss, isValidOklch } from '@/utils/colorConverter';

export default function OklchToHexConverter() {
  const [oklch, setOklch] = useState({ l: 0.628, c: 0.258, h: 29 });
  const [hex, setHex] = useState('#ff0000');
  const [conversionDirection, setConversionDirection] = useState<'oklch-to-hex' | 'hex-to-oklch'>('oklch-to-hex');
  const [copySuccess, setCopySuccess] = useState('');

  // 转换函数
  const convertOklchToHex = () => {
    try {
      if (isValidOklch(oklch)) {
        const result = oklchToHex(oklch);
        setHex(result);
      }
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  const convertHexToOklch = () => {
    try {
      if (hex && hex.match(/^#[0-9A-Fa-f]{6}$/)) {
        const result = hexToOklch(hex);
        setOklch(result);
      }
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  // 当OKLCH值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'oklch-to-hex') {
      convertOklchToHex();
    }
  }, [oklch, conversionDirection]);

  // 当HEX值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'hex-to-oklch') {
      convertHexToOklch();
    }
  }, [hex, conversionDirection]);

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

  // 生成CSS字符串
  const oklchCssString = oklchToCss(oklch);

  // 页面元数据
  useEffect(() => {
    document.title = 'Professional OKLCH to HEX Converter Tool - JavaScript Color Conversion Online';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        {/* SEO优化的页面描述 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            OKLCH to HEX Color Converter Tool
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional online OKLCH to HEX converter with JavaScript-powered real-time color conversion. 
            Transform OKLCH color values to HEX format instantly with live preview and CSS code generation.
          </p>
        </div>

        {/* 主要转换工具界面 */}
        <div className="min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-4xl mx-auto">
              {/* 标题部分 */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                  OKLCH ↔ HEX Color Converter
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Convert between OKLCH and HEX color formats with real-time preview
                </p>
              </div>

              {/* 转换方向选择 */}
              <div className="flex justify-center mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
                  <button
                    onClick={() => setConversionDirection('oklch-to-hex')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      conversionDirection === 'oklch-to-hex'
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    OKLCH → HEX
                  </button>
                  <button
                    onClick={() => setConversionDirection('hex-to-oklch')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      conversionDirection === 'hex-to-oklch'
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    HEX → OKLCH
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
                      style={{ backgroundColor: hex }}
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
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            oklch(0 ${oklch.c} ${oklch.h}), oklch(1 ${oklch.c} ${oklch.h}))`
                        }}
                        disabled={conversionDirection === 'hex-to-oklch'}
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
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            oklch(${oklch.l} 0 ${oklch.h}), oklch(${oklch.l} 0.4 ${oklch.h}))`
                        }}
                        disabled={conversionDirection === 'hex-to-oklch'}
                      />
                    </div>

                    {/* Hue */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Hue: {oklch.h.toFixed(0)}°
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={oklch.h}
                        onChange={(e) => setOklch({ ...oklch, h: parseInt(e.target.value) })}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `conic-gradient(from 0deg, 
                            oklch(${oklch.l} ${oklch.c} 0), 
                            oklch(${oklch.l} ${oklch.c} 60), 
                            oklch(${oklch.l} ${oklch.c} 120), 
                            oklch(${oklch.l} ${oklch.c} 180), 
                            oklch(${oklch.l} ${oklch.c} 240), 
                            oklch(${oklch.l} ${oklch.c} 300), 
                            oklch(${oklch.l} ${oklch.c} 360))`
                        }}
                        disabled={conversionDirection === 'hex-to-oklch'}
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
                        disabled={conversionDirection === 'hex-to-oklch'}
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
                        disabled={conversionDirection === 'hex-to-oklch'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">H</label>
                      <input
                        type="number"
                        min="0"
                        max="360"
                        value={oklch.h}
                        onChange={(e) => setOklch({ ...oklch, h: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                        disabled={conversionDirection === 'hex-to-oklch'}
                      />
                    </div>
                  </div>

                  {/* 复制按钮 */}
                  <div className="mt-6">
                    <button
                      onClick={() => copyToClipboard(oklchCssString, 'OKLCH')}
                      className="w-full px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
                    >
                      Copy OKLCH Code
                    </button>
                  </div>
                </div>

                {/* HEX 输出部分 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">HEX Color</h2>
                  
                  {/* 颜色预览 */}
                  <div className="mb-6">
                    <div 
                      className="w-full h-24 rounded-lg border-2 border-gray-200 dark:border-gray-600 shadow-inner"
                      style={{ backgroundColor: hex }}
                    ></div>
                    <div className="mt-2 text-center">
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                        {hex}
                      </code>
                    </div>
                  </div>

                  {/* HEX 输入 */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      HEX Color Code
                    </label>
                    <input
                      type="text"
                      value={hex}
                      onChange={(e) => setHex(e.target.value)}
                      placeholder="#ff0000"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-lg font-mono"
                      disabled={conversionDirection === 'oklch-to-hex'}
                    />
                  </div>

                  {/* 颜色信息 */}
                  <div className="mb-6 space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">RGB Values</h3>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400">R</div>
                          <div className="font-mono">{parseInt(hex.slice(1, 3), 16)}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400">G</div>
                          <div className="font-mono">{parseInt(hex.slice(3, 5), 16)}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400">B</div>
                          <div className="font-mono">{parseInt(hex.slice(5, 7), 16)}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CSS 代码示例 */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">CSS Code Examples</h3>
                    <div className="space-y-2">
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Background Color</div>
                        <code className="text-sm font-mono">background-color: {hex};</code>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Text Color</div>
                        <code className="text-sm font-mono">color: {hex};</code>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Border Color</div>
                        <code className="text-sm font-mono">border-color: {hex};</code>
                      </div>
                    </div>
                  </div>

                  {/* 复制按钮 */}
                  <div className="mt-6">
                    <button
                      onClick={() => copyToClipboard(hex, 'HEX')}
                      className="w-full px-4 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium"
                    >
                      Copy HEX Code
                    </button>
                  </div>
                </div>
              </div>

              {/* 成功提示 */}
              {copySuccess && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
                  {copySuccess}
                </div>
              )}

              {/* 使用说明 */}
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">How to Use</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
                  <div>
                    <h4 className="font-medium mb-2">OKLCH to HEX Conversion:</h4>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Adjust Lightness (0-1) for brightness</li>
                      <li>Modify Chroma (0-0.4) for color intensity</li>
                      <li>Change Hue (0-360°) for color tone</li>
                      <li>Copy the generated HEX code</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">HEX to OKLCH Conversion:</h4>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Enter a valid HEX color code</li>
                      <li>View the OKLCH equivalent values</li>
                      <li>Use OKLCH for better color manipulation</li>
                      <li>Copy the OKLCH CSS code</li>
                    </ul>
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