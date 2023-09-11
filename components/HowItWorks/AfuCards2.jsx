import React from "react";
import { Grid, Typography } from "@mui/material";
import CardItem2 from "./CardItem2";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RoomIcon from "@mui/icons-material/Room";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";

const AfuCard2 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CardItem2
          icon={<RestaurantMenuIcon sx={{ color: "#01AFEA", fontSize: 80 }} />}
          desc="Order Placement"
          content="Customer places an order through the app."
        />
      </Grid>
      <Grid item xs={6}>
        <CardItem2
          icon={<FastfoodIcon sx={{ color: "#01AFEA", fontSize: 80 }} />}
          desc="Food Pickup"
          content="AFUBot collects the food from the restaurant."
        />
      </Grid>
      <Grid item xs={6}>
        <CardItem2
          icon={
            <NavigationOutlinedIcon sx={{ color: "#01AFEA", fontSize: 80 }} />
          }
          desc="Navigation"
          content="Robot navigates through streets and reaches the destination."
        />
      </Grid>
      <Grid item xs={6}>
        <CardItem2
          icon={
            <DeliveryDiningOutlinedIcon
              sx={{ color: "#01AFEA", fontSize: 80 }}
            />
          }
          desc="Delivery"
          content="AFUbot ensures contactless delivery to the customer's doorstep."
        />
      </Grid>
    </Grid>
  );
};

export default AfuCard2;
