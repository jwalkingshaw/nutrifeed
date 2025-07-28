'use client'

import { Search } from 'lucide-react'
import { SidebarTrigger } from './ui/sidebar'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full navbar">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between max-w-7xl mx-auto">
          {/* Left: Sidebar Trigger + Logo */}
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
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
      </div>
    </header>
  )
}
