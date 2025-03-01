'use client';

import { useState, useEffect } from 'react';
import { cmykToRgb } from '@/utils/colorConverter';

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
      
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300 font-medium">CMYK Format</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Print</span>
        </div>
        <div className="flex">
          <input
            type="text"
            value={`cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`}
            readOnly
            className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
          />
          <button
            onClick={copyCmykValue}
            className={`px-4 py-2 ${copiedCmyk ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-1`}
          >
            {copiedCmyk ? (
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
      
      {/* Total ink coverage display */}
      <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 dark:text-gray-300 text-sm">Total Ink Coverage</span>
            <div className="group relative inline-block">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded w-48 z-10">
                Sum of all CMYK values. For offset printing, aim for less than 300%.
              </div>
            </div>
          </div>
          <span className={`font-mono ${cmyk.c + cmyk.m + cmyk.y + cmyk.k > 300 ? 'text-red-500 font-bold' : 'text-gray-700 dark:text-gray-300'}`}>
            {cmyk.c + cmyk.m + cmyk.y + cmyk.k}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-300 ${cmyk.c + cmyk.m + cmyk.y + cmyk.k > 300 ? 'bg-red-500' : 'bg-blue-500'}`} 
            style={{ width: `${Math.min((cmyk.c + cmyk.m + cmyk.y + cmyk.k)/4, 100)}%` }}
          ></div>
        </div>
        {cmyk.c + cmyk.m + cmyk.y + cmyk.k > 300 && (
          <p className="text-red-500 text-xs mt-1">Exceeds recommended ink limit for printing (300%)</p>
        )}
      </div>
    </div>
  );
};

// Enhanced RGB display component
const RGBDisplay = ({ rgb }: { rgb: { r: number, g: number, b: number } }) => {
  const [copiedRgb, setCopiedRgb] = useState(false);
  const [copiedHex, setCopiedHex] = useState(false);
  
  const copyRgbValue = async () => {
    try {
      await navigator.clipboard.writeText(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
      setCopiedRgb(true);
      setTimeout(() => setCopiedRgb(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  const copyHexValue = async () => {
    try {
      const hex = `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
      await navigator.clipboard.writeText(hex);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">RGB Values</h3>
      
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Red</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-mono">{rgb.r}</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-500 rounded-full transition-all duration-300" 
                style={{ width: `${(rgb.r / 255) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Green</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-mono">{rgb.g}</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-300" 
                style={{ width: `${(rgb.g / 255) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Blue</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-mono">{rgb.b}</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-300" 
                style={{ width: `${(rgb.b / 255) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">RGB Format</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Web, CSS</span>
            </div>
            <div className="flex">
              <input
                type="text"
                value={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
                readOnly
                className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
              />
              <button
                onClick={copyRgbValue}
                className={`px-4 py-2 ${copiedRgb ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-1`}
              >
                {copiedRgb ? (
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
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">HEX Format</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Web, CSS</span>
            </div>
            <div className="flex">
              <input
                type="text"
                value={`#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`}
                readOnly
                className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0 uppercase"
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
        </div>
      </div>
    </div>
  );
};

// Digital Usage component
const DigitalUsage = ({ rgb }: { rgb: { r: number, g: number, b: number } }) => {
  // Determine if color is web safe
  const isWebSafe = (
    rgb.r % 51 === 0 && 
    rgb.g % 51 === 0 && 
    rgb.b % 51 === 0
  );
  
  // Calculate perceived brightness
  const brightness = (rgb.r * 299 + rgb.g *.587 + rgb.b * .114) / 1000;
  const readabilityClass = brightness > 125 ? 'dark' : 'light';
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Digital Application</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Web Safe</h4>
          <div className="text-gray-800 dark:text-gray-200">
            {isWebSafe ? 'Yes' : 'No'}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {isWebSafe 
              ? 'This color is in the web-safe palette' 
              : 'This color is not in the web-safe palette'}
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Text Readability</h4>
          <div className="text-gray-800 dark:text-gray-200">
            {readabilityClass === 'dark' ? 'Dark Text' : 'Light Text'}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {readabilityClass === 'dark' 
              ? 'Use dark text on this background' 
              : 'Use light text on this background'}
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Best For</h4>
          <div className="text-gray-800 dark:text-gray-200">
            {brightness < 30 ? 'Accents' : brightness > 225 ? 'Backgrounds' : 'General Use'}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {brightness < 30 
              ? 'Very dark - best as an accent color' 
              : brightness > 225 
                ? 'Very light - good for backgrounds' 
                : 'Medium brightness - versatile usage'}
          </p>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-sm text-blue-800 dark:text-blue-200">
        <div className="flex items-start">
          <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p>
            <strong>Digital Tip:</strong> Colors may appear differently across devices. Test your design on multiple screens to ensure consistency.
          </p>
        </div>
      </div>
    </div>
  );
};

// Share component
const ShareAndSave = ({ cmyk }: { cmyk: { c: number, m: number, y: number, k: number } }) => {
  const [copied, setCopied] = useState(false);
  
  const getShareUrl = () => {
    return `${window.location.origin}${window.location.pathname}?c=${cmyk.c}&m=${cmyk.m}&y=${cmyk.y}&k=${cmyk.k}`;
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
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors"
          onClick={() => {
            // Add to favorites functionality can be implemented here
            alert('Favorites feature coming soon!');
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          <span>Save to Favorites</span>
        </button>
      </div>
    </div>
  );
};

// Color Preview component
const ColorPreview = ({ rgb }: { rgb: { r: number, g: number, b: number } }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Preview</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Color Sample</h4>
          <div 
            className="h-32 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          ></div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Text Contrast</h4>
          <div 
            className="h-32 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          >
            <p className="text-white font-medium">White text example</p>
            <p className="text-black font-medium">Black text example</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Color Harmony</h4>
        <div className="grid grid-cols-5 gap-2 h-12">
          {/* Monochromatic */}
          <div 
            className="rounded-lg shadow-sm"
            style={{ 
              backgroundColor: `rgb(${Math.max(0, rgb.r - 50)}, ${Math.max(0, rgb.g - 50)}, ${Math.max(0, rgb.b - 50)})` 
            }}
          ></div>
          <div 
            className="rounded-lg shadow-sm"
            style={{ 
              backgroundColor: `rgb(${Math.max(0, rgb.r - 25)}, ${Math.max(0, rgb.g - 25)}, ${Math.max(0, rgb.b - 25)})` 
            }}
          ></div>
          <div 
            className="rounded-lg shadow-sm"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          ></div>
          <div 
            className="rounded-lg shadow-sm"
            style={{ 
              backgroundColor: `rgb(${Math.min(255, rgb.r + 25)}, ${Math.min(255, rgb.g + 25)}, ${Math.min(255, rgb.b + 25)})` 
            }}
          ></div>
          <div 
            className="rounded-lg shadow-sm"
            style={{ 
              backgroundColor: `rgb(${Math.min(255, rgb.r + 50)}, ${Math.min(255, rgb.g + 50)}, ${Math.min(255, rgb.b + 50)})` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Main page component
export default function CMYKToRGBConverter() {
  // Default CMYK values
  const [cmyk, setCmyk] = useState({ c: 0, m: 50, y: 100, k: 0 });
  // Calculated RGB values
  const [rgb, setRgb] = useState({ r: 255, g: 128, b: 0 });
  
  // Load CMYK values from URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const c = params.get('c');
      const m = params.get('m');
      const y = params.get('y');
      const k = params.get('k');
      
      if (c !== null && m !== null && y !== null && k !== null) {
        const newCmyk = {
          c: Math.min(100, Math.max(0, parseInt(c))),
          m: Math.min(100, Math.max(0, parseInt(m))),
          y: Math.min(100, Math.max(0, parseInt(y))),
          k: Math.min(100, Math.max(0, parseInt(k)))
        };
        setCmyk(newCmyk);
      }
    }
  }, []);
  
  // Update RGB values when CMYK values change
  useEffect(() => {
    const newRgb = cmykToRgb({ c: cmyk.c, m: cmyk.m, y: cmyk.y, k: cmyk.k });
    setRgb(newRgb);
    
    // Update URL parameters (optional)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('c', cmyk.c.toString());
      url.searchParams.set('m', cmyk.m.toString());
      url.searchParams.set('y', cmyk.y.toString());
      url.searchParams.set('k', cmyk.k.toString());
      window.history.replaceState({}, '', url.toString());
    }
  }, [cmyk]);
  
  // Handle CMYK value changes
  const handleCmykChange = (key: 'c' | 'm' | 'y' | 'k', value: number) => {
    // Ensure values are within 0-100 range
    const clampedValue = Math.min(100, Math.max(0, value));
    setCmyk(prev => ({ ...prev, [key]: clampedValue }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">CMYK to RGB Converter</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Convert print-ready CMYK color values to screen-ready RGB values. Adjust the sliders below to create your color.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          {/* Left side: CMYK input and color info */}
          <CMYKInput cmyk={cmyk} onChange={handleCmykChange} />
          
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About CMYK</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              CMYK (Cyan, Magenta, Yellow, and Key/Black) is a subtractive color model used primarily in the printing industry. By mixing these four inks, a variety of colors can be created.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-sm text-blue-800 dark:text-blue-200">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>
                  <strong>Printing Tip:</strong> Total ink coverage (sum of all CMYK values) should typically be kept below 300% to avoid printing issues.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          {/* Right side: RGB display and applications */}
          <RGBDisplay rgb={rgb} />
          <ColorPreview rgb={rgb} />
          <DigitalUsage rgb={rgb} />
          <ShareAndSave cmyk={cmyk} />
        </div>
      </div>
      
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">About CMYK to RGB Conversion</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            CMYK and RGB are two different color models used for printing and digital display, respectively. When converting from CMYK to RGB, keep in mind:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>CMYK is a subtractive color model used for printing, creating colors by absorbing light.</li>
            <li>RGB is an additive color model used for digital displays, creating colors by emitting light.</li>
            <li>Due to gamut differences, some CMYK colors may not be precisely representable in RGB, and vice versa.</li>
            <li>The converted RGB color may appear differently on screen compared to how it would look when printed.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Conversion Formula</h3>
          <p>The conversion from CMYK to RGB uses the following formulas:</p>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>
              R = 255 × (1 - C/100) × (1 - K/100)<br/>
              G = 255 × (1 - M/100) × (1 - K/100)<br/>
              B = 255 × (1 - Y/100) × (1 - K/100)
            </code>
          </pre>
          
          <p className="mt-4">
            This converter uses the above formulas to transform CMYK values into RGB values, helping designers and print professionals bridge the gap between digital and print media.
          </p>
        </div>
      </div>
    </div>
  );
}