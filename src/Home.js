import React from 'react';
import './App.css';

import {
  Container,
  Col,Row
} from "react-bootstrap";
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
