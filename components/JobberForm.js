'use client'

import { useEffect, useRef, useState } from 'react'

export const JOBBER_CLIENT_HUB_ID = '007f2831-0cdb-4f7e-83f2-b58a55cb5b8d'

export default function JobberForm() {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

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
    script.setAttribute(
      'form_url',
      `https://clienthub.getjobber.com/client_hubs/${JOBBER_CLIENT_HUB_ID}/public/work_request/embedded_work_request_form`
    )
    script.onload = () => setLoaded(true)
    containerRef.current.appendChild(script)

    return () => {
      link.remove()
      script.remove()
    }
  }, [])

  return (
    <div className="relative bg-white border border-[#E8E8E8] p-6 md:p-8 shadow-sm">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F8F7F5] z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="font-lato text-sm text-[#9B9B9B]">Loading form…</p>
          </div>
        </div>
      )}
      <div ref={containerRef} id={JOBBER_CLIENT_HUB_ID} className="min-h-[420px] jobber-form-embed" />
    </div>
  )
}
