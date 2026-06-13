'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const HeroParticles = dynamic(
  () => import('./HeroParticles'),
  { ssr: false }
)

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
    <section className="relative overflow-hidden bg-[#111111] text-white py-32 px-8">

      <HeroParticles />

      <div className="absolute inset-0 bg-[#111111]/80" style={{ zIndex: 1 }} />

      <div
        className="relative max-w-6xl mx-auto"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
          zIndex: 2,
        }}
      >

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#C4A882] mb-6">
          Pike Road, Alabama
        </p>

        <h1 className="font-serif text-6xl md:text-7xl font-bold text-white leading-tight mb-8">
          Building What<br />
          Matters Most
        </h1>

        <p className="font-sans font-light text-lg text-[#9B9B9B] max-w-xl mb-12">
          Quality residential and commercial construction
          delivered on time and built to last.
        </p>

        <div className="flex gap-4">
          <a
            href="/quote"
            className="bg-white text-[#111111] font-sans font-semibold text-sm px-10 py-4 rounded-full hover:bg-[#F0EFED] transition-colors duration-300"
          >
            Get A Quote
          </a>
          <a
            href="/projects"
            className="border-2 border-white text-white font-sans font-semibold text-sm px-10 py-4 rounded-full hover:bg-white hover:text-[#111111] transition-colors duration-300"
          >
            View Projects
          </a>
        </div>

      </div>
    </section>
  )
}
