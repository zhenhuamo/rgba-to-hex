'use client';



// Module declaration at the top of the file
declare module 'mixbox' {
  export function lerp(color1: [number, number, number], color2: [number, number, number], t: number): [number, number, number];
}

import mixbox from 'mixbox'; // Import mixbox library

// 验证mixbox库是否正确加载
console.log('Mixbox库状态:', {
  loaded: typeof mixbox !== 'undefined',
  hasLerp: typeof mixbox?.lerp === 'function'
});

// 测试混合效果 - 黄色和蓝色
const testYellow: [number, number, number] = [255, 255, 0];
const testBlue: [number, number, number] = [0, 0, 255];

// 测试通常混合 - 应该是灰色 [127, 127, 127]
const normalMixResult = [
  Math.round(testYellow[0] * 0.5 + testBlue[0] * 0.5),
  Math.round(testYellow[1] * 0.5 + testBlue[1] * 0.5),
  Math.round(testYellow[2] * 0.5 + testBlue[2] * 0.5)
];

console.log('常规混合黄色+蓝色:', normalMixResult);

// 测试Mixbox混合 - 如果正确，应该是绿色 [0, 255, 0] 附近
try {
  const mixboxResult = mixbox.lerp(testYellow, testBlue, 0.5);
  console.log('Mixbox混合黄色+蓝色:', mixboxResult);
} catch (error) {
  console.error('Mixbox测试失败:', error);
}

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

// 定义颜料信息的接口
interface PaintColor {
  hex: string;
  rgb: [number, number, number];
}

// 定义颜料库类型
interface PaintColors {
  [key: string]: PaintColor;
}

// 其他需要的接口定义
// 注意：移除了未使用的MixedColor和PaletteColor接口

type Tool = 'brush' | 'eraser';

interface HistoryItem {
  imageData: ImageData;
}

// 专业颜料色板数据
const PAINT_COLORS: PaintColors = {
  // 黄色系
  'Lemon Yellow': {hex: '#fff44f', rgb: [255, 244, 79]},
  'Cadmium Yellow': {hex: '#ffda00', rgb: [255, 218, 0]},
  'Naples Yellow': {hex: '#ffdf80', rgb: [255, 223, 128]},
  'Yellow Ochre': {hex: '#cb9d06', rgb: [203, 157, 6]},
  
  // 橙色系
  'Cadmium Orange': {hex: '#ff7f00', rgb: [255, 127, 0]},
  'Burnt Sienna': {hex: '#e97451', rgb: [233, 116, 81]},
  
  // 红色系
  'Cadmium Red': {hex: '#e30022', rgb: [227, 0, 34]},
  'Alizarin Crimson': {hex: '#e32636', rgb: [227, 38, 54]},
  'Permanent Rose': {hex: '#ff007f', rgb: [255, 0, 127]},
  
  // 紫色系
  'Purple Madder': {hex: '#a72664', rgb: [167, 38, 100]},
  'Dioxazine Purple': {hex: '#6c0277', rgb: [108, 2, 119]},
  'Ultramarine Violet': {hex: '#5c246e', rgb: [92, 36, 110]},
  
  // 蓝色系
  'Phthalo Blue': {hex: '#000f89', rgb: [0, 15, 137]},
  'Ultramarine Blue': {hex: '#1b1bb3', rgb: [27, 27, 179]},
  'Cobalt Blue': {hex: '#0047ab', rgb: [0, 71, 171]},
  'Cerulean Blue': {hex: '#2a52be', rgb: [42, 82, 190]},
  
  // 绿色系
  'Phthalo Green': {hex: '#123524', rgb: [18, 53, 36]},
  'Viridian': {hex: '#006b3c', rgb: [0, 107, 60]},
  'Sap Green': {hex: '#507d2a', rgb: [80, 125, 42]},
  'Permanent Green Light': {hex: '#59c93c', rgb: [89, 201, 60]},
  
  // 土黄色系
  'Raw Sienna': {hex: '#d68a59', rgb: [214, 138, 89]},
  'Raw Umber': {hex: '#826644', rgb: [130, 102, 68]},
  'Burnt Umber': {hex: '#8a3324', rgb: [138, 51, 36]},
  
  // 黑白系
  'Ivory Black': {hex: '#1f1f1f', rgb: [31, 31, 31]},
  'Lamp Black': {hex: '#2c2c2c', rgb: [44, 44, 44]},
  "Payne's Gray": {hex: '#40404f', rgb: [64, 64, 79]},
  'Titanium White': {hex: '#ffffff', rgb: [255, 255, 255]},
};

