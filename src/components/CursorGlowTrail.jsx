"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlowTrail = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      const newPos = {
        x: e.clientX,
        y: e.clientY,
      };

      setPosition(newPos);

      setTrail((prev) => [
        newPos,
        ...prev.slice(0, 10),
      ]);
    };

    const handleHover = (e) => {
      const target = e.target;

      const interactive = target.closest(
        "a, button, input, textarea, .interactive"
      );

      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden md:block">

      {/* Glow */}
      <motion.div
        className="fixed rounded-full bg-cyan-400/20 blur-3xl"
        animate={{
          x: position.x - (hovering ? 60 : 40),
          y: position.y - (hovering ? 60 : 40),
          width: hovering ? 120 : 80,
          height: hovering ? 120 : 80,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      />

      {/* Main Cursor */}
      <motion.div
        className="fixed h-4 w-4 rounded-full bg-white"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed rounded-full border border-cyan-300"
        animate={{
          x: position.x - (hovering ? 30 : 24),
          y: position.y - (hovering ? 30 : 24),
          width: hovering ? 60 : 48,
          height: hovering ? 60 : 48,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
      />

      {/* Trail */}
      {trail.map((item, index) => (
        <motion.div
          key={index}
          className="fixed rounded-full bg-cyan-300"
          animate={{
            x: item.x,
            y: item.y,
            opacity: 0.4 - index * 0.03,
          }}
          transition={{
            duration: 0.2,
          }}
          style={{
            width: `${10 - index}px`,
            height: `${10 - index}px`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
};

export default CursorGlowTrail;