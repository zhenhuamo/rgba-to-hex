'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { hexToBinary, isValidHexNumber, formatBinaryNumber, getCommonBinaryPatterns } from '@/utils/numberConverter';

// HexInput component: Hexadecimal number input (reused from decimal converter)
const HexInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const [isValid, setIsValid] = useState(true);
  
  const handleInput = (val: string) => {
    onChange(val);
    setIsValid(val === '' || isValidHexNumber(val));
  };
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">
          Hexadecimal Value
        </label>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Supports 0x prefix format
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 dark:text-gray-400 font-mono text-lg">0x</span>
        </div>
        <input
          type="text"
          value={value.replace(/^0x/i, '')}
          onChange={(e) => handleInput(e.target.value)}
          className={`w-full pl-12 px-4 py-3 border ${isValid ? 'border-gray-300 dark:border-gray-600' : 'border-red-500 dark:border-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-mono text-lg tracking-wider bg-white dark:bg-gray-800 uppercase`}
          placeholder="FF"
          spellCheck="false"
          autoComplete="off"
        />
        {!isValid && (
          <p className="mt-1 text-sm text-red-500">Please enter valid hexadecimal digits (0-9, A-F)</p>
        )}
      </div>

      {/* Common binary patterns quick selection */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Common Patterns:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {getCommonBinaryPatterns().slice(0, 8).map((pattern, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900 text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 transition-colors font-mono"
              onClick={() => onChange(pattern.hex)}
              title={`${pattern.hex} = ${pattern.binary} (${pattern.description})`}
            >
              {pattern.hex}
            </button>
          ))}
          <button
            className="px-3 py-1 text-sm bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-md transition-colors font-mono"
            onClick={() => {
              const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
              onChange(randomHex);
            }}
            title="Random hexadecimal number"
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

// BinaryOutput component: Binary result display with grouping options
const BinaryOutput = ({ hex }: { hex: string }) => {
  const [copied, setCopied] = useState(false);
  const [groupSize, setGroupSize] = useState(4);
  const result = hexToBinary(hex);
  
  const copyValue = async () => {
    if (result.isValid && result.binary) {
      try {
        await navigator.clipboard.writeText(result.binary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  if (!hex) {
    return (
      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">Enter a hexadecimal number to see the binary conversion</p>
      </div>
    );
  }

  if (!result.isValid) {
    return (
      <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <span className="text-red-700 dark:text-red-400 font-medium">Conversion Error</span>
        </div>
        <p className="text-red-600 dark:text-red-300">{result.error}</p>
      </div>
    );
  }

  const formattedBinary = formatBinaryNumber(result.binary, groupSize);

  return (
    <div className="space-y-4">
      {/* Grouping options */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">Group by:</span>
        <div className="flex gap-2">
          {[4, 8, 16].map((size) => (
            <button
              key={size}
              onClick={() => setGroupSize(size)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                groupSize === size
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900'
              }`}
            >
              {size} bits
            </button>
          ))}
        </div>
      </div>

      {/* Main result */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Binary Result</span>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Binary Conversion
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            value={formattedBinary}
            readOnly
            className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-l-lg font-mono text-lg focus:outline-none overflow-x-auto"
            style={{ fontFamily: 'Monaco, "Lucida Console", monospace' }}
          />
          <button
            onClick={copyValue}
            className={`px-6 py-3 ${copied ? 'bg-green-500' : 'bg-green-500 hover:bg-green-600'} text-white rounded-r-lg transition-colors flex items-center gap-2`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Conversion details */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Conversion Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Input (Hexadecimal):</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{hex.toUpperCase()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Output (Binary):</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{result.binary}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Grouped Display:</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{formattedBinary}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Binary Length:</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{result.binary.length} bits</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Hex Digits:</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{hex.replace(/^0x/i, '').length} digits</span>
          </div>
        </div>
      </div>

      {/* Bit-by-bit breakdown for shorter hex values */}
      {hex && hex.replace(/^0x/i, '').length <= 4 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Bit-by-Bit Breakdown</h3>
          <div className="space-y-2">
            {hex.replace(/^0x/i, '').toUpperCase().split('').map((hexDigit, index) => {
              const binarySegment = result.binary.substr(index * 4, 4);
              return (
                <div key={index} className="flex items-center gap-4 text-sm font-mono">
                  <div className="w-8 text-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                    {hexDigit}
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="w-12 text-center bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {binarySegment}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">
                    (decimal {parseInt(hexDigit, 16)})
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

// SearchParamsWrapper component to handle useSearchParams
const SearchParamsWrapper = ({ onParamsLoaded }: { onParamsLoaded: (params: { isEmbedded: boolean, defaultHex: string }) => void }) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const isEmbedded = searchParams.get('embed') === 'true';
    const defaultHex = searchParams.get('defaultHex') || '';
    onParamsLoaded({ isEmbedded, defaultHex });
  }, [searchParams, onParamsLoaded]);
  
  return null;
};

export default function HexToBinaryConverter() {
  const [hexValue, setHexValue] = useState('');
  const [isEmbedded, setIsEmbedded] = useState(false);

  const handleParamsLoaded = ({ isEmbedded, defaultHex }: { isEmbedded: boolean, defaultHex: string }) => {
    setIsEmbedded(isEmbedded);
    if (defaultHex) {
      setHexValue(defaultHex);
    }
  };

  const shareConverter = async () => {
    const url = `${window.location.origin}/tools/hex-to-binary-converter${hexValue ? `?defaultHex=${encodeURIComponent(hexValue)}` : ''}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Hex to Binary Converter',
          text: `Convert ${hexValue || 'hexadecimal numbers'} to binary with this free online tool`,
          url: url
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          await navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
        }
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  if (isEmbedded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchParamsWrapper onParamsLoaded={handleParamsLoaded} />
        </Suspense>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500 mb-2">
              Hex to Binary Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Convert hexadecimal numbers to binary with direct bit mapping and grouping options
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <HexInput value={hexValue} onChange={setHexValue} />
            </div>
            <div>
              <BinaryOutput hex={hexValue} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsWrapper onParamsLoaded={handleParamsLoaded} />
      </Suspense>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
                Hex to Binary Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              Professional hexadecimal to binary conversion tool with bit grouping and analysis
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={shareConverter}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share Tool
              </button>
            </div>
          </div>

          {/* Main Converter */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <HexInput value={hexValue} onChange={setHexValue} />
            </div>
            <div>
              <BinaryOutput hex={hexValue} />
            </div>
          </div>

          {/* Educational Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">About Hex to Binary Conversion</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">How It Works</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    Hexadecimal to binary conversion is one of the most direct number system conversions. Each hexadecimal digit corresponds exactly to 4 binary digits, because 16 = 2⁴.
                  </p>
                  <p>
                    This direct mapping relationship makes the conversion process very simple: just replace each hexadecimal character with its corresponding 4-bit binary number.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">Applications</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <div>• Low-level system programming and debugging</div>
                  <div>• Digital circuit design and analysis</div>
                  <div>• Network protocol packet parsing</div>
                  <div>• Bit operations and mask configuration</div>
                  <div>• Embedded system development</div>
                  <div>• Memory address manipulation</div>
                  <div>• Cryptographic data analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 