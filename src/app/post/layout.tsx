export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen">
      {/* Center content in the available space after sidebar */}
      <div className="px-8 py-8">
        {/* Container that centers content accounting for sidebar width */}
        <div 
          className="mx-auto flex gap-8"
          style={{
            width: 'calc(100vw - 16rem - 4rem)', // Full width minus sidebar minus padding
            marginLeft: 'calc((100vw - 16rem - 1020px - 4rem) / 2)', // Center the 1020px content
            maxWidth: '1020px'
          }}
        >
          {/* Main content - fixed width */}
          <main className="w-[700px] flex-shrink-0">
            {children}
          </main>
          
          {/* Right sidebar */}
          <aside className="w-[320px] flex-shrink-0 bg-gray-50 rounded-lg p-6 h-fit sticky top-8">
            <h3 className="font-bold text-lg mb-4">Related Articles</h3>
            <div className="space-y-3">
              <div className="text-sm">Article 1</div>
              <div className="text-sm">Article 2</div>
              <div className="text-sm">Article 3</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}