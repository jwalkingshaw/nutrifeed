'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function FloatingHaveYourSayButton() {
  return (
    <Link 
      href="/roadmap"
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group border border-gray-700"
      aria-label="Have Your Say - Submit Feature Requests"
    >
      <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-200" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Have Your Say
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </Link>
  )
}