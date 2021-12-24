import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/about" element={<AboutPage/>} />
                    <Route exact path="/service" element={<ServicesPage/>} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRouter;