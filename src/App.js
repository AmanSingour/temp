import React, { Component } from 'react';
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
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
        <Container-Fluid>
            <BrowserRouter>
                  <div class='Header' sticky='top'>
                      <NavBar class='ontop' logo={logo} width='50%'/>
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
                </div>  
                <div class='footer'>      
                  <Footer />
              </div>
            </BrowserRouter>
      
      </Container-Fluid>
  );
}

class AppContainer extends Component {
    render() {
        return (
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        );
    }
}

export default AppContainer;
