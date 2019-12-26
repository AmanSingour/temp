import React from "react";
import App from './App';

import { ParallaxProvider } from "react-scroll-parallax";

function Parallax(){
        return(
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        );
}

export default Parallax;