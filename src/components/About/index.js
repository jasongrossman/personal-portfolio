import React from 'react';
import profilePic from '../../assets/profile-pic.jpg';


function About() {

    return(
        <section>
            <h1>
                Who Am I?
            </h1>
            <img src={profilePic} style={{ width: "25%" }} alt="cover" />
            <div>
                <p className="about-text">
                My name is Jason and I believe in doing things the right way. I have a passion for building and creating,
                with strategic thinking as my foundation. I like to think of new ideas, and put them into action. I have a 
                background in business, with professional experience in energy, retail, and consumer goods. Now I am 
                building up my capability in full stack development, in order to build in a digital world.
                </p>
            </div>
        </section>
    )
}

export default About;