'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-[#111111] text-white py-4 px-8 flex items-center justify-between z-50 border-t border-[#2C2C2C]"
        >
          <div>
            <p className="font-sans font-semibold text-sm text-white">
              Ready to start your project?
            </p>
            <p className="font-sans text-xs text-[#9B9B9B]">
              Free estimates · Same week response
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="/estimate"
              className="font-sans text-xs tracking-wide text-[#9B9B9B] hover:text-white transition-colors hidden md:block"
            >
              Get Estimate →
            </a>
            <a
              href="/quote"
              className="bg-white text-[#111111] font-sans font-semibold text-xs px-6 py-3 rounded-full hover:bg-[#F0EFED] transition-colors"
            >
              Get A Free Quote
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
