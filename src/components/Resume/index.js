import React from 'react';
import cv from '../../assets/resume/Jason.Grossman.Resume.pdf';

function Resume() {

    return(
    <section id="resume">

        <div>
        <button type="button" class="resume-download btn-info">            
            <a href={cv} > 
                Download my Resume here:
            </a>
        </button>
        </div>
        <br />
        <div className="resume-section">
            <h2 className="section-title">Summary</h2>
            <p className="summary">
                Full stack developer with 7 years of professional business experience in category management, operations, and 
                analytics. An entrepreneur at heart, passionate about strategic planning, solving problems, and creating. Known 
                for being an excellent communicator who can work in different team structures, with a track record of project 
                leadership.
            </p>
        </div>
        <div className="resume-section">
            <h2 className="section-title">Technical Skills</h2>
            <h5 className="tech-stack">Languages:</h5>
                    <p>
                        JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
                    </p>
            <h5 className="tech-stack">Applications: </h5>
                    <p> 
                        GitHub, Heroku, MongoDB, MySQL
                    </p>
            <h5 className="tech-stack">Tools: </h5>
                    <p> 
                    React, Node, Express, GraphQL, Handlebars, jQuery, Bootstrap
                    </p>
        </div>
        <div className="resume-section row">
            <h2 className="section-title">Education</h2>
            <div className="school col-4">
            <img src={require(`../../assets/resume/uoft.svg`).default} className="uoft" alt="u-of-t"/>            
            <h3>University of Toronto, School of Continuing Studies</h3>
                <h4>Toronto, ON <span> - 2021</span></h4>
                <p className="degree">Coding Bootcamp Certificate</p>
            </div>
            <div className="school col-4">
                <img src={require(`../../assets/resume/western.png`).default} className="western" alt="western"/>            
                <h3>Western University, School of Continuing Studies</h3>
                <h4>London, ON <span> - 2020</span></h4>
                <p className="degree">Master the Entrepreneur Skillset Course, Certificate of Achievement</p>
            </div>
            <div className="school col-4">
                <img src={require(`../../assets/resume/ivey.jpg`).default} className="ivey" alt="ivey"/>            
                <h3>Richard Ivey School of Business</h3>
                <h4>London, ON <span> - 2014</span></h4>
                <p className="degree">Bachelor of Arts, Honours Business Administration</p>
            </div>
        </div>
        <div className="resume-section">
            <h2 className="section-title">Experience</h2>
            <div className="role-container row">
            <div className="role col-12">
                <h3 className="company">
                    Suncor Energy Inc.
                </h3>
                <h4 className="position">
                    Category Specialist, Car Wash – Category Management
                </h4>
                <ul>
                    <li>
                        Delivered two annual business plans for the car wash category, using strategic planning and analytical skills to develop
                        key growth initiatives, P&L forecasting, budget allocation, and marketing campaigns, in order to achieve record
                        financial results of $98M in sales and $54M in margin.
                    </li>
                    <li>
                        Oversaw multiple capital investment initiatives using project management and stakeholder management skills to
                        deliver asset upgrades and marketing initiatives to provide a best in class value proposition and customer experience.
                    </li>
                    <li>
                        Responsible for all marketing programs and campaigns, using communication and collaboration skills to bring them to
                        market and ensure successful execution by operations, resulting in 8% YoY unit growth and 50% market share.
                    </li>
                    <li>
                        Led a 5 year strategic business review, using analytical and collaboration skills, which lead to the transformation of
                        campaign strategy, product prioritization, and channel development.
                    </li>
                </ul>
            </div>
            <div className="role col-4">
                    <h3 className="company">Suncor Energy Inc.</h3>
                    <h4 className="position">Advisor, Card Production – Transaction Management</h4>
                    <ul>
                        <li>
                            Brought virtual cards to market, using project management and collaboration skills to work with the development
                            team and sales group to deliver necessary system enhancements and process frameworks needed to launch.
                        </li>
                        <li>
                            As RFP project lead, collaborated with Supply Chain to develop the scope of work and award contracts to 2 vendors,
                            achieving $1.2M in cost savings over two 3 year contracts while also securing improved terms on quality assurance and
                            service level requirements.
                        </li>
                        <li>
                            Used analytics to develop new inventory management score-carding, which overhauled the Card Production supply
                            and distribution chains which enabled the reduction of inventory by 50%, and realized over $250K in cost savings in
                            the first year.
                        </li>
                    </ul>
            </div>
            <div className="role col-4">
                    <h3 className="company">Suncor Energy Inc.</h3>
                    <h4 className="position">Optimization Analyst – Refining and Logistics</h4>
                    <ul>
                        <li>
                            Conducted market research and analysis using Argus, in order to prepare weekly reports for Executives with insights
                            on the business environment in the O&G Industry, which was used to support decision making.
                        </li>
                        <li>
                            Through analysis and collaboration with stakeholders, assisted in the preparation of short term refinery production
                            estimates and pricing forecasts to optimize refinery capacity utilization and maximize profitability of refined products.
                        </li>
                        <li>
                            Used organization skills and attention to detail to reliably deliver business performance and pricing reports to
                            stakeholders, in order to support trading activities and accounting processes. 
                        </li>
                    </ul>
            </div>
            <div className="role col-4">
                    <h3 className="company">Suncor Energy Inc.</h3>
                    <h4 className="position">Account Manager – Commercial Road Transport</h4>
                    <ul>
                        <li>
                            Managed a base client portfolio worth $40M, developing sales and relationship management skills to retain existing
                            business while growing to new clients, resulting in a 10% increase in base accounts within my portfolio.
                        </li>
                        <li>
                            Prepared pitch decks and RFP proposals for high value clients, using communication and presentation skills to win
                            new business, including the closing of FedEx and City of Toronto accounts worth over 100ML in combined volume.
                        </li>
                    </ul>
            </div>
        </div>
        </div>
    </section>

    )
}

export default Resume;