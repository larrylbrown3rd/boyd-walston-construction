'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FOOTPRINT = [
  [[-2, 0, -1.5], [2, 0, -1.5]],
  [[2, 0, -1.5], [2, 0, 1.5]],
  [[2, 0, 1.5], [-2, 0, 1.5]],
  [[-2, 0, 1.5], [-2, 0, -1.5]],
  [[-2, 0, -1.5], [-2, 1.8, -1.5]],
  [[2, 0, -1.5], [2, 1.8, -1.5]],
  [[2, 0, 1.5], [2, 1.8, 1.5]],
  [[-2, 0, 1.5], [-2, 1.8, 1.5]],
  [[-2, 1.8, -1.5], [2, 1.8, -1.5]],
  [[2, 1.8, -1.5], [2, 1.8, 1.5]],
  [[2, 1.8, 1.5], [-2, 1.8, 1.5]],
  [[-2, 1.8, 1.5], [-2, 1.8, -1.5]],
  [[0, 1.8, -1.5], [0, 2.8, 0]],
  [[0, 2.8, 0], [2, 1.8, 1.5]],
  [[0, 2.8, 0], [-2, 1.8, 1.5]],
]

function Blueprint() {
  const groupRef = useRef()

  const gridGeo = useMemo(() => {
    const points = []
    const size = 14
    const divisions = 14
    for (let i = 0; i <= divisions; i++) {
      const pos = (i / divisions - 0.5) * size
      points.push(new THREE.Vector3(-size / 2, pos, -3))
      points.push(new THREE.Vector3(size / 2, pos, -3))
      points.push(new THREE.Vector3(pos, -size / 2, -3))
      points.push(new THREE.Vector3(pos, size / 2, -3))
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])),
        3
      )
    )
    return geo
  }, [])

  const frameGeometries = useMemo(() => {
    return FOOTPRINT.map(([start, end]) => {
      const geo = new THREE.BufferGeometry()
      geo.setAttribute(
        'position',
        new THREE.BufferAttribute(
          new Float32Array([...start, ...end]),
          3
        )
      )
      return geo
    })
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.2
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.05
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <lineSegments geometry={gridGeo}>
        <lineBasicMaterial color="#D4D4D4" transparent opacity={0.06} />
      </lineSegments>
      <gridHelper args={[12, 24, '#2C2C2C', '#1a1a1a']} rotation={[0, 0, 0]} position={[0, -1.2, 0]} />
      {frameGeometries.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color="#D4D4D4" transparent opacity={0.45} />
        </line>
      ))}
    </group>
  )
}

export default function ConstructionSiteHero3D() {
  return (
    <Canvas
      camera={{ position: [0, 2, 9], fov: 55 }}
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
      <ambientLight intensity={0.5} />
      <Blueprint />
    </Canvas>
  )
}
