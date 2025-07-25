'use client'

import { Search, Menu } from 'lucide-react'
import { useState } from 'react'
import Container from './Container'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex gap-8 items-center h-16 justify-between">
          {/* Left: Brand matches left column width */}
          <div className="w-full lg:w-[600px] flex items-center space-x-4">
              
          </div>

          {/* Right: Nav matches sidebar width */}
          <div className="hidden lg:flex lg:w-[320px] justify-end items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Technology</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Testing</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Science</a>
            </nav>
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Technology</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Business</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Science</a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
