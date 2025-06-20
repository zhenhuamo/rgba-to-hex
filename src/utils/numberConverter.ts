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

// ===== Binary to Decimal Conversion =====

export interface BinaryToDecimalResult {
  decimal: string;
  isValid: boolean;
  error?: string;
}

/**
 * Validate if a binary string is valid
 * @param binary Binary string (only 0s and 1s)
 * @returns Whether it's a valid binary number
 */
export function isValidBinaryNumber(binary: string): boolean {
  if (!binary || typeof binary !== 'string') {
    return false;
  }
  
  // Remove spaces and clean input
  const cleanBinary = binary.trim().replace(/\s/g, '');
  
  // Check if empty
  if (cleanBinary.length === 0) {
    return false;
  }
  
  // Check if it only contains 0s and 1s
  const binaryRegex = /^[01]+$/;
  return binaryRegex.test(cleanBinary);
}

/**
 * Convert binary number to decimal
 * @param binary Binary string (only 0s and 1s)
 * @returns Conversion result object containing decimal string, validity, and possible error message
 */
export function binaryToDecimal(binary: string): BinaryToDecimalResult {
  // Input validation
  if (!binary || typeof binary !== 'string') {
    return {
      decimal: '',
      isValid: false,
      error: 'Please enter a valid binary number'
    };
  }

  // Clean input: remove spaces
  const cleanBinary = binary.trim().replace(/\s/g, '');
  
  // Check if empty
  if (cleanBinary.length === 0) {
    return {
      decimal: '',
      isValid: false,
      error: 'Input cannot be empty'
    };
  }

  // Validate format
  if (!isValidBinaryNumber(cleanBinary)) {
    return {
      decimal: '',
      isValid: false,
      error: 'Please enter valid binary digits (only 0 and 1 allowed)'
    };
  }

  try {
    // For smaller numbers, use parseInt
    if (cleanBinary.length <= 53) { // JavaScript safe integer limit
      const decimal = parseInt(cleanBinary, 2);
      return {
        decimal: decimal.toString(),
        isValid: true
      };
    } else {
      // For large numbers, use BigInt
      const decimal = BigInt('0b' + cleanBinary);
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
 * Get common binary number examples
 * @returns Array of common binary numbers
 */
export function getCommonBinaryNumbers(): Array<{ binary: string; description: string; decimal: string }> {
  return [
    { binary: '1', description: 'Smallest positive integer', decimal: '1' },
    { binary: '1111', description: '4-bit maximum value', decimal: '15' },
    { binary: '10000', description: '16 (2^4)', decimal: '16' },
    { binary: '11111111', description: '8-bit maximum (1 byte)', decimal: '255' },
    { binary: '100000000', description: '256 (2^8)', decimal: '256' },
    { binary: '1111111111111111', description: '16-bit maximum (2 bytes)', decimal: '65535' },
    { binary: '10000000000000000', description: '65536 (2^16)', decimal: '65536' },
    { binary: '10101010', description: 'Alternating pattern', decimal: '170' },
    { binary: '11110000', description: 'Upper 4 bits set', decimal: '240' },
    { binary: '1010101010101010', description: '16-bit alternating pattern', decimal: '43690' }
  ];
}

// ===== Decimal to Binary Conversion =====

export interface DecimalToBinaryResult {
  binary: string;
  isValid: boolean;
  error?: string;
}

/**
 * Validate if a decimal string is valid
 * @param decimal Decimal number string
 * @returns Whether it's a valid decimal number
 */
export function isValidDecimalNumber(decimal: string): boolean {
  if (!decimal || typeof decimal !== 'string') {
    return false;
  }
  
  // Remove spaces and clean input
  const cleanDecimal = decimal.trim().replace(/,/g, ''); // Remove thousand separators
  
  // Check if empty
  if (cleanDecimal.length === 0) {
    return false;
  }
  
  // Check if it's a valid positive integer (no negative numbers for binary conversion)
  const decimalRegex = /^[0-9]+$/;
  return decimalRegex.test(cleanDecimal);
}

/**
 * Convert decimal number to binary
 * @param decimal Decimal number string
 * @returns Conversion result object containing binary string, validity, and possible error message
 */
export function decimalToBinary(decimal: string): DecimalToBinaryResult {
  // Input validation
  if (!decimal || typeof decimal !== 'string') {
    return {
      binary: '',
      isValid: false,
      error: 'Please enter a valid decimal number'
    };
  }

  // Clean input: remove spaces and thousand separators
  const cleanDecimal = decimal.trim().replace(/,/g, '');
  
  // Check if empty
  if (cleanDecimal.length === 0) {
    return {
      binary: '',
      isValid: false,
      error: 'Input cannot be empty'
    };
  }

  // Validate format
  if (!isValidDecimalNumber(cleanDecimal)) {
    return {
      binary: '',
      isValid: false,
      error: 'Please enter valid decimal digits (only 0-9 allowed)'
    };
  }

  try {
    // Handle zero case
    if (cleanDecimal === '0') {
      return {
        binary: '0',
        isValid: true
      };
    }

    // For smaller numbers, use parseInt
    if (cleanDecimal.length <= 15) { // Reasonable limit for Number.toString()
      const number = parseInt(cleanDecimal, 10);
      const binary = number.toString(2);
      return {
        binary,
        isValid: true
      };
    } else {
      // For large numbers, use BigInt
      const number = BigInt(cleanDecimal);
      const binary = number.toString(2);
      return {
        binary,
        isValid: true
      };
    }
  } catch {
    return {
      binary: '',
      isValid: false,
      error: 'Conversion failed: number may be too large or format incorrect'
    };
  }
}

/**
 * Get common decimal number examples for binary conversion
 * @returns Array of common decimal numbers
 */
export function getCommonDecimalNumbers(): Array<{ decimal: string; description: string; binary: string }> {
  return [
    { decimal: '1', description: 'Smallest positive integer', binary: '1' },
    { decimal: '15', description: '4-bit binary maximum', binary: '1111' },
    { decimal: '16', description: '2 to the 4th power', binary: '10000' },
    { decimal: '255', description: '8-bit binary maximum', binary: '11111111' },
    { decimal: '256', description: '2 to the 8th power', binary: '100000000' },
    { decimal: '1024', description: '2 to the 10th power (1KB)', binary: '10000000000' },
    { decimal: '65535', description: '16-bit binary maximum', binary: '1111111111111111' },
    { decimal: '65536', description: '2 to the 16th power', binary: '10000000000000000' },
    { decimal: '100', description: 'Common integer', binary: '1100100' },
    { decimal: '1000', description: 'Common integer', binary: '1111101000' }
  ];
}

// ===== Octal Number Conversion =====

export interface OctalToDecimalResult {
  decimal: string;
  isValid: boolean;
  error?: string;
}

export interface DecimalToOctalResult {
  octal: string;
  isValid: boolean;
  error?: string;
}

export interface UnixPermissionResult {
  isValid: boolean;
  owner: { read: boolean; write: boolean; execute: boolean };
  group: { read: boolean; write: boolean; execute: boolean };
  other: { read: boolean; write: boolean; execute: boolean };
  representation: string; // 如 "rwxr-xr-x"
  description: string;
  error?: string;
}

/**
 * Validate if an octal string is valid
 * @param octal Octal string (only 0-7 digits), may include 0o prefix
 * @returns Whether it's a valid octal number
 */
export function isValidOctalNumber(octal: string): boolean {
  if (!octal || typeof octal !== 'string') {
    return false;
  }
  
  // Remove possible 0o prefix and spaces
  const cleanOctal = octal.trim().replace(/^0o/i, '');
  
  // Check if empty
  if (cleanOctal.length === 0) {
    return false;
  }
  
  // Check if it only contains valid octal characters (0-7)
  const octalRegex = /^[0-7]+$/;
  return octalRegex.test(cleanOctal);
}

/**
 * Convert octal number to decimal
 * @param octal Octal string (only 0-7 digits), may include 0o prefix
 * @returns Conversion result object containing decimal string, validity, and possible error message
 */
export function octalToDecimal(octal: string): OctalToDecimalResult {
  // Input validation
  if (!octal || typeof octal !== 'string') {
    return {
      decimal: '',
      isValid: false,
      error: 'Please enter a valid octal number'
    };
  }

  // Clean input: remove spaces and possible 0o prefix
  const cleanOctal = octal.trim().replace(/^0o/i, '');
  
  // Check if empty
  if (cleanOctal.length === 0) {
    return {
      decimal: '',
      isValid: false,
      error: 'Input cannot be empty'
    };
  }

  // Validate format
  if (!isValidOctalNumber(cleanOctal)) {
    return {
      decimal: '',
      isValid: false,
      error: 'Please enter valid octal digits (0-7 only)'
    };
  }

  try {
    // For smaller numbers, use parseInt
    if (cleanOctal.length <= 10) { // Safe limit for octal
      const decimal = parseInt(cleanOctal, 8);
      return {
        decimal: decimal.toString(),
        isValid: true
      };
    } else {
      // For large numbers, use BigInt
      const decimal = BigInt('0o' + cleanOctal);
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
 * Convert decimal number to octal
 * @param decimal Decimal number string
 * @returns Conversion result object containing octal string, validity, and possible error message
 */
export function decimalToOctal(decimal: string): DecimalToOctalResult {
  // Input validation
  if (!decimal || typeof decimal !== 'string') {
    return {
      octal: '',
      isValid: false,
      error: 'Please enter a valid decimal number'
    };
  }

  // Clean input: remove spaces and thousand separators
  const cleanDecimal = decimal.trim().replace(/,/g, '');
  
  // Check if empty
  if (cleanDecimal.length === 0) {
    return {
      octal: '',
      isValid: false,
      error: 'Input cannot be empty'
    };
  }

  // Validate format
  if (!isValidDecimalNumber(cleanDecimal)) {
    return {
      octal: '',
      isValid: false,
      error: 'Please enter valid decimal digits (0-9 only)'
    };
  }

  try {
    // Handle zero case
    if (cleanDecimal === '0') {
      return {
        octal: '0',
        isValid: true
      };
    }

    // For smaller numbers, use parseInt
    if (cleanDecimal.length <= 15) {
      const number = parseInt(cleanDecimal, 10);
      const octal = number.toString(8);
      return {
        octal,
        isValid: true
      };
    } else {
      // For large numbers, use BigInt
      const number = BigInt(cleanDecimal);
      const octal = number.toString(8);
      return {
        octal,
        isValid: true
      };
    }
  } catch {
    return {
      octal: '',
      isValid: false,
      error: 'Conversion failed: number may be too large or format incorrect'
    };
  }
}

/**
 * Format octal number with grouping separators
 * @param octal Octal number string
 * @param groupSize Group size (default 3)
 * @returns Formatted octal string with spaces
 */
export function formatOctalNumber(octal: string, groupSize: number = 3): string {
  if (!octal) return '';
  
  try {
    // Add spaces every groupSize digits from right to left
    const reversed = octal.split('').reverse().join('');
    const grouped = reversed.match(new RegExp(`.{1,${groupSize}}`, 'g')) || [];
    return grouped.map(group => group.split('').reverse().join('')).reverse().join(' ');
  } catch {
    return octal;
  }
}

/**
 * Convert octal number to Unix file permissions
 * @param octal Octal string (typically 3 digits for file permissions)
 * @returns Unix permission result with parsed permissions
 */
export function octalToUnixPermissions(octal: string): UnixPermissionResult {
  const cleanOctal = octal.trim().replace(/^0o/i, '');
  
  if (!isValidOctalNumber(cleanOctal)) {
    return {
      isValid: false,
      owner: { read: false, write: false, execute: false },
      group: { read: false, write: false, execute: false },
      other: { read: false, write: false, execute: false },
      representation: '',
      description: '',
      error: 'Please enter valid octal permission digits (0-7)'
    };
  }

  // Pad to 3 digits if needed
  const paddedOctal = cleanOctal.padStart(3, '0');
  
  if (paddedOctal.length > 4) {
    return {
      isValid: false,
      owner: { read: false, write: false, execute: false },
      group: { read: false, write: false, execute: false },
      other: { read: false, write: false, execute: false },
      representation: '',
      description: '',
      error: 'Unix permissions are typically 3-digit octal numbers'
    };
  }

  try {
    // Take last 3 digits for basic permissions
    const permissionDigits = paddedOctal.slice(-3);
    const ownerPerm = parseInt(permissionDigits[0], 10);
    const groupPerm = parseInt(permissionDigits[1], 10);
    const otherPerm = parseInt(permissionDigits[2], 10);

    const parsePermissions = (perm: number) => ({
      read: (perm & 4) !== 0,
      write: (perm & 2) !== 0,
      execute: (perm & 1) !== 0
    });

    const owner = parsePermissions(ownerPerm);
    const group = parsePermissions(groupPerm);
    const other = parsePermissions(otherPerm);

    const formatPermGroup = (perm: { read: boolean; write: boolean; execute: boolean }) => 
      (perm.read ? 'r' : '-') + (perm.write ? 'w' : '-') + (perm.execute ? 'x' : '-');

    const representation = formatPermGroup(owner) + formatPermGroup(group) + formatPermGroup(other);
    
    // Generate description
    const descriptions = {
      '755': 'Owner: read/write/execute, Group & Others: read/execute',
      '644': 'Owner: read/write, Group & Others: read only',
      '777': 'All permissions: everyone read/write/execute',
      '600': 'Owner: read/write, Group & Others: no permissions',
      '700': 'Owner: read/write/execute, Group & Others: no permissions',
      '666': 'Everyone: read/write, no execute permissions',
      '555': 'Everyone: read/execute, no write permissions'
    };

    const description = descriptions[permissionDigits as keyof typeof descriptions] || 
      `Owner: ${owner.read ? 'read ' : ''}${owner.write ? 'write ' : ''}${owner.execute ? 'execute ' : ''}, ` +
      `Group: ${group.read ? 'read ' : ''}${group.write ? 'write ' : ''}${group.execute ? 'execute ' : ''}, ` +
      `Others: ${other.read ? 'read ' : ''}${other.write ? 'write ' : ''}${other.execute ? 'execute ' : ''}`;

    return {
      isValid: true,
      owner,
      group,
      other,
      representation,
      description
    };
  } catch {
    return {
      isValid: false,
      owner: { read: false, write: false, execute: false },
      group: { read: false, write: false, execute: false },
      other: { read: false, write: false, execute: false },
      representation: '',
      description: '',
      error: 'Permission parsing failed'
    };
  }
}

/**
 * Convert Unix permission string to octal
 * @param permissions Permission string like "rwxr-xr-x"
 * @returns Octal representation
 */
export function unixPermissionsToOctal(permissions: string): string {
  if (!permissions || permissions.length !== 9) {
    return '';
  }

  const groups = [
    permissions.slice(0, 3), // owner
    permissions.slice(3, 6), // group
    permissions.slice(6, 9)  // other
  ];

  const octalDigits = groups.map(group => {
    let value = 0;
    if (group[0] === 'r') value += 4;
    if (group[1] === 'w') value += 2;
    if (group[2] === 'x') value += 1;
    return value.toString();
  });

  return octalDigits.join('');
}

/**
 * Get common octal number examples
 * @returns Array of common octal numbers with descriptions
 */
export function getCommonOctalNumbers(): Array<{ octal: string; description: string; decimal: string; unixPermission?: string }> {
  return [
    { octal: '7', description: 'Maximum single octal digit', decimal: '7' },
    { octal: '10', description: 'Octal 10 (decimal 8)', decimal: '8' },
    { octal: '77', description: 'Maximum 2-digit octal', decimal: '63' },
    { octal: '100', description: 'Octal 100 (decimal 64)', decimal: '64' },
    { octal: '644', description: 'Unix file permission: owner read/write, others read', decimal: '420', unixPermission: 'rw-r--r--' },
    { octal: '755', description: 'Unix file permission: owner all, others read/execute', decimal: '493', unixPermission: 'rwxr-xr-x' },
    { octal: '777', description: 'Unix file permission: everyone all permissions', decimal: '511', unixPermission: 'rwxrwxrwx' },
    { octal: '600', description: 'Unix file permission: owner read/write only', decimal: '384', unixPermission: 'rw-------' },
    { octal: '700', description: 'Unix file permission: owner all permissions only', decimal: '448', unixPermission: 'rwx------' },
    { octal: '1000', description: 'Octal 1000 (decimal 512)', decimal: '512' }
  ];
} 