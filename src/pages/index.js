import styled from "styled-components";
import Header from "@components/Header";
import Background from "@components/Background";
import PortfolioCard from "@components/PortfolioCard";
import ContactForm from "@components/ContactForm";
import StyledDiv from "@components/StyledDiv";
import Experience from "@components/Experience";

// const ScrollContainer = styled.div`
//   height: 100vh;
//   overflow-y: scroll;
//   scroll-snap-type: y mandatory
// `;

export default function HomePage() {
  return (
    <div>
      <Background />
      <StyledDiv $padding={"1rem"} $height={"25%"}>
        <Header />
      </StyledDiv>

      {/* <ScrollContainer> */}
      <StyledDiv
        $height={"98vh"}
        $width={"98.5vw"}
        $padding={"1rem"}
        $display={"flex"}
        $justifyContent={"center"}
        $alignItems={"center"}
        $position={"relative"}
        $scrollSnapAllign={"start"}
      >
        <PortfolioCard />
      </StyledDiv>

      <StyledDiv
        $padding={"1rem"}
        $display={"flex"}
        $justifyContent={"center"}
        $alignItems={"center"}
        $position={"relative"}
        $scrollSnapAllign={"start"}
      >
        <Experience />
        {/* <ContactForm /> */}
      </StyledDiv>
      {/* </ScrollContainer> */}
    </div>
  );
}
