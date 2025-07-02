import styled from "styled-components";

const StyledPill = styled.span`
  background-color: ${(props) =>
    props.$backgroundColor || props.theme.colors.skillPillBg};
  color: ${(props) => props.$color || props.theme.colors.textGrayLigh};
  font-size: ${(props) => props.$fontSize || "0.875rem"};
  font-weight: ${(props) => props.$fontWeight || 500};
  padding: ${(props) => props.$padding || "0.375rem 1rem"};
  border-radius: ${(props) => props.$borderRadius || "9999px"};
  border: ${(props) =>
    props.$border || `1px solid ${props.theme.colors.border.PillBorder}`};
  cursor: ${(props) => props.$cursor || "default"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.$hoverBg || "#374151"};
    border-color: ${(props) => props.$hoverBorder || "#6b7280"};
  }
`;

export default StyledPill;
