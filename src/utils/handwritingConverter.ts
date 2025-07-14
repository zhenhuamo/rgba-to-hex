// 手写文本转换工具核心逻辑

export interface HandwritingStyle {
  id: string;
  name: string;
  description: string;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  rotation: number; // 字符随机旋转角度范围
  roughness: number; // 笔迹粗糙度
  slant: number; // 倾斜度
  color: string;
}

export interface PaperStyle {
  id: string;
  name: string;
  description: string;
  background: string;
  lineColor?: string;
  lineSpacing?: number;
  marginLeft?: number;
  marginTop?: number;
}

export interface HandwritingOptions {
  style: HandwritingStyle;
  paper: PaperStyle;
  canvasWidth: number;
  canvasHeight: number;
  padding: number;
  quality: number; // 导出质量 0.1-1.0
}

export interface ConversionResult {
  success: boolean;
  dataUrl?: string;
  error?: string;
  stats?: {
    characterCount: number;
    lineCount: number;
    processingTime: number;
  };
}

// 预定义手写风格
export const HANDWRITING_STYLES: HandwritingStyle[] = [
  {
    id: 'cursive',
    name: 'Cursive Script',
    description: 'Elegant cursive handwriting style',
    fontFamily: 'Dancing Script, cursive',
    fontSize: 32,
    lineHeight: 1.6,
    letterSpacing: 1,
    wordSpacing: 10,
    rotation: 3,
    roughness: 0.2,
    slant: 5,
    color: '#2563eb'
  },
  {
    id: 'print',
    name: 'Print Style',
    description: 'Clear printed handwriting',
    fontFamily: 'Kalam, cursive',
    fontSize: 28,
    lineHeight: 1.8,
    letterSpacing: 2,
    wordSpacing: 12,
    rotation: 2,
    roughness: 0.1,
    slant: 0,
    color: '#1f2937'
  },
  {
    id: 'signature',
    name: 'Signature Style',
    description: 'Stylized signature handwriting',
    fontFamily: 'Allura, cursive',
    fontSize: 36,
    lineHeight: 1.4,
    letterSpacing: 0,
    wordSpacing: 8,
    rotation: 5,
    roughness: 0.3,
    slant: 10,
    color: '#7c3aed'
  },
  {
    id: 'casual',
    name: 'Casual Writing',
    description: 'Relaxed everyday handwriting',
    fontFamily: 'Caveat, cursive',
    fontSize: 30,
    lineHeight: 1.7,
    letterSpacing: 1.5,
    wordSpacing: 10,
    rotation: 4,
    roughness: 0.25,
    slant: 2,
    color: '#059669'
  },
  {
    id: 'formal',
    name: 'Formal Script',
    description: 'Professional formal handwriting',
    fontFamily: 'Crimson Text, serif',
    fontSize: 26,
    lineHeight: 2.0,
    letterSpacing: 2.5,
    wordSpacing: 14,
    rotation: 1,
    roughness: 0.05,
    slant: 0,
    color: '#374151'
  }
];

// 预定义纸张样式
export const PAPER_STYLES: PaperStyle[] = [
  {
    id: 'blank',
    name: 'Blank Paper',
    description: 'Clean white paper',
    background: '#ffffff'
  },
  {
    id: 'lined',
    name: 'Lined Paper',
    description: 'Traditional lined notebook paper',
    background: '#ffffff',
    lineColor: '#e5e7eb',
    lineSpacing: 45,
    marginLeft: 80,
    marginTop: 60
  },
  {
    id: 'grid',
    name: 'Grid Paper',
    description: 'Square grid pattern',
    background: '#ffffff',
    lineColor: '#f3f4f6',
    lineSpacing: 30,
    marginLeft: 60,
    marginTop: 60
  },
  {
    id: 'dotted',
    name: 'Dotted Paper',
    description: 'Dot grid pattern',
    background: '#ffffff',
    lineColor: '#d1d5db',
    lineSpacing: 35,
    marginLeft: 70,
    marginTop: 70
  },
  {
    id: 'vintage',
    name: 'Vintage Paper',
    description: 'Aged paper texture',
    background: '#fef7ed',
    lineColor: '#d97706',
    lineSpacing: 48,
    marginLeft: 90,
    marginTop: 70
  }
];

// 获取随机偏移值
const getRandomOffset = (range: number): number => {
  return (Math.random() - 0.5) * range;
};

