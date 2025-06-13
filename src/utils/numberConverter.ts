// Number base conversion utility functions
// Dedicated to various number base conversions, independent of color conversion functionality

export interface HexToDecimalResult {
  decimal: string;
  isValid: boolean;
  error?: string;
}

export interface HexToBinaryResult {
  binary: string;
  isValid: boolean;
  error?: string;
}

/**
 * Validate if a hexadecimal string is valid
 * @param hex Hexadecimal string, may or may not include 0x prefix
 * @returns Whether it's a valid hexadecimal number
 */
export function isValidHexNumber(hex: string): boolean {
  if (!hex || typeof hex !== 'string') {
    return false;
  }
  
  // Remove possible 0x prefix and spaces
  const cleanHex = hex.trim().replace(/^0x/i, '');
  
  // Check if empty
  if (cleanHex.length === 0) {
    return false;
  }
  
  // Check if it only contains valid hexadecimal characters (0-9, A-F, a-f)
  const hexRegex = /^[0-9A-Fa-f]+$/;
  return hexRegex.test(cleanHex);
}

/**
 * Convert hexadecimal number to decimal
 * @param hex Hexadecimal string, may or may not include 0x prefix
 * @returns Conversion result object containing decimal string, validity, and possible error message
 */
export function hexToDecimal(hex: string): HexToDecimalResult {
  // Input validation
  if (!hex || typeof hex !== 'string') {
    return {
      decimal: '',
      isValid: false,
      error: 'Please enter a valid hexadecimal number'
    };
  }

  // Clean input: remove spaces and possible 0x prefix
  const cleanHex = hex.trim().replace(/^0x/i, '');
  
  // Check if empty
  if (cleanHex.length === 0) {
    return {
      decimal: '',
      isValid: false,
      error: 'Input cannot be empty'
    };
  }

  // Validate format
  if (!isValidHexNumber(cleanHex)) {
    return {
      decimal: '',
      isValid: false,
      error: 'Please enter valid hexadecimal characters (0-9, A-F)'
    };
  }

  try {
    // For smaller numbers, use parseInt
    if (cleanHex.length <= 8) {
      const decimal = parseInt(cleanHex, 16);
      return {
        decimal: decimal.toString(),
        isValid: true
      };
    } else {
      // For large numbers, use BigInt
      const decimal = BigInt('0x' + cleanHex);
      return {
        decimal: decimal.toString(),
        isValid: true
      };
    }
  } catch {
    return {
      decimal: '',
      isValid: false,
      error: 'Conversion failed: number may be too large or format incorrect'
    };
  }
}

/**
 * Format decimal number by adding thousand separators
 * @param decimal Decimal number string
 * @returns Formatted number string
 */
