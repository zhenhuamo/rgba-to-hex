'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from '@/components/Navigation';

export default function ImageCropLandingPage() {
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [showEmbedCode, setShowEmbedCode] = useState(true);
  
  // Get current domain to build iframe src
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      setBaseUrl(origin);
    }
  }, []);

  // Build iframe src
  const iframeSrc = baseUrl ? `${baseUrl}/tools/image-crop-tool?embed=true` : '';
  
  // Example embed code
  const embedCode = `<iframe 
  src="${iframeSrc}"
  width="100%" 
  height="700" 
  style="border:none;border-radius:12px;overflow:auto;"
  title="Advanced Image Cropping Tool"
  loading="lazy"
  allowfullscreen
></iframe>`;

  // Copy embed code
  const copyEmbedCode = () => {
    if (navigator.clipboard && embedCode) {
      navigator.clipboard.writeText(embedCode)
        .then(() => {
          alert('Embed code copied to clipboard!');
        })
        .catch(err => {
          console.error('Copy failed:', err);
        });
    }
  };

  return (
    <>
      <Head>
        <title>Advanced Image Cropping Tool powered by react-easy-crop | rgbatohex.com</title>
        <meta name="description" content="Use our free online image cropping tool built with react-easy-crop to easily crop, resize, and rotate photos. Perfect for transparent backgrounds, custom aspect ratios, and more. Hosted on rgbatohex.com." />
        <meta name="keywords" content="react-easy-crop, image cropping tool, photo cropper, circular crop, crop picture online, image resizer, transparent background, aspect ratio, rotate image, resize image, rgbatohex.com" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-4">
          {/* Navigation */}
          <Navigation />

            {/* Title and description - Moved after tool */}
            <header className="max-w-6xl mx-auto mb-10 text-center mt-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                IC
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                Advanced Image Cropping Tool
              </h1>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Interactive</span>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Professional-grade image cropping with an easy-to-use interface, powered by react-easy-crop
            </p>
          </header>
          
          <div className="max-w-6xl mx-auto mb-16">
            {/* iframe embed - Moved to top */}
            <div className="w-full rounded-2xl shadow-xl overflow-hidden border border-indigo-100 dark:border-gray-700 mb-8 mt-4">
              <div className="w-full h-[700px] overflow-auto bg-white dark:bg-gray-800" style={{ scrollbarWidth: 'thin' }}>
                {iframeSrc && (
                  <iframe 
                    src={iframeSrc}
                    className="w-full border-none"
                    height="1000"
                    title="Image Cropping Tool"
                    loading="lazy"
                    style={{ 
                      height: '1000px',
                      minWidth: '100%',
                    }}
                  />
                )}
              </div>
            </div>
            
            <div className="flex justify-center mt-2 mb-6">
              <Link 
                href="/tools/image-crop-tool" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full font-medium hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </Link>
            </div>


            
            {/* Introduction Section */}
            <div className="max-w-6xl mx-auto mb-10">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-indigo-100 dark:border-indigo-900/30">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Welcome to <span className="font-medium text-indigo-600 dark:text-indigo-400">rgbatohex.com</span>&apos;s advanced image cropping tool. Our tool is built on the powerful <a href="#about-react-easy-crop" className="text-indigo-600 dark:text-indigo-400 hover:underline">react-easy-crop</a> library, which allows for precise image manipulation with features like rotation, resizing, and custom aspect ratios.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Whether you need to create a perfectly circular profile picture with a transparent background, resize an image for social media, or crop out specific details from your photos, our tool provides a simple yet powerful interface for all your image cropping needs.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">What is our Image Cropping Tool?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our Image Cropping Tool is a professional-grade, browser-based application that enables precise manipulation of digital images without requiring any downloads or installations. It offers a comprehensive solution for photographers, designers, content creators, and everyday users who need to transform their images with pixel-perfect accuracy.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Unlike basic cropping utilities found in many platforms, our tool combines simplicity with advanced functionality. The intuitive drag-and-drop interface makes it accessible for beginners, while the professional features satisfy the requirements of experienced designers who need precise control over their image outputs.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Why Choose Our Image Cropping Tool?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">Advanced Capabilities</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Beyond basic cropping, our tool offers rotation with precise angle control, zoom functionality, aspect ratio presets, and format conversion between PNG and JPEG. You can also customize output dimensions to exact pixel specifications.
                    </p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">Privacy-Focused</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      All image processing happens directly in your browser. We never upload your images to our servers, ensuring your visual content remains completely private and secure throughout the editing process.
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Common Applications</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our Image Cropping Tool solves numerous image editing challenges, including:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Creating perfectly sized social media profile pictures and post images</li>
                  <li>Preparing product photos with consistent dimensions for e-commerce platforms</li>
                  <li>Designing circular avatars with transparent backgrounds for profiles and applications</li>
                  <li>Extracting specific portions of larger images while maintaining quality</li>
                  <li>Adjusting images to meet specific aspect ratio requirements for different platforms</li>
                  <li>Removing unwanted elements from photos by precise cropping</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  Experience the perfect balance of simplicity and professional-grade functionality with our Image Cropping Tool, designed to make image editing accessible to everyone without sacrificing advanced features.
                </p>
              </div>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-indigo-100 dark:border-indigo-900/30">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Precise Cropping & Resizing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use our intuitive drag interface for pixel-perfect cropping and resizing that meets professional design requirements, powered by react-easy-crop&apos;s precise controls.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-indigo-100 dark:border-indigo-900/30">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Flexible Aspect Ratios</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose between rectangular and circular cropping with multiple aspect ratio options. Perfect for creating avatars with transparent backgrounds, product images, and social media content.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-indigo-100 dark:border-indigo-900/30">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Advanced Rotation & Features</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rotate your image, zoom in or out, preserve transparency, and choose from multiple output formats. Get your cropped images exactly as you need them with our comprehensive toolset.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-right mb-6">
              <button
                onClick={() => setShowEmbedCode(!showEmbedCode)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                {showEmbedCode ? 'Hide Embed Code' : 'Show Embed Code'}
              </button>
            </div>
            
            {showEmbedCode && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-4 mb-10">
                <h2 className="text-xl font-bold mb-4">Embed This Image Cropping Tool On Your Website</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You can easily add this <strong>Image Cropping Tool</strong> to your own website by copying the code below:
                </p>
                
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{embedCode}</code>
                  </pre>
                  <button
                    onClick={copyEmbedCode}
                    className="absolute top-3 right-3 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            )}
            
            {/* How to use guide */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 border border-indigo-100 dark:border-indigo-900/30">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">How to Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold mr-3">1</span>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white mb-1">Upload Image</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Click the `&quot;Choose Image`&quot; button to upload the image you want to crop.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold mr-3">2</span>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white mb-1">Adjust Crop Area</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Drag, resize, and rotate the crop box until you have your ideal cropping area.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold mr-3">3</span>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white mb-1">Set Advanced Options</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Adjust output format, quality, shape, and dimensions in the advanced options.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold mr-3">4</span>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white mb-1">Crop and Download</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Click the `&quot;Crop Image`&quot; button, then download your cropped result.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                  <h3 className="font-medium text-indigo-700 dark:text-indigo-300 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm text-indigo-600 dark:text-indigo-400">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Real-time preview of crop results
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Perfect circular cropping for avatars
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Multiple aspect ratios (1:1, 4:3, 16:9, 3:2)
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Image rotation and precise resizing
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      PNG and JPEG output formats
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Support for transparent backgrounds
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Precise output dimension control
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Easy extraction of cropped image data
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Frequently Asked Questions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 border border-indigo-100 dark:border-indigo-900/30">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">What image formats are supported?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our cropping tool supports all major image formats including JPEG, PNG, GIF, and WebP. You can upload any of these formats for cropping.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">How is the quality of cropped images?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Cropped images maintain the quality of the original. Our tool doesn&apos;t compress or reduce quality. You can also use the quality slider to balance file size and image quality as needed.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">How does circular cropping work?</h3>
                  <p className="text-gray-600 dark:text-gray-300">When you select circular cropping, the system automatically sets a 1:1 aspect ratio and applies a circular mask. This ensures you get a perfect circle, ideal for avatars and logo designs.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Can I rotate my images before cropping?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Yes, our tool includes rotation functionality powered by react-easy-crop&apos;s rotate feature. You can easily adjust the angle of your image before finalizing your crop to get the perfect orientation.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Does the tool support transparent backgrounds?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Yes, when using PNG output format, our tool preserves transparency in your images. This is perfect for creating profile pictures, logos, or product images that need to be placed on different colored backgrounds.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">How do I get specific aspect ratios for my crops?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our tool offers preset aspect ratios (1:1, 4:3, 16:9, 3:2) that you can select with a single click. This makes it easy to prepare images for specific platforms or devices that require particular dimensions.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Is my image data secure?</h3>
                  <p className="text-gray-600 dark:text-gray-300">All image processing is done in your browser. We don&apos;t upload or store your images on rgbatohex.com servers. Your image data remains completely private and secure throughout the cropping process.</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Can I embed this tool on my website?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Yes, we provide an embed code that allows you to easily add the image cropping tool to your own website. This is particularly useful for sites where users need to upload and crop images.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">What technology powers this cropping tool?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our tool is built using the react-easy-crop library, a powerful React component that provides a smooth, intuitive cropping experience. We&apos;ve extended it with additional features to create the comprehensive tool available on rgbatohex.com.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Can I resize my image to specific dimensions?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Yes, our tool allows you to specify exact output dimensions for your cropped image. This saves you the extra step of resizing after cropping and ensures your image meets the exact requirements for your use case.</p>
                </div>
              </div>
            </div>
            
            {/* Use Cases Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 border border-indigo-100 dark:border-indigo-900/30">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Social Media Profiles</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create perfectly sized profile pictures for Instagram, Facebook, Twitter, and LinkedIn. Use circular cropping for platforms that display round avatars.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">E-Commerce Product Images</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Crop product photos to consistent dimensions for your online store. Maintain transparency for products that need to appear on different backgrounds.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Web Design Assets</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create perfectly sized images for website headers, backgrounds, and content blocks. Custom dimensions ensure your images fit perfectly in your design.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Digital Marketing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Prepare images for ads, newsletters, and social media posts with precise dimensions required by each platform.
                  </p>
                </div>
              </div>
            </div>
            
            {/* About react-easy-crop section */}
            <div id="about-react-easy-crop" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 border border-indigo-100 dark:border-indigo-900/30">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">About Our Technology</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Powered by react-easy-crop</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The image cropping tool at rgbatohex.com is built using <a href="https://github.com/ricardo-ch/react-easy-crop" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">react-easy-crop</a>, a powerful React component that provides advanced image cropping functionality. This open-source library offers a rich set of features that we&apos;ve implemented to give you the best cropping experience:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">Advanced Crop Controls</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Intuitive drag and zoom interactions</li>
                      <li>• Precise rotation with degree control</li>
                      <li>• Customizable aspect ratios (free, 1:1, 16:9, etc.)</li>
                      <li>• Consistent UI across desktop and mobile</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">Image Processing</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>• High-quality cropped image extraction</li>
                      <li>• Support for transparent backgrounds</li>
                      <li>• Multiple output formats (PNG, JPEG)</li>
                      <li>• Client-side processing for privacy</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-3">For Developers</h4>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-3">
                  If you&apos;re a developer interested in using react-easy-crop in your own projects, you can:
                </p>
                <ul className="space-y-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Install via npm: <code className="bg-indigo-100 dark:bg-indigo-900/40 px-2 py-1 rounded">npm install react-easy-crop</code></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Check out examples and demos in the <a href="https://github.com/ricardo-ch/react-easy-crop" target="_blank" rel="noopener noreferrer" className="underline">GitHub repository</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Get the cropped image using the provided utilities, similar to how we&apos;ve implemented it on rgbatohex.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Technical Specifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 border border-indigo-100 dark:border-indigo-900/30">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Technical Specifications</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-medium">Feature</th>
                      <th className="py-3 px-4 text-left text-sm font-medium">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium">Core Technology</td>
                      <td className="py-3 px-4 text-sm">react-easy-crop, React, Canvas API, JavaScript</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="py-3 px-4 text-sm font-medium">Supported Browsers</td>
                      <td className="py-3 px-4 text-sm">Chrome, Firefox, Safari, Edge</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium">Output Formats</td>
                      <td className="py-3 px-4 text-sm">PNG (with transparency), JPEG</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="py-3 px-4 text-sm font-medium">Maximum Upload Size</td>
                      <td className="py-3 px-4 text-sm">10MB</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium">Crop Shapes</td>
                      <td className="py-3 px-4 text-sm">Rectangle, Circle (enforced 1:1 ratio)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="py-3 px-4 text-sm font-medium">Aspect Ratios</td>
                      <td className="py-3 px-4 text-sm">Free, 1:1, 4:3, 16:9, 3:2</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium">Image Manipulation</td>
                      <td className="py-3 px-4 text-sm">Crop, rotate, resize, zoom</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="py-3 px-4 text-sm font-medium">Quality Settings</td>
                      <td className="py-3 px-4 text-sm">Adjustable 0-100%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium">Data Processing</td>
                      <td className="py-3 px-4 text-sm">Client-side only (browser-based)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Start Using Our Advanced Image Cropping Tool</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                No registration required, no download necessary. Get professional-grade image cropping right in your browser at rgbatohex.com.
              </p>
              <Link 
                href="#top"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Start Cropping
              </Link>
            </div>
          </div>
          
          <footer className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400 text-sm">
            <p className="mb-2">© {new Date().getFullYear()} rgbatohex.com | Image Cropping Tool powered by react-easy-crop</p>
            <p className="mb-1">All image processing is done in your browser - we never store your image data</p>
            <p>For developers: Check out <a href="https://github.com/ricardo-ch/react-easy-crop" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">react-easy-crop on GitHub</a> to build your own cropping tool</p>
          </footer>
        </div>
      </div>
    </>
  );
} 