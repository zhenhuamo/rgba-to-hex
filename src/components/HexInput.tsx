import { ChangeEvent } from 'react';
import { isValidHex } from '@/utils/colorConverter';

interface HexInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function HexInput({ value, onChange }: HexInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    
    // Add # if not present
    if (newValue && !newValue.startsWith('#')) {
      newValue = '#' + newValue;
    }
    
    // Convert to uppercase
    newValue = newValue.toUpperCase();
    
    onChange(newValue);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        HEX Color Value
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
            isValidHex(value) 
              ? 'border-gray-300 dark:border-gray-600' 
              : 'border-red-500 dark:border-red-500'
          }`}
          placeholder="#FFFFFF"
          maxLength={9}
        />
        {!isValidHex(value) && value !== '#' && (
          <p className="mt-2 text-sm text-red-500">
            Please enter a valid HEX color code
          </p>
        )}
      </div>
    </div>
  );
} 