// 组织颜料为网格布局
const PAINT_GRID: string[][] = [
  // 第一行：黄色系
  ['Lemon Yellow', 'Cadmium Yellow', 'Naples Yellow', 'Yellow Ochre'],
  // 第二行：橙红系
  ['Cadmium Orange', 'Burnt Sienna', 'Cadmium Red', 'Alizarin Crimson'],
  // 第三行：红紫系
  ['Permanent Rose', 'Purple Madder', 'Dioxazine Purple', 'Ultramarine Violet'],
  // 第四行：蓝色系
  ['Cerulean Blue', 'Cobalt Blue', 'Ultramarine Blue', 'Phthalo Blue'],
  // 第五行：绿色系
  ['Permanent Green Light', 'Sap Green', 'Viridian', 'Phthalo Green'],
  // 第六行：土色系
  ['Raw Sienna', 'Raw Umber', 'Burnt Umber', "Payne's Gray"],
  // 第七行：黑白
  ['Titanium White', 'Ivory Black', 'Lamp Black', '']
];

// 辅助函数：将十六进制颜色转换为RGB数组
const hexToRgbArray = (hex: string): [number, number, number] => {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return [r, g, b];
};

// 辅助函数：将RGB数组转换为十六进制颜色
const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// 常规RGB混合（加色混合）
const normalMix = (rgb1: [number, number, number], rgb2: [number, number, number], t: number): [number, number, number] => {
  return [
    Math.round(rgb1[0] * (1 - t) + rgb2[0] * t),
    Math.round(rgb1[1] * (1 - t) + rgb2[1] * t),
    Math.round(rgb1[2] * (1 - t) + rgb2[2] * t)
  ];
};

