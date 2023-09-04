import React, { useContext } from "react";
import "./../styles/Portfolio.css";
import psm from "./../images/product-search-manager.png";
import xox from "./../images/xox-games.png";
import pw from "./../images/personal-website.png";
import { GrFormNextLink } from "react-icons/gr";
import { MouseContext } from "../context/mouse-context";
const Portfolio = () => {
    const { setCursor } = useContext(MouseContext);
    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio_inner">
                <div className="portfolio-author-message">
                    <div className="portfolio-wrapper">
                        <div className="portfolio-let">- PROJECTS</div>
                        <div>
                            <h1 className="portfolio-first-get-in">
                                Recent completed works
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="images-section">
                    <div className="image-section">
                        <div className="image-div">
                            <img
                                src={psm}
                                className="image"
                                alt="product search manager"
                            />
                        </div>
                        <div className="image-bottom-section">
                            <h1 className="portfolio-get-in">
                                Product Search Manager
                            </h1>

                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                href="https://github.com/irem-koc/product-search-manager"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Go to Github repository{" "}
                                <span>
                                    <GrFormNextLink size={30} className="arrow" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="image-section">
                        <div className="image-div">
                            <img src={xox} className="image" alt="xox cs" />
                        </div>
                        <div className="image-bottom-section">
                            <h1 className="portfolio-get-in">
                                XOX Games Case Study
                            </h1>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                href="https://github.com/irem-koc/xox_games_cs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Go to Github repository{" "}
                                <span>
                                    <GrFormNextLink size={30} className="arrow"  />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="image-section">
                        <div className="image-div">
                            <img
                                src={pw}
                                className="image"
                                alt="personal website"
                            />
                        </div>
                        <div className="image-bottom-section">
                            <h1 className="portfolio-get-in">
                                Personal Website
                            </h1>
                            <a
                                onMouseEnter={toggleCursor}
                                onMouseLeave={toggleCursor}
                                href="https://github.com/irem-koc/personal-website"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Go to Github repository{" "}
                                <span>
                                    <GrFormNextLink size={30} className="arrow" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="button">
                        <a
                            onMouseEnter={toggleCursor}
                            onMouseLeave={toggleCursor}
                            href="https://github.com/irem-koc"
                        >
                            View all projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
