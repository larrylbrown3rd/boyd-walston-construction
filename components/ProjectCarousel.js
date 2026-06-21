'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/Button'

export default function ProjectCarousel({ projects = [] }) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setActive(0)
    setDirection(1)
  }, [projects])

  useEffect(() => {
    if (!selected) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [selected])

  if (projects.length === 0) {
    return (
      <p className="font-lato font-light text-sm text-[#9B9B9B] text-center py-16">
        No projects found in this category.
      </p>
    )
  }

  const safeActive = active >= projects.length ? 0 : active
  const project = projects[safeActive]

  function next() {
    setDirection(1)
    setActive((prev) => (prev + 1) % projects.length)
  }

  function prev() {
    setDirection(-1)
    setActive((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={project.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -100 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="border border-[#E8E8E8] overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setSelected(project)}
            className="relative bg-[#F0EFED] h-96 w-full overflow-hidden block text-left group"
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-lato font-light text-sm text-[#9B9B9B] tracking-widest uppercase">
                  Project Photo
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/20 transition-colors duration-300" />
            <span className="absolute bottom-4 right-4 bg-white/95 text-[#111111] font-inter text-xs px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
            </span>
          </button>

          <div className="p-10 flex items-center justify-between gap-6">
            <div>
              <p className="text-eyebrow text-sm mb-2">
                {project.category.toUpperCase()}
              </p>
              <h3 className="text-display text-2xl md:text-3xl text-[#111111] mb-1">
                {project.title}
              </h3>
              <p className="font-lato font-light text-sm text-[#9B9B9B] mb-4">
                {project.location}
              </p>
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="font-inter text-sm text-[#111111] border-b border-[#111111] pb-1 hover:text-[#9B9B9B] hover:border-[#9B9B9B] transition-colors"
              >
                View project details
              </button>
            </div>
            <p className="text-display text-6xl md:text-7xl text-[#F0EFED]">
              {String(safeActive + 1).padStart(2, '0')}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > safeActive ? 1 : -1)
                setActive(i)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === safeActive ? 'bg-[#111111] w-8' : 'bg-[#E8E8E8] w-2'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 border border-[#E8E8E8] rounded-lg flex items-center justify-center font-inter text-sm text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 border border-[#E8E8E8] rounded-lg flex items-center justify-center font-inter text-sm text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <button
              type="button"
              aria-label="Close project details"
              className="absolute inset-0 bg-[#111111]/80"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E8E8E8]"
            >
              <div className="relative h-64 md:h-80 bg-[#F0EFED]">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  style={selected.objectPosition ? { objectPosition: selected.objectPosition } : undefined}
                />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-eyebrow text-sm mb-2">{selected.category.toUpperCase()}</p>
                <h3 className="text-display text-3xl md:text-4xl text-[#111111] mb-2">
                  {selected.title}
                </h3>
                <p className="font-lato font-light text-sm text-[#9B9B9B] mb-6">
                  {selected.location}
                </p>
                {selected.description && (
                  <p className="font-lato font-light text-base text-[#4A4A4A] leading-relaxed mb-6">
                    {selected.description}
                  </p>
                )}
                {selected.scope?.length > 0 && (
                  <div className="mb-6">
                    <p className="text-eyebrow-muted text-xs mb-3">Scope of Work</p>
                    <ul className="space-y-2 list-none">
                      {selected.scope.map((item) => (
                        <li key={item} className="font-lato font-light text-sm text-[#4A4A4A]">
                          — {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selected.investment && (
                  <p className="font-lato font-light text-sm text-[#111111] mb-8">
                    {selected.investment}
                  </p>
                )}
                <div className="flex flex-wrap gap-4">
                  <Button href="/quote" variant="primary">
                    Request A Quote
                  </Button>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="font-inter text-sm text-[#9B9B9B] hover:text-[#111111] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
