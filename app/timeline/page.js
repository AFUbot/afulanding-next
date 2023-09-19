"use client";

import Timeline from "@/components/Timeline/timeline";
import { Box } from "@mui/material";
import React from "react";

const TimelinePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        mt: "50px",
      }}
    >
      <Timeline img1={`/timeline/devphase1.jpg`}></Timeline>
    </Box>
  );
};

export default TimelinePage;
