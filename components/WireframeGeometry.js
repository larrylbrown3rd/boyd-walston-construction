'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function RotatingShapes() {
  const cubeRef = useRef()
  const octaRef = useRef()
  const torusRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    cubeRef.current.rotation.x = t * 0.3
    cubeRef.current.rotation.y = t * 0.2

    octaRef.current.rotation.x = t * 0.2
    octaRef.current.rotation.z = t * 0.3

    torusRef.current.rotation.x = t * 0.1
    torusRef.current.rotation.y = t * 0.25
  })

  return (
    <>
      <mesh ref={cubeRef} position={[-4, 2, -2]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial
          color="#C4A882"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      <mesh ref={octaRef} position={[4, -1, -3]}>
        <octahedronGeometry args={[1.5]} />
        <meshBasicMaterial
          color="#C4A882"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      <mesh ref={torusRef} position={[0, -3, -2]}>
        <torusGeometry args={[1.5, 0.3, 8, 16]} />
        <meshBasicMaterial
          color="#C4A882"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </>
  )
}

export default function WireframeGeometry() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
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
      <RotatingShapes />
    </Canvas>
  )
}
