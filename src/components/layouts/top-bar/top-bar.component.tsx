import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {AppBar, Toolbar, Typography} from "@mui/material";

const TopBar = () => {
  return (
    <AppBar data-testid="TopBar.Container">
      <Toolbar disableGutters>
        <MenuBookIcon sx={{display: {xs: "none", md: "flex"}, mr: 1, pl: 1}} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: {xs: "none", md: "flex"},
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none"
          }}
        >
          Books
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