// 绘制纸张背景
const drawPaperBackground = (ctx: CanvasRenderingContext2D, paper: PaperStyle, width: number, height: number) => {
  // 填充背景色
  ctx.fillStyle = paper.background;
  ctx.fillRect(0, 0, width, height);

  if (paper.lineColor && paper.lineSpacing) {
    ctx.strokeStyle = paper.lineColor;
    ctx.lineWidth = 1;

    if (paper.id === 'lined') {
      // 绘制横线
      for (let y = paper.marginTop || 0; y < height; y += paper.lineSpacing) {
        ctx.beginPath();
        ctx.moveTo(paper.marginLeft || 0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // 绘制左边距线
      if (paper.marginLeft) {
        ctx.strokeStyle = '#fca5a5';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(paper.marginLeft, 0);
        ctx.lineTo(paper.marginLeft, height);
        ctx.stroke();
      }
    } else if (paper.id === 'grid') {
      // 绘制网格
      for (let x = paper.marginLeft || 0; x < width; x += paper.lineSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = paper.marginTop || 0; y < height; y += paper.lineSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    } else if (paper.id === 'dotted') {
      // 绘制点阵
      ctx.fillStyle = paper.lineColor;
      for (let x = paper.marginLeft || 0; x < width; x += paper.lineSpacing) {
        for (let y = paper.marginTop || 0; y < height; y += paper.lineSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }
};

// 主要转换函数
export const convertTextToHandwriting = async (
  text: string,
  options: HandwritingOptions
): Promise<ConversionResult> => {
  const startTime = Date.now();

  try {
    // 输入验证
    if (!text || text.trim().length === 0) {
      return {
        success: false,
        error: 'Please enter some text to convert'
      };
    }

    if (text.length > 5000) {
      return {
        success: false,
        error: 'Text is too long. Maximum 5000 characters allowed.'
      };
    }

    // 创建Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      return {
        success: false,
        error: 'Canvas not supported in this browser'
      };
    }

    canvas.width = options.canvasWidth;
    canvas.height = options.canvasHeight;

    // 绘制纸张背景
    drawPaperBackground(ctx, options.paper, canvas.width, canvas.height);

    // 设置字体样式
    const { style } = options;

    // 确保字体已加载
    try {
      if (document.fonts && document.fonts.check) {
        const fontLoaded = document.fonts.check(`${style.fontSize}px ${style.fontFamily}`);
        if (!fontLoaded) {
          console.warn('Font not loaded, using fallback');
        }
      }
    } catch (e) {
      console.warn('Font check failed:', e);
    }

    ctx.font = `${style.fontSize}px ${style.fontFamily}`;
    ctx.fillStyle = style.color;
    ctx.textBaseline = 'top';

    // 分割文本为行
    const lines = text.split('\n');
    let currentY = Math.max(options.padding, options.paper.marginTop || 40) + 20;
    const lineHeight = style.fontSize * style.lineHeight;
    let totalLines = 0;

    // 逐行绘制文本
    for (const line of lines) {
      if (currentY + lineHeight > canvas.height - options.padding - 20) {
        break; // 超出画布高度
      }

      const words = line.split(' ');
      let currentX = Math.max(options.padding, options.paper.marginLeft || 40) + 20;

      // 逐词绘制
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        // 检查是否需要换行
        const wordWidth = ctx.measureText(word + ' ').width;
        if (currentX + wordWidth > canvas.width - options.padding - 20) {
          currentY += lineHeight;
          currentX = Math.max(options.padding, options.paper.marginLeft || 40) + 20;
          totalLines++;

          if (currentY + lineHeight > canvas.height - options.padding - 20) {
            break;
          }
        }

        // 逐字符绘制以添加随机效果
        for (let j = 0; j < word.length; j++) {
          const char = word[j];
          
          // 添加随机偏移和旋转
          const offsetX = getRandomOffset(style.roughness * 10);
          const offsetY = getRandomOffset(style.roughness * 8);
          const rotation = getRandomOffset(style.rotation) * Math.PI / 180;
          
          ctx.save();
          ctx.translate(currentX + offsetX, currentY + offsetY);
          ctx.rotate(rotation);
          
          // 添加倾斜效果
          if (style.slant !== 0) {
            ctx.transform(1, 0, Math.tan(style.slant * Math.PI / 180), 1, 0, 0);
          }
          
          ctx.fillText(char, 0, 0);
          ctx.restore();
          
          currentX += ctx.measureText(char).width + style.letterSpacing;
        }
        
        // 添加词间距
        if (i < words.length - 1) {
          currentX += style.wordSpacing;
        }
      }
      
      currentY += lineHeight;
      totalLines++;
    }

    // 生成结果
    const dataUrl = canvas.toDataURL('image/png', options.quality);
    const processingTime = Date.now() - startTime;

    return {
      success: true,
      dataUrl,
      stats: {
        characterCount: text.length,
        lineCount: totalLines,
        processingTime
      }
    };

  } catch (error) {
    return {
      success: false,
      error: `Conversion failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// 获取样式预览
export const getStylePreview = (style: HandwritingStyle): string => {
  return `font-family: ${style.fontFamily}; font-size: ${style.fontSize}px; color: ${style.color}; letter-spacing: ${style.letterSpacing}px;`;
};

// 验证输入文本
export const validateText = (text: string): { isValid: boolean; error?: string } => {
  if (!text || text.trim().length === 0) {
    return { isValid: false, error: 'Text cannot be empty' };
  }
  
  if (text.length > 5000) {
    return { isValid: false, error: 'Text is too long (max 5000 characters)' };
  }
  
  return { isValid: true };
};

// 获取常用文本示例
export const getHandwritingExamples = () => {
  return [
    { text: 'Hello World!', category: 'basic' },
    { text: 'The quick brown fox jumps over the lazy dog.', category: 'pangram' },
    { text: 'Dear Friend,\n\nI hope this letter finds you well.\n\nBest regards,\nYour Name', category: 'letter' },
    { text: 'Meeting Notes\n• Project timeline\n• Budget review\n• Next steps', category: 'notes' },
    { text: 'Shopping List\n- Milk\n- Bread\n- Eggs\n- Apples', category: 'list' },
    { text: 'Happy Birthday!\nWishing you all the best\non your special day.', category: 'greeting' }
  ];
};
