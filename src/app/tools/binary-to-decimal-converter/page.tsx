'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { binaryToDecimal, isValidBinaryNumber, formatDecimalNumber, getCommonBinaryNumbers, formatBinaryNumber } from '@/utils/numberConverter';

// BinaryInput component
const BinaryInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const [isValid, setIsValid] = useState(true);
  
  const handleInput = (val: string) => {
    onChange(val);
    setIsValid(val === '' || isValidBinaryNumber(val));
  };
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">
          Binary Number
        </label>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Only 0 and 1 allowed
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 dark:text-gray-400 font-mono text-lg">0b</span>
        </div>
        <input
          type="text"
          value={value.replace(/\s/g, '')}
          onChange={(e) => handleInput(e.target.value)}
          className={`w-full pl-12 px-4 py-3 border ${isValid ? 'border-gray-300 dark:border-gray-600' : 'border-red-500 dark:border-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg tracking-wider bg-white dark:bg-gray-800`}
          placeholder="1010"
          spellCheck="false"
          autoComplete="off"
        />
        {!isValid && (
          <p className="mt-1 text-sm text-red-500">Please enter a valid binary number (only 0 and 1 allowed)</p>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Common Binary Numbers:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {getCommonBinaryNumbers().slice(0, 8).map((num, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 transition-colors font-mono"
              onClick={() => onChange(num.binary)}
              title={`${num.binary} = ${num.decimal} (${num.description})`}
            >
              {num.binary}
            </button>
          ))}
          <button
            className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-md transition-colors font-mono"
            onClick={() => {
              const randomBinary = Math.floor(Math.random() * 65535).toString(2);
              onChange(randomBinary);
            }}
            title="Random binary number"
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

// DecimalOutput component
const DecimalOutput = ({ binary }: { binary: string }) => {
  const [copied, setCopied] = useState(false);
  const result = binaryToDecimal(binary);
  
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

  if (!binary) {
    return (
      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">Enter a binary number to see the conversion result</p>
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

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Conversion Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Input (Binary):</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{formatBinaryNumber(binary)}</span>
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
            <span className="text-gray-600 dark:text-gray-400">Binary Length:</span>
            <span className="font-mono text-gray-800 dark:text-gray-200">{binary.replace(/\s/g, '').length} bits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchParamsWrapper = ({ onParamsLoaded }: { onParamsLoaded: (params: { isEmbedded: boolean, defaultBinary: string }) => void }) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const isEmbedded = searchParams.get('embed') === 'true';
    const defaultBinary = searchParams.get('defaultBinary') || '';
    onParamsLoaded({ isEmbedded, defaultBinary });
  }, [searchParams, onParamsLoaded]);
  
  return null;
};

export default function BinaryToDecimalConverter() {
  const [binaryValue, setBinaryValue] = useState('');
  const [isEmbedded, setIsEmbedded] = useState(false);

  const handleParamsLoaded = ({ isEmbedded, defaultBinary }: { isEmbedded: boolean, defaultBinary: string }) => {
    setIsEmbedded(isEmbedded);
    if (defaultBinary) {
      setBinaryValue(defaultBinary);
    }
  };

  const shareConverter = async () => {
    const url = `${window.location.origin}/tools/binary-to-decimal-converter?defaultBinary=${encodeURIComponent(binaryValue)}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Binary to Decimal Converter',
          text: `Binary ${binaryValue} converted to decimal`,
          url: url
        });
      } catch (err) {
        console.log('Share failed:', err);
        copyLink(url);
      }
    } else {
      copyLink(url);
    }
  };

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className={`${isEmbedded ? 'p-6' : 'min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'}`}>
      <div className={`${isEmbedded ? '' : 'container mx-auto px-4 py-12'}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchParamsWrapper onParamsLoaded={handleParamsLoaded} />
        </Suspense>

        {!isEmbedded && (
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Binary to Decimal Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Quickly convert binary numbers to decimal numbers with support for large numbers and real-time preview
            </p>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <BinaryInput value={binaryValue} onChange={setBinaryValue} />
                </div>
                <div>
                  <DecimalOutput binary={binaryValue} />
                </div>
              </div>

              {!isEmbedded && (
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setBinaryValue('')}
                    className="px-6 py-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    Clear
                  </button>
                  <button
                    onClick={shareConverter}
                    className="px-6 py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                  >
                    Share Conversion
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 