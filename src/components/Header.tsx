'use client'

import { Menu } from 'lucide-react'
import { useSidebar } from './ui/sidebar'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const { state, isMobile, setOpenMobile, openMobile } = useSidebar()
  
  return (
    <header 
      className={`fixed top-[3rem] right-0 z-[60] navbar transition-all duration-200 ease-linear ${
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
          {/* Mobile Logo - hidden on md screens and up */}
          <Image 
            src="/stackcess-icon-wb-logo.png" 
            alt="Stackcess Logo" 
            width={24}
            height={24}
            className="h-4 w-auto block md:hidden"
          />
          
          {/* Desktop Logo - hidden on screens smaller than md */}
          <Image 
            src="/stackcess-word-logo.svg" 
            alt="Stackcess Logo" 
            width={120}
            height={24}
            className="h-6 w-auto hidden md:block"
          />
        </div>

        {/* Right: Get Started Button + Mobile menu trigger */}
        <div className="flex items-center gap-3">
          {/* Get Started Button - always visible */}
          <Link href="/marketing">
            <Button 
              size="sm" 
              className="bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-200 font-medium"
            >
              Get Started
            </Button>
          </Link>
          
          {/* Mobile menu trigger (only on mobile) */}
          {isMobile && (
            <button
              onClick={() => setOpenMobile(!openMobile)}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label={openMobile ? "Close menu" : "Open menu"}
            >
              <Menu size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}