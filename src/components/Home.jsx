import React, { useContext, useEffect } from "react";
import "./../styles/Home.css";
import image from "./../images/image.jpeg";
import TextTransition, { presets } from "react-text-transition";
import { MouseContext } from "../context/mouse-context";
const Home = () => {
    const TEXTS = ["Developer", "Engineer", "Coder"];
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    const { setCursor } = useContext(MouseContext);
    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };
    return (
        <div className="home" id="home">
            <div className="home_inner">
                <div className="home-left-section">
                    <h1>
                        Hi, I'm <span style={{ color: "#A5A6FF" }}>Irem!</span>{" "}
                        <br />
                        Creative{" "}
                        <TextTransition
                            direction="down"
                            inline={true}
                            translateValue="80%"
                            springConfig={presets.default}
                        >
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition>{" "}
                        <br />
                        Based in Istanbul
                    </h1>
                    <span>
                        I'm a Istanbul based web designer & front‑end <br />{" "}
                        developer with 2+ years of experience
                    </span>
                    <div className="buttons">
                        <a
                            onMouseEnter={toggleCursor}
                            onMouseLeave={toggleCursor}
                            href="#portfolio"
                        >
                            Go to projects
                        </a>
                        <a
                            onMouseEnter={toggleCursor}
                            onMouseLeave={toggleCursor}
                            href="#contact"
                        >
                            Let's talk
                        </a>
                    </div>
                    <div className="contact-infos">
                        <div>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                href="tel:+905539753691"
                            >
                                +90 553 975 3691
                            </a>
                        </div>
                        <div>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                href="mailto:kociremx@gmail.com"
                            >
                                kociremx@gmail.com
                            </a>
                        </div>
                        <div>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                href="#a"
                            >
                                Beylikduzu,Istanbul
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home-right-section">
                    <img src={image} alt="irem" />
                </div>
            </div>
        </div>
    );
};

export default Home;
