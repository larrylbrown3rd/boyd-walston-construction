'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ProjectsCTA from '@/components/ProjectsCTA'
import { governmentProjects } from '@/data/projects'

const ProjectCarousel = dynamic(
  () => import('@/components/ProjectCarousel'),
  { ssr: false }
)

const governmentTransformations = [
  {
    eyebrow: 'Government Contracting',
    title: 'Campus Plaza Masonry',
    description: 'Active-site masonry and hardscape restoration with protected finishes and phased construction.',
    beforeSrc: '/commercial-before.png',
    afterSrc: '/commercial-after.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
]

export default function GovernmentProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-eyebrow text-sm mb-4">
            Government
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Government Projects
          </h1>
          <p className="font-lato font-thin text-lg text-[#9B9B9B] max-w-2xl leading-relaxed">
            Institutional masonry, site work, and facility improvements delivered with compliance, safety, and accountability.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow text-sm mb-4">
              Featured Transformations
            </p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-4">
              See The Difference
            </h2>
            <div className="w-12 h-px bg-[#D4D4D4] mb-12" />
          </ScrollReveal>
          <BeforeAfterGallery items={governmentTransformations} />
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow text-sm mb-4">
              Featured Projects
            </p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-12">
              Our Government Work
            </h2>
          </ScrollReveal>
          <ProjectCarousel projects={governmentProjects} />
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
