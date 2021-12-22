import React, {useState} from 'react';
const santaImage = require("../../assets/projects/santas-nice-list.jpeg").default
const drinkImage = require("../../assets/projects/git-me-a-drink.jpeg").default 

function Project() {
    const [projects] = useState([
        {
            title: "Santa's Nice List",
            image: santaImage,
            appLink: "https://santasnicelist.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/santaslist"
        },
        {
            title: "Git Me a Drink",
            image: drinkImage,
            appLink: "https://mateusverbar.github.io/gitmeadrink/",
            repoLink: "https://github.com/mateusverbar/gitmeadrink"
        },
        {
            title: "Budget Tracker",
            image: require("../../assets/projects/budget-tracker.jpeg").default,
            appLink: "https://harv-budget-tracker.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/budget-tracker"
        },
        {
            title: "Tech Blog",
            image: require("../../assets/projects/tech-blog.jpeg").default,
            appLink: "https://harvbtechblog.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/techblog"
        },
        {
            title: "Food Festival",
            image: require("../../assets/projects/food-festival.jpeg").default,
            appLink: "https://harvbcoding.github.io/food-festival/",
            repoLink: "https://github.com/HarvBCoding/food-festival"
        },
        {
            title: "Note Taker",
            image: require("../../assets/projects/note-taker.jpeg").default,
            appLink: "https://harvbnotetaker.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/note-taker/"
        }
    ]);

    return (
        <div className="flex-row">
            {projects.map((project) => (
                <a href={project.appLink} key={project.title}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="img-thumbnail mx-1"
                  />
                </a>
            ))}
        </div>
    )
}

export default Project;
// return list of projects to map through