import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./css/About.css";

const fadeInAnimation = keyframes`${fadeIn}`;

const TitleFadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const ContentFadeInDiv = styled.div`
  animation: 5s ${fadeInAnimation};
`;

function About() {
  return (
    <Box sx={{ flexGrow: 1, px: 10, pt: 15, pb: 30 }}>
      <TitleFadeInDiv>
        <Typography
          className="title"
          variant="h1"
          component="h2"
          align="center"
          sx={{ pt: 5 }}
          gutterBottom
        >
          Hello, I'm Bre Harvey
        </Typography>
        <Typography
          className="sub-title"
          variant="h3"
          align="center"
          sx={{ pb: "5rem" }}
          gutterBottom
        >
          Full Stack Developer
        </Typography>
      </TitleFadeInDiv>
      <ContentFadeInDiv>
        <Grid
          container
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          alignItems="center"
        >
          <Grid item md={12} lg={7}>
            <img
              src="https://res.cloudinary.com/dceprxjzq/image/upload/c_fill,h_650,w_650/v1647915086/Portfolio/illustrated-cover-image.jpg"
              alt="cover"
            />
          </Grid>
          <Grid item md={12} lg={5}>
            <Typography
              className="about-title"
              variant="h3"
              align="center"
              sx={{ pb: "2rem" }}
              gutterBottom
            >
              Get To Know Me
            </Typography>
            <Typography
              className="about-content"
              variant="subtitle1"
              align="center"
            >
              Hi! I am Breania Harvey, but you can call me Bre. Thank you for
              taking the time to view my work. I am a Saint Louis based full
              stack developer leveraging skill sets developed through an
              accelerated full stack web development bootcamp with Washington
              University-Saint Louis. I am a detail-oriented, creative person
              who is passionate about web development. I look forward to joining
              a team to create a better experience for users.
            </Typography>
          </Grid>
        </Grid>
      </ContentFadeInDiv>
    </Box>
  );
}

export default About;
