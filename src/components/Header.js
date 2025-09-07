"use client";

import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import StyledButton from "./StyledButton";
import ContactForm from "./ContactForm";
import StyledDiv from "./StyledDiv";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ isAtTop, theme }) => (isAtTop ? "transparent" : "#D9D7D7")};
  backdrop-filter: blur(16px);
  padding: 1rem;
  width: 100%;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.colors.background.pillBg}`};
  position: fixed;
  z-index: 99999;
`;

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ isAtTop, theme }) =>
    isAtTop ? theme.colors.white.default : theme.colors.text.textBlack};
  text-decoration: none;
`;

const Header = ({}) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const theme = useTheme();

  // Refs for both the form container AND the button
  const contactForm = useRef(null);
  const contactButton = useRef(null); // <-- 1. New ref for the button

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight =
        document?.documentElement?.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrollY / pageHeight) * 100;
      if (scrolledPercent < 10) {
        setIsAtTop(true);
        setShowForm(false);
      } else {
        setIsAtTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contactForm.current &&
        !contactForm.current.contains(event.target) &&
        contactButton.current &&
        !contactButton.current.contains(event.target)
      ) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  return (
    <HeaderWrapper isAtTop={isAtTop}>
      <Logo isAtTop={isAtTop} href="#">
        Your Name
      </Logo>
      <StyledButton
        ref={contactButton}
        $bgColor={theme.colors.border.lightBorder}
        $border={
          isAtTop
            ? `1px solid ${theme.colors.border.lightBorder}`
            : `1px solid ${theme.colors.border.PillBorder}`
        }
        $color={
          isAtTop ? theme.colors.white.default : theme.colors.text.textBlack
        }
        $padding={"0.5rem 1rem"}
        $borderRadius={"9999px"}
        $fontSize={"0.875rem"}
        $fontWeight={500}
        $hoverBackground={theme.colors.hover}
        onClick={() => setShowForm((prev) => !prev)}
      >
        Get in touch
      </StyledButton>

      <StyledDiv
        ref={contactForm}
        $position={"absolute"}
        $zIndex={9999}
        $top={"90%"}
        $left={"55%"}
        $minWidth={"40%"}
      >
        {showForm && <ContactForm />}
      </StyledDiv>
    </HeaderWrapper>
  );
};

export default Header;
