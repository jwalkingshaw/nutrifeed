'use client'

import { Menu } from 'lucide-react'
import { useSidebar } from './ui/sidebar'

export default function Header() {
  const { state, isMobile, setOpenMobile, openMobile } = useSidebar()
  
  return (
    <header 
      className={`fixed top-0 right-0 z-[60] navbar transition-all duration-200 ease-linear ${
        isMobile 
          ? "left-0" // Full width on mobile
          : state === "collapsed" 
            ? "left-[3rem]" // Start after collapsed sidebar width on desktop
            : "left-[16rem]" // Start after expanded sidebar width on desktop
      }`}
    >
      <div className="w-full h-16 flex items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img 
            src="\StacksetLogo.svg" 
            alt="Stackset Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Right: Mobile menu trigger (only on mobile) */}
        {isMobile && (
          <div className="flex items-center">
            <button
              onClick={() => setOpenMobile(!openMobile)}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label={openMobile ? "Close menu" : "Open menu"}
            >
              <Menu size={20} />
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
