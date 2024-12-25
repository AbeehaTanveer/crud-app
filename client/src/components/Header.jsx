import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import DisplayData from "./DisplayData";

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <AppBar sx={{ bgcolor: "pink" }}>
        <Toolbar>
          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            justifyContent={"center"}
            mx={"auto"}
            gap={8}
          >
            {/* Navigation Links */}
            <Typography>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <h3>Home</h3>
              </Link>
            </Typography>
            <Typography>
              <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
                <h3>Add</h3>
              </Link>
            </Typography>
         
          </Box>
        </Toolbar>
      </AppBar>

      {/* Placeholder for child components */}
      <Box mt={1}>
        <Outlet />
        
      </Box>
    </div>
  );
};

export default Header;
