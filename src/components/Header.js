"use client";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: transparent;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(75, 85, 99, 0.4);
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

const ContactButton = styled.a`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavContainer>
        <Logo href="#">Your Name</Logo>
        <ContactButton href="#">Contact</ContactButton>
      </NavContainer>
    </HeaderWrapper>
  );
};

export default Header;
