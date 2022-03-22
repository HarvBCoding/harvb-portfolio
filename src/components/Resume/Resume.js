import React from "react";
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";
import resumeFile from "../../assets/resume/2022BreResume.pdf";

function Resume() {
    return (
        <Container align="center" sx={{height: "1100px", width: "1100px"}}>
            <Typography className="title" align="center" variant="h2" sx={{p: "4rem"}}>
                Skills and Resume
            </Typography>
            <iframe 
                id="resume-pdf" 
                title="Bre Resume" 
                src={resumeFile}
                frameboarder="1"
                scrolling="auto"
                height="75%"
                width="75%"
                padding="5rem"></iframe>
        </Container>
    )
}

export default Resume;