import About from "@/components/About/about";
import Hero from "@/components/Hero/hero";
import HowItWorks from "@/components/HowItWorks/howitworks";
import RobotCanvas from "@/components/Robot";
import { Container } from "@mui/material";
import React from "react";

const Home = () => {
  return (
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
  );
};

export default Home;
