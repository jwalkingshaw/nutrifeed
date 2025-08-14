import { createClient, type PortableTextBlock } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      author->{
        name,
        image
      },
      publishedAt,
      tags,
      estimatedReadingTime
    }
  `)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      coverImage {
        asset->{
          _id,
          url
        },
        alt
      },
      author->{
        name,
        image,
        bio
      },
      publishedAt,
      tags,
      estimatedReadingTime
    }
  `, { slug })
}

export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      author->{
        name
      },
      publishedAt,
      tags,
      estimatedReadingTime
    }
  `)
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: PortableTextBlock[]
  coverImage: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  author: {
    name: string
  }
  publishedAt: string
  tags: string[]
  estimatedReadingTime: number
}

export interface Banner {
  _id: string
  campaignName: string
  placement: 'top' | 'sidebar'
  desktopImage: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  mobileImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  altText: string
  clickThroughUrl: string
  targetBlank: boolean
  startDate: string
  endDate: string
  isActive: boolean
  priority: number
  clickTracking: boolean
  notes?: string
}

export async function getActiveBanners(placement?: 'top' | 'sidebar'): Promise<Banner[]> {
  try {
    const now = new Date().toISOString()
    const placementFilter = placement ? ` && placement == "${placement}"` : ''
    
    return await client.fetch(`
      *[_type == "banner" 
        && isActive == true 
        && startDate <= "${now}" 
        && endDate >= "${now}"
        ${placementFilter}
      ] | order(priority desc) {
        _id,
        campaignName,
        placement,
        desktopImage {
          asset->{
            _id,
            url
          },
          alt
        },
        mobileImage {
          asset->{
            _id,
            url
          },
          alt
        },
        altText,
        clickThroughUrl,
        targetBlank,
        startDate,
        endDate,
        isActive,
        priority,
        clickTracking,
        notes
      }
    `)
  } catch (error) {
    console.error('Error fetching banners:', error)
    return [] // Return empty array if there's an error
  }
}

export async function getBannerByPlacement(placement: 'top' | 'sidebar'): Promise<Banner | null> {
  const banners = await getActiveBanners(placement)
  return banners.length > 0 ? banners[0] : null
}

export async function trackBannerClick(bannerId: string) {
  // This could be extended to store click analytics in Sanity or external service
  console.log(`Banner clicked: ${bannerId}`)
  // Future: Add analytics tracking here
}