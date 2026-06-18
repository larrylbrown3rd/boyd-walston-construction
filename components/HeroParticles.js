'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function ReactiveParticles({ mouse, scrollY }) {
  const ref = useRef()
  const count = 2000

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  const originalPositions = useMemo(
    () => new Float32Array(positions),
    [positions]
  )

  useFrame((state) => {
    if (!ref.current) return

    const t = state.clock.elapsedTime
    const scroll = typeof window !== 'undefined'
      ? scrollY / window.innerHeight
      : 0

    const pos = ref.current.geometry.attributes.position

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const ox = originalPositions[i3]
      const oy = originalPositions[i3 + 1]
      const oz = originalPositions[i3 + 2]

      const dx = ox - mouse.current.x * 8
      const dy = oy - mouse.current.y * 5
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001
      const force = Math.max(0, 3 - dist) / 3

      pos.array[i3] = ox + (dx / dist) * force * 2
      pos.array[i3 + 1] = oy + (dy / dist) * force * 2
      pos.array[i3 + 2] = oz

      const angle = t * 0.05 + i * 0.001
      pos.array[i3] += Math.sin(angle) * 0.01
      pos.array[i3 + 1] += Math.cos(angle) * 0.01
    }

    pos.needsUpdate = true

    ref.current.scale.setScalar(1 + scroll * 1.5)
    if (ref.current.material) {
      ref.current.material.opacity = Math.max(0, 0.6 - scroll * 0.8)
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#D4D4D4"
        size={0.015}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

export default function HeroParticles() {
  const mouse = useRef({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouse = (e) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <ReactiveParticles mouse={mouse} scrollY={scrollY} />
    </Canvas>
  )
}
