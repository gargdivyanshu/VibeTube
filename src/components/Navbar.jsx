import React from 'react';
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from ".";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" reloadDocument style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      {
        window.innerWidth >= 768 && (
          <Typography variant="h4" color="#fff" marginLeft={2} marginTop={1} fontWeight='bold' fontFamily="'Josefin Sans', sans-serif;">
            VibeFlow
          </Typography>
        )
      }
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
