'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { rgbToHsl } from '@/utils/colorConverter';

// RGB输入组件
const RGBInput = ({ 
  rgb, 
  onChange 
}: { 
  rgb: { r: number, g: number, b: number }, 
  onChange: (key: 'r' | 'g' | 'b', value: number) => void 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">RGB Values</h3>
      
      {/* 红色滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Red (0-255)
          </label>
          <input
            type="number"
            min="0"
            max="255"
            value={rgb.r}
            onChange={(e) => onChange('r', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-red-600 rounded-lg" />
          <input
            type="range"
            min="0"
            max="255"
            value={rgb.r}
            onChange={(e) => onChange('r', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
      
      {/* 绿色滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Green (0-255)
          </label>
          <input
            type="number"
            min="0"
            max="255"
            value={rgb.g}
            onChange={(e) => onChange('g', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-green-600 rounded-lg" />
          <input
            type="range"
            min="0"
            max="255"
            value={rgb.g}
            onChange={(e) => onChange('g', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
      
      {/* 蓝色滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Blue (0-255)
          </label>
          <input
            type="number"
            min="0"
            max="255"
            value={rgb.b}
            onChange={(e) => onChange('b', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-600 rounded-lg" />
          <input
            type="range"
            min="0"
            max="255"
            value={rgb.b}
            onChange={(e) => onChange('b', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
    </div>
  );
};

// HSL显示组件
const HSLDisplay = ({ hsl }: { hsl: { h: number, s: number, l: number } }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">HSL Value</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Hue</div>
          <div className="font-mono font-semibold">{hsl.h}°</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Saturation</div>
          <div className="font-mono font-semibold">{hsl.s}%</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Lightness</div>
          <div className="font-mono font-semibold">{hsl.l}%</div>
        </div>
      </div>
      
      <div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">CSS Format</div>
        <div className="relative">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg font-mono">
            hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`);
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

// 色彩特性组件
const ColorInfo = ({ hsl }: { hsl: { h: number, s: number, l: number } }) => {
  // 获取色调类别函数
  const getHueCategory = (hue: number): string => {
    if (hue < 30) return 'Red';
    if (hue < 60) return 'Orange';
    if (hue < 90) return 'Yellow';
    if (hue < 150) return 'Green';
    if (hue < 210) return 'Cyan';
    if (hue < 270) return 'Blue';
    if (hue < 330) return 'Purple';
    return 'Red';
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 space-y-4">
      <h3 className="text-lg font-semibold">Color Properties</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Color Family</div>
          <div className="font-medium">{getHueCategory(hsl.h)}</div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Brightness</div>
          <div className="font-medium">
            {hsl.l < 25 ? 'Dark' : hsl.l > 75 ? 'Light' : 'Medium'}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Intensity</div>
          <div className="font-medium">
            {hsl.s < 25 ? 'Dull' : hsl.s > 75 ? 'Vibrant' : 'Moderate'}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Color Type</div>
          <div className="font-medium">
            {hsl.s < 10 ? 'Grayscale' : 'Chromatic'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RgbToHslConverter() {
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
  const [hsl, setHsl] = useState({ h: 0, s: 0, l: 0 });
  const [isInIframe, setIsInIframe] = useState(false);
  
  // 检测是否在iframe中
  useEffect(() => {
    setIsInIframe(window.self !== window.top);
    
    // 从URL获取初始RGB值
    const params = new URLSearchParams(window.location.search);
    const r = parseInt(params.get('r') || '0');
    const g = parseInt(params.get('g') || '0');
    const b = parseInt(params.get('b') || '0');
    
    if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
      // 确保值在有效范围内
      const validR = Math.min(255, Math.max(0, r));
      const validG = Math.min(255, Math.max(0, g));
      const validB = Math.min(255, Math.max(0, b));
      
      setRgb({ r: validR, g: validG, b: validB });
    }
  }, []);
  
  // 当RGB值变化时计算HSL
  useEffect(() => {
    const result = rgbToHsl(rgb);
    setHsl(result);
  }, [rgb]);
  
  // 处理RGB输入变化
  const handleRgbChange = (key: 'r' | 'g' | 'b', value: number) => {
    // 确保值在有效范围内
    const validValue = Math.min(255, Math.max(0, value));
    setRgb({ ...rgb, [key]: validValue });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-lg mx-auto">
        {!isInIframe && (
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/rgb.svg" alt="RGB to HSL Color Converter" width={32} height={32} priority />
            <h1 className="text-2xl font-bold text-center">RGB to HSL Converter</h1>
          </div>
        )}

        {/* Main converter section */}
        <div className="grid gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 space-y-6">
            {/* Color preview */}
            <div className="h-32 rounded-xl shadow-inner transition-colors duration-200"
              style={{
                backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
              }}
            />

            {/* RGB input sliders */}
            <RGBInput rgb={rgb} onChange={handleRgbChange} />
            
            {/* HSL value display */}
            <HSLDisplay hsl={hsl} />
          </div>
          
          {/* Color properties */}
          <ColorInfo hsl={hsl} />
        </div>
        
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
                value={`<iframe src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to HSL Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to HSL Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 