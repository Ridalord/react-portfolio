import React from "react";
import Typed from "react-typed"
// import { FadeIn } from 'react-fade-in';
import FadeIn from 'react-fade-in'




export default function Hero() {

    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <FadeIn className="hero-container" duration={2000} direction= "right">
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
                </FadeIn>
            </section>
        </>
    )
}