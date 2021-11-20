import React from 'react';
import { Link } from 'react-router-dom';

import '../../../App.css';

import Header from '../../shared/header/Header';
import Sidebar from '../../shared/sidebar/Sidebar';
import Footer from '../../shared/footer/Footer';

const Home = () => (
    <div>
        <Header />
        <Sidebar />
        <h1>Home</h1>
        <Link className="btn" to='/about'>About</Link>
        <Footer />
    </div>
);

export default Home;