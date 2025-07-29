import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  background: ${(props) =>
    props.$inputBackground || props.theme.colors.white.default};
  border: 1px solid
    ${(props) => props.$inputBorder || props.theme.colors.border.PillBorder};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: ${(props) => props.$inputColor || props.theme.colors.white.default};
  resize: vertical;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme.colors.text.textGrayLigh};
  }
`;
