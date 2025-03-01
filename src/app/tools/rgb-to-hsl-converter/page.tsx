'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { rgbToHsl } from '@/utils/colorConverter';

// Enhanced RGB input component
const RGBInput = ({ 
  rgb, 
  onChange 
}: { 
  rgb: { r: number, g: number, b: number }, 
  onChange: (key: 'r' | 'g' | 'b', value: number) => void 
}) => {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">RGB Values</h3>
      
      {/* Red slider */}
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
              onChange={(e) => onChange('r', Number(e.target.value))}
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
            onChange={(e) => onChange('r', Number(e.target.value))}
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
      
      {/* Green slider */}
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
              onChange={(e) => onChange('g', Number(e.target.value))}
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
            onChange={(e) => onChange('g', Number(e.target.value))}
            className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
            style={{
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
        </div>
      </div>
      
      {/* Blue slider */}
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
              onChange={(e) => onChange('b', Number(e.target.value))}
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
            onChange={(e) => onChange('b', Number(e.target.value))}
            className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
            style={{
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Enhanced HSL display component
const HSLDisplay = ({ hsl }: { hsl: { h: number, s: number, l: number }, rgb: { r: number, g: number, b: number } }) => {
  const [copied, setCopied] = useState(false);
  
  const copyHslValue = async () => {
    try {
      await navigator.clipboard.writeText(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">HSL Value</h3>
      
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Hue</div>
            <div className="font-mono p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
              {hsl.h}°
            </div>
            <div className="mt-2 h-1.5 rounded-full" style={{ 
              background: `linear-gradient(to right, 
                hsl(0, 100%, 50%), 
                hsl(60, 100%, 50%), 
                hsl(120, 100%, 50%), 
                hsl(180, 100%, 50%), 
                hsl(240, 100%, 50%), 
                hsl(300, 100%, 50%), 
                hsl(360, 100%, 50%))` 
            }}></div>
            <div className="w-full flex justify-center mt-1">
              <div className="w-1 h-3 bg-black rounded-full" style={{ marginLeft: `${hsl.h / 3.6}%` }}></div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Saturation</div>
            <div className="font-mono p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
              {hsl.s}%
            </div>
            <div className="mt-2 h-1.5 rounded-full" style={{ 
              background: `linear-gradient(to right, 
                hsl(${hsl.h}, 0%, ${hsl.l}%), 
                hsl(${hsl.h}, 100%, ${hsl.l}%))` 
            }}></div>
            <div className="w-full flex justify-center mt-1">
              <div className="w-1 h-3 bg-black rounded-full" style={{ marginLeft: `${hsl.s}%` }}></div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Lightness</div>
            <div className="font-mono p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
              {hsl.l}%
            </div>
            <div className="mt-2 h-1.5 rounded-full" style={{ 
              background: `linear-gradient(to right, 
                #000000, 
                hsl(${hsl.h}, ${hsl.s}%, 50%), 
                #FFFFFF)` 
            }}></div>
            <div className="w-full flex justify-center mt-1">
              <div className="w-1 h-3 bg-black rounded-full" style={{ marginLeft: `${hsl.l}%` }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 dark:text-gray-300 font-medium">HSL Format</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">CSS</span>
          </div>
          <div className="flex">
            <input
              type="text"
              value={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
            />
            <button
              onClick={copyHslValue}
              className={`px-4 py-2 ${copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-1`}
            >
              {copied ? (
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
    </div>
  );
};

// Enhanced color properties component
const ColorInfo = ({ hsl }: { hsl: { h: number, s: number, l: number }, rgb: { r: number, g: number, b: number } }) => {
  // Get hue category function
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
  
  // Get complementary color
  const getComplementaryColor = (h: number): number => {
    return (h + 180) % 360;
  };
  
  // Get analogous colors
  const getAnalogousColors = (h: number): [number, number] => {
    return [(h + 30) % 360, (h + 330) % 360];
  };
  
  // Generate colors for display
  const complementaryHue = getComplementaryColor(hsl.h);
  const [analogous1, analogous2] = getAnalogousColors(hsl.h);
  
  // Convert HSL to hex for display (simplified)
  const hslToRgbString = (h: number, s: number, l: number): string => {
    // Use the same lightness and saturation as the original color
    return `hsl(${h}, ${s}%, ${l}%)`;
  };
  
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Properties</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Color Family</div>
            <div className="font-medium text-gray-800 dark:text-gray-200">{getHueCategory(hsl.h)}</div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Brightness</div>
            <div className="font-medium text-gray-800 dark:text-gray-200">
              {hsl.l < 25 ? 'Dark' : hsl.l > 75 ? 'Light' : 'Medium'}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Intensity</div>
            <div className="font-medium text-gray-800 dark:text-gray-200">
              {hsl.s < 25 ? 'Dull' : hsl.s > 75 ? 'Vibrant' : 'Moderate'}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Color Type</div>
            <div className="font-medium text-gray-800 dark:text-gray-200">
              {hsl.s < 10 ? 'Grayscale' : 'Chromatic'}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Harmonies</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Complementary</h4>
            <div className="flex space-x-1 h-12">
              <div className="flex-1 rounded-l-lg" style={{ backgroundColor: hslToRgbString(hsl.h, hsl.s, hsl.l) }}></div>
              <div className="flex-1 rounded-r-lg" style={{ backgroundColor: hslToRgbString(complementaryHue, hsl.s, hsl.l) }}></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Analogous</h4>
            <div className="flex space-x-1 h-12">
              <div className="flex-1 rounded-l-lg" style={{ backgroundColor: hslToRgbString(analogous1, hsl.s, hsl.l) }}></div>
              <div className="flex-1" style={{ backgroundColor: hslToRgbString(hsl.h, hsl.s, hsl.l) }}></div>
              <div className="flex-1 rounded-r-lg" style={{ backgroundColor: hslToRgbString(analogous2, hsl.s, hsl.l) }}></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Monochromatic</h4>
            <div className="flex space-x-1 h-12">
              <div className="flex-1 rounded-l-lg" style={{ backgroundColor: hslToRgbString(hsl.h, hsl.s, 20) }}></div>
              <div className="flex-1" style={{ backgroundColor: hslToRgbString(hsl.h, hsl.s, 40) }}></div>
              <div className="flex-1" style={{ backgroundColor: hslToRgbString(hsl.h, hsl.s, 60) }}></div>
              <div className="flex-1" style={{ backgroundColor: hslToRgbString(hsl.h, hsl.s, 80) }}></div>
              <div className="flex-1 rounded-r-lg" style={{ backgroundColor: hslToRgbString(hsl.h, hsl.s, 90) }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Share component
const ShareAndSave = ({ rgb }: { rgb: { r: number, g: number, b: number } }) => {
  const [copied, setCopied] = useState(false);
  
  const getShareUrl = () => {
    return `${window.location.origin}${window.location.pathname}?r=${rgb.r}&g=${rgb.g}&b=${rgb.b}`;
  };
  
  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Share & Save</h3>
      
      <div className="flex flex-col md:flex-row gap-4">
        <button 
          onClick={copyShareLink}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
              <span>Copy Share Link</span>
            </>
          )}
        </button>
        
        <button 
          onClick={() => {
            if (typeof navigator.share === 'function') {
              navigator.share({
                title: 'RGB Color',
                text: `Check out this RGB color: R:${rgb.r}, G:${rgb.g}, B:${rgb.b}`,
                url: getShareUrl()
              });
            }
          }}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors ${typeof navigator.share === 'function' ? '' : 'hidden'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default function RgbToHslConverter() {
  // Set better initial color for demonstration
  const [rgb, setRgb] = useState({ r: 75, g: 192, b: 192 });
  const [hsl, setHsl] = useState({ h: 180, s: 47, l: 52 });
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  
  // Initialize state on mount
  useEffect(() => {
    setMounted(true);
    setIsInIframe(window.self !== window.top);
    
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const r = parseInt(params.get('r') || '75');
    const g = parseInt(params.get('g') || '192');
    const b = parseInt(params.get('b') || '192');
    
    if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
      // Ensure values are within valid range
      const validR = Math.min(255, Math.max(0, r));
      const validG = Math.min(255, Math.max(0, g));
      const validB = Math.min(255, Math.max(0, b));
      
      setRgb({ r: validR, g: validG, b: validB });
    }
  }, []);
  
  // Update HSL when RGB changes
  useEffect(() => {
    const result = rgbToHsl(rgb);
    setHsl(result);
  }, [rgb]);
  
  // Handle RGB input changes
  const handleRgbChange = (key: 'r' | 'g' | 'b', value: number) => {
    // Ensure values are within valid range
    const validValue = Math.min(255, Math.max(0, value));
    setRgb({ ...rgb, [key]: validValue });
  };
  
  // Copy embed code
  const copyEmbedCode = () => {
    const code = `<iframe src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true&r=${rgb.r}&g=${rgb.g}&b=${rgb.b}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to HSL Color Converter"></iframe>`;
    
    navigator.clipboard.writeText(code);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2000);
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
                  alt="RGB to HSL Converter Logo" 
                  width={40}
                  height={40}
                  priority
                  className="animate-pulse"
                />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                RGB to HSL Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Convert RGB color values to HSL format for web development and design
            </p>
          </div>
        )}

        {/* Main converter section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 overflow-hidden">
          {/* Color preview and info */}
          <div className="relative">
            <div 
              className="h-48 w-full transition-colors duration-200"
              style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
            />
            
            {/* Color info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30 backdrop-blur-sm text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xl">rgb({rgb.r}, {rgb.g}, {rgb.b})</div>
                  <div className="text-sm opacity-90">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* RGB input sliders */}
            <RGBInput rgb={rgb} onChange={handleRgbChange} />
            
            {/* HSL value display */}
            <HSLDisplay hsl={hsl} rgb={rgb} />
          </div>
        </div>
        
        {/* Color properties and harmonies */}
        <ColorInfo hsl={hsl} rgb={rgb} />
        
        {/* Share and save */}
        <ShareAndSave rgb={rgb} />
        
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
                value={`<iframe src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true&r=${rgb.r}&g=${rgb.g}&b=${rgb.b}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to HSL Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                onClick={copyEmbedCode}
              >
                {embedCopied ? 'Copied' : 'Copy Code'}
              </button>
            </div>
          </div>
        )}
        
        {/* Usage tips - only show in standalone page */}
        {!isInIframe && (
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-sm">
            <h4 className="font-semibold mb-2">Tips for RGB to HSL Conversion:</h4>
            <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>HSL is more intuitive for humans to work with than RGB</li>
              <li>Hue (H) represents the color type, ranging from 0° to 360°</li>
              <li>Saturation (S) represents the intensity, from 0% (gray) to 100% (full color)</li>
              <li>Lightness (L) controls brightness, from 0% (black) to 100% (white)</li>
              <li>HSL is particularly useful for creating color variations and themes</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}