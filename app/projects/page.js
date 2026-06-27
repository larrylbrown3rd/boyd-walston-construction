'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const projects = [
  {
    id: 1,
    category: 'COMMERCIAL',
    title: 'Outdoor Patio & Amenities',
    location: 'Hyundai Motor Manufacturing of Alabama',
    description:
      'Complete outdoor patio build-out with custom planters, lighting, and seating.',
    image: '/commercial-patio-complete.png',
  },
  {
    id: 2,
    category: 'COMMERCIAL',
    title: 'Georgiana Opera House Roof',
    location: 'Georgiana, AL',
    description:
      'Complete commercial roof replacement with tear-off, new decking, and modified bitumen roofing system.',
    image: '/georgiana-opera-roof-complete.png',
  },
  {
    id: 3,
    category: 'RESIDENTIAL',
    title: 'Framing',
    location: 'Titus, AL',
    description:
      'Structural framing and construction for a residential build.',
    image: '/aerial.jpg',
  },
  {
    id: 4,
    category: 'RESIDENTIAL',
    title: 'Walk-In Closet Build-Out',
    location: 'Pike Road, AL',
    description:
      'Custom walk-in closet with built-in shelving, drawers, and black hardware throughout.',
    image: '/closet-finished.png',
  },
  {
    id: 5,
    category: 'RESIDENTIAL',
    title: 'Bathroom Renovation',
    location: 'Montgomery, AL',
    description:
      'Full bathroom remodel with custom tile shower, marble finishes, and modern fixtures.',
    image: '/residential-remodel-master-bath.png',
  },
  {
    id: 6,
    category: 'RESIDENTIAL',
    title: 'Concrete Pad',
    location: 'Prattville, AL',
    description:
      'Residential concrete pad pour with professional finish work.',
    image: '/concrete-patio-pour.png',
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/frame-construction.jpg"
            alt="Boyd Walston Construction frame build"
            fill
            className="object-cover object-center opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">Our Work</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Projects
          </h1>
          <p className="font-lato font-light text-lg text-[#9B9B9B] max-w-2xl">
            Residential, commercial, civil, and government work across central Alabama.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/projects/residential" className="font-inter text-sm text-white border border-white/30 px-5 py-2.5 rounded-lg hover:bg-white hover:text-[#111111] transition-colors">
              Residential
            </a>
            <a href="/projects/commercial" className="font-inter text-sm text-white border border-white/30 px-5 py-2.5 rounded-lg hover:bg-white hover:text-[#111111] transition-colors">
              Commercial
            </a>
            <a href="/projects/civil" className="font-inter text-sm text-white border border-white/30 px-5 py-2.5 rounded-lg hover:bg-white hover:text-[#111111] transition-colors">
              Civil
            </a>
            <a href="/projects/government" className="font-inter text-sm text-white border border-white/30 px-5 py-2.5 rounded-lg hover:bg-white hover:text-[#111111] transition-colors">
              Government
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border border-[#E8E8E8] overflow-hidden hover:border-[#111111] transition-colors duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-eyebrow-dark text-sm mb-2">{project.category}</p>
                  <h3 className="text-display text-2xl text-[#111111] mb-2">
                    {project.title}
                  </h3>
                  <p className="font-lato font-light text-sm text-[#9B9B9B] mb-2">
                    {project.location}
                  </p>
                  <p className="font-lato font-light text-sm text-[#9B9B9B] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-display text-5xl text-white mb-4">
            Start Your Project Today
          </h2>
          <p className="font-lato font-light text-[#9B9B9B] mb-8">
            Let&apos;s talk about your project.
          </p>
          <a
            href="/quote"
            className="bg-white text-[#111111] font-inter font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#F0EFED] transition-colors"
          >
            Get A Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
