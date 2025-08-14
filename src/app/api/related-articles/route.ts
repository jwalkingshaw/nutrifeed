import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity'
import { connectRedis } from '@/lib/redis'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const currentSlug = searchParams.get('slug')
    const tagsParam = searchParams.get('tags')
    
    if (!currentSlug || !tagsParam) {
      return NextResponse.json(
        { error: 'Missing required parameters: slug and tags' },
        { status: 400 }
      )
    }

    const tags = tagsParam.split(',').filter(Boolean)
    
    if (tags.length === 0) {
      return NextResponse.json({
        articles: [],
        lastUpdated: new Date().toISOString()
      })
    }

    // Get articles with matching tags, excluding the current article
    const relatedPostsQuery = `
      *[_type == "blogPost" && slug.current != $currentSlug && count((tags[])[@ in $tags]) > 0] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        tags,
        coverImage {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `
    
    const relatedPosts = await client.fetch(relatedPostsQuery, { 
      currentSlug, 
      tags 
    })
    
    // Connect to Redis and get view counts for each post
    const redis = await connectRedis()
    const postsWithViews = await Promise.all(
      relatedPosts.map(async (post: unknown) => {
        const viewKey = `views:${post.slug.current}`
        const views = await redis.get(viewKey) || 0
        
        // Calculate how many tags match
        const matchingTags = post.tags?.filter((tag: string) => tags.includes(tag)) || []
        
        return {
          ...post,
          views: Number(views),
          tagMatchCount: matchingTags.length
        }
      })
    )
    
    // Sort by number of matching tags first, then by views, then by publish date
    const sortedPosts = postsWithViews
      .sort((a, b) => {
        // First priority: more matching tags
        if (b.tagMatchCount !== a.tagMatchCount) {
          return b.tagMatchCount - a.tagMatchCount
        }
        
        // Second priority: more views
        if (b.views !== a.views) {
          return b.views - a.views
        }
        
        // Third priority: more recent
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      })
      .slice(0, 5) // Get top 5
    
    // Remove the tagMatchCount field before returning
    const articles = sortedPosts.map(({ ...post }) => post)

    return NextResponse.json({
      articles,
      lastUpdated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching related articles:', error)
    
    // Fallback: return empty array if something fails
    return NextResponse.json({
      articles: [],
      lastUpdated: new Date().toISOString()
    })
  }
}