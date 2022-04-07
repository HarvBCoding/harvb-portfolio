import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import "./css/Home.css";

const Home = () => {
  return (
    <Box className="home-page" sx={{ display: "flex-inline" }}>
      <Box sx={{ pt: 20 }}>
        <Typography variant="h1" align="center" gutterBottom>
          Hi,
        </Typography>
        <Typography variant="h1" align="center" gutterBottom>
          I'm Bre.
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          A St. Louis based full stack developer working remotely.
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Click around and get to know me a little better.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
