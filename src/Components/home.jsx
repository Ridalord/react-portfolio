import React from "react";
// import { Route } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Skills from "./skills";


export default function Home() {
    return (
        <>
            <Hero />
            <main id="main">
                <About />
                <Skills />
                <Resume />
                <Portfolio/>
                <Contact/>
            </main>
        </>
    )
}