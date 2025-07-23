import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Calendar, ChevronRight, Home } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import LayoutContainer from '@/components/LayoutContainer'
import { client, BlogPost, getPostBySlug } from '@/lib/sanity'
import { generateNewsArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

interface PostPageProps {
  params: { slug: string }
}

async function getPost(slug: string): Promise<BlogPost | null> {
  return await getPostBySlug(slug)
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const imageUrl = post.coverImage?.asset?.url || '/og-image.jpg'
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/post/${params.slug}`

  return {
    title: `${post.title} | NewsFlow`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: 'NewsFlow' }],
    publishedTime: post.publishedAt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.coverImage?.alt || post.title,
        },
      ],
      publishedTime: post.publishedAt,
      authors: ['NewsFlow'],
      tags: post.tags,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/post/${params.slug}`
  const imageUrl = post.coverImage?.asset?.url || '/og-image.jpg'
  
  const newsArticleSchema = generateNewsArticleSchema(
    post,
    fullUrl,
    imageUrl
  )

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com' },
    { name: 'Posts', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com'}/posts` },
    { name: post.title, url: fullUrl }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsArticleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <div className="min-h-screen">
        <Header />
        <Container>
          <LayoutContainer>
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6 pt-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
                <Home size={16} className="mr-1" />
                Home
              </Link>
              <ChevronRight size={16} />
              <span className="text-gray-900 font-medium">{post.title}</span>
            </nav>

            <article>
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[700] font-inter text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{post.estimatedReadingTime} min read</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none prose-headings:font-inter prose-headings:font-bold prose-p:font-inter prose-p:text-gray-700 prose-p:leading-relaxed">
              <PortableText
                value={post.content}
                components={{
                  types: {
                    image: ({ value }) => (
                      <img
                        src={value.asset.url}
                        alt={value.alt || ''}
                        className="rounded-lg my-8"
                      />
                    ),
                  },
                  marks: {
                    strong: ({ children }) => <strong className="font-inter font-bold">{children}</strong>,
                  },
                  block: {
                    normal: ({ children }) => <p className="font-inter text-gray-700 leading-relaxed mb-4">{children}</p>,
                    h1: ({ children }) => <h1 className="font-inter font-bold text-3xl mt-8 mb-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="font-inter font-bold text-2xl mt-6 mb-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="font-inter font-bold text-xl mt-5 mb-2">{children}</h3>,
                  },
                }}
              />
            </div>
            </article>
          </LayoutContainer>
        </Container>
      </div>
    </>
  )
}