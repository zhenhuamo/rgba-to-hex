import React, { useState } from 'react';
import { hexToHsl, hslToHex, hexToRgb } from '@/utils/colorNameConverter';

interface Harmony {
  name: string;
  description: string;
  colors: string[];
}

function getHarmonies(baseHex: string): Harmony[] {
  const hsl = hexToHsl(baseHex);
  if (!hsl) return [];
  const { h, s, l } = hsl;
  // Helper to clamp hue
  const hue = (deg: number) => ((deg % 360) + 360) % 360;
  // Helper to hex
  const toHex = (hh: number, ss = s, ll = l) => hslToHex({ h: hue(hh), s: ss, l: ll });

  return [
    {
      name: 'Complementary',
      description: 'A color directly opposite on the color wheel, creating strong contrast.',
      colors: [baseHex, toHex(h + 180)]
    },
    {
      name: 'Analogous',
      description: 'Colors next to each other on the color wheel, creating harmonious blends.',
      colors: [toHex(h - 30), baseHex, toHex(h + 30)]
    },
    {
      name: 'Triadic',
      description: 'Three colors evenly spaced on the color wheel, offering vibrant contrast.',
      colors: [baseHex, toHex(h + 120), toHex(h + 240)]
    },
    {
      name: 'Split-Complementary',
      description: 'A base color and the two colors adjacent to its complement, for less tension than direct complementary.',
      colors: [baseHex, toHex(h + 150), toHex(h + 210)]
    },
    {
      name: 'Monochromatic',
      description: 'Variations in lightness and saturation of a single hue.',
      colors: [
        hslToHex({ h, s: Math.max(30, s - 30), l: Math.min(95, l + 20) }),
        baseHex,
        hslToHex({ h, s: Math.min(100, s + 20), l: Math.max(10, l - 20) })
      ]
    }
  ];
}

interface Props {
  baseColor: string; // HEX
}

const ColorHarmonySuggestions: React.FC<Props> = ({ baseColor }) => {
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

  if (!baseColor) return null;
  const harmonies = getHarmonies(baseColor);

  return (
    <div className="space-y-8">
      <style jsx>{`
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

      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl shadow-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Color Harmony Suggestions
          </h2>
        </div>

        <div className="space-y-6">
          {harmonies.map((harmony) => (
            <div key={harmony.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{harmony.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{harmony.description}</p>
              <div className="flex flex-wrap gap-4">
                {harmony.colors.map((hex, idx) => {
                  const rgb = hexToRgb(hex);
                  const colorInfo = `HEX: ${hex}\nRGB: rgb(${rgb?.r}, ${rgb?.g}, ${rgb?.b})`;
                  
                  return (
                    <div key={idx} className="group relative">
                      <div className="flex flex-col items-center">
                        <div className="relative">
                          <div
                            className="w-16 h-16 rounded-xl shadow-lg border-2 border-white/40 mb-2 group-hover:scale-110 transition-transform duration-200"
                            style={{ backgroundColor: hex }}
                          />
                          
                          {/* Copy button */}
                          <button
                            onClick={() => copyValue(colorInfo, `harmony-${hex}-${idx}`)}
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 p-1.5 bg-white/30 hover:bg-white/50 rounded-lg transition-all duration-300"
                            title="Copy color information"
                          >
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </button>

                          {/* Copy Success Indicator */}
                          {copied === `harmony-${hex}-${idx}` && (
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow-lg animate-fade-in-out z-10">
                              Copied!
                            </div>
                          )}
                        </div>
                        
                        <div className="text-center">
                          <span className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-white/20 rounded-md px-2 py-1">
                            {hex}
                          </span>
                          {rgb && (
                            <div className="text-xs font-mono text-gray-600 dark:text-gray-400 mt-1">
                              rgb({rgb.r}, {rgb.g}, {rgb.b})
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorHarmonySuggestions; 