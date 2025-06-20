'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  octalToDecimal, 
  decimalToOctal, 
  isValidOctalNumber, 
  isValidDecimalNumber, 
  formatDecimalNumber, 
  formatOctalNumber,
  getCommonOctalNumbers,
  octalToUnixPermissions
} from '@/utils/numberConverter';

// OctalInput component
const OctalInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const [isValid, setIsValid] = useState(true);
  
  const handleInput = (val: string) => {
    onChange(val);
    setIsValid(val === '' || isValidOctalNumber(val));
  };
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">
          Octal Number
        </label>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Only 0-7 allowed
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 dark:text-gray-400 font-mono text-lg">0o</span>
        </div>
        <input
          type="text"
          value={value.replace(/\s/g, '')}
          onChange={(e) => handleInput(e.target.value)}
          className={`w-full pl-12 px-4 py-3 border ${isValid ? 'border-gray-300 dark:border-gray-600' : 'border-red-500 dark:border-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg tracking-wider bg-white dark:bg-gray-800`}
          placeholder="755"
          spellCheck="false"
          autoComplete="off"
        />
        {!isValid && (
          <p className="mt-1 text-sm text-red-500">Please enter a valid octal number (only 0-7 allowed)</p>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Common Octal Numbers:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {getCommonOctalNumbers().slice(0, 8).map((num, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 transition-colors font-mono"
              onClick={() => onChange(num.octal)}
              title={`${num.octal} = ${num.decimal} (${num.description})`}
            >
              {num.octal}
            </button>
          ))}
          <button
            className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-md transition-colors font-mono"
            onClick={() => {
              const randomOctal = Math.floor(Math.random() * 511).toString(8);
              onChange(randomOctal);
            }}
            title="Random octal number"
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

// DecimalInput component  
const DecimalInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const [isValid, setIsValid] = useState(true);
  
  const handleInput = (val: string) => {
    onChange(val);
    setIsValid(val === '' || isValidDecimalNumber(val));
  };
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">
          Decimal Number
        </label>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Only 0-9 allowed
        </div>
      </div>
      <input
        type="text"
        value={value.replace(/\s/g, '')}
        onChange={(e) => handleInput(e.target.value)}
        className={`w-full px-4 py-3 border ${isValid ? 'border-gray-300 dark:border-gray-600' : 'border-red-500 dark:border-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg tracking-wider bg-white dark:bg-gray-800`}
        placeholder="493"
        spellCheck="false"
        autoComplete="off"
      />
      {!isValid && (
        <p className="mt-1 text-sm text-red-500">Please enter a valid decimal number (only 0-9 allowed)</p>
      )}
    </div>
  );
};

