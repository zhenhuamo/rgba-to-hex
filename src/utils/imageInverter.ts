// 图像反转工具核心功能
// Image Inversion Tool Core Functions

export interface InversionOptions {
  mode: 'colors' | 'brightness' | 'negative' | 'custom';
  preserveAlpha?: boolean;
  customChannels?: {
    red: boolean;
    green: boolean;
    blue: boolean;
  };
  intensity?: number; // 0-1, for partial inversion
}

export interface ProcessingResult {
  success: boolean;
  dataUrl?: string;
  error?: string;
  originalSize: { width: number; height: number };
  processedSize: { width: number; height: number };
  processingTime: number;
}

/**
 * 创建图像对象
 * Create image object from URL
 */
export const createImageFromUrl = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = url;
  });
};

/**
 * 颜色反转 - 反转所有RGB通道
 * Color inversion - invert all RGB channels
 */
export const invertColors = (imageData: ImageData, options: InversionOptions): ImageData => {
  const data = imageData.data;
  const newData = new Uint8ClampedArray(data);
  
  for (let i = 0; i < data.length; i += 4) {
    if (options.mode === 'colors' || options.mode === 'negative') {
      // 反转RGB通道 / Invert RGB channels
      newData[i] = 255 - data[i];     // Red
      newData[i + 1] = 255 - data[i + 1]; // Green
      newData[i + 2] = 255 - data[i + 2]; // Blue
    } else if (options.mode === 'brightness') {
      // 亮度反转 / Brightness inversion
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const inverted = 255 - avg;
      newData[i] = inverted;
      newData[i + 1] = inverted;
      newData[i + 2] = inverted;
    } else if (options.mode === 'custom' && options.customChannels) {
      // 自定义通道反转 / Custom channel inversion
      newData[i] = options.customChannels.red ? 255 - data[i] : data[i];
      newData[i + 1] = options.customChannels.green ? 255 - data[i + 1] : data[i + 1];
      newData[i + 2] = options.customChannels.blue ? 255 - data[i + 2] : data[i + 2];
    }
    
    // 处理透明度 / Handle alpha channel
    if (options.preserveAlpha !== false) {
      newData[i + 3] = data[i + 3]; // Keep original alpha
    } else {
      newData[i + 3] = 255 - data[i + 3]; // Invert alpha
    }
    
    // 应用强度 / Apply intensity
    if (options.intensity !== undefined && options.intensity < 1) {
      const intensity = Math.max(0, Math.min(1, options.intensity));
      newData[i] = data[i] + (newData[i] - data[i]) * intensity;
      newData[i + 1] = data[i + 1] + (newData[i + 1] - data[i + 1]) * intensity;
      newData[i + 2] = data[i + 2] + (newData[i + 2] - data[i + 2]) * intensity;
    }
  }
  
  return new ImageData(newData, imageData.width, imageData.height);
};

/**
 * 处理图像文件
 * Process image file
 */
export const processImageFile = async (
  file: File,
  options: InversionOptions
): Promise<ProcessingResult> => {
  const startTime = performance.now();
  
  try {
    // 验证文件类型 / Validate file type
    if (!file.type.startsWith('image/')) {
      throw new Error('Invalid file type. Please select an image file.');
    }
    
    // 创建文件URL / Create file URL
    const fileUrl = URL.createObjectURL(file);
    
    try {
      // 加载图像 / Load image
      const img = await createImageFromUrl(fileUrl);
      
      // 创建canvas / Create canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error('Failed to get canvas context');
      }
      
      // 设置canvas尺寸 / Set canvas dimensions
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 绘制原始图像 / Draw original image
      ctx.drawImage(img, 0, 0);
      
      // 获取图像数据 / Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      // 处理图像 / Process image
      const processedImageData = invertColors(imageData, options);
      
      // 将处理后的数据放回canvas / Put processed data back to canvas
      ctx.putImageData(processedImageData, 0, 0);
      
      // 转换为数据URL / Convert to data URL
      const dataUrl = canvas.toDataURL('image/png');
      
      const endTime = performance.now();
      
      return {
        success: true,
        dataUrl,
        originalSize: { width: img.width, height: img.height },
        processedSize: { width: canvas.width, height: canvas.height },
        processingTime: endTime - startTime
      };
      
    } finally {
      // 清理URL / Cleanup URL
      URL.revokeObjectURL(fileUrl);
    }
    
  } catch (error) {
    const endTime = performance.now();
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      originalSize: { width: 0, height: 0 },
      processedSize: { width: 0, height: 0 },
      processingTime: endTime - startTime
    };
  }
};

