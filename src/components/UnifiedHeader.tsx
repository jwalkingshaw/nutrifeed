'use client'

import React, { useState, useEffect } from 'react'
import { ReactNode } from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface UnifiedHeaderProps {
  variant: 'marketing'
  isAuthenticated?: boolean
  user?: any
  logoHref?: string
  onLogin?: () => void
  onRegister?: () => void
  children?: ReactNode
}

export function UnifiedHeader({
  variant,
  logoHref = "/",
  children
}: UnifiedHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Marketing header with black background - positioned below announcement bar
  const headerClasses = `fixed top-[3rem] left-0 right-0 z-[60] bg-[#0a0a0a] h-[67px] transition-all duration-300 ${isScrolled ? 'border-b border-white/10' : 'border-b border-transparent'}`
  
  return (
    <header className={headerClasses}>
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-[67px] w-full relative">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link href={logoHref} className="flex items-center space-x-2">
              {/* Mobile: Show just icon */}
              <Image 
                src="/stackcess-icon-white-logo.svg" 
                alt="Stackcess" 
                width={24}
                height={24}
                className="h-6 w-6 flex-shrink-0 sm:hidden"
              />
              {/* Desktop: Show full logo */}
              <Image 
                src="/stackcess-full-logo-white.svg" 
                alt="Stackcess" 
                width={120}
                height={24}
                className="h-6 w-auto hidden sm:block flex-shrink-0"
              />
            </Link>
          </div>

          {/* Center: Navigation - absolutely positioned to true center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <nav className="hidden md:flex items-center space-x-1">
              {/* Navigation items can be added here if needed */}
            </nav>
          </div>

          {/* Right side: Auth + Actions */}
          <div className="flex items-center">
            {children}
          </div>
        </div>
      </div>
    </header>
  )
}