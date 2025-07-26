import { Spinner } from '@heroui/spinner'

export default function PostLoading() {
  return (
    <div className="h-[calc(100vh-100px)] w-screen flex justify-center items-center">
      <Spinner label="加载中..." variant="wave" />
    </div>
  )
}
