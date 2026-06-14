'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ProjectsCTA from '@/components/ProjectsCTA'
import { residentialProjects } from '@/data/projects'

const ProjectCarousel = dynamic(
  () => import('@/components/ProjectCarousel'),
  { ssr: false }
)

export default function ResidentialProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            Residential
          </p>
          <h1 className="font-bebas text-6xl md:text-7xl text-white leading-none mb-6">
            Residential Projects
          </h1>
          <p className="font-inter text-[#9B9B9B] text-lg max-w-2xl">
            Custom home builds, additions, and renovations crafted
            with care across Pike Road and surrounding communities.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
              Featured Transformation
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-[#111111] mb-4">
              See The Difference
            </h2>
            <div className="w-12 h-px bg-[#C4A882] mb-12" />
          </ScrollReveal>
          <BeforeAfterSlider
            beforeLabel="Before Renovation"
            afterLabel="After Renovation"
          />
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
              Featured Projects
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-[#111111] mb-12">
              Our Residential Work
            </h2>
          </ScrollReveal>
          <ProjectCarousel projects={residentialProjects} />
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
