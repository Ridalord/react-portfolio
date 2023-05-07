import React from "react";
// import portfolioData from "./portfolioData";
import PortfolioCard from "./folioCard";
import certData from "./certData";



export default function Certificates() {
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
            {certificatedata}
          </div>

        </div>
      </section>
    </>
  )
}