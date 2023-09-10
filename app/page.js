import About from "@/components/About/about";
import Hero from "@/components/Hero/hero";
import HowItWorks from "@/components/HowItWorks/howitworks";
import RobotCanvas from "@/components/Robot";
import { Container } from "@mui/material";
import React from "react";
import PageWrapper from "./pageWrapper";
import AnimeWrapper from "./animeWrapper";

const Home = () => {
  return (
    <div>
      <PageWrapper>
        <Hero></Hero>
        <Container maxWidth="lg" sx={{ padding: 3 }}>
          <AnimeWrapper>
            <About></About>
          </AnimeWrapper>
          <RobotCanvas></RobotCanvas>
          <AnimeWrapper>
            <HowItWorks></HowItWorks>
          </AnimeWrapper>
        </Container>
      </PageWrapper>
    </div>
  );
};

export default Home;
