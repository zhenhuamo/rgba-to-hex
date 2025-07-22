'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

// 模糊算法类型
type BlurType = 'gaussian' | 'motion' | 'radial' | 'box' | 'stack';

interface BlurParams {
  radius: number;
  angle?: number;
  distance?: number;
  centerX?: number;
  centerY?: number;
}

// Stack Blur算法实现 (性能最优)
function stackBlur(imageData: ImageData, radius: number): ImageData {
  const { data, width, height } = imageData;
  const output = new ImageData(width, height);
  
  // 复制原始数据
  for (let i = 0; i < data.length; i++) {
    output.data[i] = data[i];
  }
  
  if (radius < 1) return output;
  
  const radiusPlus1 = radius + 1;
  const sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  
  // 水平模糊
  for (let y = 0; y < height; y++) {
    let sumR = 0, sumG = 0, sumB = 0, sumA = 0;
    
    // 初始化
    for (let i = -radius; i <= radius; i++) {
      const x = Math.min(width - 1, Math.max(0, i));
      const idx = (y * width + x) * 4;
      const weight = radiusPlus1 - Math.abs(i);
      
      sumR += output.data[idx] * weight;
      sumG += output.data[idx + 1] * weight;
      sumB += output.data[idx + 2] * weight;
      sumA += output.data[idx + 3] * weight;
    }
    
    // 应用模糊
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      output.data[idx] = sumR / sumFactor;
      output.data[idx + 1] = sumG / sumFactor;
      output.data[idx + 2] = sumB / sumFactor;
      output.data[idx + 3] = sumA / sumFactor;
      
      // 更新和值 (简化版)
      if (x < width - 1) {
        const nextIdx = (y * width + Math.min(width - 1, x + radius + 1)) * 4;
        const prevIdx = (y * width + Math.max(0, x - radius)) * 4;
        
        sumR += output.data[nextIdx] - output.data[prevIdx];
        sumG += output.data[nextIdx + 1] - output.data[prevIdx + 1];
        sumB += output.data[nextIdx + 2] - output.data[prevIdx + 2];
        sumA += output.data[nextIdx + 3] - output.data[prevIdx + 3];
      }
    }
  }
  
  // 垂直模糊 (类似逻辑)
  for (let x = 0; x < width; x++) {
    let sumR = 0, sumG = 0, sumB = 0, sumA = 0;
    
    for (let i = -radius; i <= radius; i++) {
      const y = Math.min(height - 1, Math.max(0, i));
      const idx = (y * width + x) * 4;
      const weight = radiusPlus1 - Math.abs(i);
      
      sumR += output.data[idx] * weight;
      sumG += output.data[idx + 1] * weight;
      sumB += output.data[idx + 2] * weight;
      sumA += output.data[idx + 3] * weight;
    }
    
    for (let y = 0; y < height; y++) {
      const idx = (y * width + x) * 4;
      output.data[idx] = sumR / sumFactor;
      output.data[idx + 1] = sumG / sumFactor;
      output.data[idx + 2] = sumB / sumFactor;
      output.data[idx + 3] = sumA / sumFactor;
      
      if (y < height - 1) {
        const nextIdx = (Math.min(height - 1, y + radius + 1) * width + x) * 4;
        const prevIdx = (Math.max(0, y - radius) * width + x) * 4;
        
        sumR += output.data[nextIdx] - output.data[prevIdx];
        sumG += output.data[nextIdx + 1] - output.data[prevIdx + 1];
        sumB += output.data[nextIdx + 2] - output.data[prevIdx + 2];
        sumA += output.data[nextIdx + 3] - output.data[prevIdx + 3];
      }
    }
  }
  
  return output;
}

// 高斯模糊算法
function gaussianBlur(imageData: ImageData, radius: number): ImageData {
  const { data, width, height } = imageData;
  const output = new ImageData(width, height);
  
  // 生成高斯核
  const kernelSize = radius * 2 + 1;
  const kernel: number[] = [];
  const sigma = radius / 3;
  let sum = 0;
  
  for (let i = 0; i < kernelSize; i++) {
    const x = i - radius;
    const value = Math.exp(-(x * x) / (2 * sigma * sigma));
    kernel[i] = value;
    sum += value;
  }
  
  // 归一化
  for (let i = 0; i < kernelSize; i++) {
    kernel[i] /= sum;
  }
  
  // 水平模糊
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      
      for (let i = 0; i < kernelSize; i++) {
        const px = Math.min(width - 1, Math.max(0, x + i - radius));
        const idx = (y * width + px) * 4;
        const weight = kernel[i];
        
        r += data[idx] * weight;
        g += data[idx + 1] * weight;
        b += data[idx + 2] * weight;
        a += data[idx + 3] * weight;
      }
      
      const outIdx = (y * width + x) * 4;
      output.data[outIdx] = r;
      output.data[outIdx + 1] = g;
      output.data[outIdx + 2] = b;
      output.data[outIdx + 3] = a;
    }
  }
  
  // 垂直模糊
  const temp = new ImageData(width, height);
  for (let i = 0; i < output.data.length; i++) {
    temp.data[i] = output.data[i];
  }
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let r = 0, g = 0, b = 0, a = 0;
      
      for (let i = 0; i < kernelSize; i++) {
        const py = Math.min(height - 1, Math.max(0, y + i - radius));
        const idx = (py * width + x) * 4;
        const weight = kernel[i];
        
        r += temp.data[idx] * weight;
        g += temp.data[idx + 1] * weight;
        b += temp.data[idx + 2] * weight;
        a += temp.data[idx + 3] * weight;
      }
      
      const outIdx = (y * width + x) * 4;
      output.data[outIdx] = r;
      output.data[outIdx + 1] = g;
      output.data[outIdx + 2] = b;
      output.data[outIdx + 3] = a;
    }
  }
  
  return output;
}

