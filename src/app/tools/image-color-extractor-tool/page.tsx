"use client";

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// 定义类型接口
interface ExtractedColor {
  color: string; // HEX格式
  rgb: string;
  hsl: string;
  cmyk: string;
  count: number;
  percent: number;
}

// 内部组件，使用useSearchParams
const ImageColorExtractorContent = () => {
  const searchParams = useSearchParams();
  const isEmbedded = searchParams.get('embed') === 'true';
  
  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<ExtractedColor[]>([]);
  const [colorCount, setColorCount] = useState<number>(8);
  const [selectedColor, setSelectedColor] = useState<ExtractedColor | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [processingImage, setProcessingImage] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [colorFormat, setColorFormat] = useState<'hex' | 'rgb' | 'hsl' | 'cmyk'>('hex');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 从图片中提取颜色
  const extractColors = (imgElement: HTMLImageElement, numColors: number) => {
    setProcessingImage(true);
    
    // 延迟处理以确保UI更新
    setTimeout(() => {
      try {
        const canvas = canvasRef.current;
        if (!canvas) {
          setError('Canvas initialization error.');
          setProcessingImage(false);
          return;
        }
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError('Canvas context error.');
          setProcessingImage(false);
          return;
        }
        
        // 调整canvas大小并绘制图片
        // 为了性能考虑，限制处理尺寸
        const MAX_SIZE = 500;
        let width = imgElement.width;
        let height = imgElement.height;
        
        if (width > height && width > MAX_SIZE) {
          height = Math.round((height * MAX_SIZE) / width);
          width = MAX_SIZE;
        } else if (height > MAX_SIZE) {
          width = Math.round((width * MAX_SIZE) / height);
          height = MAX_SIZE;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // 绘制图片到canvas
        ctx.drawImage(imgElement, 0, 0, width, height);
        
        // 获取像素数据
        const imageData = ctx.getImageData(0, 0, width, height);
        const pixelData = imageData.data;
        const pixelCount = imageData.width * imageData.height;
        
        // 颜色量化 - 收集所有颜色并对相似颜色进行分组
        const colorMap: { [key: string]: { count: number, r: number, g: number, b: number } } = {};
        
        for (let i = 0; i < pixelData.length; i += 4) {
          const r = pixelData[i];
          const g = pixelData[i + 1];
          const b = pixelData[i + 2];
          
          // 量化颜色 - 减少颜色精度以归并相似颜色
          // 按16的倍数归并相似RGB值
          const quantR = Math.round(r / 16) * 16;
          const quantG = Math.round(g / 16) * 16;
          const quantB = Math.round(b / 16) * 16;
          
          const colorKey = `${quantR}-${quantG}-${quantB}`;
          
          if (colorMap[colorKey]) {
            colorMap[colorKey].count++;
            // 累加实际颜色值以便后续计算平均值
            colorMap[colorKey].r += r;
            colorMap[colorKey].g += g;
            colorMap[colorKey].b += b;
          } else {
            colorMap[colorKey] = { count: 1, r: r, g: g, b: b };
          }
        }
        
        // 转换为数组并计算平均RGB值
        let colorsArray = Object.values(colorMap).map((value) =>  {
          // 计算这个量化颜色组的平均RGB值
          const avgR = Math.round(value.r / value.count);
          const avgG = Math.round(value.g / value.count);
          const avgB = Math.round(value.b / value.count);
          
          const hex = rgbToHex(avgR, avgG, avgB);
          const rgbStr = `rgb(${avgR}, ${avgG}, ${avgB})`;
          const hslValues = rgbToHsl(avgR, avgG, avgB);
          const hslStr = `hsl(${hslValues[0]}°, ${hslValues[1]}%, ${hslValues[2]}%)`;
          const cmykValues = rgbToCmyk(avgR, avgG, avgB);
          const cmykStr = `cmyk(${cmykValues[0]}%, ${cmykValues[1]}%, ${cmykValues[2]}%, ${cmykValues[3]}%)`;
          
          return {
            color: hex,
            rgb: rgbStr,
            hsl: hslStr,
            cmyk: cmykStr,
            count: value.count,
            percent: (value.count / pixelCount) * 100
          };
        });
        
        // 按颜色出现频率排序
        colorsArray.sort((a, b) => b.count - a.count);
        
        // 取前N个颜色
        colorsArray = colorsArray.slice(0, numColors);
        
        setColors(colorsArray);
        setProcessingImage(false);
        
        // 选择第一个颜色作为默认选中
        if (colorsArray.length > 0) {
          setSelectedColor(colorsArray[0]);
        }
      } catch (err) {
        console.error("Error extracting colors:", err);
        setError('Failed to extract colors from the image. Please try a different image.');
        setProcessingImage(false);
      }
    }, 100);
  };
  
  // 处理图片上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const files = e.target.files;
    
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    // 验证文件类型
    if (!file.type.match('image.*')) {
      setError('Please upload an image file (JPEG, PNG, etc.).');
      return;
    }
    
    setImageLoading(true);
    setImage(null);
    setColors([]);
    setSelectedColor(null);
    
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (event.target && typeof event.target.result === 'string') {
        const img = new Image();
        img.onload = () => {
          setImage(event.target?.result as string);
          setImageLoading(false);
          extractColors(img, colorCount);
        };
        img.onerror = () => {
          setError('Failed to load image. Please try a different image.');
          setImageLoading(false);
        };
        img.src = event.target.result;
      }
    };
    
    reader.onerror = () => {
      setError('Failed to read the file. Please try again.');
      setImageLoading(false);
    };
    
    reader.readAsDataURL(file);
  };
  
  // 处理颜色数量变更
  const handleColorCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value, 10);
    setColorCount(newCount);
  };
  
  // 当颜色数量变化且已有图片时，重新提取颜色
  useEffect(() => {
    if (image) {
      const img = new Image();
      img.onload = () => {
        extractColors(img, colorCount);
      };
      img.src = image;
    }
  }, [colorCount]);
  
  // 复制颜色值到剪贴板
  const copyToClipboard = (colorValue: string) => {
    navigator.clipboard.writeText(colorValue).then(() => {
      setCopiedColor(colorValue);
      setTimeout(() => setCopiedColor(null), 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };
  
  // RGB转HEX
  const rgbToHex = (r: number, g: number, b: number): string => {
    return '#' + 
      r.toString(16).padStart(2, '0') + 
      g.toString(16).padStart(2, '0') + 
      b.toString(16).padStart(2, '0');
  };
  
  // RGB转HSL
  const rgbToHsl = (r: number, g: number, b: number): [number, number, number] => {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0; const l = (max + min) / 2;
    
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      
      h /= 6;
    }
    
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  };
  
  // RGB转CMYK
  const rgbToCmyk = (r: number, g: number, b: number): [number, number, number, number] => {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const k = 1 - Math.max(r, g, b);
    const c = k === 1 ? 0 : (1 - r - k) / (1 - k);
    const m = k === 1 ? 0 : (1 - g - k) / (1 - k);
    const y = k === 1 ? 0 : (1 - b - k) / (1 - k);
    
    return [
      Math.round(c * 100), 
      Math.round(m * 100), 
      Math.round(y * 100), 
      Math.round(k * 100)
    ];
  };
  
  // 获取颜色值示例
  const getColorValue = (color: ExtractedColor) => {
    switch (colorFormat) {
      case 'rgb': return color.rgb;
      case 'hsl': return color.hsl;
      case 'cmyk': return color.cmyk;
      default: return color.color; // hex
    }
  };
  
  // 获取配色方案
  const getColorScheme = (baseColor: ExtractedColor) => {
    // 从hex解析RGB
    const hex = baseColor.color.substring(1);
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 2), 16);
    const b = parseInt(hex.substring(4, 2), 16);
    
    // 转换为HSL
    const [h, s, l] = rgbToHsl(r, g, b);
    
    // 创建互补色
    const complementaryH = (h + 180) % 360;
    
    // 创建类似色
    const analogous1H = (h + 30) % 360;
    const analogous2H = (h + 330) % 360;
    
    // 从HSL创建示例颜色
    const createColorFromHsl = (h: number, s: number, l: number) => {
      // HSL转RGB
      const c = (1 - Math.abs(2 * l / 100 - 1)) * s / 100;
      const x = c * (1 - Math.abs((h / 60) % 2 - 1));
      const m = l / 100 - c / 2;
      
      let r, g, b;
      if (h >= 0 && h < 60) {
        [r, g, b] = [c, x, 0];
      } else if (h >= 60 && h < 120) {
        [r, g, b] = [x, c, 0];
      } else if (h >= 120 && h < 180) {
        [r, g, b] = [0, c, x];
      } else if (h >= 180 && h < 240) {
        [r, g, b] = [0, x, c];
      } else if (h >= 240 && h < 300) {
        [r, g, b] = [x, 0, c];
      } else {
        [r, g, b] = [c, 0, x];
      }
      
      const rgb = [
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255)
      ];
      
      return rgbToHex(rgb[0], rgb[1], rgb[2]);
    };
    
    return {
      complementary: createColorFromHsl(complementaryH, s, l),
      analogous1: createColorFromHsl(analogous1H, s, l),
      analogous2: createColorFromHsl(analogous2H, s, l)
    };
  };
  
  return (
    <div className={`${isEmbedded ? 'p-4' : 'p-6 max-w-6xl mx-auto'}`}>
      {!isEmbedded && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Image Color Extractor
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Upload an image to extract its dominant colors
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Image Upload & Preview */}
        <div className="space-y-6">
          {/* Image Upload */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Upload Image
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select an image to extract colors:
                </label>
                <div className="flex gap-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex-shrink-0"
                  >
                    Choose Image
                  </button>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Number of colors to extract:
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="2"
                        max="16"
                        value={colorCount}
                        onChange={handleColorCountChange}
                        className="flex-1 accent-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300 min-w-[30px] text-center">
                        {colorCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
            </div>
          </div>
          
          {/* Image Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Image Preview
            </h2>
            {imageLoading ? (
              <div className="flex items-center justify-center h-64 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : image ? (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt="Uploaded image"
                  className="max-w-full h-auto max-h-80 mx-auto"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <svg
                  className="w-16 h-16 text-gray-400 dark:text-gray-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="text-gray-500 dark:text-gray-400">
                  No image uploaded yet
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Column - Extracted Colors */}
        <div className="space-y-6">
          {/* Colors Display */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Extracted Colors
              </h2>
              
              {/* Format Selector */}
              {colors.length > 0 && (
                <div className="flex gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Format:</span>
                  <select
                    value={colorFormat}
                    onChange={(e) => setColorFormat(e.target.value as 'hex' | 'rgb' | 'hsl' | 'cmyk')}
                    className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                  >
                    <option value="hex">HEX</option>
                    <option value="rgb">RGB</option>
                    <option value="hsl">HSL</option>
                    <option value="cmyk">CMYK</option>
                  </select>
                </div>
              )}
            </div>
            
            {processingImage ? (
              <div className="flex items-center justify-center h-40 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Extracting colors...
                  </p>
                </div>
              </div>
            ) : colors.length > 0 ? (
              <div className="space-y-4">
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {colors.map((colorObj, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer group relative ${selectedColor && selectedColor.color === colorObj.color ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800' : ''}`}
                      onClick={() => setSelectedColor(colorObj)}
                      title={`${colorObj.color} - ${colorObj.percent.toFixed(1)}%`}
                    >
                      <div
                        className="w-full h-14 rounded-md shadow-md"
                        style={{ backgroundColor: colorObj.color }}
                      ></div>
                    </div>
                  ))}
                </div>
                
                {selectedColor && (
                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex gap-4 items-center mb-4">
                      <div 
                        className="w-16 h-16 rounded-md shadow-md" 
                        style={{ backgroundColor: selectedColor.color }}
                      ></div>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white">
                          Selected Color
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {selectedColor.percent.toFixed(1)}% of image
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md">
                        <span className="text-sm text-gray-700 dark:text-gray-300">HEX:</span>
                        <div className="flex items-center">
                          <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {selectedColor.color}
                          </code>
                          <button
                            onClick={() => copyToClipboard(selectedColor.color)}
                            className="ml-2 text-blue-500 hover:text-blue-600"
                            title="Copy to clipboard"
                          >
                            {copiedColor === selectedColor.color ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md">
                        <span className="text-sm text-gray-700 dark:text-gray-300">RGB:</span>
                        <div className="flex items-center">
                          <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {selectedColor.rgb}
                          </code>
                          <button
                            onClick={() => copyToClipboard(selectedColor.rgb)}
                            className="ml-2 text-blue-500 hover:text-blue-600"
                            title="Copy to clipboard"
                          >
                            {copiedColor === selectedColor.rgb ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md">
                        <span className="text-sm text-gray-700 dark:text-gray-300">HSL:</span>
                        <div className="flex items-center">
                          <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {selectedColor.hsl}
                          </code>
                          <button
                            onClick={() => copyToClipboard(selectedColor.hsl)}
                            className="ml-2 text-blue-500 hover:text-blue-600"
                            title="Copy to clipboard"
                          >
                            {copiedColor === selectedColor.hsl ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md">
                        <span className="text-sm text-gray-700 dark:text-gray-300">CMYK:</span>
                        <div className="flex items-center">
                          <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {selectedColor.cmyk}
                          </code>
                          <button
                            onClick={() => copyToClipboard(selectedColor.cmyk)}
                            className="ml-2 text-blue-500 hover:text-blue-600"
                            title="Copy to clipboard"
                          >
                            {copiedColor === selectedColor.cmyk ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">
                  Upload an image to extract its colors
                </p>
              </div>
            )}
          </div>
          
          {/* Color Schemes */}
          {selectedColor && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Suggested Color Schemes
              </h2>
              
              <div className="space-y-3">
                {/* Base Color Reminder */}
                <div className="flex items-center mb-4">
                  <div 
                    className="w-10 h-10 rounded-md shadow-md" 
                    style={{ backgroundColor: selectedColor.color }}
                  ></div>
                  <div className="ml-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Base Color</span>
                    <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1">
                      {getColorValue(selectedColor)}
                    </code>
                  </div>
                </div>
                
                {/* Monochromatic Scheme */}
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monochromatic
                  </h3>
                  <div className="flex space-x-2">
                    {[0.2, 0.4, 0.6, 0.8].map((opacity, i) => (
                      <div 
                        key={i}
                        className="flex-1 h-12 rounded-md shadow-sm"
                        style={{ backgroundColor: selectedColor.color, opacity }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Complementary Colors */}
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Complementary
                  </h3>
                  <div className="flex space-x-2">
                    <div 
                      className="flex-1 h-12 rounded-md shadow-sm"
                      style={{ backgroundColor: selectedColor.color }}
                    ></div>
                    <div 
                      className="flex-1 h-12 rounded-md shadow-sm"
                      style={{ backgroundColor: getColorScheme(selectedColor).complementary }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* How to Use */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              How to Use
            </h2>
            <ol className="space-y-2 text-gray-600 dark:text-gray-300 list-decimal list-inside">
              <li>Upload an image using the &quot;Choose Image&quot; button</li>
              <li>Adjust the number of colors to extract using the slider</li>
              <li>Click on a color in the palette to view its details</li>
              <li>Choose your preferred color format (HEX, RGB, HSL, CMYK)</li>
              <li>Copy the color values by clicking the copy icon</li>
              <li>Explore suggested color schemes for your selected color</li>
            </ol>
          </div>
        </div>
      </div>
      
      {/* Hidden Canvas */}
      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
};

// 加载状态组件
const LoadingState = () => (
  <div className="p-6 max-w-6xl mx-auto">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-r-4 border-gray-200"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading image color extractor...</p>
    </div>
  </div>
);

// 主组件使用 Suspense 包裹内部组件
const ImageColorExtractor = () => {
  return (
    <Suspense fallback={<LoadingState />}>
      <ImageColorExtractorContent />
    </Suspense>
  );
};

export default ImageColorExtractor;