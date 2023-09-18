import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AfuCard2 from "./AfuCards2";

const HowItWorks = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container spacing={10}>
        <Grid item xs={12} lg={6}>
          <Typography fontWeight="bold" mb={3} variant="h4">
            How It Works:
          </Typography>
          <AfuCard2></AfuCard2>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", height: "auto", alignItems: "center" }}
        >
          <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/A4pcKSKxjb4?si=fcGX8Bf2y5PHNZPy`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
