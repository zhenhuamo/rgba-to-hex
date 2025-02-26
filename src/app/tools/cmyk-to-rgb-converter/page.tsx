'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cmykToRgb } from '@/utils/colorConverter';

// CMYK输入组件
const CMYKInput = ({ 
  cmyk, 
  onChange 
}: { 
  cmyk: { c: number, m: number, y: number, k: number }, 
  onChange: (key: 'c' | 'm' | 'y' | 'k', value: number) => void 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">CMYK Values</h3>
      
      {/* Cyan滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Cyan (0-100%)
          </label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Current: {cmyk.c}%</span>
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.c}
              onChange={(e) => onChange('c', Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-500 rounded-lg" />
          <input
            type="range"
            min="0"
            max="100"
            value={cmyk.c}
            onChange={(e) => onChange('c', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
      
      {/* Magenta滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Magenta (0-100%)
          </label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Current: {cmyk.m}%</span>
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.m}
              onChange={(e) => onChange('m', Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-magenta-500 rounded-lg" />
          <input
            type="range"
            min="0"
            max="100"
            value={cmyk.m}
            onChange={(e) => onChange('m', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
      
      {/* Yellow滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Yellow (0-100%)
          </label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Current: {cmyk.y}%</span>
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.y}
              onChange={(e) => onChange('y', Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-yellow-500 rounded-lg" />
          <input
            type="range"
            min="0"
            max="100"
            value={cmyk.y}
            onChange={(e) => onChange('y', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
      
      {/* Key (Black)滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Key/Black (0-100%)
          </label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Current: {cmyk.k}%</span>
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.k}
              onChange={(e) => onChange('k', Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-900 rounded-lg" />
          <input
            type="range"
            min="0"
            max="100"
            value={cmyk.k}
            onChange={(e) => onChange('k', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
    </div>
  );
};

// RGB显示组件
const RGBDisplay = ({ rgb }: { rgb: { r: number, g: number, b: number } }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">RGB Value</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Red</div>
          <div className="font-mono font-semibold">{rgb.r}</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Green</div>
          <div className="font-mono font-semibold">{rgb.g}</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Blue</div>
          <div className="font-mono font-semibold">{rgb.b}</div>
        </div>
      </div>
      
      <div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">CSS Format</div>
        <div className="relative">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg font-mono">
            rgb({rgb.r}, {rgb.g}, {rgb.b})
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
            }}
            className="absolute right-2 top-2 text-blue-500 hover:text-blue-600"
            title="Copy to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">HEX Format</div>
        <div className="relative">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg font-mono">
            #{rgb.r.toString(16).padStart(2, '0')}{rgb.g.toString(16).padStart(2, '0')}{rgb.b.toString(16).padStart(2, '0')}
          </div>
          <button
            onClick={() => {
              const hex = `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
              navigator.clipboard.writeText(hex);
            }}
            className="absolute right-2 top-2 text-blue-500 hover:text-blue-600"
            title="Copy to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CmykToRgbConverter() {
  const [cmyk, setCmyk] = useState({ c: 0, m: 0, y: 0, k: 0 });
  const [rgb, setRgb] = useState({ r: 255, g: 255, b: 255 });
  const [isInIframe, setIsInIframe] = useState(false);
  
  // 检测是否在iframe中
  useEffect(() => {
    setIsInIframe(window.self !== window.top);
    
    // 从URL获取初始CMYK值
    const params = new URLSearchParams(window.location.search);
    const c = parseInt(params.get('c') || '0');
    const m = parseInt(params.get('m') || '0');
    const y = parseInt(params.get('y') || '0');
    const k = parseInt(params.get('k') || '0');
    
    if (!isNaN(c) && !isNaN(m) && !isNaN(y) && !isNaN(k)) {
      // 确保值在有效范围内
      const validC = Math.min(100, Math.max(0, c));
      const validM = Math.min(100, Math.max(0, m));
      const validY = Math.min(100, Math.max(0, y));
      const validK = Math.min(100, Math.max(0, k));
      
      setCmyk({ c: validC, m: validM, y: validY, k: validK });
    }
  }, []);
  
  // 当CMYK值变化时计算RGB
  useEffect(() => {
    const result = cmykToRgb(cmyk);
    setRgb(result);
  }, [cmyk]);
  
  // 处理CMYK输入变化
  const handleCmykChange = (key: 'c' | 'm' | 'y' | 'k', value: number) => {
    // 确保值在有效范围内
    const validValue = Math.min(100, Math.max(0, value));
    setCmyk({ ...cmyk, [key]: validValue });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-lg mx-auto">
        {!isInIframe && (
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/cmyk.svg" alt="CMYK to RGB Color Converter" width={32} height={32} priority />
            <h1 className="text-2xl font-bold text-center">CMYK to RGB Converter</h1>
          </div>
        )}

        {/* Main converter section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 space-y-6">
          {/* Color preview */}
          <div className="h-32 rounded-xl shadow-inner transition-colors duration-200"
            style={{
              backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
            }}
          />

          {/* CMYK input sliders */}
          <CMYKInput cmyk={cmyk} onChange={handleCmykChange} />
          
          {/* RGB value display */}
          <RGBDisplay rgb={rgb} />
        </div>
        
        {/* Key Features and Perfect For sections */}
        {!isInIframe && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
              <h3 className="font-medium mb-2">Key Features:</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Real-time color preview</li>
                <li>• Professional-grade accuracy</li>
                <li>• Interactive adjustments</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
              <h3 className="font-medium mb-2">Perfect For:</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Print Design</li>
                <li>• Digital Publishing</li>
                <li>• Color Management</li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Embed code generator - only show in standalone page */}
        {!isInIframe && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Embed This Tool</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Copy the code below to embed this color converter on your website:
            </p>
            <div className="relative">
              <textarea 
                className="w-full h-24 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm"
                readOnly
                value={`<iframe src="https://rgbatohex.com/tools/cmyk-to-rgb-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="CMYK to RGB Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/cmyk-to-rgb-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="CMYK to RGB Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        
        {/* Digital considerations - only show in standalone page */}
        {!isInIframe && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Digital Display Considerations</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                When converting CMYK (print) colors to RGB (web/digital) colors, keep in mind:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>CMYK has a smaller color gamut than RGB, so some colors may appear more vibrant when converted to RGB</li>
                <li>Print colors (CMYK) absorb light, while screens (RGB) emit light</li>
                <li>Colors viewed on different monitors may vary due to calibration differences</li>
                <li>Always check converted colors across multiple devices for consistency</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 