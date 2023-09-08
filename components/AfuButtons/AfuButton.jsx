import { Box, Button } from "@mui/material";
import React from "react";

const AfuButton = (props) => {
  return (
    <Button
      sx={{ background: props.bgColor, color: props.textColor, marginRight: 2 }}
    >
      {props.name}
    </Button>
  );
};

export default AfuButton;
