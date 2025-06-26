"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  transition: background 0.4s ease-out;
`;

const FloatingElement = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  animation: floatUpDown 6s ease-in-out infinite;
  z-index: 1;
`;

const Background = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const mouseX = clientX / innerWidth;
        const mouseY = clientY / innerHeight;

        const hue1 = 180 + mouseY * 20;
        const lightness1 = 45 + mouseX * 10;
        const hue2 = 190 + mouseX * 20;
        const lightness2 = 40 + mouseY * 10;

        backgroundRef.current.style.background = `linear-gradient(${
          135 + mouseX * 30
        }deg, 
                    hsl(${hue1}, 80%, ${lightness1}%), 
                    hsl(${hue2}, 70%, ${lightness2}%))`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <BackgroundWrapper ref={backgroundRef}>
      <FloatingElement
        style={{
          width: "150px",
          height: "150px",
          top: "10%",
          left: "15%",
          animationDelay: "0s",
          animationDuration: "9s",
        }}
      />
      <FloatingElement
        style={{
          width: "100px",
          height: "100px",
          top: "80%",
          left: "30%",
          animationDelay: "2s",
          animationDuration: "7s",
        }}
      />
      <FloatingElement
        style={{
          width: "120px",
          height: "120px",
          top: "75%",
          right: "15%",
          animationDelay: "1s",
          animationDuration: "8s",
        }}
      />
    </BackgroundWrapper>
  );
};

export default Background;
