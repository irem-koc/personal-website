import React, { useContext } from "react";
import "./../styles/Service.css";
import { MouseContext } from "../context/mouse-context";
import { GrFormNextLink } from "react-icons/gr";
const Service = ({ header, title, date, description }) => {
    const { setCursor } = useContext(MouseContext);
    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };
    return (
        <div
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
            className="service"
            id="service"
        >
            <a href="https://www.google.com.tr">
                <div className="service-inner">
                    <div className="service-author-message">
                        <div className="service-wrapper">
                            <div className="service-let">{header}</div>
                            <div className="service-get-in-the">
                                <h1 className="service-get-in">{title}</h1>
                            </div>
                            <div className="service-bottom">{date}</div>
                            <div className="service-current">
                                {description &&
                                    description.substr(0, 70) + "..."}
                            </div>
                            <div className="read-more">
                                <p className="link">
                                    Read More
                                    <span>
                                        <GrFormNextLink />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Service;
