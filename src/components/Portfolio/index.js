import React, { useRef } from 'react';

function Portfolio() {

    const projectsRef = useRef([
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

    // const [projects, setProjects] = useState([
    //     {
    //         id: '0',
    //         name: 'FoodieLove',
    //         github: 'https://github.com/jasongrossman/team-2',
    //         deployed_link: 'https://jasongrossman.github.io/team-2/',
    //     },
    //     {
    //         id: '1',
    //         name: 'Photo Port',
    //         github: 'https://github.com/jasongrossman/photo-port',
    //         deployed_link: 'https://jasongrossman.github.io/photo-port/'
    //     },
    //     {
    //         id: '2',
    //         name: 'Pizza Hunt',
    //         github: 'https://github.com/jasongrossman/pizza-hunt',
    //         deployed_link: 'https://whispering-hollows-21157.herokuapp.com/'
    //     },
    //     {
    //         id: '3',
    //         name: 'Food Festival',
    //         github: 'https://github.com/jasongrossman/food-festival',
    //         deployed_link: 'https://jasongrossman.github.io/food-festival/'
    //     },
    //     {
    //         id: '4',
    //         name: 'The Sneakers Collector',
    //         github: 'https://github.com/UofTL/the-sneakers-collector',
    //         deployed_link: 'https://peaceful-fortress-81224.herokuapp.com/'
    //     },
    //     {
    //         id: '5',
    //         name: 'Work Day Scheduler',
    //         github: 'https://github.com/jasongrossman/work-day-scheduler',
    //         deployed_link: 'https://jasongrossman.github.io/work-day-scheduler/'
    //     },
    // ]);

    // const toggleProject = (projects) => {
    //     setProjects([...projects]);
    // }

    return(
        <section className="portfolio-container row">
            {projectsRef.current.map(project => (
                <div className="project-list" style={{ width: "50%" }}
                    key={project.id}
                >
                <div className="project-container">
                    <a href={project.deployed_link}>
                    <img src={require(`../../assets/project-images/${project.id}.JPG`).default} 
                        alt={project.name}
                        className="img-thumbnail col mx-2"
                        key={project.name}
                        href={project.deployed_link}
                    />
                    </a>
                    <div>
                    <a href={project.github}>
                        <img src={require(`../../assets/github_icon.png`).default} 
                            alt="github"
                            className="github-icon col mx-2"
                        />
                    </a>
                    <a href={project.deployed_link} className="project-name col mx-2">{project.name}</a>
                    </div>
                </div>
                </div>
            ))}
        </section>
    )
}

export default Portfolio;