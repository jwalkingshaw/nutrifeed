import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

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
      coverImage,
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
  content: any[]
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