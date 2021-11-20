import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link className="header-logo-box" to="/">
                    <img className="header-logo" src="icons/favicon.ico" alt="logo" title="logo" />
                    <p className="header-name-company">React</p>
                </Link>
                <nav className="header-links">
                    <Link className="header-link" to="/">Home</Link>
                    <Link className="header-link" to="/about">About</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;