import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function BackgroundParticles() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0">
            <div className="sticky top-0 h-screen w-full">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    className="w-full h-full"
                    options={{
                        fullScreen: {
                            enable: false,
                        },

                        background: {
                            color: "#000000",
                        },

                        fpsLimit: 60,

                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                },

                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },

                                resize: true,
                            },

                            modes: {
                                grab: {
                                    distance: 140,

                                    links: {
                                        opacity: 0.8,
                                    },
                                },

                                push: {
                                    quantity: 2,
                                },
                            },
                        },

                        particles: {
                            number: {
                                value: 60,

                                density: {
                                    enable: true,
                                    area: 900,
                                },
                            },

                            color: {
                                value: "#ffffff",
                            },

                            links: {
                                enable: true,
                                color: "#ffffff",
                                distance: 150,
                                opacity: 0.15,
                                width: 1,
                            },

                            move: {
                                enable: true,
                                speed: 0.8,
                                direction: "none",
                                random: false,
                                straight: false,

                                outModes: {
                                    default: "out",
                                },
                            },

                            opacity: {
                                value: 0.5,
                            },

                            size: {
                                value: { min: 1, max: 3 },
                            },

                            shape: {
                                type: "circle",
                            },
                        },

                        detectRetina: true,
                    }}
                />
            </div>
        </div>
    );
}
