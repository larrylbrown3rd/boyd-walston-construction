'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsCTA from '@/components/ProjectsCTA'
import ScrollReveal from '@/components/ScrollReveal'
import { projectsOverview } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-[#111111] text-white py-24 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/frame-construction.jpg"
            alt="Framing crew building a wood structure at a Boyd Walston Construction job site in Alabama"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">Our Work</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Projects
          </h1>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/projects/residential" className="font-button text-sm text-white border border-white/30 px-5 py-2.5 min-h-[44px] inline-flex items-center rounded-lg hover:bg-white hover:text-[#111111] transition-colors">
              Residential Projects
            </a>
            <a href="/projects/commercial" className="font-button text-sm text-white border border-white/30 px-5 py-2.5 min-h-[44px] inline-flex items-center rounded-lg hover:bg-white hover:text-[#111111] transition-colors">
              Commercial Projects
            </a>
            <a href="/projects/civil" className="font-button text-sm text-white border border-white/30 px-5 py-2.5 min-h-[44px] inline-flex items-center rounded-lg hover:bg-white hover:text-[#111111] transition-colors">
              Civil Projects
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow-dark text-sm mb-4">Featured Work</p>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-12">
              Recent Projects
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsOverview.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.08}>
                <a
                  href={project.href}
                  className="group block border border-[#E8E8E8] overflow-hidden hover:border-brand-gold transition-colors duration-300 h-full"
                >
                  <div className="relative h-64 overflow-hidden bg-[#F0EFED]">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={85}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-eyebrow-dark text-sm mb-2">{project.category}</p>
                    <h3 className="text-display text-2xl text-[#111111] mb-2">
                      {project.title}
                    </h3>
                    <p className="font-lato font-light text-sm text-[#9B9B9B] mb-3">
                      {project.location}
                    </p>
                    <p className="font-lato text-base font-normal text-[#4A4A4A] leading-[1.75]">
                      {project.description}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
