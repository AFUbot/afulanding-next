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
<<<<<<< HEAD
    <div>
      <PageWrapper>
        <Hero></Hero>
        <Container maxWidth="xl" sx={{ padding: 3 }}>
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
=======
      <Container
        maxWidth="xl"
        sx={{
          padding: 3,
        }}
      >
        <Hero></Hero>
        <About></About>
        <RobotCanvas></RobotCanvas>
        <HowItWorks></HowItWorks>
      </Container>
>>>>>>> b4270d2e95c0228e9765fecf114259e175b6b5a6
  );
};

export default Home;
