// components/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1008px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {children}
    </div>
  )
}
