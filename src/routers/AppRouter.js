import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/about" element={<AboutPage/>} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRouter;