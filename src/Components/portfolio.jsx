import React from "react";
import portfolioData from "./portfolioData";
import PortfolioCard from "./folioCard";



export default function Portfolio() {
    const portfoliodata = portfolioData.map(data => {
        return (
            <PortfolioCard
                key={data.id}
                {...data}
            />
        )
    })
    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>I am artistic and dependable but also aim to bring a cheerful and enthusiastic attitude to every project. Bringing strengths in collaboration, critical thinking and communication. Inspired by innovation, I thrive on experimenting with different concepts and have been commended for inspiring and developing unique and thought-provoking ideas. I have cultivated website optimization, programing and usability testing skills through a range of practical experience.</p>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                {/* <li data-filter="*" className="filter-active">All</li> */}
                               
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        {portfoliodata}
                    </div>

                </div>
            </section>
        </>
    )
}