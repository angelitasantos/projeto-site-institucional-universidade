import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container display-flex align-items-center justify-content-space-between">
                <Link className="display-flex align-items-center text-decoration-none" to="/">
                    <img className="header-logo" src="icons/favicon.ico" alt="logo" title="logo" />
                    <p className="header-name-company text-decoration-none text-uppercase">React</p>
                </Link>
                <nav>
                    <Link className="header-link text-decoration-none text-uppercase" to="/">Home</Link>
                    <Link className="header-link text-decoration-none text-uppercase" to="/about">About</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;