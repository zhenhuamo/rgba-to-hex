'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { isValidRgba, rgbaToHex8 } from '@/utils/colorConverter';

// RgbaInput组件 - 用于处理RGBA输入
const RgbaInput = ({ rgba, onChange }: { 
  rgba: { r: number, g: number, b: number, a: number }, 
  onChange: (color: { r: number, g: number, b: number, a: number }) => void 
}) => {
  // 单个属性变化时更新整个颜色对象
  const handleSingleValueChange = (key: 'r' | 'g' | 'b' | 'a', value: number) => {
    const newColor = { ...rgba, [key]: value };
    onChange(newColor);
  };

  // 直接应用颜色
  const applyColor = (color: {r: number, g: number, b: number, a: number}) => {
    console.log("应用颜色:", color); // 调试日志
    onChange(color);
  };

  // 生成随机RGB颜色
  const randomColor = () => {
    console.log("生成随机颜色"); // 调试日志
    const color = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      a: rgba.a // 保持当前透明度
    };
    onChange(color);
  };

  // 随机透明度
  const randomAlpha = () => {
    console.log("随机透明度"); // 调试日志
    const newAlpha = Math.round(Math.random() * 100) / 100;
    onChange({ ...rgba, a: newAlpha });
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Values</h3>
      
      <div className="space-y-5">
        {/* 红色滑块 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
              Red (R)
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="number"
                min="0"
                max="255"
                value={rgba.r}
                onChange={(e) => handleSingleValueChange('r', Number(e.target.value))}
                className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="relative mt-1">
            <div 
              className="absolute inset-0 rounded-lg h-3" 
              style={{
                background: "linear-gradient(to right, #000000, #FF0000)"
              }}
            />
            <input
              type="range"
              min="0"
              max="255"
              value={rgba.r}
              onChange={(e) => handleSingleValueChange('r', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
            />
          </div>
        </div>
        
        {/* 绿色滑块 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              Green (G)
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="number"
                min="0"
                max="255"
                value={rgba.g}
                onChange={(e) => handleSingleValueChange('g', Number(e.target.value))}
                className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="relative mt-1">
            <div 
              className="absolute inset-0 rounded-lg h-3" 
              style={{
                background: "linear-gradient(to right, #000000, #00FF00)"
              }}
            />
            <input
              type="range"
              min="0"
              max="255"
              value={rgba.g}
              onChange={(e) => handleSingleValueChange('g', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
            />
          </div>
        </div>
        
        {/* 蓝色滑块 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
              Blue (B)
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="number"
                min="0"
                max="255"
                value={rgba.b}
                onChange={(e) => handleSingleValueChange('b', Number(e.target.value))}
                className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="relative mt-1">
            <div 
              className="absolute inset-0 rounded-lg h-3" 
              style={{
                background: "linear-gradient(to right, #000000, #0000FF)"
              }}
            />
            <input
              type="range"
              min="0"
              max="255"
              value={rgba.b}
              onChange={(e) => handleSingleValueChange('b', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
            />
          </div>
        </div>
        
        {/* 透明度滑块 - 更突出显示 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border-2 border-blue-200 dark:border-blue-900">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span>
              Alpha (A)
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={rgba.a}
                onChange={(e) => handleSingleValueChange('a', parseFloat(e.target.value))}
                className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="relative mt-1">
            <div 
              className="absolute inset-0 rounded-lg h-3"
              style={{
                background: "linear-gradient(to right, transparent, rgba(128, 90, 213, 1))"
              }}
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={rgba.a}
              onChange={(e) => handleSingleValueChange('a', parseFloat(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
            />
          </div>
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Alpha controls transparency (0 = transparent, 1 = opaque)</span>
          </div>
        </div>
      </div>
      
      {/* 预设颜色按钮 */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <h4 className="text-md font-semibold mb-3 text-gray-700 dark:text-gray-300">Common Colors:</h4>
        <div className="grid grid-cols-5 gap-2">
          {[
            { r: 255, g: 0, b: 0, a: 1 },     // 红色
            { r: 0, g: 255, b: 0, a: 1 },     // 绿色
            { r: 0, g: 0, b: 255, a: 1 },     // 蓝色
            { r: 255, g: 255, b: 0, a: 1 },   // 黄色
            { r: 255, g: 0, b: 255, a: 1 },   // 品红
            { r: 0, g: 255, b: 255, a: 1 },   // 青色
            { r: 128, g: 128, b: 128, a: 1 }, // 灰色
            { r: 255, g: 165, b: 0, a: 1 },   // 橙色
            { r: 128, g: 0, b: 128, a: 1 },   // 紫色
            { r: 255, g: 255, b: 255, a: 1 }  // 白色
          ].map((color, index) => (
            <button
              key={index}
              className="w-full h-10 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm hover:scale-110 transition-transform focus:ring-2 focus:ring-blue-500 focus:outline-none active:scale-95"
              style={{ backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` }}
              onClick={() => applyColor(color)}
              title={`RGB(${color.r},${color.g},${color.b})`}
            />
          ))}
        </div>
        
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            className="w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md flex items-center justify-center gap-1 text-sm active:bg-gray-300 dark:active:bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={randomColor}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Random Color
          </button>
          <button
            className="w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md flex items-center justify-center gap-1 text-sm active:bg-gray-300 dark:active:bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={randomAlpha}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            Random Alpha
          </button>
        </div>
        <div className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
          点击颜色块或按钮来改变当前颜色
        </div>
      </div>
    </div>
  );
};

export default function RgbaToHex8DigitConverter() {
  // 状态管理
  const [rgba, setRgba] = useState({
    r: 45,
    g: 125,
    b: 220,
    a: 0.8
  });
  
  // Client-side only features
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copiedHex, setCopiedHex] = useState(false);
  const [copiedRgba, setCopiedRgba] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [colorChanged, setColorChanged] = useState(false); // 添加颜色变化状态
  const [lastAction, setLastAction] = useState(""); // 添加最后一次操作记录

  useEffect(() => {
    // 组件挂载后设置状态
    setMounted(true);
    
    // 检查是否在iframe中运行
    setIsInIframe(window.self !== window.top);
    
    // 解析URL参数获取初始颜色值
    const params = new URLSearchParams(window.location.search);
    const r = params.get('r');
    const g = params.get('g');
    const b = params.get('b');
    const a = params.get('a');
    //const debug = params.get('debug') === 'true'; // 添加debug参数
    
    if (r && g && b) {
      const newRgba = {
        r: Math.min(255, Math.max(0, parseInt(r) || 45)),
        g: Math.min(255, Math.max(0, parseInt(g) || 125)),
        b: Math.min(255, Math.max(0, parseInt(b) || 220)),
        a: a ? Math.min(1, Math.max(0, parseFloat(a) || 0.8)) : 0.8
      };
      
      if (isValidRgba(newRgba)) {
        setRgba(newRgba);
      }
    }
  }, []);

  // 当rgba变化时显示提示
  useEffect(() => {
    if (mounted) {
      setColorChanged(true);
      const timer = setTimeout(() => setColorChanged(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [rgba, mounted]);

  // 处理完整颜色对象的更新 - 添加这个新函数
  const setCompleteColor = (color: {r: number, g: number, b: number, a: number}) => {
    console.log("直接设置完整颜色:", color); // 调试日志
    // 记录操作
    setLastAction(`设置颜色: r=${color.r}, g=${color.g}, b=${color.b}, a=${color.a}`);
    
    // 验证颜色值有效性 
    const validColor = {
      r: Math.min(255, Math.max(0, color.r)),
      g: Math.min(255, Math.max(0, color.g)),
      b: Math.min(255, Math.max(0, color.b)),
      a: Math.min(1, Math.max(0, color.a))
    };
    
    // 直接一次性更新整个颜色对象
    setRgba(validColor);
    
    // 显示更新提示
    setColorChanged(true);
    setTimeout(() => setColorChanged(false), 1000);
  };

  // 复制8位HEX值到剪贴板
  const copyHexToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(rgbaToHex8(rgba));
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  // 复制RGBA值到剪贴板
  const copyRgbaToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
      setCopiedRgba(true);
      setTimeout(() => setCopiedRgba(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  // 分享颜色链接
  const shareColor = async () => {
    const url = `${window.location.origin}${window.location.pathname}?r=${rgba.r}&g=${rgba.g}&b=${rgba.b}&a=${rgba.a}`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'RGBA Color Share',
          text: `Check out this color: rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`,
          url: url
        });
      } else {
        await navigator.clipboard.writeText(url);
        setShowShareOptions(true);
        setTimeout(() => setShowShareOptions(false), 3000);
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  // 生成CSS代码
  const generateCssCode = () => {
    const hex8 = rgbaToHex8(rgba);
    const hex6 = rgbaToHex8(rgba).substring(0, 7);
    const rgbaStr = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
    
    return `/* Modern browsers - 8-digit HEX with alpha */
.element {
  background-color: ${hex8};
}

/* Legacy browsers - RGBA fallback */
.element {
  background-color: ${hex6}; /* Fallback for older browsers */
  background-color: ${rgbaStr};
}

/* 8-digit HEX in gradient */
.gradient {
  background: linear-gradient(to right, ${hex8}, ${hex6});
}

/* Usage in box-shadow */
.shadow {
  box-shadow: 0 4px 6px ${hex8};
}`;
  };

  // 复制CSS代码到剪贴板
  const copyCssCode = async () => {
    try {
      await navigator.clipboard.writeText(generateCssCode());
      // 显示成功消息
      alert('CSS code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy CSS code:', err);
    }
  };

  // 客户端水合前不渲染
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800"></div>;
  }

  // 8位十六进制值（包含透明度）
  const hexColor8 = rgbaToHex8(rgba);
  // 6位十六进制值（不包含透明度）
  const hexColor6 = rgbaToHex8(rgba).substring(0, 7);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 ${isInIframe ? 'p-0' : 'p-6'}`}>
      <div className="max-w-3xl mx-auto">
        {/* 只在独立页面显示标题，iframe中隐藏 */}
        {!isInIframe && (
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Image 
                  src="/rgb.svg" 
                  alt="RGBA to 8-Digit HEX Converter Logo" 
                  width={40}
                  height={40}
                  priority
                  className="animate-pulse"
                />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                RGBA to 8-Digit HEX Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Convert RGBA color values to 8-digit hexadecimal codes with alpha channel
            </p>
          </div>
        )}

        {/* 颜色变化指示器 */}
        {colorChanged && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
            Color Updated!
          </div>
        )}

        {/* 调试面板 - 只在URL中添加debug=true参数时显示 */}
        {new URLSearchParams(window.location.search).get('debug') === 'true' && (
          <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
            <h4 className="text-sm font-bold">调试信息</h4>
            <div className="text-xs mt-2">
              <div>Current Color: rgba({rgba.r}, {rgba.g}, {rgba.b}, {rgba.a})</div>
              <div>Current HEX: {rgbaToHex8(rgba)}</div>
              <div className="mt-2">Last Action: {lastAction || "None"}</div>
            </div>
          </div>
        )}

        {/* 主转换器区域 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 overflow-hidden">
          {/* 颜色预览和分享按钮 */}
          <div className="relative">
            <div className={`h-48 w-full relative transition-all duration-500 ${colorChanged ? 'scale-105' : 'scale-100'}`}>
              {/* 棋盘背景（用于显示透明度） */}
              <div className="absolute inset-0 grid grid-cols-16 grid-rows-8">
                {Array.from({ length: 128 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      (Math.floor(i / 16) + (i % 16)) % 2 === 0
                        ? 'bg-gray-200 dark:bg-gray-700'
                        : 'bg-white dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              {/* 颜色叠加层 */}
              <div
                className="absolute inset-0 transition-colors duration-500"
                style={{
                  backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
                }}
              ></div>
            </div>
            
            {/* 颜色信息叠加层 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30 backdrop-blur-sm text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xl">{hexColor8}</div>
                  <div className="text-sm opacity-90">rgba({rgba.r}, {rgba.g}, {rgba.b}, {rgba.a})</div>
                </div>
                <button 
                  onClick={shareColor} 
                  className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all"
                  title="Share this color"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                </button>
                
                {/* 分享选项弹出窗口 */}
                {showShareOptions && (
                  <div className="absolute right-12 bottom-0 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-lg shadow-lg z-10 text-sm whitespace-nowrap">
                    Share link copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* RGBA 输入控件 */}
            <RgbaInput rgba={rgba} onChange={setCompleteColor} />
            
            {/* 高亮显示的8位HEX（带透明度）部分 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-900 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">8-Digit HEX (with alpha)</h3>
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                  Modern Format
                </div>
              </div>
              
              <div className="flex mb-4">
                <input
                  type="text"
                  value={hexColor8}
                  readOnly
                  className="flex-1 px-3 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-l-lg font-mono text-lg tracking-wider focus:outline-none focus:ring-0"
                />
                <button
                  onClick={copyHexToClipboard}
                  className={`px-4 py-3 ${copiedHex ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-1`}
                >
                  {copiedHex ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                      <span>Copy HEX</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Final 2 digits (<span className="font-mono">{hexColor8.substring(7, 9)}</span>) represent alpha transparency</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Supported in all modern browsers</span>
                </div>
              </div>
            </div>
            
            {/* 颜色格式和代码部分 */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* 6位HEX值（不带透明度） */}
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Standard HEX (6-digit)</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Without alpha</span>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={hexColor6}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(hexColor6);
                      alert('6-digit HEX copied!');
                    }}
                    className="px-3 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 rounded-r-lg transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>
              
              {/* RGBA值 */}
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">RGBA</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">CSS</span>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
                  />
                  <button
                    onClick={copyRgbaToClipboard}
                    className={`px-3 py-2 ${copiedRgba ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200'} rounded-r-lg transition-colors`}
                  >
                    {copiedRgba ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* CSS代码示例部分 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  CSS Code Examples
                </h4>
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="text-blue-500 hover:text-blue-600 flex items-center gap-1 text-sm"
                >
                  {showCode ? 'Hide Code' : 'Show Code'}
                  <svg className={`w-4 h-4 transition-transform ${showCode ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              
              {showCode && (
                <div className="mt-3">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto mb-3">
                    <pre>{generateCssCode()}</pre>
                  </div>
                  <button
                    onClick={copyCssCode}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1 w-full md:w-auto justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    Copy CSS Code
                  </button>
                </div>
              )}
            </div>
            
            {/* 嵌入代码部分 - 只在独立页面显示 */}
            {!isInIframe && (
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Embed This Tool</h4>
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<iframe 
  src="https://rgbatohex.com/tools/rgba-to-hex-8-digit-converter?embed=true&r=${rgba.r}&g=${rgba.g}&b=${rgba.b}&a=${rgba.a}" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGBA to 8-Digit HEX Color Converter"
></iframe>`}</code>
                  </pre>
                  <button
                    onClick={() => {
                      const code = `<iframe src="https://rgbatohex.com/tools/rgba-to-hex-8-digit-converter?embed=true&r=${rgba.r}&g=${rgba.g}&b=${rgba.b}&a=${rgba.a}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to 8-Digit HEX Color Converter"></iframe>`;
                      navigator.clipboard.writeText(code);
                      alert('Embed code copied to clipboard!');
                    }}
                    className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 