import React from "react";
// import { Link } from "react-router-dom"



export default function PortfolioCard(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap border-radius">
                    <img src={props.imgUrl} className="img-fluid" alt={props.name} />
                    <div className="portfolio-links">
                        <a href={props.link} rel="noopener noreferrer" target="_blank" title="Go to site"><i className="bx bi-link"></i></a>
                    </div>
                </div>
                <h5 className="text-center bold-text">{props.name}</h5>
            </div>
        </>
    )
}