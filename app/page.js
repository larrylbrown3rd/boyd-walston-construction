'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import TrustBadges from '@/components/TrustBadges'
import ServicesPreview from '@/components/ServicesPreview'
import HowItWorks from '@/components/HowItWorks'
import RiskReversal from '@/components/RiskReversal'
import Footer from '@/components/Footer'
import JobberForm from '@/components/JobberForm'
import ResponsePromise from '@/components/ResponsePromise'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar companyName="Boyd Walston Construction" />
      <Hero />
      <FeaturedProjects compact />
      <TrustBadges />
      <ServicesPreview />
      <HowItWorks />
      <RiskReversal />

      <section className="section-pad bg-white border-y border-[#E8E8E8]">
        <div className="max-w-3xl mx-auto">
          <span className="accent-bar mb-4" />
          <p className="text-eyebrow-dark text-sm mb-4">
            Request A Quote
          </p>
          <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-4">
            Drop Us A Line
          </h2>
          <p className="font-lato font-light text-base text-[#4A4A4A] leading-relaxed mb-6">
            Tell us about your project and our team will follow up within 48 hours with clear next steps — no pressure, no obligation.
          </p>
          <ResponsePromise />
          <JobberForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
