'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { projectPhotos } from '@/data/projectPhotos'

const INTERVAL_MS = 5500
const FADE_MS = 1400

export default function PhotoSlideshowBackground() {
  const [index, setIndex] = useState(0)
  const [zoomKey, setZoomKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % projectPhotos.length)
      setZoomKey((key) => key + 1)
    }, INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {projectPhotos.map((photo, i) => {
        const isActive = i === index

        return (
          <div
            key={photo.src}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
              zIndex: isActive ? 1 : 0,
            }}
          >
            <div
              key={isActive ? `${photo.src}-${zoomKey}` : photo.src}
              className={`absolute inset-0 ${isActive ? 'photo-ken-burns' : ''}`}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
