import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Cards from "./AfuCards";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        zIndex: 2,
        marginTop: "150px",
      }}
    >
      <Grid container spacing={12}>
        <Grid item md={12} lg={6}>
          <Typography variant="overline">Introduction</Typography>
          <Typography variant="h3" fontWeight="bold">
            Overview
          </Typography>
          <Typography fontSize="1.4em" mt={3}>
            AFUbot, a breakthrough food delivery project from the minds of
            students from University of Technology Malaysia, is redefining
            convenience. Developed by a passionate team of UTM students, we
            blend technology with everyday needs. AFUbot integrates robotics and
            AI, shaping a smarter, greener delivery future. Join us in
            revolutionizing food delivery.
          </Typography>
        </Grid>
        <Grid item md={12} lg={6}>
          <Cards></Cards>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
