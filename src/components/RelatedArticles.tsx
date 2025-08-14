'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPost, urlFor } from '@/lib/sanity'
import { BookOpen, Hash } from 'lucide-react'

interface RelatedArticle extends BlogPost {
  views: number
}

interface RelatedArticlesResponse {
  articles: RelatedArticle[]
  lastUpdated: string
}

interface RelatedArticlesProps {
  currentSlug: string
  tags: string[]
}

export default function RelatedArticles({ currentSlug, tags }: RelatedArticlesProps) {
  const [articles, setArticles] = useState<RelatedArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRelatedArticles() {
      try {
        const response = await fetch(`/api/related-articles?slug=${currentSlug}&tags=${tags.join(',')}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch related articles')
        }

        const data: RelatedArticlesResponse = await response.json()
        setArticles(data.articles)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching related articles:', err)
      } finally {
        setLoading(false)
      }
    }

    if (tags.length > 0) {
      fetchRelatedArticles()
    } else {
      setLoading(false)
    }
  }, [currentSlug, tags])

  if (loading) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 md:p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <BookOpen size={20} />
          Related Articles
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

  if (error || articles.length === 0) {
    return null // Don't show the component if there are no related articles
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 md:p-6">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
        <BookOpen size={20} />
        Related Articles
      </h3>
      
      <div className="space-y-4">
        {articles.map((article) => {
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
                    {/* Show shared tags */}
                    <div className="flex items-center gap-1">
                      <Hash size={10} />
                      <span className="font-medium text-blue-600">
                        {article.tags?.filter(tag => tags.includes(tag)).join(', ')}
                      </span>
                    </div>
                    
                    <span>•</span>
                    
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                    
                    {article.views > 0 && (
                      <>
                        <span>•</span>
                        <span>{article.views.toLocaleString()} views</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}