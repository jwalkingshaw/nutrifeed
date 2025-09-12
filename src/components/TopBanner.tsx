'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getBannerByPlacement, trackBannerClick, urlFor, type Banner } from '@/lib/sanity'

export default function TopBanner() {
  const [banner, setBanner] = useState<Banner | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBanner() {
      try {
        const bannerData = await getBannerByPlacement('top')
        setBanner(bannerData)
      } catch (error) {
        console.error('Error fetching top banner:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBanner()
  }, [])

  const handleBannerClick = () => {
    if (banner && banner.clickTracking) {
      trackBannerClick(banner._id)
    }
  }

  if (loading || !banner) {
    return null // Don't show anything while loading or if no banner is configured
  }

  return (
    <div className="w-full mb-12 flex justify-center px-6">
      <div className="max-w-4xl w-full">
        <a
          href={banner.clickThroughUrl}
          target={banner.targetBlank ? '_blank' : '_self'}
          rel={banner.targetBlank ? 'noopener noreferrer' : undefined}
          onClick={handleBannerClick}
          className="block overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
          {/* Desktop Banner */}
          <div className="hidden md:block">
            <Image
              src={urlFor(banner.desktopImage).width(800).height(100).url()}
              alt={banner.altText}
              width={800}
              height={100}
              className="w-full h-[100px] object-cover"
            />
          </div>
          
          {/* Mobile Banner */}
          <div className="block md:hidden">
            <Image
              src={urlFor(banner.mobileImage || banner.desktopImage).width(400).height(60).url()}
              alt={banner.altText}
              width={400}
              height={60}
              className="w-full h-[60px] object-cover"
            />
          </div>
        </a>
      </div>
    </div>
  )
}