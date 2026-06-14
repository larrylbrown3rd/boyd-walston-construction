'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const defaultProjects = [
  {
    id: 1,
    category: 'Residential',
    title: 'Custom Home Build',
    location: 'Pike Road, AL — 2024',
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Office Build-Out',
    location: 'Montgomery, AL — 2024',
  },
  {
    id: 3,
    category: 'Renovation',
    title: 'Full Home Renovation',
    location: 'Pike Road, AL — 2023',
  },
  {
    id: 4,
    category: 'Commercial',
    title: 'Warehouse Construction',
    location: 'Montgomery, AL — 2023',
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Home Addition',
    location: 'Pike Road, AL — 2023',
  },
]

export default function ProjectCarousel({ projects = defaultProjects }) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    setActive(0)
    setDirection(1)
  }, [projects])

  if (projects.length === 0) {
    return (
      <p className="font-inter text-sm text-[#9B9B9B] text-center py-16">
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
    setActive((prev) =>
      (prev - 1 + projects.length) % projects.length
    )
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
          <div className="bg-[#F0EFED] h-96 w-full flex items-center justify-center">
            <span className="font-inter text-sm text-[#9B9B9B] tracking-widest uppercase">
              Project Photo
            </span>
          </div>

          <div className="p-10 flex items-center justify-between">
            <div>
              <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-2">
                {project.category.toUpperCase()}
              </p>
              <h3 className="font-bebas text-2xl md:text-3xl text-[#111111] mb-1">
                {project.title}
              </h3>
              <p className="font-inter text-sm text-[#9B9B9B]">
                {project.location}
              </p>
            </div>
            <p className="font-bebas text-6xl md:text-7xl text-[#F0EFED]">
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
                i === safeActive
                  ? 'bg-[#111111] w-8'
                  : 'bg-[#E8E8E8] w-2'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 border border-[#E8E8E8] rounded-full flex items-center justify-center font-inter text-sm text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 border border-[#E8E8E8] rounded-full flex items-center justify-center font-inter text-sm text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
