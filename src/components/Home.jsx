import React, { useEffect } from "react";
import "./../styles/Home.css";
import image from "./../images/image.jpeg";
import TextTransition, { presets } from "react-text-transition";
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
    return (
        <div className="home">
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
                        <button>Go to projects</button>
                        <button>Let's talk</button>
                    </div>
                    <div className="contact-infos">
                        <div>
                            <a href="tel:+905539753691">+90 553 975 3691</a>
                        </div>
                        <div>
                            <a href="mailto:kociremx@gmail.com">
                                kociremx@gmail.com
                            </a>
                        </div>
                        <div>
                            <a href="#a">Beylikduzu,Istanbul</a>
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
