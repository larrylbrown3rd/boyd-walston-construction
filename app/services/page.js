'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Button from '@/components/Button'

const services = [
  {
    title: 'Residential Construction',
    items: [
      'Kitchen Remodel',
      'Bathroom Remodel',
      'Addition',
      'Detached Garage Build',
      'Full Home Remodels',
      'Painting',
      'Flooring',
      'Roofing',
    ],
    backgroundImage: '/concrete-prep.png',
    visualFirst: true,
  },
  {
    title: 'Commercial Tenant Buildout',
    items: ['Roofing', 'Amenity Builds', 'Owner Rep Services', 'Facility Maintenance'],
    backgroundImage: '/commercial-building-exterior.png',
    visualFirst: false,
  },
  {
    title: 'Civil Construction',
    items: ['Site Prep', 'Excavation', 'Concrete & Utilities', 'Land Clearing', 'Demolition'],
    backgroundImage: '/site-grading.png',
    visualFirst: true,
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="relative overflow-hidden text-white py-24 px-6 md:px-10 min-h-[50vh] flex items-center">
        <Image
          src="/frame-construction.jpg"
          alt="Boyd Walston Construction services"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#111111]/75" />
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">What We Do</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Our Services
          </h1>
          <p className="font-lato text-lg font-normal text-white/80 max-w-2xl leading-[1.75]">
            From residential renovations to commercial build-outs and civil site work —
            we handle every phase of construction with precision and care.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.05}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#E8E8E8] overflow-hidden ${
                  service.visualFirst ? '' : 'lg:[&>*:first-child]:order-2'
                }`}
              >
                <div className="relative h-64 md:h-80 lg:h-full min-h-[16rem] bg-[#2C2C2C]">
                  <Image
                    src={service.backgroundImage}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
                  <h2 className="text-display text-3xl md:text-4xl text-[#111111] mb-6">
                    {service.title}
                  </h2>
                  <ul className="font-lato text-sm text-[#4A4A4A] space-y-2 list-disc pl-5">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] text-white py-24 px-6 md:px-10">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-display text-5xl md:text-6xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-lato font-normal text-base text-white/80 mb-8 leading-relaxed">
            Let&apos;s talk about your project.
          </p>
          <Button href="/quote" variant="gold">
            Get A Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
