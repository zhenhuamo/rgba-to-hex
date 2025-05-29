'use client';

import React, { useState, useEffect } from 'react';
import { hslToRgba, rgbaToHsl, hslToHex } from '@/utils/colorConverter';

export default function HslToRgbaConverter() {
  const [hsl, setHsl] = useState({ h: 240, s: 100, l: 50 });
  const [alpha, setAlpha] = useState(1);
  const [rgba, setRgba] = useState({ r: 0, g: 0, b: 255, a: 1 });
  const [conversionDirection, setConversionDirection] = useState<'hsl-to-rgba' | 'rgba-to-hsl'>('hsl-to-rgba');
  const [copySuccess, setCopySuccess] = useState('');

  // 转换函数
  const convertHslToRgba = () => {
    try {
      const result = hslToRgba(hsl, alpha);
      setRgba(result);
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  const convertRgbaToHsl = () => {
    try {
      const result = rgbaToHsl(rgba);
      setHsl(result);
      setAlpha(rgba.a);
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  // 当HSL值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'hsl-to-rgba') {
      convertHslToRgba();
    }
  }, [hsl, alpha, conversionDirection]);

  // 当RGBA值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'rgba-to-hsl') {
      convertRgbaToHsl();
    }
  }, [rgba, conversionDirection]);

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
  const rgbaCssString = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
  const hslCssString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* 标题部分 */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
              HSL ↔ RGBA Color Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Convert between HSL and RGBA color spaces with transparency control
            </p>
          </div>

          {/* 转换方向选择 */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setConversionDirection('hsl-to-rgba')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'hsl-to-rgba'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                HSL → RGBA
              </button>
              <button
                onClick={() => setConversionDirection('rgba-to-hsl')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'rgba-to-hsl'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                RGBA → HSL
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* HSL 输入部分 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">HSL Color</h2>
              
              {/* 颜色预览 */}
              <div className="mb-6">
                <div className="relative">
                  {/* 棋盘格背景显示透明效果 */}
                  <div 
                    className="w-full h-24 rounded-lg border-2 border-gray-200 dark:border-gray-600 shadow-inner"
                    style={{
                      backgroundColor: '#ffffff',
                      backgroundImage: `
                        linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                        linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
                      `,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-lg"
                      style={{ backgroundColor: rgbaCssString }}
                    ></div>
                  </div>
                </div>
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
                    disabled={conversionDirection === 'rgba-to-hsl'}
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
                    disabled={conversionDirection === 'rgba-to-hsl'}
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
                    disabled={conversionDirection === 'rgba-to-hsl'}
                  />
                </div>

                {/* Alpha */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Alpha: {alpha.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={alpha}
                    onChange={(e) => setAlpha(parseFloat(e.target.value))}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-transparent to-black"
                    disabled={conversionDirection === 'rgba-to-hsl'}
                  />
                </div>
              </div>

              {/* HSL 数值输入 */}
              <div className="mt-6 grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1">H</label>
                  <input
                    type="number"
                    min="0"
                    max="360"
                    value={hsl.h}
                    onChange={(e) => setHsl({ ...hsl, h: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'rgba-to-hsl'}
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
                    disabled={conversionDirection === 'rgba-to-hsl'}
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
                    disabled={conversionDirection === 'rgba-to-hsl'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">A</label>
                  <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.01"
                    value={alpha}
                    onChange={(e) => setAlpha(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'rgba-to-hsl'}
                  />
                </div>
              </div>

              {/* HSL CSS 代码 */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">CSS Code</h3>
                  <button
                    onClick={() => copyToClipboard(hslCssString, 'HSL')}
                    className="text-xs px-3 py-1 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 rounded-md transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <code className="text-sm">{hslCssString}</code>
                </div>
              </div>
            </div>

            {/* RGBA 输出部分 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">RGBA Color</h2>
              
              {/* 颜色预览 */}
              <div className="mb-6">
                <div className="relative">
                  {/* 棋盘格背景显示透明效果 */}
                  <div 
                    className="w-full h-24 rounded-lg border-2 border-gray-200 dark:border-gray-600 shadow-inner"
                    style={{
                      backgroundColor: '#ffffff',
                      backgroundImage: `
                        linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                        linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
                      `,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-lg"
                      style={{ backgroundColor: rgbaCssString }}
                    ></div>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                    {rgbaCssString}
                  </code>
                </div>
              </div>

              {/* RGBA 滑块 */}
              <div className="space-y-6">
                {/* Red */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Red: {rgba.r}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={rgba.r}
                    onChange={(e) => setRgba({ ...rgba, r: parseInt(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-red-500"
                    disabled={conversionDirection === 'hsl-to-rgba'}
                  />
                </div>

                {/* Green */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Green: {rgba.g}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={rgba.g}
                    onChange={(e) => setRgba({ ...rgba, g: parseInt(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-green-500"
                    disabled={conversionDirection === 'hsl-to-rgba'}
                  />
                </div>

                {/* Blue */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Blue: {rgba.b}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={rgba.b}
                    onChange={(e) => setRgba({ ...rgba, b: parseInt(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-black to-blue-500"
                    disabled={conversionDirection === 'hsl-to-rgba'}
                  />
                </div>

                {/* Alpha */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Alpha: {rgba.a.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={rgba.a}
                    onChange={(e) => setRgba({ ...rgba, a: parseFloat(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-transparent to-black"
                    disabled={conversionDirection === 'hsl-to-rgba'}
                  />
                </div>
              </div>

              {/* RGBA 数值输入 */}
              <div className="mt-6 grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1">R</label>
                  <input
                    type="number"
                    min="0"
                    max="255"
                    value={rgba.r}
                    onChange={(e) => setRgba({ ...rgba, r: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'hsl-to-rgba'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">G</label>
                  <input
                    type="number"
                    min="0"
                    max="255"
                    value={rgba.g}
                    onChange={(e) => setRgba({ ...rgba, g: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'hsl-to-rgba'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">B</label>
                  <input
                    type="number"
                    min="0"
                    max="255"
                    value={rgba.b}
                    onChange={(e) => setRgba({ ...rgba, b: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'hsl-to-rgba'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">A</label>
                  <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.01"
                    value={rgba.a}
                    onChange={(e) => setRgba({ ...rgba, a: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
                    disabled={conversionDirection === 'hsl-to-rgba'}
                  />
                </div>
              </div>

              {/* RGBA CSS 代码 */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">CSS Code</h3>
                  <button
                    onClick={() => copyToClipboard(rgbaCssString, 'RGBA')}
                    className="text-xs px-3 py-1 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 rounded-md transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <code className="text-sm">{rgbaCssString}</code>
                </div>
              </div>
            </div>
          </div>

          {/* 复制成功提示 */}
          {copySuccess && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
              {copySuccess}
            </div>
          )}

          {/* 使用说明 */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-4">How to Use</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <h4 className="font-medium mb-2">HSL to RGBA Conversion:</h4>
                <ul className="space-y-1">
                  <li>• Adjust Hue (0-360°), Saturation (0-100%), Lightness (0-100%)</li>
                  <li>• Control Alpha transparency (0-1)</li>
                  <li>• Real-time preview with checkerboard background</li>
                  <li>• Copy generated RGBA CSS code</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">RGBA to HSL Conversion:</h4>
                <ul className="space-y-1">
                  <li>• Adjust Red, Green, Blue values (0-255)</li>
                  <li>• Control Alpha transparency (0-1)</li>
                  <li>• Automatic HSL calculation</li>
                  <li>• Copy generated HSL CSS code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 