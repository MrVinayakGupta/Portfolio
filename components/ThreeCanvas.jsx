'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ theme }) {
  const containerRef = useRef(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Geometry & Particles
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 40;
      positions[i + 2] = (Math.random() - 0.5) * 30;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Color according to theme
    const particleColor = isDark ? 0x38bdf8 : 0xd97706;
    const lineColor = isDark ? 0x6366f1 : 0xf59e0b;

    const pMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: isDark ? 1.2 : 1.4,
      transparent: true,
      opacity: isDark ? 0.75 : 0.65,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    // Line mesh for dynamic interconnected constellation
    const lineMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: isDark ? 0.15 : 0.12,
      blending: THREE.AdditiveBlending
    });

    let linesMesh = null;

    // 3. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / container.clientWidth - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / container.clientHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 4. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // 5. Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera dampening
      targetX += (mouseX * 4 - targetX) * 0.04;
      targetY += (mouseY * 4 - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(scene.position);

      // Rotate particle cloud gently
      particleSystem.rotation.y += 0.0015;
      particleSystem.rotation.x += 0.0008;

      const pos = particleSystem.geometry.attributes.position.array;
      const connectedSegments = [];

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += velocities[i].x;
        pos[i3 + 1] += velocities[i].y;
        pos[i3 + 2] += velocities[i].z;

        // Boundary bounce
        if (pos[i3] < -25 || pos[i3] > 25) velocities[i].x *= -1;
        if (pos[i3 + 1] < -20 || pos[i3 + 1] > 20) velocities[i].y *= -1;
        if (pos[i3 + 2] < -15 || pos[i3 + 2] > 15) velocities[i].z *= -1;

        // Connect nearby points
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = pos[i3] - pos[j3];
          const dy = pos[i3 + 1] - pos[j3 + 1];
          const dz = pos[i3 + 2] - pos[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 7.5) {
            connectedSegments.push(
              pos[i3], pos[i3 + 1], pos[i3 + 2],
              pos[j3], pos[j3 + 1], pos[j3 + 2]
            );
          }
        }
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Recreate line segments geometry
      if (linesMesh) scene.remove(linesMesh);
      if (connectedSegments.length > 0) {
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(connectedSegments, 3));
        linesMesh = new THREE.LineSegments(lineGeo, lineMaterial);
        linesMesh.rotation.y = particleSystem.rotation.y;
        linesMesh.rotation.x = particleSystem.rotation.x;
        scene.add(linesMesh);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 6. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
      geometry.dispose();
      pMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [theme, isDark]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    />
  );
}
