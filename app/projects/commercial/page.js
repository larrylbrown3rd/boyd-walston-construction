'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ProjectPhotoGallery from '@/components/ProjectPhotoGallery'
import ProjectsCTA from '@/components/ProjectsCTA'
import { featuredCommercialProjects, commercialGalleryPhotos } from '@/data/projects'

const ProjectCarousel = dynamic(
  () => import('@/components/ProjectCarousel'),
  { ssr: false }
)

const commercialTransformations = [
  {
    eyebrow: 'Outdoor Patio & Amenities',
    title: 'Outdoor Patio & Amenities',
    description: 'From concrete pour to a finished break area with seating, planters, lighting, and site amenities.',
    beforeSrc: '/commercial-concrete-pour.png',
    afterSrc: '/commercial-patio-complete.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
]

export default function CommercialProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Feature Project</p>
            <h1 className="text-display text-5xl md:text-6xl text-[#111111] mb-12">
              Commercial Projects
            </h1>
          </ScrollReveal>
          <ProjectCarousel projects={featuredCommercialProjects} />
        </div>
      </section>

      <section className="py-24 px-8 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Project</p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-4">
              See The Difference
            </h2>
            <div className="w-12 h-px bg-[#D4D4D4] mb-12" />
          </ScrollReveal>
          <BeforeAfterGallery items={commercialTransformations} />
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Project Gallery</p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-12">
              Our Commercial Work
            </h2>
          </ScrollReveal>
          <ProjectPhotoGallery photos={commercialGalleryPhotos} columns={4} />
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
