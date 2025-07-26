import { cn } from '@/lib/utils'

export const Spacer = ({
  x = 16,
  y = 16,
  className,
}: {
  x?: number
  y?: number
  className?: string
}) => {
  return <div className={cn(`h-${y} w-${x} inline-block`, className)} />
}
