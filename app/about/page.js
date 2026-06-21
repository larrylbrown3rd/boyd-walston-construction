'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const ConstructionMonument3D = dynamic(
  () => import('@/components/ConstructionMonument3D'),
  { ssr: false }
)

const ParticleMorph = dynamic(
  () => import('@/components/ParticleMorph'),
  { ssr: false }
)

const ProgressBars3D = dynamic(
  () => import('@/components/ProgressBars3D'),
  { ssr: false }
)

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brick-building.jpg"
            alt="Boyd Walston Construction commercial project"
            fill
            className="object-cover object-center opacity-15"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-eyebrow text-sm mb-4">
              About Us
            </p>
            <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
              Built on Trust.<br />Driven by Quality.
            </h1>
            <p className="font-lato font-light text-lg text-[#D4D4D4] mt-2">
              Build With Boyd. Build With Confidence.
            </p>
            <p className="font-lato font-thin text-lg text-[#9B9B9B] max-w-lg leading-relaxed mt-6">
              Boyd Walston Construction has been serving
              The River Region and surrounding Alabama
              communities with quality residential and
              commercial construction.
            </p>
          </div>
          <ConstructionMonument3D />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-eyebrow text-sm mb-4">
              We Build Dreams
            </p>
            <h2 className="text-display text-5xl text-[#111111]">
              From Vision to Reality
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden col-span-2 row-span-2">
              <Image
                src="/concrete-patio.png"
                alt="Concrete patio pour"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/shower-tile.png"
                alt="Custom shower build"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/walk-in-closet.png"
                alt="Walk-in closet build-out"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/framing-crew.png"
                alt="Commercial framing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/attic-room.png"
                alt="Attic room conversion"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-eyebrow text-sm mb-4">
              Our History
            </p>
            <h2 className="text-display text-5xl text-[#111111] mb-6">
              About Boyd Walston Construction
            </h2>
            <p className="font-lato font-light text-base text-[#9B9B9B] leading-relaxed mb-4 max-w-3xl">
              Boyd Walston Construction is a family-owned construction company founded in 2025, built on a legacy of craftsmanship that began generations ago. In 1960, our great-grandfather, Elsie Walston started his plumbing company in Black Creek, North Carolina laying the foundation for skilled trades, hard work, and pride in quality workmanship.
            </p>
            <p className="font-lato font-light text-base text-[#9B9B9B] leading-relaxed mb-4 max-w-3xl">
              Today, we continue building on that legacy three generations later, expanding from plumbing into full-service construction to serve homeowners, businesses, and communities.
            </p>
            <p className="font-lato font-light text-base text-[#9B9B9B] leading-relaxed max-w-3xl">
              From renovations and additions, to tenant build-outs, our team is committed to craftsmanship, transparency, and delivering projects the right way. We take pride in providing quality service while consistently striving to exceed customer expectations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-display text-2xl text-[#111111] mb-6">Residential</h3>
                <ul className="space-y-3">
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Renovations</li>
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Additions</li>
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Decks</li>
                </ul>
                <a href="/projects/residential" className="inline-block mt-6 font-inter text-sm text-[#111111] border-b border-[#111111] pb-1 hover:text-[#9B9B9B] hover:border-[#9B9B9B] transition-colors">
                  More Info
                </a>
              </div>
              <div>
                <h3 className="text-display text-2xl text-[#111111] mb-6">Commercial</h3>
                <ul className="space-y-3">
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Tenant Build Out</li>
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Commercial Renovations</li>
                  <li className="font-lato font-light text-base text-[#9B9B9B]">{`Owner's Rep`}</li>
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Facility Maintenance</li>
                </ul>
                <a href="/projects/commercial" className="inline-block mt-6 font-inter text-sm text-[#111111] border-b border-[#111111] pb-1 hover:text-[#9B9B9B] hover:border-[#9B9B9B] transition-colors">
                  More Info
                </a>
              </div>
              <div>
                <h3 className="text-display text-2xl text-[#111111] mb-6">Civil Construction</h3>
                <ul className="space-y-3">
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Site Prep</li>
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Excavation</li>
                  <li className="font-lato font-light text-base text-[#9B9B9B]">Concrete</li>
                </ul>
                <a href="/services" className="inline-block mt-6 font-inter text-sm text-[#111111] border-b border-[#111111] pb-1 hover:text-[#9B9B9B] hover:border-[#9B9B9B] transition-colors">
                  More Info
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-eyebrow text-sm mb-4">
              By The Numbers
            </p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111]">
              Our Track Record
            </h2>
            <div className="w-12 h-px bg-[#D4D4D4] mx-auto mt-6" />
          </div>
          <ProgressBars3D />
        </div>
      </section>

      <Footer />
    </main>
  )
}
