import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box component="footer" sx={{ p: 3, flexGrow: 1 }}>
      <Grid container cols={12} spacing={1}>
      <Grid align="left" item xs={6}>
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
            size="large"
            align="right"
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle1" align="right">
            Made with 💖 by Breania (Bre) Harvey
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
