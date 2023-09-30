"use client";

import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";

import DrawerComp from "./DrawerComp";
import afubot from "../../public/AFUbot.svg";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      className="nav"
      position="sticky"
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}></Box>
        <Image src={afubot} alt="AFUBotLogo" style={{ maxWidth: "8rem" }} />
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
            >
              <Link href={`/`}>
                <Button
                  className={
                    pathname === "/" ? "navbuttonselected" : "navbutton"
                  }
                >
                  Home
                </Button>
              </Link>
              <Link href={`/timeline`}>
                <Button
                  className={
                    pathname === "/timeline" ? "navbuttonselected" : "navbutton"
                  }
                >
                  Timeline
                </Button>
              </Link>
              <Link href={`/team`}>
                <Button
                  className={
                    pathname === "/team" ? "navbuttonselected" : "navbutton"
                  }
                >
                  Team
                </Button>
              </Link>
              <Link href={`mailto:afubot.dev@gmail.com`}>
                <Button
                  className={
                    pathname === "/contact" ? "navbuttonselected" : "navbutton"
                  }
                >
                  Contact
                </Button>
              </Link>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
