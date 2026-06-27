'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ProjectPhotoGallery from '@/components/ProjectPhotoGallery'
import ProjectsCTA from '@/components/ProjectsCTA'
import { featuredResidentialProjects, residentialGalleryPhotos } from '@/data/projects'

const ProjectCarousel = dynamic(
  () => import('@/components/ProjectCarousel'),
  { ssr: false }
)

const residentialTransformations = [
  {
    eyebrow: 'Concrete Work',
    title: 'Site Prep to Finished Patio',
    description: 'Professional concrete prep with laser layout, rebar, and a clean backyard patio pour.',
    beforeSrc: '/concrete-prep.png',
    afterSrc: '/concrete-patio-pour.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
  {
    eyebrow: 'Attic Conversion',
    title: 'Renovation to Finished Room',
    description: 'Attic transformation from active renovation to a bright, finished living space with new flooring and trim.',
    beforeSrc: '/attic-renovation-progress.png',
    afterSrc: '/attic-finished.png',
    beforePosition: 'object-center',
    afterPosition: 'center 25%',
  },
  {
    eyebrow: 'Closet Build-Out',
    title: 'Custom Closet Transformation',
    description: 'Floor-to-ceiling closet build from in-progress cabinetry to a finished organized storage space.',
    beforeSrc: '/closet-in-progress.png',
    afterSrc: '/closet-finished.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
  {
    eyebrow: 'Kitchen Renovation',
    title: 'Before & After Kitchen Remodel',
    beforeSrc: '/kitchen-before.png',
    afterSrc: '/kitchen-after.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
  {
    eyebrow: 'Kitchen Build',
    title: 'Demo to Finished Detail',
    description: 'Structural updates and finish work from active renovation to a completed sink, range, and custom hood area.',
    beforeSrc: '/kitchen-demo-progress.png',
    afterSrc: '/kitchen-finished-detail.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
]

export default function ResidentialProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-eyebrow text-sm mb-4">Residential</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Residential Projects
          </h1>
          <p className="text-lead-dark">
            Kitchen and bath remodels, additions, and full interior renovations crafted with care.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Project Gallery</p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-12">
              Our Residential Work
            </h2>
          </ScrollReveal>
          <ProjectPhotoGallery photos={residentialGalleryPhotos} columns={4} />
        </div>
      </section>

      <section className="py-24 px-8 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Featured Transformations</p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-4">
              See The Difference
            </h2>
            <div className="w-12 h-px bg-[#D4D4D4] mb-12" />
          </ScrollReveal>
          <BeforeAfterGallery items={residentialTransformations} />
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-12">Featured Projects</p>
          </ScrollReveal>
          <ProjectCarousel projects={featuredResidentialProjects} />
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
