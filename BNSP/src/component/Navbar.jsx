import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../css/Navbar.css"



const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">TechNova</Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" className="btn-login">
                  Login
                </Button>
                <Button variant="contained" className="btn-signup">
                  Sign Up
                </Button>
              </Stack>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
