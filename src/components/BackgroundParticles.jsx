import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container) => {
      // console.log(container);
    },
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#030008]">
      {/* Deep ambient glows to maintain the UI's cinematic feel */}
      <div className="absolute left-0 top-1/2 h-[800px] w-[800px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[150px]" />
      <div className="absolute right-0 top-1/2 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      <Particles
        id="backgroundParticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0"
        options={{
          fullScreen: {
            enable: false,
          },

          background: {
            color: "transparent", // Use transparent to let the glows and dark background show
          },

          fpsLimit: 60,

          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },

              onHover: {
                enable: true,
                mode: "repulse",
              },

              resize: true,
            },

            modes: {
              push: {
                quantity: 4,
              },

              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },

          particles: {
            color: {
              // Set the coloring based on the UI (Neon Purple, Blue, Pink, Cyan)
              value: ["#00f3ff", "#ff00e5", "#9d00ff", "#a855f7", "#3b82f6"],
            },

            links: {
              color: "#a855f7", // Subtle purple connecting lines
              distance: 150,
              enable: true,
              opacity: 0.25,
              width: 1,
            },

            collisions: {
              enable: false,
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },

            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },

            opacity: {
              value: 0.6,
            },

            shape: {
              type: "circle",
            },

            size: {
              value: {
                min: 1.5,
                max: 3.5,
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
