export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-900 dark:to-pink-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12 mt-8">
          <div className="h-12 bg-pink-200 dark:bg-pink-800 rounded-lg mb-4 mx-auto max-w-2xl animate-pulse"></div>
          <div className="h-6 bg-pink-100 dark:bg-pink-700 rounded-lg mb-2 mx-auto max-w-3xl animate-pulse"></div>
          <div className="h-6 bg-pink-100 dark:bg-pink-700 rounded-lg mb-6 mx-auto max-w-2xl animate-pulse"></div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-4 bg-pink-100 dark:bg-pink-700 rounded w-24 animate-pulse"></div>
            <div className="h-4 bg-pink-100 dark:bg-pink-700 rounded w-20 animate-pulse"></div>
            <div className="h-4 bg-pink-100 dark:bg-pink-700 rounded w-28 animate-pulse"></div>
          </div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="max-w-md mx-auto mb-6">
          <div className="h-12 bg-white dark:bg-gray-800 rounded-xl animate-pulse"></div>
        </div>

        {/* Category Tags Skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-10 bg-white dark:bg-gray-800 rounded-full animate-pulse"
              style={{ width: `${80 + Math.random() * 40}px` }}
            ></div>
          ))}
        </div>

        {/* Color Grid Skeleton */}
        <div className="bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 bg-pink-200 dark:bg-pink-800 rounded w-48 animate-pulse"></div>
            <div className="h-4 bg-pink-100 dark:bg-pink-700 rounded w-24 animate-pulse"></div>
          </div>

          <div className="h-[600px] overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm animate-pulse"
                >
                  <div className="aspect-square bg-pink-200 dark:bg-pink-800 rounded-lg mb-3"></div>
                  <div className="h-4 bg-pink-100 dark:bg-pink-700 rounded mb-2"></div>
                  <div className="h-3 bg-pink-50 dark:bg-pink-600 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mt-8">
          <div className="text-pink-600 dark:text-pink-400 font-medium animate-pulse">
            Loading pink color shades...
          </div>
        </div>
      </div>
    </div>
  );
}
