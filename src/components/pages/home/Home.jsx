import React from 'react';

import '../../../App.css';
import './home.css';

import { Container } from '../../styles';

import Header from '../../shared/header/Header';
import Slides from './Slides';
import Footer from '../../shared/footer/Footer';

const Home = () => (
    <div>
        <Header />
        <Container className="container-home">
            <Slides />
        </Container>
        <Footer />
    </div>
);

export default Home;