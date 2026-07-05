'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SacredGeometryBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 1. إعداد المشهد والعدسة السينمائية
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. بناء الشبكة الزخرفية الإسلامية ثلاثية الأبعاد
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({
      color: 0xd4af37,       // لون الذهب العتيق
      shininess: 90,
      specular: 0xffffff,    // لمعان ماسي عند انعكاس الضوء
      wireframe: true,       // تحويل المش إلى خيوط هندسية دقيقة
      transparent: true,
      opacity: 0.18,         // نسبة الشفافية لضمان وضوح الكلمات فوقه
    });

    const segments = 8; 
    const rows = 6;
    const cols = 6;
    const spacing = 2.5;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // شكل توروس هندسي متداخل يعطي إيحاء النجمة والزخرفة الإسلامية
        const geometry = new THREE.TorusGeometry(0.7, 0.15, 4, segments);
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.set(
          (c - cols / 2) * spacing + (r % 2 ? spacing / 2 : 0),
          (r - rows / 2) * spacing,
          -2
        );
        
        mesh.rotation.z = (Math.PI / 4) * (r + c);
        group.add(mesh);
      }
    }
    scene.add(group);

    // 3. الإضاءة الطبقية لإبراز فخامة الذهب والماس
    const ambientLight = new THREE.AmbientLight(0x0a0a0d);
    scene.add(ambientLight);

    const amberLight = new THREE.PointLight(0xf59e0b, 3, 40);
    amberLight.position.set(0, 0, 5);
    scene.add(amberLight);

    const diamondLight = new THREE.PointLight(0x3b82f6, 2, 30);
    diamondLight.position.set(-8, 5, 2);
    scene.add(diamondLight);

    camera.position.z = 6;

    // 4. التفاعل مع حركة الماوس (Parallax)
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0003;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0003;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      group.rotation.z += 0.0005; // دوران تلقائي بطيء ومريح للعين
      group.rotation.x += (mouseY - group.rotation.x) * 0.05;
      group.rotation.y += (mouseX - group.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-10 opacity-70 w-full h-full" 
    />
  );
}