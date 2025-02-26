'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { hslToHex, HSL } from '@/utils/colorConverter';

// HSL输入组件
const HSLInput = ({ 
  hsl, 
  onChange 
}: { 
  hsl: HSL, 
  onChange: (key: keyof HSL, value: number) => void 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">HSL Values</h3>
      
      {/* 色相 Hue 滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Hue (0-360°)
          </label>
          <input
            type="number"
            min="0"
            max="360"
            value={hsl.h}
            onChange={(e) => onChange('h', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
        </div>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="360"
            value={hsl.h}
            onChange={(e) => onChange('h', Number(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-red-500 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* 饱和度 Saturation 滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Saturation (0-100%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={hsl.s}
            onChange={(e) => onChange('s', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
        </div>
        <div className="relative">
          <div 
            className="absolute inset-0 rounded-lg" 
            style={{
              background: `linear-gradient(to right, 
                hsl(${hsl.h}, 0%, ${hsl.l}%), 
                hsl(${hsl.h}, 100%, ${hsl.l}%))`
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={hsl.s}
            onChange={(e) => onChange('s', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
      
      {/* 亮度 Lightness 滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Lightness (0-100%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={hsl.l}
            onChange={(e) => onChange('l', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
        </div>
        <div className="relative">
          <div 
            className="absolute inset-0 rounded-lg" 
            style={{
              background: `linear-gradient(to right, 
                hsl(${hsl.h}, ${hsl.s}%, 0%), 
                hsl(${hsl.h}, ${hsl.s}%, 50%), 
                hsl(${hsl.h}, ${hsl.s}%, 100%))`
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={hsl.l}
            onChange={(e) => onChange('l', Number(e.target.value))}
            className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          />
        </div>
      </div>
    </div>
  );
};

// HEX值显示组件
const HexDisplay = ({ hex }: { hex: string }) => {
  const copyHexValue = async () => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">HEX Value</h3>
      <div className="flex">
        <input
          type="text"
          value={hex}
          readOnly
          className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg font-mono"
        />
        <button
          onClick={copyHexValue}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg transition-colors"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default function HslToHexConverter() {
  const [hsl, setHsl] = useState<HSL>({ h: 0, s: 100, l: 50 });
  const [hexColor, setHexColor] = useState('#FF0000');
  
  // State for client-side only features
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true after component mounts
    setMounted(true);
    
    // Check if running in iframe after component mounts on client
    setIsInIframe(window.self !== window.top);
    
    // Parse URL parameters for initial color (if available)
    const params = new URLSearchParams(window.location.search);
    const h = params.get('h');
    const s = params.get('s');
    const l = params.get('l');
    
    if (h && s && l) {
      const hValue = parseInt(h);
      const sValue = parseInt(s);
      const lValue = parseInt(l);
      
      if (!isNaN(hValue) && !isNaN(sValue) && !isNaN(lValue)) {
        setHsl({
          h: Math.min(360, Math.max(0, hValue)),
          s: Math.min(100, Math.max(0, sValue)),
          l: Math.min(100, Math.max(0, lValue))
        });
      }
    }
  }, []);

  // Update HEX value when HSL changes
  useEffect(() => {
    setHexColor(hslToHex(hsl));
  }, [hsl]);

  const handleHslChange = (key: keyof HSL, value: number) => {
    setHsl(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Only render fully after client-side hydration is complete
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${isInIframe ? 'p-0' : 'p-4'}`}>
      <div className="max-w-2xl mx-auto">
        {/* Only show title in standalone page, hide in iframe */}
        {!isInIframe && (
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image 
                src="/rgb.svg" 
                alt="HSL to HEX Converter Logo" 
                width={40}
                height={40}
                priority
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                HSL to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Easily convert HSL color values to hexadecimal color codes
            </p>
          </div>
        )}

        {/* Main converter section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 space-y-6">
          {/* Color preview */}
          <div className="h-32 rounded-xl shadow-inner transition-colors duration-200"
            style={{
              backgroundColor: hexColor
            }}
          />

          {/* HSL input sliders */}
          <HSLInput hsl={hsl} onChange={handleHslChange} />
          
          {/* HEX value display */}
          <HexDisplay hex={hexColor} />
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
                value={`<iframe src="https://rgbatohex.com/tools/hsl-to-hex-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;overflow:hidden;" title="HSL to HEX Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hsl-to-hex-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;overflow:hidden;" title="HSL to HEX Color Converter"></iframe>`;
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