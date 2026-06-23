'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectsCTA from '@/components/ProjectsCTA'

export default function GovernmentProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-eyebrow text-sm mb-4">Government</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Government Projects
          </h1>
          <p className="font-lato font-thin text-lg text-[#9B9B9B] max-w-2xl leading-relaxed">
            Government contracting projects coming soon. Contact us to discuss your institutional or public-sector project.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-lato text-base text-[#4A4A4A] leading-relaxed mb-8">
              We are updating this page with current government project photos and details. In the meantime, reach out for a quote or to discuss your project scope.
            </p>
            <a
              href="/quote"
              className="inline-flex items-center gap-2 font-inter text-sm text-[#111111] border border-[#111111] px-7 py-3.5 rounded-lg hover:bg-[#111111] hover:text-white transition-colors"
            >
              Request A Quote
              <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
