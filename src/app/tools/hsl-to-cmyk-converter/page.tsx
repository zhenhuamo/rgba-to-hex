'use client';

import { useState, useEffect } from 'react';
import { hslToCmyk } from '@/utils/colorConverter';

// HSL Slider Component
const HSLInput = ({ hsl, onChange }: { 
  hsl: { h: number, s: number, l: number }, 
  onChange: (key: 'h' | 's' | 'l', value: number) => void 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">HSL Input</h3>
      
      {/* Hue Slider */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Hue (H)</label>
            <span className="text-sm text-gray-500 dark:text-gray-400">{hsl.h}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            value={hsl.h}
            onChange={(e) => onChange('h', parseInt(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0°</span>
            <span>180°</span>
            <span>360°</span>
          </div>
        </div>

        {/* Saturation Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Saturation (S)</label>
            <span className="text-sm text-gray-500 dark:text-gray-400">{hsl.s}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={hsl.s}
            onChange={(e) => onChange('s', parseInt(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-gray-500 to-current rounded-lg appearance-none cursor-pointer"
            style={{ 
              background: `linear-gradient(to right, hsl(${hsl.h}, 0%, ${hsl.l}%), hsl(${hsl.h}, 100%, ${hsl.l}%))`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Lightness Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Lightness (L)</label>
            <span className="text-sm text-gray-500 dark:text-gray-400">{hsl.l}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={hsl.l}
            onChange={(e) => onChange('l', parseInt(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{ 
              background: `linear-gradient(to right, hsl(${hsl.h}, ${hsl.s}%, 0%), hsl(${hsl.h}, ${hsl.s}%, 50%), hsl(${hsl.h}, ${hsl.s}%, 100%))`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* HSL Values Display */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mt-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">HSL Values</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-mono text-lg text-gray-800 dark:text-gray-200">{hsl.h}°</div>
              <div className="text-gray-500 dark:text-gray-400">Hue</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-lg text-gray-800 dark:text-gray-200">{hsl.s}%</div>
              <div className="text-gray-500 dark:text-gray-400">Saturation</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-lg text-gray-800 dark:text-gray-200">{hsl.l}%</div>
              <div className="text-gray-500 dark:text-gray-400">Lightness</div>
            </div>
          </div>

          {/* HSL CSS Code */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">HSL CSS Code</span>
              <button
                onClick={() => navigator.clipboard.writeText(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)}
                className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
              >
                Copy
              </button>
            </div>
            <code className="block bg-white dark:bg-gray-800 p-2 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
              hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

// CMYK Display Component
const CMYKDisplay = ({ cmyk }: { cmyk: { c: number, m: number, y: number, k: number } }) => {
  // Calculate total ink coverage
  const totalInk = cmyk.c + cmyk.m + cmyk.y + cmyk.k;
  const isHighInk = totalInk > 300;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">CMYK Output</h3>
      
      {/* CMYK Visual Bars */}
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
              <div className="w-3 h-3 rounded-full bg-gray-900"></div>
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

      {/* CMYK Values */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mt-6">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CMYK Values</h4>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="font-mono text-lg text-gray-800 dark:text-gray-200">{cmyk.c}%</div>
            <div className="text-gray-500 dark:text-gray-400">C</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-lg text-gray-800 dark:text-gray-200">{cmyk.m}%</div>
            <div className="text-gray-500 dark:text-gray-400">M</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-lg text-gray-800 dark:text-gray-200">{cmyk.y}%</div>
            <div className="text-gray-500 dark:text-gray-400">Y</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-lg text-gray-800 dark:text-gray-200">{cmyk.k}%</div>
            <div className="text-gray-500 dark:text-gray-400">K</div>
          </div>
        </div>

        {/* Total Ink Coverage Warning */}
        {isHighInk && (
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <div>
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">High Ink Coverage Warning</p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Total ink coverage is {totalInk.toFixed(1)}%. Values above 300% may cause printing issues.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CMYK CSS Code */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CMYK Code</span>
            <button
              onClick={() => navigator.clipboard.writeText(`cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`)}
              className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
            >
              Copy
            </button>
          </div>
          <code className="block bg-white dark:bg-gray-800 p-2 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
            cmyk({cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%)
          </code>
        </div>
      </div>
    </div>
  );
};

// Color Preview Component
const ColorPreview = ({ hsl }: { hsl: { h: number, s: number, l: number } }) => {
  const hslColor = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Preview</h3>
      
      {/* Large color preview */}
      <div className="relative">
        <div 
          className="w-full h-40 rounded-lg border-2 border-gray-200 dark:border-gray-600 mb-4"
          style={{ backgroundColor: hslColor }}
        ></div>
        
        {/* Color info overlay */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg">
            <div className="text-sm font-medium">Current HSL Color</div>
            <div className="font-mono text-xs mt-1">{hslColor}</div>
          </div>
        </div>
      </div>

      {/* Usage examples */}
      <div className="space-y-3">
        <div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CSS Background</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm font-mono">
            background-color: {hslColor};
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CSS Text Color</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm font-mono">
            color: {hslColor};
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function HSLToCMYKConverter() {
  // Check if running in iframe
  const [isInIframe, setIsInIframe] = useState(false);
  
  useEffect(() => {
    setIsInIframe(window.self !== window.top);
  }, []);

  // Default HSL values (a nice blue color)
  const [hsl, setHsl] = useState({ h: 210, s: 80, l: 50 });
  // Calculated CMYK values
  const [cmyk, setCmyk] = useState({ c: 0, m: 0, y: 0, k: 0 });
  
  // Load HSL values from URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const h = params.get('h');
      const s = params.get('s');
      const l = params.get('l');
      
      if (h !== null && s !== null && l !== null) {
        const newHsl = {
          h: Math.min(360, Math.max(0, parseInt(h))),
          s: Math.min(100, Math.max(0, parseInt(s))),
          l: Math.min(100, Math.max(0, parseInt(l)))
        };
        setHsl(newHsl);
      }
    }
  }, []);
  
  // Update CMYK values when HSL values change
  useEffect(() => {
    const newCmyk = hslToCmyk({ h: hsl.h, s: hsl.s, l: hsl.l });
    setCmyk(newCmyk);
    
    // Update URL parameters (optional)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('h', hsl.h.toString());
      url.searchParams.set('s', hsl.s.toString());
      url.searchParams.set('l', hsl.l.toString());
      window.history.replaceState({}, '', url.toString());
    }
  }, [hsl]);
  
  // Handle HSL value changes
  const handleHslChange = (key: 'h' | 's' | 'l', value: number) => {
    // Ensure values are within valid ranges
    let clampedValue = value;
    if (key === 'h') {
      clampedValue = Math.min(360, Math.max(0, value));
    } else {
      clampedValue = Math.min(100, Math.max(0, value));
    }
    
    setHsl(prev => ({ ...prev, [key]: clampedValue }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {!isInIframe && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">HSL to CMYK Converter</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Convert HSL (Hue, Saturation, Lightness) color values to CMYK (Cyan, Magenta, Yellow, Key/Black) format for professional printing. Adjust the HSL sliders below to create your color.
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side: HSL input and color preview */}
        <div className="space-y-6">
          <HSLInput hsl={hsl} onChange={handleHslChange} />
          <ColorPreview hsl={hsl} />
        </div>
        
        {/* Right side: CMYK display */}
        <div>
          <CMYKDisplay cmyk={cmyk} />
          
          {!isInIframe && (
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About HSL to CMYK Conversion</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                HSL (Hue, Saturation, Lightness) provides an intuitive way to select colors, while CMYK (Cyan, Magenta, Yellow, Key/Black) is the standard for professional printing.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-sm text-blue-800 dark:text-blue-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p>
                    <strong>Printing Tip:</strong> This conversion goes through RGB color space. For the most accurate print colors, always test with your specific printer and paper combination.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {!isInIframe && (
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Conversion Process: HSL → RGB → CMYK</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Since HSL and CMYK are different color models, the conversion process involves an intermediate step through RGB:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-3">
              <li><strong>HSL to RGB:</strong> Convert the HSL values to RGB color space using color theory formulas.</li>
              <li><strong>RGB to CMYK:</strong> Transform the RGB values to CMYK using subtractive color model calculations.</li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">When to Use HSL vs CMYK</h3>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="font-medium mb-2">Use HSL for:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Intuitive color selection</li>
                  <li>Creating color harmonies</li>
                  <li>Web design and digital art</li>
                  <li>Color theme development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Use CMYK for:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Professional printing</li>
                  <li>Print design projects</li>
                  <li>Color separation processes</li>
                  <li>Commercial print production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 