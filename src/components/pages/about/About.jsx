import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';

const About = () => (
    <div>
        <Header />
        <h1>About</h1>
        <Link className="btn" to='/'>Home</Link>
        <Footer />
    </div>
);

export default About;