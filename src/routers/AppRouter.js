import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import SkillPage from '../pages/SkillPage';
import EducationPage from '../pages/EducationPage';

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/about" element={<AboutPage/>} />
                    <Route exact path="/service" element={<ServicesPage/>} />
                    <Route exact path="/skills" element={<SkillPage/>} />
                    <Route exact path="/education" element={<EducationPage/>} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRouter;