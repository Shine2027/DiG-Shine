"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 460;

    const camera = new THREE.PerspectiveCamera(
      45,
      width / (height || 1),
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Central Core: High-Tech Icosahedron Wireframe
    const coreGeometry = new THREE.IcosahedronGeometry(4.2, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x00c8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    worldGroup.add(coreMesh);

    // 2. Inner Glowing Nucleus (Green leaf inspired)
    const nucleusGeometry = new THREE.IcosahedronGeometry(2.2, 1);
    const nucleusMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    worldGroup.add(nucleusMesh);

    // 3. Orbiting Rings
    const ringGeo1 = new THREE.TorusGeometry(6.2, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    worldGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(7.5, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x007bff,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    worldGroup.add(ring2);

    // 4. Floating Particles Constellation
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00c8ff); // Electric Blue
    const color2 = new THREE.Color(0x10b981); // Emerald Green
    const color3 = new THREE.Color(0x007bff); // Royal Blue

    for (let i = 0; i < particleCount; i++) {
      const radius = 5 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    worldGroup.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Track visibility: pause animation when canvas is scrolled out of viewport
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (isVisible) {
        const elapsedTime = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          // Smooth camera parallax
          mouseX += (targetX - mouseX) * 0.05;
          mouseY += (targetY - mouseY) * 0.05;
          worldGroup.rotation.y = mouseX * 0.8 + elapsedTime * 0.12;
          worldGroup.rotation.x = -mouseY * 0.8;

          // Rotate sub-elements
          coreMesh.rotation.y = elapsedTime * 0.25;
          coreMesh.rotation.x = elapsedTime * 0.15;
          nucleusMesh.rotation.y = -elapsedTime * 0.4;
          nucleusMesh.rotation.z = elapsedTime * 0.2;

          ring1.rotation.z = elapsedTime * 0.2;
          ring2.rotation.x = elapsedTime * 0.15;

          particleSystem.rotation.y = -elapsedTime * 0.08;
        }

        renderer.render(scene, camera);
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Render initial frame or start loop
    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      nucleusGeometry.dispose();
      nucleusMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[580px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Floating Holographic Dashboard Cards */}
      <div className="relative z-10 w-full h-full pointer-events-none flex flex-col justify-between p-4">
        {/* Top Floating Badge: AI Intelligence */}
        <div className="self-start glass-panel rounded-2xl p-4 border border-[#00C8FF]/30 shadow-glow-blue max-w-[240px] pointer-events-auto transform hover:scale-105 transition-all duration-300 animate-float-slow">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00C8FF]/15 border border-[#00C8FF]/40 flex items-center justify-center text-[#00C8FF]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C8FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F0FF]"></span>
              </span>
            </div>
            <div>
              <p className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">AI AGENT ACTIVE</p>
              <h4 className="text-xs font-semibold text-white">40k+ Knowledge Nodes</h4>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#94A3B8]">
            <span>Latency</span>
            <span className="text-[#10B981] font-mono font-bold">12ms · Real-time</span>
          </div>
        </div>

        {/* Center-Right Floating Badge: Automation Pipeline */}
        <div className="self-end glass-panel rounded-2xl p-4 border border-[#10B981]/30 shadow-glow-green max-w-[260px] pointer-events-auto transform hover:scale-105 transition-all duration-300 mt-16 sm:mt-8">
          <div className="flex items-center justify-between">
            <span className="badge-glow !text-[#10B981] !border-[#10B981]/40 !bg-[#10B981]/10">
              Zero-Touch CRM
            </span>
            <span className="text-[11px] font-mono text-[#94A3B8]">n8n / Make</span>
          </div>
          <p className="text-xs font-semibold text-white mt-2">Lead Sync & Instant WhatsApp Trigger</p>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00C8FF] to-[#10B981] w-[88%]" />
            </div>
            <span className="text-[10px] font-mono text-[#00C8FF]">88%</span>
          </div>
        </div>

        {/* Bottom Floating Badge: Performance Marketing Dashboard */}
        <div className="self-center sm:self-start glass-panel rounded-2xl p-4 border border-[#007BFF]/30 shadow-glow-card max-w-[280px] pointer-events-auto transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C8FF]/20 to-[#007BFF]/20 border border-[#00C8FF]/30 flex items-center justify-center text-[#00C8FF] font-bold text-sm">
              4.8x
            </div>
            <div>
              <p className="text-[11px] font-mono text-[#94A3B8] uppercase">BLENDED ROAS</p>
              <h4 className="text-sm font-semibold text-white">Performance Marketing</h4>
            </div>
          </div>
          <div className="mt-2 text-[11px] text-[#94A3B8] flex items-center gap-1">
            <span className="text-[#10B981] font-semibold">↑ +340%</span>
            <span>pipeline velocity in 60 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
