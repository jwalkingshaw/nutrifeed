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
      
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative px-6 py-32 sm:py-40 lg:py-48 bg-black">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800/50 border border-gray-700 rounded-full mb-8">
                Sports Supplements Operating System
              </div>
              
              <SplitText className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-8 tracking-tight leading-[1.1]" delay={0.1}>
                Your supplement stack.<br />Organized, shared, scaled.
              </SplitText>
              
              <div className="max-w-2xl mx-auto mb-12">
                <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
                  Stackcess connects supplement brands with retailers, distributors, and partners through one unified platform. Manage products, assets, compliance, and partnerships—all in one place.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 text-sm text-gray-400 justify-center items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Product & asset management
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Partner collaboration
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Compliance tracking
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <EmailSignup 
                source="hero"
                placeholder="Enter your work email"
                buttonText="Join Waitlist"
                successMessage="Welcome to the stack! We'll keep you updated on our progress."
                size="lg"
                className="mb-4 [&_input]:bg-white/10 [&_input]:border-gray-600 [&_input]:text-white [&_input]:placeholder-gray-400 [&_button]:bg-orange-600 [&_button]:hover:bg-orange-700"
              />
              <p className="text-xs text-gray-500 text-center mt-4">
                Join the waitlist • Early access available • Built for the industry
              </p>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-24 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* Problem Side */}
              <div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-red-600 uppercase tracking-wider">
                    Industry Reality
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-12 leading-tight">
                  Scattered systems<br />are <span className="font-medium">breaking</span> your stack
                </h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Product info scattered across emails, drives, and spreadsheets</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Compliance docs buried when regulatory changes hit</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Partners working with outdated marketing materials</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">New product launches delayed by coordination chaos</p>
                  </div>
                </div>
                <div className="border-l-4 border-red-200 bg-red-50 p-6">
                  <p className="text-gray-800 font-medium text-lg mb-2">
                    &quot;We were losing deals because our distributors had outdated pricing and couldn't find current compliance docs.&quot;
                  </p>
                  <p className="text-gray-600 text-sm">— Operations Director, Premium Supplements Brand</p>
                </div>
              </div>

              {/* Solution Side */}
              <div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-green-600 uppercase tracking-wider">
                    The Stackcess Way
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-12 leading-tight">
                  One system.<br /><span className="font-medium">Stronger</span> together.
                </h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Centralized product database with real-time updates</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Automated compliance tracking and alert system</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Partner portal for instant access to latest assets</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Project workflows for seamless new product rollouts</p>
                  </div>
                </div>
                <div className="border-l-4 border-green-200 bg-green-50 p-6">
                  <p className="text-gray-800 font-medium text-lg mb-2">
                    &quot;Stackcess transformed our operations. Partners stay current, launches happen faster, and we actually have time for strategy.&quot;
                  </p>
                  <p className="text-gray-600 text-sm">— CEO, Fast-Growing Sports Nutrition Brand</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement/Roadmap Section */}
        <section className="py-32 px-6 bg-black">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <span className="text-xs font-medium text-orange-400 uppercase tracking-wider">
                Shape the Future
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-8 leading-tight">
              Help us build the platform<br /><span className="font-medium">your stack</span> deserves
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              We're building Stackcess with the sports supplement community. Your input shapes every feature we develop.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/roadmap"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-colors"
              >
                Submit Feature Request
              </Link>
              <div className="flex items-center text-gray-400 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live roadmap • Community driven
              </div>
            </div>
          </div>
        </section>

        {/* Industry News Preview Section */}
        <IndustryNewsPreview />

        {/* Value Proposition Section */}
        <section className="py-32 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="mb-4">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                  Built for Your Stack
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-6 leading-tight">
                From formula to shelf.<br /><span className="font-medium">Every step</span> connected.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Stackcess is the operating system that powers sports supplement brands, connecting every stakeholder in your growth journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Brands */}
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-3 leading-tight">
                    Supplement Brands
                  </h3>
                  <p className="text-gray-600 text-sm font-light">
                    Organize products, manage compliance, and scale partnerships
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Product catalog & specs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Marketing asset library</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Regulatory compliance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Partner communication</p>
                  </div>
                </div>
              </div>

              {/* Distributors */}
              <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 p-8">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-3 leading-tight">
                    Distributors
                  </h3>
                  <p className="text-gray-600 text-sm font-light">
                    Access brand portfolios and coordinate retail relationships
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Multi-brand dashboard</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Current pricing & specs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Sales support materials</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Inventory coordination</p>
                  </div>
                </div>
              </div>

              {/* Retailers */}
              <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 p-8">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-3 leading-tight">
                    Retailers
                  </h3>
                  <p className="text-gray-600 text-sm font-light">
                    Get fresh content and drive sales with up-to-date brand materials
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Brand asset library</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Campaign materials</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Product education</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Co-marketing requests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Focused Benefits Section */}
        <section className="py-32 px-6 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="mb-2">
                <span className="text-xs font-medium text-purple-600 uppercase tracking-wider">
                  Industry Impact
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-6 leading-tight">
                From chaos to control.<br /><span className="font-medium">Stack your</span> success.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Stackcess transforms how supplement brands operate, delivering measurable results across your entire value chain.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16 mb-20">
              <div className="text-center">
                <div className="text-6xl font-light text-black mb-4">67<span className="text-purple-600">%</span></div>
                <div className="text-lg font-medium text-black mb-3">Faster Compliance</div>
                <p className="text-gray-600 text-sm font-light">Regulatory updates pushed instantly across all stakeholders, reducing compliance lag time.</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-light text-black mb-4">2.3<span className="text-blue-600">x</span></div>
                <div className="text-lg font-medium text-black mb-3">Launch Velocity</div>
                <p className="text-gray-600 text-sm font-light">New supplement launches reach retailers faster with synchronized product rollouts.</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-light text-black mb-4">89<span className="text-green-600">%</span></div>
                <div className="text-lg font-medium text-black mb-3">Partner Satisfaction</div>
                <p className="text-gray-600 text-sm font-light">Distributors and retailers report higher satisfaction with streamlined brand collaboration.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl font-medium text-black mb-8 leading-tight">
                    Purpose-built for<br /><span className="font-semibold">supplement operations</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Formula specifications & ingredient tracking</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">FDA & regulatory compliance workflows</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Batch tracking & quality assurance docs</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Partner onboarding & certification</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Multi-channel campaign coordination</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8">
                  <h4 className="font-medium !text-white mb-6">
                    The Stackcess Difference
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-700">
                      <span className="!text-white opacity-60">Traditional Approach</span>
                      <span className="!text-white">With Stackcess</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="!text-white opacity-60">Manual compliance checks</span>
                      <span className="!text-white">Automated tracking</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="!text-white opacity-60">Scattered product data</span>
                      <span className="!text-white">Unified database</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="!text-white opacity-60">Email-based partnerships</span>
                      <span className="!text-white">Platform collaboration</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="!text-white opacity-60">Reactive operations</span>
                      <span className="!text-white">Proactive workflows</span>
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
              <div className="mb-4">
                <span className="text-xs font-medium text-green-600 uppercase tracking-wider">
                  Community Powered
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-6 leading-tight">
                Built by the industry.<br /><span className="font-medium">For the</span> industry.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Leading supplement brands are already shaping Stackcess to solve real industry problems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="bg-gray-50 border border-gray-200 p-8">
                <p className="text-gray-700 mb-8 font-light italic leading-relaxed">
                  &quot;We needed something built for our industry's complexity. Generic platforms don't understand compliance workflows and partner relationships like Stackcess does.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-medium text-sm">AC</span>
                  </div>
                  <div>
                    <div className="font-medium text-black text-sm">Alex Chen</div>
                    <div className="text-gray-500 text-xs">COO, Premium Stack Supplements</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 p-8">
                <p className="text-gray-700 mb-8 font-light italic leading-relaxed">
                  &quot;Finally, a platform that connects our entire network. Our retail partners love having instant access to current product info and marketing materials.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-medium text-sm">LM</span>
                  </div>
                  <div>
                    <div className="font-medium text-black text-sm">Lisa Martinez</div>
                    <div className="text-gray-500 text-xs">VP Sales, Iron Wolf Nutrition</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 p-8">
                <p className="text-gray-700 mb-8 font-light italic leading-relaxed">
                  &quot;The roadmap feature requests are game-changing. We can actually influence what gets built based on our day-to-day operational needs.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-medium text-sm">DJ</span>
                  </div>
                  <div>
                    <div className="font-medium text-black text-sm">David Johnson</div>
                    <div className="text-gray-500 text-xs">Founder, Next Level Performance</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-12 text-gray-400">
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-1">150+</div>
                  <div className="text-xs uppercase tracking-wider">Early access<br />requests</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-1">25+</div>
                  <div className="text-xs uppercase tracking-wider">Feature requests<br />submitted</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-1">12</div>
                  <div className="text-xs uppercase tracking-wider">Beta partners<br />onboard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 px-6 bg-black">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <span className="text-xs font-medium text-orange-400 uppercase tracking-wider">
                Join the Stack Revolution
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium !text-white mb-8 tracking-tight leading-[0.9]">
              Ready to stack<br />
              <span className="font-semibold !text-white">your success</span>?
            </h2>
            <p className="text-xl !text-white opacity-80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Join the waitlist and help shape the future of supplement operations. Early access, exclusive updates, and direct influence on what we build.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="max-w-sm">
                <EmailSignup 
                  source="closing"
                  placeholder="Enter your email"
                  buttonText="Join Waitlist"
                  successMessage="You're in the stack! We'll keep you updated on our progress."
                  size="lg"
                  variant="default"
                  className="[&_input]:bg-white [&_input]:text-black [&_input]:border-gray-200 [&_input]:focus:border-orange-400 [&_button]:bg-orange-600 [&_button]:hover:bg-orange-700 [&_.text-green-600]:!text-white"
                />
              </div>
              <div className="text-white opacity-60 text-sm">or</div>
              <Link 
                href="/roadmap"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
              >
                Shape Our Roadmap
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 !text-white opacity-60 text-xs justify-center items-center uppercase tracking-wider">
              <div>Built for supplement industry</div>
              <div className="hidden sm:block w-1 h-1 bg-white rounded-full opacity-40"></div>
              <div>Community-driven development</div>
              <div className="hidden sm:block w-1 h-1 bg-white rounded-full opacity-40"></div>
              <div>Early access priority</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}