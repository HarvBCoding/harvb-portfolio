import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import "./css/Footer.css";

function Footer() {
  return (
    <Box component="footer" className="footer" sx={{ p: 1, flexGrow: 1 }}>
      <Grid container cols={12} spacing={1}>
        <Grid item xs>
          <Typography className="footer-name" variant="subtitle1" align="left">
            Made with 💖 by Breania (Bre) Harvey
          </Typography>
        </Grid>

      <Grid item align="right" xs={6}>
          <IconButton
            onClick={() =>
              (window.location.href = "https://github.com/harvbcoding")
            }
            aria-label="github"
            size="large"
            align="right">
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/breania-harvey-b313b8210/")
            }
            aria-label="linked-in"
            className="icon"
            size="large"
            align="right"
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
