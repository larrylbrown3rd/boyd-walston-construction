'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import FAQ from '@/components/FAQ'

const WireframeGeometry = dynamic(
  () => import('@/components/WireframeGeometry'),
  { ssr: false }
)

const FloorPlan = dynamic(
  () => import('@/components/FloorPlan'),
  { ssr: false }
)

const WebGLGradient = dynamic(
  () => import('@/components/WebGLGradient'),
  { ssr: false }
)

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8">
        <WireframeGeometry />
        <div className="absolute inset-0 bg-[#111111]/80" style={{ zIndex: 1 }} />
        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 2 }}>
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            What We Do
          </p>
          <h1 className="font-bebas text-6xl md:text-7xl text-white leading-none mb-6">
            Our Services
          </h1>
          <p className="font-inter text-[#9B9B9B] text-lg max-w-2xl">
            From custom homes to commercial build-outs — we handle
            every phase of construction with precision and care.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <ScrollReveal delay={0}>
            <div className="bg-white border border-[#E8E8E8] p-10 hover:border-[#111111] hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
              <h2 className="font-bebas text-2xl md:text-3xl text-[#111111] mb-4">
                Residential Construction
              </h2>
              <p className="font-inter text-sm text-[#9B9B9B] leading-relaxed mb-6">
                Custom home builds designed around your vision and
                budget. From foundation to finish we handle every
                detail of your new home construction.
              </p>
              <ul className="font-inter text-sm text-[#9B9B9B] space-y-2 list-none">
                <li>— Custom home builds</li>
                <li>— Home additions</li>
                <li>— Full renovations</li>
                <li>— Kitchen and bath remodels</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-white border border-[#E8E8E8] p-10 hover:border-[#111111] hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
              <h2 className="font-bebas text-2xl md:text-3xl text-[#111111] mb-4">
                Commercial Build-Out
              </h2>
              <p className="font-inter text-sm text-[#9B9B9B] leading-relaxed mb-6">
                Professional commercial spaces built on time and on
                budget. We work with business owners to deliver
                functional and impressive commercial environments.
              </p>
              <ul className="font-inter text-sm text-[#9B9B9B] space-y-2 list-none">
                <li>— Office build-outs</li>
                <li>— Retail spaces</li>
                <li>— Warehouse construction</li>
                <li>— Restaurant build-outs</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white border border-[#E8E8E8] p-10 hover:border-[#111111] hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
              <h2 className="font-bebas text-2xl md:text-3xl text-[#111111] mb-4">
                Construction Management
              </h2>
              <p className="font-inter text-sm text-[#9B9B9B] leading-relaxed mb-6">
                Full project oversight from planning through
                completion. We coordinate subcontractors, manage
                timelines, and keep your project on budget.
              </p>
              <ul className="font-inter text-sm text-[#9B9B9B] space-y-2 list-none">
                <li>— Project planning</li>
                <li>— Subcontractor coordination</li>
                <li>— Budget management</li>
                <li>— Timeline oversight</li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <section className="py-24 px-8 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
                Precision Planning
              </p>
              <h2 className="font-bebas text-5xl md:text-6xl text-white mb-6">
                Every Detail<br />Planned to Perfection
              </h2>
              <p className="font-inter text-[#9B9B9B] leading-relaxed mb-8">
                Before we break ground we plan every
                square foot of your project. Our detailed
                planning process ensures zero surprises
                and zero cost overruns.
              </p>
              <a
                href="/estimate"
                className="inline-block bg-white text-[#111111] font-inter font-semibold text-xs px-8 py-4 rounded-full hover:bg-[#F0EFED] transition-colors"
              >
                Start Planning →
              </a>
            </div>
            <FloorPlan />
          </div>
        </div>
      </section>

      <FAQ />

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8 text-center">
        <WebGLGradient />
        <div className="absolute inset-0 bg-[#111111]/60" style={{ zIndex: 1 }} />
        <div className="relative max-w-2xl mx-auto" style={{ zIndex: 2 }}>
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-inter text-[#9B9B9B] mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <a
            href="/quote"
            className="inline-block bg-white text-[#111111] font-inter font-semibold text-sm px-10 py-4 rounded-full hover:bg-[#F0EFED] transition-colors duration-300"
          >
            Get A Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
