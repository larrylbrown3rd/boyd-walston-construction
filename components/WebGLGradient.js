'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GradientPlane() {
  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color('#111111') },
      color2: { value: new THREE.Color('#1a1a2e') },
      color3: { value: new THREE.Color('#D4D4D4') },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * 
          modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      varying vec2 vUv;
      
      void main() {
        float noise = sin(vUv.x * 3.0 + time * 0.3) * 
          cos(vUv.y * 2.0 + time * 0.2) * 0.5 + 0.5;
        
        vec3 color = mix(color1, color2, vUv.y);
        color = mix(color, color3, noise * 0.1);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  }), [])

  useFrame((state) => {
    material.uniforms.time.value = state.clock.elapsedTime
  })

  return (
    <mesh material={material}>
      <planeGeometry args={[10, 10]} />
    </mesh>
  )
}

export default function WebGLGradient() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
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
      <GradientPlane />
    </Canvas>
  )
}
