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
    <div className="w-full mb-8 flex justify-center">
      <a
        href={banner.clickThroughUrl}
        target={banner.targetBlank ? '_blank' : '_self'}
        rel={banner.targetBlank ? 'noopener noreferrer' : undefined}
        onClick={handleBannerClick}
        className="block overflow-hidden"
      >
        {/* Desktop Banner */}
        <div className="hidden md:block">
          <Image
            src={urlFor(banner.desktopImage).width(728).height(90).url()}
            alt={banner.altText}
            width={728}
            height={90}
            className="w-[728px] h-[90px] object-cover"
          />
        </div>
        
        {/* Mobile Banner */}
        <div className="block md:hidden">
          <Image
            src={urlFor(banner.mobileImage || banner.desktopImage).width(320).height(50).url()}
            alt={banner.altText}
            width={320}
            height={50}
            className="w-[320px] h-[50px] object-cover"
          />
        </div>
      </a>
    </div>
  )
}