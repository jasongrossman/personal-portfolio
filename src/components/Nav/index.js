import React from 'react';

function Nav(props) {

    const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
    return(
        <header className="header row">
        <nav>
            <ul className="nav col" id="nav">
                <h2 className="col">
                    <a href="/">
                        Jason Grossman
                    </a>
                </h2>
                {tabs.map(tab=> (
                    <li className="nav-item mx-3" key={tab} id="nav-item">
                        <a href={'#' + tab}
                            onClick={() => props.setCurrentPage(tab)}
                            className={
                                props.currentPage === tab
                            }
                        >
                        {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

        </header>

    )
}

export default Nav;