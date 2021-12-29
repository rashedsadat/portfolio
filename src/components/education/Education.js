import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import uiuLogo from '../../assets/images/uiuLogo.png';
import NGC from '../../assets/images/NGC.png';
import ProImage from '../proImage/ProImage';

class Education extends Component {
    render() {
        return (
            <Fragment>
                <Container className='p-0 mt-3'>
                    <Row>
                        <Col lg={8} smd={8} sm={12}>
                            <h1 className='serviceheading text-center mb-4'> My Education</h1>
                            <Row>
                                <Col lg={1} md={1} sm={12}>
                                    <h3 className='eduYear'>2021</h3>
                                </Col>
                                <Col lg={1} md={1} sm={12}>
                                    {/* <img src={uiuLogo} className='educationImg' /> */}
                                </Col>
                                <Col lg={10} md={10} sm={12}>
                                    <h1 className='eduInstitute'>United International University</h1>
                                    <h4 className='edudepartment'>Computer Science & Engineering</h4>
                                    <h6 className='edudescription'>Consequat aliqua ad minim sint sit. Culpa non officia velit pariatur ad excepteur dolor enim sunt et. Nostrud fugiat occaecat laboris deserunt do enim nisi esse. Fugiat cupidatat id sit cupidatat enim adipisicing aliqua ullamco ipsum ad. Ullamco ex laborum laborum enim sunt nisi culpa minim quis.</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={1} md={1} sm={12}>
                                    <h3 className='eduYear'>2008</h3>
                                </Col>
                                <Col lg={1} md={1} sm={12}>
                                    {/* <img src={NGC} className='educationImg' /> */}
                                </Col>
                                <Col lg={10} md={10} sm={12}>
                                    <h1 className='eduInstitute'>Noakhali Government College</h1>
                                    <h4 className='edudepartment'>Science Department</h4>
                                    <h6 className='edudescription'>Consequat aliqua ad minim sint sit. Culpa non officia velit pariatur ad excepteur dolor enim sunt et. Nostrud fugiat occaecat laboris deserunt do enim nisi esse. Fugiat cupidatat id sit cupidatat enim adipisicing aliqua ullamco ipsum ad. Ullamco ex laborum laborum enim sunt nisi culpa minim quis.</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={1} md={1} sm={12}>
                                    <h3 className='eduYear'>2005</h3>
                                </Col>
                                <Col lg={1} md={1} sm={12}>

                                </Col>
                                <Col lg={10} md={10} sm={12}>
                                    <h1 className='eduInstitute'>Noakhali Zilla School</h1>
                                    <h4 className='edudepartment'>Science Department</h4>
                                    <h6 className='edudescription'>Consequat aliqua ad minim sint sit. Culpa non officia velit pariatur ad excepteur dolor enim sunt et. Nostrud fugiat occaecat laboris deserunt do enim nisi esse. Fugiat cupidatat id sit cupidatat enim adipisicing aliqua ullamco ipsum ad. Ullamco ex laborum laborum enim sunt nisi culpa minim quis.</h6>
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

export default Education;