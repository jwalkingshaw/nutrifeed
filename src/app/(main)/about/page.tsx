export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-[67px]">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium !text-[#f7f8f8] mb-6 sm:mb-8 tracking-[-0.02em] leading-[1.05]">
            About Stackcess
          </h1>
          <p className="text-lg sm:text-xl !text-[#8a8f98] max-w-3xl mx-auto leading-[1.4] px-4 sm:px-0">
            We're building the unified operating system for the sports supplement industry, connecting brands, distributors, and retailers in one seamless platform.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="mb-3 sm:mb-4">
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium !text-[#f7f8f8] mb-6 sm:mb-8 tracking-[-0.02em] leading-[1.1]">
                Simplify the complex
              </h2>
              <p className="text-lg sm:text-xl !text-[#8a8f98] leading-[1.4] mb-4 sm:mb-6">
                The sports supplement industry thrives on innovation, but struggles with fragmented operations. 
                We believe brands should focus on creating great products, not managing scattered systems.
              </p>
              <p className="text-base sm:text-lg !text-[#8a8f98] leading-[1.4]">
                Our mission is to eliminate operational chaos by providing one unified platform where 
                supplement brands, distributors, and retailers can collaborate seamlessly—turning complexity 
                into competitive advantage.
              </p>
            </div>
            <div className="lg:pl-12">
              <div className="bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium !text-[#f7f8f8] mb-2 text-base sm:text-lg">Unified Operations</h3>
                      <p className="!text-[#8a8f98] text-sm sm:text-base leading-[1.4]">One platform for products, compliance, and partnerships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium !text-[#f7f8f8] mb-2 text-base sm:text-lg">Industry Focus</h3>
                      <p className="!text-[#8a8f98] text-sm sm:text-base leading-[1.4]">Built specifically for sports supplement workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium !text-[#f7f8f8] mb-2 text-base sm:text-lg">Ecosystem Growth</h3>
                      <p className="!text-[#8a8f98] text-sm sm:text-base leading-[1.4]">Connecting all stakeholders for mutual success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 lg:pr-12">
              <div className="bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium !text-[#f7f8f8] mb-2 text-base sm:text-lg">Global Network</h3>
                      <p className="!text-[#8a8f98] text-sm sm:text-base leading-[1.4]">The go-to platform for supplement industry collaboration worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium !text-[#f7f8f8] mb-2 text-base sm:text-lg">Smart Automation</h3>
                      <p className="!text-[#8a8f98] text-sm sm:text-base leading-[1.4]">AI-powered workflows that eliminate manual coordination</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium !text-[#f7f8f8] mb-2 text-base sm:text-lg">Industry Growth</h3>
                      <p className="!text-[#8a8f98] text-sm sm:text-base leading-[1.4]">Empowering the entire ecosystem to reach more consumers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-3 sm:mb-4">
                <span className="text-xs font-medium text-orange-400 uppercase tracking-wider">
                  Our Vision
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium !text-[#f7f8f8] mb-6 sm:mb-8 tracking-[-0.02em] leading-[1.1]">
                The future of supplements
              </h2>
              <p className="text-lg sm:text-xl !text-[#8a8f98] leading-[1.4] mb-4 sm:mb-6">
                We envision a world where launching a new supplement, expanding distribution, or managing 
                compliance happens in minutes, not months.
              </p>
              <p className="text-base sm:text-lg !text-[#8a8f98] leading-[1.4]">
                By 2030, Stackcess will be the backbone of the global sports supplement industry—the platform 
                that connects every brand with every retailer, automates every workflow, and accelerates 
                innovation across the entire ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium !text-[#f7f8f8] mb-6 sm:mb-8 tracking-[-0.02em] leading-[1.1]">
              Built on strong foundations
            </h2>
            <p className="text-lg sm:text-xl !text-[#8a8f98] max-w-3xl mx-auto leading-[1.4] px-4 sm:px-0">
              Our values guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Industry First</h3>
              <p className="!text-[#8a8f98] leading-[1.4] text-sm sm:text-base">
                Every feature is designed with deep understanding of supplement industry workflows, 
                regulations, and relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Ecosystem Thinking</h3>
              <p className="!text-[#8a8f98] leading-[1.4] text-sm sm:text-base">
                We build for the entire network—brands, distributors, retailers—because 
                everyone wins when the ecosystem thrives.
              </p>
            </div>
            
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4">Radical Simplicity</h3>
              <p className="!text-[#8a8f98] leading-[1.4] text-sm sm:text-base">
                Complex operations should feel effortless. We obsess over removing friction 
                from every workflow and interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium !text-[#f7f8f8] mb-6 sm:mb-8 tracking-[-0.02em] leading-[1.1]">
            Join the movement
          </h2>
          <p className="text-lg sm:text-xl !text-[#8a8f98] mb-6 sm:mb-8 leading-[1.4] px-4 sm:px-0">
            We're building Stackcess with the community. Your input shapes our roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a 
              href="/roadmap"
              className="inline-flex items-center justify-center px-6 py-3 bg-white !text-black font-medium rounded-lg hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              Share Your Ideas
            </a>
            <span className="!text-[#8a8f98] text-sm hidden sm:inline">or</span>
            <a 
              href="mailto:hello@stackcess.com"
              className="!text-[#8a8f98] hover:!text-[#f7f8f8] text-sm font-medium transition-colors text-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}