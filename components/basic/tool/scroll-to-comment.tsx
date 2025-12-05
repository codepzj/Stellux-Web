'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export function ScrollToComment() {
  return (
    <Button
      aria-label="跳转到评论"
      size="icon"
      variant="default"
      className="fixed z-50 bottom-20 right-6 shadow-lg rounded-full"
      onClick={() => {
        const comment = document.getElementById('comment')
        if (comment) {
          comment.scrollIntoView({ behavior: 'smooth' })
        }
      }}
    >
      <MessageCircle className="w-5 h-5" />
    </Button>
  )
}
