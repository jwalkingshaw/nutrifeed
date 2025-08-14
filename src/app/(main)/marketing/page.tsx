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
        <section className="relative px-6 py-24 sm:py-32 lg:py-40 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="inline-block px-3 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-full mb-8">
                Built for Sports Supplement Brands
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-black mb-8 tracking-tight leading-[0.9]">
                Stop chasing assets.<br />
                <span className="font-medium">Start scaling</span><br />
                <span className="text-blue-600 font-medium">your brand.</span>
              </h1>
              
              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                  The Digital Asset Management platform that connects sports supplement brands with their global retail network—instantly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 text-sm text-gray-500 justify-center items-center">
                  <div>Upload, organize & share instantly</div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div>One login for all your brands</div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div>Real-time notifications</div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 text-base bg-white border border-gray-200 focus:border-black focus:outline-none transition-colors duration-200"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors duration-200 text-base"
                >
                  Get Early Access
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Join 500+ supplement brands • Free during beta
              </p>
              {isSubmitted && (
                <p className="mt-4 text-black font-medium text-center text-sm">Success! We&apos;ll notify you when STACKCESS launches.</p>
              )}
            </form>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-32 px-6 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* Problem Side */}
              <div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    The Problem
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-light text-black mb-12 leading-tight">
                  Asset <span className="font-medium">chaos</span> is killing<br />your growth
                </h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Retailers using outdated product images and info</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Hours spent responding to &quot;send me the latest assets&quot; emails</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Inconsistent branding across distribution channels</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Missing out on co-marketing opportunities</p>
                  </div>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-gray-800 font-medium text-lg mb-2">
                    &quot;We spent more time managing assets than marketing our products.&quot;
                  </p>
                  <p className="text-gray-500 text-sm">— Marketing Director, Top 10 Supplement Brand</p>
                </div>
              </div>

              {/* Solution Side */}
              <div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                    The Solution
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-light text-black mb-12 leading-tight">
                  One platform.<br /><span className="font-medium">Everyone</span> connected.
                </h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Automated asset distribution to your entire network</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Smart categorization and tagging for instant discovery</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Real-time notifications keep everyone updated</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Built-in request system for joint campaigns</p>
                  </div>
                </div>
                <div className="border-l-2 border-blue-600 pl-6">
                  <p className="text-gray-800 font-medium text-lg mb-2">
                    &quot;STACKCESS cut our asset management time by 80% and increased retailer engagement.&quot;
                  </p>
                  <p className="text-gray-500 text-sm">— Brand Manager, Beta Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Audience Section */}
        <section className="py-32 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-light text-black mb-6 leading-tight">
                Two sides. One platform.<br /><span className="font-medium">Endless</span> possibilities.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Whether you&apos;re a brand looking to scale or a retailer seeking efficiency, STACKCESS connects your ecosystem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* For Brands Side */}
              <div className="bg-white border border-gray-200 p-12">
                <div className="mb-12">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                      For Supplement Brands
                    </span>
                  </div>
                  <h3 className="text-3xl font-light text-black mb-4 leading-tight">
                    Control your<br /><span className="font-medium">brand story</span>
                  </h3>
                  <p className="text-gray-600 font-light">
                    Upload once, distribute everywhere. Keep your entire retail network aligned with your latest assets.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-black mb-1">Smart Organization</h4>
                      <p className="text-gray-600 text-sm">Auto-categorize by product line, campaign type, or custom tags</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-black mb-1">Instant Distribution</h4>
                      <p className="text-gray-600 text-sm">Push new assets to your entire network with one click</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-black mb-1">Usage Analytics</h4>
                      <p className="text-gray-600 text-sm">See which retailers are most engaged with your content</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-black mb-1">Campaign Collaboration</h4>
                      <p className="text-gray-600 text-sm">Receive and manage co-marketing requests seamlessly</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="border-l-2 border-blue-600 pl-4">
                    <p className="text-gray-800 font-medium text-sm mb-1">
                      &quot;We reduced asset request emails by 95% and launched 3x faster.&quot;
                    </p>
                    <p className="text-gray-500 text-xs">— CMO, Premium Supplements Co.</p>
                  </div>
                </div>
              </div>

              {/* For Retailers/Distributors Side */}
              <div className="bg-black text-white p-12">
                <div className="mb-12">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-orange-400 uppercase tracking-wider">
                      For Retailers & Distributors
                    </span>
                  </div>
                  <h3 className="text-3xl font-light text-white mb-4 leading-tight">
                    One login.<br /><span className="font-medium">All your brands.</span>
                  </h3>
                  <p className="text-gray-300 font-light">
                    Access fresh content from every supplement brand in your portfolio. No more hunting for assets.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Unified Dashboard</h4>
                      <p className="text-gray-300 text-sm">See all brand updates and new assets in one central feed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Ready-to-Use Assets</h4>
                      <p className="text-gray-300 text-sm">Download high-res images, videos, and docs for any channel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Smart Notifications</h4>
                      <p className="text-gray-300 text-sm">Get alerts for new launches and campaign opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Campaign Requests</h4>
                      <p className="text-gray-300 text-sm">Request custom assets or propose joint marketing campaigns</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="border-l-2 border-orange-400 pl-4">
                    <p className="text-white font-medium text-sm mb-1">
                      &quot;Finally! One place to find fresh content from all our supplement partners.&quot;
                    </p>
                    <p className="text-gray-400 text-xs">— Marketing Manager, National Nutrition Chain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Efficiency & ROI Section */}
        <section className="py-32 px-6 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="mb-2">
                <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">
                  Proven Results
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light text-black mb-6 leading-tight">
                Stop wasting time.<br /><span className="font-medium">Start making</span> money.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                STACKCESS customers see immediate improvements in efficiency, brand consistency, and revenue growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16 mb-20">
              <div className="text-center">
                <div className="text-6xl font-light text-black mb-4">80<span className="text-blue-600">%</span></div>
                <div className="text-lg font-medium text-black mb-3">Time Saved</div>
                <p className="text-gray-600 text-sm font-light">Brands report 80% reduction in time spent managing and distributing assets to retailers.</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-light text-black mb-4">3<span className="text-orange-600">x</span></div>
                <div className="text-lg font-medium text-black mb-3">Faster Launches</div>
                <p className="text-gray-600 text-sm font-light">New product launches reach market 3x faster with instant asset distribution.</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-light text-black mb-4">95<span className="text-blue-600">%</span></div>
                <div className="text-lg font-medium text-black mb-3">Fewer Requests</div>
                <p className="text-gray-600 text-sm font-light">Eliminate 95% of &quot;send me the assets&quot; emails with self-service access.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl font-light text-black mb-8 leading-tight">
                    Built for <span className="font-medium">sports supplement</span><br />industry
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Product launch coordination tools</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Compliance-ready documentation management</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Multi-format support (images, videos, PDFs, docs)</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Campaign collaboration workflows</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Enterprise-grade security & permissions</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black text-white p-8">
                  <h4 className="font-medium text-white mb-6">
                    Transform Your Workflow Today
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-400">Before STACKCESS</span>
                      <span className="text-white">After STACKCESS</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">20+ hrs/week managing assets</span>
                      <span className="text-white">4 hrs/week oversight</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">3-month launch cycles</span>
                      <span className="text-white">4-week launch cycles</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Inconsistent branding</span>
                      <span className="text-white">Always on-brand</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Manual asset requests</span>
                      <span className="text-white">Self-service downloads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-32 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-light text-black mb-6 leading-tight">
                Trusted by <span className="font-medium">growing</span><br />supplement brands
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Join 500+ supplement brands and retailers already transforming their asset management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="bg-white border border-gray-200 p-8">
                <p className="text-gray-700 mb-8 font-light italic leading-relaxed">
                  &quot;STACKCESS eliminated our asset bottlenecks. Our retailers now have instant access to everything they need, and our launch times have improved dramatically.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-medium text-sm">SC</span>
                  </div>
                  <div>
                    <div className="font-medium text-black text-sm">Sarah Chen</div>
                    <div className="text-gray-500 text-xs">Marketing Director, Peak Performance Labs</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-8">
                <p className="text-gray-700 mb-8 font-light italic leading-relaxed">
                  &quot;As a distributor working with 20+ supplement brands, STACKCESS has been a game-changer. One login, all the assets I need, always up-to-date.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-medium text-sm">MR</span>
                  </div>
                  <div>
                    <div className="font-medium text-black text-sm">Mike Rodriguez</div>
                    <div className="text-gray-500 text-xs">Operations Manager, FitTech Distribution</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-8">
                <p className="text-gray-700 mb-8 font-light italic leading-relaxed">
                  &quot;The time we save on asset management now goes into strategy and growth. STACKCESS has streamlined our entire brand-retailer relationship.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-medium text-sm">JT</span>
                  </div>
                  <div>
                    <div className="font-medium text-black text-sm">Jessica Torres</div>
                    <div className="text-gray-500 text-xs">Brand Manager, Elite Nutrition Co.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-12 text-gray-400">
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-1">500+</div>
                  <div className="text-xs uppercase tracking-wider">Supplement brands<br />in our waitlist</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-1">50+</div>
                  <div className="text-xs uppercase tracking-wider">Distribution networks<br />ready to connect</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 px-6 bg-black">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4">
              <span className="text-xs font-medium text-orange-400 uppercase tracking-wider">
                Limited Beta Access Available
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[0.9]">
              Ready to<br />
              <span className="font-medium">transform</span> your<br />
              asset management?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Join the waitlist for exclusive beta access. Be among the first to experience seamless asset management for the supplement industry.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 bg-white border border-gray-200 text-black focus:border-blue-600 focus:outline-none transition-colors duration-200"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Beta Access
                </button>
              </div>
              {isSubmitted && (
                <p className="mt-4 text-white font-medium text-sm">Success! We&apos;ll send you exclusive updates and beta access details.</p>
              )}
            </form>
            
            <div className="flex flex-col sm:flex-row gap-8 text-gray-400 text-xs justify-center items-center uppercase tracking-wider">
              <div>Free during beta period</div>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <div>No credit card required</div>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <div>Priority customer support</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}