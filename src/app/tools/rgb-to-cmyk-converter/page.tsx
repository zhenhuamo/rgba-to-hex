'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { rgbToCmyk } from '@/utils/colorConverter';

// Enhanced RGB input component
const RGBInput = ({ 
  rgb, 
  onChange 
}: { 
  rgb: { r: number, g: number, b: number }, 
  onChange: (key: 'r' | 'g' | 'b', value: number) => void 
}) => {
  const [copiedRgb, setCopiedRgb] = useState(false);
  
  const copyRgbValue = async () => {
    try {
      await navigator.clipboard.writeText(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
      setCopiedRgb(true);
      setTimeout(() => setCopiedRgb(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
      
      <div className="mt-4">
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
    </div>
  );
};

// Enhanced CMYK display component
const CMYKDisplay = ({ cmyk }: { cmyk: { c: number, m: number, y: number, k: number } }) => {
  const [copied, setCopied] = useState(false);
  
  const copyCmykValue = async () => {
    try {
      await navigator.clipboard.writeText(`cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Calculate ink coverage
  const totalInkCoverage = cmyk.c + cmyk.m + cmyk.y + cmyk.k;
  const isExcessiveInk = totalInkCoverage > 300;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">CMYK Values</h3>
      
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm space-y-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Cyan</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-mono">{cmyk.c}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-cyan-500 rounded-full transition-all duration-300" 
                style={{ width: `${cmyk.c}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Magenta</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-mono">{cmyk.m}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-pink-500 rounded-full transition-all duration-300" 
                style={{ width: `${cmyk.m}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Yellow</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-mono">{cmyk.y}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500 rounded-full transition-all duration-300" 
                style={{ width: `${cmyk.y}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Key (Black)</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-mono">{cmyk.k}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gray-900 rounded-full transition-all duration-300" 
                style={{ width: `${cmyk.k}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
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
            <span className={`font-mono ${isExcessiveInk ? 'text-red-500 font-bold' : 'text-gray-700 dark:text-gray-300'}`}>
              {totalInkCoverage}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-300 ${isExcessiveInk ? 'bg-red-500' : 'bg-blue-500'}`} 
              style={{ width: `${Math.min(totalInkCoverage/4, 100)}%` }}
            ></div>
          </div>
          {isExcessiveInk && (
            <p className="text-red-500 text-xs mt-1">Exceeds recommended ink limit for printing (300%)</p>
          )}
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

// Print usage component
const PrintUsage = ({ cmyk }: { cmyk: { c: number, m: number, y: number, k: number } }) => {
  // Determine suitable print processes based on color and ink coverage
  const totalInkCoverage = cmyk.c + cmyk.m + cmyk.y + cmyk.k;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Print Application</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recommended Process</h4>
          <div className="text-gray-800 dark:text-gray-200">
            {totalInkCoverage > 280 ? 'Digital Printing' : 'Offset Printing'}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {totalInkCoverage > 280 
              ? 'Digital printing handles higher ink coverage better' 
              : 'Standard offset printing will work well'}
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Suitable Paper Types</h4>
          <div className="text-gray-800 dark:text-gray-200">
            {cmyk.k > 70 ? 'Coated, High Quality' : 'Most Paper Types'}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {cmyk.k > 70 
              ? 'Deep blacks require quality coated paper' 
              : 'Works on most standard papers'}
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Print Application</h4>
          <div className="text-gray-800 dark:text-gray-200">
            {totalInkCoverage < 240 ? 'Wide Range' : 'Limited Range'}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {totalInkCoverage < 240 
              ? 'Suitable for most print applications' 
              : 'Better for covers and premium materials'}
          </p>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-sm text-blue-800 dark:text-blue-200">
        <div className="flex items-start">
          <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p>
            <strong>Print Tip:</strong> Always request a physical proof before large print runs. Screen colors and actual print results can vary significantly.
          </p>
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

export default function RgbToCmykConverter() {
  // Set better initial color for demonstration
  const [rgb, setRgb] = useState({ r: 52, g: 120, b: 205 });
  const [cmyk, setCmyk] = useState({ c: 75, m: 42, y: 0, k: 20 });
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);
  
  // Initialize state on mount
  useEffect(() => {
    setMounted(true);
    setIsInIframe(window.self !== window.top);
    
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const r = parseInt(params.get('r') || '52');
    const g = parseInt(params.get('g') || '120');
    const b = parseInt(params.get('b') || '205');
    
    if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
      // Ensure values are within valid range
      const validR = Math.min(255, Math.max(0, r));
      const validG = Math.min(255, Math.max(0, g));
      const validB = Math.min(255, Math.max(0, b));
      
      setRgb({ r: validR, g: validG, b: validB });
    }
    
    // Add this code to detect showShare parameter
    const showShareParam = params.get('showShare');
    if (showShareParam === 'true') {
      setShowShare(true);
    }
  }, []);
  
  // Update CMYK when RGB changes
  useEffect(() => {
    const result = rgbToCmyk(rgb);
    setCmyk(result);
  }, [rgb]);
  
  // Handle RGB input changes
  const handleRgbChange = (key: 'r' | 'g' | 'b', value: number) => {
    // Ensure values are within valid range
    const validValue = Math.min(255, Math.max(0, value));
    setRgb({ ...rgb, [key]: validValue });
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
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">
              <Image src="/rgb.svg" alt="RGB to CMYK Color Converter" width={36} height={36} priority className="w-9 h-9" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">RGB to CMYK Converter</h1>
          </div>
        )}

        {/* Main converter card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
          {/* Color preview */}
          <div 
            className="h-40 w-full transition-colors duration-300 flex items-end p-4"
            style={{
              backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
            }}
          >
            <div className="ml-auto bg-black bg-opacity-30 backdrop-blur-sm text-white px-3 py-2 rounded-lg font-mono text-sm">
              #{rgb.r.toString(16).padStart(2, '0')}{rgb.g.toString(16).padStart(2, '0')}{rgb.b.toString(16).padStart(2, '0')}
            </div>
          </div>

          {/* Controls and values */}
          <div className="p-6 md:p-8">
            {/* RGB input sliders */}
            <RGBInput rgb={rgb} onChange={handleRgbChange} />
            
            {/* CMYK value display */}
            <CMYKDisplay cmyk={cmyk} />
            
            {/* Print usage recommendations */}
            {!isInIframe && <PrintUsage cmyk={cmyk} />}
            
            {/* Share and save section - always show */}
            {(isInIframe || showShare) && <ShareAndSave rgb={rgb} />}

            
            {/* Embed code generator - only show in standalone page */}
            {!isInIframe && (
              <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Embed This Tool</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Add this color converter to your website by copying the iframe code below:
                </p>
                <div className="relative">
                  <textarea 
                    className="w-full h-24 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-mono text-sm border-0 focus:ring-2 focus:ring-blue-500"
                    readOnly
                    value={`<iframe src="https://rgbatohex.com/tools/rgb-to-cmyk-converter?embed=true&r=${rgb.r}&g=${rgb.g}&b=${rgb.b}&showShare=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to CMYK Color Converter"></iframe>`}
                  />
                  <button 
                    className="absolute bottom-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors flex items-center gap-1"
                    onClick={() => {
                      const code = `<iframe src="https://rgbatohex.com/tools/rgb-to-cmyk-converter?embed=true&r=${rgb.r}&g=${rgb.g}&b=${rgb.b}&showShare=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to CMYK Color Converter"></iframe>`;
                      navigator.clipboard.writeText(code);
                      setEmbedCopied(true);
                      setTimeout(() => setEmbedCopied(false), 2000);
                    }}
                  >
                    {embedCopied ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Only show information sections in standalone page */}
        {!isInIframe && (
          <>
            {/* Print considerations section */}
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About RGB to CMYK Conversion</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  When converting from RGB (digital) to CMYK (print) color mode, it&apos;s important to understand:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Color Gamut Differences</h4>
                    <p className="text-sm">
                      RGB has a wider color gamut than CMYK. Some vibrant digital colors simply cannot be reproduced in print, which is why designs may appear less vibrant when printed.
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Additive vs. Subtractive</h4>
                    <p className="text-sm">
                      RGB is additive (combining light to create white), while CMYK is subtractive (combining inks to create black). This fundamental difference affects how colors are created.
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Monitor Calibration</h4>
                    <p className="text-sm">
                      The appearance of colors varies between different screens. For accurate print design, use a calibrated monitor and request physical print proofs.
                    </p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Ink Coverage</h4>
                    <p className="text-sm">
                      Total ink coverage (sum of CMYK percentages) should typically stay below 300% for most printing processes to prevent oversaturation and drying issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer with additional resources */}
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Additional Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/tools/color-palette-generator" className="block bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Color Palette Generator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Create harmonious color schemes for your designs</p>
                </a>
                <a href="/tools/color-contrast-checker" className="block bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Contrast Checker</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Ensure text readability with WCAG compliance testing</p>
                </a>
                <a href="/tools/hex-to-rgba-converter" className="block bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">HEX to RGBA Converter</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Convert HEX colors to RGBA for transparency effects</p>
                </a>
              </div>
            </div>
            
            {/* Mini-FAQ section */}
            <div className="mt-8 mb-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Why do my prints look different from what I see on screen?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Screens display colors using RGB (light), while printers use CMYK (ink). The RGB color space is larger than CMYK, so some colors visible on screen cannot be perfectly reproduced in print. Additionally, screen calibration, paper type, and printing process all affect the final appearance.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">What is total ink coverage and why does it matter?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Total ink coverage is the sum of all four CMYK ink percentages. Most printing presses have a maximum recommended ink coverage (typically 280-320%) to prevent issues like poor drying, smudging, and paper saturation. Exceeding this limit can lead to print quality problems.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Should I design in RGB or CMYK?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    If your final product will be digital (website, app, etc.), design in RGB. If your work will be printed, design in CMYK from the start to avoid color surprises later. For projects with both digital and print components, consider working in RGB with CMYK-safe colors, then converting to CMYK for print production.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}