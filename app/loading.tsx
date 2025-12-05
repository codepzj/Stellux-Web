export default function PostLoading() {
  return (
    <div className="h-[calc(100vh-100px)] w-screen flex justify-center items-center">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="size-5 rounded-full border-2 border-t-transparent border-primary animate-spin" />
        <span>加载中...</span>
      </div>
    </div>
  )
}
