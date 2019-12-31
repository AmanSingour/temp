import React, { Component } from 'react';
import './navStyle.css';
import {
    Nav,
    NavDropdown
} from 'react-bootstrap';


class NavItem extends Component{
    render() {
        return (
            <Nav defaultActiveKey="#home" 
                className="mr-auto navbar-custom">
                    <Nav.Link href="/" class="active">Home</Nav.Link>
                    <NavDropdown title="Quiz" id="collasible-nav-dropdown" class="ddown-custom">
                        <NavDropdown.Item href="#dq">Daily Quiz</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Saturday Task</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Sunday Contest</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#about" >About Us</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
        )
    }
}

export default NavItem;