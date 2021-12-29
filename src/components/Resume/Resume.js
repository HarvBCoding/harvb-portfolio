import React from "react";
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";
import resumeFile from "../../assets/resume/2021BreResume.pdf";

function Resume() {
    return (
        <Container align="center">
            <Typography className="title" align="center" variant="h2" sx={{p: "5rem"}}>
                Skills and Resume
            </Typography>
            <iframe 
                id="resume-pdf" 
                title="Bre Resume" 
                src={resumeFile}
                frameboarder="1"
                scrolling="auto"
                height="1100"
                width="100%"></iframe>
        </Container>
    )
}

export default Resume;