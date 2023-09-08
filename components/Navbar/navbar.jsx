"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import DrawerComp from "../DrawerComp/DrawerComp";
import afubot from "../../public/AFUbot.svg";
import Image from "next/image";

const pages = ["Home", "About", "Team", "Contact"];

function Navbar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      className="nav"
      position="sticky"
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Your logo image */}
        </Box>
        <Image
          src={afubot} // Replace with the actual path to your logo image
          alt="AFUBotLogo"
          style={{ maxWidth: "8rem" }} // You can adjust the width as needed
        />
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
            >
              {pages.map((page) => (
                <Button key={page} sx={{ color: "white" }}>
                  <a href="">{page}</a>
                </Button>
              ))}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
