import React from "react";
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";
import resumeFile from "../../assets/resume/2021BreResume.pdf";

function Resume() {
    return (
        <Container align="center">
            {/* <h1 id="resume">Bre's Resume</h1> */}
            <Typography
              variant="h2" align="center" sx={{ p: "4rem" }} gutterBottom
            >Bre's Resume and Skills</Typography>
            <iframe 
                id="resume-pdf" 
                title="Bre Resume" 
                src={resumeFile}
                frameboarder="1"
                scrolling="auto"
                height="1100"
                width="80%"></iframe>
        </Container>
    )
}

export default Resume;