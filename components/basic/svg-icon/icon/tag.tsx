import { IconSvgProps } from '@/types'

export const TagIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M5.5 9A1.5 1.5 0 0 0 7 7.5A1.5 1.5 0 0 0 5.5 6A1.5 1.5 0 0 0 4 7.5A1.5 1.5 0 0 0 5.5 9m11.91 2.58c.36.36.59.86.59 1.42c0 .55-.22 1.05-.59 1.41l-5 5a1.996 1.996 0 0 1-2.83 0l-6.99-6.99C2.22 12.05 2 11.55 2 11V6c0-1.11.89-2 2-2h5c.55 0 1.05.22 1.41.58zm-3.87-5.87l1-1l6.87 6.87c.37.36.59.87.59 1.42s-.22 1.05-.58 1.41l-5.38 5.38l-1-1L20.75 13z" />
  </svg>
)
