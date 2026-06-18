'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'

const PHASES = [
  { height: 0.6, color: '#9B9B9B' },
  { height: 1.4, color: '#D4D4D4' },
  { height: 1.0, color: '#FFFFFF' },
  { height: 1.8, color: '#D4D4D4' },
]

function PhaseBar({ index, targetHeight, color, started }) {
  const meshRef = useRef()
  const heightRef = useRef(0)

  useFrame(() => {
    if (!started || !meshRef.current) return
    if (heightRef.current < targetHeight) {
      heightRef.current = Math.min(heightRef.current + targetHeight * 0.018, targetHeight)
      meshRef.current.scale.y = heightRef.current
      meshRef.current.position.y = heightRef.current / 2
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[index * 1.4 - 2.1, 0, 0]}
      scale={[0.9, 0.001, 0.9]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.85}
        metalness={0.2}
        roughness={0.5}
        wireframe
      />
    </mesh>
  )
}

function ManagementScene({ started }) {
  const groupRef = useRef()

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.25
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 6, 4]} intensity={0.8} />
      <gridHelper args={[8, 12, '#2C2C2C', '#2C2C2C']} position={[0, -0.01, 0]} />
      {PHASES.map((phase, i) => (
        <PhaseBar
          key={i}
          index={i}
          targetHeight={phase.height}
          color={phase.color}
          started={started}
        />
      ))}
    </group>
  )
}

export default function ProjectManagement3D({ className = '' }) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setStarted(true), 200)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div ref={containerRef} className={`bg-[#111111] ${className}`}>
      <Canvas
        camera={{ position: [0, 3.5, 7], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ManagementScene started={started} />
      </Canvas>
    </div>
  )
}
