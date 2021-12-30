import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import coverPhoto from "../../assets/cover/illustratedpropic.jpeg";
import { Container } from "@mui/material";
// import "./css/About.css";

function About() {
  return (
    <Box sx={{ flexGrow: 1, px: 10, pt: 15, pb: 30 }}>
      <Typography className="title" variant="h1" component="h2" align="center" sx={{pt: 5}} gutterBottom>
        Hello, I'm Bre Harvey
      </Typography>
      <Typography className="sub-title" variant="h3" align="center" sx={{ pb: "5rem"}} gutterBottom>
        Full Stack Developer
      </Typography>

      <Grid container sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} alignItems="center">
        <Grid item xs>
            <Container>
                <img src={coverPhoto} style={{ height: "50rem", width: "45rem" }} alt="cover" />
            </Container>
        </Grid>
        <Grid item xs={5}>
          <Container className="background">
            <Typography className="about-title" variant="h3" align="center" sx={{ pb: "2rem"}} gutterBottom>
                Get to Know Me
            </Typography>
            <Typography  className="about-content" variant="subtitle1" align="center">
                Hi! I am Breania Harvey, though I prefer to be called Bre. Thank
                you for taking the time to view my work. I am a Saint Louis based
                full stack developer attending coding bootcamp at Washington
                Unversity, also Saint Louis based. I am a detail-oriented, creative
                person who is excited about web development. I've always been someone who
                likes to make something beautiful out of nothing and web development
                gives me the opportunity to make something beautiful every day.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
