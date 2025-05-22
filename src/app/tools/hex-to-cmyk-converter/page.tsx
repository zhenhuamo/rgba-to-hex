'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { hexToCmyk,  isValidHex, CMYK } from '@/utils/colorConverter';

// HEX输入组件
const HexInput = ({ 
  hex, 
  onChange,
  onColorPickerChange
}: { 
  hex: string, 
  onChange: (value: string) => void,
  onColorPickerChange: (value: string) => void
}) => {
  const [isValid, setIsValid] = useState(true);
  
  const handleChange = (value: string) => {
    // Auto-add # prefix
    if (value && !value.startsWith('#')) {
      value = '#' + value;
    }
    
    // Check if input is valid
    setIsValid(isValidHex(value));
    onChange(value);
  };
  
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">HEX Color Value</h3>
      
      <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">HEX Color Code</label>
            <div className="flex">
              <input
                type="text"
                value={hex}
                onChange={(e) => handleChange(e.target.value)}
                className={`w-full px-4 py-2 rounded-l-lg border-0 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isValid ? 'ring-2 ring-red-500' : ''}`}
                placeholder="#RRGGBB"
                maxLength={7}
              />
              <input
                type="color"
                value={hex}
                onChange={(e) => onColorPickerChange(e.target.value)}
                className="w-12 h-10 p-1 rounded-r-lg border-0 bg-gray-100 dark:bg-gray-800 cursor-pointer"
              />
            </div>
            {!isValid && (
              <p className="mt-1 text-sm text-red-500">
                Please enter a valid HEX color value (#RRGGBB)
              </p>
            )}
          </div>
          
          <div className="w-full md:w-24 h-24 rounded-lg shadow-inner overflow-hidden">
            <div 
              className="w-full h-full" 
              style={{ backgroundColor: isValid ? hex : '#FFF' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// CMYK显示组件
const CMYKDisplay = ({ cmyk }: { cmyk: CMYK }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CMYK Values</h3>
      
      {/* Cyan output */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-cyan-500"></span>
            Cyan (C)
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="text"
              value={cmyk.c.toFixed(1)}
              readOnly
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
          <div 
            className="absolute top-0 bottom-0 left-0 rounded-lg h-3 bg-blue-500 opacity-25" 
            style={{
              width: `${cmyk.c}%`
            }}
          />
          <div 
            className="absolute top-0 left-0 w-1.5 h-3 bg-blue-600 rounded-full transform -translate-x-1/2"
            style={{
              left: `${cmyk.c}%`
            }}  
          />
          <div className="relative w-full h-3 bg-transparent rounded-lg"></div>
        </div>
      </div>
      
      {/* Magenta output */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-pink-500"></span>
            Magenta (M)
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="text"
              value={cmyk.m.toFixed(1)}
              readOnly
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
          <div 
            className="absolute top-0 bottom-0 left-0 rounded-lg h-3 bg-pink-500 opacity-25" 
            style={{
              width: `${cmyk.m}%`
            }}
          />
          <div 
            className="absolute top-0 left-0 w-1.5 h-3 bg-pink-600 rounded-full transform -translate-x-1/2"
            style={{
              left: `${cmyk.m}%`
            }}  
          />
          <div className="relative w-full h-3 bg-transparent rounded-lg"></div>
        </div>
      </div>
      
      {/* Yellow output */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
            Yellow (Y)
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="text"
              value={cmyk.y.toFixed(1)}
              readOnly
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
          <div 
            className="absolute top-0 bottom-0 left-0 rounded-lg h-3 bg-yellow-500 opacity-25" 
            style={{
              width: `${cmyk.y}%`
            }}
          />
          <div 
            className="absolute top-0 left-0 w-1.5 h-3 bg-yellow-600 rounded-full transform -translate-x-1/2"
            style={{
              left: `${cmyk.y}%`
            }}  
          />
          <div className="relative w-full h-3 bg-transparent rounded-lg"></div>
        </div>
      </div>
      
      {/* Black (Key) output */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-gray-900"></span>
            Black/Key (K)
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="text"
              value={cmyk.k.toFixed(1)}
              readOnly
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
          <div 
            className="absolute top-0 bottom-0 left-0 rounded-lg h-3 bg-gray-900 opacity-25" 
            style={{
              width: `${cmyk.k}%`
            }}
          />
          <div 
            className="absolute top-0 left-0 w-1.5 h-3 bg-gray-900 rounded-full transform -translate-x-1/2"
            style={{
              left: `${cmyk.k}%`
            }}  
          />
          <div className="relative w-full h-3 bg-transparent rounded-lg"></div>
        </div>
      </div>
      
      {/* CMYK总览 */}
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">CMYK Design Values:</h4>
          <p className="font-mono text-lg">
            C: {cmyk.c.toFixed(0)}%, 
            M: {cmyk.m.toFixed(0)}%, 
            Y: {cmyk.y.toFixed(0)}%, 
            K: {cmyk.k.toFixed(0)}%
          </p>
        </div>
        
        <button
          onClick={() => {
            const cmykText = `C: ${cmyk.c.toFixed(0)}%, M: ${cmyk.m.toFixed(0)}%, Y: ${cmyk.y.toFixed(0)}%, K: ${cmyk.k.toFixed(0)}%`;
            navigator.clipboard.writeText(cmykText);
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
          </svg>
          <span>Copy CMYK Values</span>
        </button>
      </div>
    </div>
  );
};

// 打印信息组件
const PrintInfo = ({ cmyk }: { cmyk: CMYK }) => {
  const totalInk = cmyk.c + cmyk.m + cmyk.y + cmyk.k;
  const isInkLimitOK = totalInk <= 300;
  
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Printability</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Total Ink Coverage:</span>
          <div className="flex items-center gap-2">
            <span className="font-mono">{totalInk.toFixed(1)}%</span>
            {isInkLimitOK ? (
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            )}
          </div>
        </div>
        
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className={`h-full ${totalInk > 300 ? 'bg-yellow-500' : 'bg-green-500'}`}
            style={{ width: `${Math.min(100, totalInk / 4)}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {isInkLimitOK 
            ? 'The total ink coverage of this color is suitable for most printing processes.' 
            : 'Warning: Total ink coverage exceeds 300%, which may cause issues in some printing processes.'}
        </p>
        
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Printing Tips</h4>
          <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1 list-disc list-inside">
            <li>CMYK is a subtractive color model designed for print</li>
            <li>Most commercial printing recommends total ink coverage below 300%</li>
            <li>Using K (black) instead of equal amounts of CMY saves ink</li>
            <li>For deep black printing, use rich black formula like C:40 M:30 Y:30 K:100</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 分享和保存组件
const ShareAndSave = ({ hex }: { hex: string }) => {
  const [copied, setCopied] = useState(false);
  
  const getShareUrl = () => {
    return `${typeof window !== 'undefined' ? window.location.origin : ''}/tools/hex-to-cmyk-converter?hex=${hex.replace('#', '')}`;
  };
  
  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Share and Save</h3>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={copyShareLink}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Copied!</span>
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
                title: 'HEX Color Conversion',
                text: `Check out this color's CMYK values: ${hex}`,
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

export default function HexToCmykConverter() {
  const [hexColor, setHexColor] = useState('#FF0000');
  const [cmykColor, setCmykColor] = useState<CMYK>({ c: 0, m: 100, y: 100, k: 0 });
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);

  // 处理iframe检测
  useEffect(() => {
    setMounted(true);
    setIsInIframe(window.self !== window.top);
    
    // 获取URL参数
    const params = new URLSearchParams(window.location.search);
    const hex = params.get('hex');
    
    // 应用URL参数（如果存在）
    if (hex) {
      const formattedHex = hex.startsWith('#') ? hex : `#${hex}`;
      if (isValidHex(formattedHex)) {
        setHexColor(formattedHex);
      }
    }
  }, []);

  // 当HEX颜色改变时更新CMYK值
  useEffect(() => {
    if (isValidHex(hexColor)) {
      setCmykColor(hexToCmyk(hexColor));
    }
  }, [hexColor]);

  const handleHexChange = (value: string) => {
    setHexColor(value);
  };
  
  const handleColorPickerChange = (value: string) => {
    setHexColor(value.toUpperCase());
  };
  
  const copyEmbedCode = () => {
    const code = `<iframe src="https://rgbatohex.com/tools/hex-to-cmyk-converter?embed=true&hex=${hexColor.replace('#', '')}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to CMYK Color Converter"></iframe>`;
    
    navigator.clipboard.writeText(code);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2000);
  };

  // 仅在客户端水合完成后渲染
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 ${isInIframe ? 'p-0' : 'p-6'}`}>
      <div className="max-w-3xl mx-auto">
        {/* 仅在独立页面显示标题，在iframe中隐藏 */}
        {!isInIframe && (
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Image 
                  src="/hex.svg" 
                  alt="HEX to CMYK Converter Logo" 
                  width={40}
                  height={40}
                  priority
                  className="animate-pulse"
                />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500">
                HEX to CMYK Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Convert web HEX color codes to print-friendly CMYK values
            </p>
          </div>
        )}

        {/* 主转换器部分 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 overflow-hidden">
          {/* 颜色预览和分享按钮 */}
          <div className="relative">
            <div 
              className="h-48 w-full transition-colors duration-200"
              style={{ backgroundColor: isValidHex(hexColor) ? hexColor : '#FFFFFF' }}
            />
            
            {/* 颜色信息覆盖层 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30 backdrop-blur-sm text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xl">{hexColor}</div>
                  <div className="text-sm opacity-90">
                    cmyk({cmykColor.c.toFixed(0)}%, {cmykColor.m.toFixed(0)}%, {cmykColor.y.toFixed(0)}%, {cmykColor.k.toFixed(0)}%)
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* HEX输入 */}
            <HexInput 
              hex={hexColor} 
              onChange={handleHexChange}
              onColorPickerChange={handleColorPickerChange}
            />
            
            {/* CMYK值显示 */}
            <CMYKDisplay cmyk={cmykColor} />
          </div>
        </div>
        
        {/* 打印兼容性信息 */}
        <PrintInfo cmyk={cmykColor} />
        
        {/* 分享和保存 */}
        <ShareAndSave hex={hexColor} />
        
        {/* 嵌入代码生成器 - 仅在独立页面显示 */}
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
                value={`<iframe src="https://rgbatohex.com/tools/hex-to-cmyk-converter?embed=true&hex=${hexColor.replace('#', '')}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to CMYK Color Converter"></iframe>`}
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
        
        {/* 帮助部分 */}
        {!isInIframe && (
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-sm">
            <h4 className="font-semibold mb-2">HEX to CMYK Conversion Tips:</h4>
            <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>HEX colors are for screen display; CMYK colors are for print</li>
              <li>Some HEX colors cannot be accurately represented in CMYK color space</li>
              <li>Professional printing typically requires additional details; consider consulting with a print professional</li>
              <li>For best results, use a color-calibrated monitor</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 