'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'James R.',
    location: 'Pike Road, AL',
    project: 'Custom Home Build',
    rating: 5,
    text: 'Boyd and his team built our dream home from the ground up. They stayed on budget, finished on time, and the craftsmanship is incredible. We get compliments on our home constantly.',
  },
  {
    name: 'Sarah M.',
    location: 'Montgomery, AL',
    project: 'Full Kitchen Renovation',
    rating: 5,
    text: 'I was nervous about a full kitchen renovation but Boyd made the process completely stress-free. He communicated every step of the way and the result is beyond what I imagined.',
  },
  {
    name: 'David T.',
    location: 'Pike Road, AL',
    project: 'Commercial Office Build-Out',
    rating: 5,
    text: 'We needed our new office space completed before our lease started. Boyd delivered two weeks early. Professional, responsive, and the quality of work speaks for itself.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 px-8 bg-[#F8F7F5]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            What Clients Say
          </p>
          <h2 className="font-serif text-4xl text-[#111111]">
            Real Results. Real People.
          </h2>
          <div className="w-12 h-px bg-[#C4A882] mx-auto mt-6" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <span key={i} className="text-[#C4A882] text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="font-serif text-2xl text-[#111111] leading-relaxed mb-8 italic">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>

            <p className="font-sans font-semibold text-sm text-[#111111] mb-1">
              {testimonials[active].name}
            </p>
            <p className="font-sans text-xs text-[#9B9B9B]">
              {testimonials[active].location} · {testimonials[active].project}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3">
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

      </div>
    </section>
  )
}
