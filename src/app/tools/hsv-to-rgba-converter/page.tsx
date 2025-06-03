"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {  RGBA, hsvToRgba, rgbaToHex8 } from '@/utils/colorConverter';

// 全局样式
const GlobalStyles = () => {
  return (
    <style jsx global>{`
      * {
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
      }
    `}</style>
  );
};

// 内部组件包含实际的逻辑和UI
const HsvToRgbaConverterTool = () => {
  // HSV状态
  const [h, setH] = useState<number>(240);
  const [s, setS] = useState<number>(75);
  const [v, setV] = useState<number>(80);
  
  // Alpha状态（0-1范围）
  const [alpha, setAlpha] = useState<number>(0.8);
  
  // RGBA输出状态
  const [rgba, setRgba] = useState<RGBA>({ r: 51, g: 51, b: 204, a: 0.8 });
  
  // 复制状态
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [copyType, setCopyType] = useState<string>('');

  const searchParams = useSearchParams();
  const isEmbedMode = searchParams.get('embed') === 'true';

  // 当HSV或Alpha值改变时执行转换
  useEffect(() => {
    const newRgba = hsvToRgba({ h, s, v }, alpha);
    setRgba(newRgba);
    setIsCopied(false);
  }, [h, s, v, alpha]);

  // 事件处理器
  const handleHueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setH(Math.max(0, Math.min(360, parsedValue)));
    } else if (value === '') {
      setH(0);
    }
  };

  const handleSaturationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setS(Math.max(0, Math.min(100, parsedValue)));
    } else if (value === '') {
      setS(0);
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setV(Math.max(0, Math.min(100, parsedValue)));
    } else if (value === '') {
      setV(0);
    }
  };

  const handleAlphaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setAlpha(Math.max(0, Math.min(1, parsedValue)));
    } else if (value === '') {
      setAlpha(0);
    }
  };

  // 复制处理器
  const handleCopy = async (value: string, type: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setCopyType(type);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy value: ", err);
    }
  };

  // 生成颜色格式字符串
  const rgbaCssString = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
  const hsvString = `hsv(${h}, ${s}%, ${v}%)`;
  const hex8String = rgbaToHex8(rgba);

  const ConverterUI = (
    <>
      {/* 颜色预览区域 */}
      <div className="mb-8">
        <div className="relative h-40 sm:h-48 md:h-52 w-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
          {/* 棋盘背景 - 用于显示透明度 */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-8">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  (Math.floor(i / 12) + (i % 12)) % 2 === 0
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : 'bg-white dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          {/* 色彩预览背景 */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{ backgroundColor: rgbaCssString }}
          ></div>
          
          {/* 色彩信息覆盖层 */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm bg-gradient-to-t from-black/60 to-transparent">
            <div className="text-white text-sm font-medium">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-200">HSV:</span> {hsvString}
                </div>
                <div>
                  <span className="text-gray-200">Alpha:</span> {(alpha * 100).toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HSV输入控件 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">HSV Parameters</h2>
        <div className="space-y-6">
          {/* 色相输入 */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="h" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Hue (H): {h}°
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="h"
                  name="h"
                  min="0"
                  max="360"
                  value={h}
                  onChange={handleHueChange}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Hue Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: 'linear-gradient(to right, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)'
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="360"
                value={h}
                onChange={handleHueChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Hue Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${(h / 360) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* 饱和度输入 */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="s" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Saturation (S): {s}%
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="s"
                  name="s"
                  min="0"
                  max="100"
                  value={s}
                  onChange={handleSaturationChange}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Saturation Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: `linear-gradient(to right, white, hsl(${h}, 100%, 50%))`
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={s}
                onChange={handleSaturationChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Saturation Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${s}%` }}
              ></div>
            </div>
          </div>

          {/* 明度输入 */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="v" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Value (V): {v}%
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="v"
                  name="v"
                  min="0"
                  max="100"
                  value={v}
                  onChange={handleValueChange}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Value Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: `linear-gradient(to right, black, hsl(${h}, 100%, 50%))`
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={v}
                onChange={handleValueChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Value Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${v}%` }}
              ></div>
            </div>
          </div>

          {/* Alpha透明度输入 */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="alpha" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Alpha (α): {(alpha * 100).toFixed(0)}%
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="alpha"
                  name="alpha"
                  min="0"
                  max="1"
                  step="0.01"
                  value={alpha.toFixed(2)}
                  onChange={handleAlphaChange}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Alpha Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              {/* 棋盘格背景 */}
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                    linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                    linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
                  `,
                  backgroundSize: '12px 12px',
                  backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px'
                }}
              ></div>
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: `linear-gradient(to right, 
                    rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 0), 
                    rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1))`
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={alpha}
                onChange={handleAlphaChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Alpha Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${alpha * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* RGBA输出显示 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-6 transition-all duration-300 hover:shadow-lg border-2 border-purple-200 dark:border-purple-900">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">RGBA Result</h2>
          <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full">
            Red, Green, Blue, Alpha
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-4 text-center">
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Red (R)</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{rgba.r}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Green (G)</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{rgba.g}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Blue (B)</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{rgba.b}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Alpha (α)</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{rgba.a.toFixed(2)}</div>
          </div>
        </div>

        {/* 输出格式 */}
        <div className="space-y-3">
          {/* RGBA CSS格式 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">CSS RGBA:</span>
                <code className="ml-2 text-purple-600 dark:text-purple-400 font-mono">{rgbaCssString}</code>
              </div>
              <button
                onClick={() => handleCopy(rgbaCssString, 'RGBA')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded text-xs transition-colors"
              >
                {isCopied && copyType === 'RGBA' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* 8位HEX格式 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">8-digit HEX:</span>
                <code className="ml-2 text-purple-600 dark:text-purple-400 font-mono">{hex8String}</code>
              </div>
              <button
                onClick={() => handleCopy(hex8String, 'HEX8')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded text-xs transition-colors"
              >
                {isCopied && copyType === 'HEX8' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* 分量值格式 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Components:</span>
                <code className="ml-2 text-purple-600 dark:text-purple-400 font-mono">
                  R:{rgba.r} G:{rgba.g} B:{rgba.b} A:{rgba.a}
                </code>
              </div>
              <button
                onClick={() => handleCopy(`R:${rgba.r} G:${rgba.g} B:${rgba.b} A:${rgba.a}`, 'Components')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded text-xs transition-colors"
              >
                {isCopied && copyType === 'Components' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 信息提示卡片 */}
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-5 text-sm text-blue-800 dark:text-blue-200 border border-blue-100 dark:border-blue-800/50 transition-all duration-500">
        <h3 className="font-semibold mb-2">HSV to RGBA Conversion Guide</h3>
        <p className="mb-2">
          This tool converts HSV (Hue, Saturation, Value) colors to RGBA (Red, Green, Blue, Alpha) format:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>HSV Input</strong>: Hue (0-360°), Saturation (0-100%), Value (0-100%)</li>
          <li><strong>Alpha Control</strong>: Transparency value (0-1), 0 = fully transparent, 1 = fully opaque</li>
          <li><strong>Live Preview</strong>: Includes checkered background to show transparency effects</li>
          <li><strong>Multiple Formats</strong>: CSS RGBA, 8-digit HEX, component values</li>
        </ul>
      </div>
    </>
  );

  // 条件应用包装器样式
  return isEmbedMode ? (
    <div data-embed="true" className="p-4 bg-transparent">
      {ConverterUI}
    </div>
  ) : (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto transition-all duration-500">
      <GlobalStyles />
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-5 sm:p-6 mb-6 transition-all duration-500 dark:border dark:border-gray-700">
        <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-6">
          HSV to RGBA Converter
        </h1>
        {ConverterUI}
      </div>
    </div>
  );
};

// 主页面组件
const HsvToRgbaConverterPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HsvToRgbaConverterTool />
    </Suspense>
  );
};

export default HsvToRgbaConverterPage; 