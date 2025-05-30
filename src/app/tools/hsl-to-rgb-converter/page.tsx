'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { hslToRgb, HSL, RGB, rgbaToHex, hslToHex } from '@/utils/colorConverter';

// Add global styles for smooth dark/light mode transitions
const GlobalStyles = () => {
  return (
    <style jsx global>{`
      * {
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
      }
    `}</style>
  );
};

// Inner component containing the actual logic and UI
const HslToRgbConverterTool = () => {
  // State for HSL inputs
  const [hsl, setHsl] = useState<HSL>({ h: 180, s: 50, l: 50 });
  const [rgb, setRgb] = useState<RGB>({ r: 64, g: 191, b: 191 });
  const [hex, setHex] = useState<string>('#40BFBF');
  const [mounted, setMounted] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [copyType, setCopyType] = useState('');
  
  // State for expanded sections
  const [showColorSchemes, setShowColorSchemes] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if running in iframe based on URL param ?embed=true
    const params = new URLSearchParams(window.location.search);
    setIsInIframe(params.get('embed') === 'true');
    
    // Parse URL parameters for initial HSL values if available
    const h = params.get('h');
    const s = params.get('s');
    const l = params.get('l');
    
    if (h && s && l) {
      const newHsl = {
        h: Math.min(360, Math.max(0, parseInt(h) || 180)),
        s: Math.min(100, Math.max(0, parseInt(s) || 50)),
        l: Math.min(100, Math.max(0, parseInt(l) || 50))
      };
      setHsl(newHsl);
    }
  }, []);

  // Recalculate RGB whenever HSL changes
  useEffect(() => {
    if (mounted) {
      const newRgb = hslToRgb(hsl);
      setRgb(newRgb);
      setHex(hslToHex(hsl));
      setIsCopied(false);
    }
  }, [hsl, mounted]);

  const handleChange = (key: keyof HSL) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setHsl(prevHsl => ({ ...prevHsl, [key]: value }));
  };

  // Calculate complementary color
  const getComplementaryColor = () => {
    // Complementary color is 180° away on the color wheel
    const complementaryH = (hsl.h + 180) % 360;
    const complementaryRgb = hslToRgb({ h: complementaryH, s: hsl.s, l: hsl.l });
    return {
      h: complementaryH,
      s: hsl.s,
      l: hsl.l,
      rgb: complementaryRgb,
      hex: rgbaToHex({ ...complementaryRgb, a: 1 })
    };
  };

  // Generate monochromatic color scheme
  const getMonochromaticColors = () => {
    const variants = [0.3, 0.6, 1, 1.4, 1.7].map(factor => {
      const newL = Math.min(Math.max(hsl.l * factor, 0), 100);
      const variantRgb = hslToRgb({ h: hsl.h, s: hsl.s, l: newL });
      return {
        h: hsl.h,
        s: hsl.s,
        l: newL,
        rgb: variantRgb,
        hex: rgbaToHex({ ...variantRgb, a: 1 })
      };
    });
    return variants;
  };

  // Generate triadic color scheme
  const getTriadicColors = () => {
    const triadicColors = [0, 120, 240].map(offset => {
      const triadicH = (hsl.h + offset) % 360;
      const triadicRgb = hslToRgb({ h: triadicH, s: hsl.s, l: hsl.l });
      return {
        h: triadicH,
        s: hsl.s,
        l: hsl.l,
        rgb: triadicRgb,
        hex: rgbaToHex({ ...triadicRgb, a: 1 })
      };
    });
    return triadicColors;
  };

  // Calculate accessibility ratings
  const getAccessibilityRating = () => {
    const getLuminance = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map(c => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const getContrastRatio = (l1: number, l2: number) => {
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      return (lighter + 0.05) / (darker + 0.05);
    };

    const bgLuminance = getLuminance(rgb.r, rgb.g, rgb.b);
    const whiteLuminance = getLuminance(255, 255, 255);
    const blackLuminance = getLuminance(0, 0, 0);

    const whiteContrast = getContrastRatio(bgLuminance, whiteLuminance);
    const blackContrast = getContrastRatio(bgLuminance, blackLuminance);

    return {
      whiteContrast: whiteContrast.toFixed(2),
      blackContrast: blackContrast.toFixed(2),
      whiteAA: whiteContrast >= 4.5,
      blackAA: blackContrast >= 4.5
    };
  };

  // Copy handlers
  const handleCopy = async (value: string, type: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setCopyType(type);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const accessibility = getAccessibilityRating();
  const complementaryColor = getComplementaryColor();
  const monochromaticColors = getMonochromaticColors();
  const triadicColors = getTriadicColors();

  // Avoid rendering potentially mismatched server/client content before mount
  if (!mounted) {
    return <div className="min-h-screen bg-gray-100 dark:bg-gray-900"></div>;
  }

  const ConverterUI = (
    <>
      {/* Color Preview Area */}
      <div className="mb-8">
        <div className="relative h-40 sm:h-48 md:h-52 w-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
          {/* Checkerboard background for transparency */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-8">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  (Math.floor(i / 12) + (i % 12)) % 2 === 0
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : 'bg-white dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          {/* Color preview background */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          ></div>
          
          {/* Color info overlay - bottom display */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xl text-white">{hex}</div>
                <div className="text-sm text-white/90">rgb({rgb.r}, {rgb.g}, {rgb.b})</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCopy(hex, 'hex')}
                  className={`p-2 rounded-full transition-all duration-300 ${isCopied && copyType === 'hex' 
                    ? 'bg-green-500 text-white scale-110' 
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'}`}
                  title="Copy HEX value"
                >
                  {isCopied && copyType === 'hex' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => handleCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}
                  className={`p-2 rounded-full transition-all duration-300 ${isCopied && copyType === 'rgb' 
                    ? 'bg-green-500 text-white scale-110' 
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'}`}
                  title="Copy RGB value"
                >
                  {isCopied && copyType === 'rgb' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">HSL Parameters</h2>
        <div className="space-y-6">
          {/* Hue Input */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="h" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Hue (H): {hsl.h}°
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="h"
                  name="h"
                  min="0"
                  max="360"
                  value={hsl.h}
                  onChange={handleChange('h')}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Hue Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: 'linear-gradient(to right, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)'
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="360"
                value={hsl.h}
                onChange={handleChange('h')}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Hue Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${(hsl.h / 360) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Saturation Input */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="s" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Saturation (S): {hsl.s}%
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="s"
                  name="s"
                  min="0"
                  max="100"
                  value={hsl.s}
                  onChange={handleChange('s')}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Saturation Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: `linear-gradient(to right, hsl(${hsl.h}, 0%, 50%), hsl(${hsl.h}, 100%, 50%))`
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={hsl.s}
                onChange={handleChange('s')}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Saturation Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${hsl.s}%` }}
              ></div>
            </div>
          </div>

          {/* Lightness Input */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="l" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Lightness (L): {hsl.l}%
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="l"
                  name="l"
                  min="0"
                  max="100"
                  value={hsl.l}
                  onChange={handleChange('l')}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Lightness Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: `linear-gradient(to right, #000000, hsl(${hsl.h}, ${hsl.s}%, 50%), #ffffff)`
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={hsl.l}
                onChange={handleChange('l')}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Lightness Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${hsl.l}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Output Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">RGB Result</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md flex items-center justify-between transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="text-rose-600 dark:text-rose-400 font-medium">R</span>
            <span className="font-mono text-xl">{rgb.r}</span>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md flex items-center justify-between transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="text-green-600 dark:text-green-400 font-medium">G</span>
            <span className="font-mono text-xl">{rgb.g}</span>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md flex items-center justify-between transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="text-blue-600 dark:text-blue-400 font-medium">B</span>
            <span className="font-mono text-xl">{rgb.b}</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md flex items-center justify-between transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="text-purple-600 dark:text-purple-400 font-medium">HEX</span>
            <span className="font-mono text-xl">{hex}</span>
          </div>
        </div>
      </div>

      {/* Color Schemes Section (Collapsible) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-500 mb-6 hover:shadow-lg">
        <button 
          className="w-full p-5 text-left focus:outline-none group"
          onClick={() => setShowColorSchemes(!showColorSchemes)}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Color Schemes</h2>
            <svg 
              className={`w-5 h-5 transform transition-transform duration-500 ease-in-out group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${showColorSchemes ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </button>
        
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showColorSchemes ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-5 pt-0 space-y-6">
            {/* Complementary Colors */}
            <div>
              <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Complementary Color</h3>
              <div className="flex space-x-3">
                <div className="flex-1">
                  <div 
                    className="h-12 rounded-md mb-1 shadow-inner transition-all duration-300 hover:shadow-md transform hover:scale-105"
                    style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
                  ></div>
                  <div className="text-center text-xs font-mono text-gray-600 dark:text-gray-400">{hex}</div>
                </div>
                <div className="flex-1">
                  <div 
                    className="h-12 rounded-md mb-1 shadow-inner transition-all duration-300 hover:shadow-md transform hover:scale-105"
                    style={{ backgroundColor: `rgb(${complementaryColor.rgb.r}, ${complementaryColor.rgb.g}, ${complementaryColor.rgb.b})` }}
                  ></div>
                  <div className="text-center text-xs font-mono text-gray-600 dark:text-gray-400">{complementaryColor.hex}</div>
                </div>
              </div>
            </div>
            
            {/* Monochromatic Colors */}
            <div>
              <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Monochromatic Scheme</h3>
              <div className="grid grid-cols-5 gap-1">
                {monochromaticColors.map((color, index) => (
                  <div key={index} className="flex-1">
                    <div 
                      className="h-12 rounded-md mb-1 shadow-inner transition-all duration-300 hover:shadow-md transform hover:scale-105"
                      style={{ backgroundColor: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})` }}
                    ></div>
                    <div className="text-center text-xs font-mono text-gray-600 dark:text-gray-400 truncate">{color.hex}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Triadic Colors */}
            <div>
              <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Triadic Scheme</h3>
              <div className="grid grid-cols-3 gap-2">
                {triadicColors.map((color, index) => (
                  <div key={index} className="flex-1">
                    <div 
                      className="h-12 rounded-md mb-1 shadow-inner transition-all duration-300 hover:shadow-md transform hover:scale-105"
                      style={{ backgroundColor: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})` }}
                    ></div>
                    <div className="text-center text-xs font-mono text-gray-600 dark:text-gray-400">{color.hex}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Accessibility Information */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Accessibility Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600 dark:text-gray-400">White text contrast:</span>
                    <span className={`${accessibility.whiteAA ? "text-green-500" : "text-orange-500"} font-medium`}>
                      {accessibility.whiteContrast}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${accessibility.whiteAA ? "bg-green-500" : "bg-orange-500"} transition-all duration-500`}
                      style={{ width: `${Math.min(parseFloat(accessibility.whiteContrast) / 21 * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs mt-1">
                    <span className={accessibility.whiteAA ? "text-green-500 font-medium" : "text-orange-500 font-medium"}>
                      {accessibility.whiteAA ? 'WCAG AA Pass ✓' : 'WCAG AA Fail ✗'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Black text contrast:</span>
                    <span className={`${accessibility.blackAA ? "text-green-500" : "text-orange-500"} font-medium`}>
                      {accessibility.blackContrast}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${accessibility.blackAA ? "bg-green-500" : "bg-orange-500"} transition-all duration-500`}
                      style={{ width: `${Math.min(parseFloat(accessibility.blackContrast) / 21 * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs mt-1">
                    <span className={accessibility.blackAA ? "text-green-500 font-medium" : "text-orange-500 font-medium"}>
                      {accessibility.blackAA ? 'WCAG AA Pass ✓' : 'WCAG AA Fail ✗'}
                    </span>
                  </div>
                </div>
                
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Note: WCAG AA standard requires contrast ratio of at least 4.5:1 for normal text, 3:1 for large text
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Conditionally apply wrapper styling
  return isInIframe ? (
    <div data-embed="true" className="p-4 bg-transparent">
      {ConverterUI}
    </div>
  ) : (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto transition-all duration-500">
      <GlobalStyles />
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-5 sm:p-6 mb-6 transition-all duration-500 dark:border dark:border-gray-700">
        <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-6">HSL to RGB Converter</h1>
        {ConverterUI}
      </div>
      
      {/* Info card */}
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-5 text-sm text-blue-800 dark:text-blue-200 mt-4 border border-blue-100 dark:border-blue-800/50 transition-all duration-500">
        <h3 className="font-semibold mb-2">HSL Color Space</h3>
        <p>HSL (Hue, Saturation, Lightness) is an intuitive color model designed to better align with how humans perceive color:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Hue (H)</strong>: Represents the color type as a position on the color wheel, measured in degrees (0-360°)</li>
          <li><strong>Saturation (S)</strong>: Represents the intensity of the color, from 0% (gray) to 100% (full color)</li>
          <li><strong>Lightness (L)</strong>: Represents the brightness, from 0% (black) to 100% (white), with 50% being normal brightness</li>
        </ul>
      </div>
    </div>
  );
};

// Main exported component wraps the tool in Suspense
const HslToRgbConverterPage = () => {
  return (
    <Suspense fallback={<div className="p-4 text-center text-gray-700 dark:text-gray-300">Loading Converter...</div>}> 
      <HslToRgbConverterTool />
    </Suspense>
  );
};

export default HslToRgbConverterPage;