// ConversionDisplay component
const ConversionDisplay = ({ octal, decimal }: { octal: string, decimal: string }) => {
  const [copiedOctal, setCopiedOctal] = useState(false);
  const [copiedDecimal, setCopiedDecimal] = useState(false);
  
  const octalResult = octalToDecimal(octal);
  const decimalResult = decimalToOctal(decimal);
  
  const copyValue = async (value: string, type: 'octal' | 'decimal') => {
    if (value) {
      try {
        await navigator.clipboard.writeText(value);
        if (type === 'octal') {
          setCopiedOctal(true);
          setTimeout(() => setCopiedOctal(false), 2000);
        } else {
          setCopiedDecimal(true);
          setTimeout(() => setCopiedDecimal(false), 2000);
        }
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Octal to Decimal Result */}
      {octal && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Octal to Decimal Result</span>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Octal → Decimal
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              value={octalResult.isValid ? formatDecimalNumber(octalResult.decimal) : (octalResult.error || '')}
              readOnly
              className={`flex-1 px-4 py-3 ${octalResult.isValid ? 'bg-gray-100 dark:bg-gray-700' : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'} border-0 rounded-l-lg font-mono text-lg focus:outline-none`}
            />
            {octalResult.isValid && (
              <button
                onClick={() => copyValue(octalResult.decimal, 'decimal')}
                className={`px-6 py-3 ${copiedDecimal ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-2`}
              >
                {copiedDecimal ? (
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
            )}
          </div>
        </div>
      )}

      {/* Decimal to Octal Result */}
      {decimal && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Decimal to Octal Result</span>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Decimal → Octal
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              value={decimalResult.isValid ? formatOctalNumber(decimalResult.octal) : (decimalResult.error || '')}
              readOnly
              className={`flex-1 px-4 py-3 ${decimalResult.isValid ? 'bg-gray-100 dark:bg-gray-700' : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'} border-0 rounded-l-lg font-mono text-lg focus:outline-none`}
            />
            {decimalResult.isValid && (
              <button
                onClick={() => copyValue(decimalResult.octal, 'octal')}
                className={`px-6 py-3 ${copiedOctal ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-2`}
              >
                {copiedOctal ? (
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
            )}
          </div>
        </div>
      )}

      {/* Conversion Details */}
      {(octal || decimal) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Conversion Details</h3>
          <div className="space-y-2 text-sm">
            {octal && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Input (Octal):</span>
                  <span className="font-mono text-gray-800 dark:text-gray-200">{formatOctalNumber(octal)}</span>
                </div>
                {octalResult.isValid && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Output (Decimal):</span>
                    <span className="font-mono text-gray-800 dark:text-gray-200">{octalResult.decimal}</span>
                  </div>
                )}
              </>
            )}
            {decimal && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Input (Decimal):</span>
                  <span className="font-mono text-gray-800 dark:text-gray-200">{formatDecimalNumber(decimal)}</span>
                </div>
                {decimalResult.isValid && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Output (Octal):</span>
                    <span className="font-mono text-gray-800 dark:text-gray-200">{decimalResult.octal}</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// UnixPermissionDisplay component
const UnixPermissionDisplay = ({ octal }: { octal: string }) => {
  if (!octal || !isValidOctalNumber(octal)) {
    return null;
  }

  const permResult = octalToUnixPermissions(octal);
  
  if (!permResult.isValid) {
    return (
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
        <h3 className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-3">Unix Permissions</h3>
        <p className="text-amber-700 dark:text-amber-300 text-sm">{permResult.error}</p>
      </div>
    );
  }

  const PermissionGroup = ({ title, perms }: { title: string, perms: { read: boolean; write: boolean; execute: boolean } }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h4 className="font-bold text-center mb-2 text-gray-800 dark:text-gray-200">{title}</h4>
      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className={`text-center p-2 rounded ${perms.read ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}>
          <div className="font-mono font-bold">{perms.read ? 'r' : '-'}</div>
          <div className="text-xs">Read</div>
        </div>
        <div className={`text-center p-2 rounded ${perms.write ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}>
          <div className="font-mono font-bold">{perms.write ? 'w' : '-'}</div>
          <div className="text-xs">Write</div>
        </div>
        <div className={`text-center p-2 rounded ${perms.execute ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}>
          <div className="font-mono font-bold">{perms.execute ? 'x' : '-'}</div>
          <div className="text-xs">Execute</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
      <h3 className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-4">Unix File Permissions</h3>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <PermissionGroup title="Owner" perms={permResult.owner} />
          <PermissionGroup title="Group" perms={permResult.group} />
          <PermissionGroup title="Others" perms={permResult.other} />
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Permission String:</span>
              <div className="font-mono text-lg font-bold text-gray-800 dark:text-gray-200">{permResult.representation}</div>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Description:</span>
              <div className="text-gray-800 dark:text-gray-200">{permResult.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchParamsWrapper = ({ onParamsLoaded }: { onParamsLoaded: (params: { isEmbedded: boolean, defaultOctal: string, defaultDecimal: string }) => void }) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const isEmbedded = searchParams.get('embed') === 'true';
    const defaultOctal = searchParams.get('defaultOctal') || '';
    const defaultDecimal = searchParams.get('defaultDecimal') || '';
    onParamsLoaded({ isEmbedded, defaultOctal, defaultDecimal });
  }, [searchParams, onParamsLoaded]);
  
  return null;
};

export default function OctalConverterTool() {
  const [octalValue, setOctalValue] = useState('');
  const [decimalValue, setDecimalValue] = useState('');
  const [isEmbedded, setIsEmbedded] = useState(false);

  const handleParamsLoaded = ({ isEmbedded, defaultOctal, defaultDecimal }: { isEmbedded: boolean, defaultOctal: string, defaultDecimal: string }) => {
    setIsEmbedded(isEmbedded);
    if (defaultOctal) {
      setOctalValue(defaultOctal);
    }
    if (defaultDecimal) {
      setDecimalValue(defaultDecimal);
    }
  };

  const shareConverter = async () => {
    const url = `${window.location.origin}/tools/octal-converter-tool${octalValue ? `?defaultOctal=${encodeURIComponent(octalValue)}` : ''}${decimalValue ? `${octalValue ? '&' : '?'}defaultDecimal=${encodeURIComponent(decimalValue)}` : ''}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Octal Converter Tool',
          text: 'Convert between octal and decimal numbers',
          url: url
        });
      } catch {
        copyLink(url);
      }
    } else {
      copyLink(url);
    }
  };

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      // Could add a toast notification here
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper onParamsLoaded={handleParamsLoaded} />
      
      <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${isEmbedded ? 'p-4' : 'p-8'}`}>
        <div className={`${isEmbedded ? 'max-w-2xl' : 'max-w-4xl'} mx-auto`}>
          {!isEmbedded && (
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                Octal Converter Tool
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Convert between octal and decimal numbers with Unix permissions support
              </p>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <OctalInput value={octalValue} onChange={setOctalValue} />
              <DecimalInput value={decimalValue} onChange={setDecimalValue} />
            </div>

            <ConversionDisplay octal={octalValue} decimal={decimalValue} />
          </div>

          {/* Unix Permissions Display */}
          {octalValue && <UnixPermissionDisplay octal={octalValue} />}

          {!isEmbedded && (
            <div className="text-center mt-8">
              <button
                onClick={shareConverter}
                className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share Converter
              </button>
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
} 