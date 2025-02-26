'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cmykToHex, CMYK } from '@/utils/colorConverter';

// CMYK输入组件
const CMYKInput = ({ 
  cmyk, 
  onChange 
}: { 
  cmyk: CMYK, 
  onChange: (key: keyof CMYK, value: number) => void 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">CMYK Values</h3>
      
      {/* Cyan 滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Cyan (0-100%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={cmyk.c}
            onChange={(e) => onChange('c', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
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
      
      {/* Magenta 滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Magenta (0-100%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={cmyk.m}
            onChange={(e) => onChange('m', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
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
      
      {/* Yellow 滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Yellow (0-100%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={cmyk.y}
            onChange={(e) => onChange('y', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
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
      
      {/* Key (Black) 滑块 */}
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-gray-700 dark:text-gray-300">
            Key (Black) (0-100%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={cmyk.k}
            onChange={(e) => onChange('k', Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-black rounded-lg" />
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
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">HEX Value</h3>
      <div className="relative">
        <input
          type="text"
          value={hex}
          readOnly
          className="w-full px-4 py-2 pr-16 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none font-mono"
        />
        <button
          onClick={copyHexValue}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

// Print Compatibility Info
const PrintInfo = ({ cmyk }: { cmyk: CMYK }) => {
  // Calculate if the color is in standard print gamut
  const isInGamut = cmyk.c + cmyk.m + cmyk.y + cmyk.k <= 300;
  
  // Calculate a printability score (higher is better)
  const maxInkCoverage = cmyk.c + cmyk.m + cmyk.y + cmyk.k;
  const printabilityScore = Math.max(0, Math.min(100, Math.round(100 - maxInkCoverage / 4)));
  
  // Find closest Pantone (simplified)
  const pantoneName = `PANTONE ${Math.round(cmyk.c * 3 + cmyk.m * 2 + cmyk.y)} C`;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Print Compatibility</h3>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600 dark:text-gray-400">Color Gamut</span>
            <span className={`px-2 py-0.5 rounded text-xs ${isInGamut ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
              {isInGamut ? 'In Gamut' : 'Out of Gamut'}
            </span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600 dark:text-gray-400">Printability Score</span>
            <span className="font-medium">{printabilityScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full" 
              style={{ width: `${printabilityScore}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Closest Pantone Match</span>
            <span className="font-mono text-sm">{pantoneName}</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Total Ink Coverage</span>
            <span>{maxInkCoverage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CmykToHexConverter() {
  // 初始CMYK值
  const [cmyk, setCmyk] = useState<CMYK>({ c: 0, m: 100, y: 100, k: 0 });
  const [hexColor, setHexColor] = useState('#FF0000');
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle iframe detection
  useEffect(() => {
    setMounted(true);
    setIsInIframe(window.self !== window.top);
    
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const c = params.get('c');
    const m = params.get('m');
    const y = params.get('y');
    const k = params.get('k');
    
    // Apply URL parameters if present
    if (c !== null || m !== null || y !== null || k !== null) {
      setCmyk({
        c: c !== null ? Math.min(100, Math.max(0, parseInt(c))) : 0,
        m: m !== null ? Math.min(100, Math.max(0, parseInt(m))) : 0,
        y: y !== null ? Math.min(100, Math.max(0, parseInt(y))) : 0,
        k: k !== null ? Math.min(100, Math.max(0, parseInt(k))) : 0
      });
    }
  }, []);

  // Update HEX value when CMYK changes
  useEffect(() => {
    setHexColor(cmykToHex(cmyk));
  }, [cmyk]);

  const handleCmykChange = (key: keyof CMYK, value: number) => {
    setCmyk(prev => ({
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
                alt="CMYK to HEX Converter Logo" 
                width={40}
                height={40}
                priority
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500">
                CMYK to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Convert CMYK print colors to web-friendly HEX color codes
            </p>
          </div>
        )}

        {/* Main converter section */}
        <div className="grid gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 space-y-6">
            {/* Color preview */}
            <div className="h-32 rounded-xl shadow-inner transition-colors duration-200"
              style={{
                backgroundColor: hexColor
              }}
            />

            {/* CMYK input sliders */}
            <CMYKInput cmyk={cmyk} onChange={handleCmykChange} />
            
            {/* HEX value display */}
            <HexDisplay hex={hexColor} />
          </div>
          
          {/* Print compatibility info */}
          <PrintInfo cmyk={cmyk} />
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
                value={`<iframe src="https://rgbatohex.com/tools/cmyk-to-hex-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="CMYK to HEX Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/cmyk-to-hex-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="CMYK to HEX Color Converter"></iframe>`;
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