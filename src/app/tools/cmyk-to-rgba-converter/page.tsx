'use client';

import { useState } from 'react';
import { cmykToRgba } from '@/utils/colorConverter';

// Enhanced CMYK input component
const CMYKInput = ({ 
  cmyk, 
  onChange 
}: { 
  cmyk: { c: number, m: number, y: number, k: number }, 
  onChange: (key: 'c' | 'm' | 'y' | 'k', value: number) => void 
}) => {
  const [copiedCmyk, setCopiedCmyk] = useState(false);
  
  const copyCmykValue = async () => {
    try {
      await navigator.clipboard.writeText(`cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`);
      setCopiedCmyk(true);
      setTimeout(() => setCopiedCmyk(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CMYK Values</h3>
      
      {/* Cyan slider */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-cyan-500"></span>
            Cyan (C)
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.c}
              onChange={(e) => onChange('c', Number(e.target.value))}
              className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
            />
            <span className="pr-2 text-gray-500">%</span>
          </div>
        </div>
        <div className="relative mt-1">
          <div 
            className="absolute inset-0 rounded-lg h-3" 
            style={{
              background: "linear-gradient(to right, #FFFFFF, #00FFFF)"
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={cmyk.c}
            onChange={(e) => onChange('c', Number(e.target.value))}
            className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
            style={{
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
          <style jsx>{`
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background: white;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              cursor: pointer;
              border: 2px solid white;
            }
            input[type=range]::-moz-range-thumb {
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background: white;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              cursor: pointer;
              border: 2px solid white;
            }
          `}</style>
        </div>
      </div>
      
      {/* Magenta slider */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-pink-500"></span>
            Magenta (M)
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.m}
              onChange={(e) => onChange('m', Number(e.target.value))}
              className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
            />
            <span className="pr-2 text-gray-500">%</span>
          </div>
        </div>
        <div className="relative mt-1">
          <div 
            className="absolute inset-0 rounded-lg h-3" 
            style={{
              background: "linear-gradient(to right, #FFFFFF, #FF00FF)"
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={cmyk.m}
            onChange={(e) => onChange('m', Number(e.target.value))}
            className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
            style={{
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
        </div>
      </div>
      
      {/* Yellow slider */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
            Yellow (Y)
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.y}
              onChange={(e) => onChange('y', Number(e.target.value))}
              className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
            />
            <span className="pr-2 text-gray-500">%</span>
          </div>
        </div>
        <div className="relative mt-1">
          <div 
            className="absolute inset-0 rounded-lg h-3" 
            style={{
              background: "linear-gradient(to right, #FFFFFF, #FFFF00)"
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={cmyk.y}
            onChange={(e) => onChange('y', Number(e.target.value))}
            className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
            style={{
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
        </div>
      </div>
      
      {/* Key/Black slider */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-gray-900"></span>
            Key/Black (K)
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.k}
              onChange={(e) => onChange('k', Number(e.target.value))}
              className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
            />
            <span className="pr-2 text-gray-500">%</span>
          </div>
        </div>
        <div className="relative mt-1">
          <div 
            className="absolute inset-0 rounded-lg h-3" 
            style={{
              background: "linear-gradient(to right, #FFFFFF, #000000)"
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={cmyk.k}
            onChange={(e) => onChange('k', Number(e.target.value))}
            className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
            style={{
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
        </div>
      </div>

      {/* Copy CMYK button */}
      <button
        onClick={copyCmykValue}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
        {copiedCmyk ? 'Copied CMYK!' : 'Copy CMYK Values'}
      </button>
    </div>
  );
};

// Alpha control component
const AlphaControl = ({ 
  alpha, 
  onChange,
  rgba
}: { 
  alpha: number, 
  onChange: (value: number) => void,
  rgba: { r: number, g: number, b: number, a: number }
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
      <div className="flex justify-between mb-2">
        <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span>
          Alpha (Transparency)
        </label>
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <input
            type="number"
            min="0"
            max="1"
            step="0.01"
            value={alpha}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="w-16 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <div className="relative mt-1">
        {/* Checkerboard background */}
        <div 
          className="absolute inset-0 rounded-lg h-3"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
            `,
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
          }}
        />
        {/* Alpha gradient */}
        <div 
          className="absolute inset-0 rounded-lg h-3"
          style={{
            background: `linear-gradient(to right, 
              rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 0), 
              rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1))`
          }}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={alpha}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
          style={{
            WebkitAppearance: 'none',
            appearance: 'none'
          }}
        />
      </div>
    </div>
  );
};

// RGBA display component
const RGBADisplay = ({ rgba }: { rgba: { r: number, g: number, b: number, a: number } }) => {
  const [copiedRgba, setCopiedRgba] = useState(false);
  const [copiedHex, setCopiedHex] = useState(false);

  const copyRgbaValue = async () => {
    try {
      await navigator.clipboard.writeText(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
      setCopiedRgba(true);
      setTimeout(() => setCopiedRgba(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const copyHexValue = async () => {
    try {
      // Convert alpha to hex
      const alphaHex = Math.round(rgba.a * 255).toString(16).padStart(2, '0');
      const hex8 = `#${rgba.r.toString(16).padStart(2, '0')}${rgba.g.toString(16).padStart(2, '0')}${rgba.b.toString(16).padStart(2, '0')}${alphaHex}`;
      await navigator.clipboard.writeText(hex8);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">RGBA Output</h3>
      
      {/* RGBA values display */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">{rgba.r}</div>
            <div className="text-sm text-gray-500">Red</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">{rgba.g}</div>
            <div className="text-sm text-gray-500">Green</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">{rgba.b}</div>
            <div className="text-sm text-gray-500">Blue</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-500">{rgba.a.toFixed(2)}</div>
            <div className="text-sm text-gray-500">Alpha</div>
          </div>
        </div>
        
        {/* Copy buttons */}
        <div className="space-y-2">
          <button
            onClick={copyRgbaValue}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            {copiedRgba ? 'Copied RGBA!' : `Copy RGBA: rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`}
          </button>
          <button
            onClick={copyHexValue}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            {copiedHex ? 'Copied HEX8!' : 'Copy 8-Digit HEX (with Alpha)'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Color preview with transparency
const ColorPreview = ({ rgba }: { rgba: { r: number, g: number, b: number, a: number } }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
      <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Color Preview</h4>
      
      {/* Large color preview with checkerboard background */}
      <div className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
        {/* Checkerboard background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        />
        {/* Color overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
          }}
        />
      </div>
      
      {/* Color info */}
      <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
        <div>RGBA: rgba({rgba.r}, {rgba.g}, {rgba.b}, {rgba.a})</div>
        <div>Opacity: {Math.round(rgba.a * 100)}%</div>
      </div>
    </div>
  );
};

// Web usage tips
const WebUsageTips = ({ rgba }: { rgba: { r: number, g: number, b: number, a: number } }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
      <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Web Usage Tips</h4>
      
      <div className="space-y-3 text-sm">
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <p className="font-medium text-blue-800 dark:text-blue-200">CMYK to Web Conversion Notes</p>
              <p className="text-blue-700 dark:text-blue-300 mt-1">
                CMYK is a print color model. When converting to RGBA for web display, color differences may occur. Preview on actual devices is recommended.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <p className="font-medium text-green-800 dark:text-green-200">CSS Compatibility</p>
              <p className="text-green-700 dark:text-green-300 mt-1">
                RGBA format has excellent support in all modern browsers, including transparency effects.
              </p>
            </div>
          </div>
        </div>

        {rgba.a < 1 && (
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-3">
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <div>
                <p className="font-medium text-yellow-800 dark:text-yellow-200">Transparency Usage Tips</p>
                <p className="text-yellow-700 dark:text-yellow-300 mt-1">
                  Current color includes transparency ({Math.round(rgba.a * 100)}%). Ensure proper background color coordination.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function CMYKToRGBAConverter() {
  // Default CMYK values
  const [cmyk, setCmyk] = useState({ c: 75, m: 68, y: 67, k: 90 });
  const [alpha, setAlpha] = useState(1);

  // Calculate RGBA from CMYK and alpha
  const rgba = cmykToRgba(cmyk, alpha);

  const handleCmykChange = (key: 'c' | 'm' | 'y' | 'k', value: number) => {
    setCmyk(prev => ({
      ...prev,
      [key]: Math.max(0, Math.min(100, value))
    }));
  };

  const handleAlphaChange = (value: number) => {
    setAlpha(Math.max(0, Math.min(1, value)));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">CMYK to RGBA Converter</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Convert print-ready CMYK color values to web-ready RGBA values with transparency control. Perfect for bridging print and digital design workflows.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          {/* Left side: CMYK input and alpha control */}
          <CMYKInput cmyk={cmyk} onChange={handleCmykChange} />
          
          <div className="mt-6">
            <AlphaControl alpha={alpha} onChange={handleAlphaChange} rgba={rgba} />
          </div>
          
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About CMYK to RGBA</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive color model used in printing, while RGBA is an additive color model commonly used in web design with an alpha transparency channel.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-sm text-blue-800 dark:text-blue-200">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>
                  <strong>Conversion Note:</strong> CMYK has a smaller color gamut than RGB. Some vibrant RGB colors cannot be accurately represented in CMYK, and vice versa.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          {/* Right side: RGBA display and preview */}
          <RGBADisplay rgba={rgba} />
          <div className="mt-6">
            <ColorPreview rgba={rgba} />
          </div>
          <div className="mt-6">
            <WebUsageTips rgba={rgba} />
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">CMYK to RGBA Conversion Guide</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            CMYK and RGBA are two different color models used for printing and digital display respectively. Important considerations when converting:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>CMYK is a subtractive color model that creates colors by absorbing light, primarily used for printing</li>
            <li>RGBA is an additive color model that creates colors by emitting light, used for digital displays with an alpha transparency channel</li>
            <li>Due to gamut differences, some CMYK colors may not be precisely representable in RGBA</li>
            <li>Converted RGBA colors may appear different on screen compared to their printed counterparts</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Conversion Formula</h3>
          <p>CMYK to RGBA conversion uses the following mathematical formula:</p>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>
              R = 255 × (1 - C/100) × (1 - K/100)<br/>
              G = 255 × (1 - M/100) × (1 - K/100)<br/>
              B = 255 × (1 - Y/100) × (1 - K/100)<br/>
              A = User-specified transparency value (0-1)
            </code>
          </pre>
          
          <p className="mt-4">
            This converter uses the above formula to transform CMYK values into RGBA values, helping designers and print professionals bridge the gap between digital media and print media.
          </p>
        </div>
      </div>
    </div>
  );
} 