import React from "react";
import { useTheme } from "styled-components";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
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
    { name: "GitHub", icon: <Github />, url: "#" },
    { name: "LinkedIn", icon: <Linkedin />, url: "#" },
    { name: "Twitter", icon: <Twitter />, url: "#" },
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
