'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { hexToDecimal, isValidHexNumber, formatDecimalNumber, getCommonHexNumbers } from '@/utils/numberConverter';

// HexInput component: Hexadecimal number input
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
          className={`w-full pl-12 px-4 py-3 border ${isValid ? 'border-gray-300 dark:border-gray-600' : 'border-red-500 dark:border-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg tracking-wider bg-white dark:bg-gray-800 uppercase`}
          placeholder="FF"
          spellCheck="false"
          autoComplete="off"
        />
        {!isValid && (
          <p className="mt-1 text-sm text-red-500">Please enter valid hexadecimal digits (0-9, A-F)</p>
        )}
      </div>

      {/* Common hex numbers quick selection */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Common Numbers:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {getCommonHexNumbers().slice(0, 8).map((num, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 transition-colors font-mono"
              onClick={() => onChange(num.hex)}
              title={`${num.hex} = ${num.decimal} (${num.description})`}
            >
              {num.hex}
            </button>
          ))}
          <button
            className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-md transition-colors font-mono"
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

// DecimalOutput component: Decimal result display
const DecimalOutput = ({ hex }: { hex: string }) => {
  const [copied, setCopied] = useState(false);
  const result = hexToDecimal(hex);
  
  const copyValue = async () => {
    if (result.isValid && result.decimal) {
      try {
        await navigator.clipboard.writeText(result.decimal);
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
        <p className="text-gray-500 dark:text-gray-400">Enter a hexadecimal number to see the conversion result</p>
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

  return (
    <div className="space-y-4">
      {/* Main result */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Decimal Result</span>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Number Conversion
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            value={formatDecimalNumber(result.decimal)}
            readOnly
            className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-l-lg font-mono text-lg focus:outline-none"
          />
          <button
            onClick={copyValue}
            className={`px-6 py-3 ${copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-2`}
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
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Conversion Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Input (Hexadecimal):</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{hex.toUpperCase()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Output (Decimal):</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{result.decimal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Formatted Display:</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{formatDecimalNumber(result.decimal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Number Length:</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{result.decimal.length} digits</span>
          </div>
        </div>
      </div>
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

export default function HexToDecimalConverter() {
  const [hexValue, setHexValue] = useState('');
  const [isEmbedded, setIsEmbedded] = useState(false);

  const handleParamsLoaded = (params: { isEmbedded: boolean, defaultHex: string }) => {
    setIsEmbedded(params.isEmbedded);
    if (params.defaultHex) {
      setHexValue(params.defaultHex);
    }
  };

  const shareConverter = async () => {
    try {
      const url = `${window.location.origin}/tools/hex-to-decimal-converter${hexValue ? `?defaultHex=${encodeURIComponent(hexValue)}` : ''}`;
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  if (isEmbedded) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 min-h-[500px]">
        {/* Suspense wrapper for search params */}
        <Suspense fallback={null}>
          <SearchParamsWrapper onParamsLoaded={handleParamsLoaded} />
        </Suspense>
        
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Hexadecimal to Decimal
            </h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Online number base conversion tool
          </p>
        </div>

        <div className="space-y-6">
          <HexInput value={hexValue} onChange={setHexValue} />
          <DecimalOutput hex={hexValue} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Suspense wrapper for search params */}
      <Suspense fallback={null}>
        <SearchParamsWrapper onParamsLoaded={handleParamsLoaded} />
      </Suspense>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Hexadecimal to Decimal Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Professional number base conversion tool supporting hexadecimal numbers of any length
            </p>
          </div>

          {/* Main Converter */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <div className="space-y-8">
              <HexInput value={hexValue} onChange={setHexValue} />
              <DecimalOutput hex={hexValue} />
            </div>

            {/* Tools */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-center">
                <button
                  onClick={shareConverter}
                  className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share this converter
                </button>
              </div>
            </div>
          </div>

          {/* Educational Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Hexadecimal to Decimal Conversion Guide</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">What is Hexadecimal?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Hexadecimal is a base-16 number system that uses 16 characters (0-9 and A-F) to represent values. It&apos;s widely used in computer science because it can concisely represent binary data.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono">
                    <div>0 = 0</div><div>1 = 1</div><div>2 = 2</div><div>3 = 3</div>
                    <div>4 = 4</div><div>5 = 5</div><div>6 = 6</div><div>7 = 7</div>
                    <div>8 = 8</div><div>9 = 9</div><div>A = 10</div><div>B = 11</div>
                    <div>C = 12</div><div>D = 13</div><div>E = 14</div><div>F = 15</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Conversion Method</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  The method for converting hexadecimal to decimal is to multiply each digit by the corresponding power of 16, then sum the results:
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg font-mono text-sm">
                  <div className="mb-2">Example: 1A3₁₆ to decimal</div>
                  <div>1A3₁₆ = 1×16² + A×16¹ + 3×16⁰</div>
                  <div className="ml-6">= 1×256 + 10×16 + 3×1</div>
                  <div className="ml-6">= 256 + 160 + 3</div>
                  <div className="ml-6">= 419₁₀</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Applications</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Programming</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">Memory addresses, pointer values, register contents</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Web Design</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Color codes, CSS value conversion</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">System Analysis</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Error codes, status value parsing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 