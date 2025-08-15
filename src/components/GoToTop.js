import React from "react";
import StyledDiv from "./StyledDiv";
import { ArrowUp } from "lucide-react";
import { useTheme } from "styled-components";
import StyledButton from "./StyledButton";

const GoToTop = () => {
  const theme = useTheme();
  return (
    <StyledDiv $position={"absolute"} $zIndex={9999} $top={"95%"} $left={"95%"}>
      <StyledDiv $position={"fixed"}>
        <StyledButton
          $bgColor={theme.colors.border.lightBorder}
          $border={`1px solid ${theme.colors.border.PillBorder}`}
          $color={theme.colors.white.default}
          $padding={"0.5rem 1rem"}
          $borderRadius={"9999px"}
          $fontSize={"0.875rem"}
          $fontWeight={500}
          $hoverBackground={theme.colors.hover}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <ArrowUp size={24} />
        </StyledButton>
      </StyledDiv>
    </StyledDiv>
  );
};

export default GoToTop;
