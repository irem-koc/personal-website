import React, { useContext } from "react";
import "./../styles/Copyright.css";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { MouseContext } from "../context/mouse-context";
const Copyright = () => {
    const { setCursor } = useContext(MouseContext);
    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };
    return (
        <div>
            <div>
                <ul className="icons">
                    <li>
                        <a
                            onMouseEnter={toggleCursor}
                            onMouseLeave={toggleCursor}
                            href="https://github.com/irem-koc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsGithub className="icon" color="#130F49" />
                        </a>
                    </li>

                    <li>
                        <a
                            onMouseEnter={toggleCursor}
                            onMouseLeave={toggleCursor}
                            href="https://www.linkedin.com/in/koc-irem/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GrLinkedinOption
                                className="icon"
                                color="#130F49"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div style={{ color: "#5f5c84", lineHeight: "32px" }}>
                Copyright © 2023 Irem <br /> Koc. All rights reserved.
            </div>
        </div>
    );
};

export default Copyright;
