"use client"; // This component uses styled-components, which is a client-side library.

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const theme = {
  colors: {
    background: "#111827", // The card's main background
    textPrimary: "#FFFFFF",
    textSecondary: "#D1D5DB", // gray-300
    textMuted: "#9CA3AF", // gray-400
    accent: "#67E8F9", // A light cyan
    border: "rgba(255, 255, 255, 0.1)",
    skillPillBg: "rgba(55, 65, 81, 0.5)", // gray-700/50
    skillPillBorder: "rgba(75, 85, 99, 0.8)", // gray-600/80
  },
  fonts: {
    main: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  },
};

// 2. Create Styled Components
// Each of these corresponds to an element in the component.
const CardWrapper = styled.main`
  background: ${(props) => props.theme.colors.background};
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid ${(props) => props.theme.colors.border};
  width: 100%;
  max-width: 28rem; /* 448px */
  border-radius: 1rem; /* rounded-2xl */
  padding: 2rem; /* p-8 */
  text-align: center;
  color: ${(props) => props.theme.colors.textPrimary};
  z-index: 10;
`;

const ProfileImage = styled.img`
  width: 6rem; /* w-24 */
  height: 6rem; /* h-24 */
  border-radius: 9999px; /* rounded-full */
  margin: 0 auto 1rem; /* mx-auto mb-4 */
  border: 2px solid ${(props) => props.theme.colors.textSecondary};
`;

const Name = styled.h1`
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  color: ${(props) => props.theme.colors.textPrimary};
`;

const Title = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: 0.25rem; /* mt-1 */
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Bio = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.625; /* leading-relaxed */
`;

const SectionTitle = styled.h2`
  font-size: 0.875rem; /* text-sm */
  text-transform: uppercase;
  font-weight: 700; /* font-bold */
  letter-spacing: 0.05em; /* tracking-wider */
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: 1rem; /* mb-4 */
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem; /* gap-2 */
`;

const SkillPill = styled.span`
  background-color: ${(props) => props.theme.colors.skillPillBg};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  padding: 0.375rem 1rem; /* px-4 py-1.5 */
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${(props) => props.theme.colors.skillPillBorder};
  cursor: default;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #374151; /* gray-700 */
    border-color: #6b7280; /* gray-500 */
  }
`;

const SocialLinksGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem; /* gap-6 */
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.textMuted};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
    transform: scale(1.1);
  }
`;

// 3. The Refactored React Component
const PortfolioCard = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "GraphQL",
    "Tailwind CSS",
    "Figma",
    "Docker",
  ];
  const socialLinks = [
    { name: "GitHub", icon: <Github />, url: "#" },
    { name: "LinkedIn", icon: <Linkedin />, url: "#" },
    { name: "Twitter", icon: <Twitter />, url: "#" },
    { name: "Email", icon: <Mail />, url: "#" },
  ];

  return (
    <CardWrapper>
      <Section>
        <ProfileImage
          src="https://placehold.co/100x100/1f2937/ffffff?text=YN"
          alt="Your Name"
        />
        <Name>Your Name</Name>
        <Title>Software Engineer & Digital Craftsman</Title>
      </Section>

      <Section>
        <Bio>
          I specialize in creating performant and beautiful user interfaces that
          solve real-world problems.
        </Bio>
      </Section>

      <Section id="skills">
        <SectionTitle>Core Technologies</SectionTitle>
        <SkillsGrid>
          {skills.map((skill) => (
            <SkillPill key={skill}>{skill}</SkillPill>
          ))}
        </SkillsGrid>
      </Section>

      <div id="contact">
        <SectionTitle>Connect with me</SectionTitle>
        <SocialLinksGrid>
          {socialLinks.map((link) => (
            <SocialLink key={link.name} href={link.url} aria-label={link.name}>
              {React.cloneElement(link.icon, { size: 24 })}
            </SocialLink>
          ))}
        </SocialLinksGrid>
      </div>
    </CardWrapper>
  );
};

// 4. Export the component wrapped in the ThemeProvider
// This is how the styled components get access to the theme object.
const ThemedPortfolioCard = () => (
  <ThemeProvider theme={theme}>
    <PortfolioCard />
  </ThemeProvider>
);

export default ThemedPortfolioCard;
