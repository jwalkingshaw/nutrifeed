'use client'

import Link from 'next/link'

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-[#1a1a1a] text-white w-full h-[3rem] px-3 font-ibm-plex-mono font-normal text-xs sm:text-sm leading-tight flex items-center justify-center">
      <div className="text-center max-w-full overflow-hidden">
        <div className="line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
          <span className="inline">NEW: Discover the operating system for sports nutrition brands.</span>
        </div>
      </div>
    </div>
  )
}