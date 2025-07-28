'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Heart, MessageCircle, Share2 } from 'lucide-react'
import { BlogPost, urlFor } from '@/lib/sanity'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const getImageUrl = () => {
    if (!post.coverImage) return null
    
    // Use direct URL from Sanity asset
    if (post.coverImage.asset.url) {
      return post.coverImage.asset.url
    }
    
    // Fallback to urlFor if needed
    try {
      return urlFor(post.coverImage).width(600).height(400).url()
    } catch (error) {
      console.error('Error generating image URL:', error)
      return null
    }
  }
  
  const imageUrl = getImageUrl()


  return (
    <article className="oklch-hover rounded-2xl overflow-hidden">
      {imageUrl && (
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <Link href={`/post/${post.slug.current}`}>
          <Image
            src={imageUrl}
            alt={post.coverImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </Link>
        </div>
      )}
      
      <div className="p-4 sm:p-6">
        <div className="flex items-center space-x-2 mb-3">
          {post.tags && post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/post/${post.slug.current}`}>
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-[700] font-inter text-gray-900 mb-3 line-clamp-3 cursor-pointer">
            {post.title}
          </h2>
        </Link>  
      

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock size={12} />
              <span>{post.estimatedReadingTime} min read</span>
            </div>
          </div>
        </div>

      </div>
    </article>
  )
}