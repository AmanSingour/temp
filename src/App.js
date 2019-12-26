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


import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

function App() {
  return (
        <Container-Fluid>
              <div class='Header'>
                <Container sticky='top' >
                  <NavBar class='ontop' logo={logo} width='50%'/>
                </Container>
              </div>
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
              <div class='footer'>
                <Container>          
                  <Footer/>
                </Container>
              </div>
        </Container-Fluid>
  );
}

export default App;
