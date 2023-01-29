import React from "react";
import Skill from "./progressBar";
import skillData from "./skillData";





export default function Skills() {
    const skilldata = skillData.map(data => {
        return (
            <Skill
                key={data.id}
                {...data}
            />
        )
    })
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>I have gained extensive experience in developing and maintaining responsive and user-friendly web applications
                        using technologies such as HTML, CSS, JavaScript, and React.js. I have a strong understanding of front-end development
                        principles and a passion for creating visually appealing and intuitive user experiences.</p>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-12 two-layout" data-aos="fade-up">
                        {skilldata}
                    </div>
                </div>

            </div>
        </section>
    )
}