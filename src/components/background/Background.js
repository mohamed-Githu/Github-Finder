import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const ParticlesBackground = styled(Particles)`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  left: 0;
`;

const Background = () => {
  return (
    <div>
      <ParticlesBackground
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: false,
                value_area: 1000,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 2,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 80,
              color: "#ffffff",
              opacity: 0.4,
              width: 0.5,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: true,
                rotateX: 5000,
                rotateY: 1200,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Background;
