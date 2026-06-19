'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'

const JOBBER_CLIENT_HUB_ID = '007f2831-0cdb-4f7e-83f2-b58a55cb5b8d'

const ParticleTunnel = dynamic(
  () => import('@/components/ParticleTunnel'),
  { ssr: false }
)

function JobberForm() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.media = 'screen'
    link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'
    script.setAttribute('clienthub_id', JOBBER_CLIENT_HUB_ID)
    script.setAttribute('form_url', `https://clienthub.getjobber.com/client_hubs/${JOBBER_CLIENT_HUB_ID}/public/work_request/embedded_work_request_form`)
    containerRef.current.appendChild(script)

    return () => {
      link.remove()
      script.remove()
    }
  }, [])

  return <div ref={containerRef} id={JOBBER_CLIENT_HUB_ID} />
}

export default function Quote() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8">
        <ParticleTunnel />
        <div className="absolute inset-0 bg-[#111111]/70" style={{ zIndex: 1 }} />
        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 2 }}>
          <p className="text-eyebrow text-sm mb-4">
            Free Consultation
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Get A Quote
          </h1>
          <p className="font-lato font-thin text-lg text-[#9B9B9B] max-w-2xl leading-relaxed">
            Tell us about your project and we will get back to you
            within one business day with a free estimate.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <JobberForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
