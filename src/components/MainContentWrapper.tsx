'use client'

import { useSidebar } from "@/components/ui/sidebar"

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const { open, setOpen, isMobile, openMobile, setOpenMobile } = useSidebar()

  const handleContentClick = () => {
    if (isMobile && openMobile) {
      setOpenMobile(false)
    } else if (!isMobile && open) {
      setOpen(false)
    }
  }

  return (
    <div className="w-full" onClick={handleContentClick}>
      {children}
    </div>
  )
}