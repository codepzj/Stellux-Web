'use client'

import { IconCopy, IconCheck } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '@heroui/button'
import { cn } from '@/lib/utils'
import { addToast } from '@heroui/toast'

const CopyButton = ({ copyId, className }: { copyId: string; className?: string }) => {
  const [copied, setCopited] = useState(false)

  // 检查是否支持 Clipboard API
  const isClipboardSupported = () => {
    return navigator.clipboard && typeof navigator.clipboard.writeText === 'function'
  }

  // 等待元素存在并获取文本内容
  const waitForElementAndGetText = async (id: string, maxRetries = 10): Promise<string> => {
    for (let i = 0; i < maxRetries; i++) {
      const element = document.getElementById(id)
      if (element) {
        // 尝试多种方法获取文本内容
        const text =
          element.innerText ||
          element.textContent ||
          element.innerHTML?.replace(/<[^>]*>/g, '') ||
          ''
        if (text.trim()) {
          return text
        }
      }

      // 如果元素不存在或没有文本内容，等待一小段时间后重试
      await new Promise((resolve) => setTimeout(resolve, 50))
    }
    throw new Error('超时等待目标元素加载')
  }

  // 备用复制方法
  const fallbackCopyToClipboard = (text: string) => {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.width = '2em'
    textArea.style.height = '2em'
    textArea.style.padding = '0'
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.style.background = 'transparent'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      const successful = document.execCommand('copy')
      if (!successful) {
        throw new Error('fallbackCopyToClipboard failed')
      }
      return true
    } catch (err) {
      console.error('Fallback copy failed', err)
      return false
    } finally {
      document.body.removeChild(textArea)
    }
  }

  const onCopy = async () => {
    try {
      setCopited(true)

      // 等待元素加载并获取文本内容
      const text = await waitForElementAndGetText(copyId)

      if (!text.trim()) {
        throw new Error('没有文本内容可复制')
      }

      // 检查是否有HTTPS或localhost环境
      const isSecureContext =
        window.isSecureContext ||
        window.location.protocol === 'https:' ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'

      let copySuccess = false

      // 尝试使用现代 Clipboard API
      if (isClipboardSupported() && isSecureContext) {
        try {
          // 请求剪贴板权限
          const permission = await navigator.permissions
            .query({ name: 'clipboard-write' as PermissionName })
            .catch(() => null)
          if (permission?.state === 'denied') {
            throw new Error('用户拒绝了剪贴板权限')
          }

          await navigator.clipboard.writeText(text)
          copySuccess = true
        } catch (clipboardError) {
          console.warn('Clipboard API failed, trying fallback:', clipboardError)
          // 如果现代API失败，尝试备用方法
          copySuccess = fallbackCopyToClipboard(text)
        }
      } else {
        // 使用备用复制方法
        copySuccess = fallbackCopyToClipboard(text)
      }

      if (!copySuccess) {
        throw new Error('所有复制方法都失败了')
      }

      setTimeout(() => {
        setCopited(false)
      }, 1500)

      addToast({
        title: '复制成功',
        color: 'success',
      })
    } catch (error) {
      console.error('复制失败:', error)
      setCopited(false)

      // 更详细的错误提示，特别处理元素不存在的情况
      let errorMessage = '复制失败'
      if (error instanceof Error) {
        if (error.message.includes('超时等待目标元素加载')) {
          errorMessage = '代码块还未加载完成，请稍后重试'
        } else if (error.message.includes('permission')) {
          errorMessage = '浏览器拒绝了访问剪贴板权限，请在浏览器设置中允许后重试'
        } else if (error.message.includes('not supported')) {
          errorMessage = '当前浏览器不支持复制功能'
        } else if (error.message.includes('复制的元素不存在')) {
          errorMessage = '代码块加载中，请稍后重试'
        } else {
          errorMessage = error.message
        }
      }

      addToast({
        title: errorMessage,
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
