import React, { Component } from "react";
import './navStyle.css' ;
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import NavItem from './nav-item';


class NavBar extends Component{
    render(){
        return (
            <Navbar collapseOnSelect expand="md" bg="#fff" variant="light">
                <Navbar.Brand  href="#home"><img width={this.props.width} height={this.props.height} src={this.props.logo} alt='CODEZILA'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavItem/>
                    <Nav class="navbar-custom">
                    <Nav.Link eventKey={2} href="#">
                        Login
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>      
        )
    }
}

export default NavBar;