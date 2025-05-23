// Number base conversion utility functions
// Dedicated to various number base conversions, independent of color conversion functionality

export interface HexToDecimalResult {
  decimal: string;
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