export default function MixboxCanvasPainter() {
  // 状态管理
  const [currentTool, setCurrentTool] = useState<Tool>('brush');
  const [brushSize, setBrushSize] = useState(20);
  const [opacity, setOpacity] = useState(100);
  const [selectedColor, setSelectedColor] = useState<string>('#59c93c'); // 默认颜色
  const [selectedPaint, setSelectedPaint] = useState<string>('Permanent Green Light');
  const [mixingMode, setMixingMode] = useState<'mixbox' | 'normal'>('mixbox');
  const [activeTab, setActiveTab] = useState<'paints' | 'custom'>('paints');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState<{x: number, y: number} | null>(null);
  
  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorWheelRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLCanvasElement>(null);
  const currentToolRef = useRef<Tool>('brush');
  const selectedColorRef = useRef<string>('#59c93c');
  const isDrawingRef = useRef<boolean>(false); // 添加绘制状态引用
  const mixingModeRef = useRef<'mixbox' | 'normal'>('mixbox'); // 添加混合模式引用
  
  // 检测是否在iframe中
  const [isInIframe, setIsInIframe] = useState<boolean>(false);
  
  // 初始化设置
  useEffect(() => {
    setIsInIframe(window.self !== window.top);
    
    // 从URL获取参数
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    if (modeParam === 'normal') {
      setMixingMode('normal');
      currentToolRef.current = 'brush';
    }
    
    // 初始化色板
    const initialColor = PAINT_COLORS['Permanent Green Light'].hex;
    setSelectedColor(initialColor);
    selectedColorRef.current = initialColor;
    
    // 初始化调色板
    initColorWheel();
    
    // 初始化预览
    drawColorSwatch(initialColor);
    
    // 初始化画布
    initCanvas();
    
    // 添加键盘事件监听
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  // 监听状态变化并更新refs
  useEffect(() => {
    currentToolRef.current = currentTool;
  }, [currentTool]);
  
  // 监听颜色变化并更新ref
  useEffect(() => {
    console.log(`当前选择的颜色已更新为: ${selectedColor}`);
    selectedColorRef.current = selectedColor;
  }, [selectedColor]);
  
  // 监听绘制状态变化并更新ref
  useEffect(() => {
    isDrawingRef.current = isDrawing;
    console.log(`绘制状态更新: ${isDrawing}`);
  }, [isDrawing]);
  
  // 监听混合模式变化并更新ref
  useEffect(() => {
    mixingModeRef.current = mixingMode;
    console.log(`混合模式更新: ${mixingMode}`);
  }, [mixingMode]);
  
  // 初始化色轮
  const initColorWheel = () => {
    const wheel = colorWheelRef.current;
    if (!wheel) return;
    
    const ctx = wheel.getContext('2d');
    if (!ctx) return;

    // Clear the canvas first
    ctx.clearRect(0, 0, wheel.width, wheel.height);

    const centerX = wheel.width / 2;
    const centerY = wheel.height / 2;
    const radius = wheel.width / 2 - 5;
    
    // 绘制HSL色轮
    for (let angle = 0; angle < 360; angle++) {
      const startAngle = (angle - 0.5) * Math.PI / 180;
      const endAngle = (angle + 0.5) * Math.PI / 180;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      
      // HSL to RGB
      const h = angle;
      const s = 100;
      const l = 50;
      
      // 简化的HSL到RGB转换
      const c = (1 - Math.abs(2 * l / 100 - 1)) * s / 100;
      const x = c * (1 - Math.abs((h / 60) % 2 - 1));
      const m = l / 100 - c / 2;
      
      let r, g, b;
      if (h < 60) { r = c; g = x; b = 0; }
      else if (h < 120) { r = x; g = c; b = 0; }
      else if (h < 180) { r = 0; g = c; b = x; }
      else if (h < 240) { r = 0; g = x; b = c; }
      else if (h < 300) { r = x; g = 0; b = c; }
      else { r = c; g = 0; b = x; }
      
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fill();
    }
    
    // 绘制黑白中心方块
    ctx.save();
    ctx.beginPath();
    const innerRadius = radius * 0.6;
    ctx.rect(centerX - innerRadius, centerY - innerRadius, innerRadius * 2, innerRadius * 2);
    ctx.clip();
    
    // 绘制亮度/饱和度方块
    const gradSize = innerRadius * 2;
    
    // 水平白到黑渐变
    const gradH = ctx.createLinearGradient(centerX - innerRadius, 0, centerX + innerRadius, 0);
    gradH.addColorStop(0, 'rgba(255,255,255,1)');
    gradH.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.fillStyle = gradH;
    ctx.fillRect(centerX - innerRadius, centerY - innerRadius, gradSize, gradSize);
    
    // 垂直透明到黑渐变
    const gradV = ctx.createLinearGradient(0, centerY - innerRadius, 0, centerY + innerRadius);
    gradV.addColorStop(0, 'rgba(0,0,0,0)');
    gradV.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.fillStyle = gradV;
    ctx.fillRect(centerX - innerRadius, centerY - innerRadius, gradSize, gradSize);
    
    ctx.restore();
    
    // 添加事件监听
    wheel.addEventListener('click', handleColorWheelClick);
  };
  
  // 初始化主画布
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('画布元素不存在');
      return;
    }
    
    // 设置canvas宽高为父元素的宽高
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
    
    // 设置背景色为白色
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('无法获取画布上下文');
      return;
    }
    
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 添加用于对比的测试色块
    const addTestSwatches = () => {
      // 获取URL参数检查是否需要测试色块
      const params = new URLSearchParams(window.location.search);
      if (params.get('showTest') !== 'true') return;

      // 绘制mixbox模式下的对比色块
      ctx.font = '12px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText('MIXBOX Mixing Test', 20, 30);
      
      // 黄色方块
      ctx.fillStyle = '#ffff00';
      ctx.fillRect(20, 40, 40, 40);
      
      // 蓝色方块
      ctx.fillStyle = '#0000ff';
      ctx.fillRect(70, 40, 40, 40);
      
      // 使用mixbox算法混合
      try {
        const yellow: [number, number, number] = [255, 255, 0];
        const blue: [number, number, number] = [0, 0, 255];
        const mixboxResult = mixbox.lerp(yellow, blue, 0.5);
        
        // 绘制mixbox混合结果
        ctx.fillStyle = rgbToHex(mixboxResult[0], mixboxResult[1], mixboxResult[2]);
        ctx.fillRect(120, 40, 40, 40);
        ctx.fillText('Mix Result', 120, 95);
        
        // 显示颜色值
        ctx.fillStyle = 'black';
        ctx.fillText('Yellow', 20, 95);
        ctx.fillText('Blue', 70, 95);
      } catch (error) {
        console.error('Test swatch mixbox mixing error:', error);
      }
      
      // 绘制普通混合对比色块
      ctx.fillStyle = 'black';
      ctx.fillText('NORMAL Mixing Test', 20, 130);
      
      // 黄色方块
      ctx.fillStyle = '#ffff00';
      ctx.fillRect(20, 140, 40, 40);
      
      // 蓝色方块
      ctx.fillStyle = '#0000ff';
      ctx.fillRect(70, 140, 40, 40);
      
      // 使用普通RGB混合
      const yellow: [number, number, number] = [255, 255, 0];
      const blue: [number, number, number] = [0, 0, 255];
      const normalResult = normalMix(yellow, blue, 0.5);
      
      // 绘制普通混合结果
      ctx.fillStyle = rgbToHex(normalResult[0], normalResult[1], normalResult[2]);
      ctx.fillRect(120, 140, 40, 40);
      
      // 显示颜色值
      ctx.fillStyle = 'black';
      ctx.fillText('Yellow', 20, 195);
      ctx.fillText('Blue', 70, 195);
      ctx.fillText('Mix Result', 120, 195);
      
      // 显示说明
      ctx.fillText('* Comparison: MIXBOX yellow+blue=green, NORMAL yellow+blue=gray', 20, 220);
    };
    
    // 调用测试色块绘制
    addTestSwatches();
    
    // 保存初始状态到历史记录
    saveToHistory();
    
    // 移除可能存在的旧事件监听器
    canvas.removeEventListener('mousedown', startDrawing);
    canvas.removeEventListener('mousemove', draw);
    canvas.removeEventListener('mouseup', stopDrawing);
    canvas.removeEventListener('mouseleave', stopDrawing);
    canvas.removeEventListener('touchstart', handleTouchStart);
    canvas.removeEventListener('touchmove', handleTouchMove);
    canvas.removeEventListener('touchend', handleTouchEnd);
    
    // 添加鼠标事件监听
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);
    
    // 触摸事件支持
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    
    console.log('画布初始化完成，事件监听器已添加', canvas.width, canvas.height);
  };
  
  // 保存当前状态到历史记录
  const saveToHistory = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    // 如果当前不是最新状态，移除之后的历史
    if (historyIndex < history.length - 1) {
      setHistory(prev => prev.slice(0, historyIndex + 1));
    }
    
    setHistory(prev => [...prev, { imageData }]);
    setHistoryIndex(prev => prev + 1);
  };
  
  // 撤销
  const undo = () => {
    if (historyIndex <= 0) return;
    
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.putImageData(history[newIndex].imageData, 0, 0);
  };
  
  // 重做
  const redo = () => {
    if (historyIndex >= history.length - 1) return;
    
    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.putImageData(history[newIndex].imageData, 0, 0);
  };
  
  // 清空画布
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    saveToHistory();
  };
  
  // 处理键盘事件
  const handleKeyDown = (e: KeyboardEvent) => {
    // 撤销: Ctrl+Z
    if (e.ctrlKey && e.key === 'z') {
      e.preventDefault();
      undo();
    }
    
    // 重做: Ctrl+Y 或 Ctrl+Shift+Z
    if ((e.ctrlKey && e.key === 'y') || (e.ctrlKey && e.shiftKey && e.key === 'z')) {
      e.preventDefault();
      redo();
    }
    
    // 增大画笔: ]
    if (e.key === ']') {
      const newSize = Math.min(brushSize + 5, 100);
      setBrushSize(newSize);
    }
    
    // 减小画笔: [
    if (e.key === '[') {
      const newSize = Math.max(brushSize - 5, 1);
      setBrushSize(newSize);
    }
    
    // 切换工具: E为橡皮擦, B为画笔
    if (e.key === 'e') {
      setCurrentTool('eraser');
      currentToolRef.current = 'eraser';
    }
    if (e.key === 'b') {
      setCurrentTool('brush');
      currentToolRef.current = 'brush';
    }
  };
  
  // 处理色轮点击
  const handleColorWheelClick = (e: MouseEvent) => {
    const wheel = colorWheelRef.current;
    if (!wheel) return;
    
    const rect = wheel.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = wheel.width / 2;
    const centerY = wheel.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    
    // 计算点击位置到中心的距离
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = wheel.width / 2 - 5;
    
    if (distance <= radius) {
      // 获取颜色值
      const ctx = wheel.getContext('2d');
      if (!ctx) return;
      
      const pixelData = ctx.getImageData(x, y, 1, 1).data;
      const hex = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
      
      // 更新状态
      setSelectedColor(hex);
      setSelectedPaint('Custom');
      
      // 更新颜色预览
      drawColorSwatch(hex);
      
      console.log(`选择自定义颜色: ${hex}`);
    }
  };
  
  // 绘制颜色样本
  const drawColorSwatch = (hexColor: string) => {
    const canvas = previewRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制颜色渐变
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#FFFFFF');
    gradient.addColorStop(1, hexColor);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  
  // 选择颜料
  const selectPaint = (paintName: string) => {
    if (!PAINT_COLORS[paintName]) {
      console.error(`找不到颜料: ${paintName}`);
      return;
    }
    
    // 更新选中的颜料名称
    setSelectedPaint(paintName);
    
    // 更新颜色
    const newColor = PAINT_COLORS[paintName].hex;
    setSelectedColor(newColor);
    
    // 更新颜色预览
    drawColorSwatch(newColor);
    
    console.log(`选择颜料: ${paintName}, 颜色: ${newColor}`);
  };
  
  // 开始绘制
  const startDrawing = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // 直接更新引用和状态
    isDrawingRef.current = true;
    setIsDrawing(true);
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setLastPosition({ x, y });
    
    // 画一个点
    drawDot(x, y);
    
    //console.log('开始绘制，位置:', x, y, '绘制状态:', isDrawingRef.current);
  };
  
  // 处理触摸开始事件
  const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault(); // 防止滚动
    
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;
    
    // 直接更新引用和状态
    isDrawingRef.current = true;
    setIsDrawing(true);
    
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    
    setLastPosition({ x, y });
    
    // 画一个点
    drawDot(x, y);
    
    //console.log('触摸开始绘制，位置:', x, y, '绘制状态:', isDrawingRef.current);
  };
  
  // 绘制一个点
  const drawDot = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // 使用ref获取当前工具状态
    if (currentToolRef.current === 'eraser') {
      drawWithBlending(x, y, '#FFFFFF', 1);
    } else {
      // 使用当前选择的颜色和不透明度
      drawWithBlending(x, y, selectedColorRef.current, opacity / 100);
    }
  };
  
  // 修改drawWithBlending函数，专注于改进重叠区域的混合效果
