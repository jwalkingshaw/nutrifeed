import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

interface AnalyticsResponse {
  series: {
    [key: string]: number[]
  }
  meta: {
    keys: string[]
  }
}

export async function GET(request: NextRequest) {
  try {
    // Vercel Analytics API endpoint
    const analyticsUrl = 'https://vercel.com/api/web/insights/paths'
    
    // Get the last 28 days
    const endDate = new Date()
    const startDate = new Date(endDate.getTime() - (28 * 24 * 60 * 60 * 1000))
    
    const params = new URLSearchParams({
      teamId: process.env.VERCEL_TEAM_ID || '',
      projectId: process.env.VERCEL_PROJECT_ID || '',
      from: startDate.toISOString(),
      to: endDate.toISOString(),
      timezone: 'UTC'
    })

    const response = await fetch(`${analyticsUrl}?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${process.env.VERCEL_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error('Vercel Analytics API error:', response.status, response.statusText)
      throw new Error('Failed to fetch analytics data')
    }

    const analyticsData: AnalyticsResponse = await response.json()
    
    // Filter for blog post paths and calculate total views
    const postViews: { [path: string]: number } = {}
    
    if (analyticsData.series && analyticsData.meta) {
      Object.entries(analyticsData.series).forEach(([path, views]) => {
        // Only include paths that look like blog posts (/post/[slug])
        if (path.startsWith('/post/') && path !== '/post') {
          const totalViews = views.reduce((sum, view) => sum + view, 0)
          if (totalViews > 0) {
            postViews[path] = totalViews
          }
        }
      })
    }

    // Sort by views and get top 5
    const topPosts = Object.entries(postViews)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([path, views]) => ({
        path,
        views,
        slug: path.replace('/post/', '')
      }))

    // If we don't have enough popular posts, fetch recent posts as fallback
    if (topPosts.length < 5) {
      const fallbackQuery = `
        *[_type == "blogPost"] | order(publishedAt desc) [0...${5 - topPosts.length}] {
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
      
      // Add fallback posts that aren't already in topPosts
      const existingSlugs = new Set(topPosts.map(p => p.slug))
      const additionalPosts = fallbackPosts
        .filter((post: any) => !existingSlugs.has(post.slug.current))
        .slice(0, 5 - topPosts.length)
        .map((post: any) => ({
          path: `/post/${post.slug.current}`,
          views: 0,
          slug: post.slug.current
        }))
      
      topPosts.push(...additionalPosts)
    }

    // Fetch post details from Sanity for the popular posts
    const slugs = topPosts.map(post => post.slug)
    const postsQuery = `
      *[_type == "blogPost" && slug.current in $slugs] {
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

    const posts = await client.fetch(postsQuery, { slugs })

    // Merge analytics data with post details
    const popularArticles = topPosts.map(({ slug, views }) => {
      const post = posts.find((p: any) => p.slug.current === slug)
      return post ? { ...post, views } : null
    }).filter(Boolean)

    return NextResponse.json({
      articles: popularArticles,
      lastUpdated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching popular articles:', error)
    
    // Fallback: return recent posts if analytics fail
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