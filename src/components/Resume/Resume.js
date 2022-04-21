import React from "react";
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";
import resumeFile from "../../assets/resume/2022BreResume.pdf";

function Resume() {
    return (
        <Container align="center" sx={{height: "1500px", width: "2000px", mb: 15}}>
            <Typography className="title" align="center" variant="h2" sx={{pt: "10rem", pb: "4rem"}}>
                Skills and Resume
            </Typography>
            <iframe 
                id="resume-pdf" 
                title="Bre Resume" 
                src={resumeFile}
                frameboarder="1"
                scrolling="auto"
                height="78%"
                width="80%"
                padding="5rem"></iframe>
        </Container>
    )
}

export default Resume;