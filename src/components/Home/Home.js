import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import "./css/Home.css";

const fadeInAnimation = keyframes`${fadeIn}`;

const HiFadeInDiv = styled.div`
  animation: 4s ${fadeInAnimation};
`;
const NameFadeInDiv = styled.div`
  animation: 8s ${fadeInAnimation};
`;
const ContentFadeInDiv = styled.div`
  animation: 12s ${fadeInAnimation};
`;

const Home = () => {
  return (
    <Box className="home-page" sx={{ display: "flex-inline" }}>
      <Box sx={{ pt: 20 }}>
        <HiFadeInDiv>
          <Typography variant="h1" align="center" gutterBottom>
            Hi,
          </Typography>
        </HiFadeInDiv>
        <NameFadeInDiv>
          <Typography variant="h1" align="center" gutterBottom>
            I'm Bre.
          </Typography>
        </NameFadeInDiv>
        <ContentFadeInDiv>
          <Typography variant="subtitle1" align="center" gutterBottom>
            A St. Louis based full stack developer working remotely.
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Click around and get to know me a little better.
          </Typography>
        </ContentFadeInDiv>
      </Box>
    </Box>
  );
};

export default Home;
