import styled from "styled-components";

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  background: ${({ $bgColor }) => $bgColor};
  border: ${({ $border }) => $border};
  color: ${({ $color }) => $color};
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  transition: ${({ $transition }) =>
    $transition || "background-color 0.2s ease"};
  text-decoration: ${({ $textDecoration }) => $textDecoration || "none"};
  cursor: pointer;

  &:hover {
    background: ${({ $hoverBackground }) => $hoverBackground};
  }
`;

export default StyledButton;
