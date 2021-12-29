import React, { Component, Fragment } from 'react';
import ProImage from '../proImage/ProImage';
import { Col, Container, Row, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

class Skills extends Component {
    constructor(){
        super();
        this.state = {
            val1 : 50,
            val2 : 90,
            val3 : 80,
            val4 : 60,
            val5 : 75,
            val6 : 95
        }
    }
    render() {
        return (
            <Fragment>
                <Container className='p-0 mt-3'>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <h1 className='serviceheading text-center skillMargin'>My Skills</h1>
                            <Row className='progressMargin'>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>HTML</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val1} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val1} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>CSS</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val2} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val2} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>Bootstrap</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val3} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val3} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>ReactJs</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val1} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val1} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>C</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val2} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val2} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>Python</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val3} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val3} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>PHP</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val4} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val4} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>Laravel</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val5} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val5} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Row>
                                        <Col lg={9} md={9} sm={9}>
                                            <h6 className='skillHeading'>MySQL</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={3}>
                                            <h6 className='skillHeading alignRight'>{this.state.val6} %</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                        <ProgressBar className='progressBar' now={this.state.val6} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='skillMarginLower text-center'>
                                <Col lg={3} md={6} sm={12}>
                                    <FontAwesomeIcon className='skillIcon' icon={faSun} />
                                    <h6 className='skillNumber'>2</h6>
                                    <h6 className='skillNumDes'>Years of Experience</h6>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <FontAwesomeIcon className='skillIcon' icon={faSmile} />
                                    <h6 className='skillNumber'>20</h6>
                                    <h6 className='skillNumDes'>Happy Client</h6>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <FontAwesomeIcon className='skillIcon' icon={faUsers} />
                                    <h6 className='skillNumber'>100</h6>
                                    <h6 className='skillNumDes'>Followers on FB</h6>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <FontAwesomeIcon className='skillIcon' icon={faProjectDiagram} />
                                    <h6 className='skillNumber'>25</h6>
                                    <h6 className='skillNumDes'>Finished Project</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <ProImage/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Skills;