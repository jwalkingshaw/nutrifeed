'use client'

import { useEffect, useState } from 'react'
import { getActiveBanners, trackBannerClick, urlFor, type Banner } from '@/lib/sanity'

export default function SidebarBanner() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBanners() {
      try {
        const bannerData = await getActiveBanners('sidebar')
        setBanners(bannerData.slice(0, 2)) // Show max 2 banners
      } catch (error) {
        console.error('Error fetching sidebar banners:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBanners()
  }, [])

  const handleBannerClick = (banner: Banner) => {
    if (banner.clickTracking) {
      trackBannerClick(banner._id)
    }
  }

  if (loading) {
    return (
      <div>
        <div className="bg-gray-200 w-[300px] h-[250px] mb-6" />
        <div className="bg-gray-200 w-[300px] h-[250px]" />
      </div>
    )
  }

  if (banners.length === 0) {
    return null // Don't show anything if no banners are configured
  }

  return (
    <div>
      {banners.map((banner, index) => (
        <div key={banner._id} className={index > 0 ? 'mt-6' : ''}>
          <a
            href={banner.clickThroughUrl}
            target={banner.targetBlank ? '_blank' : '_self'}
            rel={banner.targetBlank ? 'noopener noreferrer' : undefined}
            onClick={() => handleBannerClick(banner)}
            className="block rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={urlFor(banner.desktopImage).width(300).height(250).url()}
              alt={banner.altText}
              className="w-[300px] h-[250px] object-cover"
            />
          </a>
        </div>
      ))}
    </div>
  )
}