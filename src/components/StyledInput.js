"use client";
import React from "react";
import styled from "styled-components";
import StyledDiv from "./StyledDiv";
import StyledText from "./StyledText";
import { useTheme } from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: ${(props) => (props.hasRightElement ? "2.5rem" : "1rem")};
  border: 1px solid
    ${(props) => props.$inputBorder || props.theme.colors.border.PillBorder};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.$inputColor || props.theme.colors.white.default};
  background: ${(props) =>
    props.$inputBackground || props.theme.colors.text.textGrayLigh};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme.colors.text.textGrayLigh};
  }
`;

const StyledInput = ({ label, rightElement, width, ...props }) => {
  const theme = useTheme();
  return (
    <StyledDiv
      $width={width}
      $position="relative"
      style={{ fontFamily: "sans-serif" }}
    >
      {label && (
        <StyledText
          as="label"
          htmlFor={props.id}
          $display="block"
          $margin="0 0 0.5rem 0"
          $fontSize="0.875rem"
          $fontWeight="500"
          $color={theme.colors.text.textGrayLight}
          $textAlign="left"
        >
          {label}
        </StyledText>
      )}
      <StyledDiv $position="relative" $display="flex" $alignItems="center">
        <Input hasRightElement={!!rightElement} {...props} />
        {rightElement && (
          <StyledDiv
            $position="absolute"
            $right="0.75rem"
            $height="100%"
            $display="flex"
            $alignItems="center"
            $justifyContent="center"
            style={{ color: theme.colors.text.textGrayDark }}
          >
            {rightElement}
          </StyledDiv>
        )}
      </StyledDiv>
    </StyledDiv>
  );
};

export default StyledInput;
