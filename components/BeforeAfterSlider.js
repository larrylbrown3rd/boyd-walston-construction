'use client'

import { useState, useRef, useCallback } from 'react'

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
    setSliderPos(Math.min(Math.max(pos, 0), 100))
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
      {/* After image — full width background */}
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 font-sans text-sm">
          After Photo
        </span>
      </div>

      {/* Before image — clipped to slider position */}
      <div
        className="absolute inset-0 bg-gray-400 flex items-center justify-center overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <span className="text-gray-600 font-sans text-sm absolute left-4">
          Before Photo
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={() => { isDragging.current = true }}
        onTouchStart={() => { isDragging.current = true }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <span className="text-[#111111] text-xs font-bold select-none">
            ⟷
          </span>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-[#111111] text-white font-sans text-xs px-3 py-1 rounded-full">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-[#111111] text-white font-sans text-xs px-3 py-1 rounded-full">
        {afterLabel}
      </div>
    </div>
  )
}