const drawWithBlending = (x: number, y: number, colorHex: string, opacity: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 添加调试信息，每10次绘制输出一次（避免过多日志）
    if (Math.random() < 0.1) {
      console.log(`当前混合模式: ${mixingModeRef.current}, 工具: ${currentToolRef.current}, mixbox可用: ${typeof mixbox === 'object' && typeof mixbox.lerp === 'function'}`);
    }
    
    // 使用当前画笔大小
    const size = brushSize;
    const startX = Math.max(0, Math.floor(x - brushSize));
    const startY = Math.max(0, Math.floor(y - brushSize));
    const width = Math.min(size * 2, canvas.width - startX);
    const height = Math.min(size * 2, canvas.height - startY);
    
    const imageData = ctx.getImageData(startX, startY, width, height);
    const data = imageData.data;
    
    // 新颜色的RGB值
    const newColor = hexToRgbArray(colorHex);
    
    // 对区域内的每个像素应用混合
    for (let py = 0; py < height; py++) {
      for (let px = 0; px < width; px++) {
        const dx = px + startX - x;
        const dy = py + startY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // 只修改在笔刷半径内的像素
        if (distance <= brushSize) {
          // 关键改进1：不同模式使用不同的不透明度曲线
          let fadeOpacity = opacity; 
          
          // Mixbox模式使用更平滑的不透明度曲线，以突显颜料混合效果
          if (mixingModeRef.current === 'mixbox') {
            // 缩小最大不透明度并使用平缓衰减
            fadeOpacity *= 0.8; 
            fadeOpacity *= (1 - Math.pow(distance / brushSize, 1.2));
          } else {
            // Normal模式使用陡峭的不透明度曲线，接近直接覆盖
            fadeOpacity *= (1 - Math.pow(distance / brushSize, 3.0));
            // 增加不透明度基础值，使normal模式颜色更突出
            fadeOpacity = Math.min(1.0, fadeOpacity * 1.5);
          }
          
          const i = (py * width + px) * 4; // 像素索引
          
          // 当前像素的RGB值
          const currentColor: [number, number, number] = [data[i], data[i+1], data[i+2]];
          
          // 判断是否为白色或几乎白色的背景 - 放宽判定标准
          const isWhite = currentColor[0] > 240 && currentColor[1] > 240 && currentColor[2] > 240;
          
          let result: [number, number, number];
          
          // 更明确的模式区分：正确使用ref的当前值
          if (mixingModeRef.current === 'mixbox' && currentToolRef.current === 'brush') {
            try {
              if (!isWhite) {
                // 对于颜色重叠区域，使用MixBox进行真实颜料混合
                result = mixbox.lerp(currentColor, newColor, fadeOpacity);
              } else {
                // 对于白色区域，使用稍微调整的混合
                result = normalMix(currentColor, newColor, fadeOpacity);
              }
            } catch (error) {
              console.error('MixBox混合出错:', error);
              result = normalMix(currentColor, newColor, fadeOpacity);
            }
          } else {
            // ========= normal模式混合逻辑 ========= 
            // 普通模式下，实现接近Photoshop的普通混合模式（不考虑颜料物理特性）
            if (isWhite || fadeOpacity > 0.9) {
              // 对于白色背景或高不透明度，几乎直接使用新颜色
              result = [
                Math.round(newColor[0]),
                Math.round(newColor[1]),
                Math.round(newColor[2])
              ];
            } else {
              // 对于已有颜色的区域，使用RGB加权平均（而非物理混合）
              // 关键：这里不考虑颜料的物理特性，仅做数字混合
              result = [
                Math.min(255, Math.round(currentColor[0] * (1 - fadeOpacity) + newColor[0] * fadeOpacity)),
                Math.min(255, Math.round(currentColor[1] * (1 - fadeOpacity) + newColor[1] * fadeOpacity)),
                Math.min(255, Math.round(currentColor[2] * (1 - fadeOpacity) + newColor[2] * fadeOpacity))
              ];
              
              // 对于RGB模式，增强颜色鲜艳度（提高饱和度），使其与mixbox更有区别
              if (!isWhite && fadeOpacity > 0.3) {
                // 简单的RGB饱和度增强
                const avg = (result[0] + result[1] + result[2]) / 3;
                result = [
                  Math.min(255, Math.max(0, Math.round(avg + (result[0] - avg) * 1.3))),
                  Math.min(255, Math.max(0, Math.round(avg + (result[1] - avg) * 1.3))),
                  Math.min(255, Math.max(0, Math.round(avg + (result[2] - avg) * 1.3)))
                ];
              }
            }
          }
          
          // 更新像素数据
          data[i] = result[0];
          data[i+1] = result[1];
          data[i+2] = result[2];
          data[i+3] = 255; // 确保完全不透明
        }
      }
    }
    
    // 将修改后的像素数据绘制回画布
    ctx.putImageData(imageData, startX, startY);
  };
  
  // 绘制
  const draw = (e: MouseEvent) => {
    // 使用引用检查绘制状态，而不是状态变量
    if (!isDrawingRef.current) {
      return;
    }
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 绘制当前点
    drawDot(x, y);
    
    // 在上一个点和当前点之间插值绘制，以避免快速移动时的间隔
    if (lastPosition) {
      const lastPos = lastPosition;
      const dx = x - lastPos.x;
      const dy = y - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance >= 2) {
        const steps = Math.ceil(distance / 2);
        
        for (let i = 1; i < steps; i++) {
          const t = i / steps;
          const ix = lastPos.x + dx * t;
          const iy = lastPos.y + dy * t;
          drawDot(ix, iy);
        }
      }
    }
    
    // 更新位置
    setLastPosition({ x, y });
    
    // 调试信息
    //console.log(`绘制 - 位置: (${x}, ${y}), 颜色: ${selectedColorRef.current}, 工具: ${currentToolRef.current}, 绘制状态: ${isDrawingRef.current}`);
  };
  
  // 处理触摸移动事件
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault(); // 防止滚动
    
    if (!isDrawingRef.current || e.touches.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    
    // 绘制当前点
    drawDot(x, y);
    
    // 在上一个点和当前点之间插值绘制，以避免快速移动时的间隔
    if (lastPosition) {
      const lastPos = lastPosition;
      const dx = x - lastPos.x;
      const dy = y - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance >= 2) {
        const steps = Math.ceil(distance / 2);
        
        for (let i = 1; i < steps; i++) {
          const t = i / steps;
          const ix = lastPos.x + dx * t;
          const iy = lastPos.y + dy * t;
          drawDot(ix, iy);
        }
      }
    }
    
    // 更新位置
    setLastPosition({ x, y });
    
    //console.log(`触摸绘制 - 位置: (${x}, ${y}), 绘制状态: ${isDrawingRef.current}`);
  };
  
  // 停止绘制
  const stopDrawing = () => {
    if (isDrawingRef.current) {
      // 直接更新引用和状态
      isDrawingRef.current = false;
      setIsDrawing(false);
      setLastPosition(null);
      saveToHistory();
      console.log('Drawing stopped');
    }
  };
  
  // 处理触摸结束事件
  const handleTouchEnd = () => {
    stopDrawing();
  };
  
  // 切换混合模式
  const toggleMixingMode = (mode: 'mixbox' | 'normal') => {
    console.log(`切换到模式: ${mode}, mixbox库可用: ${typeof mixbox === 'object' && typeof mixbox.lerp === 'function'}`);
    setMixingMode(mode);
    mixingModeRef.current = mode; // 立即更新ref，不等待下一个渲染周期
  };
  
  // 嵌入代码生成
  const getEmbedCode = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return `<iframe src="${origin}/tools/canvas-painter?embed=true&mode=${mixingMode}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="MixBox Canvas Painter"></iframe>`;
  };
  
  // 下载画布图像
  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // 创建一个链接并触发下载
    const link = document.createElement('a');
    link.download = 'mixbox-painting.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  
  return (
    <>
      <Head>
        <title>MixBox Canvas Painter - Professional Digital Watercolor Tool</title>
        <meta name="description" content="Create beautiful watercolor paintings with professional-grade pigment simulation using the MixBox algorithm." />
      </Head>
      
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* 工具栏容器 */}
        <div className="flex flex-1 overflow-hidden">
          {/* 左侧工具栏 */}
          <div className="w-12 bg-white border-r border-gray-200 flex flex-col items-center py-2">
            <button 
              className={`w-8 h-8 mb-2 rounded ${currentTool === 'brush' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'} flex items-center justify-center`}
              onClick={() => {
                setCurrentTool('brush');
                currentToolRef.current = 'brush';
              }}
              title="Brush (B)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 3v2m0 16v-2M3 6h2m16 0h-2M3 18h2m16 0h-2M3 12h18M12 3v18"/>
              </svg>
            </button>
            
            <button 
              className={`w-8 h-8 mb-4 rounded ${currentTool === 'eraser' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'} flex items-center justify-center`}
              onClick={() => {
                setCurrentTool('eraser');
                currentToolRef.current = 'eraser';
              }}
              title="Eraser (E)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20 20H7L3 16c-.8-.8-.8-2 0-2.8L13.8 2.4c.8-.8 2-.8 2.8 0L20 6l-7 7"/>
                <path d="M6 11l7 7"/>
              </svg>
            </button>
            
            <div className="h-px w-8 bg-gray-200 my-2"></div>
            
            <button 
              className="w-8 h-8 mb-2 rounded text-gray-500 hover:bg-gray-100 flex items-center justify-center"
              onClick={undo}
              title="Undo (Ctrl+Z)"
              disabled={historyIndex <= 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 10h10c4 0 7 3 7 7v1M3 10l6 6M3 10l6-6"/>
              </svg>
            </button>
            
            <button 
              className="w-8 h-8 mb-2 rounded text-gray-500 hover:bg-gray-100 flex items-center justify-center"
              onClick={redo}
              title="Redo (Ctrl+Y)"
              disabled={historyIndex >= history.length - 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 10H11c-4 0-7 3-7 7v1M21 10l-6 6M21 10l-6-6"/>
              </svg>
            </button>

            <button 
              className="w-8 h-8 mb-2 rounded text-gray-500 hover:bg-gray-100 flex items-center justify-center"
              onClick={downloadCanvas}
              title="Download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </button>
            
            <button 
              className="w-8 h-8 rounded text-red-500 hover:bg-red-50 flex items-center justify-center"
              onClick={clearCanvas}
              title="Clear Canvas"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
              </svg>
            </button>
            
            <div className="flex-1"></div>
          </div>
          
          {/* 主要内容区域 */}
          <div className="flex-1 flex">
            {/* 工作区域 */}
            <div className="flex-1 bg-white p-4 flex flex-col">
              {/* MIXBOX/NORMAL 切换按钮 - 强化视觉区分 */}
              <div className="mb-4 flex flex-col items-center">
                <div className="inline-flex rounded-md overflow-hidden shadow-md mb-2">
                  <button 
                    className={`px-6 py-2 text-sm font-medium ${mixingMode === 'mixbox' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => toggleMixingMode('mixbox')}
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-1"></div>
                      <span>MIXBOX</span>
                    </div>
                  </button>
                  <button 
                    className={`px-6 py-2 text-sm font-medium ${mixingMode === 'normal' ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => toggleMixingMode('normal')}
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1 opacity-50"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-1 opacity-50"></div>
                      <span>NORMAL</span>
                    </div>
                  </button>
                </div>
                
                {/* 添加模式说明提示 */}
                <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded-md w-full max-w-md text-center">
                  {mixingModeRef.current === 'mixbox' ? (
                    <span><strong>Real Pigment Mode: </strong>Yellow+Blue=Green, Red+Blue=Purple, physical mixing rules</span>
                  ) : (
                    <span><strong>Standard RGB Mode: </strong>Works like regular digital software, simple color blending, higher saturation</span>
                  )}
                </div>
              </div>
              
              {/* 画布区域 */}
              <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden border border-gray-200 relative">
                <canvas 
                  ref={canvasRef}
                  className="w-full h-full touch-none cursor-crosshair"
                  style={{ background: 'white' }}
                />
              </div>
            </div>
            
            {/* 右侧色板面板 */}
            <div className="w-80 border-l border-gray-200 bg-white overflow-y-auto">
              {/* 颜色选择器标签 */}
              <div className="flex border-b border-gray-200">
                <button 
                  className={`flex-1 py-2 text-sm font-medium ${activeTab === 'paints' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('paints')}
                >
                  Paint Library
                </button>
                <button 
                  className={`flex-1 py-2 text-sm font-medium ${activeTab === 'custom' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('custom')}
                >
                  Custom
                </button>
              </div>
              
              {/* 颜色选择器内容 */}
              <div className="p-4">
                {/* Brush control panel */}
                <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="mb-4">
                    <label className="text-xs text-gray-500 block mb-1">Brush Size: {brushSize}px</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="100" 
                      value={brushSize} 
                      onChange={(e) => {
                        const newSize = parseInt(e.target.value);
                        setBrushSize(newSize);
                      }} 
                      className="w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-xs text-gray-500 block mb-1">Opacity: {opacity}%</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="100" 
                      value={opacity} 
                      onChange={(e) => {
                        const newOpacity = parseInt(e.target.value);
                        setOpacity(newOpacity);
                      }} 
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-8 h-8 rounded-full border border-gray-300"
                      style={{ backgroundColor: selectedColor }}
                    ></div>
                    <span className="text-sm text-gray-700 font-mono">{selectedColor}</span>
                    <span className="text-sm text-gray-500">{selectedPaint}</span>
                  </div>
                </div>

                {activeTab === 'paints' && (
                  <>
                    {/* 颜色轮 */}
                    <div className="relative mb-6">
                      <canvas 
                        ref={colorWheelRef}
                        width={280}
                        height={280}
                        className="w-full h-auto rounded-full"
                      />
                    </div>
                    
                    {/* 颜色预览 */}
                    <div className="mb-4">
                      <canvas 
                        ref={previewRef}
                        width={280}
                        height={40}
                        className="w-full h-10 rounded-md shadow-sm"
                      />
                      <div className="mt-1 flex justify-between">
                        <span className="text-sm text-gray-500">
                          {selectedPaint}
                        </span>
                        <span className="text-sm font-mono">
                          {selectedColor || ''}
                        </span>
                      </div>
                    </div>
                    
                    {/* 专业颜料色板 */}
                    <h3 className="text-sm font-medium mb-2 text-gray-700">Professional Paints</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {PAINT_GRID.map((row, rowIndex) => (
                        // 使用Fragment替代React.Fragment
                        <React.Fragment key={`row-${rowIndex}`}>
                          {row.map((paintName, colIndex) => (
                            paintName ? (
                              <div 
                                key={`paint-${rowIndex}-${colIndex}`}
                                className={`aspect-square rounded-full cursor-pointer border hover:opacity-90 ${selectedPaint === paintName ? 'ring-2 ring-blue-500' : ''}`}
                                style={{ backgroundColor: PAINT_COLORS[paintName]?.hex || 'transparent' }}
                                onClick={() => {
                                  console.log(`点击了颜料: ${paintName}`);
                                  selectPaint(paintName);
                                }}
                              />
                            ) : (
                              <div 
                                key={`empty-${rowIndex}-${colIndex}`}
                                className="aspect-square"
                              />
                            )
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                )}
                
                {activeTab === 'custom' && (
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-gray-700">Custom Colors</h3>
                    <p className="text-gray-500 text-sm">Create custom colors with RGB or HEX values.</p>
                  </div>
                )}
                
                {/* 底部学习更多按钮 */}
                <div className="mt-6">
                  <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
                
                {/* 水彩混合信息提示 */}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-800 border border-blue-100">
                  <h4 className="font-medium mb-1">About Pigment Mixing</h4>
                  <p className="mb-2">
                    This tool uses realistic <strong>pigment-based color mixing</strong> (like watercolors) in MIXBOX mode.
                  </p>
                  <ul className="space-y-1 text-xs">
                    <li>• Yellow + Blue = Green (not gray)</li>
                    <li>• Red + Blue = Purple (not magenta)</li>
                    <li>• Red + Green = Brown (not yellow)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 页脚信息 - 仅在非嵌入模式下显示 */}
        {!isInIframe && (
          <div className="bg-white border-t border-gray-200 py-4 px-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <div>
                <h1 className="text-lg font-bold text-gray-800">MixBox Canvas Painter</h1>
                <p className="text-sm text-gray-500">Create beautiful digital watercolor paintings</p>
              </div>
              
              <div>
                <button 
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm"
                  onClick={() => {
                    navigator.clipboard.writeText(getEmbedCode())
                      .then(() => {
                        alert('Embed code copied!');
                      });
                  }}
                >
                  Copy Embed Code
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}