import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity'
import { connectRedis } from '@/lib/redis'

export async function GET(request: NextRequest) {
  try {
    // Get all blog posts from Sanity first
    const allPostsQuery = `
      *[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        coverImage {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `
    
    const allPosts = await client.fetch(allPostsQuery)
    
    // Connect to Redis and get view counts for each post
    const redis = await connectRedis()
    const postsWithViews = await Promise.all(
      allPosts.map(async (post: any) => {
        const viewKey = `views:${post.slug.current}`
        const views = await redis.get(viewKey) || 0
        return {
          ...post,
          views: Number(views)
        }
      })
    )
    
    // Sort by view count and get top 5, then fall back to recent posts
    const topPosts = postsWithViews
      .sort((a, b) => b.views - a.views)
      .slice(0, 5)

    // Determine if we're showing actual popular content or just recent content
    const hasViewData = topPosts.some(post => post.views > 0)

    return NextResponse.json({
      articles: topPosts,
      lastUpdated: new Date().toISOString(),
      fallback: !hasViewData
    })

  } catch (error) {
    console.error('Error fetching popular articles:', error)
    
    // Fallback: return recent posts if Redis/Sanity fail
    try {
      const fallbackQuery = `
        *[_type == "blogPost"] | order(publishedAt desc) [0...5] {
          _id,
          title,
          slug,
          publishedAt,
          coverImage {
            asset->{
              _id,
              url
            },
            alt
          }
        }
      `
      
      const fallbackPosts = await client.fetch(fallbackQuery)
      
      return NextResponse.json({
        articles: fallbackPosts.map((post: any) => ({ ...post, views: 0 })),
        lastUpdated: new Date().toISOString(),
        fallback: true
      })
    } catch (fallbackError) {
      return NextResponse.json(
        { error: 'Failed to fetch popular articles' },
        { status: 500 }
      )
    }
  }
}