/**
 * 从URL处理图像
 * Process image from URL
 */
export const processImageFromUrl = async (
  imageUrl: string,
  options: InversionOptions
): Promise<ProcessingResult> => {
  const startTime = performance.now();
  
  try {
    // 加载图像 / Load image
    const img = await createImageFromUrl(imageUrl);
    
    // 创建canvas / Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }
    
    // 设置canvas尺寸 / Set canvas dimensions
    canvas.width = img.width;
    canvas.height = img.height;
    
    // 绘制原始图像 / Draw original image
    ctx.drawImage(img, 0, 0);
    
    // 获取图像数据 / Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    // 处理图像 / Process image
    const processedImageData = invertColors(imageData, options);
    
    // 将处理后的数据放回canvas / Put processed data back to canvas
    ctx.putImageData(processedImageData, 0, 0);
    
    // 转换为数据URL / Convert to data URL
    const dataUrl = canvas.toDataURL('image/png');
    
    const endTime = performance.now();
    
    return {
      success: true,
      dataUrl,
      originalSize: { width: img.width, height: img.height },
      processedSize: { width: canvas.width, height: canvas.height },
      processingTime: endTime - startTime
    };
    
  } catch (error) {
    const endTime = performance.now();
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      originalSize: { width: 0, height: 0 },
      processedSize: { width: 0, height: 0 },
      processingTime: endTime - startTime
    };
  }
};

/**
 * 预设反转模式
 * Preset inversion modes
 */
export const INVERSION_PRESETS: Record<string, InversionOptions> = {
  negative: {
    mode: 'negative',
    preserveAlpha: true,
    intensity: 1
  },
  colors: {
    mode: 'colors',
    preserveAlpha: true,
    intensity: 1
  },
  brightness: {
    mode: 'brightness',
    preserveAlpha: true,
    intensity: 1
  },
  redOnly: {
    mode: 'custom',
    customChannels: { red: true, green: false, blue: false },
    preserveAlpha: true,
    intensity: 1
  },
  greenOnly: {
    mode: 'custom',
    customChannels: { red: false, green: true, blue: false },
    preserveAlpha: true,
    intensity: 1
  },
  blueOnly: {
    mode: 'custom',
    customChannels: { red: false, green: false, blue: true },
    preserveAlpha: true,
    intensity: 1
  },
  partial: {
    mode: 'colors',
    preserveAlpha: true,
    intensity: 0.5
  }
};

/**
 * 获取预设列表
 * Get preset list
 */
export const getInversionPresets = () => {
  return Object.keys(INVERSION_PRESETS).map(key => ({
    id: key,
    name: key.charAt(0).toUpperCase() + key.slice(1),
    options: INVERSION_PRESETS[key]
  }));
};

/**
 * 下载处理后的图像
 * Download processed image
 */
export const downloadImage = (dataUrl: string, filename: string = 'inverted-image.png') => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * 验证图像文件
 * Validate image file
 */
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
  // 检查文件类型 / Check file type
  if (!file.type.startsWith('image/')) {
    return { valid: false, error: 'Please select a valid image file' };
  }
  
  // 检查文件大小 (10MB限制) / Check file size (10MB limit)
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 10MB' };
  }
  
  return { valid: true };
};
