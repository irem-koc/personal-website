import React, { useContext } from "react";
import "./../styles/About.css";
import { MouseContext } from "../context/mouse-context";
const About = () => {
    const { setCursor } = useContext(MouseContext);
    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };
    return (
        <div className="about" id="about">
            <div className="about_inner">
                <div className="about-author-message">
                    <div className="about-wrapper">
                        <div className="about-let">- NICE TO MEET YOU!</div>
                        <div>
                            <h1 className="about-first-get-in">Irem Koc</h1>
                            <h2 className="about-second-get-in">
                                Frontend & Software Developer
                            </h2>
                        </div>
                        <div className="about-button">
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                href="#portfolio"
                            >
                                View all projects
                            </a>
                        </div>
                    </div>
                    <div className="text">
                        <div className="text-div">
                            Hello there! My name is
                            <p className="irem-koc"> Irem Koc</p>. I am a web
                            developer, and I'm <br /> very passionate and
                            dedicated to my work.
                            <br /> <br />
                            With 2 years experience as a frontend developer, I
                            have acquired the skills and knowledge necessary to
                            make your project a success. I enjoy every step of
                            the design process, from discussion and
                            collaboration.
                        </div>
                        <div className="bottom-contact">
                            <div className="section">
                                <p className="infos">AGE</p>
                                <a href="#home" className="contact-notes">
                                    21
                                </a>
                            </div>
                            <div className="section">
                                <p className="infos">born in</p>
                                <a href="#home" className="contact-notes">
                                    Istanbul, Turkey
                                </a>
                            </div>
                            <div className="section">
                                <p className="infos">mail</p>
                                <a
                                    href="mailto:kociremx@gmail.com"
                                    className="contact-notes"
                                >
                                    kociremx@gmail.com
                                </a>
                            </div>
                            <div className="section">
                                <p className="infos">phone</p>
                                <a
                                    href="tel:+905539753691"
                                    className="contact-notes"
                                >
                                    +90 553 975 3691
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-section">
                    <div>
                        <div className="box-outter">
                            <div className="box-inner">
                                <h1>3.18</h1>
                                <br /> <span className="attr">GPA</span> 
                            </div>
                        </div>
                        <div className="box-outter">
                            <div className="box-inner">
                                <h1>30+</h1>
                                <br /> <span className="attr">PROJECTS COMPLETED</span>
                            </div>
                        </div>
                        <div className="box-outter">
                            <div className="box-inner">
                                <h1>1.5+</h1>
                                <br /> <span className="attr">YEARS OF EXPERIENCE</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
