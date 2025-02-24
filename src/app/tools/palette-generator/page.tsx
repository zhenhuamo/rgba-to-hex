/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { toast } from 'sonner';
import { Toaster } from 'sonner';
import { colord, extend, Colord } from 'colord';
import harmoniesPlugin from 'colord/plugins/harmonies';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

// 扩展colord以支持颜色和谐
extend([harmoniesPlugin]);

interface PaletteOptions {
  colorCount: number;
}

interface ColorScheme {
  primary: string;
  monochromatic: string[]; // 单色
  analogous: string[]; // 类似色
  complementary: string[]; // 互补色
  triadic: string[]; // 三色
  tetradic: string[]; // 四色
  split: string[]; // 分裂互补
  custom: string[]; // 自定义数量
}

interface SamplePoint {
  id: string;
  x: number;
  y: number;
  color: string;
  isDragging?: boolean;
}

// 添加预设主题
const colorThemes = {
  nature: ['#2ecc71', '#27ae60', '#3498db', '#2980b9', '#1abc9c'],
  sunset: ['#e74c3c', '#c0392b', '#d35400', '#e67e22', '#f39c12'],
  ocean: ['#3498db', '#2980b9', '#1abc9c', '#16a085', '#2c3e50'],
  forest: ['#27ae60', '#2ecc71', '#f1c40f', '#d35400', '#2c3e50'],
  modern: ['#34495e', '#2c3e50', '#95a5a6', '#7f8c8d', '#bdc3c7'],
  vintage: ['#d35400', '#c0392b', '#8e44ad', '#2c3e50', '#f39c12']
};

// 添加 ImageSize 接口
interface ImageSize {
  width: number;
  height: number;
}

// 将 copyToClipboard 移到组件外部作为工具函数
const copyToClipboard = (color: string) => {
  navigator.clipboard.writeText(color);
  toast.success('Color code copied!');
};

// 修改复制功能
const copyColorFormats = (color: string) => {
  const formats = {
    HEX: color,
    RGB: colord(color).toRgbString(),
    HSL: colord(color).toHslString()
  };
  
  const text = Object.entries(formats)
    .map(([format, value]) => `${format}: ${value}`)
    .join('\n');

  navigator.clipboard.writeText(text);
  toast.success('All color formats copied!');
};

// 颜色展示组件
const ColorSwatch = ({ color, onCopy = copyToClipboard }: { 
  color: string;
  onCopy?: (color: string) => void;
}) => (
  <div
    onClick={() => onCopy(color)}
    className="group relative aspect-square"
  >
    <div
      className="w-full h-full rounded-lg cursor-pointer transition-transform hover:scale-105"
      style={{ backgroundColor: color }}
    />
    <span className="absolute bottom-0 left-0 right-0 text-center text-xs font-mono bg-black/50 text-white py-1 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
      {color}
    </span>
  </div>
);

