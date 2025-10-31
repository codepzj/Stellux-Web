'use client'

import { Button } from '@heroui/react'
import { MessageCircle } from 'lucide-react'

export function ScrollToComment() {
  return (
    <Button
      isIconOnly
      color="default"
      size="md"
      aria-label="跳转到评论"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      radius="full"
      onPress={() => {
        const comment = document.getElementById('comment')
        if (comment) {
          comment.scrollIntoView({ behavior: 'smooth' })
        }
      }}
      variant="solid"
      className="fixed z-50 bottom-20 right-6 shadow-lg transition-opacity duration-300"
      disableRipple
    >
      <MessageCircle className="w-5 h-5" />
    </Button>
  )
}
