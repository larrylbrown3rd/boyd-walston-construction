'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

const ProjectCarousel = dynamic(
  () => import('@/components/ProjectCarousel'),
  { ssr: false }
)

const WebGLGradient = dynamic(
  () => import('@/components/WebGLGradient'),
  { ssr: false }
)

const categories = ['All', 'Residential', 'Commercial', 'Renovation']

const projects = [
  { id: 1, category: 'Residential', title: 'Custom Home Build', location: 'Pike Road, AL — 2024' },
  { id: 2, category: 'Commercial', title: 'Office Build-Out', location: 'Montgomery, AL — 2024' },
  { id: 3, category: 'Renovation', title: 'Full Home Renovation', location: 'Pike Road, AL — 2023' },
  { id: 4, category: 'Commercial', title: 'Warehouse Construction', location: 'Montgomery, AL — 2023' },
  { id: 5, category: 'Residential', title: 'Home Addition', location: 'Pike Road, AL — 2023' },
  { id: 6, category: 'Commercial', title: 'Restaurant Build-Out', location: 'Montgomery, AL — 2022' },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            Our Work
          </p>
          <h1 className="font-playfair text-5xl font-bold text-white mb-6">
            Projects
          </h1>
          <p className="font-inter text-[#9B9B9B] text-lg max-w-2xl">
            Residential and commercial work across Pike Road
            and the surrounding Alabama communities.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
              Featured Transformation
            </p>
            <h2 className="font-playfair text-4xl text-[#111111] mb-4">
              See The Difference
            </h2>
            <div className="w-12 h-px bg-[#C4A882] mb-12" />
          </ScrollReveal>
          <BeforeAfterSlider
            beforeLabel="Before Renovation"
            afterLabel="After Renovation"
          />
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
              Featured Projects
            </p>
            <h2 className="font-playfair text-4xl text-[#111111] mb-12">
              Our Recent Work
            </h2>
          </ScrollReveal>

          <div className="flex gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-inter text-xs tracking-wide px-6 py-2.5 rounded-full transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#111111] text-white'
                    : 'border border-[#E8E8E8] text-[#9B9B9B] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ProjectCarousel projects={filtered} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8 text-center">
        <WebGLGradient />
        <div className="absolute inset-0 bg-[#111111]/60" style={{ zIndex: 1 }} />
        <div className="relative max-w-2xl mx-auto" style={{ zIndex: 2 }}>
          <h2 className="font-playfair text-3xl text-white mb-4">
            Start Your Project Today
          </h2>
          <p className="font-inter text-[#9B9B9B] mb-8">
            Contact us for a free consultation and quote.
          </p>
          <a
            href="/quote"
            className="inline-block bg-white text-[#111111] font-inter font-semibold text-sm px-10 py-4 rounded-full hover:bg-[#F0EFED] transition-colors duration-300"
          >
            Get A Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
