import React from 'react';

function Footer() {

    return(
        <footer className="row">
            <div>
                <h2 className="col mx-1" id="footer-name">
                    Made by: Jason Grossman
                </h2>
                <h3>
                    Powered with React
                </h3>
            <h3 className="col mx-2">
                <span> 
                    <a href="https://github.com/jasongrossman">
                    Checkout my GitHub page here:
                    </a>
                </span>
            </h3>
            <h3 className="col mx-2">
                <span> 
                    <a href="https://www.linkedin.com/in/jason-grossman-1a082430/">
                    Connect with me on LinkedIn here:
                    </a>
                </span>
            </h3>
            </div>
        </footer>
    )
}

export default Footer;