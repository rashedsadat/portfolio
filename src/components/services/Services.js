import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ProImage from '../proImage/ProImage';
import { faCode, faCogs } from '@fortawesome/free-solid-svg-icons';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className='p-0 mt-3'>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <h1 className='serviceheading text-center mt-5'>My Service</h1>
                            <Row  className='serviceContainer'>
                                <Col lg={1} md={1} sm={0}></Col>

                                <Col lg={5} md={5} sm={12}>
                                    <Card className='text-center serviceCard'>
                                        <Card.Body>
                                            <FontAwesomeIcon className='seviceIcon mb-5' icon={faCode} />
                                            <Card.Title className='serviceTitle mb-3'>FrontEnd</Card.Title>
                                            <Card.Subtitle className="mb-2 serviceSubTitle">HTML CSS BootStrap ReactJs</Card.Subtitle>
                                            {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text> */}
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={5} md={5} sm={12}>
                                    <Card className='text-center serviceCard'>
                                        <Card.Body>
                                            <FontAwesomeIcon className='seviceIcon mb-5' icon={faCogs} />
                                            <Card.Title className='serviceTitle mb-3'>BackEnd</Card.Title>
                                            <Card.Subtitle className="mb-2 serviceSubTitle">PHP, Laravel</Card.Subtitle>
                                            {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text> */}
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col lg={1} md={1} sm={0}></Col>
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

export default Services;