export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-amber-900">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏骨架 */}
        <div className="mb-8">
          <div className="h-16 bg-white/30 dark:bg-gray-800/30 rounded-xl animate-pulse"></div>
        </div>

        {/* Hero Section 骨架 */}
        <div className="text-center mb-12 mt-8">
          <div className="h-12 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-gray-700 dark:to-amber-700 rounded-lg mb-4 animate-pulse"></div>
          <div className="space-y-2 mb-6">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto w-2/3 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto w-1/2 animate-pulse"></div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-6 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        {/* 搜索栏骨架 */}
        <div className="max-w-md mx-auto mb-6">
          <div className="h-12 bg-white dark:bg-gray-800 rounded-xl animate-pulse"></div>
        </div>

        {/* 分类标签骨架 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="h-10 w-24 bg-white dark:bg-gray-800 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* 颜色网格骨架 */}
        <div className="bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
          
          <div className="h-[600px] overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm animate-pulse">
                  <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-200 dark:from-gray-600 dark:to-amber-600 rounded-lg mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
