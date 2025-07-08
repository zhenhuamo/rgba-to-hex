'use client';

import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

export default function BinaryToDecimal() {
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    // Set iframe URL only on client side to avoid hydration mismatch
    setIframeUrl('/tools/binary-to-decimal-converter?embed=true');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Enhanced SEO-Optimized Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2-2v14a2 2 0 002 2z" />
              </svg>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Binary to Decimal Converter - Free Online Tool with Calculator & Table
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              Convert binary to decimal instantly with our professional binary to decimal converter. Features binary to decimal table, conversion examples in Python, Java, C++, and Excel formulas. Perfect binary to decimal calculator for programmers and students.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Master binary to decimal conversion with step-by-step examples, programming code samples, file processing methods, and comprehensive conversion tables. Supports all binary to decimal conversion scenarios from simple calculator operations to complex file transformations including 1011 binary to decimal, 1111 binary to decimal, and 10001 binary to decimal conversions.
            </p>
          </div>

          {/* Converter Tool */}
          <div className="max-w-2xl mx-auto mb-12">
            {iframeUrl ? (
              <iframe 
                src={iframeUrl}
                className="w-full border-none rounded-2xl shadow-xl"
                height="500"
                title="Binary to Decimal Number Conversion Tool"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[500px] bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading converter...</div>
              </div>
            )}
            
            <div className="flex justify-center mt-6">
              <a
                href="/tools/binary-to-decimal-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Converter Tool
              </a>
            </div>
          </div>

          {/* Binary to Decimal Conversion Formula */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Binary to Decimal Conversion Formula & Calculator Method</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Positional Notation Formula for Binary to Decimal Conversion</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-lg mb-4">
                  <div className="text-center">
                    <strong>Decimal = Σ (Binary Digit × 2^Position)</strong><br />
                    <strong>Where position starts from 0 (rightmost bit)</strong>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  The binary to decimal conversion formula uses positional notation where each binary digit is multiplied by 2 raised to the power of its position. This binary to decimal calculator method works because binary is a base-2 number system, making the conversion systematic and reliable.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Binary to Decimal Conversion Examples: 1101 Binary to Decimal</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div>Position:     3  2  1  0</div>
                    <div>Binary Digit: 1  1  0  1</div>
                    <div>Power of 2:   8  4  2  1</div>
                    <div className="border-t pt-2 mt-3">
                      <div>1×2³ = 1×8 = 8</div>
                      <div>1×2² = 1×4 = 4</div>
                      <div>0×2¹ = 0×2 = 0</div>
                      <div>1×2⁰ = 1×1 = 1</div>
                      <div className="border-t pt-2 font-bold">
                        Sum: 8+4+0+1 = 13 (Decimal)
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Therefore, 1101 binary to decimal = 13
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">Binary to Decimal Table - Power of 2 Reference</h4>
                  <div className="grid grid-cols-4 gap-1 text-xs font-mono">
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2⁰=1</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2¹=2</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2²=4</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2³=8</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2⁴=16</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2⁵=32</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2⁶=64</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2⁷=128</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2⁸=256</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2⁹=512</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2¹⁰=1024</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2¹¹=2048</div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Essential binary to decimal table for manual calculations and programming reference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Binary to Decimal Conversion Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Complete Binary to Decimal Table & Conversion Examples</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 4-bit Binary Table */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Binary to Decimal Table - 4-bit Values (0-15)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-blue-100 dark:bg-blue-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Binary</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Hex</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {[
                        ['0000', '0', '0'], ['0001', '1', '1'], ['0010', '2', '2'], ['0011', '3', '3'],
                        ['0100', '4', '4'], ['0101', '5', '5'], ['0110', '6', '6'], ['0111', '7', '7'],
                        ['1000', '8', '8'], ['1001', '9', '9'], ['1010', '10', 'A'], ['1011', '11', 'B'],
                        ['1100', '12', 'C'], ['1101', '13', 'D'], ['1110', '14', 'E'], ['1111', '15', 'F']
                      ].map(([bin, dec, hex], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-bold text-blue-600 dark:text-blue-400">{bin}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{dec}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-xs">{hex}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Common Multi-bit Values */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Binary to Decimal Conversion Examples - Common Patterns</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-purple-100 dark:bg-purple-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Binary</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      {[
                        ['11111111', '255', '8-bit all 1s'],
                        ['10000000', '128', '8-bit MSB'],
                        ['01111111', '127', '8-bit max signed'],
                        ['10101010', '170', 'Alternating pattern'],
                        ['01010101', '85', 'Inverse alternating'],
                        ['00001111', '15', 'Lower nibble'],
                        ['11110000', '240', 'Upper nibble'],
                        ['1111111111111111', '65535', '16-bit all 1s'],
                        ['1000000000000000', '32768', '16-bit MSB'],
                        ['1011101011101101', '48109', 'Complex pattern']
                      ].map(([bin, dec, desc], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-purple-600 dark:text-purple-400 text-xs">{bin}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center">{dec}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-xs">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Programming Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Binary to Decimal Programming Examples - Python, Java, C++</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Python */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">🐍</span>
                  Binary to Decimal Python - Code Examples
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`# Binary to Decimal Python - Method 1: Using int() function
binary_value = "1101"
decimal = int(binary_value, 2)
print(f"Binary to Decimal: {binary_value} = {decimal}")
# Output: Binary to Decimal: 1101 = 13

# Binary to Decimal Python - Method 2: Manual conversion
def binary_to_decimal_converter(binary_str):
    decimal = 0
    for i, bit in enumerate(binary_str[::-1]):
        if bit == '1':
            decimal += 2 ** i
    return decimal

# Binary to Decimal conversion example
result = binary_to_decimal_converter("1101")
print(f"Binary to Decimal Result: 1101 = {result}")

# Binary to Decimal file processing
def convert_binary_file_to_decimal(input_file, output_file):
    with open(input_file, 'r') as f:
        binary_data = f.read().strip()
    decimal_result = binary_to_decimal_converter(binary_data)
    with open(output_file, 'w') as f:
        f.write(str(decimal_result))

# Binary to Decimal list processing
def process_binary_list(binary_list):
    return [int(binary, 2) for binary in binary_list]

binary_numbers = ["1011", "1111", "10001", "1010"]
decimal_numbers = process_binary_list(binary_numbers)
print("Binary to Decimal conversions:", decimal_numbers)
# Output: [11, 15, 17, 10]`}</pre>
                </div>
              </div>

              {/* Java */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">☕</span>
                  Binary to Decimal Java - Code Examples
                </h3>
                <div className="bg-gray-900 text-orange-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`import java.util.*;

public class BinaryToDecimalConverter {
    
    // Binary to Decimal Java - Method 1: Using Integer.parseInt()
    public static int binaryToDecimal(String binary) {
        return Integer.parseInt(binary, 2);
    }
    
    // Binary to Decimal Java - Method 2: Manual conversion
    public static int binaryToDecimalManual(String binary) {
        int decimal = 0;
        int power = 0;
        
        for (int i = binary.length() - 1; i >= 0; i--) {
            if (binary.charAt(i) == '1') {
                decimal += Math.pow(2, power);
            }
            power++;
        }
        return decimal;
    }
    
    // Binary to Decimal calculator example
    public static void main(String[] args) {
        String[] binaryNumbers = {"1011", "1111", "10001", "1010"};
        
        System.out.println("Binary to Decimal Conversions:");
        for (String binary : binaryNumbers) {
            int decimal = binaryToDecimal(binary);
            System.out.printf("%s binary to decimal = %d\\n", 
                            binary, decimal);
        }
    }
}`}</pre>
                </div>
              </div>

              {/* C++ */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">⚡</span>
                  Binary to Decimal C++ - Code Examples
                </h3>
                <div className="bg-gray-900 text-blue-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`#include <iostream>
#include <string>
#include <cmath>
#include <vector>

class BinaryToDecimalConverter {
public:
    // Binary to Decimal C++ - Method 1: Using stoi()
    static int binaryToDecimal(const std::string& binary) {
        return std::stoi(binary, nullptr, 2);
    }
    
    // Binary to Decimal C++ - Method 2: Manual conversion
    static int binaryToDecimalManual(const std::string& binary) {
        int decimal = 0;
        int power = 0;
        
        for (int i = binary.length() - 1; i >= 0; i--) {
            if (binary[i] == '1') {
                decimal += std::pow(2, power);
            }
            power++;
        }
        return decimal;
    }
};

// Binary to Decimal C++ calculator example
int main() {
    std::vector<std::string> binaryNumbers = 
        {"1011", "1111", "10001", "1010"};
    
    std::cout << "Binary to Decimal Conversions:\\n";
    for (const auto& binary : binaryNumbers) {
        int result = BinaryToDecimalConverter::binaryToDecimal(binary);
        std::cout << binary << " binary to decimal = " 
                  << result << std::endl;
    }
    
    return 0;
}`}</pre>
                </div>
              </div>

              {/* Excel */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">📊</span>
                  Binary to Decimal in Excel - Formula Examples
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`// Binary to Decimal Excel Formula Examples

// Method 1: Using BIN2DEC function (for values up to 10 bits)
=BIN2DEC("1011")
// Result: 11

// Method 2: Manual formula for any length binary
// For cell A1 containing "1011", use this formula:
=SUMPRODUCT(MID(A1,ROW(INDIRECT("1:"&LEN(A1))),1)*
           POWER(2,LEN(A1)-ROW(INDIRECT("1:"&LEN(A1)))))

// Binary to Decimal Excel table for reference:
// A1: Binary | B1: Decimal | Formula in B1: =BIN2DEC(A1)
// 1011       | 11          | 
// 1111       | 15          |
// 10001      | 17          |
// 1010       | 10          |

// Excel VBA Function for binary to decimal conversion:
Function BinaryToDecimalConverter(binaryValue As String) As Long
    Dim i As Integer
    Dim decimalResult As Long
    
    For i = 1 To Len(binaryValue)
        If Mid(binaryValue, i, 1) = "1" Then
            decimalResult = decimalResult + 2 ^ (Len(binaryValue) - i)
        End If
    Next i
    
    BinaryToDecimalConverter = decimalResult
End Function

// Usage in Excel cell:
=BinaryToDecimalConverter("1011")
// Result: 11`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Common Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Common Binary to Decimal Conversion Examples</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">1011 Binary to Decimal</h4>
                <div className="font-mono text-sm">
                  <div>1×2³ + 0×2² + 1×2¹ + 1×2⁰</div>
                  <div>= 8 + 0 + 2 + 1</div>
                  <div className="font-bold text-blue-600">= 11</div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">1111 Binary to Decimal</h4>
                <div className="font-mono text-sm">
                  <div>1×2³ + 1×2² + 1×2¹ + 1×2⁰</div>
                  <div>= 8 + 4 + 2 + 1</div>
                  <div className="font-bold text-green-600">= 15</div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">10001 Binary to Decimal</h4>
                <div className="font-mono text-sm">
                  <div>1×2⁴ + 0×2³ + 0×2² + 0×2¹ + 1×2⁰</div>
                  <div>= 16 + 0 + 0 + 0 + 1</div>
                  <div className="font-bold text-purple-600">= 17</div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">1010 Binary to Decimal</h4>
                <div className="font-mono text-sm">
                  <div>1×2³ + 0×2² + 1×2¹ + 0×2⁰</div>
                  <div>= 8 + 0 + 2 + 0</div>
                  <div className="font-bold text-orange-600">= 10</div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">11111 Binary to Decimal</h4>
                <div className="font-mono text-sm">
                  <div>1×2⁴ + 1×2³ + 1×2² + 1×2¹ + 1×2⁰</div>
                  <div>= 16 + 8 + 4 + 2 + 1</div>
                  <div className="font-bold text-red-600">= 31</div>
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">101010 Binary to Decimal</h4>
                <div className="font-mono text-sm">
                  <div>1×2⁵ + 0×2⁴ + 1×2³ + 0×2² + 1×2¹ + 0×2⁰</div>
                  <div>= 32 + 0 + 8 + 0 + 2 + 0</div>
                  <div className="font-bold text-teal-600">= 42</div>
                </div>
              </div>
            </div>
          </div>

          {/* Embed Code Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Embed Binary to Decimal Calculator - Use on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Embed our binary to decimal converter into your website or blog to provide your users with a convenient binary to decimal calculator tool. Perfect for educational sites, programming tutorials, and technical documentation.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Binary to Decimal Calculator Embed Code</h3>
                <button 
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors"
                  onClick={() => {
                    const origin = typeof window !== 'undefined' ? window.location.origin : '';
                    const embedCode = `<iframe src="${origin}/tools/binary-to-decimal-converter?embed=true" width="100%" height="500" frameborder="0" title="Binary to Decimal Converter"></iframe>`;
                    navigator.clipboard.writeText(embedCode);
                  }}
                >
                  Copy Code
                </button>
              </div>
              
              <div className="bg-gray-900 text-blue-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`<iframe 
  src="${typeof window !== 'undefined' ? window.location.origin : ''}/tools/binary-to-decimal-converter?embed=true" 
  width="100%" 
  height="500" 
  frameborder="0" 
  title="Binary to Decimal Converter">
</iframe>`}</pre>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                This embed code will display a fully functional binary to decimal converter on your website, supporting responsive design and dark mode. Perfect for educational content and programming resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}