// 运动模糊算法
function motionBlur(imageData: ImageData, angle: number, distance: number): ImageData {
  const { data, width, height } = imageData;
  const output = new ImageData(width, height);
  
  const radians = (angle * Math.PI) / 180;
  const dx = Math.cos(radians);
  const dy = Math.sin(radians);
  const steps = Math.max(1, Math.floor(distance));
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      let count = 0;
      
      for (let i = 0; i < steps; i++) {
        const t = i / Math.max(1, steps - 1);
        const px = Math.round(x + dx * distance * t);
        const py = Math.round(y + dy * distance * t);
        
        if (px >= 0 && px < width && py >= 0 && py < height) {
          const idx = (py * width + px) * 4;
          r += data[idx];
          g += data[idx + 1];
          b += data[idx + 2];
          a += data[idx + 3];
          count++;
        }
      }
      
      const outIdx = (y * width + x) * 4;
      if (count > 0) {
        output.data[outIdx] = r / count;
        output.data[outIdx + 1] = g / count;
        output.data[outIdx + 2] = b / count;
        output.data[outIdx + 3] = a / count;
      } else {
        output.data[outIdx] = data[outIdx];
        output.data[outIdx + 1] = data[outIdx + 1];
        output.data[outIdx + 2] = data[outIdx + 2];
        output.data[outIdx + 3] = data[outIdx + 3];
      }
    }
  }
  
  return output;
}

// 盒式模糊算法
function boxBlur(imageData: ImageData, radius: number): ImageData {
  const { data, width, height } = imageData;
  const output = new ImageData(width, height);
  const size = radius * 2 + 1;
  const area = size * size;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      
      // 计算周围像素的平均值
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const px = Math.min(width - 1, Math.max(0, x + dx));
          const py = Math.min(height - 1, Math.max(0, y + dy));
          const idx = (py * width + px) * 4;
          
          r += data[idx];
          g += data[idx + 1];
          b += data[idx + 2];
          a += data[idx + 3];
        }
      }
      
      const outIdx = (y * width + x) * 4;
      output.data[outIdx] = r / area;
      output.data[outIdx + 1] = g / area;
      output.data[outIdx + 2] = b / area;
      output.data[outIdx + 3] = a / area;
    }
  }
  
  return output;
}

