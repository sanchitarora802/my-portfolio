"use client";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import StyledButton from "./StyledButton";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ isAtTop, theme }) => (isAtTop ? "transparent" : "#99B2FF")};
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

const Header = ({ onClick }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrollY is 0, otherwise false
      setIsAtTop(window.scrollY === 0);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper isAtTop={isAtTop}>
      <Logo isAtTop={isAtTop} href="#">
        Your Name
      </Logo>
      <StyledButton
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
        onClick={onClick}
      >
        Get in touch
      </StyledButton>
    </HeaderWrapper>
  );
};

export default Header;
