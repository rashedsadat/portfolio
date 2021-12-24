import React, { Component, Fragment } from 'react';
import NavComponent from '../components/navComponent/NavComponent';
import Services from '../components/services/Services';

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent/>
                <Services/>
            </Fragment>
        );
    }
}

export default ServicesPage;