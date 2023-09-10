"use client";

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const CardItem = (props) => {
  const cardStyle = {
    background: "#01AFEA",
    // boxShadow: "3px 10px 48px 8px rgba(1,176,234,0.67)",
    boxShadow: "2px 4px 29px -2px rgba(1,175,234,0.81)",
    width: "95%",
    height: "300px",
    borderRadius: "20px",
    color: "white",
    display: "flex", // Add this line to use Flexbox
    flexDirection: "column", // To center items vertically
    justifyContent: "center", // To center items horizontally
  };

  return (
    <Tilt options={defaultOptions}>
      <Card sx={cardStyle}>
        <CardContent sx={{ textAlign: "center" }}>
          {props.icon}
          <Typography>{props.desc}</Typography>
        </CardContent>
      </Card>
    </Tilt>
  );
};

export default CardItem;
