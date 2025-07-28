'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import BlogPostCard from './BlogPostCard'
import { BlogPost, client } from '@/lib/sanity'
import { Loader2 } from 'lucide-react'

const POSTS_PER_PAGE = 6

export default function NewsFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const router = useRouter()
  const searchParams = useSearchParams()


  const fetchPosts = useCallback(async (page: number, isLoadMore = false) => {
    if (isLoadMore) {
      setLoadingMore(true)
    } else {
      setLoading(true)
    }

    try {
      const offset = (page - 1) * POSTS_PER_PAGE
      const query = `
        *[_type == "blogPost"] | order(publishedAt desc) [${offset}...${offset + POSTS_PER_PAGE}] {
          _id,
          title,
          slug,
          excerpt,
          coverImage {
            asset->{
              _id,
              url
            },
            alt
          },
          author-> {
            name,
            image {
              asset->{
                _ref
              }
            }
          },
          publishedAt,
          tags,
          estimatedReadingTime
        }
      `

      const newPosts = await client.fetch(query)
      setPosts(prev => isLoadMore ? [...prev, ...newPosts] : newPosts)
      setHasMore(newPosts.length === POSTS_PER_PAGE)
    } catch (error) {
      console.error('Error fetching posts:', error)
      // Set empty state on error
      if (!isLoadMore) {
        setPosts([])
      }
      setHasMore(false)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  const loadMore = () => {
    if (!loadingMore && hasMore) {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', nextPage.toString())
      router.push(`?${params.toString()}`, { scroll: false })
      fetchPosts(nextPage, true)
    }
  }

  useEffect(() => {
    const pageParam = searchParams.get('page')
    const initialPage = pageParam ? parseInt(pageParam) : 1
    setCurrentPage(initialPage)
    fetchPosts(initialPage, false)
  }, [searchParams, fetchPosts])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <>
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            {loadingMore ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <span>Load More Posts</span>
            )}
          </button>
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-lg">You&apos;ve reached the end!</p>
          <p className="text-sm mt-2">Thanks for reading all our latest posts</p>
        </div>
      )}
    </>
  )
}
