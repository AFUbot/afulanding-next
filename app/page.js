import About from "@/components/About/about";
import Hero from "@/components/Hero/hero";
import HowItWorks from "@/components/HowItWorks/howitworks";
import RobotCanvas from "@/components/Robot";
import Robot from "@/components/Robot";
import StarsCanvas from "@/components/Stars";
import { Container } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>
        <Hero></Hero>
        <Container maxWidth="xl">
          <About></About>
          <RobotCanvas></RobotCanvas>
          <HowItWorks></HowItWorks>
        </Container>
      </h1>
    </div>
  );
};

export default Home;
