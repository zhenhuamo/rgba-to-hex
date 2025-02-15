import { CMYK, ColorSystemInfo, getColorSystemInfo } from '@/utils/colorConverter';

interface ColorSystemInfoProps {
  cmyk: CMYK;
}

export default function ColorSystemInfoDisplay({ cmyk }: ColorSystemInfoProps) {
  const colorInfo: ColorSystemInfo = getColorSystemInfo(cmyk);

  return (
    <div className="space-y-6">
      {/* Pantone Match */}
      <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
        <h3 className="text-lg font-medium mb-3">Closest Pantone Match</h3>
        <div className="text-lg font-mono text-blue-600 dark:text-blue-400">
          {colorInfo.pantone}
        </div>
      </div>

      {/* Print Compatibility */}
      <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
        <h3 className="text-lg font-medium mb-3">Print Compatibility</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Color Gamut</span>
              <span className={`px-2 py-1 rounded text-sm ${
                colorInfo.isInGamut 
                  ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                  : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
              }`}>
                {colorInfo.isInGamut ? 'In Gamut' : 'Out of Gamut'}
              </span>
            </div>
            {!colorInfo.isInGamut && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Total ink coverage exceeds 300%. Consider reducing color values.
              </p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Printability Score</span>
              <span className={`px-2 py-1 rounded text-sm ${
                colorInfo.printabilityScore >= 80
                  ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                  : colorInfo.printabilityScore >= 60
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400'
                  : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
              }`}>
                {colorInfo.printabilityScore}/100
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
              <div 
                className={`h-2.5 rounded-full ${
                  colorInfo.printabilityScore >= 80
                    ? 'bg-green-600'
                    : colorInfo.printabilityScore >= 60
                    ? 'bg-yellow-500'
                    : 'bg-red-600'
                }`}
                style={{ width: `${colorInfo.printabilityScore}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
        <h3 className="text-lg font-medium mb-3">Technical Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Total Ink Coverage:</span>
            <span className="font-mono">
              {cmyk.c + cmyk.m + cmyk.y + cmyk.k}%
            </span>
          </div>
          <div className="flex justify-between">
            <span>Max Channel:</span>
            <span className="font-mono">
              {Math.max(cmyk.c, cmyk.m, cmyk.y, cmyk.k)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 