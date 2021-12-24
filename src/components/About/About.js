import React from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import coverPhoto from "../../assets/cover/illustratedpropic.jpeg"

function About() {
    return (
        <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h1" component="h2" align='center' gutterBottom>Hello, I'm Bre Harvey</Typography>
                <Typography variant="h4" align="center">Full Stack Developer</Typography>
            </Grid>
            <Grid item xs={5} className="about-image">
                <img src={coverPhoto} style={{ width: "center" }} alt="cover"/>
            </Grid>
            <Grid item xs={7} className="about-content">
                <Typography variant="h3" align="center" gutterBottom>Get to Know Me</Typography>
                <Typography variant="subtitle1" align="center" sx={{px:"1.5rem"}}>Hi! I am Breania Harvey, thought I prefer to be called Bre. Thank you for taking the time to view my work. I am a Saint Louis based full stack developer attending coding bootcamp at Washington Unversity, also Saint Louis based. I am a detail-oriented, creative person who is excited about coding. I've always been someone who likes to make something beautiful out of nothing and web development gives me the opportunity to make something beautiful every day. </Typography>
            </Grid>
        </Grid>
    )
}

export default About;