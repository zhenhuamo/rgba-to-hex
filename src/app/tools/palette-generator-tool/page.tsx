/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { HexColorPicker } from 'react-colorful';
import { toast } from 'sonner';
import { Toaster } from 'sonner';
import { colord, extend, Colord } from 'colord';
import harmoniesPlugin from 'colord/plugins/harmonies';
import a11yPlugin from 'colord/plugins/a11y';
import mixPlugin from 'colord/plugins/mix';
import namesPlugin from 'colord/plugins/names';

// 扩展 TypeScript 类型，解决方法不存在的错误
declare module 'colord' {
  interface Colord {
    analogous(): Colord[];
    complement(): Colord;
    triadic(): Colord[];
    tetradic(): Colord[];
    splitComplement(): Colord[];
  }
}

// 扩展colord以支持颜色和谐及其他功能
extend([harmoniesPlugin, a11yPlugin, mixPlugin, namesPlugin]);

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

// 工具函数
const copyToClipboard = (color: string) => {
  navigator.clipboard.writeText(color);
  toast.success('Color code copied!');
};

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

// 生成随机ID
const generateId = () => Math.random().toString(36).substring(2, 9);

export default function PaletteGeneratorTool() {
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
  const [activeScheme, setActiveScheme] = useState('monochromatic');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  
  // 用于图像上传和颜色提取相关变量
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [samplePoints, setSamplePoints] = useState<SamplePoint[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageSize, setImageSize] = useState<ImageSize>({ width: 0, height: 0 });
  const maxPoints = 12; // 固定最大点数为5
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);
  const [dragPoint, setDragPoint] = useState<string | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const schemeNames = {
    monochromatic: 'Monochromatic',
    analogous: 'Analogous',
    complementary: 'Complementary',
    triadic: 'Triadic',
    tetradic: 'Tetradic',
    split: 'Split Complementary',
    custom: 'Custom'
  };

  // 修改 generateColorScheme 函数，添加错误处理和备用方法
  const generateColorScheme = useCallback((color: string) => {
    try {
      const base = colord(color);
      
      // 生成单色系
      const monochromatic = [
        base.toHex(),
        base.lighten(0.1).toHex(),
        base.lighten(0.2).toHex(),
        base.darken(0.1).toHex(),
        base.darken(0.2).toHex()
      ];
      
      // 生成类似色，加入错误处理
      let analogous;
      try {
        analogous = base.analogous ? base.analogous().map(c => c.toHex()) : [];
        if (analogous.length === 0) throw new Error('Analogous colors not generated');
      } catch (e) {
        // 备用方案：手动计算类似色
        analogous = [
          base.toHex(),
          base.rotate(30).toHex(),
          base.rotate(-30).toHex(),
          base.rotate(60).toHex(),
          base.rotate(-60).toHex()
        ];
      }
      
      // 生成互补色，加入错误处理
      let complementary;
      try {
        const complement = base.complement ? base.complement() : base.rotate(180);
        complementary = [base.toHex(), complement.toHex()];
        // 添加额外的颜色变化
        complementary.push(
          base.lighten(0.2).toHex(),
          complement.lighten(0.2).toHex(),
          base.darken(0.1).toHex()
        );
      } catch (e) {
        complementary = [
          base.toHex(),
          base.rotate(180).toHex(),
          base.lighten(0.2).toHex(),
          base.rotate(180).lighten(0.2).toHex(),
          base.darken(0.1).toHex()
        ];
      }
      
      // 生成三色系，加入错误处理
      let triadic;
      try {
        triadic = base.triadic ? base.triadic().map(c => c.toHex()) : [];
        if (triadic.length === 0) throw new Error('Triadic colors not generated');
      } catch (e) {
        triadic = [
          base.toHex(),
          base.rotate(120).toHex(),
          base.rotate(240).toHex(),
          base.lighten(0.1).toHex(),
          base.darken(0.1).toHex()
        ];
      }
      
      // 生成四色系，加入错误处理
      let tetradic;
      try {
        tetradic = base.tetradic ? base.tetradic().map(c => c.toHex()) : [];
        if (tetradic.length === 0) throw new Error('Tetradic colors not generated');
      } catch (e) {
        tetradic = [
          base.toHex(),
          base.rotate(90).toHex(),
          base.rotate(180).toHex(),
          base.rotate(270).toHex(),
          base.lighten(0.1).toHex()
        ];
      }
      
      // 生成分裂互补色系
      let split;
      try {
        split = base.splitComplement ? base.splitComplement().map(c => c.toHex()) : [];
        if (split.length === 0) throw new Error('Split complementary colors not generated');
      } catch (e) {
        split = [
          base.toHex(),
          base.rotate(150).toHex(),
          base.rotate(210).toHex(),
          base.lighten(0.1).toHex(),
          base.darken(0.1).toHex()
        ];
      }
      
      // 自定义数量的调色板
      const custom = Array(10).fill(0).map((_, i) => 
        i === 0 
          ? base.toHex() 
          : i < 5 
            ? base.lighten((i) * 0.1).toHex() 
            : base.darken((i - 4) * 0.1).toHex()
      );
      
      setColorScheme({
        primary: color,
        monochromatic,
        analogous,
        complementary,
        triadic,
        tetradic,
        split,
        custom
      });
    } catch (error) {
      console.error('Error generating color scheme:', error);
      toast.error('无法生成颜色方案');
    }
  }, []);

  // 检测是否在iframe中运行
  useEffect(() => {
    setIsInIframe(window.self !== window.top);
  }, []);

  // 当基础颜色变化时，重新生成所有颜色方案
  useEffect(() => {
    generateColorScheme(baseColor);
  }, [baseColor, generateColorScheme]);

  // 设置鼠标事件监听器用于拖动样本点
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragPoint || !imageContainerRef.current || !canvasRef.current) return;
      
      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(imageSize.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(imageSize.height, e.clientY - rect.top));
      
      // 获取颜色 - 使用改进的方法
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;
      
      // 正确计算canvas上的坐标
      const scaleX = canvas.width / imageSize.width; 
      const scaleY = canvas.height / imageSize.height;
      
      const canvasX = Math.floor(x * scaleX);
      const canvasY = Math.floor(y * scaleY);
      
      try {
        // 确保坐标在canvas范围内
        if (canvasX < 0 || canvasX >= canvas.width || canvasY < 0 || canvasY >= canvas.height) return;
        
        const pixelData = ctx.getImageData(canvasX, canvasY, 1, 1).data;
        const color = `#${pixelData[0].toString(16).padStart(2, '0')}${
          pixelData[1].toString(16).padStart(2, '0')}${
          pixelData[2].toString(16).padStart(2, '0')}`;
        
        // 更新点的位置和颜色
        setSamplePoints(points => 
          points.map(p => 
            p.id === dragPoint 
              ? { ...p, x, y, color, isDragging: true } 
              : p
          )
        );
      } catch (error) {
        console.error("拖动时颜色提取错误:", error);
      }
    };
    
    const handleMouseUp = () => {
      if (!dragPoint) return;
      
      setSamplePoints(points => 
        points.map(p => 
          p.id === dragPoint 
            ? { ...p, isDragging: false } 
            : p
        )
      );
      
      setDragPoint(null);
      
      // 提取所有样本点的颜色，生成新的调色板
      const colors = samplePoints.map(p => p.color);
      updateCustomPalette(colors);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragPoint, imageSize, samplePoints]);

  // 复制整个调色板到剪贴板
  const copyPaletteToClipboard = (colors: string[]) => {
    const text = colors.join(', ');
    navigator.clipboard.writeText(text);
    toast.success('Color palette copied!');
  };

  // 导出调色板为不同格式
  const exportPalette = (colors: string[], format: 'css' | 'scss' | 'tailwind' = 'css') => {
    let output = '';
    
    switch (format) {
      case 'css':
        output = `:root {\n${colors.map((color, i) => `  --color-${i + 1}: ${color};`).join('\n')}\n}`;
        break;
      case 'scss':
        output = colors.map((color, i) => `$color-${i + 1}: ${color};`).join('\n');
        break;
      case 'tailwind':
        output = `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n${colors.map((color, i) => `        color${i + 1}: '${color}',`).join('\n')}\n      }\n    }\n  }\n}`;
        break;
    }
    
    navigator.clipboard.writeText(output);
    toast.success(`Exported as ${format.toUpperCase()}!`);
  };

  // 处理基础颜色更改
  const handleBaseColorChange = (color: string) => {
    setBaseColor(color);
  };

  // 应用预设主题
  const applyTheme = (themeName: keyof typeof colorThemes) => {
    const colors = colorThemes[themeName];
    setBaseColor(colors[0]);
    updateCustomPalette(colors);
  };

  // 更新自定义调色板
  const updateCustomPalette = (colors: string[]) => {
    // 确保至少有一种颜色
    if (!colors.length) return;
    
    // 更新颜色方案
    setColorScheme(prev => ({
      ...prev,
      custom: colors
    }));
    
    // 切换到自定义方案
    setActiveScheme('custom');
  };

  // 处理图像上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    if (!file.type.startsWith('image/')) {
      toast.error('请上传图片文件');
      return;
    }
    
    setIsLoading(true);
    setSamplePoints([]);
    
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (!event.target || typeof event.target.result !== 'string') return;
      
      // 设置预览图像
      setPreviewImage(event.target.result);
      
      // 创建一个图像元素
      const img = new Image();
      img.crossOrigin = "anonymous";
      
      img.onload = () => {
        setIsLoading(false);
        setImgRef(img);
        
        // 计算显示图像的尺寸
        const containerWidth = 380;
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        
        const width = Math.min(img.naturalWidth, containerWidth);
        const height = width / aspectRatio;
        
        setImageSize({ width, height });
        
        // 延迟一段时间后再创建采样点，确保Canvas已准备好
        setTimeout(() => {
          const canvas = canvasRef.current;
          if (canvas && img) {
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (ctx) {
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;
              
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0);
              
              // 测试Canvas是否可以访问像素数据
              try {
                const testX = Math.floor(canvas.width / 2);
                const testY = Math.floor(canvas.height / 2);
                const testPixel = ctx.getImageData(testX, testY, 1, 1).data;
                console.log("测试Canvas像素访问:", rgbToHex(testPixel[0], testPixel[1], testPixel[2]));
                
                // 如果可以访问像素，则创建采样点
                createInitialSamplePoints(canvas, ctx, width, height);
              } catch (error) {
                console.error("Canvas像素访问失败，可能是跨域限制:", error);
                toast.error("无法从图像中提取颜色，可能是跨域限制");
              }
            }
          }
        }, 200);
      };
      
      img.onerror = () => {
        setIsLoading(false);
        toast.error('图像加载失败');
      };
      
      img.src = event.target.result;
    };
    
    reader.onerror = () => {
      setIsLoading(false);
      toast.error('读取文件时发生错误');
    };
    
    reader.readAsDataURL(file);
  };

  // 创建初始采样点
  const createInitialSamplePoints = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // 使用类型断言添加willReadFrequently属性
    (ctx as CanvasRenderingContext2D & { willReadFrequently?: boolean }).willReadFrequently = true;
    
    // 清除现有点
    setSamplePoints([]);
    
    // 创建新的采样点
    const newPoints: SamplePoint[] = [];
    
    // 为了均匀分布，创建一个网格
    const rows = 2;
    const cols = Math.ceil(maxPoints / rows);
    
    for (let i = 0; i < Math.min(maxPoints, rows * cols); i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;
      
      const x = Math.floor((col + 0.5) * (width / cols));
      const y = Math.floor((row + 0.5) * (height / rows));
      
      // 获取该位置的颜色
      try {
        // 计算在Canvas上的实际位置
        const scaleX = canvas.width / width;
        const scaleY = canvas.height / height;
        
        const canvasX = Math.floor(x * scaleX);
        const canvasY = Math.floor(y * scaleY);
        
        // 直接从img元素获取颜色（替代方案）
        let color = '#6366f1'; // 默认颜色
        
        // 尝试从Canvas读取像素
        if (canvasX < canvas.width && canvasY < canvas.height) {
          try {
            const pixelData = ctx.getImageData(canvasX, canvasY, 1, 1).data;
            color = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
            console.log(`点 ${i}: 从位置(${canvasX},${canvasY})提取颜色: ${color}`);
          } catch (error) {
            console.error("无法从Canvas读取像素:", error);
          }
        }
        
        newPoints.push({
          id: generateId(),
          x,
          y,
          color
        });
      } catch (error) {
        console.error("创建采样点时出错:", error);
      }
    }
    
    setSamplePoints(newPoints);
    
    // 更新调色板
    if (newPoints.length > 0) {
      const colors = newPoints.map(p => p.color);
      updateCustomPalette(colors);
      setActiveScheme('custom');
    }
  };

  // 添加RGB转HEX辅助函数
  const rgbToHex = (r: number, g: number, b: number): string => {
    return `#${[r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('')}`;
  };

  // 添加全新的图像处理组件
  const ImageWithSamplePoints = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    
    useEffect(() => {
      if (imgLoaded && canvasRef.current && imgRef) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          // 设置Canvas尺寸与原始图像相同
          canvas.width = imgRef.naturalWidth;
          canvas.height = imgRef.naturalHeight;
          
          // 在Canvas上绘制图像
          ctx.drawImage(imgRef, 0, 0);
          console.log("图像已成功绘制到Canvas，尺寸:", canvas.width, "x", canvas.height);
          
          // 测试像素读取
          try {
            const testX = Math.floor(canvas.width / 2);
            const testY = Math.floor(canvas.height / 2);
            const testPixel = ctx.getImageData(testX, testY, 1, 1).data;
            console.log("测试中心点颜色:", 
              rgbToHex(testPixel[0], testPixel[1], testPixel[2]),
              `RGB(${testPixel[0]},${testPixel[1]},${testPixel[2]})`);
          } catch (error) {
            console.error("测试像素读取失败:", error);
          }
        }
      }
    }, [imgLoaded, imgRef]);
    
    return (
      <div ref={imageContainerRef} className="relative w-full" style={{ maxHeight: '400px', overflow: 'auto' }}>
        {previewImage && (
          <>
            <img
              src={previewImage}
              alt="Uploaded image"
              style={{ 
                maxWidth: '100%', 
                display: 'block',
                width: imageSize.width,
                height: imageSize.height
              }}
              onLoad={() => setImgLoaded(true)}
              crossOrigin="anonymous"
            />
            
            <div 
              className="absolute top-0 left-0"
              style={{
                width: imageSize.width,
                height: imageSize.height,
                pointerEvents: 'none'
              }}
            >
              {samplePoints.map((point) => (
                <div
                  key={point.id}
                  style={{
                    position: 'absolute',
                    left: `${point.x - 8}px`,
                    top: `${point.y - 8}px`,
                    width: '16px',
                    height: '16px',
                    backgroundColor: point.color,
                    border: '3px solid white',
                    borderRadius: '50%',
                    cursor: 'move',
                    boxShadow: '0 0 0 1px rgba(0,0,0,0.4), 0 0 6px rgba(0,0,0,0.3)',
                    zIndex: point.isDragging ? 10 : 1,
                    transform: 'scale(1.2)',
                    transition: 'transform 0.1s',
                    pointerEvents: 'auto'
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDragPoint(point.id);
                    
                    setSamplePoints(points => 
                      points.map(p => p.id === point.id ? {...p, isDragging: true} : p)
                    );
                  }}
                />
              ))}
            </div>
            
            <canvas 
              ref={canvasRef} 
              className="hidden"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </>
        )}
      </div>
    );
  };

  // 修改addSamplePoint函数
  const addSamplePoint = () => {
    if (!previewImage || !canvasRef.current || !imageContainerRef.current) return;
    if (samplePoints.length >= maxPoints) return; // 确保不超过最大点数
    
    // 随机位置
    const x = Math.floor(Math.random() * imageSize.width);
    const y = Math.floor(Math.random() * imageSize.height);
    
    // 获取颜色 - 修复颜色提取逻辑
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    
    // 正确计算canvas上的坐标
    const scaleX = canvas.width / imageSize.width; 
    const scaleY = canvas.height / imageSize.height;
    
    const canvasX = Math.floor(x * scaleX);
    const canvasY = Math.floor(y * scaleY);
    
    // 确保坐标在canvas范围内
    if (canvasX >= canvas.width || canvasY >= canvas.height) return;
    
    try {
      const pixelData = ctx.getImageData(canvasX, canvasY, 1, 1).data;
      
      // 确保颜色值是有效的
      if (pixelData[0] === 0 && pixelData[1] === 0 && pixelData[2] === 0) {
        console.log("警告：提取到黑色像素，坐标:", canvasX, canvasY);
      }
      
      // 改进的十六进制颜色格式化
      const color = `#${pixelData[0].toString(16).padStart(2, '0')}${
        pixelData[1].toString(16).padStart(2, '0')}${
        pixelData[2].toString(16).padStart(2, '0')}`;
      
      console.log("提取颜色:", color, "在位置", canvasX, canvasY); 
      
      const newPoint = {
        id: generateId(),
        x,
        y,
        color
      };
      
      setSamplePoints(points => [...points, newPoint]);
      
      // 更新自定义颜色方案
      const newPoints = [...samplePoints, newPoint];
      const colors = newPoints.map(p => p.color);
      updateCustomPalette(colors);
    } catch (error) {
      console.error("颜色提取错误:", error);
      toast.error("无法提取该位置的颜色");
    }
  };

  // 添加清除点的功能
  const clearSamplePoints = () => {
    setSamplePoints([]);
  };

  // 确保更新自定义颜色方案的函数存在
  const updateCustomScheme = (colors: string[]) => {
    setColorScheme(prev => ({
      ...prev,
      custom: colors
    }));
    setActiveScheme('custom');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <Toaster />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：颜色选择器和图像上传 */}
          <div className="space-y-6">
            {/* 基础颜色选择 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex flex-wrap gap-4 items-start justify-between">
                {/* 基础颜色选择 */}
                <div>
                  <h3 className="text-lg font-medium mb-2">Base Color</h3>
                  <div className="flex gap-3 items-start">
                    <div
                      onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                      className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-200"
                      style={{ backgroundColor: baseColor }}
                    ></div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        value={baseColor}
                        onChange={(e) => handleBaseColorChange(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 w-32"
                        spellCheck={false}
                      />
                      
                      {isColorPickerOpen && (
                        <div className="absolute top-full left-0 mt-2 z-10">
                          <div className="fixed inset-0" onClick={() => setIsColorPickerOpen(false)}></div>
                          <div className="relative z-20">
                            <HexColorPicker
                              color={baseColor}
                              onChange={handleBaseColorChange}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* 预设主题 */}
                <div>
                  <h3 className="text-lg font-medium mb-2">Themes</h3>
                  <div className="flex gap-2 flex-wrap">
                    {Object.entries(colorThemes).map(([name, colors]) => (
                      <button
                        key={name}
                        onClick={() => applyTheme(name as keyof typeof colorThemes)}
                        className="h-8 w-8 rounded-full border-2 border-gray-200 overflow-hidden flex-shrink-0"
                        title={name}
                      >
                        <div
                          className="w-full h-full"
                          style={{
                            background: `linear-gradient(to right, ${colors.slice(0, 3).join(', ')})`
                          }}
                        ></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 颜色提取 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium mb-2">Extract Colors from Image</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Upload an image and drag the sample points to extract colors
              </p>
              
              <div className="mb-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Upload Image
                </button>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              
              {isLoading && <div>Loading...</div>}
              
              {previewImage && (
                <>
                  <div className="flex justify-end gap-2 mb-2">
                    <button
                      onClick={addSamplePoint}
                      className="text-xs px-2 py-1 bg-blue-500 text-white rounded"
                      disabled={samplePoints.length >= maxPoints}
                    >
                      Add Point
                    </button>
                    <button
                      onClick={clearSamplePoints}
                      className="text-xs px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Clear Points
                    </button>
                  </div>
                  <ImageWithSamplePoints />
                </>
              )}
            </div>
          </div>
          
          {/* 右侧：颜色方案展示 */}
          <div className="flex flex-col space-y-6">
            {/* 当前调色板 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">{schemeNames[activeScheme as keyof typeof schemeNames]}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyPaletteToClipboard(colorScheme[activeScheme as keyof ColorScheme] as string[])}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                    title="Copy all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                  <button
                    onClick={() => exportPalette(colorScheme[activeScheme as keyof ColorScheme] as string[], 'css')}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                    title="Export as CSS"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {(colorScheme[activeScheme as keyof ColorScheme] as string[]).map((color, index) => (
                  <ColorSwatch key={index} color={color} onCopy={copyColorFormats} />
                ))}
              </div>
            </div>
            
            {/* 调色板预览 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium mb-3">Palette Preview</h3>
              
              {/* 按钮预览 */}
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {(colorScheme[activeScheme as keyof ColorScheme] as string[]).map((color, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 rounded-lg text-white"
                      style={{ backgroundColor: color }}
                    >
                      Button
                    </button>
                  ))}
                </div>
              </div>
              
              {/* 卡片预览 */}
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: (colorScheme[activeScheme as keyof ColorScheme] as string[])[0] }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <div
                    className="h-2 w-20 mb-2 rounded-full"
                    style={{ backgroundColor: (colorScheme[activeScheme as keyof ColorScheme] as string[])[1] }}
                  ></div>
                  <div
                    className="h-2 w-32 mb-4 rounded-full"
                    style={{ backgroundColor: (colorScheme[activeScheme as keyof ColorScheme] as string[])[2] }}
                  ></div>
                  <div className="flex justify-end">
                    <button
                      className="px-3 py-1 rounded-lg text-white"
                      style={{ backgroundColor: (colorScheme[activeScheme as keyof ColorScheme] as string[])[3] || (colorScheme[activeScheme as keyof ColorScheme] as string[])[0] }}
                    >
                      Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 所有色彩方案 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium mb-3">All Color Schemes</h3>
              
              <div className="space-y-4">
                {Object.entries(schemeNames).map(([key, name]) => {
                  const colors = colorScheme[key as keyof ColorScheme];
                  if (!colors || colors.length === 0) return null;
                  
                  return (
                    <div key={key} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{name}</h4>
                        <button
                          onClick={() => setActiveScheme(key)}
                          className="text-sm text-blue-500"
                        >
                          Select
                        </button>
                      </div>
                      <div className="flex">
                        {(colors as string[]).slice(0, 5).map((color, index) => (
                          <div
                            key={index}
                            className="flex-1 h-8"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 