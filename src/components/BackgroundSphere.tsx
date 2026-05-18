import React, { useEffect, useRef } from 'react';

const BackgroundSphere = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // optimize for opaque background
    let animationFrameId;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }

    resizeCanvas();

    let particles = [];
    let rippleEffects = [];

    const mouse = {
      x: null,
      y: null,
      radius: 180 * (window.devicePixelRatio || 1)
    };

    const handleMouseMove = (e) => {
      const dpr = window.devicePixelRatio || 1;
      mouse.x = e.clientX * dpr;
      mouse.y = e.clientY * dpr;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (e) => {
      const dpr = window.devicePixelRatio || 1;
      rippleEffects.push({
        x: e.clientX * dpr,
        y: e.clientY * dpr,
        radius: 0,
        alpha: 1
      });
    };

    const handleResize = () => {
      resizeCanvas();
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor() {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        
        let radiusOffset = 0;
        if (Math.random() > 0.8) {
          radiusOffset = (Math.random() - 0.5) * 200; // inner scattered
        } else {
          radiusOffset = (Math.random() - 0.5) * 20;  // tight shell
        }

        const baseRadius = 0.35;
        this.phi = phi;
        this.theta = theta;
        this.radiusOffset = radiusOffset;
        this.baseRadiusRatio = baseRadius;

        // Color based on initial X position to match the gradient image
        // Left is purple, Right is blue
        const xNormal = Math.sin(phi) * Math.cos(theta);
        const ratio = (xNormal + 1) / 2;

        const r = Math.floor(255 * (1 - ratio));
        const g = Math.floor(100 * ratio);
        const b = 255;
        
        this.color = `rgba(${r}, ${g}, ${b}, ${Math.random() * 0.6 + 0.4})`;
        this.size = Math.random() * 1.5 + 0.5;
        
        this.rotSpeed = 0.001 + Math.random() * 0.0005;
      }

      update() {
        this.theta += this.rotSpeed;

        const sphereRadius = Math.min(canvas.width, canvas.height) * this.baseRadiusRatio;
        const r = sphereRadius + this.radiusOffset;

        const x3d = r * Math.sin(this.phi) * Math.cos(this.theta);
        const y3d = r * Math.sin(this.phi) * Math.sin(this.theta);
        const z3d = r * Math.cos(this.phi);

        const fov = 1000;
        const viewerDist = 1000;
        const scale = fov / (viewerDist + z3d);

        const targetX = canvas.width / 2 + x3d * scale;
        const targetY = canvas.height / 2 + y3d * scale;

        if (this.x === undefined || this.y === undefined) {
          this.x = targetX;
          this.y = targetY;
        }

        this.currentSize = Math.max(0.1, this.size * scale);

        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            let force = (mouse.radius - dist) / mouse.radius;
            // Push particles away smoothly
            this.x -= dx * force * 0.15;
            this.y -= dy * force * 0.15;
          }
        }

        // Smoothly return to the target position (easing)
        this.x += (targetX - this.x) * 0.08;
        this.y += (targetY - this.y) * 0.08;

        this.draw();
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      const totalParticles = 4000; // Optimizing down slightly to ensure no freezing
      for (let i = 0; i < totalParticles; i++) {
        particles.push(new Particle());
      }
    }

    function drawRipples() {
      rippleEffects.forEach((ripple, index) => {
        ripple.radius += 4;
        ripple.alpha -= 0.015;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(150,100,255,${ripple.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        if (ripple.alpha <= 0) {
          rippleEffects.splice(index, 1);
        }
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = "lighter";

      particles.forEach((particle) => {
        particle.update();
      });

      ctx.globalCompositeOperation = "source-over";

      drawRipples();

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default BackgroundSphere;
