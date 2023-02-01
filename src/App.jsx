import React from "react"; 
// import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/home";
import Footer from "./Components/footer";
import 'bootstrap/dist/css/bootstrap.css';

import "./style.css"
// import Details from "./Components/folioDetails";







export default function App() {
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    return (
        <>
            <Header />
            <Home /> 
            <Footer/>
            <a href="#hero" details="Back to top" className="back-to-top d-flex align-items-center justify-content-center"><img src="https://img.icons8.com/fluency/48/null/up.png" alt="Go to top" /></a>
        </>
    )
}
