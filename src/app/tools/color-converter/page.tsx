'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ColorInput from '@/components/ColorInput';
import ColorPreview from '@/components/ColorPreview';
import { rgbaToHex, isValidRgba } from '@/utils/colorConverter';

export default function ColorConverter() {
  const [rgba, setRgba] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1
  });
  
  // State for client-side only features
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true after component mounts
    setMounted(true);
    
    // Check if running in iframe after component mounts on client
    setIsInIframe(window.self !== window.top);
  }, []);

  const handleChange = (key: keyof typeof rgba) => (value: number) => {
    const newRgba = { ...rgba, [key]: value };
    if (isValidRgba(newRgba)) {
      setRgba(newRgba);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(rgbaToHex(rgba));
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Only render fully after client-side hydration is complete
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${isInIframe ? 'p-0' : 'p-4'}`}>
      <div className="max-w-2xl mx-auto">
        {/* Only show title in standalone page, hide in iframe */}
        {!isInIframe && (
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image 
                src="/rgb.svg" 
                alt="RGBA to HEX Converter Logo" 
                width={40}
                height={40}
                priority
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                RGBA to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Easily convert RGBA color values to hexadecimal color codes
            </p>
          </div>
        )}

        {/* Color preview and control area */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 space-y-6 mb-6">
          {/* Color preview */}
          <div className="h-32 rounded-xl shadow-inner transition-colors duration-200 relative overflow-hidden"
            style={{
              backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
            }}
          >
            {/* Checkerboard background */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-4">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className={`${
                    (Math.floor(i / 8) + (i % 8)) % 2 === 0
                      ? 'bg-gray-200'
                      : 'bg-white'
                  } opacity-50`}
                />
              ))}
            </div>
          </div>

          {/* RGBA input controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ColorInput
              label="Red (R)"
              value={rgba.r}
              onChange={handleChange('r')}
              min={0}
              max={255}
            />
            <ColorInput
              label="Green (G)"
              value={rgba.g}
              onChange={handleChange('g')}
              min={0}
              max={255}
            />
            <ColorInput
              label="Blue (B)"
              value={rgba.b}
              onChange={handleChange('b')}
              min={0}
              max={255}
            />
            <ColorInput
              label="Alpha (A)"
              value={rgba.a}
              onChange={handleChange('a')}
              min={0}
              max={1}
              step={0.01}
            />
          </div>
        </div>

        {/* Color preview component */}
        <ColorPreview
          rgba={rgba}
          hexColor={rgbaToHex(rgba)}
          onCopy={copyToClipboard}
        />
        
        {/* Embed code generator - only show in standalone page */}
        {!isInIframe && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Embed This Tool</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Copy the code below to embed this color converter on your website:
            </p>
            <div className="relative">
              <textarea 
                className="w-full h-24 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm"
                readOnly
                value={`<iframe src="https://rgbatohex.com/tools/color-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to HEX Color Converter"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/color-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to HEX Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 