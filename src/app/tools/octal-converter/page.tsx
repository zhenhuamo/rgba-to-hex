'use client';

import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

export default function OctalConverter() {
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    // Set iframe URL only on client side to avoid hydration mismatch
    setIframeUrl('/tools/octal-converter-tool?embed=true');
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Octal to Decimal Converter - Professional Online Tool for Easy Octal Conversion
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              Master octal to decimal conversion with our comprehensive online calculator. Learn how to convert decimal to octal and octal to decimal using step-by-step methods, conversion formulas, and real-world examples. Perfect for programming, Unix permissions, and computer science education.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Professional octal to decimal converter supporting bidirectional conversion with instant results. Features detailed conversion explanations, Unix permission calculator, programming examples in Python/Java/C++, and practice problems including 5267 octal to decimal, 1743 octal conversions, and more.
            </p>
          </div>

          {/* Converter Tool */}
          <div className="max-w-2xl mx-auto mb-12">
            {iframeUrl ? (
              <iframe 
                src={iframeUrl}
                className="w-full border-none rounded-2xl shadow-xl"
                height="600"
                title="Octal to Decimal Number Conversion Tool"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[600px] bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading converter...</div>
              </div>
            )}
            
            <div className="flex justify-center mt-6">
              <a
                href="/tools/octal-converter-tool"
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

          {/* Comprehensive Octal to Decimal Conversion Guide */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">How to Convert Octal to Decimal: Complete Mathematical Guide</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Easy Way to Convert Octal to Decimal Using Positional Notation</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-lg mb-4">
                  <div className="text-center">
                    <strong>Decimal Value = Σ (Octal Digit × 8^Position)</strong><br />
                    <strong>Position Index: Rightmost digit = 0, Next = 1, etc.</strong>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The fundamental principle behind octal to decimal conversion lies in understanding the base-8 positional number system. Each digit position represents a power of 8, starting from 8⁰ = 1 for the rightmost digit. This systematic approach makes octal to decimal conversion straightforward and accurate for any size number.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Why This Method Works for Octal to Decimal Conversion</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Octal (base-8) uses digits 0-7, where each position represents increasing powers of 8. This positional value system allows us to convert any octal number to its decimal equivalent by calculating the weighted sum of each digit multiplied by its corresponding power of 8.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Example 1: Convert 755 Octal to Decimal</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div>Position:     2  1  0</div>
                    <div>Octal Digit:  7  5  5</div>
                    <div>Power of 8:   8² 8¹ 8⁰</div>
                    <div>Values:       64 8  1</div>
                    <div className="border-t pt-2 mt-3">
                      <div>7×8² = 7×64 = 448</div>
                      <div>5×8¹ = 5×8 = 40</div>
                      <div>5×8⁰ = 5×1 = 5</div>
                      <div className="border-t pt-2 font-bold text-blue-600">
                        Sum: 448+40+5 = 493 (Decimal)
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Result: 755₈ = 493₁₀ (Unix permission: rwxr-xr-x)
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Example 2: Convert 5267 Octal to Decimal</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div>Position:     3   2  1  0</div>
                    <div>Octal Digit:  5   2  6  7</div>
                    <div>Power of 8:   8³  8² 8¹ 8⁰</div>
                    <div>Values:       512 64 8  1</div>
                    <div className="border-t pt-2 mt-3">
                      <div>5×8³ = 5×512 = 2560</div>
                      <div>2×8² = 2×64 = 128</div>
                      <div>6×8¹ = 6×8 = 48</div>
                      <div>7×8⁰ = 7×1 = 7</div>
                      <div className="border-t pt-2 font-bold text-purple-600">
                        Sum: 2560+128+48+7 = 2743₁₀
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    This demonstrates how to convert larger octal numbers to decimal
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-orange-800 dark:text-orange-200">Example 3: Convert 1743 Octal to Decimal</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div>Position:     3   2  1  0</div>
                    <div>Octal Digit:  1   7  4  3</div>
                    <div>Power of 8:   8³  8² 8¹ 8⁰</div>
                    <div>Values:       512 64 8  1</div>
                    <div className="border-t pt-2 mt-3">
                      <div>1×8³ = 1×512 = 512</div>
                      <div>7×8² = 7×64 = 448</div>
                      <div>4×8¹ = 4×8 = 32</div>
                      <div>3×8⁰ = 3×1 = 3</div>
                      <div className="border-t pt-2 font-bold text-orange-600">
                        Sum: 512+448+32+3 = 995₁₀
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Answer: 1743₈ = 995₁₀ (Common octal conversion practice)
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Powers of 8 Reference Table</h4>
                  <div className="grid grid-cols-4 gap-1 text-xs font-mono">
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">8⁰=1</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">8¹=8</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">8²=64</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">8³=512</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">8⁴=4096</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">8⁵=32768</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">Valid: 0-7</div>
                    <div className="text-center p-2 bg-white dark:bg-gray-800 rounded">Base-8</div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Essential powers of 8 for manual octal to decimal conversion calculations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Convert Decimal to Octal - Reverse Process */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">How to Convert Decimal to Octal: Division Method Explained</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Step-by-Step Method: Convert 918 Decimal to Octal</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Division by 8 Process</h4>
                    <div className="space-y-2 font-mono text-sm">
                      <div>918 ÷ 8 = 114 remainder 6</div>
                      <div>114 ÷ 8 = 14 remainder 2</div>
                      <div>14 ÷ 8 = 1 remainder 6</div>
                      <div>1 ÷ 8 = 0 remainder 1</div>
                      <div className="border-t pt-2 mt-3 font-bold text-purple-600">
                        Read remainders upward: 1626₈
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Verification</h4>
                    <div className="space-y-1 font-mono text-sm">
                      <div>1×8³ = 1×512 = 512</div>
                      <div>6×8² = 6×64 = 384</div>
                      <div>2×8¹ = 2×8 = 16</div>
                      <div>6×8⁰ = 6×1 = 6</div>
                      <div className="border-t pt-2 mt-3 font-bold text-green-600">
                        512+384+16+6 = 918 ✓
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm">
                  This division method demonstrates how to convert decimal to octal by repeatedly dividing by 8 and collecting remainders. The process is the reverse of octal to decimal conversion, making it essential for bidirectional number system conversions.
                </p>
              </div>
            </div>
          </div>

          {/* Complete Conversion Tables */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Complete Octal to Decimal Conversion Reference Tables</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Single Digit Table */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Single Octal Digits (0-7)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-blue-100 dark:bg-blue-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Octal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Binary</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {[
                        ['0', '0', '000'], ['1', '1', '001'], ['2', '2', '010'], ['3', '3', '011'],
                        ['4', '4', '100'], ['5', '5', '101'], ['6', '6', '110'], ['7', '7', '111']
                      ].map(([oct, dec, bin], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-bold text-blue-600 dark:text-blue-400">{oct}</td>
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
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Common Octal Values & Unix Permissions</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-purple-100 dark:bg-purple-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Octal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Decimal</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Unix Permission</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      {[
                        ['644', '420', 'rw-r--r--'],
                        ['755', '493', 'rwxr-xr-x'],
                        ['777', '511', 'rwxrwxrwx'],
                        ['600', '384', 'rw-------'],
                        ['700', '448', 'rwx------'],
                        ['666', '438', 'rw-rw-rw-'],
                        ['555', '365', 'r-xr-xr-x'],
                        ['444', '292', 'r--r--r--'],
                        ['10', '8', '--------x'],
                        ['77', '63', '--rwxrwx']
                      ].map(([oct, dec, perm], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-purple-600 dark:text-purple-400">{oct}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center">{dec}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-xs">{perm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Unix Permissions System */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Unix File Permissions & Octal Notation</h2>
            
            <div className="space-y-6">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-amber-800 dark:text-amber-200">Understanding Unix Permission Structure</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-center mb-2">Owner (User)</h4>
                    <div className="text-center font-mono">
                      <div>r w x</div>
                      <div>4 2 1</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-center mb-2">Group</h4>
                    <div className="text-center font-mono">
                      <div>r w x</div>
                      <div>4 2 1</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-center mb-2">Others</h4>
                    <div className="text-center font-mono">
                      <div>r w x</div>
                      <div>4 2 1</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Each permission digit is the sum of: Read (4) + Write (2) + Execute (1). For example, 7 = 4+2+1 (full permissions), 5 = 4+1 (read + execute), 4 = read only.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">Common File Permissions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold">644</span>
                      <span>Owner: rw-, Group: r--, Others: r--</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold">600</span>
                      <span>Owner: rw-, Group: ---, Others: ---</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold">444</span>
                      <span>All: r--, Read-only for everyone</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Common Directory Permissions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold">755</span>
                      <span>Owner: rwx, Group: r-x, Others: r-x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold">700</span>
                      <span>Owner: rwx, Group: ---, Others: ---</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold">777</span>
                      <span>All: rwx, Full access for everyone</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Programming Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Octal to Decimal Programming Implementation Guide</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Learn how to implement octal to decimal conversion in major programming languages. These examples demonstrate both built-in functions and manual conversion methods for educational purposes.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Python */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">🐍</span>
                  Python Program to Convert Decimal to Binary Octal and Hexadecimal
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>{`# Complete Python octal to decimal converter
def octal_to_decimal(octal_str):
    """Convert octal string to decimal integer"""
    try:
        decimal = int(octal_str, 8)
        return decimal
    except ValueError:
        return "Invalid octal number"

# Example: Convert 5267 octal to decimal
result = octal_to_decimal("5267")
print(f"5267₈ = {result}₁₀")  # Output: 5267₈ = 2743₁₀

# How to use octal and decimal in Python
def decimal_to_octal(decimal_num):
    """Convert decimal to octal"""
    return oct(decimal_num)[2:]  # Remove '0o' prefix

# Bidirectional conversion examples
octal_nums = ["755", "1743", "644", "777"]
for octal in octal_nums:
    decimal = octal_to_decimal(octal)
    back_to_octal = decimal_to_octal(decimal)
    print(f"{octal}₈ → {decimal}₁₀ → {back_to_octal}₈")

# Unix permissions with octal
import stat
permissions = [0o755, 0o644, 0o777, 0o600]
for perm in permissions:
    print(f"{oct(perm)} = {stat.filemode(perm)}")
`}</code></pre>
              </div>

              {/* JavaScript */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">📜</span>
                  JavaScript - Octal Conversion
                </h3>
                <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto"><code>{`// Octal to Decimal
const octalStr = "755";
const decimal = parseInt(octalStr, 8);
console.log(\`Octal \${octalStr} = Decimal \${decimal}\`);
// Output: Octal 755 = Decimal 493

// Decimal to Octal
const dec = 493;
const octal = dec.toString(8);
console.log(\`Decimal \${dec} = Octal \${octal}\`);
// Output: Decimal 493 = Octal 755

// Permission parser
function parseOctalPerm(octal) {
  const perms = ['---', '--x', '-w-', '-wx', 
                 'r--', 'r-x', 'rw-', 'rwx'];
  return octal.split('').map(d => perms[d]).join('');
}`}</code></pre>
              </div>

              {/* Java */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">☕</span>
                  Java - Octal Conversion
                </h3>
                <pre className="bg-gray-900 text-red-400 p-4 rounded-lg text-sm overflow-x-auto"><code>{`// Octal to Decimal
String octalStr = "755";
int decimal = Integer.parseInt(octalStr, 8);
System.out.println("Octal " + octalStr + 
                   " = Decimal " + decimal);
// Output: Octal 755 = Decimal 493

// Decimal to Octal
int dec = 493;
String octal = Integer.toOctalString(dec);
System.out.println("Decimal " + dec + 
                   " = Octal " + octal);
// Output: Decimal 493 = Octal 755

// Using octal literals
int permission = 0755; // Octal literal
System.out.println("Permission: " + permission);`}</code></pre>
              </div>

              {/* C++ */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">⚡</span>
                  C++ - Octal Conversion
                </h3>
                <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto"><code>{`#include <iostream>
#include <string>
using namespace std;

// Octal to Decimal
string octal = "755";
int decimal = stoi(octal, 0, 8);
cout << "Octal " << octal << " = Decimal " 
     << decimal << endl;
// Output: Octal 755 = Decimal 493

// Decimal to Octal using iostream
int dec = 493;
cout << "Decimal " << dec << " = Octal " 
     << oct << dec << endl;
// Output: Decimal 493 = Octal 755

// File permissions in Unix systems
#include <sys/stat.h>
chmod("file.txt", 0755); // Set permissions`}</code></pre>
              </div>
            </div>
          </div>

          {/* Comprehensive FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Octal to Decimal Conversion - Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">What is the easiest way to convert octal to decimal?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The easiest way to convert octal to decimal is using the positional notation method: multiply each octal digit by 8 raised to its position power (starting from 0 on the right), then sum all results. For example, 755₈ = 7×8² + 5×8¹ + 5×8⁰ = 448 + 40 + 5 = 493₁₀.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">How do you convert 5267 octal to decimal?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To convert 5267 octal to decimal: 5×8³ + 2×8² + 6×8¹ + 7×8⁰ = 5×512 + 2×64 + 6×8 + 7×1 = 2560 + 128 + 48 + 7 = 2743₁₀. This demonstrates the systematic approach for converting any octal number to decimal.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">How we convert octal to decimal in programming?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Most programming languages provide built-in functions: Python uses int(&quot;755&quot;, 8), JavaScript uses parseInt(&quot;755&quot;, 8), Java uses Integer.parseInt(&quot;755&quot;, 8), and C++ uses stoi(&quot;755&quot;, 0, 8). These functions automatically handle the octal to decimal conversion using the base-8 interpretation.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Why are Unix file permissions represented in octal?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Unix permissions use octal because each permission group (owner, group, others) uses exactly 3 bits (read=4, write=2, execute=1). Since 3 bits can represent values 0-7, octal notation perfectly matches this structure. For example, 755₈ means owner has rwx (7), group has r-x (5), others have r-x (5).
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">What&apos;s the difference between octal, decimal, and hexadecimal?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Octal (base-8) uses digits 0-7, decimal (base-10) uses digits 0-9, and hexadecimal (base-16) uses digits 0-9 and letters A-F. Each system represents numbers differently: 100₈ = 64₁₀ = 40₁₆. Understanding these conversions is essential for computer programming and system administration.
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">How to practice decimal to octal conversion problems?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Practice decimal to octal practice questions by using the division method: repeatedly divide by 8 and collect remainders. Start with simple numbers like 64₁₀ = 100₈, then progress to complex examples like 918₁₀ = 1626₈. Verify your answers by converting back using octal to decimal methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 