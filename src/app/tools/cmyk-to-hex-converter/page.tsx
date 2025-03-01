'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cmykToHex, CMYK } from '@/utils/colorConverter';

// Enhanced CMYK input component
const CMYKInput = ({ 
  cmyk, 
  onChange 
}: { 
  cmyk: CMYK, 
  onChange: (key: keyof CMYK, value: number) => void 
}) => {
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
            <span className="pr-2 text-gray-500 dark:text-gray-400 text-sm">%</span>
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
            <span className="pr-2 text-gray-500 dark:text-gray-400 text-sm">%</span>
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
            <span className="pr-2 text-gray-500 dark:text-gray-400 text-sm">%</span>
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
      
      {/* Black (Key) slider */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-gray-900"></span>
            Black/Key (K)
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
            <span className="pr-2 text-gray-500 dark:text-gray-400 text-sm">%</span>
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
    </div>
  );
};

// Enhanced HEX display component
const HexDisplay = ({ hex, cmyk }: { hex: string, cmyk: CMYK }) => {
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
            <span className="text-gray-700 dark:text-gray-300 font-medium">CMYK</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Print</span>
          </div>
          <input
            type="text"
            value={`cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`}
            readOnly
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg font-mono text-base focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

// Enhanced print compatibility component
const PrintInfo = ({ cmyk }: { cmyk: CMYK }) => {
  // Calculate if the color is in standard print gamut
  const isInGamut = cmyk.c + cmyk.m + cmyk.y + cmyk.k <= 300;
  
  // Calculate a printability score (higher is better)
  const maxInkCoverage = cmyk.c + cmyk.m + cmyk.y + cmyk.k;
  const printabilityScore = Math.max(0, Math.min(100, Math.round(100 - maxInkCoverage / 4)));
  
  // Determine a rating label based on the score
  let rating = "Excellent";
  let ratingClass = "text-green-500";
  
  if (printabilityScore < 20) {
    rating = "Poor";
    ratingClass = "text-red-500";
  } else if (printabilityScore < 50) {
    rating = "Fair";
    ratingClass = "text-yellow-500";
  } else if (printabilityScore < 75) {
    rating = "Good";
    ratingClass = "text-blue-500";
  }
  
  // Find closest Pantone (simplified)
  const pantoneName = `PANTONE ${Math.round(cmyk.c * 3 + cmyk.m * 2 + cmyk.y)} C`;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Print Compatibility</h3>
      
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-600 dark:text-gray-400">Overall Rating</span>
        <span className={`font-bold text-lg ${ratingClass}`}>{rating}</span>
      </div>
      
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">Color Gamut</span>
              <div className="group relative">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded w-48">
                  Indicates whether the CMYK color can be reproduced accurately in standard printing processes.
                </div>
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded text-xs ${isInGamut ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
              {isInGamut ? 'In Gamut' : 'Out of Gamut'}
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">Printability</span>
              <div className="group relative">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded w-48">
                  A score based on total ink coverage and other factors that affect how well this color will print.
                </div>
              </div>
            </div>
            <span className="font-medium">{printabilityScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div 
              className="h-2.5 rounded-full" 
              style={{ 
                width: `${printabilityScore}%`,
                background: `linear-gradient(90deg, 
                  ${printabilityScore < 20 ? '#ef4444' : '#f59e0b'} 0%, 
                  ${printabilityScore < 50 ? '#f59e0b' : '#10b981'} 100%)` 
              }}
            ></div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">Total Ink Coverage</span>
              <div className="group relative">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded w-48">
                  Sum of all CMYK values. For offset printing, aim for less than 300%.
                </div>
              </div>
            </div>
            <span className={maxInkCoverage > 300 ? 'text-red-500 font-semibold' : maxInkCoverage > 280 ? 'text-yellow-500 font-semibold' : ''}>
              {maxInkCoverage}%
            </span>
          </div>
          
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">Suggested Pantone</span>
              <div className="group relative">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded w-48">
                  An approximate Pantone spot color match (estimate only).
                </div>
              </div>
            </div>
            <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-sm">
              {pantoneName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Color application examples component
const ColorApplications = ({ hex }: { hex: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Applications</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Print Media</h4>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center h-10 pl-3 bg-white border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
              <div className="w-6 h-6 rounded-sm mr-3" style={{ backgroundColor: hex }}></div>
              <span>Brochure</span>
            </div>
            <div className="flex items-center h-10 pl-3 bg-white border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
              <div className="w-6 h-6 rounded-sm mr-3" style={{ backgroundColor: hex }}></div>
              <span>Business Card</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Digital</h4>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center h-10 pl-3 bg-white border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
              <div className="w-6 h-6 rounded-sm mr-3" style={{ backgroundColor: hex }}></div>
              <span>Website</span>
            </div>
            <div className="flex items-center h-10 pl-3 bg-white border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
              <div className="w-6 h-6 rounded-sm mr-3" style={{ backgroundColor: hex }}></div>
              <span>Mobile App</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Brand Colors</h4>
          <div className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700">
            <div className="w-full h-20 rounded" style={{ backgroundColor: hex }}></div>
            <div className="mt-2 text-center font-mono text-sm">{hex}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Share and save component
const ShareAndSave = ({ cmyk }: { cmyk: CMYK }) => {
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
          onClick={() => {
            if (typeof navigator.share === 'function') {
              navigator.share({
                title: 'CMYK Color',
                text: `Check out this CMYK color: C:${cmyk.c}%, M:${cmyk.m}%, Y:${cmyk.y}%, K:${cmyk.k}%`,
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

export default function CmykToHexConverter() {
  // Initial CMYK values
  const [cmyk, setCmyk] = useState<CMYK>({ c: 0, m: 100, y: 100, k: 0 });
  const [hexColor, setHexColor] = useState('#FF0000');
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);

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
  
  const copyEmbedCode = () => {
    const code = `<iframe src="https://rgbatohex.com/tools/cmyk-to-hex-converter?embed=true&c=${cmyk.c}&m=${cmyk.m}&y=${cmyk.y}&k=${cmyk.k}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="CMYK to HEX Color Converter"></iframe>`;
    
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
                  alt="CMYK to HEX Converter Logo" 
                  width={40}
                  height={40}
                  priority
                  className="animate-pulse"
                />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500">
                CMYK to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Convert CMYK print colors to web-friendly HEX color codes
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
                  <div className="text-sm opacity-90">cmyk({cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* CMYK input sliders */}
            <CMYKInput cmyk={cmyk} onChange={handleCmykChange} />
            
            {/* HEX value display */}
            <HexDisplay hex={hexColor} cmyk={cmyk} />
          </div>
        </div>
        
        {/* Print compatibility info */}
        <PrintInfo cmyk={cmyk} />
        
        {/* Color applications */}
        <ColorApplications hex={hexColor} />
        
        {/* Share and save */}
        <ShareAndSave cmyk={cmyk} />
        
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
                value={`<iframe src="https://rgbatohex.com/tools/cmyk-to-hex-converter?embed=true&c=${cmyk.c}&m=${cmyk.m}&y=${cmyk.y}&k=${cmyk.k}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="CMYK to HEX Color Converter"></iframe>`}
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
        
        {/* Help section */}
        {!isInIframe && (
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-sm">
            <h4 className="font-semibold mb-2">Tips for CMYK to HEX Conversion:</h4>
            <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>HEX colors are for screen display; CMYK colors are for print</li>
              <li>Some CMYK colors cannot be accurately represented in HEX format</li>
              <li>For printable content, keep total ink coverage below 300%</li>
              <li>For best results, use a color calibrated monitor</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}