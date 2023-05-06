import React from "react";
// import Avi from "../img/profile-img1.jpeg"
import FadeIn from 'react-fade-in'



export default function About() {
    // const [delay, setDelay] = useState(0);
    // const ref = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setDelay(1000);
    //             } else {
    //                 setDelay(0);
    //             }
    //         });
    //     });
    //     observer.observe(ref.current);

    //     return () => {
    //         observer.unobserve(ref.current);
    //     };
    // }, []);

    
    return (
        <>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>I'm a graduate of Federal University of Technology Minna where I was certified a Bachelor of Enginnering in
                            Electrical/Electronics engineering. Inspired by innovation, I thrive on experimenting with different concepts and have been commended for inspiring and
                            developing unique and thought-provoking ideas. I have cultivated website optimization, programing and usability testing
                            skills through a range of practical experience. These strengths, combined with my passion for the industry have created
                            a strong foundation to meet the needs of the organization. I strive to contribute to an energetic and team-driven work
                            culture.
                        </p>
                    </div>

                    <div className="row">
                        
                        <FadeIn direction="right"  className="col-lg-4" >
                            <img src="https://i.ibb.co/jZ79tgM/profile-img1.jpg" className="img-fluid shadow" alt="Ridwan Alabi" />
                        </FadeIn>
                    
                        <FadeIn direction="left" className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Frontend Web Developer.</h3>
                            <p className="fst-italic">
                                I am a strong collaborator and communicator, with the ability to work effectively with cross-functional teams
                                and translate business requirements into functional solutions. I am also constantly seeking to learn and stay up-to-date
                                with the latest developments in the front-end development field.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>May 22nd</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+234 813 2246 772</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lagos, Nigeria</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li> */}
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Eng.</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ridhwan.alabi@gmail.com</span></li>
                                        {/* <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> */}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                
            </section>
        </>
    )
}
