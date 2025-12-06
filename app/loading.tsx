export default function PostLoading() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navbar placeholder */}
      <div className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm" />

      {/* Main content loading */}
      <main className="flex-1">
        <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-8 sm:space-y-12">
          {/* Hero Section Skeleton */}
          <section className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar skeleton */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />

            <div className="space-y-3 flex-1">
              {/* Name skeleton */}
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse w-48" />

              {/* Location skeleton */}
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-32" />

              {/* Bio skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-3/4" />
              </div>

              {/* Links skeleton */}
              <div className="flex gap-2 pt-1">
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse w-16" />
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse w-16" />
              </div>
            </div>
          </section>

          {/* Tech Stack Skeleton */}
          <section className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-24" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"
                />
              ))}
            </div>
          </section>

          {/* Recent Posts Skeleton */}
          <section className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-32" />
            <div className="space-y-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900/50"
                >
                  <div className="space-y-2">
                    <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-3/4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-full" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-1/2" />
                    <div className="flex items-center gap-2 mt-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-16" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer placeholder */}
      <div className="h-16 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm" />
    </div>
  )
}
