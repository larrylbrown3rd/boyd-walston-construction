'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
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

function PlanLine({ geometry, index, progressRef }) {
  const lineObj = useMemo(() => {
    const mat = new THREE.LineBasicMaterial({
      color: '#D4D4D4',
      transparent: true,
      opacity: 0,
    })
    return new THREE.Line(geometry, mat)
  }, [geometry])

  useFrame(() => {
    if (!lineObj) return
    const lineProgress = Math.max(0, Math.min(1,
      progressRef.current * FLOOR_PLAN_POINTS.length - index
    ))
    lineObj.material.opacity = lineProgress * 0.6
  })

  return <primitive object={lineObj} />
}

function DrawingLines() {
  const groupRef = useRef()
  const progressRef = useRef(0)

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
    progressRef.current = Math.min(progressRef.current + 0.003, 1)
    groupRef.current.rotation.x =
      Math.PI / 6 + Math.sin(t * 0.2) * 0.05
    groupRef.current.rotation.z = t * 0.03
  })

  return (
    <group ref={groupRef} scale={0.6}>
      {geometries.map((geo, i) => (
        <PlanLine key={i} geometry={geo} index={i} progressRef={progressRef} />
      ))}
      {FLOOR_PLAN_POINTS.map(([start], i) => (
        <mesh
          key={`dot-${i}`}
          position={[start[0], start[1], 0]}
        >
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial
            color="#D4D4D4"
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function FloorPlan() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      style={{
        width: '100%',
        height: '500px',
      }}
    >
      <DrawingLines />
    </Canvas>
  )
}
