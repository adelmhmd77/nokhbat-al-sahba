'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function OptimizedRandomWires() {
  const groupRef = useRef<THREE.Group>(null!);
  const materialRef = useRef<THREE.LineBasicMaterial>(null!);
  const count = 50; // قللنا العدد لـ 50 (شكل بصري رائع بدون زحمة وأداء أفضل)

  // تجميع كل النقاط في Buffer واحد كبير
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    let seed = 0;

    for (let i = 0; i < count; i++) {
      // نقطة بداية ونهاية عشوائية
      const start = new THREE.Vector3(
        (seededRandom(seed++) - 0.5) * 8,
        (seededRandom(seed++) - 0.5) * 8,
        (seededRandom(seed++) - 0.5) * 4
      );
      const end = new THREE.Vector3(
        (seededRandom(seed++) - 0.5) * 8,
        (seededRandom(seed++) - 0.5) * 8,
        (seededRandom(seed++) - 0.5) * 4
      );

      // نقطة انحناء ناعمة في المنتصف
      const mid = new THREE.Vector3(
        (start.x + end.x) / 2 + (seededRandom(seed++) - 0.5) * 1.5,
        (start.y + end.y) / 2 + (seededRandom(seed++) - 0.5) * 1.5,
        (start.z + end.z) / 2 + (seededRandom(seed++) - 0.5) * 1.5
      );

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      // قللنا التقسيمات لـ 12 نقطة بدلاً من 20 (المنحنى هيفضل ناعم جداً بس بنصف الاستهلاك)
      const curvePoints = curve.getPoints(12); 

      // تجميع النقاط لعمل مسار متصل لكل خيط
      for (let j = 0; j < curvePoints.length - 1; j++) {
        points.push(curvePoints[j], curvePoints[j + 1]);
      }
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // تأرجح المجموعة كلها ببطء شديد ونعومة
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.15;
      groupRef.current.rotation.y = Math.cos(t * 0.05) * 0.15;
    }

    // جعل الخيوط كلها تنبض معاً بـ Draw Call واحدة سريعة جداً للماتيريال المشتركة
    if (materialRef.current) {
      materialRef.current.opacity = 0.15 + Math.abs(Math.sin(t * 0.8)) * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {/* رسم كل الخيوط كـ Segments دفعة واحدة */}
      <lineSegments geometry={geometry}>
        <lineBasicMaterial
          ref={materialRef}
          color="#d4af37"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false} // عشان يمنع أي مشاكل مع الـ Render ويسرع الأداء
        />
      </lineSegments>
    </group>
  );
}

export default function GoldenRandomNexus() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: false, // قفلنا الـ Antialias لأنه بياكل كارت الشاشة وبدون داعي مع الخيوط الرفيعة
          powerPreference: "high-performance" // إجبار المتصفح على استخدام أعلى أداء متوفر
        }}
      >
        <OptimizedRandomWires />
      </Canvas>
    </div>
  );
}