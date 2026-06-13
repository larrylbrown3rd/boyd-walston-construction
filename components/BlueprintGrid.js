'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Grid() {
  const groupRef = useRef()

  const lines = useMemo(() => {
    const points = []
    const size = 20
    const divisions = 20

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
    return points
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(
      lines.flatMap((p) => [p.x, p.y, p.z])
    )
    geo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
    return geo
  }, [lines])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    groupRef.current.rotation.z = t * 0.02
    groupRef.current.position.x = Math.sin(t * 0.1) * 0.5
  })

  return (
    <group ref={groupRef}>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial
          color="#C4A882"
          transparent
          opacity={0.08}
        />
      </lineSegments>
    </group>
  )
}

export default function BlueprintGrid() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
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
      <Grid />
    </Canvas>
  )
}
