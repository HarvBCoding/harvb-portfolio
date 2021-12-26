import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import coverPhoto from "../../assets/cover/illustratedpropic.jpeg";
import { Container } from "@mui/material";

function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h1" component="h2" align="center" gutterBottom>
        Hello, I'm Bre Harvey
      </Typography>
      <Typography variant="h4" align="center" sx={{ pb: "5rem"}} gutterBottom>
        Full Stack Developer
      </Typography>

      <Grid container alignItems="center" spacing={1}>
        <Grid item xs>
            <Container>
                <img src={coverPhoto} style={{ height: "50rem" }} alt="cover" />
            </Container>
        </Grid>
        <Grid item xs={6}>
          <Container>
            <Typography variant="h3" align="center" sx={{ pb: "2rem"}} gutterBottom>
                Get to Know Me
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ mx: "1.5rem" }}>
                Hi! I am Breania Harvey, though I prefer to be called Bre. Thank
                you for taking the time to view my work. I am a Saint Louis based
                full stack developer attending coding bootcamp at Washington
                Unversity, also Saint Louis based. I am a detail-oriented, creative
                person who is excited about coding. I've always been someone who
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
