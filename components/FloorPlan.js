'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'
import * as THREE from 'three'

const FLOOR_PLAN_POINTS = [
  [[-5, -3], [5, -3]],
  [[5, -3], [5, 3]],
  [[5, 3], [-5, 3]],
  [[-5, 3], [-5, -3]],
  [[0, -3], [0, 1]],
  [[-5, 0], [0, 0]],
  [[0, 1], [5, 1]],
  [[2, -3], [2, 1]],
  [[-2, 0], [-1, 0]],
  [[0, -1], [0, 0]],
  [[-4, 3], [-2, 3]],
  [[1, 3], [3, 3]],
  [[5, -1], [5, 1]],
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

function BlueprintGrid() {
  const groupRef = useRef()

  const gridGeo = useMemo(() => {
    const points = []
    const size = 24
    const divisions = 24

    for (let i = 0; i <= divisions; i++) {
      const pos = (i / divisions - 0.5) * size
      points.push(
        new THREE.Vector3(-size / 2, pos, 0),
        new THREE.Vector3(size / 2, pos, 0)
      )
      points.push(
        new THREE.Vector3(pos, -size / 2, 0),
        new THREE.Vector3(pos, size / 2, 0)
      )
    }

    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(
      points.flatMap((p) => [p.x, p.y, p.z])
    )
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])

  const gridObj = useMemo(() => {
    const mat = new THREE.LineBasicMaterial({
      color: '#3a6a9e',
      transparent: true,
      opacity: 0.15,
    })
    return new THREE.LineSegments(gridGeo, mat)
  }, [gridGeo])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.z = t * 0.008
    groupRef.current.position.x = Math.sin(t * 0.08) * 0.3
  })

  return (
    <group ref={groupRef}>
      <primitive object={gridObj} />
    </group>
  )
}

function PlanLine({ geometry, index, buildProgress }) {
  const wrapperRef = useRef()

  const pile = useMemo(() => ({
    x: (seededRandom(index, 60) - 0.5) * 6,
    y: (seededRandom(index, 61) - 0.5) * 4,
    rz: (seededRandom(index, 62) - 0.5) * Math.PI * 0.8,
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

    const delay = (index / FLOOR_PLAN_POINTS.length) * 0.55
    const raw = Math.max(0, Math.min(1, (buildProgress.current - delay) / 0.45))
    const p = easeOutCubic(raw)

    wrapperRef.current.position.x = pile.x * (1 - p)
    wrapperRef.current.position.y = pile.y * (1 - p)
    wrapperRef.current.rotation.z = pile.rz * (1 - p)

    lineObj.material.opacity = lerp(0.1, 0.7, p)
  })

  return (
    <group ref={wrapperRef}>
      <primitive object={lineObj} />
    </group>
  )
}

function PlanDot({ position, index, buildProgress }) {
  const meshRef = useRef()

  useFrame(() => {
    if (!meshRef.current) return
    const delay = (index / FLOOR_PLAN_POINTS.length) * 0.55
    const raw = Math.max(0, Math.min(1, (buildProgress.current - delay) / 0.45))
    const p = easeOutCubic(raw)
    meshRef.current.material.opacity = lerp(0.05, 0.5, p)
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color="#FFFFFF" transparent opacity={0.05} />
    </mesh>
  )
}

function DrawingLines({ started }) {
  const groupRef = useRef()
  const buildProgress = useRef(0)

  const geometries = useMemo(() => {
    return FLOOR_PLAN_POINTS.map(([start, end]) => {
      const geo = new THREE.BufferGeometry()
      const positions = new Float32Array([
        start[0], start[1], 0,
        end[0], end[1], 0,
      ])
      geo.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      )
      return geo
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime

    if (started) {
      buildProgress.current = Math.min(buildProgress.current + 0.005, 1)
    }

    groupRef.current.rotation.x =
      Math.PI / 6 + Math.sin(t * 0.2) * 0.05
    groupRef.current.rotation.z = t * 0.03
  })

  return (
    <group ref={groupRef} scale={0.6}>
      {geometries.map((geo, i) => (
        <PlanLine key={i} geometry={geo} index={i} buildProgress={buildProgress} />
      ))}
      {FLOOR_PLAN_POINTS.map(([start], i) => (
        <PlanDot
          key={`dot-${i}`}
          position={[start[0], start[1], 0]}
          index={i}
          buildProgress={buildProgress}
        />
      ))}
    </group>
  )
}

export default function FloorPlan({ fullBackground = false }) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setStarted(true), 400)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  if (fullBackground) {
    return (
      <div
        ref={containerRef}
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
        <Canvas
          camera={{ position: [0, 0, 12], fov: 60 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ alpha: true }}
        >
          <BlueprintGrid />
          <DrawingLines started={started} />
        </Canvas>
      </div>
    )
  }

  return (
    <div ref={containerRef}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ width: '100%', height: '500px' }}
      >
        <DrawingLines started={started} />
      </Canvas>
    </div>
  )
}
