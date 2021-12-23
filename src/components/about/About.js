import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ProImage from '../proImage/ProImage';
import resume from '../../assets/files/Md Shahadat Hossen.pdf';
import DownloadLink from 'react-download-link';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
    render() {
        return (
            <Fragment>
                <Container className='p-0 mt-3'>
                    <Row>
                        <Col lg={8} md={8} sm={12} className='p-5 justify'>
                            <h4 className='aboutTitle'>Hi! I'm Md Shahadat Hossen</h4>
                            <br/>
                            <p className='aboutParagraph justify'>Dolor commodariatur aliquip exceriatur nostrud dolore qui id. Cupidatat enim ullamco aliqua eu elit veniam eiusmod magna ipsum. Nulla excepteur nostrud incididunt voluptate nulla ex deserunt duis fugiat culpa non.</p>
                            <br/>
                            <DownloadLink className="aboutDownload" label="Download CV" filename="Md Shahadat Hossen.pdf" /><br/>
                            <br/>
                            <br/>
                            <a className='aboutLink text-center' href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a className='aboutLink text-center' href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a className='aboutLink text-center' href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a className='aboutLink text-center' href=""><FontAwesomeIcon icon={faGithub} /></a>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h5 className='aboutParagraph justify'><FontAwesomeIcon className='aboutCon' icon={faEnvelope} /> rashedsadat27@gmail.com</h5>
                            <h5 className='aboutParagraph justify'><FontAwesomeIcon className='aboutCon' icon={faPhoneAlt} /> ( +88 )01675 875 019</h5>
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

export default About;