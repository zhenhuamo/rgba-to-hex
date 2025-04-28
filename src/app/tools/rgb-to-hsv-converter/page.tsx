'use client';

import { useState, useEffect } from 'react';

// RGB 到 HSV 转换函数
function rgbToHsv({ r, g, b }: { r: number, g: number, b: number }): { h: number, s: number, v: number } {
  const r_norm = r / 255;
  const g_norm = g / 255;
  const b_norm = b / 255;

  const cmax = Math.max(r_norm, g_norm, b_norm);
  const cmin = Math.min(r_norm, g_norm, b_norm);
  const delta = cmax - cmin;

  let h = 0;
  if (delta === 0) {
    h = 0;
  } else if (cmax === r_norm) {
    h = 60 * (((g_norm - b_norm) / delta) % 6);
  } else if (cmax === g_norm) {
    h = 60 * (((b_norm - r_norm) / delta) + 2);
  } else { // cmax === b_norm
    h = 60 * (((r_norm - g_norm) / delta) + 4);
  }

  if (h < 0) {
    h += 360;
  }

  const s = cmax === 0 ? 0 : (delta / cmax) * 100;
  const v = cmax * 100;

  return { h, s, v };
}

// RgbInput 组件 - 用于处理 RGB 输入
const RgbInput = ({ rgb, onChange }: { 
  rgb: { r: number, g: number, b: number }, 
  onChange: (color: { r: number, g: number, b: number }) => void 
}) => {
  // 单个属性变化时更新整个颜色对象
  const handleSingleValueChange = (key: 'r' | 'g' | 'b', value: number) => {
    const validatedValue = Math.min(255, Math.max(0, Number(value) || 0));
    const newColor = { ...rgb, [key]: validatedValue };
    onChange(newColor);
  };

  // 生成随机RGB颜色
  const randomColor = () => {
    const color = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
    onChange(color);
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">RGB Color Values</h3>
      
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
                value={rgb.r}
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
              value={rgb.r}
              onChange={(e) => handleSingleValueChange('r', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{ WebkitAppearance: 'none', appearance: 'none' }}
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
                value={rgb.g}
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
              value={rgb.g}
              onChange={(e) => handleSingleValueChange('g', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{ WebkitAppearance: 'none', appearance: 'none' }}
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
                value={rgb.b}
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
              value={rgb.b}
              onChange={(e) => handleSingleValueChange('b', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{ WebkitAppearance: 'none', appearance: 'none' }}
            />
          </div>
        </div>
      </div>
      
      {/* 随机颜色按钮 */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
         <button
            className="w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md flex items-center justify-center gap-1 text-sm active:bg-gray-300 dark:active:bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={randomColor}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Random Color
          </button>
        <div className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
          Click the button to generate a random color
        </div>
      </div>
    </div>
  );
};

// 新增：HSV 可视化组件
const HsvVisualizer = ({ hsv }: { hsv: { h: number, s: number, v: number } }) => {
  const { h, s, v } = hsv;

  // 计算 Hue marker 的位置
  const hueMarkerStyle = {
    transform: `rotate(${h}deg) translate(50%) rotate(-${h}deg)`,
    // 调整 translate 的值来控制标记点离圆心的距离，例如 50% 在圆周上
  };

  // 计算 SV marker 的位置
  const svMarkerStyle = {
    left: `${s}%`,
    top: `${100 - v}%`,
    backgroundColor: `rgb(${v > 50 ? 0 : 255}, ${v > 50 ? 0 : 255}, ${v > 50 ? 0 : 255})`, // 根据亮度决定标记点颜色以保证可见性
    transform: 'translate(-50%, -50%)',
  };

  // SV Box 背景色
  const svBoxBackground = {
    backgroundImage: `
      linear-gradient(to top, black, transparent),
      linear-gradient(to right, white, hsl(${h}, 100%, 50%))
    `,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Hue Wheel */}
      <div className="flex flex-col items-center">
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Hue</h4>
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-200 dark:border-gray-600 overflow-hidden"
          style={{
            background: 'conic-gradient(from 90deg, hsl(0,100%,50%), hsl(60,100%,50%), hsl(120,100%,50%), hsl(180,100%,50%), hsl(240,100%,50%), hsl(300,100%,50%), hsl(360,100%,50%))'
          }}
        >
          {/* Hue Marker - 放在一个容器里便于旋转定位 */}
          <div className="absolute inset-0 flex items-center justify-center" >
             <div className="absolute w-full h-full flex justify-start items-center" style={hueMarkerStyle}>
                <div className="w-4 h-4 rounded-full border-2 border-white ring-1 ring-black shadow-md bg-transparent" 
                    style={{ transform: 'translate(-50%, -50%)' }} // 微调标记点中心
                />
             </div>
          </div>
        </div>
      </div>

      {/* Saturation/Value Box */}
      <div className="flex flex-col items-center">
         <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Saturation & Value</h4>
        <div className="relative w-32 h-32 md:w-40 md:h-40 border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden"
          style={svBoxBackground}
        >
          {/* SV Marker */}
          <div className="absolute w-4 h-4 rounded-full border-2 border-white shadow-md"
            style={svMarkerStyle}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default function RgbToHsvConverter() {
  // 状态管理
  const [rgb, setRgb] = useState({ r: 50, g: 150, b: 200 });
  const [hsv, setHsv] = useState({ h: 0, s: 0, v: 0 });
  
  // Client-side only features
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copiedHsv, setCopiedHsv] = useState(false);

  // 挂载时和 URL 参数处理
  useEffect(() => {
    setMounted(true);
    setIsInIframe(window.self !== window.top);
    
    const params = new URLSearchParams(window.location.search);
    const r = params.get('r');
    const g = params.get('g');
    const b = params.get('b');
    
    if (r && g && b) {
      const initialRgb = {
        r: Math.min(255, Math.max(0, parseInt(r) || 50)),
        g: Math.min(255, Math.max(0, parseInt(g) || 150)),
        b: Math.min(255, Math.max(0, parseInt(b) || 200)),
      };
      setRgb(initialRgb);
    } else {
      // 如果没有URL参数，用默认值计算初始HSV
      setHsv(rgbToHsv(rgb));
    }
  }, []); // 依赖为空数组，仅在挂载时运行

  // 当RGB变化时，重新计算HSV
  useEffect(() => {
    if (mounted) { // 确保只在挂载后计算
      setHsv(rgbToHsv(rgb));
    }
  }, [rgb, mounted]); // 依赖rgb和mounted状态

  // 复制HSV值到剪贴板
  const copyHsvToClipboard = async () => {
    const hsvString = `hsv(${hsv.h.toFixed(0)}, ${hsv.s.toFixed(0)}%, ${hsv.v.toFixed(0)}%)`;
    try {
      await navigator.clipboard.writeText(hsvString);
      setCopiedHsv(true);
      setTimeout(() => setCopiedHsv(false), 2000);
    } catch (err) {
      console.error('Failed to copy HSV:', err);
    }
  };
  
  // 客户端水合前不渲染
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800"></div>;
  }

  const currentRgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const currentHsvString = `hsv(${hsv.h.toFixed(0)}°, ${hsv.s.toFixed(1)}%, ${hsv.v.toFixed(1)}%)`;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 ${isInIframe ? 'p-0' : 'p-6'}`}>
      <div className="max-w-3xl mx-auto">
        {/* 只在独立页面显示标题，iframe中隐藏 */}
        {!isInIframe && (
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
               <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                 {/* Placeholder for Icon - Using a simple div for now */}
                 <div className="w-10 h-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">H</div>
               </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                RGB to HSV Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Convert RGB color values to Hue, Saturation, and Value (HSV)
            </p>
          </div>
        )}

        {/* 主转换器区域 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 overflow-hidden">
          {/* 颜色预览 */}
          <div className="relative">
            <div 
              className="h-48 w-full transition-colors duration-300"
              style={{ backgroundColor: currentRgbString }}
            ></div>
             {/* 颜色信息叠加层 */}
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30 backdrop-blur-sm text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-lg">{currentRgbString}</div>
                  <div className="text-sm opacity-90">{currentHsvString}</div>
                </div>
                {/* 可选：添加分享按钮 */}
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* RGB 输入控件 */}
            <RgbInput rgb={rgb} onChange={setRgb} />
            
            {/* 高亮显示的HSV输出部分 + 可视化 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-pink-200 dark:border-pink-900 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">HSV Result & Visualization</h3>
                <div className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded-full">
                  Hue, Saturation, Value
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Hue (H)</div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{hsv.h.toFixed(0)}°</div>
                </div>
                 <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Saturation (S)</div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{hsv.s.toFixed(1)}%</div>
                </div>
                 <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Value (V)</div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{hsv.v.toFixed(1)}%</div>
                </div>
              </div>

              <div className="flex mb-6">
                <input
                  type="text"
                  value={currentHsvString}
                  readOnly
                  className="flex-1 px-3 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-l-lg font-mono text-lg tracking-wider focus:outline-none focus:ring-0"
                />
                <button
                  onClick={copyHsvToClipboard}
                  className={`px-4 py-3 ${copiedHsv ? 'bg-green-500' : 'bg-pink-500 hover:bg-pink-600'} text-white rounded-r-lg transition-colors flex items-center gap-1`}
                >
                  {copiedHsv ? (
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
                      <span>Copy HSV</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* 渲染新的可视化组件 */}
              <HsvVisualizer hsv={hsv} />

               {/* 原有的提示信息 */}
               <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <span>Hue: 0-360°, Saturation: 0-100%, Value: 0-100%</span>
               </div>
            </div>
            
            {/* 嵌入代码部分 - 只在独立页面显示 */}
            {!isInIframe && (
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Embed This Tool</h4>
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<iframe 
  src="${mounted ? window.location.origin : ''}/tools/rgb-to-hsv-converter?embed=true&r=${rgb.r}&g=${rgb.g}&b=${rgb.b}" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGB to HSV Color Converter"
></iframe>`}</code>
                  </pre>
                  <button
                    onClick={() => {
                      const embedUrl = `${window.location.origin}/tools/rgb-to-hsv-converter?embed=true&r=${rgb.r}&g=${rgb.g}&b=${rgb.b}`;
                      const code = `<iframe src="${embedUrl}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to HSV Color Converter"></iframe>`;
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