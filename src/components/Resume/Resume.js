import React from "react";
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";

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