// 主要组件
export default function ImageBlurTool() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [blurType, setBlurType] = useState<BlurType>('stack');
  const [blurParams, setBlurParams] = useState<BlurParams>({
    radius: 5,
    angle: 0,
    distance: 10,
    centerX: 0,
    centerY: 0
  });
  const [originalImageUrl, setOriginalImageUrl] = useState<string>('');
  const [processedImageUrl, setProcessedImageUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEmbedded, setIsEmbedded] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const originalImageRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 检查是否为嵌入模式
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsEmbedded(urlParams.get('embed') === 'true');
  }, []);

  // 处理文件选择
  const handleFileSelect = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setOriginalImageUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, []);

  // 应用模糊效果
  const applyBlur = useCallback(async () => {
    if (!canvasRef.current || !originalImageRef.current) return;

    setIsProcessing(true);

    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d')!;
      const img = originalImageRef.current;

      // 设置canvas尺寸
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // 绘制原始图片
      ctx.drawImage(img, 0, 0);

      // 获取图像数据
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // 应用模糊效果
      let processedData: ImageData;

      switch (blurType) {
        case 'stack':
          processedData = stackBlur(imageData, blurParams.radius);
          break;
        case 'gaussian':
          processedData = gaussianBlur(imageData, blurParams.radius);
          break;
        case 'motion':
          processedData = motionBlur(imageData, blurParams.angle || 0, blurParams.distance || 10);
          break;
        case 'box':
          processedData = boxBlur(imageData, blurParams.radius);
          break;
        default:
          processedData = stackBlur(imageData, blurParams.radius);
      }

      // 绘制处理后的图片
      ctx.putImageData(processedData, 0, 0);

      // 生成结果URL
      const processedUrl = canvas.toDataURL('image/png');
      setProcessedImageUrl(processedUrl);

    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsProcessing(false);
    }
  }, [blurType, blurParams]);

  // 下载图片
  const downloadImage = useCallback(() => {
    if (!processedImageUrl) return;

    const link = document.createElement('a');
    link.download = `blurred-${selectedImage?.name || 'image.png'}`;
    link.href = processedImageUrl;
    link.click();
  }, [processedImageUrl, selectedImage]);

  // 重置工具
  const resetTool = useCallback(() => {
    setSelectedImage(null);
    setOriginalImageUrl('');
    setProcessedImageUrl('');
    setBlurParams({
      radius: 5,
      angle: 0,
      distance: 10,
      centerX: 0,
      centerY: 0
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  // 拖拽处理
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  }, [handleFileSelect]);

  return (
    <div className={`min-h-screen ${isEmbedded ? 'bg-white' : 'bg-gray-50'} p-4`}>
      <style jsx>{`
        .slider-radius {
          background: linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(blurParams.radius / 50) * 100}%, #e5e7eb ${(blurParams.radius / 50) * 100}%, #e5e7eb 100%);
        }
        .slider-angle {
          background: linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((blurParams.angle || 0) / 360) * 100}%, #e5e7eb ${((blurParams.angle || 0) / 360) * 100}%, #e5e7eb 100%);
        }
        .slider-distance {
          background: linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((blurParams.distance || 0) / 50) * 100}%, #e5e7eb ${((blurParams.distance || 0) / 50) * 100}%, #e5e7eb 100%);
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {!isEmbedded && (
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Image Blur Tool</h1>
            <p className="text-gray-600">Add professional blur effects to your images</p>
          </div>
        )}

        {!selectedImage ? (
          // 上传区域
          <div className="max-w-2xl mx-auto">
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="space-y-4">
                <div className="text-6xl">🖼️</div>
                <p className="text-xl text-gray-600">
                  Click to select an image or drag & drop
                </p>
                <p className="text-sm text-gray-500">
                  Supports: JPEG, PNG, WebP, BMP (Max 10MB)
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Choose Image
                </button>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
              className="hidden"
            />
          </div>
        ) : (
          // 编辑区域 - 左右布局
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* 控制面板 - 左侧 */}
            <div className="xl:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-lg font-semibold mb-4">Blur Settings</h3>

                {/* 模糊类型选择 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Blur Type</label>
                  <select
                    value={blurType}
                    onChange={(e) => setBlurType(e.target.value as BlurType)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="stack">Stack Blur (Fast)</option>
                    <option value="gaussian">Gaussian Blur (Quality)</option>
                    <option value="motion">Motion Blur</option>
                    <option value="box">Box Blur (Fastest)</option>
                  </select>
                </div>

                {/* 参数控制 */}
                {(blurType === 'stack' || blurType === 'gaussian' || blurType === 'box') && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Blur Radius: <span className="text-blue-600 font-semibold">{blurParams.radius}px</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={blurParams.radius}
                      onChange={(e) => {
                        setBlurParams(prev => ({ ...prev, radius: Number(e.target.value) }));
                        // 实时预览 - 延迟执行避免过于频繁
                        setTimeout(() => {
                          if (originalImageRef.current) {
                            applyBlur();
                          }
                        }, 300);
                      }}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider slider-radius"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Light</span>
                      <span>Heavy</span>
                    </div>
                  </div>
                )}

                {blurType === 'motion' && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Angle: <span className="text-blue-600 font-semibold">{blurParams.angle}°</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={blurParams.angle}
                        onChange={(e) => {
                          setBlurParams(prev => ({ ...prev, angle: Number(e.target.value) }));
                          setTimeout(() => {
                            if (originalImageRef.current) {
                              applyBlur();
                            }
                          }, 300);
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider slider-angle"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0° (→)</span>
                        <span>90° (↓)</span>
                        <span>180° (←)</span>
                        <span>270° (↑)</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Distance: <span className="text-blue-600 font-semibold">{blurParams.distance}px</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={blurParams.distance}
                        onChange={(e) => {
                          setBlurParams(prev => ({ ...prev, distance: Number(e.target.value) }));
                          setTimeout(() => {
                            if (originalImageRef.current) {
                              applyBlur();
                            }
                          }, 300);
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider slider-distance"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Subtle</span>
                        <span>Strong</span>
                      </div>
                    </div>
                  </>
                )}

                {/* 预设效果 */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Quick Presets</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => {
                        setBlurType('stack');
                        setBlurParams(prev => ({ ...prev, radius: 3 }));
                        setTimeout(() => applyBlur(), 100);
                      }}
                      className="p-3 text-sm bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors text-left"
                    >
                      <div className="font-medium text-blue-800">💫 Light Blur</div>
                      <div className="text-xs text-blue-600">Subtle effect, 3px radius</div>
                    </button>
                    <button
                      onClick={() => {
                        setBlurType('gaussian');
                        setBlurParams(prev => ({ ...prev, radius: 8 }));
                        setTimeout(() => applyBlur(), 100);
                      }}
                      className="p-3 text-sm bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors text-left"
                    >
                      <div className="font-medium text-green-800">📸 Portrait Blur</div>
                      <div className="text-xs text-green-600">Background blur, 8px radius</div>
                    </button>
                    <button
                      onClick={() => {
                        setBlurType('motion');
                        setBlurParams(prev => ({ ...prev, angle: 45, distance: 20 }));
                        setTimeout(() => applyBlur(), 100);
                      }}
                      className="p-3 text-sm bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors text-left"
                    >
                      <div className="font-medium text-purple-800">⚡ Speed Effect</div>
                      <div className="text-xs text-purple-600">Motion blur, 45° angle</div>
                    </button>
                    <button
                      onClick={() => {
                        setBlurType('stack');
                        setBlurParams(prev => ({ ...prev, radius: 20 }));
                        setTimeout(() => applyBlur(), 100);
                      }}
                      className="p-3 text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors text-left"
                    >
                      <div className="font-medium text-red-800">🌊 Heavy Blur</div>
                      <div className="text-xs text-red-600">Strong effect, 20px radius</div>
                    </button>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="space-y-3 border-t pt-4">
                  <button
                    onClick={applyBlur}
                    disabled={isProcessing}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                      isProcessing
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>🎨</span>
                        <span>Apply Blur Effect</span>
                      </>
                    )}
                  </button>

                  {processedImageUrl && (
                    <button
                      onClick={downloadImage}
                      className="w-full py-3 px-4 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>⬇️</span>
                      <span>Download Result</span>
                    </button>
                  )}

                  <button
                    onClick={resetTool}
                    className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>🔄</span>
                    <span>Choose Another Image</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 图片预览 - 右侧 */}
            <div className="xl:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Preview</h3>
                  <div className="text-sm text-gray-500">
                    {selectedImage && `${selectedImage.name} (${((selectedImage.size || 0) / 1024 / 1024).toFixed(1)}MB)`}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* 原图 */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600 flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Original Image
                    </h4>
                    <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        ref={originalImageRef}
                        src={originalImageUrl}
                        alt="Original"
                        className="w-full h-auto max-h-80 object-contain"
                        onLoad={() => {
                          // 图片加载完成后自动应用默认效果
                          setTimeout(applyBlur, 100);
                        }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-gray-500 flex justify-between">
                      <span>Original Quality</span>
                      <span>{originalImageRef.current?.naturalWidth || 0} × {originalImageRef.current?.naturalHeight || 0}px</span>
                    </div>
                  </div>

                  {/* 处理后 */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Blurred Result
                      {isProcessing && (
                        <div className="ml-2 flex items-center">
                          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-green-500"></div>
                        </div>
                      )}
                    </h4>
                    <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 shadow-sm">
                      {processedImageUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={processedImageUrl}
                          alt="Blurred"
                          className="w-full h-auto max-h-80 object-contain"
                        />
                      ) : (
                        <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-center">
                            {isProcessing ? (
                              <div className="flex flex-col items-center space-y-3">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                                <span className="text-gray-600 font-medium">Processing...</span>
                                <span className="text-xs text-gray-500">Applying {blurType} blur effect</span>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center space-y-2">
                                <div className="text-4xl text-gray-400">🎨</div>
                                <span className="text-gray-500 font-medium">Ready to blur</span>
                                <span className="text-xs text-gray-400">Adjust settings and click &ldquo;Apply Blur&rdquo;</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 text-xs text-gray-500 flex justify-between">
                      <span>{processedImageUrl ? 'Ready for download' : 'Waiting for processing'}</span>
                      {processedImageUrl && <span>PNG Format</span>}
                    </div>
                  </div>
                </div>

                {/* 快速操作提示 */}
                {selectedImage && !processedImageUrl && !isProcessing && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-sm text-blue-800">
                      <div className="font-medium mb-2">💡 Quick Tips:</div>
                      <ul className="space-y-1 text-xs">
                        <li>• Use presets for instant effects</li>
                        <li>• Adjust sliders for real-time preview</li>
                        <li>• Try different blur types for various effects</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 隐藏的canvas */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}
