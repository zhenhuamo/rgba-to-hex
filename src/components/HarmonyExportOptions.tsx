'use client';

import React, { useState } from 'react';
import { ColorHarmony, exportHarmonyToCSS, exportHarmonyToJSON, exportHarmonyToSass } from '@/utils/colorHarmony';

interface HarmonyExportOptionsProps {
  harmony: ColorHarmony;
  className?: string;
}

type ExportFormat = 'css' | 'sass' | 'json';

const HarmonyExportOptions: React.FC<HarmonyExportOptionsProps> = ({
  harmony,
  className = '',
}) => {
  const [exportFormat, setExportFormat] = useState<ExportFormat>('css');
  const [copied, setCopied] = useState(false);

  const getExportContent = (): string => {
    switch (exportFormat) {
      case 'css':
        return exportHarmonyToCSS(harmony);
      case 'sass':
        return exportHarmonyToSass(harmony);
      case 'json':
        return exportHarmonyToJSON(harmony);
      default:
        return '';
    }
  };

  const handleCopy = () => {
    const content = getExportContent();
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const exportContent = getExportContent();

  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Export Format
        </label>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              exportFormat === 'css'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
            onClick={() => setExportFormat('css')}
          >
            CSS Variables
          </button>
          <button
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              exportFormat === 'sass'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
            onClick={() => setExportFormat('sass')}
          >
            Sass Variables
          </button>
          <button
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              exportFormat === 'json'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
            onClick={() => setExportFormat('json')}
          >
            JSON
          </button>
        </div>
      </div>

      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-xs overflow-x-auto max-h-60 whitespace-pre-wrap">
          {exportContent}
        </pre>
        <button
          className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 py-1 text-xs"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default HarmonyExportOptions; 