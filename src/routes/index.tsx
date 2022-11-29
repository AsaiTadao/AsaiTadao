
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
const MainRoutes = () => {
    return (
        <Router >
            <Routes>
                <Route path='/*' element={<Home/>} />
            </Routes>
        </Router>
    );
};

export default MainRoutes;