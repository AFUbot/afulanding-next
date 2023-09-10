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
  colors,
} from "@mui/material";
import Link from "next/link";

const pages = ["Home", "About", "Team", "Contact"];
const DrawerComp = () => {
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
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page === "Home" ? `/` : `/${page.toLowerCase()}`}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
          ))}
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
