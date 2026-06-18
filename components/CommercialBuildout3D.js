'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const FLOORS = 5
const FLOOR_HEIGHT = 0.55
const BUILDING_WIDTH = 3.2
const BUILDING_DEPTH = 2.2

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

function FloorSlab({ index, buildProgress }) {
  const meshRef = useRef()
  const targetY = index * FLOOR_HEIGHT + 0.1

  const pile = useMemo(() => ({
    x: (seededRandom(index, 10) - 0.5) * 3.5,
    y: seededRandom(index, 11) * 0.4 - 1.5,
    z: (seededRandom(index, 12) - 0.5) * 3.5,
    rx: (seededRandom(index, 13) - 0.5) * Math.PI * 0.5,
    rz: (seededRandom(index, 14) - 0.5) * Math.PI * 0.4,
  }), [index])

  useFrame(() => {
    if (!meshRef.current) return

    const delay = (index / (FLOORS + 4)) * 0.5
    const raw = Math.max(0, Math.min(1, (buildProgress.current - delay) / 0.5))
    const p = easeOutCubic(raw)

    meshRef.current.position.x = pile.x * (1 - p)
    meshRef.current.position.y = lerp(pile.y, targetY, p)
    meshRef.current.position.z = pile.z * (1 - p)
    meshRef.current.rotation.x = pile.rx * (1 - p)
    meshRef.current.rotation.z = pile.rz * (1 - p)
    meshRef.current.material.opacity = lerp(0.12, 0.55 - index * 0.05, p)
  })

  return (
    <mesh ref={meshRef} position={[pile.x, pile.y, pile.z]}>
      <boxGeometry args={[BUILDING_WIDTH, 0.08, BUILDING_DEPTH]} />
      <meshBasicMaterial color="#D4D4D4" transparent opacity={0.12} wireframe />
    </mesh>
  )
}

function Column({ position, height, index, buildProgress }) {
  const meshRef = useRef()

  const pile = useMemo(() => ({
    x: (seededRandom(index + FLOORS, 20) - 0.5) * 4,
    y: seededRandom(index + FLOORS, 21) * 0.3 - 1.5,
    z: (seededRandom(index + FLOORS, 22) - 0.5) * 4,
    rx: (seededRandom(index + FLOORS, 23) - 0.5) * Math.PI * 0.8,
    rz: (seededRandom(index + FLOORS, 24) - 0.5) * Math.PI * 0.6,
  }), [index])

  useFrame(() => {
    if (!meshRef.current) return

    const delay = 0.15 + (index / (FLOORS + 4)) * 0.5
    const raw = Math.max(0, Math.min(1, (buildProgress.current - delay) / 0.5))
    const p = easeOutCubic(raw)

    meshRef.current.position.x = lerp(pile.x, position[0], p)
    meshRef.current.position.y = lerp(pile.y, (height * p) / 2, p)
    meshRef.current.position.z = lerp(pile.z, position[2], p)
    meshRef.current.rotation.x = pile.rx * (1 - p)
    meshRef.current.rotation.z = pile.rz * (1 - p)
    meshRef.current.scale.y = lerp(0.05, height, p)
    meshRef.current.material.opacity = lerp(0.1, 0.6, p)
  })

  return (
    <mesh ref={meshRef} position={[pile.x, pile.y, pile.z]} scale={[1, 0.05, 1]}>
      <boxGeometry args={[0.1, 1, 0.1]} />
      <meshBasicMaterial color="#FFFFFF" transparent opacity={0.1} wireframe />
    </mesh>
  )
}

function TopCap({ buildProgress }) {
  const meshRef = useRef()
  const targetY = FLOORS * FLOOR_HEIGHT + 0.2

  const pile = useMemo(() => ({
    x: (seededRandom(99, 30) - 0.5) * 3,
    y: seededRandom(99, 31) * 0.3 - 1.5,
    z: (seededRandom(99, 32) - 0.5) * 3,
    rx: (seededRandom(99, 33) - 0.5) * Math.PI * 0.4,
    rz: (seededRandom(99, 34) - 0.5) * Math.PI * 0.3,
  }), [])

  useFrame(() => {
    if (!meshRef.current) return

    const raw = Math.max(0, Math.min(1, (buildProgress.current - 0.6) / 0.4))
    const p = easeOutCubic(raw)

    meshRef.current.position.x = pile.x * (1 - p)
    meshRef.current.position.y = lerp(pile.y, targetY, p)
    meshRef.current.position.z = pile.z * (1 - p)
    meshRef.current.rotation.x = pile.rx * (1 - p)
    meshRef.current.rotation.z = pile.rz * (1 - p)
    meshRef.current.material.opacity = lerp(0.08, 0.35, p)
  })

  return (
    <mesh ref={meshRef} position={[pile.x, pile.y, pile.z]}>
      <boxGeometry args={[BUILDING_WIDTH + 0.2, 0.06, BUILDING_DEPTH + 0.2]} />
      <meshBasicMaterial color="#D4D4D4" transparent opacity={0.08} wireframe />
    </mesh>
  )
}

function CommercialBuilding({ started }) {
  const groupRef = useRef()
  const buildProgress = useRef(0)

  useFrame((state) => {
    if (!groupRef.current) return

    if (started) {
      buildProgress.current = Math.min(buildProgress.current + 0.005, 1)
    }

    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12
  })

  const corners = [
    [-BUILDING_WIDTH / 2, 0, -BUILDING_DEPTH / 2],
    [BUILDING_WIDTH / 2, 0, -BUILDING_DEPTH / 2],
    [BUILDING_WIDTH / 2, 0, BUILDING_DEPTH / 2],
    [-BUILDING_WIDTH / 2, 0, BUILDING_DEPTH / 2],
  ]

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {Array.from({ length: FLOORS }).map((_, i) => (
        <FloorSlab key={`slab-${i}`} index={i} buildProgress={buildProgress} />
      ))}
      {corners.map((pos, i) => (
        <Column
          key={`col-${i}`}
          position={pos}
          height={FLOORS * FLOOR_HEIGHT}
          index={i}
          buildProgress={buildProgress}
        />
      ))}
      <TopCap buildProgress={buildProgress} />
    </group>
  )
}

export default function CommercialBuildout3D({ className = '', backgroundImage }) {
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
            alt="Commercial build-out"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#111111]/60" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-[#111111]" />}
      <Canvas
        camera={{ position: [5, 2, 7], fov: 45 }}
        style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <CommercialBuilding started={started} />
      </Canvas>
    </div>
  )
}
