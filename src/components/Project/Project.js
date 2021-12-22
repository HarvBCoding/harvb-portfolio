import React, {useState} from 'react';

function Project() {
    const [projects] = useState([
        {
            title: "Santa's Nice List",
            image: "./assets/projects/santas-nice-list.jpeg",
            appLink: "https://santasnicelist.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/santaslist"
        },
        {
            title: "Git Me a Drink",
            image: "./assets/projects/git-me-a-drink.jpeg",
            appLink: "https://mateusverbar.github.io/gitmeadrink/",
            repoLink: "https://github.com/mateusverbar/gitmeadrink"
        },
        {
            title: "Budget Tracker",
            image: "./assets/projects/budget-tracker.jpeg",
            appLink: "https://harv-budget-tracker.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/budget-tracker"
        },
        {
            title: "Tech Blog",
            image: "./assets/projects/tech-blog.jpeg",
            appLink: "https://harvbtechblog.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/techblog"
        },
        {
            title: "Food Festival",
            image: "./assets/projects/food-festival.jpeg",
            appLink: "https://harvbcoding.github.io/food-festival/",
            repoLink: "https://github.com/HarvBCoding/food-festival"
        },
        {
            title: "Note Taker",
            image: "../assets/projects/note-taker.jpeg",
            appLink: "https://harvbnotetaker.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/note-taker/"
        }
    ]);

    return (
        <div className="flex-row">
            {projects.map((project) => (
                <a href={project.appLink}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="img-thumbnail mx-1"
                    key={project.title}
                  />
                </a>
            ))}
        </div>
    )
}

export default Project;
// return list of projects to map through