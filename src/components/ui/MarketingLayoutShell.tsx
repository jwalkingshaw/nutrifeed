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

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2">
                <img 
                  src="/stackcess-full-logo-white.svg" 
                  alt="Stackcess" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="mt-4 text-white/60 text-sm">
                The supplement industry operating system.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/roadmap" className="hover:text-white">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="/industry-news" className="hover:text-white">Industry News</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-white/60 text-sm">
              © 2024 Stackcess. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}