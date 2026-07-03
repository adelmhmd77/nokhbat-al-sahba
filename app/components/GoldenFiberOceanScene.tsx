'use client';
/** @jsxImportSource @react-three/fiber */

import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Component رسم الخيط الواحد
function FiberLine({ position, color, waveOffset }: { position: [number, number, number], color: string, waveOffset: number }) {
  const lineRef = useRef<THREE.Line>(null!);
  
  // إنشاء نقاط الخيط (100 نقطة)
  const points = useMemo(() => {
    const pts = [];
    const segments = 100;
    for (let i = 0; i < segments; i++) {
      pts.push(new THREE.Vector3((i / segments - 0.5) * 12, 0, 0));
    }
    return pts;
  }, []);

  // إنشاء الـ Geometry مرة واحدة
  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  // تحديث تموج الخيط في كل فريم
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const posAttribute = lineRef.current.geometry.getAttribute('position') as THREE.BufferAttribute;
    
    for (let i = 0; i < posAttribute.count; i++) {
      const x = posAttribute.getX(i);
      // معادلة تموج ناعمة جداً
      const y = Math.sin(time * 0.5 + x * 1.2 + waveOffset) * 0.25;
      posAttribute.setY(i, y);
    }
    posAttribute.needsUpdate = true;
  });

  return (
    <line ref={lineRef} geometry={geometry} position={position}>
      <lineBasicMaterial color={color} toneMapped={false} />
    </line>
  );
}

// تجميع كل الخيوط (المحيط)
function FiberOcean() {
  const [fibers] = useState(() => {
    const temp = [];
    for (let i = 0; i < 120; i++) {
      const position: [number, number, number] = [
        0,
        (Math.random() - 0.5) * 8, // مبعثر بالطول
        (Math.random() - 0.5) * 4  // مبعثر في العمق
      ];
      // لون ذهبي متدرج
      const color = "#d4af37"; 
      const waveOffset = Math.random() * Math.PI * 2;
      temp.push({ position, color, waveOffset });
    }
    return temp;
  });

  return (
    <group>
      {fibers.map((f, i) => (
        <FiberLine key={i} position={f.position} color={f.color} waveOffset={f.waveOffset} />
      ))}
    </group>
  );
}

// الـ Export الأساسي
export default function GoldenFiberOceanScene() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <FiberOcean />
      </Canvas>
    </div>
  );
}