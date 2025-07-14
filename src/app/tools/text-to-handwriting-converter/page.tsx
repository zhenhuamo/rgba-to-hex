'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
import { 
  convertTextToHandwriting,
  HANDWRITING_STYLES,
  PAPER_STYLES,
  getHandwritingExamples,
  validateText,
  HandwritingStyle,
  PaperStyle,
  HandwritingOptions,
  ConversionResult
} from '@/utils/handwritingConverter';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

// Main converter component
const TextToHandwritingConverter = () => {
  const [mounted, setMounted] = useState(false);
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [text, setText] = useState('Hello World!\nThis is a sample handwritten text.');
  const [selectedStyle, setSelectedStyle] = useState<HandwritingStyle>(HANDWRITING_STYLES[0]);
  const [selectedPaper, setSelectedPaper] = useState<PaperStyle>(PAPER_STYLES[1]); // lined paper
  const [canvasSize, setCanvasSize] = useState({ width: 1000, height: 700 });
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1.0);
  const [isConverting, setIsConverting] = useState(false);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string>('');
  
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  // Handle URL parameters and embedding
  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const isEmbed = params.get('embed') === 'true';
    const defaultText = params.get('defaultText');
    
    setIsEmbedded(isEmbed);
    if (defaultText) {
      setText(decodeURIComponent(defaultText));
    }
  }, []);

  // Convert text to handwriting
  const handleConvert = async () => {
    const validation = validateText(text);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid text');
      return;
    }

    setIsConverting(true);
    setError('');

    try {
      // Create a modified style with adjusted font size
      const adjustedStyle = {
        ...selectedStyle,
        fontSize: Math.round(selectedStyle.fontSize * fontSizeMultiplier)
      };



      const options: HandwritingOptions = {
        style: adjustedStyle,
        paper: selectedPaper,
        canvasWidth: canvasSize.width,
        canvasHeight: canvasSize.height,
        padding: 40,
        quality: 0.9
      };

      const conversionResult = await convertTextToHandwriting(text, options);
      setResult(conversionResult);

      if (!conversionResult.success) {
        setError(conversionResult.error || 'Conversion failed');
      }
    } catch (err) {
      setError('An unexpected error occurred during conversion');
      console.error('Conversion error:', err);
    } finally {
      setIsConverting(false);
    }
  };

  // Auto-convert when parameters change
  useEffect(() => {
    if (mounted && text.trim()) {
      const timeoutId = setTimeout(() => {
        handleConvert();
      }, 200); // 减少延迟，让字体大小变化更快响应
      return () => clearTimeout(timeoutId);
    }
  }, [text, selectedStyle, selectedPaper, canvasSize, fontSizeMultiplier, mounted]);

  // Download result
  const handleDownload = () => {
    if (result?.dataUrl && downloadLinkRef.current) {
      downloadLinkRef.current.href = result.dataUrl;
      downloadLinkRef.current.download = `handwriting-${Date.now()}.png`;
      downloadLinkRef.current.click();
    }
  };

  // Copy to clipboard
  const handleCopyImage = async () => {
    if (result?.dataUrl) {
      try {
        const response = await fetch(result.dataUrl);
        const blob = await response.blob();
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        alert('Image copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy image:', err);
        alert('Failed to copy image to clipboard');
      }
    }
  };

  // Load example text
  const loadExample = (exampleText: string) => {
    setText(exampleText);
  };

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 ${isEmbedded ? 'p-4' : 'p-6'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header - only show in standalone mode */}
        {!isEmbedded && (
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Image 
                  src="/rgb.svg" 
                  alt="Text to Handwriting Converter" 
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Text to Handwriting Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Transform your typed text into beautiful handwritten styles with customizable fonts and paper types.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="space-y-6">
            {/* Text Input */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Enter Your Text
              </h2>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your text here..."
                className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                maxLength={5000}
              />
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{text.length}/5000 characters</span>
                {error && <span className="text-red-500">{error}</span>}
              </div>
            </div>

            {/* Quick Examples */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Quick Examples
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {getHandwritingExamples().map((example, index) => (
                  <button
                    key={index}
                    onClick={() => loadExample(example.text)}
                    className="p-3 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    <div className="font-medium text-gray-800 dark:text-white capitalize">
                      {example.category}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 truncate">
                      {example.text.split('\n')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Style and Paper Selection Combined */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Handwriting Style
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {HANDWRITING_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style)}
                    className={`p-3 text-left rounded-lg border-2 transition-all ${
                      selectedStyle.id === style.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-white text-sm">
                          {style.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">
                          {style.description}
                        </div>
                      </div>
                      <div
                        className="text-lg"
                        style={{
                          fontFamily: style.fontFamily,
                          color: style.color,
                          letterSpacing: `${style.letterSpacing}px`,
                          fontSize: `${Math.max(16, style.fontSize * 0.5)}px`
                        }}
                      >
                        Abc
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-4 mt-6 text-gray-800 dark:text-white">
                Paper Style
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {PAPER_STYLES.map((paper) => (
                  <button
                    key={paper.id}
                    onClick={() => setSelectedPaper(paper)}
                    className={`p-3 text-left rounded-lg border-2 transition-all ${
                      selectedPaper.id === paper.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="font-semibold text-gray-800 dark:text-white text-sm">
                      {paper.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      {paper.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>


          </div>

          {/* Output Panel */}
          <div className="space-y-6">
            {/* Preview */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Handwriting Preview
                </h2>
                {isConverting && <LoadingSpinner />}
              </div>

              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 min-h-[400px] bg-gray-50 dark:bg-gray-700">
                {result?.success && result.dataUrl ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={result.dataUrl}
                      alt="Handwritten text preview"
                      className="max-w-full h-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
                      style={{
                        maxHeight: '400px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-lg font-medium mb-2">Your handwritten text will appear here</p>
                      <p className="text-sm opacity-75">Enter text and select a style to see the preview</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              {result?.success && result.dataUrl && (
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button
                    onClick={handleDownload}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PNG
                  </button>
                  <button
                    onClick={handleCopyImage}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Image
                  </button>
                </div>
              )}
            </div>

            {/* Stats and Settings */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Settings & Stats
              </h3>

              {/* Font Size Control */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Font Size: {Math.round(selectedStyle.fontSize * fontSizeMultiplier)}px (Base: {selectedStyle.fontSize}px × {fontSizeMultiplier.toFixed(1)})
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={fontSizeMultiplier}
                  onChange={(e) => setFontSizeMultiplier(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0.5x ({Math.round(selectedStyle.fontSize * 0.5)}px)</span>
                  <span>1.0x ({selectedStyle.fontSize}px)</span>
                  <span>2.0x ({Math.round(selectedStyle.fontSize * 2.0)}px)</span>
                </div>
              </div>

              {/* Canvas Size Controls */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Width: {canvasSize.width}px
                  </label>
                  <input
                    type="range"
                    min="600"
                    max="1400"
                    value={canvasSize.width}
                    onChange={(e) => setCanvasSize(prev => ({ ...prev, width: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Height: {canvasSize.height}px
                  </label>
                  <input
                    type="range"
                    min="400"
                    max="1200"
                    value={canvasSize.height}
                    onChange={(e) => setCanvasSize(prev => ({ ...prev, height: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Stats */}
              {result?.stats && (
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Conversion Stats</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Characters:</span>
                      <div className="font-semibold text-gray-800 dark:text-white">{result.stats.characterCount}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Lines:</span>
                      <div className="font-semibold text-gray-800 dark:text-white">{result.stats.lineCount}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Time:</span>
                      <div className="font-semibold text-gray-800 dark:text-white">{result.stats.processingTime}ms</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tips and Help */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                💡 Tips & Tricks
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Try different handwriting styles to find the perfect look for your text</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Adjust font size for better readability and visual impact</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Choose lined paper for a more authentic notebook feel</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Use larger canvas sizes for longer texts or higher quality output</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Download as PNG for best quality or copy to clipboard for quick sharing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden download link */}
        <a ref={downloadLinkRef} className="hidden" />
      </div>
    </div>
  );
};

// Main page component
export default function TextToHandwritingConverterPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TextToHandwritingConverter />
    </Suspense>
  );
}
