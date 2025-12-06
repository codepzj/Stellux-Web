export default function AboutLoading() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-10 sm:space-y-14">
      {/* Skills Section Skeleton */}
      <section className="space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-24" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-16" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-6 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse w-16" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section Skeleton */}
      <section className="space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-32" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
                {i < 2 && <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 animate-pulse mt-2" />}
              </div>
              <div className="pb-6 flex-1">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-24 mb-1" />
                <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-32 mb-1" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section Skeleton */}
      <section className="space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-24" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse w-16" />
          ))}
        </div>
      </section>

      {/* Current Focus Section Skeleton */}
      <section className="space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-32" />
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse mt-2" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
