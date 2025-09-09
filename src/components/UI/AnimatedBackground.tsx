'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const AnimatedBackground = () => {
  const ref = useRef<THREE.Points>(null)
  
  useEffect(() => {
    if (ref.current) {
      const positions = new Float32Array(2000 * 3)
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10
        positions[i + 1] = (Math.random() - 0.5) * 10
        positions[i + 2] = (Math.random() - 0.5) * 10
      }
      
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      ref.current.geometry = geometry
    }
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <Points ref={ref}>
      <PointMaterial
        transparent
        color="#52c8f9"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default AnimatedBackground