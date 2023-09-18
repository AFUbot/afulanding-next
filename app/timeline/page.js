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
      <Timeline></Timeline>
    </Box>
  );
};

export default TimelinePage;
