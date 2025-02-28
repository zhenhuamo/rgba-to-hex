"use client";

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// 定义类型接口
interface ColorBlindTypeInfo {
  name: string;
  matrix: number[];
}

interface ColorBlindTypesMap {
  [key: string]: ColorBlindTypeInfo;
}

interface SimulatedColorsMap {
  [key: string]: string;
}

interface ProcessedImageMap {
  [key: string]: string;
}

// 色盲类型及其转换矩阵
const colorBlindTypes: ColorBlindTypesMap = {
  normal: {
    name: "Normal Vision",
    matrix: [
      1, 0, 0, 0, 0,
      0, 1, 0, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
  protanopia: {
    name: "Protanopia (Red-Blind)",
    matrix: [
      0.567, 0.433, 0, 0, 0,
      0.558, 0.442, 0, 0, 0,
      0, 0.242, 0.758, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
  protanomaly: {
    name: "Protanomaly (Red-Weak)",
    matrix: [
      0.817, 0.183, 0, 0, 0,
      0.333, 0.667, 0, 0, 0,
      0, 0.125, 0.875, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
  deuteranopia: {
    name: "Deuteranopia (Green-Blind)",
    matrix: [
      0.625, 0.375, 0, 0, 0,
      0.7, 0.3, 0, 0, 0,
      0, 0.3, 0.7, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
  deuteranomaly: {
    name: "Deuteranomaly (Green-Weak)",
    matrix: [
      0.8, 0.2, 0, 0, 0,
      0.258, 0.742, 0, 0, 0,
      0, 0.142, 0.858, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
  tritanopia: {
    name: "Tritanopia (Blue-Blind)",
    matrix: [
      0.95, 0.05, 0, 0, 0,
      0, 0.433, 0.567, 0, 0,
      0, 0.475, 0.525, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
  tritanomaly: {
    name: "Tritanomaly (Blue-Weak)",
    matrix: [
      0.967, 0.033, 0, 0, 0,
      0, 0.733, 0.267, 0, 0,
      0, 0.183, 0.817, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
  achromatopsia: {
    name: "Achromatopsia (Monochromacy)",
    matrix: [
      0.299, 0.587, 0.114, 0, 0,
      0.299, 0.587, 0.114, 0, 0,
      0.299, 0.587, 0.114, 0, 0,
      0, 0, 0, 1, 0
    ]
  },
  achromatomaly: {
    name: "Achromatomaly (Blue Cone Monochromacy)",
    matrix: [
      0.618, 0.320, 0.062, 0, 0,
      0.163, 0.775, 0.062, 0, 0,
      0.163, 0.320, 0.516, 0, 0,
      0, 0, 0, 1, 0
    ]
  }
};

// 创建一个包含 useSearchParams 的内部组件
const SimulatorContent = () => {
  const searchParams = useSearchParams();
  const isEmbedded = searchParams.get('embed') === 'true';
  
  const [selectedColorBlindType, setSelectedColorBlindType] = useState<string>('deuteranopia');
  const [colorInput, setColorInput] = useState<string>('#4285F4');
  const [simulatedColors, setSimulatedColors] = useState<SimulatedColorsMap>({});
  const [activeTab, setActiveTab] = useState<'color' | 'image'>('color');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<ProcessedImageMap>({});
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const imageUploadRef = useRef<HTMLInputElement>(null);
  const originalCanvasRef = useRef<HTMLCanvasElement>(null);
  const simulatedCanvasRef = useRef<HTMLCanvasElement>(null);

  // Process a single color
  const simulateColorBlindness = (color: string, type: string): string => {
    // Remove # if present
    const hex = color.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    // Apply color blind matrix
    const matrix = colorBlindTypes[type]?.matrix || colorBlindTypes.normal.matrix;
    
    const r2 = r * matrix[0] + g * matrix[1] + b * matrix[2];
    const g2 = r * matrix[5] + g * matrix[6] + b * matrix[7];
    const b2 = r * matrix[10] + g * matrix[11] + b * matrix[12];
    
    // Convert back to hex
    const simulatedR = Math.min(255, Math.max(0, Math.round(r2 * 255))).toString(16).padStart(2, '0');
    const simulatedG = Math.min(255, Math.max(0, Math.round(g2 * 255))).toString(16).padStart(2, '0');
    const simulatedB = Math.min(255, Math.max(0, Math.round(b2 * 255))).toString(16).padStart(2, '0');
    
    return `#${simulatedR}${simulatedG}${simulatedB}`;
  };
  
  // Process an image
  const processImage = (imageFile: File, colorBlindType: string): void => {
    setIsProcessing(true);
    setError('');
    
    const img = new Image();
    img.onload = () => {
      // Draw original image
      const originalCanvas = originalCanvasRef.current;
      const originalCtx = originalCanvas?.getContext('2d');
      
      if (!originalCanvas || !originalCtx) {
        setError('Canvas error. Please try again.');
        setIsProcessing(false);
        return;
      }
      
      // Set canvas dimensions to match image
      originalCanvas.width = img.width;
      originalCanvas.height = img.height;
      originalCtx.drawImage(img, 0, 0);
      
      // Get image data
      const imageData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
      const data = imageData.data;
      
      // Create a copy for the simulated image
      const simulatedCanvas = simulatedCanvasRef.current;
      const simulatedCtx = simulatedCanvas?.getContext('2d');
      
      if (!simulatedCanvas || !simulatedCtx) {
        setError('Canvas error. Please try again.');
        setIsProcessing(false);
        return;
      }
      
      simulatedCanvas.width = img.width;
      simulatedCanvas.height = img.height;
      
      const simulatedImageData = new ImageData(
        new Uint8ClampedArray(data),
        imageData.width,
        imageData.height
      );
      
      // Apply color blindness simulation to each pixel
      const matrix = colorBlindTypes[colorBlindType]?.matrix || colorBlindTypes.normal.matrix;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i] / 255;
        const g = data[i + 1] / 255;
        const b = data[i + 2] / 255;
        
        // Apply color blind matrix
        const r2 = r * matrix[0] + g * matrix[1] + b * matrix[2];
        const g2 = r * matrix[5] + g * matrix[6] + b * matrix[7];
        const b2 = r * matrix[10] + g * matrix[11] + b * matrix[12];
        
        // Set the simulated pixel values
        simulatedImageData.data[i] = Math.min(255, Math.max(0, Math.round(r2 * 255)));
        simulatedImageData.data[i + 1] = Math.min(255, Math.max(0, Math.round(g2 * 255)));
        simulatedImageData.data[i + 2] = Math.min(255, Math.max(0, Math.round(b2 * 255)));
        // Alpha remains unchanged
      }
      
      // Put the processed image data back
      simulatedCtx.putImageData(simulatedImageData, 0, 0);
      
      // Store the processed image URLs
      setProcessedImage(prev => ({
        ...prev,
        [colorBlindType]: simulatedCanvas.toDataURL('image/png')
      }));
      
      setIsProcessing(false);
    };
    
    img.onerror = () => {
      setError('Failed to load image. Please try again with a different image.');
      setIsProcessing(false);
    };
    
    // Load image from file
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        img.src = result;
        setUploadedImage(result);
      }
    };
    reader.onerror = () => {
      setError('Error reading file. Please try again.');
      setIsProcessing(false);
    };
    reader.readAsDataURL(imageFile);
  };
  
  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file.');
      return;
    }
    
    // Process the image
    processImage(file, selectedColorBlindType);
  };
  
  // Simulate color when input changes
  useEffect(() => {
    const simulateAllTypes = () => {
      const results: SimulatedColorsMap = {};
      
      Object.keys(colorBlindTypes).forEach(type => {
        results[type] = simulateColorBlindness(colorInput, type);
      });
      
      setSimulatedColors(results);
    };
    
    if (colorInput && colorInput.match(/^#[0-9A-F]{6}$/i)) {
      simulateAllTypes();
    }
  }, [colorInput]);
  
  // Process image when colorBlindType changes and we have an uploaded image
  useEffect(() => {
    if (uploadedImage && activeTab === 'image') {
      // Only reprocess if we don't already have this simulation
      if (!processedImage[selectedColorBlindType]) {
        const dataURLtoBlob = (dataURL: string): Blob => {
          const arr = dataURL.split(',');
          const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
          const bstr = atob(arr[1]);
          let n = bstr.length;
          const u8arr = new Uint8Array(n);
          
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          
          return new Blob([u8arr], { type: mime });
        };
        
        const blob = dataURLtoBlob(uploadedImage);
        const file = new File([blob], "image.png", { type: "image/png" });
        processImage(file, selectedColorBlindType);
      }
    }
  }, [selectedColorBlindType, uploadedImage, activeTab, processedImage]);
  
  return (
    <div className={`${isEmbedded ? 'p-4' : 'p-6 max-w-6xl mx-auto'}`}>
      {!isEmbedded && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Color Blindness Simulator
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Visualize how colors and images appear to people with different types of color blindness
          </p>
        </div>
      )}
      
      {/* Tab Navigation */}
      <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
        <button
          className={`py-2 px-4 font-medium transition-colors duration-200 ${
            activeTab === 'color'
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
          }`}
          onClick={() => setActiveTab('color')}
        >
          Color Simulator
        </button>
        <button
          className={`py-2 px-4 font-medium transition-colors duration-200 ${
            activeTab === 'image'
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
          }`}
          onClick={() => setActiveTab('image')}
        >
          Image Simulator
        </button>
      </div>
      
      {/* Color Blindness Type Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Color Blindness Type:
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Object.keys(colorBlindTypes).map(type => (
            <button
              key={type}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedColorBlindType === type
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setSelectedColorBlindType(type)}
            >
              {colorBlindTypes[type]?.name || type}
            </button>
          ))}
        </div>
      </div>
      
      {/* Color Simulator */}
      {activeTab === 'color' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Color Simulator
          </h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Enter a color (HEX format):
              </label>
              <div className="flex">
                <input
                  type="color"
                  value={colorInput}
                  onChange={(e) => setColorInput(e.target.value)}
                  className="h-10 w-20 rounded-l-md border border-gray-300 dark:border-gray-600"
                />
                <input
                  type="text"
                  value={colorInput}
                  onChange={(e) => setColorInput(e.target.value)}
                  placeholder="#RRGGBB"
                  className="flex-1 h-10 px-4 rounded-r-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Simulated Color:
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <div 
                    className="h-20 w-20 rounded-md border border-gray-300 dark:border-gray-600 mb-2"
                    style={{ backgroundColor: colorInput }}
                  ></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Original</span>
                </div>
                
                <div className="text-gray-400">→</div>
                
                <div className="flex flex-col items-center">
                  <div 
                    className="h-20 w-20 rounded-md border border-gray-300 dark:border-gray-600 mb-2"
                    style={{ backgroundColor: simulatedColors[selectedColorBlindType] || colorInput }}
                  ></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {colorBlindTypes[selectedColorBlindType]?.name || 'Simulated'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">All Color Blindness Types:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.keys(colorBlindTypes).map(type => (
                <div key={type} className="flex flex-col items-center">
                  <div 
                    className="h-12 w-12 rounded-md border border-gray-300 dark:border-gray-600 mb-2"
                    style={{ backgroundColor: simulatedColors[type] || colorInput }}
                  ></div>
                  <span className="text-xs text-center text-gray-500 dark:text-gray-400">
                    {colorBlindTypes[type]?.name || type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Image Simulator */}
      {activeTab === 'image' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Image Simulator
          </h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload an image:
            </label>
            <div className="flex space-x-3">
              <input
                type="file"
                ref={imageUploadRef}
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => imageUploadRef.current?.click()}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Select Image
              </button>
              {uploadedImage && (
                <button
                  onClick={() => {
                    setUploadedImage(null);
                    setProcessedImage({});
                    if (imageUploadRef.current) {
                      imageUploadRef.current.value = '';
                    }
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  Remove Image
                </button>
              )}
            </div>
            {error && (
              <p className="mt-2 text-red-500 text-sm">{error}</p>
            )}
          </div>
          
          {isProcessing && (
            <div className="my-6 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Processing image...</p>
            </div>
          )}
          
          {uploadedImage && !isProcessing && (
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Original Image:</h4>
                <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                  <img 
                    src={uploadedImage} 
                    alt="Original" 
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {colorBlindTypes[selectedColorBlindType]?.name || 'Simulated'}:
                </h4>
                <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                  {processedImage[selectedColorBlindType] ? (
                    <img 
                      src={processedImage[selectedColorBlindType]} 
                      alt={colorBlindTypes[selectedColorBlindType]?.name || 'Simulated'} 
                      className="max-w-full h-auto"
                    />
                  ) : (
                    <div className="h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <p className="text-gray-500 dark:text-gray-400">Processing...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Hidden canvas elements for image processing */}
          <div className="hidden">
            <canvas ref={originalCanvasRef}></canvas>
            <canvas ref={simulatedCanvasRef}></canvas>
          </div>
        </div>
      )}
      
      {/* Information Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          About Color Blindness
        </h3>
        
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Color blindness affects approximately 1 in 12 men and 1 in 200 women worldwide. 
            This tool helps designers and developers create more inclusive content by 
            simulating how colors and images appear to people with different types of color vision deficiency.
          </p>
          
          <h4 className="font-medium text-gray-700 dark:text-gray-200 mt-4">Common Types of Color Blindness:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Protanopia:</strong> Red-blind, difficulty distinguishing between red and green colors.</li>
            <li><strong>Deuteranopia:</strong> Green-blind, also has difficulty with red and green colors but in a different way.</li>
            <li><strong>Tritanopia:</strong> Blue-blind, difficulty distinguishing between blue and yellow colors.</li>
            <li><strong>Achromatopsia:</strong> Complete color blindness, seeing only in shades of gray.</li>
          </ul>
          
          <p className="mt-4">
            When designing with accessibility in mind, consider using color combinations with 
            high contrast and avoiding color pairs that might be indistinguishable to people 
            with color blindness. This tool can help you test your color choices.
          </p>
        </div>
      </div>
      
      {uploadedImage && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
          Note: Image processing is done entirely in your browser. No images are uploaded to any server.
        </div>
      )}
    </div>
  );
};

// 创建一个加载状态组件
const SimulatorLoading = () => (
  <div className="p-6 max-w-6xl mx-auto">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-r-4 border-gray-200"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading simulator...</p>
    </div>
  </div>
);

// 主组件使用 Suspense 包裹内部组件
const ColorBlindnessSimulator = () => {
  return (
    <Suspense fallback={<SimulatorLoading />}>
      <SimulatorContent />
    </Suspense>
  );
};

export default ColorBlindnessSimulator;