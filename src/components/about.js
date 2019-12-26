import React, { Component } from "react";
import { Row, Jumbotron, Col } from "react-bootstrap";
import image from './../res/instructor.png';
import { Divider } from "semantic-ui-react";


class AboutComp extends Component{
    render(){
        return(
            <Row>
                
                <Col sm={12} md={12} lg={4} xl={4}>
                    <img width="60%" src={image} alt=" "/>
                </Col>
                <Col sm={12} md={12} lg={8} xl={8}>
                <Jumbotron >
                    <h2>About Us</h2>
                    <Divider />
                    <p style={{
                        color: '#000000'
                    }}>
                    CODEZILA is an Open Source community which is currently working on three programming languages C,
                    Java and Python. We tell difference between them 
                    using some quiz so student can write a C program into Java and Python and vice versa.
                    </p>
                    <p>
                    {/* <Button variant="primary">Learn more</Button> */}
                    </p>
                </Jumbotron>
                </Col>
            </Row>
        )
    }
}
export default AboutComp;