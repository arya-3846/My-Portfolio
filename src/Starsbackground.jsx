import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarfieldBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
      options={{
        fullScreen: {
          enable: true,
        },

        background: {
          color: {
            value:  "#060816",
          },
        },

        fpsLimit: 144,

        particles: {
          number: {
            value:400,
            density: {
              enable: true,
              area: 1000,
            },
          },

          color: {
            value: ["#00BFFF"],
          },

          shape: {
            type: "circle",
          },

          size: {
            value: {
              min: 1.3,
              max: 1.5,
            },

            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },

          opacity: {
            value: {
              min: 0.2,
              max: 1,
            },

            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0.2,
              sync: false,
            },
          },

          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,

            outModes: {
              default: "out",
            },
          },

          twinkle: {
            particles: {
              enable: true,
              frequency: 7,
              opacity: 100,
            },
          },

          links: {
            enable: false,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              
            },
          },

          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.15,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}