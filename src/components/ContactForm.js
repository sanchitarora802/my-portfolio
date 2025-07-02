"use client";
import React from "react";
import { Mail, Send } from "lucide-react";
import styled, { useTheme } from "styled-components";

import StyledDiv from "./StyledDiv";
import StyledText from "./StyledText";
import StyledButton from "./StyledButton";
import StyledInput from "./StyledInput";

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  background: ${(props) => props.theme.colors.background.pillBg};
  border: 1px solid ${(props) => props.theme.colors.border.PillBorder};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.colors.white.default};
  resize: vertical;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme.colors.text.textCyan};
  }
`;

const ContactForm = () => {
  const theme = useTheme();

  return (
    <StyledDiv
      $background={theme.colors.background.mainBackground}
      $border={`1px solid ${theme.colors.border.normal}`}
      $borderRadius="1rem"
      $padding={"2rem"}
      $margin={"2rem"}
      $minWidth={"60%"}
      $textAlign="center"
      $zIndex={10}
    >
      <StyledDiv
        $padding={"1rem"}
        $display={"flex"}
        $justifyContent={"center"}
        $flexDirection={"column"}
        $alignItems="center"
        $gap={"20px"}
      >
        <StyledText
          $color={theme.colors.white.default}
          $fontSize="1.875rem"
          $fontWeight="700"
        >
          Get In Touch
        </StyledText>

        <StyledText $color={theme.colors.white.default}>
          {`I'm always open to discussing new projects`}
        </StyledText>
      </StyledDiv>

      <form onSubmit={(e) => e.preventDefault()}>
        <StyledDiv $margin="0 0 1.5rem 0">
          {/* Assuming StyledInput is your enhanced component that accepts these props */}
          <StyledInput label="Your Name" id="name" placeholder="John Doe" />
        </StyledDiv>

        <StyledDiv $margin="0 0 1.5rem 0">
          <StyledInput
            label="Your Email"
            id="email"
            placeholder="you@example.com"
            rightElement={<Mail size={18} />}
          />
        </StyledDiv>

        <StyledDiv $margin="0 0 1.5rem 0">
          <StyledText
            as="label"
            htmlFor="message"
            $display="block"
            $margin="0 0 0.5rem 0"
            $fontSize="0.875rem"
            $fontWeight="500"
            $textAlign="left"
            $color={theme.colors.text.textGrayLight}
          >
            Message
          </StyledText>
          <StyledTextArea id="message" placeholder="Your message..." />
        </StyledDiv>

        <StyledButton
          as="button"
          type="submit"
          $bgColor={theme.colors.hover}
          $border={`1px solid ${theme.colors.white.default}`}
          $color={theme.colors.white.default}
          $padding="0.75rem"
          $borderRadius="9999px"
          $fontWeight="600"
          $hoverBackground="rgba(255, 255, 255, 0.3)"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <Send size={18} />
          <span>Send Message</span>
        </StyledButton>
      </form>
    </StyledDiv>
  );
};

export default ContactForm;
