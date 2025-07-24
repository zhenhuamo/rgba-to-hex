export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏骨架 */}
        <div className="h-16 bg-white dark:bg-gray-800 rounded-xl mb-8 animate-pulse"></div>

        {/* Hero Section 骨架 */}
        <div className="text-center mb-12 mt-8">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 max-w-md mx-auto animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 max-w-2xl mx-auto animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 max-w-xl mx-auto animate-pulse"></div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-28 animate-pulse"></div>
          </div>
        </div>

        {/* 搜索栏骨架 */}
        <div className="max-w-md mx-auto mb-6">
          <div className="h-12 bg-white dark:bg-gray-800 rounded-xl animate-pulse"></div>
        </div>

        {/* 分类标签骨架 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 bg-white dark:bg-gray-800 rounded-full animate-pulse"
              style={{ width: `${80 + Math.random() * 40}px` }}
            ></div>
          ))}
        </div>

        {/* 颜色网格骨架 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            ></div>
          ))}
        </div>

        {/* 加载指示器 */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-600 dark:text-gray-300">Loading blue shades...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
