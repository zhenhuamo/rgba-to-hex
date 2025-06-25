'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ColorName } from '@/type/colornames';
import colorNamesData from '@/type/colornames.json';
import { hexToRgb,  findClosestColorName, findSimilarColors, searchColorNames, isValidHex, isValidRgb, hexToHsl, hexToCmyk } from '@/utils/colorNameConverter';
import ColorCategoryBrowser from './ColorCategoryBrowser';
import ColorHarmonySuggestions from './ColorHarmonySuggestions';

// ColorInput component
const ColorInput = ({ value, type, onChange }: { 
  value: string, 
  type: 'hex' | 'rgb' | 'name',
  onChange: (value: string, type: 'hex' | 'rgb' | 'name') => void 
}) => {
  const [isValid, setIsValid] = useState(true);
  
  const handleInput = (val: string) => {
    onChange(val, type);
    if (type === 'hex') {
      setIsValid(val === '' || isValidHex(val));
    } else if (type === 'rgb') {
      const [r, g, b] = val.split(',').map(n => parseInt(n.trim()));
      setIsValid(val === '' || isValidRgb(r, g, b));
    } else {
      setIsValid(true);
    }
  };

  const getCommonColors = () => [
    { name: 'Red', hex: '#FF0000', rgb: '255,0,0' },
    { name: 'Blue', hex: '#0000FF', rgb: '0,0,255' },
    { name: 'Green', hex: '#00FF00', rgb: '0,255,0' },
    { name: 'Orange', hex: '#FFA500', rgb: '255,165,0' },
    { name: 'Purple', hex: '#800080', rgb: '128,0,128' },
    { name: 'Yellow', hex: '#FFFF00', rgb: '255,255,0' },
    { name: 'Pink', hex: '#FFC0CB', rgb: '255,192,203' },
    { name: 'Brown', hex: '#A52A2A', rgb: '165,42,42' },
  ];
  
  return (
    <div className="space-y-6">
      {/* Type Switcher */}
      <div className="flex bg-white/20 backdrop-blur-sm rounded-xl p-1 border border-white/30">
        {(['hex', 'rgb', 'name'] as const).map((t) => (
          <button
            key={t}
            className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
              type === t
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                : 'text-gray-700 dark:text-gray-300 hover:bg-white/30 hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => onChange(value, t)}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200">
          {type === 'hex' ? '🎨 HEX Color' : type === 'rgb' ? '🔢 RGB Color' : '🏷️ Color Name'}
        </label>
        <div className="text-sm text-white/70 bg-white/10 rounded-lg px-3 py-2">
          {type === 'hex' && 'Format: #FF0000 or ff0000'}
          {type === 'rgb' && 'Format: 255,0,0 (comma separated)'}
          {type === 'name' && 'Format: Red, Blue, Coral, etc.'}
        </div>
      </div>
      
      <div className="relative">
        <div className="flex gap-3">
          {/* Color Preview */}
          {type !== 'name' && (
            <div className="w-20 h-14 rounded-xl shadow-xl overflow-hidden border-3 border-white/50 backdrop-blur-sm">
              <div
                className="w-full h-full transition-all duration-300"
                style={{
                  backgroundColor: type === 'hex' ? value : type === 'rgb' ? `rgb(${value})` : 'transparent',
                }}
              />
            </div>
          )}

          <div className="flex-1">
            <input
              type="text"
              value={value}
              onChange={(e) => handleInput(e.target.value)}
              className={`w-full px-6 py-4 bg-white/30 backdrop-blur-sm border-2 ${isValid ? 'border-white/40 focus:border-blue-400/60' : 'border-red-400/60'} rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400/50 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 text-lg font-medium transition-all duration-300 ${type === 'hex' ? 'font-mono tracking-wider' : ''}`}
              placeholder={
                type === 'hex' ? '#FF0000 or ff0000' :
                type === 'rgb' ? '255, 0, 0' :
                'Try Red, Blue, Coral...'
              }
              spellCheck="false"
              autoComplete="off"
            />
            {!isValid && (
              <p className="mt-2 text-sm text-red-400 bg-red-500/20 rounded-lg px-3 py-2">
                {type === 'hex' && 'Please enter a valid HEX color (e.g., #FF0000)'}
                {type === 'rgb' && 'Please enter valid RGB values (e.g., 255,0,0)'}
              </p>
            )}
          </div>

          {type === 'hex' && (
            <div className="relative">
              <input
                type="color"
                value={isValidHex(value) ? value : '#000000'}
                onChange={(e) => onChange(e.target.value, type)}
                className="w-16 h-14 rounded-xl cursor-pointer border-3 border-white/50 shadow-xl transform hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl shadow-lg pointer-events-none"></div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          Common Colors
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {getCommonColors().map((color) => (
            <button
              key={color.name}
              className="group flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 hover:shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => onChange(
                type === 'hex' ? color.hex : 
                type === 'rgb' ? color.rgb : 
                color.name, 
                type
              )}
              title={`${color.name} - ${color.hex} - rgb(${color.rgb})`}
            >
              <div 
                className="w-8 h-8 rounded-lg shadow-lg border-2 border-white/50 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: color.hex }}
              />
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{color.name}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                  {type === 'hex' ? color.hex : 
                   type === 'rgb' ? color.rgb : 
                   color.name}
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Random Color Button */}
        <button
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
          onClick={() => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            if (type === 'hex') {
              onChange(randomColor, type);
            } else if (type === 'rgb') {
              const rgb = hexToRgb(randomColor);
              if (rgb) {
                onChange(`${rgb.r},${rgb.g},${rgb.b}`, type);
              }
            } else {
              // Find closest color name for random color
              const rgb = hexToRgb(randomColor);
              if (rgb) {
                const closest = findClosestColorName(rgb, colorNamesData as ColorName[]);
                onChange(closest.name, type);
              }
            }
          }}
          title="Generate Random Color"
        >
          <span className="text-2xl">🎲</span>
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

// ColorOutput component
const ColorOutput = ({ 
  matchedColor, 
  similarColors, 
  error 
}: { 
  matchedColor: ColorName | null,
  similarColors: ColorName[],
  error: string 
}) => {
  const [copied, setCopied] = useState<string | null>(null);
  
  const copyValue = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  if (error) {
    return (
      <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-red-500/30 rounded-lg">
            <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <span className="text-red-200 font-bold text-lg">⚠️ Conversion Error</span>
        </div>
        <p className="text-red-100 bg-red-500/20 rounded-lg px-4 py-3">{error}</p>
      </div>
    );
  }

  if (!matchedColor) {
    return (
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-8 text-center">
        <div className="relative mb-6">
          <svg className="w-20 h-20 text-white/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 3a2 2 0 012 2v12a4 4 0 01-4 4h-2a2 2 0 01-2-2V5a2 2 0 012-2h4z" />
          </svg>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 translate-x-4 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-x-4 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <p className="text-white/90 text-xl font-semibold mb-3">🎨 Waiting for Color Input</p>
        <p className="text-white/70 text-base mb-4">Supports multiple color formats, instant conversion display</p>
        <div className="flex justify-center gap-3">
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm text-white/80 font-medium"># HEX</span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm text-white/80 font-medium">🔢 RGB</span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm text-white/80 font-medium">🏷️ Name</span>
        </div>
      </div>
    );
  }

  const rgb = hexToRgb(matchedColor.hex);
  const hsl = hexToHsl(matchedColor.hex);
  const cmyk = hexToCmyk(matchedColor.hex);

  if (!rgb || !hsl || !cmyk) {
    return (
      <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-6">
        <p className="text-red-600 dark:text-red-300">Error processing color values</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main Color Result */}
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
        {/* Color Header */}
        <div className="relative h-32">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: matchedColor.hex }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
              {matchedColor.name}
            </h3>
            <div className="flex items-center gap-3">
              {matchedColor.category && (
                <span className="inline-block px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                  {matchedColor.category}
                </span>
              )}
              <span className="inline-block px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-sm text-white font-mono">
                {matchedColor.hex}
              </span>
            </div>
          </div>
        </div>

        {/* Color Values */}
        <div className="p-6 space-y-5">
          {/* HEX */}
          <div className="flex items-center justify-between bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-4 hover:bg-white/40 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <span className="text-white font-bold text-sm">#</span>
              </div>
              <div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">HEX Color</span>
                <div className="font-mono text-xl font-bold text-gray-900 dark:text-white">{matchedColor.hex}</div>
              </div>
            </div>
            <button
              onClick={() => copyValue(matchedColor.hex, 'hex')}
              className={`px-5 py-3 ${copied === 'hex' ? 'bg-green-500 shadow-green-500/50' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-blue-500/50'} text-white rounded-xl transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              {copied === 'hex' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>

          {/* RGB */}
          <div className="flex items-center justify-between bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-4 hover:bg-white/40 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg">
                <span className="text-white font-bold text-sm">RGB</span>
              </div>
              <div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">RGB Color</span>
                <div className="font-mono text-xl font-bold text-gray-900 dark:text-white">rgb({rgb.r}, {rgb.g}, {rgb.b})</div>
              </div>
            </div>
            <button
              onClick={() => copyValue(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}
              className={`px-5 py-3 ${copied === 'rgb' ? 'bg-green-500 shadow-green-500/50' : 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 shadow-green-500/50'} text-white rounded-xl transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              {copied === 'rgb' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Additional Formats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-4 hover:bg-white/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-md">
                  <span className="text-white font-bold text-xs">HSL</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">HSL Format</span>
              </div>
              <div className="font-mono text-lg font-semibold text-gray-900 dark:text-white">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-4 hover:bg-white/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-md">
                  <span className="text-white font-bold text-xs">CMYK</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">CMYK Format</span>
              </div>
              <div className="font-mono text-lg font-semibold text-gray-900 dark:text-white">cmyk({cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Colors */}
      {similarColors.length > 0 && (
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl shadow-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Similar Colors
            </h3>
          </div>
          <div className="space-y-4">
            {similarColors.map((color, index) => {
              const rgb = hexToRgb(color.hex);
              const colorInfo = `${color.name}\nHEX: ${color.hex}\nRGB: rgb(${rgb?.r}, ${rgb?.g}, ${rgb?.b})`;
              
              return (
                <div 
                  key={color.hex} 
                  className="group relative transform hover:scale-102 transition-all duration-300"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-5 hover:bg-white/30 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-6">
                      {/* Color Preview */}
                      <div 
                        className="w-24 h-24 rounded-xl shadow-lg border-2 border-white/50 group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      
                      {/* Color Information */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">
                            {color.name}
                          </h3>
                          <button
                            onClick={() => copyValue(colorInfo, `color-${color.hex}`)}
                            className="opacity-0 group-hover:opacity-100 p-3 bg-white/30 hover:bg-white/50 rounded-xl transition-all duration-300 flex-shrink-0"
                            title="Copy color information"
                          >
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12">HEX:</span>
                            <div className="text-base font-mono text-gray-800 dark:text-white bg-white/30 rounded-lg px-3 py-2 flex-1">
                              {color.hex}
                            </div>
                          </div>
                          {rgb && (
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12">RGB:</span>
                              <div className="text-base font-mono text-gray-800 dark:text-white bg-white/30 rounded-lg px-3 py-2 flex-1">
                                rgb({rgb.r}, {rgb.g}, {rgb.b})
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Copy Success Indicator */}
                    {copied === `color-${color.hex}` && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-fade-in-out">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const SearchParamsWrapper = ({ onParamsLoaded }: { onParamsLoaded: (params: { isEmbedded: boolean, defaultColor: string, defaultType: string }) => void }) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const isEmbedded = searchParams.get('embed') === 'true';
    const defaultColor = searchParams.get('defaultColor') || '';
    const defaultType = searchParams.get('defaultType') || 'hex';
    onParamsLoaded({ isEmbedded, defaultColor, defaultType });
  }, [searchParams, onParamsLoaded]);
  
  return null;
};

export default function ColorNameConverter() {
  const [inputColor, setInputColor] = useState('');
  const [inputType, setInputType] = useState<'hex' | 'rgb' | 'name'>('hex');
  const [matchedColor, setMatchedColor] = useState<ColorName | null>(null);
  const [similarColors, setSimilarColors] = useState<ColorName[]>([]);
  const [error, setError] = useState('');
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [selectedCategoryColor, setSelectedCategoryColor] = useState<string>('');

  const handleParamsLoaded = ({ isEmbedded, defaultColor, defaultType }: { isEmbedded: boolean, defaultColor: string, defaultType: string }) => {
    setIsEmbedded(isEmbedded);
    if (defaultColor) {
      setInputColor(defaultColor);
      setInputType(defaultType as 'hex' | 'rgb' | 'name');
      handleColorInput(defaultColor, defaultType as 'hex' | 'rgb' | 'name');
    }
  };

  const handleColorInput = (value: string, type: 'hex' | 'rgb' | 'name') => {
    setInputColor(value);
    setInputType(type);
    setError('');

    if (!value) {
      setMatchedColor(null);
      setSimilarColors([]);
      return;
    }

    try {
      let targetRgb;
      
      if (type === 'hex') {
        if (!isValidHex(value)) {
          setError('Invalid HEX color format');
          return;
        }
        targetRgb = hexToRgb(value);
      } else if (type === 'rgb') {
        const [r, g, b] = value.split(',').map(n => parseInt(n.trim()));
        if (!isValidRgb(r, g, b)) {
          setError('Invalid RGB values');
          return;
        }
        targetRgb = { r, g, b };
      } else {
        // Search by name
        const matches = searchColorNames(value, colorNamesData as ColorName[]);
        if (matches.length > 0) {
          setMatchedColor(matches[0]);
          setSimilarColors(matches.slice(1, 6));
          return;
        } else {
          setError('No matching color name found');
          return;
        }
      }

      if (targetRgb) {
        const closest = findClosestColorName(targetRgb, colorNamesData as ColorName[]);
        const similar = findSimilarColors(targetRgb, colorNamesData as ColorName[]);
        setMatchedColor(closest);
        setSimilarColors(similar);
      }
    } catch (err) {
      console.error('Error processing color:', err);
      setError('Invalid color format');
    }
  };

  return (
    <div className={`min-h-screen ${isEmbedded ? 'p-4' : 'p-8'}`} style={{
      backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: floatAnimation 6s ease-in-out infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .dark .glass-effect {
          background: rgba(17, 24, 39, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .animate-fade-in-out {
          animation: fadeInOut 2s ease-in-out forwards;
        }
      `}</style>

      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsWrapper onParamsLoaded={handleParamsLoaded} />
      </Suspense>

      <div className={`mx-auto ${isEmbedded ? 'max-w-full' : 'max-w-7xl'}`}>
        <div className={`text-center ${isEmbedded ? 'mb-6' : 'mb-12'} relative`}>
          {!isEmbedded && (
            <>
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 float-animation"></div>
                <div className="absolute -top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-16 left-1/4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 float-animation" style={{animationDelay: '4s'}}></div>
              </div>
            </>
          )}
          
          <div className={`relative z-10 glass-effect rounded-3xl ${isEmbedded ? 'p-4' : 'p-8'} mx-4`}>
            <div className={`flex items-center justify-center gap-4 ${isEmbedded ? 'mb-3' : 'mb-6'}`}>
              {/* Complete Color Palette Icon */}
              <svg className={`${isEmbedded ? 'w-8 h-8' : 'w-12 h-12'} text-white drop-shadow-lg`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 3a2 2 0 012 2v12a4 4 0 01-4 4h-2a2 2 0 01-2-2V5a2 2 0 012-2h4z" />
                <circle cx="9" cy="9" r="1" fill="currentColor" />
                <circle cx="9" cy="12" r="1" fill="currentColor" />
                <circle cx="9" cy="15" r="1" fill="currentColor" />
                <circle cx="15" cy="9" r="1" fill="currentColor" />
                <circle cx="15" cy="12" r="1" fill="currentColor" />
              </svg>
              <h1 className={`${isEmbedded ? 'text-2xl md:text-3xl' : 'text-5xl'} font-bold text-white drop-shadow-lg`}>
                Color Name Converter Tool
          </h1>
            </div>
            {!isEmbedded && (
              <>
                <p className="text-white/90 text-xl mb-6 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                  🎨 Professional color conversion tool that supports instant conversion between color names, HEX, and RGB values. Designed for designers and developers.
                </p>
                <div className="flex justify-center gap-4 text-sm text-white/80">
                  <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    ✨ Real-time Preview
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    🎯 Precise Matching
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    📋 One-click Copy
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 px-4 lg:grid-rows-1 lg:items-stretch">
          {/* Input Area */}
          <div className="space-y-6 flex flex-col">
            <div className="glass-effect rounded-3xl shadow-2xl p-8 border-0 transform hover:scale-105 transition-all duration-300 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Color Input
                </h2>
              </div>
              <div className="flex-1">
                <ColorInput
                  value={inputColor}
                  type={inputType}
                  onChange={handleColorInput}
                />
              </div>
            </div>
          </div>

          {/* Output Area */}
          <div className="space-y-6 flex flex-col">
            <div className="glass-effect rounded-3xl shadow-2xl p-8 border-0 transform hover:scale-105 transition-all duration-300 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Conversion Result
                </h2>
              </div>
              <div className="flex-1">
                <ColorOutput
                  matchedColor={matchedColor}
                  similarColors={similarColors}
                  error={error}
                />
              </div>
            </div>
          </div>
        </div>

        {/* New: Color Category Browser & Harmony Suggestions */}
        <div className="mt-16 space-y-12">
          <ColorCategoryBrowser
            onColorSelect={(color) => setSelectedCategoryColor(color.hex)}
          />
          <ColorHarmonySuggestions baseColor={selectedCategoryColor} />
        </div>

        <div className={`text-center ${isEmbedded ? 'mt-8' : 'mt-16'} px-4`}>
          <div className={`glass-effect rounded-2xl ${isEmbedded ? 'p-4' : 'p-6'} mx-auto max-w-4xl`}>
            <p className={`text-white/90 ${isEmbedded ? 'text-base' : 'text-lg'} font-medium mb-4`}>
              💡 <strong>Pro Tips</strong>
            </p>
            <div className={`grid ${isEmbedded ? 'grid-cols-1 md:grid-cols-3' : 'md:grid-cols-3'} gap-4 text-white/80`}>
              <div className="bg-white/10 rounded-xl p-4">
                <span className={`${isEmbedded ? 'text-xl' : 'text-2xl'} mb-2 block`}>🎨</span>
                <p className={isEmbedded ? 'text-sm' : ''}>HEX format starts with #</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <span className={`${isEmbedded ? 'text-xl' : 'text-2xl'} mb-2 block`}>🔢</span>
                <p className={isEmbedded ? 'text-sm' : ''}>RGB values separated by commas</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <span className={`${isEmbedded ? 'text-xl' : 'text-2xl'} mb-2 block`}>🏷️</span>
                <p className={isEmbedded ? 'text-sm' : ''}>Try color names like &quot;coral&quot; or &quot;turquoise&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 