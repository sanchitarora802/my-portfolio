import styled from "styled-components";
import Header from "@components/Header";
import Background from "@components/Background";
import PortfolioCard from "@components/PortfolioCard";

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default function HomePage() {
  return (
    <PageWrapper>
      <Background />
      <Header />
      <PortfolioCard />
    </PageWrapper>
  );
}
