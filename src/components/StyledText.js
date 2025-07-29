import styled from "styled-components";

const StyledText = styled.span`
  color: ${(props) => props.$color || props.theme.colors.textPrimary};
  font-size: ${(props) => props.$fontSize || "1rem"};
  font-weight: ${(props) => props.$fontWeight || "400"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
  line-height: ${(props) => props.$lineHeight || "normal"};
  letter-spacing: ${(props) => props.$letterSpacing || "normal"};
  text-transform: ${(props) => props.$textTransform || "none"};
  text-align: ${(props) => props.$textAlign || "left"};
  display: ${(props) => props.$display || "inline"};
  opacity: ${(props) => props.$opacity || 1};
`;

export default StyledText;
