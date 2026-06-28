'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectsCTA from '@/components/ProjectsCTA'
import ConstructionIcon from '@/components/ConstructionIcon'

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

      <section className="bg-[#111111] text-white py-24 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/lockhart-hall-plaza.png"
            alt="Government institutional project"
            fill
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">Government</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Government Projects
          </h1>
          <p className="text-lead-dark">
            Contracting, waste collection, and portable restroom services for municipal and institutional clients.
          </p>
        </div>
      </section>

      <section className="section-pad">
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
                <ConstructionIcon name="hammer" className="w-4 h-4" />
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
