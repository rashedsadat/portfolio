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
                <Navbar expand="lg" variant="dark">
                    <Container className='mt-4'>
                        <Navbar.Brand href="#home" className='navTitle'>rSadat</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link className='vavDisplay'></Nav.Link>
                                <Nav.Link className='vavDisplay'></Nav.Link>
                                <Nav.Link className='vavDisplay'></Nav.Link>
                            </Nav>
                            <Nav className="navPosition" id="mySidenav">
                                <Nav.Link href="" className='navName'>Home</Nav.Link>
                                <Nav.Link href="" className='navName navSideBorder'>About</Nav.Link>
                                <Nav.Link href="" className='navName navSideBorder'>Services</Nav.Link>
                                <Nav.Link href="" className='navName navSideBorder'>Portfolio</Nav.Link>
                                <Nav.Link href="" className='navName navSideBorder'>Testimonial</Nav.Link>
                                <Nav.Link href="" className='navName navSideBorder'>News</Nav.Link>
                                <Nav.Link href="" className='navName navSideBorder'>Contact</Nav.Link>
                                <Nav.Link href="" className='navName navSideBorder'>Skills</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavComponent;