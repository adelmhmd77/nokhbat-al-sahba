'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function RandomWires() {
  const linesRef = useRef<THREE.Group>(null!);
  const count = 80; // عدد الخيوط العشوائية

  // إنشاء مسارات عشوائية تماماً
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // نختار نقطة بداية ونقطة نهاية عشوائية في فضاء 3D واسع
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      );

      // عمل منحنى (Curve) بين النقطتين عشان الخيط ميبقاش حاد
      const mid = new THREE.Vector3(
        (start.x + end.x) / 2 + (Math.random() - 0.5) * 2,
        (start.y + end.y) / 2 + (Math.random() - 0.5) * 2,
        (start.z + end.z) / 2 + (Math.random() - 0.5) * 2
      );

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(20);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      temp.push({
        geometry,
        speed: Math.random() * 0.2 + 0.05,
        offset: Math.random() * Math.PI
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // تحريك المجموعة كلها حركة "تأرجح" خفيفة
    linesRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    linesRef.current.rotation.y = Math.cos(t * 0.1) * 0.2;

    // جعل الخيوط تنبض بالنور بشكل عشوائي
    linesRef.current.children.forEach((child: any, i) => {
      child.material.opacity = 0.1 + Math.abs(Math.sin(t * lines[i].speed + lines[i].offset)) * 0.4;
    });
  });

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => (
        <line key={i} geometry={line.geometry}>
          <lineBasicMaterial 
            color="#d4af37" 
            transparent 
            opacity={0.2} 
            linewidth={1} 
            blending={THREE.AdditiveBlending} 
          />
        </line>
      ))}
    </group>
  );
}

export default function GoldenRandomNexus() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <RandomWires />
      </Canvas>
    </div>
  );
}