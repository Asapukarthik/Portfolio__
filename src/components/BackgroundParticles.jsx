import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle cinematic ambient lighting (Cyberpunk/Tech feel) */}
      <div className="absolute left-1/4 top-1/4 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-[800px] w-[800px] translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-900/10 blur-[150px]" />

      <Particles
        id="neuralNetworkParticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // Creates connections to the mouse like a neural net
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 250,
                links: { opacity: 0.4 },
              },
            },
          },
          particles: {
            color: { value: "#ffffff" }, // Tiny glowing white particles
            links: {
              color: "#ffffff",
              distance: 160,
              enable: true,
              opacity: 0.35, // Increased from 0.15 for better visibility
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.08, // Increased for visible polygon structures
              },
            },
            collisions: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.6, // Float smoothly with soft motion
              straight: false,
            },
            number: {
              density: { enable: false }, // Must be false for tall containers to prevent density-scaling crash
              value: 450, // Hard limit of 450 particles across the entire height
            },
            opacity: {
              value: { min: 0.1, max: 0.8 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 2.5 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default BackgroundParticles;
