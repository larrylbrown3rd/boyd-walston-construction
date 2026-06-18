'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const POLE_HEIGHT = 3.2
const WIDTH = 2.4
const DEPTH = 1.8
const LEVELS = 4

function Scaffold() {
  const groupRef = useRef()

  const corners = useMemo(
    () => [
      [-WIDTH / 2, 0, -DEPTH / 2],
      [WIDTH / 2, 0, -DEPTH / 2],
      [WIDTH / 2, 0, DEPTH / 2],
      [-WIDTH / 2, 0, DEPTH / 2],
    ],
    []
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.12
    groupRef.current.rotation.x = 0.2
  })

  const opacity = 0.65

  return (
    <group ref={groupRef}>
      {corners.map((pos, i) => (
        <mesh key={`pole-${i}`} position={[pos[0], POLE_HEIGHT / 2, pos[2]]}>
          <boxGeometry args={[0.06, POLE_HEIGHT, 0.06]} />
          <meshBasicMaterial color="#D4D4D4" transparent opacity={opacity} wireframe />
        </mesh>
      ))}

      {Array.from({ length: LEVELS }).map((_, level) => {
        const y = ((level + 1) / LEVELS) * POLE_HEIGHT
        return (
          <group key={`level-${level}`}>
            <mesh position={[0, y, -DEPTH / 2]}>
              <boxGeometry args={[WIDTH, 0.05, 0.05]} />
              <meshBasicMaterial color="#FFFFFF" transparent opacity={opacity * 0.8} wireframe />
            </mesh>
            <mesh position={[0, y, DEPTH / 2]}>
              <boxGeometry args={[WIDTH, 0.05, 0.05]} />
              <meshBasicMaterial color="#FFFFFF" transparent opacity={opacity * 0.8} wireframe />
            </mesh>
            <mesh position={[-WIDTH / 2, y, 0]} rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[DEPTH, 0.05, 0.05]} />
              <meshBasicMaterial color="#FFFFFF" transparent opacity={opacity * 0.8} wireframe />
            </mesh>
            <mesh position={[WIDTH / 2, y, 0]} rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[DEPTH, 0.05, 0.05]} />
              <meshBasicMaterial color="#FFFFFF" transparent opacity={opacity * 0.8} wireframe />
            </mesh>
          </group>
        )
      })}

      <mesh position={[0, POLE_HEIGHT / 2, 0]}>
        <boxGeometry args={[WIDTH * 0.6, POLE_HEIGHT * 0.7, DEPTH * 0.6]} />
        <meshBasicMaterial color="#9B9B9B" transparent opacity={opacity * 0.35} wireframe />
      </mesh>
    </group>
  )
}

export default function ScaffoldStructure3D({ className = '' }) {
  return (
    <div className={`bg-[#111111] ${className}`}>
      <Canvas
        camera={{ position: [5, 3.5, 6], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.45} />
        <gridHelper args={[8, 16, '#2C2C2C', '#2C2C2C']} position={[0, -0.01, 0]} />
        <Scaffold />
      </Canvas>
    </div>
  )
}
