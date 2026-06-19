'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useInView } from 'framer-motion'

function seededRandom(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 49.713
  return x - Math.floor(x)
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

const concreteMat = new THREE.MeshStandardMaterial({
  color: '#b8b0a8',
  roughness: 0.85,
  metalness: 0.05,
})

const steelMat = new THREE.MeshStandardMaterial({
  color: '#5a6672',
  roughness: 0.3,
  metalness: 0.8,
})

const accentMat = new THREE.MeshStandardMaterial({
  color: '#c8a45c',
  roughness: 0.4,
  metalness: 0.6,
})

function AnimatedPiece({ targetPos, targetRot, seed, geometry, material, animProgress }) {
  const ref = useRef()

  const scatter = useMemo(() => ({
    px: (seededRandom(seed) - 0.5) * 12,
    py: -4 + seededRandom(seed + 1) * -3,
    pz: (seededRandom(seed + 2) - 0.5) * 12,
    rx: seededRandom(seed + 3) * Math.PI * 2,
    ry: seededRandom(seed + 4) * Math.PI * 2,
    rz: seededRandom(seed + 5) * Math.PI * 2,
    delay: seededRandom(seed + 6) * 0.4,
  }), [seed])

  useFrame(() => {
    if (!ref.current) return
    const rawT = Math.max(0, Math.min(1, (animProgress.current - scatter.delay) / 0.6))
    const t = easeOutCubic(rawT)

    ref.current.position.x = lerp(scatter.px, targetPos[0], t)
    ref.current.position.y = lerp(scatter.py, targetPos[1], t)
    ref.current.position.z = lerp(scatter.pz, targetPos[2], t)
    ref.current.rotation.x = lerp(scatter.rx, targetRot[0], t)
    ref.current.rotation.y = lerp(scatter.ry, targetRot[1], t)
    ref.current.rotation.z = lerp(scatter.rz, targetRot[2], t)
  })

  return (
    <mesh ref={ref} geometry={geometry} material={material} castShadow receiveShadow />
  )
}

function Monument({ animProgress }) {
  const groupRef = useRef()

  const geometries = useMemo(() => ({
    platform: new THREE.BoxGeometry(4, 0.2, 4),
    topSlab: new THREE.BoxGeometry(3.2, 0.15, 3.2),
    pillar: new THREE.BoxGeometry(0.35, 2.4, 0.35),
    beam: new THREE.BoxGeometry(3.4, 0.15, 0.2),
    beamZ: new THREE.BoxGeometry(0.2, 0.15, 3.4),
    crossBar: new THREE.BoxGeometry(0.12, 0.12, 2.8),
    capstone: new THREE.BoxGeometry(0.8, 0.6, 0.8),
    step1: new THREE.BoxGeometry(4.6, 0.12, 4.6),
    step2: new THREE.BoxGeometry(4.3, 0.12, 4.3),
  }), [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  let seed = 0
  const nextSeed = () => seed++

  const pillarPositions = [
    [-1.4, 1.3, -1.4],
    [1.4, 1.3, -1.4],
    [-1.4, 1.3, 1.4],
    [1.4, 1.3, 1.4],
  ]

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* Steps */}
      <AnimatedPiece targetPos={[0, -0.16, 0]} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.step1} material={concreteMat} animProgress={animProgress} />
      <AnimatedPiece targetPos={[0, -0.04, 0]} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.step2} material={concreteMat} animProgress={animProgress} />

      {/* Base platform */}
      <AnimatedPiece targetPos={[0, 0.1, 0]} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.platform} material={concreteMat} animProgress={animProgress} />

      {/* Pillars */}
      {pillarPositions.map((pos, i) => (
        <AnimatedPiece key={`pillar-${i}`} targetPos={pos} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.pillar} material={steelMat} animProgress={animProgress} />
      ))}

      {/* Top beams */}
      <AnimatedPiece targetPos={[0, 2.58, -1.4]} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.beam} material={steelMat} animProgress={animProgress} />
      <AnimatedPiece targetPos={[0, 2.58, 1.4]} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.beam} material={steelMat} animProgress={animProgress} />
      <AnimatedPiece targetPos={[-1.4, 2.58, 0]} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.beamZ} material={steelMat} animProgress={animProgress} />
      <AnimatedPiece targetPos={[1.4, 2.58, 0]} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.beamZ} material={steelMat} animProgress={animProgress} />

      {/* Cross bracing */}
      <AnimatedPiece targetPos={[0, 1.5, -1.4]} targetRot={[0.35, 0, 0]} seed={nextSeed()} geometry={geometries.crossBar} material={accentMat} animProgress={animProgress} />
      <AnimatedPiece targetPos={[0, 1.5, 1.4]} targetRot={[-0.35, 0, 0]} seed={nextSeed()} geometry={geometries.crossBar} material={accentMat} animProgress={animProgress} />
      <AnimatedPiece targetPos={[-1.4, 1.5, 0]} targetRot={[0, 0, 0.35]} seed={nextSeed()} geometry={geometries.crossBar} material={accentMat} animProgress={animProgress} />
      <AnimatedPiece targetPos={[1.4, 1.5, 0]} targetRot={[0, 0, -0.35]} seed={nextSeed()} geometry={geometries.crossBar} material={accentMat} animProgress={animProgress} />

      {/* Top slab */}
      <AnimatedPiece targetPos={[0, 2.73, 0]} targetRot={[0, 0, 0]} seed={nextSeed()} geometry={geometries.topSlab} material={concreteMat} animProgress={animProgress} />

      {/* Capstone */}
      <AnimatedPiece targetPos={[0, 3.1, 0]} targetRot={[0, Math.PI / 4, 0]} seed={nextSeed()} geometry={geometries.capstone} material={accentMat} animProgress={animProgress} />
    </group>
  )
}

export default function ConstructionMonument3D() {
  const containerRef = useRef()
  const animProgress = useRef(0)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView) setStarted(true)
  }, [isInView])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '500px' }}>
      <Canvas
        camera={{ position: [5, 3, 5], fov: 45 }}
        shadows
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[8, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 6, -3]} intensity={0.3} color="#8899bb" />
        <pointLight position={[0, 5, 0]} intensity={0.4} color="#c8a45c" />

        <AnimController started={started} animProgress={animProgress} />
        <Monument animProgress={animProgress} />
      </Canvas>
    </div>
  )
}

function AnimController({ started, animProgress }) {
  useFrame((_, delta) => {
    if (started && animProgress.current < 1) {
      animProgress.current = Math.min(1, animProgress.current + delta * 0.5)
    }
  })
  return null
}
