'use client'

import { ReactNode } from "react"
import { UnifiedHeader } from "../UnifiedHeader"
import Link from "next/link"
import Image from "next/image"

interface AuthContext {
  isAuthenticated: boolean
  user?: any
}

interface HeaderProps {
  logoHref?: string
  onLogin?: () => void
  onRegister?: () => void
}

interface MarketingLayoutShellProps {
  children: ReactNode
  authContext: AuthContext
  showSidebar?: boolean
  announcementBar?: ReactNode
  headerProps?: HeaderProps
}

export function MarketingLayoutShell({ 
  children, 
  authContext, 
  announcementBar,
  headerProps 
}: MarketingLayoutShellProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {announcementBar}
      
      {/* Use the unified header with marketing variant */}
      <UnifiedHeader 
        variant="marketing"
        isAuthenticated={authContext.isAuthenticated}
        user={authContext.user}
        logoHref={headerProps?.logoHref}
        onLogin={headerProps?.onLogin}
        onRegister={headerProps?.onRegister}
      >
        {/* Navigation items for mobile menu could go here */}
      </UnifiedHeader>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}