import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/home';
import Candidate from './pages/candidate';

export default function () {
    return (
        <Routes>
            <Route exact path="/" >
                <Home />
            </Route>

            <Route exact path="/candidate" >
                <Candidate />
            </Route>
        </Routes>
    )
}