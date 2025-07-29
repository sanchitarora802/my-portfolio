"use client";
import React from "react";
import styled, { useTheme } from "styled-components";
import StyledButton from "./StyledButton";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  backdrop-filter: blur(16px);
  /* padding: 1rem; */
  height: 100%;
  width: 100%;
`;

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
`;

const Header = ({ onClick }) => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <Logo href="#">Your Name</Logo>
      <StyledButton
        $bgColor={theme.colors.border.lightBorder}
        $border={`1px solid ${theme.colors.border.lightBorder}`}
        $color={theme.colors.white.default}
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