export function formatDecimalNumber(decimal: string): string {
  if (!decimal) return '';
  
  try {
    // Use regex to add thousand separators
    return decimal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch {
    return decimal;
  }
}

/**
 * Get common hexadecimal number examples
 * @returns Array of common hexadecimal numbers
 */
export function getCommonHexNumbers(): Array<{ hex: string; description: string; decimal: string }> {
  return [
    { hex: 'F', description: 'Maximum single-digit hex', decimal: '15' },
    { hex: 'FF', description: '8-bit maximum (1 byte)', decimal: '255' },
    { hex: '100', description: '256 (2^8)', decimal: '256' },
    { hex: 'FFF', description: '12-bit maximum', decimal: '4095' },
    { hex: 'FFFF', description: '16-bit maximum (2 bytes)', decimal: '65535' },
    { hex: '10000', description: '65536 (2^16)', decimal: '65536' },
    { hex: 'FFFFFF', description: '24-bit maximum (3 bytes)', decimal: '16777215' },
    { hex: 'FFFFFFFF', description: '32-bit maximum (4 bytes)', decimal: '4294967295' },
    { hex: '1A2B3C', description: 'Random example', decimal: '1715004' },
    { hex: 'DEADBEEF', description: 'Common programmer example', decimal: '3735928559' }
  ];
}

/**
 * Convert hexadecimal number to binary
 * @param hex Hexadecimal string, may or may not include 0x prefix
 * @returns Conversion result object containing binary string, validity, and possible error message
 */
export function hexToBinary(hex: string): HexToBinaryResult {
  // Input validation
  if (!hex || typeof hex !== 'string') {
    return {
      binary: '',
      isValid: false,
      error: 'Please enter a valid hexadecimal number'
    };
  }

  // Clean input: remove spaces and possible 0x prefix
  const cleanHex = hex.trim().replace(/^0x/i, '');
  
  // Check if empty
  if (cleanHex.length === 0) {
    return {
      binary: '',
      isValid: false,
      error: 'Input cannot be empty'
    };
  }

  // Validate format
  if (!isValidHexNumber(cleanHex)) {
    return {
      binary: '',
      isValid: false,
      error: 'Please enter valid hexadecimal characters (0-9, A-F)'
    };
  }

  try {
    // Hex to binary mapping
    const hexToBinMap: { [key: string]: string } = {
      '0': '0000', '1': '0001', '2': '0010', '3': '0011',
      '4': '0100', '5': '0101', '6': '0110', '7': '0111',
      '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
      'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'
    };

    // Convert each hex digit to 4 binary digits
    let binary = '';
    for (const hexDigit of cleanHex.toUpperCase()) {
      binary += hexToBinMap[hexDigit];
    }

    return {
      binary,
      isValid: true
    };
  } catch {
    return {
      binary: '',
      isValid: false,
      error: 'Conversion failed: invalid hexadecimal format'
    };
  }
}

/**
 * Format binary number with grouping separators
 * @param binary Binary number string
 * @param groupSize Group size (4, 8, 16, or 32)
 * @returns Formatted binary string with spaces
 */
export function formatBinaryNumber(binary: string, groupSize: number = 4): string {
  if (!binary) return '';
  
  try {
    // Add spaces every groupSize digits from right to left
    const reversed = binary.split('').reverse().join('');
    const grouped = reversed.match(new RegExp(`.{1,${groupSize}}`, 'g')) || [];
    return grouped.map(group => group.split('').reverse().join('')).reverse().join(' ');
  } catch {
    return binary;
  }
}

/**
 * Get common binary patterns and hex equivalents
 * @returns Array of common binary patterns with descriptions
 */
export function getCommonBinaryPatterns(): Array<{ hex: string; binary: string; description: string }> {
  return [
    { hex: '0', binary: '0000', description: 'All bits off' },
    { hex: '1', binary: '0001', description: 'LSB set' },
    { hex: '7', binary: '0111', description: '3 lower bits set' },
    { hex: '8', binary: '1000', description: 'MSB set (4-bit)' },
    { hex: 'F', binary: '1111', description: 'All bits on (4-bit)' },
    { hex: 'FF', binary: '11111111', description: 'All bits on (8-bit)' },
    { hex: '80', binary: '10000000', description: 'MSB set (8-bit)' },
    { hex: 'AA', binary: '10101010', description: 'Alternating pattern' },
    { hex: '55', binary: '01010101', description: 'Inverse alternating' },
    { hex: 'FFFF', binary: '1111111111111111', description: 'All bits on (16-bit)' }
  ];
}

/**
 * Get hex to binary digit mapping table
 * @returns Complete mapping table for single hex digits
 */
export function getHexBinaryMapping(): Array<{ hex: string; binary: string; decimal: number }> {
  return [
    { hex: '0', binary: '0000', decimal: 0 },
    { hex: '1', binary: '0001', decimal: 1 },
    { hex: '2', binary: '0010', decimal: 2 },
    { hex: '3', binary: '0011', decimal: 3 },
    { hex: '4', binary: '0100', decimal: 4 },
    { hex: '5', binary: '0101', decimal: 5 },
    { hex: '6', binary: '0110', decimal: 6 },
    { hex: '7', binary: '0111', decimal: 7 },
    { hex: '8', binary: '1000', decimal: 8 },
    { hex: '9', binary: '1001', decimal: 9 },
    { hex: 'A', binary: '1010', decimal: 10 },
    { hex: 'B', binary: '1011', decimal: 11 },
    { hex: 'C', binary: '1100', decimal: 12 },
    { hex: 'D', binary: '1101', decimal: 13 },
    { hex: 'E', binary: '1110', decimal: 14 },
    { hex: 'F', binary: '1111', decimal: 15 }
  ];
} 