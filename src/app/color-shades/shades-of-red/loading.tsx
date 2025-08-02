export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 dark:from-gray-900 dark:to-red-900">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏骨架 */}
        <div className="mb-8">
          <div className="h-16 bg-white/50 dark:bg-gray-800/50 rounded-xl animate-pulse"></div>
        </div>

        {/* Hero Section 骨架 */}
        <div className="text-center mb-12 mt-8">
          <div className="h-12 bg-white/50 dark:bg-gray-800/50 rounded-lg mb-4 max-w-2xl mx-auto animate-pulse"></div>
          <div className="h-6 bg-white/50 dark:bg-gray-800/50 rounded-lg mb-2 max-w-3xl mx-auto animate-pulse"></div>
          <div className="h-6 bg-white/50 dark:bg-gray-800/50 rounded-lg mb-6 max-w-2xl mx-auto animate-pulse"></div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-4 w-32 bg-white/50 dark:bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-white/50 dark:bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-white/50 dark:bg-gray-800/50 rounded animate-pulse"></div>
          </div>
        </div>

        {/* 搜索栏骨架 */}
        <div className="max-w-md mx-auto mb-6">
          <div className="h-12 bg-white/50 dark:bg-gray-800/50 rounded-xl animate-pulse"></div>
        </div>

        {/* 分类标签骨架 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-24 bg-white/50 dark:bg-gray-800/50 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* 颜色网格骨架 - 固定容器 */}
        <div className="bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
          {/* 容器标题骨架 */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 w-48 bg-white/50 dark:bg-gray-700/50 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-white/50 dark:bg-gray-700/50 rounded animate-pulse"></div>
          </div>

          {/* 固定高度的颜色网格容器 */}
          <div className="h-[600px] overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white/50 dark:bg-gray-800/50 rounded-xl animate-pulse max-h-[120px]"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="w-full h-3/4 bg-red-200/50 dark:bg-red-800/50 rounded-t-xl animate-pulse"></div>
                  <div className="p-2 space-y-1">
                    <div className="h-3 bg-gray-300/50 dark:bg-gray-600/50 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-300/50 dark:bg-gray-600/50 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 底部加载提示 */}
          <div className="mt-4 text-center">
            <div className="h-4 w-40 bg-white/50 dark:bg-gray-700/50 rounded mx-auto animate-pulse"></div>
          </div>
        </div>

        {/* 加载指示器 */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* 文本内容骨架 */}
        <div className="mt-16 space-y-8">
          <div className="text-center">
            <div className="h-8 bg-white/50 dark:bg-gray-800/50 rounded-lg mb-4 max-w-md mx-auto animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-white/50 dark:bg-gray-800/50 rounded max-w-4xl mx-auto animate-pulse"></div>
              <div className="h-4 bg-white/50 dark:bg-gray-800/50 rounded max-w-3xl mx-auto animate-pulse"></div>
              <div className="h-4 bg-white/50 dark:bg-gray-800/50 rounded max-w-2xl mx-auto animate-pulse"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 animate-pulse">
                <div className="h-6 bg-gray-300/50 dark:bg-gray-600/50 rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300/50 dark:bg-gray-600/50 rounded"></div>
                  <div className="h-4 bg-gray-300/50 dark:bg-gray-600/50 rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
