'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

const projects = [
  {
    id: 1,
    category: 'COMMERCIAL',
    title: 'Luxury Building Exterior',
    location: 'The River Region, AL',
    description:
      'Full exterior renovation of luxury commercial property including painting and restoration.',
    image: '/luxury-building.jpg',
  },
  {
    id: 2,
    category: 'COMMERCIAL',
    title: 'Commercial Outdoor Space',
    location: 'The River Region, AL',
    description:
      'Complete outdoor patio build-out with custom planters, lighting, and seating.',
    image: '/commercial-patio-3.jpg',
  },
  {
    id: 3,
    category: 'RESIDENTIAL',
    title: 'Residential Renovation',
    location: 'The River Region, AL',
    description:
      'Full residential renovation including framing, finishes, and detail work.',
    image: '/aerial.jpg',
  },
  {
    id: 4,
    category: 'RESIDENTIAL',
    title: 'Walk-In Closet Build-Out',
    location: 'The River Region, AL',
    description:
      'Custom walk-in closet with built-in shelving, drawers, and black hardware throughout.',
    image: '/closet-finished.jpg',
  },
  {
    id: 5,
    category: 'RESIDENTIAL',
    title: 'Bathroom Renovation',
    location: 'The River Region, AL',
    description:
      'Full bathroom renovation including custom tile shower with pebble floor and bench.',
    image: '/shower-after.jpg',
  },
  {
    id: 6,
    category: 'RESIDENTIAL',
    title: 'Concrete Driveway',
    location: 'The River Region, AL',
    description:
      'Large residential concrete pour including driveway and patio extension.',
    image: '/concrete-finished.jpg',
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
          <p className="text-eyebrow text-sm mb-4">
            Our Work
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Projects
          </h1>
          <p className="font-lato font-light text-lg text-[#9B9B9B] max-w-2xl">
            Residential and commercial work throughout
            The River Region and surrounding
            Alabama communities.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-eyebrow text-sm mb-4">
            Transformations
          </p>
          <h2 className="text-display text-5xl text-[#111111] mb-12">
            See The Difference
          </h2>
          <BeforeAfterSlider
            beforeSrc="/kitchen-before.png"
            afterSrc="/kitchen-after.png"
            beforeLabel="Before"
            afterLabel="After"
          />
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
                  <p className="text-eyebrow text-sm mb-2">
                    {project.category}
                  </p>
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
            Contact us for a free consultation and quote.
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
