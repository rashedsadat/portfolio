import React, { Component, Fragment } from 'react';
import Education from '../components/education/Education';
import NavComponent from '../components/navComponent/NavComponent';

class EducationPage extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent/>
                <Education/>
            </Fragment>
        );
    }
}

export default EducationPage;