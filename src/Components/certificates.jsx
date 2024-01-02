import React from "react";
// import portfolioData from "./portfolioData";
import PortfolioCard from "./folioCard";
import certData from "./certData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import classes from "./portfolio.module.css"



export default function Certificates() {
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

  const certificatedata = certData.map(data => {
    return (
      <PortfolioCard
        key={data.id}
        {...data}
      />
    )
  })
  return (
    <>
      <section id="certificates" className="portfolio section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Certifications</h2>
            <p>Obtaining relevant certifications has been an integral part of my professional development journey. These certifications represent my commitment to expanding my knowledge, honing my skills, and staying updated with the latest industry practices. They serve as a testament to my dedication to continuous learning and my passion for delivering high-quality work. Each certification I have earned demonstrates my proficiency in specific areas and validates my expertise in the respective domains. I am proud to have acquired these certifications, as they not only enhance my qualifications but also provide assurance to clients and employers about my competence and capability to excel in the field.</p>
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
              {certificatedata}
            </Slider>
          </div>

        </div>
      </section>
    </>
  )
}