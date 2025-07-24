'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorData } from '../types/color';
import { getColorValue } from '../utils/blueColorUtils';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

interface ColorCardProps {
  color: ColorData;
  onSelect?: (color: ColorData) => void;
  size?: 'small' | 'medium' | 'large';
  showDetails?: boolean;
  showNameBelow?: boolean; // 新增：是否在卡片下方显示名称
}

export function ColorCard({
  color,
  onSelect,
  size = 'medium',
  showDetails = true,
  showNameBelow = false
}: ColorCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = async (e: React.MouseEvent, format: string = 'hex') => {
    e.stopPropagation();
    const value = getColorValue(color, format);
    const success = await copyToClipboard(value);
    
    if (success) {
      // 可以添加成功反馈
      console.log(`Copied ${format}: ${value}`);
    }
  };

  const handleCardClick = () => {
    onSelect?.(color);
  };

  const cardSizes = {
    small: 'w-32 h-24',
    medium: 'w-40 h-32',
    large: 'w-48 h-40'
  };

  const textSizes = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };



  return (
    <div className="flex flex-col">
      <motion.div
        className={`${cardSizes[size]} bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer group relative`}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleCardClick}
        layout
      >
        {/* 颜色块区域 */}
        <div
          className={`${showNameBelow ? 'h-4/5' : 'h-2/3'} w-full relative overflow-hidden`}
          style={{ backgroundColor: color.hex }}
          role="img"
          aria-label={`${color.name} blue color with hex code ${color.hex}`}
          title={`${color.name} - ${color.hex} - ${color.category.displayName}`}
        >
        {/* 悬停时的操作按钮 */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
            >
              <motion.button
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => handleCopy(e, 'hex')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${textSizes[size]} ${
                  copied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white bg-opacity-90 text-gray-800 hover:bg-opacity-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? 'Copied!' : 'Copy HEX'}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 流行度指示器 */}
        {color.popularity && color.popularity > 3 && (
          <div className="absolute top-2 right-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
          </div>
        )}
      </div>
      
        {/* 信息区域 */}
        {showDetails && (
          <div className={`${showNameBelow ? 'h-1/5' : 'h-1/3'} p-3 flex ${showNameBelow ? 'flex-row items-center justify-between' : 'flex-col justify-center'} bg-white dark:bg-gray-800`}>
            {!showNameBelow && (
              <h3 className={`font-medium text-gray-900 dark:text-white truncate leading-normal min-h-[1.25rem] ${textSizes[size]}`}>
                {color.name}
              </h3>
            )}
            <div className={`flex items-center ${showNameBelow ? 'justify-between w-full' : 'justify-between mt-1'}`}>
              <p className={`text-gray-500 dark:text-gray-400 font-mono leading-normal ${
                size === 'small' ? 'text-xs' : 'text-xs'
              }`}>
                {color.hex.toUpperCase()}
              </p>
              {/* 分类标签 */}
              <span className={`px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full leading-normal ${
                size === 'small' ? 'text-xs' : 'text-xs'
              }`}>
                {color.category.displayName}
              </span>
            </div>
          </div>
        )}

      {/* 选中状态指示器 */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full shadow-md"
          />
        )}
      </AnimatePresence>
      </motion.div>

      {/* 卡片下方的颜色名称 */}
      {showNameBelow && (
        <div className="mt-2 text-center">
          <h3 className={`font-medium text-gray-900 dark:text-white truncate leading-normal ${textSizes[size]}`}>
            {color.name}
          </h3>
        </div>
      )}
    </div>
  );
}
