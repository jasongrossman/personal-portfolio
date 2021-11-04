import React, { useState } from 'react';

function Portfolio() {

    const [projects, setProjects] = useState([
        {
            id: '0',
            name: 'FoodieLove',
            github: 'https://github.com/jasongrossman/team-2',
            deployed_link: 'https://jasongrossman.github.io/team-2/',
        },
        {
            id: '1',
            name: 'Photo Port',
            github: 'https://github.com/jasongrossman/photo-port',
            deployed_link: 'https://jasongrossman.github.io/photo-port/'
        },
        {
            id: '2',
            name: 'Pizza Hunt',
            github: 'https://github.com/jasongrossman/pizza-hunt',
            deployed_link: 'https://whispering-hollows-21157.herokuapp.com/'
        },
        {
            id: '3',
            name: 'Food Festival',
            github: 'https://github.com/jasongrossman/food-festival',
            deployed_link: 'https://jasongrossman.github.io/food-festival/'
        },
        {
            id: '4',
            name: 'The Sneakers Collector',
            github: 'https://github.com/UofTL/the-sneakers-collector',
            deployed_link: 'https://peaceful-fortress-81224.herokuapp.com/'
        },
        {
            id: '5',
            name: 'Work Day Scheduler',
            github: 'https://github.com/jasongrossman/work-day-scheduler',
            deployed_link: 'https://jasongrossman.github.io/work-day-scheduler/'
        },
    ]);

    const toggleProject = (projects) => {
        setProjects({...projects});
    }

    return(
        <section>
            {projects.map(projects => (
                <ul className="project-list"
                    onClick={() => toggleProject(projects)} >
                    <li className="project-name">
                    {projects.name} 
                    </li>
                    <li className="project-github">
                        {projects.github}
                    </li>
                    <li className="project-li">
                        {projects.deployed_link}
                    </li>
                    <img src={require(`../../assets/project-images/${projects.id}.JPG`).default} 
                        alt={projects.name}
                        className="img-thumbnail mx-1"
                        key={projects.name}
                    />
                    </ul>
            ))}
        </section>
    )
}

export default Portfolio;