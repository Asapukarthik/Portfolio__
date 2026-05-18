import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Text } from '@react-three/drei'
import { useRef } from 'react'

function RotatingCube({ position, color }) {
  const ref = useRef(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.45
    ref.current.rotation.y += delta * 0.65
  })

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1.05, 1.05, 1.05]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.58}
        roughness={0.15}
        metalness={0.65}
      />
    </mesh>
  )
}

function FloatingSphere({ position }) {
  return (
    <Float speed={1.6} rotationIntensity={1.6} floatIntensity={2.1}>
      <mesh position={position}>
        <sphereGeometry args={[0.72, 64, 64]} />
        <MeshDistortMaterial
          color="#22d3ee"
          transparent
          opacity={0.5}
          roughness={0.1}
          distort={0.34}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function TechGlyph({ position, label }) {
  return (
    <Float speed={1.2} rotationIntensity={0.45} floatIntensity={1.7}>
      <Text
        position={position}
        fontSize={0.56}
        color="#c4b5fd"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </Float>
  )
}

function Hero3D() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-85">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 52 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2.5, 3, 3]} intensity={2.2} color="#22d3ee" />
        <pointLight position={[-3, -2, 1]} intensity={1.8} color="#9333ea" />
        <Float speed={1.35} rotationIntensity={1.2} floatIntensity={1.9}>
          <RotatingCube position={[-2.25, 1.45, -1]} color="#7c3aed" />
        </Float>
        <Float speed={1.2} rotationIntensity={1.4} floatIntensity={1.4}>
          <RotatingCube position={[2.3, -1.35, -0.6]} color="#06b6d4" />
        </Float>
        <FloatingSphere position={[0.2, 0.1, -1.4]} />
        <TechGlyph position={[-1.1, -0.4, 0.4]} label="</>" />
        <TechGlyph position={[1.55, 1.1, 0.2]} label="{ }" />
      </Canvas>
    </div>
  )
}

export default Hero3D
