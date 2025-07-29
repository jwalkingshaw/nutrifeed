import { Suspense } from 'react'
import NewsFeed from '@/components/NewsFeed'
import { generateBreadcrumbSchema } from '@/lib/schema'

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com' }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <Suspense fallback={<div className="flex justify-center py-12">Loading...</div>}>
        <NewsFeed />
      </Suspense>
    </>
  )
}
