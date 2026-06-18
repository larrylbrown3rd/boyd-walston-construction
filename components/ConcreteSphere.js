'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Sphere() {
  const meshRef = useRef()
  const wireRef = useRef()

  const noiseMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color('#2C2C2C') },
        color2: { value: new THREE.Color('#D4D4D4') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float time;
        
        void main() {
          vUv = uv;
          vNormal = normal;
          
          float noise = sin(position.x * 3.0 + time) * 
            cos(position.y * 3.0 + time) * 0.05;
          
          vec3 newPosition = position + normal * noise;
          gl_Position = projectionMatrix * 
            modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float time;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          float noise = sin(vUv.x * 20.0) * 
            cos(vUv.y * 20.0) * 0.5 + 0.5;
          float fresnel = pow(1.0 - 
            abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          
          vec3 color = mix(color1, color2, 
            noise * 0.3 + fresnel * 0.4);
          gl_FragColor = vec4(color, 0.9);
        }
      `,
    })
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    meshRef.current.rotation.y = t * 0.1
    meshRef.current.rotation.x = t * 0.05
    wireRef.current.rotation.y = t * 0.08
    wireRef.current.rotation.x = t * 0.06
    noiseMaterial.uniforms.time.value = t
  })

  return (
    <>
      <mesh ref={meshRef} material={noiseMaterial}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>
      <mesh ref={wireRef}>
        <sphereGeometry args={[2.02, 16, 16]} />
        <meshBasicMaterial
          color="#D4D4D4"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </>
  )
}

export default function ConcreteSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{
        width: '100%',
        height: '500px',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Sphere />
    </Canvas>
  )
}
