"use client";
import React from "react";
import styled, { useTheme } from "styled-components";
import { ContactButton, StylledButton } from "./Button";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: transparent;
  backdrop-filter: blur(16px);
  /* border-bottom: ${({ borderBottom }) => borderBottom}; */
`;

const NavContainer = styled.nav`
  width: 100%;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
`;

const Header = () => {
  const theme = useTheme();
  return (
    <HeaderWrapper>
      <NavContainer>
        <Logo href="#">Your Name</Logo>
        <StylledButton
          bgColor={theme.colors.border.lightBorder}
          border={`1px solid ${theme.colors.border.lightBorder}`}
          color={theme.colors.white.default}
          padding={"0.5rem 1rem"}
          borderRadius={"9999px"}
          fontSize={"0.875rem"}
          fontWeight={500}
          transition={"background-color 0.2s ease-in-out"}
          textDecoration={"none"}
          hoverBackground={theme.colors.hover}
        >
          Contact
        </StylledButton>
      </NavContainer>
    </HeaderWrapper>
  );
};

export default Header;
