import React from "react";
import { useTheme } from "styled-components";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
  whatsapp,
} from "lucide-react";
import StyledImage from "./StyledImage";
import StyledText from "./StyledText";
import StyledDiv from "./StyledDiv";
import StyledPill from "./StyledPill";
import CardWrapper from "./CardWrapper";

const PortfolioCard = () => {
  const theme = useTheme();
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
    // { name: "GitHub", icon: <Github />, url: "#" },
    {
      name: "WhatsApp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
        >
          <path
            fill="#FFFFFF"
            d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
          />
        </svg>
      ),
      url: "#",
    },
    { name: "LinkedIn", icon: <Linkedin />, url: "#" },
    { name: "Facebook", icon: <Facebook />, url: "#" },
    { name: "Email", icon: <Mail />, url: "#" },
  ];

  return (
    <CardWrapper
      $background={theme.colors.background.mainBackground}
      $border={theme.colors.border.normal}
      $color={theme.colors.white.default}
      $width="100%"
      $maxWidth="40%"
      $borderRadius="1rem"
      $padding="2rem"
      $textAlign="center"
      $zIndex={10}
      $backdropFilter="blur(16px) saturate(180%)"
    >
      <StyledDiv
        $margin="1rem"
        $display={"flex"}
        $justifyContent={"center"}
        $flexDirection={"column"}
        $alignItems="center"
      >
        <StyledDiv
          $display={"flex"}
          $justifyContent={"center"}
          $flexDirection={"column"}
          $margin={"1rem"}
        >
          <StyledImage
            src="https://placehold.co/100x100/1f2937/ffffff?text=YN"
            alt="Your Name"
            width={100}
            height={100}
            $border={`2px solid ${theme.colors.text.textGrayDark}`}
            unoptimized
          />
          <StyledText
            $fontSize="1.875rem"
            $fontWeight="700"
            $color={theme.colors.white.default}
          >
            Your Name
          </StyledText>
        </StyledDiv>

        <StyledText
          $fontSize={"1.2rem"}
          $color={theme.colors.text.textGrayLigh}
          $margin="0 0 1.5rem 0"
        >
          Software Engineer & Digital Craftsman
        </StyledText>

        <StyledText
          $fontSize={"1rem"}
          $color={theme.colors.text.textGrayLigh}
          $lineHeight="1.625"
          $margin="0 0 0.25rem 0"
          $textAlign="center"
        >
          I specialize in creating performant and beautiful user interfaces that
          solve real-world problems.
        </StyledText>
      </StyledDiv>

      <StyledDiv margin="1rem" id="skills">
        <StyledText
          $fontSize={"0.875rem"}
          $fontWeight={700}
          $color={theme.colors.text.textGrayDark}
          $margin={"0 0 1rem 0"}
        >
          Core Technologies
        </StyledText>
        <StyledDiv
          $display={"flex"}
          $flexWrap={"wrap"}
          $gap={"20px"}
          $justifyContent={"center"}
          $margin={"1rem 0 0rem 0"}
        >
          {skills.map((skill) => (
            <StyledPill $fontWeight={500} key={skill}>
              {skill}
            </StyledPill>
          ))}
        </StyledDiv>
      </StyledDiv>

      <StyledDiv
        $margin="1rem"
        $display={"flex"}
        $justifyContent={"center"}
        $flexDirection={"column"}
        $alignItems="center"
      >
        <StyledText
          $padding="0.5rem"
          $fontSize={"0.875rem"}
          $fontWeight={700}
          $color={theme.colors.text.textGrayDark}
        >
          Connect with me
        </StyledText>

        <StyledDiv
          $justifyContent={"center"}
          $gap={"20px"}
          $display={"flex"}
          $flexWrap={"wrap"}
          $margin={"1rem 0 0rem 0"}
        >
          {socialLinks.map((link) => (
            <a
              style={{
                color: theme.colors.text.textGrayLigh,
              }}
              key={link.name}
              href={link.url}
            >
              {link.icon}
            </a>
          ))}
        </StyledDiv>
      </StyledDiv>
    </CardWrapper>
  );
};

export default PortfolioCard;
