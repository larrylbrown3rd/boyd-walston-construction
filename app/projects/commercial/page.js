'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ProjectPhotoGallery from '@/components/ProjectPhotoGallery'
import ProjectsCTA from '@/components/ProjectsCTA'
import ProjectCarousel from '@/components/ProjectCarousel'
import { featuredCommercialProjects, commercialGalleryPhotos } from '@/data/projects'

const commercialTransformations = [
  {
    eyebrow: 'Commercial Roofing',
    title: 'Georgiana Opera House Roof',
    description: 'Metal roof removal through new decking to a finished modified bitumen roof system at a historic downtown venue.',
    beforeSrc: '/georgiana-opera-roof-progress.png',
    afterSrc: '/georgiana-opera-roof-complete.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
  {
    eyebrow: 'Exterior Painting',
    title: 'Exterior Painting',
    beforeSrc: '/exterior-renovation-progress.png',
    afterSrc: '/commercial-exterior-painting-after.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
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

      <section className="bg-[#111111] text-white py-24 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/commercial-building-exterior.png"
            alt="Commercial building exterior"
            fill
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">Commercial</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Commercial Projects
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Featured Projects</p>
          </ScrollReveal>
          <ProjectCarousel projects={featuredCommercialProjects} />
        </div>
      </section>

      <section className="section-pad bg-[#F8F7F5] border-y border-[#E8E8E8]">
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

      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Featured Transformations</p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-4">
              See The Difference
            </h2>
            <div className="w-12 h-px bg-[#D4D4D4] mb-12" />
          </ScrollReveal>
          <BeforeAfterGallery items={commercialTransformations} />
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
