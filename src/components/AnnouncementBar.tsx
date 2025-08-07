'use client'

import Link from 'next/link'

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-black text-white w-full h-auto py-2 px-4 font-ibm-plex-mono font-light text-sm leading-relaxed">
      <div className="text-center">
        <span className="block sm:inline">We&apos;re building a better way to access and share your stack. </span>
        <Link 
          href="/" 
          className="hover:text-red-500 transition-colors duration-200 underline underline-offset-2 block sm:inline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  )
}