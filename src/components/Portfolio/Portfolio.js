import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Project from "../Project/Project";
import "./css/Portfolio.css";

const slideInUpAnimation = keyframes`${slideInUp}`;

const SlideInUpDiv = styled.div`
  animation: 2s ${slideInUpAnimation};
`;

function Portfolio() {
  return (
    <Box sx={{ p: "5rem" }}>
      <Typography
        className="title"
        align="center"
        variant="h2"
        sx={{ pt: "4.5rem", pb: "2rem" }}
      >
        Projects I've Been Working On
      </Typography>
      <Typography
        className="project-content"
        align="center"
        variant="h6"
        sx={{ pb: "3rem", mx: "auto", width: "70rem" }}
      >
        A compilation of projects I've created and collaborated on. Some
        projects are assignments from boot camp and others were for fun! I
        collaborated with other developers I networked with during boot camp.
        Click on any of the images to be taken to the sites of the individual
        projects or the icon to be taken to the repository on GitHub.
      </Typography>
      <SlideInUpDiv>
        <Project />
      </SlideInUpDiv>
    </Box>
  );
}

export default Portfolio;
