import styled from "styled-components";

export const CardWrapper = styled.main`
  background: ${(props) => props.background};
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid ${(props) => props.border};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  z-index: ${(props) => props.zIndex};
`;
