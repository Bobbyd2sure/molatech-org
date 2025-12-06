export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo/Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-200 dark:border-purple-900 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-1">
          <span className="text-lg font-medium text-muted-foreground">Loading</span>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
          </span>
        </div>
      </div>
    </div>
  )
}
