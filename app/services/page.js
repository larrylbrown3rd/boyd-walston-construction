'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import FAQ from '@/components/FAQ'
import Button from '@/components/Button'

const ResidentialFrame3D = dynamic(
  () => import('@/components/ResidentialFrame3D'),
  { ssr: false }
)

const CommercialBuildout3D = dynamic(
  () => import('@/components/CommercialBuildout3D'),
  { ssr: false }
)

const RenovationLayers3D = dynamic(
  () => import('@/components/RenovationLayers3D'),
  { ssr: false }
)

const FloorPlan = dynamic(
  () => import('@/components/FloorPlan'),
  { ssr: false }
)

const WebGLGradient = dynamic(
  () => import('@/components/WebGLGradient'),
  { ssr: false }
)

const services = [
  {
    title: 'Residential Construction',
    description:
      'Renovations, additions, and remodels designed around your vision and budget. From start to finish we handle every detail of your project.',
    items: ['Renovations', 'Additions', 'Full remodels', 'Kitchen and bath upgrades'],
    Visual: ResidentialFrame3D,
    visualFirst: true,
    backgroundImage: '/concrete-finished.jpg',
  },
  {
    title: 'Commercial Build-Out',
    description:
      'Professional commercial spaces built on time and on budget. We work with business owners to deliver functional and impressive commercial environments.',
    items: ['Office build-outs', 'Retail spaces', 'Warehouse construction', 'Restaurant build-outs'],
    Visual: CommercialBuildout3D,
    visualFirst: false,
    backgroundImage: '/luxury-building.jpg',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="relative overflow-hidden text-white py-24 px-6 md:px-10 min-h-[50vh] flex items-center">
        <Image
          src="/frame-construction.jpg"
          alt="Boyd Walston Construction services in central Alabama"
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
          <p className="font-lato text-lg font-normal text-white/80 max-w-2xl leading-relaxed">
            From residential renovations to commercial build-outs — we handle
            every phase of construction with precision and care.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((service, index) => {
            const Visual = service.Visual

            return (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#E8E8E8] overflow-hidden ${
                    service.visualFirst ? '' : 'lg:[&>*:first-child]:order-2'
                  }`}
                >
                  <Visual className="h-64 md:h-80 lg:h-full min-h-[16rem]" backgroundImage={service.backgroundImage} />
                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
                    <h2 className="text-display text-3xl md:text-4xl text-[#111111] mb-4">
                      {service.title}
                    </h2>
                    <p className="font-lato text-base font-normal text-[#4A4A4A] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="font-lato text-sm text-[#4A4A4A] space-y-2 list-none">
                      {service.items.map((item) => (
                        <li key={item}>— {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <section className="py-24 px-6 md:px-10 bg-[#F8F7F5] border-y border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#E8E8E8] overflow-hidden">
          <RenovationLayers3D className="h-72 md:h-96 lg:h-full min-h-[18rem]" backgroundImage="/shower-tile.png" />
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
            <p className="text-eyebrow text-sm mb-4">Renovations</p>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-4">
              Transform What You Already Have
            </h2>
            <p className="font-lato text-base font-normal text-[#4A4A4A] leading-relaxed mb-6">
              Kitchens, bathrooms, additions, and full interior renovations —
              we rebuild layer by layer with minimal disruption and maximum craft.
            </p>
            <ul className="font-lato text-sm text-[#4A4A4A] space-y-2 list-none">
              <li>— Kitchen and bath remodels</li>
              <li>— Room additions and layout changes</li>
              <li>— Finish upgrades and custom built-ins</li>
              <li>— Structural updates and code compliance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10 bg-white border-t border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="border border-[#E8E8E8] p-8 md:p-10 h-full">
              <p className="text-eyebrow text-sm mb-4">Civil Construction</p>
              <h2 className="text-display text-3xl md:text-4xl text-[#111111] mb-4">
                Site Prep & Concrete
              </h2>
              <p className="font-lato text-base font-normal text-[#4A4A4A] leading-relaxed mb-6">
                From excavation and grading to finished concrete, we handle the groundwork
                that sets every project up for success.
              </p>
              <ul className="font-lato text-sm text-[#4A4A4A] space-y-2 list-none">
                <li>— Site prep</li>
                <li>— Excavation</li>
                <li>— Concrete</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="border border-[#E8E8E8] p-8 md:p-10 h-full">
              <p className="text-eyebrow text-sm mb-4">Government Contracting</p>
              <h2 className="text-display text-3xl md:text-4xl text-[#111111] mb-4">
                Institutional & Public Work
              </h2>
              <p className="font-lato text-base font-normal text-[#4A4A4A] leading-relaxed mb-6">
                Masonry, hardscape, and facility improvements for institutional and public-sector
                projects with safety, compliance, and clear communication.
              </p>
              <ul className="font-lato text-sm text-[#4A4A4A] space-y-2 list-none mb-6">
                <li>— Campus and plaza restoration</li>
                <li>— Masonry and hardscape</li>
                <li>— Facility maintenance support</li>
              </ul>
              <a href="/projects/government" className="font-inter text-sm text-[#111111] border-b border-[#111111] pb-1 hover:text-[#9B9B9B] hover:border-[#9B9B9B] transition-colors">
                View government projects
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-32 px-6 md:px-10" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2240 50%, #0a1628 100%)' }}>
        <FloorPlan fullBackground />
        <div className="relative max-w-3xl mx-auto text-center" style={{ zIndex: 1 }}>
          <p className="text-eyebrow text-sm mb-4">Precision Planning</p>
          <h2 className="text-display text-5xl md:text-6xl text-white mb-6">
            Every Detail<br />Planned to Perfection
          </h2>
          <p className="font-lato font-normal text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto">
            Before we break ground we plan every square foot of your project.
            Our detailed planning process ensures zero surprises and zero cost overruns.
          </p>
          <Button href="/estimate" variant="primary">
            Start Planning
          </Button>
        </div>
      </section>

      <FAQ />

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-6 md:px-10">
        <WebGLGradient />
        <div className="absolute inset-0 bg-[#111111]/60" style={{ zIndex: 1 }} />
        <div className="relative max-w-2xl mx-auto text-center" style={{ zIndex: 2 }}>
          <h2 className="text-display text-5xl md:text-6xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-lato font-normal text-base text-white/80 mb-8 leading-relaxed">
            Contact us today for a free consultation and quote.
          </p>
          <Button href="/quote" variant="primary">
            Get A Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
