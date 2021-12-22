import React from 'react';
import profilePic from '../../assets/profile-pic.jpg';


function About() {

    return(
        <section className="about-body">
        <div className="bio row">
            <img src={profilePic} alt="cover" className="cover-photo col-lg-4 col-md-12"/>
            <div className="col-lg-7 col-md-12">
                <h1 className="about-title">
                    About Me
                </h1>
                <p className="about-text">
                    I am a full stack developer who is passionate about building and creating. 
                    I’ve completed a certificate in Full Stack Web Development from the University of Toronto School of 
                    Continuing Studies so that I can bring ideas to life. Prior to that, I earned 7 years of professional 
                    experience in category management, analytics, operations, and sales. 
                    I’m an entrepreneur at heart who loves to build and create, while using a data-driven, 
                    strategic approach. I am seeking opportunities to learn and refine my development skills 
                    so that I can build better applications independently. As a strong communicator 
                    who can adapt to any team environment, I’m excited to leverage my experience to 
                    join a quality-driven team to build great products.
                </p>
                <ul className="dev-stack">
                        <li className="code">
                            <img src="https://cdn4.iconfinder.com/data/icons/blackicon/54/html5_icon-512.png" tooltip="html" alt="html"/>
                        </li>
                        <li className="code">
                            <img src="https://pic.onlinewebfonts.com/svg/img_242429.png" alt="mongo"/>                        
                        </li>
                        <li className="code">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_436907.png" alt="css"/>
                        </li>
                        <li className="code">
                            <img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-13.jpg" alt="javascript"/>
                        </li>
                        <li className="code">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png" alt="react"/>
                        </li>
                        <li className="code">
                        <img src="https://www.svgrepo.com/show/327379/logo-nodejs.svg" alt="node"/>
                        </li>
                        <li className="code">
                            <img src="https://i2.wp.com/www.mementotech.in/assets/images/icons/express.png" alt="express"/>                        
                        </li>
                        <li className="code">
                            <img src="https://cdn0.iconfinder.com/data/icons/programing-development/24/mysql_database_logo_data_base-512.png" alt="mysql"/>
                        </li>
                        <li className="code">
                            <img src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png" alt="jquery"/>                        
                        </li>
                        <li className="code">
                            <img src="https://www.pngrepo.com/png/330083/512/bootstrap.png" alt="bootstrap"/> 
                        </li>
                    </ul>
            </div>
        </div>
        <div className="card-group row">
            <div className="card-container col-lg-4 col-md-12">
                <div className="card col-md-12">
                    <img src={require(`../../assets/about/coding_card.png`).default} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Full Stack Development</h5>
                    <p className="card-text">
                        Capable of building responsive web applications, using MERN stack. Uses mobile-first development processes, with an eye for U/X. Knowledgeable about industry best practices for design solutions to optimize for user goal completion. 
                        Here are some of the languages and tools I'm most familiar with using.</p>
                    </div>
                </div>
            </div>
            <div className="card-container col-lg-4 col-md-12">
            <div className="card  col-md-12">
            <img src={require(`../../assets/about/project_management_card.png`).default} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Project Management</h5>
                <p className="card-text">
                    I have experience in Agile project management methodology, as well as Waterfall. 
                    I've led multiple project teams with cross functional partners to ship features to market and grow KPIs. 
                    I am a natural leader who can organize large and small teams to get things done on time and in full.
                    Working with others is where I fit best, and I have worked in different roles on different types of teams.    
                </p>
                </div>
            </div>
            </div>
            <div className="card-container col-lg-4 col-md-12">
            <div className="card col-md-12">
            <img src={require(`../../assets/about/strategy_card.png`).default} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Strategy & Analytics</h5>
                <p className="card-text">
                    I Know how to create short term and long term strategies, leveraging data to inform decision making. 
                    Whether that be growth through operational efficiency or innovation, I can map out strategies and execute them.
                    I am able to turn raw data into actionable insights, and vizualize complex data into an easy-to-understand format.
                    I am a natural story teller who can influence key decision makers, and from there build out an end to end strategy.
                </p>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default About;