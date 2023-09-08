import React from "react";
import { Grid, Typography } from "@mui/material";
import CardItem from "../AFUcards/CardItem";
import RouteIcon from "@mui/icons-material/Route";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import RoomIcon from "@mui/icons-material/Room";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Cards = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CardItem
          icon={<RouteIcon sx={{ color: "white", fontSize: 80 }} />}
          desc="Smart Navigation"
        />
      </Grid>
      <Grid item xs={6}>
        <CardItem
          icon={<ThermostatIcon sx={{ color: "white", fontSize: 80 }} />}
          desc="Temperature Control"
        />
      </Grid>
      <Grid item xs={6}>
        <CardItem
          icon={<LocalShippingIcon sx={{ color: "white", fontSize: 80 }} />}
          desc="Contactless Delivery"
        />
      </Grid>
      <Grid item xs={6}>
        <CardItem
          icon={<RoomIcon sx={{ color: "white", fontSize: 80 }} />}
          desc="GPS Tracking"
        />
      </Grid>
    </Grid>
  );
};

export default Cards;
