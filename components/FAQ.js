'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { faqs } from '@/lib/seo'

export default function FAQ({ sectionClassName = 'bg-white', embedded = false }) {
  const [open, setOpen] = useState(null)

  const content = (
    <>
      <div className={embedded ? 'mb-8' : 'text-center mb-16'}>
        <span className={`accent-bar ${embedded ? '' : 'mx-auto'} mb-4`} />
        <p className={`text-sm mb-4 ${embedded ? 'text-eyebrow-dark' : 'text-eyebrow-muted'}`}>
          Common Questions
        </p>
        <h2 className={`text-display text-4xl md:text-5xl text-[#111111] ${embedded ? '' : 'md:text-6xl'}`}>
          {embedded ? 'FAQ' : 'Frequently Asked Questions'}
        </h2>
        {!embedded && <div className="w-12 h-px bg-[#D4D4D4] mx-auto mt-6" />}
      </div>

      <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#E8E8E8]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 rounded-sm"
              >
                <span className="font-lato font-light text-sm text-[#111111] pr-8">
                  {faq.q}
                </span>
                <span className={`font-inter text-lg flex-shrink-0 transition-all duration-300 ${open === i ? 'rotate-45 text-brand-gold' : 'text-[#9B9B9B]'}`}>
                  +
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-lato font-light text-sm text-[#9B9B9B] leading-relaxed pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
    </>
  )

  if (embedded) {
    return <div className="w-full">{content}</div>
  }

  return (
    <section className={`py-24 px-6 md:px-10 ${sectionClassName}`}>
      <div className="max-w-3xl mx-auto">
        {content}
      </div>
    </section>
  )
}
