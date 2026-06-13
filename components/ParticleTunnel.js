'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Tunnel() {
  const pointsRef = useRef()
  const count = 2000

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 2 + Math.random() * 3
      const z = (Math.random() - 0.5) * 30

      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = Math.sin(angle) * radius
      pos[i * 3 + 2] = z
    }
    return pos
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!pointsRef.current) return

    const pos = pointsRef.current.geometry.attributes.position

    for (let i = 0; i < count; i++) {
      const z = pos.array[i * 3 + 2]
      pos.array[i * 3 + 2] = z + 0.05
      if (pos.array[i * 3 + 2] > 15) {
        pos.array[i * 3 + 2] = -15
      }
    }
    pos.needsUpdate = true

    pointsRef.current.rotation.z = t * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C4A882"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleTunnel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 80 }}
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
      <Tunnel />
    </Canvas>
  )
}
