import React from "react";
import image from "./../images/logo.png";
import "./../styles/LeftSection.css";
import Copyright from "./Copyright";
const LeftSection = () => {
    return (
        <div className="left-sec">
            <div className="left-section">
                <div className="author">
                    <img className="irem-photo" src={image} alt="irem" />
                    <div>
                        <span className="big-irem">
                            Irem KOC{" "}
                            <span className="small-irem">Irem KOC</span>
                        </span>
                    </div>
                </div>
                <div className="sections-filter">
                    <ul className="left-menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="copyright">
                    <Copyright />
                </div>
            </div>
        </div>
    );
};

export default LeftSection;
