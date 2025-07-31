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
    // 记录错误到控制台
    console.error('Purple colors page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏 */}
        <Navigation />

        {/* 错误内容 */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-md mx-auto"
          >
            {/* 错误图标 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-12 h-12 text-red-500"
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
            </motion.div>

            {/* 错误标题 */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Oops! Something went wrong
            </motion.h1>

            {/* 错误描述 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              We encountered an error while loading the purple colors. 
              This might be a temporary issue. Please try again.
            </motion.p>

            {/* 错误详情（开发模式） */}
            {process.env.NODE_ENV === 'development' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-8 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg text-left"
              >
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
                  Error Details (Development Mode):
                </h3>
                <p className="text-xs text-red-600 dark:text-red-300 font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                    Error ID: {error.digest}
                  </p>
                )}
              </motion.div>
            )}

            {/* 操作按钮 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={reset}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/color-shades'}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                Back to Color Shades
              </button>
            </motion.div>

            {/* 帮助链接 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-sm text-gray-500 dark:text-gray-400"
            >
              <p>
                Still having issues?{' '}
                <a
                  href="mailto:support@rgba-to-hex.com"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Contact Support
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
