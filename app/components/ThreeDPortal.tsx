'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// تعريف الـ Props عشان TypeScript ميزعلش
interface PortalProps {
  name: string;
  image: string;
}

function Scene({ imagePath }: { imagePath: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(imagePath);

  useFrame((state) => {
    const { x, y } = state.mouse;
    if (meshRef.current) {
      // حركة ناعمة تتبع الماوس
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.4, 0.1);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.4, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <planeGeometry args={[3.5, 5]} />
        <meshBasicMaterial map={texture} transparent={true} toneMapped={false} />
      </mesh>
    </Float>
  );
}

export default function ThreeDPortal({ name, image }: PortalProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[350px] h-[500px] cursor-pointer">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={<Html center className="text-amber-500">جاري التحميل...</Html>}>
            <Scene imagePath={image} />
          </Suspense>
        </Canvas>
      </div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-2xl font-bold text-amber-500 font-arabic"
      >
        {name}
      </motion.h2>
    </div>
  );
}