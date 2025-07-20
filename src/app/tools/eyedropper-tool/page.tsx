'use client';

import React from 'react';
import { Toaster } from 'sonner';
import EyeDropperMain from './components/EyeDropperMain';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function EyeDropperToolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Toaster position="top-right" richColors />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="py-8">
        <EyeDropperMain />
      </main>

      {/* SEO Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Online EyeDropper Tool - Free Color Picker for Designers
          </h2>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our advanced online eyedropper tool is the ultimate color picker solution for web designers, UI/UX designers, graphic artists, and developers.
              This instant eyedropper allows you to pick colors from anywhere on your screen with pixel-perfect precision, providing immediate access to
              color values in multiple professional formats including HEX, RGB, HSL, and OKLCH.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Our EyeDropper Tool?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🎯 Instant Color Picking</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>Pick colors from anywhere on your screen instantly</li>
                  <li>Native browser EyeDropper API for maximum accuracy</li>
                  <li>Works with images, websites, applications, and desktop</li>
                  <li>No software installation required - works in your browser</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🎨 Multiple Color Formats</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>HEX codes for web development (#FF0000)</li>
                  <li>RGB values for digital design (255, 0, 0)</li>
                  <li>HSL format for intuitive color adjustments</li>
                  <li>OKLCH for perceptually uniform color space</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📱 Professional Features</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>Color history with up to 12 recent picks</li>
                  <li>Intelligent color name identification from extensive database</li>
                  <li>One-click copy to clipboard functionality</li>
                  <li>Keyboard shortcuts for faster workflow</li>
                  <li>Responsive design for all devices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">⚡ User Experience</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>No registration or account required</li>
                  <li>Works offline after initial load</li>
                  <li>Accessibility features for all users</li>
                  <li>Dark mode support for comfortable use</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              How to Use Our Online EyeDropper Tool - Step by Step Guide
            </h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Quick Start Guide:</h4>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Activate the EyeDropper:</strong> Click the &quot;Pick Color from Screen&quot; button or use the keyboard shortcut Ctrl+E (Cmd+E on Mac)</li>
                <li><strong>Position Your Cursor:</strong> Your cursor will change to a crosshair - move it over any color on your screen (websites, images, applications)</li>
                <li><strong>Pick the Color:</strong> Click to select the color you want to capture</li>
                <li><strong>View Color Information:</strong> The picked color will be displayed with detailed information, values in multiple formats, and the closest matching color name from our extensive database</li>
                <li><strong>Copy Color Values:</strong> Click any format button (HEX, RGB, HSL, OKLCH) or color name to instantly copy the value to your clipboard</li>
                <li><strong>Access Color History:</strong> Previously picked colors are automatically saved in the history section for easy reuse</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              EyeDropper vs Chrome Extension vs Desktop Software
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Feature</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Our Online Tool</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Chrome Extension</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">Desktop Software</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">No Installation Required</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600">✓</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-red-600">✗</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">Works on All Devices</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600">✓</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-yellow-600">Partial</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">Multiple Color Formats</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600">✓</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600">✓</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600">✓</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">Privacy & Security</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600">High</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-yellow-600">Medium</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-yellow-600">Medium</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">Always Up-to-Date</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600">✓</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-yellow-600">Manual</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-yellow-600">Manual</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Browser Compatibility & System Requirements
            </h3>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Fully Supported Browsers:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Desktop Browsers:</h5>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li><strong>Google Chrome 95+</strong> - Full support with native EyeDropper API</li>
                    <li><strong>Microsoft Edge 95+</strong> - Complete functionality</li>
                    <li><strong>Opera 81+</strong> - Chromium-based, full support</li>
                    <li><strong>Brave Browser</strong> - Works with all features</li>
                    <li><strong>Vivaldi</strong> - Full compatibility</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Operating Systems:</h5>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li><strong>Windows 10/11</strong> - Full support</li>
                    <li><strong>macOS 10.15+</strong> - Complete functionality</li>
                    <li><strong>Linux (Ubuntu, Fedora, etc.)</strong> - Works perfectly</li>
                    <li><strong>Chrome OS</strong> - Native support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">⚠️ Limited or No Support:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li><strong>Firefox</strong> - EyeDropper API not yet implemented</li>
                    <li><strong>Safari</strong> - No native EyeDropper API support</li>
                    <li><strong>Internet Explorer</strong> - Not supported (deprecated)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Alternative:</strong> For unsupported browsers, we recommend using our
                    <a href="/tools/color-picker-tool" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      interactive color picker tool
                    </a> instead.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Color Name Database & Format Guide - HEX, RGB, HSL, and OKLCH
            </h3>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🎨 Intelligent Color Name Recognition</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Our EyeDropper tool features an extensive color name database with thousands of professionally curated color names.
                When you pick a color, our intelligent matching algorithm automatically finds the closest named color from our comprehensive database.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Database Features:</h5>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>Thousands of professionally named colors</li>
                    <li>HTML/CSS standard color names</li>
                    <li>Design industry color references</li>
                    <li>Creative and descriptive color names</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Smart Matching:</h5>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>RGB distance-based color matching</li>
                    <li>Instant color name identification</li>
                    <li>Visual color reference display</li>
                    <li>One-click name copying</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-blue-500 rounded mr-3"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">HEX Color Format (#RRGGBB)</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Hexadecimal color codes</strong> are the most popular format in web development and digital design.
                  Each HEX code represents a color using six hexadecimal digits (0-9, A-F).
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 mb-3">
                  <code className="text-sm">
                    <strong>Examples:</strong><br/>
                    #FF0000 = Pure Red<br/>
                    #00FF00 = Pure Green<br/>
                    #0000FF = Pure Blue<br/>
                    #FFFFFF = White<br/>
                    #000000 = Black
                  </code>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Best for:</strong> CSS styling, HTML colors, web design, graphic design software
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-purple-500 rounded mr-3"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">RGB Color Format (Red, Green, Blue)</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>RGB format</strong> defines colors using three values (0-255) representing the intensity of red, green, and blue light.
                  This is the native format for digital displays and cameras.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 mb-3">
                  <code className="text-sm">
                    <strong>Examples:</strong><br/>
                    rgb(255, 0, 0) = Pure Red<br/>
                    rgb(0, 255, 0) = Pure Green<br/>
                    rgb(0, 0, 255) = Pure Blue<br/>
                    rgb(255, 255, 255) = White<br/>
                    rgba(255, 0, 0, 0.5) = Semi-transparent Red
                  </code>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Best for:</strong> Digital art, photo editing, programming, CSS with transparency (RGBA)
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-red-500 rounded mr-3"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">HSL Color Format (Hue, Saturation, Lightness)</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>HSL format</strong> is more intuitive for humans as it separates color (hue) from intensity (saturation) and brightness (lightness).
                  Perfect for creating color variations and harmonies.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 mb-3">
                  <code className="text-sm">
                    <strong>Examples:</strong><br/>
                    hsl(0, 100%, 50%) = Pure Red<br/>
                    hsl(120, 100%, 50%) = Pure Green<br/>
                    hsl(240, 100%, 50%) = Pure Blue<br/>
                    hsl(0, 0%, 100%) = White<br/>
                    hsl(0, 0%, 0%) = Black
                  </code>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Best for:</strong> Color theory, creating color schemes, CSS animations, design systems
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-3"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">OKLCH Color Format (Perceptually Uniform)</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>OKLCH</strong> is a modern, perceptually uniform color space that provides more consistent color manipulation.
                  It&apos;s becoming the new standard for professional color work.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 mb-3">
                  <code className="text-sm">
                    <strong>Examples:</strong><br/>
                    oklch(0.628 0.258 29.2) = Pure Red<br/>
                    oklch(0.866 0.295 142.5) = Pure Green<br/>
                    oklch(0.452 0.313 264.1) = Pure Blue<br/>
                    oklch(1.000 0.000 0) = White<br/>
                    oklch(0.000 0.000 0) = Black
                  </code>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Best for:</strong> Advanced color grading, accessibility, modern CSS, professional design workflows
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Use Cases - When to Use an EyeDropper Tool
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎨 Web Design & Development</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>Match colors from existing websites or designs</li>
                    <li>Extract brand colors from logos and images</li>
                    <li>Get professional color names for documentation</li>
                    <li>Create consistent color schemes across projects</li>
                    <li>Analyze competitor color choices with named references</li>
                    <li>Debug CSS color issues with precise identification</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📱 UI/UX Design</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>Build design system color palettes</li>
                    <li>Ensure color consistency across interfaces</li>
                    <li>Sample colors from inspiration sources</li>
                    <li>Create accessible color combinations</li>
                    <li>Document brand color specifications</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🖼️ Digital Art & Illustration</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>Sample colors from reference images</li>
                    <li>Match skin tones and natural colors</li>
                    <li>Create color studies and mood boards</li>
                    <li>Analyze lighting and shadow colors</li>
                    <li>Build custom color palettes</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🏢 Brand & Marketing</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>Extract brand colors from competitor materials</li>
                    <li>Get professional color names for brand documentation</li>
                    <li>Ensure brand consistency across platforms</li>
                    <li>Create comprehensive brand guideline documentation</li>
                    <li>Match print colors to digital equivalents with names</li>
                    <li>Analyze color trends in marketing with proper naming</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">♿ Accessibility & Testing</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>Test color contrast ratios for WCAG compliance</li>
                    <li>Identify problematic color combinations</li>
                    <li>Verify color accessibility across devices</li>
                    <li>Document accessible color alternatives</li>
                    <li>Test colorblind-friendly palettes</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🖨️ Print & Production</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>Convert screen colors to print specifications</li>
                    <li>Match Pantone colors to digital equivalents</li>
                    <li>Ensure color accuracy across media</li>
                    <li>Create print-ready color documentation</li>
                    <li>Quality control for color reproduction</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions (FAQ)
            </h3>
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: Why is my eyedropper not working?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>A:</strong> The most common reason is browser compatibility. Our eyedropper tool requires Chrome 95+, Edge 95+, or other Chromium-based browsers.
                  Firefox and Safari don&apos;t support the EyeDropper API yet. Also, make sure you&apos;re not in an incognito/private window, as some browsers restrict API access there.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: Can I pick colors from any application on my screen?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>A:</strong> Yes! Our eyedropper tool can pick colors from anywhere on your screen - websites, desktop applications, images, videos,
                  and even other browser windows. The EyeDropper API provides system-wide color picking capabilities.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: How accurate are the color values?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>A:</strong> Our tool uses the browser&apos;s native EyeDropper API, which provides pixel-perfect accuracy.
                  The color values are exactly what your display is showing, taking into account your monitor&apos;s color profile and settings.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: Is there a limit to how many colors I can pick?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>A:</strong> No, you can pick unlimited colors! Our tool automatically saves your last 12 picked colors in the history section for quick access.
                  All data is stored locally in your browser, so your color history persists between sessions.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: Can I use this tool offline?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>A:</strong> Yes! After the initial page load, our eyedropper tool works completely offline.
                  All functionality is built into the web page, so you can pick colors and access your history without an internet connection.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: How does the color name identification work?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>A:</strong> Our tool uses an extensive database of thousands of professionally curated color names.
                  When you pick a color, our intelligent algorithm calculates the RGB distance to find the closest matching named color.
                  The system displays the color name along with a visual reference and allows one-click copying for easy use in your projects.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: What&apos;s the difference between this and a Chrome extension?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>A:</strong> Our web-based tool requires no installation, works on any supported browser, and is always up-to-date.
                  Chrome extensions need to be installed, updated manually, and may have permission concerns. Our tool also provides more detailed color information,
                  professional color naming, and better format support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Details & Implementation
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                How the EyeDropper API Works
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our eyedropper tool leverages the modern <strong>EyeDropper Web API</strong>, a native browser feature that provides
                system-level color picking capabilities. This API was introduced to replace the need for browser extensions and
                provides more secure, accurate color sampling.
              </p>

              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Implementation:</h4>
                <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`const eyeDropper = new EyeDropper();
const result = await eyeDropper.open();
console.log(result.sRGBHex); // #ff0000`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Color Processing & Name Recognition Algorithms
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our tool combines real-time color space conversions with intelligent color name recognition using industry-standard algorithms:
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Color Name Recognition System:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Database:</strong> Thousands of curated color names with precise HEX values
                    </p>
                    <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                      Database: 10,000+ named colors
                    </code>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Matching Algorithm:</strong> Euclidean distance in RGB color space
                    </p>
                    <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                      Distance = √[(R₁-R₂)² + (G₁-G₂)² + (B₁-B₂)²]
                    </code>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">HEX ↔ RGB Conversion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Direct hexadecimal to decimal conversion with proper padding and validation.
                  </p>
                  <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                    R = parseInt(hex.substr(1,2), 16)
                  </code>
                </div>

                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">RGB ↔ HSL Conversion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Cylindrical color space transformation with proper hue calculation.
                  </p>
                  <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                    H = atan2(√3*(G-B), 2*R-G-B)
                  </code>
                </div>

                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">RGB ↔ OKLCH Conversion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Advanced perceptually uniform color space using OKLab intermediate conversion.
                  </p>
                  <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                    L = ∛(0.4122*R + 0.5364*G + 0.0514*B)
                  </code>
                </div>

                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Color Accuracy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    All conversions maintain precision with proper rounding and gamut mapping.
                  </p>
                  <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                    Precision: ±0.001 for normalized values
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Privacy & Security Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔒 Data Privacy</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>All color data and history stored locally in your browser</li>
                    <li>Color name database processed client-side only</li>
                    <li>No server uploads or cloud storage</li>
                    <li>No tracking or analytics on color picks or names</li>
                    <li>Complete offline functionality after load</li>
                    <li>No account registration required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🛡️ Security Benefits</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>Native browser API - no third-party code</li>
                    <li>No extension permissions required</li>
                    <li>Sandboxed execution environment</li>
                    <li>HTTPS-only secure connection</li>
                    <li>No executable downloads needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Complete Color Tool Suite
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Enhance your color workflow with our comprehensive collection of professional color tools:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/tools/color-picker-tool"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded mr-3"></div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Color Picker</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Interactive color picker with HSL, RGB, and HEX support</p>
            </Link>
            <Link
              href="/tools/color-contrast-checker"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded mr-3"></div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Contrast Checker</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">WCAG accessibility compliance testing for color combinations</p>
            </Link>
            <Link
              href="/tools/palette-generator-tool"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded mr-3"></div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Palette Generator</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Generate harmonious color palettes and schemes</p>
            </Link>
            <Link
              href="/tools/hex-to-rgb"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded mr-3"></div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">HEX to RGB</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Convert between HEX and RGB color formats</p>
            </Link>
            <Link
              href="/tools/color-name-converter"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mr-3"></div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Color Names</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Find color names and convert between formats</p>
            </Link>
            <Link
              href="/tools/gradient-generator"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mr-3"></div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Gradient Generator</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Create beautiful CSS gradients with live preview</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
