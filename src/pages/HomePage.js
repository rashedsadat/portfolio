import React, { Component, Fragment } from 'react';
import Home from '../components/home/Home';
import NavComponent from '../components/navComponent/NavComponent';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent/>
                <Home/>
            </Fragment>
        );
    }
}

export default HomePage;