'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function DrawingLines() {
  const groupRef = useRef()
  const progressRef = useRef(0)
  const linesRef = useRef([])

  const floorPlanPoints = useMemo(() => [
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
  ], [])

  const geometries = useMemo(() => {
    return floorPlanPoints.map(([start, end]) => {
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
  }, [floorPlanPoints])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    progressRef.current = Math.min(progressRef.current + 0.003, 1)

    linesRef.current.forEach((line, i) => {
      if (!line) return
      const lineProgress = Math.max(0, Math.min(1,
        progressRef.current * geometries.length - i
      ))
      line.material.opacity = lineProgress * 0.6
    })

    groupRef.current.rotation.x =
      Math.PI / 6 + Math.sin(t * 0.2) * 0.05
    groupRef.current.rotation.z = t * 0.03
  })

  return (
    <group ref={groupRef} scale={0.6}>
      {geometries.map((geo, i) => (
        <line
          key={i}
          ref={(el) => { linesRef.current[i] = el }}
          geometry={geo}
        >
          <lineBasicMaterial
            color="#C4A882"
            transparent
            opacity={0}
          />
        </line>
      ))}
      {floorPlanPoints.map(([start], i) => (
        <mesh
          key={`dot-${i}`}
          position={[start[0], start[1], 0]}
        >
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial
            color="#C4A882"
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
