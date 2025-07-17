'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

export default function EyeDropperEmbedPage() {
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [showEmbedCode, setShowEmbedCode] = useState(true);
  
  // Get current domain on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      setBaseUrl(origin);
    }
  }, []);
  
  // Build iframe src
  const iframeSrc = baseUrl ? `${baseUrl}/tools/eyedropper-tool` : '';
  
  // Example embed code
  const embedCode = `<iframe 
  src="${iframeSrc}"
  width="100%" 
  height="800" 
  style="border:none;border-radius:12px;overflow:auto;"
  title="EyeDropper Tool - Online Color Picker"
  loading="lazy"
  allowfullscreen
></iframe>`;

  // Copy embed code to clipboard
  const copyEmbedCode = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      toast.success('Embed code copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy embed code:', error);
      toast.error('Failed to copy embed code');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Toaster position="top-right" richColors />
      
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Embed EyeDropper Tool
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Add our professional eyedropper tool to your website with a simple iframe embed. 
              Perfect for design tools, color resources, and developer documentation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Tool Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Tool Preview
                </h2>
                <div className="flex items-center gap-4">
                  <a
                    href={iframeSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Open Full Tool
                  </a>
                  <button
                    onClick={() => setShowEmbedCode(!showEmbedCode)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-lg transition-colors duration-200"
                  >
                    {showEmbedCode ? 'Hide' : 'Show'} Embed Code
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8">
              {/* Iframe with scrollbar */}
              <div className="w-full rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="w-full h-[800px] overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                  <iframe 
                    src={`${iframeSrc}?embed=true`}
                    className="w-full border-none"
                    height="1000"
                    title="EyeDropper Tool"
                    loading="lazy"
                    style={{ 
                      height: '1000px',
                      minWidth: '100%'
                    }}
                  />
                </div>
              </div>
              
              {showEmbedCode && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-4">
                  <h2 className="text-xl font-bold mb-4">Embed This EyeDropper Tool On Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You can easily add this <strong>EyeDropper Tool</strong> to your own website by copying the code below:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{embedCode}</code>
                    </pre>
                    <button
                      onClick={copyEmbedCode}
                      className="absolute top-3 right-3 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Embed Our EyeDropper Tool?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Professional Quality
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  High-quality eyedropper tool with native browser API integration
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Easy Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Simple iframe embed - just copy and paste the code
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Multiple Formats
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Supports HEX, RGB, HSL, and OKLCH color formats
                </p>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Customization Options
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Iframe Dimensions
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You can customize the width and height of the embedded tool:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <code className="text-sm">
                    width=&quot;100%&quot; height=&quot;800&quot; {/* Recommended */}<br/>
                    width=&quot;800&quot; height=&quot;600&quot; {/* Fixed size */}<br/>
                    width=&quot;100%&quot; height=&quot;100vh&quot; {/* Full viewport height */}
                  </code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Styling Options
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Customize the appearance with CSS styles:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <code className="text-sm">
                    style=&quot;border:none;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);&quot;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
