import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Project from "../Project/Project";

function Portfolio() {
  return (
    <Box sx={{ p: "5rem" }}>
      <Typography
        className="title"
        align="center"
        variant="h2"
        sx={{ pb: "2rem" }}
      >
        Projects I've Been Working On
      </Typography>
      <Typography align="center" variant="h6" sx={{ pb: "3rem" }}>
        A compilation of projects that I've worked on. Some projects were a
        collaboration project with other developers.
      </Typography>
      <Project />
    </Box>
  );
}

export default Portfolio;
