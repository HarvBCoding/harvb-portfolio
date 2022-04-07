import React from "react";
import { Link } from "react-router-dom";
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
    <Box sx={{ flexGrow: 1, px: 10, pt: 15, pb: 30, alignContent: "center" }}>
      <TitleFadeInDiv>
        <Typography
          className="title"
          variant="h1"
          align="center"
          sx={{ pt: 10, pb: 15 }}
        >
          Meet Bre
        </Typography>
      </TitleFadeInDiv>
      <ContentFadeInDiv>
        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
          alignContent="center"
        >
          <Grid
            item
            md={12}
            lg={7}
            sx={{ display: "flex", justifyContent: "center", pb: 10 }}
          >
            <img
              src="https://res.cloudinary.com/dceprxjzq/image/upload/ar_1:1,bo_2px_solid_rgb:d4af37,c_fill,g_auto,r_max,w_600/v1649297029/Portfolio/about-me-image.png"
              alt="cover"
            />
          </Grid>
          <Grid
            item
            md={12}
            lg={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              className="about-content"
              variant="subtitle1"
              sx={{ p: 1 }}
            >
              Hi! I am Breania Harvey, but you can call me Bre.
              <br></br>
              <br></br>
              I am a Saint Louis, Missouri based full stack developer
              leveraging skill sets developed through an accelerated full stack
              web development bootcamp with Washington University in Saint
              Louis. I excelled and completed the course with an A and excellent
              reviews from my professors. From my time at Washington University
              along with experience in coding through Codecademy and Edabit, I
              have adapted skills in multiple coding languages to adjust to
              changing dynamics and processes in different coding environments.
              Some of the languages I'm familiar with are JavaScript, React.js
              and SQL. I am always keen to continue to build on those skills.
              <br></br>
              <br></br>I am an eager and persistent problem-solver with a desire
              to succeed and build with a team to provide a positive user
              experience. When I'm not coding I'm usually reading, gaming, or
              spending time with husband and 3 sons.
              <br></br>
              <br></br>
              Thank you for taking the time to view my work! Please don't
              hesitate to reach out from the{" "}
              <Link to="/contactme">Contact Me</Link> page.
            </Typography>
          </Grid>
        </Grid>
      </ContentFadeInDiv>
    </Box>
  );
}

export default About;
