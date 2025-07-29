'use client'

import { Search } from 'lucide-react'
import { useSidebar } from './ui/sidebar'

export default function Header() {
  const { state } = useSidebar()
  
  return (
    <header 
      className={`fixed top-0 right-0 z-[60] navbar transition-all duration-200 ease-linear ${
        state === "collapsed" 
          ? "left-[3rem]" // Start after collapsed sidebar width
          : "left-[16rem]" // Start after expanded sidebar width
      }`}
    >
      <div className="w-full h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="\StacksetLogo.svg" 
            alt="Stackset Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Right: Search */}
        <div className="flex items-center">
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
