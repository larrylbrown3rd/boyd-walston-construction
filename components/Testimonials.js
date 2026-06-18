'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'James R.',
    location: 'The River Region, AL',
    project: 'Custom Home Build',
    rating: 5,
    text: 'Boyd and his team built our dream home from the ground up. They stayed on budget, finished on time, and the craftsmanship is incredible. We get compliments on our home constantly.',
  },
  {
    name: 'Sarah M.',
    location: 'The River Region, AL',
    project: 'Full Kitchen Renovation',
    rating: 5,
    text: 'I was nervous about a full kitchen renovation but Boyd made the process completely stress-free. He communicated every step of the way and the result is beyond what I imagined.',
  },
  {
    name: 'David T.',
    location: 'The River Region, AL',
    project: 'Commercial Office Build-Out',
    rating: 5,
    text: 'We needed our new office space completed before our lease started. Boyd delivered two weeks early. Professional, responsive, and the quality of work speaks for itself.',
  },
]

export default function Testimonials({ embedded = false }) {
  const [active, setActive] = useState(0)

  const content = (
    <>
      <div className={embedded ? 'mb-8' : 'text-center mb-16'}>
        <p className="text-eyebrow text-sm mb-4">
          What Clients Say
        </p>
        <h2 className={`text-display text-4xl md:text-5xl text-[#111111] ${embedded ? '' : 'md:text-6xl'}`}>
          Real Results. Real People.
        </h2>
      </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`max-w-3xl text-center mb-12 ${embedded ? 'mx-0 text-left' : 'mx-auto'}`}
          >
            <div className={`flex gap-1 mb-8 ${embedded ? 'justify-start' : 'justify-center'}`}>
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <span key={i} className="text-[#D4D4D4] text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="font-lato font-light text-xl italic text-[#111111] leading-relaxed mb-8">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>

            <p className="font-lato font-light text-sm text-[#111111] mb-1">
              {testimonials[active].name}
            </p>
            <p className="font-lato font-light text-xs text-[#9B9B9B]">
              {testimonials[active].location} · {testimonials[active].project}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className={`flex gap-3 ${embedded ? 'justify-start' : 'justify-center'}`}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-px transition-all duration-300 ${
                i === active
                  ? 'w-12 bg-[#111111]'
                  : 'w-6 bg-[#E8E8E8]'
              }`}
            />
          ))}
        </div>
    </>
  )

  if (embedded) {
    return <div className="w-full">{content}</div>
  }

  return (
    <section className="py-24 px-6 md:px-10 bg-[#F8F7F5]">
      <div className="max-w-6xl mx-auto">
        {content}
      </div>
    </section>
  )
}
