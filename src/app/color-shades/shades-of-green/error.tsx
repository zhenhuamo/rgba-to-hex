'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Shades of Green page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-green-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto px-4"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
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
          
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Something went wrong!
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We encountered an error while loading the green color palette. 
            Please try again or refresh the page.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Try Again
            </button>
            
            <button
              onClick={() => window.location.href = '/color-shades'}
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Back to Color Shades
            </button>
          </div>
          
          {error.digest && (
            <p className="text-xs text-gray-400 mt-4">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
