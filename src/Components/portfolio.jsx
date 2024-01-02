import React from "react";
import portfolioData from "./portfolioData";
import PortfolioCard from "./folioCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import classes from "./portfolio.module.css"




export default function Portfolio() {
    const portfoliodata = portfolioData.map(data => {
        return (
            <PortfolioCard
                key={data.id}
                {...data}
            />
        )
    })
    const CustomPrevArrow = ({ onClick, currentSlide }) => (
        <button
            className={`${classes.slickPrev} ${currentSlide === 0 ? classes.hideArrow : ""
                }`}
            onClick={onClick}
        >
            <BsChevronLeft size={20} color="#006D5B" />
        </button>
    );

    const CustomNextArrow = ({ onClick, currentSlide, slideCount }) => (
        <button
            className={`${classes.slickNext} ${currentSlide === slideCount - 3 ? classes.hideArrow : ""
                }`}
            onClick={onClick}
        >
            <BsChevronRight size={20} color="#006D5B" />
        </button>
    );
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Default value
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768, // Breakpoint for mobile view
                settings: {
                    slidesToShow: 1, // Change slidesToShow to 2 on mobile view
                },
            },
        ],
    };
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
                        <Slider {...settings}>
                            {portfoliodata}
                        </Slider>
                    </div>

                </div>
            </section>
        </>
    )
}