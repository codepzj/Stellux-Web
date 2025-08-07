'use client'

import { useEffect, useState } from 'react'
import { Button } from '@heroui/button'
import { IconArrowUp } from '@tabler/icons-react'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      isIconOnly
      color="primary"
      size="md" // 改为中等尺寸
      className={`fixed z-50 bottom-6 right-6 shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="回到顶部"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      onClick={handleBackToTop}
      radius="full"
      variant="solid"
    >
      <IconArrowUp className="w-5 h-5" /> {/* 图标稍微小一点 */}
    </Button>
  )
}
