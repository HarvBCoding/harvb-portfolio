import React, {useState} from 'react';
import {ImageList, ImageListItem, ImageListItemBar, IconButton} from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";

function srcset(image, size, rows = 1, cols = 2) {
    return {
        src: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size * cols},h_${size * rows},c_lfill,f_auto/v1640574160/Portfolio/${image}.jpg`,
        srcSet: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size *  cols},h_${size * rows},c_lfill,f_auto/v1640574160/Portfolio/${image}.jpg 2x`
    };
}

function Project() {

    const [projects] = useState([
        {
            image: "budget-tracker",
            title: "Budget Tracker",
            appLink: "https://harv-budget-tracker.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/budget-tracker",
            rows: 2,
            cols: 3
        },
        {
            image: "santas-nice-list",
            title: "Santa's Nice List",
            appLink: "https://santasnicelist.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/santaslist"
        },
        {
            image: "marauders_trivia",
            title: "Potter's Marauders Trivia",
            appLink: "https://stark-plains-49295.herokuapp.com/",
            repoLink: "https://github.com/Hmndtyphn/harry-potter-house"
        },
        {
            image: "git-me-a-drink",
            title: "Git Me a Drink",
            appLink: "https://mateusverbar.github.io/gitmeadrink/",
            repoLink: "https://github.com/mateusverbar/gitmeadrink"
        },
        {
            image: "food-festival",
            title: "Food Festival",
            appLink: "https://harvbcoding.github.io/food-festival/",
            repoLink: "https://github.com/HarvBCoding/food-festival",
            cols: 3,
            rows: 2
        },
        {
            image: "note-taker",
            title: "Note Taker",
            appLink: "https://harvbnotetaker.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/note-taker/"
        }
    ]);

    return (
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        variant="quilted"
        cols={5}
        rowHeight={400}
      >
        {projects.map((project) => (
          <ImageListItem key={project.image} cols={project.cols || 2} rows={project.rows || 1}>
            <img
              {...srcset(project.image, 400, project.rows, project.cols)}
              alt={project.title}
              loading="lazy"
              onClick={() => (window.location.href = project.appLink)}
            ></img>
            <ImageListItemBar
              title={project.title}
              actionIcon={
                <IconButton
                  aria-label="github-icon"
                  size="large"
                  onClick={() => (window.location.href = project.repoLink)}
                >
                  <GitHubIcon color="action" />
                </IconButton>
              }
              actionPosition="left"
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    );
}
// check to change icon button color to white
export default Project;