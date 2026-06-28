'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Button from '@/components/Button'
import PhotoSlideshowBackground from '@/components/PhotoSlideshowBackground'

const HeroParticles = dynamic(
  () => import('./HeroParticles'),
  { ssr: false }
)

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
        className="relative max-w-6xl mx-auto w-full"
        style={{
          transform: reduceMotion
            ? undefined
            : `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
          transition: reduceMotion ? undefined : 'transform 0.1s ease-out',
          zIndex: 2,
        }}
      >
        <div className="max-w-3xl">
          <span className="accent-bar mb-6" />

          <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8">
            Three Generations of Craft.
            <br />
            <span className="text-brand-gold">One Standard of Excellence</span>
          </h1>

          <p className="font-lato text-lg md:text-xl font-normal text-white/90 leading-[1.75] max-w-xl mb-10">
            Honoring A Legacy.
            <br />
            Building The Future.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/quote" variant="gold">
              Get A Quote
            </Button>
            <Button href="/projects" variant="outline">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
