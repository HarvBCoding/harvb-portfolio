import React, {useState} from 'react';

function Project() {
    const [projects] = useState([
        {
            id: "santas-nice-list",
            title: "Santa's Nice List",
            appLink: "https://santasnicelist.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/santaslist"
        },
        {
            id: "git-me-a-drink",
            title: "Git Me a Drink",
            appLink: "https://mateusverbar.github.io/gitmeadrink/",
            repoLink: "https://github.com/mateusverbar/gitmeadrink"
        },
        {
            id: "budget-tracker",
            title: "Budget Tracker",
            appLink: "https://harv-budget-tracker.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/budget-tracker"
        },
        {
            id: "tech-blog",
            title: "Tech Blog",
            appLink: "https://harvbtechblog.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/techblog"
        },
        {
            id: "food-festival",
            title: "Food Festival",
            appLink: "https://harvbcoding.github.io/food-festival/",
            repoLink: "https://github.com/HarvBCoding/food-festival"
        },
        {
            id: "note-taker",
            title: "Note Taker",
            appLink: "https://harvbnotetaker.herokuapp.com/",
            repoLink: "https://github.com/HarvBCoding/note-taker/"
        }
    ]);

    return (
        <div className="flex-row">
            {projects.map((project) => (
                <a href={project.appLink} key={project.title}>
                  <img 
                    src={require(`../../assets/projects/${project.id}.jpeg`)}
                    alt={project.title}
                    className="img-thumbnail mx-1"
                  />
                </a>
            ))}
        </div>
    )
}

export default Project;