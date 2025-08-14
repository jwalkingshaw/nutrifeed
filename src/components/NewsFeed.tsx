'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import BlogPostCard from './BlogPostCard'
import { BlogPost, client } from '@/lib/sanity'
import { Loader2 } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const POSTS_PER_PAGE = 6

export default function NewsFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [totalPosts, setTotalPosts] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const router = useRouter()
  const searchParams = useSearchParams()


  const fetchPosts = useCallback(async (page: number) => {
    setLoading(true)

    try {
      const offset = (page - 1) * POSTS_PER_PAGE
      
      // Get total count and posts in parallel
      const [postsResult, countResult] = await Promise.all([
        client.fetch(`
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
        `),
        client.fetch(`count(*[_type == "blogPost"])`)
      ])

      setPosts(postsResult)
      setTotalPosts(countResult)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setPosts([])
      setTotalPosts(0)
    } finally {
      setLoading(false)
    }
  }, [])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`?${params.toString()}`, { scroll: false })
    fetchPosts(page)
  }

  useEffect(() => {
    const pageParam = searchParams.get('page')
    const initialPage = pageParam ? parseInt(pageParam) : 1
    setCurrentPage(initialPage)
    fetchPosts(initialPage)
  }, [searchParams, fetchPosts])

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)

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

      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) handlePageChange(currentPage - 1)
                  }}
                  className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(page)
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) handlePageChange(currentPage + 1)
                  }}
                  className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

    </>
  )
}
