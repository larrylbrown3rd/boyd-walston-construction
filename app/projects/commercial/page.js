'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectsCTA from '@/components/ProjectsCTA'
import { commercialProjects } from '@/data/projects'

const ProjectCarousel = dynamic(
  () => import('@/components/ProjectCarousel'),
  { ssr: false }
)

export default function CommercialProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            Commercial
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-6">
            Commercial Projects
          </h1>
          <p className="font-sans text-[#9B9B9B] text-lg max-w-2xl">
            Office build-outs, warehouse construction, and commercial
            spaces built on time and on budget.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
              Featured Projects
            </p>
            <h2 className="font-serif text-4xl text-[#111111] mb-12">
              Our Commercial Work
            </h2>
          </ScrollReveal>
          <ProjectCarousel projects={commercialProjects} />
        </div>
      </section>

      <ProjectsCTA />
      <Footer />
    </main>
  )
}
