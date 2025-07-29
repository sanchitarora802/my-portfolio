import styled from "styled-components";

const StyledDiv = styled.div`
  display: ${(props) => props.$display || "block"};
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent};
  flex-wrap: ${(props) => props.$flexWrap};
  color: ${(props) => props.$color};
  align-items: ${(props) => props.$alignItems};
  gap: ${(props) => props.$gap};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  min-height: ${(props) => props.$minHeight};
  max-width: ${(props) => props.$maxWidth};
  max-height: ${(props) => props.$maxHeight};
  min-width: ${(props) => props.$minWidth};
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
  background: ${(props) => props.$background};
  background-image: ${(props) => props.$backgroundImage};
  border: ${(props) => props.$border};
  border-bottom: ${(props) => props.$borderBottom};
  border-radius: ${(props) => props.$borderRadius};
  box-shadow: ${(props) => props.$boxShadow};
  text-align: ${(props) => props.$textAlign};
  position: ${(props) => props.$position};
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  z-index: ${(props) => props.$zIndex};
  overflow: ${(props) => props.$overflow};
  scroll-snap-align: ${(props) => props.$scrollSnapAlign};
  backdrop-filter: ${(props) => props.$backdropFilter};
  opacity: ${(props) => props.$opacity || 1};

  &:hover {
    border: ${(props) => props.$hoverBorder};
  }
`;

export default StyledDiv;
