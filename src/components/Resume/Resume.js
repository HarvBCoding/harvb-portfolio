import React from "react";
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";

function Resume() {
    return (
      <Container
        align="center"
        sx={{ height: "160vh", width: "100vw", mb: 10 }}
      >
        <Typography
          className="title"
          align="center"
          variant="h2"
          sx={{ pt: "10rem" }}
          gutterBottom
        >
          Skills and Resume
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          sx={{ mx: "auto", width: "50rem", pb: "3rem"}}
        >
          Below is my resume so that you can get to know more about my work history, skills and education. Please feel free to reach out to me with any questions.
        </Typography>

        <Container align="center" sx={{ height: "120vh", width: "80vw" }}>
          <iframe
            src="https://drive.google.com/file/d/1lgAQMw0gGOv9SRbCtkLJ6i7-CHhnFjeK/preview"
            width="85%"
            height="100%"
            allow="autoplay"
          ></iframe>
        </Container>
      </Container>
    );
}

export default Resume;