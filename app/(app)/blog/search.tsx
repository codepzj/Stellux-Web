'use client'
import { Input, InputProps } from '@heroui/input'
import { SearchLinearIcon } from '@/components/basic/svg-icon'
import { Kbd } from '@heroui/kbd'
import { useEffect, useRef } from 'react'
import { useSearch } from './provider'

export const Search = ({ ...props }: InputProps) => {
  const { openSearch } = useSearch()
  const mouseDownRef = useRef(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.userAgent.includes('Mac')
      const isCtrlOrCmd = isMac ? e.metaKey : e.ctrlKey
      if (isCtrlOrCmd && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        openSearch()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [openSearch])

  // 解决再次点击搜索框弹窗一闪而过的问题
  // 用 onClick 替代 onMouseDown，并阻止默认行为
  return (
    <>
      <Input
        {...props}
        readOnly
        classNames={{
          input: 'cursor-pointer',
          inputWrapper: 'cursor-pointer',
        }}
        onClick={(e) => {
          e.preventDefault()
          openSearch()
        }}
        placeholder="搜索博客"
        startContent={<SearchLinearIcon size={20} className="text-default-500" />}
        endContent={
          <Kbd className="inline-block text-xs shadow-none rounded-sm" keys={['ctrl']}>
            K
          </Kbd>
        }
      />
    </>
  )
}
