import React from "react";
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";
import resumeFile from "../../assets/resume/2022BreResume.pdf";

function Resume() {
    return (
      <Container
        align="center"
        sx={{ height: "150vh", width: "100vw", mb: 10 }}
      >
        <Typography
          className="title"
          align="center"
          variant="h2"
          sx={{ pt: "10rem", pb: "4rem" }}
        >
          Skills and Resume
        </Typography>

        <Container align="center" sx={{ height: "115vh", width: "80vw"}}>
          <embed
            id="resume-pdf"
            title="Bre Resume"
            src={resumeFile}
            frameboarder="2"
            scrolling="auto"
            height="100%"
            width="100%"
          ></embed>
        </Container>
      </Container>
    );
}

export default Resume;