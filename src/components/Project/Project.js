import React, {useState} from 'react';
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size * cols},h_${size * rows},c_lfill/${image}.jpg`,
      srcSet: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size * cols},h_${size * rows},c_lfill/${image}.jpg`,
    };
  }

function Project() {

    const [projects] = useState([
        {
            image: "budget-tracker",
            title: "Budget Tracker",
            description: "An app to track a budget on or offline",
            appLink: "https://harv-budget-tracker.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/budget-tracker",
            rows: 1,
            cols: 1
        },
        {
            image: "santas-nice-list",
            title: "Santa's Nice List",
            description: "A password protected app for your Christmas List",
            appLink: "https://santasnicelist.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/santaslist",
            rows: 1,
            cols: 2
        },
        {
            image: "tech-blog",
            title: "Tech Blog",
            description: "A class assignment creating a hypothetical tech blog site",
            appLink: "https://harvbtechblog.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/techblog",
            rows: 1,
            cols: 2
        },
        {
            image: "git-me-a-drink",
            title: "Git Me a Drink",
            description: "An app to return cocktails based on selected alochol preference",
            appLink: "https://mateusverbar.github.io/gitmeadrink/",
            repoLink: "https://github.com/mateusverbar/gitmeadrink",
            rows: 1,
            cols: 1
        },
        {
            image: "food-festival",
            title: "Food Festival",
            description: "A class assignment creating a hypthetical PWA site for a food festival",
            appLink: "https://harvbcoding.github.io/food-festival/",
            repoLink: "https://github.com/HarvBCoding/food-festival",
            rows: 1,
            cols: 1
        },
        {
            image: "note-taker",
            title: "Note Taker",
            description: "An app that saves notes",
            appLink: "https://harvbnotetaker.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/note-taker/",
            rows: 1,
            cols: 2
        }
    ]);

    return (

        <ImageList
          sx={{ width: "100%", height: "100%", overflowY: 'scroll'}}
          variant="quilted"
          cols={3}
          rowHeight={525}
        >
            {projects.map((project) => (
                <ImageListItem key={project.image} cols={project.cols || 1} rows={project.rows || 1}>
                    <img 
                        {...srcset(project.image, 525, project.rows, project.cols)}
                        alt={project.title}
                        loading="lazy"
                        onClick={() => (window.location.href = project.appLink)}
                    ></img>
                    <ImageListItemBar
                        title={project.title}
                        subtitle={project.description}
                        >

                    </ImageListItemBar>
                </ImageListItem>
            ))}
        </ImageList>

    )
}

export default Project;