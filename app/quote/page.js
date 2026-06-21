'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import JobberForm from '@/components/JobberForm'

const ParticleTunnel = dynamic(
  () => import('@/components/ParticleTunnel'),
  { ssr: false }
)

export default function Quote() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8">
        <ParticleTunnel />
        <div className="absolute inset-0 bg-[#111111]/70" style={{ zIndex: 1 }} />
        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 2 }}>
          <p className="text-eyebrow text-sm mb-4">
            Free Consultation
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Get A Quote
          </h1>
          <p className="font-lato font-thin text-lg text-[#9B9B9B] max-w-2xl leading-relaxed">
            Tell us about your project and we will get back to you
            within 48 hours with a free estimate.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <JobberForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
