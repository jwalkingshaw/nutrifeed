'use client'

import Link from 'next/link'

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-black text-white w-full h-[3rem] px-3 font-ibm-plex-mono font-light text-xs sm:text-sm leading-tight flex items-center justify-center">
      <div className="text-center max-w-full overflow-hidden">
        <div className="line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
          <span className="inline">We&apos;re building a better way to access and share your stack. </span>
          <Link 
            href="/" 
            className="hover:text-red-500 transition-colors duration-200 underline underline-offset-2 inline whitespace-nowrap"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  )
}