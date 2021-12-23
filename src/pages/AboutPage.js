import React, { Component, Fragment } from 'react';
import About from '../components/about/About';
import NavComponent from '../components/navComponent/NavComponent';

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent/>
                <About/>
            </Fragment>
        );
    }
}

export default AboutPage;