import React from 'react';

function Footer() {

    return(
        <footer className="row footer">
            <div className="col footer-name">
                <h2>
                    Made by: Jason Grossman
                </h2>
                <h4>
                    Powered with React
                </h4>
            </div>
            <div className="col footer-contact">
                <h4>
                    From: Toronto, Canada
                </h4>
                <h4>
                   Phone: 416-436-5106
                </h4>
                <h4>
                    Email: <a href="mailto:jasongrossman2@gmail.com">jasongrossman2@gmail.com</a>
                </h4>


            </div>

            <div className="col links">
                <h3 className="col">
                    <span> 
                        <a href="https://github.com/jasongrossman">
                        Github
                        </a>
                    </span>
                </h3>
                <h3 className="col">
                    <span> 
                        <a href="https://www.linkedin.com/in/jason-grossman-1a082430/">
                        LinkedIn
                        </a>
                    </span>
                </h3>
            </div>
        </footer>
    )
}

export default Footer;