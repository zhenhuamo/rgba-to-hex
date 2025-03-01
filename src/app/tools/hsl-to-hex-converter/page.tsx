'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { hslToHex, HSL } from '@/utils/colorConverter';

// HSL Input Component
const HSLInput = ({ 
  hsl, 
  onChange 
}: { 
  hsl: HSL, 
  onChange: (key: keyof HSL, value: number) => void 
}) => {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">HSL Values</h3>
      
      {/* Hue Slider */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-red-500 via-blue-500 to-red-500"></span>
            Hue
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="number"
              min="0"
              max="360"
              value={hsl.h}
              onChange={(e) => onChange('h', Number(e.target.value))}
              className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
            />
            <span className="pr-2 text-gray-500 dark:text-gray-400 text-sm">°</span>
          </div>
        </div>
        <div className="relative mt-1">
          <input
            type="range"
            min="0"
            max="360"
            value={hsl.h}
            onChange={(e) => onChange('h', Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 to-red-500 rounded-lg appearance-none cursor-pointer"
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
      
      {/* Saturation Slider */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full" style={{
              background: `linear-gradient(to right, #ccc, hsl(${hsl.h}, 100%, 50%))`
            }}></span>
            Saturation
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="number"
              min="0"
              max="100"
              value={hsl.s}
              onChange={(e) => onChange('s', Number(e.target.value))}
              className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
            />
            <span className="pr-2 text-gray-500 dark:text-gray-400 text-sm">%</span>
          </div>
        </div>
        <div className="relative mt-1">
          <div 
            className="absolute inset-0 rounded-lg h-3" 
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
            className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
            style={{
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
        </div>
      </div>
      
      {/* Lightness Slider */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full" style={{
              background: `linear-gradient(to right, #000, #ccc, #fff)`
            }}></span>
            Lightness
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="number"
              min="0"
              max="100"
              value={hsl.l}
              onChange={(e) => onChange('l', Number(e.target.value))}
              className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
            />
            <span className="pr-2 text-gray-500 dark:text-gray-400 text-sm">%</span>
          </div>
        </div>
        <div className="relative mt-1">
          <div 
            className="absolute inset-0 rounded-lg h-3" 
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

// HEX Value Display Component
const HexDisplay = ({ hex, hsl }: { hex: string, hsl: HSL }) => {
  const [copied, setCopied] = useState(false);

  const copyHexValue = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Color Codes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 dark:text-gray-300 font-medium">HEX</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Web, CSS</span>
          </div>
          <div className="flex">
            <input
              type="text"
              value={hex}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
            />
            <button
              onClick={copyHexValue}
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
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 dark:text-gray-300 font-medium">HSL</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">CSS</span>
          </div>
          <input
            type="text"
            value={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}
            readOnly
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg font-mono text-base focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

// Color Schemes Component
const ColorSchemes = ({ hsl }: { hsl: HSL }) => {
  const getComplementaryColor = (h: number): HSL => {
    return { h: (h + 180) % 360, s: hsl.s, l: hsl.l };
  };

  const getTriadicColors = (h: number): [HSL, HSL] => {
    return [
      { h: (h + 120) % 360, s: hsl.s, l: hsl.l },
      { h: (h + 240) % 360, s: hsl.s, l: hsl.l }
    ];
  };

  const getMonochromaticColors = (l: number): [HSL, HSL, HSL, HSL] => {
    const lightnessValues = [
      Math.max(l - 30, 10),
      Math.max(l - 15, 10),
      Math.min(l + 15, 90),
      Math.min(l + 30, 90)
    ];
    
    return lightnessValues.map(lightness => ({ h: hsl.h, s: hsl.s, l: lightness })) as [HSL, HSL, HSL, HSL];
  };

  const complementary = getComplementaryColor(hsl.h);
  const [triadic1, triadic2] = getTriadicColors(hsl.h);
  const monochromaticColors = getMonochromaticColors(hsl.l);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Color Schemes</h3>
      
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Complementary</h4>
          <div className="flex space-x-1 h-12">
            <div className="flex-1 rounded-l-lg" style={{ backgroundColor: hslToHex(hsl) }}></div>
            <div className="flex-1 rounded-r-lg" style={{ backgroundColor: hslToHex(complementary) }}></div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Triadic</h4>
          <div className="flex space-x-1 h-12">
            <div className="flex-1 rounded-l-lg" style={{ backgroundColor: hslToHex(hsl) }}></div>
            <div className="flex-1" style={{ backgroundColor: hslToHex(triadic1) }}></div>
            <div className="flex-1 rounded-r-lg" style={{ backgroundColor: hslToHex(triadic2) }}></div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Monochromatic</h4>
          <div className="flex space-x-1 h-12">
            {monochromaticColors.map((color, index) => (
              <div 
                key={index} 
                className={`flex-1 ${index === 0 ? 'rounded-l-lg' : ''} ${index === monochromaticColors.length - 1 ? 'rounded-r-lg' : ''}`}
                style={{ backgroundColor: hslToHex(color) }}
              ></div>
            ))}
          </div>
        </div>
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
  const [showShareOptions, setShowShareOptions] = useState(false);

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

  const getShareUrl = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?h=${hsl.h}&s=${hsl.s}&l=${hsl.l}`;
  };

  const shareColor = async () => {
    const url = getShareUrl();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'HSL Color Share',
          text: `Check out my HSL color: hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
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
                  alt="HSL to HEX Converter Logo" 
                  width={40}
                  height={40}
                  priority
                  className="animate-pulse"
                />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                HSL to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Easily convert HSL color values to hexadecimal color codes
            </p>
          </div>
        )}

        {/* Main converter section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 overflow-hidden">
          {/* Color preview and share button */}
          <div className="relative">
            <div 
              className="h-48 w-full transition-colors duration-200"
              style={{ backgroundColor: hexColor }}
            />
            
            {/* Color info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30 backdrop-blur-sm text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xl">{hexColor}</div>
                  <div className="text-sm opacity-90">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</div>
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
            {/* HSL input sliders */}
            <HSLInput hsl={hsl} onChange={handleHslChange} />
            
            {/* HEX value display */}
            <HexDisplay hex={hexColor} hsl={hsl} />
            
            {/* Color schemes */}
            <ColorSchemes hsl={hsl} />
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
                value={`<iframe src="https://rgbatohex.com/tools/hsl-to-hex-converter?embed=true&h=${hsl.h}&s=${hsl.s}&l=${hsl.l}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="HSL to HEX Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hsl-to-hex-converter?embed=true&h=${hsl.h}&s=${hsl.s}&l=${hsl.l}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="HSL to HEX Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
              >
                Copy Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}