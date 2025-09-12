'use client'

import { ReactNode } from "react"

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
    <div className="min-h-screen bg-white">
      {announcementBar}
      
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href={headerProps?.logoHref || "/"} className="flex items-center space-x-2">
                <img 
                  src="/stackcess-icon-wb-logo.svg" 
                  alt="Stackcess" 
                  className="h-8 w-8"
                />
                <img 
                  src="/stackcess-word-logo.svg" 
                  alt="Stackcess" 
                  className="h-6 w-auto hidden sm:block"
                />
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="/industry-news" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                News
              </a>
              <a href="/roadmap" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Roadmap
              </a>
            </nav>

            {/* Auth buttons */}
            <div className="flex items-center space-x-4">
              {!authContext.isAuthenticated ? (
                <>
                  <button 
                    onClick={headerProps?.onLogin}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Login
                  </button>
                  <button 
                    onClick={headerProps?.onRegister}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                  >
                    Get Started
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Welcome back!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2">
                <img 
                  src="/stackcess-icon-wb-logo.svg" 
                  alt="Stackcess" 
                  className="h-8 w-8"
                />
                <img 
                  src="/stackcess-word-logo.svg" 
                  alt="Stackcess" 
                  className="h-6 w-auto"
                />
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                The supplement industry operating system.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/pricing" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="/about" className="hover:text-gray-900">About</a></li>
                <li><a href="/roadmap" className="hover:text-gray-900">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/industry-news" className="hover:text-gray-900">Industry News</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/privacy" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              © 2024 Stackcess. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}