'use client'

import dynamic from 'next/dynamic'

const WebGLGradient = dynamic(
  () => import('@/components/WebGLGradient'),
  { ssr: false }
)

export default function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8 text-center">
      <WebGLGradient />
      <div className="absolute inset-0 bg-[#111111]/60" style={{ zIndex: 1 }} />
      <div className="relative max-w-2xl mx-auto" style={{ zIndex: 2 }}>
        <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">
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
  )
}
