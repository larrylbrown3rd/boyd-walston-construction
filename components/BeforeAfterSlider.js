'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

export default function BeforeAfterSlider({
  beforeSrc = '/before.jpg',
  afterSrc = '/after.jpg',
  beforeLabel = 'Before',
  afterLabel = 'After',
}) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(pos, 1), 99))
  }, [])

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={() => { isDragging.current = false }}
      onMouseLeave={() => { isDragging.current = false }}
      onTouchMove={handleTouchMove}
    >
      <Image
        src={afterSrc}
        alt={afterLabel}
        fill
        className="object-cover"
        quality={100}
      />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div
          className="relative h-full"
          style={{ width: `${10000 / sliderPos}%` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeLabel}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-10"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={() => { isDragging.current = true }}
        onTouchStart={() => { isDragging.current = true }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <span className="text-[#111111] text-xs font-bold select-none">
            ⟷
          </span>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-[#111111] text-white font-inter text-xs px-3 py-1 rounded-full z-10">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-[#111111] text-white font-inter text-xs px-3 py-1 rounded-full z-10">
        {afterLabel}
      </div>
    </div>
  )
}
