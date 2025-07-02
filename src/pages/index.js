import styled from "styled-components";
import Header from "@components/Header";
import Background from "@components/Background";
import PortfolioCard from "@components/PortfolioCard";
import ContactForm from "@components/ContactForm";
import StyledDiv from "@components/StyledDiv";

export default function HomePage() {
  return (
    <div>
      <Background />
      <StyledDiv $padding={"1rem"} $height={"25%"}>
        <Header />
      </StyledDiv>

      <StyledDiv
        $height={"75%"}
        $padding={"1rem"}
        $display={"flex"}
        $justifyContent={"center"}
        $flexDirection={"column"}
        $alignItems="center"
      >
        <PortfolioCard />
        <ContactForm />
      </StyledDiv>
    </div>
  );
}
