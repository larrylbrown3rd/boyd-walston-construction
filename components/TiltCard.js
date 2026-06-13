'use client'

import { useState } from 'react'

export default function TiltCard({ children, className }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / 15
    const y = -(e.clientX - rect.left - rect.width / 2) / 15
    setTilt({ x, y })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      {children}
    </div>
  )
}
