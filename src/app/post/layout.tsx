export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen">
      {/* Mobile layout */}
      <div className="md:hidden px-4 py-4">
        <main className="w-full">
          {children}
        </main>
        
        {/* Mobile sidebar - shown below content */}
        <aside className="w-full bg-gray-50 rounded-lg p-4 mt-6">
          <h3 className="font-bold text-lg mb-4">Related Articles</h3>
          <div className="space-y-3">
            <div className="text-sm">Article 1</div>
            <div className="text-sm">Article 2</div>
            <div className="text-sm">Article 3</div>
          </div>
        </aside>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block w-full min-h-screen">
        {/* Use flexbox to center content properly */}
        <div className="px-4 md:px-6 lg:px-8 py-8 flex justify-center">
          {/* Container with max width for large screens */}
          <div className="w-full max-w-[1300px] flex gap-4 md:gap-6 lg:gap-8 justify-center">
            {/* Main content - responsive widths matching main layout */}
            <main className="w-full max-w-[700px] md:w-[600px] lg:w-[700px] flex-shrink-0">
              {children}
            </main>
            
            {/* Right sidebar - minimum width to fit banners */}
            <aside className="w-[300px] md:w-[320px] flex-shrink-0 bg-gray-50 rounded-lg p-4 md:p-5 lg:p-6 h-fit sticky top-20">
              <h3 className="font-bold text-base lg:text-lg mb-4">Related Articles</h3>
              <div className="space-y-3">
                <div className="text-xs md:text-sm">Article 1</div>
                <div className="text-xs md:text-sm">Article 2</div>
                <div className="text-xs md:text-sm">Article 3</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}