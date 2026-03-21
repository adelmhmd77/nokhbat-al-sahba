'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Scene({ imagePath }: { imagePath: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  // تحميل الصورة
  const texture = useTexture(imagePath);

  useFrame((state) => {
    const { x, y } = state.mouse;
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.4, 0.1);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.4, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
  <planeGeometry args={[3.5, 5]} />
  {/* meshBasicMaterial بتعرض الصورة بوضوح عالي */}
  <meshBasicMaterial map={texture} transparent={true} toneMapped={false} />
</mesh>
    </Float>
  );
}

export default function SahabaCard({ name, image }: { name: string; image: string }) {
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-2xl font-bold text-amber-500"
      >
        {name}
      </motion.h2>
    </div>
  );
}