import React from "react";
import "./../styles/Content.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";
const Content = () => {
    return (
        <div>
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Content;
