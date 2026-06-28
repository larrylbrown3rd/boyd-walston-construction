'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectPhotoGallery from '@/components/ProjectPhotoGallery'
import ProjectsCTA from '@/components/ProjectsCTA'
import { featuredCivilProjects, civilGalleryPhotos } from '@/data/projects'

const ProjectCarousel = dynamic(
  () => import('@/components/ProjectCarousel'),
  { ssr: false }
)

export default function CivilProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/site-grading.png"
            alt="Civil site grading work"
            fill
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">Civil</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Civil Projects
          </h1>
          <p className="text-lead-dark">
            Site prep, excavation, roofing, and civil work for commercial and institutional projects across Alabama.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Featured Projects</p>
          </ScrollReveal>
          <ProjectCarousel projects={featuredCivilProjects} />
        </div>
      </section>

      <section className="section-pad bg-[#F8F7F5] border-y border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Project Gallery</p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-12">
              Our Civil Work
            </h2>
          </ScrollReveal>
          <ProjectPhotoGallery photos={civilGalleryPhotos} columns={4} />
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
