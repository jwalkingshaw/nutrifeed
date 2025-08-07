'use client'

import { usePathname } from 'next/navigation'
import SidebarBanner from '@/components/SidebarBanner'
import TopArticles from '@/components/TopArticles'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showTopArticles = pathname !== '/marketing'
  const isMarketingPage = pathname === '/marketing'
  return (
    <div className="w-full min-h-screen">
      {/* Mobile layout */}
      <div className="md:hidden px-4 py-4">
        <main className="w-full">
          {children}
        </main>
        
        {/* Mobile sidebar - shown below content */}
        <aside className="w-full mt-6">
          <div className="mb-4 flex justify-center">
            <SidebarBanner />
          </div>
          {showTopArticles && <TopArticles />}
        </aside>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block w-full min-h-screen">
        {isMarketingPage ? (
          /* Marketing page - full width */
          <main className="w-full">
            {children}
          </main>
        ) : (
          /* Other pages - with sidebar */
          <div className="px-8 py-8 relative">
            {/* Main content - centered */}
            <main className="w-[700px] lg:w-[600px] mx-auto">
              {children}
            </main>
            
            {/* Right sidebar - positioned absolutely */}
            <aside className="w-[220px] lg:w-[180px] h-fit sticky top-[6.5rem] absolute right-8 top-8">
              <div className="mb-6">
                <SidebarBanner />
              </div>
              {showTopArticles && <TopArticles />}
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}