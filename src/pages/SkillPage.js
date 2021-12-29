import React, { Component, Fragment } from 'react';
import NavComponent from '../components/navComponent/NavComponent';
import Skills from '../components/skill/Skills';

class SkillPage extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent/>
                <Skills/>
            </Fragment>
        );
    }
}

export default SkillPage;