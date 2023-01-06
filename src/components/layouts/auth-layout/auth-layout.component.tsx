import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import TopBar from "../top-bar/top-bar.component";

const AuthLayout = () => {
  return (
    <Box
      component="main"
      data-testid="Layout.Auth"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <TopBar />
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
