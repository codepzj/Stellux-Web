'use client'

import { IconCopy, IconCheck } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '@heroui/button'
import { cn } from '@/lib/utils'
import { addToast } from '@heroui/toast'

const CopyButton = ({ copyId, className }: { copyId: string; className?: string }) => {
  const [copied, setCopited] = useState(false)
  const onCopy = async () => {
    try {
      setCopited(true)
      const text = document.getElementById(copyId)!.innerText
      await navigator.clipboard.writeText(text)
      setTimeout(() => {
        setCopited(false)
      }, 1500)
      addToast({
        title: '复制成功',
        color: 'success',
      })
    } catch (error) {
      console.log(error)
      addToast({
        title: '复制失败',
        color: 'danger',
      })
    }
  }

  return (
    <Button
      onPress={onCopy}
      isIconOnly
      aria-label="Copy"
      variant="light"
      className={cn(
        'p-0 w-8 h-8 min-w-8 min-h-8 rounded-md cursor-pointer hover:bg-default-100 dark:hover:bg-default-500/10',
        className
      )}
    >
      {copied ? (
        <IconCheck className="transition-transform duration-300" size={16} />
      ) : (
        <IconCopy className="transition-transform duration-300" size={16} />
      )}
    </Button>
  )
}

export default CopyButton
