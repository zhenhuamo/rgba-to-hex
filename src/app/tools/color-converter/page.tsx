'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { rgbaToHex, isValidRgba } from '@/utils/colorConverter';

export default function ColorConverter() {
  const [rgba, setRgba] = useState({
    r: 255,
    g: 0,
    b: 128,
    a: 1
  });
  
  // State for client-side only features
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copiedHex, setCopiedHex] = useState(false);
  const [copiedRgba, setCopiedRgba] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    // Set mounted state to true after component mounts
    setMounted(true);
    
    // Check if running in iframe after component mounts on client
    setIsInIframe(window.self !== window.top);
    
    // Parse URL parameters for initial color (if available)
    const params = new URLSearchParams(window.location.search);
    const r = params.get('r');
    const g = params.get('g');
    const b = params.get('b');
    const a = params.get('a');
    
    if (r && g && b) {
      const newRgba = {
        r: Math.min(255, Math.max(0, parseInt(r) || 255)),
        g: Math.min(255, Math.max(0, parseInt(g) || 255)),
        b: Math.min(255, Math.max(0, parseInt(b) || 255)),
        a: a ? Math.min(1, Math.max(0, parseFloat(a) || 1)) : 1
      };
      
      if (isValidRgba(newRgba)) {
        setRgba(newRgba);
      }
    }
  }, []);

  const handleChange = (key: keyof typeof rgba) => (value: number) => {
    const newRgba = { ...rgba, [key]: value };
    if (isValidRgba(newRgba)) {
      setRgba(newRgba);
    }
  };

  const copyHexToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(rgbaToHex(rgba));
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  const copyRgbaToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
      setCopiedRgba(true);
      setTimeout(() => setCopiedRgba(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  const shareColor = async () => {
    const url = `${window.location.origin}${window.location.pathname}?r=${rgba.r}&g=${rgba.g}&b=${rgba.b}&a=${rgba.a}`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'RGBA Color Share',
          text: `Check out this color: rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`,
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
                  alt="RGBA to HEX Converter Logo" 
                  width={40}
                  height={40}
                  priority
                  className="animate-pulse"
                />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                RGBA to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Easily convert RGBA color values to hexadecimal color codes
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
                  backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
                }}
              ></div>
            </div>
            
            {/* Color info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30 backdrop-blur-sm text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xl">{rgbaToHex(rgba)}</div>
                  <div className="text-sm opacity-90">rgba({rgba.r}, {rgba.g}, {rgba.b}, {rgba.a})</div>
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
            {/* RGBA input controls */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Values</h3>
            
              <div className="space-y-5">
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
                        value={rgba.r}
                        onChange={(e) => handleChange('r')(Number(e.target.value))}
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
                      value={rgba.r}
                      onChange={(e) => handleChange('r')(Number(e.target.value))}
                      className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
                      style={{
                        WebkitAppearance: 'none',
                        appearance: 'none'
                      }}
                    />
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
                        value={rgba.g}
                        onChange={(e) => handleChange('g')(Number(e.target.value))}
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
                      value={rgba.g}
                      onChange={(e) => handleChange('g')(Number(e.target.value))}
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
                        value={rgba.b}
                        onChange={(e) => handleChange('b')(Number(e.target.value))}
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
                      value={rgba.b}
                      onChange={(e) => handleChange('b')(Number(e.target.value))}
                      className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
                      style={{
                        WebkitAppearance: 'none',
                        appearance: 'none'
                      }}
                    />
                  </div>
                </div>
                
                {/* Alpha slider */}
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-transparent to-gray-500"></span>
                      Alpha (A)
                    </label>
                    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <input
                        type="number"
                        min="0"
                        max="1"
                        step="0.01"
                        value={rgba.a}
                        onChange={(e) => handleChange('a')(Number(e.target.value))}
                        className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                  <div className="relative mt-1">
                    <div className="absolute inset-0 h-3 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-8 grid-rows-1">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-full ${i % 2 === 0 ? 'bg-gray-200 dark:bg-gray-600' : 'bg-white dark:bg-gray-500'}`}
                          />
                        ))}
                      </div>
                      <div 
                        className="absolute inset-0" 
                        style={{
                          background: `linear-gradient(to right, rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 0), rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1))`
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={rgba.a}
                      onChange={(e) => handleChange('a')(Number(e.target.value))}
                      className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
                      style={{
                        WebkitAppearance: 'none',
                        appearance: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Color code display */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Codes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">HEX</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Web, CSS</span>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      value={rgbaToHex(rgba)}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
                    />
                    <button
                      onClick={copyHexToClipboard}
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
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">RGBA</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">CSS</span>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      value={`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-l-lg font-mono text-base focus:outline-none focus:ring-0"
                    />
                    <button
                      onClick={copyRgbaToClipboard}
                      className={`px-4 py-2 ${copiedRgba ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-1`}
                    >
                      {copiedRgba ? (
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
            
            {/* Color harmonies */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Variations</h3>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Shades</h4>
                <div className="flex space-x-1 h-12">
                  {[0.2, 0.4, 0.6, 0.8, 1].map((opacity, index) => (
                    <div 
                      key={index} 
                      className={`flex-1 ${index === 0 ? 'rounded-l-lg' : ''} ${index === 4 ? 'rounded-r-lg' : ''} relative`}
                    >
                      <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className={`${
                              (Math.floor(i / 4) + (i % 4)) % 2 === 0
                                ? 'bg-gray-200 dark:bg-gray-600'
                                : 'bg-white dark:bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                      <div 
                        className="absolute inset-0" 
                        style={{ backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${opacity})` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Usage tips */}
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl text-sm">
              <h4 className="font-semibold mb-2">Tips:</h4>
              <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Use transparency (Alpha) for overlays, shadows, and gradients</li>
                <li>HEX colors with alpha use 8 digits: <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">#RRGGBBAA</code></li>
                <li>Alpha value of 1 means fully opaque, 0 means fully transparent</li>
              </ul>
            </div>
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
                value={`<iframe src="https://rgbatohex.com/tools/color-converter?embed=true&r=${rgba.r}&g=${rgba.g}&b=${rgba.b}&a=${rgba.a}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to HEX Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/color-converter?embed=true&r=${rgba.r}&g=${rgba.g}&b=${rgba.b}&a=${rgba.a}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to HEX Color Converter"></iframe>`;
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