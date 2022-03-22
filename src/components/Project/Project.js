import React, {useState} from 'react';
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'

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
            image: "marauders_trivia",
            title: "Potter's Marauders Trivia",
            description: "A project where I collaborated with 3 other developers to create a Harry Potter trivia app",
            appLink: "https://stark-plains-49295.herokuapp.com/",
            repoLink: "https://github.com/Hmndtyphn/harry-potter-house",
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
          sx={{ width: "100%", height: "100%"}}
          cols={3}
          rowHeight={400}
        >
            {projects.map((project) => (
                <ImageListItem key={project.image}>
                    <img 
                        src= {`https://res.cloudinary.com/dceprxjzq/image/upload/w_200,h_200,c_lfill,f_auto/v1640574160/Portfolio/${project.image}.jpg`}
                        srcSet= {`https://res.cloudinary.com/dceprxjzq/image/upload/w_200,h_200,c_lfill,f_auto/v1640574160/Portfolio/${project.image}.jpg 2x`}
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