export default function PaletteGenerator() {
  const [baseColor, setBaseColor] = useState("#6366f1");
  const [colorScheme, setColorScheme] = useState<ColorScheme>({
    primary: "#6366f1",
    monochromatic: ["#6366f1"],
    analogous: ["#6363f1", "#6366f1", "#6663f1"],
    complementary: ["#6366f1", "#f16363"],
    triadic: ["#6366f1", "#f16363", "#63f166"],
    tetradic: ["#6366f1", "#f16363", "#63f166", "#f163f1"],
    split: ["#6366f1", "#f16363", "#63f166"],
    custom: ["#6366f1"]
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [samplePoints, setSamplePoints] = useState<SamplePoint[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageSize, setImageSize] = useState<ImageSize>({ width: 0, height: 0 });
  const [maxPoints, setMaxPoints] = useState(5);
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);
  const [dragPoint, setDragPoint] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const colorCanvas = useRef<HTMLCanvasElement | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const GenerationMethods = () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
          id="imageInput"
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {isLoading ? 'Processing...' : 'Generate from Image'}
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Choose Colors</h2>
        <div className="space-y-6">
          {/* 颜色选择器 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pick Base Color
            </label>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-lg cursor-pointer border shadow-sm"
                  style={{ backgroundColor: baseColor }}
                  onClick={() => setShowColorPicker(!showColorPicker)}
                />
                {showColorPicker && (
                  <div className="absolute z-50 top-full left-0 mt-2">
                    <div className="fixed inset-0" onClick={() => setShowColorPicker(false)} />
                    <div className="relative">
                      <HexColorPicker
                        color={baseColor}
                        onChange={(color) => {
                          setBaseColor(color);
                          generateColorScheme(color);
                        }}
                        className="shadow-xl rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
              <input
                type="text"
                value={baseColor}
                onChange={(e) => {
                  const color = e.target.value;
                  if (color.match(/^#[0-9A-Fa-f]{6}$/)) {
                    setBaseColor(color);
                    generateColorScheme(color);
                  }
                }}
                className="flex-1 px-3 py-2 border rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                placeholder="#000000"
              />
            </div>
          </div>

          {/* 预设主题选择 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or Choose a Theme
            </label>
            <select
              className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              onChange={(e) => {
                const theme = colorThemes[e.target.value as keyof typeof colorThemes];
                if (theme) {
                  setBaseColor(theme[0]);
                  generateColorScheme(theme[0]);
                }
              }}
            >
              <option value="">Select a Theme</option>
              <option value="nature">Nature</option>
              <option value="sunset">Sunset</option>
              <option value="ocean">Ocean</option>
              <option value="forest">Forest</option>
              <option value="modern">Modern</option>
              <option value="vintage">Vintage</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);
      setPreviewImage(null);
      setSamplePoints([]);

      const imageUrl = URL.createObjectURL(file);
      
      // 使用 document.createElement 替代 new Image()
      const img = document.createElement('img');
      
      // 等待图片加载完成
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = imageUrl;
      });

      // 设置图片相关状态
      setImgRef(img);
      setImageSize({ width: img.width, height: img.height });
      setPreviewImage(imageUrl);

      // 创建 canvas 并生成初始点
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Failed to get canvas context');

      // 绘制图片到 canvas
      ctx.drawImage(img, 0, 0);
      
      // 生成初始采样点
      const initialPoints = generateInitialPoints(
        ctx, 
        img.width, 
        img.height, 
        maxPoints
      );

      // 设置采样点
      setSamplePoints(initialPoints);
      
      // 更新颜色方案
      if (initialPoints.length > 0) {
        setBaseColor(initialPoints[0].color);
        generateColorScheme(initialPoints[0].color);
      }

      setIsLoading(false);
      toast.success('Colors extracted successfully!');

    } catch (error) {
      console.error('Error loading image:', error);
      toast.error('Failed to process image');
      setIsLoading(false);
      setPreviewImage(null);
    }
  };

  const generateInitialPoints = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number, 
    count: number
  ): SamplePoint[] => {
    const points: SamplePoint[] = [];
    const padding = 20;
    const gridSize = Math.ceil(Math.sqrt(count));
    const cellWidth = (width - 2 * padding) / gridSize;
    const cellHeight = (height - 2 * padding) / gridSize;

    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      
      // 在网格单元内添加随机偏移
      const x = Math.floor(padding + cellWidth * col + Math.random() * (cellWidth * 0.8));
      const y = Math.floor(padding + cellHeight * row + Math.random() * (cellHeight * 0.8));

      // 获取该位置的颜色
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const color = colord({ 
        r: pixel[0], 
        g: pixel[1], 
        b: pixel[2] 
      }).toHex();

      points.push({
        id: Math.random().toString(36).substr(2, 9),
        x: Math.min(width - 1, Math.max(0, x)),
        y: Math.min(height - 1, Math.max(0, y)),
        color,
        isDragging: false
      });
    }

    return points;
  };

  const shiftHue = (hex: string, degree: number): string => {
    const color: Colord = colord(hex);
    const { h, s, l } = color.toHsl();
    return colord({ h: (h + degree) % 360, s, l }).toHex();
  };

  const generateColorScheme = (hex: string, count: number = 5) => {
    const color = colord(hex);
    
    // 生成单色方案
    const monochromatic = Array.from({ length: count }, (_, i) => {
      const step = 100 / (count - 1);
      return colord(hex).lighten((50 - i * step) / 100).toHex();
    });

    // 生成类似色方案
    const analogous = color.harmonies('analogous')
      .map(c => c.toHex());

    // 生成互补色方案
    const complementary = [
      hex,
      color.rotate(180).toHex()
    ];

    // 生成三色方案
    const triadic = color.harmonies('triadic')
      .map(c => c.toHex());

    // 生成四色方案
    const tetradic = color.harmonies('tetradic')
      .map(c => c.toHex());

    // 生成分裂互补色方案
    const split = [
      hex,
      color.rotate(150).toHex(),
      color.rotate(210).toHex()
    ];

    // 生成自定义数量的配色
    const custom = generateCustomPalette(hex, count);

    setColorScheme({
      primary: hex,
      monochromatic,
      analogous,
      complementary,
      triadic,
      tetradic,
      split,
      custom
    });
  };

  // 生成自定义数量的配色
  const generateCustomPalette = (baseColor: string, count: number): string[] => {
    const color = colord(baseColor);
    const { h, s, l } = color.toHsl();
    
    return Array.from({ length: count }, (_, i) => {
      const hue = (h + (360 / count) * i) % 360;
      return colord({ h: hue, s, l }).toHex();
    });
  };

  // 添加采样点
  const addSamplePoint = (x: number, y: number) => {
    if (samplePoints.length >= maxPoints) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx || !previewImage) return;

    const img = document.createElement('img');
    img.src = previewImage;
    
    canvas.width = imageSize.width;
    canvas.height = imageSize.height;
    ctx.drawImage(img, 0, 0, imageSize.width, imageSize.height);

    // 获取点击位置的颜色
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const color = colord({ r: pixel[0], g: pixel[1], b: pixel[2] }).toHex();

    const newPoint: SamplePoint = {
      id: Math.random().toString(36).substr(2, 9),
      x,
      y,
      color,
      isDragging: false
    };

    setSamplePoints(prev => [...prev, newPoint]);
    updateColorScheme([...samplePoints, newPoint]);
  };

  // 移除采样点
  const removeSamplePoint = (id: string) => {
    setSamplePoints(prev => {
      const newPoints = prev.filter(point => point.id !== id);
      updateColorScheme(newPoints);
      return newPoints;
    });
  };

  // 更新配色方案
  const updateColorScheme = (points: SamplePoint[]) => {
    if (points.length === 0) return;

    // 按颜色出现频率排序
    const colorCounts = points.reduce((acc, point) => {
      acc[point.color] = (acc[point.color] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const sortedColors = Object.entries(colorCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([color]) => color);

    setBaseColor(sortedColors[0]);
    generateColorScheme(sortedColors[0]);
  };

  // 修改 SamplePoint 组件
  const SamplePoint = ({ point, index }: { point: SamplePoint; index: number }) => {
    const rect = imageRef.current?.getBoundingClientRect();
    const img = imageRef.current?.querySelector('img');
    if (!rect || !img || !imgRef) return null;
    
    const imgRect = img.getBoundingClientRect();
    const scale = imgRect.width / imgRef.width;
    
    // 计算相对于容器的位置
    const relativeX = point.x * scale;
    const relativeY = point.y * scale;
    
    return (
      <div
        className={`absolute w-8 h-8 group ${
          point.isDragging 
            ? 'z-50 scale-110 cursor-grabbing' 
            : 'z-10 cursor-grab hover:scale-105'
        } transition-all duration-200`}
        style={{
          left: `${relativeX}px`,
          top: `${relativeY}px`,
          transform: 'translate(-50%, -50%)',
        }}
        onMouseDown={(e) => handleMouseDown(e, point)}
      >
        <div 
          className={`w-full h-full rounded-full border-2 relative ${
            point.isDragging 
              ? 'border-blue-500 shadow-lg ring-4 ring-blue-500/20' 
              : 'border-white shadow-md hover:shadow-lg'
          } transition-shadow`}
          style={{ backgroundColor: point.color }}
        >
          <span className={`absolute inset-0 flex items-center justify-center ${
            point.isDragging ? 'text-blue-500 font-bold' : 'text-white'
          } text-xs`}>
            {index + 1}
          </span>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {point.color}
          </div>
        </div>
      </div>
    );
  };

  // 在 ImageAndColors 组件中使用新的 SamplePoint 组件
  const ImageAndColors = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 图片预览区域 */}
      <div className="md:col-span-2">
        {previewImage && imgRef && (
          <>
            {/* 采样点控制器 */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Sample Points</h3>
              <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-lg">
                <button
                  onClick={() => setMaxPoints(prev => Math.max(2, prev - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
                  disabled={maxPoints <= 2}
                >
                  -
                </button>
                <span className="font-mono w-8 text-center">{maxPoints}</span>
                <button
                  onClick={() => setMaxPoints(prev => Math.min(12, prev + 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
                  disabled={maxPoints >= 12}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* 图片容器 */}
            <div 
              ref={imageRef}
              className="relative w-full h-[400px] border rounded-lg overflow-hidden bg-gray-50"
            >
              <Image
                src={previewImage}
                alt="Preview"
                width={imageSize.width}
                height={imageSize.height}
                className="max-w-full max-h-full w-auto h-auto"
                onClick={handleImageClick}
              />
              {/* 采样点 */}
              {samplePoints.map((point, index) => (
                <SamplePoint key={point.id} point={point} index={index} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 右侧颜色展示区域保持不变 */}
      <div className="flex flex-col h-[400px]">
        <h3 className="text-xl font-semibold mb-4">Selected Colors</h3>
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="space-y-2">
            {samplePoints.map((point, index) => (
              <div 
                key={point.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors"
              >
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-lg shadow-sm"
                  style={{ backgroundColor: point.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-sm truncate">{point.color}</div>
                  <div className="text-xs text-gray-500">Point {index + 1}</div>
                </div>
                <div className="flex-shrink-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => copyToClipboard(point.color)}
                    className="p-1 hover:bg-gray-200 rounded"
                    title="Copy color"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => removeSamplePoint(point.id)}
                    className="p-1 hover:bg-gray-200 rounded text-red-500"
                    title="Remove point"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {samplePoints.length < maxPoints && (
            <div className="text-center text-gray-500 text-sm mt-4 pb-2">
              Click on the image to add more points ({samplePoints.length}/{maxPoints})
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // 修改拖拽开始时的偏移量计算
  const handleMouseDown = (e: React.MouseEvent, point: SamplePoint) => {
    e.preventDefault();
    e.stopPropagation();

    const rect = imageRef.current?.getBoundingClientRect();
    const img = imageRef.current?.querySelector('img');
    if (!rect || !img || !imgRef) return;

    const imgRect = img.getBoundingClientRect();
    const scale = imgRect.width / imgRef.width;

    // 计算点击偏移（相对于容器）
    const pointX = point.x * scale;
    const pointY = point.y * scale;

    // 计算鼠标相对于容器的位置
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setDragOffset({
      x: mouseX - pointX,
      y: mouseY - pointY
    });

    // 初始化 colorCanvas
    const canvas = document.createElement('canvas');
    canvas.width = imgRef.width;
    canvas.height = imgRef.height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(imgRef, 0, 0);
      colorCanvas.current = canvas;
    }

    setDragPoint(point.id);
    setSamplePoints(points => 
      points.map(p => p.id === point.id ? {...p, isDragging: true} : p)
    );
  };

  // 修改 updatePosition 函数
  const updatePosition = (e: MouseEvent) => {
    const rect = imageRef.current?.getBoundingClientRect();
    const img = imageRef.current?.querySelector('img');
    if (!rect || !img || !imgRef) return;

    const imgRect = img.getBoundingClientRect();
    const scale = imgRect.width / imgRef.width;

    // 计算鼠标相对于容器的位置
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // 转换为图片坐标
    const x = (mouseX - dragOffset.x) / scale;
    const y = (mouseY - dragOffset.y) / scale;

    // 确保坐标在图片范围内
    const boundedX = Math.max(0, Math.min(imgRef.width - 1, Math.round(x)));
    const boundedY = Math.max(0, Math.min(imgRef.height - 1, Math.round(y)));

    // 获取新位置的颜色
    const newColor = getColorAtPoint(boundedX, boundedY);

    // 更新点的位置和颜色
    setSamplePoints(points => points.map(point => 
      point.id === dragPoint 
        ? { ...point, x: boundedX, y: boundedY, color: newColor }
        : point
    ));
  };

  // 添加辅助函数获取颜色
  const getColorAtPoint = (x: number, y: number): string => {
    if (!colorCanvas.current || !imgRef) return '#000000';
    
    const ctx = colorCanvas.current.getContext('2d');
    if (!ctx) return '#000000';

    // 确保坐标在有效范围内
    const boundedX = Math.max(0, Math.min(imgRef.width - 1, x));
    const boundedY = Math.max(0, Math.min(imgRef.height - 1, y));

    try {
      const pixel = ctx.getImageData(boundedX, boundedY, 1, 1).data;
      return colord({ r: pixel[0], g: pixel[1], b: pixel[2] }).toHex();
    } catch (error) {
      console.error('Error getting color:', error);
      return '#000000';
    }
  };

  // 修改点击添加采样点的逻辑也需要相应更新
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (samplePoints.length >= maxPoints) {
      toast.error(`Maximum ${maxPoints} points allowed`);
      return;
    }

    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect || !imgRef) return;

    const img = e.currentTarget;
    const imgRect = img.getBoundingClientRect();

    // 计算图片的实际显示区域
    const scale = Math.min(imgRect.width / imgRef.width, imgRect.height / imgRef.height);
    const displayWidth = imgRef.width * scale;
    const displayHeight = imgRef.height * scale;
    
    // 计算图片在容器中的偏移
    const offsetX = (rect.width - displayWidth) / 2;
    const offsetY = (rect.height - displayHeight) / 2;

    // 计算点击位置相对于图片的坐标
    const x = Math.round(((e.clientX - rect.left - offsetX) / displayWidth) * imgRef.width);
    const y = Math.round(((e.clientY - rect.top - offsetY) / displayHeight) * imgRef.height);

    // 确保点击在图片范围内
    if (
      x >= 0 && x <= imgRef.width && 
      y >= 0 && y <= imgRef.height
    ) {
      addSamplePoint(x, y);
    }
  };

  // 添加拖拽事件监听
  useEffect(() => {
    if (dragPoint) {
      const handleMouseMove = (e: MouseEvent) => {
        updatePosition(e);
      };
      const handleMouseUp = () => {
        setDragPoint(null);
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragPoint, updatePosition]);

  // 修改点数量变化的处理
  useEffect(() => {
    if (!imgRef || !previewImage) return;

    const canvas = document.createElement('canvas');
    canvas.width = imgRef.width;
    canvas.height = imgRef.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(imgRef, 0, 0);

    if (maxPoints > samplePoints.length) {
      // 需要添加更多点
      const additionalPoints = generateInitialPoints(
        ctx, 
        imgRef.width, 
        imgRef.height, 
        maxPoints - samplePoints.length
      );
      setSamplePoints(prev => [...prev, ...additionalPoints]);
    } else if (maxPoints < samplePoints.length) {
      // 需要减少点
      setSamplePoints(prev => prev.slice(0, maxPoints));
    }
  }, [maxPoints, imgRef, previewImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-12">
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-7xl mx-auto mb-16">
          {/* Enhanced Title Section with SEO Keywords */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Color Palette Generator
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Free online color palette generator tool to create beautiful color schemes from images, hex codes, or predefined themes. Generate 6, 7, 8, or 10 colors palettes instantly.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for creating harmonious color combinations from images, hex codes, or Pantone colors.
            </p>
          </div>

          {/* Tool Content */}
          <div className="space-y-6">
            {/* 上传和主题选择 */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Generate from Image</h2>
                <div className="relative">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    id="imageInput"
                  />
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-3"
                  >
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">
                      {isLoading ? 'Processing...' : 'Click to upload image'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 图片预览和颜色选择区域 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ImageAndColors />
            </div>

            {/* 修改配色方案展示部分 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Generated Color Schemes</h2>
                {/* 添加颜色选择器 */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div
                      className="w-10 h-10 rounded-lg cursor-pointer border shadow-sm"
                      style={{ backgroundColor: baseColor }}
                      onClick={() => setShowColorPicker(!showColorPicker)}
                    />
                    {showColorPicker && (
                      <div className="absolute z-50 right-0 mt-2">
                        <div className="fixed inset-0" onClick={() => setShowColorPicker(false)} />
                        <div className="relative">
                          <HexColorPicker
                            color={baseColor}
                            onChange={(color) => {
                              setBaseColor(color);
                              generateColorScheme(color);
                            }}
                            className="shadow-xl rounded-lg"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    type="text"
                    value={baseColor}
                    onChange={(e) => {
                      const color = e.target.value;
                      if (color.match(/^#[0-9A-Fa-f]{6}$/)) {
                        setBaseColor(color);
                        generateColorScheme(color);
                      }
                    }}
                    className="w-32 px-3 py-2 border rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    placeholder="#000000"
                  />
                  <select
                    className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    onChange={(e) => {
                      const theme = colorThemes[e.target.value as keyof typeof colorThemes];
                      if (theme) {
                        setBaseColor(theme[0]);
                        generateColorScheme(theme[0]);
                      }
                    }}
                  >
                    <option value="">Select Theme</option>
                    <option value="nature">Nature</option>
                    <option value="sunset">Sunset</option>
                    <option value="ocean">Ocean</option>
                    <option value="forest">Forest</option>
                    <option value="modern">Modern</option>
                    <option value="vintage">Vintage</option>
                  </select>
                </div>
              </div>

              {/* 配色方案展示 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(colorScheme).map(([name, colors]) => (
                  name !== 'primary' && (
                    <div key={name} className="space-y-3">
                      <h3 className="text-sm font-medium capitalize text-gray-600">{name}</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {Array.isArray(colors) && colors.map((color, index) => (
                          <div 
                            key={index}
                            className="group relative aspect-square"
                          >
                            <div
                              className="w-full h-full rounded-lg cursor-pointer transition-all duration-200 hover:scale-105"
                              style={{ backgroundColor: color }}
                            />
                            {/* 悬停时显示的复制按钮和颜色信息 */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg" />
                              <div className="relative z-10 flex flex-col items-center gap-2">
                                {/* 复制所有格式按钮 */}
                                <button
                                  onClick={() => copyColorFormats(color)}
                                  className="bg-white/90 hover:bg-white text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center gap-2"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                  </svg>
                                  Copy All Formats
                                </button>
                                
                                {/* 单独复制每种格式的按钮 */}
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(color);
                                      toast.success('HEX copied!');
                                    }}
                                    className="bg-white/80 hover:bg-white text-gray-600 px-2 py-1 rounded text-xs"
                                  >
                                    HEX
                                  </button>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(colord(color).toRgbString());
                                      toast.success('RGB copied!');
                                    }}
                                    className="bg-white/80 hover:bg-white text-gray-600 px-2 py-1 rounded text-xs"
                                  >
                                    RGB
                                  </button>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(colord(color).toHslString());
                                      toast.success('HSL copied!');
                                    }}
                                    className="bg-white/80 hover:bg-white text-gray-600 px-2 py-1 rounded text-xs"
                                  >
                                    HSL
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* 颜色格式提示 */}
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                              <div className="text-[10px] mb-1">
                                HEX: {color}
                              </div>
                              <div className="text-[10px] mb-1">
                                RGB: {colord(color).toRgbString()}
                              </div>
                              <div className="text-[10px]">
                                HSL: {colord(color).toHslString()}
                              </div>
                              <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* 添加详细使用说明和SEO内容 */}
            <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">Complete Guide to Color Palette Generation</h2>
              
              {/* 从图片生成调色板 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Generate Color Palette from Image</h3>
                <p className="text-gray-600 mb-4">
                  Upload any image to extract a harmonious color palette. Our advanced algorithm analyzes your image and generates a balanced set of colors that perfectly capture its essence.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Upload any image format (JPG, PNG, WebP)</li>
                  <li>Extract 2-12 colors from your image</li>
                  <li>Drag sample points to fine-tune color selection</li>
                  <li>Automatically generates complementary colors</li>
                </ul>
              </div>

              {/* 从两个颜色生成调色板 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Create Palette from Two Colors</h3>
                <p className="text-gray-600 mb-4">
                  Start with two colors and let our algorithm generate a complete palette. Perfect for creating gradients and harmonious color schemes.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Color Harmony Algorithms:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Complementary colors (180° apart on the color wheel)</li>
                    <li>Analogous colors (30° apart)</li>
                    <li>Split-complementary (150° apart)</li>
                    <li>Triadic colors (120° apart)</li>
                  </ul>
                </div>
              </div>

              {/* Pantone 和专业调色板 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Professional Color Palettes</h3>
                <p className="text-gray-600 mb-4">
                  Create professional-grade color palettes inspired by Pantone colors and industry standards. Perfect for branding and design projects.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Generate 6-color palettes</li>
                      <li>Create 7-color schemes</li>
                      <li>Design 8-color combinations</li>
                      <li>Build 10-color collections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">Applications:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Web design projects</li>
                      <li>Brand identity systems</li>
                      <li>UI/UX color schemes</li>
                      <li>Print design palettes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 颜色理论和算法 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Color Theory and Algorithms</h3>
                <p className="text-gray-600 mb-4">
                  Our color palette generator uses advanced algorithms based on established color theory principles to create harmonious combinations.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Key Algorithms:</h4>
                  <pre className="text-sm bg-white p-4 rounded mt-2 overflow-x-auto">
                    <code>{`// Complementary Color Formula
const getComplementary = (hue) => (hue + 180) % 360;

// Analogous Colors Formula
const getAnalogous = (hue) => [
  (hue - 30 + 360) % 360,
  hue,
  (hue + 30) % 360
];

// Split-Complementary Formula
const getSplitComplementary = (hue) => [
  hue,
  (hue + 150) % 360,
  (hue + 210) % 360
];`}</code>
                  </pre>
                </div>
              </div>

              {/* 适合人群 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Who Can Benefit from Color Palette Generator?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Designers</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• UI/UX Designers</li>
                      <li>• Graphic Designers</li>
                      <li>• Web Designers</li>
                      <li>• Interior Designers</li>
                      <li>• Fashion Designers</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Developers</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Frontend Developers</li>
                      <li>• Web Developers</li>
                      <li>• App Developers</li>
                      <li>• Game Developers</li>
                      <li>• UI Engineers</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Other Professionals</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Art Directors</li>
                      <li>• Brand Managers</li>
                      <li>• Marketing Teams</li>
                      <li>• Content Creators</li>
                      <li>• Digital Artists</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 部分 */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">How many colors can I generate in one palette?</h3>
                    <p className="text-gray-600">
                      Our color palette generator allows you to create palettes with 2 to 12 colors. You can generate 6-color palettes, 7-color schemes, 8-color combinations, or even 10-color collections, making it perfect for various design needs.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Can I generate a color palette from my own image?</h3>
                    <p className="text-gray-600">
                      Yes! You can upload any image (JPG, PNG, or WebP format) and our tool will automatically extract a harmonious color palette. You can also fine-tune the colors by dragging the sample points to different areas of your image.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">How does the two-color palette generator work?</h3>
                    <p className="text-gray-600">
                      Starting with two colors, our algorithm creates a complete palette using color theory principles. It generates complementary colors, analogous colors, and other harmonious combinations based on the color wheel relationships.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Are the generated colors compatible with Pantone colors?</h3>
                    <p className="text-gray-600">
                      While our tool doesn&apos;t directly use Pantone colors, it generates professional-grade color palettes that can be matched with Pantone colors. The colors are provided in HEX format, which can be converted to other color systems.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Is this color palette generator free to use?</h3>
                    <p className="text-gray-600">
                      Yes, our color palette generator is completely free to use. You can generate unlimited color palettes from images, create custom schemes, and export your colors without any cost or registration required.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">How can I ensure my color palette is accessible?</h3>
                    <p className="text-gray-600">
                      Our tool considers color contrast and harmony when generating palettes. For web accessibility, we recommend using the generated colors with appropriate contrast ratios for text and background combinations. You can also manually adjust the colors to meet WCAG guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* 使用场景 */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Web Design</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Website color schemes</li>
                      <li>• Landing page designs</li>
                      <li>• UI component libraries</li>
                      <li>• Email templates</li>
                      <li>• Banner designs</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Branding</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Brand identity design</li>
                      <li>• Logo color selection</li>
                      <li>• Marketing materials</li>
                      <li>• Social media assets</li>
                      <li>• Corporate guidelines</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Print Design</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Business cards</li>
                      <li>• Brochures and flyers</li>
                      <li>• Packaging design</li>
                      <li>• Posters and banners</li>
                      <li>• Magazine layouts</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Digital Art</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Digital illustrations</li>
                      <li>• Character design</li>
                      <li>• Game art assets</li>
                      <li>• Animation color scripts</li>
                      <li>• Digital paintings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 