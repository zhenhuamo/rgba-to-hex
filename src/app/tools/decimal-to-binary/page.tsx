'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

export default function DecimalToBinary() {
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    // Set iframe URL only on client side to avoid hydration mismatch
    setIframeUrl('/tools/decimal-to-binary-converter?embed=true');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Navigation />

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2-2v14a2 2 0 002 2z" />
              </svg>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Decimal to Binary Converter - Free Online Tool with Calculator & Table
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              Convert decimal to binary instantly with our professional decimal to binary converter. Features decimal to binary table, conversion examples in Python, Java, C++, and step-by-step algorithm explanation. Perfect decimal to binary calculator for programmers and students.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Master how to convert decimal to binary with comprehensive decimal to binary conversion examples, programming code samples, and complete conversion tables. Learn the decimal to binary conversion formula and practice with real examples including convert decimal to binary for numbers like 13, 25, 255, and more.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            {iframeUrl ? (
              <iframe 
                src={iframeUrl}
                className="w-full border-none rounded-2xl shadow-xl"
                height="500"
                title="Decimal to Binary Number Conversion Tool"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[500px] bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading converter...</div>
              </div>
            )}
            
            <div className="flex justify-center mt-6">
              <Link 
                href="/tools/decimal-to-binary-converter" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Converter Tool
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">How to Convert Decimal to Binary - Division by 2 Method</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">Decimal to Binary Conversion Formula & Algorithm</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-lg mb-4">
                  <div className="text-center">
                    <strong>Repeatedly divide by 2, record remainders, then reverse the order</strong><br />
                    <strong>Decimal ÷ 2 = Quotient + Remainder (0 or 1)</strong>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  The decimal to binary conversion algorithm works by repeatedly dividing the decimal number by 2 and recording each remainder (0 or 1). The binary representation is formed by reading the remainders in reverse order. This method is the most reliable way to convert decimal to binary numbers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Decimal to Binary Conversion Examples: Convert 13 to Binary</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div>13 ÷ 2 = 6 remainder 1</div>
                    <div>6 ÷ 2 = 3 remainder 0</div>
                    <div>3 ÷ 2 = 1 remainder 1</div>
                    <div>1 ÷ 2 = 0 remainder 1</div>
                    <div className="border-t pt-2 mt-3">
                      <div>Remainder sequence: 1, 0, 1, 1</div>
                      <div className="border-t pt-2 font-bold">
                        Reverse order: 1101 (binary)
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Therefore, decimal 13 converts to binary 1101
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Verification Method - Binary to Decimal Check</h4>
                  <div className="space-y-2 text-sm">
                    <div>Convert binary 1101 back to decimal:</div>
                    <div className="font-mono">1×2³ + 1×2² + 0×2¹ + 1×2⁰</div>
                    <div className="font-mono">= 8 + 4 + 0 + 1</div>
                    <div className="font-mono">= 13 ✓ (matches original)</div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Always verify your decimal to binary conversion using positional notation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Complete Decimal to Binary Table & Conversion Examples</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Decimal to Binary Table - 4-bit Values (0-15)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-blue-100 dark:bg-blue-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Binary</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Hex</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {[
                        ['0', '0000', '0'], ['1', '0001', '1'], ['2', '0010', '2'], ['3', '0011', '3'],
                        ['4', '0100', '4'], ['5', '0101', '5'], ['6', '0110', '6'], ['7', '0111', '7'],
                        ['8', '1000', '8'], ['9', '1001', '9'], ['10', '1010', 'A'], ['11', '1011', 'B'],
                        ['12', '1100', 'C'], ['13', '1101', 'D'], ['14', '1110', 'E'], ['15', '1111', 'F']
                      ].map(([dec, bin, hex], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-bold text-blue-600 dark:text-blue-400">{dec}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{bin}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-xs">{hex}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                  Essential decimal to binary table for quick reference and manual calculations
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Common Decimal to Binary Conversion Examples</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-purple-100 dark:bg-purple-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Binary</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      {[
                        ['25', '11001', '5-bit number'],
                        ['50', '110010', '6-bit number'],
                        ['100', '1100100', '7-bit number'],
                        ['128', '10000000', '8-bit power of 2'],
                        ['255', '11111111', '8-bit all 1s'],
                        ['256', '100000000', '9-bit power of 2'],
                        ['512', '1000000000', '10-bit power of 2'],
                        ['1024', '10000000000', '11-bit power of 2'],
                        ['2048', '100000000000', '12-bit power of 2'],
                        ['65535', '1111111111111111', '16-bit all 1s']
                      ].map(([dec, bin, desc], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-purple-600 dark:text-purple-400">{dec}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-xs">{bin}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-xs">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                  Popular decimal numbers and their binary equivalents for programming reference
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Decimal to Binary Programming Examples & Code</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">🐍</span>
                  Python - Decimal to Binary Conversion
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
                  <div className="text-gray-500"># Method 1: Using bin() function</div>
                  <div>decimal = 13</div>
                  <div>binary = bin(decimal)[2:]  # Remove &apos;0b&apos; prefix</div>
                  <div>print(binary)  # Output: 1101</div>
                  <div className="mt-3 text-gray-500"># Method 2: Manual algorithm</div>
                  <div>def decimal_to_binary(n):</div>
                  <div>    if n == 0: return &quot;0&quot;</div>
                  <div>    binary = &quot;&quot;</div>
                  <div>    while n &gt; 0:</div>
                  <div>        binary = str(n % 2) + binary</div>
                  <div>        n = n // 2</div>
                  <div>    return binary</div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Python provides built-in bin() function and manual implementation for decimal to binary conversion
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">🟨</span>
                  JavaScript - Decimal to Binary Conversion
                </h3>
                <div className="bg-gray-900 text-yellow-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
                  <div className="text-gray-500">{/* Method 1: Using toString() */}</div>
                  <div>const decimal = 13;</div>
                  <div>const binary = decimal.toString(2);</div>
                  <div>console.log(binary); {/* Output: 1101 */}</div>
                  <div className="mt-3 text-gray-500">{/* Method 2: Manual algorithm */}</div>
                  <div>function decimalToBinary(n) &lbrace;</div>
                  <div>    if (n === 0) return &quot;0&quot;;</div>
                  <div>    let binary = &quot;&quot;;</div>
                  <div>    while (n &gt; 0) &lbrace;</div>
                  <div>        binary = (n % 2) + binary;</div>
                  <div>        n = Math.floor(n / 2);</div>
                  <div>    &rbrace;</div>
                  <div>    return binary;</div>
                  <div>&rbrace;</div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  JavaScript toString(2) method and manual implementation for decimal to binary conversion
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">☕</span>
                  Java - Decimal to Binary Conversion
                </h3>
                <div className="bg-gray-900 text-red-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
                  <div className="text-gray-500">{/* Method 1: Using Integer.toBinaryString() */}</div>
                  <div>int decimal = 13;</div>
                  <div>String binary = Integer.toBinaryString(decimal);</div>
                  <div>System.out.println(binary); {/* Output: 1101 */}</div>
                  <div className="mt-3 text-gray-500">{/* Method 2: Manual algorithm */}</div>
                  <div>public static String decimalToBinary(int n) &lbrace;</div>
                  <div>    if (n == 0) return &quot;0&quot;;</div>
                  <div>    StringBuilder binary = new StringBuilder();</div>
                  <div>    while (n &gt; 0) &lbrace;</div>
                  <div>        binary.insert(0, n % 2);</div>
                  <div>        n = n / 2;</div>
                  <div>    &rbrace;</div>
                  <div>    return binary.toString();</div>
                  <div>&rbrace;</div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Java Integer.toBinaryString() method and manual implementation
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">🔧</span>
                  C++ - Decimal to Binary Conversion
                </h3>
                <div className="bg-gray-900 text-blue-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
                  <div className="text-gray-500">{/* Using bitset library */}</div>
                  <div>#include &lt;bitset&gt;</div>
                  <div>#include &lt;iostream&gt;</div>
                  <div>int decimal = 13;</div>
                  <div>std::bitset&lt;8&gt; binary(decimal);</div>
                  <div>std::cout &lt;&lt; binary &lt;&lt; std::endl; {/* 00001101 */}</div>
                  <div className="mt-3 text-gray-500">{/* Manual algorithm */}</div>
                  <div>std::string decimalToBinary(int n) &lbrace;</div>
                  <div>    if (n == 0) return &quot;0&quot;;</div>
                  <div>    std::string binary = &quot;&quot;;</div>
                  <div>    while (n &gt; 0) &lbrace;</div>
                  <div>        binary = (n % 2 ? &quot;1&quot; : &quot;0&quot;) + binary;</div>
                  <div>        n /= 2;</div>
                  <div>    &rbrace;</div>
                  <div>    return binary;</div>
                  <div>&rbrace;</div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  C++ bitset library and manual algorithm for decimal to binary conversion
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Mathematical Foundation of Decimal to Binary Conversion</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Why Decimal to Binary Conversion Works</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Decimal to binary conversion is based on the fundamental principle that any number can be represented as a sum of powers of 2. The binary number system uses base 2, where each position represents a power of 2, starting from 2⁰ = 1 on the rightmost position.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Power of 2 Table for Decimal to Binary Conversion:</h4>
                  <div className="grid grid-cols-4 gap-2 text-sm font-mono">
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2⁰ = 1</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2¹ = 2</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2² = 4</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2³ = 8</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2⁴ = 16</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2⁵ = 32</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2⁶ = 64</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2⁷ = 128</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2⁸ = 256</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2⁹ = 512</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2¹⁰ = 1024</div>
                    <div className="text-center p-2 bg-purple-100 dark:bg-purple-800 rounded">2¹¹ = 2048</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-orange-800 dark:text-orange-200">Step-by-Step: Convert 25 to Binary</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div><strong>Step 1:</strong> 25 ÷ 2 = 12 remainder 1</div>
                    <div><strong>Step 2:</strong> 12 ÷ 2 = 6 remainder 0</div>
                    <div><strong>Step 3:</strong> 6 ÷ 2 = 3 remainder 0</div>
                    <div><strong>Step 4:</strong> 3 ÷ 2 = 1 remainder 1</div>
                    <div><strong>Step 5:</strong> 1 ÷ 2 = 0 remainder 1</div>
                    <div className="border-t pt-2 mt-3">
                      <div>Reading remainders from bottom to top:</div>
                      <div className="font-bold text-orange-600 dark:text-orange-400">
                        25 (decimal) = 11001 (binary)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Verification: Binary 11001 to Decimal</h4>
                  <div className="space-y-2 text-sm">
                    <div>Position:  4  3  2  1  0</div>
                    <div>Binary:   1  1  0  0  1</div>
                    <div>Power:    16 8  4  2  1</div>
                    <div className="border-t pt-2 mt-3">
                      <div>1×16 + 1×8 + 0×4 + 0×2 + 1×1</div>
                      <div>= 16 + 8 + 0 + 0 + 1</div>
                      <div className="font-bold text-green-600 dark:text-green-400">
                        = 25 ✓ (matches original)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Practical Applications of Decimal to Binary Conversion</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">Computer Programming</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Decimal to binary conversion is essential for bitwise operations, memory management, and understanding how computers store and process data at the hardware level.
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">Digital Electronics</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Binary representation is fundamental in digital circuits, logic gates, and electronic systems where only two states (0 and 1) can exist.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-purple-800 dark:text-purple-200">Network Addressing</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    IP addresses and subnet masks require decimal to binary conversion for network configuration and understanding CIDR notation.
                  </p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-orange-800 dark:text-orange-200">Data Compression</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Binary representation is crucial for compression algorithms and understanding how data is encoded and stored efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Related Number System Conversion Tools</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link 
                href="/tools/binary-to-decimal" 
                className="group p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700">Binary to Decimal</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Convert binary numbers back to decimal with our binary to decimal converter and table.
                </p>
              </Link>

              <Link 
                href="/tools/hex-to-binary" 
                className="group p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 group-hover:text-green-700">Hex to Binary</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Convert hexadecimal numbers to binary with our hexadecimal to binary converter.
                </p>
              </Link>

              <Link 
                href="/tools/hex-to-decimal" 
                className="group p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2-2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400 group-hover:text-purple-700">Hex to Decimal</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Convert hexadecimal numbers to decimal format with our hex to decimal tool.
                </p>
              </Link>
            </div>
          </div>

          {/* Specific Examples Section - Adding coverage for long-tail keywords */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Popular Decimal to Binary Conversion Examples & Hexadecimal Connection</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frequently Searched Decimal to Binary Conversions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Convert 17 to Binary</h4>
                    <div className="font-mono text-sm space-y-1">
                      <div>17 ÷ 2 = 8 remainder 1</div>
                      <div>8 ÷ 2 = 4 remainder 0</div>
                      <div>4 ÷ 2 = 2 remainder 0</div>
                      <div>2 ÷ 2 = 1 remainder 0</div>
                      <div>1 ÷ 2 = 0 remainder 1</div>
                      <div className="font-bold text-blue-600 dark:text-blue-400">Result: 10001</div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Convert 15 to Binary</h4>
                    <div className="font-mono text-sm space-y-1">
                      <div>15 ÷ 2 = 7 remainder 1</div>
                      <div>7 ÷ 2 = 3 remainder 1</div>
                      <div>3 ÷ 2 = 1 remainder 1</div>
                      <div>1 ÷ 2 = 0 remainder 1</div>
                      <div className="font-bold text-purple-600 dark:text-purple-400">Result: 1111</div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Convert 31 to Binary</h4>
                    <div className="font-mono text-sm space-y-1">
                      <div>31 ÷ 2 = 15 remainder 1</div>
                      <div>15 ÷ 2 = 7 remainder 1</div>
                      <div>7 ÷ 2 = 3 remainder 1</div>
                      <div>3 ÷ 2 = 1 remainder 1</div>
                      <div>1 ÷ 2 = 0 remainder 1</div>
                      <div className="font-bold text-green-600 dark:text-green-400">Result: 11111</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Decimal to Binary and Hexadecimal Connection</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Understanding the relationship between decimal, binary, and hexadecimal number systems is crucial for programming and digital electronics. Each hexadecimal digit represents exactly 4 binary digits (bits), making conversions between these systems efficient.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-lg">
                    <thead>
                      <tr className="bg-orange-100 dark:bg-orange-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Binary (4-bit)</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Hexadecimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Common Use</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      {[
                        ['10', '1010', 'A', 'Line feed (LF)'],
                        ['13', '1101', 'D', 'Carriage return (CR)'],
                        ['16', '10000', '10', 'Power of 2'],
                        ['32', '100000', '20', 'Space character'],
                        ['64', '1000000', '40', 'At symbol (@)'],
                        ['127', '1111111', '7F', 'DEL character'],
                        ['255', '11111111', 'FF', '8-bit max value']
                      ].map(([dec, bin, hex, use], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-bold text-orange-600 dark:text-orange-400">{dec}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{bin}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-red-600 dark:text-red-400">{hex}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-xs">{use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                  This table shows how decimal to binary conversion relates to hexadecimal representation, essential for programming and computer science.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Tips for Decimal to Binary Conversion & Common Mistakes</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">✅ Best Practices</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Always read remainders from bottom to top when using division method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Verify your result by converting binary back to decimal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Use powers of 2 table for quick mental calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Practice with common numbers like 255, 256, 1024</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">❌ Common Mistakes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Reading remainders in the wrong order (top to bottom instead of bottom to top)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Forgetting to include leading zeros when working with fixed-width binary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Not verifying the result with reverse conversion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Mixing up the division by 2 method with other base conversions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 