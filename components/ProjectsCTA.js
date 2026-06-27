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
        <h2 className="text-display text-5xl md:text-6xl text-white mb-4">
          Start Your Project Today
        </h2>
        <p className="text-lead-dark mb-8">
          Let&apos;s talk about your project.
        </p>
        <a
          href="/quote"
          className="inline-block bg-white text-[#111111] font-inter font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#F0EFED] transition-colors duration-300"
        >
          Get A Free Quote
        </a>
      </div>
    </section>
  )
}
