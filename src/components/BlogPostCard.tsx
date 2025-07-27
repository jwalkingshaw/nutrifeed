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

  <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
  <Link href={`/post/${post.slug.current}`} className="block">
    {imageUrl && (
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={post.coverImage.alt || post.title}
          fill
          className="object-cover transition-transform duration-300"
        />
      </div>
    )}
</Link>

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
          <h2 className="text-xl sm:text-xl md:text-xl font-[600] font-inter text-gray-900 mb-3 line-clamp-3 cursor-pointer">
            {post.title}
          </h2>
        </Link>

      {post.excerpt && (
          <p className="text-sm sm:text-sm md:text-sm font-[400] font-inter text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      

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

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
              <Heart size={18} />
              <span className="text-sm">24</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <MessageCircle size={18} />
              <span className="text-sm">8</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}