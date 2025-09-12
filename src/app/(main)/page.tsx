'use client'

import { generateBreadcrumbSchema } from '@/lib/schema'
import IndustryNewsPreview from '@/components/IndustryNewsPreview'
import SplitText from '@/components/SplitText'
import { EmailSignup } from '@/components/forms'
import Link from 'next/link'

export default function Home() {

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stackcess.com' }
  ])


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <div className="bg-[#0a0a0a]">
        {/* Hero Section - Linear style left-aligned */}
        <section className="bg-[#0a0a0a] -mt-16 pt-24 pb-16 sm:pb-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto pt-8">
            {/* Subtle badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="text-xs !text-[#8a8f98] font-medium tracking-wide">SPORTS SUPPLEMENTS OPERATING SYSTEM</span>
            </div>
            
            {/* Main headline - Linear typography precision */}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium !text-[#f7f8f8] mb-4 tracking-[-0.02em] leading-[1.05] max-w-4xl">
              <SplitText delay={0.1}>Your supplement stack. Organized, shared, scaled.</SplitText>
            </div>
            
            {/* Clean subheadline */}
            <p className="text-base sm:text-lg !text-[#8a8f98] mb-8 sm:mb-12 max-w-lg leading-[1.4] font-normal">
              Connect supplement brands with retailers, distributors, and partners through one unified platform.
            </p>
            
            {/* Focused CTA */}
            <div id="hero-signup" className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <EmailSignup 
                source="waitlist"
                placeholder="Enter your work email"
                buttonText="Join Waitlist"
                successMessage="Welcome to the stack!"
                size="default"
                className="w-full sm:w-auto [&_form]:flex [&_form]:flex-col sm:[&_form]:flex-row [&_form]:gap-3 [&_form]:items-start sm:[&_form]:items-start [&_form]:w-full sm:[&_form]:w-auto [&_input]:bg-[#0a0a0a]/5 [&_input]:border-white/10 [&_input]:!text-[#f7f8f8] [&_input]:placeholder-white/40 [&_input]:backdrop-blur-sm [&_input]:w-full sm:[&_input]:w-80 [&_input]:h-10 [&_button]:bg-[#0a0a0a] [&_button]:!text-[#f7f8f8] [&_button]:hover:bg-[#0a0a0a]/90 [&_button]:font-medium [&_button]:px-6 [&_button]:h-10 [&_button]:whitespace-nowrap [&_button]:text-sm [&_button]:w-full sm:[&_button]:w-auto"
              />
            </div>
            
            {/* Minimal feature indicators */}
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0a]/5 border border-white/10">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span className="text-xs !text-[#8a8f98] font-medium">Product Management</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0a]/5 border border-white/10">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-xs !text-[#8a8f98] font-medium">Compliance Tracking</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0a]/5 border border-white/10">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <span className="text-xs !text-[#8a8f98] font-medium">Partner Collaboration</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - Sanity clean style */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium !text-[#f7f8f8] mb-4 sm:mb-6 tracking-[-0.02em] leading-[1.1]">
                Scattered systems are<br className="hidden sm:block" />breaking your stack
              </h2>
              <div className="flex justify-center">
                <p className="text-lg sm:text-xl !text-[#f7f8f8]/60 max-w-2xl leading-[1.4] text-center px-4 sm:px-0">
                  Sports supplement brands struggle with fragmented operations and disconnected partnerships.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center sm:text-left">
                <div className="w-2 h-2 bg-red-500 rounded-full mb-4 sm:mb-6 mx-auto sm:mx-0"></div>
                <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Product Chaos</h3>
                <p className="!text-[#f7f8f8]/60 leading-[1.4] text-sm sm:text-base">
                  Product information scattered across emails, drives, and spreadsheets. 
                  Partners working with outdated materials.
                </p>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="w-2 h-2 bg-red-500 rounded-full mb-4 sm:mb-6 mx-auto sm:mx-0"></div>
                <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Compliance Issues</h3>
                <p className="!text-[#f7f8f8]/60 leading-[1.4] text-sm sm:text-base">
                  Regulatory documents buried when changes hit. 
                  Manual tracking leads to costly compliance failures.
                </p>
              </div>
              
              <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                <div className="w-2 h-2 bg-red-500 rounded-full mb-4 sm:mb-6 mx-auto sm:mx-0"></div>
                <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Launch Delays</h3>
                <p className="!text-[#f7f8f8]/60 leading-[1.4] text-sm sm:text-base">
                  New product launches delayed by coordination chaos 
                  across your distribution network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - Linear precision */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium !text-[#f7f8f8] mb-4 sm:mb-6 tracking-[-0.02em] leading-[1.1]">
                One system.<br />
                Stronger together.
              </h2>
              <div className="flex justify-center">
                <p className="text-lg sm:text-xl !text-[#8a8f98] max-w-2xl leading-[1.4] text-center px-4 sm:px-0">
                  Centralize operations, automate compliance, and connect your entire supplement ecosystem.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 sm:p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mb-4 sm:mb-6"></div>
                <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Unified Database</h3>
                <p className="!text-[#8a8f98] leading-[1.4] text-sm sm:text-base">
                  Centralized product database with real-time updates. 
                  All stakeholders stay synchronized automatically.
                </p>
              </div>
              
              <div className="p-6 sm:p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mb-4 sm:mb-6"></div>
                <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Automated Compliance</h3>
                <p className="!text-[#8a8f98] leading-[1.4] text-sm sm:text-base">
                  Automated compliance tracking and alert system. 
                  Never miss regulatory changes again.
                </p>
              </div>
              
              <div className="p-6 sm:p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-orange-400 rounded-full mb-4 sm:mb-6"></div>
                <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Partner Portal</h3>
                <p className="!text-[#8a8f98] leading-[1.4] text-sm sm:text-base">
                  Partner portal for instant access to latest assets. 
                  Self-service reduces support burden.
                </p>
              </div>
              
              <div className="p-6 sm:p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full mb-4 sm:mb-6"></div>
                <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Launch Workflows</h3>
                <p className="!text-[#8a8f98] leading-[1.4] text-sm sm:text-base">
                  Project workflows for seamless new product rollouts. 
                  Coordinate launches across channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Section - Sanity clean */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium !text-[#f7f8f8] mb-4 sm:mb-6 tracking-[-0.02em] leading-[1.1]">
              Help us build the platform<br className="hidden sm:block" />your stack deserves
            </h2>
            <p className="text-lg sm:text-xl !text-[#f7f8f8]/60 mb-6 sm:mb-8 leading-[1.4] px-4 sm:px-0">
              We're building Stackcess with the sports supplement community. 
              Your input shapes every feature we develop.
            </p>
            
            <Link 
              href="/roadmap"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              Submit Feature Request
            </Link>
          </div>
        </section>

        {/* Stakeholder Section - Linear clean style */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8 sm:mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium !text-[#f7f8f8] mb-4 sm:mb-6 tracking-[-0.02em] leading-[1.1]">
                  Built for every stakeholder
                </h2>
              </div>
              <div>
                <p className="text-lg sm:text-xl !text-[#8a8f98] mb-4 sm:mb-6 leading-[1.4]">
                  Stackcess connects brands, distributors, and retailers through a unified platform designed for the supplement industry's unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
                  <Link href="/roadmap" className="!text-[#8a8f98] hover:!text-[#f7f8f8] transition-colors">
                    Help us build →
                  </Link>
                  <button 
                    onClick={() => document.getElementById('hero-signup')?.scrollIntoView({ behavior: 'smooth' })}
                    className="!text-[#8a8f98] hover:!text-[#f7f8f8] transition-colors text-left sm:text-center"
                  >
                    Join the ecosystem →
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Brands */}
              <div className="p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="w-2 h-2 bg-[#0a0a0a] rounded-full mb-6"></div>
                  <h3 className="text-xl font-medium !text-[#f7f8f8] mb-4">Supplement Brands</h3>
                  <p className="!text-[#8a8f98] mb-6 leading-[1.4]">
                    Organize products, manage compliance, and scale partnerships
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-sm !text-[#8a8f98]">
                    Product catalog & specifications
                  </div>
                  <div className="text-sm !text-[#8a8f98]">
                    Marketing asset library
                  </div>
                  <div className="text-sm !text-[#8a8f98]">
                    Regulatory compliance
                  </div>
                </div>
              </div>

              {/* Distributors */}
              <div className="p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="w-2 h-2 bg-[#0a0a0a] rounded-full mb-6"></div>
                  <h3 className="text-xl font-medium !text-[#f7f8f8] mb-4">Distributors</h3>
                  <p className="!text-[#8a8f98] mb-6 leading-[1.4]">
                    Access brand portfolios and coordinate retail relationships
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-sm !text-[#8a8f98]">
                    Multi-brand dashboard
                  </div>
                  <div className="text-sm !text-[#8a8f98]">
                    Current pricing & specs
                  </div>
                  <div className="text-sm !text-[#8a8f98]">
                    Sales support materials
                  </div>
                </div>
              </div>

              {/* Retailers */}
              <div className="p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="w-2 h-2 bg-[#0a0a0a] rounded-full mb-6"></div>
                  <h3 className="text-xl font-medium !text-[#f7f8f8] mb-4">Retailers</h3>
                  <p className="!text-[#8a8f98] mb-6 leading-[1.4]">
                    Fresh content and materials to drive sales
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-sm !text-[#8a8f98]">
                    Brand asset library
                  </div>
                  <div className="text-sm !text-[#8a8f98]">
                    Campaign materials
                  </div>
                  <div className="text-sm !text-[#8a8f98]">
                    Product education
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Sanity clean */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium !text-[#f7f8f8] mb-8 sm:mb-12 tracking-[-0.02em] leading-[1.1]">
              Measurable impact<br />
              <span className="!text-[#f7f8f8]/60">across your value chain</span>
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
              <div>
                <div className="text-4xl sm:text-6xl font-light !text-[#f7f8f8] mb-3 sm:mb-4">67%</div>
                <div className="text-base sm:text-lg font-medium !text-[#f7f8f8] mb-2 sm:mb-3">Faster Compliance</div>
                <p className="!text-[#f7f8f8]/60 text-xs sm:text-sm leading-[1.4]">
                  Regulatory updates pushed instantly across all stakeholders
                </p>
              </div>
              
              <div>
                <div className="text-4xl sm:text-6xl font-light !text-[#f7f8f8] mb-3 sm:mb-4">2.3x</div>
                <div className="text-base sm:text-lg font-medium !text-[#f7f8f8] mb-2 sm:mb-3">Launch Velocity</div>
                <p className="!text-[#f7f8f8]/60 text-xs sm:text-sm leading-[1.4]">
                  New supplements reach retailers faster with synchronized rollouts
                </p>
              </div>
              
              <div>
                <div className="text-4xl sm:text-6xl font-light !text-[#f7f8f8] mb-3 sm:mb-4">89%</div>
                <div className="text-base sm:text-lg font-medium !text-[#f7f8f8] mb-2 sm:mb-3">Partner Satisfaction</div>
                <p className="!text-[#f7f8f8]/60 text-xs sm:text-sm leading-[1.4]">
                  Higher satisfaction with streamlined brand collaboration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Problems - Linear cards */}
        <section className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-medium !text-[#f7f8f8] mb-6 tracking-[-0.02em] leading-[1.1]">
                Common challenges<br />
                <span className="!text-[#8a8f98]">across the industry.</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-400 rounded-full mb-6"></div>
                <h3 className="text-xl font-medium !text-[#f7f8f8] mb-4">Fragmented Operations</h3>
                <p className="!text-[#8a8f98] leading-[1.4]">
                  Product data scattered across multiple systems makes it impossible to maintain consistency across your distribution network.
                </p>
              </div>
              
              <div className="p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mb-6"></div>
                <h3 className="text-xl font-medium !text-[#f7f8f8] mb-4">Manual Compliance Tracking</h3>
                <p className="!text-[#8a8f98] leading-[1.4]">
                  Regulatory changes buried in email chains while partners work with outdated compliance documentation.
                </p>
              </div>
              
              <div className="p-8 rounded-xl bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-orange-400 rounded-full mb-6"></div>
                <h3 className="text-xl font-medium !text-[#f7f8f8] mb-4">Partnership Bottlenecks</h3>
                <p className="!text-[#8a8f98] leading-[1.4]">
                  Retailers and distributors constantly requesting updated materials while brands struggle to keep everyone synchronized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Clean & focused */}
        <section id="final-cta" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium !text-[#f7f8f8] mb-4 sm:mb-6 tracking-[-0.02em] leading-[1.1]">
              Ready to stack<br />
              <span className="!text-[#f7f8f8]/60">your success?</span>
            </h2>
            <p className="text-lg sm:text-xl !text-[#f7f8f8]/60 mb-6 sm:mb-8 leading-[1.4] px-4 sm:px-0">
              Join the waitlist for early access and exclusive updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
              <EmailSignup 
                source="waitlist"
                placeholder="Enter your email"
                buttonText="Join Waitlist"
                successMessage="You're in! We'll keep you updated."
                size="lg"
                className="w-full sm:w-auto [&_form]:flex [&_form]:flex-col sm:[&_form]:flex-row [&_form]:gap-3 [&_form]:items-stretch sm:[&_form]:items-center [&_form]:w-full sm:[&_form]:w-auto [&_input]:border-black/20 [&_input]:focus:border-black [&_input]:w-full sm:[&_input]:w-auto [&_button]:bg-white [&_button]:text-black [&_button]:hover:bg-white/90 [&_button]:w-full sm:[&_button]:w-auto"
              />
              <span className="!text-[#f7f8f8]/40 text-sm hidden sm:inline">or</span>
              <Link 
                href="/roadmap"
                className="!text-[#f7f8f8]/60 hover:!text-[#f7f8f8] text-sm font-medium transition-colors w-full sm:w-auto text-center"
              >
                Shape our roadmap
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}