import React from "react";
import {Box} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import AuthRoutes from "./pages/auth-routes";

const App = () => {
  return (
    <div data-testid="App.Container">
      <BrowserRouter>
        <Box
          sx={{
            minWidth: "350px",
            height: "100vh"
          }}
        >
          <AuthRoutes />
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
