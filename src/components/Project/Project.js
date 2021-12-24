import React, {useState} from 'react';

function Project() {
    const [projects] = useState([
        {
            image: "santas-nice-list.jpeg",
            title: "Santa's Nice List",
            appLink: "https://santasnicelist.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/santaslist"
        },
        {
            image: "git-me-a-drink.jpeg",
            title: "Git Me a Drink",
            appLink: "https://mateusverbar.github.io/gitmeadrink/",
            repoLink: "https://github.com/mateusverbar/gitmeadrink"
        },
        {
            image: "budget-tracker.jpeg",
            title: "Budget Tracker",
            appLink: "https://harv-budget-tracker.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/budget-tracker"
        },
        {
            image: "tech-blog.jpeg",
            title: "Tech Blog",
            appLink: "https://harvbtechblog.herokuapp.com/",
            repoLink: "https://github.com/harvbcoding/techblog"
        },
        {
            image: "food-festival.jpeg",
            title: "Food Festival",
            appLink: "https://harvbcoding.github.io/food-festival/",
            repoLink: "https://github.com/HarvBCoding/food-festival"
        },
        {
            image: "note-taker.jpeg",
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
                    src={require(`../../assets/projects/${project.image}`)}
                    alt={project.title}
                    className="img-thumbnail mx-1"
                  />
                </a>
            ))}
        </div>
    )
}

export default Project;