'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectsCTA from '@/components/ProjectsCTA'

const governmentServices = [
  {
    title: 'Government Contracts',
    description: 'Project photos and details coming soon.',
  },
  {
    title: 'Waste Collection',
    description: 'Municipal and institutional waste collection services.',
  },
  {
    title: 'Portable Restroom Rental',
    description: 'Portable restroom rental for job sites and events.',
  },
]

export default function GovernmentProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Government Projects
          </h1>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governmentServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="border border-[#E8E8E8] p-8 h-full">
                  <h2 className="text-display text-2xl text-[#111111] mb-3">
                    {service.title}
                  </h2>
                  <p className="font-lato text-sm text-[#4A4A4A] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 text-center">
              <a
                href="/quote"
                className="inline-flex items-center gap-2 font-inter text-sm text-[#111111] border border-[#111111] px-7 py-3.5 rounded-lg hover:bg-[#111111] hover:text-white transition-colors"
              >
                Request A Quote
                <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
