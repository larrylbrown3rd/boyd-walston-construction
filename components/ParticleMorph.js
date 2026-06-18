'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function MorphingParticles() {
  const ref = useRef()
  const progressRef = useRef(0)
  const directionRef = useRef(1)

  const cloudPositions = useMemo(() => {
    const count = 800
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  const housePositions = useMemo(() => {
    const count = 800
    const pos = new Float32Array(count * 3)
    let index = 0

    for (let i = 0; i < count; i++) {
      const t = i / count

      if (t < 0.4) {
        pos[index++] = (Math.random() - 0.5) * 3
        pos[index++] = (Math.random() - 0.5) * 1.5 - 0.5
        pos[index++] = 0
      } else if (t < 0.7) {
        const x = (Math.random() - 0.5) * 3
        pos[index++] = x
        pos[index++] = Math.random() * 1.5 + 0.5 - Math.abs(x) * 0.8
        pos[index++] = 0
      } else {
        pos[index++] = (Math.random() - 0.5) * 0.6
        pos[index++] = (Math.random() - 0.5) * 0.8 - 0.8
        pos[index++] = 0
      }
    }
    return pos
  }, [])

  const currentPositions = useMemo(
    () => new Float32Array(cloudPositions),
    [cloudPositions]
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime

    progressRef.current += 0.003 * directionRef.current
    if (progressRef.current >= 1) directionRef.current = -1
    if (progressRef.current <= 0) directionRef.current = 1

    const p = progressRef.current

    const positions = ref.current.geometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      const i3 = i * 3
      positions.array[i3] = cloudPositions[i3] * (1 - p) +
        housePositions[i3] * p
      positions.array[i3 + 1] = cloudPositions[i3 + 1] * (1 - p) +
        housePositions[i3 + 1] * p
      positions.array[i3 + 2] = 0
    }
    positions.needsUpdate = true

    ref.current.rotation.y = Math.sin(t * 0.2) * 0.3
  })

  return (
    <Points
      ref={ref}
      positions={currentPositions}
      stride={3}
    >
      <PointMaterial
        color="#D4D4D4"
        size={0.04}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default function ParticleMorph() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{
        width: '100%',
        height: '400px',
      }}
    >
      <MorphingParticles />
    </Canvas>
  )
}
