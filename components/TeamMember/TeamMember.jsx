import { Facebook, Instagram, MapsHomeWork } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const TeamMember = (props) => {
  return (
    <div>
      <Card
        sx={{
          width: 350,
          background: "black",
          color: "white",
          borderRadius: 5,
        }}
      >
        <CardMedia sx={{ height: 350 }} image={props.imgUrl} title="" />
        <Box sx={{padding: 1, border: 0.5, borderColor: 'white', borderTop: 0,}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="grey" sx={{height: 30}}>
              {props.designation}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="facebook">
              <Facebook sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="instagram">
              <Instagram sx={{ color: "white" }} />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </div>
  );
};

export default TeamMember;
