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
  { value: '200+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Experience' },
  { value: '5.0', label: 'Client Rating' },
  { value: '2hr', label: 'Avg Response' },
]

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#111111] text-white min-h-[92vh] flex items-center px-6 md:px-10 py-24">

      <PhotoSlideshowBackground />
      <HeroParticles />
      <div className="absolute inset-0 bg-[#111111]/65" style={{ zIndex: 1 }} />

      <div
        className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-end"
        style={{
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
          transition: 'transform 0.1s ease-out',
          zIndex: 2,
        }}
      >
        <div>
          <p className="text-eyebrow text-sm mb-6">
            The River Region, Alabama
          </p>

          <h1 className="text-display text-6xl md:text-8xl lg:text-9xl text-white mb-8 max-w-3xl">
            Building What<br />
            Matters Most
          </h1>

          <p className="font-lato text-lg md:text-xl font-normal text-white/90 leading-relaxed max-w-xl mb-10">
            Quality residential and commercial construction
            delivered on time and built to last.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button href="/quote" variant="primary">
              Get A Quote
            </Button>
            <Button href="/projects" variant="outline">
              View Projects
            </Button>
          </div>

          <p className="font-lato text-sm text-white/70">
            Free estimates · Reply within 2 hours
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/15 bg-white/5 backdrop-blur-sm p-5 md:p-6"
            >
              <p className="text-display text-4xl md:text-5xl text-white mb-2">
                {stat.value}
              </p>
              <p className="font-lato text-xs md:text-sm text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
