import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProImage from '../proImage/ProImage';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center p-0 mt-3'>
                    <Row>
                        <Col lg={8} md={8} sm={12} className='homeDetails'>
                            <h3 className='homeSubTitle'>Full Stack Developer</h3>
                            <h1 className='homeTitle'>Md Shahadat Hossen</h1>
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

export default Home;