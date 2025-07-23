// Shared layout container that matches header width constraints
export default function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8">
      {/* Main content area - matches header left section */}
      <div className="w-full lg:max-w-[600px]">
        {children}
      </div>
    </div>
  )
}