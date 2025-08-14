'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPost, urlFor } from '@/lib/sanity'
import { Eye, TrendingUp } from 'lucide-react'

interface PopularArticle extends BlogPost {
  views: number
}

interface PopularArticlesResponse {
  articles: PopularArticle[]
  lastUpdated: string
  fallback?: boolean
}

export default function TopArticles() {
  const [articles, setArticles] = useState<PopularArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFallback, setIsFallback] = useState(false)

  useEffect(() => {
    async function fetchPopularArticles() {
      try {
        const response = await fetch('/api/popular-articles')
        
        if (!response.ok) {
          throw new Error('Failed to fetch popular articles')
        }

        const data: PopularArticlesResponse = await response.json()
        setArticles(data.articles)
        setIsFallback(data.fallback || false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching popular articles:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPopularArticles()
  }, [])

  if (loading) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 md:p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <TrendingUp size={20} />
          Most Popular
        </h3>
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="flex gap-3">
                <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded mb-2" />
                  <div className="h-2 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 md:p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <TrendingUp size={20} />
          Most Popular
        </h3>
        <div className="text-sm text-gray-500">
          Unable to load popular articles right now.
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 md:p-6">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
        <TrendingUp size={20} />
        Most Popular
        {isFallback && (
          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
            Recent
          </span>
        )}
      </h3>
      
      <div className="space-y-4">
        {articles.map((article, index) => {
          const getImageUrl = () => {
            if (!article.coverImage) return null
            
            if (article.coverImage.asset?.url) {
              return article.coverImage.asset.url
            }
            
            try {
              return urlFor(article.coverImage).width(64).height(48).url()
            } catch (error) {
              console.error('Error generating image URL:', error)
              return null
            }
          }

          const imageUrl = getImageUrl()

          return (
            <Link
              key={article._id}
              href={`/post/${article.slug.current}`}
              className="block hover:bg-gray-100 -mx-2 px-2 py-2 rounded transition-colors"
            >
              <div className="flex gap-3">
                {imageUrl && (
                  <div className="w-16 h-12 relative flex-shrink-0">
                    <Image
                      src={imageUrl}
                      alt={article.coverImage?.alt || article.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight mb-1">
                    {article.title}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="font-medium text-blue-600">#{index + 1}</span>
                    </span>
                    
                    {article.views > 0 && (
                      <span className="flex items-center gap-1">
                        <Eye size={10} />
                        {article.views.toLocaleString()}
                      </span>
                    )}
                    
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      
      {!isFallback && (
        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Based on page views from last 28 days
          </p>
        </div>
      )}
    </div>
  )
}