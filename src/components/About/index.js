import React from 'react';
import profilePic from '../../assets/profile-pic.jpg';


function About() {

    return(
        <section className="about-body">
        <div className="bio">
            <img src={profilePic} alt="cover" className="cover-photo"/>
            <div>
            <h1 className="about-title">
                 About Me
            </h1>
                <p className="about-text">
                Full stack web developer with professional business experience in category management and analytics. 
                Recently earned a certificate in full stack development from the University of Toronto School of Continuing Studies. 
                Now proficient in Javascript, Node, React, MongoDB as well as responsive web design. 
                With a history in project management and bringing products to market, I can now plan and ship development features as well. 
                I’m Passionate about solving problems, and using technology to create new solutions. 
                I’m an entrepreneur at heart who loves to build and create, while using a data-driven, strategic approach. 
                I am seeking an opportunity to learn and refine my development capabilities so that I can build better applications independently. 
                As a strong communicator who can adapt to any team environment, I’m excited to leverage my experience to join a quality-driven team to build great products.
                </p>
            </div>
        </div>
        <div className="card-group">
            <div className="card">
                <img src={require(`../../assets/about/coding_card.png`).default} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Full Stack Development</h5>
                <p className="card-text">Capable of building responsive web applications, using MERN stack. Uses mobile-first development processes, with an eye for U/X. Knowledgeable about industry best practices for design solutions to optimize for user goal completion.</p>
                </div>
            </div>
            <div className="card">
            <img src={require(`../../assets/about/project_management_card.png`).default} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Project Management</h5>
                <p className="card-text">Experience in Agile project management methodology, as well as Waterfall. Led multiple project teams with cross functional partners to ship features to market and grow KPIs. A natural leader who can organize large and small teams to get things done on time and in full.</p>
                </div>
            </div>
            <div className="card">
            <img src={require(`../../assets/about/strategy_card.png`).default} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Strategy & Analytics</h5>
                <p className="card-text">Knows how to create short term and long term strategies, leveraging data to inform decision making. Whether that be growth through operational efficiency or innovation, can map out strategies and execute them.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;