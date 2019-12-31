import React from 'react';
import './App.css';
import logo from "./res/logo_tagline@288x.svg";

import {
  Container,
  Col,Row
} from "react-bootstrap";
import NavBar from './components/nav/nav-bar';
import Footer from './components/footer/footer';
import Quiz from "./components/quiz/quiz-container";
import AboutComp from "./components/about";


function Home() {
  return (
        <Container-Fluid>
                <div id="home">
                </div>  
                  <div id="dq" class='App' >
                    <Container>
                        <Row className="justify-content-md-center">
                          <Col xl={6} lg={6}>
                            {/* <Quiz  class='quiz'/> */}
                          </Col >
                        </Row>
                        <div class="About" id="about">
                            <AboutComp/>
                        </div>
                    </Container> 
                  </div>
              
        </Container-Fluid>
  );
}

export default Home;
