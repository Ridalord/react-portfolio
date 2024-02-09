import React from "react";
import ResumeFile from '../img/webdevresume.pdf';





export default function Resume() {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = ResumeFile;
        link.download = 'Alabi-Ridwan-Resume.pdf'; 
        link.click();
    };
    return (
        <>
            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>I like to study new things. Being knowledgeable about software development or any subject is an ongoing process,and I'm
                            always proactive about seeking new opportunities to develop and grow in my role. Those opportunities could be in the form
                            of training, a conference, listening to a speaker, or taking on a new project, but the motivationis to increase my
                            knowledge of the field. Eager to collaborate with customers to find optimal solutions carefully customizing each product
                            to user needs and budgets. Provides reliably actionable code and software assets forcustomers and internal data
                            libraries.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Ridwan Alabi</h4>
                                <p><em>Innovative and deadline-driven web developer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <ul>
                                    <li>23, Ajayi Street, Ojo, Lagos State, Nigeria.</li>
                                    <li>(+234) 813-2246-772</li>
                                    <li>ridhwan.alabi@gmail.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>

                            <div className="resume-item">
                                <h4>Electrical &amp; Electronics Engineering (B.Eng.)</h4>
                                <h5>2015 - 2021</h5>
                                <p><em>Federal University of Technology Minna, Niger State.</em></p>
                                <p>I earned my B.Eng in Electrical Electronics Engineering from the Federal University of Technology Minna. Throughout my academic journey, I demonstrated a strong commitment to learning.I gained practical experience by participating in various engineering projects, including designing and implementation of an LPG leakage and smoke detection alarm system with wide range of mobile notification and auto power supply cut-off. Additionally, I actively participated in extracurricular activities, honing my teamwork, communication, and leadership skills. I am now equipped with a solid theoretical foundation, hands-on experience, and the drive to apply my knowledge to make significant contributions in the field of engineering.</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Frontend Developer</h4>
                                <h5>08/2023 - Date</h5>
                                <p><em>Shoppleverse, Nigeria</em></p>
                                <ul>
                                    <li>
                                        Spearheaded the development and maintenance of Shoppleverse, a cutting-edge Web3 ecommerce startup.
                                    </li>
                                    <li>
                                        Utilized React and Next.js to craft responsive, visually captivating, and user-friendly websites. Developed robust components to enhance the overall user experience.
                                    </li>
                                    <li>
                                        Collaborated closely with cross-functional teams, optimizing website performance, user experience, and SEO to meet the evolving demands of the ecommerce landscape.
                                    </li>
                                    <li>
                                        Optimized applications for maximum speed.
                                    </li>
                                    <li>
                                        Collaborated with back-end developers and web designers to improve usability.
                                    </li>
                                    <li>
                                        Wrote functional requirement documents and guides.
                                    </li>
                                    <li>
                                        Created quality mockups and prototypes.
                                    </li>
                                    <li>
                                        Helped back-end developers with coding and troubleshooting.
                                    </li>
                                    <li>
                                        Ensured high-quality graphic standards and brand consistency.
                                    </li>
                                    <li>
                                        Engineered and implemented a Firebase-based database for product management, demonstrating proficiency in backend functionalities.
                                    </li>
                                    <li>
                                        Contributed to the continuous improvement of the platform's frontend, adapting to emerging technologies and industry best practices.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Web Developer</h4>
                                <h5>02/2023 - 07/2023</h5>
                                <p><em>Removals and Selfstorage Limited, United Kingdon</em></p>
                                <ul>
                                    <li>
                                        Collaborated with the design team to create a visually appealing and user-friendly website design.
                                    </li>
                                    <li>
                                        Developed website layout and functionality using HTML, CSS, and JavaScript.
                                    </li>
                                    <li>
                                        Integrated Firebase into the website for real-time data storage and management.
                                    </li>
                                    <li>
                                        Built web applications with web development best practices.
                                    </li>
                                    <li>
                                        Transformed app designs into front-end code with HTML, CSS, and JavaScript.
                                    </li>
                                    <li>
                                        Worked with back-end developers to integrate UI components with APIs and databases.
                                    </li>
                                    <li>
                                        Gathered and refined specifications and requirements based on technical requirements or UX design.
                                    </li>
                                    <li>
                                        Debugged errors, troubleshooted issues, and performed routine performance optimizations.
                                    </li>
                                    <li>
                                        Wrote high-quality, scalable, and reusable code.
                                    </li>
                                    <li>
                                        Stayed plugged into emerging technologies and industry trends.
                                    </li>
                                    <li>
                                        Implemented booking functionality that allows customers to select a date and time for their move.
                                    </li>
                                    <li>
                                        Developed an intuitive user interface for customers to select their move details and receive a quote.
                                    </li>
                                    <li>
                                        Continuously monitored and improved website performance and user experience.
                                    </li>
                                    <li>
                                        Maintained website security and data privacy.
                                    </li>
                                    <li>
                                        Troubleshooted and debugged website issues.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Junior Frontend Developer</h4>
                                <h5>11/2021-02/2023</h5>
                                <p><em>Outsource Global Tech Nig. Ltd.</em></p>
                                <ul>
                                    <li>
                                        Installed and configured both software and hardware components, ensuring optimal performance for development tasks.
                                    </li>
                                    <li>
                                        Collaborated effectively with fellow developers, participating in team projects to achieve shared goals and deadlines.
                                    </li>
                                    <li>
                                        Completed assigned tasks with precision and diligence, contributing to the overall success of the development team.
                                    </li>
                                    <li>
                                        Regularly attended stand-up meetings to discuss progress, challenges, and strategize with the team for improved workflow.
                                    </li>
                                    <li>
                                        Demonstrated proficiency in a diverse technology stack, including:
                                        <ul>
                                            <li>HTML, CSS, JavaScript for front-end development.</li>
                                            <li>React for building responsive and interactive user interfaces.</li>
                                            <li>WordPress for content management system (CMS) tasks.</li>
                                            <li>Express.js and Node.js for back-end development.</li>
                                            <li>Programming language for specific development needs.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Successfully obtained a Certificate of Completion, recognizing my commitment and accomplishments in fulfilling assigned tasks.
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="resume-item">
                                <h4>IT Support</h4>
                                <h5>09/2022 - 10/2022</h5>
                                <p><em>Dangote Refineries, Ibeju-Lekki, Lagos</em></p>
                                <ul>
                                    <li>Installed a new migration tool and harmonized email folders.</li>
                                    <li>Multitasked among client’s PC to optimize time.</li>
                                    <li>Interacted and communicated with clients to ease the task.</li>
                                    <li>Supported 500+ clients on their PCs to migrate OST files to newly created M365 accounts.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Engineer Intern</h4>
                                <h5>08/2019 - 12/2019</h5>
                                <p><em>Joe-Akins Computers Technologies Limited, Surulere, Lagos </em></p>
                                <ul>
                                    <li>Researched and reviewed information in support of daily objectives</li>
                                    <li>Analyzed system faults and worked with the technical staff to develop solutions. </li>
                                    <li>Due to my hands-on support, the time of repair and installation of systems were optimized.</li>
                                    <li>Assisted with repairs by applying strong analytical skills and studies.</li>
                                    <li>Connected with the clients, communicating to the best of their understanding.</li>
                                    <li>Communicated effectively with faculty and staff and accepted critiques and suggestions for areas of improvement.</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="text-center"><button className="resume-button" type="submit" onClick={downloadResume}>Get Resume</button></div>
                </div>
            </section>
        </>
    )
}