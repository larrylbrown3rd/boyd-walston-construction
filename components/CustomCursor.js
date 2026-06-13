'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!prefersFinePointer) return

    setIsVisible(true)

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)

    const buttons = document.querySelectorAll('a, button')
    const handleEnter = () => setIsHovering(true)
    const handleLeave = () => setIsHovering(false)

    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', handleEnter)
      btn.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', handleEnter)
        btn.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: pos.x - 20,
          top: pos.y - 20,
          width: isHovering ? 50 : 40,
          height: isHovering ? 50 : 40,
          borderRadius: '50%',
          border: '1px solid #C4A882',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'all 0.15s ease-out',
          mixBlendMode: 'difference',
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: pos.x - 3,
          top: pos.y - 3,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#C4A882',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  )
}
