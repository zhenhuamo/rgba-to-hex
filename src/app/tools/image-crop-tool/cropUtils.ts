// 创建一个偏移画布来处理裁剪
export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // 处理跨域图像
    image.src = url;
  });

// 获取图像旋转角度
function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180;
}

// 基于裁剪区域和旋转，获取裁剪图像
export const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number },
  rotation = 0,
  cropShape: 'rect' | 'round' = 'rect',
  outputFormat: 'png' | 'jpeg' = 'png',
  quality = 0.92,
  preserveTransparency = true,
  customDimensions: { width: number | null; height: number | null } | null = null
): Promise<string> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('No 2d context');
  }

  // Set canvas size based on crop size or custom dimensions
  let finalWidth = pixelCrop.width;
  let finalHeight = pixelCrop.height;

  // 如果是圆形裁剪，确保宽高相等（使用最小值）
  if (cropShape === 'round' && finalWidth !== finalHeight) {
    const minSize = Math.min(finalWidth, finalHeight);
    finalWidth = minSize;
    finalHeight = minSize;
  }

  // Apply custom dimensions if specified
  if (customDimensions && 
     (customDimensions.width !== null || customDimensions.height !== null)) {
    // If only one dimension is provided, calculate the other to maintain aspect ratio
    if (customDimensions.width !== null && customDimensions.height === null) {
      const aspectRatio = pixelCrop.height / pixelCrop.width;
      finalWidth = customDimensions.width;
      finalHeight = Math.round(customDimensions.width * aspectRatio);
    } else if (customDimensions.width === null && customDimensions.height !== null) {
      const aspectRatio = pixelCrop.width / pixelCrop.height;
      finalHeight = customDimensions.height;
      finalWidth = Math.round(customDimensions.height * aspectRatio);
    } else if (customDimensions.width !== null && customDimensions.height !== null) {
      finalWidth = customDimensions.width;
      finalHeight = customDimensions.height;
    }
    
    // 圆形裁剪时确保宽高相等
    if (cropShape === 'round' && finalWidth !== finalHeight) {
      const minSize = Math.min(finalWidth, finalHeight);
      finalWidth = minSize;
      finalHeight = minSize;
    }
  }

  canvas.width = finalWidth;
  canvas.height = finalHeight;

  // Transparent background for PNG if preserveTransparency is true
  if (outputFormat === 'png' && preserveTransparency) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    // Fill with white background for JPEG or when transparency is not preserved
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Draw the image with translation, rotation, and scaling as needed
  ctx.save();
  
  // Start by translating to center of destination canvas
  ctx.translate(finalWidth / 2, finalHeight / 2);
  
  // Rotate around the center
  ctx.rotate((rotation * Math.PI) / 180);
  
  // Calculate the scale factor to fit the cropped area into the final dimensions
  const scaleX = finalWidth / pixelCrop.width;
  const scaleY = finalHeight / pixelCrop.height;
  ctx.scale(scaleX, scaleY);
  
  // Move to the center of the cropped area in the original image
  ctx.translate(-pixelCrop.x - pixelCrop.width / 2, -pixelCrop.y - pixelCrop.height / 2);
  
  // Draw the original image
  ctx.drawImage(
    image,
    0,
    0,
    image.width,
    image.height
  );
  
  ctx.restore();

  // Apply circular mask if cropShape is 'round'
  if (cropShape === 'round') {
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(
      finalWidth / 2,
      finalHeight / 2,
      Math.min(finalWidth, finalHeight) / 2,
      0,
      2 * Math.PI,
      true
    );
    ctx.fill();
  }

  // Format settings
  const mimeType = outputFormat === 'jpeg' ? 'image/jpeg' : 'image/png';
  
  // Return data URL
  return canvas.toDataURL(mimeType, quality);
};

// 为更大的图像创建裁剪图像，避免浏览器崩溃
export async function getCroppedImgSafe(
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number },
  rotation = 0,
  flip = { horizontal: false, vertical: false }
): Promise<string> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('无法获取canvas上下文');
  }

  // 设置裁剪画布尺寸
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // 处理旋转和翻转
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  // 裁剪和绘制图像
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // 返回裁剪后的图像
  return canvas.toDataURL('image/png');
} 