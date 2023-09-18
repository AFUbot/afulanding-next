"use client";

import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  colors,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DrawerComp = () => {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        PaperProps={{
          sx: { width: "50%", background: "black" },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <Link href={`/`}>
            <Button
              className={pathname === "/" ? "navbuttonselected" : "navbutton"}
              sx={{ color: "white", width: "100%" }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              Home
            </Button>
          </Link>
          <Link href={`/timeline`}>
            <Button
              className={
                pathname === "/timeline" ? "navbuttonselected" : "navbutton"
              }
              sx={{ color: "white", width: "100%" }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              Timeline
            </Button>
          </Link>
          <Link href={`/team`}>
            <Button
              className={
                pathname === "/team" ? "navbuttonselected" : "navbutton"
              }
              sx={{ color: "white", width: "100%" }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              Team
            </Button>
          </Link>
          <Link href={`/`}>
            <Button
              className={
                pathname === "/contact" ? "navbuttonselected" : "navbutton"
              }
              sx={{ color: "white", width: "100%" }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              Contact
            </Button>
          </Link>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
