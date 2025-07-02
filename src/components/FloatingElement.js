import styled from "styled-components";

export const FloatingElement = styled.div`
  position: absolute;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 50%;
  animation: floatUpDown 6s ease-in-out infinite;
  z-index: 1;
  opacity: 0.1;
  width: ${({ $width }) => $width || "100px"};
  height: ${({ $height }) => $height || "100px"};
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  animation-delay: ${({ $animationDelay }) => $animationDelay || "0s"};
  animation-duration: ${({ $animationDuration }) => $animationDuration};
`;
