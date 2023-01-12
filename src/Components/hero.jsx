import React from "react";
import Typed from "react-typed"
// import Typed from "typed.js";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';




export default function Hero() {
    
    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Ridwan Alabi</h1>
                    <p>I'm a <Typed
                        strings={[
                            'Developer',
                            'Freelancer',
                            'Engineer']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed></p>
                </div>
            </section>
        </>
    )
}