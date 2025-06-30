import styled from "styled-components";

export const StyledButton = styled.a`
  background: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  transition: ${({ transition }) => transition};
  text-decoration: ${({ textDecoration }) => textDecoration};
  cursor: pointer;

  &:hover {
    background: ${({ hoverBackground }) => hoverBackground};
  }
`;
