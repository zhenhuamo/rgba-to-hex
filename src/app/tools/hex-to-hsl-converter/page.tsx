'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { hexToRgba, rgbaToHsl, isValidHex } from '@/utils/colorConverter';

// Enhanced input component
const HexInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const [isValid, setIsValid] = useState(true);
  
  const handleInput = (val: string) => {
    onChange(val);
    setIsValid(isValidHex(val));
  };
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">
          HEX Color Value
        </label>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Supports #RGB, #RRGGBB formats
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 dark:text-gray-400 font-mono">#</span>
        </div>
        <input
          type="text"
          value={value.startsWith('#') ? value.substring(1) : value}
          onChange={(e) => handleInput(e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`)}
          className={`w-full pl-8 px-4 py-3 border ${isValid ? 'border-gray-300 dark:border-gray-600' : 'border-red-500 dark:border-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg tracking-wider bg-white dark:bg-gray-800`}
          placeholder="FFFFFF"
          spellCheck="false"
          autoComplete="off"
        />
        {!isValid && (
          <p className="mt-1 text-sm text-red-500">Please enter a valid HEX color code</p>
        )}
      </div>

      {/* Common colors quick selection */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Common Colors:</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF5500', '#800080', '#000000', '#FFFFFF'].map((color, index) => (
            <button
              key={index}
              className="w-8 h-8 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => onChange(color)}
              title={color}
            />
          ))}
          <button
            className="w-8 h-8 rounded-md border border-gray-300 dark:border-gray-700 flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => onChange('#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'))}
            title="Random Color"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// HSL color value display component
const ColorValues = ({ 
  hsl, 
  hexColor,
  onHslChange
}: { 
  hsl: { h: number, s: number, l: number } | null,
  hexColor: string,
  onHslChange: (newHsl: { h: number, s: number, l: number }) => void
}) => {
  const [copiedHsl, setCopiedHsl] = useState(false);
  const [copiedHex, setCopiedHex] = useState(false);
  
  if (!hsl) return null;
  
  const copyHslValue = async () => {
    try {
      await navigator.clipboard.writeText(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`);
      setCopiedHsl(true);
      setTimeout(() => setCopiedHsl(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  const copyHexValue = async () => {
    try {
      await navigator.clipboard.writeText(hexColor);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newH = parseInt(e.target.value);
    onHslChange({ ...hsl, h: newH });
  };

  const handleSaturationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newS = parseInt(e.target.value);
    onHslChange({ ...hsl, s: newS });
  };

  const handleLightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newL = parseInt(e.target.value);
    onHslChange({ ...hsl, l: newL });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* HEX value display */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 dark:text-gray-300 font-medium">HEX</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Web, CSS</span>
          </div>
          <div className="flex">
            <input
              type="text"
              value={hexColor}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
            />
            <button
              onClick={copyHexValue}
              className={`px-4 py-2 ${copiedHex ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-1`}
            >
              {copiedHex ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* HSL value display */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 dark:text-gray-300 font-medium">HSL</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">CSS</span>
          </div>
          <div className="flex">
            <input
              type="text"
              value={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
            />
            <button
              onClick={copyHslValue}
              className={`px-4 py-2 ${copiedHsl ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-1`}
            >
              {copiedHsl ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* HSL components details */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">HSL Components</h3>
        
        <div className="space-y-5">
          {/* Hue component */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500"></div>
                <span className="text-gray-600 dark:text-gray-400">Hue (H)</span>
              </div>
              <span className="font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">{hsl.h}°</span>
            </div>
            <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-full overflow-hidden"></div>
            <input
              type="range"
              min="0"
              max="360"
              value={hsl.h}
              onChange={handleHueChange}
              className="w-full cursor-pointer"
            />
          </div>
          
          {/* Saturation component */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${hsl.h}, 100%, 50%)` }}></div>
                <span className="text-gray-600 dark:text-gray-400">Saturation (S)</span>
              </div>
              <span className="font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">{hsl.s}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden">
              <div className="h-full w-full" style={{ 
                background: `linear-gradient(to right, hsl(${hsl.h}, 0%, ${hsl.l}%), hsl(${hsl.h}, 100%, ${hsl.l}%))`
              }}></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={hsl.s}
              onChange={handleSaturationChange}
              className="w-full cursor-pointer"
            />
          </div>
          
          {/* Lightness component */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${hsl.h}, ${hsl.s}%, 50%)` }}></div>
                <span className="text-gray-600 dark:text-gray-400">Lightness (L)</span>
              </div>
              <span className="font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">{hsl.l}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden">
              <div className="h-full w-full" style={{ 
                background: `linear-gradient(to right, #000, hsl(${hsl.h}, ${hsl.s}%, 50%), #fff)`
              }}></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={hsl.l}
              onChange={handleLightnessChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HexToHslConverter() {
  const [hexColor, setHexColor] = useState('#3E82FC');
  const [hsl, setHsl] = useState<{ h: number, s: number, l: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  
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
    if (defaultColor && isValidHex(`#${defaultColor.replace('#', '')}`)) {
      setHexColor(defaultColor.startsWith('#') ? defaultColor : `#${defaultColor}`);
    }
  }, []);

  // Update HSL values when hex color changes
  useEffect(() => {
    if (isValidHex(hexColor)) {
      const rgba = hexToRgba(hexColor);
      if (rgba) {
        setHsl(rgbaToHsl(rgba));
      }
    } else {
      setHsl(null);
    }
  }, [hexColor]);
  
  const handleHexChange = (value: string) => {
    setHexColor(value);
  };

  const handleHslChange = (newHsl: { h: number, s: number, l: number }) => {
    setHsl(newHsl);
    // Convert HSL back to HEX
    // We need to convert HSL to RGB first, then RGB to HEX
    const { r, g, b } = hslToRgb(newHsl);
    const newHex = rgbToHex({ r, g, b });
    setHexColor(newHex);
  };
  
  // Helper function to convert HSL to RGB
  const hslToRgb = ({ h, s, l }: { h: number, s: number, l: number }) => {
    s /= 100;
    l /= 100;
    
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    
    let r = 0, g = 0, b = 0;
    
    if (h >= 0 && h < 60) {
      r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
      r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
      r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
      r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
      r = c; g = 0; b = x;
    }
    
    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    };
  };
  
  // Helper function to convert RGB to HEX
  const rgbToHex = ({ r, g, b }: { r: number, g: number, b: number }) => {
    const toHex = (n: number) => {
      const hex = n.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };
  
  const shareColor = async () => {
    if (!hsl) return;
    
    const url = `${window.location.origin}${window.location.pathname}?defaultColor=${encodeURIComponent(hexColor)}`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Color Share',
          text: `Check out this color: ${hexColor}`,
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

  // Only render fully after client-side hydration is complete
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 ${isInIframe ? 'p-0' : 'p-6'}`}>
      <div className="max-w-3xl mx-auto">
        {/* Only show title in standalone page, hide in iframe */}
        {!isInIframe && (
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Image 
                  src="/rgb.svg" 
                  alt="HEX to HSL Converter Logo" 
                  width={40}
                  height={40}
                  priority
                  className="animate-pulse"
                />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                HEX to HSL Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Easily convert hexadecimal color codes to HSL color values
            </p>
          </div>
        )}

        {/* Main converter section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 overflow-hidden">
          {/* Color preview and share button */}
          <div className="relative">
            <div className="h-48 w-full transition-colors duration-200 relative">
              {/* Checkerboard background */}
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
              
              {/* Color overlay */}
              <div
                className="absolute inset-0 transition-colors duration-200"
                style={{
                  backgroundColor: hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : 'transparent'
                }}
              ></div>
            </div>
            
            {/* Color info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30 backdrop-blur-sm text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xl">{hexColor}</div>
                  <div className="text-sm opacity-90">
                    {hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : 'Invalid color'}
                  </div>
                </div>
                {hsl && (
                  <button 
                    onClick={shareColor} 
                    className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all"
                    title="Share this color"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                  </button>
                )}
                
                {/* Share options popup */}
                {showShareOptions && (
                  <div className="absolute right-12 bottom-0 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-lg shadow-lg z-10 text-sm whitespace-nowrap">
                    Share link copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* HEX input */}
            <HexInput value={hexColor} onChange={handleHexChange} />
            
            {/* Color values component */}
            {hsl && (
              <ColorValues hsl={hsl} hexColor={hexColor} onHslChange={handleHslChange} />
            )}
          </div>
        </div>
        
        {/* Embed code generator - only show in standalone page */}
        {!isInIframe && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Embed This Tool</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Copy the code below to embed this color converter on your website:
            </p>
            <div className="relative">
              <textarea 
                className="w-full h-24 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm border-0 focus:ring-2 focus:ring-blue-500"
                readOnly
                value={`<iframe src="https://rgbatohex.com/tools/hex-to-hsl-converter?embed=true&defaultColor=${encodeURIComponent(hexColor)}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to HSL Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hex-to-hsl-converter?embed=true&defaultColor=${encodeURIComponent(hexColor)}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to HSL Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                {copied ? 'Copied' : 'Copy Code'}
              </button>
            </div>
          </div>
        )}
        
        {/* Help section */}
        {!isInIframe && (
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-sm">
            <h4 className="font-semibold mb-2">Tips:</h4>
            <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>HEX colors can be in 3-digit (#RGB) or 6-digit (#RRGGBB) format</li>
              <li>HSL is an intuitive color representation, making it easier to adjust hue, saturation, and lightness</li>
              <li>Hue (H) represents the position on the color wheel (0-360°)</li>
              <li>Saturation (S) represents the purity or intensity of the color (0-100%)</li>
              <li>Lightness (L) represents the brightness level of the color (0-100%)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 