'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ToolLauncherProps {
  toolName: string;
  toolUrl: string;
  description: string;
  previewImage?: string;
  features?: string[];
}

export default function ToolLauncher({ 
  toolName, 
  toolUrl, 
  description, 
  previewImage,
  features = []
}: ToolLauncherProps) {
  const [isHovered, setIsHovered] = useState(false);

  // 打开新窗口的函数
  const openToolInNewWindow = () => {
    const width = 1200;
    const height = 800;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    const windowFeatures = `
      width=${width},
      height=${height},
      left=${left},
      top=${top},
      resizable=yes,
      scrollbars=yes,
      toolbar=no,
      menubar=no,
      location=no,
      status=no
    `.replace(/\s/g, '');

    window.open(toolUrl, '_blank', windowFeatures);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Interactive {toolName}
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        {description}
      </p>

      {/* 工具预览区域 */}
      <div 
        className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 mb-8 cursor-pointer transition-all duration-300 hover:shadow-xl group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openToolInNewWindow}
      >
        {/* 预览内容 */}
        <div className="text-center">
          {previewImage ? (
            <img 
              src={previewImage} 
              alt={`${toolName} Preview`}
              className="mx-auto mb-6 rounded-lg shadow-md max-w-full h-auto"
            />
          ) : (
            <div className="w-full h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-6 group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
                <h3 className="text-2xl font-bold">{toolName}</h3>
                <p className="text-lg opacity-90">点击启动工具</p>
              </div>
            </div>
          )}

          {/* 功能特性列表 */}
          {features.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* 启动按钮 */}
          <div className={`transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}>
            <button
              onClick={openToolInNewWindow}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              在新窗口中启动 {toolName}
            </button>
          </div>

          {/* 提示文本 */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            工具将在新窗口中打开，方便您同时查看文档和使用工具
          </p>
        </div>

        {/* 悬停效果覆盖层 */}
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* 备用链接 */}
      <div className="text-center">
        <Link 
          href={toolUrl}
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          或者在当前页面中打开工具
        </Link>
      </div>
    </div>
  );
}
