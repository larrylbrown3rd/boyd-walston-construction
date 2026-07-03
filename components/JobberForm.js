'use client'

import { useState } from 'react'

export const JOBBER_CLIENT_HUB_ID = '007f2831-0cdb-4f7e-83f2-b58a55cb5b8d'

export const JOBBER_WORK_REQUEST_URL =
  `https://clienthub.getjobber.com/client_hubs/${JOBBER_CLIENT_HUB_ID}/public/work_request`

export default function JobberForm() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative bg-white border border-[#E8E8E8] shadow-sm overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F8F7F5] z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="font-lato text-sm text-[#9B9B9B]">Loading form…</p>
          </div>
        </div>
      )}
      <iframe
        src={JOBBER_WORK_REQUEST_URL}
        title="Request a quote from Boyd Walston Construction"
        className="w-full min-h-[720px] border-0 block jobber-form-embed"
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
