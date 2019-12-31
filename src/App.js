import React from 'react';
import './App.css';
import logo from "./res/logo_tagline@288x.svg";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


import Adi from './Adi';
import Home from "./Home";
import { Container } from 'react-bootstrap';
import NavBar from './components/nav/nav-bar';
import Footer from './components/footer/footer';
import Ace from './components/quiz/editor';

function App() {
  return (
        <Container-Fluid>
            <BrowserRouter>
                  <div class='Header'>
                    <Container sticky='top' >
                      <NavBar class='ontop' logo={logo} width='50%'/>
                    </Container>
                  </div>
                <div id="App">
                  <div>
                      <Switch>
                      <Route path="/" component={Home} exact/>
                      <Route path="/admin" component={Adi}/>
                      <Route path="/ed" component={Ace}/>
                      <Route component={Error}/>
                    </Switch>
                  </div> 
                </div>  <div class='footer'>
                <Container>          
                  <Footer />
                </Container>
              </div>
            </BrowserRouter>
      
      </Container-Fluid>
  );
}

export default App;
