"use client"
import { useState, useEffect } from 'react';
import { enhancedTextTools } from './enhanced-text-tools';

// 增强型Emoji工具组件
export const EnhancedEmojiTool = ({ 
  text, 
  onCopy, 
  onSave 
}: { 
  text: string; 
  onCopy: (text: string) => void; 
  onSave: (text: string) => void; 
}) => {
  const [density, setDensity] = useState<number>(2);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [emojifiedText, setEmojifiedText] = useState<string>('');
  
  useEffect(() => {
    // 应用增强型emoji
    setEmojifiedText(enhancedTextTools.emojify(text, density));
  }, [text, density]);
  
  return (
    <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 mb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Emojify Your Text</h3>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="text-sm px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          {showSettings ? 'Hide Settings' : 'Show Settings'}
        </button>
      </div>
      
      {showSettings && (
        <div className="mb-3">
          <label className="block text-sm mb-1">Emoji Density</label>
          <input 
            type="range" 
            min="0" 
            max="5" 
            step="0.5"
            value={density} 
            onChange={(e) => setDensity(parseFloat(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs">
            <span>None</span>
            <span>Subtle</span>
            <span>Maximum</span>
          </div>
        </div>
      )}
      
      <div className="p-3 rounded bg-white dark:bg-gray-800 mb-3 whitespace-pre-wrap break-words">
        {emojifiedText}
      </div>
      
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onCopy(emojifiedText)}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Copy
        </button>
        <button
          onClick={() => onSave(emojifiedText)}
          className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

// 增强型文本装饰工具组件
export const EnhancedTextDecorator = ({ 
  text, 
  onCopy, 
  onSave 
}: { 
  text: string; 
  onCopy: (text: string) => void; 
  onSave: (text: string) => void; 
}) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [borderStyle, setBorderStyle] = useState<string>('none');
  const [backgroundStyle, setBackgroundStyle] = useState<string>('none');
  const [textEffect, setTextEffect] = useState<string>('normal');
  const [decoratedText, setDecoratedText] = useState<string>('');
  
  // 样式列表
  const { borders, backgrounds, textEffects } = enhancedTextTools.styles;
  
  useEffect(() => {
    // 应用文本装饰
    setDecoratedText(enhancedTextTools.decorate(text, borderStyle, backgroundStyle, textEffect));
  }, [text, borderStyle, backgroundStyle, textEffect]);
  
  return (
    <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 mb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Decorate Your Text</h3>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="text-sm px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          {showSettings ? 'Hide Settings' : 'Show Settings'}
        </button>
      </div>
      
      {showSettings && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div>
            <label className="block text-sm mb-1">Border Style</label>
            <select
              value={borderStyle}
              onChange={(e) => setBorderStyle(e.target.value)}
              className="w-full p-2 rounded text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
            >
              {borders.map(style => (
                <option key={style.id} value={style.id}>{style.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Background Style</label>
            <select
              value={backgroundStyle}
              onChange={(e) => setBackgroundStyle(e.target.value)}
              className="w-full p-2 rounded text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
            >
              {backgrounds.map(style => (
                <option key={style.id} value={style.id}>{style.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Text Effect</label>
            <select
              value={textEffect}
              onChange={(e) => setTextEffect(e.target.value)}
              className="w-full p-2 rounded text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
            >
              {textEffects.map(effect => (
                <option key={effect.id} value={effect.id}>{effect.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      
      <div className="p-3 rounded bg-white dark:bg-gray-800 mb-3 whitespace-pre-wrap break-words font-mono">
        {decoratedText}
      </div>
      
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onCopy(decoratedText)}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Copy
        </button>
        <button
          onClick={() => onSave(decoratedText)}
          className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

// 样式预览组件
export const StylePreviewGrid = ({ 
  text, 
  onSelect, 
  styleType 
}: { 
  text: string; 
  onSelect: (styleId: string) => void; 
  styleType: 'borders' | 'backgrounds' | 'textEffects';
}) => {
  const styles = enhancedTextTools.styles[styleType];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
      {styles.map(style => (
        <div 
          key={style.id}
          onClick={() => onSelect(style.id)}
          className="p-2 border rounded cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-center"
        >
          <div className="font-medium text-sm mb-1">{style.name}</div>
          <div className="text-xs opacity-70 h-8 overflow-hidden">{style.description}</div>
          <div className="mt-2 p-1 bg-white dark:bg-gray-800 rounded text-xs overflow-hidden whitespace-nowrap overflow-ellipsis">
            {styleType === 'borders' && enhancedTextTools.decorate(text.slice(0, 10), style.id, 'none', 'normal')}
            {styleType === 'backgrounds' && enhancedTextTools.decorate(text.slice(0, 10), 'none', style.id, 'normal')}
            {styleType === 'textEffects' && enhancedTextTools.decorate(text.slice(0, 10), 'none', 'none', style.id)}
          </div>
        </div>
      ))}
    </div>
  );
};

// 实时预览选项组件
export const LivePreviewOptions = ({ 
  text,
  onApply,
  currentType,
  setCurrentType
}: { 
  text: string; 
  onApply: (type: string, styleId: string) => void;
  currentType: string;
  setCurrentType: (type: string) => void;
}) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [selectedBorder, setSelectedBorder] = useState<string>('none');
  const [selectedBackground, setSelectedBackground] = useState<string>('none');
  const [selectedTextEffect, setSelectedTextEffect] = useState<string>('normal');
  /* eslint-enable @typescript-eslint/no-unused-vars */
  
  // 处理样式选择
  const handleSelect = (styleId: string) => {
    switch (currentType) {
      case 'borders':
        setSelectedBorder(styleId);
        onApply('borders', styleId);
        break;
      case 'backgrounds':
        setSelectedBackground(styleId);
        onApply('backgrounds', styleId);
        break;
      case 'textEffects':
        setSelectedTextEffect(styleId);
        onApply('textEffects', styleId);
        break;
    }
  };
  
  return (
    <div className="mt-4">
      <div className="flex mb-4 space-x-1 border-b dark:border-gray-700">
        <button
          onClick={() => setCurrentType('borders')}
          className={`px-3 py-2 ${
            currentType === 'borders' 
              ? 'border-b-2 border-blue-500 font-medium' 
              : 'text-gray-500'
          }`}
        >
          Borders
        </button>
        <button
          onClick={() => setCurrentType('backgrounds')}
          className={`px-3 py-2 ${
            currentType === 'backgrounds' 
              ? 'border-b-2 border-blue-500 font-medium' 
              : 'text-gray-500'
          }`}
        >
          Backgrounds
        </button>
        <button
          onClick={() => setCurrentType('textEffects')}
          className={`px-3 py-2 ${
            currentType === 'textEffects' 
              ? 'border-b-2 border-blue-500 font-medium' 
              : 'text-gray-500'
          }`}
        >
          Text Effects
        </button>
      </div>
      
      <StylePreviewGrid 
        text={text} 
        onSelect={handleSelect} 
        styleType={currentType as 'borders' | 'backgrounds' | 'textEffects'} 
      />
    </div>
  );
};

// 主要集成组件 - 可集成到现有文本工具箱中
export const EnhancedCreativeTools = ({
  inputText,
  copyText,
  saveCurrentText,
  theme
}: {
  inputText: string;
  copyText: (text: string) => void;
  saveCurrentText: (styleName: string) => void;
  theme: string;
}) => {
  const [currentPreviewType, setCurrentPreviewType] = useState<string>('borders');
  const [showLivePreview, setShowLivePreview] = useState<boolean>(false);
  
  // 处理样式应用
  const handleApplyStyle = (type: string, styleId: string) => {
    // 这里可以实现应用样式的逻辑
    console.log(`Applied ${type} style: ${styleId}`);
  };
  
  return (
    <div className="space-y-4">
      <EnhancedEmojiTool 
        text={inputText} 
        onCopy={copyText} 
        onSave={() => saveCurrentText('Emojified')} 
      />
      
      <EnhancedTextDecorator 
        text={inputText} 
        onCopy={copyText} 
        onSave={() => saveCurrentText('Decorated')} 
      />
      
      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Style Explorer</h3>
          <button
            onClick={() => setShowLivePreview(!showLivePreview)}
            className={`text-sm px-3 py-1 rounded ${
              theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {showLivePreview ? 'Hide Preview Gallery' : 'Show Preview Gallery'}
          </button>
        </div>
        
        <p className="text-sm opacity-80 mb-2">
          Explore different styles and effects to find the perfect look for your text.
        </p>
        
        {showLivePreview && (
          <LivePreviewOptions 
            text={inputText}
            onApply={handleApplyStyle}
            currentType={currentPreviewType}
            setCurrentType={setCurrentPreviewType}
          />
        )}
      </div>
    </div>
  );
};