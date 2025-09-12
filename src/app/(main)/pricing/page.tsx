'use client'

import { useState } from 'react'
import { Check, ArrowRight, Star } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components"

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stackcess.com' },
    { name: 'Pricing', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://stackcess.com'}/pricing` }
  ])

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small supplement brands getting started',
      monthlyPrice: 49,
      yearlyPrice: 39,
      popular: false,
      features: [
        'Up to 500 assets',
        '5 team members',
        'Basic asset organization',
        'Email notifications',
        'Standard support',
        '10GB storage',
        'Basic analytics'
      ],
      limitations: [
        'Limited retailer connections (5)',
        'Basic file formats only',
        'Standard upload speeds'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'For growing brands scaling their retail network',
      monthlyPrice: 149,
      yearlyPrice: 119,
      popular: true,
      features: [
        'Up to 5,000 assets',
        '25 team members',
        'Advanced asset organization',
        'Smart categorization',
        'Real-time notifications',
        'Priority support',
        '100GB storage',
        'Advanced analytics',
        'Custom workflows',
        'API access',
        'Unlimited retailer connections',
        'All file formats supported',
        'High-speed uploads',
        'Campaign collaboration tools'
      ],
      limitations: []
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large brands with complex needs',
      monthlyPrice: null,
      yearlyPrice: null,
      popular: false,
      features: [
        'Unlimited assets',
        'Unlimited team members',
        'Enterprise asset management',
        'AI-powered organization',
        'Custom notification rules',
        'Dedicated account manager',
        'Unlimited storage',
        'Custom analytics & reporting',
        'Advanced workflow automation',
        'Full API access',
        'White-label options',
        'Custom integrations',
        'SLA guarantees',
        'Advanced security & compliance'
      ],
      limitations: []
    }
  ]

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
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full">
                Simple, transparent pricing
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black mb-8 tracking-tight leading-[0.9]">
              Choose the plan that<br />
              <span className="font-medium">scales</span> with your<br />
              <span className="text-primary font-medium">growth</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Start free, upgrade when you need more. All plans include core DAM features to connect your brand with retailers.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-16">
              <div className="bg-gray-100 p-1 rounded-lg border border-gray-200">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    billingPeriod === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    billingPeriod === 'yearly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                    20% off
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    plan.popular 
                      ? 'border-primary shadow-lg scale-105' 
                      : 'border-gray-200 shadow-sm'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="mb-8">
                      {plan.monthlyPrice ? (
                        <div className="flex items-baseline">
                          <span className="text-5xl font-light text-black">
                            ${billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-500 text-sm ml-2">
                            /{billingPeriod === 'yearly' ? 'mo' : 'month'}
                          </span>
                          {billingPeriod === 'yearly' && (
                            <span className="text-sm text-gray-500 ml-2">
                              (billed annually)
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="text-3xl font-medium text-gray-900">Custom</div>
                      )}
                    </div>

                    {plan.monthlyPrice ? (
                      <RegisterLink 
                        postLoginRedirectURL="http://localhost:3001/onboarding"
                        authUrlParams={{
                          connection_id: plan.id,
                          billing_plan: billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice,
                          billing_period: billingPeriod
                        }}
                      >
                        <button
                          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 mb-8 ${
                            plan.popular
                              ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5'
                              : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-md hover:-translate-y-0.5'
                          }`}
                        >
                          <span className="flex items-center justify-center gap-2">
                            Get Started
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </button>
                      </RegisterLink>
                    ) : (
                      <a 
                        href="mailto:sales@stackcess.com"
                        className="block w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 mb-8 bg-gray-100 text-gray-900 hover:bg-gray-200 text-center"
                      >
                        Contact Sales
                      </a>
                    )}

                    <div className="space-y-4">
                      <div className="text-sm font-medium text-gray-900 mb-3">Everything included:</div>
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations.length > 0 && (
                        <>
                          <div className="border-t border-gray-100 pt-4 mt-6">
                            <div className="text-sm font-medium text-gray-900 mb-3">Plan limitations:</div>
                            {plan.limitations.map((limitation) => (
                              <div key={limitation} className="flex items-start space-x-3">
                                <div className="w-4 h-4 border border-gray-300 rounded-sm mt-0.5 flex-shrink-0"></div>
                                <span className="text-sm text-gray-500">{limitation}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-black mb-6 leading-tight">
                Frequently asked <span className="font-medium">questions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about STACKCESS pricing and features.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I switch plans at any time?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
                },
                {
                  question: "What happens to my data if I cancel?",
                  answer: "Your data remains accessible for 30 days after cancellation. You can export all your assets and data during this period."
                },
                {
                  question: "Do you offer discounts for annual billing?",
                  answer: "Yes! Annual plans receive a 20% discount compared to monthly billing. All annual plans are billed upfront."
                },
                {
                  question: "Can retailers access assets for free?",
                  answer: "Yes, retailers never pay for accessing brand assets. Only brands pay for the platform to upload and manage their content."
                },
                {
                  question: "What file types do you support?",
                  answer: "We support all common formats including images (JPG, PNG, SVG), videos (MP4, MOV), documents (PDF, DOCX), and more. Enterprise plans include custom format support."
                },
                {
                  question: "Is there a setup fee?",
                  answer: "No setup fees for any plan. Enterprise customers receive complimentary onboarding and training sessions."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-sm transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-black">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
              Ready to streamline your<br />
              <span className="font-medium">asset management?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
              Join hundreds of supplement brands already using STACKCESS to connect with their retailers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RegisterLink 
                postLoginRedirectURL="http://localhost:3001/onboarding"
                authUrlParams={{
                  connection_id: "starter",
                  billing_plan: "free_trial",
                  billing_period: "monthly"
                }}
              >
                <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                  Start Free Trial
                </button>
              </RegisterLink>
              <a 
                href="mailto:sales@stackcess.com?subject=Demo Request&body=I'd like to schedule a demo of STACKCESS."
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                Schedule Demo
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-gray-400 text-sm">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}