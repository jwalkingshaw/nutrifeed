import { NextRequest, NextResponse } from 'next/server'
import { connectRedis } from '@/lib/redis'

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Missing slug parameter' },
        { status: 400 }
      )
    }

    // Connect to Redis
    const redis = await connectRedis()
    
    // Increment view count for this post
    const viewKey = `views:${slug}`
    const newCount = await redis.incr(viewKey)
    
    // Also track when it was last viewed
    const lastViewedKey = `last_viewed:${slug}`
    await redis.set(lastViewedKey, new Date().toISOString())

    return NextResponse.json({ 
      success: true, 
      views: newCount,
      slug 
    })

  } catch (error) {
    console.error('Error tracking view:', error)
    return NextResponse.json(
      { error: 'Failed to track view' },
      { status: 500 }
    )
  }
}