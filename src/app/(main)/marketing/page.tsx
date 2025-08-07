'use client'

import { useState } from 'react'
import { generateBreadcrumbSchema } from '@/lib/schema'

export default function MarketingLandingPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com' },
    { name: 'Marketing', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://newsflow.com'}/marketing` }
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative px-6 py-20 sm:py-32 lg:py-40 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
                STACKCESS
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4 font-light max-w-4xl mx-auto leading-relaxed">
                The Content Hub for Sports Supplement Brands & Their Retail Partners
              </p>
              <p className="text-lg text-gray-600 mb-12 font-light">
                Launching Soon — Sign Up to Get Early Access
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-4 border border-gray-300 text-lg focus:border-black focus:outline-none transition-colors duration-200 bg-white"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-black text-white font-medium hover:bg-white hover:text-black border border-black transition-all duration-200 text-lg"
                >
                  Join Waitlist
                </button>
              </div>
              {isSubmitted && (
                <p className="mt-4 text-gray-800 font-medium text-center">Thanks! We'll be in touch soon.</p>
              )}
            </form>
          </div>
        </section>

        {/* Features Section - Two Column Grid */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - For Brands */}
              <div className="space-y-12">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 tracking-tight">
                    Built for Sports Supplement Brands
                  </h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
                    Streamline your content management and distribution with our purpose-built platform.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Organize Everything</h3>
                      <p className="text-gray-700 leading-relaxed">Upload and organize product images, sell sheets, promo materials, and guides in one centralized hub.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Instant Sharing</h3>
                      <p className="text-gray-700 leading-relaxed">Share content with distributors and retailers instantly, ensuring everyone has the latest materials.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Stay On-Brand</h3>
                      <p className="text-gray-700 leading-relaxed">Keep everything up-to-date and on-brand across all your distribution channels.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Track Performance</h3>
                      <p className="text-gray-700 leading-relaxed">Monitor engagement with built-in analytics tracking views, downloads, and shares.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - For Retailers */}
              <div className="space-y-12">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 tracking-tight">
                    Easy for Retailers & Distributors
                  </h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
                    Access and manage brand content effortlessly, keeping your marketing materials fresh and current.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Latest Assets</h3>
                      <p className="text-gray-700 leading-relaxed">Access the most current assets from every brand you carry, all in one place.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Easy Downloads</h3>
                      <p className="text-gray-700 leading-relaxed">Download high-quality content for websites, storefronts, and promotional campaigns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Stay Updated</h3>
                      <p className="text-gray-700 leading-relaxed">Receive notifications about product launches, new campaigns, and important updates.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Seamless Integration</h3>
                      <p className="text-gray-700 leading-relaxed">Integrate easily with your existing workflows and marketing systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why STACKCESS Section */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 tracking-tight">
                Why Choose STACKCESS?
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Built specifically for the sports supplement industry, STACKCESS understands your unique needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">Launch-Ready</h3>
                  <p className="text-gray-700 leading-relaxed">Designed with your product launch cycles in mind, ensuring seamless coordination across all channels.</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">All File Types</h3>
                  <p className="text-gray-700 leading-relaxed">Supports all common file types including product renders, PDFs, videos, and high-resolution images.</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">Scales With You</h3>
                  <p className="text-gray-700 leading-relaxed">Ready for scaling as your brand grows, from startup to enterprise-level operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-black">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
              STACKCESS is coming soon. Want early access and updates?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              We'll notify you when it's ready. No spam — just product updates and launch details.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-4 border border-gray-600 bg-black text-white placeholder-gray-400 text-lg focus:border-white focus:outline-none transition-colors duration-200"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200 text-lg"
                >
                  Join Waitlist
                </button>
              </div>
              {isSubmitted && (
                <p className="mt-4 text-white font-medium">Thanks! We'll be in touch soon.</p>
              )}
            </form>
          </div>
        </section>
      </div>
    </>
  )
}