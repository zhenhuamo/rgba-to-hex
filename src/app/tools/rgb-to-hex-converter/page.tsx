'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
// import Image from 'next/image'; // Import Image if using the logo

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

// --- Conversion Function ---
function componentToHex(c: number): string {
  // Clamp value between 0 and 255 and convert to integer
  const intValue = Math.max(0, Math.min(255, Math.round(c)));
  const hex = intValue.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex6Digit(r: number, g: number, b: number): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// --- Helper to validate RGB value ---
const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, Math.round(value)));
};

// --- Main Converter Component ---
function RgbToHexConverterTool() {
  const searchParams = useSearchParams();
  const isEmbedMode = searchParams.get('embed') === 'true';

  // Initialize state from URL params or defaults
  const initialR = clamp(parseInt(searchParams.get('r') || '255', 10), 0, 255);
  const initialG = clamp(parseInt(searchParams.get('g') || '100', 10), 0, 255);
  const initialB = clamp(parseInt(searchParams.get('b') || '50', 10), 0, 255);

  const [r, setR] = useState<number>(initialR);
  const [g, setG] = useState<number>(initialG);
  const [b, setB] = useState<number>(initialB);
  const [hex, setHex] = useState<string>(rgbToHex6Digit(initialR, initialG, initialB));
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [copyType, setCopyType] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);
  
  // State for expanded sections
  const [showColorSchemes, setShowColorSchemes] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle RGB input changes
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
    const num = parseInt(value, 10);
    setter(isNaN(num) ? 0 : clamp(num, 0, 255));
  };

  // Perform conversion when RGB values change
  useEffect(() => {
    if (mounted) {
      const result = rgbToHex6Digit(r, g, b);
      setHex(result);
      setIsCopied(false);
    }
  }, [r, g, b, mounted]);

  // Calculate complementary color
  const getComplementaryColor = () => {
    // Complementary color is the inverse of RGB
    const complementaryR = 255 - r;
    const complementaryG = 255 - g;
    const complementaryB = 255 - b;
    
    return {
      r: complementaryR,
      g: complementaryG,
      b: complementaryB,
      hex: rgbToHex6Digit(complementaryR, complementaryG, complementaryB)
    };
  };

  // Generate monochromatic color scheme
  const getMonochromaticColors = () => {
    // Generate variants with different lightness
    const variants = [0.3, 0.6, 1, 1.4, 1.7].map(factor => {
      // Simple approximation for monochromatic colors
      const newR = Math.round(r * factor > 255 ? 255 : r * factor);
      const newG = Math.round(g * factor > 255 ? 255 : g * factor);
      const newB = Math.round(b * factor > 255 ? 255 : b * factor);
      
      return {
        r: newR,
        g: newG,
        b: newB,
        hex: rgbToHex6Digit(newR, newG, newB)
      };
    });
    
    return variants;
  };

  // Generate triadic color scheme (120° rotations in color wheel)
  const getTriadicColors = () => {
    // Convert RGB to HSV for easier rotation
    const [rNorm, gNorm, bNorm] = [r / 255, g / 255, b / 255];
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    const delta = max - min;
    
    let h = 0;
    if (delta !== 0) {
      if (max === rNorm) {
        h = ((gNorm - bNorm) / delta) % 6;
      } else if (max === gNorm) {
        h = (bNorm - rNorm) / delta + 2;
      } else {
        h = (rNorm - gNorm) / delta + 4;
      }
    }
    
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    
    const s = max === 0 ? 0 : delta / max;
    const v = max;
    
    // Create triadic colors (120° rotations)
    const triadicHues = [h, (h + 120) % 360, (h + 240) % 360];
    
    // Convert back to RGB (simplified conversion)
    return triadicHues.map(hue => {
      // Very simplified HSV to RGB conversion
      const c = v * s;
      const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
      const m = v - c;
      
      let rPrime, gPrime, bPrime;
      if (hue >= 0 && hue < 60) {
        [rPrime, gPrime, bPrime] = [c, x, 0];
      } else if (hue >= 60 && hue < 120) {
        [rPrime, gPrime, bPrime] = [x, c, 0];
      } else if (hue >= 120 && hue < 180) {
        [rPrime, gPrime, bPrime] = [0, c, x];
      } else if (hue >= 180 && hue < 240) {
        [rPrime, gPrime, bPrime] = [0, x, c];
      } else if (hue >= 240 && hue < 300) {
        [rPrime, gPrime, bPrime] = [x, 0, c];
      } else {
        [rPrime, gPrime, bPrime] = [c, 0, x];
      }
      
      const newR = Math.round((rPrime + m) * 255);
      const newG = Math.round((gPrime + m) * 255);
      const newB = Math.round((bPrime + m) * 255);
      
      return {
        r: newR,
        g: newG,
        b: newB,
        hex: rgbToHex6Digit(newR, newG, newB)
      };
    });
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

    const bgLuminance = getLuminance(r, g, b);
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
      console.error('Failed to copy value: ', err);
    }
  };

  const accessibility = getAccessibilityRating();
  const complementaryColor = getComplementaryColor();
  const monochromaticColors = getMonochromaticColors();
  const triadicColors = getTriadicColors();

  // Don't render until mounted on client
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
            style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
          ></div>
          
          {/* Color info overlay - bottom display */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xl text-white">{hex}</div>
                <div className="text-sm text-white/90">rgb({r}, {g}, {b})</div>
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
                  onClick={() => handleCopy(`rgb(${r}, ${g}, ${b})`, 'rgb')}
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
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">RGB Parameters</h2>
        <div className="space-y-6">
          {/* R Input */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="r" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Red (R): {r}
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="r"
                  name="r"
                  min="0"
                  max="255"
                  value={r}
                  onChange={(e) => handleInputChange(setR, e.target.value)}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Red Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: 'linear-gradient(to right, #000000, #FF0000)'
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="255"
                value={r}
                onChange={(e) => setR(parseInt(e.target.value, 10))}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Red Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${(r / 255) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* G Input */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="g" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Green (G): {g}
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="g"
                  name="g"
                  min="0"
                  max="255"
                  value={g}
                  onChange={(e) => handleInputChange(setG, e.target.value)}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Green Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: 'linear-gradient(to right, #000000, #00FF00)'
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="255"
                value={g}
                onChange={(e) => setG(parseInt(e.target.value, 10))}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Green Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${(g / 255) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* B Input */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="b" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Blue (B): {b}
              </label>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <input
                  type="number"
                  id="b"
                  name="b"
                  min="0"
                  max="255"
                  value={b}
                  onChange={(e) => handleInputChange(setB, e.target.value)}
                  className="w-16 p-1 text-right border-0 bg-transparent focus:ring-0 focus:outline-none"
                  aria-label="Blue Input"
                />
              </div>
            </div>
            <div className="relative h-6 mb-1">
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: 'linear-gradient(to right, #000000, #0000FF)'
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="255"
                value={b}
                onChange={(e) => setB(parseInt(e.target.value, 10))}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Blue Slider"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white rounded-full shadow-md border border-gray-300 transform -translate-x-1/2 pointer-events-none transition-all duration-300"
                style={{ left: `${(b / 255) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Output Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">HEX Result</h2>
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md flex items-center justify-between transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="text-purple-600 dark:text-purple-400 font-medium">HEX</span>
          <span className="font-mono text-xl">{hex}</span>
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
                    style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
                  ></div>
                  <div className="text-center text-xs font-mono text-gray-600 dark:text-gray-400">{hex}</div>
                </div>
                <div className="flex-1">
                  <div 
                    className="h-12 rounded-md mb-1 shadow-inner transition-all duration-300 hover:shadow-md transform hover:scale-105"
                    style={{ backgroundColor: `rgb(${complementaryColor.r}, ${complementaryColor.g}, ${complementaryColor.b})` }}
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
                      style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
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
                      style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
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
  return isEmbedMode ? (
    <div data-embed="true" className="p-4 bg-transparent">
      {ConverterUI}
    </div>
  ) : (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto transition-all duration-500">
      <GlobalStyles />
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-5 sm:p-6 mb-6 transition-all duration-500 dark:border dark:border-gray-700">
        <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 mb-6">RGB to HEX Converter</h1>
        {ConverterUI}
      </div>
      
      {/* Info card */}
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-5 text-sm text-blue-800 dark:text-blue-200 mt-4 border border-blue-100 dark:border-blue-800/50 transition-all duration-500">
        <h3 className="font-semibold mb-2">RGB Color Model</h3>
        <p>RGB (Red, Green, Blue) is an additive color model used in digital displays and screens:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Red (R)</strong>: Intensity of red light, from 0 to 255</li>
          <li><strong>Green (G)</strong>: Intensity of green light, from 0 to 255</li>
          <li><strong>Blue (B)</strong>: Intensity of blue light, from 0 to 255</li>
        </ul>
      </div>
    </div>
  );
}

// --- Page component with Suspense for useSearchParams --- 
export default function RgbToHexConverterPage() {
  return (
    <Suspense fallback={<div className="p-4 text-center text-gray-700 dark:text-gray-300">Loading Converter...</div>}> 
      <RgbToHexConverterTool />
    </Suspense>
  );
} 