'use client';

import { useState, useRef, useCallback } from 'react';
import {
  processImageFromUrl,
  downloadImage,
  validateImageFile,
  INVERSION_PRESETS,
  getInversionPresets,
  InversionOptions,
  ProcessingResult
} from '@/utils/imageInverter';
import {
  getTranslations,
  Translations
} from '@/utils/imageInverterTranslations';

export default function ImageInverterToolEn() {
  // 状态管理 / State management
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processingResult, setProcessingResult] = useState<ProcessingResult | null>(null);
  
  // 多语言支持 / Multilingual support - 固定为英语
  const t: Translations = getTranslations('en');
  
  // 反转选项 / Inversion options
  const [selectedPreset, setSelectedPreset] = useState('negative');
  const [customOptions, setCustomOptions] = useState<InversionOptions>(INVERSION_PRESETS.negative);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const presets = getInversionPresets();

  // 处理文件选择 / Handle file selection
  const handleFileSelect = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setError(null);
      const validation = validateImageFile(file);
      if (!validation.valid) {
        setError(validation.error || 'Invalid file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setOriginalImage(result);
        setProcessedImage(null);
        setProcessingResult(null);
      };
      reader.readAsDataURL(file);
    } catch {
      setError('Failed to load image');
    }
  }, []);

  // 处理图像 / Process image
  const processImage = useCallback(async () => {
    if (!originalImage) return;

    try {
      setIsProcessing(true);
      setError(null);

      const result = await processImageFromUrl(originalImage, customOptions);
      setProcessedImage(result.dataUrl || '');
      setProcessingResult(result);
    } catch {
      setError('Processing failed');
    } finally {
      setIsProcessing(false);
    }
  }, [originalImage, customOptions]);

  // 处理预设选择 / Handle preset selection
  const handlePresetChange = useCallback((presetId: string) => {
    setSelectedPreset(presetId);
    const preset = INVERSION_PRESETS[presetId as keyof typeof INVERSION_PRESETS];
    if (preset) {
      setCustomOptions(preset);
    }
  }, []);

  // 处理自定义选项变更 / Handle custom option changes
  const handleCustomOptionChange = useCallback((key: string, value: unknown) => {
    setCustomOptions(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  // 重置 / Reset
  const handleReset = useCallback(() => {
    setOriginalImage(null);
    setProcessedImage(null);
    setError(null);
    setProcessingResult(null);
    setSelectedPreset('negative');
    setCustomOptions(INVERSION_PRESETS.negative);
    setShowAdvanced(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  // 下载图像 / Download image
  const handleDownload = useCallback(() => {
    if (processedImage) {
      downloadImage(processedImage, 'inverted-image.png');
    }
  }, [processedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 错误显示 / Error display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {!originalImage ? (
          /* 上传区域 / Upload area */
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-purple-100 dark:border-purple-900">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {t.uploadTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                {t.uploadDescription}
              </p>
              
              <div className="border-2 border-dashed border-purple-300 dark:border-purple-600 rounded-lg p-8 mb-4 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center justify-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {t.selectImageButton}
                </label>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {t.maxFileSize}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 主要工作区域 / Main work area */
          <div className="space-y-6">
            {/* 控制面板 / Control panel */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-900">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4 lg:mb-0">
                  {t.inversionSettings}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition text-sm"
                  >
                    {showAdvanced ? t.hideAdvanced : t.showAdvanced}
                  </button>
                  <button
                    onClick={processImage}
                    disabled={isProcessing}
                    className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition disabled:opacity-50 flex items-center text-sm"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t.processing}
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        {t.invertImageButton}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 预设选择 / Preset selection */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetChange(preset.id)}
                    className={`p-3 rounded-lg border-2 transition ${
                      selectedPreset === preset.id
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30'
                        : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600'
                    }`}
                  >
                    <div className="text-sm font-medium text-center">{t.presets[preset.id as keyof typeof t.presets] || preset.name}</div>
                  </button>
                ))}
              </div>

              {/* 高级选项 / Advanced options */}
              {showAdvanced && (
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-100 dark:border-purple-800">
                  <h4 className="text-lg font-medium text-purple-700 dark:text-purple-300 mb-6">{t.advancedOptions}</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* 强度控制 / Intensity control */}
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t.intensity}: {Math.round((customOptions.intensity || 1) * 100)}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={customOptions.intensity || 1}
                        onChange={(e) => handleCustomOptionChange('intensity', parseFloat(e.target.value))}
                        className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer dark:bg-purple-900/30"
                      />
                    </div>

                    {/* 透明度保持 / Alpha preservation */}
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t.preserveTransparency}
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={customOptions.preserveAlpha !== false}
                          onChange={(e) => handleCustomOptionChange('preserveAlpha', e.target.checked)}
                          className="h-4 w-4 text-purple-600 rounded mr-3"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Enable transparency preservation</span>
                      </label>
                    </div>

                    {/* 自定义通道 / Custom channels */}
                    {customOptions.mode === 'custom' && (
                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {t.invertChannels}
                        </label>
                        <div className="space-y-2">
                          {['red', 'green', 'blue'].map((channel) => (
                            <label key={channel} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={customOptions.customChannels?.[channel as keyof typeof customOptions.customChannels] || false}
                                onChange={(e) => handleCustomOptionChange('customChannels', {
                                  ...customOptions.customChannels,
                                  [channel]: e.target.checked
                                })}
                                className="h-4 w-4 text-purple-600 rounded mr-3"
                              />
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {t.channels[channel as keyof typeof t.channels]}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 图像显示区域 / Image display area - 左右布局 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* 原始图像 / Original image */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-900">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    {t.originalImage}
                  </h3>
                  <div className="flex gap-2">
                    <label
                      htmlFor="image-upload-replace"
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition cursor-pointer flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                      </svg>
                      {t.changeImage}
                    </label>
                    <button
                      onClick={handleReset}
                      className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                      {t.reset}
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={originalImage}
                    alt="Original"
                    className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-600 max-h-96 object-contain"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="image-upload-replace"
                  />
                </div>
              </div>

              {/* 处理后图像 / Processed image */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-900">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    {t.invertedImage}
                  </h3>
                  {processedImage && (
                    <button
                      onClick={handleDownload}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {t.downloadButton}
                    </button>
                  )}
                </div>
                <div className="relative">
                  {processedImage ? (
                    <>
                      <img
                        src={processedImage}
                        alt="Inverted"
                        className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-600 max-h-96 object-contain"
                      />
                      {processingResult && (
                        <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                          <h4 className="text-sm font-medium text-purple-700 dark:text-purple-300 mb-3">{t.processingInfo}</h4>
                          <div className="grid grid-cols-2 gap-3 text-xs text-purple-600 dark:text-purple-400">
                            <div><strong>Size:</strong> {processingResult.originalSize.width} × {processingResult.originalSize.height}px</div>
                            <div><strong>Time:</strong> {processingResult.processingTime.toFixed(2)}ms</div>
                            <div><strong>Mode:</strong> {t.presets[selectedPreset as keyof typeof t.presets] || selectedPreset}</div>
                            <div><strong>Intensity:</strong> {Math.round((customOptions.intensity || 1) * 100)}%</div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-96 bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 dark:text-gray-400">{t.clickToInvert}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
