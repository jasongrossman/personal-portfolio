import React from 'react';

function Footer() {

    return(
        <footer className="container">
            <div className="row footer-name">
                <h2>
                    Made by: Jason Grossman
                </h2>
                <h3>
                    Powered with React
                </h3>
            </div>
            <div className="row">
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