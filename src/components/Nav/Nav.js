import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Container, Avatar } from "@mui/material";
import "./css/Nav.css";

const pages = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Resume",
    link: "/resume",
  },
  {
    name: "Contact Me",
    link: "/contactme",
  },
];

const NavAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, pr: 3 }}>
            <Link to="/">
              <Avatar
                alt="Bre Harvey"
                src="https://res.cloudinary.com/dceprxjzq/image/upload/c_fill,h_650,w_650/v1647915086/Portfolio/illustrated-cover-image.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
           {pages.map((page) => (
             <Link key={page.name} to={`${page.link}`}>
              <Typography
                variant="h6"
                align="center"
                sx={{ px: 5 }}
              >
                {`${page.name}`}
              </Typography>
             </Link>
           ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavAppBar;
