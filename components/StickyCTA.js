'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/Button'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPast = window.scrollY > 600
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 300
      setVisible(scrolledPast && !nearBottom)
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
          className="fixed bottom-0 left-0 right-0 bg-[#111111] text-white py-4 px-6 md:px-8 flex items-center justify-between gap-4 z-50 border-t border-[#2C2C2C]"
        >
          <div>
            <p className="font-lato text-sm font-medium text-white">
              Let&apos;s talk about your project
            </p>
            <p className="font-lato text-xs text-[#9B9B9B]">
              Licensed & insured
            </p>
          </div>
          <Button href="/quote" variant="gold" className="!px-5 !py-2.5 !text-xs shrink-0">
            Get A Free Quote
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
