"use client"
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
// 1. 导入增强的创意工具组件
import { EnhancedCreativeTools } from './enhanced-ui-components';
import { QRCodeSVG } from 'qrcode.react';

// Define interfaces
interface FontStyle {
  name: string;
  className: string;
  transform: (text: string) => string;
}

interface SavedItem {
  id: string;
  text: string;
  style: string;
  timestamp: number;
}

export default function TextToolkit() {
  // States for text input and transformations
  const [inputText, setInputText] = useState<string>('image');
  const [fontStyles, setFontStyles] = useState<FontStyle[]>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  
  // States for new features
  const [activeTab, setActiveTab] = useState<string>('fonts');
  const [theme, setTheme] = useState<string>('light');
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [textStats, setTextStats] = useState<{
    characters: number;
    words: number;
    lines: number;
    unicodePoints: number;
  }>({ characters: 0, words: 0, lines: 0, unicodePoints: 0 });
  // 如果这些变量将来会用到，添加eslint禁用注释
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [emojiDensity, setEmojiDensity] = useState<number>(2); // 0-5 scale for emoji density
  const [showEmojiSettings, setShowEmojiSettings] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('twitter');
  const [aiSuggestion, setAiSuggestion] = useState<string>('');
  const [showAiSuggestions, setShowAiSuggestions] = useState<boolean>(false);
  const [backgroundStyle, setBackgroundStyle] = useState<string>('none');
  const [borderStyle, setBorderStyle] = useState<string>('none');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState<boolean>(false);
  const [customCombinations, setCustomCombinations] = useState<{name: string, transforms: string[]}[]>([]);
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false);
  const [newCombinationName, setNewCombinationName] = useState<string>('');
  const [selectedTransforms, setSelectedTransforms] = useState<string[]>([]);
  const [fontSearchTerm, setFontSearchTerm] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrCodeText, setQRCodeText] = useState('');
  /* eslint-enable @typescript-eslint/no-unused-vars */

  // Platform character limits
  const platformLimits: Record<string, number> = {
    twitter: 280,
    instagram: 2200,
    facebook: 63206,
    linkedin: 3000,
    tiktok: 2200,
    pinterest: 500
  };

  // 字体转换函数
  const transform = {
    // 基础样式
    mathematical: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒',
        'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛',
        's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
        'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸',
        'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁',
        'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    circled: (text: string): string => {
      const chars: Record<string, string> = {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ',
        'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ',
        's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ',
        'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ',
        'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    fancy: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲',
        'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻',
        's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘',
        'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡',
        'S': '𝓢', 'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    doubleStruck: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚',
        'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣',
        's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀',
        'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ',
        'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    boldSerif: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢',
        'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫',
        's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈',
        'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑',
        'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    italicSerif: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖',
        'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟',
        's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
        'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼',
        'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅',
        'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    boldItalicSerif: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊',
        'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓',
        's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
        'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰',
        'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹',
        'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    fraktur: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦',
        'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯',
        's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
        'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ',
        'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ',
        'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    boldFraktur: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍', 'i': '𝖎',
        'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗',
        's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟',
        'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲', 'H': '𝕳', 'I': '𝕴',
        'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹', 'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽',
        'S': '𝕾', 'T': '𝕿', 'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    smallCaps: (text: string): string => {
      const chars: Record<string, string> = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ',
        'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ',
        's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
        'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I',
        'J': 'J', 'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q', 'R': 'R',
        'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Z'
      };
      return Array.from(text).map(char => chars[char.toLowerCase()] || char).join('');
    },
    
    fullWidth: (text: string): string => {
      const chars: Record<string, string> = {
        'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ',
        'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ',
        's': 'ｓ', 't': 'ｔ', 'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
        'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ',
        'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ',
        'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
        '0': '０', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６', '7': '７', '8': '８', '9': '９',
        ' ': '　', '!': '！', '"': '＂', '#': '＃', '$': '＄', '%': '％', '&': '＆', "'": '＇', '(': '（', ')': '）',
        '*': '＊', '+': '＋', ',': '，', '-': '－', '.': '．', '/': '／', ':': '：', ';': '；', '<': '＜', '=': '＝',
        '>': '＞', '?': '？', '@': '＠', '[': '［', '\\': '＼', ']': '］', '^': '＾', '_': '＿', '`': '｀', '{': '｛',
        '|': '｜', '}': '｝', '~': '～'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },

    wave: (text: string): string => {
      const chars: Record<string, string> = {
        'a': 'ᗩ', 'b': 'ᗷ', 'c': 'ᑕ', 'd': 'ᗪ', 'e': 'E', 'f': 'ᖴ', 'g': 'G', 'h': 'ᕼ', 'i': 'I',
        'j': 'ᒍ', 'k': 'K', 'l': 'ᒪ', 'm': 'ᗰ', 'n': 'ᑎ', 'o': 'O', 'p': 'ᑭ', 'q': 'ᑫ', 'r': 'ᖇ',
        's': 'ᔕ', 't': 'T', 'u': 'ᑌ', 'v': 'ᐯ', 'w': 'ᗯ', 'x': '᙭', 'y': 'Y', 'z': 'ᘔ',
        'A': 'ᗩ', 'B': 'ᗷ', 'C': 'ᑕ', 'D': 'ᗪ', 'E': 'E', 'F': 'ᖴ', 'G': 'G', 'H': 'ᕼ', 'I': 'I',
        'J': 'ᒍ', 'K': 'K', 'L': 'ᒪ', 'M': 'ᗰ', 'N': 'ᑎ', 'O': 'O', 'P': 'ᑭ', 'Q': 'ᑫ', 'R': 'ᖇ',
        'S': 'ᔕ', 'T': 'T', 'U': 'ᑌ', 'V': 'ᐯ', 'W': 'ᗯ', 'X': '᙭', 'Y': 'Y', 'Z': 'ᘔ'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    superscript: (text: string): string => {
      const chars: Record<string, string> = {
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ',
        'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'q', 'r': 'ʳ',
        's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
        'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ',
        'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ',
        'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
        '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    subscript: (text: string): string => {
      const chars: Record<string, string> = {
        'a': 'ₐ', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'ₑ', 'f': 'f', 'g': 'g', 'h': 'ₕ', 'i': 'ᵢ',
        'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'q': 'q', 'r': 'ᵣ',
        's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'w': 'w', 'x': 'ₓ', 'y': 'y', 'z': 'z',
        '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
        '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    invertedSquares: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸',
        'j': '🅹', 'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁',
        's': '🆂', 't': '🆃', 'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉',
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸',
        'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁',
        'S': '🆂', 'T': '🆃', 'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    medievalSquares: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗', 'i': '🅘',
        'j': '🅙', 'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡',
        's': '🅢', 't': '🅣', 'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩',
        'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘',
        'J': '🅙', 'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡',
        'S': '🅢', 'T': '🅣', 'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    cursive: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾',
        'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇',
        's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ',
        'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ',
        'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    oldEnglish: (text: string): string => {
      const chars: Record<string, string> = {
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦',
        'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯',
        's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
        'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ',
        'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ',
        'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
      };
      return Array.from(text).map(char => chars[char] || char).join('');
    },
    
    creepyZalgo: (text: string): string => {
      // 添加一些扎尔戈文字符（上标和下标组合）
      const zalgoUp = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343', '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350', '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b', '\u0346', '\u031a'];
      const zalgoMid = ['\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e', '\u035f', '\u0360', '\u0362', '\u0338', '\u0337', '\u0361', '\u0489'];
      const zalgoDown = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339', '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d', '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323'];
      
      return Array.from(text).map(char => {
        // 为每个字符添加1-3个随机扎尔戈标记
        let result = char;
        
        // 添加上标扎尔戈
        const upCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < upCount; i++) {
          result += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
        }
        
        // 添加中标扎尔戈
        const midCount = Math.floor(Math.random() * 2);
        for (let i = 0; i < midCount; i++) {
          result += zalgoMid[Math.floor(Math.random() * zalgoMid.length)];
        }
        
        // 添加下标扎尔戈
        const downCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < downCount; i++) {
          result += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
        }
        
        return result;
      }).join('');
    },
    
    mirror: (text: string): string => {
      const chars: Record<string, string> = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ',
        'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ',
        's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
        'A': '∀', 'B': 'B', 'C': 'Ɔ', 'D': 'D', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I',
        'J': 'ſ', 'K': 'K', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'R',
        'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z'
      };
      return Array.from(text).map(char => chars[char] || char).join('').split('').reverse().join('');
    },
    
    bubbles: (text: string): string => {
      return text.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
          return String.fromCodePoint(9398 + char.toLowerCase().charCodeAt(0) - 97);
        }
        return char;
      }).join('');
    },
    
    squares: (text: string): string => {
      return text.split('').map(char => {
        if (/[a-z]/.test(char)) {
          return String.fromCodePoint(127280 + char.charCodeAt(0) - 97);
        } else if (/[A-Z]/.test(char)) {
          return String.fromCodePoint(127280 + char.toLowerCase().charCodeAt(0) - 97);
        }
        return char;
      }).join('');
    },
    
    parentheses: (text: string): string => {
      return Array.from(text).map(char => {
        if (/[a-z]/i.test(char)) {
          return '(' + char + ')';
        }
        return char;
      }).join('');
    },
    
    strikethrough: (text: string): string => {
      return Array.from(text).map(char => char + '\u0336').join('');
    },
    
    sparkles: (text: string): string => {
      return '✨ ' + text + ' ✨';
    },
    
    hearts: (text: string): string => {
      return '❤️ ' + Array.from(text).join(' ❤️ ') + ' ❤️';
    },
    
    stars: (text: string): string => {
      return '★ ' + Array.from(text).join(' ★ ') + ' ★';
    },
    
    dashes: (text: string): string => {
      return Array.from(text).join('-');
    },
    
    dots: (text: string): string => {
      return Array.from(text).join('.');
    },
    
    vaporwave: (text: string): string => {
      return Array.from(text).map(char => {
        if (/[a-zA-Z0-9]/.test(char)) {
          return String.fromCodePoint(char.charCodeAt(0) + 65248);
        } else if (char === ' ') {
          return '　';
        }
        return char;
      }).join('');
    },
    
    rainbow: (text: string): string => {
      // 这个只是示意，实际在React中需要用CSS实现彩虹色彩效果
      return text;
    },
    
    // 新增实用功能
    emojify: (text: string, density: number = 2): string => {
      // Map of words to emojis
      const emojiMap: Record<string, string[]> = {
        'happy': ['😊', '😃', '😄', '🙂', '😁'],
        'sad': ['😢', '😭', '😔', '😞', '😥'],
        'love': ['❤️', '💕', '😍', '🥰', '💖'],
        'laugh': ['😂', '🤣', '😆', '😅', '😹'],
        'cool': ['😎', '🆒', '👍', '🤙', '🔥'],
        'food': ['🍔', '🍕', '🍰', '🍪', '🍩'],
        'drink': ['🍺', '🍷', '🥤', '☕', '🍹'],
        'work': ['💼', '👩‍💻', '👨‍💻', '📊', '📈'],
        'music': ['🎵', '🎶', '🎸', '🎹', '🎷'],
        'travel': ['✈️', '🏖️', '🗺️', '🧳', '🏞️'],
        // Many more words could be added
      };
      
      // Split by words, but keep punctuation
      const words = text.split(/\b/);
      return words.map(word => {
        const lowercaseWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
        if (emojiMap[lowercaseWord] && Math.random() * 5 < density) {
          return word + emojiMap[lowercaseWord][Math.floor(Math.random() * emojiMap[lowercaseWord].length)];
        }
        return word;
      }).join('');
    },
    
    reverse: (text: string): string => {
      return Array.from(text).reverse().join('');
    },
    
    encrypt: (text: string): string => {
      // Simple Caesar cipher with shift of 3
      return Array.from(text).map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
          return String.fromCharCode(((code - 65 + 3) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
          return String.fromCharCode(((code - 97 + 3) % 26) + 97);
        }
        return char;
      }).join('');
    },
    
    decrypt: (text: string): string => {
      // Simple Caesar cipher with shift of -3
      return Array.from(text).map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
          return String.fromCharCode(((code - 65 - 3 + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
          return String.fromCharCode(((code - 97 - 3 + 26) % 26) + 97);
        }
        return char;
      }).join('');
    },
    
    randomPassword: (length: number = 12): string => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
  };
  
  // AI suggestion templates
  const aiSuggestionTemplates = [
    "Looking for creative inspiration? Try: '{suggestion}'",
    "Writer's block? How about: '{suggestion}'",
    "Need a starting point? Consider: '{suggestion}'",
    "Here's a thought to expand on: '{suggestion}'",
    "Creative prompt: '{suggestion}'"
  ];
  
  const suggestions = [
    "The sunset painted the sky with hues of orange and purple",
    "Explore the mysteries of the ancient temple",
    "A journey through time and space begins with a single step",
    "The secret garden holds more than just flowers",
    "Dancing shadows on the wall tell stories of the past",
    "Whispers in the wind carry messages from distant lands",
    "The old lighthouse stands guard against the raging sea",
    "A melody forgotten, now remembered in dreams",
    "Stars twinkling like diamonds on black velvet",
    "The forgotten book revealed secrets long buried"
  ];

  // Functions for new features
  const calculateTextStats = (text: string) => {
    setTextStats({
      characters: text.length,
      words: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
      lines: text.split('\n').length,
      unicodePoints: Array.from(text).length
    });
  };
  
  const applyRandomAiSuggestion = () => {
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    const template = aiSuggestionTemplates[Math.floor(Math.random() * aiSuggestionTemplates.length)];
    setAiSuggestion(template.replace('{suggestion}', randomSuggestion));
  };
  
  const saveCurrentText = (styleName: string) => {
    const newItem: SavedItem = {
      id: Date.now().toString(),
      text: inputText,
      style: styleName,
      timestamp: Date.now()
    };
    
    setSavedItems(prev => [newItem, ...prev]);
    
    setFeedbackMessage('Text saved to history!');
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };
  
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const formatForPlatform = (text: string) => {
    const limit = platformLimits[selectedPlatform];
    if (text.length > limit) {
      return {
        text: text.substring(0, limit),
        warning: `Text exceeds ${selectedPlatform}&apos;s limit of ${limit} characters. Truncated to fit.`
      };
    }
    return {
      text,
      warning: null
    };
  };
  /* eslint-enable @typescript-eslint/no-unused-vars */
  
  const generateQRCode = (text: string) => {
    if (text.trim() === '') {
      alert('Please enter text to generate QR code');
      return;
    }
    setQRCodeText(text);
    setShowQRModal(true);
  };
  
  const exportToFile = (text: string, format: string) => {
    const element = document.createElement('a');
    let fileContent = text;
    let mimeType = 'text/plain';
    let extension = 'txt';
    
    if (format === 'json') {
      fileContent = JSON.stringify({ content: text, createdAt: new Date().toISOString() });
      mimeType = 'application/json';
      extension = 'json';
    } else if (format === 'html') {
      fileContent = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Exported Text</title></head><body><div>${text}</div></body></html>`;
      mimeType = 'text/html';
      extension = 'html';
    }
    
    const file = new Blob([fileContent], {type: mimeType});
    element.href = URL.createObjectURL(file);
    element.download = `exported-text-${Date.now()}.${extension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setInputText(content);
    };
    reader.readAsText(file);
  };
  
  const applyCustomCombination = (transforms: string[]) => {
    let result = inputText;
    transforms.forEach(transformName => {
      const transformFunction = Object.entries(transform).find(([key]) => key === transformName)?.[1];
      if (typeof transformFunction === 'function') {
        // @ts-expect-error: This is a bit of a hack, but it works for our demo
        result = transformFunction(result);
      }
    });
    return result;
  };
  
  const saveCustomCombination = () => {
    if (newCombinationName.trim() === '' || selectedTransforms.length === 0) {
      setFeedbackMessage('Please provide a name and select at least one transformation!');
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000);
      return;
    }
    
    setCustomCombinations(prev => [...prev, {
      name: newCombinationName,
      transforms: selectedTransforms
    }]);
    
    setNewCombinationName('');
    setSelectedTransforms([]);
    setShowSaveModal(false);
    
    setFeedbackMessage('Custom combination saved!');
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };
  
  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  // Copy text to clipboard
  const copyText = (text: string): void => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setFeedbackMessage('Copied to clipboard!');
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 2000);
      })
      .catch(() => {
        setFeedbackMessage('Copy failed!');
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 2000);
      });
  };

  // Effect to calculate text stats when input changes
  useEffect(() => {
    calculateTextStats(inputText);
  }, [inputText]);
  
  // Effect to show AI suggestion on first load
  useEffect(() => {
    applyRandomAiSuggestion();
  }, []);
  
  // Effect to set up font styles
  useEffect(() => {
    const styles: FontStyle[] = [
      // 基础样式
      { name: 'Normal', className: '', transform: (text: string) => text },
      { name: 'Bold Serif', className: '', transform: transform.boldSerif },
      { name: 'Italic Serif', className: '', transform: transform.italicSerif },
      { name: 'Bold Italic Serif', className: '', transform: transform.boldItalicSerif },
      
      // 数学和特殊字体
      { name: 'Mathematical Monospace', className: '', transform: transform.mathematical },
      { name: 'Double Struck', className: '', transform: transform.doubleStruck },
      { name: 'Fraktur', className: '', transform: transform.fraktur },
      { name: 'Bold Fraktur', className: '', transform: transform.boldFraktur },
      { name: 'Script', className: '', transform: transform.fancy },
      { name: 'Cursive', className: '', transform: transform.cursive },
      { name: 'Old English', className: '', transform: transform.oldEnglish },
      
      // 上下标和小写大写
      { name: 'Small Caps', className: '', transform: transform.smallCaps },
      { name: 'Superscript', className: '', transform: transform.superscript },
      { name: 'Subscript', className: '', transform: transform.subscript },
      
      // 圆形和方形字体
      { name: 'Circled', className: '', transform: transform.circled },
      { name: 'Bubbles', className: '', transform: transform.bubbles },
      { name: 'Squares', className: '', transform: transform.squares },
      { name: 'Inverted Squares', className: '', transform: transform.invertedSquares },
      { name: 'Medieval Squares', className: '', transform: transform.medievalSquares },
      
      // 东亚样式
      { name: 'Full Width', className: '', transform: transform.fullWidth },
      { name: 'Vaporwave', className: '', transform: transform.vaporwave },
      
      // 特效样式
      { name: 'Wave', className: '', transform: transform.wave },
      { name: 'Mirror', className: '', transform: transform.mirror },
      { name: 'Parentheses', className: '', transform: transform.parentheses },
      { name: 'Strike Through', className: '', transform: transform.strikethrough },
      { name: 'Dashes', className: '', transform: transform.dashes },
      { name: 'Dots', className: '', transform: transform.dots },
      
      // 装饰样式
      { name: 'Sparkles', className: '', transform: transform.sparkles },
      { name: 'Hearts', className: '', transform: transform.hearts },
      { name: 'Stars', className: '', transform: transform.stars },
      
      // 特殊效果
      { name: 'Creepy (Zalgo)', className: '', transform: transform.creepyZalgo },
      { name: 'Rainbow', className: 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent', transform: transform.rainbow },
    ];
    setFontStyles(styles);
  }, []);

  // 过滤字体样式
  const filteredFontStyles = fontSearchTerm 
    ? fontStyles.filter(style => 
        style.name.toLowerCase().includes(fontSearchTerm.toLowerCase())
      )
    : fontStyles;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-200`}>
      <Head>
        <title>Text Toolkit - All-in-One Text Tools</title>
        <meta name="description" content="Advanced text formatting, creative writing assistance, and social media optimization tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Text Toolkit</h1>
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          <p className="text-lg mt-2 opacity-80">All-in-One Text Transformation & Creativity Platform</p>
        </header>

        {/* AI Suggestion Banner */}
        {showAiSuggestions && (
          <div className={`mb-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-50'} flex justify-between items-center`}>
            <p className="flex-1">{aiSuggestion}</p>
            <div className="flex space-x-2">
              <button 
                onClick={() => setInputText(suggestions[Math.floor(Math.random() * suggestions.length)])}
                className="px-3 py-1 bg-blue-500 rounded text-white"
              >
                Use
              </button>
              <button 
                onClick={applyRandomAiSuggestion}
                className="px-3 py-1 bg-transparent border border-blue-500 rounded"
              >
                Next ↻
              </button>
              <button 
                onClick={() => setShowAiSuggestions(false)}
                className="px-3 py-1 bg-transparent rounded"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Input and Stats */}
          <div className="lg:col-span-1">
            <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} mb-6`}>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Input Text</h2>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter or paste your text here..."
                  className={`w-full h-40 p-3 border rounded-md focus:outline-none focus:ring-2 resize-none ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' : 'bg-white border-gray-300 focus:ring-blue-400'
                  }`}
                ></textarea>
                
                <div className="flex flex-wrap -mx-2 mt-3">
                  <div className="px-2 w-1/2">
                    <button
                      onClick={() => setInputText('')}
                      className={`w-full px-4 py-2 rounded-md ${
                        theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      Clear
                    </button>
                  </div>
                  <div className="px-2 w-1/2">
                    <button
                      onClick={() => {
                        if (fileInputRef.current) fileInputRef.current.click();
                      }}
                      className={`w-full px-4 py-2 rounded-md ${
                        theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      Import
                    </button>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept=".txt,.md,.html,.json"
                      onChange={handleFileUpload}
                    />
                  </div>
                </div>
              </div>
              
              <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} p-4`}>
                <h3 className="font-semibold mb-2">Text Statistics</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm opacity-70">Characters</div>
                    <div className="text-xl font-bold">{textStats.characters}</div>
                  </div>
                  <div className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm opacity-70">Words</div>
                    <div className="text-xl font-bold">{textStats.words}</div>
                  </div>
                  <div className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm opacity-70">Lines</div>
                    <div className="text-xl font-bold">{textStats.lines}</div>
                  </div>
                  <div className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm opacity-70">Unicode Points</div>
                    <div className="text-xl font-bold">{textStats.unicodePoints}</div>
                  </div>
                </div>
              </div>
              
              <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} p-4`}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Social Media Optimization</h3>
                  <select
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                    className={`p-1 rounded text-sm ${
                      theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                    }`}
                  >
                    <option value="twitter">Twitter/X</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="tiktok">TikTok</option>
                    <option value="pinterest">Pinterest</option>
                  </select>
                </div>
                <div className={`p-3 rounded-md text-sm ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="flex justify-between mb-1">
                    <span>Character Count</span>
                    <span className={inputText.length > platformLimits[selectedPlatform] ? 'text-red-500' : ''}>
                      {inputText.length} / {platformLimits[selectedPlatform]}
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        inputText.length > platformLimits[selectedPlatform] 
                          ? 'bg-red-600' 
                          : inputText.length > platformLimits[selectedPlatform] * 0.8 
                            ? 'bg-yellow-400' 
                            : 'bg-green-500'
                      }`} 
                      style={{ width: `${Math.min(100, (inputText.length / platformLimits[selectedPlatform]) * 100)}%` }}
                    ></div>
                  </div>
                  {inputText.length > platformLimits[selectedPlatform] && (
                    <p className="mt-2 text-xs text-red-500">
                      Text exceeds {selectedPlatform}&apos;s limit by {inputText.length - platformLimits[selectedPlatform]} characters
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Middle and Right Columns - Transformations and Tools */}
          <div className="lg:col-span-2">
            <div className={`rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} mb-6 overflow-hidden`}>
              {/* Tabs */}
              <div className={`flex border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <button 
                  className={`px-4 py-3 font-medium ${
                    activeTab === 'fonts' 
                      ? theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900' 
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab('fonts')}
                >
                  Font Styles
                </button>
                <button 
                  className={`px-4 py-3 font-medium ${
                    activeTab === 'creative' 
                      ? theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900' 
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab('creative')}
                >
                  Creative Tools
                </button>
                <button 
                  className={`px-4 py-3 font-medium ${
                    activeTab === 'utilities' 
                      ? theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900' 
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab('utilities')}
                >
                  Utilities
                </button>
                <button 
                  className={`px-4 py-3 font-medium ${
                    activeTab === 'saved' 
                      ? theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900' 
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab('saved')}
                >
                  Saved
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="p-4">
                {/* Font Styles Tab */}
                {activeTab === 'fonts' && (
                  <>
                    <div className="mb-4 flex justify-between items-center">
                      <h2 className="text-xl font-bold">Font Styles ({fontStyles.length})</h2>
                      <button 
                        onClick={() => setShowSaveModal(true)}
                        className={`text-sm px-3 py-1 rounded ${
                          theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                        } text-white`}
                      >
                        Create Custom Style
                      </button>
                    </div>
                    
                    {/* Search box for font styles */}
                    <div className="mb-4">
                      <input
                        type="text"
                        value={fontSearchTerm}
                        onChange={(e) => setFontSearchTerm(e.target.value)}
                        placeholder="Search font styles..."
                        className={`w-full p-2 border rounded-md ${
                          theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        }`}
                      />
                    </div>
                    
                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                      {filteredFontStyles.map((style, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center justify-between p-3 rounded ${
                            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="text-xs text-gray-500 mb-1">{style.name}</div>
                            <div className={style.className + " truncate max-w-xl"}>
                              {style.transform(inputText)}
                            </div>
                          </div>
                          <div className="flex space-x-2 ml-2 flex-shrink-0">
                            <button
                              onClick={() => copyText(style.transform(inputText))}
                              className={`px-3 py-1 rounded ${
                                theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                              } text-white`}
                            >
                              Copy
                            </button>
                            <button
                              onClick={() => saveCurrentText(style.name)}
                              className={`px-3 py-1 rounded ${
                                theme === 'dark' 
                                  ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                                  : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                              }`}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ))}

                      {filteredFontStyles.length === 0 && (
                        <div className="text-center p-8">
                          <p>No font styles match your search. Try a different term.</p>
                        </div>
                      )}

                      {/* Custom combinations */}
                      {customCombinations.length > 0 && (
                        <div className="mt-6">
                          <h3 className="text-lg font-medium mb-3">Your Custom Combinations</h3>
                          {customCombinations.map((combo, index) => (
                            <div key={index} className={`flex items-center justify-between p-3 rounded mb-2 ${
                              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                            }`}>
                              <div>
                                <div className="font-medium mb-1">{combo.name}</div>
                                <div className="truncate max-w-xl">{applyCustomCombination(combo.transforms)}</div>
                              </div>
                              <div className="flex space-x-2 ml-2 flex-shrink-0">
                                <button
                                  onClick={() => copyText(applyCustomCombination(combo.transforms))}
                                  className={`px-3 py-1 rounded ${
                                    theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                                  } text-white`}
                                >
                                  Copy
                                </button>
                                <button
                                  onClick={() => saveCurrentText(combo.name)}
                                  className={`px-3 py-1 rounded ${
                                    theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                                  }`}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
                
                {/* Creative Tools Tab */}
                {activeTab === 'creative' && (
                    <>
                        <h2 className="text-xl font-bold mb-4">Creative Tools</h2>
                        
                        {/* 增强版创意工具 */}
                        <EnhancedCreativeTools
                        inputText={inputText}
                        copyText={copyText}
                        saveCurrentText={saveCurrentText}
                        theme={theme}
                        />
                        
    
                    </>
                    )}
                
                {/* Utilities Tab */}
                {activeTab === 'utilities' && (
                  <>
                    <h2 className="text-xl font-bold mb-4">Utility Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Text Case Converter */}
                      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h3 className="font-semibold mb-3">Case Converter</h3>
                        <div className="space-y-2">
                          <button
                            onClick={() => setInputText(inputText.toUpperCase())}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            UPPERCASE
                          </button>
                          <button
                            onClick={() => setInputText(inputText.toLowerCase())}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            lowercase
                          </button>
                          <button
                            onClick={() => {
                              const words = inputText.toLowerCase().split(' ');
                              const titleCase = words.map(word => {
                                return word.charAt(0).toUpperCase() + word.slice(1);
                              }).join(' ');
                              setInputText(titleCase);
                            }}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Title Case
                          </button>
                          <button
                            onClick={() => {
                              const words = inputText.split(' ');
                              const sentenceCase = words.map((word, index) => {
                                if (index === 0) {
                                  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                                }
                                return word.toLowerCase();
                              }).join(' ');
                              setInputText(sentenceCase);
                            }}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Sentence case
                          </button>
                        </div>
                      </div>
                      
                      {/* Text Operations */}
                      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h3 className="font-semibold mb-3">Text Operations</h3>
                        <div className="space-y-2">
                          <button
                            onClick={() => setInputText(transform.reverse(inputText))}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Reverse Text
                          </button>
                          <button
                            onClick={() => {
                              const lines = inputText.split('\n');
                              const sortedLines = [...lines].sort();
                              setInputText(sortedLines.join('\n'));
                            }}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Sort Lines Alphabetically
                          </button>
                          <button
                            onClick={() => {
                              const uniqueLines = [...new Set(inputText.split('\n'))];
                              setInputText(uniqueLines.join('\n'));
                            }}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Remove Duplicate Lines
                          </button>
                          <button
                            onClick={() => {
                              const trimmedLines = inputText
                                .split('\n')
                                .map(line => line.trim())
                                .filter(line => line !== '');
                              setInputText(trimmedLines.join('\n'));
                            }}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Clean Whitespace
                          </button>
                        </div>
                      </div>
                      
                      {/* Encryption */}
                      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h3 className="font-semibold mb-3">Simple Encryption</h3>
                        <div className="space-y-2">
                          <button
                            onClick={() => setInputText(transform.encrypt(inputText))}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-500 hover:bg-indigo-600'
                            } text-white`}
                          >
                            Encrypt (Caesar Cipher)
                          </button>
                          <button
                            onClick={() => setInputText(transform.decrypt(inputText))}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-purple-700 hover:bg-purple-600' : 'bg-purple-500 hover:bg-purple-600'
                            } text-white`}
                          >
                            Decrypt
                          </button>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs opacity-70">
                            Note: This is a simple Caesar cipher with a shift of 3, for educational purposes only.
                          </p>
                        </div>
                      </div>
                      
                      {/* Password Generator */}
                      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h3 className="font-semibold mb-3">Password Generator</h3>
                        <div className="flex space-x-2 mb-3">
                          <button
                            onClick={() => setInputText(transform.randomPassword(8))}
                            className={`flex-1 py-2 rounded ${
                              theme === 'dark' ? 'bg-green-700 hover:bg-green-600' : 'bg-green-500 hover:bg-green-600'
                            } text-white`}
                          >
                            8 Chars
                          </button>
                          <button
                            onClick={() => setInputText(transform.randomPassword(12))}
                            className={`flex-1 py-2 rounded ${
                              theme === 'dark' ? 'bg-green-700 hover:bg-green-600' : 'bg-green-500 hover:bg-green-600'
                            } text-white`}
                          >
                            12 Chars
                          </button>
                          <button
                            onClick={() => setInputText(transform.randomPassword(16))}
                            className={`flex-1 py-2 rounded ${
                              theme === 'dark' ? 'bg-green-700 hover:bg-green-600' : 'bg-green-500 hover:bg-green-600'
                            } text-white`}
                          >
                            16 Chars
                          </button>
                        </div>
                        <div className="text-xs opacity-70">
                          <p>Generates secure random passwords with letters, numbers, and symbols.</p>
                        </div>
                      </div>
                      
                      {/* Export Options */}
                      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h3 className="font-semibold mb-3">Export Options</h3>
                        <div className="space-y-2">
                          <button
                            onClick={() => exportToFile(inputText, 'txt')}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Export as TXT
                          </button>
                          <button
                            onClick={() => exportToFile(inputText, 'json')}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Export as JSON
                          </button>
                          <button
                            onClick={() => exportToFile(inputText, 'html')}
                            className={`w-full py-2 rounded ${
                              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          >
                            Export as HTML
                          </button>
                        </div>
                      </div>
                      
                      {/* QR Code Generator */}
                      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h3 className="font-semibold mb-3">QR Code Generator</h3>
                        <p className="text-sm mb-3 opacity-80">
                          Convert your text to a scannable QR code, perfect for sharing links or information.
                        </p>
                        <button
                          onClick={() => generateQRCode(inputText)}
                          className={`w-full py-2 rounded ${
                            theme === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
                          } text-white`}
                        >
                          Generate QR Code
                        </button>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Saved Items Tab */}
                {activeTab === 'saved' && (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Saved Items</h2>
                      {savedItems.length > 0 && (
                        <button 
                          onClick={() => setSavedItems([])}
                          className={`text-sm px-3 py-1 rounded ${
                            theme === 'dark' ? 'bg-red-700 hover:bg-red-600' : 'bg-red-500 hover:bg-red-600'
                          } text-white`}
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                    
                    {savedItems.length === 0 ? (
                      <div className={`p-8 text-center rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="mb-3 opacity-70">No saved items yet</p>
                        <p className="text-sm">
                          As you use the tool, you can save your transformed text for later use.
                          Click the &quot;Save&quot; button next to any transformation to save it here.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {savedItems.map((item) => (
                          <div key={item.id} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                                }`}>
                                  {item.style}
                                </span>
                                <span className="ml-2 text-xs opacity-60">
                                  {new Date(item.timestamp).toLocaleString()}
                                </span>
                              </div>
                              <button 
                                onClick={() => setSavedItems(prev => prev.filter(i => i.id !== item.id))}
                                className="text-red-500 hover:text-red-700"
                              >
                                ✕
                              </button>
                            </div>
                            <div className={`p-3 rounded ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} mb-2`}>
                              {item.text}
                            </div>
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => copyText(item.text)}
                                className={`px-3 py-1 rounded ${
                                  theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                                } text-white`}
                              >
                                Copy
                              </button>
                              <button
                                onClick={() => setInputText(item.text)}
                                className={`px-3 py-1 rounded ${
                                  theme === 'dark' 
                                    ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                                    : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                                }`}
                              >
                                Load
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Style Combination Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`rounded-lg shadow-xl max-w-md w-full p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-4">Create Custom Style Combination</h3>
            <div className="mb-4">
              <label className="block text-sm mb-1">Combination Name</label>
              <input 
                type="text" 
                value={newCombinationName} 
                onChange={(e) => setNewCombinationName(e.target.value)}
                placeholder="E.g., Bold + Italics"
                className={`w-full p-2 border rounded ${
                  theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                }`}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Select Transformations (in order)</label>
              <div className={`p-3 border rounded max-h-40 overflow-y-auto ${
                theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
              }`}>
                {Object.keys(transform).map((key) => (
                  <div key={key} className="mb-1 last:mb-0">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedTransforms.includes(key)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedTransforms([...selectedTransforms, key]);
                          } else {
                            setSelectedTransforms(selectedTransforms.filter(t => t !== key));
                          }
                        }}
                        className="mr-2"
                      />
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowSaveModal(false)}
                className={`px-4 py-2 rounded ${
                  theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={saveCustomCombination}
                className={`px-4 py-2 rounded ${
                  theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
              >
                Save Combination
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Toast */}
      {showFeedback && (
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-md shadow-lg ${
          theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'
        } text-white z-50`}>
          {feedbackMessage}
        </div>
      )}

      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">QR码</h3>
            <div className="flex justify-center mb-4">
              <QRCodeSVG 
                value={qrCodeText} 
                size={250}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
              />
            </div>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  const svg = document.querySelector('svg') as SVGElement;
                  if (svg) {
                    const svgData = new XMLSerializer().serializeToString(svg);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const img = new Image();
                    img.onload = () => {
                      canvas.width = img.width;
                      canvas.height = img.height;
                      ctx?.drawImage(img, 0, 0);
                      const pngFile = canvas.toDataURL('image/png');
                      const downloadLink = document.createElement('a');
                      downloadLink.download = `qrcode-${new Date().getTime()}.png`;
                      downloadLink.href = pngFile;
                      downloadLink.click();
                    };
                    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
                  }
                }}
              >
                下载PNG
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setShowQRModal(false)}
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}