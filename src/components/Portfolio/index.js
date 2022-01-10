import React, { useRef } from 'react';

function Portfolio() {

    const projectsRef = useRef([
        {
            id: '0',
            name: 'Shop Shop',
            github: 'https://github.com/jasongrossman/shop-shop',
            deployed_link: 'https://fathomless-woodland-74704.herokuapp.com/'
        },
        {
            id: '1',
            name: 'Book Search Engine',
            github: 'https://github.com/jasongrossman/book-search-engine',
            deployed_link: 'https://floating-falls-40516.herokuapp.com/'
        },
        {
            id: '2',
            name: 'Budget Tracker',
            github: 'https://github.com/jasongrossman/budget-tracker',
            deployed_link: 'https://protected-crag-30220.herokuapp.com/'
        },
        {
            id: '3',
            name: 'FoodieLove',
            github: 'https://github.com/jasongrossman/team-2',
            deployed_link: 'https://jasongrossman.github.io/team-2/',
        },
        {
            id: '4',
            name: 'Photo Port',
            github: 'https://github.com/jasongrossman/photo-port',
            deployed_link: 'https://jasongrossman.github.io/photo-port/'
        },
        {
            id: '5',
            name: 'Pizza Hunt',
            github: 'https://github.com/jasongrossman/pizza-hunt',
            deployed_link: 'https://whispering-hollows-21157.herokuapp.com/'
        },
        {
            id: '6',
            name: 'Food Festival',
            github: 'https://github.com/jasongrossman/food-festival',
            deployed_link: 'https://jasongrossman.github.io/food-festival/'
        },
        {
            id: '7',
            name: 'Work Day Scheduler',
            github: 'https://github.com/jasongrossman/work-day-scheduler',
            deployed_link: 'https://jasongrossman.github.io/work-day-scheduler/'
        }
        // ,
        // {
        //     id: '8',
        //     name: 'Virtual Garage',
        //     github: 'https://github.com/virtualgarage33333/virtual-garage',
        //     deployed_link: 'https://virtual-garage-33333.herokuapp.com'
        // }
    ]);


    return(
        <section className="portfolio-container row">
            {projectsRef.current.map(project => (
                <div className="project-list col-lg-6 md-12" 
                    key={project.id}
                >
                <div className="project-container">
                    <a href={project.deployed_link}>
                    <img src={require(`../../assets/project-images/${project.id}.JPG`).default} 
                        alt={project.name}
                        className="img-thumbnail" 
                        key={project.name}
                        href={project.deployed_link}
                    />
                    </a>
                    <div className="link-container">
                    <a href={project.github}>
                        <img src={require(`../../assets/github_icon.png`).default} 
                            alt="github"
                            className="github-icon col md-2"
                        />
                    </a>
                    <a href={project.deployed_link} className="project-name col md-2">{project.name}</a>
                    </div>
                </div>
                </div>
            ))}
        </section>
    )
}

export default Portfolio;