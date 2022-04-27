import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

const fadeInAnimation = keyframes`${fadeIn}`;

const HiFadeInDiv = styled.div`
  animation: 4s ${fadeInAnimation};
`;
const NameFadeInDiv = styled.div`
  animation: 8s ${fadeInAnimation};
`;
const ContentFadeInDiv = styled.div`
  animation: 10s ${fadeInAnimation};
`;

const ImageBox = styled.div`
  background-image: url("https://res.cloudinary.com/dceprxjzq/image/upload/c_fill,h_950/v1649123125/Portfolio/vecteezy-city-park-wooden-bench.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 105vh;
  width: 100vw;
  padding-top: 20rem;
`;

const Home = () => {
  return (
    <Box className="home-page" sx={{ display: "flex-inline" }}>
      <ImageBox sx={{ pt: 30 }}>
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
      </ImageBox>
    </Box>
  );
};

export default Home;
