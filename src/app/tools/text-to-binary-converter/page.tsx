'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  textToBinary, 
  binaryToText, 
  getCommonTextExamples, 
  getBinaryStats,
  CharacterDetail,
  BinaryChunkDetail
} from '@/utils/textConverter';

// File upload interfaces
interface FileUploadState {
  file: File | null;
  content: string;
  isLoading: boolean;
  error: string | null;
}

// File validation and processing functions
const ALLOWED_FILE_TYPES = ['.txt', '.log', '.json', '.csv', '.md'];
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

const validateFile = (file: File): string | null => {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return `File size (${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds maximum allowed size (2MB)`;
  }
  
  // Check file type
  const fileName = file.name.toLowerCase();
  const hasValidExtension = ALLOWED_FILE_TYPES.some(ext => fileName.endsWith(ext));
  
  if (!hasValidExtension) {
    return `File type not supported. Allowed types: ${ALLOWED_FILE_TYPES.join(', ')}`;
  }
  
  return null;
};

const readFileContent = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const content = event.target?.result as string;
      resolve(content);
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsText(file, 'UTF-8');
  });
};

// FileUpload component
const FileUpload = ({ onFileContent, disabled }: { 
  onFileContent: (content: string) => void; 
  disabled?: boolean;
}) => {
  const [fileState, setFileState] = useState<FileUploadState>({
    file: null,
    content: '',
    isLoading: false,
    error: null
  });
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = async (file: File) => {
    if (disabled) return;
    
    setFileState(prev => ({ ...prev, isLoading: true, error: null }));
    
    // Validate file
    const validationError = validateFile(file);
    if (validationError) {
      setFileState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: validationError 
      }));
      return;
    }
    
    try {
      const content = await readFileContent(file);
      setFileState({
        file,
        content,
        isLoading: false,
        error: null
      });
      onFileContent(content);
    } catch {
      setFileState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to read file content'
      }));
    }
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const clearFile = () => {
    setFileState({
      file: null,
      content: '',
      isLoading: false,
      error: null
    });
    onFileContent('');
  };

  return (
    <div className="space-y-3">
      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          border-2 border-dashed rounded-lg p-4 text-center transition-colors
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${isDragOver 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
          }
          ${fileState.error ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : ''}
        `}
      >
        <input
          type="file"
          accept={ALLOWED_FILE_TYPES.join(',')}
          onChange={handleFileInputChange}
          disabled={disabled || fileState.isLoading}
          className="hidden"
          id="file-upload"
        />
        
        {fileState.isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="m12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6z"></path>
            </svg>
            <span className="text-gray-600 dark:text-gray-400">Reading file...</span>
          </div>
        ) : fileState.file ? (
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-green-700 dark:text-green-400 font-medium">File uploaded successfully</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <div className="font-medium">{fileState.file.name}</div>
              <div>{(fileState.file.size / 1024).toFixed(1)} KB • {fileState.content.length} characters</div>
            </div>
            <button
              onClick={clearFile}
              className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              Remove file
            </button>
          </div>
        ) : (
          <label htmlFor="file-upload" className="block">
            <div className="space-y-2">
              <svg className="mx-auto h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Choose file</span>
                <span className="text-gray-600 dark:text-gray-400"> or drag and drop</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                TXT, LOG, JSON, CSV, MD (max 2MB)
              </div>
            </div>
          </label>
        )}
      </div>

      {/* Error Message */}
      {fileState.error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <span className="text-red-700 dark:text-red-400 text-sm">{fileState.error}</span>
        </div>
      )}

      {/* File Content Preview */}
      {fileState.file && fileState.content && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">File Preview:</div>
          <div className="text-sm text-gray-800 dark:text-gray-200 font-mono bg-white dark:bg-gray-800 p-2 rounded border max-h-24 overflow-y-auto">
            {fileState.content.slice(0, 200)}
            {fileState.content.length > 200 && '...'}
          </div>
        </div>
      )}
    </div>
  );
};

// TextInput component
const TextInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const handleInput = (val: string) => {
    onChange(val);
  };

  const handleFileContent = (content: string) => {
    onChange(content);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">
          Text Input
        </label>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {value.length} characters
        </div>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 resize-none"
        placeholder="Enter text to convert to binary..."
        rows={4}
        spellCheck="false"
        autoComplete="off"
      />

      {/* File Upload Section */}
      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Upload Text File:</span>
        </div>
        <FileUpload onFileContent={handleFileContent} />
      </div>

      {/* Text Examples Section */}
      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Common Text Examples:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {getCommonTextExamples().slice(0, 8).map((example, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 transition-colors"
              onClick={() => onChange(example.text)}
              title={`${example.description} (${example.category})`}
            >
              {example.text}
            </button>
          ))}
          <button
            className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-md transition-colors"
            onClick={() => {
              const randomTexts = ['Code', 'Data', 'Test', 'Debug', 'Binary', 'ASCII'];
              const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
              onChange(randomText);
            }}
            title="Random text example"
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

// BinaryInput component
const BinaryInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const stats = getBinaryStats(value);
  
  const handleInput = (val: string) => {
    onChange(val);
  };

  const handleFileContent = (content: string) => {
    // Clean the content to keep only binary characters and spaces
    const cleanedContent = content.replace(/[^01\s]/g, '').replace(/\s+/g, ' ').trim();
    onChange(cleanedContent);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">
          Binary Input
        </label>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {stats.totalBits} bits ({stats.totalBytes} bytes)
        </div>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 font-mono text-sm resize-none"
        placeholder="Enter binary code to convert to text..."
        rows={4}
        spellCheck="false"
        autoComplete="off"
      />
      
      {value && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <div className="font-semibold">Total Bits</div>
            <div className="text-blue-600 dark:text-blue-400">{stats.totalBits}</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <div className="font-semibold">Bytes</div>
            <div className="text-green-600 dark:text-green-400">{stats.totalBytes}</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <div className="font-semibold">Ones</div>
            <div className="text-purple-600 dark:text-purple-400">{stats.ones}</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <div className="font-semibold">Zeros</div>
            <div className="text-orange-600 dark:text-orange-400">{stats.zeros}</div>
          </div>
        </div>
      )}

      {/* File Upload Section */}
      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Upload Binary File:</span>
          <span className="text-xs text-gray-500 dark:text-gray-500">Non-binary characters will be filtered</span>
        </div>
        <FileUpload onFileContent={handleFileContent} />
      </div>
    </div>
  );
};

// BinaryOutput component
const BinaryOutput = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const result = textToBinary(text);
  
  const copyValue = async () => {
    if (result.isValid && result.binary) {
      try {
        await navigator.clipboard.writeText(result.binary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  if (!text) {
    return (
      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">Enter text to see the binary conversion result</p>
      </div>
    );
  }

  if (!result.isValid) {
    return (
      <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <span className="text-red-700 dark:text-red-400 font-medium">Conversion Error</span>
        </div>
        <p className="text-red-600 dark:text-red-300">{result.error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Binary Result</span>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Text to Binary
          </div>
        </div>
        <div className="flex">
          <textarea
            value={result.binary}
            readOnly
            className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-l-lg font-mono text-sm focus:outline-none resize-none"
            rows={3}
          />
          <button
            onClick={copyValue}
            className={`px-6 py-3 ${copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-2`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Character Details */}
      {result.details && result.details.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Character Analysis</h3>
          <div className="max-h-80 overflow-y-auto border border-gray-200 dark:border-gray-600 rounded-lg">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-50 dark:bg-gray-700 z-10">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left p-2 font-semibold">Character</th>
                  <th className="text-left p-2 font-semibold">ASCII</th>
                  <th className="text-left p-2 font-semibold">Binary</th>
                  <th className="text-left p-2 font-semibold">Hex</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {result.details.map((detail: CharacterDetail, index: number) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/50 transition-colors">
                    <td className="p-2 font-mono font-bold text-blue-600 dark:text-blue-400">
                      {detail.char === ' ' ? 'SPC' : detail.char}
                    </td>
                    <td className="p-2 font-mono">{detail.ascii}</td>
                    <td className="p-2 font-mono text-green-600 dark:text-green-400">{detail.binary}</td>
                    <td className="p-2 font-mono text-purple-600 dark:text-purple-400">{detail.hex}</td>
                    <td className="p-2 text-gray-600 dark:text-gray-400">{detail.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {result.details.length > 10 && (
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
              Showing {result.details.length} characters • Scroll to view all
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// TextOutput component
const TextOutput = ({ binary }: { binary: string }) => {
  const [copied, setCopied] = useState(false);
  const result = binaryToText(binary);
  
  const copyValue = async () => {
    if (result.isValid && result.text) {
      try {
        await navigator.clipboard.writeText(result.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  if (!binary) {
    return (
      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">Enter binary code to see the text conversion result</p>
      </div>
    );
  }

  if (!result.isValid) {
    return (
      <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <span className="text-red-700 dark:text-red-400 font-medium">Conversion Error</span>
        </div>
        <p className="text-red-600 dark:text-red-300">{result.error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Text Result</span>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Binary to Text
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            value={result.text}
            readOnly
            className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-l-lg text-lg focus:outline-none"
          />
          <button
            onClick={copyValue}
            className={`px-6 py-3 ${copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-2`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Binary Chunk Details */}
      {result.details && result.details.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl p-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Binary Chunk Analysis</h3>
          <div className="max-h-80 overflow-y-auto border border-gray-200 dark:border-gray-600 rounded-lg">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-50 dark:bg-gray-700 z-10">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left p-2 font-semibold">Binary Chunk</th>
                  <th className="text-left p-2 font-semibold">ASCII</th>
                  <th className="text-left p-2 font-semibold">Character</th>
                  <th className="text-left p-2 font-semibold">Hex</th>
                </tr>
              </thead>
              <tbody>
                {result.details.map((detail: BinaryChunkDetail, index: number) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/50 transition-colors">
                    <td className="p-2 font-mono text-blue-600 dark:text-blue-400">{detail.binary}</td>
                    <td className="p-2 font-mono">{detail.ascii}</td>
                    <td className="p-2 font-mono font-bold text-green-600 dark:text-green-400">
                      {detail.char === ' ' ? 'SPC' : detail.char}
                    </td>
                    <td className="p-2 font-mono text-purple-600 dark:text-purple-400">{detail.hex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {result.details.length > 10 && (
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
              Showing {result.details.length} chunks • Scroll to view all
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SearchParamsWrapper = ({ onParamsLoaded }: { onParamsLoaded: (params: { isEmbedded: boolean, defaultText: string }) => void }) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const isEmbedded = searchParams.get('embed') === 'true';
    const defaultText = searchParams.get('defaultText') || '';
    onParamsLoaded({ isEmbedded, defaultText });
  }, [searchParams, onParamsLoaded]);
  
  return null;
};

export default function TextToBinaryConverter() {
  const [mode, setMode] = useState<'text-to-binary' | 'binary-to-text'>('text-to-binary');
  const [textValue, setTextValue] = useState('');
  const [binaryValue, setBinaryValue] = useState('');
  const [isEmbedded, setIsEmbedded] = useState(false);

  const handleParamsLoaded = ({ isEmbedded, defaultText }: { isEmbedded: boolean, defaultText: string }) => {
    setIsEmbedded(isEmbedded);
    if (defaultText) {
      setTextValue(defaultText);
    }
  };

  const shareConverter = async () => {
    const url = window.location.origin + '/tools/text-to-binary-converter';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Binary to Text & Text to Binary Converter',
          text: 'Convert text to binary and binary to text with file upload support - Free online tool',
          url: url
        });
      } catch {
        copyLink(url);
      }
    } else {
      copyLink(url);
    }
  };

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      // Could add a toast notification here
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const clearAll = () => {
    setTextValue('');
    setBinaryValue('');
    // Force re-render to clear file upload components
    setMode(mode === 'text-to-binary' ? 'binary-to-text' : 'text-to-binary');
    setTimeout(() => {
      setMode(mode === 'text-to-binary' ? 'text-to-binary' : 'binary-to-text');
    }, 0);
  };

  return (
    <div className={`min-h-screen ${isEmbedded ? 'bg-transparent' : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsWrapper onParamsLoaded={handleParamsLoaded} />
      </Suspense>

      <div className={`${isEmbedded ? 'p-4' : 'container mx-auto px-4 py-12'}`}>
        {!isEmbedded && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              Binary to Text & Text to Binary Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Convert text to binary and binary to text instantly with character analysis and file upload support
            </p>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          {/* Mode Switcher */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-1 flex">
              <button
                onClick={() => setMode('text-to-binary')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  mode === 'text-to-binary'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                }`}
              >
                Text → Binary
              </button>
              <button
                onClick={() => setMode('binary-to-text')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  mode === 'binary-to-text'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                }`}
              >
                Binary → Text
              </button>
            </div>
          </div>

          {/* Converter Interface */}
          <div className="grid md:grid-cols-2 gap-8">
            {mode === 'text-to-binary' ? (
              <>
                <div>
                  <TextInput value={textValue} onChange={setTextValue} />
                </div>
                <div>
                  <BinaryOutput text={textValue} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <BinaryInput value={binaryValue} onChange={setBinaryValue} />
                </div>
                <div>
                  <TextOutput binary={binaryValue} />
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={clearAll}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear All
            </button>
            
            {!isEmbedded && (
              <button
                onClick={shareConverter}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share Tool
              </button>
            )}
          </div>

          {!isEmbedded && (
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Need more conversion tools? Check out our other binary converters with file support:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/tools/binary-to-decimal"
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  Binary to Decimal
                </a>
                <a
                  href="/tools/ascii-converter"
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                >
                  ASCII Converter
                </a>
                <a
                  href="/tools/hex-to-binary"
                  className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                >
                  Hex to Binary
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 