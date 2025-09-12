'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="col-span-1 flex items-start">
            <Image 
              src="/stackcess-full-logo-white.svg" 
              alt="Stackcess Logo" 
              width={200}
              height={56}
              className="h-14 w-auto"
            />
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <div className="text-[15px] font-bold !text-white mb-8 font-inter leading-none">Company</div>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms Column */}
          <div className="col-span-1">
            <div className="text-[15px] font-bold !text-white mb-8 font-inter leading-none">Legal</div>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="col-span-1">
            <div className="text-[15px] font-bold !text-white mb-8 font-inter leading-none">Connect</div>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@stackcess.com" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  hello@stackcess.com
                </a>
              </li>
              <li>
                <a href="https://x.com/stackcessapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-16 pt-10 text-center">
          <p className="text-white/70 text-base font-medium leading-relaxed">
            © {new Date().getFullYear()} Stackcess. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}