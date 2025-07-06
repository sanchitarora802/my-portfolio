import React from "react";
import StyledDiv from "./StyledDiv";
import StyledText from "./StyledText";
import { useTheme } from "styled-components";
import { projects } from "../constants/Projects";
import StyledPill from "./StyledPill";
import StyledButton from "./StyledButton";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const theme = useTheme();
  return (
    <StyledDiv
      $color={theme.colors.white.default}
      $width="90%"
      $borderRadius="1rem"
      $padding="2rem"
      $textAlign="center"
      $zIndex={10}
    >
      <StyledDiv
        $display={"flex"}
        $flexDirection={"column"}
        $gap={"1rem"}
        $alignItems={"center"}
        $justifyContent={"center"}
        $width={"100%"}
        $margin={"0 0 3rem 0"}
      >
        <StyledText
          $fontSize="3rem"
          $fontWeight="700"
          $color={theme.colors.white.default}
        >
          From The Archives
        </StyledText>
        <StyledText
          $fontSize="1.2rem"
          $fontWeight="500"
          $color={theme.colors.text.textGrayDark}
        >
          A look back at my projects.
        </StyledText>
      </StyledDiv>

      <StyledDiv
        $display={"flex"}
        $flexDirection={"column"}
        $width={"100%"}
        $alignItems={"center"}
      >
        {projects?.map((child, index) => {
          return (
            <ProjectItem key={index + 1} projectData={child} index={index} />
          );
        })}
      </StyledDiv>
    </StyledDiv>
  );
};

export default Projects;

const ProjectItem = ({ projectData, index }) => {
  const theme = useTheme();

  return (
    <StyledDiv
      $position="relative"
      $width="80%"
      $minHeight="400px"
      $padding="2rem"
      $borderRadius="1rem"
      $background={"rgba(55, 65, 81, 0.5)"}
      // $backgroundImage={`url(${projectData.image})`}
      $margin="0.5rem 0"
      $border={`1px solid ${theme.colors.border.lightBorder}`}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor:
            "linear-gradient(135deg, hsl(210, 80%, 45%), hsl(240, 70%, 35%));",
          borderRadius: "1rem",
        }}
      />
      <StyledDiv
        $position="relative"
        $zIndex={10}
        $display="flex"
        $flexDirection="column"
        $alignItems="center"
        $textAlign="center"
        $gap="2rem"
        $width="100%"
        $minHeight="400px"
        $padding="2rem"
        $borderRadius="1rem"
        $border={`1px solid ${theme.colors.border.lightBorder}`}
        $background={theme.colors.background.mainBackground}
        $opacity={0.9}
        $backdropFilter={`blur(16px)`}
      >
        <StyledText $fontSize="1rem" $fontWeight="600">
          {"College Project "}
        </StyledText>
        <StyledText $fontSize="2.5rem" $fontWeight="600">
          {projectData.title}
        </StyledText>
        <StyledText
          $padding="0 25%"
          $fontSize="1.2rem"
          $textAlign="center"
          $color={theme.colors.text.textGrayDark}
        >
          {projectData.description}
        </StyledText>

        <StyledDiv
          $display={"flex"}
          $flexWrap={"wrap"}
          $gap={"20px"}
          $justifyContent={"center"}
          $margin={"1rem 0 0rem 0"}
        >
          {projectData?.skills?.map((skill) => (
            <StyledPill
              $color={theme.colors.white.default}
              $fontWeight={500}
              key={skill}
            >
              {skill}
            </StyledPill>
          ))}
        </StyledDiv>

        <StyledDiv
          $display={"flex"}
          $flexWrap={"wrap"}
          $gap={"20px"}
          $justifyContent={"center"}
          $margin={"1rem 0 0rem 0"}
        >
          <StyledButton
            $bgColor={"transparent"}
            $border={`1px solid ${theme.colors.border.lightBorder}`}
            $color={theme.colors.white.default}
            $padding={"0.5rem 1.5rem"}
            $fontSize={"1.2rem"}
            $fontWeight={500}
            $hoverBackground={theme.colors.hover}
          >
            View Live Project{" "}
            <ExternalLink
              style={{
                marginLeft: "7px",
              }}
              size={16}
            />
          </StyledButton>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};
