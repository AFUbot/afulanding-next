import About from "@/components/About/about";
import Hero from "@/components/Hero/hero";
import HowItWorks from "@/components/HowItWorks/howitworks";
import RobotCanvas from "@/components/Robot";
import { Container } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Container maxWidth="xl" sx={{ padding: 3 }}>
        <About></About>
        <RobotCanvas></RobotCanvas>
        <HowItWorks></HowItWorks>
      </Container>
    </div>
  );
};

export default Home;
