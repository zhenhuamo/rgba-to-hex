// Text to Binary conversion utility functions
// Handles conversion between text and binary representation

export interface TextToBinaryResult {
  binary: string;
  isValid: boolean;
  error?: string;
  details?: CharacterDetail[];
}

export interface BinaryToTextResult {
  text: string;
  isValid: boolean;
  error?: string;
  details?: BinaryChunkDetail[];
}

export interface CharacterDetail {
  char: string;
  ascii: number;
  binary: string;
  hex: string;
  description: string;
}

export interface BinaryChunkDetail {
  binary: string;
  ascii: number;
  char: string;
  hex: string;
  isValid: boolean;
}

/**
 * 验证文本是否适合转换为二进制
 * @param text 输入文本
 * @returns 是否有效
 */
export function isValidTextForBinary(text: string): boolean {
  if (!text || typeof text !== 'string') {
    return false;
  }
  
  // 检查是否包含基本ASCII字符（0-127）
  // 扩展ASCII（128-255）也支持，但可能显示问题
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode > 255) {
      return false; // 超出扩展ASCII范围，需要UTF-8支持
    }
  }
  
  return true;
}

/**
 * 验证二进制字符串是否适合转换为文本
 * @param binary 二进制字符串
 * @returns 是否有效
 */
export function isValidBinaryForText(binary: string): boolean {
  if (!binary || typeof binary !== 'string') {
    return false;
  }
  
  // 清理输入：移除空格和分隔符
  const cleanBinary = binary.replace(/[\s\-_]/g, '');
  
  // 检查是否只包含0和1
  if (!/^[01]+$/.test(cleanBinary)) {
    return false;
  }
  
  // 检查长度是否为8的倍数（每个字符8位）
  return cleanBinary.length % 8 === 0;
}

/**
 * 获取字符的详细信息
 * @param char 单个字符
 * @returns 字符详情
 */
export function getCharacterDetail(char: string): CharacterDetail {
  const ascii = char.charCodeAt(0);
  const binary = ascii.toString(2).padStart(8, '0');
  const hex = ascii.toString(16).toUpperCase().padStart(2, '0');
  
  let description = '';
  if (ascii >= 32 && ascii <= 126) {
    description = 'Printable ASCII';
  } else if (ascii < 32) {
    const controlChars: { [key: number]: string } = {
      0: 'NULL', 7: 'Bell', 8: 'Backspace', 9: 'Tab', 10: 'Line Feed',
      11: 'Vertical Tab', 12: 'Form Feed', 13: 'Carriage Return', 27: 'Escape'
    };
    description = controlChars[ascii] || `Control Character (${ascii})`;
  } else if (ascii > 126 && ascii <= 255) {
    description = 'Extended ASCII';
  } else {
    description = 'Unicode Character';
  }
  
  return { char, ascii, binary, hex, description };
}

/**
 * 获取常用文本示例
 * @returns 常用文本数组
 */
export function getCommonTextExamples(): Array<{ text: string; description: string; category: string }> {
  return [
    { text: 'Hello', description: '基础问候语', category: 'greeting' },
    { text: 'Hello World', description: '经典编程示例', category: 'programming' },
    { text: 'ABC', description: '基础字母', category: 'basic' },
    { text: '123', description: '基础数字', category: 'basic' },
    { text: 'Yes', description: '确认词', category: 'common' },
    { text: 'No', description: '否定词', category: 'common' },
    { text: 'OK', description: '常用缩写', category: 'common' },
    { text: 'Test', description: '测试文本', category: 'programming' },
    { text: 'Admin', description: '管理员', category: 'programming' },
    { text: 'User', description: '用户', category: 'programming' },
    { text: 'Password', description: '密码', category: 'programming' },
    { text: 'Email', description: '邮箱', category: 'programming' }
  ];
}

/**
 * 文本转二进制
 * @param text 输入文本
 * @returns 转换结果
 */
