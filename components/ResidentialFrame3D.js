'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import * as THREE from 'three'

const FRAME_LINES = [
  [[-2.5, 0, -2], [2.5, 0, -2]],
  [[2.5, 0, -2], [2.5, 0, 2]],
  [[2.5, 0, 2], [-2.5, 0, 2]],
  [[-2.5, 0, 2], [-2.5, 0, -2]],
  [[-2.5, 0, -2], [-2.5, 2.5, -2]],
  [[2.5, 0, -2], [2.5, 2.5, -2]],
  [[2.5, 0, 2], [2.5, 2.5, 2]],
  [[-2.5, 0, 2], [-2.5, 2.5, 2]],
  [[-2.5, 2.5, -2], [2.5, 2.5, -2]],
  [[2.5, 2.5, -2], [2.5, 2.5, 2]],
  [[2.5, 2.5, 2], [-2.5, 2.5, 2]],
  [[-2.5, 2.5, 2], [-2.5, 2.5, -2]],
  [[0, 2.5, -2], [0, 3.8, 0]],
  [[0, 3.8, 0], [2.5, 2.5, 2]],
  [[0, 3.8, 0], [-2.5, 2.5, 2]],
  [[0, 0, 0], [0, 2.5, 0]],
  [[0, 0, -2], [0, 2.5, -2]],
  [[0, 0, 2], [0, 2.5, 2]],
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

function FrameBeam({ geometry, index, total, buildProgress }) {
  const wrapperRef = useRef()

  const pile = useMemo(() => ({
    x: (seededRandom(index, 0) - 0.5) * 4,
    y: seededRandom(index, 1) * 0.6 - 2,
    z: (seededRandom(index, 2) - 0.5) * 4,
    rx: (seededRandom(index, 3) - 0.5) * Math.PI,
    ry: seededRandom(index, 4) * Math.PI,
    rz: (seededRandom(index, 5) - 0.5) * Math.PI * 0.7,
  }), [index])

  const lineObj = useMemo(() => {
    const mat = new THREE.LineBasicMaterial({
      color: '#FFFFFF',
      transparent: true,
      opacity: 0,
    })
    return new THREE.Line(geometry, mat)
  }, [geometry])

  useFrame(() => {
    if (!wrapperRef.current || !lineObj) return

    const delay = (index / total) * 0.55
    const raw = Math.max(0, Math.min(1, (buildProgress.current - delay) / 0.45))
    const p = easeOutCubic(raw)

    wrapperRef.current.position.x = pile.x * (1 - p)
    wrapperRef.current.position.y = pile.y * (1 - p)
    wrapperRef.current.position.z = pile.z * (1 - p)
    wrapperRef.current.rotation.x = pile.rx * (1 - p)
    wrapperRef.current.rotation.y = pile.ry * (1 - p)
    wrapperRef.current.rotation.z = pile.rz * (1 - p)

    lineObj.material.opacity = lerp(0.15, 0.85, p)
  })

  return (
    <group ref={wrapperRef}>
      <primitive object={lineObj} />
    </group>
  )
}

function HouseFrame({ started }) {
  const groupRef = useRef()
  const buildProgress = useRef(0)

  const geometries = useMemo(() => {
    return FRAME_LINES.map(([start, end]) => {
      const geo = new THREE.BufferGeometry()
      const positions = new Float32Array([
        start[0], start[1], start[2],
        end[0], end[1], end[2],
      ])
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      return geo
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime

    if (started) {
      buildProgress.current = Math.min(buildProgress.current + 0.005, 1)
    }

    groupRef.current.rotation.y = t * 0.15
    groupRef.current.rotation.x = 0.35 + Math.sin(t * 0.3) * 0.05
  })

  return (
    <group ref={groupRef} scale={0.85} position={[0, -1.9, 0]}>
      {geometries.map((geo, i) => (
        <FrameBeam
          key={i}
          geometry={geo}
          index={i}
          total={geometries.length}
          buildProgress={buildProgress}
        />
      ))}
    </group>
  )
}

export default function ResidentialFrame3D({ className = '', backgroundImage }) {
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
            alt="Residential construction"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#111111]/60" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-[#111111]" />}
      <Canvas
        camera={{ position: [6, 2, 8], fov: 45 }}
        style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <HouseFrame started={started} />
      </Canvas>
    </div>
  )
}
