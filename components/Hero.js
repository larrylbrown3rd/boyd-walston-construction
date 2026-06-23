'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Button from '@/components/Button'
import PhotoSlideshowBackground from '@/components/PhotoSlideshowBackground'

const HeroParticles = dynamic(
  () => import('./HeroParticles'),
  { ssr: false }
)

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '1960', label: 'Family Legacy' },
  { value: '48hr', label: 'Avg Response' },
]

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(media.matches)
    const handler = (e) => setReduceMotion(e.matches)
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reduceMotion])

  return (
    <section className="relative overflow-hidden bg-[#111111] text-white min-h-[92vh] flex items-center px-6 md:px-10 py-24">
      <PhotoSlideshowBackground />
      <HeroParticles />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/60 to-[#111111]/80" style={{ zIndex: 1 }} />

      <div
        className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-end"
        style={{
          transform: reduceMotion
            ? undefined
            : `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
          transition: reduceMotion ? undefined : 'transform 0.1s ease-out',
          zIndex: 2,
        }}
      >
        <div>
          <span className="accent-bar mb-6" />

          <h1 className="text-display text-6xl md:text-8xl lg:text-9xl text-white mb-8 max-w-3xl">
            Building What<br />
            <span className="text-brand-gold">Matters Most</span>
          </h1>

          <p className="font-lato text-lg md:text-xl font-normal text-white/90 leading-relaxed max-w-xl mb-10">
            Quality renovations and commercial construction
            delivered on time and built to last.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button href="/quote" variant="gold">
              Get A Quote
            </Button>
            <Button href="/projects" variant="outline">
              View Projects
            </Button>
          </div>

          <p className="font-lato text-sm text-white/70">
            Free estimates · Reply within 48 hours · Licensed & insured
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative border border-white/15 bg-white/5 backdrop-blur-sm p-5 md:p-6 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <p className="text-display text-3xl md:text-4xl text-white mb-2">
                {stat.value}
              </p>
              <p className="font-lato text-xs text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
