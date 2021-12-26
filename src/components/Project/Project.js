import React, {useState} from 'react';
import {ImageList, ImageListItem} from '@mui/material'

function Project() {

    const [projects] = useState([
        {
            image: "https://live.staticflickr.com/65535/51777809834_bb99aa8691_o.jpg",
            title: "Santa's Nice List",
            appLink: "https://santasnicelist.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/santaslist"
        },
        {
            image: "https://live.staticflickr.com/65535/51777397428_997754972a_o.jpg",
            title: "Tech Blog",
            appLink: "https://harvbtechblog.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/techblog"
        },
        {
            image: "https://live.staticflickr.com/65535/51778038145_bc0b7051f2_o.jpg",
            title: "Git Me a Drink",
            appLink: "https://mateusverbar.github.io/gitmeadrink/",
            repoLink: "https://github.com/mateusverbar/gitmeadrink"
        },
        {
            image: "https://live.staticflickr.com/65535/51777397468_0cf3cdb690_o.jpg",
            title: "Food Festival",
            appLink: "https://harvbcoding.github.io/food-festival/",
            repoLink: "https://github.com/HarvBCoding/food-festival"
        },
        {
            image: "https://live.staticflickr.com/65535/51778038135_fba389451e_o.jpg",
            title: "Note Taker",
            appLink: "https://harvbnotetaker.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/note-taker/"
        },
        {
            image: "https://live.staticflickr.com/65535/51777397478_9504fd9707_o.jpg",
            title: "Budget Tracker",
            appLink: "https://harv-budget-tracker.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/budget-tracker"
        }
    ]);

    return (

        <ImageList
          sx={{ width: "100%", height: "100%", alignContent: "center" }}
          variant="woven"
          cols={3}
          gap={0}
        >
            {projects.map((project) => (
                <ImageListItem>
                    <img 
                        src={project.image}
                        srcSet={project.image}
                        alt={project.title}
                        loading="lazy"
                        onClick={() => (window.location.href = project.appLink)}
                        href={project.appLink}
                    ></img>
                </ImageListItem>
            ))}
        </ImageList>

    )
}

export default Project;