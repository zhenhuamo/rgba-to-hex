'use client';

import { useState, useEffect } from 'react';

// Global CSS style definitions
const globalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
  }
  
  .animate-pulse-slow {
    animation: pulse 2s infinite ease-in-out;
  }
  
  .hover-scale {
    transition: transform 0.2s ease-out;
  }
  
  .hover-scale:hover {
    transform: scale(1.03);
  }

  .scale-102 {
    transform: scale(1.02);
  }
  
  .shimmer {
    background: linear-gradient(90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.2) 50%, 
      rgba(255,255,255,0) 100%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;
  }
  
  .grid-cols-16 {
    grid-template-columns: repeat(16, minmax(0, 1fr));
  }
  
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  
  .pattern-dots {
    background-image: radial-gradient(currentColor 1px, transparent 1px);
  }
  
  .pattern-size-2 {
    background-size: 20px 20px;
  }
`;

// Conversion function: RGB to XYZ
function rgbToXyz(r: number, g: number, b: number) {
  // Normalize RGB values to 0-1 range
  r = r / 255;
  g = g / 255;
  b = b / 255;

  // Apply gamma correction
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  // Convert to XYZ
  const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
  const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
  const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;

  return { x: x * 100, y: y * 100, z: z * 100 };
}

// Conversion function: XYZ to LAB
function xyzToLab(x: number, y: number, z: number) {
  // Reference white point (D65)
  const xRef = 95.047;
  const yRef = 100.0;
  const zRef = 108.883;

  // Normalize
  x = x / xRef;
  y = y / yRef;
  z = z / zRef;

  // Apply cube root transformation
  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  // Calculate LAB values
  const l = (116 * y) - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);

  return { l, a, b };
}

// Conversion function: RGB to LAB
function rgbToLab(r: number, g: number, b: number) {
  const xyz = rgbToXyz(r, g, b);
  return xyzToLab(xyz.x, xyz.y, xyz.z);
}

// Conversion function: HEX to RGB
function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, '');
  
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  
  return { r, g, b };
}

// Conversion function: HEX to LAB
function hexToLab(hex: string) {
  const rgb = hexToRgb(hex);
  return rgbToLab(rgb.r, rgb.g, rgb.b);
}

// Calculate color difference: CIE76 standard
function calculateDeltaE76(lab1: { l: number, a: number, b: number }, 
                           lab2: { l: number, a: number, b: number }) {
  return Math.sqrt(
    Math.pow(lab2.l - lab1.l, 2) +
    Math.pow(lab2.a - lab1.a, 2) +
    Math.pow(lab2.b - lab1.b, 2)
  );
}

// Calculate color difference: CIE94 standard
function calculateDeltaE94(lab1: { l: number, a: number, b: number }, 
                          lab2: { l: number, a: number, b: number }, 
                          application = 'graphic') {
  // Weighting factors
  let kL = 1;
  let K1 = 0.045;
  let K2 = 0.015;
  
  // Textile application adjustments
  if (application === 'textile') {
    kL = 2;
    K1 = 0.048;
    K2 = 0.014;
  }
  
  const deltaL = lab2.l - lab1.l;
  const deltaA = lab2.a - lab1.a;
  const deltaB = lab2.b - lab1.b;
  
  const C1 = Math.sqrt(Math.pow(lab1.a, 2) + Math.pow(lab1.b, 2));
  const C2 = Math.sqrt(Math.pow(lab2.a, 2) + Math.pow(lab2.b, 2));
  const deltaC = C2 - C1;
  
  let deltaH = Math.sqrt(Math.pow(deltaA, 2) + Math.pow(deltaB, 2) - Math.pow(deltaC, 2));
  if (isNaN(deltaH)) {
    deltaH = 0;
  }
  
  const SL = 1;
  const SC = 1 + K1 * C1;
  const SH = 1 + K2 * C1;
  
  const deltaE94 = Math.sqrt(
    Math.pow(deltaL / (kL * SL), 2) +
    Math.pow(deltaC / SC, 2) +
    Math.pow(deltaH / SH, 2)
  );
  
  return deltaE94;
}

// Calculate color difference: CIEDE2000 standard (most accurate)
function calculateDeltaE2000(lab1: { l: number, a: number, b: number }, 
                             lab2: { l: number, a: number, b: number }) {
  // Constants
  const kL = 1;
  const kC = 1;
  const kH = 1;
  
  // Calculate CIE LCh values
  const C1 = Math.sqrt(Math.pow(lab1.a, 2) + Math.pow(lab1.b, 2));
  const C2 = Math.sqrt(Math.pow(lab2.a, 2) + Math.pow(lab2.b, 2));
  const avgC = (C1 + C2) / 2;
  const G = 0.5 * (1 - Math.sqrt(Math.pow(avgC, 7) / (Math.pow(avgC, 7) + Math.pow(25, 7))));
  
  const a1Prime = lab1.a * (1 + G);
  const a2Prime = lab2.a * (1 + G);
  
  const C1Prime = Math.sqrt(Math.pow(a1Prime, 2) + Math.pow(lab1.b, 2));
  const C2Prime = Math.sqrt(Math.pow(a2Prime, 2) + Math.pow(lab2.b, 2));
  
  let h1Prime = Math.atan2(lab1.b, a1Prime) * 180 / Math.PI;
  if (h1Prime < 0) h1Prime += 360;
  
  let h2Prime = Math.atan2(lab2.b, a2Prime) * 180 / Math.PI;
  if (h2Prime < 0) h2Prime += 360;
  
  const deltaLPrime = lab2.l - lab1.l;
  const deltaCPrime = C2Prime - C1Prime;
  
  let deltahPrime;
  if (C1Prime * C2Prime === 0) {
    deltahPrime = 0;
  } else {
    deltahPrime = h2Prime - h1Prime;
    if (deltahPrime > 180) deltahPrime -= 360;
    else if (deltahPrime < -180) deltahPrime += 360;
  }
  
  const deltaHPrime = 2 * Math.sqrt(C1Prime * C2Prime) * Math.sin(deltahPrime * Math.PI / 360);
  
  const avgLPrime = (lab1.l + lab2.l) / 2;
  const avgCPrime = (C1Prime + C2Prime) / 2;
  
  let avghPrime;
  if (C1Prime * C2Prime === 0) {
    avghPrime = h1Prime + h2Prime;
  } else {
    avghPrime = (h1Prime + h2Prime) / 2;
    if (Math.abs(h1Prime - h2Prime) > 180) {
      if (h1Prime + h2Prime < 360) {
        avghPrime += 180;
      } else {
        avghPrime -= 180;
      }
    }
  }
  
  const T = 1 - 0.17 * Math.cos((avghPrime - 30) * Math.PI / 180) +
            0.24 * Math.cos((2 * avghPrime) * Math.PI / 180) +
            0.32 * Math.cos((3 * avghPrime + 6) * Math.PI / 180) -
            0.20 * Math.cos((4 * avghPrime - 63) * Math.PI / 180);
  
  const SL = 1 + (0.015 * Math.pow(avgLPrime - 50, 2)) / Math.sqrt(20 + Math.pow(avgLPrime - 50, 2));
  const SC = 1 + 0.045 * avgCPrime;
  const SH = 1 + 0.015 * avgCPrime * T;
  
  const RT = -2 * Math.sqrt(Math.pow(avgCPrime, 7) / (Math.pow(avgCPrime, 7) + Math.pow(25, 7))) *
             Math.sin(60 * Math.exp(-Math.pow((avghPrime - 275) / 25, 2)) * Math.PI / 180);
  
  const deltaE2000 = Math.sqrt(
    Math.pow(deltaLPrime / (kL * SL), 2) +
    Math.pow(deltaCPrime / (kC * SC), 2) +
    Math.pow(deltaHPrime / (kH * SH), 2) +
    RT * (deltaCPrime / (kC * SC)) * (deltaHPrime / (kH * SH))
  );
  
  return deltaE2000;
}

// Interpret perceptual difference
function interpretDeltaE(deltaE: number) {
  if (deltaE < 1) return { level: 'imperceptible', description: 'Difference imperceptible to human eye' };
  if (deltaE < 2) return { level: 'slight', description: 'Slight difference, only experienced observers can notice' };
  if (deltaE < 3.5) return { level: 'noticeable', description: 'Moderate difference, noticeable to average observer' };
  if (deltaE < 5) return { level: 'significant', description: 'Significant difference, clearly visible' };
  return { level: 'major', description: 'Two completely different colors' };
}

// Simple color name lookup function
function getColorName(hex: string): string {
  // Basic color mapping
  const basicColors: {[key: string]: string} = {
    '#FF0000': 'Red',
    '#00FF00': 'Green',
    '#0000FF': 'Blue',
    '#FFFF00': 'Yellow',
    '#FF00FF': 'Magenta',
    '#00FFFF': 'Cyan',
    '#000000': 'Black',
    '#FFFFFF': 'White',
    '#808080': 'Gray',
    '#800000': 'Maroon',
    '#808000': 'Olive',
    '#008000': 'Dark Green',
    '#800080': 'Purple',
    '#008080': 'Teal',
    '#000080': 'Navy',
    '#FFA500': 'Orange',
    '#A52A2A': 'Brown',
    '#FFC0CB': 'Pink',
    '#FF4500': 'Orange Red',
    '#ADD8E6': 'Light Blue',
    '#90EE90': 'Light Green',
    '#F5F5DC': 'Beige',
    '#D3D3D3': 'Light Gray',
    '#FFFFE0': 'Light Yellow',
  };
  
  // Convert to uppercase for case-insensitive comparison
  const upperHex = hex.toUpperCase();
  
  if (basicColors[upperHex]) {
    return basicColors[upperHex];
  }
  
  // If not a basic color, return empty string or the hex value
  return hex;
}

// Color input component
const ColorInput = ({ 
  color, 
  onColorChange,
  isEyedropperSupported,
  onEyedrop,
  label,
}: { 
  color: string, 
  onColorChange: (color: string) => void,
  isEyedropperSupported: boolean,
  onEyedrop: () => void,
  label: string,
  index: number
}) => {
  const rgb = hexToRgb(color);
  const colorName = getColorName(color);
  
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium">{label}</label>
        <span className="text-xs text-gray-500 dark:text-gray-400">{colorName}</span>
      </div>
      <div className="flex items-center gap-2">
        <div 
          className={`w-14 h-14 rounded-lg border border-gray-200 dark:border-gray-700 shadow-inner transition-transform hover:scale-105 hover:shadow-md`}
          style={{ backgroundColor: color }}
        ></div>
        
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 transition-all">
            <input
              type="text"
              value={color}
              onChange={(e) => onColorChange(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm"
              placeholder="#RRGGBB"
            />
            <div className="text-xs text-gray-500 dark:text-gray-400 ml-2 space-x-1">
              <span>R: {rgb.r}</span>
              <span>G: {rgb.g}</span>
              <span>B: {rgb.b}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(color);
              }}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors flex items-center"
              title="Copy color value"
            >
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy
            </button>
            <div className="flex-1">
              <input
                type="color"
                value={color}
                onChange={(e) => onColorChange(e.target.value)}
                className="h-7 w-full p-0 border-0 rounded-md cursor-pointer"
              />
            </div>
            
            {isEyedropperSupported && (
              <button
                onClick={onEyedrop}
                className="flex items-center justify-center h-7 w-7 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Pick color from screen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l5-5 5 5m-5-5v16" transform="rotate(135, 12, 12)" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// DeltaE result component
const DeltaEResult = ({ 
  value, 
  name, 
  isActive 
}: { 
  value: number, 
  name: string, 
  isActive: boolean 
}) => {
  const interpretation = interpretDeltaE(value);
  
  // Colors corresponding to difference levels
  const levelColors = {
    imperceptible: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-800 dark:text-green-100',
      border: 'border-green-200 dark:border-green-800',
      accent: 'bg-green-500'
    },
    slight: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-800 dark:text-blue-100',
      border: 'border-blue-200 dark:border-blue-800',
      accent: 'bg-blue-500'
    },
    noticeable: {
      bg: 'bg-yellow-100 dark:bg-yellow-900',
      text: 'text-yellow-800 dark:text-yellow-100',
      border: 'border-yellow-200 dark:border-yellow-800',
      accent: 'bg-yellow-500'
    },
    significant: {
      bg: 'bg-orange-100 dark:bg-orange-900',
      text: 'text-orange-800 dark:text-orange-100',
      border: 'border-orange-200 dark:border-orange-800',
      accent: 'bg-orange-500'
    },
    major: {
      bg: 'bg-red-100 dark:bg-red-900',
      text: 'text-red-800 dark:text-red-100',
      border: 'border-red-200 dark:border-red-800',
      accent: 'bg-red-500'
    }
  };
  
  const level = interpretation.level as keyof typeof levelColors;
  const levelColor = levelColors[level];
  
  // Calculate progress bar width (max value is 10, i.e., 100% at ΔE=10)
  const progressWidth = Math.min(value / 10 * 100, 100);
  
  return (
    <div 
      className={`rounded-xl p-4 mb-3 transition-all duration-300 border ${
        isActive 
          ? `${levelColor.border} ${levelColor.bg} bg-opacity-30 dark:bg-opacity-20 shadow-md transform scale-102` 
          : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-sm flex items-center">
          {isActive && (
            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${levelColor.accent}`}></span>
          )}
          {name}
        </h3>
        <div className={`font-bold text-lg transition-all ${isActive ? levelColor.text : ''}`}>
          {value.toFixed(2)}
        </div>
      </div>
      
      <div className="mt-2 mb-3">
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className={`h-full ${levelColor.accent} transition-all duration-500 ease-out`} 
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
      
      <div className={`text-xs px-3 py-1.5 rounded-lg inline-flex items-center ${levelColor.bg} ${levelColor.text} bg-opacity-70 dark:bg-opacity-40`}>
        <span className="font-semibold mr-1">{interpretation.level}:</span> 
        {interpretation.description}
      </div>
    </div>
  );
};

// Color comparison component
const ColorComparison = ({
  color1,
  color2,
  activeView,
  setActiveView
}: {
  color1: string,
  color2: string,
  activeView: string,
  setActiveView: (view: string) => void
}) => {
  return (
    <div className="space-y-4">
      {/* View toggle buttons */}
      <div className="flex flex-wrap items-center gap-1 mb-2">
        <button
          onClick={() => setActiveView('split')}
          className={`px-2 py-1 text-xs rounded-md flex items-center ${
            activeView === 'split' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0h12M9 21H3m9-9h12M12 12H3" />
          </svg>
          Split View
        </button>
        <button
          onClick={() => setActiveView('checker')}
          className={`px-2 py-1 text-xs rounded-md flex items-center ${
            activeView === 'checker' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
          </svg>
          Checkerboard
        </button>
        <button
          onClick={() => setActiveView('gradient')}
          className={`px-2 py-1 text-xs rounded-md flex items-center ${
            activeView === 'gradient' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V5l12 7-12 7z" />
          </svg>
          Gradient
        </button>
        <button
          onClick={() => setActiveView('text')}
          className={`px-2 py-1 text-xs rounded-md flex items-center ${
            activeView === 'text' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          Text Sample
        </button>
      </div>
    
      {/* Split view */}
      {activeView === 'split' && (
        <div className="flex flex-col space-y-4">
          <div className="flex h-16 rounded-lg overflow-hidden shadow-inner transition-all hover:shadow-md">
            <div className="w-1/2" style={{ backgroundColor: color1 }}></div>
            <div className="w-1/2" style={{ backgroundColor: color2 }}></div>
          </div>
          
          <div className="flex h-16 rounded-lg overflow-hidden shadow-inner">
            <div className="w-1/3" style={{ backgroundColor: color1 }}></div>
            <div className="w-1/3" style={{ backgroundColor: 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')' }}></div>
            <div className="w-1/3" style={{ backgroundColor: color2 }}></div>
          </div>
        </div>
      )}
      
      {/* Checkerboard view */}
      {activeView === 'checker' && (
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-8 h-12 rounded-lg overflow-hidden shadow-inner">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} style={{ backgroundColor: i % 2 === 0 ? color1 : color2 }}></div>
            ))}
          </div>
          
          <div className="grid grid-cols-16 h-8 rounded-lg overflow-hidden shadow-inner">
            {Array(16).fill(0).map((_, i) => (
              <div key={i} style={{ backgroundColor: i % 2 === 0 ? color1 : color2 }}></div>
            ))}
          </div>
          
          <div className="grid grid-cols-8 grid-rows-8 h-32 rounded-lg overflow-hidden shadow-inner">
            {Array(64).fill(0).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return (
                <div key={i} style={{ backgroundColor: (row + col) % 2 === 0 ? color1 : color2 }}></div>
              );
            })}
          </div>
        </div>
      )}
      
      {/* Gradient view */}
      {activeView === 'gradient' && (
        <div className="flex flex-col space-y-4">
          <div 
            className="h-16 rounded-lg shadow-inner" 
            style={{ 
              background: `linear-gradient(to right, ${color1}, ${color2})` 
            }}
          ></div>
          
          <div 
            className="h-16 rounded-lg shadow-inner" 
            style={{ 
              background: `linear-gradient(to right, ${color1} 0%, ${color1} 20%, ${color2} 80%, ${color2} 100%)` 
            }}
          ></div>
          
          <div className="flex h-16">
            <div 
              className="flex-1 rounded-lg shadow-inner mr-2" 
              style={{ 
                background: `radial-gradient(circle, ${color1}, ${color2})` 
              }}
            ></div>
            <div 
              className="flex-1 rounded-lg shadow-inner ml-2" 
              style={{ 
                background: `radial-gradient(circle, ${color2}, ${color1})` 
              }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Text sample view */}
      {activeView === 'text' && (
        <div className="flex flex-col space-y-4">
          <div className="flex rounded-lg overflow-hidden shadow-inner h-20">
            <div className="w-1/2 flex items-center justify-center p-4" style={{ backgroundColor: color1 }}>
              <span style={{ color: color2, fontWeight: 'bold', fontSize: '1.2rem' }}>Sample Text</span>
            </div>
            <div className="w-1/2 flex items-center justify-center p-4" style={{ backgroundColor: color2 }}>
              <span style={{ color: color1, fontWeight: 'bold', fontSize: '1.2rem' }}>Sample Text</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg overflow-hidden shadow-inner p-4 flex flex-col items-center" style={{ backgroundColor: color1 }}>
              <span className="text-xs mb-2" style={{ color: color2 }}>Small Text</span>
              <span style={{ color: color2 }}>Standard Text</span>
              <span className="text-lg" style={{ color: color2 }}>Large Text</span>
            </div>
            <div className="rounded-lg overflow-hidden shadow-inner p-4 flex flex-col items-center" style={{ backgroundColor: color2 }}>
              <span className="text-xs mb-2" style={{ color: color1 }}>Small Text</span>
              <span style={{ color: color1 }}>Standard Text</span>
              <span className="text-lg" style={{ color: color1 }}>Large Text</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Color history interface
interface ColorPair {
  id: number;
  color1: string;
  color2: string;
  deltaE: number;
  timestamp: number;
}

export default function DeltaECalculatorEmbed() {
  // State management
  const [color1, setColor1] = useState('#FF5733');
  const [color2, setColor2] = useState('#3366FF');
  const [deltaE76, setDeltaE76] = useState(0);
  const [deltaE94, setDeltaE94] = useState(0);
  const [deltaE2000, setDeltaE2000] = useState(0);
  const [activeMethod, setActiveMethod] = useState('deltaE2000');
  const [isEyedropperSupported, setIsEyedropperSupported] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animateResult, setAnimateResult] = useState(false);
  const [activeView, setActiveView] = useState('split');
  const [colorHistory, setColorHistory] = useState<ColorPair[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Initialize on page load
  useEffect(() => {
    setMounted(true);
    setIsEyedropperSupported('EyeDropper' in window);
    
    // Load history from local storage
    try {
      const savedHistory = localStorage.getItem('deltaE-color-history');
      if (savedHistory) {
        setColorHistory(JSON.parse(savedHistory));
      }
    } catch (e) {
      console.error('Error loading history:', e);
    }
  }, []);

  // Calculate color difference when colors change
  useEffect(() => {
    if (color1 && color2) {
      try {
        // Trigger animation
        setAnimateResult(false);
        
        // Slight delay for animation effect
        setTimeout(() => {
          const lab1 = hexToLab(color1);
          const lab2 = hexToLab(color2);
          
          const deltaE76Value = calculateDeltaE76(lab1, lab2);
          const deltaE94Value = calculateDeltaE94(lab1, lab2);
          const deltaE2000Value = calculateDeltaE2000(lab1, lab2);
          
          setDeltaE76(deltaE76Value);
          setDeltaE94(deltaE94Value);
          setDeltaE2000(deltaE2000Value);
          
          // Trigger animation again
          setAnimateResult(true);
          
          // Save to history, but only for significantly different color pairs
          const currentActiveValue = activeMethod === 'deltaE2000' 
            ? deltaE2000Value 
            : activeMethod === 'deltaE94' 
              ? deltaE94Value 
              : deltaE76Value;
              
          saveToHistory(color1, color2, currentActiveValue);
        }, 50);
      } catch (e) {
        console.error('Color difference calculation error:', e);
      }
    }
  }, [color1, color2]);

  // Save to history
  const saveToHistory = (c1: string, c2: string, deltaE: number) => {
    // Check if the same color pair already exists
    const exists = colorHistory.some(
      h => (h.color1 === c1 && h.color2 === c2) || (h.color1 === c2 && h.color2 === c1)
    );
    
    if (!exists) {
      const newPair: ColorPair = {
        id: Date.now(),
        color1: c1,
        color2: c2,
        deltaE: deltaE,
        timestamp: Date.now()
      };
      
      const updatedHistory = [newPair, ...colorHistory].slice(0, 10); // Keep only the latest 10 entries
      setColorHistory(updatedHistory);
      
      try {
        localStorage.setItem('deltaE-color-history', JSON.stringify(updatedHistory));
      } catch (e) {
        console.error('Error saving history:', e);
      }
    }
  };

  // Load color pair from history
  const loadFromHistory = (pair: ColorPair) => {
    setColor1(pair.color1);
    setColor2(pair.color2);
  };

  // Clear history
  const clearHistory = () => {
    setColorHistory([]);
    localStorage.removeItem('deltaE-color-history');
  };

  // Use eyedropper tool
  const handleEyedropper = async (target: 'color1' | 'color2') => {
    try {
      // @ts-expect-error - EyeDropper API is not yet in TypeScript types
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      if (target === 'color1') {
        setColor1(result.sRGBHex);
      } else {
        setColor2(result.sRGBHex);
      }
    } catch (e) {
      console.error('Eyedropper tool error:', e);
    }
  };

  // Preset color pairs
  const presetColors = [
    { name: 'Red-Blue', color1: '#FF0000', color2: '#0000FF' },
    { name: 'Grayscale', color1: '#CCCCCC', color2: '#666666' },
    { name: 'Similar Red', color1: '#FF0000', color2: '#FF3333' },
    { name: 'Black-White', color1: '#000000', color2: '#FFFFFF' },
  ];

  // Don't render before component is mounted
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Inject global styles */}
      <style jsx global>{globalStyles}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pattern-dots pattern-gray-200 dark:pattern-gray-800 pattern-size-2 pattern-opacity-10">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Title area */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Delta E Calculator</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">Accurately calculate and compare perceptual differences between colors</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Left column - Color input */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transform transition-all hover-scale">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Select Colors
                </h2>
                
                <ColorInput 
                  color={color1}
                  onColorChange={setColor1}
                  isEyedropperSupported={isEyedropperSupported}
                  onEyedrop={() => handleEyedropper('color1')}
                  label="Color 1"
                  index={1}
                />
                
                <ColorInput 
                  color={color2}
                  onColorChange={setColor2}
                  isEyedropperSupported={isEyedropperSupported}
                  onEyedrop={() => handleEyedropper('color2')}
                  label="Color 2"
                  index={2}
                />
                
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2 sm:mb-3">
                    <h3 className="text-xs font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Preset Colors
                    </h3>
                    
                    <button
                      onClick={() => setShowHistory(!showHistory)}
                      className="text-xs text-blue-500 hover:text-blue-600 transition-colors flex items-center"
                    >
                      <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {showHistory ? 'Show Presets' : 'History'}
                    </button>
                  </div>
                  
                  {showHistory ? (
                    <>
                      {colorHistory.length > 0 ? (
                        <div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {colorHistory.slice(0, 8).map((pair) => (
                              <button
                                key={pair.id}
                                onClick={() => loadFromHistory(pair)}
                                className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-700 text-xs transition-all hover:shadow-md"
                              >
                                <div className="flex justify-center gap-1 mb-1">
                                  <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: pair.color1 }}></div>
                                  <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: pair.color2 }}></div>
                                </div>
                                <span className="text-gray-600 dark:text-gray-300">ΔE: {pair.deltaE.toFixed(1)}</span>
                              </button>
                            ))}
                          </div>
                          
                          {colorHistory.length > 0 && (
                            <div className="mt-2 text-center">
                              <button
                                onClick={clearHistory}
                                className="text-xs text-red-500 hover:text-red-600 transition-colors"
                              >
                                Clear History
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-xs text-center text-gray-500 dark:text-gray-400 py-2">
                          No history yet
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {presetColors.map((preset, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setColor1(preset.color1);
                            setColor2(preset.color2);
                          }}
                          className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-700 text-xs transition-all hover:shadow-md"
                        >
                          <div className="flex justify-center gap-1 mb-1">
                            <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: preset.color1 }}></div>
                            <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: preset.color2 }}></div>
                          </div>
                          {preset.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right column - Results and preview */}
              <div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 mb-4 sm:mb-6 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transform transition-all hover-scale">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Results
                  </h2>
                  
                  <div className={`space-y-3 ${animateResult ? 'animate-fade-in' : 'opacity-90'}`}>
                    <DeltaEResult 
                      value={deltaE2000} 
                      name="CIEDE2000 (Recommended)" 
                      isActive={activeMethod === 'deltaE2000'}
                    />
                    
                    <DeltaEResult 
                      value={deltaE94} 
                      name="CIE94" 
                      isActive={activeMethod === 'deltaE94'}
                    />
                    
                    <DeltaEResult 
                      value={deltaE76} 
                      name="CIE76" 
                      isActive={activeMethod === 'deltaE76'}
                    />
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <h3 className="text-xs font-medium mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Calculation Method
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveMethod('deltaE2000')}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeMethod === 'deltaE2000' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                      >
                        CIEDE2000
                      </button>
                      <button
                        onClick={() => setActiveMethod('deltaE94')}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeMethod === 'deltaE94' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                      >
                        CIE94
                      </button>
                      <button
                        onClick={() => setActiveMethod('deltaE76')}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeMethod === 'deltaE76' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                      >
                        CIE76
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transform transition-all hover-scale">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Color Comparison
                  </h2>
                  
                  <ColorComparison 
                    color1={color1}
                    color2={color2}
                    activeView={activeView}
                    setActiveView={setActiveView}
                  />
                </div>
              </div>
            </div>
            
            {/* Color difference explanation */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 mt-4 sm:mt-6 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 hover-scale">
              <h2 className="text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Delta E Interpretation
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 text-xs">
                <div className="flex flex-col items-center p-3 rounded-lg bg-green-50 dark:bg-green-900 dark:bg-opacity-30 hover-scale">
                  <div className="w-4 h-4 rounded-full bg-green-500 mb-2 shadow-sm animate-pulse-slow"></div>
                  <p className="font-bold">ΔE &lt; 1</p>
                  <p className="text-gray-600 dark:text-gray-300">Imperceptible</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30 hover-scale">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mb-2 shadow-sm animate-pulse-slow"></div>
                  <p className="font-bold">ΔE 1-2</p>
                  <p className="text-gray-600 dark:text-gray-300">Slight</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30 hover-scale">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mb-2 shadow-sm animate-pulse-slow"></div>
                  <p className="font-bold">ΔE 2-3.5</p>
                  <p className="text-gray-600 dark:text-gray-300">Noticeable</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-orange-50 dark:bg-orange-900 dark:bg-opacity-30 hover-scale">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mb-2 shadow-sm animate-pulse-slow"></div>
                  <p className="font-bold">ΔE 3.5-5</p>
                  <p className="text-gray-600 dark:text-gray-300">Significant</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-red-50 dark:bg-red-900 dark:bg-opacity-30 hover-scale">
                  <div className="w-4 h-4 rounded-full bg-red-500 mb-2 shadow-sm animate-pulse-slow"></div>
                  <p className="font-bold">ΔE &gt; 5</p>
                  <p className="text-gray-600 dark:text-gray-300">Major</p>
                </div>
              </div>
            </div>
            
            {/* Brand identification */}
            <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Provided by <a href="https://rgbatohex.com" className="font-medium text-blue-500 hover:text-blue-600 transition-colors">rgbatohex.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
