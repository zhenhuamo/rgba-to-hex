'use client';

import React, { useState, useEffect } from 'react';
import { oklchToCmyk, cmykToOklch, oklchToCss, cmykToCss, isValidOklch, isValidCmyk } from '@/utils/colorConverter';

export default function CmykToOklchConverter() {
  const [oklch, setOklch] = useState({ l: 0.628, c: 0.258, h: 29 });
  const [cmyk, setCmyk] = useState({ c: 0, m: 75, y: 100, k: 0 });
  const [conversionDirection, setConversionDirection] = useState<'oklch-to-cmyk' | 'cmyk-to-oklch'>('cmyk-to-oklch');
  const [copySuccess, setCopySuccess] = useState('');

  // 转换函数
  const convertOklchToCmyk = () => {
    try {
      if (isValidOklch(oklch)) {
        const result = oklchToCmyk(oklch);
        setCmyk(result);
      }
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  const convertCmykToOklch = () => {
    try {
      if (isValidCmyk(cmyk)) {
        const result = cmykToOklch(cmyk);
        setOklch(result);
      }
    } catch (error) {
      console.error('转换错误:', error);
    }
  };

  // 当OKLCH值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'oklch-to-cmyk') {
      convertOklchToCmyk();
    }
  }, [oklch, conversionDirection]);

  // 当CMYK值改变时自动转换
  useEffect(() => {
    if (conversionDirection === 'cmyk-to-oklch') {
      convertCmykToOklch();
    }
  }, [cmyk, conversionDirection]);

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

  // 生成预览颜色和CSS字符串
  const oklchCssString = oklchToCss(oklch);
  const cmykCssString = cmykToCss(cmyk);

  // 计算总墨量 (TAC - Total Area Coverage)
  const totalInkCoverage = cmyk.c + cmyk.m + cmyk.y + cmyk.k;

  return (
    <div className={`${isEmbedded ? 'min-h-[600px]' : 'min-h-screen'} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* 标题部分 */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
              CMYK ↔ OKLCH Color Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Convert between CMYK and OKLCH color spaces for modern digital workflows
            </p>
          </div>

          {/* 转换方向选择 */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setConversionDirection('cmyk-to-oklch')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'cmyk-to-oklch'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                CMYK → OKLCH
              </button>
              <button
                onClick={() => setConversionDirection('oklch-to-cmyk')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  conversionDirection === 'oklch-to-cmyk'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                OKLCH → CMYK
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* CMYK 控制面板 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                CMYK Color Space
              </h2>
              
              {/* Cyan 滑块 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cyan (C): {cmyk.c.toFixed(1)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={cmyk.c}
                  onChange={(e) => setCmyk({...cmyk, c: parseFloat(e.target.value)})}
                  className="w-full h-3 bg-gradient-to-r from-white to-cyan-500 rounded-lg appearance-none cursor-pointer"
                  disabled={conversionDirection === 'oklch-to-cmyk'}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Magenta 滑块 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Magenta (M): {cmyk.m.toFixed(1)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={cmyk.m}
                  onChange={(e) => setCmyk({...cmyk, m: parseFloat(e.target.value)})}
                  className="w-full h-3 bg-gradient-to-r from-white to-magenta-500 rounded-lg appearance-none cursor-pointer"
                  disabled={conversionDirection === 'oklch-to-cmyk'}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Yellow 滑块 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Yellow (Y): {cmyk.y.toFixed(1)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={cmyk.y}
                  onChange={(e) => setCmyk({...cmyk, y: parseFloat(e.target.value)})}
                  className="w-full h-3 bg-gradient-to-r from-white to-yellow-400 rounded-lg appearance-none cursor-pointer"
                  disabled={conversionDirection === 'oklch-to-cmyk'}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Key/Black 滑块 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Key/Black (K): {cmyk.k.toFixed(1)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={cmyk.k}
                  onChange={(e) => setCmyk({...cmyk, k: parseFloat(e.target.value)})}
                  className="w-full h-3 bg-gradient-to-r from-white to-black rounded-lg appearance-none cursor-pointer"
                  disabled={conversionDirection === 'oklch-to-cmyk'}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* CMYK 数值输入 */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">C</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={cmyk.c}
                    onChange={(e) => setCmyk({...cmyk, c: parseFloat(e.target.value) || 0})}
                    className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    disabled={conversionDirection === 'oklch-to-cmyk'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">M</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={cmyk.m}
                    onChange={(e) => setCmyk({...cmyk, m: parseFloat(e.target.value) || 0})}
                    className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    disabled={conversionDirection === 'oklch-to-cmyk'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Y</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={cmyk.y}
                    onChange={(e) => setCmyk({...cmyk, y: parseFloat(e.target.value) || 0})}
                    className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    disabled={conversionDirection === 'oklch-to-cmyk'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">K</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={cmyk.k}
                    onChange={(e) => setCmyk({...cmyk, k: parseFloat(e.target.value) || 0})}
                    className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    disabled={conversionDirection === 'oklch-to-cmyk'}
                  />
                </div>
              </div>

              {/* 总墨量显示 */}
              <div className={`mb-4 p-3 rounded-lg ${totalInkCoverage > 300 ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' : 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">总墨量 (TAC):</span>
                  <span className={`text-sm font-bold ${totalInkCoverage > 300 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                    {totalInkCoverage.toFixed(1)}%
                  </span>
                </div>
                {totalInkCoverage > 300 && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                    警告：总墨量超过300%，可能导致印刷问题
                  </p>
                )}
              </div>

              {/* CMYK CSS 输出 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CMYK CSS:</span>
                  <button
                    onClick={() => copyToClipboard(cmykCssString, 'CMYK CSS')}
                    className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors"
                  >
                    复制
                  </button>
                </div>
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono break-all">
                  {cmykCssString}
                </code>
              </div>
            </div>

            {/* OKLCH 控制面板 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                OKLCH Color Space
              </h2>
              
              {/* Lightness 滑块 */}
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
                  onChange={(e) => setOklch({...oklch, l: parseFloat(e.target.value)})}
                  className="w-full h-3 bg-gradient-to-r from-black to-white rounded-lg appearance-none cursor-pointer"
                  disabled={conversionDirection === 'cmyk-to-oklch'}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.0</span>
                  <span>1.0</span>
                </div>
              </div>

              {/* Chroma 滑块 */}
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
                  onChange={(e) => setOklch({...oklch, c: parseFloat(e.target.value)})}
                  className="w-full h-3 bg-gradient-to-r from-gray-300 to-red-500 rounded-lg appearance-none cursor-pointer"
                  disabled={conversionDirection === 'cmyk-to-oklch'}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.0</span>
                  <span>0.4</span>
                </div>
              </div>

              {/* Hue 滑块 */}
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
                  onChange={(e) => setOklch({...oklch, h: parseFloat(e.target.value)})}
                  className="w-full h-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500 rounded-lg appearance-none cursor-pointer"
                  disabled={conversionDirection === 'cmyk-to-oklch'}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0°</span>
                  <span>360°</span>
                </div>
              </div>

              {/* OKLCH 数值输入 */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">L</label>
                  <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.001"
                    value={oklch.l}
                    onChange={(e) => setOklch({...oklch, l: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    disabled={conversionDirection === 'cmyk-to-oklch'}
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
                    onChange={(e) => setOklch({...oklch, c: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    disabled={conversionDirection === 'cmyk-to-oklch'}
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
                    onChange={(e) => setOklch({...oklch, h: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    disabled={conversionDirection === 'cmyk-to-oklch'}
                  />
                </div>
              </div>

              {/* OKLCH CSS 输出 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">OKLCH CSS:</span>
                  <button
                    onClick={() => copyToClipboard(oklchCssString, 'OKLCH CSS')}
                    className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors"
                  >
                    复制
                  </button>
                </div>
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono break-all">
                  {oklchCssString}
                </code>
              </div>
            </div>
          </div>

          {/* 复制成功提示 */}
          {copySuccess && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
              {copySuccess}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
