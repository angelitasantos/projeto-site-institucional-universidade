import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import About from '../pages/about/About';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;