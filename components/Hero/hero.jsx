import React from "react";
import Image from "next/image";
import Front from "../../public/3.png";
import Logo from "../../public/AFUbot.svg";
import Bottom from "../../public/bottom.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import AfuButton from "../AfuButtons/AfuButton";

const Hero = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: "-50px",
            }}
          >
            <Image style={{ height: 60 }} src={Logo}></Image>

            {/* <Box sx={{ mt: 3 }}>
              <AfuButton
                sx={{ marginTop: 3, marginRight: 2 }}
                bgColor="#05ACEA"
                name="1.0.0"
                textColor="white"
              ></AfuButton>
              <AfuButton
                sx={{ marginTop: 3, marginRight: 2 }}
                bgColor="#05ACEA"
                name="GitHub"
                textColor="white"
              ></AfuButton>
            </Box> */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                bottom: 15,
                right: 10,
              }}
            >
              <Typography fontWeight="bold">
                <span style={{ color: "#05ACEA" }}>Efficient</span>
                {`, `}
                <span style={{ color: "#05ACEA" }}>Reliable</span>
                {`, and `}
                <span style={{ color: "#05ACEA" }}>Contactless</span> Food
                Delivery
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* <Grid
          item
          sx={{
            display: { xs: "none", md: "block" },
            marginLeft: { md: "-250px", lg: 0 },
          }}
          xs={0}
          md={7}
          lg={6}
        >
          <Image
            style={{
              width: "auto",
              height: "100vh",
              zIndex: 1,
              position: "relative",
              marginTop: "-20px",
            }}
            src={Front}
          ></Image>
        </Grid> */}
      </Grid>
      {/* <Box className="bottom"></Box> */}
    </div>
  );
};

export default Hero;