export function textToBinary(text: string): TextToBinaryResult {
  // 输入验证
  if (!text || typeof text !== 'string') {
    return {
      binary: '',
      isValid: false,
      error: '请输入有效的文本'
    };
  }
  
  if (text.length === 0) {
    return {
      binary: '',
      isValid: false,
      error: '输入不能为空'
    };
  }
  
  // 验证文本字符
  if (!isValidTextForBinary(text)) {
    return {
      binary: '',
      isValid: false,
      error: '文本包含不支持的字符，请使用基本ASCII字符（0-255）'
    };
  }
  
  try {
    const details: CharacterDetail[] = [];
    const binaryParts: string[] = [];
    
    // 逐字符转换
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charDetail = getCharacterDetail(char);
      details.push(charDetail);
      binaryParts.push(charDetail.binary);
    }
    
    // 组合二进制字符串，用空格分隔每个字符
    const binary = binaryParts.join(' ');
    
    return {
      binary,
      isValid: true,
      details
    };
  } catch (error) {
    return {
      binary: '',
      isValid: false,
      error: '转换失败：' + (error as Error).message
    };
  }
}

/**
 * 二进制转文本
 * @param binary 二进制字符串
 * @returns 转换结果
 */
export function binaryToText(binary: string): BinaryToTextResult {
  // 输入验证
  if (!binary || typeof binary !== 'string') {
    return {
      text: '',
      isValid: false,
      error: '请输入有效的二进制字符串'
    };
  }
  
  // 清理输入：移除空格、换行符和常见分隔符
  const cleanBinary = binary.replace(/[\s\-_]/g, '');
  
  if (cleanBinary.length === 0) {
    return {
      text: '',
      isValid: false,
      error: '输入不能为空'
    };
  }
  
  // 验证二进制格式
  if (!isValidBinaryForText(binary)) {
    if (!/^[01\s\-_]+$/.test(binary)) {
      return {
        text: '',
        isValid: false,
        error: '请输入有效的二进制字符串（只能包含0和1）'
      };
    }
    
    if (cleanBinary.length % 8 !== 0) {
      return {
        text: '',
        isValid: false,
        error: `二进制长度必须是8的倍数。当前长度：${cleanBinary.length}位`
      };
    }
  }
  
  try {
    const details: BinaryChunkDetail[] = [];
    const textParts: string[] = [];
    
    // 8位分组处理
    for (let i = 0; i < cleanBinary.length; i += 8) {
      const chunk = cleanBinary.substr(i, 8);
      
      if (chunk.length !== 8) {
        return {
          text: '',
          isValid: false,
          error: `不完整的字节：${chunk}（需要8位）`
        };
      }
      
      const ascii = parseInt(chunk, 2);
      
      // 检查ASCII值是否在有效范围内
      if (ascii > 255) {
        details.push({
          binary: chunk,
          ascii,
          char: '?',
          hex: ascii.toString(16).toUpperCase(),
          isValid: false
        });
        return {
          text: '',
          isValid: false,
          error: `无效的ASCII值：${ascii}（超出0-255范围）`
        };
      }
      
      const char = String.fromCharCode(ascii);
      const hex = ascii.toString(16).toUpperCase().padStart(2, '0');
      
      details.push({
        binary: chunk,
        ascii,
        char,
        hex,
        isValid: true
      });
      
      textParts.push(char);
    }
    
    const text = textParts.join('');
    
    return {
      text,
      isValid: true,
      details
    };
  } catch (error) {
    return {
      text: '',
      isValid: false,
      error: '转换失败：' + (error as Error).message
    };
  }
}

/**
 * 格式化二进制字符串（添加分组）
 * @param binary 二进制字符串
 * @param groupSize 分组大小，默认8位
 * @returns 格式化的二进制字符串
 */
export function formatBinaryString(binary: string, groupSize: number = 8): string {
  if (!binary) return '';
  
  const cleanBinary = binary.replace(/\s/g, '');
  const groups: string[] = [];
  
  for (let i = 0; i < cleanBinary.length; i += groupSize) {
    groups.push(cleanBinary.substr(i, groupSize));
  }
  
  return groups.join(' ');
}

/**
 * 获取二进制字符串统计信息
 * @param binary 二进制字符串
 * @returns 统计信息
 */
export function getBinaryStats(binary: string): {
  totalBits: number;
  totalBytes: number;
  ones: number;
  zeros: number;
  isComplete: boolean;
} {
  const cleanBinary = binary.replace(/\s/g, '');
  const ones = (cleanBinary.match(/1/g) || []).length;
  const zeros = (cleanBinary.match(/0/g) || []).length;
  const totalBits = cleanBinary.length;
  const totalBytes = Math.floor(totalBits / 8);
  const isComplete = totalBits % 8 === 0;
  
  return {
    totalBits,
    totalBytes,
    ones,
    zeros,
    isComplete
  };
} 