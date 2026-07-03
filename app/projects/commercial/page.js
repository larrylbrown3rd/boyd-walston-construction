'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
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
    eyebrow: 'Exterior Painting',
    title: 'Exterior Painting',
    description: 'Full exterior repaint with boom lift access for second-story windows, facade prep, and a finished look from street level.',
    beforeSrc: '/commercial-exterior-painting-before.png',
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
          <p className="text-lead-dark">
            Build-outs, exterior work, concrete, and facility improvements for businesses across central Alabama.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#F8F7F5] border-b border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">What We Do</p>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-12">
              Commercial Services
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Tenant Build-Out', description: 'Custom interior construction for retail, office, and commercial spaces tailored to your business needs.' },
              { title: 'Facility Maintenance', description: 'Ongoing maintenance and repair services to keep your commercial property in top condition.' },
              { title: 'Roofing', description: 'Commercial roofing installation, repair, and replacement for flat and pitched roof systems.' },
              { title: 'Amenity Builds', description: 'Break rooms, patios, common areas, and outdoor amenities that enhance your workplace.' },
              { title: 'Owner Rep Services', description: 'Professional representation and project oversight to protect your interests throughout construction.' },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="bg-white border border-[#E8E8E8] p-8 h-full">
                  <h3 className="text-display text-2xl text-[#111111] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-lato text-sm text-[#4A4A4A] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
