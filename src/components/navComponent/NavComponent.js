import React, { Component, Fragment } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faConciergeBell, faBriefcase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faNewspaper, faAddressBook } from '@fortawesome/free-regular-svg-icons';

class NavComponent extends Component {
    render() {
        return (
            <Fragment>
                <Navbar variant="dark" className='p-0'>
                    <Container fluid={true} className='p-0'>
                        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                        <Nav className="flex-column navPosition">
                            <Nav.Link href="" className='navName'><FontAwesomeIcon className='navIcon' icon={faHome} /> Home</Nav.Link>
                            <Nav.Link href="" className='navName'><FontAwesomeIcon className='navIcon' icon={faAddressCard} /> About</Nav.Link>
                            <Nav.Link href="" className='navName'><FontAwesomeIcon className='navIcon' icon={faConciergeBell} /> Services</Nav.Link>
                            <Nav.Link href="" className='navName'><FontAwesomeIcon className='navIcon' icon={faBriefcase} /> Portfolio</Nav.Link>
                            <Nav.Link href="" className='navName'><FontAwesomeIcon className='navIcon' icon={faCommentAlt} /> Testimonial</Nav.Link>
                            <Nav.Link href="" className='navName'><FontAwesomeIcon className='navIcon' icon={faNewspaper} /> News</Nav.Link>
                            <Nav.Link href="" className='navName'><FontAwesomeIcon className='navIcon' icon={faAddressBook} /> Contact</Nav.Link>
                            <Nav.Link href="" className='navName'><FontAwesomeIcon className='navIcon' icon={faCodeBranch} /> Skills</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavComponent;