'use client'

import { ReactNode } from "react"
import { UnifiedHeader } from "../UnifiedHeader"

interface AuthContext {
  isAuthenticated: boolean
  user?: unknown
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
    <div className="min-h-screen bg-background">
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

      {/* Main content - account for announcement bar (3rem) + header (67px) */}
      <main className="flex-1 pt-[115px]">
        {children}
      </main>
    </div>
  )
}