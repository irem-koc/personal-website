import React from "react";
import "./../styles/Portfolio.css";
import psm from "./../images/product-search-manager.png";
import xox from "./../images/xox-games.png";
import pw from "./../images/personal-website.png";
const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            
            <div className="portfolio_inner">
                <div className="portfolio-author-message">
                    <div className="portfolio-wrapper">
                        <div className="portfolio-let">- PROJECTS</div>
                        <div>
                            <h1 className="portfolio-get-in">
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
                        <div>
                            <h1 className="service-get-in">
                                Product Search Manager
                            </h1>
                        </div>
                    </div>
                    <div className="image-section">
                        <div className="image-div">
                            <img src={xox} className="image" alt="xox cs" />
                        </div>
                        <div>
                            <h1 className="service-get-in">
                                XOX Games Case Study
                            </h1>
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
                        <div>
                            <h1 className="service-get-in">Personal Website</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
