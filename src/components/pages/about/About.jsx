import React from 'react';

import '../../../App.css';

import { Container } from '../../styles';

import Header from '../../shared/header/Header';
import QuemSomos from './QuemSomos';
import Equipe from './Equipe';
import Footer from '../../shared/footer/Footer';

const About = () => (
    <div>
        <Header />
        <Container className="container-about">
            <QuemSomos />
            <Equipe />
        </Container>
        <Footer />
    </div>
);

export default About;