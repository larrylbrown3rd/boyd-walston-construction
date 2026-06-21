'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How much does a renovation or build-out cost?',
    a: 'Project costs vary based on scope, materials, and finishes. We provide free detailed estimates after an initial site visit so you know what to expect before work begins.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Renovations range from 2-8 weeks depending on scope. Commercial build-outs typically take 4-12 weeks. We provide a detailed timeline before any project begins.',
  },
  {
    q: 'Do you handle permits and inspections?',
    a: 'Yes — we handle all permits, inspections, and paperwork required for your project. You never have to deal with city or county offices. We take care of everything.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Pike Road, Montgomery, and surrounding central Alabama communities. Contact us to confirm your location and project scope.',
  },
  {
    q: 'How do I get started?',
    a: 'The easiest way is to submit a quote request on our site — we will follow up within 48 hours. You can also use our Smart Estimate tool or book a free site visit.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — Boyd Walston Construction is fully licensed in the state of Alabama and carries comprehensive general liability and workers compensation insurance. We can provide certificates of insurance upon request.',
  },
]

export default function FAQ({ sectionClassName = 'bg-white', embedded = false }) {
  const [open, setOpen] = useState(null)

  const content = (
    <>
      <div className={embedded ? 'mb-8' : 'text-center mb-16'}>
        <p className="text-eyebrow text-sm mb-4">
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
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="font-lato font-light text-sm text-[#111111] pr-8">
                  {faq.q}
                </span>
                <span className={`font-inter text-lg text-[#9B9B9B] flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
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
