'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const LAYERS = [
  { y: 0.0, width: 3.6, depth: 0.12, color: '#9B9B9B', delay: 0 },
  { y: 0.25, width: 3.4, depth: 0.12, color: '#D4D4D4', delay: 0.3 },
  { y: 0.5, width: 3.2, depth: 0.12, color: '#FFFFFF', delay: 0.6 },
  { y: 0.75, width: 3.0, depth: 0.12, color: '#D4D4D4', delay: 0.9 },
]

function seededRandom(i, offset = 0) {
  const x = Math.sin((i + offset) * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function WallLayer({ y, width, depth, color, index, buildProgress }) {
  const meshRef = useRef()

  const pile = useMemo(() => ({
    x: (seededRandom(index, 40) - 0.5) * 3.5,
    y: seededRandom(index, 41) * 0.4 - 1.2,
    z: (seededRandom(index, 42) - 0.5) * 3,
    rx: (seededRandom(index, 43) - 0.5) * Math.PI * 0.6,
    rz: (seededRandom(index, 44) - 0.5) * Math.PI * 0.5,
  }), [index])

  useFrame((state) => {
    if (!meshRef.current) return

    const delay = (index / (LAYERS.length + 3)) * 0.5
    const raw = Math.max(0, Math.min(1, (buildProgress.current - delay) / 0.5))
    const p = easeOutCubic(raw)

    const t = state.clock.elapsedTime
    const hover = p > 0.95 ? Math.sin(t * 1.5) * 0.02 : 0

    meshRef.current.position.x = pile.x * (1 - p)
    meshRef.current.position.y = lerp(pile.y, y + hover, p)
    meshRef.current.position.z = pile.z * (1 - p)
    meshRef.current.rotation.x = pile.rx * (1 - p)
    meshRef.current.rotation.z = pile.rz * (1 - p)
    meshRef.current.material.opacity = lerp(0.1, 0.65, p)
  })

  return (
    <mesh ref={meshRef} position={[pile.x, pile.y, pile.z]}>
      <boxGeometry args={[width, 0.18, depth]} />
      <meshBasicMaterial color={color} transparent opacity={0.1} wireframe />
    </mesh>
  )
}

function StructuralPiece({ position, size, color, opacity, pieceIndex, buildProgress }) {
  const meshRef = useRef()

  const pile = useMemo(() => ({
    x: (seededRandom(pieceIndex, 50) - 0.5) * 4,
    y: seededRandom(pieceIndex, 51) * 0.3 - 1.2,
    z: (seededRandom(pieceIndex, 52) - 0.5) * 3.5,
    rx: (seededRandom(pieceIndex, 53) - 0.5) * Math.PI * 0.7,
    rz: (seededRandom(pieceIndex, 54) - 0.5) * Math.PI * 0.5,
  }), [pieceIndex])

  useFrame(() => {
    if (!meshRef.current) return

    const delay = 0.3 + (pieceIndex / 10) * 0.4
    const raw = Math.max(0, Math.min(1, (buildProgress.current - delay) / 0.45))
    const p = easeOutCubic(raw)

    meshRef.current.position.x = lerp(pile.x, position[0], p)
    meshRef.current.position.y = lerp(pile.y, position[1], p)
    meshRef.current.position.z = lerp(pile.z, position[2], p)
    meshRef.current.rotation.x = pile.rx * (1 - p)
    meshRef.current.rotation.z = pile.rz * (1 - p)
    meshRef.current.material.opacity = lerp(0.08, opacity, p)
  })

  return (
    <mesh ref={meshRef} position={[pile.x, pile.y, pile.z]}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={color} transparent opacity={0.08} wireframe />
    </mesh>
  )
}

function RoomOutline({ started }) {
  const groupRef = useRef()
  const buildProgress = useRef(0)

  useFrame((state) => {
    if (!groupRef.current) return

    if (started) {
      buildProgress.current = Math.min(buildProgress.current + 0.005, 1)
    }

    groupRef.current.rotation.y = state.clock.elapsedTime * 0.18
    groupRef.current.rotation.x = 0.25
  })

  return (
    <group ref={groupRef}>
      <group position={[0, -0.55, 0]}>
        {LAYERS.map((layer, i) => (
          <WallLayer key={i} {...layer} index={i} buildProgress={buildProgress} />
        ))}
        <StructuralPiece
          position={[0, 1.1, 0]}
          size={[2.8, 0.08, 2.2]}
          color="#D4D4D4"
          opacity={0.4}
          pieceIndex={5}
          buildProgress={buildProgress}
        />
        <StructuralPiece
          position={[-1.2, 0.55, 0]}
          size={[0.08, 1.1, 2.2]}
          color="#9B9B9B"
          opacity={0.35}
          pieceIndex={6}
          buildProgress={buildProgress}
        />
        <StructuralPiece
          position={[1.2, 0.55, 0]}
          size={[0.08, 1.1, 2.2]}
          color="#9B9B9B"
          opacity={0.35}
          pieceIndex={7}
          buildProgress={buildProgress}
        />
      </group>
    </group>
  )
}

export default function RenovationLayers3D({ className = '', backgroundImage }) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setStarted(true), 400)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Renovation project"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#111111]/60" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-[#111111]" />}
      <Canvas
        camera={{ position: [5, 0.5, 6], fov: 45 }}
        style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.45} />
        <RoomOutline started={started} />
      </Canvas>
    </div>
  )
}
