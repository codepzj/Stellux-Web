'use client'

import { Button } from '@heroui/react'
import { PanelRightOpen } from 'lucide-react'
import { useSidebar } from '@/components/ui/sidebar'

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      isIconOnly
      color="default"
      size="md"
      className="fixed z-50 bottom-20 right-6 shadow-lg"
      aria-label="折叠侧边栏"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      onPress={toggleSidebar}
      radius="full"
      variant="solid"
      disableRipple
    >
      <PanelRightOpen className="w-5 h-5" />
    </Button>
  )
}
