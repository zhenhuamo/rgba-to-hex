export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-900 dark:to-yellow-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12 mt-8">
          <div className="h-12 bg-yellow-200 dark:bg-yellow-800 rounded-lg mb-4 mx-auto max-w-2xl animate-pulse"></div>
          <div className="h-6 bg-yellow-100 dark:bg-yellow-700 rounded mb-2 mx-auto max-w-3xl animate-pulse"></div>
          <div className="h-6 bg-yellow-100 dark:bg-yellow-700 rounded mb-2 mx-auto max-w-2xl animate-pulse"></div>
          <div className="h-6 bg-yellow-100 dark:bg-yellow-700 rounded mb-6 mx-auto max-w-xl animate-pulse"></div>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-4 bg-yellow-200 dark:bg-yellow-800 rounded w-24 animate-pulse"></div>
            <div className="h-4 bg-yellow-200 dark:bg-yellow-800 rounded w-20 animate-pulse"></div>
            <div className="h-4 bg-yellow-200 dark:bg-yellow-800 rounded w-28 animate-pulse"></div>
          </div>
        </div>

        {/* Search and Filter Skeleton */}
        <div className="mb-8">
          <div className="max-w-md mx-auto mb-6">
            <div className="h-12 bg-white dark:bg-gray-800 rounded-lg animate-pulse"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-10 bg-white dark:bg-gray-800 rounded-full w-24 animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Color Grid Skeleton */}
        <div className="bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 bg-yellow-200 dark:bg-yellow-800 rounded w-48 animate-pulse"></div>
            <div className="h-4 bg-yellow-100 dark:bg-yellow-700 rounded w-24 animate-pulse"></div>
          </div>

          <div className="h-[600px] overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm animate-pulse">
                  <div className="aspect-square bg-yellow-200 dark:bg-yellow-800 rounded-lg mb-3"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded w-16"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
            <div className="w-5 h-5 border-2 border-yellow-600 dark:border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-lg font-medium">Loading Yellow Colors...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
