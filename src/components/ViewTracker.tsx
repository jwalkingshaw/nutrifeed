'use client'

import { useEffect } from 'react'

interface ViewTrackerProps {
  slug: string
}

export default function ViewTracker({ slug }: ViewTrackerProps) {
  useEffect(() => {
    // Track page view when component mounts
    const trackView = async () => {
      try {
        await fetch('/api/track-view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        })
      } catch (error) {
        // Silently fail - don't affect user experience
        console.error('Failed to track view:', error)
      }
    }

    // Small delay to ensure the page has loaded
    const timer = setTimeout(trackView, 1000)
    
    return () => clearTimeout(timer)
  }, [slug])

  // This component doesn't render anything
  return null
}