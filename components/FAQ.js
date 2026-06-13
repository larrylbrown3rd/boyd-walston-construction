'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How much does a custom home build cost?',
    a: 'Custom home builds vary widely based on size, materials, and finishes. Most projects in the Pike Road area range from $150,000 to $500,000+. We provide free detailed estimates after an initial site visit.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A full custom home build typically takes 6-12 months. Renovations range from 2-8 weeks depending on scope. Commercial build-outs typically take 4-12 weeks. We provide a detailed timeline before any project begins.',
  },
  {
    q: 'Do you handle permits and inspections?',
    a: 'Yes — we handle all permits, inspections, and paperwork required for your project. You never have to deal with city or county offices. We take care of everything.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We primarily serve Pike Road and the Montgomery, Alabama metro area. We also take on select projects throughout central Alabama. Contact us to confirm your location.',
  },
  {
    q: 'How do I get started?',
    a: 'The easiest way is to use our Smart Estimate tool — answer 5 quick questions and we will send you a ballpark estimate within 24 hours. Or you can book a free site visit directly on our calendar.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — Boyd Walston Construction is fully licensed in the state of Alabama and carries comprehensive general liability and workers compensation insurance. We can provide certificates of insurance upon request.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-4xl text-[#111111]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-[#C4A882] mx-auto mt-6" />
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#E8E8E8]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="font-sans font-medium text-sm text-[#111111] pr-8">
                  {faq.q}
                </span>
                <span className={`font-sans text-lg text-[#9B9B9B] flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
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
                    <p className="font-sans text-sm text-[#9B9B9B] leading-relaxed pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
