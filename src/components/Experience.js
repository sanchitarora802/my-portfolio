import React from "react";
import StyledDiv from "./StyledDiv";
import StyledText from "./StyledText";
import styled, { useTheme } from "styled-components";
import StyledPill from "./StyledPill";

const StylledLi = styled.li`
  display: flex;
  width: 100%;
  font-size: 0.875;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white.default};
  text-align: left;

  &::marker {
    color: ${({ theme }) => theme.colors.white.default};
  }
`;

const StyledUl = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const Experience = () => {
  const theme = useTheme();

  const experiences = [
    {
      date: "7 Jan 2012",
      companyName: "Innovate Inc.",
      role: "Lead Frontend Developer",
      bulletPoints: [
        {
          text: "Spearheaded the development of a new design system, improving component consistency and reducing development time by 30%.",
        },
        {
          text: "Mentored a team of four junior developers, fostering a culture of collaboration and continuous learning.",
        },
      ],
      skills: ["React", "Next.js"],
    },
    {
      date: "9 March 2012",
      companyName: "Innovate Inc.",
      role: "Lead Frontend Developer",
      bulletPoints: [
        {
          text: "Spearheaded the development of a new design system, improving component consistency and reducing development time by 30%.",
        },
        {
          text: "Mentored a team of four junior developers, fostering a culture of collaboration and continuous learning.",
        },
        {
          text: "Mentored Mentored a team of four junior developers, fostering a culture of collaboration and continuous learning.",
        },
      ],
      skills: ["React", "Next.js"],
    },
    {
      date: "120 March 2012",
      companyName: "Innovate Inc.",
      role: "Lead Frontend Developer",
      bulletPoints: [
        {
          text: "Spearheaded the development of a new design system, improving component consistency and reducing development time by 30%.",
        },
      ],
      skills: ["React", "Next.js"],
    },
  ];

  return (
    <StyledDiv
      $color={theme.colors.white.default}
      $width="90%"
      $borderRadius="1rem"
      $padding="2rem"
      $textAlign="center"
      $zIndex={10}
      $backdropFilter="blur(16px) saturate(180%)"
    >
      <StyledDiv
        $display={"flex"}
        $flexDirection={"row"}
        $justifyContent={"center"}
        $width={"100%"}
        $margin={"0 0 3rem 0"}
      >
        <StyledText
          $fontSize="3rem"
          $fontWeight="700"
          $color={theme.colors.white.default}
        >
          My Experience
        </StyledText>
      </StyledDiv>

      <StyledDiv $display={"flex"} $flexDirection={"column"} $width={"100%"}>
        {experiences?.map((child, index) => {
          return (
            <StyledDiv
              $justifyContent={index % 2 !== 0 ? "flex-start" : "flex-end"}
              $display={"flex"}
              $flexDirection={"row"}
              $width={"100%"}
            >
              <ExperienceItem
                key={child?.date}
                experienceData={child}
                index={index}
              />
            </StyledDiv>
          );
        })}
      </StyledDiv>
    </StyledDiv>
  );
};

export default Experience;

const ExperienceItem = ({ experienceData, index }) => {
  const theme = useTheme();

  return (
    <StyledDiv
      $width={"50%"}
      $display={"flex"}
      $justifyContent={"center"}
      style={{
        borderLeft:
          index % 2 === 0 ? `1px solid ${theme.colors.border.lightBorder}` : "",
        borderRight:
          index % 2 !== 0 ? `1px solid ${theme.colors.border.lightBorder}` : "",
      }}
      $position={"relative"}
    >
      <StyledDiv
        $top={"50%"}
        $left={index % 2 === 0 ? "-10px" : "98%"}
        $right={"0"}
        $bottom={"0"}
        $position={"absolute"}
        $width={"20px"}
        $height={"20px"}
        $borderRadius={"50%"}
        $border={`1px solid ${theme.colors.background.mainBackground}`}
        $background={theme.colors.white.default}
        $color={theme.colors.background.mainBackground}
      >
        {index + 1}
      </StyledDiv>
      <StyledDiv
        $display={"flex"}
        $flexDirection={"column"}
        $gap={"10px"}
        $padding={"2rem"}
        $width={"65%"}
        $minHeight={"450px"}
        $border={`1px solid ${theme.colors.border.lightBorder}`}
        $borderRadius={`1rem`}
        $background={theme.colors.background.mainBackground}
        $justifyContent={"space-between"}
        $hoverBorder={`1px solid ${theme.colors.white.default}`}
      >
        <StyledDiv
          $display={"flex"}
          $flexDirection={"column"}
          $gap={"10px"}
          $width={"100%"}
        >
          <StyledText
            $fontSize="1rem"
            $fontWeight="500"
            $color={theme.colors.white.default}
          >
            {experienceData?.date}
          </StyledText>
          <StyledText
            $fontSize="1.875rem"
            $fontWeight="600"
            $color={theme.colors.white.default}
          >
            {experienceData?.companyName}
          </StyledText>
          <StyledText
            $fontSize="1.2rem"
            $fontWeight="600"
            $color={theme.colors.white.default}
          >
            {experienceData?.role}
          </StyledText>

          <StyledUl>
            {experienceData?.bulletPoints?.map((child) => {
              return (
                <StyledDiv
                  $alignItems={"center"}
                  $display={"flex"}
                  $gap={"10px"}
                  $width={"100%"}
                >
                  <StyledDiv
                    $width={"5px"}
                    $height={"5px"}
                    $background={theme.colors.white.default}
                    $borderRadius={"50%"}
                  />
                  <StylledLi key={child.text}>{child?.text}</StylledLi>
                </StyledDiv>
              );
            })}
          </StyledUl>
        </StyledDiv>

        <StyledDiv
          $display={"flex"}
          $flexWrap={"wrap"}
          $gap={"20px"}
          $justifyContent={"center"}
          $margin={"1rem 0 0rem 0"}
        >
          {experienceData?.skills?.map((skill) => (
            <StyledPill
              $color={theme.colors.white.default}
              $fontWeight={500}
              key={skill}
            >
              {skill}
            </StyledPill>
          ))}
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};
