import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function HoloOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const matRef = useRef<any>(null!);

  useFrame((state, dt) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += dt * 0.1;
    meshRef.current.rotation.y += dt * 0.15;
    if (matRef.current) {
      const hue = (state.clock.elapsedTime * 0.04) % 1;
      matRef.current.color.setHSL(0.7 + Math.sin(hue * 6.28) * 0.08, 0.6, 0.6);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 5]} />
        <MeshDistortMaterial
          ref={matRef}
          color="#9d8cff"
          distort={0.38}
          speed={1.6}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const g = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (!g.current) return;
    g.current.rotation.x += dt * 0.05;
    g.current.rotation.z += dt * 0.03;
  });
  return (
    <group ref={g}>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.008, 8, 128]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 5, Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.006, 8, 128]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[3.0, 0.005, 8, 128]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const r = 3 + Math.random() * 4;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.02;
    ref.current.rotation.x += dt * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.014} color="#c4b5fd" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} color="#a78bfa" />
      <directionalLight position={[-5, -3, -2]} intensity={0.5} color="#67e8f9" />
      <pointLight position={[0, 2, 3]} intensity={1.2} color="#38bdf8" />
      <Particles />
      <Rings />
      <HoloOrb />
    </Canvas>
  );
}
