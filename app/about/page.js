'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const ConcreteSphere = dynamic(
  () => import('@/components/ConcreteSphere'),
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div style={{ zIndex: 2, position: 'relative' }}>
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
              About Us
            </p>
            <h1 className="font-playfair text-5xl font-bold text-white mb-6">
              Built on Trust.<br />Driven by Quality.
            </h1>
            <p className="font-inter text-lg text-[#9B9B9B] max-w-lg">
              Boyd Walston Construction has been serving
              Pike Road and the surrounding Alabama
              communities with quality residential and
              commercial construction.
            </p>
          </div>
          <ConcreteSphere />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-8">
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
              We Build Dreams
            </p>
            <h2 className="font-playfair text-3xl text-[#111111]">
              From Vision to Reality
            </h2>
          </div>
          <ParticleMorph />
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl text-[#111111] mb-6">
              Our Story
            </h2>
            <p className="font-inter text-[#9B9B9B] leading-relaxed mb-4 max-w-3xl">
              Founded with a commitment to quality craftsmanship
              and honest work, Boyd Walston Construction has grown
              into one of the most trusted names in Pike Road, AL.
            </p>
            <p className="font-inter text-[#9B9B9B] leading-relaxed mb-4 max-w-3xl">
              We specialize in residential construction, commercial
              build-outs, and full construction management services.
              Every project is handled with the same care and
              attention to detail — no matter the size.
            </p>
            <p className="font-inter text-[#9B9B9B] leading-relaxed max-w-3xl">
              When you work with Boyd Walston Construction you get
              a team that shows up, communicates clearly, and
              delivers results you can be proud of.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
              By The Numbers
            </p>
            <h2 className="font-playfair text-4xl text-[#111111]">
              Our Track Record
            </h2>
            <div className="w-12 h-px bg-[#C4A882] mx-auto mt-6" />
          </div>
          <ProgressBars3D />
        </div>
      </section>

      <Footer />
    </main>
  )
}
