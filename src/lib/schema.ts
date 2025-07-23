import { BlogPost } from './sanity'

export interface OrganizationSchema {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo: {
    '@type': 'ImageObject'
    url: string
  }
  sameAs: string[]
}

export interface PersonSchema {
  '@context': 'https://schema.org'
  '@type': 'Person'
  name: string
  image?: string
  url?: string
}

export interface NewsArticleSchema {
  '@context': 'https://schema.org'
  '@type': 'NewsArticle'
  headline: string
  description: string
  image: {
    '@type': 'ImageObject'
    url: string
    alt: string
  }
  author: PersonSchema
  publisher: OrganizationSchema
  datePublished: string
  dateModified?: string
  mainEntityOfPage: {
    '@type': 'WebPage'
    '@id': string
  }
  articleSection: string[]
  keywords: string[]
  wordCount?: number
  timeRequired?: string
}

export interface WebSiteSchema {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  publisher: OrganizationSchema
  potentialAction: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    'query-input': string
  }
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }>
}

export const generateOrganizationSchema = (): OrganizationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NewsFlow',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com',
  logo: {
    '@type': 'ImageObject',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com'}/logo.png`
  },
  sameAs: [
    'https://twitter.com/newsflow',
    'https://facebook.com/newsflow',
    'https://linkedin.com/company/newsflow'
  ]
})

export const generatePersonSchema = (author: BlogPost['author']): PersonSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: author.name,
})

export const generateNewsArticleSchema = (
  post: BlogPost,
  fullUrl: string,
  imageUrl: string
): NewsArticleSchema => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: post.title,
  description: post.excerpt,
  image: {
    '@type': 'ImageObject',
    url: imageUrl,
    alt: post.coverImage?.alt || post.title
  },
  author: generatePersonSchema(post.author),
  publisher: generateOrganizationSchema(),
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': fullUrl
  },
  articleSection: post.tags,
  keywords: post.tags,
  timeRequired: `PT${post.estimatedReadingTime}M`
})

export const generateWebSiteSchema = (): WebSiteSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NewsFlow',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com',
  description: 'A modern news feed style blog with the latest in technology, science, and innovation',
  publisher: generateOrganizationSchema(),
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com'}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
})

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>): BreadcrumbListSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})