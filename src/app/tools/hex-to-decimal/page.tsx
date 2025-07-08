'use client';

import Navigation from '@/components/Navigation';

export default function HexToDecimal() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Hex to Decimal Converter - Free Online Tool with Formula & Examples
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              Convert hexadecimal numbers to decimal instantly with our professional online hex to decimal converter. Includes conversion formula, tables, programming examples in Python, JavaScript, C, and Excel methods.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for programmers, students, and professionals working with binary data, memory addresses, color codes, and number system conversions. Supports 0x prefix, large numbers, and provides step-by-step calculations.
            </p>
          </div>

          {/* Converter Tool */}
          <div className="max-w-2xl mx-auto mb-12">
            <iframe 
              src="/tools/hex-to-decimal-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="500"
              title="Hexadecimal to Decimal Number Conversion Tool"
              loading="lazy"
            />
            
            <div className="flex justify-center mt-6">
              <a
                href="/tools/hex-to-decimal-converter"
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

          {/* Hex to Decimal Conversion Formula */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Hex to Decimal Conversion Formula</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Mathematical Formula</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-lg mb-4">
                  <div className="text-center">
                    <strong>Decimal = Σ (digit × 16^position)</strong>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Where each hexadecimal digit is multiplied by 16 raised to its position power (starting from 0 on the right), and all results are summed together.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Step-by-Step Example: 1A3F</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div>Position:  3  2  1  0</div>
                    <div>Digit:     1  A  3  F</div>
                    <div>Value:     1 10  3 15</div>
                    <div className="border-t pt-2 mt-3">
                      <div>1×16³ = 1×4096 = 4096</div>
                      <div>A×16² = 10×256 = 2560</div>
                      <div>3×16¹ = 3×16 = 48</div>
                      <div>F×16⁰ = 15×1 = 15</div>
                      <div className="border-t pt-2 font-bold">
                        Total: 4096+2560+48+15 = 6719
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Quick Reference: Hex Digits</h4>
                  <div className="grid grid-cols-4 gap-2 text-sm font-mono">
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">0=0</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">1=1</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">2=2</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">3=3</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">4=4</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">5=5</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">6=6</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">7=7</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">8=8</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">9=9</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded font-bold">A=10</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded font-bold">B=11</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded font-bold">C=12</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded font-bold">D=13</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded font-bold">E=14</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded font-bold">F=15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hex to Decimal Conversion Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Hex to Decimal Conversion Table</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Single Digit Table */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Single Hex Digits (0-F)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-blue-100 dark:bg-blue-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Hex</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Binary</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {[
                        ['0', '0', '0000'], ['1', '1', '0001'], ['2', '2', '0010'], ['3', '3', '0011'],
                        ['4', '4', '0100'], ['5', '5', '0101'], ['6', '6', '0110'], ['7', '7', '0111'],
                        ['8', '8', '1000'], ['9', '9', '1001'], ['A', '10', '1010'], ['B', '11', '1011'],
                        ['C', '12', '1100'], ['D', '13', '1101'], ['E', '14', '1110'], ['F', '15', '1111']
                      ].map(([hex, dec, bin], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-bold text-blue-600 dark:text-blue-400">{hex}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{dec}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-xs">{bin}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Common Multi-Digit Values */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Common Multi-Digit Values</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-green-100 dark:bg-green-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Hex</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      {[
                        ['10', '16', '1 byte boundary'],
                        ['FF', '255', '8-bit max'],
                        ['100', '256', '2^8'],
                        ['3FF', '1023', '10-bit max'],
                        ['FFF', '4095', '12-bit max'],
                        ['FFFF', '65535', '16-bit max'],
                        ['10000', '65536', '2^16'],
                        ['FFFFF', '1048575', '20-bit max'],
                        ['FFFFFF', '16777215', '24-bit max'],
                        ['FFFFFFFF', '4294967295', '32-bit max']
                      ].map(([hex,  desc], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-green-600 dark:text-green-400">{hex}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center">{parseInt(hex, 16).toLocaleString()}</td>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Hex to Decimal in Programming Languages</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Python */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">🐍</span>
                  Python - Hex to Decimal
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`# Method 1: Using int() function
hex_string = "1A3F"
decimal = int(hex_string, 16)
print(decimal)  # Output: 6719

# Method 2: Using 0x prefix
decimal = int("0x1A3F", 16)
print(decimal)  # Output: 6719

# Method 3: Manual calculation
def hex_to_decimal(hex_str):
    decimal = 0
    for i, digit in enumerate(hex_str[::-1]):
        if digit.isdigit():
            decimal += int(digit) * (16 ** i)
        else:
            decimal += (ord(digit.upper()) - ord('A') + 10) * (16 ** i)
    return decimal

print(hex_to_decimal("1A3F"))  # Output: 6719`}</code>
                </pre>
              </div>

              {/* JavaScript */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">⚡</span>
                  JavaScript - Hex to Decimal
                </h3>
                <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// Method 1: Using parseInt()
const hexString = "1A3F";
const decimal = parseInt(hexString, 16);
console.log(decimal); // Output: 6719

// Method 2: Using Number() with 0x prefix
const decimal2 = Number("0x1A3F");
console.log(decimal2); // Output: 6719

// Method 3: Manual function
function hexToDecimal(hex) {
    let decimal = 0;
    for (let i = 0; i < hex.length; i++) {
        const digit = hex[hex.length - 1 - i];
        const value = isNaN(digit) ? 
            digit.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 10 : 
            parseInt(digit);
        decimal += value * Math.pow(16, i);
    }
    return decimal;
}

console.log(hexToDecimal("1A3F")); // Output: 6719`}</code>
                </pre>
              </div>

              {/* C Programming */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">⚙️</span>
                  C - Hex to Decimal
                </h3>
                <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`#include <stdio.h>
#include <string.h>
#include <math.h>

// Method 1: Using sscanf()
int main() {
    char hex[] = "1A3F";
    unsigned int decimal;
    sscanf(hex, "%x", &decimal);
    printf("Decimal: %u\\n", decimal); // Output: 6719
    return 0;
}

// Method 2: Manual conversion
int hexToDecimal(char hex[]) {
    int len = strlen(hex);
    int decimal = 0;
    int power = 0;
    
    for (int i = len - 1; i >= 0; i--) {
        int digit;
        if (hex[i] >= '0' && hex[i] <= '9') {
            digit = hex[i] - '0';
        } else if (hex[i] >= 'A' && hex[i] <= 'F') {
            digit = hex[i] - 'A' + 10;
        } else if (hex[i] >= 'a' && hex[i] <= 'f') {
            digit = hex[i] - 'a' + 10;
        }
        decimal += digit * pow(16, power++);
    }
    return decimal;
}`}</code>
                </pre>
              </div>

              {/* Excel */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">📊</span>
                  Excel - Hex to Decimal
                </h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Built-in Function:</h4>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      =HEX2DEC(&quot;1A3F&quot;)
                    </code>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Result: 6719</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Manual Formula:</h4>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm text-xs">
                      =SUMPRODUCT(--(&quot;0123456789ABCDEF&quot;&amp;&quot;&quot;),MID(A1,ROW(INDIRECT(&quot;1:&quot;&amp;LEN(A1))),1)+1)*16^(LEN(A1)-ROW(INDIRECT(&quot;1:&quot;&amp;LEN(A1)))))
                    </code>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Note:</strong> Excel&apos;s HEX2DEC function supports up to 10 characters (40 bits). For larger numbers, use programming languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Topics */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Advanced Hex to Decimal Concepts</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Endianness */}
              <div className="space-y-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Little Endian vs Big Endian</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Hex: 0x12345678</h4>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm space-y-1">
                        <div><strong>Big Endian:</strong> 12 34 56 78 → 305,419,896</div>
                        <div><strong>Little Endian:</strong> 78 56 34 12 → 2,018,915,346</div>
                      </div>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Endianness affects how multi-byte hex values are interpreted in memory. Most x86 systems use little-endian format.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-200">Hex Color Codes</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 rounded"></div>
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">#FF0000 → R:255, G:0, B:0</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded"></div>
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">#00FF00 → R:0, G:255, B:0</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded"></div>
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">#0000FF → R:0, G:0, B:255</code>
                    </div>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mt-3">
                    Each pair of hex digits represents RGB color intensity (0-255).
                  </p>
                </div>
              </div>

              {/* IP Addresses and Memory */}
              <div className="space-y-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">Hex IP Addresses</h3>
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      <div><strong>IPv4:</strong> 192.168.1.1</div>
                      <div><strong>Hex:</strong> 0xC0A80101</div>
                      <div><strong>Decimal:</strong> 3,232,235,777</div>
                    </div>
                    <div className="text-sm space-y-1">
                      <div>C0 (192) | A8 (168) | 01 (1) | 01 (1)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">Memory Addresses</h3>
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm space-y-1">
                      <div><strong>32-bit:</strong> 0x7FFFFFFF → 2,147,483,647</div>
                      <div><strong>64-bit:</strong> 0x7FFFFFFFFFFFFFFF</div>
                      <div className="text-xs">→ 9,223,372,036,854,775,807</div>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Memory addresses are typically displayed in hexadecimal for easier reading and debugging.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Common Hex Patterns</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div><strong>0xDEADBEEF</strong> → 3,735,928,559 (Debug marker)</div>
                    <div><strong>0xCAFEBABE</strong> → 3,405,691,582 (Java class files)</div>
                    <div><strong>0xFEEDFACE</strong> → 4,277,009,102 (Mach-O files)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embed This Tool Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Embed This Hexadecimal Converter</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Integrate this professional hex to decimal converter into your website, documentation, or educational platform:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/hex-to-decimal-converter?embed=true" 
  width="100%" 
  height="500" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="Hexadecimal to Decimal Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hex-to-decimal-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;overflow:hidden;" title="Hexadecimal to Decimal Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">How do you convert hex to decimal manually?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  To convert hex to decimal manually, multiply each digit by 16 raised to its position power (starting from 0 on the right) and sum all results. For example, 1A3F = 1×16³ + 10×16² + 3×16¹ + 15×16⁰ = 4096 + 2560 + 48 + 15 = 6719.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">What&apos;s the difference between hex color codes and regular hex numbers?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hex color codes are simply hexadecimal numbers representing RGB values. A 6-digit hex color like #FF5733 contains three 2-digit hex numbers: FF (red=255), 57 (green=87), and 33 (blue=51). The conversion principle is identical.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Why do programmers use hexadecimal?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hexadecimal is preferred because it directly maps to binary (4 bits = 1 hex digit), making it easier to represent memory addresses, byte values, and bit patterns. It&apos;s more compact than binary and more readable than decimal for low-level programming.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">How large hex numbers can this converter handle?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our converter uses JavaScript&apos;s BigInt for numbers larger than 32 bits, supporting virtually unlimited precision. This makes it suitable for cryptographic hashes, large memory addresses, and scientific calculations requiring extreme precision.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">What about negative hex numbers?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hexadecimal representation of negative numbers depends on the system (two&apos;s complement in most cases). For example, in 32-bit two&apos;s complement, 0xFFFFFFFF represents -1. Our converter handles positive hex numbers; for negative numbers, consider the specific encoding used in your system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 