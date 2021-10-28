import React from 'react';

function Nav(props) {

    const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
    return(
        <header>
            <h2>
                <a href="/">
                    Jason Grossman
                </a>
            </h2>
        <nav>
        <ul className="nav nav-tabs">
            {tabs.map(tab=> (
                <li className="nav-item" key={tab}>
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