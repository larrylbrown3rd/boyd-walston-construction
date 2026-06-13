'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

const WebGLGradient = dynamic(
  () => import('@/components/WebGLGradient'),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar companyName="Boyd Walston Construction" />
      <Hero />
      <section className="bg-[#F8F7F5] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-[#111111] mb-3">
              Our Services
            </h2>
          </ScrollReveal>
          <div className="w-12 h-px bg-[#C4A882] mb-6" />
          <p className="font-sans text-[#9B9B9B] text-sm tracking-wide mb-16">
            From custom homes to commercial build-outs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <ServiceCard
                title="Residential Construction"
                description="Custom home builds and renovations tailored to your vision"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <ServiceCard
                title="Commercial Build-Out"
                description="Professional commercial spaces built on time and on budget."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <ServiceCard
                title="Construction Management"
                description="Full project oversight from planning through completion."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8 text-center">
        <WebGLGradient />
        <div className="absolute inset-0 bg-[#111111]/60" style={{ zIndex: 1 }} />
        <div className="relative max-w-3xl mx-auto" style={{ zIndex: 2 }}>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            Get Started Today
          </p>
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Know Your Budget Before You Build
          </h2>
          <p className="font-sans text-[#9B9B9B] mb-10 text-lg">
            Answer 5 quick questions and get a ballpark
            estimate sent to your inbox within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/estimate"
              className="bg-white text-[#111111] font-sans font-semibold text-sm px-10 py-4 rounded-full hover:bg-[#F0EFED] transition-colors"
            >
              Get Free Estimate
            </a>
            <a
              href="/book"
              className="border border-white text-white font-sans font-semibold text-sm px-10 py-4 rounded-full hover:bg-white hover:text-[#111111] transition-colors"
            >
              Book A Walkthrough
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
