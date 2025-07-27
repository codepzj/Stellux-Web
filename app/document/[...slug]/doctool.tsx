'use client'

import { IconLayoutSidebarLeftCollapse, IconChevronsUp } from '@tabler/icons-react'
import { useSidebar } from '@/components/ui/sidebar'

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
)

export default function Doctool() {
  const { toggleSidebar } = useSidebar()
  const iconClasses = 'text-default-500 pointer-events-none shrink-0'
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="w-full max-w-[260px] border rounded-small border-default-200 dark:border-default-100">
      <ul className="p-1 m-0 list-none">
        <li
          className="flex items-center gap-0 p-1 cursor-pointer hover:bg-default-100 rounded transition"
          onClick={toggleSidebar}
          title="折叠"
        >
          <IconLayoutSidebarLeftCollapse className={iconClasses} />
        </li>
        <li
          className="flex items-center gap-0 p-1 cursor-pointer hover:bg-default-100 rounded transition"
          onClick={scrollToTop}
          title="回到顶部"
        >
          <IconChevronsUp className={iconClasses} />
        </li>
      </ul>
    </div>
  )
}
