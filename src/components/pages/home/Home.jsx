import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../shared/header/Header';

const Home = () => (
    <div>
        <Header />
        <h1>Home</h1>
        <Link className="btn" to='/about'>About</Link>
    </div>
);

export default Home;