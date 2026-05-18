import React, { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ParticleNetwork = ({ count = 120 }) => {
  const { viewport, mouse } = useThree();

  const pointsRef = useRef();
  const linesRef = useRef();

  // Create particles
  const particles = useMemo(() => {
    const temp = [];

    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width * 1.6,
          (Math.random() - 0.5) * viewport.height * 1.6,
          0
        ),

        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.0015,
          (Math.random() - 0.5) * 0.0015,
          0
        ),
      });
    }

    return temp;
  }, [count, viewport]);

  // Points
  const pointsPositions = useMemo(
    () => new Float32Array(count * 3),
    [count]
  );

  // Lines
  const maxLines = 2200;

  const linesPositions = useMemo(
    () => new Float32Array(maxLines * 2 * 3),
    [maxLines]
  );

  const linesColors = useMemo(
    () => new Float32Array(maxLines * 2 * 4),
    [maxLines]
  );

  useFrame(() => {
    const { width, height } = viewport;

    // Mouse world position
    const mousePos = new THREE.Vector3(
      (mouse.x * width) / 2,
      (mouse.y * height) / 2,
      0
    );

    let lineIdx = 0;

    particles.forEach((p, i) => {
      // =========================
      // Smooth Mouse Attraction
      // =========================

      const distanceToMouse = p.position.distanceTo(mousePos);

      if (distanceToMouse < 2.2) {
        // Attraction instead of hard repulsion
        const direction = mousePos
          .clone()
          .sub(p.position)
          .normalize();

        const strength = (2.2 - distanceToMouse) * 0.0008;

        p.velocity.add(direction.multiplyScalar(strength));
      }

      // =========================
      // Slow Floating Motion
      // =========================

      p.position.add(p.velocity);

      // Smooth damping
      p.velocity.multiplyScalar(0.992);

      // Limit max speed
      p.velocity.clampLength(0, 0.008);

      // =========================
      // Screen Bounce
      // =========================

      if (Math.abs(p.position.x) > width / 2) {
        p.velocity.x *= -1;
      }

      if (Math.abs(p.position.y) > height / 2) {
        p.velocity.y *= -1;
      }

      // =========================
      // Update Point Positions
      // =========================

      pointsPositions[i * 3] = p.position.x;
      pointsPositions[i * 3 + 1] = p.position.y;
      pointsPositions[i * 3 + 2] = 0;

      // =========================
      // Draw Connection Lines
      // =========================

      for (let j = i + 1; j < count; j++) {
        if (lineIdx >= maxLines) break;

        const p2 = particles[j];

        const distance = p.position.distanceTo(p2.position);

        if (distance < 1.6) {
          // Line positions
          linesPositions[lineIdx * 6] = p.position.x;
          linesPositions[lineIdx * 6 + 1] = p.position.y;
          linesPositions[lineIdx * 6 + 2] = 0;

          linesPositions[lineIdx * 6 + 3] = p2.position.x;
          linesPositions[lineIdx * 6 + 4] = p2.position.y;
          linesPositions[lineIdx * 6 + 5] = 0;

          // Smooth fade opacity
          const opacity = (1 - distance / 1.6) * 0.22;

          for (let k = 0; k < 2; k++) {
            linesColors[lineIdx * 8 + k * 4] = 1;
            linesColors[lineIdx * 8 + k * 4 + 1] = 1;
            linesColors[lineIdx * 8 + k * 4 + 2] = 1;
            linesColors[lineIdx * 8 + k * 4 + 3] = opacity;
          }

          lineIdx++;
        }
      }

      // =========================
      // Mouse Connection Lines
      // =========================

      if (distanceToMouse < 1.8 && lineIdx < maxLines) {
        linesPositions[lineIdx * 6] = p.position.x;
        linesPositions[lineIdx * 6 + 1] = p.position.y;
        linesPositions[lineIdx * 6 + 2] = 0;

        linesPositions[lineIdx * 6 + 3] = mousePos.x;
        linesPositions[lineIdx * 6 + 4] = mousePos.y;
        linesPositions[lineIdx * 6 + 5] = 0;

        const opacity = (1 - distanceToMouse / 1.8) * 0.35;

        for (let k = 0; k < 2; k++) {
          linesColors[lineIdx * 8 + k * 4] = 1;
          linesColors[lineIdx * 8 + k * 4 + 1] = 1;
          linesColors[lineIdx * 8 + k * 4 + 2] = 1;
          linesColors[lineIdx * 8 + k * 4 + 3] = opacity;
        }

        lineIdx++;
      }
    });

    // Update buffers
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;

      linesRef.current.geometry.attributes.color.needsUpdate = true;

      linesRef.current.geometry.setDrawRange(0, lineIdx * 2);
    }
  });

  return (
    <group>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={pointsPositions}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.045}
          color="#ffffff"
          transparent
          opacity={0.75}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines * 2}
            array={linesPositions}
            itemSize={3}
          />

          <bufferAttribute
            attach="attributes-color"
            count={maxLines * 2}
            array={linesColors}
            itemSize={4}
          />
        </bufferGeometry>

        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
};

export default ParticleNetwork;