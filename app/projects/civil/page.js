'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectPhotoGallery from '@/components/ProjectPhotoGallery'
import ProjectsCTA from '@/components/ProjectsCTA'
import ProjectCarousel from '@/components/ProjectCarousel'
import { featuredCivilProjects, civilGalleryPhotos } from '@/data/projects'

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
        </div>
      </section>

      <section className="section-pad bg-[#F8F7F5] border-b border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-12">
              Civil Services
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Site Prep', description: 'Site preparation and subgrade work to get your project ready for construction.' },
              { title: 'Excavation', description: 'Site excavation, earthwork, grading, and grade control with coordinated equipment.' },
              { title: 'Concrete & Utilities', description: 'Concrete work and utility coordination for commercial and institutional site development.' },
              { title: 'Land Clearing', description: 'Clearing and preparation of land for new construction and site development.' },
              { title: 'Demolition', description: 'Structure demolition and site clearing to prepare for new build-out.' },
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
