'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Yellow colors page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-900 dark:to-yellow-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-20">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-8 max-w-md mx-auto">
            {/* Error Icon */}
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg 
                className="w-8 h-8 text-yellow-600 dark:text-yellow-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-yellow-700 dark:text-yellow-300 mb-6">
              We encountered an error while loading the yellow colors. This might be a temporary issue.
            </p>

            <div className="space-y-3">
              <button
                onClick={reset}
                className="w-full px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/color-shades'}
                className="w-full px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-yellow-700 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-600 rounded-lg font-medium transition-colors"
              >
                Back to Color Shades
              </button>
            </div>

            {/* Error Details (Development) */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300">
                  Error Details
                </summary>
                <pre className="mt-2 p-3 bg-yellow-100 dark:bg-yellow-800/30 rounded text-xs text-yellow-800 dark:text-yellow-200 overflow-auto">
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
