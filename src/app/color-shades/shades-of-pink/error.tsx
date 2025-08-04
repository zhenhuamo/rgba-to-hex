'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Pink colors page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-900 dark:to-pink-900">
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <div className="max-w-md mx-auto">
            {/* Error Icon */}
            <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-pink-600 dark:text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We encountered an error while loading the pink color shades. 
              This might be a temporary issue.
            </p>

            {/* Error Details */}
            {error.message && (
              <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg p-4 mb-6 text-left">
                <h3 className="text-sm font-medium text-pink-800 dark:text-pink-200 mb-2">
                  Error Details:
                </h3>
                <p className="text-sm text-pink-600 dark:text-pink-300 font-mono">
                  {error.message}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/color-shades'}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                Back to Color Shades
              </button>
            </div>

            {/* Help Text */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              If the problem persists, please refresh the page or try again later.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
