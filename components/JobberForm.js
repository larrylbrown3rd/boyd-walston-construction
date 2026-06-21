'use client'

import { useEffect, useRef } from 'react'

export const JOBBER_CLIENT_HUB_ID = '007f2831-0cdb-4f7e-83f2-b58a55cb5b8d'

export default function JobberForm() {
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
    script.setAttribute(
      'form_url',
      `https://clienthub.getjobber.com/client_hubs/${JOBBER_CLIENT_HUB_ID}/public/work_request/embedded_work_request_form`
    )
    containerRef.current.appendChild(script)

    return () => {
      link.remove()
      script.remove()
    }
  }, [])

  return <div ref={containerRef} id={JOBBER_CLIENT_HUB_ID} />
}
