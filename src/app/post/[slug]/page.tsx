import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Calendar, ChevronRight, Home } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { BlogPost, getPostBySlug } from '@/lib/sanity'
import { generateNewsArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string): Promise<BlogPost | null> {
  return await getPostBySlug(slug)
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const imageUrl = post.coverImage?.asset?.url || '/og-image.jpg'
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/post/${resolvedParams.slug}`

  return {
    title: `${post.title} | NewsFlow`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: 'NewsFlow' }],
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
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)
  
  if (!post) {
    notFound()
  }

  const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/post/${resolvedParams.slug}`
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
      
      <div>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
                <Home size={16} className="mr-1" />
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-400" />
            </li>
            <li className="truncate max-w-[180px] text-gray-900 font-medium" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-3xl lg:text-3xl font-[600] font-inter text-gray-900 mb-4 leading-tight">
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

          {/* Cover Image */}
          {post.coverImage?.asset?.url && (
            <div className="mb-8">
              <Image
                src={post.coverImage.asset.url}
                alt={post.coverImage.alt || post.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-[640px] mx-auto">
            <PortableText
              value={post.content}
              components={{
                types: {
                  image: ({ value }) => (
                    <Image
                      src={value.asset.url}
                      alt={value.alt || ''}
                      width={800}
                      height={400}
                      className="rounded-lg my-8 w-full h-auto object-cover"
                    />
                  ),
                  code: ({ value }) => (
                    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded-md overflow-x-auto my-6 text-sm font-mono">
                      <code>{value.code}</code>
                    </pre>
                  ),
                },
                marks: {
                  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                  link: ({ children, value }) => (
                    <a href={value.href} className="text-blue-600 hover:underline">
                      {children}
                    </a>
                  ),
                },
                block: {
                  normal: ({ children }) => <p className="font-merriweather text-gray-700 leading-loose mb-4">{children}</p>,
                  h1: ({ children }) => <h1 className="font-inter font-bold text-3xl mt-8 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="font-inter font-bold text-2xl mt-6 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="font-inter font-bold text-xl mt-5 mb-2">{children}</h3>,
                  bullet: ({ children }) => <ul className="list-disc list-outside ml-6 pl-2 my-6 space-y-3 font-merriweather text-gray-700 leading-loose">{children}</ul>,
                  number: ({ children }) => <ol className="list-decimal list-outside ml-6 pl-2 my-6 space-y-3 font-merriweather text-gray-700 leading-loose">{children}</ol>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic text-gray-600 font-merriweather">
                      {children}
                    </blockquote>
                  ),
                },
                listItem: ({ children }) => <li className="font-merriweather text-gray-700 leading-loose">{children}</li>,
              }}
            />
          </div>
        </article>
      </div>
    </>
  )
}