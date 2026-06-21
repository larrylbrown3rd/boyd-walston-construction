'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Button from '@/components/Button'
import JobberForm from '@/components/JobberForm'

const WebGLGradient = dynamic(
  () => import('@/components/WebGLGradient'),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar companyName="Boyd Walston Construction" />
      <Hero />
      <FeaturedProjects compact />

      <section className="py-24 px-6 md:px-10 bg-[#F8F7F5] border-y border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <p className="text-eyebrow text-sm mb-4">
              Request A Quote
            </p>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-6">
              Drop Us A Line
            </h2>
            <p className="font-lato font-light text-base text-[#9B9B9B] leading-relaxed mb-8">
              Fill out the form and our team will get back to you within 48 hours with next steps.
            </p>
            <JobberForm />
          </div>
          <FAQ embedded />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-6 md:px-10">
        <WebGLGradient />
        <div className="absolute inset-0 bg-[#111111]/60" style={{ zIndex: 1 }} />
        <div
          className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center"
          style={{ zIndex: 2 }}
        >
          <div>
            <p className="text-eyebrow text-sm mb-4">Get Started</p>
            <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
              Know Your Budget Before You Build
            </h2>
            <p className="font-lato text-base font-normal text-white/80 leading-relaxed">
              Get a free ballpark estimate sent to your inbox within 48 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:justify-self-end md:w-full md:max-w-sm">
            <Button href="/estimate" variant="primary" className="w-full">
              Get Free Estimate
            </Button>
            <Button href="/book" variant="outline" className="w-full">
              Book A Walkthrough
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
