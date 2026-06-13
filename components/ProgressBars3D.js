'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'

const stats = [
  { label: 'Projects Completed', value: 200, max: 200, color: '#C4A882' },
  { label: 'Client Satisfaction', value: 98, max: 100, color: '#FFFFFF' },
  { label: 'On Time Delivery', value: 95, max: 100, color: '#9B9B9B' },
  { label: 'Years Experience', value: 10, max: 10, color: '#C4A882' },
]

function Bar({ index, targetHeight, color, started }) {
  const meshRef = useRef()
  const heightRef = useRef(0)

  useFrame(() => {
    if (!started || !meshRef.current) return
    if (heightRef.current < targetHeight) {
      heightRef.current = Math.min(
        heightRef.current + targetHeight * 0.02,
        targetHeight
      )
      meshRef.current.scale.y = heightRef.current
      meshRef.current.position.y = heightRef.current / 2
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[index * 1.5 - 2.25, 0, 0]}
      scale={[1, 0.001, 1]}
    >
      <boxGeometry args={[0.8, 1, 0.8]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  )
}

function Bars({ started }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 10, 5]} intensity={1} />
      <pointLight
        position={[-5, 5, -5]}
        intensity={0.5}
        color="#C4A882"
      />
      {stats.map((stat, i) => (
        <Bar
          key={i}
          index={i}
          targetHeight={(stat.value / stat.max) * 4}
          color={stat.color}
          started={started}
        />
      ))}
      <gridHelper
        args={[10, 10, '#2C2C2C', '#2C2C2C']}
        position={[0, 0, 0]}
      />
    </>
  )
}

export default function ProgressBars3D() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setStarted(true), 300)
    }
  }, [isInView])

  return (
    <div ref={ref}>
      <Canvas
        camera={{ position: [0, 4, 8], fov: 60 }}
        style={{ width: '100%', height: '400px' }}
      >
        <Bars started={started} />
      </Canvas>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-serif text-2xl text-[#111111] font-bold">
              {stat.value}{stat.label.includes('Years') ? '+' : stat.label.includes('Projects') ? '+' : '%'}
            </p>
            <p className="font-sans text-xs text-[#9B9B9B] mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
