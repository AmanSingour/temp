import React, { Component } from 'react';
import {
    Navbar, Row, Col, Nav,

} from 'react-bootstrap';
import FooterItem from './footer-item';
import Social from './Social'

import { MdEmail } from 'react-icons/md';
class Footer extends Component{
    render(){
        return(
            <div style={{
                paddingTop : '2rem'
            }}>
                <Row>
                    <Col xm={6} sm={6} md={6} lg={8} xl={8}>
                        <FooterItem/>
                    </Col>
                </Row>
                 <Row 
                    style={{
                        padding: '2rem 3rem',
                        verticalAlign: 'middle'
                    }}>
                    <Col xm={6} sm={6} md={6} lg={8} xl={8}>
                        <Nav id='contact' className="navbar-custom">
                            <Nav.Link href="mailto://contact@codezila.org" target="_blank"><MdEmail size="2em" /> contact@codezila.org</Nav.Link>
                        </Nav>
                    </Col>
                    <Col 
                        style={{
                            marginLeft: '5rem'
                        }}
                    >
                        <Social s={"2em"} />
                    </Col>
                </Row>
                <Row 
                style={{
                    marginTop:'0rem'
                }}
                className="justify-content-center text-center">
                    <p style={{ 
                        color : '#5F9862' , 
                        fontSize : '0.8rem',
                        }}>
                        {'\u00A9'} codezila.org 2019 All Rights Reserved.</p>
                </Row>
            </div>
        )
    }
}
export default Footer;