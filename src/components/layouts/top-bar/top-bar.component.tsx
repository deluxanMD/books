import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {AppBar, Toolbar, Typography} from "@mui/material";

const TopBar = () => {
  return (
    <AppBar data-testid="TopBar.Container">
      <Toolbar disableGutters>
        <AccountBalanceWalletIcon sx={{display: {xs: "none", md: "flex"}, mr: 1, pl: 1}} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: {xs: "none", md: "flex"},
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none"
          }}
        >
          EXPENSES
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
