"use client";
import React from "react";
import styled, { useTheme } from "styled-components";
import { FloatingElement } from "./FloatingElement";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  /* background: linear-gradient(135deg, hsl(210, 80%, 45%), hsl(240, 70%, 35%)); */
`;

const Background = () => {
  const theme = useTheme();

  return (
    <BackgroundWrapper>
      <FloatingElement
        $bgColor={"#D9D7D7"}
        $width="150px"
        $height="150px"
        $top="10%"
        $left="15%"
        $animationDelay="0s"
        $animationDuration="9s"
        $opacity="0.3"
      />
      <FloatingElement
        $bgColor={theme.colors.border.normal}
        $width="100px"
        $height="100px"
        $top="80%"
        $left="30%"
        $animationDelay="2s"
        $animationDuration="7s"
      />
      <FloatingElement
        $bgColor={theme.colors.border.normal}
        $width="120px"
        $height="120px"
        $top="75%"
        $right="15%"
        $animationDelay="1s"
        $animationDuration="8s"
        $opacity="0.3"
      />
    </BackgroundWrapper>
  );
};

export default Background;
