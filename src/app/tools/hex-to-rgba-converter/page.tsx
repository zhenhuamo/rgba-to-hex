'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { hexToRgba, isValidHex } from '@/utils/colorConverter';

// 输入组件
const HexInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  return (
    <div className="space-y-2">
      <label className="block text-gray-700 dark:text-gray-300 font-medium">
        HEX Color Value
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="#FFFFFF or #FFFFFFFF"
      />
    </div>
  );
};

// 颜色值显示组件
const ColorValues = ({ rgba }: { rgba: { r: number, g: number, b: number, a: number } | null }) => {
  if (!rgba) return null;
  
  const copyRgbaValue = async () => {
    try {
      await navigator.clipboard.writeText(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Color Values</h3>
      
      <div className="grid gap-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Red</span>
          <span className="font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">{rgba.r}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Green</span>
          <span className="font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">{rgba.g}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Blue</span>
          <span className="font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">{rgba.b}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Alpha</span>
          <span className="font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">{rgba.a.toFixed(2)}</span>
        </div>
      </div>
      
      <button
        onClick={copyRgbaValue}
        className="mt-6 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
      >
        Copy RGBA Value
      </button>
    </div>
  );
};

export default function HexToRgbaConverter() {
  const [hexColor, setHexColor] = useState('#FFFFFF');
  const [rgba, setRgba] = useState<{ r: number, g: number, b: number, a: number } | null>(null);
  
  // State for client-side only features
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true after component mounts
    setMounted(true);
    
    // Check if running in iframe after component mounts on client
    setIsInIframe(window.self !== window.top);
    
    // Parse URL parameters for initial color
    const params = new URLSearchParams(window.location.search);
    const defaultColor = params.get('defaultColor');
    if (defaultColor && isValidHex(`#${defaultColor}`)) {
      setHexColor(defaultColor.startsWith('#') ? defaultColor : `#${defaultColor}`);
    }
  }, []);

  // Update RGBA values when hex color changes
  useEffect(() => {
    if (isValidHex(hexColor)) {
      setRgba(hexToRgba(hexColor));
    }
  }, [hexColor]);

  const handleHexChange = (value: string) => {
    setHexColor(value);
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
                alt="HEX to RGBA Converter Logo" 
                width={40}
                height={40}
                priority
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                HEX to RGBA Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Easily convert hexadecimal color codes to RGBA color values
            </p>
          </div>
        )}

        {/* Main converter section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 space-y-6 mb-6">
          {/* Color preview */}
          <div className="h-32 rounded-xl shadow-inner transition-colors duration-200 relative overflow-hidden"
            style={{
              backgroundColor: rgba ? `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})` : 'transparent'
            }}
          >
            {/* Checkerboard background for transparency */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-4">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className={`${
                    (Math.floor(i / 8) + (i % 8)) % 2 === 0
                      ? 'bg-gray-200'
                      : 'bg-white'
                  } opacity-50`}
                />
              ))}
            </div>
          </div>

          {/* HEX input */}
          <HexInput value={hexColor} onChange={handleHexChange} />
        </div>

        {/* Color values component */}
        <ColorValues rgba={rgba} />
        
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
                value={`<iframe src="https://rgbatohex.com/tools/hex-to-rgba-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to RGBA Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hex-to-rgba-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to RGBA Color Converter"></iframe>`;
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