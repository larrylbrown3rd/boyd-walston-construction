'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ProjectsCTA from '@/components/ProjectsCTA'
import { residentialProjects } from '@/data/projects'

const ProjectCarousel = dynamic(
  () => import('@/components/ProjectCarousel'),
  { ssr: false }
)

const residentialTransformations = [
  {
    eyebrow: 'Bathroom Restoration',
    title: 'Full Bathroom Transformation',
    description: 'Complete bathroom restoration from damaged space to a finished walk-in shower with tile, pebble floor, and modern fixtures.',
    beforeSrc: '/bathroom-before-restoration.png',
    afterSrc: '/shower-finished.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
  {
    eyebrow: 'Shower Renovation',
    title: 'Waterproofing to Finished Tile',
    description: 'Professional shower build showing waterproofing, tile work, pebble floor, bench, and niche details.',
    beforeSrc: '/shower-waterproofing.png',
    afterSrc: '/shower-finished.png',
    beforePosition: 'object-center',
    afterPosition: 'object-center',
  },
  {
    eyebrow: 'Kitchen Renovation',
    title: 'Before & After Kitchen Remodel',
    description: 'Full kitchen transformation with updated finishes, layout improvements, and a brighter finished space.',
    beforeSrc: '/kitchen-before.png',
    afterSrc: '/kitchen-after.png',
    afterPosition: 'object-top',
  },
]

export default function ResidentialProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-eyebrow text-sm mb-4">
            Residential
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Residential Projects
          </h1>
          <p className="font-lato font-thin text-lg text-[#9B9B9B] max-w-2xl leading-relaxed">
            Renovations, additions, and remodels crafted with care for homeowners across central Alabama.
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
          <BeforeAfterGallery items={residentialTransformations} />
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow text-sm mb-4">
              Featured Projects
            </p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-12">
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
