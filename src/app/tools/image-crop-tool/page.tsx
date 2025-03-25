'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './cropUtils';

// Define interface for cropped area pixels
interface CroppedAreaPixels {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Define interface for customized output dimensions
interface OutputDimensions {
  width: number | null;
  height: number | null;
}

// Define crop shape type
type CropShape = 'rect' | 'round';

export default function ImageCropTool() {
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CroppedAreaPixels | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [aspect, setAspect] = useState(4 / 3);
  const [isEmbedded, setIsEmbedded] = useState(false);
  
  // New state variables for enhanced features
  const [cropShape, setCropShape] = useState<CropShape>('rect');
  const [outputQuality, setOutputQuality] = useState<number>(0.92);
  const [preserveTransparency, setPreserveTransparency] = useState<boolean>(true);
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg'>('png');
  const [customDimensions, setCustomDimensions] = useState<OutputDimensions>({
    width: null, 
    height: null
  });
  const [useCustomDimensions, setUseCustomDimensions] = useState<boolean>(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if embedded in iframe
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      setIsEmbedded(urlParams.get('embed') === 'true');
    }
  }, []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setCroppedImage(null);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onCropComplete = useCallback((_croppedArea: CroppedAreaPixels, croppedAreaPixels: CroppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Handle dimension input changes
  const handleDimensionChange = (dimension: 'width' | 'height', value: string) => {
    const numValue = value === '' ? null : parseInt(value);
    setCustomDimensions(prev => ({
      ...prev,
      [dimension]: numValue
    }));
  };

  const showCroppedImage = useCallback(async () => {
    try {
      if (image && croppedAreaPixels) {
        const croppedImage = await getCroppedImg(
          image,
          croppedAreaPixels,
          rotation,
          cropShape,
          outputFormat,
          outputQuality,
          preserveTransparency,
          useCustomDimensions ? customDimensions : null
        );
        setCroppedImage(croppedImage);
        
        // If embedded, send cropped image to parent window
        if (isEmbedded && window.parent) {
          window.parent.postMessage({
            type: 'CROPPED_IMAGE',
            data: { 
              image: croppedImage, 
              dimensions: {
                width: croppedAreaPixels.width,
                height: croppedAreaPixels.height
              }
            }
          }, '*');
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [
    croppedAreaPixels, 
    rotation, 
    image, 
    isEmbedded, 
    cropShape, 
    outputFormat, 
    outputQuality, 
    preserveTransparency,
    useCustomDimensions,
    customDimensions
  ]);

  const resetCrop = () => {
    setImage(null);
    setCroppedImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const downloadCroppedImage = () => {
    if (!croppedImage) return;
    
    const link = document.createElement('a');
    link.download = `rgbatohex.com-cropped-image.${outputFormat}`;
    link.href = croppedImage;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Toggle aspect ratio
  const toggleAspect = () => {
    const aspects = [4/3, 1, 16/9, 3/2];
    const currentIndex = aspects.indexOf(aspect);
    const nextIndex = (currentIndex + 1) % aspects.length;
    setAspect(aspects[nextIndex]);
  };

  // Calculate estimated file size
  const getEstimatedFileSize = () => {
    if (!croppedAreaPixels) return "Unknown";
    
    const { width, height } = croppedAreaPixels;
    let size = width * height * 4; // 4 bytes per pixel for RGBA
    
    if (outputFormat === 'jpeg') {
      size = size * outputQuality * 0.25; // JPEG compression estimate
    } else if (!preserveTransparency) {
      size = size * 0.75; // RGB without alpha channel
    }
    
    // Convert to KB or MB
    if (size > 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    } else {
      return `${(size / 1024).toFixed(2)} KB`;
    }
  };

  // 修改setCropShape函数，当选择圆形裁剪时强制使用1:1比例
  const handleCropShapeChange = (shape: CropShape) => {
    setCropShape(shape);
    // 如果选择了圆形，强制设置宽高比为1:1
    if (shape === 'round') {
      setAspect(1);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 ${isEmbedded ? 'p-2' : 'p-4'}`}>
      <div className={`max-w-4xl mx-auto ${isEmbedded ? '' : 'mt-6'}`}>
        {!isEmbedded && (
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-3 drop-shadow-sm">
              Image Crop Tool
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Upload an image, adjust the crop area, then download your perfectly cropped image
            </p>
          </div>
        )}

        {!image ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-indigo-100 dark:border-indigo-900 transition-all hover:shadow-xl">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-indigo-500 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Select an Image to Start
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Choose an image from your device to crop, resize, and optimize it for your project.
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={onFileChange}
              ref={fileInputRef}
              className="hidden"
              id="image-input"
            />
            <label
              htmlFor="image-input"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-indigo-300/30 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Select Image
            </label>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 border border-indigo-100 dark:border-indigo-900">
              {/* Main action buttons */}
              <div className="mb-6 flex flex-wrap gap-3 justify-center">
                <div className="relative inline-block">
                  <select
                    value={cropShape}
                    onChange={(e) => handleCropShapeChange(e.target.value as CropShape)}
                    className="appearance-none px-4 py-2 pr-8 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition shadow-md cursor-pointer"
                  >
                    <option value="rect">Rectangle</option>
                    <option value="round">Circle</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <button
                  onClick={toggleAspect}
                  className={`px-4 py-2 ${cropShape === 'round' ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-md transition shadow-md flex items-center`}
                  disabled={cropShape === 'round'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v12H4V4z" clipRule="evenodd" />
                  </svg>
                  Aspect: {aspect === 1 ? '1:1' : aspect === 4/3 ? '4:3' : aspect === 16/9 ? '16:9' : '3:2'}
                </button>
                
                <button
                  onClick={showCroppedImage}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition shadow-md flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {croppedImage ? 'Recrop Image' : 'Crop Image'}
                </button>
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  className="hidden"
                  id="image-input-change"
                />
                <label
                  htmlFor="image-input-change"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition shadow-md flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                  </svg>
                  Change Image
                </label>

                {croppedImage && (
                  <>
                    <button
                      onClick={downloadCroppedImage}
                      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition shadow-md flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download Image
                    </button>
                    
                    <button
                      onClick={resetCrop}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition shadow-md flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                      Reset
                    </button>
                  </>
                )}
              </div>

              {!croppedImage ? (
                <div className="mb-6">
                  {/* Crop preview */}
                  <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                    <Cropper
                      image={image}
                      crop={crop}
                      zoom={zoom}
                      rotation={rotation}
                      aspect={aspect}
                      cropShape={cropShape}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                      onZoomChange={setZoom}
                      classes={{
                        containerClassName: 'cropper-container',
                        mediaClassName: 'cropper-media'
                      }}
                    />
                  </div>
                  
                  {/* Basic controls */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Zoom: {zoom.toFixed(1)}x
                      </label>
                      <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        onChange={(e) => setZoom(parseFloat(e.target.value))}
                        className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer dark:bg-indigo-900/30"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Rotation: {rotation}°
                      </label>
                      <input
                        type="range"
                        value={rotation}
                        min={0}
                        max={360}
                        step={1}
                        onChange={(e) => setRotation(parseInt(e.target.value))}
                        className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer dark:bg-indigo-900/30"
                      />
                    </div>
                  </div>
                  
                  {/* Advanced options */}
                  <div className="mt-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-100 dark:border-indigo-800">
                    <h3 className="text-lg font-medium text-indigo-700 dark:text-indigo-300 mb-3">Advanced Options</h3>
                    
                    {/* Output format */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Output Format
                        </label>
                        <div className="flex">
                          <button
                            onClick={() => setOutputFormat('png')}
                            className={`px-3 py-1.5 rounded-l-md border border-r-0 ${
                              outputFormat === 'png' 
                                ? 'bg-indigo-600 text-white border-indigo-600' 
                                : 'bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600'
                            }`}
                          >
                            PNG
                          </button>
                          <button
                            onClick={() => setOutputFormat('jpeg')}
                            className={`px-3 py-1.5 rounded-r-md border ${
                              outputFormat === 'jpeg' 
                                ? 'bg-indigo-600 text-white border-indigo-600' 
                                : 'bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600'
                            }`}
                          >
                            JPEG
                          </button>
                        </div>
                      </div>
                      
                      {/* Quality settings */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Quality: {Math.round(outputQuality * 100)}%
                        </label>
                        <input
                          type="range"
                          value={outputQuality}
                          min={0.1}
                          max={1}
                          step={0.05}
                          onChange={(e) => setOutputQuality(parseFloat(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                      </div>
                      
                      {/* Transparency option */}
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <input
                            type="checkbox"
                            checked={preserveTransparency}
                            onChange={(e) => setPreserveTransparency(e.target.checked)}
                            className="mr-2 h-4 w-4 text-indigo-600 rounded"
                          />
                          Preserve Transparency
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {outputFormat === 'png' ? 'Keeps transparent background' : 'Not available with JPEG'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Custom dimensions */}
                    <div className="mt-4">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <input
                          type="checkbox"
                          checked={useCustomDimensions}
                          onChange={(e) => setUseCustomDimensions(e.target.checked)}
                          className="mr-2 h-4 w-4 text-indigo-600 rounded"
                        />
                        Specify Output Dimensions
                      </label>
                      
                      {useCustomDimensions && (
                        <div className="flex flex-wrap gap-4 mt-2">
                          <div>
                            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                              Width (px)
                            </label>
                            <input
                              type="number"
                              value={customDimensions.width || ''}
                              onChange={(e) => handleDimensionChange('width', e.target.value)}
                              min="1"
                              placeholder="Auto"
                              className="w-24 px-3 py-1.5 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                              Height (px)
                            </label>
                            <input
                              type="number"
                              value={customDimensions.height || ''}
                              onChange={(e) => handleDimensionChange('height', e.target.value)}
                              min="1"
                              placeholder="Auto"
                              className="w-24 px-3 py-1.5 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                            />
                          </div>
                          <div className="flex items-end mb-1">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Estimated file size: {getEstimatedFileSize()}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Crop Result:
                  </h3>
                  <div className={`bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 flex justify-center items-center ${cropShape === 'round' ? 'overflow-hidden' : ''}`}>
                    <img
                      src={croppedImage}
                      alt="Cropped image"
                      className={`max-w-full h-auto max-h-96 shadow-lg ${cropShape === 'round' ? 'rounded-full' : 'rounded'}`}
                    />
                  </div>
                  
                  {/* Image Information */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800">
                      <h4 className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2">Image Information</h4>
                      <ul className="text-xs text-indigo-600 dark:text-indigo-400 space-y-1">
                        <li>Format: {outputFormat.toUpperCase()}</li>
                        <li>Quality: {Math.round(outputQuality * 100)}%</li>
                        <li>Shape: {cropShape === 'round' ? 'Circle' : 'Rectangle'}</li>
                        {croppedAreaPixels && (
                          <>
                            <li>Original Size: {croppedAreaPixels.width}px × {croppedAreaPixels.height}px</li>
                            {useCustomDimensions && customDimensions.width && customDimensions.height && (
                              <li>Resized to: {customDimensions.width}px × {customDimensions.height}px</li>
                            )}
                          </>
                        )}
                        <li>Transparent Background: {preserveTransparency && outputFormat === 'png' ? 'Yes' : 'No'}</li>
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800">
                      <h4 className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2">Usage Tips</h4>
                      <ul className="text-xs text-indigo-600 dark:text-indigo-400 space-y-1">
                        <li>Click &quot;Download Image&quot; to save to your device</li>
                        <li>For web use, {outputFormat === 'png' ? 'PNG is best for graphics with transparency' : 'JPEG is best for photos'}</li>
                        <li>For social media profiles, crop to 1:1 ratio</li>
                        <li>Consider {cropShape === 'round' ? 'rectangular crop' : 'circular crop'} for different uses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!isEmbedded && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-indigo-100 dark:border-indigo-900">
                <h2 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  About the Image Crop Tool
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  This tool uses the React Easy Crop library to provide a smooth image cropping experience. You can adjust the crop area, zoom and rotate the image to get the perfect crop result. After cropping, you can download the image or use it for your project.
                </p>
                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded border border-indigo-100 dark:border-indigo-800">
                  <h3 className="font-medium text-indigo-700 dark:text-indigo-300 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                    Features:
                  </h3>
                  <ul className="list-disc pl-5 text-indigo-600 dark:text-indigo-400 space-y-1">
                    <li>Drag, zoom, and rotate operations</li>
                    <li>Multiple aspect ratio options (1:1, 4:3, 16:9, 3:2)</li>
                    <li>Rectangle and circular crop shapes</li>
                    <li>Custom output dimensions</li>
                    <li>Quality control for optimized file size</li>
                    <li>Transparency preservation for PNG format</li>
                    <li>Simple and intuitive user interface</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 