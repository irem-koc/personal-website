import React, { useContext } from "react";
import image from "./../images/logo.png";
import "./../styles/LeftSection.css";
import Copyright from "./Copyright";
import { MouseContext } from "../context/mouse-context";
const LeftSection = () => {
    const { active, setActive } = useContext(MouseContext);
    const { setCursor } = useContext(MouseContext);
    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };
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
                        <li>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                className={"#home" === active ? "active" : ""}
                                href="#home"
                                onClick={() => setActive("#home")}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                className={"#about" === active ? "active" : ""}
                                href="#about"
                                onClick={() => setActive("#about")}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                className={
                                    "#services" === active ? "active" : ""
                                }
                                href="#services"
                                onClick={() => setActive("#services")}
                            >
                                Experiences
                            </a>
                        </li>
                        <li>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                className={
                                    "#portfolio" === active ? "active" : ""
                                }
                                href="#portfolio"
                                onClick={() => setActive("#portfolio")}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                className={
                                    "#contact" === active ? "active" : ""
                                }
                                href="#contact"
                                onClick={() => setActive("#contact")}
                            >
                                Contact
                            </a>
                        </li>
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
