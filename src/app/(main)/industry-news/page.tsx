import { Suspense } from 'react'
import NewsFeed from '@/components/NewsFeed'
import TopBanner from '@/components/TopBanner'
import { generateBreadcrumbSchema } from '@/lib/schema'

export default function IndustryNewsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com' },
    { name: 'Industry News', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com'}/industry-news` }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <TopBanner />
      
      <Suspense fallback={<div className="flex justify-center py-12">Loading...</div>}>
        <NewsFeed />
      </Suspense>
    </>
  )
}