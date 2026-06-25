'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectPhotoGallery from '@/components/ProjectPhotoGallery'
import ProjectsCTA from '@/components/ProjectsCTA'
import { civilGalleryPhotos } from '@/data/projects'

export default function CivilProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-display text-6xl md:text-7xl text-white">
            Civil Projects
          </h1>
        </div>
      </section>

      <section className="py-24 px-8">
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
