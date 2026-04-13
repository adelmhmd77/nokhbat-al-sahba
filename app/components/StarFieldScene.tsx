'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedStars() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // حركة انسيابية جداً مع الماوس (ناعمة وخفيفة)
    const { x, y } = state.mouse;
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.05, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.05, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. نجوم الخلفية البعيدة - عدد معقول للأداء */}
      <Stars 
        radius={50} 
        depth={50} 
        count={2000} 
        factor={2} 
        saturation={0} 
        fade 
        speed={0.3} 
      />
      
      {/* 2. النجوم الخضراء المتوهجة (Sparkles) */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <Sparkles 
          count={150} 
          scale={[20, 15, 10]} 
          size={2} 
          speed={0.2} 
          opacity={0.4} 
          color="#10b981" 
        />
      </Float>

      {/* 3. نجوم بيضاء خفيفة عشان العمق البصري */}
      <Sparkles 
        count={100} 
        scale={[15, 15, 15]} 
        size={1} 
        speed={0.1} 
        color="white" 
        opacity={0.3}
      />
    </group>
  );
}

export default function StarFieldScene() {
  return (
    <div className="w-full h-full absolute inset-0 bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {/* لون الخلفية السودة */}
        <color attach="background" args={['#020202']} />
        
        {/* إضاءة خفيفة تدي روح للمشهد */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#10b981" />
        
        {/* استدعاء النجوم المتحركة */}
        <AnimatedStars />
      </Canvas>
    </div>
  );
}