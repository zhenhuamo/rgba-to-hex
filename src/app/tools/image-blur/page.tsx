'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function ImageBlur() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🌀</span>
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Image Blur Tool
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Learn how to blur image online free with our professional blur image tool. Add blur effects, blur background, or blur parts of image instantly. Blur image processing with no upload required, completely secure.
            </p>
          </div>

          <div className="mb-8">
            <iframe 
              src="/tools/image-blur-tool?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="700"
              title="Image Blur Tool"
              loading="lazy"
            />
            
            <div className="flex justify-center mt-6 mb-4">
              <a
                href="/tools/image-blur-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </a>
            </div>
          </div>

          {/* 功能介绍 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                🎨 How to Blur Image - Multiple Blur Image Effects
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Gaussian Blur Image</strong> - Learn how to blur image with professional smooth effects</li>
                <li>• <strong>Motion Blur Image</strong> - Create dynamic blur image effects like Photoshop</li>
                <li>• <strong>Background Blur Image</strong> - How to blur image background for portrait effects</li>
                <li>• <strong>Stack Blur Image</strong> - Fast, high-quality blur image processing online</li>
                <li>• <strong>Selective Blur Image</strong> - How to blur image parts while keeping focus areas sharp</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                🔒 Free Blur Image Tool Online - No Download
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Blur image online free</strong> - No registration or payment to blur image</li>
                <li>• <strong>Secure blur image processing</strong> - Your images never leave your device</li>
                <li>• <strong>Blur image alternative to Canva</strong> - Professional results without software</li>
                <li>• <strong>Better blur image tool than GIMP</strong> - Instant results, no complex setup</li>
                <li>• <strong>Offline blur image processing</strong> - Process images without internet after loading</li>
              </ul>
            </div>
          </div>

          {/* 使用场景 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              Why Choose Our Blur Image Tool Over Photoshop, Canva, or GIMP?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Social Media & Content Creation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Learn how to blur image background for Instagram, TikTok posts. Our blur image tool is better than Canva - create professional blur image effects instantly without subscription fees.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold mb-2">Privacy & Security Blur Image</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  How to blur image parts to protect privacy. Blur image faces, license plates, or sensitive information. Safer than uploading to online services - all blur image processing happens locally.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-semibold mb-2">Professional Blur Image Alternative</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Free blur image alternative to Photoshop and GIMP. How to blur image with professional quality without complex software installation. Best blur image tool online.
                </p>
              </div>
            </div>
          </div>

          {/* 使用说明 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              How to Blur Image Online - Step by Step Guide
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Upload Your Image</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Drag & drop or click to select. Supports JPG, PNG, WebP - no size limits like other blur tools
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-300 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Blur Type</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Select Gaussian blur, motion blur, or background blur. Easier than learning how to blur in Photoshop or GIMP
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-300 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Real-time Preview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  See instant results as you adjust blur intensity. No waiting like complex software - immediate feedback
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-300 font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Download Result</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Save your blurred image in high quality. Faster than Canva export, better than mobile apps
                </p>
              </div>
            </div>
          </div>

          {/* 软件对比部分 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              Better Than Photoshop, Canva, GIMP, or Figma for Blur Effects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🆚 How Our Tool Compares
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span><strong>vs Photoshop blur:</strong></span>
                    <span className="text-green-600">✓ No subscription, instant access</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span><strong>vs Canva blur tool:</strong></span>
                    <span className="text-green-600">✓ No account required, unlimited use</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span><strong>vs GIMP blur filter:</strong></span>
                    <span className="text-green-600">✓ No download, works instantly</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span><strong>vs Figma blur:</strong></span>
                    <span className="text-green-600">✓ Better for photos, not just UI</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span><strong>vs CapCut blur:</strong></span>
                    <span className="text-green-600">✓ Works on desktop, higher quality</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🎯 Common Blur Tasks Made Easy
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• <strong>How to blur background of image:</strong> Select background blur preset</li>
                  <li>• <strong>How to blur parts of image:</strong> Use selective blur with adjustable radius</li>
                  <li>• <strong>How to make image blur:</strong> Choose from 4 professional blur types</li>
                  <li>• <strong>How to blur image in Canva alternative:</strong> Upload and apply effects instantly</li>
                  <li>• <strong>Better than GIMP blur tutorial:</strong> No complex steps, just click and blur</li>
                  <li>• <strong>Photoshop blur alternative:</strong> Professional results without subscription</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 常见问题 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              How to Blur Image - Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">How to blur image online free without watermark?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our blur image tool is completely free with no watermarks. Unlike many blur image services, we don&apos;t add logos or require payment for clean results. All blur image processing happens in your browser for maximum privacy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Why is my image blurry after upload? How to fix blurry images?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  If your image appears blurry after upload, it might be due to automatic compression. Our tool maintains original quality and offers unblur options to enhance image clarity. We support high-resolution images up to 10MB.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">How to blur image background like professional cameras?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use our Gaussian blur with medium intensity (5-15px radius) to create professional background blur effects. This mimics the depth of field effect from DSLR cameras, perfect for portrait photography and social media posts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Can I blur parts of image for privacy protection?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! Our selective blur feature lets you blur specific areas like faces, license plates, or sensitive information. Much easier than learning complex Photoshop or GIMP techniques - just select the area and apply blur.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">How does this blur image tool compare to Canva or Photoshop?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our blur image tool offers professional-quality effects without subscriptions. While Canva requires an account and Photoshop costs monthly fees, our blur image tool is free, instant, and produces comparable blur image results for most use cases.
                </p>
              </div>
            </div>
          </div>

          {/* 教程和技巧部分 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              Professional Blur Techniques - Tutorials & Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  📚 Step-by-Step Tutorials
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">How to blur image background for portraits</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      1. Upload your portrait photo to blur image tool<br/>
                      2. Select &ldquo;Background Blur Image&rdquo; preset<br/>
                      3. Adjust blur image radius to 8-12px for natural depth<br/>
                      4. Download your professional blur image result
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">How to blur image parts for privacy protection</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      1. Choose &ldquo;Selective Blur Image&rdquo; mode<br/>
                      2. Select blur image areas (faces, text, etc.)<br/>
                      3. Apply heavy blur image effect (15-25px) for complete privacy<br/>
                      4. Perfect blur image solution for social media sharing
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">How to create motion blur effects</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      1. Select &ldquo;Motion Blur&rdquo; from blur types<br/>
                      2. Set angle (0° horizontal, 90° vertical)<br/>
                      3. Adjust distance for speed effect intensity<br/>
                      4. Great for dynamic action photos
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  💡 Pro Tips & Best Practices
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Why choose our tool over Google Images blur?</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Google Images often appear blurry due to compression. Our tool maintains original quality while adding intentional artistic blur effects.
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Better than CapCut blur for photos</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      While CapCut is great for videos, our tool specializes in photo blur with higher quality algorithms and no mobile app limitations.
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Alternative to complex GIMP blur tutorials</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Skip the 20-step GIMP tutorials. Our one-click blur presets achieve professional results instantly without learning curve.
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">How to remove blur vs add blur</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      This tool adds artistic blur effects. For removing existing blur from blurry images, try our AI image enhancer tool for best results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 嵌入代码部分 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Embed This Tool
              </h2>
              <button
                onClick={() => setShowEmbedCode(!showEmbedCode)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {showEmbedCode ? 'Hide Code' : 'Show Embed Code'}
              </button>
            </div>
            
            {showEmbedCode && (
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <code className="text-sm text-gray-800 dark:text-gray-200 break-all">
                  {`<iframe src="${typeof window !== 'undefined' ? window.location.origin : ''}/tools/image-blur-tool?embed=true" width="100%" height="700" frameborder="0" title="Image Blur Tool"></iframe>`}
                </code>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
