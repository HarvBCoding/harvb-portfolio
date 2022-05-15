import React, {useState} from 'react';
import {ImageList, ImageListItem, ImageListItemBar, IconButton, Grid, Typography} from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from '@mui/icons-material/Launch';
import { grey } from '@mui/material/colors';

function srcset(image, size, rows = 1, cols = 2) {
    return {
        src: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size * cols},h_${size * rows},c_lfill,f_auto/v1640574160/Portfolio/${image}.jpg`,
        srcSet: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size *  cols},h_${size * rows},c_lfill,f_auto/v1640574160/Portfolio/${image}.jpg 2x`
    };
}

function Project() {
    

    const [projects] = useState([
        {
            image: "shop-shop",
            title: "Shop-Shop",
            appLink: "https://harvb-shop-shop.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/shop-shop",
            description: "A hypothetical ecommerce site with placeholder data that allows user to shop",
            technologies: "MongoDB, Express, React, Node",
            rows: 2,
            cols: 3
        },
        {
            image: "santas-nice-list",
            title: "Santa's Nice List",
            appLink: "https://santasnicelist.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/santaslist",
            description: "A password protected holiday list to keep track of names, gifts and gift prices",
            technologies: "JavaScript, SQL, Express, Node"
        },
        {
            image: "marauders_trivia",
            title: "Potter's Marauders Trivia",
            appLink: "https://stark-plains-49295.herokuapp.com/",
            repoLink: "https://github.com/Hmndtyphn/harry-potter-house",
            description: "A Harry Potter trivia app to test knowledge from the books and films",
            technologies: "JavaScript, Express, Node, MongoDB, GraphQL, React"
        },
        {
            image: "deep-thoughts",
            title: "Deep Thoughts",
            appLink: "https://harvb-deep-thoughts.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/deep-thoughts",
            description: "A hypothetical social media website where users can interact with posts from other users.",
            technologies: "JavaScript, MongoDB, Apollo, GraphQL, React, Express, Node", 
        },
        {
            image: "food-festival",
            title: "Food Festival",
            appLink: "https://harvbcoding.github.io/food-festival/",
            repoLink: "https://github.com/HarvBCoding/food-festival",
            description: "A website for a hypothetical regional food festival for users to view festival information.",
            technologies: "JavaScript, JQuery, Bootstrap, HTML, CSS",
            cols: 3,
            rows: 2
        },
        {
            image: "note-taker",
            title: "Note Taker",
            appLink: "https://harvbnotetaker.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/note-taker/",
            description: "A note taking website that allows the user to set reminders for tasks",
            technologies: "JavaScript, HTML, CSS, Node, Express"
        }
    ]);

    return (
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        variant="quilted"
        cols={6}
        rowHeight={400}
      >
        {projects.map((project) => (
          <ImageListItem
            key={project.image}
            cols={project.cols || 3}
            rows={project.rows || 1}
          >
            <img
              {...srcset(project.image, 400, project.rows, project.cols)}
              alt={project.title}
              loading="lazy"
              onClick={() => window.open(project.appLink, " _blank")}
            ></img>
            <ImageListItemBar
              title={
                <Grid container cols={12}>
                  <Grid align="left" item xs={1}>
                    <IconButton
                      aria-label="info-icon"
                      onClick={() => window.open(project.appLink, "_blank")}
                    >
                      <LaunchIcon sx={{ color: grey[50] }} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="subtitle2">{project.title}</Typography>
                  </Grid>
                </Grid>
              }
              subtitle={
                <Grid container cols={12}>
                  <Grid item align="left" xs={1}>
                    <IconButton
                      aria-label="github-icon"
                      onClick={() => window.open(project.repoLink, "_blank")}
                    >
                      <GitHubIcon sx={{ color: grey[50] }} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={11}>
                    <Typography>{project.description}</Typography>
                    <Typography>Built with: {project.technologies}</Typography>
                  </Grid>
                </Grid>
              }
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    );
}

export default Project;