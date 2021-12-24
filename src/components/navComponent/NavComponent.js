import React, { Component, Fragment } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavComponent extends Component {
    constructor(){
        super()
        this.state = {
            navTitle : "navTitle",
            navDisplay : "navDisplay",
            navName : "navName",
            navSideBorder : "navSideBorder"
        }
    }
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container className='mt-4'>
                        <Navbar.Brand><NavLink to="/" className={this.state.navTitle}>rSadat</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link className={this.state.navDisplay} href=""></Nav.Link>
                                <Nav.Link className={this.state.navDisplay} href=""></Nav.Link>
                                <Nav.Link className={this.state.navDisplay} href=""></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink className={this.state.navName} to="/">Home</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navName} to="/about">About</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navName} to="/service">Services</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navName} to="/portfolio">Portfolio</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navName} to="/testimonial">Testimonial</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navName} to="/news">News</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navName} to="/contact">Contact</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navName} to="/skills">Skills</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavComponent;